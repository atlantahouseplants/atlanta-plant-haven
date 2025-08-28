import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Leaf, Award, Users, Building2, Star } from "lucide-react";
import { useForm } from "@/components/forms/FormContext";

const OfficePlants = () => {
  const { openForm } = useForm();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* 1. Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-muted via-background to-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Transform Your Atlanta Workspace
              </h1>
              
              <h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Elevate Your Brand, Boost Employee Well-being, and Create an Unforgettable First Impression—Guaranteed.
              </h2>
              
              <Button 
                size="lg" 
                onClick={() => openForm('business-quote')}
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white text-xl px-12 py-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold tracking-wide"
              >
                <span className="flex items-center">
                  Book My Complimentary Audit
                  <svg className="ml-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
            </div>
            
            <div className="relative">
              <img
                src="/lovable-uploads/24794cd6-d871-433d-8ce5-1b5d61120d74.png"
                alt="Stunning corporate reception area with professional plant installation"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Social Proof Bar */}
      <section className="py-12 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-center text-muted-foreground mb-8">
            The Trusted Horticultural Partner for Atlanta's Leading Firms
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-3xl font-bold text-foreground">Marriott</div>
            <div className="text-3xl font-bold text-foreground">Archer Western</div>
            <div className="text-3xl font-bold text-foreground">OneStreet Residential</div>
            <div className="text-3xl font-bold text-foreground">Perkins and Will</div>
            <div className="text-3xl font-bold text-foreground">Loria Ansley</div>
          </div>
        </div>
      </section>

      {/* 3. The Problem Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Your Office is Speaking. What is it Saying?
          </h2>
          <div className="text-xl text-muted-foreground leading-relaxed space-y-6">
            <p>
              A generic office sends a message of indifference. A space with dying plants sends a message of neglect. 
              Every day, your workspace is communicating with your clients, your partners, and your most valuable asset—your team.
            </p>
            <p>
              A sterile environment can lead to decreased productivity, higher stress, and a brand image that fails to impress. 
              Managing it yourself is a frustrating drain on time and resources. It's a problem that silently costs you more than you think.
            </p>
          </div>
        </div>
      </section>

      {/* 4. The Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            We Engineer Environments That Thrive
          </h2>
          <div className="text-xl text-muted-foreground leading-relaxed space-y-6">
            <p>
              Atlanta Houseplants provides a strategic, 'done-for-you' horticultural management program. 
              We go beyond simply placing plants. We use the principles of biophilic design to create atmospheres 
              that are scientifically proven to enhance focus and creativity.
            </p>
            <p>
              Our service isn't an expense; it's an investment in your company's culture and brand perception. 
              We handle every detail, so you can focus on your business.
            </p>
          </div>
        </div>
      </section>

      {/* 5. "How It Works" Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Our Simple, 3-Step Process to a Perfect Workspace
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Step 1: The Audit</h3>
              <p className="text-muted-foreground text-lg">
                Our Head Horticulturalist conducts an on-site analysis of your space, light, and aesthetic goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Step 2: The Blueprint</h3>
              <p className="text-muted-foreground text-lg">
                We deliver a custom visual proposal and strategic plan tailored to your exact needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Step 3: The Transformation</h3>
              <p className="text-muted-foreground text-lg">
                Our white-glove team handles the complete installation and all ongoing expert care. You do nothing but enjoy the results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "Meet Your Expert" Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/lovable-uploads/b0543742-bb86-45d7-a641-7ccd52b9be1f.png"
                alt="Nick, Head Horticulturalist, in professional greenhouse setting"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Your Design is Curated by a Certified Horticultural Expert
              </h2>
              <div className="text-xl text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Every Atlanta Houseplants partner works directly with our Head Horticulturalist, Nick. 
                  As a graduate of the University of Georgia's renowned horticulture program and a State of Georgia 
                  Certified Plant Professional, Nick's expertise is the foundation of our guarantee.
                </p>
                <p>
                  He ensures that your plantscape is not only beautiful on day one, but remains healthy and vibrant for years to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. The Offer Section (Booking Engine) */}
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Schedule Your Complimentary Design Audit Below
          </h2>
          <div className="text-xl text-muted-foreground leading-relaxed mb-12 space-y-4">
            <p>
              This is a no-obligation consultation to develop a strategic plan for your office. 
              We will assess your space and provide a detailed visual proposal.
            </p>
            <p className="font-semibold text-foreground">
              Please note: To ensure the highest level of service, we partner with businesses ready to invest 
              in a premium, ongoing care program, which start at $425/month. If this aligns with your goals, 
              please select a time below.
            </p>
          </div>
          
          <Button 
            size="lg"
            onClick={() => openForm('business-quote')}
            className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white text-2xl px-16 py-8 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 font-bold tracking-wide rounded-xl"
          >
            <span className="flex items-center">
              Book My Complimentary Audit
              <svg className="ml-4 h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Button>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-green-600 font-medium">
            <div className="flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              No Obligation
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              24-Hour Response
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" />
              Expert Consultation
            </div>
          </div>
        </div>
      </section>

      {/* 8. Case Studies & Results Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Real Results from Atlanta Businesses
            </h2>
            <p className="text-xl text-muted-foreground">
              See how we've transformed workspaces and improved business outcomes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Case Study 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/lovable-uploads/24794cd6-d871-433d-8ce5-1b5d61120d74.png"
                alt="Heritage Distribution office transformation"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Heritage Distribution - Buckhead</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">23%</div>
                    <p className="text-sm text-muted-foreground">Fewer sick days</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">40%</div>
                    <p className="text-sm text-muted-foreground">Improved client feedback</p>
                  </div>
                </div>
                <blockquote className="italic text-muted-foreground mb-4">
                  "The professionalism and expertise are unmatched. Our lobby is now a true showpiece, 
                  and the ongoing service is completely hands-off. It's a turnkey solution that delivers real value."
                </blockquote>
                <cite className="font-medium text-foreground">
                  – Michelle, Office Manager
                </cite>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/lovable-uploads/e1930419-ea64-46bc-b42a-ed13b1f43ab1.png"
                alt="Tech company office plant installation"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Tech Startup - Alpharetta</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">18%</div>
                    <p className="text-sm text-muted-foreground">Productivity increase</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">90%</div>
                    <p className="text-sm text-muted-foreground">Employee satisfaction</p>
                  </div>
                </div>
                <blockquote className="italic text-muted-foreground mb-4">
                  "Our team noticed the difference immediately. The office feels more alive and energizing. 
                  We've seen measurable improvements in focus and creativity since the installation."
                </blockquote>
                <cite className="font-medium text-foreground">
                  – Sarah Chen, HR Director
                </cite>
              </div>
            </div>
          </div>

          {/* ROI Statistics */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-bold mb-8">Average Client Results After 6 Months</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">19%</div>
                <p className="text-green-100">Reduction in sick days</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24%</div>
                <p className="text-green-100">Improved productivity</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">89%</div>
                <p className="text-green-100">Client satisfaction rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$3,200</div>
                <p className="text-green-100">Average annual savings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Create an Environment that Inspires?
          </h2>
          <Button 
            size="lg"
            onClick={() => openForm('business-quote')}
            className="bg-white text-green-700 hover:bg-green-50 border-2 border-white hover:border-green-100 text-2xl px-16 py-8 shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 font-bold tracking-wide rounded-xl"
          >
            <span className="flex items-center">
              Book My Free Audit & See The Plan
              <svg className="ml-4 h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OfficePlants;