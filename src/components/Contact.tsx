
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Calendar, Gift } from "lucide-react";

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

  const quickServices = [
    {
      icon: Calendar,
      title: "Plant Doctor Emergency",
      description: "90-minute comprehensive plant diagnosis and treatment",
      price: "$129",
      cta: "Book Now",
      urgent: true
    },
    {
      icon: Gift,
      title: "Bulk Plant Gifting Quote",
      description: "Mini succulents for employee/client appreciation",
      price: "Starting $7.25 each",
      cta: "Get Quote",
      urgent: false
    }
  ];

  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Office with Plants?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get your free office plant design consultation or book an emergency plant doctor visit. 
            Our certified plant professional is ready to help.
          </p>
        </div>

        {/* Quick Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {quickServices.map((service, index) => (
            <Card key={index} className={`border-2 ${service.urgent ? 'border-orange-300 bg-orange-50' : 'border-blue-300 bg-blue-50'}`}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <service.icon className={`h-8 w-8 ${service.urgent ? 'text-orange-600' : 'text-blue-600'}`} />
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <p className={`text-lg font-bold ${service.urgent ? 'text-orange-700' : 'text-blue-700'}`}>{service.price}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button className={`w-full ${service.urgent ? 'bg-orange-600 hover:bg-orange-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}>
                  {service.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Primary Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Get Your FREE Office Plant Design</CardTitle>
              <p className="text-muted-foreground">Complete the form below and we'll contact you within 24 hours to schedule your consultation.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name *
                  </label>
                  <Input placeholder="John" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name *
                  </label>
                  <Input placeholder="Doe" required />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Company Name *
                </label>
                <Input placeholder="Your Company" required />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email Address *
                </label>
                <Input type="email" placeholder="john@company.com" required />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Phone Number *
                </label>
                <Input type="tel" placeholder="(404) 555-0123" required />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Service Interest
                </label>
                <select className="w-full p-2 border border-input rounded-md bg-background">
                  <option>FREE Office Plant Design</option>
                  <option>Plant Care for Existing Plants</option>
                  <option>Corporate Plant Gifting (100+ plants)</option>
                  <option>Smiles for Succulents CSR Program</option>
                  <option>Corporate Workshop</option>
                  <option>Plant Doctor Emergency Visit</option>
                  <option>Premium Home Design</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Tell us about your project
                </label>
                <Textarea 
                  placeholder="Describe your office space, number of employees, plant preferences, and any specific needs..."
                  rows={4}
                />
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3">
                Request FREE Consultation
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                * By submitting this form, you agree to receive communication from Atlanta House Plants. 
                We typically respond within 4 hours during business hours.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information & Service Areas */}
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
              <h4 className="font-semibold text-foreground mb-4">Metro Atlanta Service Areas</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <div>• Atlanta</div>
                <div>• Marietta</div>
                <div>• Alpharetta</div>
                <div>• Roswell</div>
                <div>• Sandy Springs</div>
                <div>• Buckhead</div>
                <div>• Midtown</div>
                <div>• Downtown</div>
                <div>• Dunwoody</div>
                <div>• Johns Creek</div>
                <div>• Brookhaven</div>
                <div>• Decatur</div>
              </div>
            </div>

            {/* Guarantee Section */}
            <div className="bg-green-100 p-6 rounded-lg border-l-4 border-green-600">
              <h4 className="font-bold text-green-800 mb-2">🛡️ Our Guarantee</h4>
              <p className="text-green-700 text-sm">
                Every plant we maintain comes with a 100% health guarantee. If any plant fails under our care, 
                we replace it at no cost. Your investment is protected when you choose professional plant care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
