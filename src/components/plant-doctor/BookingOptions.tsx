
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Mail } from "lucide-react";
import CustomSchedulingForm from "@/components/forms/CustomSchedulingForm";

const BookingOptions = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Save Your Plants?
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the option that works best for your schedule
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-orange-200">
            <CardContent className="p-8 text-center">
              <div className="bg-orange-100 p-4 rounded-lg mb-6">
                <CheckCircle className="h-12 w-12 text-orange-600 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Book Your Appointment</h3>
              <p className="text-muted-foreground mb-6">
                Schedule your $149 plant doctor visit. Most appointments available within the week.
              </p>
              
              {/* Optimized Booking Widget */}
              <div className="mb-6 bg-white rounded-lg shadow-inner p-2">
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/J3NNAtlNcdw0V75i8LX2" 
                  style={{width: '100%', border: 'none', overflow: 'hidden'}} 
                  scrolling="no" 
                  id="plantdoctor_booking_widget"
                  className="rounded-lg"
                  height="800"
                  title="Book Plant Doctor Appointment"
                />
              </div>
              
              {/* Mobile/Backup Button */}
              <div className="mb-4 md:hidden">
                <button 
                  onClick={() => window.open('https://api.leadconnectorhq.com/widget/booking/J3NNAtlNcdw0V75i8LX2', '_blank')}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Open Booking Calendar
                </button>
                <p className="text-xs text-gray-500 mt-2 text-center">Having trouble with the calendar above? Click here.</p>
              </div>
              
              <p className="text-sm text-muted-foreground">
                ✓ 90-minute comprehensive visit<br/>
                ✓ Same-week appointments available
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200">
            <CardContent className="p-8">
              <div className="bg-green-100 p-4 rounded-lg mb-6 text-center">
                <Mail className="h-12 w-12 text-green-600 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Need Custom Scheduling?</h3>
              <p className="text-muted-foreground mb-6 text-center">
                Contact Nick directly to discuss your situation or if you need availability not shown on our calendar.
              </p>
              <CustomSchedulingForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingOptions;
