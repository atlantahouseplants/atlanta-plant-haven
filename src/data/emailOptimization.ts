// Email Performance Optimization Framework for Atlanta Houseplants
// A/B Testing, Analytics, and Continuous Improvement System

export interface EmailPerformanceMetrics {
  emailId: string;
  sequenceId: string;
  sentDate: string;
  
  // Delivery Metrics
  totalSent: number;
  delivered: number;
  bounced: number;
  deliveryRate: number;
  
  // Engagement Metrics
  opened: number;
  uniqueOpens: number;
  openRate: number;
  clicked: number;
  uniqueClicks: number;
  clickRate: number;
  clickToOpenRate: number;
  
  // Conversion Metrics
  conversions: number;
  conversionRate: number;
  unsubscribes: number;
  unsubscribeRate: number;
  
  // Advanced Metrics
  timeToOpen: number; // Average hours to first open
  timeToClick: number; // Average hours to first click
  deviceBreakdown: DeviceMetrics;
  segmentPerformance: SegmentMetrics[];
  
  // Business Metrics
  consultationsBooked: number;
  revenueGenerated: number;
  leadQualityScore: number;
}

export interface DeviceMetrics {
  desktop: number;
  mobile: number;
  tablet: number;
}

export interface SegmentMetrics {
  segment: string;
  sent: number;
  openRate: number;
  clickRate: number;
  conversionRate: number;
}

export interface ABTestVariant {
  variantId: string;
  variantName: string;
  testElement: 'subject' | 'content' | 'cta' | 'send-time' | 'sender-name';
  
  // Test Configuration
  trafficSplit: number; // Percentage of traffic
  isControl: boolean;
  
  // Variant Content
  subject?: string;
  senderName?: string;
  ctaText?: string;
  content?: string;
  sendTime?: string; // Hour in EST
  
  // Performance
  metrics: EmailPerformanceMetrics;
  
  // Statistical Significance
  confidenceLevel: number;
  pValue: number;
  isSignificant: boolean;
}

export interface EmailOptimizationTest {
  testId: string;
  testName: string;
  hypothesis: string;
  startDate: string;
  endDate: string;
  status: 'draft' | 'running' | 'completed' | 'paused';
  
  primaryMetric: 'open-rate' | 'click-rate' | 'conversion-rate' | 'booking-rate';
  minimumSampleSize: number;
  
  variants: ABTestVariant[];
  
  // Results
  winner?: string;
  winnerLift: number; // Percentage improvement
  businessImpact: {
    additionalBookings: number;
    additionalRevenue: number;
    improvedLeadQuality: number;
  };
}

