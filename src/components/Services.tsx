
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Truck, Stethoscope, Palette, Droplets, Shield, Gift, Users, Home } from "lucide-react";

const Services = () => {
  const primaryServices = [
    {
      icon: Palette,
      title: "FREE Office Plant Design",
      description: "Custom plant arrangements designed for your space, lighting, and aesthetic preferences.",
      features: ["Site assessment", "Professional installation", "Custom design consultation", "100% plant guarantee with care"],
      cta: "Get Free Design",
      ctaStyle: "bg-green-600 hover:bg-green-700 text-white",
      price: "FREE consultation • Projects $3k-$10k"
    },
    {
      icon: Wrench,
      title: "Office Plant Care",
      description: "Professional maintenance by our certified plant doctor with guaranteed plant health.",
      features: ["Weekly/bi-weekly visits", "Certified plant professional", "Plant health guarantee", "Emergency plant doctor calls"],
      cta: "Get Care Quote",
      ctaStyle: "bg-green-600 hover:bg-green-700 text-white",
      price: "Starting $199/month"
    },
    {
      icon: Stethoscope,
      title: "Plant Doctor Emergency",
      description: "90-minute comprehensive plant diagnosis and treatment by our UGA-certified plant doctor.",
      features: ["90-minute appointment", "Professional diagnosis", "Treatment plan", "Ongoing care instructions"],
      cta: "Book Appointment - $129",
      ctaStyle: "bg-orange-600 hover:bg-orange-700 text-white",
      price: "$129 flat rate"
    }
  ];

  const corporateServices = [
    {
      icon: Gift,
      title: "Corporate Plant Gifting",
      description: "Bulk mini plants and succulents for employee appreciation, client gifts, and special events.",
      features: ["100+ plant minimum", "Custom branded tags", "Delivery included", "Employee wellness boost"],
      cta: "Get Bulk Quote",
      ctaStyle: "bg-blue-600 hover:bg-blue-700 text-white",
      price: "Starting $7.25 each (1000+)"
    },
    {
      icon: Users,
      title: "Smiles for Succulents CSR",
      description: "Corporate donation program - sponsor succulents for local hospitals, charities, and NGOs.",
      features: ["100-500+ succulent packs", "Professional photo documentation", "Social media content", "Tax-deductible donation"],
      cta: "Start CSR Program",
      ctaStyle: "bg-purple-600 hover:bg-purple-700 text-white",
      price: "100 plants: $499"
    },
    {
      icon: Users,
      title: "Corporate Workshops",
      description: "Team building activities with terrariums, herb gardens, and plant care education.",
      features: ["Succulent dish gardens", "Air plant terrariums", "Herb wellness gardens", "Team building focus"],
      cta: "Book Workshop",
      ctaStyle: "bg-green-600 hover:bg-green-700 text-white",
      price: "$50 per person + $299 facilitation"
    }
  ];

  const premiumServices = [
    {
      icon: Home,
      title: "Premium Home Design",
      description: "High-end residential plant design and installation for luxury homes and condos.",
      features: ["$199 design consultation", "Credit toward installation", "Custom plant selection", "Ongoing home care available"],
      cta: "Schedule Consultation",
      ctaStyle: "bg-gray-600 hover:bg-gray-700 text-white",
      price: "$199 design fee (credited back)"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Plant Services with Guaranteed Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Led by Nick, our UGA-certified plant professional with 15+ years experience. 
            We guarantee every plant we maintain - protecting your investment.
          </p>
        </div>

        {/* Primary Revenue Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-green-700">Most Popular Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {primaryServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 border-green-200">
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
                  <div className="text-lg font-semibold text-green-700">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${service.ctaStyle}`}>
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Corporate Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-700">Corporate & Bulk Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {corporateServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <div className="text-lg font-semibold text-blue-700">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${service.ctaStyle}`}>
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Premium Services */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-700">Premium Services</h3>
          <div className="max-w-md mx-auto">
            {premiumServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <service.icon className="h-6 w-6 text-gray-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <div className="text-lg font-semibold text-gray-700">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${service.ctaStyle}`}>
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Credentials Section */}
        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-4">Why Choose Atlanta House Plants?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-green-600 mb-2" />
              <h4 className="font-semibold">100% Plant Guarantee</h4>
              <p className="text-sm text-muted-foreground">Every maintained plant is guaranteed</p>
            </div>
            <div className="flex flex-col items-center">
              <Stethoscope className="h-12 w-12 text-green-600 mb-2" />
              <h4 className="font-semibold">Certified Plant Doctor</h4>
              <p className="text-sm text-muted-foreground">UGA Horticulture Degree + GA Certification</p>
            </div>
            <div className="flex flex-col items-center">
              <Wrench className="h-12 w-12 text-green-600 mb-2" />
              <h4 className="font-semibold">15+ Years Experience</h4>
              <p className="text-sm text-muted-foreground">Professional plant care since 2009</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
