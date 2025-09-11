import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-md mx-auto">
          <div className="mb-8">
            <img 
              src="/images/branding-assets/atlanta-house-plants-logo.png" 
              alt="Atlanta House Plants" 
              className="w-20 h-20 mx-auto mb-6 opacity-50"
            />
          </div>
          
          <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Sorry, the page you're looking for doesn't exist. It may have been moved or removed.
          </p>
          
          <div className="space-y-4">
            <Button 
              onClick={() => window.location.href = '/'}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-3"
            >
              Return to Homepage
            </Button>
            
            <div className="text-sm text-muted-foreground">
              <p>Or visit one of our main pages:</p>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                <a href="/office-plants" className="text-green-600 hover:text-green-700 underline">Office Plants</a>
                <a href="/corporate" className="text-green-600 hover:text-green-700 underline">Corporate Gifting</a>
                <a href="/plant-doctor" className="text-green-600 hover:text-green-700 underline">Plant Doctor</a>
                <a href="/about" className="text-green-600 hover:text-green-700 underline">About</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
