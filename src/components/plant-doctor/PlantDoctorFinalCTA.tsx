
import { Button } from "@/components/ui/button";

interface PlantDoctorFinalCTAProps {
  onBookingClick: () => void;
}

const PlantDoctorFinalCTA = ({ onBookingClick }: PlantDoctorFinalCTAProps) => {
  return (
    <section className="py-20 bg-green-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Don't Let Your Plants Suffer Another Day
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Professional plant care is just one appointment away. Give your plants the expert attention they deserve.
        </p>
        <div className="flex justify-center">
          <Button 
            onClick={onBookingClick}
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg"
          >
            Book Plant Doctor Visit - $149 (Same Week!)
          </Button>
        </div>
        <p className="text-sm mt-6 opacity-75">
          ✓ Expert diagnosis and treatment • ✓ Custom care plan included • ✓ Same-week appointments available
        </p>
      </div>
    </section>
  );
};

export default PlantDoctorFinalCTA;
