
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Home, CheckCircle, Mail, Leaf, Heart, Award, GraduationCap } from "lucide-react";
import CustomSchedulingForm from "@/components/forms/CustomSchedulingForm";

const PlantDoctor = () => {
  const handleBookingClick = () => {
    window.open('https://api.leadconnectorhq.com/widget/bookings/plantdoctorservice', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Problem-Focused Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Is Your Plant Sick, Dying, or Just Not Thriving?
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Don't let your beloved plants suffer. Get expert diagnosis, treatment, and personalized care guidance from Nick, your certified plant doctor.
              </p>
              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-600 mb-8">
                <h3 className="font-bold text-lg mb-2">Common Problems We Solve:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Plants dropping or browning leaves</li>
                  <li>• Overwatering or underwatering issues</li>
                  <li>• Plants outgrowing their pots</li>
                  <li>• Inherited plants you don't know how to care for</li>
                  <li>• Poor lighting or soil problems</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleBookingClick}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
                >
                  Book Plant Doctor Visit - $149
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

      {/* Common Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Real Situations We Help With Every Week
            </h2>
            <p className="text-lg text-muted-foreground">
              These are actual calls we receive regularly. Does any of this sound familiar?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="bg-green-100 p-4 rounded-lg mb-4">
                  <Heart className="h-8 w-8 text-green-600 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-3">"I inherited a peace lily from my grandmother's funeral..."</h3>
                <p className="text-muted-foreground mb-4">
                  "It has sentimental value, but I don't know how to care for it and it's starting to look sick."
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">How We Help:</h4>
                  <p className="text-sm text-orange-700">
                    Nick assesses the plant's health, provides immediate treatment if needed, and teaches you exactly how to care for this meaningful plant so it thrives for years to come.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-4 rounded-lg mb-4">
                  <Home className="h-8 w-8 text-blue-600 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-3">"My plant has outgrown its pot..."</h3>
                <p className="text-muted-foreground mb-4">
                  "I know it needs repotting but I don't want to mess it up. I don't have the right soil or tools."
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">How We Help:</h4>
                  <p className="text-sm text-orange-700">
                    You just provide the new pot. Nick brings everything else - proper soil, tools, treatments. He handles the repotting professionally while you watch and learn.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="bg-red-100 p-4 rounded-lg mb-4">
                  <Stethoscope className="h-8 w-8 text-red-600 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-3">"My fiddle leaf fig is dropping leaves..."</h3>
                <p className="text-muted-foreground mb-4">
                  "The leaves are browning and falling off. I think I'm overwatering but I'm not sure what to do."
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">How We Help:</h4>
                  <p className="text-sm text-orange-700">
                    Nick diagnoses the exact issue - watering, light, soil, or disease. He provides immediate treatment and creates a custom care plan for your specific situation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What's Included in Your $149 Plant Doctor Visit
            </h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive 90-minute service that gives your plants the best chance to thrive
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Stethoscope className="h-8 w-8 text-green-600" />,
                title: "Complete Health Assessment",
                description: "Thorough examination of all your plants to identify problems and health status"
              },
              {
                icon: <Heart className="h-8 w-8 text-red-600" />,
                title: "Professional Diagnosis",
                description: "Expert identification of diseases, pests, watering issues, or environmental problems"
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
                title: "Immediate Treatment",
                description: "On-the-spot treatment for urgent issues, repotting if needed, and problem solving"
              },
              {
                icon: <Leaf className="h-8 w-8 text-orange-600" />,
                title: "Custom Care Plan",
                description: "Personalized watering, lighting, and feeding schedule for each of your plants"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-gray-50 p-4 rounded-lg mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What to Expect During Your Visit
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Before the Visit",
                description: "You provide basic information about your plant problems. No prep work needed on your end - just make sure your plants are accessible."
              },
              {
                step: "2", 
                title: "Nick Arrives with Everything",
                description: "Professional tools, treatments, soil amendments, and expertise. You don't need to buy anything except new pots if repotting is needed."
              },
              {
                step: "3",
                title: "Comprehensive Assessment (30 minutes)",
                description: "Nick examines each plant, explains what he's seeing, and diagnoses any issues while teaching you what to look for."
              },
              {
                step: "4",
                title: "Treatment & Care (45-60 minutes)", 
                description: "Immediate treatment of problems, repotting if needed, soil amendments, and hands-on demonstration of proper care techniques."
              },
              {
                step: "5",
                title: "Your Custom Care Plan",
                description: "Written care instructions specific to your plants, your home environment, and your schedule. Plus ongoing text support for questions."
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Save Your Plants?
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the option that works best for your schedule
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-orange-200">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 p-4 rounded-lg mb-6">
                  <CheckCircle className="h-12 w-12 text-orange-600 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Book Your Appointment</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule your $149 plant doctor visit. Most appointments available within the week.
                </p>
                
                {/* Booking Widget */}
                <div className="mb-4">
                  <iframe 
                    src="https://api.leadconnectorhq.com/widget/booking/J3NNAtlNcdw0V75i8LX2" 
                    style={{width: '100%', border: 'none', overflow: 'hidden'}} 
                    scrolling="no" 
                    id="DEF98LO6WWc6OgMYWE0E_1749942475268"
                    className="rounded-lg"
                    height="800"
                  />
                </div>
                
                <p className="text-sm text-muted-foreground">
                  ✓ 90-minute comprehensive visit<br/>
                  ✓ Same-week appointments available
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardContent className="p-8">
                <div className="bg-green-100 p-4 rounded-lg mb-6 text-center">
                  <Mail className="h-12 w-12 text-green-600 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Need Custom Scheduling?</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Contact Nick directly to discuss your situation or if you need availability not shown on our calendar.
                </p>
                <CustomSchedulingForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Nick */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Nick as Your Plant Doctor?
            </h2>
            <p className="text-lg text-muted-foreground">
              Unlike competitors who send untrained staff, you get a certified professional who treats your plants like family
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
                  "I don't just diagnose plant problems - I solve them. Every plant gets my full attention and expertise. 
                  I won't give up on your plant, and I'll teach you everything you need to know to keep it thriving."
                </p>
                <p className="text-right text-green-700 font-semibold">- Nick, Certified Plant Doctor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nick in Action: Real Plant Rescues
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/lovable-uploads/c3ee3638-8644-45e6-84ea-1e5b14729894.png",
                title: "Office Plant Health Check",
                description: "Comprehensive plant assessment and treatment"
              },
              {
                src: "/lovable-uploads/8c5ed3a9-b558-49b8-b17a-bb0cb35c3af7.png", 
                title: "Professional Repotting",
                description: "Expert repotting with proper soil and care"
              },
              {
                src: "/lovable-uploads/6af17da1-48bd-4128-9ec9-22df7aebc7eb.png",
                title: "Plant Problem Diagnosis",
                description: "Identifying and treating plant health issues"
              },
              {
                src: "/lovable-uploads/23e1d9b7-3cb4-4ddf-babe-3263f443aeaf.png",
                title: "Root Health Analysis", 
                description: "Detailed examination of root systems"
              },
              {
                src: "/lovable-uploads/b0543742-bb86-45d7-a641-7ccd52b9be1f.png",
                title: "Plant Care Education",
                description: "Teaching proper plant care techniques"
              },
              {
                src: "/lovable-uploads/b5845403-04cf-4ea1-8d82-89020044c1bd.png",
                title: "Follow-up Care",
                description: "Ensuring plants continue to thrive"
              }
            ].map((item, index) => (
              <div key={index} className="space-y-4">
                <img 
                  src={item.src}
                  alt={item.title}
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Common Questions About Plant Doctor Visits
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "What if my plant can't be saved?",
                answer: "Nick will be honest about your plant's condition. While he does everything possible to save plants, sometimes damage is too severe. In these cases, he'll explain why and help you prevent the same issues with future plants. The visit fee still applies as you receive expert diagnosis and education."
              },
              {
                question: "What do I need to provide for the visit?",
                answer: "Just make sure your plants are accessible! If repotting is needed, you'll need to provide new pots (Nick will tell you what size during scheduling). Nick brings all tools, soil, treatments, and expertise."
              },
              {
                question: "Can Nick help with multiple plants in one visit?",
                answer: "Absolutely! The 90-minute visit covers all your plants. Whether you have 2 plants or 20, Nick will assess and treat them all during your appointment."
              },
              {
                question: "What if I need help after the visit?",
                answer: "You'll receive Nick's direct contact for follow-up questions about your plants. Many clients text photos if they're concerned about something, and Nick provides guidance to ensure success."
              },
              {
                question: "Do you offer any guarantees?",
                answer: "While we can't guarantee saving every plant, we guarantee you'll receive expert professional service, honest assessment, and all the knowledge needed to care for your plants going forward."
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

      {/* Reviews */}
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Real Results from Real Plant Parents
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
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
          <div className="text-center">
            <iframe 
              className='lc_reviews_widget rounded-lg border-none' 
              src='https://reputationhub.site/reputation/widgets/review_widget/wTvEeXunnbLa5kBRFbc4' 
              frameBorder='0' 
              scrolling='no' 
              style={{minWidth: '100%', width: '100%', height: '400px'}}
              title="Customer Reviews"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Let Your Plants Suffer Another Day
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Professional plant care is just one appointment away. Give your plants the expert attention they deserve.
          </p>
          <div className="flex justify-center">
            <Button 
              onClick={handleBookingClick}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg"
            >
              Book Plant Doctor Visit - $149
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            ✓ Expert diagnosis and treatment • ✓ Custom care plan included • ✓ Same-week appointments available
          </p>
        </div>
      </section>

      <Footer />
      
      {/* Scripts for widgets */}
      <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
      <script type='text/javascript' src='https://reputationhub.site/reputation/assets/review-widget.js'></script>
    </div>
  );
};

export default PlantDoctor;
