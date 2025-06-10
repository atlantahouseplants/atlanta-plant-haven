
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Home, Award, Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          {/* Credentials Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-medium mb-6">
            <Award className="h-4 w-4 mr-2" />
            Georgia Certified Plant Professional • UGA Horticulture Degree • 15+ Years Experience
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Atlanta's Professional
            <span className="block text-green-600">Plant Care Company</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Serving 500+ Atlanta businesses and plant parents with expert plant design, 
            care, and guaranteed results. Choose your path below:
          </p>
        </div>

        {/* Two-Path Selection */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* B2B Path */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-green-600 relative">
            <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-sm font-medium">
              Primary Focus
            </div>
            <div className="flex items-center mb-6">
              <Building2 className="h-12 w-12 text-green-600 mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-foreground">For Businesses & Offices</h2>
                <p className="text-muted-foreground">Professional plant solutions for Atlanta companies</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-sm">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">✓</span>
                <span><strong>Office Plant Design & Care</strong> - FREE design + guaranteed plant care</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">✓</span>
                <span><strong>Corporate Gifting</strong> - Bulk succulents for teams (like Georgia Tech's 2,000!)</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">✓</span>
                <span><strong>Smiles for Succulents</strong> - CSR donation program</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">✓</span>
                <span><strong>Color Bowls & Planters</strong> - Indoor/outdoor business solutions</span>
              </div>
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-4 mb-4">
              Get Your FREE Business Plant Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <p className="text-xs text-center text-muted-foreground">
              ✓ 24-hour response • ✓ Free consultation • ✓ 100% plant guarantee
            </p>
          </div>

          {/* Individual Path */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-600">
            <div className="flex items-center mb-6">
              <Home className="h-12 w-12 text-blue-600 mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-foreground">For Plant Parents & Homeowners</h2>
                <p className="text-muted-foreground">Expert help for your personal plant needs</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-sm">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">✓</span>
                <span><strong>Plant Doctor Service</strong> - $129 comprehensive 90-minute visit</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">✓</span>
                <span><strong>Home Design</strong> - $199 consultation (credited back with install)</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">✓</span>
                <span><strong>Home Color Planters</strong> - Seasonal outdoor solutions</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-4">
                Book Plant Doctor Visit - $129
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                Request Home Consultation
              </Button>
            </div>
            
            <p className="text-xs text-center text-muted-foreground mt-4">
              ✓ Same-week appointments • ✓ Expert diagnosis • ✓ Care instructions included
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <div className="flex items-center text-sm text-muted-foreground">
            <Phone className="h-4 w-4 mr-2" />
            Emergency Plant Help: (770) 123-4567
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Mail className="h-4 w-4 mr-2" />
            nick@atlantahouseplants.com
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
