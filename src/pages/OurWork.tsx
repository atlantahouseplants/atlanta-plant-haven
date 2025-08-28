import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useForm } from "@/components/forms/FormContext";

const OurWork = () => {
  const { openForm } = useForm();

  const portfolioProjects = [
    {
      image: "/lovable-uploads/4b18516d-7bc4-4140-aa45-ac98dc21e101.png",
      client: "OneStreet Residential Headquarters",
      description: "Executive reception area transformation with premium biophilic design elements featuring dramatic Bird of Paradise installations.",
      testimonial: "The professionalism and expertise are unmatched. Our lobby is now a true showpiece."
    },
    {
      image: "/lovable-uploads/91809c55-8571-46c3-b671-b411d93dbe4e.png",
      client: "Archer Western Atlanta Office",
      description: "Commercial outdoor installation featuring custom planters with seasonal color arrangements for enhanced curb appeal.",
      testimonial: "Employee satisfaction scores increased 23% since the installation."
    },
    {
      image: "/lovable-uploads/418cda1f-5e4a-4a96-9b30-5650e06e8b97.png",
      client: "Marriott Corporate Center",
      description: "Large-scale plant installation across multiple floors and common areas.",
      testimonial: "A turnkey solution that delivers real value with completely hands-off service."
    },
    {
      image: "/lovable-uploads/c864df96-c7e3-4667-bfe2-e2ebaad928d8.png",
      client: "Perkins and Will Design Studio",
      description: "Seasonal plant rotation program to maintain year-round visual impact.",
      testimonial: "The seasonal displays create such a welcoming atmosphere for our clients."
    },
    {
      image: "/lovable-uploads/b0543742-bb86-45d7-a641-7ccd52b9be1f.png",
      client: "Loria Ansley Corporate Office",
      description: "Industrial office space softened with strategic plant placement and maintenance.",
      testimonial: "Transformed our sterile environment into a space employees actually enjoy."
    },
    {
      image: "/lovable-uploads/5a7b84a7-c04d-4727-b584-8b433bc5255a.png",
      client: "Tech Startup Campus",
      description: "Modern workspace design featuring living walls and desktop plant programs.",
      testimonial: "Our team productivity and morale have never been higher."
    },
    {
      image: "/lovable-uploads/4b18516d-7bc4-4140-aa45-ac98dc21e101.png",
      client: "Law Firm Conference Center",
      description: "Professional plant arrangements designed to impress clients and staff.",
      testimonial: "Clients consistently compliment our office environment during meetings."
    },
    {
      image: "/lovable-uploads/86c2026a-d63a-4bb9-b7b9-473883d52fc7.png",
      client: "Financial Services Reception",
      description: "Elegant plant design emphasizing trust and stability through natural elements.",
      testimonial: "The perfect balance of professionalism and warmth for our brand image."
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