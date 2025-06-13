
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Video, Home, Calendar, Award, GraduationCap, Heart, Leaf, CheckCircle, Phone, Mail } from "lucide-react";
import { useForm } from "@/components/forms/FormContext";

const PlantDoctor = () => {
  const { openForm } = useForm();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Professional Plant Doctor Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert plant diagnostics, treatment, and care from Nick, your certified plant doctor. 
                15+ years of experience saving plants and solving problems others can't.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => openForm('plant-doctor')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
                >
                  Book Plant Doctor Visit - $149
                </Button>
                <Button 
                  variant="outline" 
                  className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
                >
                  Call Now: (770) 123-4567
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/adc22a4b-2da2-4d41-81ef-8d805c712e3b.png" 
                alt="Nick - Your Certified Plant Doctor"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Nick Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Nick: Your Certified Plant Doctor
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Unlike our competitors who hire untrained staff at $20/hour, Nick is a University of Georgia 
              certified plant professional with over 15 years of dedicated experience treating plants like family.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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
                      <p className="text-sm text-muted-foreground">Professional plant care</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <Heart className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="font-semibold">Lifelong Plant Lover</h3>
                      <p className="text-sm text-muted-foreground">Lives & breathes plants</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <p className="text-lg italic text-foreground mb-4">
                  "I don't just work with plants - I live with them, breathe with them, and understand their needs at a molecular level. 
                  I treat every plant like it's my own and do everything possible to save it."
                </p>
                <p className="text-right text-green-700 font-semibold">- Nick, Certified Plant Doctor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Plant Doctor Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional plant care and medical services for your green friends
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-8">
                <Home className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">In-Home Visit - $149</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive 90-minute plant assessment, diagnosis, treatment, and personalized care guidance in your home.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Complete plant health assessment</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Professional diagnosis & treatment</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Customized care plan</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Follow-up support included</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Video className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Virtual Consultation</h3>
                <p className="text-muted-foreground mb-4">
                  Quick video consultation to diagnose plant problems and get expert advice from anywhere.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />30-minute video call</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Instant diagnosis</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Treatment recommendations</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Perfect for urgent issues</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Calendar className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Plant Sitter Service</h3>
                <p className="text-muted-foreground mb-4">
                  Professional plant care while you're away. Travel worry-free knowing your plants are in expert hands.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Daily plant monitoring</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Proper watering schedule</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Problem identification</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Photo updates</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* What We Help With */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Our Plant Doctor Will Help You With:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Emergency Plant Rescue",
                "Disease & Fungal Treatment", 
                "Pest & Insect Management",
                "Proper Repotting Techniques",
                "Fertilization & Soil Analysis",
                "Watering Schedule Optimization",
                "Light Requirements Assessment",
                "Pruning & Plant Maintenance",
                "Propagation & Cuttings",
                "Plant Selection Advice",
                "Seasonal Care Planning",
                "Growth Problem Diagnosis"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Stethoscope className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            See Nick in Action
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/c3ee3638-8644-45e6-84ea-1e5b14729894.png" 
                alt="Nick providing office plant care"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <h3 className="font-semibold">Office Plant Maintenance</h3>
              <p className="text-sm text-muted-foreground">Regular professional care keeps office plants thriving</p>
            </div>
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/8c5ed3a9-b558-49b8-b17a-bb0cb35c3af7.png" 
                alt="Professional plant repotting service"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <h3 className="font-semibold">Expert Repotting</h3>
              <p className="text-sm text-muted-foreground">Proper repotting techniques for healthy root systems</p>
            </div>
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/6af17da1-48bd-4128-9ec9-22df7aebc7eb.png" 
                alt="Plant care and maintenance"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <h3 className="font-semibold">Comprehensive Care</h3>
              <p className="text-sm text-muted-foreground">Full plant health assessments and treatments</p>
            </div>
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/23e1d9b7-3cb4-4ddf-babe-3263f443aeaf.png" 
                alt="Root system analysis"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <h3 className="font-semibold">Root Health Analysis</h3>
              <p className="text-sm text-muted-foreground">Detailed root system examination and care</p>
            </div>
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/b0543742-bb86-45d7-a641-7ccd52b9be1f.png" 
                alt="Office plant installations"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <h3 className="font-semibold">Professional Installations</h3>
              <p className="text-sm text-muted-foreground">Beautiful office plant designs and installations</p>
            </div>
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/b5845403-04cf-4ea1-8d82-89020044c1bd.png" 
                alt="Ongoing plant maintenance"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <h3 className="font-semibold">Ongoing Maintenance</h3>
              <p className="text-sm text-muted-foreground">Regular visits keep your plants healthy and beautiful</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "My plant is dying - can you save it?",
                answer: "We do everything possible to save your plant and treat it like our own. While we can't guarantee saving every plant (some issues are beyond saving), Nick's 15+ years of experience gives your plant the best chance of recovery. We'll provide an honest assessment and treatment plan."
              },
              {
                question: "What's included in the $149 plant doctor visit?",
                answer: "Your 90-minute visit includes: complete plant health assessment, professional diagnosis, immediate treatment if needed, customized care plan, repotting if necessary, and follow-up support. It's comprehensive plant healthcare in your home."
              },
              {
                question: "Do you offer emergency plant visits?",
                answer: "Yes! For plants in critical condition, we offer same-day or next-day emergency visits. Contact us immediately at (770) 123-4567 if your plant is in crisis."
              },
              {
                question: "What should I do before your visit?",
                answer: "Just make sure we can access your plants! Take photos of any concerning symptoms if possible, and have your watering schedule ready to discuss. We'll bring all necessary tools and treatments."
              },
              {
                question: "Do you provide ongoing plant maintenance?",
                answer: "Absolutely! Many clients book regular monthly or bi-weekly visits to keep their plants in optimal health. We also offer plant-sitting services when you travel."
              },
              {
                question: "What areas do you serve?",
                answer: "We serve the greater Atlanta metropolitan area. Contact us to confirm if we can reach your location for in-home visits."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Widget Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "This plant had sentimental value to me, so I reached out to see if anything could be done to help it. 
                    Nick was very realistic with the possible outcome, and he completely brought my plant back to life!"
                  </p>
                  <p className="font-semibold">- Erika, Google Review</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We used the plant doctor service and highly recommend it! Nick was very helpful and knowledgeable on all things plants!"
                  </p>
                  <p className="font-semibold">- Josh, Google Review</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg font-semibold mb-4">Read More Reviews</p>
              <iframe 
                src="https://widgets.sociablekit.com/google-reviews/iframe/25436"
                width="100%" 
                height="400"
                className="border-none rounded-lg"
                title="Google Reviews"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Your Plants the Expert Care They Deserve?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't let your plants suffer. Book your professional plant doctor visit today 
            and give your green friends the expert care they need to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => openForm('plant-doctor')}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg"
            >
              Book Plant Doctor Visit - $149
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: (770) 123-4567
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            ✓ Same-week appointments available • ✓ Expert diagnosis guaranteed • ✓ 90-minute comprehensive visit
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlantDoctor;
