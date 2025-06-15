import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Users, Building2, Heart, Leaf, Award, Phone, Mail, Clock, Star, CheckCircle } from "lucide-react";
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
          service: "Business Plant Solutions",
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
      
      {/* Hero Section with Background */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070')",
          }}
        />
        <div className="absolute inset-0 bg-green-900/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🏢 Trusted by 500+ Atlanta Organizations
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Business Plant Solutions
            </h1>
            <p className="text-xl text-green-50 max-w-3xl mx-auto mb-8">
              Transform your corporate gifting and team experiences with meaningful plant solutions. 
              We create custom plant gifts and workshops for businesses, universities, schools, 
              and organizations throughout Atlanta.
            </p>
            <Button 
              onClick={scrollToForm}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
            >
              Get Your Free Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Trust & Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-muted-foreground font-medium">Atlanta Businesses Served</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">2,000+</div>
              <p className="text-muted-foreground font-medium">Plants Delivered to Georgia Tech</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
              <p className="text-muted-foreground font-medium">Succulents Donated to Charity</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <p className="text-muted-foreground font-medium">Years of Plant Expertise</p>
            </div>
          </div>

          {/* Why Plants Beat Traditional Gifts */}
          <div className="bg-green-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Why Plant Gifts Beat Corporate Mugs Every Time
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">Meaningful Connection</h4>
                <p className="text-muted-foreground">Plants create lasting emotional connections. Your team will remember the company that gave them life, not another mug for the cabinet.</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">Proven Health Benefits</h4>
                <p className="text-muted-foreground">NASA studies show plants improve air quality by 87%, reduce stress by 37%, and boost productivity by 15% - gifts that keep giving.</p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">Unique & Memorable</h4>
                <p className="text-muted-foreground">Stand out from the sea of branded merchandise. Plants show you care about your team's wellbeing and create conversation starters.</p>
              </div>
            </div>
          </div>

          {/* Featured Success Story */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg italic text-foreground mb-4">
              "The mini succulents from Nick's team were a huge hit with our 2,000 campus employees. 
              It was so refreshing to give our team something meaningful instead of another branded item. 
              We've already booked our next order for the spring semester."
            </blockquote>
            <cite className="text-muted-foreground font-medium">- HR Director, Georgia Tech</cite>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From meaningful corporate gifts to engaging team workshops, we create plant experiences 
              that strengthen relationships and boost morale.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Corporate Gifting */}
            <div>
              <div className="text-center mb-8">
                <div 
                  className="w-full h-48 bg-cover bg-center rounded-lg mb-6"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=2070')",
                  }}
                />
                <Gift className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground mb-4">Corporate Plant Gifting</h3>
                <p className="text-lg text-muted-foreground">
                  Employee appreciation, client gifts, grand openings, and special events.
                </p>
              </div>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold mb-2">Mini Succulent Gifts</h4>
                        <p className="text-muted-foreground mb-2">Perfect for large groups and employee appreciation events.</p>
                        <p className="text-sm text-muted-foreground">Minimum 50 pieces</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">$8</div>
                        <div className="text-sm text-muted-foreground">per piece</div>
                      </div>
                    </div>
                    <div className="bg-yellow-100 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold inline-block">
                      Most Popular
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-bold mb-2">Air Plant Collections</h4>
                        <p className="text-muted-foreground mb-2">Low maintenance gifts with custom care instructions.</p>
                        <p className="text-sm text-muted-foreground">Minimum 25 pieces</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">$12</div>
                        <div className="text-sm text-muted-foreground">per piece</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-bold mb-2">Custom Arrangements</h4>
                        <p className="text-muted-foreground mb-2">Statement pieces for VIP clients and executive gifts.</p>
                        <p className="text-sm text-muted-foreground">Custom pricing</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">$45+</div>
                        <div className="text-sm text-muted-foreground">per piece</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Team Building Workshops */}
            <div>
              <div className="text-center mb-8">
                <div 
                  className="w-full h-48 bg-cover bg-center rounded-lg mb-6"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=2070')",
                  }}
                />
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground mb-4">Team Building Plant Workshops</h3>
                <p className="text-lg text-muted-foreground">
                  Hands-on workshops that engage your team and build real connections.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold mb-2">Succulent Workshop</h4>
                        <p className="text-muted-foreground mb-2">Create beautiful arrangements while building team connections.</p>
                        <p className="text-sm text-muted-foreground">1.5 hours • 25-100 people</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">$35</div>
                        <div className="text-sm text-muted-foreground">per person</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold mb-2">Herb Garden Workshop</h4>
                        <p className="text-muted-foreground mb-2">Take home 3 culinary herbs in self-watering planters.</p>
                        <p className="text-sm text-muted-foreground">2 hours • 15-50 people</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">$45</div>
                        <div className="text-sm text-muted-foreground">per person</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold mb-2">Air Plant Terrariums</h4>
                        <p className="text-muted-foreground mb-2">Design unique air plant displays in glass containers.</p>
                        <p className="text-sm text-muted-foreground">1 hour • 20-75 people</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">$28</div>
                        <div className="text-sm text-muted-foreground">per person</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3">All Workshops Include:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span>All materials and tools provided</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span>Expert instruction and guidance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span>Everyone takes home their creation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span>Care instructions and ongoing support</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">+ $299 setup fee per workshop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get Your Custom Plant Solution</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us about your situation and we'll create a custom proposal. 
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

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="service-type">What are you interested in? *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, serviceType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corporate-gifting">Corporate Plant Gifting</SelectItem>
                        <SelectItem value="team-workshop">Team Building Workshop</SelectItem>
                        <SelectItem value="both">Both - Let's Discuss</SelectItem>
                        <SelectItem value="not-sure">Not Sure - Need Guidance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="occasion">Occasion/Event</Label>
                    <Select onValueChange={(value) => setFormData({...formData, occasion: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select occasion" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employee-appreciation">Employee Appreciation</SelectItem>
                        <SelectItem value="client-gifts">Client Gifts</SelectItem>
                        <SelectItem value="grand-opening">Grand Opening</SelectItem>
                        <SelectItem value="holiday-party">Holiday Party</SelectItem>
                        <SelectItem value="team-building">Team Building Event</SelectItem>
                        <SelectItem value="conference">Conference/Meeting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="headcount">Approximate Headcount</Label>
                    <Select onValueChange={(value) => setFormData({...formData, headcount: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="How many people?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25-50">25-50 people</SelectItem>
                        <SelectItem value="50-100">50-100 people</SelectItem>
                        <SelectItem value="100-250">100-250 people</SelectItem>
                        <SelectItem value="250-500">250-500 people</SelectItem>
                        <SelectItem value="500+">500+ people</SelectItem>
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
                  <div>
                    <Label htmlFor="budget">Budget Range (Optional)</Label>
                    <Select onValueChange={(value) => setFormData({...formData, budget: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-500">Under $500</SelectItem>
                        <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                        <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                        <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                        <SelectItem value="5000+">$5,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Tell us about your situation</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your event, goals, any special requirements, or questions you have..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-12 py-3 text-lg">
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">How far in advance should I book?</h3>
              <p className="text-muted-foreground mb-6">For best results, we recommend 2-3 weeks notice. However, we can often accommodate rush orders with 1-week notice.</p>
              
              <h3 className="text-lg font-semibold mb-2">Do you deliver throughout Atlanta?</h3>
              <p className="text-muted-foreground mb-6">Yes! We deliver to all of Metro Atlanta including downtown, Buckhead, Decatur, Sandy Springs, and surrounding areas.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Can you handle large orders (500+ pieces)?</h3>
              <p className="text-muted-foreground mb-6">Absolutely! We've successfully delivered orders for 2,000+ pieces. Large orders are our specialty.</p>
              
              <h3 className="text-lg font-semibold mb-2">What if someone can't care for their plant?</h3>
              <p className="text-muted-foreground mb-6">Every gift includes detailed care instructions, and we offer ongoing support. We choose low-maintenance plants for corporate gifts.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Corporate;
