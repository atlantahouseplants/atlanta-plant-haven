
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Leaf, Heart } from "lucide-react";

const WhyChooseNick = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Meet Nick: Your Certified Plant Doctor
          </h2>
          <p className="text-lg text-muted-foreground">
            Unlike competitors who send untrained staff at $20/hour, you get a certified professional with over 15 years of dedicated experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/28593236-95fc-4036-9a18-8ba385a7e907.png" 
              alt="Nick working with plants"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-green-200">
                <CardContent className="p-4 flex items-center space-x-3">
                  <GraduationCap className="h-8 w-8 text-green-600" />
                  <div>
                    <h3 className="font-semibold">UGA Horticulture Degree</h3>
                    <p className="text-sm text-muted-foreground">University of Georgia</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-green-200">
                <CardContent className="p-4 flex items-center space-x-3">
                  <Award className="h-8 w-8 text-green-600" />
                  <div>
                    <h3 className="font-semibold">GA Certified Professional</h3>
                    <p className="text-sm text-muted-foreground">State of Georgia</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardContent className="p-4 flex items-center space-x-3">
                  <Leaf className="h-8 w-8 text-green-600" />
                  <div>
                    <h3 className="font-semibold">15+ Years Experience</h3>
                    <p className="text-sm text-muted-foreground">Solving plant problems</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardContent className="p-4 flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-green-600" />
                  <div>
                    <h3 className="font-semibold">Personal Approach</h3>
                    <p className="text-sm text-muted-foreground">Treats plants like family</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <p className="text-lg italic text-foreground mb-4">
                "I don't just work with plants - I live with them, breathe with them, and understand their needs at a molecular level. 
                That's the difference between professional plant care and someone just watering your plants. I won't give up on your plant, 
                and I'll teach you everything you need to know to keep it thriving."
              </p>
              <p className="text-right text-green-700 font-semibold">- Nick, Certified Plant Doctor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNick;
