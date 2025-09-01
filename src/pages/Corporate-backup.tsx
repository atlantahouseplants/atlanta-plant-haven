import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Gift, 
  ArrowRight, 
  CheckCircle2,
  Star,
  Download,
  Calendar,
  Calculator,
  TrendingUp,
  Users,
  Heart,
  Sparkles,
  Building2,
  Package,
  Truck,
  BarChart3,
  Clock,
  RefreshCw
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Corporate = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [employees, setEmployees] = useState("");
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLeadMagnetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would send to your Make.com webhook
    // For now, we'll simulate the submission
    setTimeout(() => {
      alert("Success! Check your email for your Corporate Gift Planning Kit.");
      setIsSubmitting(false);
      setEmail("");
      setCompany("");
      setEmployees("");
    }, 1000);
  };

  const giftingOccasions = [
    "Employee Appreciation",
    "Holiday Gifts",
    "Welcome/Onboarding",
    "Work Anniversaries",
    "Client Thank You",
    "Team Milestones",
    "Retirement",
    "Get Well Soon"
  ];

  const volumeTiers = [
    { quantity: "25-49", discount: "20%", perPlant: "$32" },
    { quantity: "50-99", discount: "30%", perPlant: "$28" },
    { quantity: "100+", discount: "40%", perPlant: "$24" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Sticky CTA Bar */}
      <div className={`fixed top-20 left-0 right-0 z-40 transition-all duration-300 ${
        showStickyBar ? "translate-y-0" : "-translate-y-full"
      }`}>
        <div className="bg-blue-600 text-white py-3 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Gift className="h-5 w-5" />
              <p className="text-lg font-semibold">
                Free Gift Planning Kit: Annual Calendar + ROI Calculator + Catalog
              </p>
            </div>
            <Button 
              onClick={() => document.getElementById('lead-magnet-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Get Your Free Kit
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
                <TrendingUp className="h-4 w-4 mr-2" />
                <span className="text-sm font-semibold">95% of Clients Reorder Quarterly</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Corporate Gifts That
                <span className="text-blue-600"> Grow Relationships</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Premium plant gifts that last for years, not days. Show lasting appreciation 
                with living gifts that remind recipients of your thoughtfulness every day.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Heart className="h-10 w-10 text-red-500" />
                  <div>
                    <div className="text-2xl font-bold">87%</div>
                    <div className="text-sm text-gray-600">Higher Retention</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-10 w-10 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold">3x</div>
                    <div className="text-sm text-gray-600">Better ROI</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-10 w-10 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold">50K+</div>
                    <div className="text-sm text-gray-600">Gifts Delivered</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-10 w-10 text-purple-600" />
                  <div>
                    <div className="text-2xl font-bold">4hr</div>
                    <div className="text-sm text-gray-600">Quote Time</div>
                  </div>
                </div>
              </div>

              {/* Volume Pricing Preview */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">Volume Pricing Starting at 25 Plants</h3>
                <div className="space-y-2 mb-4">
                  {volumeTiers.map((tier) => (
                    <div key={tier.quantity} className="flex justify-between items-center">
                      <span className="text-gray-700">{tier.quantity} plants</span>
                      <span className="font-semibold">
                        <span className="text-blue-600">{tier.discount} off</span>
                        <span className="text-gray-500 ml-2">(~{tier.perPlant}/plant)</span>
                      </span>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={() => document.getElementById('lead-magnet-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
                >
                  Get Complete Pricing Guide
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Hero Image/Visual */}
            <div className="relative">
              <img 
                src="/api/placeholder/600/500" 
                alt="Corporate plant gifts"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Truck className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="text-sm font-semibold">White-Glove Delivery</p>
                    <p className="text-xs text-gray-600">Direct to recipients in Atlanta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section id="lead-magnet-form" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-blue-200 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Get Your Free Corporate Gift Success Kit
                </h2>
                <p className="text-lg text-gray-600">
                  Everything you need to run a successful corporate gifting program
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3">
                    <Calendar className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Annual Gift Calendar</h3>
                  <p className="text-sm text-gray-600">
                    Never miss an important occasion with our 12-month planning guide
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3">
                    <Calculator className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">ROI Calculator</h3>
                  <p className="text-sm text-gray-600">
                    Compare plant gifts vs. traditional options with real data
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3">
                    <Download className="h-10 w-10 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">2025 Gift Catalog</h3>
                  <p className="text-sm text-gray-600">
                    40+ curated options with volume pricing instantly
                  </p>
                </div>
              </div>
              
              <form onSubmit={handleLeadMagnetSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    placeholder="Work Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                  />
                  <Input
                    placeholder="Company Name*"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                <Input
                  placeholder="Number of Employees (helps us customize recommendations)"
                  value={employees}
                  onChange={(e) => setEmployees(e.target.value)}
                  className="h-12"
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Get My Free Gift Planning Kit
                      <Download className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                Join 200+ Atlanta companies who've optimized their gifting programs. 
                Instant download, no spam.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Perfect for Every Occasion
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {giftingOccasions.map((occasion) => (
              <Card key={occasion} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{occasion}</span>
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Why Plants Make the Perfect Corporate Gift
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span><strong>Lasting Impact:</strong> Unlike flowers or food, plants thrive for years with minimal care</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span><strong>Daily Reminder:</strong> Recipients think of you every time they see their plant</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span><strong>Health Benefits:</strong> Improves air quality and reduces stress</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span><strong>Eco-Friendly:</strong> Sustainable choice that reflects your values</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <BarChart3 className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold mb-2">3x Higher ROI</p>
                  <p className="text-gray-600">
                    vs. traditional corporate gifts<br/>
                    <span className="text-sm">(Based on recipient satisfaction surveys)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Simple, Streamlined Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-bold mb-2">Quick Consultation</h3>
              <p className="text-gray-600">Share your needs and budget</p>
              <p className="text-sm text-blue-600 font-semibold mt-2">15 minutes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-bold mb-2">Curated Selection</h3>
              <p className="text-gray-600">Personalized recommendations</p>
              <p className="text-sm text-blue-600 font-semibold mt-2">Same day</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-bold mb-2">White-Glove Service</h3>
              <p className="text-gray-600">We handle everything</p>
              <p className="text-sm text-blue-600 font-semibold mt-2">2-3 days</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-bold mb-2">Delight Delivered</h3>
              <p className="text-gray-600">Recipients love their gifts</p>
              <p className="text-sm text-blue-600 font-semibold mt-2">On schedule</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Upsell */}
      <section id="subscription" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-6">
            <RefreshCw className="h-4 w-4 mr-2" />
            <span className="text-sm font-semibold">Most Popular Option</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Never Miss an Occasion with AutoGift™
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            95% of our clients upgrade to our subscription program after their first order. 
            Set it once, delight all year.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <Package className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Quarterly Gifting</h3>
                <p className="text-gray-600 mb-4">Perfect for regular appreciation</p>
                <p className="text-2xl font-bold text-purple-600">Save 10%</p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-500 border-2">
              <CardContent className="p-6">
                <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Annual Program</h3>
                <p className="text-gray-600 mb-4">Cover all occasions</p>
                <p className="text-2xl font-bold text-purple-600">Save 20%</p>
                <p className="text-sm text-purple-600">BEST VALUE</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <Building2 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-4">500+ employees</p>
                <p className="text-2xl font-bold text-purple-600">Custom</p>
              </CardContent>
            </Card>
          </div>
          
          <Button 
            onClick={() => document.getElementById('lead-magnet-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6"
          >
            Learn About Subscription Savings
          </Button>
        </div>
      </section>

      {/* Client Success Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 mb-6 text-center">
              "We switched from generic gift baskets to Atlanta Houseplants for our quarterly 
              employee appreciation. The response has been incredible - employees actually 
              keep and care for their plants. We've gifted over 500 plants and every single 
              one was delivered perfectly. The ROI calculator in their planning kit showed us 
              we're saving 40% while giving better gifts."
            </blockquote>
            <cite className="text-center block">
              <span className="font-semibold">Jennifer Martinez</span>, 
              <span className="text-gray-500"> HR Director, Financial Services Firm (200 employees)</span>
            </cite>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Gifting Smarter Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 200+ Atlanta companies creating lasting impressions with every gift
          </p>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
            <p className="text-lg font-semibold mb-4">
              🎁 Limited Time: 25% off your first order of 50+ plants
            </p>
            <Button 
              onClick={() => document.getElementById('lead-magnet-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
            >
              Get Your Free Planning Kit
            </Button>
          </div>
          
          <p className="text-sm opacity-75">
            Questions? Call us at{" "}
            <a href="tel:470-554-5662" className="underline">
              470-554-5662
            </a>
            {" "}for instant quotes
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Corporate;
