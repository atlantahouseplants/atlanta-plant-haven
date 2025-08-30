// Lead Scoring and Segmentation System for Atlanta Houseplants
// Designed for Make.com automation and CRM integration

export interface LeadScore {
  totalScore: number;
  category: 'hot' | 'warm' | 'cold' | 'nurture';
  priority: 'high' | 'medium' | 'low';
  segmentTags: string[];
  recommendedSequence: string;
  salesReadiness: number; // 0-100 scale
}

export interface LeadData {
  // Contact Information
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  title?: string;
  phone?: string;

  // Company Information  
  employeeCount: string;
  industry?: string;
  
  // Behavioral Data
  leadMagnetDownloaded?: string;
  formSubmitted: string; // business-quote, plant-doctor, etc.
  timeline?: string;
  primaryInterest?: string;
  currentPlants?: string;
  
  // Engagement Data
  emailOpens?: number;
  emailClicks?: number;
  pageViews?: number;
  timeOnSite?: number;
  returnVisits?: number;
  
  // Qualification Data
  budget?: string;
  decisionMaker?: boolean;
  urgency?: 'immediate' | '1-3months' | '3-6months' | '6months+' | 'researching';
  
  // Source Data
  source: string;
  campaign?: string;
  referrer?: string;
}

// Lead Scoring Algorithm
export const calculateLeadScore = (leadData: LeadData): LeadScore => {
  let score = 0;
  const tags: string[] = [];
  
  // === DEMOGRAPHIC SCORING ===
  
  // Company Size (Higher employee count = higher value)
  switch (leadData.employeeCount) {
    case '250+':
      score += 25;
      tags.push('enterprise');
      break;
    case '101-250':
      score += 20;
      tags.push('mid-market');
      break;
    case '51-100':
      score += 15;
      tags.push('growing-business');
      break;
    case '26-50':
      score += 12;
      tags.push('small-business');
      break;
    case '11-25':
      score += 8;
      tags.push('small-business');
      break;
    case '1-10':
      score += 5;
      tags.push('startup');
      break;
  }
  
  // Job Title Scoring (Decision making authority)
  const title = leadData.title?.toLowerCase() || '';
  if (title.includes('ceo') || title.includes('president') || title.includes('founder')) {
    score += 15;
    tags.push('c-level');
  } else if (title.includes('director') || title.includes('vp') || title.includes('vice president')) {
    score += 12;
    tags.push('director-level');
  } else if (title.includes('manager') || title.includes('head of')) {
    score += 8;
    tags.push('manager-level');
  } else if (title.includes('hr') || title.includes('office') || title.includes('facilities')) {
    score += 10;
    tags.push('facilities-hr');
  }
  
  // === BEHAVIORAL SCORING ===
  
  // Lead Magnet Downloaded (Shows serious research intent)
  switch (leadData.leadMagnetDownloaded) {
    case 'roi-calculator':
      score += 20;
      tags.push('roi-focused', 'executive-oriented');
      break;
    case 'audit-checklist':
      score += 15;
      tags.push('systematic-approach', 'operations-focused');
      break;
    case 'case-studies':
      score += 18;
      tags.push('results-oriented', 'validation-seeking');
      break;
    case 'automation-guide':
      score += 12;
      tags.push('efficiency-focused');
      break;
    case 'plant-guide':
      score += 10;
      tags.push('education-seeking');
      break;
    case 'proposal-template':
      score += 25;
      tags.push('ready-to-present', 'stakeholder-approval-needed');
      break;
  }
  
  // Form Submission Type
  switch (leadData.formSubmitted) {
    case 'business-quote':
      score += 30;
      tags.push('consultation-request', 'business-focused');
      break;
    case 'plant-doctor':
      score += 15;
      tags.push('existing-plants', 'maintenance-focused');
      break;
    case 'corporate-gifting':
      score += 25;
      tags.push('hr-program', 'recurring-revenue');
      break;
    case 'bulk-order':
      score += 35;
      tags.push('immediate-need', 'high-volume');
      break;
  }
  
  // Timeline/Urgency (Implementation readiness)
  switch (leadData.urgency || leadData.timeline) {
    case 'immediate':
      score += 30;
      tags.push('hot-lead', 'immediate-implementation');
      break;
    case '1-3months':
      score += 20;
      tags.push('warm-lead', 'near-term-implementation');
      break;
    case '3-6months':
      score += 10;
      tags.push('planning-phase');
      break;
    case '6months+':
      score += 5;
      tags.push('long-term-planning');
      break;
    case 'researching':
      score += 3;
      tags.push('early-research');
      break;
  }
  
  // Primary Interest (Service alignment)
  switch (leadData.primaryInterest) {
    case 'employee-satisfaction':
      score += 12;
      tags.push('hr-initiative', 'culture-focused');
      break;
    case 'client-impressions':
      score += 15;
      tags.push('brand-focused', 'client-facing');
      break;
    case 'productivity-improvement':
      score += 18;
      tags.push('performance-focused', 'roi-driven');
      break;
    case 'air-quality':
      score += 10;
      tags.push('wellness-focused');
      break;
    case 'office-aesthetics':
      score += 8;
      tags.push('design-focused');
      break;
  }
  
  // === ENGAGEMENT SCORING ===
  
  // Email Engagement
  if (leadData.emailOpens && leadData.emailOpens > 0) {
    score += Math.min(leadData.emailOpens * 2, 10); // Max 10 points for email opens
    if (leadData.emailOpens >= 3) tags.push('engaged-email-subscriber');
  }
  
  if (leadData.emailClicks && leadData.emailClicks > 0) {
    score += leadData.emailClicks * 5; // More valuable than opens
    tags.push('email-link-clicker');
  }
  
  // Website Engagement
  if (leadData.pageViews && leadData.pageViews > 3) {
    score += Math.min(leadData.pageViews, 15); // Max 15 points
    tags.push('multi-page-visitor');
  }
  
  if (leadData.timeOnSite && leadData.timeOnSite > 300) { // 5+ minutes
    score += 10;
    tags.push('engaged-visitor');
  }
  
  if (leadData.returnVisits && leadData.returnVisits > 1) {
    score += leadData.returnVisits * 3;
    tags.push('returning-visitor');
  }
  
  // === QUALIFICATION INDICATORS ===
  
  // Has current office plants (shows category interest)
  if (leadData.currentPlants === 'yes') {
    score += 8;
    tags.push('existing-plant-owner');
  } else if (leadData.currentPlants === 'failed-attempts') {
    score += 12;
    tags.push('frustrated-previous-attempt');
  }
  
  // Source Quality
  switch (leadData.source) {
    case 'google-organic':
      score += 8;
      tags.push('organic-search');
      break;
    case 'google-ads':
      score += 12;
      tags.push('paid-search');
      break;
    case 'referral':
      score += 15;
      tags.push('referral-lead');
      break;
    case 'social-media':
      score += 6;
      tags.push('social-lead');
      break;
    case 'direct':
      score += 10;
      tags.push('direct-traffic');
      break;
  }
  
  // === CALCULATE FINAL CATEGORY ===
  
  let category: 'hot' | 'warm' | 'cold' | 'nurture';
  let priority: 'high' | 'medium' | 'low';
  let recommendedSequence: string;
  
  if (score >= 80) {
    category = 'hot';
    priority = 'high';
    recommendedSequence = 'immediate-consultation-booking';
    tags.push('hot-lead', 'sales-qualified');
  } else if (score >= 50) {
    category = 'warm';
    priority = 'medium';
    recommendedSequence = 'accelerated-nurture-sequence';
    tags.push('warm-lead', 'marketing-qualified');
  } else if (score >= 25) {
    category = 'cold';
    priority = 'medium';
    recommendedSequence = 'standard-nurture-sequence';
    tags.push('cold-lead', 'requires-nurturing');
  } else {
    category = 'nurture';
    priority = 'low';
    recommendedSequence = 'long-term-education-sequence';
    tags.push('early-stage', 'education-needed');
  }
  
  // Sales Readiness Score (0-100)
  const salesReadiness = Math.min(Math.round((score / 120) * 100), 100);
  
  return {
    totalScore: score,
    category,
    priority,
    segmentTags: [...new Set(tags)], // Remove duplicates
    recommendedSequence,
    salesReadiness
  };
};

