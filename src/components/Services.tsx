import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Truck, Stethoscope, Palette, Droplets, Shield, Gift, Users, Home, Flower, Sparkles, Star, Calendar, Video, Heart } from "lucide-react";

const Services = () => {
  const primaryServices = [
    {
      icon: Palette,
      title: "FREE Office Plant Design",
      description: "Custom plant arrangements designed for your space, lighting, and aesthetic preferences.",
      features: ["Site assessment", "Professional installation", "Custom design consultation", "100% plant guarantee with ongoing care"],
      cta: "Get Free Design",
      ctaStyle: "bg-green-600 hover:bg-green-700 text-white",
      price: "FREE consultation • Projects $3k-$10k"
    },
    {
      icon: Wrench,
      title: "Ongoing Plant Care",
      description: "Professional maintenance by our certified plant doctor with guaranteed plant health.",
      features: ["Weekly/bi-weekly visits", "Certified plant professional", "Plant health guarantee", "Professional diagnosis & treatment"],
      cta: "Get Care Quote",
      ctaStyle: "bg-green-600 hover:bg-green-700 text-white",
      price: "Starting $199/month"
    },
    {
      icon: Flower,
      title: "Handmade Color Planters",
      description: "Custom seasonal outdoor planters designed by Nick using the freshest seasonal blooms.",
      features: ["Spring & fall installations", "Custom planter designs", "Business patios & pool areas", "Seasonal bloom rotations"],
      cta: "Request Design Quote",
      ctaStyle: "bg-green-600 hover:bg-green-700 text-white",
      price: "Custom pricing • Seasonal refresh available"
    },
    {
      icon: Sparkles,
      title: "Color Bowl Service",
      description: "Indoor handmade ceramic bowl arrangements with seasonal rotations every 6 weeks.",
      features: ["3-80 bowl installations", "6-week seasonal rotations", "Orchids, succulents & seasonal blooms", "Hotel lobbies & office centerpieces"],
      cta: "Get Bowl Quote",
      ctaStyle: "bg-green-600 hover:bg-green-700 text-white",
      price: "Min 3 bowls • 6-week refresh cycles"
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

  const plantDoctorTestimonials = [
    {
      text: "This plant had sentimental value to me, so I reached to see if anything could be done to help it. He was very realistic with the possible outcome, and he completely brought my plant back to life!",
      author: "Erika",
      date: "09/23",
      source: "Google Review"
    },
    {
      text: "We used the plant doctor service and highly recommend it! Nick was very helpful and knowledgeable on all things plants!",
      author: "Josh",
      date: "02/23",
      source: "Google Review"
    },
    {
      text: "My experience with Nick was fantastic. I had one online appointment with him to get some information about my plants. Then I booked an in person visit. Nick came and spent a long time explaining how to care for the plants and what he was doing...",
      author: "Shawn",
      date: "08/23",
      source: "Google Review"
    }
  ];

  const plantDoctorServices = [
    {
      icon: Stethoscope,
      title: "In-Home Plant Doctor Visit",
      description: "Comprehensive 90-minute plant diagnosis and treatment at your location.",
      features: ["Professional plant diagnosis", "Pest & disease treatment", "Repotting assessment", "Light & fertilization guidance"],
      price: "$149 flat rate",
      popular: true
    },
    {
      icon: Video,
      title: "Virtual Plant Doctor Consultation",
      description: "Quick video call diagnosis for fast answers to plant problems.",
      features: ["Video call assessment", "Step-by-step guidance", "Personalized care advice", "Same-day availability"],
      price: "Contact for pricing",
      popular: false
    },
    {
      icon: Heart,
      title: "Plant Sitter Service",
      description: "Professional plant watering while you're away traveling.",
      features: ["Travel peace of mind", "Professional watering", "Plant health monitoring", "Flexible scheduling"],
      price: "Per visit pricing",
      popular: false
    }
  ];

  const additionalServices = [
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
            We guarantee every plant we install and maintain - protecting your investment.
          </p>
        </div>

        {/* Primary Revenue Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-green-700">Most Popular Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {primaryServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 border-green-200">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <service.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground text-sm">
                    {service.description}
                  </CardDescription>
                  <div className="text-sm font-semibold text-green-700">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full text-sm py-2 ${service.ctaStyle}`}>
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Plant Doctor Services - Featured Section */}
        <div className="mb-16">
          <div className="bg-orange-50 rounded-lg p-8 border-2 border-orange-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-orange-800 mb-4">
                🩺 Plant Doctor Services - Expert Plant Care
              </h3>
              <p className="text-lg text-orange-700 max-w-3xl mx-auto">
                Are you having trouble keeping your houseplants healthy and thriving? Our Plant Doctor is here to help! 
                Don't let your plants suffer any longer - schedule an appointment today.
              </p>
            </div>

            {/* Plant Doctor Service Options */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {plantDoctorServices.map((service, index) => (
                <Card key={index} className={`relative ${service.popular ? 'border-2 border-orange-400 bg-orange-25' : 'border-border bg-white'}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <service.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                    <div className="text-lg font-semibold text-orange-700">{service.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* What Our Plant Doctor Helps With */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <h4 className="text-xl font-bold text-orange-800 mb-4 text-center">
                OUR PLANT DOCTOR WILL HELP YOU WITH:
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center"><Calendar className="h-4 w-4 text-orange-600 mr-2" />Repotting needs</div>
                <div className="flex items-center"><Shield className="h-4 w-4 text-orange-600 mr-2" />Disease & Fungal Issues</div>
                <div className="flex items-center"><Stethoscope className="h-4 w-4 text-orange-600 mr-2" />Pest & Insect Management</div>
                <div className="flex items-center"><Droplets className="h-4 w-4 text-orange-600 mr-2" />Fertilization & Soil Management</div>
                <div className="flex items-center"><Droplets className="h-4 w-4 text-orange-600 mr-2" />Proper Watering Techniques</div>
                <div className="flex items-center"><Sparkles className="h-4 w-4 text-orange-600 mr-2" />Light Measuring & Grow Lights</div>
                <div className="flex items-center"><Flower className="h-4 w-4 text-orange-600 mr-2" />Cuttings & Propagation</div>
                <div className="flex items-center"><Heart className="h-4 w-4 text-orange-600 mr-2" />& Much More!</div>
              </div>
            </div>

            {/* Customer Testimonials */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-orange-800 mb-4 text-center">What Our Customers Say</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {plantDoctorTestimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-orange-200">
                    <div className="flex mb-2">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm italic text-gray-700 mb-2">"{testimonial.text}"</p>
                    <div className="text-xs text-gray-500">
                      - {testimonial.author}, {testimonial.date}, {testimonial.source}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Section */}
            <div className="bg-white rounded-lg p-6 text-center">
              <h4 className="text-2xl font-bold text-orange-800 mb-4">Ready to Book Your Plant Doctor Visit?</h4>
              <p className="text-gray-700 mb-6">Schedule your appointment now and get your plants back to perfect health!</p>
              
              <div className="mt-4">
                <a 
                  href="https://api.leadconnectorhq.com/widget/bookings/plantdoctorservice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                    Book Plant Doctor Visit - $149
                  </Button>
                </a>
              </div>
            </div>
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

        {/* Additional Services */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-700">Additional Services</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
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
              <p className="text-sm text-muted-foreground">On plants we install & maintain</p>
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
