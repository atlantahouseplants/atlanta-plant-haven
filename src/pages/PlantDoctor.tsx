
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PlantDoctorHero from "@/components/plant-doctor/PlantDoctorHero";
import CommonUseCases from "@/components/plant-doctor/CommonUseCases";
import WhatsIncluded from "@/components/plant-doctor/WhatsIncluded";
import WhatToExpect from "@/components/plant-doctor/WhatToExpect";
import BookingOptions from "@/components/plant-doctor/BookingOptions";
import WhyChooseNick from "@/components/plant-doctor/WhyChooseNick";
import BeforeAfterTransformations from "@/components/plant-doctor/BeforeAfterTransformations";
import PlantDoctorGallery from "@/components/plant-doctor/PlantDoctorGallery";
import PlantDoctorFAQ from "@/components/plant-doctor/PlantDoctorFAQ";
import PlantDoctorReviews from "@/components/plant-doctor/PlantDoctorReviews";
import PlantDoctorFinalCTA from "@/components/plant-doctor/PlantDoctorFinalCTA";

const PlantDoctor = () => {
  const handleBookingClick = () => {
    window.open('https://api.leadconnectorhq.com/widget/bookings/plantdoctorservice', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PlantDoctorHero onBookingClick={handleBookingClick} />
      <CommonUseCases />
      <WhatsIncluded />
      <WhatToExpect />
      <BookingOptions />
      <WhyChooseNick />
      <BeforeAfterTransformations onBookingClick={handleBookingClick} />
      <PlantDoctorGallery />
      <PlantDoctorFAQ />
      <PlantDoctorReviews />
      <PlantDoctorFinalCTA onBookingClick={handleBookingClick} />

      <Footer />
      
      {/* Scripts for widgets */}
      <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
      <script type='text/javascript' src='https://reputationhub.site/reputation/assets/review-widget.js'></script>
    </div>
  );
};

export default PlantDoctor;