// Segmentation Rules for Email Sequences
export const getEmailSequenceForLead = (leadData: LeadData, leadScore: LeadScore): string => {
  // Lead Magnet Specific Sequences
  if (leadData.leadMagnetDownloaded) {
    switch (leadData.leadMagnetDownloaded) {
      case 'roi-calculator':
        return 'roi-calculator-sequence';
      case 'audit-checklist':
        return 'audit-checklist-sequence';
      case 'case-studies':
        return 'case-studies-sequence';
      case 'automation-guide':
        return 'automation-guide-sequence';
      case 'plant-guide':
        return 'plant-guide-sequence';
      case 'proposal-template':
        return 'proposal-template-sequence';
    }
  }
  
  // Form Submission Sequences
  switch (leadData.formSubmitted) {
    case 'business-quote':
      return leadScore.category === 'hot' ? 'business-quote-hot-sequence' : 'business-quote-sequence';
    case 'plant-doctor':
      return 'plant-doctor-sequence';
    case 'corporate-gifting':
      return 'corporate-gifting-sequence';
    case 'bulk-order':
      return 'bulk-order-sequence';
  }
  
  // Default based on lead score
  switch (leadScore.category) {
    case 'hot':
      return 'hot-lead-sequence';
    case 'warm':
      return 'warm-lead-sequence';
    case 'cold':
      return 'cold-lead-sequence';
    default:
      return 'nurture-sequence';
  }
};

