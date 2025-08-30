import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Webhook, CheckCircle, AlertCircle, Activity, 
  Mail, MousePointer, TrendingUp, Database 
} from "lucide-react";

interface WebhookEvent {
  eventId: string;
  eventType: 'email_sent' | 'email_delivered' | 'email_opened' | 'email_clicked' | 'email_converted' | 'email_bounced' | 'email_unsubscribed';
  timestamp: string;
  emailId: string;
  sequenceId: string;
  contactId: string;
  emailAddress: string;
  deviceType?: string;
  location?: string;
  linkClicked?: string;
  conversionAction?: string;
  leadScore?: number;
  segmentTags?: string[];
}

interface EmailWebhookHandlerProps {
  onEventReceived?: (event: WebhookEvent) => void;
  className?: string;
}

const EmailWebhookHandler: React.FC<EmailWebhookHandlerProps> = ({ 
  onEventReceived,
  className = "" 
}) => {
  const [recentEvents, setRecentEvents] = useState<WebhookEvent[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [eventCounts, setEventCounts] = useState({
    sent: 0,
    delivered: 0,
    opened: 0,
    clicked: 0,
    converted: 0,
    bounced: 0,
    unsubscribed: 0
  });

  // Webhook endpoint handler
  const handleWebhookEvent = (event: WebhookEvent) => {
    // Add to recent events (keep last 50)
    setRecentEvents(prev => [event, ...prev].slice(0, 50));
    
    // Update event counts
    setEventCounts(prev => ({
      ...prev,
      [event.eventType.replace('email_', '')]: prev[event.eventType.replace('email_', '') as keyof typeof prev] + 1
    }));
    
    // Call parent callback if provided
    if (onEventReceived) {
      onEventReceived(event);
    }
    
    // Store in localStorage for persistence
    const storedEvents = JSON.parse(localStorage.getItem('emailWebhookEvents') || '[]');
    const updatedEvents = [event, ...storedEvents].slice(0, 100);
    localStorage.setItem('emailWebhookEvents', JSON.stringify(updatedEvents));
  };

  // Load stored events on component mount
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('emailWebhookEvents') || '[]');
    if (storedEvents.length > 0) {
      setRecentEvents(storedEvents.slice(0, 50));
      
      // Calculate event counts from stored data
      const counts = storedEvents.reduce((acc: any, event: WebhookEvent) => {
        const eventType = event.eventType.replace('email_', '');
        acc[eventType] = (acc[eventType] || 0) + 1;
        return acc;
      }, {});
      
      setEventCounts(prevCounts => ({ ...prevCounts, ...counts }));
    }
    
    // Set connection status (in production, this would check actual webhook health)
    setIsConnected(true);
  }, []);

  // Mock event generator for demonstration
  const generateMockEvent = () => {
    const eventTypes: WebhookEvent['eventType'][] = [
      'email_opened', 'email_clicked', 'email_converted', 'email_delivered'
    ];
    
    const mockEvent: WebhookEvent = {
      eventId: `evt_${Date.now()}`,
      eventType: eventTypes[Math.floor(Math.random() * eventTypes.length)],
      timestamp: new Date().toISOString(),
      emailId: `roi-calc-00${Math.floor(Math.random() * 3) + 1}`,
      sequenceId: 'roi-calculator-sequence',
      contactId: `contact_${Math.floor(Math.random() * 1000)}`,
      emailAddress: `user${Math.floor(Math.random() * 100)}@company.com`,
      deviceType: Math.random() > 0.5 ? 'desktop' : 'mobile',
      location: 'Atlanta, GA',
      leadScore: Math.floor(Math.random() * 50) + 50,
      segmentTags: ['enterprise', 'roi-focused']
    };
    
    handleWebhookEvent(mockEvent);
  };

  const getEventIcon = (eventType: string) => {
    switch (eventType) {
      case 'email_sent':
      case 'email_delivered':
        return Mail;
      case 'email_opened':
        return Activity;
      case 'email_clicked':
        return MousePointer;
      case 'email_converted':
        return TrendingUp;
      case 'email_bounced':
      case 'email_unsubscribed':
        return AlertCircle;
      default:
        return CheckCircle;
    }
  };

  const getEventColor = (eventType: string) => {
    switch (eventType) {
      case 'email_sent':
        return 'text-blue-600';
      case 'email_delivered':
        return 'text-green-600';
      case 'email_opened':
        return 'text-purple-600';
      case 'email_clicked':
        return 'text-orange-600';
      case 'email_converted':
        return 'text-emerald-600';
      case 'email_bounced':
      case 'email_unsubscribed':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const formatEventType = (eventType: string) => {
    return eventType
      .replace('email_', '')
      .replace('_', ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Connection Status & Controls */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Webhook className="h-6 w-6 mr-3 text-blue-600" />
              <div>
                <CardTitle>Email Event Webhook</CardTitle>
                <p className="text-sm text-gray-600 mt-1">
                  Real-time email engagement tracking from Make.com
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge 
                variant={isConnected ? "default" : "destructive"}
                className={isConnected ? "bg-green-100 text-green-800" : ""}
              >
                <div className={`w-2 h-2 rounded-full mr-2 ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
                {isConnected ? 'Connected' : 'Disconnected'}
              </Badge>
              <Button 
                size="sm" 
                onClick={generateMockEvent}
                variant="outline"
              >
                Test Event
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{eventCounts.sent}</div>
              <div className="text-xs text-gray-500">Sent</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{eventCounts.delivered}</div>
              <div className="text-xs text-gray-500">Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{eventCounts.opened}</div>
              <div className="text-xs text-gray-500">Opened</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{eventCounts.clicked}</div>
              <div className="text-xs text-gray-500">Clicked</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{eventCounts.converted}</div>
              <div className="text-xs text-gray-500">Converted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{eventCounts.bounced}</div>
              <div className="text-xs text-gray-500">Bounced</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">{eventCounts.unsubscribed}</div>
              <div className="text-xs text-gray-500">Unsubscribed</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Events Feed */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Email Events</CardTitle>
            <Badge variant="outline">
              {recentEvents.length} events
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {recentEvents.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Database className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No events received yet</p>
                <p className="text-sm">Events will appear here as they happen</p>
              </div>
            ) : (
              recentEvents.map((event, index) => {
                const EventIcon = getEventIcon(event.eventType);
                const eventColor = getEventColor(event.eventType);
                
                return (
                  <div 
                    key={event.eventId} 
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`${eventColor}`}>
                        <EventIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">
                          {formatEventType(event.eventType)}
                        </div>
                        <div className="text-xs text-gray-500">
                          {event.emailAddress} • {event.emailId}
                        </div>
                        {event.linkClicked && (
                          <div className="text-xs text-blue-600">
                            Clicked: {event.linkClicked}
                          </div>
                        )}
                        {event.conversionAction && (
                          <div className="text-xs text-green-600">
                            Action: {event.conversionAction}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-xs text-gray-500">
                        {new Date(event.timestamp).toLocaleTimeString()}
                      </div>
                      {event.leadScore && (
                        <div className="text-xs">
                          Score: {event.leadScore}
                        </div>
                      )}
                      {event.deviceType && (
                        <Badge variant="outline" className="text-xs mt-1">
                          {event.deviceType}
                        </Badge>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </CardContent>
      </Card>

      {/* Webhook Configuration Info */}
      <Card>
        <CardHeader>
          <CardTitle>Webhook Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-sm mb-2">Make.com Webhook URL:</h4>
              <code className="text-xs bg-gray-100 p-2 rounded block">
                https://your-domain.com/api/webhooks/email-events
              </code>
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-2">Supported Event Types:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  'email_sent',
                  'email_delivered', 
                  'email_opened',
                  'email_clicked',
                  'email_converted',
                  'email_bounced',
                  'email_unsubscribed'
                ].map((eventType) => (
                  <Badge key={eventType} variant="outline" className="text-xs">
                    {formatEventType(eventType)}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-sm mb-2">Expected Payload Format:</h4>
              <pre className="text-xs bg-gray-100 p-3 rounded overflow-x-auto">
{`{
  "eventType": "email_opened",
  "emailId": "roi-calc-001",
  "sequenceId": "roi-calculator-sequence",
  "contactId": "contact_12345",
  "emailAddress": "user@company.com",
  "timestamp": "2024-01-15T10:30:00Z",
  "deviceType": "desktop",
  "location": "Atlanta, GA",
  "leadScore": 85
}`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailWebhookHandler;