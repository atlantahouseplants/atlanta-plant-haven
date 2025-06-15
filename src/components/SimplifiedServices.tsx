
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Stethoscope, Gift, Home, ArrowRight, ExternalLink } from "lucide-react";
import { useForm } from "@/components/forms/FormContext";
import { Link } from "react-router-dom";

const SimplifiedServices = () => {
  const { openForm } = useForm();

  const services = [
    {
      icon: Building2,
      title: "Office Plant Design & Maintenance",
      description: "Complete plant solutions from FREE design to ongoing maintenance with plant guarantee.",
      benefits: ["FREE consultation", "Professional installation", "Plant guarantee", "Ongoing maintenance"],
      cta: "Get FREE Quote",
      action: () => openForm('business-quote'),
      learnMore: "/office-plants",
      image: "/lovable-uploads/24794cd6-d871-433d-8ce5-1b5d61120d74.png",
      color: "green"
    },
    {
      icon: Stethoscope,
      title: "Plant Doctor House Calls",
      description: "Comprehensive 90-minute plant health consultation and treatment by our certified expert.",
      benefits: ["UGA certified expert", "90-minute consultation", "Same-week appointments", "Guaranteed results"],
      cta: "Book Visit - $149",
      action: "https://api.leadconnectorhq.com/widget/bookings/plantdoctorservice",
      learnMore: "/plant-doctor",
      image: "/lovable-uploads/cc2424e3-3025-4f30-be79-6a4763fca0a5.png",
      color: "orange",
      popular: true
    },
    {
      icon: Gift,
      title: "Corporate Plant Gifting & Workshops",
      description: "Bulk plants for employees, client gifts, and team-building succulent workshops.",
      benefits: ["Bulk pricing", "Custom packaging", "Team workshops", "CSR programs"],
      cta: "Get Quote",
      action: () => openForm('bulk-order'),
      learnMore: "/corporate",
      image: "/lovable-uploads/f6771e8f-e3c7-432a-ae46-88584325a2f5.png",
      color: "blue"
    },
    {
      icon: Home,
      title: "Home Plant Design",
      description: "Custom residential plant design and installation for luxury homes and condos.",
      benefits: ["Custom design", "Professional installation", "Luxury homes", "Ongoing support"],
      cta: "Request Consultation",
      action: () => openForm('home-consultation'),
      learnMore: "/home-design",
      image: "/lovable-uploads/24794cd6-d871-433d-8ce5-1b5d61120d74.png",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string, popular?: boolean) => {
    if (popular) {
      return {
        button: "bg-orange-600 hover:bg-orange-700",
        outline: "border-orange-600 text-orange-600 hover:bg-orange-50"
      };
    }
    
    const colors = {
      green: {
        button: "bg-green-600 hover:bg-green-700",
        outline: "border-green-600 text-green-600 hover:bg-green-50"
      },
      blue: {
        button: "bg-blue-600 hover:bg-blue-700", 
        outline: "border-blue-600 text-blue-600 hover:bg-blue-50"
      },
      purple: {
        button: "bg-purple-600 hover:bg-purple-700",
        outline: "border-purple-600 text-purple-600 hover:bg-purple-50"
      }
    };
    
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Plant Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional plant solutions for businesses and plant parents across Atlanta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden ${service.popular ? 'ring-2 ring-orange-400' : ''}`}>
              {service.popular && (
                <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-2 text-sm font-medium text-center">
                  🩺 Most Popular Service
                </div>
              )}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={`${service.title} - Atlanta House Plants`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className={`h-7 w-7 mr-3 ${service.popular ? 'text-orange-600' : `text-${service.color}-600`}`} />
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className={`w-2 h-2 rounded-full mr-3 ${service.popular ? 'bg-orange-600' : `bg-${service.color}-600`}`}></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="space-y-3">
                  {typeof service.action === 'string' ? (
                    <a 
                      href={service.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className={`w-full text-white ${getColorClasses(service.color, service.popular).button}`}>
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  ) : (
                    <Button 
                      onClick={service.action}
                      className={`w-full text-white ${getColorClasses(service.color, service.popular).button}`}
                    >
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                  <Button 
                    asChild
                    variant="outline" 
                    className={`w-full ${getColorClasses(service.color, service.popular).outline}`}
                  >
                    <Link to={service.learnMore}>
                      Learn More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimplifiedServices;
