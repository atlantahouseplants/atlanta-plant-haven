
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CorporateSuccess from "@/components/CorporateSuccess";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Users, Building, Heart, Leaf, Award, Phone, Mail, Clock, Star } from "lucide-react";
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
      const response = await fetch("https://hook.us1.make.com/5q5g7z230zdpbobx2d78oldla3dj5p2s", {
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

  const popularSolutions = [
    {
      title: "Mini Succulent Gifts",
      description: "Perfect for large groups and employee appreciation events.",
      price: "Starting at $8",
      minimum: "Minimum 50 pieces",
      image: "/lovable-uploads/56c7f17e-8692-4d55-a5ea-ce8ba58543fe.png",
      popular: true
    },
    {
      title: "Air Plant Collections",
      description: "Low maintenance gifts with custom care instructions.",
      price: "Starting at $12",
      minimum: "Minimum 25 pieces",
      image: "/lovable-uploads/989df0f1-9d5c-42ba-9403-25be31b4c2b3.png",
      popular: false
    },
    {
      title: "Custom Arrangements",
      description: "Statement pieces for VIP clients and executive gifts.",
      price: "Starting at $45",
      minimum: "Custom pricing",
      image: "/lovable-uploads/15d3c644-63db-450b-84cb-57bade84ab3f.png",
      popular: false
    }
  ];

  const workshopTypes = [
    {
      title: "Team Building Succulent Workshop",
      duration: "1.5 hours",
      participants: "25-100 people",
      price: "$35/person",
      description: "Create beautiful succulent arrangements while building team connections.",
      image: "/lovable-uploads/b289c0b3-3f56-4917-bacb-005795ec2bb6.png"
    },
    {
      title: "Herb Garden Workshop",
      duration: "2 hours",
      participants: "15-50 people",
      price: "$45/person",
      description: "Take home 3 culinary herbs in self-watering planters.",
      image: "/lovable-uploads/1e3d40d2-3db3-4934-a543-ce5283ac50b4.png"
    },
    {
      title: "Air Plant Terrarium Creation",
      duration: "1 hour",
      participants: "20-75 people",
      price: "$28/person",
      description: "Design unique air plant displays in glass containers.",
      image: "/lovable-uploads/989df0f1-9d5c-42ba-9403-25be31b4c2b3.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🏢 Trusted by 500+ Atlanta Organizations
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Business Plant Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform your corporate gifting and team experiences with meaningful plant solutions. 
              We create custom plant gifts and workshops for businesses, universities, schools, 
              and organizations throughout Atlanta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                Get Your Free Quote
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg">
                <Phone className="h-5 w-5 mr-2" />
                Schedule a Call
              </Button>
            </div>
          </div>
          
          {/* Quick Benefits */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Next Day Response</h3>
              <p className="text-sm text-muted-foreground">We respond to all requests by the next business day</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Award className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">15+ Years Experience</h3>
              <p className="text-sm text-muted-foreground">Proven track record with Atlanta's top organizations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Heart className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">100% Satisfaction</h3>
              <p className="text-sm text-muted-foreground">Guaranteed results or we make it right</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Success Stories */}
      <CorporateSuccess />

      {/* Service 1: Corporate Gifting */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Gift className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-4">Corporate Plant Gifting</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Employee appreciation, client gifts, grand openings, and special events. 
              Give meaningful gifts that create lasting positive impressions and health benefits.
            </p>
          </div>

          {/* Popular Solutions */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {popularSolutions.map((solution, index) => (
              <Card key={index} className="relative overflow-hidden">
                {solution.popular && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold z-10">
                    Most Popular
                  </div>
                )}
                <div className="aspect-square overflow-hidden">
                  <img src={solution.image} alt={solution.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <div className="text-2xl font-bold text-green-600">{solution.price}</div>
                  <div className="text-sm text-muted-foreground">{solution.minimum}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-green-50 p-8 rounded-lg text-center mb-12">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg italic text-foreground mb-4">
              "The mini succulents from Nick's team were a huge hit with our 2,000 campus employees. 
              It was so refreshing to give our team something meaningful instead of another branded item."
            </blockquote>
            <cite className="text-muted-foreground font-medium">- HR Director, Georgia Tech</cite>
          </div>
        </div>
      </section>

      {/* Service 2: Corporate Workshops */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-4">Team Building Plant Workshops</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hands-on workshops that actually engage your team. Everyone creates something beautiful 
              to take home while building real connections with colleagues.
            </p>
          </div>

          {/* Workshop Types */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {workshopTypes.map((workshop, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{workshop.title}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground mb-3">
                    <span>{workshop.duration}</span>
                    <span>{workshop.participants}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{workshop.description}</p>
                  <div className="text-2xl font-bold text-blue-600">{workshop.price}</div>
                  <div className="text-sm text-muted-foreground">+ $299 setup fee</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Workshop Benefits */}
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Why Our Workshops Work</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">What's Included:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                    <span>All materials and tools provided</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                    <span>Expert instruction and guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                    <span>Everyone takes home their creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                    <span>Care instructions and ongoing support</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Perfect For:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">•</span>
                    <span>Team building events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">•</span>
                    <span>Employee appreciation activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">•</span>
                    <span>Corporate retreats and offsites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">•</span>
                    <span>Holiday parties and celebrations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Contact Form */}
      <section className="py-20 bg-green-50">
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