// Optimization Recommendations Based on Performance Data
export const generateOptimizationRecommendations = (metrics: EmailPerformanceMetrics[]): OptimizationRecommendation[] => {
  const recommendations: OptimizationRecommendation[] = [];
  
  // Analyze overall performance trends
  const avgOpenRate = metrics.reduce((sum, m) => sum + m.openRate, 0) / metrics.length;
  const avgClickRate = metrics.reduce((sum, m) => sum + m.clickRate, 0) / metrics.length;
  const avgConversionRate = metrics.reduce((sum, m) => sum + m.conversionRate, 0) / metrics.length;
  
  // Industry Benchmarks for B2B Professional Services
  const benchmarks = {
    openRate: 24.8, // B2B average
    clickRate: 3.2,
    conversionRate: 2.1,
    unsubscribeRate: 0.3
  };
  
  // Low Open Rate Recommendations
  if (avgOpenRate < benchmarks.openRate * 0.8) {
    recommendations.push({
      category: 'subject-line',
      priority: 'high',
      issue: `Open rate (${avgOpenRate.toFixed(1)}%) is below industry benchmark (${benchmarks.openRate}%)`,
      recommendation: 'Test subject line optimization focusing on personalization and urgency',
      expectedImpact: '15-30% improvement in open rates',
      testVariants: [
        'Personalized: "{{firstName}}, your {{company}} workspace assessment is ready"',
        'Urgency: "Your strategic consultation expires in 48 hours"',
        'Benefit-focused: "ROI Calculator shows {{company}} could save ${{estimated_savings}}"',
        'Question-based: "{{firstName}}, what\'s driving your workplace enhancement timeline?"'
      ],
      implementation: {
        testDuration: '14 days',
        minimumSampleSize: 500,
        successMetric: `Achieve ${benchmarks.openRate}% open rate`
      }
    });
  }
  
  // Low Click Rate Recommendations
  if (avgClickRate < benchmarks.clickRate * 0.8) {
    recommendations.push({
      category: 'content-optimization',
      priority: 'high',
      issue: `Click rate (${avgClickRate.toFixed(1)}%) indicates weak content engagement`,
      recommendation: 'Test email content structure and CTA optimization',
      expectedImpact: '20-40% improvement in click rates',
      testVariants: [
        'Single focused CTA with strategic framing',
        'Multiple CTAs with different value propositions',
        'Case study snippet with "Read Full Case Study" CTA',
        'Personal note from Nick with direct booking link'
      ],
      implementation: {
        testDuration: '10 days',
        minimumSampleSize: 300,
        successMetric: `Achieve ${benchmarks.clickRate}% click rate`
      }
    });
  }
  
  // Low Conversion Rate Recommendations  
  if (avgConversionRate < benchmarks.conversionRate * 0.8) {
    recommendations.push({
      category: 'conversion-optimization',
      priority: 'medium',
      issue: `Conversion rate (${avgConversionRate.toFixed(1)}%) suggests landing page or offer mismatch`,
      recommendation: 'Optimize post-click experience and value proposition alignment',
      expectedImpact: '25-50% improvement in conversions',
      testVariants: [
        'Direct booking calendar link vs. contact form',
        'Immediate consultation vs. resource download first',
        'Free assessment vs. strategic consultation positioning',
        'Nick personal video vs. standard business approach'
      ],
      implementation: {
        testDuration: '21 days',
        minimumSampleSize: 200,
        successMetric: `Achieve ${benchmarks.conversionRate}% conversion rate`
      }
    });
  }
  
  // Device-Specific Recommendations
  const mobileOpenRate = calculateMobileMetrics(metrics);
  if (mobileOpenRate.openRate < avgOpenRate * 0.8) {
    recommendations.push({
      category: 'mobile-optimization',
      priority: 'medium',
      issue: 'Mobile open rates significantly below desktop performance',
      recommendation: 'Optimize for mobile-first email design and subject line length',
      expectedImpact: '15-25% improvement in mobile engagement',
      testVariants: [
        'Subject lines under 30 characters',
        'Single column mobile-optimized design',
        'Larger touch-friendly CTA buttons',
        'Simplified content with more white space'
      ],
      implementation: {
        testDuration: '14 days',
        minimumSampleSize: 200,
        successMetric: 'Achieve mobile/desktop performance parity'
      }
    });
  }
  
  // High Unsubscribe Rate Recommendations
  const avgUnsubscribeRate = metrics.reduce((sum, m) => sum + m.unsubscribeRate, 0) / metrics.length;
  if (avgUnsubscribeRate > benchmarks.unsubscribeRate * 1.5) {
    recommendations.push({
      category: 'content-relevance',
      priority: 'high',
      issue: `Unsubscribe rate (${avgUnsubscribeRate.toFixed(2)}%) indicates content relevance issues`,
      recommendation: 'Improve segmentation and content personalization',
      expectedImpact: '30-50% reduction in unsubscribe rate',
      testVariants: [
        'Industry-specific content tracks',
        'Company size-based messaging',
        'Timeline-based urgency levels',
        'Interest-based value proposition focus'
      ],
      implementation: {
        testDuration: '30 days',
        minimumSampleSize: 500,
        successMetric: `Reduce unsubscribe rate to ${benchmarks.unsubscribeRate}%`
      }
    });
  }
  
  return recommendations;
};

export interface OptimizationRecommendation {
  category: 'subject-line' | 'content-optimization' | 'conversion-optimization' | 'mobile-optimization' | 'content-relevance' | 'send-time' | 'segmentation';
  priority: 'high' | 'medium' | 'low';
  issue: string;
  recommendation: string;
  expectedImpact: string;
  testVariants: string[];
  implementation: {
    testDuration: string;
    minimumSampleSize: number;
    successMetric: string;
  };
}

