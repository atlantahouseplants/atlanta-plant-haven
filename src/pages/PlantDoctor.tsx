
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PlantDoctorHero from "@/components/plant-doctor/PlantDoctorHero";
import CommonUseCases from "@/components/plant-doctor/CommonUseCases";
import WhatsIncluded from "@/components/plant-doctor/WhatsIncluded";
import WhatToExpected from "@/components/plant-doctor/WhatToExpect";
import BookingOptions from "@/components/plant-doctor/BookingOptions";
import WhyChooseNick from "@/components/plant-doctor/WhyChooseNick";
import PlantDoctorGallery from "@/components/plant-doctor/PlantDoctorGallery";
import BeforeAfterTransformations from "@/components/plant-doctor/BeforeAfterTransformations";
import PlantDoctorFAQ from "@/components/plant-doctor/PlantDoctorFAQ";
import PlantDoctorReviews from "@/components/plant-doctor/PlantDoctorReviews";
import PlantDoctorFinalCTA from "@/components/plant-doctor/PlantDoctorFinalCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Leaf, Users, Award, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import { useForm } from "@/components/forms/FormContext";

const PlantDoctor = () => {
  const { openForm } = useForm();
  
  const handleBookingClick = () => {
    window.open('https://api.leadconnectorhq.com/widget/booking/J3NNAtlNcdw0V75i8LX2', '_blank');
  };

  const expertTips = [
    {
      title: "The 3 Best Plants for a Low-Light Conference Room",
      excerpt: "Discover which plants thrive in windowless meeting spaces and how they can improve air quality during long meetings.",
      category: "Office Plants",
      downloadUrl: "/3_Best_Plants_for_Low_Light_Offices.pdf"
    },
    {
      title: "How to Increase Air Quality in Your Office with Strategic Plant Placement",
      excerpt: "Learn the science behind biophilic design and which plants are proven to remove the most toxins from indoor air.",
      category: "Workplace Wellness",
      downloadUrl: "/Increase_Air_Quality_Strategic_Plant_Placement.pdf"
    },
    {
      title: "Why Your Office Plants Keep Dying (And How to Fix It)",
      excerpt: "The most common mistakes office managers make and simple solutions to keep your corporate plants thriving year-round.",
      category: "Plant Care",
      downloadUrl: "/Why_Office_Plants_Keep_Dying_Solutions.pdf"
    },
    {
      title: "The ROI of Office Plants: Productivity Data You Need to See",
      excerpt: "Real research showing how plants in the workplace can reduce sick days and increase employee satisfaction scores.",
      category: "Business Benefits",
      downloadUrl: "/Office_Plants_ROI_Productivity_Data.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Authority Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-muted via-background to-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Meet The Plant Doctor: 
              <span className="block text-green-600">Expert Horticultural Insights for Atlanta's Workspaces</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Professional plant expertise that transforms office environments and solves workplace plant challenges
            </p>
          </div>

          {/* Enhanced Nick Bio */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <img
                src="/images/service-maintenance/nick-plant-doctor-lab-coat.png"
                alt="Nick, certified horticulturalist and plant doctor"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-medium mb-4">
                <Award className="h-4 w-4 mr-2" />
                Georgia's Leading Office Plant Expert
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Your Regional Plant Authority
              </h2>
              
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Nick is Atlanta's most trusted plant professional, with over 15 years of experience transforming 
                  corporate environments across the metro area. As a University of Georgia Horticulture graduate 
                  and State of Georgia Certified Plant Professional, he brings scientific expertise to every project.
                </p>
                <p>
                  His insights have helped over 500 Atlanta businesses create healthier, more productive workspaces. 
                  From Fortune 500 headquarters to growing startups, Nick's expertise ensures plants don't just survive—they thrive.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-muted-foreground">Businesses Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">UGA</div>
                  <div className="text-sm text-muted-foreground">Horticulture Degree</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIMARY CTA - B2B Lead Magnet */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Office?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Get Nick's expert assessment of your workspace and discover how strategic plant placement 
            can boost productivity, improve air quality, and impress your clients.
          </p>
          
          <Button 
            size="lg"
            onClick={() => openForm('business-quote')}
            className="bg-white text-green-600 hover:bg-gray-100 text-2xl px-12 py-6 mb-6"
          >
            Book Your Complimentary B2B Design Audit
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-75">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              No Obligation Assessment
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Custom Visual Proposal
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Expert Recommendations
            </div>
          </div>
        </div>
      </section>

      {/* Plant Doctor's Tip Content Hub */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Plant Doctor's Weekly Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert tips focused on solving workplace plant challenges and maximizing the benefits of office greenery
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {expertTips.map((tip, index) => (
              <Card key={index} className="border border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full mb-4">
                    {tip.category}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{tip.title}</h3>
                  <p className="text-muted-foreground mb-6">{tip.excerpt}</p>
                  {tip.downloadUrl ? (
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = tip.downloadUrl;
                        link.download = tip.downloadUrl.split('/').pop() || 'download.pdf';
                        link.click();
                      }}
                    >
                      Download Free PDF Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECONDARY CTA - Residential Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            For Residential Clients or Specific Plant Health Questions
          </h3>
          
          <div className="bg-card rounded-2xl p-8 border border-border max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            
            <h4 className="text-xl font-bold text-foreground mb-4">
              Nick offers a limited number of 'Plant Doctor House Calls'
            </h4>
            
            <p className="text-muted-foreground mb-6">
              Professional plant diagnosis and treatment for your home or individual plant health concerns. 
              Same-week appointments available.
            </p>
            
            <Button 
              onClick={handleBookingClick}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
            >
              Book Plant Doctor Visit - $149
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              ✓ Expert diagnosis • ✓ Custom care plan • ✓ Professional guarantee
            </p>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Scripts for widgets */}
      <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
      <script type='text/javascript' src='https://reputationhub.site/reputation/assets/review-widget.js'></script>
    </div>
  );
};

export default PlantDoctor;
