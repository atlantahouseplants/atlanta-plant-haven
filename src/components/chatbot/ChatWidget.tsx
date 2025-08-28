
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import ChatMessage from './ChatMessage';
import { Message } from './types';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId] = useState(() => `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const [messages, setMessages] = useState<Message[]>(() => {
    // Try to load existing conversation from localStorage
    const savedMessages = localStorage.getItem(`chat_session_${sessionId}`);
    if (savedMessages) {
      return JSON.parse(savedMessages);
    }
    return [
      {
        id: '1',
        text: "Hi! I'm here to help you with any questions about our plant services. How can I assist you today?",
        isBot: true,
        timestamp: new Date(),
      },
    ];
  });
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });
  const [transcriptSent, setTranscriptSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Save conversation to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem(`chat_session_${sessionId}`, JSON.stringify(messages));
    
    // Also save session metadata
    const sessionData = {
      sessionId,
      startTime: messages[0]?.timestamp || new Date(),
      lastActivity: new Date(),
      messageCount: messages.length
    };
    localStorage.setItem(`chat_meta_${sessionId}`, JSON.stringify(sessionData));
  }, [messages, sessionId]);

  const getChatTranscript = () => {
    return messages.map(msg => 
      `${msg.isBot ? 'Bot' : 'User'} (${msg.timestamp.toLocaleTimeString()}): ${msg.text}`
    ).join('\n');
  };

  const sendTranscriptToWebhook = async (reason: string = 'session_ended') => {
    // Only send transcript if there are actual user messages and we haven't sent it already
    if (transcriptSent || messages.length <= 1) return;
    
    try {
      const transcript = getChatTranscript();
      const response = await fetch('https://hook.us1.make.com/ne1lkcja68ltmand16j66614cup1gjej', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'chat_transcript',
          sessionId,
          chatTranscript: transcript,
          endReason: reason,
          messageCount: messages.length,
          sessionDuration: new Date().getTime() - new Date(messages[0]?.timestamp || new Date()).getTime(),
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setTranscriptSent(true);
        console.log('Chat transcript sent successfully');
      }
    } catch (error) {
      console.error('Error sending chat transcript:', error);
    }
  };

  // Handle chat close and send transcript
  const handleCloseChat = () => {
    sendTranscriptToWebhook('user_closed_chat');
    setIsOpen(false);
  };

  // Set up inactivity timer
  const resetInactivityTimer = () => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    
    // Send transcript after 5 minutes of inactivity
    inactivityTimerRef.current = setTimeout(() => {
      sendTranscriptToWebhook('inactivity_timeout');
    }, 5 * 60 * 1000);
  };

  // Reset timer on new messages
  useEffect(() => {
    if (messages.length > 1) {
      resetInactivityTimer();
    }
    
    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, [messages]);

  // Send transcript when component unmounts
  useEffect(() => {
    return () => {
      if (messages.length > 1 && !transcriptSent) {
        sendTranscriptToWebhook('page_unload');
      }
    };
  }, []);

  const sendContactRequest = async () => {
    if (!contactInfo.name || !contactInfo.email) {
      alert('Please fill in your name and email.');
      return;
    }

    try {
      const transcript = getChatTranscript();
      const response = await fetch('https://hook.us1.make.com/ne1lkcja68ltmand16j66614cup1gjej', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact_request',
          sessionId,
          name: contactInfo.name,
          email: contactInfo.email,
          phone: contactInfo.phone,
          chatTranscript: transcript,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setShowContactForm(false);
        setContactInfo({ name: '', email: '', phone: '' });
        
        const confirmMessage: Message = {
          id: (Date.now() + 2).toString(),
          text: "Thank you! I've recorded your contact information and our conversation. Someone from our team will reach out to you soon!",
          isBot: true,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, confirmMessage]);
      }
    } catch (error) {
      console.error('Error sending contact request:', error);
      alert('Sorry, there was an error submitting your request. Please try again.');
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('https://hook.us1.make.com/cpweuqa2uji7hpytowfctwgszbsflf8t', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputText,
          timestamp: new Date().toISOString(),
          sessionId: `session_${Date.now()}`,
        }),
      });

      const data = await response.json();
      
      // Extract message from webhook response - handles nested JSON structure
      let responseText = "I apologize, but I'm having trouble responding right now. Please try again or contact us directly at (770) 123-4567.";
      
      if (data.message) {
        responseText = data.message;
      } else if (data.response) {
        responseText = data.response;
      } else if (data.text) {
        responseText = data.text;
      } else if (typeof data === 'string') {
        responseText = data;
      }
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please try again or call us at (770) 123-4567.",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <style>
        {`
          .chat-widget-shadow {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          }
          .chat-bubble {
            animation: bounce 0.3s ease-out;
          }
          @keyframes bounce {
            0% { transform: scale(0.8); opacity: 0; }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
      
      <div className="fixed bottom-4 right-4 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="chat-bubble bg-green-600 hover:bg-green-700 text-white rounded-full p-4 chat-widget-shadow transition-all duration-300 hover:scale-110"
            aria-label="Open chat"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        )}

        {isOpen && (
          <div className="bg-white rounded-lg chat-widget-shadow w-80 sm:w-80 w-72 h-96 flex flex-col">
            {/* Header */}
            <div className="bg-green-600 text-white p-4 rounded-t-lg flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Nick's Plant Assistant</h3>
                <p className="text-sm opacity-90">Get expert plant advice instantly!</p>
              </div>
              <button
                onClick={handleCloseChat}
                className="hover:bg-green-700 p-1 rounded"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              
              {/* Request Contact Button */}
              {!showContactForm && messages.length > 1 && (
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    📞 Request Contact
                  </button>
                </div>
              )}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              {showContactForm ? (
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-gray-700">Request Contact</h4>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email *"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone (optional)"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <div className="flex space-x-2">
                    <button
                      onClick={sendContactRequest}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 text-sm transition-colors"
                    >
                      Send Request
                    </button>
                    <button
                      onClick={() => setShowContactForm(false)}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg py-2 text-sm transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() || isLoading}
                    className="bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white rounded-lg p-2 transition-colors"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatWidget;
