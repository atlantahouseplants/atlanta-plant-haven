import { Calendar, FileText, Leaf, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BusinessProcess = () => {
  const steps = [
    {
      number: "1",
      icon: Calendar,
      title: "Free Consultation",
      description: "Schedule your complimentary on-site walkthrough. We assess your space, lighting conditions, and business needs to understand your vision.",
      highlight: "No obligation • Expert assessment"
    },
    {
      number: "2",
      icon: FileText,
      title: "Custom Design & Quote",
      description: "Receive your professional plant design and detailed quote within 48 hours. Choose between purchase + care plans or full-service lease programs.",
      highlight: "48-hour turnaround • Flexible options"
    },
    {
      number: "3",
      icon: Leaf,
      title: "Installation & Care",
      description: "We install your plants and provide weekly or bi-weekly professional maintenance with our 100% plant health guarantee. Sit back and enjoy your thriving workplace.",
      highlight: "100% guarantee • Ongoing support"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your Atlanta workplace with professional plants
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (hidden on mobile, shown on desktop between cards) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-0.5 bg-gradient-to-r from-green-300 to-green-200"></div>
              )}

              {/* Step Card */}
              <div className="relative bg-gradient-to-br from-green-50 to-blue-50/50 p-8 rounded-2xl border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 h-full">
                {/* Step Number Badge */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 text-white rounded-full text-2xl font-bold mb-6 mx-auto shadow-lg relative z-10">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 bg-white rounded-xl mb-4 mx-auto shadow-md">
                  <step.icon className="h-7 w-7 text-green-600" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-center text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Highlight Badge */}
                <div className="bg-white border border-green-200 rounded-lg px-4 py-2 text-center">
                  <p className="text-sm font-semibold text-green-700">
                    {step.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-green-200 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join 500+ Atlanta businesses that trust us with their workplace plant programs.
            Get your free design consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/office-plants">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 text-white shadow-xl hover:shadow-green-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-semibold rounded-xl h-14 px-8 text-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Button>
            </Link>
            <a href="tel:470-664-4039">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-green-600 text-green-700 hover:bg-green-50 rounded-xl h-14 px-8 text-lg font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (470) 664-4039
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessProcess;
