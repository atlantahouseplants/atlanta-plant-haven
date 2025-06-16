
import { Card, CardContent } from "@/components/ui/card";

const PlantDoctorReviews = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Real Results from Real Plant Parents
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-muted-foreground italic mb-4">
                "This plant had sentimental value to me, so I reached out to see if anything could be done to help it. 
                Nick was very realistic with the possible outcome, and he completely brought my plant back to life!"
              </p>
              <p className="font-semibold">- Erika, Google Review</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-muted-foreground italic mb-4">
                "We used the plant doctor service and highly recommend it! Nick was very helpful and knowledgeable on all things plants!"
              </p>
              <p className="font-semibold">- Josh, Google Review</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <iframe 
            className='lc_reviews_widget rounded-lg border-none' 
            src='https://reputationhub.site/reputation/widgets/review_widget/wTvEeXunnbLa5kBRFbc4' 
            frameBorder='0' 
            scrolling='no' 
            style={{minWidth: '100%', width: '100%', height: '400px'}}
            title="Customer Reviews"
          />
        </div>
      </div>
    </section>
  );
};

export default PlantDoctorReviews;
