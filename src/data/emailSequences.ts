// Strategic Email Sequence Templates for Atlanta Houseplants B2B Conversion
// Designed for Make.com automation integration

export interface EmailSequence {
  sequenceId: string;
  sequenceName: string;
  trigger: string;
  description: string;
  emails: EmailTemplate[];
}

export interface EmailTemplate {
  emailId: string;
  subject: string;
  delay: number; // Hours after previous email or trigger
  segmentation?: string[];
  contentType: 'lead-magnet-delivery' | 'nurture' | 'educational' | 'social-proof' | 'consultation-booking' | 'follow-up';
  content: {
    headline: string;
    preview: string;
    body: string;
    cta: {
      text: string;
      url: string;
    };
    footer: string;
  };
}

// Lead Magnet Delivery Sequences (Immediate value + nurture)
export const leadMagnetSequences: EmailSequence[] = [
  {
    sequenceId: 'roi-calculator-sequence',
    sequenceName: 'Executive ROI Calculator Follow-up',
    trigger: 'roi-calculator-download',
    description: 'Executive-focused sequence for ROI calculator downloads, emphasizing strategic value and consultation booking',
    emails: [
      {
        emailId: 'roi-calc-001',
        subject: 'Your Executive ROI Calculator + Strategic Implementation Insights',
        delay: 0, // Immediate
        segmentation: ['executive', 'decision-maker'],
        contentType: 'lead-magnet-delivery',
        content: {
          headline: 'Your Strategic Plant ROI Analysis is Ready',
          preview: 'Calculate your workplace productivity gains + exclusive strategic insights from our certified horticulturalist',
          body: `Hi {{firstName}},

Thank you for downloading our Executive ROI Calculator. This tool has helped over 500 Atlanta businesses quantify the strategic value of workplace plant integration.

**Your Download Links:**
• [Executive ROI Calculator - Excel Tool]({{download_link}})
• [Strategic Implementation Guide - PDF]({{bonus_guide_link}})

**Exclusive Insight from Nick, Georgia's Certified Plant Professional:**

"Most executives are surprised to discover that strategic plant placement can deliver 15% productivity gains and 37% stress reduction. The businesses that succeed are those who approach this as a strategic investment, not a decorative expense."

**Quick Start: Your 3-Step Strategic Assessment**
1. Use the ROI calculator with your current employee count
2. Review our Atlanta-specific case studies (attached)
3. Schedule a complimentary strategic consultation to validate your projections

The companies seeing the highest ROI are those who implement within 30-60 days of their initial assessment. Our calendar typically books 2-3 weeks out, so I recommend securing your preferred consultation time soon.

Would you like to schedule a brief call this week to discuss your specific workplace goals and validate your ROI projections?

Best regards,
Nick Wall, Certified Horticulturalist
Atlanta Houseplants

P.S. I'll be sending you some additional strategic insights over the next few days, including case studies from similar-sized companies in the Atlanta area.`,
          cta: {
            text: 'Schedule My Strategic Consultation',
            url: 'https://api.leadconnectorhq.com/widget/booking/9fRFPShg1NmMIukGqwc4'
          },
          footer: 'Georgia\'s only State-Licensed Plant Professional | 500+ Businesses Served Since 2019'
        }
      },
      {
        emailId: 'roi-calc-002', 
        subject: 'Case Study: How {{company_type}} Achieved {{roi_percentage}}% ROI',
        delay: 48, // 2 days later
        contentType: 'social-proof',
        content: {
          headline: 'Real Results from Atlanta Businesses Like Yours',
          preview: 'See how companies similar to {{company}} achieved measurable workplace improvements',
          body: `Hi {{firstName}},

Yesterday I sent you our Executive ROI Calculator. Today I want to share specific results from Atlanta companies similar to {{company}}.

**Case Study: {{similar_company_industry}}**
• Employee Count: {{similar_size}}
• Implementation Timeline: {{timeline}}
• Measured Results:
  - {{productivity_increase}}% increase in productivity scores
  - {{stress_reduction}}% reduction in reported stress levels  
  - {{retention_improvement}} improvement in employee retention
  - {{client_feedback}} improvement in client environment feedback

**Their Strategic Approach:**
1. Started with a professional workspace assessment
2. Implemented high-impact zones first (reception, meeting areas)
3. Rolled out comprehensive care program with zero staff burden
4. Measured results quarterly using our performance metrics

**Most importantly:** They saw measurable improvements within the first 30 days.

The key difference between businesses that succeed and those that don't? They treat this as a strategic initiative with measurable goals, not a facilities expense.

Based on your company size ({{employee_count}}), I estimate you could see similar results within 4-6 weeks of implementation.

Want to discuss how this might work specifically for {{company}}? I have a few consultation slots open this week.`,
          cta: {
            text: 'Book My Results Discussion',
            url: 'https://api.leadconnectorhq.com/widget/booking/9fRFPShg1NmMIukGqwc4'
          },
          footer: 'Trusted by Fortune 500 companies and growing startups across Atlanta'
        }
      },
      {
        emailId: 'roi-calc-003',
        subject: 'Quick question about {{company}}\'s workplace goals...',
        delay: 120, // 5 days later
        contentType: 'consultation-booking',
        content: {
          headline: 'I\'m curious about your timeline...',
          preview: 'Most executives who download our ROI calculator are exploring implementation within the next quarter',
          body: `Hi {{firstName}},

I've been working with Atlanta businesses for over 15 years, and I've noticed something interesting:

Companies that download our ROI calculator typically fall into one of three categories:

**Immediate Implementers (30-60 days)**
These are usually companies with upcoming office moves, leadership changes, or specific employee satisfaction initiatives. They're ready to move fast and see results quickly.

**Strategic Planners (90-120 days)**
These businesses are incorporating workplace enhancements into broader strategic planning. They want to validate ROI and build internal support before moving forward.

**Researchers (6+ months)**
These companies are in early exploration mode, gathering information for future consideration.

I'm curious - which category best describes {{company}} right now?

The reason I ask is that my consultation approach varies significantly based on your timeline:

• **If you're in the 30-60 day range:** We focus on immediate implementation strategy and quick wins
• **If you're planning for 90-120 days:** We develop a comprehensive strategic plan with ROI tracking and stakeholder buy-in
• **If you're in research mode:** We focus on education and long-term strategic considerations

Would you mind sharing what's driving your interest in workplace enhancement right now? I'd love to tailor my consultation to be most valuable for your specific situation.

Either way, I have about 15 minutes this week if you'd like to discuss your specific goals.`,
          cta: {
            text: 'Book 15-Minute Strategy Call',
            url: 'https://api.leadconnectorhq.com/widget/booking/9fRFPShg1NmMIukGqwc4'
          },
          footer: 'No pressure, just strategic insights from 500+ successful implementations'
        }
      }
    ]
  },
  {
    sequenceId: 'audit-checklist-sequence',
    sequenceName: 'Workplace Wellness Audit Follow-up',
    trigger: 'audit-checklist-download',
    description: 'Operations-focused sequence for audit checklist downloads, emphasizing professional assessment and systematic improvement',
    emails: [
      {
        emailId: 'audit-001',
        subject: 'Your Professional Workplace Assessment + Implementation Framework',
        delay: 0,
        segmentation: ['facilities', 'operations', 'hr'],
        contentType: 'lead-magnet-delivery',
        content: {
          headline: 'Your 40-Point Professional Assessment is Ready',
          preview: 'Complete workplace audit checklist + systematic implementation guide from our certified team',
          body: `Hi {{firstName}},

Thank you for downloading our Professional Workplace Wellness Audit. This 40-point assessment framework is the same one our certified team uses for Fortune 500 evaluations.

**Your Complete Assessment Package:**
• [40-Point Workplace Audit Checklist]({{download_link}})
• [Strategic Implementation Timeline]({{implementation_guide}})  
• [Light & Air Flow Assessment Guide]({{technical_guide}})

**Professional Implementation Note:**
The businesses that get the best results from this audit follow a systematic approach:

1. **Complete the assessment** (usually takes 2-3 hours for a thorough evaluation)
2. **Identify high-impact zones** (areas with maximum employee exposure/client visibility)
3. **Prioritize improvements** based on impact vs. investment
4. **Implement systematically** with professional guidance

**Exclusive Offer for Assessment Participants:**
Since you're taking a systematic approach to workplace evaluation, I'd like to offer you a complimentary professional review of your completed assessment.

This 30-minute session includes:
• Professional validation of your findings
• Strategic recommendations based on your specific space
• Implementation priority guidance
• ROI projections for your top opportunities

Most companies find this review session helps them avoid common implementation mistakes and accelerates their timeline by 4-6 weeks.

Would this be valuable for {{company}}?`,
          cta: {
            text: 'Schedule My Assessment Review',
            url: 'https://api.leadconnectorhq.com/widget/booking/9fRFPShg1NmMIukGqwc4'
          },
          footer: 'Professional assessments completed for 500+ Atlanta businesses since 2019'
        }
      },
      {
        emailId: 'audit-002',
        subject: 'Assessment Results: What We\'ve Learned from 500+ Atlanta Offices',
        delay: 72, // 3 days later
        contentType: 'educational',
        content: {
          headline: 'The Most Common Assessment Findings (and What They Mean)',
          preview: 'Insights from 500+ professional workplace assessments across Atlanta',
          body: `Hi {{firstName}},

After completing over 500 workplace assessments in Atlanta, I've noticed some consistent patterns that might be helpful as you work through your evaluation.

**The Top 5 Issues We Find (and Their Business Impact):**

**1. Inadequate Natural Light Integration (Found in 78% of offices)**
• Impact: 23% decrease in reported energy levels
• Solution: Strategic plant placement to optimize existing light
• ROI: Usually 3:1 within first quarter

**2. Poor Air Quality in Meeting Spaces (Found in 65% of offices)**  
• Impact: Shorter attention spans, earlier meeting fatigue
• Solution: Air-purifying plants in high-density areas
• ROI: Improved meeting effectiveness, fewer follow-up meetings needed

**3. Sterile Reception Areas (Found in 89% of offices)**
• Impact: Missed opportunity for positive first impressions
• Solution: Professional plant installations that reinforce brand values
• ROI: Improved client perception and employee pride

**4. Neglected Employee Wellness Zones (Found in 71% of offices)**
• Impact: Higher stress, lower job satisfaction scores
• Solution: Biophilic design in break areas and collaboration spaces
• ROI: Improved retention and reduced sick days

**5. Inconsistent Plant Care Programs (Found in 94% of offices)**
• Impact: Failed investments, negative associations with "office plants"
• Solution: Professional maintenance programs with health guarantees
• ROI: Eliminated waste, consistent positive impact

**Most Interesting Finding:**
Companies that address all 5 areas systematically see 40% better results than those who tackle issues individually.

As you complete your assessment, pay special attention to these areas. They represent the highest-impact opportunities for most Atlanta businesses.

Questions about any of your assessment findings? I'm happy to provide professional interpretation during a brief consultation call.`,
          cta: {
            text: 'Discuss My Assessment Results',
            url: 'https://api.leadconnectorhq.com/widget/booking/9fRFPShg1NmMIukGqwc4'
          },
          footer: 'Evidence-based insights from Georgia\'s certified plant professional'
        }
      }
    ]
  },
  {
    sequenceId: 'case-studies-sequence',
    sequenceName: 'Business Transformation Case Studies Follow-up',
    trigger: 'case-studies-download',
    description: 'Results-focused sequence for case study downloads, emphasizing proven outcomes and implementation success',
    emails: [
      {
        emailId: 'cases-001',
        subject: 'Your Business Transformation Case Studies + Implementation Secrets',
        delay: 0,
        segmentation: ['executive', 'decision-maker'],
        contentType: 'lead-magnet-delivery',
        content: {
          headline: 'Real Results from 10 Atlanta Business Transformations',
          preview: 'Detailed case studies with ROI data + the implementation secrets that made the difference',
          body: `Hi {{firstName}},

Thank you for downloading our Business Transformation Case Studies. These 10 detailed analyses represent some of our most successful Atlanta implementations.

**Your Complete Case Study Package:**
• [10 Detailed Business Transformations PDF]({{download_link}})
• [ROI Tracking Spreadsheet Template]({{roi_template}})
• [Implementation Timeline Framework]({{timeline_guide}})

**What Makes These Cases Special:**
Unlike typical before/after photos, these case studies include:
• Detailed ROI calculations and measurement methodology
• Employee satisfaction survey results (before/after)
• Client feedback impact assessments  
• Implementation challenges and how they were solved
• Ongoing maintenance costs and efficiency metrics

**The Implementation Secret Most Companies Miss:**
After analyzing these successful transformations, one pattern emerges consistently:

The most successful implementations treat this as a *strategic business initiative* with specific, measurable goals - not as a facilities improvement project.

**Example:** Heritage Distribution (Case Study #3) approached this with goals to:
1. Improve client first impressions in their reception area
2. Reduce reported stress in high-pressure work zones
3. Create a more attractive work environment for recruitment

They measured progress quarterly and achieved:
• 23% improvement in client environment feedback
• 31% reduction in stress-related feedback
• 40% increase in positive workplace comments during interviews

**Which of these case studies most closely matches your situation?**
I'd be happy to discuss specific implementation strategies that worked for companies similar to yours.`,
          cta: {
            text: 'Discuss My Implementation Strategy',
            url: 'https://api.leadconnectorhq.com/widget/booking/9fRFPShg1NmMIukGqwc4'
          },
          footer: 'Proven strategies from 500+ successful Atlanta implementations'
        }
      }
    ]
  }
];

