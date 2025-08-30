import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowRight, CheckCircle, FileText, Calculator, Users, Leaf, TrendingUp, Building2 } from "lucide-react";
import { useForm } from "@/components/forms/FormContext";

const LeadMagnets = () => {
  const { openForm } = useForm();

  const leadMagnets = [
    {
      id: "executive-roi-calculator",
      title: "Executive ROI Calculator",
      subtitle: "Calculate Your Plant Investment Return",
      description: "Interactive tool to calculate productivity gains, health benefits cost savings, and brand enhancement value from strategic office plant installation.",
      value: "15-minute assessment",
      category: "Business Tools",
      icon: Calculator,
      color: "blue",
      benefits: [
        "Productivity increase projections",
        "Healthcare cost reduction estimates", 
        "Employee retention value calculation",
        "Brand perception impact metrics"
      ],
      cta: "Get My Custom ROI Analysis"
    },
    {
      id: "biophilic-design-audit",
      title: "Workplace Wellness Audit Checklist",
      subtitle: "40-Point Assessment Tool",
      description: "Professional checklist used by our certified horticulturalist to evaluate workplace environments and identify strategic plant placement opportunities.",
      value: "Professional checklist",
      category: "Assessment Tools",
      icon: CheckCircle,
      color: "green",
      benefits: [
        "Light condition analysis framework",
        "Air quality improvement zones",
        "Employee wellness impact areas",
        "Strategic placement guidelines"
      ],
      cta: "Download Professional Audit"
    },
    {
      id: "atlanta-plant-guide",
      title: "Atlanta Office Plant Selection Guide",
      subtitle: "Climate-Optimized Recommendations",
      description: "Comprehensive guide featuring 25+ plants specifically selected for Atlanta's climate and office conditions, with detailed care requirements and placement strategies.",
      value: "25+ plant profiles",
      category: "Plant Selection",
      icon: Leaf,
      color: "green",
      benefits: [
        "Atlanta climate considerations",
        "Low-maintenance options",
        "Air purification rankings",
        "Professional placement tips"
      ],
      cta: "Get Plant Selection Guide"
    },
    {
      id: "case-study-collection",
      title: "Atlanta Business Transformation Case Studies",
      subtitle: "Real Results from 500+ Projects",
      description: "Detailed analysis of workplace transformations across industries including productivity metrics, employee satisfaction improvements, and ROI documentation.",
      value: "10 detailed case studies",
      category: "Success Stories",
      icon: TrendingUp,
      color: "purple",
      benefits: [
        "Industry-specific results",
        "Measurable productivity gains",
        "Employee satisfaction data",
        "Implementation timelines"
      ],
      cta: "Access Case Studies"
    },
    {
      id: "maintenance-automation-guide",
      title: "Plant Care Automation Playbook",
      subtitle: "Zero-Burden Maintenance Systems",
      description: "Step-by-step guide to implementing automated plant care programs that eliminate administrative burden while ensuring 100% plant health.",
      value: "Complete automation framework",
      category: "Operations",
      icon: Users,
      color: "blue",
      benefits: [
        "Staff training elimination",
        "Automated scheduling systems",
        "Quality assurance protocols",
        "Cost optimization strategies"
      ],
      cta: "Download Automation Guide"
    },
    {
      id: "proposal-template",
      title: "Executive Plant Program Proposal Template",
      subtitle: "C-Suite Presentation Ready",
      description: "Professional presentation template for proposing workplace plant programs to executive teams, including ROI justification and implementation timelines.",
      value: "Executive presentation",
      category: "Business Tools",
      icon: Building2,
      color: "blue",
      benefits: [
        "Executive-level messaging",
        "ROI justification framework",
        "Implementation timeline",
        "Budget allocation guidance"
      ],
      cta: "Get Proposal Template"
    }
  ];

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

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Professional Resources for Strategic Decision Making
          </h2>
          <p className="text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed">
            Access the same strategic tools and frameworks our certified professionals use to design, 
            implement, and optimize workplace plant programs for 500+ Atlanta businesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {leadMagnets.map((magnet) => {
            const colorClasses = getColorClasses(magnet.color);
            const IconComponent = magnet.icon;
            
            return (
              <Card 
                key={magnet.id} 
                className={`bg-gradient-to-br ${colorClasses.bg} ${colorClasses.border} border-2 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 group`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-6 w-6 ${colorClasses.icon}`} />
                    </div>
                    <Badge className={`${colorClasses.badge} text-xs px-3 py-1`}>
                      {magnet.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-foreground mb-2 leading-tight">
                    {magnet.title}
                  </CardTitle>
                  
                  <div className="text-sm font-semibold text-gray-600 mb-3">
                    {magnet.subtitle}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {magnet.description}
                  </p>

                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-800 mb-3">
                      What You'll Get:
                    </div>
                    <ul className="space-y-2">
                      {magnet.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium text-gray-600">
                      Value: {magnet.value}
                    </div>
                    <div className="text-lg font-bold text-green-600">
                      FREE
                    </div>
                  </div>

                  <Button 
                    onClick={() => openForm('business-quote')}
                    className={`w-full ${colorClasses.button} text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold rounded-lg group-hover:scale-[1.02]`}
                  >
                    <span className="flex items-center justify-center">
                      {magnet.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Trusted by 500+ Atlanta Businesses Since 2019
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-gray-600">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">15%</div>
                <div className="text-gray-600">Avg. Productivity Gain</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">24hr</div>
                <div className="text-gray-600">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnets;