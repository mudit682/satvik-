import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function FloatingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reviews', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Sticky Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          // --- 
          // THIS IS THE FIX: 
          // Changed bg-white/80 to bg-white, removed backdrop-blur,
          // and changed border-white/20 to border-gray-200
          // ---
          ? 'bg-white shadow-lg border-b border-gray-200'
          : 'bg-transparent'
        }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/Logo_Header.png"
                alt="Satvify Logo"
                className="h-40 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-calPoly-600 hover:text-hunter-600 font-body font-medium transition-colors duration-300 relative group ${isActive(item.path) ? 'text-hunter-700' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-hunter-600 transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button - Right Side */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              // --- FIX: Changed bg-white/40 to bg-white ---
              className="md:hidden p-2 rounded-full bg-white hover:bg-gray-100 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-calPoly-700" />
              ) : (
                <Menu className="w-6 h-6 text-calPoly-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          {/* --- FIX: Changed bg-white/95 to bg-white --- */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-80 bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 animate-slide-down">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-left text-calPoly-700 hover:text-hunter-600 font-body font-medium py-3 px-4 rounded-xl hover:bg-hunter-50 transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}