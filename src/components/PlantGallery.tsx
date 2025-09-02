const PlantGallery = () => {
  const installations = [
    {
      image: "/images/corporate-offices/bird-of-paradise-atlanta-skyline.png",
      title: "Executive Atlanta Skyline Office",
      description: "Premium Bird of Paradise installation with Atlanta city view backdrop",
      setting: "C-Suite Executive Office",
      projectValue: "$8,500",
      plantsCount: "12 premium plants"
    },
    {
      image: "/images/corporate-offices/croton-plant-city-view.png",
      title: "Premium Corporate Transformation",
      description: "Executive-level Croton installation reinforcing professional brand image",
      setting: "Corporate Headquarters",
      projectValue: "$6,400",
      plantsCount: "18 plants"
    },
    {
      image: "/images/corporate-offices/large-lobby-floor-plants.png",
      title: "Luxury Lobby Enhancement",
      description: "Large-scale floor plant installation creating impressive first impressions",
      setting: "Corporate Lobby",
      projectValue: "$12,000",
      plantsCount: "25 plants"
    },
    {
      image: "/images/branding-assets/nick-plant-doctor-portrait-circular.png",
      title: "Plant Doctor in Action",
      description: "Nick providing professional plant care in high-rise office",
      setting: "Corporate High-Rise",
      projectValue: "Care Service",
      plantsCount: "Professional care"
    },
    {
      image: "/images/service-maintenance/expert-plant-maintenance-assessment.png",
      title: "Expert Plant Maintenance",
      description: "Comprehensive plant health assessment and care",
      setting: "Office Environment",
      projectValue: "Plant Doctor Visit",
      plantsCount: "Health assessment"
    },
    {
      image: "/images/outdoor-commercial/patio-planters-flowers-shrubs.png",
      title: "Custom Color Planters",
      description: "Handmade seasonal outdoor planters for business patios",
      setting: "Business Patio",
      projectValue: "$1,800",
      plantsCount: "4 planters"
    },
    {
      image: "/images/outdoor-commercial/yellow-planter-commercial-storefront.png",
      title: "Vibrant Office Entrance",
      description: "Bright color planter creating stunning first impressions",
      setting: "Office Building Entrance",
      projectValue: "$2,100",
      plantsCount: "Custom design"
    },
    {
      image: "/images/outdoor-commercial/restaurant-patio-mixed-planters-dining.png",
      title: "Restaurant Outdoor Design",
      description: "Mixed planters enhancing dining atmosphere",
      setting: "Restaurant Patio",
      projectValue: "$3,200",
      plantsCount: "6 planters"
    },
    {
      image: "/images/service-maintenance/professional-planter-installation-nick.png",
      title: "Professional Planter Installation",
      description: "Nick installing custom seasonal color planters",
      setting: "Commercial Property",
      projectValue: "Installation Service",
      plantsCount: "Planter design"
    },
    {
      image: "/images/arrangements-decorative/elegant-ceramic-bowl-seasonal-arrangement.png",
      title: "Elegant Seasonal Bowls",
      description: "Custom ceramic bowl arrangements with festive touches",
      setting: "Corporate Entrance",
      projectValue: "$1,400",
      plantsCount: "3 bowls"
    },
    {
      image: "/images/outdoor-commercial/colorful-balcony-display-seasonal-blooms.png",
      title: "Colorful Balcony Display",
      description: "Vibrant seasonal blooms for outdoor spaces",
      setting: "High-rise Balcony",
      projectValue: "$950",
      plantsCount: "Planter box"
    },
    {
      image: "/images/outdoor-commercial/rooftop-garden-design-mixed-seasonal.png",
      title: "Rooftop Garden Design",
      description: "Mixed seasonal arrangements for rooftop spaces",
      setting: "Apartment Balcony",
      projectValue: "$750",
      plantsCount: "Container garden"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Plant Transformations & Professional Service
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our certified plant doctor Nick has transformed Atlanta spaces with professional 
            plant design, custom color planters, and guaranteed maintenance.
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
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready for Your Plant Transformation?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get your FREE office plant design consultation or book a Plant Doctor visit. Our certified plant doctor will create a custom plan 
            for your space with guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get FREE Design Consultation
            </button>
            <a 
              href="https://api.leadconnectorhq.com/widget/bookings/plantdoctorservice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Book Plant Doctor Visit - $149
              </button>
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            ✓ Free consultation • ✓ Professional installation • ✓ 100% plant guarantee on maintained plants
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlantGallery;
