
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Leaf, Heart, Zap, Shield, Award, Phone, Mail } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    serviceType: "new-design"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead captured:", formData);
    // Here you would integrate with your Go High Level form
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-medium mb-4">
                <Award className="h-4 w-4 mr-2" />
                Georgia Certified Plant Professional • 15+ Years Experience
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                <span className="text-green-600">100% FREE</span>{" "}
                Office Plant Design
                <span className="block text-3xl md:text-4xl mt-2 text-muted-foreground">
                  + Guaranteed Plant Care
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Transform your Atlanta office with professional plant design. Our UGA-certified plant doctor Nick creates custom installations with a <strong>100% plant guarantee</strong> on all maintained plants. No obligation, completely FREE consultation.
              </p>
            </div>

            {/* Process Steps */}
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-600">
              <h3 className="font-bold text-lg mb-3">Our Simple Process:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">1</span>
                  <span>Submit your free design request (takes 30 seconds)</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">2</span>
                  <span>We contact you within 24 hours to schedule your visit</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">3</span>
                  <span>Nick visits during midday for optimal lighting assessment</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">4</span>
                  <span>Receive custom design + budget options within 48 hours</span>
                </div>
              </div>
            </div>

            {/* Lead Capture Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-600">
              <h3 className="text-xl font-bold mb-4">Get Your FREE Office Plant Design</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Your Name"
                    value={formData.contactName}
                    onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">I'm interested in:</label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                  >
                    <option value="new-design">New office plant design & installation</option>
                    <option value="existing-care">Care for existing office plants</option>
                    <option value="both">Both design and care services</option>
                  </select>
                </div>
                <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-4">
                  Get My FREE Design Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                ✓ No obligation • ✓ Free consultation • ✓ 24-hour response guarantee
              </p>
            </div>

            {/* Emergency contact */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                Need immediate help? Call: (770) 123-4567
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                nick@plantdoctor.com
              </div>
            </div>
          </div>

          {/* Right Column - Success Stories & Images */}
          <div className="space-y-6">
            {/* Social Proof */}
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h4 className="font-bold text-green-600 mb-2">Trusted by 500+ Atlanta Businesses</h4>
              <div className="text-sm text-muted-foreground">
                Including Georgia Tech • Corporate high-rises • Medical offices
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/lovable-uploads/e1930419-ea64-46bc-b42a-ed13b1f43ab1.png"
                  alt="Professional office plant installation - Monstera in corporate setting"
                  className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img
                  src="/lovable-uploads/6ce5cacc-3f1d-46f2-93e8-2c25414367dd.png"
                  alt="Colorful office plants by window - Croton plant design"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/lovable-uploads/d5e71052-5399-473b-9c63-f6157490d96d.png"
                  alt="Money Tree in professional office lobby"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img
                  src="/lovable-uploads/4c82f760-9f02-4961-9064-4e01de1e97c2.png"
                  alt="Elegant Ficus plant installation in conference room"
                  className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-green-600 text-white p-6 rounded-lg">
              <p className="text-lg italic mb-3">
                "Nick transformed our office with beautiful plants and his ongoing care keeps them thriving. The guarantee gives us complete peace of mind!"
              </p>
              <p className="text-sm">— Sarah K., Office Manager, Tech Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
