import { useState, useEffect } from 'react';
import { ShoppingBag, Users } from 'lucide-react';


export default function CallToAction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('cta');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);



  return (
    // --- 
    // THIS IS THE FIX: 
    // Changed 'bg-gradient-to-b...' to 'bg-papaya'
    // ---
    <section id="cta" className="py-32 bg-papaya relative overflow-hidden">

      {/* --- 
        FIX: Removed the 'Light Background Pattern' div
      --- */}

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-calPoly-700 mb-8 leading-tight">
            Join the Satvic Revolution
          </h2>
        </div>

        <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <p className="font-body text-xl md:text-2xl lg:text-3xl text-calPoly-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join us on this journey toward <span className="font-semibold text-hunter-600">vibrant health</span> and{' '}
            <span className="font-semibold text-hunter-600">inner peace</span> — one Satvic meal at a time.
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <a
            href="https://wa.me/919667899233"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-hunter-600 text-white font-body font-bold text-lg rounded-full hover:bg-hunter-700 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-hunter-600/20"
          >
            <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>Order Now</span>
          </a>

          <a
            href="https://chat.whatsapp.com/CngRnbQuuZS6rxncl13iQn?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-hunter-600 text-hunter-600 font-body font-bold text-lg rounded-full hover:bg-hunter-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            <Users className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>Join Our Community</span>
          </a>
        </div>

      </div>
    </section>
  );
}