
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
import BulkOrderForm from "@/components/forms/BulkOrderForm";

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
      // Enhanced lead data for consultation request
      const leadData = {
        // Contact Information
        firstName: formData.name.split(' ')[0],
        lastName: formData.name.split(' ').slice(1).join(' ') || '',
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        
        // Company Information
        employeeCount: formData.quantity,
        
        // Lead Scoring Data
        formSubmitted: 'free-consultation-request',
        leadMagnetDownloaded: 'corporate-plant-design-consultation',
        timeline: 'immediate',  // They want consultation ASAP
        urgency: 'immediate',
        primaryInterest: 'employee-satisfaction',
        source: 'website-corporate-page',
        
        // Service Details
        service: "FREE Corporate Plant Design Consultation",
        requestType: "consultation",
        leadPriority: "high",  // Free consultation requests are high priority
        
        // Tracking
        pageUrl: window.location.href,
        timestamp: new Date().toISOString(),
        
        // Additional form data
        message: `Free consultation request for ${formData.quantity || 'unspecified'} employee company`
      };

      const response = await fetch("https://hook.us1.make.com/ksjtagxicktvi9jblyyj78demqsvuhp7", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      });

      if (response.ok) {
        toast({
          title: "🎯 Consultation Booked Successfully!",
          description: "We'll call you within 4 hours to schedule your FREE corporate plant design session. Check your email for confirmation.",
        });

        // Track high-value conversion
        if (typeof gtag !== 'undefined') {
          gtag('event', 'conversion', {
            'event_category': 'Free Consultation Request',
            'event_label': 'Corporate Plant Design',
            'value': 500,  // High value lead
            'employee_count': formData.quantity
          });
        }

        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          quantity: "",
          timeline: "",
          message: ""
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue submitting your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  const scrollToOrder = () => {
    document.getElementById('bulk-order')?.scrollIntoView({ behavior: 'smooth' });
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
            backgroundImage: "url('/images/corporate-offices/modern-restaurant-plant-installation-hero.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-600 text-white px-4 py-2 text-sm">
              Custom Branded • Volume Discounts • Atlanta Delivery
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 bg-clip-text text-transparent">
                Atlanta Corporate Plant Gifts
              </span>
              <br />25-500+ Plants for Any Occasion
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-4 leading-relaxed">
              Employee appreciation, client gifts, events, and CSR programs. Professional plant gifts from Atlanta's trusted plant specialists - trusted by Coca-Cola, Delta, and Home Depot.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/90">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-2 text-emerald-300" />
                <span className="font-semibold">8+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-2 text-emerald-300" />
                <span className="font-semibold">200+ Corporate Clients</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-2 text-emerald-300" />
                <span className="font-semibold">50,000+ Plants Delivered</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToOrder}
                className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Get Bulk Plant Quote
                <Gift className="ml-3 h-6 w-6" />
              </Button>
              <Button 
                onClick={() => window.open('tel:+14706644039')}
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-xl font-semibold rounded-xl backdrop-blur-sm"
              >
                Call for Quick Quote
                <Phone className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Benefits Bar */}
      <section className="py-8 bg-green-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              <span className="font-semibold">4-Hour Quote Response</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              <span className="font-semibold">Custom Branding Available</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              <span className="font-semibold">Atlanta Area Delivery</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              <span className="font-semibold">Up to 20% Volume Discount</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-lg font-semibold text-gray-600 mb-6">
              Trusted by Atlanta's Leading Companies
            </p>
          </div>
          
          {/* Client Logos Row */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8 opacity-60">
            <div className="text-2xl font-bold text-gray-500">COCA-COLA</div>
            <div className="text-2xl font-bold text-gray-500">DELTA</div>
            <div className="text-2xl font-bold text-gray-500">HOME DEPOT</div>
            <div className="text-2xl font-bold text-gray-500">MAILCHIMP</div>
            <div className="text-2xl font-bold text-gray-500">NCR</div>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-sm text-gray-600">Corporate Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-sm text-gray-600">Plants Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Atlanta's Top Companies Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              Real results from real companies who've transformed their employee recognition
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Atlanta Houseplants transformed our employee appreciation program. The automated system saves our HR team 10+ hours monthly, and employee feedback has been incredible. Our retention rate increased 23% since implementing their recognition program."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-gray-900">Sarah Mitchell</p>
                  <p className="text-sm text-gray-600">VP of HR, TechCorp Atlanta</p>
                  <p className="text-xs text-gray-500">127 employees</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The quarterly automated delivery system is a game-changer. Our employees love the personalized plants for anniversaries and achievements. We've seen a noticeable improvement in workplace morale and our Glassdoor reviews have improved significantly."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-gray-900">Michael Rodriguez</p>
                  <p className="text-sm text-gray-600">Facilities Manager, Financial Partners</p>
                  <p className="text-xs text-gray-500">89 employees</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "What impressed us most was their strategic approach to employee recognition. They didn't just sell us plants—they designed a comprehensive program that aligns with our company values. The ROI has been exceptional."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-gray-900">Jennifer Adams</p>
                  <p className="text-sm text-gray-600">Chief People Officer, InnovateATL</p>
                  <p className="text-xs text-gray-500">203 employees</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => document.getElementById('free-consultation')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
            >
              Get My FREE Consultation Like These Companies Did
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Use Cases & Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Perfect for Any Corporate Occasion
            </h2>
            <p className="text-xl text-blue-700 leading-relaxed max-w-4xl mx-auto">
              From employee appreciation to client gifts - professional plant gifts that make lasting impressions and strengthen business relationships.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Popular Use Cases */}
            <div className="bg-white border border-gray-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center">
                <Gift className="mr-3 h-7 w-7 text-green-600" />
                Popular Corporate Uses
              </h3>
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">🎉</span>
                  <span><strong>Employee Appreciation Events</strong> - Team lunches, quarterly recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">🏆</span>
                  <span><strong>Work Anniversaries & Promotions</strong> - Milestone celebrations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">🤝</span>
                  <span><strong>Client Appreciation Gifts</strong> - Thank you for partnerships</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">🌍</span>
                  <span><strong>CSR & Community Programs</strong> - Charitable plant donations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">📅</span>
                  <span><strong>Conference & Event Giveaways</strong> - Professional networking gifts</span>
                </li>
              </ul>
            </div>

            {/* Why Plant Gifts Work */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                <Leaf className="mr-3 h-7 w-7 text-green-600" />
                Why Plant Gifts Excel
              </h3>
              <ul className="space-y-4 text-lg text-green-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Lasting impact</strong> - Lives and grows vs. consumed or forgotten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Office enhancement</strong> - Improves air quality and workspace aesthetics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Custom branding</strong> - Your logo and message on every pot</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Volume savings</strong> - Up to 20% discount on large orders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Professional delivery</strong> - Coordinated Atlanta-wide distribution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Simple Process Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
              From quote to delivery in just a few days. No complex setups or ongoing commitments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">1</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Get Quick Quote</h3>
              <p className="text-lg text-gray-700 leading-relaxed">Tell us your quantity, occasion, and delivery date. We'll send you pricing and plant options within 4 hours.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">2</div>
              <h3 className="text-2xl font-bold mb-4 text-green-800">Customize Your Order</h3>
              <p className="text-lg text-gray-700 leading-relaxed">Choose from our plant recommendations, add custom branding, and approve delivery details. Simple approval process.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">3</div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-800">Professional Delivery</h3>
              <p className="text-lg text-gray-700 leading-relaxed">We handle preparation, packaging, and coordinated delivery across Atlanta. Your team just enjoys the results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Pricing & Packages */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simple Bulk Pricing
            </h2>
            <p className="text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed">
              Professional plant gifts starting at $12 each. Desktop succulents, office plants, and executive arrangements with volume discounts up to 20% off.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Desktop Gifts */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="/images/arrangements-decorative/desktop-succulent-arrangement.png" 
                alt="Desktop succulent arrangement" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">Desktop Collection</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Perfect for employee appreciation, team thank-yous, and desk gifts. 
                    Low-maintenance succulents and air plants.
                  </p>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-green-600">$12-18</div>
                    <div className="text-sm text-gray-500">per plant</div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    2-4" pots • Care instructions included
                  </p>
                </div>
              </div>
            </div>

            {/* Office Plants */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-500">
              <div className="bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                MOST POPULAR
              </div>
              <img 
                src="/images/corporate-offices/blue-cubicle-planters.png" 
                alt="Office cubicle plants" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">Professional Collection</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Snake plants, pothos, and ZZ plants in modern pots. 
                    Perfect for work anniversaries and client gifts.
                  </p>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-green-600">$25-35</div>
                    <div className="text-sm text-gray-500">per plant</div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    4-6" pots • Office-friendly varieties
                  </p>
                </div>
              </div>
            </div>

            {/* Executive Plants */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="/images/corporate-offices/bird-of-paradise-atlanta-skyline.png" 
                alt="Executive floor plant with Atlanta skyline" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">Executive Collection</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Statement floor plants and luxury arrangements. 
                    Premium gifts for executives and VIP clients.
                  </p>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-green-600">$45-65</div>
                    <div className="text-sm text-gray-500">per plant</div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    6-8"+ pots • Premium varieties
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Volume Discounts */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Volume Discounts</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="font-bold text-lg">25-49 plants</div>
                <div className="text-green-600 font-semibold">5% off</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                <div className="font-bold text-lg">50-99 plants</div>
                <div className="text-green-600 font-semibold">10% off</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="font-bold text-lg">100-249 plants</div>
                <div className="text-green-600 font-semibold">15% off</div>
              </div>
              <div className="p-4 bg-green-100 rounded-lg border-2 border-green-400">
                <div className="font-bold text-lg">250+ plants</div>
                <div className="text-green-600 font-semibold">20% off</div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              All orders include: Professional plants • Decorative pots • Care instructions • Atlanta delivery
            </p>
            
            <div className="text-center mt-8">
              <Button 
                onClick={scrollToOrder}
                className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get My Quote Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Order Form Section */}
      <section id="bulk-order" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 border-t-4 border-green-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 border-2 border-green-500 text-green-800 px-6 py-2 rounded-full font-bold text-lg mb-6">
              🚀 QUICK QUOTE - RESPONSE IN 4 HOURS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Your Corporate Plant Quote 
              <span className="text-green-600">Within Hours</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
              Tell us your quantity, occasion, and delivery date. We'll send you plant recommendations, exact pricing, and delivery timeline within 4 hours. 
              <strong> No obligation. No surprises. Just professional service.</strong>
            </p>
            <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>4-Hour Response</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" />
                <span>Atlanta Delivery</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Side - What's Included */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What's Included in Every Order:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      <strong>Professional Plant Selection</strong> - Hardy, beautiful plants perfect for office environments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      <strong>Custom Branding Available</strong> - Add your logo and personalized messages to every pot
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      <strong>Atlanta Area Delivery</strong> - Coordinated delivery across metro Atlanta on your schedule
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      <strong>Care Instructions</strong> - Simple care cards so recipients can keep their plants thriving
                    </span>
                  </li>
                </ul>
                
                <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                  <p className="text-lg font-semibold text-blue-800">
                    💡 <strong>Most orders are delivered within 5-7 business days.</strong> Rush orders available for urgent events.
                  </p>
                </div>
              </div>

              {/* Right Side - Bulk Order Form */}
              <div>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    Get Your Bulk Plant Quote
                  </h3>
                  <BulkOrderForm />
                </div>
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Join 200+ Atlanta companies who trust us with their corporate plant gifts
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span>Plant Specialists</span>
              </div>
              <div className="flex items-center">
                <Truck className="h-5 w-5 mr-2" />
                <span>Atlanta Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Upsell Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Love This Experience? Automate It!
              </h2>
              <p className="text-xl leading-relaxed max-w-3xl mx-auto">
                Companies who start with bulk orders often ask: "Can you just handle this quarterly?" 
                <strong> Yes, we can automate everything.</strong>
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">After Your First Bulk Order:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-1 text-green-300" />
                    <span>Set up quarterly employee recognition deliveries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-1 text-green-300" />
                    <span>Automatic work anniversary plant gifts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-1 text-green-300" />
                    <span>Seasonal office plant refreshes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-1 text-green-300" />
                    <span>Zero work for your HR team</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Subscription Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-300 mr-3 mt-1">💰</span>
                    <span>Additional 10% discount on all automated orders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-3 mt-1">⏰</span>
                    <span>Never miss an important recognition moment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-3 mt-1">🎯</span>
                    <span>Priority scheduling and rush delivery options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-3 mt-1">📊</span>
                    <span>Quarterly employee satisfaction reports</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg mb-4">
                <strong>95% of our bulk order clients upgrade to automation within 6 months</strong>
              </p>
              <p className="text-blue-100">
                Start with a simple bulk order today. We'll show you how easy automation can be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="inline-block bg-green-100 border-2 border-green-500 text-green-800 px-6 py-2 rounded-full font-bold text-lg mb-6">
              🌱 READY TO ORDER? GET QUOTE IN 4 HOURS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Give Your Team Something 
              <br />They'll <span className="text-green-400">Actually Keep</span>
            </h2>
            <div className="text-xl leading-relaxed max-w-3xl mx-auto">
              <p className="mb-6">
                While other companies give gift cards that disappear, your team could have 
                <strong> living plants</strong> that brighten their workspace every single day.
              </p>
              <p className="mb-8 text-gray-300">
                Join 200+ Atlanta companies who trust us with their corporate plant gifts. 
                Get your quote today and see why bulk plant gifting works so well.
              </p>
            </div>
          </div>

          {/* Quick Benefits */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4">What Happens When You Order Today:</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h4 className="font-semibold">Fast Quote (Within 4 Hours)</h4>
                  <p className="text-gray-300 text-sm">Exact pricing, plant options, and delivery timeline</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h4 className="font-semibold">Simple Approval Process</h4>
                  <p className="text-gray-300 text-sm">Review options, approve order, and schedule delivery</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h4 className="font-semibold">Professional Delivery</h4>
                  <p className="text-gray-300 text-sm">We handle everything - preparation, branding, and coordinated delivery</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h4 className="font-semibold">Happy Team</h4>
                  <p className="text-gray-300 text-sm">Your team enjoys beautiful plants that improve their workspace</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="space-y-6">
            <Button 
              onClick={scrollToOrder}
              className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white text-2xl px-12 py-6 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 font-bold tracking-wide rounded-xl"
            >
              🌱 GET MY BULK QUOTE NOW
              <ArrowRight className="ml-4 h-7 w-7" />
            </Button>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-400">
              <span>Or call for immediate service:</span>
              <Button 
                variant="link"
                onClick={() => window.open('tel:+14706644039')}
                className="text-green-400 hover:text-green-300 text-xl font-bold"
              >
                📞 (470) 664-4039
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              ⚡ Most quotes delivered within 4 hours during business hours. 
              <strong className="text-green-400"> Rush orders available for urgent events</strong>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Corporate;
