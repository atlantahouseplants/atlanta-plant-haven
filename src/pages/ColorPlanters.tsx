
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, RefreshCw, CheckCircle } from "lucide-react";

const ColorPlanters = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Handmade Color Planter Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Custom seasonal designs using the freshest blooms. Transform your outdoor spaces and indoor areas 
              with our professional color planter and bowl services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <img
              src="/lovable-uploads/f816d29c-4694-4186-8770-9e16ab935892.png"
              alt="Custom outdoor color planters"
              className="w-full rounded-lg shadow-lg"
            />
            <img
              src="/lovable-uploads/6ff8c577-b398-4b80-990c-e948788ec260.png"
              alt="Indoor color bowl arrangements"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-purple-600 border-2">
              <CardContent className="p-8">
                <Palette className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Outdoor Color Planters</h3>
                <p className="text-muted-foreground mb-6">
                  Handmade seasonal planter designs for business patios, hotel pool areas, restaurant outdoor spaces, 
                  and commercial properties. Created fresh for spring and fall seasons.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-purple-600 mr-2" />Custom seasonal designs</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-purple-600 mr-2" />Fresh seasonal blooms</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-purple-600 mr-2" />Professional installation</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-purple-600 mr-2" />Spring & fall refresh available</li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Request Planter Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="border-pink-600 border-2">
              <CardContent className="p-8">
                <RefreshCw className="h-12 w-12 text-pink-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Indoor Color Bowl Service</h3>
                <p className="text-muted-foreground mb-6">
                  Handmade ceramic color bowls for indoor spaces. Perfect for hotel lobbies, office reception areas, 
                  conference tables, and waiting areas. Refreshed every 6 weeks.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-pink-600 mr-2" />Minimum 3 bowls per service</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-pink-600 mr-2" />Orchids, succulents, seasonal plants</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-pink-600 mr-2" />6-week rotation schedule</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-pink-600 mr-2" />Always fresh and seasonal</li>
                </ul>
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                  Request Bowl Service Quote
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Gallery Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-8">Our Color Planter Work</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <img src="/lovable-uploads/91809c55-8571-46c3-b671-b411d93dbe4e.png" alt="Restaurant patio planters" className="w-full h-64 object-cover rounded-lg shadow-md" />
              <img src="/lovable-uploads/6eb64e7a-2313-4a09-82f2-73a7f9476f8f.png" alt="Balcony color display" className="w-full h-64 object-cover rounded-lg shadow-md" />
              <img src="/lovable-uploads/5dc2ebdc-1068-42bb-811b-6c05f8b694d7.png" alt="Rooftop garden design" className="w-full h-64 object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ColorPlanters;
