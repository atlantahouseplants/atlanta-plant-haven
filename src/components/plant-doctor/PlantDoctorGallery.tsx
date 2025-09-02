
const PlantDoctorGallery = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nick in Action: Real Plant Rescues
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              src: "/images/service-maintenance/nick-office-plant-health-check-assessment.png",
              title: "Office Plant Health Check",
              description: "Comprehensive plant assessment and treatment"
            },
            {
              src: "/images/service-maintenance/nick-professional-repotting-expert-soil-care.png", 
              title: "Professional Repotting",
              description: "Expert repotting with proper soil and care"
            },
            {
              src: "/images/service-maintenance/nick-plant-problem-diagnosis-treatment.png",
              title: "Plant Problem Diagnosis",
              description: "Identifying and treating plant health issues"
            },
            {
              src: "/images/service-maintenance/plant-repotting-root-system-care.png",
              title: "Root Health Analysis", 
              description: "Detailed examination of root systems"
            },
            {
              src: "/images/service-maintenance/nick-plant-care-education-teaching.png",
              title: "Plant Care Education",
              description: "Teaching proper plant care techniques"
            },
            {
              src: "/images/service-maintenance/nick-follow-up-care-plant-thriving.png"
              title: "Follow-up Care",
              description: "Ensuring plants continue to thrive"
            }
          ].map((item, index) => (
            <div key={index} className="space-y-4">
              <img 
                src={item.src}
                alt={item.title}
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantDoctorGallery;
