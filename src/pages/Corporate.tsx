
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Users, Building, Heart, Leaf, Award } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Corporate = () => {
  const { toast } = useToast();
  const [giftingFormData, setGiftingFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    quantity: "",
    budget: "",
    event: "",
    message: ""
  });
  const [workshopFormData, setWorkshopFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    participants: "",
    workshopType: "",
    preferredDate: "",
    message: ""
  });

  const handleGiftingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://hook.us1.make.com/5q5g7z230zdpbobx2d78oldla3dj5p2s", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...giftingFormData,
          service: "Corporate Gifting",
          timestamp: new Date().toISOString()
        }),
      });

      toast({
        title: "Request Submitted!",
        description: "We've received your corporate gifting request. Someone will reach out to you by the next business day.",
      });

      setGiftingFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        quantity: "",
        budget: "",
        event: "",
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

  const handleWorkshopSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://hook.us1.make.com/5q5g7z230zdpbobx2d78oldla3dj5p2s", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...workshopFormData,
          service: "Corporate Workshop",
          timestamp: new Date().toISOString()
        }),
      });

      toast({
        title: "Workshop Request Submitted!",
        description: "We've received your workshop request. Someone will reach out to you by the next business day.",
      });

      setWorkshopFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        participants: "",
        workshopType: "",
        preferredDate: "",
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Corporate Plant Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your corporate gifting and team building with meaningful plant experiences. 
              From employee appreciation gifts to hands-on workshops, we create memorable moments that grow.
            </p>
          </div>
        </div>
      </section>

      {/* Why Plants Over Traditional Gifts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Plants Beat Corporate Mugs Every Time
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How many corporate mugs, water bottles, and branded shirts does your team really need? 
              Give them something that gives back – life, health benefits, and joy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Something to Care For</h3>
              <p className="text-muted-foreground">Unlike another branded mug, plants create connection and responsibility that employees genuinely appreciate.</p>
            </div>
            <div className="text-center">
              <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Health Benefits</h3>
              <p className="text-muted-foreground">Plants improve air quality, reduce stress, and boost productivity – gifts that keep giving long after the event.</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Memorable Impact</h3>
              <p className="text-muted-foreground">Your team will remember the company that gave them life, not another item for their junk drawer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 1: Corporate Gifting */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Gift className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-4">Corporate Plant Gifting</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Employee appreciation, client gifts, grand openings, and special events. 
              From mini succulents to statement plants, we create meaningful gifts your recipients will actually love.
            </p>
          </div>

          {/* Image Gallery */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <img src="/lovable-uploads/56c7f17e-8692-4d55-a5ea-ce8ba58543fe.png" alt="Mini succulent with branded pot" className="rounded-lg shadow-md" />
            <img src="/lovable-uploads/7ee3e1df-8037-4a61-8b9a-0fbc4fea25e5.png" alt="Succulent arrangement in wooden bowl" className="rounded-lg shadow-md" />
            <img src="/lovable-uploads/15d3c644-63db-450b-84cb-57bade84ab3f.png" alt="Large succulent arrangement" className="rounded-lg shadow-md" />
            <img src="/lovable-uploads/d7f70ef6-351e-4955-a23d-a8d83a031ebd.png" alt="Multiple succulent arrangements" className="rounded-lg shadow-md" />
          </div>

          {/* Popular Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Mini Succulents</h3>
                <p className="text-muted-foreground mb-4">Perfect for large groups. Custom branded pots available.</p>
                <div className="text-2xl font-bold text-green-600">Starting at $8</div>
                <div className="text-sm text-muted-foreground">Minimum 50 pieces</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Air Plant Collections</h3>
                <p className="text-muted-foreground mb-4">Low maintenance, unique gifts with care instructions.</p>
                <div className="text-2xl font-bold text-green-600">Starting at $12</div>
                <div className="text-sm text-muted-foreground">Minimum 25 pieces</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Custom Arrangements</h3>
                <p className="text-muted-foreground mb-4">Larger centerpieces for VIP clients and executives.</p>
                <div className="text-2xl font-bold text-green-600">Starting at $45</div>
                <div className="text-sm text-muted-foreground">Custom pricing</div>
              </CardContent>
            </Card>
          </div>

          {/* Gifting Form */}
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-6">Request Your Corporate Gifting Quote</h3>
              <form onSubmit={handleGiftingSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="gifting-name">Name *</Label>
                    <Input
                      id="gifting-name"
                      value={giftingFormData.name}
                      onChange={(e) => setGiftingFormData({...giftingFormData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="gifting-email">Email *</Label>
                    <Input
                      id="gifting-email"
                      type="email"
                      value={giftingFormData.email}
                      onChange={(e) => setGiftingFormData({...giftingFormData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="gifting-company">Company *</Label>
                    <Input
                      id="gifting-company"
                      value={giftingFormData.company}
                      onChange={(e) => setGiftingFormData({...giftingFormData, company: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="gifting-phone">Phone</Label>
                    <Input
                      id="gifting-phone"
                      value={giftingFormData.phone}
                      onChange={(e) => setGiftingFormData({...giftingFormData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="quantity">Approximate Quantity *</Label>
                    <Select onValueChange={(value) => setGiftingFormData({...giftingFormData, quantity: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select quantity range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25-50">25-50 pieces</SelectItem>
                        <SelectItem value="50-100">50-100 pieces</SelectItem>
                        <SelectItem value="100-250">100-250 pieces</SelectItem>
                        <SelectItem value="250-500">250-500 pieces</SelectItem>
                        <SelectItem value="500+">500+ pieces</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select onValueChange={(value) => setGiftingFormData({...giftingFormData, budget: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
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
                  <Label htmlFor="event">Event/Occasion</Label>
                  <Input
                    id="event"
                    placeholder="Employee appreciation, client gifts, grand opening, etc."
                    value={giftingFormData.event}
                    onChange={(e) => setGiftingFormData({...giftingFormData, event: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="gifting-message">Additional Details</Label>
                  <Textarea
                    id="gifting-message"
                    placeholder="Tell us about your event, timeline, branding needs, or any special requests..."
                    value={giftingFormData.message}
                    onChange={(e) => setGiftingFormData({...giftingFormData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Get My Corporate Gifting Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service 2: Corporate Workshops */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-4">Corporate Plant Workshops</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              On-site team building experiences that your employees will actually enjoy. 
              Hands-on workshops where everyone creates something beautiful to take home.
            </p>
          </div>

          {/* Workshop Images */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <img src="/lovable-uploads/1e3d40d2-3db3-4934-a543-ce5283ac50b4.png" alt="Herb garden workshop" className="rounded-lg shadow-md mb-4" />
              <h3 className="text-xl font-semibold">Herb Garden Workshop</h3>
              <p className="text-muted-foreground">Take home 3 culinary herbs in self-watering planters</p>
            </div>
            <div className="text-center">
              <img src="/lovable-uploads/b289c0b3-3f56-4917-bacb-005795ec2bb6.png" alt="Succulent arrangement workshop" className="rounded-lg shadow-md mb-4" />
              <h3 className="text-xl font-semibold">Succulent Dish Creation</h3>
              <p className="text-muted-foreground">Design your own succulent arrangement or terrarium</p>
            </div>
            <div className="text-center">
              <img src="/lovable-uploads/989df0f1-9d5c-42ba-9403-25be31b4c2b3.png" alt="Air plant workshop" className="rounded-lg shadow-md mb-4" />
              <h3 className="text-xl font-semibold">Air Plant Workshop</h3>
              <p className="text-muted-foreground">Learn about and create beautiful air plant displays</p>
            </div>
          </div>

          {/* Workshop Details */}
          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Workshop Details</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                    <span>1-2 hour interactive sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                    <span>Minimum 25 participants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                    <span>All materials and tools provided</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                    <span>Everyone takes home their creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                    <span>Customizable themes available</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Pricing</h3>
                <div className="bg-white p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$299</div>
                  <div className="text-muted-foreground mb-4">Workshop setup & instruction fee</div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">$49+ per person</div>
                  <div className="text-muted-foreground">Materials cost varies by workshop type</div>
                </div>
              </div>
            </div>
          </div>

          {/* Workshop Form */}
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-6">Book Your Corporate Workshop</h3>
              <form onSubmit={handleWorkshopSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="workshop-name">Name *</Label>
                    <Input
                      id="workshop-name"
                      value={workshopFormData.name}
                      onChange={(e) => setWorkshopFormData({...workshopFormData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="workshop-email">Email *</Label>
                    <Input
                      id="workshop-email"
                      type="email"
                      value={workshopFormData.email}
                      onChange={(e) => setWorkshopFormData({...workshopFormData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="workshop-company">Company *</Label>
                    <Input
                      id="workshop-company"
                      value={workshopFormData.company}
                      onChange={(e) => setWorkshopFormData({...workshopFormData, company: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="workshop-phone">Phone</Label>
                    <Input
                      id="workshop-phone"
                      value={workshopFormData.phone}
                      onChange={(e) => setWorkshopFormData({...workshopFormData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="participants">Number of Participants *</Label>
                    <Select onValueChange={(value) => setWorkshopFormData({...workshopFormData, participants: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select participant count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25-35">25-35 people</SelectItem>
                        <SelectItem value="35-50">35-50 people</SelectItem>
                        <SelectItem value="50-75">50-75 people</SelectItem>
                        <SelectItem value="75-100">75-100 people</SelectItem>
                        <SelectItem value="100+">100+ people</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="workshop-type">Workshop Type *</Label>
                    <Select onValueChange={(value) => setWorkshopFormData({...workshopFormData, workshopType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select workshop type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="herb-garden">Herb Garden (Culinary/Medicinal)</SelectItem>
                        <SelectItem value="succulent-dish">Succulent Dish Creation</SelectItem>
                        <SelectItem value="terrarium">Terrarium Building</SelectItem>
                        <SelectItem value="air-plants">Air Plant Workshop</SelectItem>
                        <SelectItem value="custom">Custom Workshop</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="preferred-date">Preferred Date/Timeline</Label>
                  <Input
                    id="preferred-date"
                    placeholder="When would you like to schedule this workshop?"
                    value={workshopFormData.preferredDate}
                    onChange={(e) => setWorkshopFormData({...workshopFormData, preferredDate: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="workshop-message">Additional Details</Label>
                  <Textarea
                    id="workshop-message"
                    placeholder="Tell us about your team, space, timeline, or any special requests..."
                    value={workshopFormData.message}
                    onChange={(e) => setWorkshopFormData({...workshopFormData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Book My Corporate Workshop
                </Button>
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
