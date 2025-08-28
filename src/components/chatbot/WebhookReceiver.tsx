import { useEffect } from 'react';
import { handleIncomingWebhook, WebhookResponse } from '../../lib/webhook';

const WebhookReceiver = () => {
  useEffect(() => {
    // Create a global function that Make.com can call
    (window as any).receiveChatResponse = (data: WebhookResponse) => {
      console.log('Received webhook response:', data);
      handleIncomingWebhook(data);
    };

    // Cleanup function
    return () => {
      delete (window as any).receiveChatResponse;
    };
  }, []);

  return null; // This component doesn't render anything
};

export default WebhookReceiver;
