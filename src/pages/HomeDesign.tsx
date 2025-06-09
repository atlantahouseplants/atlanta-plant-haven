
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Leaf, Star } from "lucide-react";

const HomeDesign = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Premium Home Plant Design
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Residential plant design and care services for discerning homeowners who want 
              professional-quality plant installations in their living spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <Home className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Home Consultations</h3>
                <p className="text-muted-foreground">
                  Professional assessment of your home's lighting and space for optimal plant placement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Leaf className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Custom Installations</h3>
                <p className="text-muted-foreground">
                  Curated plant selections and professional installation for your unique home environment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Star className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Ongoing Care</h3>
                <p className="text-muted-foreground">
                  Regular maintenance visits to keep your home plants healthy and beautiful year-round.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-emerald-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Transform Your Home with Plants</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ready to bring professional plant design to your home? Let's create a beautiful, 
              healthy living environment tailored to your space and lifestyle.
            </p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Schedule Home Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeDesign;
