
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building2, Stethoscope, Palette, Gift, Home, ArrowRight } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Building2,
      title: "Office Plant Services",
      description: "FREE design consultation, professional installation, and ongoing plant care for Atlanta businesses.",
      href: "/office-plants",
      cta: "Get FREE Design",
      highlight: true
    },
    {
      icon: Stethoscope,
      title: "Plant Doctor Services",
      description: "Expert plant diagnostics, treatment, and care guidance. In-home visits, virtual consultations, and plant sitting.",
      href: "/plant-doctor",
      cta: "Book Plant Doctor - $129",
      highlight: true
    },
    {
      icon: Palette,
      title: "Color Planter Services",
      description: "Handmade seasonal outdoor planters and indoor color bowls. Fresh designs every 6 weeks.",
      href: "/color-planters",
      cta: "Request Design Quote"
    },
    {
      icon: Gift,
      title: "Corporate Services",
      description: "Bulk plant orders, corporate gifting, and our Succulents for Smiles CSR program.",
      href: "/corporate",
      cta: "Explore Corporate Options"
    },
    {
      icon: Home,
      title: "Home Design Services",
      description: "Premium residential plant design and care for discerning homeowners.",
      href: "/home-design",
      cta: "Learn More"
    }
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Plant Services for Atlanta
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From office plant design to expert plant care, we transform spaces with guaranteed results. 
            Choose the service that's right for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`relative overflow-hidden hover:shadow-lg transition-all duration-300 ${service.highlight ? 'border-green-600 border-2' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link to={service.href}>
                  <Button 
                    className={`w-full ${service.highlight ? 'bg-green-600 hover:bg-green-700' : 'bg-primary hover:bg-primary/90'} text-white`}
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
              {service.highlight && (
                <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-sm font-medium">
                  Popular
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-green-600 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Space?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Start with a FREE office plant design consultation. Our certified plant doctor will create a custom plan for your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/office-plants">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Get FREE Office Plant Design
                </Button>
              </Link>
              <Link to="/plant-doctor">
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Book Plant Doctor Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
