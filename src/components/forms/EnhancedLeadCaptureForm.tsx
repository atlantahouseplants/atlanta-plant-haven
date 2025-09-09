import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { calculateLeadScore, formatLeadForMakeCom, type LeadData } from "@/data/leadScoringSystem";
import { CheckCircle, Building2, Users, TrendingUp, Calendar } from "lucide-react";

interface EnhancedLeadCaptureFormProps {
  formType: 'business-consultation' | 'lead-magnet' | 'corporate-gifting';
  leadMagnetType?: string;
  onSuccess?: () => void;
  className?: string;
}

const EnhancedLeadCaptureForm: React.FC<EnhancedLeadCaptureFormProps> = ({
  formType,
  leadMagnetType,
  onSuccess,
  className = ""
}) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    title: '',
    phone: '',
    employeeCount: '',
    industry: '',
    timeline: '',
    primaryInterest: '',
    currentPlants: '',
    budget: '',
    message: '',
    consent: false,
    source: 'website'
  });

  const handleInputChange = (name: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare lead data for scoring
      const leadData: LeadData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        company: formData.company,
        title: formData.title,
        phone: formData.phone,
        employeeCount: formData.employeeCount,
        industry: formData.industry,
        leadMagnetDownloaded: leadMagnetType,
        formSubmitted: formType,
        timeline: formData.timeline,
        primaryInterest: formData.primaryInterest,
        currentPlants: formData.currentPlants,
        urgency: formData.timeline as any,
        source: formData.source
      };

      // Calculate lead score and format for Make.com
      const scoredLead = formatLeadForMakeCom(leadData);
      
      // Add form-specific data
      const payload = {
        ...scoredLead,
        formType,
        leadMagnetType,
        budget: formData.budget,
        message: formData.message,
        consent: formData.consent,
        timestamp: new Date().toISOString(),
        
        // Enhanced tracking data
        pageUrl: window.location.href,
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        
        // Personalization data
        personalizedSubject: generatePersonalizedSubject(scoredLead),
        nextBestAction: getNextBestAction(scoredLead)
      };

      // Submit to Make.com webhook with enhanced data
      const response = await fetch('https://hook.us1.make.com/crj4finfx3ubm8o2u7q4n4npa265tmrs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Success messaging based on lead score
        const successMessage = getSuccessMessage(scoredLead.leadCategory, formType);
        
        toast({
          title: successMessage.title,
          description: successMessage.description,
        });

        // Track conversion event
        if (typeof gtag !== 'undefined') {
          gtag('event', 'conversion', {
            'event_category': 'Lead Generation',
            'event_label': `${formType}-${scoredLead.leadCategory}`,
            'value': getLeadValue(scoredLead.leadCategory),
            'lead_score': scoredLead.leadScore,
            'employee_count': formData.employeeCount,
            'timeline': formData.timeline
          });
        }

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          title: '',
          phone: '',
          employeeCount: '',
          industry: '',
          timeline: '',
          primaryInterest: '',
          currentPlants: '',
          budget: '',
          message: '',
          consent: false,
          source: 'website'
        });

        onSuccess?.();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue submitting your request. Please try again or call us directly at (470) 664-4039.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white p-8 rounded-2xl shadow-xl border border-gray-200 ${className}`}>
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          {getFormTitle(formType, leadMagnetType)}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {getFormDescription(formType, leadMagnetType)}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Contact Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
              First Name *
            </Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              required
              className="mt-1"
              placeholder="John"
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
              Last Name *
            </Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              required
              className="mt-1"
              placeholder="Smith"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Business Email *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
            className="mt-1"
            placeholder="john@company.com"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="company" className="text-sm font-medium text-gray-700">
              Company Name *
            </Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              required
              className="mt-1"
              placeholder="Acme Corporation"
            />
          </div>
          <div>
            <Label htmlFor="title" className="text-sm font-medium text-gray-700">
              Job Title
            </Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="mt-1"
              placeholder="Office Manager"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number *
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            required
            className="mt-1"
            placeholder="(470) 555-0123"
          />
        </div>

        {/* Business Qualification Questions */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
          <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
            <Building2 className="h-5 w-5 mr-2" />
            Business Information
          </h4>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Label htmlFor="employeeCount" className="text-sm font-medium text-gray-700">
                Number of Employees *
              </Label>
              <Select onValueChange={(value) => handleInputChange('employeeCount', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-25">11-25 employees</SelectItem>
                  <SelectItem value="26-50">26-50 employees</SelectItem>
                  <SelectItem value="51-100">51-100 employees</SelectItem>
                  <SelectItem value="101-250">101-250 employees</SelectItem>
                  <SelectItem value="250+">250+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="industry" className="text-sm font-medium text-gray-700">
                Industry
              </Label>
              <Select onValueChange={(value) => handleInputChange('industry', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="finance">Finance & Banking</SelectItem>
                  <SelectItem value="legal">Legal Services</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="real-estate">Real Estate</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="timeline" className="text-sm font-medium text-gray-700">
              Implementation Timeline *
            </Label>
            <Select onValueChange={(value) => handleInputChange('timeline', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="When are you looking to start?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">Immediate (within 30 days)</SelectItem>
                <SelectItem value="1-3months">1-3 months</SelectItem>
                <SelectItem value="3-6months">3-6 months</SelectItem>
                <SelectItem value="6months+">6+ months</SelectItem>
                <SelectItem value="researching">Just researching</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Interest & Goals */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
          <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Goals & Interests
          </h4>
          
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="primaryInterest" className="text-sm font-medium text-gray-700">
                Primary Interest *
              </Label>
              <Select onValueChange={(value) => handleInputChange('primaryInterest', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="What's most important to you?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="employee-satisfaction">Employee Satisfaction & Retention</SelectItem>
                  <SelectItem value="client-impressions">Professional Image & Client Impressions</SelectItem>
                  <SelectItem value="productivity-improvement">Workplace Productivity Enhancement</SelectItem>
                  <SelectItem value="air-quality">Air Quality & Employee Wellness</SelectItem>
                  <SelectItem value="office-aesthetics">Office Aesthetics & Design</SelectItem>
                  <SelectItem value="corporate-gifting">Corporate Gifting Programs</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="currentPlants" className="text-sm font-medium text-gray-700">
                Current Office Plants Status
              </Label>
              <Select onValueChange={(value) => handleInputChange('currentPlants', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Do you currently have office plants?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No current office plants</SelectItem>
                  <SelectItem value="few-thriving">Few plants that are doing well</SelectItem>
                  <SelectItem value="many-thriving">Many plants that are thriving</SelectItem>
                  <SelectItem value="struggling">Plants that are struggling</SelectItem>
                  <SelectItem value="failed-attempts">Previous failed attempts</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Budget & Additional Info */}
        <div>
          <Label htmlFor="message" className="text-sm font-medium text-gray-700">
            Additional Information
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className="mt-1 h-24"
            placeholder="Tell us about your specific needs, goals, or any questions you have..."
          />
        </div>

        {/* Consent */}
        <div className="flex items-start space-x-3">
          <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={(checked) => handleInputChange('consent', checked)}
            required
          />
          <Label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
            I consent to receiving professional insights and strategic resources about workplace plant integration. 
            I understand I can unsubscribe at any time and that Atlanta Houseplants respects my privacy.
          </Label>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
              <div className="text-sm font-semibold text-gray-800">Professional Assessment</div>
              <div className="text-xs text-gray-600">Certified horticulturalist evaluation</div>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="h-8 w-8 text-green-600 mb-2" />
              <div className="text-sm font-semibold text-gray-800">24-Hour Response</div>
              <div className="text-xs text-gray-600">Quick follow-up guaranteed</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-green-600 mb-2" />
              <div className="text-sm font-semibold text-gray-800">500+ Businesses Served</div>
              <div className="text-xs text-gray-600">Trusted Atlanta partner since 2019</div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting || !formData.consent}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              Processing...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              {getSubmitButtonText(formType, leadMagnetType)}
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          )}
        </Button>
      </form>
    </div>
  );
};

// Helper functions
const getFormTitle = (formType: string, leadMagnetType?: string) => {
  if (formType === 'lead-magnet') {
    return `Get Your ${leadMagnetType?.replace(/-/g, ' ')?.replace(/\b\w/g, l => l.toUpperCase())}`;
  }
  
  const titles = {
    'business-consultation': 'Schedule Your Professional Consultation',
    'corporate-gifting': 'Design Your Corporate Gifting Program'
  };
  
  return titles[formType as keyof typeof titles] || 'Get Started';
};

const getFormDescription = (formType: string, leadMagnetType?: string) => {
  if (formType === 'lead-magnet') {
    return 'Please provide your business information to receive your professional resource and strategic insights from our certified team.';
  }
  
  const descriptions = {
    'business-consultation': 'Get a complimentary workplace assessment from Georgia\'s certified plant professional. We\'ll evaluate your space and provide strategic recommendations.',
    'corporate-gifting': 'Let\'s design an automated employee recognition program that strengthens your company culture while eliminating administrative burden.'
  };
  
  return descriptions[formType as keyof typeof descriptions] || 'Tell us about your needs so we can provide the best recommendations.';
};

const getSubmitButtonText = (formType: string, leadMagnetType?: string) => {
  if (formType === 'lead-magnet') {
    return 'Get My Professional Resource';
  }
  
  const buttonTexts = {
    'business-consultation': 'Schedule My Professional Assessment',
    'corporate-gifting': 'Design My Gifting Program'
  };
  
  return buttonTexts[formType as keyof typeof buttonTexts] || 'Submit Request';
};

const generatePersonalizedSubject = (scoredLead: any) => {
  const subjects = {
    'hot': `${scoredLead.firstName}, let's discuss your immediate implementation`,
    'warm': `${scoredLead.firstName}, your strategic consultation details`,
    'cold': `${scoredLead.firstName}, professional resources for ${scoredLead.company}`,
    'nurture': `${scoredLead.firstName}, workplace enhancement insights`
  };
  
  return subjects[scoredLead.leadCategory as keyof typeof subjects];
};

