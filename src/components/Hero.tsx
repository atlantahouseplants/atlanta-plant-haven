
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Heart, Zap, Shield, Award } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-medium mb-4">
                <Award className="h-4 w-4 mr-2" />
                UGA Certified Plant Professional • 15+ Years Experience
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Free{" "}
                <span className="text-green-600">Office Plant Design</span>{" "}
                + Guaranteed Care
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Transform your Atlanta office with professional plant design and maintenance. 
                Our certified plant doctor creates custom installations with a <strong>100% plant guarantee</strong> on all maintained plants.
              </p>
            </div>

            {/* Key Differentiators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border-l-4 border-green-600">
                <Shield className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold">100% Guarantee</h3>
                  <p className="text-sm text-muted-foreground">On all maintained plants</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border-l-4 border-green-600">
                <Award className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold">Certified Expert</h3>
                  <p className="text-sm text-muted-foreground">UGA Horticulture Degree</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border-l-4 border-green-600">
                <Leaf className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold">15+ Years</h3>
                  <p className="text-sm text-muted-foreground">Professional experience</p>
                </div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
                  Get FREE Office Plant Design
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-4">
                  Book Plant Doctor Visit - $129
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                ✓ Free consultation & custom design • ✓ Professional installation • ✓ Ongoing maintenance available
              </p>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/lovable-uploads/e1930419-ea64-46bc-b42a-ed13b1f43ab1.png"
                  alt="Professional office plant installation - Monstera in corporate setting"
                  className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img
                  src="/lovable-uploads/6ce5cacc-3f1d-46f2-93e8-2c25414367dd.png"
                  alt="Colorful office plants by window - Croton plant design"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/lovable-uploads/d5e71052-5399-473b-9c63-f6157490d96d.png"
                  alt="Money Tree in professional office lobby"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img
                  src="/lovable-uploads/4c82f760-9f02-4961-9064-4e01de1e97c2.png"
                  alt="Elegant Ficus plant installation in conference room"
                  className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