// General Business Inquiry Sequences (Form submissions without specific lead magnet)
export const businessInquirySequences: EmailSequence[] = [
  {
    sequenceId: 'business-quote-sequence',
    sequenceName: 'Business Consultation Request Follow-up',
    trigger: 'business-quote-form',
    description: 'Professional consultation booking sequence for general business inquiries',
    emails: [
      {
        emailId: 'biz-quote-001',
        subject: 'Your Workplace Consultation Details + What to Expect',
        delay: 0,
        contentType: 'follow-up',
        content: {
          headline: 'Your Professional Consultation is Confirmed',
          preview: 'Here\'s what to expect during your complimentary workplace assessment with our certified team',
          body: `Hi {{firstName}},

Thank you for your interest in professional plant services for {{company}}. I've received your consultation request and will be following up within 24 hours to schedule your complimentary workplace assessment.

**Your Consultation Includes:**
• Professional assessment of your workspace environment
• Strategic recommendations based on your specific goals
• Custom visual proposal with plant selection and placement
• ROI projections based on your employee count and objectives
• Implementation timeline and investment overview

**To Maximize Your Consultation Value:**
Please consider the following questions before our meeting:

1. What specific business outcomes are you hoping to achieve?
   - Improved employee satisfaction/retention?
   - Enhanced client impressions?
   - Better workplace culture/recruitment?
   - Productivity improvements?

2. Are there any areas of your office you'd like to prioritize?
   - Reception/client-facing areas?
   - Break rooms/collaboration spaces?
   - Executive areas/meeting rooms?
   - Open office/individual workspace areas?

3. What's your preferred timeline for implementation?

**What Our Clients Say About the Consultation Process:**
"Nick's assessment was incredibly thorough and professional. He identified opportunities we hadn't considered and provided specific ROI projections that helped us get executive approval immediately." - Sarah Chen, HR Director

I'm looking forward to discussing how strategic plant integration can support {{company}}'s workplace goals.

Best regards,
Nick Wall, Certified Horticulturalist`,
          cta: {
            text: 'Prepare for My Consultation',
            url: 'https://api.leadconnectorhq.com/widget/booking/9fRFPShg1NmMIukGqwc4'
          },
          footer: 'Georgia\'s State-Licensed Plant Professional | 100% Client Retention Since 2019'
        }
      },
      {
        emailId: 'biz-quote-002',
        subject: 'Strategic Resources for {{firstName}} at {{company}}',
        delay: 24,
        contentType: 'educational',
        content: {
          headline: 'Professional Tools to Support Your Decision-Making',
          preview: 'Strategic resources to help you evaluate workplace plant integration before our consultation',
          body: `Hi {{firstName}},

While we're scheduling your consultation, I wanted to share some strategic resources that might be helpful as you evaluate workplace plant integration for {{company}}.

**Professional Assessment Tools:**
• [Executive ROI Calculator]({{roi_calculator_link}}) - Calculate potential productivity and cost savings
• [40-Point Workplace Audit]({{audit_checklist_link}}) - Professional assessment framework
• [Atlanta Business Case Studies]({{case_studies_link}}) - Real results from similar companies

**Why These Tools Matter:**
Most successful implementations start with a clear understanding of:
1. Expected ROI and measurable outcomes
2. Current workplace assessment and improvement opportunities  
3. Proven strategies from similar businesses

Companies that complete this preparation before our consultation typically:
• Make decisions 40% faster
• Achieve better stakeholder buy-in
• See results 25% sooner after implementation

**Quick Question:**
What's the primary driver behind {{company}}'s interest in workplace enhancement right now? Understanding this helps me tailor our consultation to your specific priorities.

Looking forward to our discussion,
Nick Wall`,
          cta: {
            text: 'Access Professional Resources',
            url: '/resources'
          },
          footer: 'Evidence-based strategies for workplace transformation'
        }
      }
    ]
  }
];

