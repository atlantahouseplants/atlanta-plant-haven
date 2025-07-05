
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import ChatMessage from './ChatMessage';
import { Message } from './types';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm here to help you with any questions about our plant services. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
          <div className="bg-white rounded-lg chat-widget-shadow w-80 h-96 flex flex-col">
            {/* Header */}
            <div className="bg-green-600 text-white p-4 rounded-t-lg flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Plant Help Assistant</h3>
                <p className="text-sm opacity-90">Ask me anything!</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
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
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatWidget;
