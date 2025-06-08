
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(404) 555-PLANT",
      subtext: "Call for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@atlantahouseplants.com",
      subtext: "Get a response within 24 hours"
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "Metro Atlanta",
      subtext: "We serve all of Metro Atlanta"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 8AM-6PM",
      subtext: "Saturday by appointment"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Office?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch today for a free consultation. We'll assess your space and create 
            a custom plant solution that fits your budget and goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Get Your Free Consultation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Company Name
                </label>
                <Input placeholder="Your Company" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email Address
                </label>
                <Input type="email" placeholder="john@company.com" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Phone Number
                </label>
                <Input type="tel" placeholder="(404) 555-0123" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Tell us about your project
                </label>
                <Textarea 
                  placeholder="Describe your office space, plant preferences, and any specific needs..."
                  rows={4}
                />
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Request Free Consultation
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <info.icon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-foreground">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-foreground mb-4">Service Areas</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <div>• Atlanta</div>
                <div>• Marietta</div>
                <div>• Alpharetta</div>
                <div>• Roswell</div>
                <div>• Sandy Springs</div>
                <div>• Buckhead</div>
                <div>• Midtown</div>
                <div>• Downtown</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
