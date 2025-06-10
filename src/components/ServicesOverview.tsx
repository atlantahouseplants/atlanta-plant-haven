
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building2, Stethoscope, Gift, Users, Home, ArrowRight, Shield, Star, Award } from "lucide-react";

const ServicesOverview = () => {
  const businessServices = [
    {
      icon: Building2,
      title: "Office Plant Design & Care",
      description: "Complete plant solutions from FREE design consultation to guaranteed ongoing maintenance.",
      details: "Professional installation • Weekly/bi-weekly care • 100% plant guarantee",
      href: "/office-plants",
      cta: "Get FREE Quote",
      image: "/lovable-uploads/8e4a5b72-0959-4758-8dd3-39d3eaa2754b.png"
    },
    {
      icon: Gift,
      title: "Employee Appreciation Plants",
      description: "Bulk succulents and plants perfect for employee gifts, client appreciation, and special events.",
      details: "100+ plant minimum • Custom branded tags • Atlanta delivery included",
      href: "/corporate",
      cta: "Get Bulk Quote",
      image: "/lovable-uploads/0b7e580d-7c48-4a2c-85fa-db09007330cc.png"
    },
    {
      icon: Users,
      title: "Smiles for Succulents CSR",
      description: "Corporate donation program - sponsor plants for local hospitals, charities, and community organizations.",
      details: "100-500+ plant packs • Photo documentation • Tax-deductible donation",
      href: "/corporate",
      cta: "Start CSR Program",
      image: "/lovable-uploads/0feaa11c-af07-4bbc-bdfc-4941bfac8593.png"
    },
    {
      icon: Building2,
      title: "Seasonal Color Solutions",
      description: "Indoor color bowls and outdoor planters with seasonal rotations to keep your space vibrant year-round.",
      details: "6-week refresh cycles • Custom ceramic bowls • Outdoor planter installations",
      href: "/color-planters",
      cta: "View Options",
      image: "/lovable-uploads/5fd9b530-50f9-413b-b16c-230ffffbda8d.png"
    }
  ];

  const individualServices = [
    {
      icon: Stethoscope,
      title: "Plant Doctor House Calls",
      description: "Comprehensive 90-minute plant health consultation and treatment by our certified plant doctor.",
      details: "Professional diagnosis • Pest & disease treatment • Personalized care plan",
      href: "/plant-doctor",
      cta: "Book Appointment - $129",
      popular: true,
      image: "/lovable-uploads/35c56d89-5991-47a6-a64b-19c134b4b9ec.png"
    },
    {
      icon: Home,
      title: "Home Plant Design",
      description: "Custom residential plant design and installation services for luxury homes and condos.",
      details: "$199 consultation fee (credited back with installation) • Custom plant selection",
      href: "/home-design",
      cta: "Request Consultation",
      image: "/lovable-uploads/8e4a5b72-0959-4758-8dd3-39d3eaa2754b.png"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Business Services */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-medium mb-6">
              <Building2 className="h-4 w-4 mr-2" />
              Primary Revenue Focus
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Business & Office Plant Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional plant solutions that enhance your workplace, boost employee wellness, 
              and support your corporate social responsibility goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {businessServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} example`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-sm text-green-700 font-medium mb-6">
                    {service.details}
                  </p>
                  <Link to={service.href}>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-12 py-4 text-xl shadow-lg">
              Get Your FREE Business Plant Quote
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              24-hour response • Free on-site consultation • 100% plant guarantee
            </p>
          </div>
        </div>

        {/* Individual Services */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-medium mb-6">
              <Stethoscope className="h-4 w-4 mr-2" />
              Expert Plant Doctor Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Individual & Home Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Personalized plant care and design services from our certified plant doctor. 
              Get expert help for your home and personal plants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {individualServices.map((service, index) => (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden ${service.popular ? 'ring-2 ring-orange-400' : ''}`}>
                {service.popular && (
                  <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-2 text-sm font-medium text-center">
                    🩺 Most Popular Service
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} by Dr. Nick`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-sm text-blue-700 font-medium mb-6">
                    {service.details}
                  </p>
                  <Link to={service.href}>
                    <Button className={`w-full ${service.popular ? 'bg-orange-600 hover:bg-orange-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}>
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Section - Enhanced */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-12 rounded-2xl text-center shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/35c56d89-5991-47a6-a64b-19c134b4b9ec.png" 
              alt="Nick - Certified Plant Doctor"
              className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-white"
            />
            <div className="text-left">
              <h3 className="text-3xl font-bold">Meet Dr. Nick</h3>
              <p className="text-green-100 font-medium">Your Certified Plant Doctor</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Star className="h-8 w-8 mr-2" />
                <div className="text-4xl font-bold">500+</div>
              </div>
              <p className="text-green-100">Atlanta Businesses Served</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Award className="h-8 w-8 mr-2" />
                <div className="text-4xl font-bold">15+</div>
              </div>
              <p className="text-green-100">Years of Plant Expertise</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Shield className="h-8 w-8 mr-2" />
                <div className="text-4xl font-bold">100%</div>
              </div>
              <p className="text-green-100">Plant Guarantee</p>
            </div>
          </div>
          
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            "UGA-certified plant professional with Georgia certification. I bring professional expertise 
            and guaranteed results to every project, from Fortune 500 offices to your home garden."
          </p>
          <p className="text-lg text-green-200 mt-4 font-medium">- Dr. Nick, Founder & Lead Plant Doctor</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
