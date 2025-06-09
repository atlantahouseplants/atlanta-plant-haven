
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Shield, Leaf, CheckCircle } from "lucide-react";

const OfficePlants = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                FREE Office Plant Design + Guaranteed Care
              </h1>
              <p className="text-xl text-muted-foreground">
                Transform your Atlanta office with professional plant design and maintenance. 
                Our certified plant doctor creates custom installations with a 100% plant guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Get FREE Design Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/e1930419-ea64-46bc-b42a-ed13b1f43ab1.png"
                alt="Professional office plant installation"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Office Plant Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial design to ongoing care, we handle everything to keep your office plants thriving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-600 border-2">
              <CardContent className="p-8">
                <Building2 className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">FREE Office Plant Design</h3>
                <p className="text-muted-foreground mb-6">
                  Our certified plant doctor will visit your office, assess the space, lighting, and create a custom plant design 
                  that enhances your work environment and improves air quality.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2" />Site assessment and light measurement</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2" />Custom plant selection</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2" />Professional installation</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2" />Care instructions and training</li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Schedule FREE Consultation
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Ongoing Plant Care</h3>
                <p className="text-muted-foreground mb-6">
                  Keep your plants healthy and thriving with our professional maintenance service. 
                  We guarantee your plants when you choose our ongoing care program.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2" />Weekly, bi-weekly, or monthly visits</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2" />Watering, fertilizing, pruning</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2" />Pest and disease management</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2" />100% plant replacement guarantee</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Get Care Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OfficePlants;
