import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, Mail, Settings, Activity, 
  Users, TrendingUp, Target, Zap 
} from "lucide-react";
import EmailPerformanceTracker from "@/components/admin/EmailPerformanceTracker";
import EmailWebhookHandler from "@/components/admin/EmailWebhookHandler";

interface AdminDashboardProps {
  className?: string;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  className = "" 
}) => {
  const [totalLeads] = useState(1247);
  const [hotLeads] = useState(89);
  const [activeSequences] = useState(12);
  const [conversionRate] = useState(3.8);

  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Atlanta Houseplants - Admin Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Email marketing automation and lead optimization center
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="bg-green-50 text-green-700">
              <Activity className="w-3 h-3 mr-1" />
              All Systems Active
            </Badge>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Leads</p>
                  <p className="text-3xl font-bold text-gray-900">{totalLeads.toLocaleString()}</p>
                  <p className="text-sm text-green-600 mt-1">↗ +12% this month</p>
                </div>
                <Users className="h-12 w-12 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Hot Leads</p>
                  <p className="text-3xl font-bold text-red-600">{hotLeads}</p>
                  <p className="text-sm text-green-600 mt-1">↗ +8% this week</p>
                </div>
                <Zap className="h-12 w-12 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Active Sequences</p>
                  <p className="text-3xl font-bold text-purple-600">{activeSequences}</p>
                  <p className="text-sm text-gray-500 mt-1">Email campaigns running</p>
                </div>
                <Mail className="h-12 w-12 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Conversion Rate</p>
                  <p className="text-3xl font-bold text-green-600">{conversionRate}%</p>
                  <p className="text-sm text-green-600 mt-1">↗ +0.8% this month</p>
                </div>
                <Target className="h-12 w-12 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard */}
        <Tabs defaultValue="performance" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="performance" className="flex items-center">
              <BarChart3 className="h-4 w-4 mr-2" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="webhooks" className="flex items-center">
              <Activity className="h-4 w-4 mr-2" />
              Live Events
            </TabsTrigger>
            <TabsTrigger value="sequences" className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              Sequences
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-4">
            <EmailPerformanceTracker />
          </TabsContent>

          <TabsContent value="webhooks" className="space-y-4">
            <EmailWebhookHandler />
          </TabsContent>

          <TabsContent value="sequences" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Email Sequence Management</CardTitle>
                <p className="text-sm text-gray-600">
                  Manage and monitor your automated email sequences
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {[
                    {
                      name: 'ROI Calculator Follow-up',
                      status: 'active',
                      leads: 156,
                      conversion: 4.2,
                      revenue: 18400
                    },
                    {
                      name: 'Business Quote Sequence',
                      status: 'active', 
                      leads: 89,
                      conversion: 5.1,
                      revenue: 12800
                    },
                    {
                      name: 'Audit Checklist Nurture',
                      status: 'active',
                      leads: 234,
                      conversion: 2.8,
                      revenue: 9200
                    },
                    {
                      name: 'Case Studies Showcase',
                      status: 'paused',
                      leads: 67,
                      conversion: 3.4,
                      revenue: 5600
                    }
                  ].map((sequence, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${
                          sequence.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                        <div>
                          <h4 className="font-semibold">{sequence.name}</h4>
                          <p className="text-sm text-gray-600">{sequence.leads} active leads</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm">
                          <span className="font-semibold">{sequence.conversion}%</span> conversion
                        </div>
                        <div className="text-sm text-green-600">
                          ${sequence.revenue.toLocaleString()} revenue
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>System Configuration</CardTitle>
                <p className="text-sm text-gray-600">
                  Configure your email automation and tracking settings
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Make.com Integration</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Webhook Status:</span>
                          <Badge variant="default" className="bg-green-100 text-green-800">Connected</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Last Sync:</span>
                          <span className="text-gray-600">2 minutes ago</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Events Today:</span>
                          <span className="font-semibold">247</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Lead Scoring</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Algorithm Version:</span>
                          <span className="text-gray-600">v2.1</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Hot Lead Threshold:</span>
                          <span className="font-semibold">80+ points</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Auto-Assignment:</span>
                          <Badge variant="default" className="bg-blue-100 text-blue-800">Enabled</Badge>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Email Performance</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>A/B Testing:</span>
                          <Badge variant="default" className="bg-purple-100 text-purple-800">Active</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Send Rate Limit:</span>
                          <span className="text-gray-600">1000/hour</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Bounce Handling:</span>
                          <Badge variant="default" className="bg-orange-100 text-orange-800">Automatic</Badge>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">CRM Integration</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>HubSpot Sync:</span>
                          <Badge variant="default" className="bg-green-100 text-green-800">Connected</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Contact Updates:</span>
                          <span className="text-gray-600">Real-time</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Deal Creation:</span>
                          <Badge variant="default" className="bg-blue-100 text-blue-800">Automated</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <h4 className="font-semibold mb-3">Recent System Activity</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded">
                        <span>Lead scoring algorithm updated</span>
                        <span className="text-gray-500">2 hours ago</span>
                      </div>
                      <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded">
                        <span>New A/B test started for subject lines</span>
                        <span className="text-gray-500">5 hours ago</span>
                      </div>
                      <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded">
                        <span>ROI Calculator sequence optimized</span>
                        <span className="text-gray-500">1 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;