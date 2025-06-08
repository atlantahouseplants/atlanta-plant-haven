
const PlantGallery = () => {
  const installations = [
    {
      image: "/lovable-uploads/e1930419-ea64-46bc-b42a-ed13b1f43ab1.png",
      title: "Corporate Office Design",
      description: "Monstera installation enhancing productivity and air quality",
      setting: "Executive Office Suite",
      projectValue: "$5,200",
      plantsCount: "15 plants"
    },
    {
      image: "/lovable-uploads/d5e71052-5399-473b-9c63-f6157490d96d.png",
      title: "Reception Area Centerpiece",
      description: "Money Tree creating welcoming first impressions",
      setting: "Corporate Lobby",
      projectValue: "$3,800",
      plantsCount: "8 plants"
    },
    {
      image: "/lovable-uploads/4c82f760-9f02-4961-9064-4e01de1e97c2.png",
      title: "Conference Room Elegance",
      description: "Ficus trees improving meeting room atmosphere",
      setting: "Conference Room",
      projectValue: "$2,400",
      plantsCount: "6 plants"
    },
    {
      image: "/lovable-uploads/6ce5cacc-3f1d-46f2-93e8-2c25414367dd.png",
      title: "Colorful Workspace Enhancement",
      description: "Vibrant Croton bringing energy to work areas",
      setting: "Open Office Space",
      projectValue: "$4,100",
      plantsCount: "12 plants"
    },
    {
      image: "/lovable-uploads/dc14cd41-8f92-4445-9d6e-c544d6c7d548.png",
      title: "Custom Plant Arrangement",
      description: "Mixed plant display for unique corporate spaces",
      setting: "Executive Waiting Area",
      projectValue: "$6,500",
      plantsCount: "20 plants"
    },
    {
      image: "/lovable-uploads/b669889e-a33c-4de1-a5c3-4dd4eb0cf786.png",
      title: "Living Wall Installation",
      description: "Multiple plants creating stunning natural feature",
      setting: "Corporate Headquarters",
      projectValue: "$8,900",
      plantsCount: "35 plants"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Office Plant Transformations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our certified plant doctor has transformed Atlanta office spaces with professional 
            plant design, installation, and guaranteed maintenance.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {installations.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <div className="aspect-w-4 aspect-h-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Overlay with project details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm font-medium text-green-300 mb-1">{project.setting}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90 mb-3">{project.description}</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="bg-green-600 px-2 py-1 rounded">{project.plantsCount}</span>
                    <span className="bg-blue-600 px-2 py-1 rounded">Project: {project.projectValue}</span>
                  </div>
                </div>
              </div>

              {/* Static project info */}
              <div className="p-4">
                <div className="text-sm text-green-600 font-medium">{project.setting}</div>
                <h3 className="font-bold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex justify-between items-center mt-2 text-xs">
                  <span className="text-green-700 font-medium">{project.plantsCount}</span>
                  <span className="text-blue-700 font-medium">{project.projectValue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-green-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready for Your Office Plant Transformation?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get your FREE office plant design consultation. Our certified plant doctor will create a custom plan 
            for your space with guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get FREE Design Consultation
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Services
            </button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            ✓ Free consultation • ✓ Professional installation • ✓ 100% plant guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlantGallery;
