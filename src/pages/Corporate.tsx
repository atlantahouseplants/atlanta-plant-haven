
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Users, Building2, Heart, Leaf, Award, Phone, Mail, Clock, Star, CheckCircle, ArrowRight, Truck, Shield, QrCode } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import InlineLeadCapture from "@/components/InlineLeadCapture";

const Corporate = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    quantity: "",
    timeline: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://hook.us1.make.com/ksjtagxicktvi9jblyyj78demqsvuhp7", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          service: "Corporate Plant Order",
          timestamp: new Date().toISOString()
        }),
      });

      toast({
        title: "Order Request Submitted Successfully!",
        description: "We'll contact you within 24 hours with your custom quote and availability.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        quantity: "",
        timeline: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue submitting your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  const scrollToOrder = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProcess = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getVolumeDiscount = (quantity: number) => {
    if (quantity >= 500) return "20% off";
    if (quantity >= 250) return "15% off";
    if (quantity >= 100) return "10% off";
    if (quantity >= 50) return "5% off";
    return "List price";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/lovable-uploads/9c2eeabd-0020-4009-b76a-339b3a4dc21b.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-600 text-white px-4 py-2 text-sm">
              Automated • Seamless • No Hassle for HR
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 bg-clip-text text-transparent">
                Strategic Employee Recognition
              </span>
              <br />Through Automated Plant Gifting
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your employee appreciation program with our comprehensive automated gifting system—designed to strengthen company culture while eliminating administrative burden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToProcess}
                className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Explore Our Solutions
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Opportunity Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Elevate Your Employee Recognition Strategy
            </h2>
            <p className="text-xl text-blue-700 leading-relaxed max-w-4xl mx-auto">
              Transform administrative burden into meaningful connections through strategic, automated gifting that strengthens company culture and employee engagement.
            </p>
          </div>

          {/* Current vs Enhanced Approach */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Current Challenge */}
            <div className="bg-white border border-gray-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center">
                <span className="mr-3">📋</span>
                Current Recognition Challenges
              </h3>
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Manual tracking of employee milestones and anniversaries</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Generic gifts that lack personal meaning or lasting impact</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Administrative burden on HR teams for gift coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Inconsistent recognition leading to missed opportunities</span>
                </li>
              </ul>
            </div>

            {/* Strategic Solution */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                <span className="mr-3">🌱</span>
                Automated Recognition Benefits
              </h3>
              <ul className="space-y-4 text-lg text-green-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Zero administrative burden</strong> with quarterly list updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Living gifts</strong> that grow and serve as lasting reminders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Consistent brand experience</strong> with custom packaging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Scalable system</strong> that grows with your organization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* How It Works - Core Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional 3-Step Implementation Process
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
              From initial strategy development to ongoing program management, we handle every detail of your employee recognition system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">1</div>
              <h3 className="text-2xl font-bold mb-4 text-green-800">Strategic Program Design</h3>
              <p className="text-lg text-gray-700 leading-relaxed">We collaborate with your team to develop a comprehensive recognition strategy, selecting appropriate gift tiers and milestone triggers that align with your company culture.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">2</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Streamlined Administration</h3>
              <p className="text-lg text-gray-700 leading-relaxed">Quarterly recipient updates are all that's required from your team. Our system handles scheduling, customization, and delivery coordination automatically.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">3</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-800">Complete Program Management</h3>
              <p className="text-lg text-gray-700 leading-relaxed">Our team manages expert preparation, custom branding, consolidated delivery, and ongoing program optimization—ensuring consistent, professional recognition experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Milestone Collection - 3 Solution Tiers */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional Recognition Tiers
            </h2>
            <p className="text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed">
              Thoughtfully curated plant gifts designed to match the significance of each milestone in your organization's employee journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Welcome Tier */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/images/arrangements-decorative/desktop-succulent-trio-welcome.png"
                alt="Welcome Tier - Mini succulent gift for new hires"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Welcome Tier</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Thoughtfully designed for new employee welcomes, team appreciation, and milestone acknowledgments. 
                    Professional succulent arrangements that create positive first impressions.
                  </p>
                  <div className="mb-6">
                    <Badge className="bg-green-600 text-white text-lg px-4 py-2">
                      One-Time: $12 each
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ideal for: New hires, team thank-yous, small milestones
                  </p>
                </div>
              </div>
            </div>

            {/* Recognition Tier */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ring-2 ring-green-600">
              <div className="bg-green-600 text-white text-center py-2 font-semibold">
                MOST POPULAR
              </div>
              <img
                src="/images/arrangements-decorative/professional-desktop-plant-anniversary.png"
                alt="Recognition Tier - Desktop plant for anniversaries"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Recognition Tier</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Premium desktop plants ideal for service anniversaries, promotions, and client appreciation. 
                    Sophisticated plants that reinforce professional relationships and company values.
                  </p>
                  <div className="mb-6">
                    <Badge className="bg-blue-600 text-white text-lg px-4 py-2">
                      One-Time: $45 each
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ideal for: Work anniversaries, promotions, client thank-yous
                  </p>
                </div>
              </div>
            </div>

            {/* Executive Tier */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/images/arrangements-decorative/luxury-arrangement-executive-tier.png"
                alt="Executive Tier - Designer arrangement for VIP recognition"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Executive Tier</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Luxury designer arrangements for executive recognition, significant achievements, and key stakeholder appreciation. 
                    Distinctive pieces that reflect organizational excellence and premium brand standards.
                  </p>
                  <div className="mb-6">
                    <Badge className="bg-purple-600 text-white text-lg px-4 py-2">
                      One-Time: $125 each
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ideal for: Executive recognition, major milestones, VIP clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Lead Capture - Case Studies */}
      <InlineLeadCapture 
        variant="case-studies" 
        className="mx-4 sm:mx-6 lg:mx-8 mb-20"
      />

      {/* Continuity Offer - Partner With Us & Save */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-500 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Annual Partnership Program Benefits
            </h2>
            <div className="text-xl leading-relaxed max-w-4xl mx-auto">
              <p className="mb-6">
                While individual orders are available at standard pricing, our <strong>Annual Partnership Program</strong> provides 
                comprehensive value through <strong>20% savings on all gifts</strong> and complimentary custom branding services.
              </p>
              <div className="bg-white/20 border border-white/30 rounded-2xl p-6 mb-6">
                <p className="text-lg">
                  <strong>Partnership Benefits:</strong> Streamlined recognition management, consistent brand experience, 
                  and significant cost savings for organizations committed to ongoing employee appreciation.
                </p>
              </div>
            </div>
          </div>
          
          {/* Partnership Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">20%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Partnership Savings</h3>
              <p className="text-green-100">Immediate 20% discount on all recognition gifts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Brand Integration</h3>
              <p className="text-green-100">Professional logo cards and branded packaging included</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automated Management</h3>
              <p className="text-green-100">Quarterly updates only - complete program automation</p>
            </div>
          </div>

          {/* Single Powerful CTA */}
          <Button 
            size="lg"
            onClick={() => window.open('tel:+14706644039')}
            className="bg-white text-green-700 hover:bg-green-50 border-2 border-white hover:border-green-100 text-2xl px-16 py-8 shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 font-bold tracking-wide rounded-xl"
          >
            <span className="flex items-center">
              Discuss Your Recognition Program
              <Phone className="ml-4 h-7 w-7" />
            </span>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Corporate;
