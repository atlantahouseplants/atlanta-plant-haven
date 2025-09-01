
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Leaf } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { 
      name: "Office Plants", 
      href: "/office-plants",
      highlight: true,
      color: "green"
    },
    { 
      name: "Corporate Gifts", 
      href: "/corporate",
      highlight: true,
      color: "blue"
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Leaf className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform" />
            <div>
              <span className="text-xl font-bold text-gray-900">Atlanta Houseplants</span>
              <span className="block text-xs text-gray-600">Professional Plant Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-medium transition-colors ${
                  item.highlight
                    ? isActive(item.href)
                      ? item.color === "green" 
                        ? "text-green-600" 
                        : "text-blue-600"
                      : "text-gray-700 hover:text-gray-900"
                    : isActive(item.href)
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
                {item.highlight && (
                  <span className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                    item.color === "green" ? "bg-green-600" : "bg-blue-600"
                  } transform scale-x-0 transition-transform ${
                    isActive(item.href) ? "scale-x-100" : "group-hover:scale-x-100"
                  }`} />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:470-554-5662"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">470-554-5662</span>
            </a>
            <Link to="/office-plants">
              <Button className="bg-green-600 hover:bg-green-700">
                Get Free Design
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ${
        isMobileMenuOpen 
          ? "max-h-screen opacity-100" 
          : "max-h-0 opacity-0 overflow-hidden"
      }`}>
        <div className="bg-white border-t shadow-xl">
          <div className="px-4 py-6 space-y-4">
            {/* Primary CTAs for Mobile */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <Link to="/office-plants" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Office Plants
                </Button>
              </Link>
              <Link to="/corporate" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Corporate Gifts
                </Button>
              </Link>
            </div>

            {/* Secondary Navigation */}
            {navItems.slice(2).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-md font-medium ${
                  isActive(item.href)
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Phone CTA */}
            <a
              href="tel:470-554-5662"
              className="flex items-center justify-center space-x-2 py-3 px-4 bg-gray-100 rounded-md font-medium"
            >
              <Phone className="h-5 w-5 text-green-600" />
              <span>Call 470-554-5662</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
