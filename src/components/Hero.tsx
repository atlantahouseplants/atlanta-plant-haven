
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Home, Award, Phone, Mail, Shield, Star } from "lucide-react";
import { useForm } from "@/components/forms/FormContext";
import { Link } from "react-router-dom";

const Hero = () => {
  const { openForm } = useForm();

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          {/* Credentials Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-green-100 rounded-full text-green-800 text-sm font-medium mb-8 shadow-sm">
            <Award className="h-5 w-5 mr-2" />
            Georgia Certified Plant Professional • UGA Horticulture Degree • 15+ Years Experience
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-8">
            Atlanta's #1
            <span className="block text-green-600 bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Plant Care Company
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-4 leading-relaxed">
            Professional plant solutions that transform your workspace and guarantee results
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="flex items-center text-green-600 font-medium">
              <Shield className="h-5 w-5 mr-2" />
              Professional Installation
            </div>
            <div className="flex items-center text-green-600 font-medium">
              <Star className="h-5 w-5 mr-2" />
              500+ Atlanta Businesses
            </div>
          </div>
        </div>

        {/* Two-Path Selection - Enhanced */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* B2B Path - Enhanced */}
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-green-100 relative overflow-hidden">
            {/* Office Plants Image - Better display */}
            <div className="mb-6 rounded-xl overflow-hidden aspect-video">
              <img 
                src="/lovable-uploads/5fd9b530-50f9-413b-b16c-230ffffbda8d.png" 
                alt="Professional office plants in modern Atlanta office with city view"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex items-center mb-6">
              <Building2 className="h-14 w-14 text-green-600 mr-4" />
              <div>
                <h2 className="text-3xl font-bold text-foreground">For Businesses & Offices</h2>
                <p className="text-lg text-muted-foreground">Transform your Atlanta workspace with professional plant solutions</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start text-base">
                <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm mr-4 mt-0.5 flex-shrink-0">✓</span>
                <div>
                  <span className="font-semibold">FREE Office Plant Design & Care</span>
                  <p className="text-sm text-muted-foreground">Complete consultation with ongoing maintenance and plant guarantee for business installations</p>
                </div>
              </div>
              <div className="flex items-start text-base">
                <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm mr-4 mt-0.5 flex-shrink-0">✓</span>
                <div>
                  <span className="font-semibold">Employee Appreciation Plants</span>
                  <p className="text-sm text-muted-foreground">Bulk succulents and plants for teams (we've served Georgia Tech with 2,000+ plants!)</p>
                </div>
              </div>
              <div className="flex items-start text-base">
                <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm mr-4 mt-0.5 flex-shrink-0">✓</span>
                <div>
                  <span className="font-semibold">Corporate Social Responsibility</span>
                  <p className="text-sm text-muted-foreground">Community impact programs and charitable giving initiatives</p>
                </div>
              </div>
              <div className="flex items-start text-base">
                <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm mr-4 mt-0.5 flex-shrink-0">✓</span>
                <div>
                  <span className="font-semibold">Seasonal Color Solutions</span>
                  <p className="text-sm text-muted-foreground">Indoor color bowls and outdoor planters for year-round beauty</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={() => openForm('business-quote')}
              className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white text-lg py-4 mb-4 shadow-lg"
            >
              Get Your FREE Business Plant Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <p className="text-sm text-center text-muted-foreground">
              ✓ 24-hour response • ✓ Free on-site consultation • ✓ Professional guarantee
            </p>
          </div>

          {/* Individual Path - Enhanced */}
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-blue-100 relative overflow-hidden">
            {/* Nick's Photo - Better display */}
            <div className="mb-6 rounded-xl overflow-hidden aspect-video">
              <img 
                src="/lovable-uploads/35c56d89-5991-47a6-a64b-19c134b4b9ec.png" 
                alt="Nick, your plant doctor, providing expert plant care"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex items-center mb-6">
              <Home className="h-14 w-14 text-blue-600 mr-4" />
              <div>
                <h2 className="text-3xl font-bold text-foreground">For Plant Parents & Homeowners</h2>
                <p className="text-lg text-muted-foreground">Expert plant doctor services for your personal plants</p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold text-orange-800 mb-2">Meet Nick, Your Plant Doctor</h3>
              <p className="text-sm text-orange-700">
                UGA Horticulture graduate with 15+ years healing Atlanta's plants. Specializing in comprehensive 
                plant diagnostics, pest management, and personalized care solutions.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start text-base">
                <span className="bg-orange-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm mr-4 mt-0.5 flex-shrink-0">🩺</span>
                <div>
                  <span className="font-semibold">Plant Doctor House Call - $129</span>
                  <p className="text-sm text-muted-foreground">Comprehensive 90-minute diagnosis, treatment, and personalized care plan</p>
                </div>
              </div>
              <div className="flex items-start text-base">
                <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm mr-4 mt-0.5 flex-shrink-0">✓</span>
                <div>
                  <span className="font-semibold">Home Plant Design - $199</span>
                  <p className="text-sm text-muted-foreground">Professional consultation (credited back with installation)</p>
                </div>
              </div>
              <div className="flex items-start text-base">
                <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm mr-4 mt-0.5 flex-shrink-0">✓</span>
                <div>
                  <span className="font-semibold">Seasonal Color Planters</span>
                  <p className="text-sm text-muted-foreground">Beautiful outdoor seasonal solutions for your home</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={() => openForm('plant-doctor')}
                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white text-lg py-4 shadow-lg"
              >
                Book Plant Doctor Visit - $129
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => openForm('home-consultation')}
                variant="outline" 
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700"
              >
                Request Home Consultation
              </Button>
            </div>
            
            <p className="text-sm text-center text-muted-foreground mt-4">
              ✓ Same-week appointments • ✓ Expert diagnosis • ✓ Professional results
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <div className="inline-flex items-center gap-8 text-sm text-muted-foreground bg-white px-8 py-4 rounded-full shadow-sm">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              Emergency Plant Help: (470) 664-4039
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              ana@atlantahouseplants.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
