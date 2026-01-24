import { useEffect, useState } from 'react';
import { Leaf, Sparkles, ArrowRight, Heart } from 'lucide-react';

const uspIcons = [
  { src: '/USPs/1.png', label: 'CLEAN & PURE\nNOTHING REFINED' },
  { src: '/USPs/2.png', label: 'PLANT BASED' },
  { src: '/USPs/3.png', label: 'REFINED SUGAR FREE' },
  { src: '/USPs/4.png', label: 'ADDITIVE FREE' },
  { src: '/USPs/5.png', label: 'REFINED OIL-FREE' },
  { src: '/USPs/6.png', label: 'ECO FRIENDLY' }
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Trigger animations on mount
    setTimeout(() => setIsVisible(true), 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // --- 
    // THIS IS THE FIX: 
    // Replaced 'bg-papaya' with 'bg-gradient-to-b from-papaya to-white'
    // ---
    <section id="hero" className="relative min-h-[120vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-papaya to-white pb-48">
      {/* Enhanced Background Pattern */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23244324' fill-opacity='0.08'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 z-10 text-center relative pt-24">
        {/* Decorative Elements */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-hunter-200/30 to-calPoly-300/20 rounded-full blur-3xl animate-pulse" />

        {/* Hero Text */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
          <div className="relative inline-block">
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-calPoly-700 mb-6 leading-tight relative">
              {/* Desktop/Tablet: 2 lines */}
              <div className="hidden md:block">
                <span className="block bg-gradient-to-r from-calPoly-700 via-hunter-600 to-calPoly-700 bg-clip-text animate-text-shimmer">
                  Nourishing Body,
                </span>
                <span className="block bg-gradient-to-r from-calPoly-700 via-hunter-600 to-calPoly-700 bg-clip-text animate-text-shimmer relative">
                  Nurturing Soul
                </span>
              </div>

              {/* Mobile: 4 lines */}
              <div className="md:hidden">
                <span className="block bg-gradient-to-r from-calPoly-700 via-hunter-600 to-calPoly-700 bg-clip-text animate-text-shimmer">
                  Nourishing
                </span>
                <span className="block bg-gradient-to-r from-calPoly-700 via-hunter-600 to-calPoly-700 bg-clip-text animate-text-shimmer">
                  Body,
                </span>
                <span className="block bg-gradient-to-r from-calPoly-7G00 via-hunter-600 to-calPoly-700 bg-clip-text animate-text-shimmer">
                  Nurturing
                </span>
                <span className="block bg-gradient-to-r from-calPoly-700 via-hunter-600 to-calPoly-700 bg-clip-text animate-text-shimmer relative">
                  Soul
                </span>
              </div>
            </h1>
          </div>
        </div>

        {/* Subtitle */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>

          <div className="w-full max-w-md mx-auto h-1 bg-gradient-to-r from-transparent via-hunter-500 to-transparent opacity-60 mb-6" />

          <p className="font-body text-xl md:text-2xl lg:text-3xl text-calPoly-600 max-w-4xl mx-auto leading-relaxed font-light text-center">
            Experience the goodness of <span className="font-semibold text-hunter-600">Satvic, plant-based, wholesome</span> meals crafted for your{' '}
            body, mind, and soul.
          </p>
        </div>

        {/* USP Icon Cards */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} relative z-10`} style={{ transitionDelay: '0.8s' }}>
          <div className={`grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 max-w-4xl mx-auto mt-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
            {uspIcons.map((icon, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-4 md:p-5 rounded-2xl shadow-lg border border-white/50 flex flex-col justify-start items-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-3 w-full">
                  <img
                    src={icon.src}
                    alt={`Satvify USP ${index + 1}`}
                    className="h-10 w-10 md:h-16 md:w-16 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-[10px] md:text-xs font-heading font-bold text-calPoly-700 leading-tight uppercase whitespace-pre-line text-center group-hover:text-hunter-600 transition-colors">
                    {icon.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- 
        FIX: Re-added the fade gradient div for a smooth transition
      --- */}
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none z-0" />

      {/* Enhanced Scroll Indicator */}
      {/* ... (rest of your scroll indicator code) ... */}
    </section>
  );
}