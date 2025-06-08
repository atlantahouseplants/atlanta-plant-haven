
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Truck, Stethoscope, Palette, Droplets, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Plant Design & Installation",
      description: "Custom plant arrangements designed for your space, lighting, and aesthetic preferences.",
      features: ["Site assessment", "Plant selection", "Professional installation", "Design consultation"]
    },
    {
      icon: Wrench,
      title: "Ongoing Maintenance",
      description: "Regular care services to keep your plants healthy and thriving year-round.",
      features: ["Weekly/bi-weekly visits", "Watering & feeding", "Pruning & cleaning", "Health monitoring"]
    },
    {
      icon: Stethoscope,
      title: "Plant Doctor Services",
      description: "Expert diagnosis and treatment for sick or struggling plants.",
      features: ["Plant health assessment", "Disease identification", "Treatment plans", "Recovery monitoring"]
    },
    {
      icon: Truck,
      title: "Plant Rental & Leasing",
      description: "Flexible rental options for events, temporary installations, or trial periods.",
      features: ["Short & long-term rentals", "Event plant styling", "Seasonal rotations", "Trial programs"]
    },
    {
      icon: Droplets,
      title: "Irrigation Systems",
      description: "Automated watering solutions for large installations and high-maintenance areas.",
      features: ["Smart irrigation design", "Automated scheduling", "Water-efficient systems", "Remote monitoring"]
    },
    {
      icon: Shield,
      title: "Plant Guarantee",
      description: "Comprehensive guarantee and replacement program for all maintained plants.",
      features: ["Health guarantee", "Quick replacements", "Seasonal adjustments", "Performance tracking"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Plant Services for Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial design to ongoing care, we provide everything you need to create and maintain 
            a thriving plant environment in your workspace.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <service.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