const getNextBestAction = (scoredLead: any) => {
  const actions = {
    'hot': 'immediate-consultation-call',
    'warm': 'detailed-proposal-preparation',
    'cold': 'educational-nurture-sequence',
    'nurture': 'long-term-relationship-building'
  };
  
  return actions[scoredLead.leadCategory as keyof typeof actions];
};

const getSuccessMessage = (leadCategory: string, formType: string) => {
  const messages = {
    'hot': {
      title: "High Priority Request Received!",
      description: "Based on your timeline and needs, Nick will personally contact you within 4 hours to discuss immediate next steps."
    },
    'warm': {
      title: "Request Submitted Successfully!",
      description: "We'll contact you within 24 hours with your consultation details and strategic recommendations."
    },
    'cold': {
      title: "Thank You for Your Interest!",
      description: "We'll send you strategic resources and follow up within 24 hours to discuss your workplace goals."
    },
    'nurture': {
      title: "Resources Coming Your Way!",
      description: "Check your email for valuable insights and we'll follow up soon with additional strategic information."
    }
  };
  
  return messages[leadCategory as keyof typeof messages] || messages.warm;
};

const getLeadValue = (leadCategory: string) => {
  const values = {
    'hot': 100,
    'warm': 75,
    'cold': 50,
    'nurture': 25
  };
  
  return values[leadCategory as keyof typeof values];
};

export default EnhancedLeadCaptureForm;