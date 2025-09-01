
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  Gift, 
  ArrowRight, 
  CheckCircle2,
  Star,
  Users,
  TrendingUp
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Simplified Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Atlanta Business 
              <span className="text-green-600"> With Plants</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional plant services that boost productivity, reduce stress, 
              and strengthen relationships. Trusted by 500+ Atlanta businesses.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="font-semibold">5.0 Google Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                <span className="font-semibold">500+ Businesses</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">95% Retention</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Clear Paths Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Choose Your Solution
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We specialize in two transformative services for Atlanta businesses
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Office Design Path */}
            <Card className="relative overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 text-sm font-semibold">
                Most Popular
              </div>
              <CardContent className="p-8">
                <Building2 className="h-16 w-16 text-green-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Office Biophilic Design & Care
                </h3>
                <p className="text-gray-600 mb-6">
                  Create a thriving workspace that boosts productivity by 15% 
                  and reduces employee stress by 37%
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">FREE Office Assessment</span>
                      <p className="text-sm text-gray-600">Professional evaluation of your space</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Custom Design Proposal</span>
                      <p className="text-sm text-gray-600">Tailored to your environment ($500 value)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">100% Plant Guarantee</span>
                      <p className="text-sm text-gray-600">Full replacement + ongoing care</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/office-plants" className="block">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                    Get FREE Office Design
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  Limited slots available this month
                </p>
              </CardContent>
            </Card>

            {/* Corporate Gifting Path */}
            <Card className="relative overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8">
                <Gift className="h-16 w-16 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Corporate Plant Gifting
                </h3>
                <p className="text-gray-600 mb-6">
                  Premium plant gifts that grow lasting relationships with 
                  employees, clients, and partners
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Volume Discounts</span>
                      <p className="text-sm text-gray-600">Save 20-40% on orders of 25+</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">White-Glove Delivery</span>
                      <p className="text-sm text-gray-600">Direct to recipients in Metro Atlanta</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Gift Planning Calendar</span>
                      <p className="text-sm text-gray-600">Never miss an important occasion</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/corporate" className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                    Get Gift Planning Kit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  FREE catalog + ROI calculator
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-600 mb-8 text-lg">
            Trusted by Atlanta's Leading Companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <img src="/placeholder.svg" alt="Coca-Cola" className="h-12" />
            <img src="/placeholder.svg" alt="Delta Airlines" className="h-12" />
            <img src="/placeholder.svg" alt="Home Depot" className="h-12" />
            <img src="/placeholder.svg" alt="UPS" className="h-12" />
            <img src="/placeholder.svg" alt="NCR" className="h-12" />
          </div>
        </div>
      </section>

      {/* Single Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl text-gray-700 mb-6">
              "Atlanta Houseplants transformed our office environment. 
              Employee satisfaction scores increased by 23% and stress-related 
              sick days dropped by 40%. The ROI has been incredible."
            </blockquote>
            <cite className="text-gray-600">
              <span className="font-semibold">Sarah Chen</span>, 
              VP People Operations, Tech Company (500+ employees)
            </cite>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ Atlanta companies creating healthier, more productive workspaces
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/office-plants">
              <Button className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6">
                Start With Office Design
              </Button>
            </Link>
            <Link to="/corporate">
              <Button className="bg-green-800 text-white hover:bg-green-900 text-lg px-8 py-6">
                Explore Corporate Gifts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
