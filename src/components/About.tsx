
import { Card, CardContent } from "@/components/ui/card";
import { Award, Leaf, Shield, Users, GraduationCap, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Meet Nick: Your Certified Plant Doctor
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Unlike our competitors who hire untrained staff at $20/hour, Atlanta House Plants is led by Nick, 
                a University of Georgia certified plant professional with over 15 years of dedicated experience.
              </p>
            </div>

            {/* Nick's Credentials */}
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
                    <p className="text-sm text-muted-foreground">Professional plant care</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardContent className="p-4 flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-green-600" />
                  <div>
                    <h3 className="font-semibold">Lifelong Plant Lover</h3>
                    <p className="text-sm text-muted-foreground">Lives, breathes & grows plants</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-green-600">
              <p className="text-lg italic text-foreground">
                "I don't just work with plants - I live with them, breathe with them, and understand their needs at a molecular level. 
                That's the difference between professional plant care and someone just watering your plants."
              </p>
              <p className="text-right text-green-700 font-semibold mt-4">- Nick, Certified Plant Doctor</p>
            </div>
          </div>

          {/* Right Column - Stats & Guarantees */}
          <div className="space-y-6">
            <Card className="border-green-200 bg-white">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Shield className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Our Plant Guarantee</h3>
                  <p className="text-muted-foreground">
                    Every plant we maintain comes with a 100% health guarantee. 
                    If a plant fails under our care, we replace it at no cost.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">500+</div>
                    <div className="text-sm text-muted-foreground">Happy Offices</div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">10,000+</div>
                    <div className="text-sm text-muted-foreground">Plants Maintained</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-white">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Why Businesses Choose Us</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Professional credentials vs untrained hourly workers
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    100% plant guarantee protects your investment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    15+ years of proven expertise and results
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Complete service from design to ongoing care
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center p-6 bg-white rounded-lg border border-green-200">
              <p className="text-lg text-foreground mb-4">
                <strong>Ready to see the difference professional plant care makes?</strong>
              </p>
              <p className="text-muted-foreground">
                Contact us today for your free office plant design consultation or book a plant doctor visit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
