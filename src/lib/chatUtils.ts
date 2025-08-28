// Utility functions for chat conversation logging and retrieval

export interface ChatSession {
  sessionId: string;
  startTime: Date;
  lastActivity: Date;
  messageCount: number;
}

export interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

/**
 * Get all active chat sessions from localStorage
 */
export const getActiveChatSessions = (): ChatSession[] => {
  const sessions: ChatSession[] = [];
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith('chat_meta_')) {
      try {
        const sessionData = JSON.parse(localStorage.getItem(key) || '{}');
        sessions.push({
          ...sessionData,
          startTime: new Date(sessionData.startTime),
          lastActivity: new Date(sessionData.lastActivity)
        });
      } catch (error) {
        console.error('Error parsing session data:', error);
      }
    }
  }
  
  return sessions.sort((a, b) => b.lastActivity.getTime() - a.lastActivity.getTime());
};

/**
 * Get the most recent chat session
 */
export const getMostRecentChatSession = (): ChatSession | null => {
  const sessions = getActiveChatSessions();
  return sessions.length > 0 ? sessions[0] : null;
};

/**
 * Get chat transcript for a specific session
 */
export const getChatTranscript = (sessionId: string): string => {
  const messages = localStorage.getItem(`chat_session_${sessionId}`);
  if (!messages) return '';
  
  try {
    const parsedMessages: ChatMessage[] = JSON.parse(messages);
    return parsedMessages.map(msg => 
      `${msg.isBot ? 'Bot' : 'User'} (${new Date(msg.timestamp).toLocaleTimeString()}): ${msg.text}`
    ).join('\n');
  } catch (error) {
    console.error('Error parsing chat messages:', error);
    return '';
  }
};

/**
 * Get the most recent chat transcript (for form submissions)
 */
export const getMostRecentChatTranscript = (): string => {
  const recentSession = getMostRecentChatSession();
  if (!recentSession) return '';
  
  return getChatTranscript(recentSession.sessionId);
};

/**
 * Check if there's been recent chat activity (within last 30 minutes)
 */
export const hasRecentChatActivity = (): boolean => {
  const recentSession = getMostRecentChatSession();
  if (!recentSession) return false;
  
  const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);
  return recentSession.lastActivity > thirtyMinutesAgo;
};

/**
 * Clean up old chat sessions (older than 24 hours)
 */
export const cleanupOldChatSessions = (): void => {
  const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const sessions = getActiveChatSessions();
  
  sessions.forEach(session => {
    if (session.lastActivity < twentyFourHoursAgo) {
      localStorage.removeItem(`chat_session_${session.sessionId}`);
      localStorage.removeItem(`chat_meta_${session.sessionId}`);
    }
  });
};