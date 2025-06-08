
const PlantGallery = () => {
  const plants = [
    {
      image: "/lovable-uploads/e1930419-ea64-46bc-b42a-ed13b1f43ab1.png",
      title: "Monstera Deliciosa",
      description: "Perfect for adding dramatic flair to any office space",
      setting: "Office Corner Display"
    },
    {
      image: "/lovable-uploads/d5e71052-5399-473b-9c63-f6157490d96d.png",
      title: "Money Tree",
      description: "Symbol of prosperity, ideal for reception areas",
      setting: "Lobby Installation"
    },
    {
      image: "/lovable-uploads/4c82f760-9f02-4961-9064-4e01de1e97c2.png",
      title: "Ficus Tree",
      description: "Elegant and air-purifying, great for meeting rooms",
      setting: "Conference Room"
    },
    {
      image: "/lovable-uploads/6ce5cacc-3f1d-46f2-93e8-2c25414367dd.png",
      title: "Croton",
      description: "Vibrant colors that brighten any workspace",
      setting: "Executive Office"
    },
    {
      image: "/lovable-uploads/dc14cd41-8f92-4445-9d6e-c544d6c7d548.png",
      title: "Mixed Plant Arrangement",
      description: "Custom combinations for unique spaces",
      setting: "Open Office Area"
    },
    {
      image: "/lovable-uploads/b669889e-a33c-4de1-a5c3-4dd4eb0cf786.png",
      title: "Window Garden",
      description: "Multiple plants creating a natural wall feature",
      setting: "Executive Suite"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Plant Installations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we transform Atlanta office spaces with beautiful, healthy plants that create 
            inspiring work environments.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-w-4 aspect-h-5">
                <img
                  src={plant.image}
                  alt={plant.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm font-medium text-green-300 mb-1">{plant.setting}</div>
                  <h3 className="text-xl font-bold mb-2">{plant.title}</h3>
                  <p className="text-sm opacity-90">{plant.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantGallery;
