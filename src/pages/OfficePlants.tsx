import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Leaf, Award, Users, Building2, Star } from "lucide-react";
import { useForm } from "@/components/forms/FormContext";
import InlineLeadCapture from "@/components/InlineLeadCapture";

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
                <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                  Strategic Plant Design
                </span>
                <br />
                For Atlanta Workspaces
              </h1>
              
              <h2 className="text-xl md:text-2xl text-blue-700 leading-relaxed font-semibold">
                Create healthier, more productive work environments through expert biophilic design and guaranteed plant care—with zero maintenance burden on your team.
              </h2>

              {/* Key Metrics Preview */}
              <div className="grid md:grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">15%</div>
                  <div className="text-gray-600 text-sm">Productivity Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">37%</div>
                  <div className="text-gray-600 text-sm">Stress Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-gray-600 text-sm">Plant Health Guarantee</div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                onClick={() => window.open('https://api.leadconnectorhq.com/widget/booking/9fRFPShg1NmMIukGqwc4', '_blank')}
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white text-xl px-12 py-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold tracking-wide rounded-2xl"
              >
                <span className="flex items-center">
                  Schedule Your Workspace Consultation
                  <svg className="ml-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
            </div>
            
            <div className="relative">
              <video
                src="/images/corporate-offices/office-plants-hero-installation.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-2xl shadow-2xl"
              >
                <source src="/images/corporate-offices/office-plants-hero-installation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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

      {/* 3. The Opportunity Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Your Workspace Has Untapped Potential
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Every day, your office environment influences employee performance, client impressions, and company culture. 
              The opportunity to enhance these outcomes through strategic plant design represents significant ROI.
            </p>
          </div>

          {/* Opportunity vs Enhancement Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Current State */}
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center">
                <span className="mr-3">📊</span>
                Current Workplace Reality
              </h3>
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Sterile environments reduce creativity and focus</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Employee stress levels impact retention and performance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Generic offices fail to impress clients and partners</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Indoor air quality affects employee health and productivity</span>
                </li>
              </ul>
            </div>

            {/* Enhanced State */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                <span className="mr-3">🌟</span>
                Enhanced Workplace Potential
              </h3>
              <ul className="space-y-4 text-lg text-green-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>15% productivity increase</strong> with biophilic design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>37% stress reduction</strong> improves employee satisfaction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Professional brand image</strong> that impresses stakeholders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span><strong>Improved air quality</strong> supports employee wellness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Strategic Solution */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Strategic Biophilic Design Solutions
            </h2>
            <p className="text-xl text-blue-700 leading-relaxed max-w-4xl mx-auto">
              We partner with Atlanta's leading businesses to create healthier, more productive work environments through 
              expert plant design and comprehensive care management.
            </p>
          </div>

          {/* Solution Benefits */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">🎯 Strategic Design Process</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Comprehensive workspace assessment and analysis</li>
                <li>• Custom plant selection based on light and space requirements</li>
                <li>• Biophilic design principles for maximum impact</li>
                <li>• Professional installation with minimal disruption</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-4">🛡️ Complete Care Management</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• 100% plant health guarantee with expert maintenance</li>
                <li>• Regular professional care visits (no staff involvement)</li>
                <li>• Seasonal adjustments and plant replacements</li>
                <li>• Ongoing consultation and design optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "How It Works" Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Professional 3-Step Implementation Process
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
              From initial assessment to ongoing care management, we handle every detail so you can focus on your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-800">Step 1: Strategic Assessment</h3>
              <p className="text-gray-700 text-lg">
                Our certified horticulturalist analyzes your workspace environment, lighting conditions, and business goals to develop a comprehensive biophilic design strategy.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Step 2: Custom Design Proposal</h3>
              <p className="text-gray-700 text-lg">
                Receive a detailed visual proposal with plant selections, placement strategy, and care program recommendations tailored to your workspace and budget.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-800">Step 3: Professional Implementation</h3>
              <p className="text-gray-700 text-lg">
                Our expert team manages the complete installation and provides ongoing maintenance visits, ensuring 100% plant health with zero burden on your staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Lead Magnet Section */}
      <InlineLeadCapture 
        variant="roi-calculator" 
        className="mx-4 sm:mx-6 lg:mx-8 mb-20"
      />

      {/* 6. "Meet Your Expert" Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/images/service-maintenance/nick-plant-doctor-lab-coat.png"
                alt="Nick, Head Horticulturalist, in professional lab coat with plant specimen"
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
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Schedule Your Complimentary Workspace Assessment
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto mb-8">
              <div className="text-xl text-gray-700 leading-relaxed space-y-4">
                <p className="text-center">
                  <strong>Get a comprehensive workspace analysis</strong> with our certified horticulturalist. 
                  We'll assess your environment and provide a detailed strategic plan at no cost.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-blue-600 font-bold text-lg">✓ Space Assessment</div>
                    <div className="text-sm text-gray-600">Light, air flow, layout analysis</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-600 font-bold text-lg">✓ Custom Proposal</div>
                    <div className="text-sm text-gray-600">Visual design & plant selection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-600 font-bold text-lg">✓ Care Strategy</div>
                    <div className="text-sm text-gray-600">Maintenance plan & pricing</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-600 text-center">
              <strong>Professional service commitment:</strong> Our ongoing care programs start at $425/month to ensure 
              the highest level of plant health and workspace enhancement. If this investment aligns with your goals, 
              please schedule your consultation below.
            </p>
          </div>
          
          <Button 
            size="lg"
            onClick={() => window.open('https://api.leadconnectorhq.com/widget/booking/9fRFPShg1NmMIukGqwc4', '_blank')}
            className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white text-2xl px-16 py-8 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 font-bold tracking-wide rounded-xl"
          >
            <span className="flex items-center">
              Schedule My Professional Assessment
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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Case Study 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/images/corporate-offices/large-lobby-floor-plants.png"
                alt="Heritage Distribution office transformation with large floor plants"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-green-600">Heritage Distribution - Buckhead</h3>
                <blockquote className="text-xl text-foreground font-semibold leading-relaxed mb-6">
                  "The professionalism and expertise are unmatched. Our lobby is now a true showpiece, and the morning mood in the office is completely different. It's a turnkey service that delivered real results."
                </blockquote>
                <cite className="text-lg font-medium text-muted-foreground">
                  – Michelle, Office Manager
                </cite>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/images/corporate-offices/blue-cubicle-planters.png"
                alt="Professional plant installation service in Atlanta high-rise office with blue planters"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-green-600">Tech Startup - Alpharetta</h3>
                <blockquote className="text-xl text-foreground font-semibold leading-relaxed mb-6">
                  "Our team noticed the difference immediately. The office feels more alive and energizing. We've seen measurable improvements in focus and creativity since the installation."
                </blockquote>
                <cite className="text-lg font-medium text-muted-foreground">
                  – Sarah Chen, HR Director
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Workspace?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Join 500+ Atlanta businesses who trust us to create healthier, more productive work environments.
            </p>
          </div>
          <Button 
            size="lg"
            onClick={() => window.open('https://api.leadconnectorhq.com/widget/booking/9fRFPShg1NmMIukGqwc4', '_blank')}
            className="bg-white text-green-700 hover:bg-green-50 border-2 border-white hover:border-green-100 text-2xl px-16 py-8 shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 font-bold tracking-wide rounded-xl"
          >
            <span className="flex items-center">
              Begin Your Workspace Transformation
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