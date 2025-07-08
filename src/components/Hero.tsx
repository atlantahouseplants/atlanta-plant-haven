
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
              Plant Care & Design Company
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-4 leading-relaxed">
            Professional plant solutions that transform your workspace and guarantee results
          </p>
          
          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="flex items-center text-green-600 font-medium">
              <Building2 className="h-5 w-5 mr-2" />
              500+ Atlanta Businesses
            </div>
            <div className="flex items-center text-green-600 font-medium">
              <Star className="h-5 w-5 mr-2" />
              10,000+ Plants Installed
            </div>
            <div className="flex items-center text-green-600 font-medium">
              <Shield className="h-5 w-5 mr-2" />
              100% Plant Guarantee
            </div>
          </div>
        </div>

        {/* Simplified Two-Path Selection */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Business Path */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100 relative overflow-hidden">
            <div className="mb-6 rounded-xl overflow-hidden aspect-video">
              <img 
                src="/lovable-uploads/24794cd6-d871-433d-8ce5-1b5d61120d74.png" 
                alt="Professional office plants in modern Atlanta office"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex items-center mb-6">
              <Building2 className="h-12 w-12 text-green-600 mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-foreground">For Businesses</h2>
                <p className="text-muted-foreground">Transform your Atlanta workspace</p>
              </div>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-sm">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 flex-shrink-0">✓</span>
                <span className="font-medium">FREE Design & Plant Guarantee</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 flex-shrink-0">✓</span>
                <span className="font-medium">Employee Appreciation Plants</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 flex-shrink-0">✓</span>
                <span className="font-medium">Seasonal Color Solutions</span>
              </div>
            </div>

            <Button 
              onClick={() => openForm('business-quote')}
              className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white text-lg py-4 mb-4 shadow-lg"
            >
              Get Your FREE Quote (Same Week!)
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <p className="text-sm text-center text-muted-foreground">
              ✓ 24-hour response • ✓ UGA Certified Professional • ✓ 100% Plant guarantee
            </p>
          </div>

          {/* Individual Path */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-orange-100 relative overflow-hidden">
            <div className="mb-6 rounded-xl overflow-hidden aspect-video">
              <img
                src="/lovable-uploads/b0543742-bb86-45d7-a641-7ccd52b9be1f.png"
                alt="Nick, your plant doctor, providing expert plant care"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex items-center mb-6">
              <Home className="h-12 w-12 text-orange-600 mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-foreground">For Plant Parents</h2>
                <p className="text-muted-foreground">Expert plant doctor services</p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg mb-6">
              <h3 className="font-bold text-orange-800 mb-2">Meet Nick, Your Plant Doctor</h3>
              <p className="text-sm text-orange-700">
                UGA Horticulture graduate with 15+ years healing Atlanta's plants.
              </p>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-sm">
                <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 flex-shrink-0">🩺</span>
                <span className="font-medium">Plant Doctor House Call - $149</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 flex-shrink-0">✓</span>
                <span className="font-medium">Same-Week Appointments</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 flex-shrink-0">✓</span>
                <span className="font-medium">Professional Guarantee</span>
              </div>
            </div>

            <a 
              href="https://api.leadconnectorhq.com/widget/bookings/plantdoctorservice"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white text-lg py-4 shadow-lg">
                Book Plant Doctor Visit - $149 (Same Week!)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            
            <p className="text-sm text-center text-muted-foreground mt-4">
              ✓ Same-week appointments • ✓ Expert diagnosis • ✓ Professional guarantee
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <div className="inline-flex items-center gap-8 text-sm text-muted-foreground bg-white px-8 py-4 rounded-full shadow-sm">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              470-664-4039
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
