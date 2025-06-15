
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Truck, CheckCircle, ArrowRight, Phone, MessageSquare, Settings } from "lucide-react";
import { useForm } from "@/components/forms/FormContext";

const HowItWorks = () => {
  const { openForm } = useForm();

  const businessSteps = [
    {
      icon: MessageSquare,
      step: "1",
      title: "FREE Consultation",
      description: "Tell us about your space and needs. We'll provide a free quote within 24 hours."
    },
    {
      icon: Settings,
      step: "2", 
      title: "Custom Design",
      description: "We create a tailored plant solution that fits your space, budget, and maintenance preferences."
    },
    {
      icon: CheckCircle,
      step: "3",
      title: "Install & Maintain",
      description: "Professional installation with ongoing care and plant guarantee included."
    }
  ];

  const individualSteps = [
    {
      icon: Calendar,
      step: "1",
      title: "Book Appointment",
      description: "Schedule your Plant Doctor visit online. Same-week appointments available."
    },
    {
      icon: Truck,
      step: "2",
      title: "Expert Visit",
      description: "Nick arrives with tools and expertise for a comprehensive 90-minute consultation."
    },
    {
      icon: CheckCircle,
      step: "3",
      title: "Healthy Plants",
      description: "Get a custom care plan and watch your plants thrive with professional guidance."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started is easy. Choose your path and we'll guide you through every step.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Business Process */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">For Businesses</h3>
            <div className="space-y-6 mb-8">
              {businessSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <step.icon className="h-5 w-5 text-green-600 mr-2" />
                      <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button 
              onClick={() => openForm('business-quote')}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Get FREE Business Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Individual Process */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">For Plant Parents</h3>
            <div className="space-y-6 mb-8">
              {individualSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <step.icon className="h-5 w-5 text-orange-600 mr-2" />
                      <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <a 
              href="https://api.leadconnectorhq.com/widget/bookings/plantdoctorservice"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                Book Plant Doctor Visit - $149
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 text-sm text-muted-foreground bg-white px-8 py-4 rounded-full shadow-sm">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              Emergency Plant Help: (470) 664-4039
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
