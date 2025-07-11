
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const GalleryPreview = () => {
  const featuredProjects = [
    {
      image: "/lovable-uploads/e1930419-ea64-46bc-b42a-ed13b1f43ab1.png",
      title: "Corporate Office Design",
      description: "Monstera installation enhancing productivity",
      category: "Office Plants"
    },
    {
      image: "/lovable-uploads/f816d29c-4694-4186-8770-9e16ab935892.png",
      title: "Custom Color Planters",
      description: "Seasonal outdoor planters for business patio",
      category: "Color Planters"
    },
    {
      image: "/lovable-uploads/9a6a89cb-90a7-48df-a670-52cf61f223ea.png",
      title: "Plant Doctor in Action",
      description: "Professional plant care service",
      category: "Plant Doctor"
    },
    {
      image: "/lovable-uploads/6ff8c577-b398-4b80-990c-e948788ec260.png",
      title: "Elegant Seasonal Bowls",
      description: "Custom ceramic bowl arrangements",
      category: "Color Bowls"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Plant Transformations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've transformed Atlanta spaces with professional plant design and care.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <div className="aspect-w-4 aspect-h-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4">
                <div className="text-sm text-green-600 font-medium mb-1">{project.category}</div>
                <h3 className="font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center">
          <Link to="/office-plants">
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              View All Transformations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
