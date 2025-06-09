
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Users, Building, Heart } from "lucide-react";

const Corporate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Corporate Plant Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bulk plant orders, corporate gifting solutions, and our Succulents for Smiles CSR program. 
              Perfect for large-scale projects and employee wellness initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <Gift className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Corporate Gifting</h3>
                <p className="text-muted-foreground">
                  Bulk plant orders for employee gifts, client appreciation, grand openings, and special events.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Heart className="h-16 w-16 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Succulents for Smiles</h3>
                <p className="text-muted-foreground">
                  Our CSR program bringing joy to healthcare facilities, schools, and community organizations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Building className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Large-Scale Projects</h3>
                <p className="text-muted-foreground">
                  Complete office building installations, hotel lobbies, and multi-location corporate projects.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Ready for a Corporate Partnership?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss your corporate plant needs, bulk ordering requirements, or CSR program goals. 
              We create custom solutions for businesses of all sizes.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Request Corporate Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Corporate;
