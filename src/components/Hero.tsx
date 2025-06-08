
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Heart, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Transform Your{" "}
                <span className="text-green-600">Office</span> with{" "}
                <span className="text-green-600">Living Plants</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Professional plant services for Atlanta businesses. We design, install, and maintain beautiful plant displays that improve air quality and boost employee wellness.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Heart className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold">Boost Wellness</h3>
                  <p className="text-sm text-muted-foreground">Improve employee mood</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Zap className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold">Increase Productivity</h3>
                  <p className="text-sm text-muted-foreground">Enhance focus & creativity</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Leaf className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold">Clean Air</h3>
                  <p className="text-sm text-muted-foreground">Natural air purification</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/lovable-uploads/e1930419-ea64-46bc-b42a-ed13b1f43ab1.png"
                  alt="Beautiful Monstera plant in office setting"
                  className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img
                  src="/lovable-uploads/6ce5cacc-3f1d-46f2-93e8-2c25414367dd.png"
                  alt="Colorful Croton plant by office window"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/lovable-uploads/d5e71052-5399-473b-9c63-f6157490d96d.png"
                  alt="Money Tree in modern office lobby"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img
                  src="/lovable-uploads/4c82f760-9f02-4961-9064-4e01de1e97c2.png"
                  alt="Ficus plant in elegant office corner"
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
