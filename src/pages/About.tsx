import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, Users, Leaf, Building2, Calendar, CheckCircle } from "lucide-react";
import InlineLeadCapture from "@/components/InlineLeadCapture";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-muted via-background to-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                Atlanta Houseplants:
              </span>
              <span className="block text-foreground">Your Professional Plant Partner</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-700 max-w-4xl mx-auto leading-relaxed font-semibold">
              Since 2020, we've been Atlanta's premier destination for professional plant services, 
              transforming workspaces and creating lasting impressions through expert horticultural care.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Businesses Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-gray-600">Plants Installed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-gray-600">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Plant Health Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story: Growing Atlanta's Business Community
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Founded in 2020 with a vision to bring the benefits of biophilic design to Atlanta's 
                  business community, Atlanta Houseplants has grown from a small startup to the metro 
                  area's most trusted plant service provider.
                </p>
                <p>
                  What started as a passion for helping businesses create healthier work environments 
                  has evolved into a comprehensive service offering that includes office plant design, 
                  corporate gifting, and professional plant care management.
                </p>
                <p>
                  We're proud to serve Fortune 500 companies, innovative startups, and everything in 
                  between, all while maintaining our commitment to excellence and our 100% plant health guarantee.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/images/corporate-offices/large-lobby-floor-plants.png"
                alt="Atlanta Houseplants office transformation showcase"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Nick - Owner & Head Horticulturalist */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/images/service-maintenance/nick-plant-doctor-lab-coat.png"
                alt="Nick, Head Horticulturalist and company owner"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-medium mb-4">
                <Award className="h-4 w-4 mr-2" />
                State of Georgia Certified Plant Professional
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Meet Nick: Your Plant Expert
              </h2>
              
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  As the founder and head horticulturalist of Atlanta Houseplants, Nick brings over 15 years 
                  of professional experience and University of Georgia horticultural training to every project.
                </p>
                <p>
                  His State of Georgia Plant Professional certification and data-driven approach to workplace 
                  plant integration ensures that every installation not only looks beautiful but thrives long-term.
                </p>
                <p>
                  Nick's expertise spans commercial plant design, biophilic workspace optimization, and 
                  comprehensive plant care management, making him Atlanta's go-to expert for businesses 
                  serious about creating healthier work environments.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">UGA</div>
                  <div className="text-sm text-muted-foreground">Horticulture Degree</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">State</div>
                  <div className="text-sm text-muted-foreground">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Values & Approach
            </h2>
            <p className="text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed">
              Everything we do is guided by our commitment to excellence, sustainability, and genuine care for your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-2xl border border-border">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Expert Care</h3>
              <p className="text-gray-700">
                Every plant receives professional attention from our certified horticulturalist. 
                We guarantee plant health with scientific care protocols and regular maintenance.
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl border border-border">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Business Focus</h3>
              <p className="text-gray-700">
                We understand the unique needs of Atlanta businesses. Our services are designed 
                to enhance your workspace while requiring zero involvement from your team.
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl border border-border">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Local Partnership</h3>
              <p className="text-gray-700">
                As an Atlanta-based company, we're invested in our community's success. 
                We build lasting relationships with our clients and support local business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Serving the Greater Atlanta Metro Area
            </h2>
            <p className="text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed">
              Professional plant services delivered throughout Atlanta's business districts and surrounding communities.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Buckhead", "Midtown Atlanta", "Downtown Atlanta", "Alpharetta",
              "Sandy Springs", "Marietta", "Roswell", "Dunwoody",
              "Brookhaven", "Decatur", "Smyrna", "Johns Creek"
            ].map((area) => (
              <div key={area} className="bg-card p-4 rounded-lg border border-border text-center">
                <span className="font-medium text-foreground">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Resources Section */}
      <InlineLeadCapture 
        variant="full-grid"
        title="Professional Business Resources"
        subtitle="Access the same strategic tools and assessments used by 500+ Atlanta businesses to plan and implement successful office plant programs."
        className="py-20"
      />

      {/* Call to Action */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Workspace?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Join 500+ Atlanta businesses who trust us to create healthier, more productive work environments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.location.href = '/office-plants'}
              className="bg-white text-green-700 hover:bg-green-50 text-lg px-8 py-4"
            >
              Schedule Office Plant Assessment
            </Button>
            <Button 
              size="lg"
              onClick={() => window.location.href = '/corporate'}
              className="border-2 border-white text-white hover:bg-white hover:text-green-700 text-lg px-8 py-4"
              variant="outline"
            >
              Explore Corporate Gifting
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-sm opacity-75">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              100% Plant Health Guarantee
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Professional Installation
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Ongoing Care Management
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;