
import { Button } from "@/components/ui/button";

interface PlantDoctorHeroProps {
  onBookingClick: () => void;
}

const PlantDoctorHero = ({ onBookingClick }: PlantDoctorHeroProps) => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Is Your Plant Sick, Dying, or Just Not Thriving?
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Don't let your beloved plants suffer. Get expert diagnosis, treatment, and personalized care guidance from Nick, your certified plant doctor.
            </p>
            <div className="bg-white p-6 rounded-lg border-l-4 border-orange-600 mb-8">
              <h3 className="font-bold text-lg mb-2">Common Problems We Solve:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Plants dropping or browning leaves</li>
                <li>• Overwatering or underwatering issues</li>
                <li>• Plants outgrowing their pots</li>
                <li>• Inherited plants you don't know how to care for</li>
                <li>• Poor lighting or soil problems</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onBookingClick}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
              >
                Book Plant Doctor Visit - $149 (Same Week!)
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/adc22a4b-2da2-4d41-81ef-8d805c712e3b.png" 
              alt="Nick - Your Certified Plant Doctor"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantDoctorHero;
