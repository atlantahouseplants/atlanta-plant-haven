import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Download, Building2, Users, TrendingUp, X } from "lucide-react";
import { calculateLeadScore, formatLeadForMakeCom, type LeadData } from "@/data/leadScoringSystem";

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
  magnetType: 'roi-calculator' | 'audit-checklist' | 'plant-guide' | 'case-studies' | 'automation-guide' | 'proposal-template';
  title: string;
  description: string;
}

const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({
  isOpen,
  onClose,
  magnetType,
  title,
  description
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    title: '',
    employeeCount: '',
    currentPlants: '',
    primaryInterest: '',
    timeline: ''
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Prepare enhanced lead data with scoring
      const leadData: LeadData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        company: formData.company,
        title: formData.title,
        employeeCount: formData.employeeCount,
        leadMagnetDownloaded: magnetType,
        formSubmitted: 'lead-magnet',
        timeline: formData.timeline,
        primaryInterest: formData.primaryInterest,
        currentPlants: formData.currentPlants,
        urgency: formData.timeline as any,
        source: 'website'
      };

      // Calculate lead score and format for Make.com
      const scoredLead = formatLeadForMakeCom(leadData);

      const response = await fetch("https://hook.us1.make.com/ksjtagxicktvi9jblyyj78demqsvuhp7", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...scoredLead,
          leadMagnetType: magnetType,
          leadMagnetTitle: title,
          service: "Lead Magnet Download",
          
          // Enhanced tracking for email optimization
          downloadTrigger: `${magnetType}-download`,
          personalizedSubject: `${formData.firstName}, your ${title} is ready + strategic implementation insights`,
          emailSequenceTrigger: `${magnetType}-sequence`,
          
          // Performance tracking
          modalSource: 'lead-magnet-modal',
          pageUrl: window.location.href,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        // Dynamic success message based on lead score
        const successMessage = getSuccessMessage(scoredLead.leadCategory, magnetType);
        
        toast({
          title: successMessage.title,
          description: successMessage.description,
        });

        // Track high-value conversion events
        if (typeof gtag !== 'undefined') {
          gtag('event', 'conversion', {
            'event_category': 'Lead Magnet Download',
            'event_label': `${magnetType}-${scoredLead.leadCategory}`,
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
          employeeCount: '',
          currentPlants: '',
          primaryInterest: '',
          timeline: ''
        });
        
        onClose();
        
        // Simulate download trigger (would be actual download in production)
        setTimeout(() => {
          const link = document.createElement('a');
          link.href = `/lead-magnets/${magnetType}.pdf`;
          link.download = `${title.replace(/\s+/g, '_')}.pdf`;
          link.click();
        }, 500);
        
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue processing your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  const getBenefits = () => {
    const benefits = {
      'roi-calculator': [
        'Instant productivity gain calculations',
        'Healthcare cost reduction estimates',
        'Employee retention value analysis',
        'Brand enhancement metrics'
      ],
      'audit-checklist': [
        'Professional 40-point assessment',
        'Light analysis framework',
        'Air quality improvement zones', 
        'Strategic placement guidelines'
      ],
      'plant-guide': [
        '25+ Atlanta-optimized plants',
        'Climate consideration factors',
        'Maintenance difficulty ratings',
        'Air purification rankings'
      ],
      'case-studies': [
        '10 detailed transformations',
        'Industry-specific results',
        'Measurable ROI documentation',
        'Implementation timelines'
      ],
      'automation-guide': [
        'Complete automation framework',
        'Staff training elimination',
        'Quality assurance protocols',
        'Cost optimization strategies'
      ],
      'proposal-template': [
        'Executive presentation slides',
        'ROI justification framework',
        'Implementation timeline',
        'Budget allocation guidance'
      ]
    };
    return benefits[magnetType] || [];
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center mr-4">
                <Download className="h-6 w-6 text-white" />
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold text-foreground">
                  {title}
                </DialogTitle>
                <p className="text-green-600 font-semibold text-sm">
                  Professional Resource - FREE Download
                </p>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Left Column - Benefits */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
            <h3 className="text-lg font-bold text-green-800 mb-4">
              What You'll Receive:
            </h3>
            <ul className="space-y-3">
              {getBenefits().map((benefit, index) => (
                <li key={index} className="flex items-start text-sm text-green-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 bg-white/70 rounded-lg border border-green-200">
              <p className="text-sm text-green-800">
                <strong>Bonus:</strong> You'll also receive strategic insights from our certified 
                horticulturalist and priority access to consultation scheduling.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  Business Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="mt-1"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-sm font-medium">
                  Company Name *
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="title" className="text-sm font-medium">
                  Job Title
                </Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="mt-1"
                  placeholder="e.g., Office Manager, HR Director"
                />
              </div>

              <div>
                <Label htmlFor="employeeCount" className="text-sm font-medium">
                  Number of Employees
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
                <Label htmlFor="timeline" className="text-sm font-medium">
                  Implementation Timeline
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

              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold text-lg mt-6"
              >
                Get My Free Resource Now
                <Download className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-xs text-gray-500 text-center mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Helper functions for dynamic messaging
const getSuccessMessage = (leadCategory: string, magnetType: string) => {
  const messages = {
    'hot': {
      title: "High Priority Download - Immediate Follow-up!",
      description: "Based on your timeline, Nick will personally contact you within 4 hours to discuss strategic implementation. Check your email for your resource plus exclusive insights."
    },
    'warm': {
      title: "Success! Your Professional Resource is Ready",
      description: "Check your email for your download plus strategic implementation insights from our certified team. We'll follow up within 24 hours."
    },
    'cold': {
      title: "Thank You! Your Business Resource is Ready",
      description: "Check your email for your professional tool plus additional strategic insights. We'll send you valuable implementation tips over the next few days."
    },
    'nurture': {
      title: "Resource Delivered Successfully!",
      description: "Your professional resource is in your email along with strategic insights to support your planning process."
    }
  };
  
  return messages[leadCategory as keyof typeof messages] || messages.warm;
};

const getLeadValue = (leadCategory: string) => {
  const values = {
    'hot': 150,
    'warm': 100,
    'cold': 75,
    'nurture': 50
  };
  
  return values[leadCategory as keyof typeof values];
};

export default LeadMagnetModal;