const GoogleReviews = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50/50 via-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real reviews from Atlanta businesses we've transformed
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-green-100">
            <iframe 
              className='lc_reviews_widget' 
              src='https://reputationhub.site/reputation/widgets/review_widget/wTvEeXunnbLa5kBRFbc4' 
              frameBorder='0' 
              scrolling='no' 
              style={{
                minWidth: '100%', 
                width: '100%',
                minHeight: '400px',
                border: 'none'
              }}
              title="Google Reviews for Atlanta House Plants"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;