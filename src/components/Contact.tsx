
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Calendar, Gift } from "lucide-react";
import { useForm as useReactHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceInterest: z.string(),
  projectDetails: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

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
      title: "Plant Doctor Service",
      description: "90-minute comprehensive plant diagnosis and treatment",
      price: "$129",
      cta: "Book Appointment",
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useReactHookForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceInterest: "FREE Office Plant Design",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const payload = {
        formType: "office-plant-design",
        timestamp: new Date().toISOString(),
        leadData: {
          ...data,
          source: "homepage",
          service: "Office Plant Design & Care"
        }
      };

      const response = await fetch("https://hook.us1.make.com/crj4finfx3ubm8o2u7q4n4npa265tmrs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast({
        title: "Request Submitted!",
        description: "We'll contact you within 24 hours with your free consultation details.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "Please try again or call us directly at (404) 555-PLANT",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Office with Plants?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get your free office plant design consultation or request a custom color planter quote.
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-foreground mb-2 block">
                            First Name *
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-foreground mb-2 block">
                            Last Name *
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-foreground mb-2 block">
                          Company Name *
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-foreground mb-2 block">
                          Email Address *
                        </FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-foreground mb-2 block">
                          Phone Number *
                        </FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(404) 555-0123" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="serviceInterest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-foreground mb-2 block">
                          Service Interest
                        </FormLabel>
                        <FormControl>
                          <select
                            className="w-full p-2 border border-input rounded-md bg-background"
                            {...field}
                          >
                            <option value="FREE Office Plant Design">FREE Office Plant Design</option>
                            <option value="Ongoing Plant Care for Existing Plants">Ongoing Plant Care for Existing Plants</option>
                            <option value="Corporate Plant Gifting (100+ plants)">Corporate Plant Gifting (100+ plants)</option>
                            <option value="Smiles for Succulents CSR Program">Smiles for Succulents CSR Program</option>
                            <option value="Handmade Color Planters">Handmade Color Planters</option>
                            <option value="Color Bowl Service">Color Bowl Service</option>
                            <option value="Corporate Workshop">Corporate Workshop</option>
                            <option value="Plant Doctor Service">Plant Doctor Service</option>
                            <option value="Premium Home Design">Premium Home Design</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="projectDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-foreground mb-2 block">
                          Tell us about your project
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your office space, number of employees, plant preferences, and any specific needs..."
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3"
                  >
                    {isSubmitting ? "Submitting..." : "Request FREE Consultation"}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    * By submitting this form, you agree to receive communication from Atlanta House Plants.
                    We typically respond within 4 hours during business hours.
                  </p>
                </form>
              </Form>
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
                Every plant we install and maintain comes with a 100% health guarantee. If any plant fails under our care, 
                we replace it at no cost. Your investment is protected with professional plant care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
