import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GoogleReviews from "@/components/GoogleReviews";
import { Button } from "@/components/ui/button";
import { useForm } from "@/components/forms/FormContext";

const OurWork = () => {
  const { openForm } = useForm();

  const portfolioProjects = [
    {
      image: "/images/corporate-offices/bird-of-paradise-atlanta-skyline.png",
      client: "Atlanta Real Estate Corporate Office",
      description: "Strategic reception area enhancement utilizing premium biophilic design principles. Bird of Paradise installations create commanding first impressions while supporting air quality improvement and stress reduction for high-traffic areas.",
      testimonial: "The professionalism and expertise are unmatched. Our lobby is now a true showpiece that reinforces our brand values with every client visit."
    },
    {
      image: "/images/outdoor-commercial/seasonal-entrance-planters.png",
      client: "Construction Management Firm",
      description: "Commercial exterior enhancement with custom planter systems designed for year-round visual impact. Seasonal color rotation maintains consistent brand presentation while creating positive psychological effects for employees and visitors.",
      testimonial: "Employee satisfaction scores increased measurably since installation. The welcoming exterior environment has become a significant recruitment advantage."
    },
    {
      image: "/images/corporate-offices/large-lobby-floor-plants.png",
      client: "Hospitality Industry Corporate Center",
      description: "Multi-floor biophilic integration featuring strategic plant placement for maximum air purification and productivity enhancement. Premium Bird of Paradise and fiddle leaf fig installations serve as natural focal points while improving workplace wellness metrics.",
      testimonial: "A comprehensive solution that delivered measurable improvements in employee retention and client satisfaction. The completely hands-off service model allows us to focus on our core business."
    },
    {
      image: "/images/corporate-offices/modern-office-floor-plant.png",
      client: "Architecture & Design Studio",
      description: "Contemporary workspace optimization through strategic statement plant placement. Design-forward installations enhance creative environments while supporting employee wellness and reinforcing the firm's innovative brand positioning.",
      testimonial: "The thoughtfully curated plant displays have become conversation starters with clients and significantly enhanced our professional image. The seasonal rotation keeps our space feeling fresh and current."
    },
    {
      image: "/images/corporate-offices/blue-cubicle-planters.png",
      client: "Investment Management Firm",
      description: "Industrial workspace humanization through strategic biophilic design intervention. Custom blue planters complement existing décor while introducing natural elements that reduce stress and enhance focus in high-intensity work environments.",
      testimonial: "Completely transformed our sterile corporate environment into a space that attracts talent and improves retention. Employee feedback has been overwhelmingly positive about the atmosphere change."
    },
    {
      image: "/images/arrangements-decorative/desktop-succulent-arrangement.png",
      client: "Atlanta Tech Company",
      description: "Individual workstation enhancement program featuring carefully selected low-maintenance succulents. Personal plant installations improve individual focus and job satisfaction while maintaining consistent aesthetic standards across the open office environment.",
      testimonial: "Quantifiable improvements in team productivity and employee satisfaction scores. The personal plant program has become a valued benefit that differentiates our workplace culture."
    },
    {
      image: "/images/arrangements-decorative/mixed-bowl-planter-colorful.png",
      client: "Executive Law Firm",
      description: "Executive-level plant curation featuring diverse, sophisticated arrangements that reinforce professional credibility. Strategic species selection ensures year-round visual impact while supporting air quality goals in client-facing spaces.",
      testimonial: "Client feedback consistently highlights our office environment as a differentiating factor in competitive presentations. The investment has enhanced our brand perception significantly."
    },
    {
      image: "/images/service-maintenance/plant-doctor-office-service.png",
      client: "Financial Services Reception",
      description: "Full-service plant care program ensuring optimal health and appearance of workplace investments. Professional maintenance protocols guarantee consistent visual standards while eliminating administrative burden on internal teams.",
      testimonial: "Strikes the perfect balance between professionalism and warmth that aligns with our brand values. The reliability of service means one less operational concern for our management team."
    },
    {
      image: "/images/corporate-offices/croton-plant-city-view.png",
      client: "Atlanta Executive Tower",
      description: "Executive space enhancement leveraging natural light and skyline views through strategic croton placement. Premium plant selection complements architectural features while creating an inspiring environment for high-level decision making.",
      testimonial: "Our executive meeting space has become the most requested conference room in the building. The plant integration creates an environment that facilitates better meetings and client relationships."
    },
    {
      image: "/images/corporate-offices/multi-plant-office-arrangement.png",
      client: "Corporate Banking Headquarters",
      description: "Strategic multi-species installation designed for functional space division and enhanced air quality. Natural privacy screens improve acoustic comfort while comprehensive air purification supports employee health and cognitive performance.",
      testimonial: "Measurable improvements in indoor air quality metrics and employee wellness scores. The natural space division has improved both privacy and collaboration in our open office design."
    },
    {
      image: "/images/outdoor-commercial/luxury-artisan-entrance-planters.png",
      client: "Luxury Resort Corporate Entrance",
      description: "Luxury hospitality entrance design featuring custom artisan planters with rotating seasonal displays. Premium plant curation reinforces brand positioning while creating memorable first impressions that support customer experience strategies.",
      testimonial: "Guest feedback consistently highlights our entrance design as reinforcing their perception of our luxury brand standards. The seasonal rotation ensures year-round visual impact and return visitor engagement."
    },
    {
      image: "/images/outdoor-commercial/sculptural-topiary-outdoor.png",
      client: "Modern Corporate Campus",
      description: "Executive outdoor space optimization through sculptural topiary installations and coordinated seasonal programming. Artistic plant elements create distinctive environments for outdoor meetings while supporting employee wellness and client entertainment.",
      testimonial: "Quantifiable improvements in both employee retention and client satisfaction metrics since implementing the outdoor meeting spaces. The distinctive design has become a competitive advantage for client relationships."
    },
    {
      image: "/images/service-maintenance/professional-plant-maintenance.png",
      client: "Downtown Professional Services",
      description: "Comprehensive plant care service program ensuring consistent ROI on workplace plant investments. Proactive maintenance protocols and health monitoring systems guarantee optimal appearance and longevity while eliminating internal management requirements.",
      testimonial: "The proactive maintenance model provides complete peace of mind regarding our plant investments. Professional care ensures consistent visual standards without any burden on our internal operations."
    },
    {
      image: "/images/outdoor-commercial/executive-outdoor-terrace.png",
      client: "Executive Outdoor Workspace",
      description: "Corporate terrace transformation through premium plant curation designed for client entertainment and outdoor meeting functionality. Weather-appropriate species selection ensures year-round usability while creating distinctive environments that enhance business relationships.",
      testimonial: "The outdoor installations have revolutionized our client entertainment capabilities. Outdoor meetings have become a competitive differentiator that clients specifically request and remember."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-muted via-background to-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              Strategic Workplace
            </span>
            <span className="block text-foreground">Transformations</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-700 max-w-4xl mx-auto leading-relaxed font-semibold">
            Proven results from 500+ Atlanta businesses who have enhanced their workplace culture, productivity, and brand image through strategic plant integration.
          </p>
          
          {/* Key Results Preview */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">500+</div>
              <div className="text-gray-600 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-gray-600 text-sm">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">5+ Years</div>
              <div className="text-gray-600 text-sm">Zero Failures</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">15%</div>
              <div className="text-gray-600 text-sm">Avg. Productivity Gain</div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Measurable Business Impact Across Industries
          </h2>
          <p className="text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed mb-12">
            From Fortune 500 headquarters to innovative startups, our strategic plant integration delivers quantifiable improvements in workplace performance and culture.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">15%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Average Productivity Increase</div>
              <div className="text-gray-600">Measured across 200+ office installations</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">37%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Stress Reduction</div>
              <div className="text-gray-600">Employee wellness survey improvements</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">92%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Client Satisfaction Improvement</div>
              <div className="text-gray-600">Enhanced first impressions and brand perception</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Strategic Project Portfolio
            </h2>
            <p className="text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed">
              Explore how strategic plant integration has transformed workplace culture, enhanced productivity, and strengthened brand positioning across diverse Atlanta businesses.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50/50 rounded-3xl shadow-2xl hover:shadow-green-500/10 overflow-hidden border-0 transform hover:scale-[1.01] hover:-translate-y-2 transition-all duration-500">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image}
                    alt={`${project.client} plant installation by Atlanta Houseplants`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-10 relative">
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 via-transparent to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-b-3xl"></div>
                  <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {project.client}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <blockquote className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-green-500 shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                    <p className="text-foreground italic mb-2 text-lg leading-relaxed">"{project.testimonial}"</p>
                  </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Workplace?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join 500+ Atlanta businesses who have enhanced their workplace culture and productivity through strategic plant integration. Schedule your complimentary consultation to discover your transformation potential.
          </p>
          
          <Button 
            size="lg"
            onClick={() => openForm('business-quote')}
            className="bg-white text-green-600 hover:bg-gray-100 text-2xl px-12 py-6 mb-6 shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 font-bold tracking-wide rounded-xl"
          >
            <span className="flex items-center">
              Begin Your Workspace Transformation
              <svg className="ml-4 h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Button>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-75">
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Complimentary Assessment
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Strategic Implementation Plan
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Guaranteed Results
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <GoogleReviews />

      <Footer />
    </div>
  );
};

export default OurWork;