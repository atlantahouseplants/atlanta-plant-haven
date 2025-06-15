
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Palette, RefreshCw, CheckCircle, Mail, Phone, User, Building } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ColorPlanters = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>, serviceType: string) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      serviceType: serviceType,
      message: formData.get('message'),
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch('https://api.leadconnectorhq.com/widget/form/yc2iyBbIL6lGOokDJgjQ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(data)
      });

      toast({
        title: "Request Received!",
        description: "Thank you for your interest! We've received your request and someone will reach out to you by the next business day at the latest.",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Request Sent",
        description: "Your request has been submitted. We'll contact you soon!",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Handmade Color Planter Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Custom seasonal designs using the freshest blooms. Transform your outdoor spaces and indoor areas 
              with our professional color planter and bowl services designed by Nick, our Head Plant Doctor.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <img
              src="/lovable-uploads/dac0e271-0075-4ddf-9fa0-4806974546f4.png"
              alt="Professional installing custom outdoor color planters"
              className="w-full rounded-lg shadow-lg"
            />
            <img
              src="/lovable-uploads/b68c4092-c52d-4d4a-9bde-73aca712548f.png"
              alt="Indoor color bowl arrangements for offices"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Outdoor Color Planters */}
            <Card className="border-purple-600 border-2">
              <CardContent className="p-8">
                <Palette className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Outdoor Color Planters</h3>
                <p className="text-muted-foreground mb-6">
                  Handmade seasonal planter designs for business patios, hotel pool areas, restaurant outdoor spaces, 
                  and commercial properties. Each design is unique - no two exist in Atlanta, making your business truly stand out.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-purple-600 mr-2" />One-of-a-kind handmade designs by Nick</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-purple-600 mr-2" />Initial professional installation</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-purple-600 mr-2" />Spring & fall seasonal refreshes</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-purple-600 mr-2" />Makes your business stand out</li>
                </ul>

                {/* Outdoor Planter Form */}
                <form onSubmit={(e) => handleFormSubmit(e, 'Outdoor Color Planters')} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Input
                        name="company"
                        placeholder="Company Name"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your outdoor space and vision..."
                    className="w-full"
                    rows={3}
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get FREE Outdoor Planter Quote'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Indoor Color Bowls */}
            <Card className="border-pink-600 border-2">
              <CardContent className="p-8">
                <RefreshCw className="h-12 w-12 text-pink-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Indoor Color Bowl Service</h3>
                <p className="text-muted-foreground mb-6">
                  Handmade ceramic color bowls perfect for lobbies, reception areas, and high-traffic spaces. 
                  Created by Nick using quality ceramic planters with fresh seasonal plants, succulents, orchids, and air plants.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-pink-600 mr-2" />Handcrafted centerpiece arrangements</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-pink-600 mr-2" />Quality ceramic planters included</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-pink-600 mr-2" />6-week rotation subscription available</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-pink-600 mr-2" />Perfect add-on to office plant care</li>
                </ul>

                {/* Indoor Bowl Form */}
                <form onSubmit={(e) => handleFormSubmit(e, 'Indoor Color Bowls')} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Input
                        name="company"
                        placeholder="Company Name"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <Textarea
                    name="message"
                    placeholder="How many bowls do you need and where will they be placed?"
                    className="w-full"
                    rows={3}
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get FREE Indoor Bowl Quote'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Gallery Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">Our Handmade Color Planter Work</h3>
            
            {/* Outdoor Gallery */}
            <div className="mb-16">
              <h4 className="text-2xl font-semibold mb-6 text-purple-600">Outdoor Color Planters</h4>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <img src="/lovable-uploads/4304e00c-b951-4fd7-9d6b-a9fb316e9084.png" alt="Seasonal outdoor planters with colorful blooms" className="w-full h-64 object-cover rounded-lg shadow-md" />
                <img src="/lovable-uploads/894e3588-fd78-45ec-a66a-d38adba26f7f.png" alt="Custom outdoor planters for commercial spaces" className="w-full h-64 object-cover rounded-lg shadow-md" />
                <img src="/lovable-uploads/5c12d8b0-6716-4d13-93da-7cf2237ef880.png" alt="Colorful seasonal outdoor arrangement" className="w-full h-64 object-cover rounded-lg shadow-md" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <img src="/lovable-uploads/df58d580-3b02-4989-a642-40ce17cce555.png" alt="Poolside planters for luxury hotels" className="w-full h-64 object-cover rounded-lg shadow-md" />
                <img src="/lovable-uploads/2ab58439-a84c-4527-9b77-51cc964b24a1.png" alt="Restaurant patio seasonal planters" className="w-full h-64 object-cover rounded-lg shadow-md" />
              </div>
            </div>

            {/* Indoor Gallery */}
            <div>
              <h4 className="text-2xl font-semibold mb-6 text-pink-600">Indoor Color Bowls</h4>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <img src="/lovable-uploads/0a46f717-6a07-43f8-b46f-98f8203dc460.png" alt="Lush tropical indoor color bowl with bird's nest fern and prayer plants" className="w-full h-64 object-cover rounded-lg shadow-md" />
                <img src="/lovable-uploads/5a7b84a7-c04d-4727-b584-8b433bc5255a.png" alt="Mixed foliage color bowl with alocasia and tropical plants" className="w-full h-64 object-cover rounded-lg shadow-md" />
                <img src="/lovable-uploads/78887fa2-05dc-45a4-9045-b406854ccfa1.png" alt="Vibrant color bowl with ti plants and tropical mix" className="w-full h-64 object-cover rounded-lg shadow-md" />
              </div>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <img src="/lovable-uploads/27610228-d006-4087-ac11-aefff1e4f4ac.png" alt="Sophisticated green foliage arrangement with peace lily and ferns" className="w-full h-64 object-cover rounded-lg shadow-md" />
                <img src="/lovable-uploads/94ec742e-bb3c-453c-b5f6-f550fd68f23b.png" alt="Colorful ceramic bowl with croton and snake plant arrangement" className="w-full h-64 object-cover rounded-lg shadow-md" />
                <img src="/lovable-uploads/6f13f0c8-6f80-423e-bc59-eca698c3dfa2.png" alt="Modern succulent and air plant arrangement in geometric planter" className="w-full h-64 object-cover rounded-lg shadow-md" />
              </div>
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <img src="/lovable-uploads/aa4da4dc-1bef-4425-bb6b-c8cfcee357fd.png" alt="Detailed succulent arrangement with jade pearls and colorful varieties" className="w-full h-64 object-cover rounded-lg shadow-md" />
                <img src="/lovable-uploads/b7db9856-d25e-494f-972e-e5208818fe58.png" alt="Bright anthurium centerpiece with tropical foliage mix" className="w-full h-64 object-cover rounded-lg shadow-md" />
                <img src="/lovable-uploads/4f80ca81-72b0-4505-96f2-e595c5e60781.png" alt="Elegant snake plant and tropical arrangement in decorative pot" className="w-full h-64 object-cover rounded-lg shadow-md" />
                <img src="/lovable-uploads/97354911-b016-495e-8c04-e86e474912c9.png" alt="Artistic ceramic bowl with croton and tropical plant mix" className="w-full h-64 object-cover rounded-lg shadow-md" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <img src="/lovable-uploads/c2622f62-937e-49d4-a647-df30191973e4.png" alt="Executive office color bowl with mixed tropical plants" className="w-full h-64 object-cover rounded-lg shadow-md" />
                <img src="/lovable-uploads/63df0b99-19df-41a5-b30f-002f4ddc8191.png" alt="Vibrant color bowl arrangement for reception area" className="w-full h-64 object-cover rounded-lg shadow-md" />
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mt-20 bg-gray-50 rounded-lg p-8">
            <h3 className="text-3xl font-bold text-center mb-12">How Our Services Work</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-purple-600">Outdoor Planters Process</h4>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                    <span>Free consultation and custom design quote</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    <span>Nick designs your unique planters (no two alike in Atlanta)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    <span>Professional installation at your location</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                    <span>Seasonal refreshes every spring and fall</span>
                  </li>
                </ol>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-pink-600">Indoor Bowls Process</h4>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-pink-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                    <span>Free design consultation for your space</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-pink-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    <span>Nick handcrafts ceramic bowl arrangements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-pink-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    <span>Professional delivery and placement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-pink-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                    <span>Optional 6-week rotation service for fresh seasonal changes</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ColorPlanters;
