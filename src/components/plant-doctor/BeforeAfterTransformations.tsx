
import { Button } from "@/components/ui/button";
import { Stethoscope, Heart, CheckCircle } from "lucide-react";

interface BeforeAfterTransformationsProps {
  onBookingClick: () => void;
}

const BeforeAfterTransformations = ({ onBookingClick }: BeforeAfterTransformationsProps) => {
  const transformations = [
    {
      beforeImage: "/lovable-uploads/fc5fc2c0-d97a-49cf-93a7-c0893643e76d.png",
      beforeAlt: "Monstera plant before treatment - showing mealybug infestation with white powdery substance",
      beforeTitle: "Severe Mealybug Infestation",
      beforeDescription: "This Monstera was severely infested with mealybugs, showing white cottony masses throughout the leaves",
      afterImage: "/lovable-uploads/d672b585-049a-4105-8673-8b69bd60e0aa.png",
      afterAlt: "Monstera plant after treatment - healthy and vibrant with lush green foliage",
      afterTitle: "Completely Pest-Free & Thriving",
      afterDescription: "After Nick's treatment, the Monstera shows vibrant, healthy foliage with no signs of pest damage",
      problemDiagnosed: "Severe mealybug infestation with white cottony masses covering multiple leaves",
      treatmentApplied: "Professional pest removal, systemic treatment, thorough leaf cleaning, and soil treatment",
      resultAchieved: "Complete pest elimination with preventive care plan to maintain plant health"
    },
    {
      beforeImage: "/lovable-uploads/5090e472-45e2-4dc2-b388-6cbf2f73ab20.png",
      beforeAlt: "Monstera plant before treatment - showing damaged and yellowing leaves",
      beforeTitle: "Severely Damaged Plant",
      beforeDescription: "This Monstera was struggling with multiple issues including yellowing leaves and poor structural support",
      afterImage: "/lovable-uploads/0cd7e1d1-f0c2-4b95-8bb0-b76188510016.png",
      afterAlt: "Monstera plant after treatment - healthy and well-structured",
      afterTitle: "Fully Restored & Thriving",
      afterDescription: "After Nick's expert care, the plant shows vibrant green foliage and proper structural support",
      problemDiagnosed: "Multiple leaf damage, poor soil conditions, and inadequate structural support",
      treatmentApplied: "Professional repotting, soil amendment, pruning, and proper support system installation",
      resultAchieved: "Complete structural recovery with healthy new growth and proper care plan"
    },
    {
      beforeImage: "/lovable-uploads/bc3f5f45-3dba-4329-a207-3bea64600ef6.png",
      beforeAlt: "Rubber plant before treatment - showing sparse growth and poor condition",
      beforeTitle: "Struggling Rubber Plant",
      beforeDescription: "This rubber plant was showing poor growth with sparse foliage and weak structure",
      afterImage: "/lovable-uploads/e87cc43c-6531-4cd6-99c5-7f957c7cb232.png",
      afterAlt: "Rubber plants after treatment - showing lush, healthy growth",
      afterTitle: "Lush & Thriving Growth",
      afterDescription: "After Nick's treatment, the rubber plants show dense, healthy foliage and strong growth patterns",
      problemDiagnosed: "Poor soil nutrition, inadequate lighting conditions, and improper watering schedule",
      treatmentApplied: "Soil enrichment, optimal placement guidance, proper watering schedule, and growth enhancement",
      resultAchieved: "Dramatic improvement in growth density and overall plant health with sustained vitality"
    },
    {
      beforeImage: "/lovable-uploads/0ee768e7-a10f-4219-a860-91c34c9c9260.png",
      beforeAlt: "Prayer plant before treatment - showing damaged and browning leaves",
      beforeTitle: "Severely Damaged Prayer Plant",
      beforeDescription: "This prayer plant showed extensive leaf damage with browning, curling, and deteriorating foliage",
      afterImage: "/lovable-uploads/e4f0d6d8-1d3c-48b2-bcf5-9faff676a5f7.png",
      afterAlt: "Prayer plant after treatment - showing vibrant, healthy foliage",
      afterTitle: "Stunning Recovery & New Growth",
      afterDescription: "After Nick's expert care, the prayer plant displays beautiful, vibrant patterns and healthy new foliage",
      problemDiagnosed: "Environmental stress, humidity issues, and potential root problems causing widespread leaf damage",
      treatmentApplied: "Humidity optimization, proper placement guidance, soil treatment, and specialized prayer plant care",
      resultAchieved: "Complete recovery with vibrant leaf patterns and healthy new growth demonstrating proper care"
    },
    {
      beforeImage: "/lovable-uploads/27ae64dd-28fd-4ad5-896b-047a9f7be996.png",
      beforeAlt: "Palm plant before treatment - showing browning tips and poor growth",
      beforeTitle: "Struggling Palm with Browning Tips",
      beforeDescription: "This palm plant was showing stress with browning leaf tips and overall poor growth patterns",
      afterImage: "/lovable-uploads/fb7e6b4c-0fab-4f87-b2e0-2db548134229.png",
      afterAlt: "Palm plant after treatment - showing healthy, vibrant growth",
      afterTitle: "Vibrant & Healthy Palm",
      afterDescription: "After Nick's treatment, the palm displays lush, healthy foliage with proper growth and no browning",
      problemDiagnosed: "Leaf tip burn from water quality issues, improper humidity levels, and nutrient deficiencies",
      treatmentApplied: "Water quality improvement, humidity optimization, proper fertilization, and pruning of damaged fronds",
      resultAchieved: "Eliminated browning with healthy new growth and improved overall plant vitality and appearance"
    },
    {
      beforeImage: "/lovable-uploads/54465ae0-122d-46dd-b0a9-80ffe7493e0b.png",
      beforeAlt: "Fiddle leaf fig before treatment - showing sparse growth and poor structure",
      beforeTitle: "Sparse & Struggling Fiddle Leaf Fig",
      beforeDescription: "This fiddle leaf fig was showing poor growth with sparse foliage and weak branching structure",
      afterImage: "/lovable-uploads/286015e9-74f5-487d-af3d-a40e9941d8c0.png",
      afterAlt: "Fiddle leaf fig after treatment - showing full, healthy growth",
      afterTitle: "Full & Flourishing Tree",
      afterDescription: "After Nick's expert care, the fiddle leaf fig displays dense, healthy foliage and strong tree structure",
      problemDiagnosed: "Poor branching structure, inadequate light conditions, and improper pruning leading to sparse growth",
      treatmentApplied: "Strategic pruning, proper repotting, optimal positioning guidance, and growth enhancement techniques",
      resultAchieved: "Dramatic transformation into a full, tree-like structure with dense foliage and strong branching"
    },
    {
      beforeImage: "/lovable-uploads/c5aa43fe-7c16-46b2-a97e-f03c2bb8b54d.png",
      beforeAlt: "Plant cuttings before treatment - showing root-bound and struggling propagations",
      beforeTitle: "Struggling Plant Propagations",
      beforeDescription: "These plant cuttings were root-bound and struggling with poor soil conditions and inadequate care",
      afterImage: "/lovable-uploads/46abee56-4c9b-4d52-a903-076cd8b81c48.png",
      afterAlt: "Plant after propagation and recovery - showing healthy, vibrant growth",
      afterTitle: "Thriving & Healthy Plant",
      afterDescription: "After Nick's expert propagation techniques, the plant shows lush, healthy foliage and strong root development",
      problemDiagnosed: "Root-bound propagations with poor soil quality, inadequate drainage, and stunted growth",
      treatmentApplied: "Professional propagation techniques, proper soil preparation, root care, and optimal growing conditions",
      resultAchieved: "Successful propagation recovery with healthy root system and vibrant leaf development"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Real Results: Before & After Plant Transformations
          </h2>
          <p className="text-lg text-muted-foreground">
            See the dramatic improvements Nick achieves with his expert plant doctor services
          </p>
        </div>

        <div className="space-y-16">
          {transformations.map((transformation, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Before Image */}
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
                      BEFORE
                    </span>
                  </div>
                  <img 
                    src={transformation.beforeImage}
                    alt={transformation.beforeAlt}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{transformation.beforeTitle}</h3>
                    <p className="text-sm opacity-90">
                      {transformation.beforeDescription}
                    </p>
                  </div>
                </div>

                {/* After Image */}
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
                      AFTER
                    </span>
                  </div>
                  <img 
                    src={transformation.afterImage}
                    alt={transformation.afterAlt}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{transformation.afterTitle}</h3>
                    <p className="text-sm opacity-90">
                      {transformation.afterDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Treatment Details */}
              <div className="p-8 bg-gray-50">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-red-100 p-3 rounded-lg mb-3 inline-block">
                      <Stethoscope className="h-6 w-6 text-red-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Problem Diagnosed</h4>
                    <p className="text-sm text-muted-foreground">
                      {transformation.problemDiagnosed}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 p-3 rounded-lg mb-3 inline-block">
                      <Heart className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Treatment Applied</h4>
                    <p className="text-sm text-muted-foreground">
                      {transformation.treatmentApplied}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 p-3 rounded-lg mb-3 inline-block">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Result Achieved</h4>
                    <p className="text-sm text-muted-foreground">
                      {transformation.resultAchieved}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to see similar results with your plants?
          </p>
          <Button 
            onClick={onBookingClick}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
          >
            Book Your Plant Doctor Visit - $149
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterTransformations;
