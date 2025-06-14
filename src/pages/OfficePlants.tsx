
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Shield, Leaf, CheckCircle, Star, Users, ArrowRight, Clock, DollarSign, Award, Phone, Mail } from "lucide-react";
import { useForm } from "@/components/forms/FormContext";

const OfficePlants = () => {
  const { openForm } = useForm();

  const portfolioImages = [
    {
      src: "/lovable-uploads/e1930419-ea64-46bc-b42a-ed13b1f43ab1.png",
      alt: "Professional monstera office plant installation",
      title: "Executive Monstera Installation"
    },
    {
      src: "/lovable-uploads/30a84ea6-f741-4055-a3a0-8b27f2d24782.png",
      alt: "Modern office plant in elegant white planter",
      title: "Executive Office Design"
    },
    {
      src: "/lovable-uploads/f7f75b80-b480-4c48-95aa-9a13bdb767d6.png",
      alt: "Professional plant installation in corporate setting",
      title: "Corporate Lobby Installation"
    },
    {
      src: "/lovable-uploads/daf81320-b43b-4b04-be7f-de89d266eb62.png",
      alt: "Large palm plant in modern office setting with ocean view",
      title: "Modern Office Palm Installation"
    },
    {
      src: "/lovable-uploads/e848d465-1e0e-47b7-94d6-226ed5ab1c49.png",
      alt: "Colorful tropical plant in elegant concrete planter",
      title: "Executive Tropical Display"
    },
    {
      src: "/lovable-uploads/bda5d0ab-23d1-4179-a0e3-ca491a450073.png",
      alt: "Multiple office plants creating green workspace",
      title: "Open Office Design"
    },
    {
      src: "/lovable-uploads/1683fbf6-99c1-4c4c-818b-2e3644960f47.png",
      alt: "Spider plant in white ceramic planter",
      title: "Clean Office Aesthetic"
    },
    {
      src: "/lovable-uploads/1f78b53b-2623-4bc4-b83c-246c1a7fd6a7.png",
      alt: "Rubber tree plant in textured black planter",
      title: "Executive Suite Installation"
    },
    {
      src: "/lovable-uploads/911bc300-a742-4904-b3c2-346923206800.png",
      alt: "Variegated office plant in professional setting",
      title: "Conference Room Accent"
    },
    {
      src: "/lovable-uploads/e50117c2-e3d5-4eae-ad91-6e0037ad1b84.png",
      alt: "Large office plant arrangement",
      title: "Reception Area Transformation"
    },
    {
      src: "/lovable-uploads/b90e0cac-c262-4e29-b9bd-bbd0990b70d6.png",
      alt: "Professional plant care in office environment",
      title: "Premium Office Installation"
    },
    {
      src: "/lovable-uploads/5650ae46-8fb8-46ef-93e3-5c1a40fcc0c8.png",
      alt: "Office plant with white flowers in professional setting",
      title: "Conference Room Design"
    },
    {
      src: "/lovable-uploads/e53e274d-32e6-460b-a5b9-01e5f79c885f.png",
      alt: "Large tropical office plant installation",
      title: "Workplace Wellness Design"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "FREE Consultation",
      description: "We visit your office to assess lighting, space, and your specific needs",
      icon: Building2
    },
    {
      step: "2", 
      title: "Custom Design",
      description: "Our certified plant doctor creates a personalized plant plan for your space",
      icon: Leaf
    },
    {
      step: "3",
      title: "Professional Installation", 
      description: "We handle delivery, installation, and setup of your new office plants",
      icon: Users
    },
    {
      step: "4",
      title: "Ongoing Care",
      description: "Regular maintenance visits ensure your plants stay healthy and beautiful",
      icon: Shield
    }
  ];

  const benefits = [
    "Improved air quality and employee wellness",
    "Enhanced professional appearance for clients",
    "Reduced stress and increased productivity",
    "Zero maintenance hassle for your team",
    "100% plant replacement guarantee",
    "Flexible service schedules to fit your needs"
  ];

  const faqs = [
    {
      question: "What's included in the FREE consultation?",
      answer: "Our certified plant doctor visits your office to measure lighting, assess your space, discuss your preferences, and create a custom plant design. There's absolutely no obligation."
    },
    {
      question: "How often do you service the plants?",
      answer: "We offer flexible schedules: weekly, bi-weekly, or monthly visits depending on your plant types and office environment. Most offices prefer bi-weekly service."
    },
    {
      question: "What happens if a plant dies?",
      answer: "With our ongoing care service, we provide a 100% plant replacement guarantee. If any plant doesn't thrive, we replace it at no cost."
    },
    {
      question: "Do you work with all office sizes?",
      answer: "Yes! We've designed plants for small startups to large corporate headquarters. We tailor our approach to fit your space and budget."
    },
    {
      question: "What types of plants work best in offices?",
      answer: "We select plants based on your specific lighting conditions. Popular choices include pothos, snake plants, ZZ plants, and peace lilies - all known for thriving in office environments."
    },
    {
      question: "Can you work around our business hours?",
      answer: "Absolutely. We schedule installations and maintenance visits at times convenient for your business, including evenings and weekends when needed."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-medium">
                <Award className="h-4 w-4 mr-2" />
                500+ Atlanta Businesses Trust Us
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                FREE Office Plant
                <span className="block text-green-600">Design & Guaranteed Care</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform your Atlanta office with professional plant design and maintenance. 
                Our certified plant doctor creates custom installations with a 100% plant guarantee.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => openForm('business-quote')}
                  className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4"
                >
                  Get FREE Design Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span>24-hour response • No obligation</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-muted-foreground">Plant Guarantee</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/lovable-uploads/509a280d-6396-4ab6-8e28-f171ebe74070.png"
                alt="Beautiful office plants by windows with city view"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From consultation to ongoing care, we make office plants simple and stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-10 w-10 text-green-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              onClick={() => openForm('business-quote')}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Start Your FREE Consultation Today
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Recent Office Transformations
            </h2>
            <p className="text-xl text-muted-foreground">
              See how we've transformed Atlanta offices with beautiful, thriving plants
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioImages.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-white font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Office Plant Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for thriving office plants
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-green-600 border-2 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Building2 className="h-12 w-12 text-green-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Design + Ongoing Care</h3>
                    <p className="text-green-600 font-semibold">FREE Consultation • Then $XX/month</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Complete plant solution with design, installation, and professional maintenance
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>FREE office consultation and custom design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Professional plant selection and installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Regular maintenance visits (weekly/bi-weekly/monthly)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>100% plant replacement guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Watering, fertilizing, pruning, pest control</span>
                  </li>
                </ul>
                
                <Button 
                  onClick={() => openForm('business-quote')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3"
                >
                  Get FREE Quote & Consultation
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Leaf className="h-12 w-12 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Design Only</h3>
                    <p className="text-blue-600 font-semibold">$199 consultation (credited back)</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Perfect if you want professional design with your own maintenance
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Professional office consultation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Custom plant selection and layout design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Professional plant installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Detailed care instructions and training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>$199 consultation fee credited toward installation</span>
                  </li>
                </ul>
                
                <Button 
                  onClick={() => openForm('business-quote')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3"
                >
                  Schedule Design Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why 500+ Atlanta Businesses Choose Us
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <Star className="h-6 w-6 text-yellow-500 mr-2" />
                  <span className="font-semibold">Georgia Certified Plant Professional</span>
                </div>
                <p className="text-muted-foreground">
                  Nick, our plant doctor, has a UGA Horticulture degree and 15+ years of experience 
                  keeping Atlanta office plants healthy and beautiful.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/lovable-uploads/daf81320-b43b-4b04-be7f-de89d266eb62.png"
                alt="Professional office plant care"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <img
                src="/lovable-uploads/1f78b53b-2623-4bc4-b83c-246c1a7fd6a7.png"
                alt="Healthy office plants"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our office plant services
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Office?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ Atlanta businesses who trust us with their office plants. 
            Get your FREE consultation and custom design today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg"
              onClick={() => openForm('business-quote')}
              className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              Get FREE Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex items-center text-white/90">
              <div className="flex items-center mr-6">
                <Phone className="h-5 w-5 mr-2" />
                <span>(470) 664-4039</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>Quick response</span>
              </div>
            </div>
          </div>
          
          <div className="text-center text-white/80">
            <div className="flex items-center justify-center space-x-6 text-sm">
              <span>✓ 24-hour response</span>
              <span>✓ No obligation</span>
              <span>✓ Free on-site visit</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OfficePlants;
