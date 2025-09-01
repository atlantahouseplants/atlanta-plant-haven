
import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { COMPONENT_STYLES } from "@/styles/design-system";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Simplified navigation - only core pages
  const navItems = [
    { name: "Office Plants", href: "/office-plants" },
    { name: "Corporate Gifts", href: "/corporate" },
    { name: "Our Work", href: "/our-work" },
    { name: "About", href: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200' 
        : 'bg-background/95 backdrop-blur-sm border-b border-border'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="group flex items-center space-x-3">
              <img 
                src="/images/branding-assets/atlanta-house-plants-logo.png" 
                alt="Atlanta House Plants - Professional Office Plant Services"
                className="h-10 w-auto group-hover:scale-105 transition-transform duration-200"
              />
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  Atlanta Houseplants
                </div>
                <div className="text-xs text-gray-500 -mt-1">Professional Plant Services</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-green-600 transition-all duration-200 font-medium relative group px-3 py-2 rounded-lg hover:bg-green-50"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:470-664-4039" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <Phone className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium hidden lg:block">(470) 664-4039</span>
            </a>
            <Link to="/office-plants" className="group">
              <Button className={`${COMPONENT_STYLES.button.primary} animate-scale-in`}>
                <Calendar className="h-4 w-4 mr-2" />
                Free Assessment
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <a href="tel:470-664-4039" className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
              <Phone className="h-5 w-5" />
            </a>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 hover:bg-green-50 transition-colors rounded-xl"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} className="animate-scale-in" /> : <Menu size={24} className="animate-scale-in" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/98 backdrop-blur-sm animate-slide-up">
            <div className="px-4 pt-6 pb-8 space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-6 py-4 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 font-medium rounded-xl border border-transparent hover:border-green-200"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="animate-fade-in">{item.name}</div>
                </Link>
              ))}
              
              {/* Mobile CTA Section */}
              <div className="pt-6 border-t border-gray-100 space-y-4">
                <Link to="/office-plants" onClick={() => setIsOpen(false)}>
                  <Button className={`${COMPONENT_STYLES.button.primary} w-full py-4 text-lg animate-bounce-in`}>
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule Free Assessment
                  </Button>
                </Link>
                <Link to="/corporate" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full py-4 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl font-semibold animate-bounce-in" style={{ animationDelay: '100ms' }}>
                    Corporate Gifts
                  </Button>
                </Link>
                
                {/* Mobile Contact */}
                <div className="pt-4 text-center">
                  <a href="tel:470-664-4039" className="text-gray-600 hover:text-gray-900 text-lg font-medium">
                    📞 (470) 664-4039
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
