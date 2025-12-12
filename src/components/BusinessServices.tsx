import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Gift, Check, ArrowRight, Leaf, Package, Truck, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessServices = () => {
  const officeServices = [
    { icon: Building2, text: "Custom design & professional installation" },
    { icon: Leaf, text: "Weekly or bi-weekly expert maintenance" },
    { icon: Shield, text: "100% plant health guarantee" },
    { icon: Package, text: "Purchase + care OR lease programs available" }
  ];

  const corporateGiftingServices = [
    { icon: Gift, text: "Bulk orders: 50 to 5,000+ plants" },
    { icon: Package, text: "Custom branded tags & packaging" },
    { icon: Truck, text: "Free delivery throughout Atlanta" },
    { icon: Shield, text: "AutoGift subscription programs" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Commercial Plant Solutions for Atlanta Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two ways we help businesses: Transform your workplace with professional plant programs,
            or delight employees and clients with bulk plant gifting.
          </p>
        </div>

        {/* Two Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Office Plant Programs Card */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-green-200 hover:border-green-400 bg-white">
            <CardHeader className="bg-gradient-to-br from-green-50 to-emerald-50 border-b border-green-200">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-center text-green-800">
                Office Plant Programs
              </CardTitle>
              <CardDescription className="text-center text-lg text-green-700 mt-2">
                Design, installation & ongoing maintenance
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8 pb-8">
              {/* Features List */}
              <div className="space-y-4 mb-8">
                {officeServices.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700 text-lg pt-2">{service.text}</p>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                <p className="text-green-800 font-semibold text-center">
                  Custom quotes • Maintenance from $199/month
                </p>
                <p className="text-green-700 text-sm text-center mt-1">
                  Purchase + care plans OR <Link to="/lease-programs" className="underline hover:text-green-900 font-semibold">full-service lease programs</Link>
                </p>
              </div>

              {/* CTA */}
              <Link to="/office-plants" className="block">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 text-white shadow-xl hover:shadow-green-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-semibold rounded-xl h-14 text-lg"
                >
                  Get Free Office Design
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              {/* Trust Badge */}
              <p className="text-center text-sm text-gray-600 mt-4">
                <Check className="inline h-4 w-4 text-green-600 mr-1" />
                Free consultation • 48-hour quote turnaround
              </p>
            </CardContent>
          </Card>

          {/* Corporate Gifting Card */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-400 bg-white">
            <CardHeader className="bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-blue-200">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-center text-blue-800">
                Corporate Gifting
              </CardTitle>
              <CardDescription className="text-center text-lg text-blue-700 mt-2">
                Bulk plant orders for employees & clients
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8 pb-8">
              {/* Features List */}
              <div className="space-y-4 mb-8">
                {corporateGiftingServices.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-gray-700 text-lg pt-2">{service.text}</p>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                <p className="text-blue-800 font-semibold text-center">
                  Starting at $7.25/plant (1,000+ units)
                </p>
                <p className="text-blue-700 text-sm text-center mt-1">
                  Perfect for employee appreciation, client gifts & events
                </p>
              </div>

              {/* Dual CTAs */}
              <div className="space-y-3">
                <Link to="/corporate" className="block">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white shadow-xl hover:shadow-blue-500/25 transform hover:scale-[1.02] transition-all duration-300 border-0 font-semibold rounded-xl h-14 text-lg"
                  >
                    Download Gift Catalog
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/corporate" className="block">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-blue-600 text-blue-700 hover:bg-blue-50 rounded-xl h-12 text-base font-semibold"
                  >
                    Request Bulk Quote
                  </Button>
                </Link>
              </div>

              {/* Trust Badge */}
              <p className="text-center text-sm text-gray-600 mt-4">
                <Check className="inline h-4 w-4 text-blue-600 mr-1" />
                Minimum 50 plants • Fast turnaround
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 text-lg font-medium">
            Trusted by 500+ Atlanta businesses • 15+ years of commercial excellence
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessServices;
