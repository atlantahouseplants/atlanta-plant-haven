import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter, Youtube, Calendar, Gift } from "lucide-react";
import { useForm as useReactHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, "Please enter your first name (at least 2 characters)"),
  lastName: z.string().min(2, "Please enter your last name (at least 2 characters)"),
  companyName: z.string().min(2, "Please enter your company name (at least 2 characters)"),
  email: z.string().email("Please enter a valid email address (example: john@company.com)"),
  phone: z.string().min(10, "Please enter a valid 10-digit phone number"),
  serviceInterest: z.string(),
  projectDetails: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "470-664-4039",
      subtext: "We'll respond promptly to your inquiry",
      clickable: true,
      href: "tel:470-664-4039"
    },
    {
      icon: Mail,
      title: "Email",
      details: "ana@atlantahouseplants.com",
      subtext: "Get a response within 24 hours",
      clickable: true,
      href: "mailto:ana@atlantahouseplants.com"
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

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/atlantahouseplants/" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/atlanta_houseplants/" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/atlanta-houseplants/" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/ATL_Houseplants" },
    { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/channel/UCIV-DyGixA6mChcP1FNpLdQ" }
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
        description: "Please try again or contact us via email",
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
            Ready to Transform Your Space with Plants?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get your free office plant design consultation or request expert plant care services. 
            Our certified plant professional is ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Primary Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Get Your FREE Plant Consultation</CardTitle>
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
                            <Input 
                              placeholder="John" 
                              autoFocus
                              {...field} 
                            />
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
                          <Input placeholder="Your Company (if applicable)" {...field} />
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
                          <Input type="tel" placeholder="Your phone number" {...field} />
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
                            <option value="Corporate Social Responsibility Program">Corporate Social Responsibility Program</option>
                            <option value="Handmade Color Planters">Handmade Color Planters</option>
                            <option value="Color Bowl Service">Color Bowl Service</option>
                            <option value="Plant Doctor Service">Plant Doctor Service</option>
                            <option value="Home Plant Design">Home Plant Design</option>
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
                            placeholder="Describe your space, plant needs, and any specific requirements..."
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
                {contactInfo.map((info, index) => {
                  const ContactComponent = info.clickable ? 'a' : 'div';
                  const contactProps = info.clickable ? { href: info.href } : {};
                  
                  return (
                    <ContactComponent 
                      key={index} 
                      {...contactProps}
                      className={`flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm ${info.clickable ? 'hover:bg-green-50 transition-colors cursor-pointer' : ''}`}
                    >
                      <div className="p-2 bg-green-100 rounded-lg">
                        <info.icon className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className={`text-foreground ${info.clickable ? 'hover:text-green-600' : ''}`}>{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.subtext}</p>
                      </div>
                    </ContactComponent>
                  );
                })}
              </div>
            </div>

            {/* Additional Contact Methods */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-foreground mb-4">Additional Contact</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-green-600 mr-2" />
                  <span>Service: service@atlantahouseplants.com</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Plant Doctor: plantdoctor@atlantahouseplants.com</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-green-100 rounded-lg hover:bg-green-200 transition-colors"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="h-5 w-5 text-green-600" />
                  </a>
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

            {/* Professional Guarantee */}
            <div className="bg-green-100 p-6 rounded-lg border-l-4 border-green-600">
              <h4 className="font-bold text-green-800 mb-2">🛡️ Professional Guarantee</h4>
              <p className="text-green-700 text-sm">
                Every business plant installation and maintenance service comes with our professional guarantee. 
                Your investment is protected with expert plant care and dedicated support.
              </p>
            </div>

            {/* Meet Nick Section */}
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="/images/branding-assets/nick-plant-doctor-portrait-circular.png" 
                  alt="Nick, Your Plant Doctor"
                  className="w-20 h-20 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-foreground">Meet Nick, Your Plant Doctor</h3>
                  <p className="text-blue-600 font-medium">UGA Horticulture Graduate • 15+ Years Experience</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                "I've dedicated my career to helping Atlanta businesses and homeowners create beautiful, healthy plant environments. 
                Every service comes with my personal expertise and ongoing support."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
