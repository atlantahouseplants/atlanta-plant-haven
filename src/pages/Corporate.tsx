
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
              Simple • Scalable • Local Atlanta Delivery
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Atlanta Houseplants<br />Corporate Gift Collection
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-4">
              Skip the boring corporate mugs. Give your team something they'll actually love.
            </p>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Professional plant gifts ready to order - from mini succulents to executive arrangements. 
              Minimum 25 units, 5-7 day lead time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToOrder}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
              >
                Browse Our Collection
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
                onClick={() => window.open('tel:404-910-2994')}
              >
                Call: 404-910-2994
              </Button>
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
                    backgroundImage: "url('/lovable-uploads/4bd098cf-c347-44d4-8770-5cbd973972cf.png')",
                  }}
                />
                <div 
                  className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: "url('/lovable-uploads/90f5433f-c1d9-46f3-9585-07fd8cf8b4f3.png')",
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
                    backgroundImage: "url('/lovable-uploads/8d50d76d-b349-4ac3-9177-5f7844ac7d45.png')",
                  }}
                />
                <div 
                  className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: "url('/lovable-uploads/8169a351-529d-491f-b975-8f13688d75b8.png')",
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
            <div 
              className="w-full h-80 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: "url('/lovable-uploads/5e7af490-5108-4915-9b05-14f1426d3b5b.png')",
              }}
            />
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
              <div 
                className="w-full h-64 bg-cover bg-center rounded-lg mb-6 shadow-lg"
                style={{
                  backgroundImage: "url('/lovable-uploads/9cc3e42f-7ac1-44ff-b4a6-389a65181a83.png')",
                }}
              />
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
                  backgroundImage: "url('/lovable-uploads/0ce46e4f-6354-42d3-98b8-2239be3bbd31.png')",
                }}
              />
              <div 
                className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: "url('/lovable-uploads/86c2026a-d63a-4bb9-b7b9-473883d52fc7.png')",
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
                      backgroundImage: "url('/lovable-uploads/e2804558-0f3f-4dab-b434-d9f4c65e4fc5.png')",
                    }}
                  />
                  <div 
                    className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg"
                    style={{
                      backgroundImage: "url('/lovable-uploads/950e7437-9258-4a48-8836-bc8f5a10edd6.png')",
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
