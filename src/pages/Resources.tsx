import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText, Calculator, Users, Leaf, BookOpen } from "lucide-react";
import { useForm } from "@/components/forms/FormContext";
import LeadMagnets from "@/components/LeadMagnets";

const Resources = () => {
  const { openForm } = useForm();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-8">
              <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                Professional Resources
              </span>
              <span className="block text-foreground">for Strategic Decision Making</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-700 max-w-4xl mx-auto leading-relaxed font-semibold">
              Access the strategic tools and frameworks our certified professionals use to design, implement, and optimize workplace plant programs for 500+ Atlanta businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Lead Magnets */}
      <LeadMagnets />

      {/* Why These Resources Matter - deployment fix */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Strategic Decision-Making Framework
            </h2>
            <p className="text-xl text-blue-700 leading-relaxed">
              Professional tools designed to support evidence-based decisions about workplace plant integration and ROI justification.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quantify Business Impact</h3>
              <p className="text-gray-700">
                Calculate productivity gains, healthcare savings, and retention benefits to build compelling business cases for executive approval.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Evidence-Based Presentations</h3>
              <p className="text-gray-700">
                Access research-backed data and case studies to educate stakeholders and secure organizational support for plant initiatives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Strategic Implementation</h3>
              <p className="text-gray-700">
                Professional frameworks for plant selection, placement optimization, and comprehensive care management systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Implement Your Strategic Plan?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Schedule your complimentary consultation with Georgia's certified plant professional to develop a customized implementation strategy.
          </p>
          
          <Button 
            size="lg"
            onClick={() => openForm('business-quote')}
            className="bg-white text-green-700 hover:bg-green-50 border-2 border-white hover:border-green-100 text-xl px-16 py-8 shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 font-bold tracking-wide rounded-xl"
          >
            <span className="flex items-center">
              Schedule Strategic Consultation
              <svg className="ml-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Button>
          
          <div className="mt-8 text-green-100">
            <p>✓ Professional assessment • ✓ 24-hour response • ✓ Certified horticulturalist</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;