// Predefined A/B Test Templates for Common Optimizations
export const emailTestTemplates: EmailOptimizationTest[] = [
  {
    testId: 'subject-personalization-001',
    testName: 'Subject Line Personalization Impact',
    hypothesis: 'Personalized subject lines with company name and timeline will improve open rates by 15%+',
    startDate: '',
    endDate: '',
    status: 'draft',
    primaryMetric: 'open-rate',
    minimumSampleSize: 500,
    variants: [
      {
        variantId: 'control',
        variantName: 'Generic Subject',
        testElement: 'subject',
        trafficSplit: 50,
        isControl: true,
        subject: 'Your workplace consultation details',
        metrics: {} as EmailPerformanceMetrics,
        confidenceLevel: 0,
        pValue: 1,
        isSignificant: false
      },
      {
        variantId: 'personalized',
        variantName: 'Personalized Subject',
        testElement: 'subject',
        trafficSplit: 50,
        isControl: false,
        subject: '{{firstName}}, your {{company}} strategic consultation is ready',
        metrics: {} as EmailPerformanceMetrics,
        confidenceLevel: 0,
        pValue: 1,
        isSignificant: false
      }
    ],
    winner: undefined,
    winnerLift: 0,
    businessImpact: {
      additionalBookings: 0,
      additionalRevenue: 0,
      improvedLeadQuality: 0
    }
  },
  {
    testId: 'cta-optimization-001',
    testName: 'CTA Button Text Optimization',
    hypothesis: 'Strategic/professional CTA language will outperform generic booking language by 20%+',
    startDate: '',
    endDate: '',
    status: 'draft',
    primaryMetric: 'click-rate',
    minimumSampleSize: 300,
    variants: [
      {
        variantId: 'generic-cta',
        variantName: 'Generic CTA',
        testElement: 'cta',
        trafficSplit: 33,
        isControl: true,
        ctaText: 'Book Consultation',
        metrics: {} as EmailPerformanceMetrics,
        confidenceLevel: 0,
        pValue: 1,
        isSignificant: false
      },
      {
        variantId: 'strategic-cta',
        variantName: 'Strategic CTA',
        testElement: 'cta',
        trafficSplit: 33,
        isControl: false,
        ctaText: 'Schedule Strategic Assessment',
        metrics: {} as EmailPerformanceMetrics,
        confidenceLevel: 0,
        pValue: 1,
        isSignificant: false
      },
      {
        variantId: 'value-cta',
        variantName: 'Value-Focused CTA',
        testElement: 'cta',
        trafficSplit: 34,
        isControl: false,
        ctaText: 'Get My ROI Analysis',
        metrics: {} as EmailPerformanceMetrics,
        confidenceLevel: 0,
        pValue: 1,
        isSignificant: false
      }
    ],
    winner: undefined,
    winnerLift: 0,
    businessImpact: {
      additionalBookings: 0,
      additionalRevenue: 0,
      improvedLeadQuality: 0
    }
  },
  {
    testId: 'send-time-optimization-001',
    testName: 'Optimal Send Time for B2B Decision Makers',
    hypothesis: 'Tuesday/Wednesday 10 AM EST will outperform other send times for B2B leads',
    startDate: '',
    endDate: '',
    status: 'draft',
    primaryMetric: 'open-rate',
    minimumSampleSize: 600,
    variants: [
      {
        variantId: 'tuesday-10am',
        variantName: 'Tuesday 10 AM EST',
        testElement: 'send-time',
        trafficSplit: 25,
        isControl: true,
        sendTime: 'tuesday-10am',
        metrics: {} as EmailPerformanceMetrics,
        confidenceLevel: 0,
        pValue: 1,
        isSignificant: false
      },
      {
        variantId: 'wednesday-10am',
        variantName: 'Wednesday 10 AM EST',
        testElement: 'send-time',
        trafficSplit: 25,
        isControl: false,
        sendTime: 'wednesday-10am',
        metrics: {} as EmailPerformanceMetrics,
        confidenceLevel: 0,
        pValue: 1,
        isSignificant: false
      },
      {
        variantId: 'tuesday-2pm',
        variantName: 'Tuesday 2 PM EST',
        testElement: 'send-time',
        trafficSplit: 25,
        isControl: false,
        sendTime: 'tuesday-2pm',
        metrics: {} as EmailPerformanceMetrics,
        confidenceLevel: 0,
        pValue: 1,
        isSignificant: false
      },
      {
        variantId: 'thursday-9am',
        variantName: 'Thursday 9 AM EST',
        testElement: 'send-time',
        trafficSplit: 25,
        isControl: false,
        sendTime: 'thursday-9am',
        metrics: {} as EmailPerformanceMetrics,
        confidenceLevel: 0,
        pValue: 1,
        isSignificant: false
      }
    ],
    winner: undefined,
    winnerLift: 0,
    businessImpact: {
      additionalBookings: 0,
      additionalRevenue: 0,
      improvedLeadQuality: 0
    }
  }
];

