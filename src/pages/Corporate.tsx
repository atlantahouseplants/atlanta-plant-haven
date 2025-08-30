
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
            <Badge className="mb-4 bg-blue-600 text-white px-4 py-2 text-sm">
              Automated • Seamless • No Hassle for HR
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 bg-clip-text text-transparent">
                Atlanta's #1 Corporate Plant Gifting
              </span>
              <br />Program - Trusted by 200+ Companies
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-4 leading-relaxed">
              We handle everything from custom plant selection to branded delivery for companies like Coca-Cola, Delta, and Home Depot. Zero work for HR—maximum impact for employees.
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
                onClick={() => document.getElementById('free-consultation')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Get My FREE Plant Design Consultation
                <Gift className="ml-3 h-6 w-6" />
              </Button>
              <Button 
                onClick={scrollToProcess}
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-xl font-semibold rounded-xl backdrop-blur-sm"
              >
                See How It Works
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
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
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">1</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Strategic Program Design</h3>
              <p className="text-lg text-gray-700 leading-relaxed">We collaborate with your team to develop a comprehensive recognition strategy, selecting appropriate gift tiers and milestone triggers that align with your company culture.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">2</div>
              <h3 className="text-2xl font-bold mb-4 text-green-800">Streamlined Administration</h3>
              <p className="text-lg text-gray-700 leading-relaxed">Quarterly recipient updates are all that's required from your team. Our system handles scheduling, customization, and delivery coordination automatically.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">3</div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-800">Complete Program Management</h3>
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
                    <Badge className="bg-blue-600 text-white text-lg px-4 py-2">
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
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ring-2 ring-blue-600">
              <div className="bg-blue-600 text-white text-center py-2 font-semibold">
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
                    <Badge className="bg-green-600 text-white text-lg px-4 py-2">
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
                    <Badge className="bg-emerald-600 text-white text-lg px-4 py-2">
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

      {/* Free Consultation Lead Magnet */}
      <section id="free-consultation" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 border-t-4 border-green-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 border-2 border-green-500 text-green-800 px-6 py-2 rounded-full font-bold text-lg mb-6">
              🌱 FREE CONSULTATION - LIMITED TIME
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Your Custom Corporate Plant Design 
              <span className="text-green-600">100% FREE</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Our certified plant designers will create a custom recognition program blueprint specifically for your company - including plant selections, pricing tiers, and implementation timeline. 
              <strong> No obligation. No sales pitch. Just professional insights.</strong>
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Side - What They Get */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What You'll Receive in Your FREE Consultation:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      <strong>Custom Plant Selection Guide</strong> - Perfectly matched to your office environment and employee preferences
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      <strong>3-Tier Recognition Framework</strong> - Welcome, milestone, and executive gift recommendations with exact pricing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      <strong>Implementation Timeline</strong> - Step-by-step roadmap to launch your program within 30 days
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      <strong>Budget Analysis</strong> - Complete cost breakdown with volume discount calculations
                    </span>
                  </li>
                </ul>
                
                <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                  <p className="text-lg font-semibold text-blue-800">
                    🌱 <strong>Bonus:</strong> Companies that implement our recommendations typically save 30-40% on their employee recognition costs while doubling engagement.
                  </p>
                </div>
              </div>

              {/* Right Side - Form */}
              <div>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    Book Your FREE Design Consultation
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="consultation-name" className="text-sm font-medium text-gray-700">
                        Full Name *
                      </Label>
                      <Input
                        id="consultation-name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="mt-1 border-2 border-gray-300 focus:border-green-500"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="consultation-email" className="text-sm font-medium text-gray-700">
                        Business Email *
                      </Label>
                      <Input
                        id="consultation-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="mt-1 border-2 border-gray-300 focus:border-green-500"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="consultation-company" className="text-sm font-medium text-gray-700">
                        Company Name *
                      </Label>
                      <Input
                        id="consultation-company"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        required
                        className="mt-1 border-2 border-gray-300 focus:border-green-500"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="consultation-phone" className="text-sm font-medium text-gray-700">
                        Phone Number *
                      </Label>
                      <Input
                        id="consultation-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                        className="mt-1 border-2 border-gray-300 focus:border-green-500"
                        placeholder="(470) 555-0123"
                      />
                    </div>

                    <div>
                      <Label htmlFor="consultation-employees" className="text-sm font-medium text-gray-700">
                        Number of Employees
                      </Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, quantity: value }))}>
                        <SelectTrigger className="mt-1 border-2 border-gray-300">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-25">1-25 employees</SelectItem>
                          <SelectItem value="26-50">26-50 employees</SelectItem>
                          <SelectItem value="51-100">51-100 employees</SelectItem>
                          <SelectItem value="101-250">101-250 employees</SelectItem>
                          <SelectItem value="250+">250+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      🌱 GET MY FREE CONSULTATION NOW
                    </Button>

                    <p className="text-xs text-gray-500 text-center mt-3">
                      We respect your privacy. No spam, just valuable insights.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Join 200+ Atlanta companies who trust us with their employee recognition
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span>Certified Plant Specialists</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2" />
                <span>5-Star Client Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="inline-block bg-green-100 border-2 border-green-500 text-green-800 px-6 py-2 rounded-full font-bold text-lg mb-6">
              🌱 LIMITED TIME: Free Consultation Available
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Don't Let Your Employee Recognition 
              <br />Stay <span className="text-green-400">Generic and Forgettable</span>
            </h2>
            <div className="text-xl leading-relaxed max-w-3xl mx-auto">
              <p className="mb-6">
                While your competitors send gift cards that get forgotten in wallets, your employees could be receiving 
                <strong> living reminders of your appreciation</strong> that sit on their desk every day.
              </p>
              <p className="mb-8 text-gray-300">
                Book your FREE consultation now and discover exactly how companies like Coca-Cola and Delta create 
                lasting employee connections through strategic plant gifting programs.
              </p>
            </div>
          </div>

          {/* Urgency Elements */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4">What Happens When You Book Today:</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h4 className="font-semibold">Immediate Response (Within 4 Hours)</h4>
                  <p className="text-gray-300 text-sm">We'll call to schedule your consultation at your convenience</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h4 className="font-semibold">30-Minute Strategy Session</h4>
                  <p className="text-gray-300 text-sm">Custom plant selection and program design for your company</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h4 className="font-semibold">Complete Implementation Plan</h4>
                  <p className="text-gray-300 text-sm">Detailed roadmap with pricing and timeline to launch in 30 days</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h4 className="font-semibold">No Pressure Decision</h4>
                  <p className="text-gray-300 text-sm">Take the plan and implement it yourself, or let us handle everything</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="space-y-6">
            <Button 
              onClick={() => document.getElementById('free-consultation')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white text-2xl px-12 py-6 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 font-bold tracking-wide rounded-xl"
            >
              🌱 CLAIM MY FREE CONSULTATION NOW
              <ArrowRight className="ml-4 h-7 w-7" />
            </Button>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-400">
              <span>Or call directly:</span>
              <Button 
                variant="link"
                onClick={() => window.open('tel:+14706644039')}
                className="text-green-400 hover:text-green-300 text-xl font-bold"
              >
                📞 (470) 664-4039
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              ⚡ Consultation requests are handled in order received. Current availability: 
              <strong className="text-green-400"> Next-day appointments available</strong>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Corporate;
