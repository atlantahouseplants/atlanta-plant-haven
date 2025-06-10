
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building2, Stethoscope, Gift, Users, Home, ArrowRight, Shield } from "lucide-react";

const ServicesOverview = () => {
  const businessServices = [
    {
      icon: Building2,
      title: "Office Plant Design & Care",
      description: "Complete plant solutions from design to maintenance with 100% guarantee.",
      href: "/office-plants",
      cta: "Learn More"
    },
    {
      icon: Gift,
      title: "Corporate Gifting",
      description: "Bulk succulents and plants for employee appreciation and customer gifts.",
      href: "/corporate",
      cta: "Get Bulk Quote"
    },
    {
      icon: Users,
      title: "Smiles for Succulents CSR",
      description: "Corporate donation program - sponsor plants for local charities.",
      href: "/corporate",
      cta: "Start CSR Program"
    },
    {
      icon: Building2,
      title: "Color Bowls & Planters",
      description: "Indoor and outdoor seasonal color solutions for businesses.",
      href: "/color-planters",
      cta: "View Options"
    }
  ];

  const individualServices = [
    {
      icon: Stethoscope,
      title: "Plant Doctor Service",
      description: "Comprehensive 90-minute plant health consultation and treatment.",
      href: "/plant-doctor",
      cta: "Book Appointment - $129",
      popular: true
    },
    {
      icon: Home,
      title: "Home Plant Design",
      description: "Custom residential plant design and installation services.",
      href: "/home-design",
      cta: "Request Consultation - $199"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Business Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Business & Office Plant Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional plant solutions that enhance your workplace and support your team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {businessServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <service.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link to={service.href}>
                    <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                      {service.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Get Your FREE Business Plant Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Individual Services */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Individual & Home Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert plant care and design services for your home and personal plants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {individualServices.map((service, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 ${service.popular ? 'border-2 border-orange-600' : ''}`}>
                <CardContent className="p-8 text-center">
                  {service.popular && (
                    <div className="bg-orange-600 text-white px-3 py-1 text-sm font-medium rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <service.icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
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

        {/* Trust Section */}
        <div className="bg-green-50 p-8 rounded-lg text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-foreground">Why Choose Atlanta House Plants?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-muted-foreground">Atlanta Businesses Served</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <p className="text-muted-foreground">Years of Plant Expertise</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-muted-foreground">Plant Guarantee</p>
            </div>
          </div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            UGA-certified plant professional Nick brings professional expertise and guaranteed results to every project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