// Plant Doctor Consultation Sequences
export const plantDoctorSequences: EmailSequence[] = [
  {
    sequenceId: 'plant-doctor-sequence',
    sequenceName: 'Plant Doctor Consultation Follow-up',
    trigger: 'plant-doctor-booking',
    description: 'Professional plant health consultation follow-up sequence',
    emails: [
      {
        emailId: 'plant-doc-001',
        subject: 'Your Plant Doctor Visit Confirmation + Preparation Guide',
        delay: 0,
        contentType: 'follow-up',
        content: {
          headline: 'Your Professional Plant Health Consultation is Confirmed',
          preview: 'Here\'s how to prepare for your $149 Plant Doctor visit with our certified horticulturalist',
          body: `Hi {{firstName}},

Your Plant Doctor consultation is confirmed for {{appointment_date}} at {{appointment_time}}.

**Your $149 Plant Doctor Visit Includes:**
• Professional diagnosis of all plant health issues
• Customized care protocol with specific instructions
• Treatment recommendations with product suggestions
• 30-day follow-up support via email
• 100% satisfaction guarantee

**To Maximize Your Consultation:**
Please prepare the following information:
1. Current watering schedule and frequency
2. Light conditions (hours of direct/indirect sunlight)
3. Recent changes to plant location or care routine
4. Photos of any specific problem areas or symptoms

**What to Expect During the Visit:**
1. **Comprehensive Assessment (20-30 minutes)** - Professional evaluation of each plant's health, growing conditions, and care requirements
2. **Diagnosis & Treatment Plan (15-20 minutes)** - Detailed explanation of any issues found and specific treatment protocols
3. **Care Protocol Review (10-15 minutes)** - Customized care instructions tailored to your specific plants and environment

**Professional Guarantee:**
As Georgia's only State-Licensed Plant Professional, I guarantee you'll see improvement in your plants' health within 30 days of following the prescribed care protocol, or I'll return for a complimentary follow-up visit.

If you need to reschedule or have any questions before the visit, please call (470) 664-4039.

Best regards,
Nick Wall, Certified Horticulturalist
Georgia State Plant Professional License #GP-2019-001`,
          cta: {
            text: 'Prepare for My Visit',
            url: 'tel:4706644039'
          },
          footer: 'Professional plant health services | 100% satisfaction guaranteed'
        }
      }
    ]
  }
];