// Helper Functions
const calculateMobileMetrics = (metrics: EmailPerformanceMetrics[]) => {
  const totalMobileOpens = metrics.reduce((sum, m) => sum + (m.deviceBreakdown.mobile || 0), 0);
  const totalMobileSent = metrics.reduce((sum, m) => sum + (m.totalSent * 0.6), 0); // Assume 60% mobile
  
  return {
    openRate: (totalMobileOpens / totalMobileSent) * 100,
    totalOpens: totalMobileOpens,
    totalSent: totalMobileSent
  };
};

// Make.com Integration Helper
export const formatOptimizationDataForMakeCom = (metrics: EmailPerformanceMetrics, testData?: EmailOptimizationTest) => {
  return {
    // Standard Metrics
    ...metrics,
    
    // Calculated Performance Indicators
    engagementScore: calculateEngagementScore(metrics),
    qualityScore: calculateEmailQualityScore(metrics),
    
    // Optimization Flags
    needsOptimization: flagPerformanceIssues(metrics),
    recommendedTests: generateTestRecommendations(metrics),
    
    // Business Impact
    estimatedRevueImpact: calculateRevenueImpact(metrics),
    leadQualityTrend: assessLeadQualityTrend(metrics),
    
    // Test Results (if available)
    activeTests: testData ? [testData.testId] : [],
    winningVariants: testData?.winner ? [testData.winner] : [],
    
    timestamp: new Date().toISOString()
  };
};

// Utility Functions for Scoring
const calculateEngagementScore = (metrics: EmailPerformanceMetrics): number => {
  const openWeight = 0.3;
  const clickWeight = 0.4;
  const conversionWeight = 0.3;
  
  return (
    (metrics.openRate * openWeight) +
    (metrics.clickRate * clickWeight) +
    (metrics.conversionRate * conversionWeight)
  );
};

const calculateEmailQualityScore = (metrics: EmailPerformanceMetrics): number => {
  const deliveryScore = metrics.deliveryRate;
  const engagementScore = (metrics.openRate + metrics.clickRate) / 2;
  const negativeScore = 100 - (metrics.unsubscribeRate * 10);
  
  return (deliveryScore * 0.3) + (engagementScore * 0.5) + (negativeScore * 0.2);
};

const flagPerformanceIssues = (metrics: EmailPerformanceMetrics): string[] => {
  const issues: string[] = [];
  
  if (metrics.openRate < 20) issues.push('low-open-rate');
  if (metrics.clickRate < 2.5) issues.push('low-click-rate');
  if (metrics.conversionRate < 1.5) issues.push('low-conversion-rate');
  if (metrics.unsubscribeRate > 0.5) issues.push('high-unsubscribe-rate');
  if (metrics.deliveryRate < 95) issues.push('delivery-issues');
  
  return issues;
};

const generateTestRecommendations = (metrics: EmailPerformanceMetrics): string[] => {
  const recommendations: string[] = [];
  
  if (metrics.openRate < 20) recommendations.push('subject-line-test');
  if (metrics.clickRate < 2.5) recommendations.push('content-cta-test');
  if (metrics.conversionRate < 1.5) recommendations.push('landing-page-test');
  if (metrics.deviceBreakdown.mobile / metrics.totalSent > 0.5) recommendations.push('mobile-optimization-test');
  
  return recommendations;
};

const calculateRevenueImpact = (metrics: EmailPerformanceMetrics): number => {
  // Estimate based on consultation booking value and conversion rates
  const avgConsultationValue = 2500; // Average project value
  const consultationToSaleRate = 0.3; // 30% close rate
  
  return metrics.conversions * avgConsultationValue * consultationToSaleRate;
};

const assessLeadQualityTrend = (metrics: EmailPerformanceMetrics): 'improving' | 'stable' | 'declining' => {
  // This would typically compare with historical data
  // For now, return stable as placeholder
  return 'stable';
};