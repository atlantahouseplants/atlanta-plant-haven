
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Video, Home, Calendar } from "lucide-react";

const PlantDoctor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Plant Doctor Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert plant diagnostics, treatment, and care guidance from our certified plant doctor. 
              Get personalized solutions for your specific plant needs.
            </p>
          </div>

          {/* Booking Widget */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Book Your Plant Doctor Visit</h3>
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/J3NNAtlNcdw0V75i8LX2" 
                style={{width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px'}} 
                scrolling="no"
                title="Plant Doctor Booking"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-8">
                <Home className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">In-Home Visit - $129</h3>
                <p className="text-muted-foreground">
                  Comprehensive plant assessment, diagnosis, treatment, and personalized care guidance in your home.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Video className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Virtual Consultation</h3>
                <p className="text-muted-foreground">
                  Quick video consultation to diagnose plant problems and get expert advice from anywhere.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Calendar className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Plant Sitter Service</h3>
                <p className="text-muted-foreground">
                  Professional plant care while you're away. Travel worry-free knowing your plants are in expert hands.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What We Help With */}
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Our Plant Doctor Will Help You With:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Repotting Needs",
                "Disease & Fungal Issues", 
                "Pest & Insect Management",
                "Fertilization & Soil Management",
                "Proper Watering Techniques",
                "Natural Light Measuring",
                "Grow Light Recommendations",
                "Cuttings & Propagation"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Stethoscope className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">
                    "This plant had sentimental value to me, so I reached to see if anything could be done to help it. 
                    He was very realistic with the possible outcome, and he completely brought my plant back to life!"
                  </p>
                  <p className="font-semibold">- Erika, Google Review</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">
                    "We used the plant doctor service and highly recommend it! Nick was very helpful and knowledgeable on all things plants!"
                  </p>
                  <p className="font-semibold">- Josh, Google Review</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlantDoctor;
