import { MapPin } from "lucide-react";

const ServiceAreaMap = () => {
  const serviceAreas = [
    {
      region: "Central Atlanta",
      neighborhoods: ["Midtown", "Downtown", "Grant Park", "Inman Park", "Little Five Points", "Cabbagetown", "Old Fourth Ward", "Edgewood"]
    },
    {
      region: "North Atlanta", 
      neighborhoods: ["Buckhead", "Virginia-Highland", "Morningside", "Ansley Park", "Brookhaven", "Sandy Springs", "Dunwoody", "Chamblee"]
    },
    {
      region: "East Atlanta",
      neighborhoods: ["Decatur", "Avondale Estates", "East Atlanta Village", "Kirkwood", "Candler Park", "Druid Hills", "Stone Mountain", "Tucker"]
    },
    {
      region: "West Atlanta",
      neighborhoods: ["West Midtown", "Home Park", "Marietta", "Smyrna", "Vinings", "Westside", "Riverside", "Underwood Hills"]
    }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            <MapPin className="inline-block h-8 w-8 mr-3 text-green-600" />
            Our Atlanta Metro Service Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We proudly serve businesses and plant parents throughout the Atlanta metropolitan area with same-week appointments and professional plant care services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {serviceAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-green-600 mb-4 text-center">
                {area.region}
              </h3>
              <ul className="space-y-2">
                {area.neighborhoods.map((neighborhood, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                    {neighborhood}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Don't See Your Area Listed?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            We travel throughout the greater Atlanta metropolitan area! Contact us to confirm service availability in your specific location.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:470-664-4039"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Call to Check Your Area: 470-664-4039
            </a>
            <a 
              href="mailto:ana@atlantahouseplants.com"
              className="inline-flex items-center justify-center border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Email for Service Inquiry
            </a>
          </div>
        </div>

        {/* Additional neighborhoods for SEO */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <strong>Additional Areas We Serve:</strong> Alpharetta, Roswell, Johns Creek, Norcross, Peachtree City, East Point, College Park, Forest Park, Hapeville, Jonesboro, Morrow, Riverdale, Union City, Fairburn, Palmetto, Austell, Powder Springs, Kennesaw, Acworth, Woodstock, Canton, Ball Ground, Cumming, Duluth, Lawrenceville, Snellville, Lilburn, Norcross, Doraville, and surrounding communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;