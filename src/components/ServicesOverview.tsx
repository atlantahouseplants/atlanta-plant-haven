import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building2, Stethoscope, Gift, Users, Home, ArrowRight, ExternalLink } from "lucide-react";
import { useForm } from "@/components/forms/FormContext";

const ServicesOverview = () => {
  const { openForm } = useForm();

  const businessServices = [
    {
      icon: Building2,
      title: "Office Plant Design & Care",
      description: "Complete plant solutions from FREE design consultation to ongoing maintenance with plant guarantee for business installations.",
      details: "Perfect for offices, lobbies, and commercial spaces looking to enhance their environment",
      action: () => openForm('business-quote'),
      cta: "Get FREE Quote",
      learnMore: "/office-plants",
      image: "/lovable-uploads/0744c293-0606-4a7d-b73a-140d0a4405ea.png"
    },
    {
      icon: Gift,
      title: "Employee Appreciation Plants",
      description: "Bulk succulents and plants perfect for employee gifts, client appreciation, and special events.",
      details: "Ideal for HR departments, event planners, and companies celebrating milestones",
      action: () => openForm('bulk-order'),
      cta: "Get Bulk Quote",
      learnMore: "/corporate",
      image: "/lovable-uploads/f6771e8f-e3c7-432a-ae46-88584325a2f5.png"
    },
    {
      icon: Users,
      title: "Succulents for Smiles CSR",
      description: "Corporate donation program - sponsor plants for local hospitals, charities, and community organizations.",
      details: "Perfect for companies looking to make a positive community impact",
      action: () => openForm('bulk-order'),
      cta: "Start CSR Program",
      learnMore: "/corporate",
      image: "/lovable-uploads/6538df31-b81f-40ef-9b80-c3d85951126b.png"
    },
    {
      icon: Building2,
      title: "Seasonal Color Solutions",
      description: "Indoor color bowls and outdoor planters with seasonal rotations to keep your space vibrant year-round.",
      details: "Great for businesses wanting fresh, colorful displays that change with the seasons",
      action: () => openForm('business-quote'),
      cta: "View Options",
      learnMore: "/color-planters",
      image: "/lovable-uploads/24794cd6-d871-433d-8ce5-1b5d61120d74.png"
    }
  ];

  const individualServices = [
    {
      icon: Stethoscope,
      title: "Plant Doctor House Calls",
      description: "Comprehensive 90-minute plant health consultation and treatment by our certified plant doctor.",
      details: "Perfect for plant parents with struggling plants or pest issues",
      action: "https://api.leadconnectorhq.com/widget/bookings/plantdoctorservice",
      cta: "Book Appointment - $149",
      learnMore: "/plant-doctor",
      popular: true,
      image: "/lovable-uploads/cc2424e3-3025-4f30-be79-6a4763fca0a5.png"
    },
    {
      icon: Home,
      title: "Home Plant Design",
      description: "Custom residential plant design and installation services for luxury homes and condos.",
      details: "Ideal for homeowners looking to create beautiful indoor plant displays",
      action: () => openForm('home-consultation'),
      cta: "Request Consultation",
      learnMore: "/home-design",
      image: "/lovable-uploads/24794cd6-d871-433d-8ce5-1b5d61120d74.png"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Business Services */}
        <div className="mb-24">
          <div className="text-center mb-16">
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
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} example`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-sm text-green-700 font-medium mb-6">
                    {service.details}
                  </p>
                  <div className="space-y-3">
                    <Button 
                      onClick={service.action}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button 
                      asChild
                      variant="outline" 
                      className="w-full border-green-600 text-green-600 hover:bg-green-50"
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

          <div className="text-center">
            <Button 
              onClick={() => openForm('business-quote')}
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-12 py-4 text-xl shadow-lg"
            >
              Get Your FREE Business Plant Quote
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              24-hour response • Free on-site consultation • Plant guarantee for business installations
            </p>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - see what Atlanta businesses and plant parents are saying about our services.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <script type='text/javascript' src='https://reputationhub.site/reputation/assets/review-widget.js'></script>
            <iframe 
              className='lc_reviews_widget' 
              src='https://reputationhub.site/reputation/widgets/review_widget/wTvEeXunnbLa5kBRFbc4' 
              frameBorder='0' 
              scrolling='no' 
              style={{ minWidth: '100%', width: '100%', minHeight: '400px' }}
            ></iframe>
          </div>
        </div>

        {/* Individual Services */}
        <div className="mb-20">
          <div className="text-center mb-16">
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
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} by Nick, Your Plant Doctor`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-sm text-blue-700 font-medium mb-6">
                    {service.details}
                  </p>
                  <div className="space-y-3">
                    {typeof service.action === 'string' ? (
                      <a 
                        href={service.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button 
                          className={`w-full ${service.popular ? 'bg-orange-600 hover:bg-orange-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
                        >
                          {service.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    ) : (
                      <Button 
                        onClick={service.action}
                        className={`w-full ${service.popular ? 'bg-orange-600 hover:bg-orange-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
                      >
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                    <Button 
                      asChild
                      variant="outline" 
                      className={`w-full ${service.popular ? 'border-orange-600 text-orange-600 hover:bg-orange-50' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`}
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

        {/* Meet Nick Section - Enhanced */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-12 rounded-2xl text-center shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/cc2424e3-3025-4f30-be79-6a4763fca0a5.png" 
              alt="Nick - Your Plant Doctor"
              className="w-20 h-20 rounded-full object-cover mr-4 border-2 border-white"
            />
            <div className="text-left">
              <h3 className="text-3xl font-bold">Meet Nick, Your Plant Doctor</h3>
              <p className="text-green-100 font-medium">UGA Certified Plant Professional</p>
            </div>
          </div>
          
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed mb-6">
            "UGA-certified plant professional with Georgia certification. I bring professional expertise 
            and guaranteed results to every project, from Fortune 500 offices to your home garden."
          </p>
          <p className="text-lg text-green-200 font-medium">- Nick, Founder & Your Plant Doctor</p>
          
          <div className="mt-8">
            <a 
              href="https://api.leadconnectorhq.com/widget/bookings/plantdoctorservice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline"
                className="bg-white text-green-600 border-white hover:bg-green-50 px-8 py-3"
              >
                Book Plant Doctor Visit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
