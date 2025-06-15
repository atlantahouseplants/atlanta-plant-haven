
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Users, Building2, Heart, Leaf, Award, Phone, Mail, Clock, Star, CheckCircle, ArrowRight } from "lucide-react";
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
    serviceType: "",
    occasion: "",
    headcount: "",
    timeline: "",
    budget: "",
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
          service: "Business Plant Gifting",
          timestamp: new Date().toISOString()
        }),
      });

      toast({
        title: "Request Submitted Successfully!",
        description: "We'll contact you by the next business day to discuss your custom plant solution.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        serviceType: "",
        occasion: "",
        headcount: "",
        timeline: "",
        budget: "",
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

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/lovable-uploads/6f8be497-c091-4462-a2f1-4bafb12effea.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Business Plant Gifting
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-4">
              Skip the boring corporate mugs. Give your team something they'll actually love.
            </p>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              We work with you to create meaningful plant gifts for your team, organization, and customers. 
              Bulk gifting that shows you care about what matters.
            </p>
            <Button 
              onClick={scrollToForm}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
            >
              Get Your Free Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Why Not Another Boring Gift */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Stop Giving The Same Boring Corporate Gifts
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No more water bottles, coffee mugs, phone chargers, or t-shirts. Give them something they'll actually enjoy - something with purpose that lasts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="w-20 h-20 mx-auto mb-6 text-6xl">😴</div>
              <h3 className="text-xl font-bold mb-3 text-red-600">The Old Way</h3>
              <p className="text-muted-foreground">Another branded mug that gets forgotten in a cabinet</p>
            </div>
            <div className="text-center">
              <ArrowRight className="h-12 w-12 text-green-600 mx-auto mb-8" />
            </div>
            <div className="text-center bg-green-50 p-8 rounded-lg shadow-sm border-2 border-green-200">
              <div className="w-20 h-20 mx-auto mb-6 text-6xl">🌱</div>
              <h3 className="text-xl font-bold mb-3 text-green-600">The Plant Way</h3>
              <p className="text-muted-foreground">A living gift that brings joy, improves air quality, and creates lasting memories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Two Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What We Do For Your Organization</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Two simple ways to bring the joy of plants to your team and create meaningful connections.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Corporate Plant Gifting */}
            <div className="text-center">
              <div 
                className="w-full h-64 bg-cover bg-center rounded-lg mb-8 shadow-lg"
                style={{
                  backgroundImage: "url('/lovable-uploads/6decc00f-ce9c-49b1-840d-d7897f252047.png')",
                }}
              />
              <div className="bg-green-50 p-8 rounded-lg">
                <Gift className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-4">Corporate Plant Gifts</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Individual plant gifts for employee appreciation, client gifts, grand openings, and special events.
                </p>
                
                <div className="text-left space-y-4">
                  <h4 className="text-xl font-semibold">Most Popular Options:</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>• Mini Succulents (perfect for large groups)</span>
                      <span className="font-bold text-green-600">Starting at $13/person</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>• Air Plants (low maintenance & unique)</span>
                      <span className="font-bold text-green-600">Starting at $15/person</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>• Small Individual Plants</span>
                      <span className="font-bold text-green-600">Starting at $18/person</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
                  <p className="text-sm font-medium text-yellow-800">
                    ✓ Bulk pricing available • ✓ Custom packaging • ✓ Delivery included
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate Workshops */}
            <div className="text-center">
              <div 
                className="w-full h-64 bg-cover bg-center rounded-lg mb-8 shadow-lg"
                style={{
                  backgroundImage: "url('/lovable-uploads/5090e472-45e2-4dc2-b388-6cbf2f73ab20.png')",
                }}
              />
              <div className="bg-blue-50 p-8 rounded-lg">
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-4">Corporate Plant Workshops</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Team building experiences where your group creates beautiful plant arrangements together.
                </p>
                
                <div className="text-left space-y-4">
                  <h4 className="text-xl font-semibold">Workshop Options:</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>• Succulent Arrangements (1.5 hours)</span>
                      <span className="font-bold text-blue-600">$35/person</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>• Air Plant Terrariums (1 hour)</span>
                      <span className="font-bold text-blue-600">$28/person</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>• Herb Garden Workshop (2 hours)</span>
                      <span className="font-bold text-blue-600">$45/person</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">
                    ✓ All materials included • ✓ Everyone takes home their creation • ✓ Expert instruction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple process, amazing results</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Fill Out Form</h3>
              <p className="text-sm text-muted-foreground">Tell us about your needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">We Contact You</h3>
              <p className="text-sm text-muted-foreground">Learn about your event & goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Custom Plan</h3>
              <p className="text-sm text-muted-foreground">We create a plan for your budget</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Get Quote</h3>
              <p className="text-sm text-muted-foreground">Detailed quote within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">5</div>
              <h3 className="font-semibold mb-2">Amazing Results</h3>
              <p className="text-sm text-muted-foreground">Your team loves their plants!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl italic text-foreground mb-4">
              "The mini succulents were a huge hit with our 2,000 campus employees. 
              It was so refreshing to give our team something meaningful instead of another branded item. 
              We've already booked our next order!"
            </blockquote>
            <cite className="text-muted-foreground font-medium">- HR Director, Georgia Tech</cite>
          </div>

          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Atlanta Organizations Served</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">2,000+</div>
              <p className="text-sm text-muted-foreground">Happy Recipients at Georgia Tech</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <p className="text-sm text-muted-foreground">Years of Plant Expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get Your Custom Quote</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us about your needs and we'll create a custom proposal. 
              Free consultation with next business day response guaranteed.
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company/Organization *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service-type">What are you interested in? *</Label>
                  <Select onValueChange={(value) => setFormData({...formData, serviceType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plant-gifts">Corporate Plant Gifts</SelectItem>
                      <SelectItem value="workshops">Team Building Workshops</SelectItem>
                      <SelectItem value="both">Both - Let's Discuss</SelectItem>
                      <SelectItem value="not-sure">Not Sure - Need Guidance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="headcount">How many people?</Label>
                    <Select onValueChange={(value) => setFormData({...formData, headcount: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select headcount" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10-25">10-25 people</SelectItem>
                        <SelectItem value="25-50">25-50 people</SelectItem>
                        <SelectItem value="50-100">50-100 people</SelectItem>
                        <SelectItem value="100-250">100-250 people</SelectItem>
                        <SelectItem value="250+">250+ people</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timeline">When do you need this?</Label>
                    <Select onValueChange={(value) => setFormData({...formData, timeline: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                        <SelectItem value="3-4-weeks">3-4 weeks</SelectItem>
                        <SelectItem value="1-2-months">1-2 months</SelectItem>
                        <SelectItem value="3+-months">3+ months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Tell us about your situation</Label>
                  <Textarea
                    id="message"
                    placeholder="What's the occasion? What are your goals? Any special requirements?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg">
                    Get My Free Custom Quote
                  </Button>
                  <p className="text-sm text-muted-foreground mt-3">
                    We'll respond by the next business day with a custom proposal
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Corporate;
