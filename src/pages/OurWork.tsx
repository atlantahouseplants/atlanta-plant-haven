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
      description: "Executive reception area transformation with premium biophilic design elements featuring dramatic Bird of Paradise installations.",
      testimonial: "The professionalism and expertise are unmatched. Our lobby is now a true showpiece."
    },
    {
      image: "/images/outdoor-commercial/seasonal-entrance-planters.png",
      client: "Construction Management Firm",
      description: "Commercial outdoor installation featuring custom planters with seasonal color arrangements for enhanced curb appeal.",
      testimonial: "Employee satisfaction has noticeably improved since the installation."
    },
    {
      image: "/images/corporate-offices/large-lobby-floor-plants.png",
      client: "Hospitality Industry Corporate Center",
      description: "Large-scale plant installation across multiple floors with elegant lobby planters featuring Bird of Paradise and fiddle leaf figs.",
      testimonial: "A turnkey solution that delivers real value with completely hands-off service."
    },
    {
      image: "/images/corporate-offices/modern-office-floor-plant.png",
      client: "Architecture & Design Studio",
      description: "Modern office space enhanced with statement floor plants creating a sophisticated, professional atmosphere.",
      testimonial: "The seasonal displays create such a welcoming atmosphere for our clients."
    },
    {
      image: "/images/corporate-offices/blue-cubicle-planters.png",
      client: "Investment Management Firm",
      description: "Industrial office space softened with strategic plant placement and maintenance, featuring custom blue planters.",
      testimonial: "Transformed our sterile environment into a space employees actually enjoy."
    },
    {
      image: "/images/arrangements-decorative/desktop-succulent-arrangement.png",
      client: "Atlanta Tech Company",
      description: "Modern workspace design featuring desktop plant programs with low-maintenance succulents for individual workstations.",
      testimonial: "Our team productivity and morale have never been higher."
    },
    {
      image: "/images/arrangements-decorative/mixed-bowl-planter-colorful.png",
      client: "Executive Law Firm",
      description: "Professional mixed plant arrangements designed to impress clients with sophisticated planters and diverse foliage.",
      testimonial: "Clients consistently compliment our office environment during meetings."
    },
    {
      image: "/images/service-maintenance/plant-doctor-office-service.png",
      client: "Financial Services Reception",
      description: "Comprehensive office plant care service featuring professional maintenance and diverse plant arrangements.",
      testimonial: "The perfect balance of professionalism and warmth for our brand image."
    },
    {
      image: "/images/corporate-offices/croton-plant-city-view.png",
      client: "Atlanta Executive Tower",
      description: "High-rise office transformation featuring premium croton plants with stunning Atlanta skyline backdrop.",
      testimonial: "Our corner office has become the most sought-after meeting space in the building."
    },
    {
      image: "/images/corporate-offices/multi-plant-office-arrangement.png",
      client: "Corporate Banking Headquarters",
      description: "Sophisticated multi-plant installation creating natural privacy screens and air purification zones.",
      testimonial: "The air quality improvement has been remarkable and our staff loves the atmosphere."
    },
    {
      image: "/images/outdoor-commercial/luxury-artisan-entrance-planters.png",
      client: "Luxury Resort Corporate Entrance",
      description: "Custom artisan planters featuring vibrant seasonal arrangements for high-end hospitality branding.",
      testimonial: "Guests consistently mention our entrance as their first impression of luxury and quality."
    },
    {
      image: "/images/outdoor-commercial/sculptural-topiary-outdoor.png",
      client: "Modern Corporate Campus",
      description: "Sculptural topiary installations with coordinated seasonal color programs for executive outdoor spaces.",
      testimonial: "The outdoor meeting areas have increased our employee retention and client satisfaction scores."
    },
    {
      image: "/images/service-maintenance/professional-plant-maintenance.png",
      client: "Downtown Professional Services",
      description: "Hands-on plant care service ensuring optimal health and appearance of corporate plant investments.",
      testimonial: "Their proactive maintenance approach means we never worry about plant health or appearance."
    },
    {
      image: "/images/outdoor-commercial/executive-outdoor-terrace.png",
      client: "Executive Outdoor Workspace",
      description: "Premium outdoor plant arrangements designed for corporate terraces and client entertainment areas.",
      testimonial: "These installations have transformed our outdoor meetings into memorable client experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-muted via-background to-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transforming Atlanta's most prestigious workspaces with expert plant design and care
          </p>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Client Reviews Section */}
      <GoogleReviews />

      {/* Floating CTA - Sticky Button */}
      <div className="fixed bottom-8 right-8 z-50 group">
        <Button 
          onClick={() => openForm('business-quote')}
          size="lg"
          className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-2xl hover:shadow-green-500/30 px-8 py-4 transform hover:scale-110 transition-all duration-300 font-bold rounded-xl border border-green-500/20"
        >
          <span className="flex items-center">
            Book My Free Audit
            <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default OurWork;