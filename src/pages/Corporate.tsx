
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

      {/* Mini Gifts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">🌵 Mini Gifts</h2>
            <p className="text-xl text-muted-foreground mb-2">Perfect for 50+ recipients</p>
            <Badge variant="outline" className="text-green-600 border-green-600">Starting at $8</Badge>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Succulent Options */}
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div 
                  className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: "url('/lovable-uploads/d9e78ef6-8606-4f22-a41e-302ec5960fb9.png')",
                  }}
                />
                <div 
                  className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: "url('/lovable-uploads/e945250f-c882-4a93-b3a8-9c4101fb5fe4.png')",
                  }}
                />
                <div 
                  className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: "url('/lovable-uploads/df5b8dcf-c315-4527-8403-a5d0d8dd5236.png')",
                  }}
                />
                <div 
                  className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: "url('/lovable-uploads/515cdc56-a3de-495c-946f-7f7274adeedd.png')",
                  }}
                />
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-green-600">Succulent Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <span className="font-semibold">Natural</span>
                      <p className="text-sm text-muted-foreground">2.5" succulent in grower pot</p>
                    </div>
                    <span className="font-bold text-green-600">$8</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <span className="font-semibold">Terracotta Classic</span>
                      <p className="text-sm text-muted-foreground">2.5" succulent in terracotta pot</p>
                    </div>
                    <span className="font-bold text-green-600">$12</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <span className="font-semibold">Gift Basket</span>
                      <p className="text-sm text-muted-foreground">2.5" succulent in kraft paper basket</p>
                    </div>
                    <span className="font-bold text-green-600">$14</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Air Plant Options */}
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div 
                  className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: "url('/lovable-uploads/d8c81e56-3b3f-4275-a348-5537219bde8b.png')",
                  }}
                />
                <div 
                  className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: "url('/lovable-uploads/8fc2cdf9-bb37-4f72-868b-957ff65d2774.png')",
                  }}
                />
                <div 
                  className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: "url('/lovable-uploads/2156f2f3-8215-4569-802c-791ca5b929c8.png')",
                  }}
                />
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">Air Plant Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <span className="font-semibold">Glass Globe</span>
                      <p className="text-sm text-muted-foreground">Air plant in 4" hanging globe</p>
                    </div>
                    <span className="font-bold text-blue-600">$15</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <span className="font-semibold">Teardrop Terrarium</span>
                      <p className="text-sm text-muted-foreground">Air plant in elegant glass teardrop</p>
                    </div>
                    <span className="font-bold text-blue-600">$18</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <span className="font-semibold">Desktop Stand</span>
                      <p className="text-sm text-muted-foreground">Air plant on wooden base display</p>
                    </div>
                    <span className="font-bold text-blue-600">$22</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-yellow-800 font-medium">
              <strong>Branding Available:</strong> Add mini card holder with logo/message +$3
            </p>
          </div>
        </div>
      </section>

      {/* Desktop Plants Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">🌿 Desktop Plants</h2>
            <p className="text-xl text-muted-foreground mb-2">Ideal for 25-75 recipients</p>
            <Badge variant="outline" className="text-green-600 border-green-600">Starting at $45</Badge>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: "url('/lovable-uploads/9ff30ce9-dde6-4b5e-9bfd-967996b2525f.png')",
                }}
              />
              <div 
                className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: "url('/lovable-uploads/3c095b68-4548-4766-b2ce-32f6b871e4d5.png')",
                }}
              />
              <div 
                className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: "url('/lovable-uploads/2df912ea-3fe8-43b7-99cf-39e56951e44a.png')",
                }}
              />
              <div 
                className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: "url('/lovable-uploads/d03bc679-a952-457f-914f-98707407f9d2.png')",
                }}
              />
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">4" Desktop Plant</h3>
                      <p className="text-muted-foreground">Choice of pothos, snake plant, or ZZ</p>
                      <p className="text-sm text-muted-foreground">White or gray cache pot</p>
                    </div>
                    <span className="text-3xl font-bold text-green-600">$45</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">6" Statement Plant</h3>
                      <p className="text-muted-foreground">Larger desktop variety</p>
                      <p className="text-sm text-muted-foreground">Premium cache pot</p>
                    </div>
                    <span className="text-3xl font-bold text-green-600">$75</span>
                  </div>
                </CardContent>
              </Card>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800 font-medium">
                  <strong>Branding Available:</strong> Logo sticker on pot OR card holder +$4
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Designer Arrangements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">🌺 Designer Arrangements</h2>
            <p className="text-xl text-muted-foreground mb-2">Great for 15-50 recipients</p>
            <Badge variant="outline" className="text-green-600 border-green-600">Starting at $55</Badge>
            <p className="text-sm text-muted-foreground mt-2 italic">
              Pre-made by our supplier - zero assembly required!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Basket Gardens */}
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div 
                  className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: "url('/lovable-uploads/c22ae899-bb8a-4a5b-a561-787e6f8f23cc.png')",
                  }}
                />
                <div 
                  className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: "url('/lovable-uploads/d62a712f-d62c-4e7b-8658-7c6cc2a2e57e.png')",
                  }}
                />
                <div 
                  className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: "url('/lovable-uploads/58c4a1af-93a2-4e5e-8a46-fab2eeb9488c.png')",
                  }}
                />
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-600">Basket Gardens</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <span className="font-semibold">Small Basket (6-8")</span>
                      <p className="text-sm text-muted-foreground">3-4 plants professionally arranged</p>
                    </div>
                    <span className="font-bold text-amber-600">$55</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <span className="font-semibold">Large Basket (10-12")</span>
                      <p className="text-sm text-muted-foreground">4-5 plants professionally arranged</p>
                    </div>
                    <span className="font-bold text-amber-600">$85</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Ceramic Gardens */}
            <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div 
                className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: "url('/lovable-uploads/b77ec468-69cd-445b-aa48-4e613248dcfc.png')",
                }}
              />
              <div 
                className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: "url('/lovable-uploads/d7ad13d5-ef8b-4dd2-a8df-9332fe01432b.png')",
                }}
              />
              <div 
                className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: "url('/lovable-uploads/0ce46e4f-6354-42d3-98b8-2239be3bbd31.png')",
                }}
              />
            </div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-600">Ceramic Gardens</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <span className="font-semibold">Small Ceramic (6-8")</span>
                      <p className="text-sm text-muted-foreground">3-4 plants in decorative planter</p>
                    </div>
                    <span className="font-bold text-purple-600">$60</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <span className="font-semibold">Large Ceramic (10-12")</span>
                      <p className="text-sm text-muted-foreground">4-5 plants in premium planter</p>
                    </div>
                    <span className="font-bold text-purple-600">$95</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center p-4 bg-indigo-50 rounded-lg border border-indigo-200">
            <p className="text-indigo-800 font-medium">
              <strong>Branding Available:</strong> Wooden logo stake in arrangement +$4
            </p>
          </div>
        </div>
      </section>

      {/* Executive Gift Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">🏆 Executive Gift</h2>
            <Badge variant="outline" className="text-green-600 border-green-600">Premium Option</Badge>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="grid grid-cols-2 gap-4">
                  <div 
                    className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                    style={{
                      backgroundImage: "url('/lovable-uploads/a1aac1e0-b893-404b-9feb-e7300dff762a.png')",
                    }}
                  />
                  <div 
                    className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                    style={{
                      backgroundImage: "url('/lovable-uploads/d03bc679-a952-457f-914f-98707407f9d2.png')",
                    }}
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-foreground mb-4">10" Peace Lily Supreme</h3>
                  <div className="text-5xl font-bold text-green-600 mb-4">$145</div>
                  <ul className="text-left space-y-2 text-muted-foreground mb-6">
                    <li>• Stunning 10" peace lily</li>
                    <li>• Premium white composite planter</li>
                    <li>• Executive presentation</li>
                  </ul>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-800 font-medium">
                      <strong>Branding Available:</strong> Premium stake or pot sticker +$4
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Volume Discounts */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">📊 Volume Discounts</h2>
            <p className="text-xl text-green-100">Bigger orders, better savings</p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 text-center">
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-2">25-49</div>
              <div className="text-green-100">List Price</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-2">50-99</div>
              <div className="text-green-100">5% Off</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-2">100-249</div>
              <div className="text-green-100">10% Off</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-2">250-499</div>
              <div className="text-green-100">15% Off</div>
            </div>
            <div className="bg-white/20 p-4 rounded-lg border-2 border-white">
              <div className="text-2xl font-bold mb-2">500+</div>
              <div className="text-white font-bold">20% Off</div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">✅ What's Included</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8 text-center">
            <div className="space-y-4">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto" />
              <h3 className="font-semibold">Healthy Plants</h3>
              <p className="text-sm text-muted-foreground">Hand-selected for quality</p>
            </div>
            <div className="space-y-4">
              <Gift className="h-12 w-12 text-green-600 mx-auto" />
              <h3 className="font-semibold">Professional Presentation</h3>
              <p className="text-sm text-muted-foreground">Ready to gift</p>
            </div>
            <div className="space-y-4">
              <QrCode className="h-12 w-12 text-green-600 mx-auto" />
              <h3 className="font-semibold">Care Instructions</h3>
              <p className="text-sm text-muted-foreground">QR code access</p>
            </div>
            <div className="space-y-4">
              <Truck className="h-12 w-12 text-green-600 mx-auto" />
              <h3 className="font-semibold">Bulk Delivery</h3>
              <p className="text-sm text-muted-foreground">To your Atlanta office</p>
            </div>
            <div className="space-y-4">
              <Shield className="h-12 w-12 text-green-600 mx-auto" />
              <h3 className="font-semibold">30-Day Guarantee</h3>
              <p className="text-sm text-muted-foreground">Plant guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">🚚 Simple Process</h2>
            <p className="text-xl text-muted-foreground">From order to happy employees in 4 easy steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Choose Your Gifts</h3>
              <p className="text-sm text-muted-foreground">Mix & match OK!</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Add Optional Branding</h3>
              <p className="text-sm text-muted-foreground">Logo cards, stakes, or stickers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">We Deliver</h3>
              <p className="text-sm text-muted-foreground">To your Atlanta office</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">You Distribute</h3>
              <p className="text-sm text-muted-foreground">To employees</p>
            </div>
          </div>

          <div className="text-center mt-12 space-y-2">
            <p className="text-lg font-medium text-foreground"><strong>Minimum order:</strong> 25 units</p>
            <p className="text-lg font-medium text-foreground"><strong>Lead time:</strong> 5-7 business days</p>
          </div>
        </div>
      </section>

      {/* Photo Gallery & Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">📸 Other Corporate Gifts We Offer</h2>
            <p className="text-xl text-muted-foreground">Examples from our recent corporate orders</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div 
              className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: "url('/lovable-uploads/1bd45f7a-3658-4382-ae7e-22ae907bef12.png')",
              }}
            />
            <div 
              className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: "url('/lovable-uploads/b1d3fcc2-bffc-45a3-b075-22432c158831.png')",
              }}
            />
            <div 
              className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: "url('/lovable-uploads/05ea5854-590a-4b34-aff0-6642ce355ca4.png')",
              }}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              className="w-full h-80 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: "url('/lovable-uploads/be1a1a51-b3bb-4843-92bb-bb23d282def8.png')",
              }}
            />
            <div className="space-y-6">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div>
                      <blockquote className="text-lg text-green-800 italic mb-4">
                        "Our clients constantly compliment the plant arrangements. They love them, and it's even mentioned in our Google reviews!"
                      </blockquote>
                      <p className="text-green-700 font-medium">— Corporate Client</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="text-center">
                <Button 
                  onClick={scrollToOrder}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                >
                  Order Custom Arrangements Like These
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">📞 Ready to Order?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Submit your request and we'll contact you within 24 hours with your custom quote and availability.
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
                    <Label htmlFor="quantity">Approximate quantity needed</Label>
                    <Select onValueChange={(value) => setFormData({...formData, quantity: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select quantity range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25-49">25-49 units</SelectItem>
                        <SelectItem value="50-99">50-99 units</SelectItem>
                        <SelectItem value="100-249">100-249 units</SelectItem>
                        <SelectItem value="250-499">250-499 units</SelectItem>
                        <SelectItem value="500+">500+ units</SelectItem>
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
                  <Label htmlFor="message">Tell us about your order</Label>
                  <Textarea
                    id="message"
                    placeholder="Which products interest you? Do you need branding? Any special requirements?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg mb-4">
                    Request My Custom Quote
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    We'll respond within 24 hours with pricing and availability
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-12 space-y-4">
            <div className="flex justify-center items-center gap-8">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-600" />
                <span className="font-medium">service@atlantahouseplants.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-600" />
                <span className="font-medium">404-910-2994</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">
              Ask about our "Smiles for Succulents" donation program!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Corporate;
