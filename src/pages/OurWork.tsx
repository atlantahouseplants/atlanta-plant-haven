import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useForm } from "@/components/forms/FormContext";

const OurWork = () => {
  const { openForm } = useForm();

  const portfolioProjects = [
    {
      image: "/lovable-uploads/24794cd6-d871-433d-8ce5-1b5d61120d74.png",
      client: "Roark Capital Headquarters",
      description: "Executive reception area transformation with premium biophilic design elements.",
      testimonial: "The professionalism and expertise are unmatched. Our lobby is now a true showpiece."
    },
    {
      image: "/lovable-uploads/f3967d27-f426-48b4-af6c-5b4f0e316b29.png",
      client: "CohnReznick Atlanta Office",
      description: "Complete office plant ecosystem design for enhanced productivity and air quality.",
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
      client: "Jencap Insurance Services",
      description: "Seasonal plant rotation program to maintain year-round visual impact.",
      testimonial: "The seasonal displays create such a welcoming atmosphere for our clients."
    },
    {
      image: "/lovable-uploads/b0543742-bb86-45d7-a641-7ccd52b9be1f.png",
      client: "PBS Aerospace Facility",
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
              <div key={index} className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image}
                    alt={`${project.client} plant installation by Atlanta Houseplants`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {project.client}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <blockquote className="bg-muted p-6 rounded-xl border-l-4 border-green-500">
                    <p className="text-foreground italic mb-2">"{project.testimonial}"</p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating CTA - Sticky Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button 
          onClick={() => openForm('business-quote')}
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white shadow-2xl px-6 py-4"
        >
          Book My Free Audit
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default OurWork;