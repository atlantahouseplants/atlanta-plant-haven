
import { Button } from "@/components/ui/button";
import { Building2, Stethoscope, Gift, Heart, Palette, ArrowRight, ExternalLink, Paintbrush } from "lucide-react";
import { useForm } from "@/components/forms/FormContext";
import { Link } from "react-router-dom";

const ServiceShowcase = () => {
  const { openForm } = useForm();

  const services = [
    {
      id: "office-plants",
      icon: Building2,
      title: "Office Plant Design & Maintenance",
      subtitle: "Transform Your Workspace",
      description: "Complete plant solutions from FREE design to ongoing maintenance with 100% plant guarantee. Professional installation for Atlanta businesses.",
      image: "/lovable-uploads/e63a667a-2e0b-4f5e-bb35-9ca3f3059e0d.png",
      primaryCTA: {
        text: "Get FREE Quote",
        action: () => openForm('business-quote'),
        className: "bg-green-600 hover:bg-green-700"
      },
      secondaryCTA: {
        text: "Learn More",
        link: "/office-plants",
        className: "border-green-600 text-green-600 hover:bg-green-50"
      },
      bgColor: "bg-white",
      features: ["FREE consultation & design", "Professional installation", "100% plant guarantee", "Ongoing maintenance included"]
    },
    {
      id: "plant-doctor",
      icon: Stethoscope,
      title: "Plant Doctor House Calls",
      subtitle: "Professional Plant Healthcare",
      description: "90-minute comprehensive plant health consultation by our UGA-certified expert. Same-week appointments available across Atlanta.",
      image: "/lovable-uploads/cc2424e3-3025-4f30-be79-6a4763fca0a5.png",
      primaryCTA: {
        text: "Book Visit - $149",
        action: "https://api.leadconnectorhq.com/widget/bookings/plantdoctorservice",
        className: "bg-orange-600 hover:bg-orange-700"
      },
      secondaryCTA: {
        text: "Learn More",
        link: "/plant-doctor",
        className: "border-orange-600 text-orange-600 hover:bg-orange-50"
      },
      bgColor: "bg-orange-50",
      features: ["UGA certified expert", "90-minute consultation", "Same-week appointments", "Custom care plan included"]
    },
    {
      id: "corporate-gifting",
      icon: Gift,
      title: "Corporate Plant Gifting & Workshops",
      subtitle: "Employee Appreciation & Team Building",
      description: "Bulk plants for employees, client gifts, and team-building succulent workshops. Custom packaging and corporate programs available.",
      image: "/lovable-uploads/f6771e8f-e3c7-432a-ae46-88584325a2f5.png",
      primaryCTA: {
        text: "Get Quote",
        action: () => openForm('bulk-order'),
        className: "bg-blue-600 hover:bg-blue-700"
      },
      secondaryCTA: {
        text: "Learn More",
        link: "/corporate",
        className: "border-blue-600 text-blue-600 hover:bg-blue-50"
      },
      bgColor: "bg-white",
      features: ["Bulk pricing available", "Custom packaging", "Team workshops", "Corporate CSR programs"]
    },
    {
      id: "succulents-for-smiles",
      icon: Heart,
      title: "Succulents for Smiles",
      subtitle: "Community Donation Program",
      description: "Spread joy in Atlanta's community! $4.75 per succulent plant donated to nursing homes, hospitals, and community centers (minimum 100 plants).",
      image: "/lovable-uploads/e848d465-1e0e-47b7-94d6-226ed5ab1c49.png",
      primaryCTA: {
        text: "Donate Succulents",
        action: () => openForm('bulk-order'),
        className: "bg-pink-600 hover:bg-pink-700"
      },
      secondaryCTA: {
        text: "Learn More",
        link: "/succulents-for-smiles",
        className: "border-pink-600 text-pink-600 hover:bg-pink-50"
      },
      bgColor: "bg-pink-50",
      features: ["$4.75 per plant donated", "Minimum 100 plants", "Community impact", "Corporate social responsibility"]
    },
    {
      id: "color-planters",
      icon: Palette,
      title: "Outdoor Color Planters",
      subtitle: "Handmade Seasonal Designs",
      description: "Stunning seasonal planter designs for outdoor spaces. Handcrafted with premium materials - no two planters alike in Atlanta.",
      image: "/lovable-uploads/51d0a899-621b-4011-8842-d9d929d45e2a.png",
      primaryCTA: {
        text: "Get FREE Quote",
        action: () => openForm('business-quote'),
        className: "bg-purple-600 hover:bg-purple-700"
      },
      secondaryCTA: {
        text: "Learn More",
        link: "/color-planters",
        className: "border-purple-600 text-purple-600 hover:bg-purple-50"
      },
      bgColor: "bg-white",
      features: ["Handmade designs", "Seasonal arrangements", "Premium materials", "Unique Atlanta creations"]
    },
    {
      id: "handmade-color-bowls",
      icon: Paintbrush,
      title: "Handmade Color Bowls",
      subtitle: "Artisan Crafted Arrangements",
      description: "Beautiful handcrafted color bowls featuring vibrant seasonal plants. Each piece is uniquely designed by our artisans for Atlanta homes and businesses.",
      image: "/lovable-uploads/c7cbb1f4-171d-4217-ae52-4e84adc6503f.png",
      primaryCTA: {
        text: "Get FREE Quote",
        action: () => openForm('business-quote'),
        className: "bg-emerald-600 hover:bg-emerald-700"
      },
      secondaryCTA: {
        text: "Learn More",
        link: "/color-planters",
        className: "border-emerald-600 text-emerald-600 hover:bg-emerald-50"
      },
      bgColor: "bg-emerald-50",
      features: ["Artisan handcrafted", "Unique bowl designs", "Vibrant seasonal plants", "Custom color schemes"]
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Complete Plant Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From office plant design to community programs, we're Atlanta's comprehensive plant solution provider.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`${service.bgColor} rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image Section */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} aspect-video lg:aspect-square overflow-hidden`}>
                  <img 
                    src={service.image}
                    alt={`${service.title} - Atlanta House Plants`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Section */}
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="flex items-center mb-6">
                    <service.icon className="h-8 w-8 text-green-600 mr-4" />
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                        {service.title}
                      </h3>
                      <p className="text-lg text-green-600 font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {typeof service.primaryCTA.action === 'string' ? (
                      <a 
                        href={service.primaryCTA.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className={`w-full text-white text-lg py-3 ${service.primaryCTA.className}`}>
                          {service.primaryCTA.text}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </a>
                    ) : (
                      <Button 
                        onClick={service.primaryCTA.action}
                        className={`flex-1 text-white text-lg py-3 ${service.primaryCTA.className}`}
                      >
                        {service.primaryCTA.text}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    )}
                    
                    <Button 
                      asChild
                      variant="outline"
                      className={`flex-1 text-lg py-3 ${service.secondaryCTA.className}`}
                    >
                      <Link to={service.secondaryCTA.link}>
                        {service.secondaryCTA.text}
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
