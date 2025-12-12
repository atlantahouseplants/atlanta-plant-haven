import { useState, useEffect } from 'react';
import { Calendar, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { COMPONENT_STYLES } from '@/styles/design-system';

const MobileStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      const scrolled = window.scrollY > 600;
      setIsVisible(scrolled && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden animate-slide-up">
      {/* Main CTA Bar */}
      <div className="bg-white border-t border-gray-200 shadow-lg px-4 py-3 max-w-full">
        <div className="flex items-center justify-between space-x-3 max-w-sm mx-auto">
          <div className="flex-1">
            <Link to="/office-plants">
              <Button className={`${COMPONENT_STYLES.button.primary} w-full py-3 text-base font-semibold`}>
                <Calendar className="h-4 w-4 mr-2" />
                Get Free Office Design
              </Button>
            </Link>
          </div>
          
          <div className="flex space-x-2">
            <a 
              href="tel:470-664-4039" 
              className="flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
            
            <button
              onClick={() => setIsDismissed(true)}
              className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl transition-colors"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        {/* Subtitle */}
        <div className="text-center mt-2">
          <p className="text-xs text-gray-500">
            💯 100% Plant Guarantee • 📍 Serving Atlanta Businesses
          </p>
        </div>
      </div>

      {/* Safe area padding for devices with home indicator */}
      <div className="h-2 bg-white" />
    </div>
  );
};

export default MobileStickyCTA;