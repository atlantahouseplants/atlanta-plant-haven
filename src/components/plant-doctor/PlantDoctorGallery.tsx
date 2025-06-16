
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
              src: "/lovable-uploads/c3ee3638-8644-45e6-84ea-1e5b14729894.png",
              title: "Office Plant Health Check",
              description: "Comprehensive plant assessment and treatment"
            },
            {
              src: "/lovable-uploads/8c5ed3a9-b558-49b8-b17a-bb0cb35c3af7.png", 
              title: "Professional Repotting",
              description: "Expert repotting with proper soil and care"
            },
            {
              src: "/lovable-uploads/6af17da1-48bd-4128-9ec9-22df7aebc7eb.png",
              title: "Plant Problem Diagnosis",
              description: "Identifying and treating plant health issues"
            },
            {
              src: "/lovable-uploads/23e1d9b7-3cb4-4ddf-babe-3263f443aeaf.png",
              title: "Root Health Analysis", 
              description: "Detailed examination of root systems"
            },
            {
              src: "/lovable-uploads/4355b0a9-2fd8-44cd-b9f9-2901fc3ba442.png",
              title: "Plant Care Education",
              description: "Teaching proper plant care techniques"
            },
            {
              src: "/lovable-uploads/b5845403-04cf-4ea1-8d82-89020044c1bd.png",
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