// Corporate Gifting Sequences
export const corporateGiftingSequences: EmailSequence[] = [
  {
    sequenceId: 'corporate-gifting-sequence',
    sequenceName: 'Corporate Gifting Program Follow-up',
    trigger: 'corporate-gifting-inquiry',
    description: 'Automated corporate gifting program consultation and setup sequence',
    emails: [
      {
        emailId: 'corp-gift-001',
        subject: 'Your Corporate Gifting Program Setup + Partnership Benefits',
        delay: 0,
        contentType: 'follow-up',
        content: {
          headline: 'Strategic Employee Recognition Through Automated Plant Gifting',
          preview: 'Your corporate gifting consultation details + exclusive partnership benefits for annual programs',
          body: `Hi {{firstName}},

Thank you for your interest in our Corporate Gifting Program for {{company}}. I've received your inquiry and will be contacting you within 24 hours to discuss your employee recognition strategy.

**Your Consultation Will Cover:**
• Strategic gifting program design for your company culture
• Three-tier milestone collection (Welcome, Recognition, Executive levels)
• Automated quarterly delivery system setup
• Custom branding and packaging options
• Annual partnership benefits and 20% cost savings

**Program Overview:**
Our Corporate Gifting Program is designed for Atlanta businesses who want to:
• Automate their employee recognition calendar
• Eliminate administrative burden on HR teams
• Provide consistent, meaningful gifts that employees value
• Create positive associations with company milestones

**Most Popular Setup:**
- **Welcome Tier ($12 each):** New hire gifts, team appreciation
- **Recognition Tier ($45 each):** Work anniversaries, promotions  
- **Executive Tier ($125 each):** Major milestones, VIP recognition

**Annual Partnership Benefits:**
Companies who commit to 12-month programs receive:
• 20% discount on all gifts
• Complimentary custom branding package
• Quarterly automated delivery coordination
• Priority scheduling and customer service

**Quick Questions for Our Consultation:**
1. How many employees are you recognizing annually?
2. What milestones are most important to your culture?
3. What's your current approach to employee recognition?

Looking forward to designing a program that perfectly fits {{company}}'s culture and values.

Best regards,
Nick Wall`,
          cta: {
            text: 'Schedule My Gifting Strategy Call',
            url: 'tel:4706644039'
          },
          footer: 'Trusted corporate gifting partner for 500+ Atlanta businesses'
        }
      }
    ]
  }
];

// Export all sequences for Make.com integration
export const allEmailSequences = [
  ...leadMagnetSequences,
  ...businessInquirySequences,  
  ...plantDoctorSequences,
  ...corporateGiftingSequences
];

// Utility functions for Make.com integration
export const getSequenceByTrigger = (trigger: string): EmailSequence | undefined => {
  return allEmailSequences.find(sequence => sequence.trigger === trigger);
};

export const getEmailById = (emailId: string): EmailTemplate | undefined => {
  for (const sequence of allEmailSequences) {
    const email = sequence.emails.find(email => email.emailId === emailId);
    if (email) return email;
  }
  return undefined;
};