// Make.com Integration Helper Functions
export const formatLeadForMakeCom = (leadData: LeadData) => {
  const leadScore = calculateLeadScore(leadData);
  const recommendedSequence = getEmailSequenceForLead(leadData, leadScore);
  
  return {
    // Lead Data
    ...leadData,
    
    // Scoring Data
    leadScore: leadScore.totalScore,
    leadCategory: leadScore.category,
    leadPriority: leadScore.priority,
    salesReadiness: leadScore.salesReadiness,
    
    // Segmentation
    segmentTags: leadScore.segmentTags.join(','),
    recommendedSequence,
    
    // CRM Integration
    assignTo: leadScore.priority === 'high' ? 'nick-direct' : 'general-queue',
    followUpDeadline: getFollowUpDeadline(leadScore.priority),
    
    // Email Automation
    emailSequenceTrigger: recommendedSequence,
    personalizedContent: generatePersonalizedContent(leadData, leadScore),
    
    timestamp: new Date().toISOString()
  };
};

// Helper function to determine follow-up deadlines
const getFollowUpDeadline = (priority: 'high' | 'medium' | 'low'): string => {
  const now = new Date();
  switch (priority) {
    case 'high':
      now.setHours(now.getHours() + 4); // 4 hours for hot leads
      break;
    case 'medium':
      now.setHours(now.getHours() + 24); // 24 hours for warm/cold leads
      break;
    case 'low':
      now.setDate(now.getDate() + 3); // 3 days for nurture leads
      break;
  }
  return now.toISOString();
};

// Generate personalized content based on lead data and score
const generatePersonalizedContent = (leadData: LeadData, leadScore: LeadScore) => {
  const personalizations = {
    industryFocus: getIndustryFocus(leadData.industry),
    companySizeMessaging: getCompanySizeMessaging(leadData.employeeCount),
    urgencyMessaging: getUrgencyMessaging(leadData.urgency || leadData.timeline),
    valueProposition: getValueProposition(leadScore.segmentTags),
  };
  
  return personalizations;
};

const getIndustryFocus = (industry?: string) => {
  const industryMap: { [key: string]: string } = {
    'technology': 'tech-focused-productivity',
    'healthcare': 'wellness-and-health-focused',
    'finance': 'professional-image-focused',
    'legal': 'client-impression-focused',
    'consulting': 'brand-and-productivity-focused',
    'manufacturing': 'employee-wellness-focused',
    'retail': 'customer-experience-focused'
  };
  
  return industry ? industryMap[industry.toLowerCase()] || 'general-business' : 'general-business';
};

const getCompanySizeMessaging = (employeeCount: string) => {
  const sizeMap: { [key: string]: string } = {
    '1-10': 'startup-focused',
    '11-25': 'small-business-focused',
    '26-50': 'growing-business-focused',
    '51-100': 'established-business-focused',
    '101-250': 'mid-market-focused',
    '250+': 'enterprise-focused'
  };
  
  return sizeMap[employeeCount] || 'general-business-focused';
};

const getUrgencyMessaging = (urgency?: string) => {
  const urgencyMap: { [key: string]: string } = {
    'immediate': 'urgent-implementation',
    '1-3months': 'near-term-planning',
    '3-6months': 'strategic-planning',
    '6months+': 'long-term-planning',
    'researching': 'education-focused'
  };
  
  return urgency ? urgencyMap[urgency] || 'standard-timeline' : 'standard-timeline';
};

const getValueProposition = (segmentTags: string[]) => {
  if (segmentTags.includes('roi-focused')) return 'productivity-and-savings';
  if (segmentTags.includes('brand-focused')) return 'professional-image-enhancement';
  if (segmentTags.includes('culture-focused')) return 'employee-satisfaction-and-retention';
  if (segmentTags.includes('wellness-focused')) return 'health-and-wellness-benefits';
  if (segmentTags.includes('efficiency-focused')) return 'automation-and-efficiency';
  
  return 'comprehensive-workplace-enhancement';
};