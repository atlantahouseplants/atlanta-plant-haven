
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building2, Stethoscope, Gift, Users, Home, ArrowRight, Star } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Building2,
      title: "Office Plant Services",
      description: "FREE design consultation, professional installation, and ongoing plant care with 100% guarantee. Transform your workplace today.",
      href: "/office-plants",
      cta: "Get FREE Design",
      highlight: true,
      popular: true,
      revenue: "Primary Revenue Driver"
    },
    {
      icon: Gift,
      title: "Corporate Gifting & Bulk Orders",
      description: "Mini succulents for Employee Appreciation, customer gifts, or team events. We've provided 2000+ plants to Georgia Tech!",
      href: "/corporate",
      cta: "Request Bulk Quote",
      highlight: true,
      popular: true,
      revenue: "High-Volume Sales"
    },
    {
      icon: Stethoscope,
      title: "Plant Doctor Services",
      description: "Comprehensive 90-minute plant health consultation for $129. Nick diagnoses, treats, and provides ongoing care instructions.",
      href: "/plant-doctor",
      cta: "Book Plant Doctor - $129",
      highlight: true,
      revenue: "Popular Service"
    },
    {
      icon: Users,
      title: "Smiles for Succulents CSR",
      description: "Corporate social responsibility program. Sponsor succulents for hospitals, orphanages, and charities in the Atlanta community.",
      href: "/corporate",
      cta: "Sponsor Plants for Charity",
      revenue: "CSR Program"
    },
    {
      icon: Home,
      title: "Premium Home Design",
      description: "High-end residential plant design and care for discerning homeowners. $199 design fee (credited back with installation).",
      href: "/home-design",
      cta: "Learn More",
      revenue: "Premium Service"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Plant Services for Atlanta Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From office transformations to corporate gifting, we help Atlanta businesses grow with guaranteed plant solutions.
          </p>
        </div>

        {/* Success Story Highlight */}
        <div className="bg-green-50 p-8 rounded-lg mb-12 text-center border-2 border-green-200">
          <h3 className="text-2xl font-bold text-green-800 mb-2">🎉 Recent Success Story</h3>
          <p className="text-lg text-green-700">
            Just delivered <strong>2,000 mini succulents</strong> to Georgia Tech for their employee appreciation program!
          </p>
          <p className="text-sm text-green-600 mt-2">Ready to wow your team? Corporate orders available from 50-2000+ plants.</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`relative overflow-hidden hover:shadow-lg transition-all duration-300 ${service.highlight ? 'border-green-600 border-2' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-green-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                    <span className="text-xs text-green-600 font-medium">{service.revenue}</span>
                  </div>
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
              {service.popular && (
                <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-sm font-medium flex items-center">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Revenue-Focused Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Atlanta Office?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join 500+ Atlanta businesses who trust us with their plant solutions. FREE consultation, guaranteed results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/office-plants">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-bold">
                  Get FREE Office Plant Design
                </Button>
              </Link>
              <Link to="/corporate">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 font-bold">
                  Request Corporate Bulk Quote
                </Button>
              </Link>
            </div>
            <p className="text-sm opacity-75 mt-4">
              ✓ 24-hour response • ✓ Georgia Tech partner • ✓ 100% plant guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
