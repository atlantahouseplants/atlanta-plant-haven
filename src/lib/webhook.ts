// Webhook handler for receiving responses from Make.com
export interface WebhookResponse {
  sessionId: string;
  response?: string;
  timestamp: string;
  // Handle the actual Make.com structure
  result?: any;
  content?: any;
  message?: string;
  // Handle nested message structures
  [key: string]: any;
}

// Store for managing chat sessions and pending responses
class ChatSessionManager {
  private sessions = new Map<string, (response: string) => void>();
  private static instance: ChatSessionManager;

  static getInstance(): ChatSessionManager {
    if (!ChatSessionManager.instance) {
      ChatSessionManager.instance = new ChatSessionManager();
    }
    return ChatSessionManager.instance;
  }

  // Register a callback for when a response comes back
  registerSession(sessionId: string, callback: (response: string) => void) {
    this.sessions.set(sessionId, callback);
    
    // Clean up after 30 seconds if no response
    setTimeout(() => {
      if (this.sessions.has(sessionId)) {
        this.sessions.delete(sessionId);
        callback("I apologize, but I'm having trouble responding right now. Please try again or contact us directly at (770) 123-4567.");
      }
    }, 30000);
  }

  // Handle incoming webhook response
  handleWebhookResponse(data: WebhookResponse) {
    const callback = this.sessions.get(data.sessionId);
    if (callback) {
      // Extract the actual message from the complex Make.com structure
      let message = this.extractMessage(data);
      callback(message);
      this.sessions.delete(data.sessionId);
    }
  }

  // Extract message from various possible Make.com response structures
  private extractMessage(data: WebhookResponse): string {
    console.log('Received webhook data:', data);
    
    // Try different possible paths for the message
    let message = '';
    
    // Direct response field
    if (data.response) {
      message = data.response;
    }
    // Direct message field
    else if (data.message) {
      message = data.message;
    }
    // Check if result contains a message object
    else if (data.result) {
      if (typeof data.result === 'string') {
        try {
          const parsed = JSON.parse(data.result);
          if (parsed.message) {
            message = parsed.message;
          }
        } catch (e) {
          message = data.result;
        }
      } else if (data.result.message) {
        message = data.result.message;
      }
    }
    // Check content field
    else if (data.content) {
      if (Array.isArray(data.content) && data.content.length > 0) {
        const firstContent = data.content[0];
        if (firstContent.text && firstContent.text.value) {
          if (typeof firstContent.text.value === 'string') {
            try {
              const parsed = JSON.parse(firstContent.text.value);
              if (parsed.message) {
                message = parsed.message;
              }
            } catch (e) {
              message = firstContent.text.value;
            }
          } else if (firstContent.text.value.message) {
            message = firstContent.text.value.message;
          }
        }
      }
    }
    
    // Fallback: try to find any field that looks like a message
    if (!message) {
      const searchForMessage = (obj: any): string => {
        if (typeof obj === 'string') {
          // Check if it's a JSON string containing a message
          try {
            const parsed = JSON.parse(obj);
            if (parsed.message) return parsed.message;
          } catch (e) {
            // If it contains plant-related content, it might be the message
            if (obj.toLowerCase().includes('plant') || obj.toLowerCase().includes('atlanta')) {
              return obj;
            }
          }
          return obj;
        }
        if (typeof obj === 'object' && obj !== null) {
          if (obj.message) return obj.message;
          for (const key in obj) {
            const result = searchForMessage(obj[key]);
            if (result) return result;
          }
        }
        return '';
      };
      
      message = searchForMessage(data);
    }
    
    // Final fallback
    if (!message) {
      message = "I apologize, but I'm having trouble responding right now. Please try again or contact us directly at (770) 123-4567.";
    }
    
    console.log('Extracted message:', message);
    return message;
  }

  // Remove session (cleanup)
  removeSession(sessionId: string) {
    this.sessions.delete(sessionId);
  }
}

export const chatSessionManager = ChatSessionManager.getInstance();

// Function to handle incoming webhook from Make.com
export const handleIncomingWebhook = (data: WebhookResponse) => {
  chatSessionManager.handleWebhookResponse(data);
};
