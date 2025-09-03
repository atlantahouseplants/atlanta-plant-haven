import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowRight, CheckCircle, Calculator, FileText, TrendingUp, Clock } from "lucide-react";
import LeadMagnetModal from "./LeadMagnetModal";

interface InlineLeadCaptureProps {
  variant?: 'roi-calculator' | 'audit-checklist' | 'case-studies' | 'full-grid' | 'plant-investment-calculator' | 'office-readiness-assessment';
  title?: string;
  subtitle?: string;
  className?: string;
}

const InlineLeadCapture: React.FC<InlineLeadCaptureProps> = ({ 
  variant = 'roi-calculator',
  title,
  subtitle,
  className = ""
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMagnet, setSelectedMagnet] = useState<{
    type: any;
    title: string;
    description: string;
  } | null>(null);

  const leadMagnets = {
    'roi-calculator': {
      title: "Office Plant Investment Calculator",
      subtitle: "Quick ROI Estimate Tool",
      description: "Simple calculator that shows investment costs, expected benefits, and ROI multiple based on your employee count. Get instant results with package recommendations.",
      icon: Calculator,
      color: "blue",
      value: "3-minute calculator",
      benefits: [
        "Instant ROI calculation based on employee count",
        "Package recommendations for your office size", 
        "Conservative benefit estimates",
        "Budget-friendly option comparisons"
      ]
    },
    'plant-investment-calculator': {
      title: "Office Plant Investment Calculator",
      subtitle: "Quick ROI Estimate Tool",
      description: "Simple calculator that shows investment costs, expected benefits, and ROI multiple based on your employee count. Get instant results with package recommendations.",
      icon: Calculator,
      color: "blue",
      value: "3-minute calculator",
      benefits: [
        "Instant ROI calculation based on employee count",
        "Package recommendations for your office size", 
        "Conservative benefit estimates",
        "Budget-friendly option comparisons"
      ]
    },
    'audit-checklist': {
      title: "Office Plant Readiness Assessment",
      subtitle: "10-Question Evaluation",
      description: "Quick assessment to determine the best plant strategy for your office. Get personalized recommendations based on your environment, budget, and goals.",
      icon: CheckCircle,
      color: "green",
      value: "10-question assessment",
      benefits: [
        "Customized plant variety recommendations",
        "Environment-specific solutions",
        "Budget and maintenance matching",
        "Implementation roadmap included"
      ]
    },
    'office-readiness-assessment': {
      title: "Office Plant Readiness Assessment",
      subtitle: "10-Question Evaluation",
      description: "Quick assessment to determine the best plant strategy for your office. Get personalized recommendations based on your environment, budget, and goals.",
      icon: CheckCircle,
      color: "green",
      value: "10-question assessment",
      benefits: [
        "Customized plant variety recommendations",
        "Environment-specific solutions",
        "Budget and maintenance matching",
        "Implementation roadmap included"
      ]
    },
    'case-studies': {
      title: "Atlanta Business Transformation Case Studies",
      subtitle: "Real Results from 500+ Projects",
      description: "Detailed analysis of workplace transformations including productivity metrics, employee satisfaction improvements, and documented ROI.",
      icon: TrendingUp,
      color: "purple",
      value: "10 detailed case studies",
      benefits: [
        "Industry-specific results",
        "Measurable productivity gains",
        "Employee satisfaction data",
        "Implementation timelines"
      ]
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-50 to-indigo-50",
        border: "border-blue-200", 
        badge: "bg-blue-600 text-white",
        icon: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700"
      },
      green: {
        bg: "from-green-50 to-emerald-50",
        border: "border-green-200",
        badge: "bg-green-600 text-white", 
        icon: "text-green-600",
        button: "bg-green-600 hover:bg-green-700"
      },
      purple: {
        bg: "from-purple-50 to-violet-50",
        border: "border-purple-200",
        badge: "bg-purple-600 text-white",
        icon: "text-purple-600", 
        button: "bg-purple-600 hover:bg-purple-700"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const handleMagnetClick = (magnetType: string) => {
    const magnet = leadMagnets[magnetType as keyof typeof leadMagnets];
    if (magnet) {
      // Map legacy variants to new ones for the download
      const magnetTypeMapping: Record<string, string> = {
        'roi-calculator': 'plant-investment-calculator',
        'audit-checklist': 'office-readiness-assessment'
      };
      
      const actualType = magnetTypeMapping[magnetType] || magnetType;
      
      setSelectedMagnet({
        type: actualType,
        title: magnet.title,
        description: magnet.description
      });
      setModalOpen(true);
    }
  };

  if (variant === 'full-grid') {
    return (
      <>
        <section className={`py-16 bg-gradient-to-br from-gray-50 to-white ${className}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {title || "Strategic Business Resources"}
              </h2>
              <p className="text-lg text-blue-700 leading-relaxed">
                {subtitle || "Professional tools used by 500+ Atlanta businesses to evaluate and implement strategic workplace plant programs."}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(leadMagnets).map(([key, magnet]) => {
                const colorClasses = getColorClasses(magnet.color);
                const IconComponent = magnet.icon;
                
                return (
                  <Card 
                    key={key}
                    className={`bg-gradient-to-br ${colorClasses.bg} ${colorClasses.border} border-2 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer group`}
                    onClick={() => handleMagnetClick(key)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 ${colorClasses.bg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`h-5 w-5 ${colorClasses.icon}`} />
                        </div>
                        <Badge className={`${colorClasses.badge} text-xs px-2 py-1`}>
                          FREE
                        </Badge>
                      </div>
                      
                      <h3 className="font-bold text-foreground mb-2 leading-tight">
                        {magnet.title}
                      </h3>
                      
                      <p className="text-sm text-gray-700 mb-4">
                        {magnet.description}
                      </p>

                      <Button 
                        className={`w-full ${colorClasses.button} text-white text-sm py-2 font-semibold rounded-lg`}
                      >
                        <span className="flex items-center justify-center">
                          Download Now
                          <Download className="ml-2 h-4 w-4" />
                        </span>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {selectedMagnet && (
          <LeadMagnetModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            magnetType={selectedMagnet.type}
            title={selectedMagnet.title}
            description={selectedMagnet.description}
          />
        )}
      </>
    );
  }

  // Single magnet display
  const magnet = leadMagnets[variant];
  const colorClasses = getColorClasses(magnet.color);
  const IconComponent = magnet.icon;

  return (
    <>
      <div className={`bg-gradient-to-br ${colorClasses.bg} border-2 ${colorClasses.border} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center">
            <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
              <IconComponent className={`h-6 w-6 ${colorClasses.icon}`} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                {title || magnet.title}
              </h3>
              <p className="text-sm font-semibold text-gray-600">
                {subtitle || magnet.subtitle}
              </p>
            </div>
          </div>
          <Badge className={`${colorClasses.badge} px-3 py-1`}>
            FREE
          </Badge>
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">
          {magnet.description}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 text-sm">
              What's Included:
            </h4>
            <ul className="space-y-2">
              {magnet.benefits.slice(0, 2).map((benefit, index) => (
                <li key={index} className="flex items-start text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-2">
              <Clock className="h-4 w-4 inline mr-1" />
              Value: {magnet.value}
            </div>
            <div className="text-2xl font-bold text-green-600 mb-2">
              FREE Download
            </div>
            <div className="text-xs text-gray-500">
              Used by 500+ businesses
            </div>
          </div>
        </div>

        <Button 
          onClick={() => handleMagnetClick(variant)}
          className={`w-full ${colorClasses.button} text-white py-3 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300`}
        >
          <span className="flex items-center justify-center">
            Get My Free {magnet.title.split(' ')[0]} Tool
            <ArrowRight className="ml-2 h-5 w-5" />
          </span>
        </Button>
      </div>

      {selectedMagnet && (
        <LeadMagnetModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          magnetType={selectedMagnet.type}
          title={selectedMagnet.title}
          description={selectedMagnet.description}
        />
      )}
    </>
  );
};

export default InlineLeadCapture;