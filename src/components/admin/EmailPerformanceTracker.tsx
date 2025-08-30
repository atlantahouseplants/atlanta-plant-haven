import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, TrendingDown, Mail, MousePointer, 
  Users, Target, AlertTriangle, CheckCircle, Clock,
  BarChart3, Settings, Zap, Award
} from "lucide-react";
import { 
  type EmailPerformanceMetrics, 
  type OptimizationRecommendation,
  generateOptimizationRecommendations,
  getBenchmarkComparison,
  calculateEmailROI
} from "@/data/emailOptimization";

interface EmailPerformanceTrackerProps {
  className?: string;
}

const EmailPerformanceTracker: React.FC<EmailPerformanceTrackerProps> = ({ 
  className = "" 
}) => {
  const [performanceData, setPerformanceData] = useState<EmailPerformanceMetrics[]>([]);
  const [recommendations, setRecommendations] = useState<OptimizationRecommendation[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTests, setActiveTests] = useState([]);

  // Mock data for demonstration - in production, this would come from Make.com webhooks
  useEffect(() => {
    const mockData: EmailPerformanceMetrics[] = [
      {
        sequenceId: 'roi-calculator-sequence',
        emailId: 'roi-calc-001',
        sequenceName: 'Executive ROI Calculator',
        emailSubject: 'Your Executive ROI Calculator + Strategic Implementation Insights',
        sentDate: new Date('2024-01-15'),
        totalSent: 245,
        delivered: 238,
        opened: 89,
        clicked: 27,
        converted: 8,
        bounced: 7,
        unsubscribed: 2,
        openRate: 37.4,
        clickRate: 11.3,
        conversionRate: 3.4,
        bounceRate: 2.9,
        unsubscribeRate: 0.8,
        revenueGenerated: 12400,
        leadScore: 'hot',
        segmentTags: ['enterprise', 'roi-focused', 'director-level']
      },
      {
        sequenceId: 'business-quote-sequence',
        emailId: 'bq-001',
        sequenceName: 'Business Consultation Follow-up',
        emailSubject: 'Your consultation details + next steps',
        sentDate: new Date('2024-01-14'),
        totalSent: 156,
        delivered: 152,
        opened: 61,
        clicked: 19,
        converted: 6,
        bounced: 4,
        unsubscribed: 1,
        openRate: 40.1,
        clickRate: 12.5,
        conversionRate: 3.9,
        bounceRate: 2.6,
        unsubscribeRate: 0.7,
        revenueGenerated: 8900,
        leadScore: 'warm',
        segmentTags: ['consultation-request', 'business-focused']
      }
    ];

    setPerformanceData(mockData);
    setRecommendations(generateOptimizationRecommendations(mockData));
    setLoading(false);
  }, []);

  const getMetricStatus = (value: number, benchmark: number) => {
    if (value >= benchmark * 1.2) return { status: 'excellent', color: 'text-green-600', icon: TrendingUp };
    if (value >= benchmark) return { status: 'good', color: 'text-blue-600', icon: CheckCircle };
    if (value >= benchmark * 0.8) return { status: 'average', color: 'text-yellow-600', icon: Clock };
    return { status: 'poor', color: 'text-red-600', icon: TrendingDown };
  };

  const calculateOverallMetrics = () => {
    if (performanceData.length === 0) return null;
    
    const totals = performanceData.reduce((acc, email) => ({
      sent: acc.sent + email.totalSent,
      delivered: acc.delivered + email.delivered,
      opened: acc.opened + email.opened,
      clicked: acc.clicked + email.clicked,
      converted: acc.converted + email.converted,
      revenue: acc.revenue + email.revenueGenerated
    }), { sent: 0, delivered: 0, opened: 0, clicked: 0, converted: 0, revenue: 0 });

    return {
      deliveryRate: (totals.delivered / totals.sent) * 100,
      openRate: (totals.opened / totals.delivered) * 100,
      clickRate: (totals.clicked / totals.opened) * 100,
      conversionRate: (totals.converted / totals.clicked) * 100,
      totalRevenue: totals.revenue,
      roi: calculateEmailROI(totals.revenue, totals.sent * 0.10) // Assuming $0.10 cost per email
    };
  };

  const overallMetrics = calculateOverallMetrics();

  if (loading) {
    return (
      <div className={`p-6 ${className}`}>
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-24 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-6 space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Email Performance Dashboard</h2>
          <p className="text-gray-600 mt-1">Real-time insights from your email sequences</p>
        </div>
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          <Zap className="w-3 h-3 mr-1" />
          Auto-Optimizing
        </Badge>
      </div>

      {/* Overview Metrics */}
      {overallMetrics && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Delivery Rate</p>
                  <p className="text-2xl font-bold">{overallMetrics.deliveryRate.toFixed(1)}%</p>
                </div>
                <Mail className="h-8 w-8 text-blue-500" />
              </div>
              <Progress value={overallMetrics.deliveryRate} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Open Rate</p>
                  <p className="text-2xl font-bold">{overallMetrics.openRate.toFixed(1)}%</p>
                </div>
                <Users className="h-8 w-8 text-green-500" />
              </div>
              <Progress value={overallMetrics.openRate} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Click Rate</p>
                  <p className="text-2xl font-bold">{overallMetrics.clickRate.toFixed(1)}%</p>
                </div>
                <MousePointer className="h-8 w-8 text-purple-500" />
              </div>
              <Progress value={overallMetrics.clickRate} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Conversion Rate</p>
                  <p className="text-2xl font-bold">{overallMetrics.conversionRate.toFixed(1)}%</p>
                </div>
                <Target className="h-8 w-8 text-orange-500" />
              </div>
              <Progress value={overallMetrics.conversionRate} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Email ROI</p>
                  <p className="text-2xl font-bold">{overallMetrics.roi.toFixed(0)}x</p>
                </div>
                <Award className="h-8 w-8 text-yellow-500" />
              </div>
              <div className="mt-2">
                <p className="text-xs text-gray-500">Revenue: ${overallMetrics.totalRevenue.toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Detailed Analytics */}
      <Tabs defaultValue="sequences" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sequences">Sequence Performance</TabsTrigger>
          <TabsTrigger value="recommendations">Optimization</TabsTrigger>
          <TabsTrigger value="benchmarks">Benchmarks</TabsTrigger>
        </TabsList>

        <TabsContent value="sequences" className="space-y-4">
          <div className="grid gap-4">
            {performanceData.map((email, index) => {
              const benchmarks = getBenchmarkComparison(email);
              const openStatus = getMetricStatus(email.openRate, benchmarks.openRate);
              const clickStatus = getMetricStatus(email.clickRate, benchmarks.clickRate);
              const conversionStatus = getMetricStatus(email.conversionRate, benchmarks.conversionRate);

              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{email.sequenceName}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">{email.emailSubject}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">
                          {email.sentDate.toLocaleDateString()}
                        </div>
                        <Badge variant={email.leadScore === 'hot' ? 'destructive' : email.leadScore === 'warm' ? 'default' : 'secondary'}>
                          {email.leadScore} leads
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className={`flex items-center justify-center mb-2 ${openStatus.color}`}>
                          <openStatus.icon className="h-5 w-5 mr-1" />
                          <span className="font-semibold">{email.openRate.toFixed(1)}%</span>
                        </div>
                        <p className="text-sm text-gray-600">Open Rate</p>
                        <p className="text-xs text-gray-500">vs {benchmarks.openRate}% benchmark</p>
                      </div>
                      
                      <div className="text-center">
                        <div className={`flex items-center justify-center mb-2 ${clickStatus.color}`}>
                          <clickStatus.icon className="h-5 w-5 mr-1" />
                          <span className="font-semibold">{email.clickRate.toFixed(1)}%</span>
                        </div>
                        <p className="text-sm text-gray-600">Click Rate</p>
                        <p className="text-xs text-gray-500">vs {benchmarks.clickRate}% benchmark</p>
                      </div>
                      
                      <div className="text-center">
                        <div className={`flex items-center justify-center mb-2 ${conversionStatus.color}`}>
                          <conversionStatus.icon className="h-5 w-5 mr-1" />
                          <span className="font-semibold">{email.conversionRate.toFixed(1)}%</span>
                        </div>
                        <p className="text-sm text-gray-600">Conversion</p>
                        <p className="text-xs text-gray-500">vs {benchmarks.conversionRate}% benchmark</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2 text-green-600">
                          <span className="font-semibold">${email.revenueGenerated.toLocaleString()}</span>
                        </div>
                        <p className="text-sm text-gray-600">Revenue</p>
                        <p className="text-xs text-gray-500">{email.converted} conversions</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t">
                      <div className="flex flex-wrap gap-2">
                        {email.segmentTags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-4">
          <div className="grid gap-4">
            {recommendations.map((rec, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-3 ${
                        rec.priority === 'high' ? 'bg-red-500' : 
                        rec.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                      <CardTitle className="text-lg capitalize">
                        {rec.category.replace('-', ' ')} Optimization
                      </CardTitle>
                    </div>
                    <Badge variant={rec.priority === 'high' ? 'destructive' : 'default'}>
                      {rec.priority} priority
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{rec.recommendation}</p>
                  
                  {rec.testVariants && rec.testVariants.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Suggested A/B Test Variants:</h4>
                      <ul className="space-y-1">
                        {rec.testVariants.map((variant, varIndex) => (
                          <li key={varIndex} className="text-sm bg-gray-50 p-2 rounded border-l-4 border-blue-400">
                            {variant}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      Potential Impact: <span className="font-semibold text-green-600">+{rec.expectedImpact}%</span>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Settings className="w-4 h-4 mr-2" />
                      Implement Test
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="benchmarks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Industry Benchmarks vs Your Performance</CardTitle>
              <p className="text-sm text-gray-600">
                Comparing your email performance against B2B professional services benchmarks
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {performanceData.map((email, index) => {
                  const benchmarks = getBenchmarkComparison(email);
                  return (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-4">{email.sequenceName}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm">Open Rate</span>
                            <span className="text-sm font-medium">{email.openRate.toFixed(1)}% vs {benchmarks.openRate}%</span>
                          </div>
                          <Progress 
                            value={(email.openRate / benchmarks.openRate) * 50} 
                            className="h-2"
                          />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm">Click Rate</span>
                            <span className="text-sm font-medium">{email.clickRate.toFixed(1)}% vs {benchmarks.clickRate}%</span>
                          </div>
                          <Progress 
                            value={(email.clickRate / benchmarks.clickRate) * 50} 
                            className="h-2"
                          />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm">Conversion Rate</span>
                            <span className="text-sm font-medium">{email.conversionRate.toFixed(1)}% vs {benchmarks.conversionRate}%</span>
                          </div>
                          <Progress 
                            value={(email.conversionRate / benchmarks.conversionRate) * 50} 
                            className="h-2"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EmailPerformanceTracker;