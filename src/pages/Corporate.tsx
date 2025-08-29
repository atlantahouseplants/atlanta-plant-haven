
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
              Effortless Employee Recognition.<br />Memorable Results.
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              Introducing the Automated Gifting Program: A complete, 'set-it-and-forget-it' system for celebrating your team's milestones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToProcess}
                className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
              >
                See How It Works
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-red-50/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Stop Giving Gifts That Get Forgotten.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Generic gift cards, branded swag, and one-off gifts are a logistical nightmare for your team and are quickly forgotten by employees. You need a scalable system that provides a consistently meaningful experience without adding to your workload.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-green-50/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Deliver a Living, Lasting Impression.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Our Automated Gifting Program is the solution. We partner with Atlanta's leading companies to handle their entire employee recognition calendar. From welcoming new hires to celebrating work anniversaries, we deliver beautiful, living gifts that grow with your team, serving as a lasting reminder of your company's appreciation.
          </p>
        </div>
      </section>

      {/* How It Works - Core Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Automated Gifting Program in 3 Simple Steps
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No more last-minute scrambling or forgotten milestones. Set it once, and we handle everything.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">1</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Create Your Plan</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">We work with you to select the perfect gift tiers for your key milestones (new hires, anniversaries, client thank-yous).</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">2</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Send Us Your List</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">Once a quarter, simply send us your list of recipients. That's it. Your work is done.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">3</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">We Handle Everything</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">We handle the expert preparation, custom branding, and a single, consolidated delivery to your office. You get all the credit for a perfectly executed recognition program.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Milestone Collection - 3 Solution Tiers */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Milestone Collection: Curated for Every Occasion
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three carefully designed tiers to match every recognition moment in your company's journey.
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
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Perfect for new hire welcome gifts, small thank-yous, and team appreciation. 
                    Mini succulent arrangements that make a memorable first impression.
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
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Professional desktop plants for work anniversaries, promotions, and client gifts. 
                    Substantial plants that make a lasting impression.
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
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Designer arrangements for executive recognition, major milestones, and VIP clients. 
                    Statement pieces that reflect your company's premium standards.
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

      {/* Continuity Offer - Partner With Us & Save */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-500 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Partner With Us & Save
          </h2>
          <div className="text-xl leading-relaxed mb-12 max-w-4xl mx-auto">
            <p className="mb-6">
              You can place one-time orders at our list price. However, our partners who enroll in the <strong>12-month Automated Gifting Program</strong> receive an immediate <strong>20% discount on all gifts</strong> and our complimentary branding package.
            </p>
            <p>
              It's the most seamless and cost-effective way to manage your company's culture of recognition.
            </p>
          </div>
          
          {/* Partnership Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">20%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Immediate Savings</h3>
              <p className="text-green-100">20% off all gifts for 12-month partners</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Complimentary Branding</h3>
              <p className="text-green-100">Custom logo cards and branded packaging included</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Set & Forget</h3>
              <p className="text-green-100">Quarterly list updates - we handle everything else</p>
            </div>
          </div>

          {/* Single Powerful CTA */}
          <Button 
            size="lg"
            onClick={() => window.open('tel:+14706644039')}
            className="bg-white text-green-700 hover:bg-green-50 border-2 border-white hover:border-green-100 text-2xl px-16 py-8 shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 font-bold tracking-wide rounded-xl"
          >
            <span className="flex items-center">
              Schedule a Gifting Strategy Call
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
