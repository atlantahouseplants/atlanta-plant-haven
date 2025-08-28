import { useEffect } from 'react';

const Reviews = () => {
  useEffect(() => {
    // Load the review widget script if it hasn't been loaded already
    const existingScript = document.querySelector('script[src="https://reputationhub.site/reputation/assets/review-widget.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - see what our satisfied customers have to say about our plant services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <iframe 
            className="lc_reviews_widget" 
            src="https://reputationhub.site/reputation/widgets/review_widget/wTvEeXunnbLa5kBRFbc4" 
            frameBorder="0" 
            scrolling="no" 
            style={{ minWidth: '100%', width: '100%', minHeight: '400px' }}
            title="Customer Reviews"
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
