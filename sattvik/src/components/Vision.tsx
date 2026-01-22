import { useState, useEffect } from 'react';

export default function Vision() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('vision');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="vision" className="py-24 bg-papaya relative overflow-hidden">
      
      {/* --- 
        FIX: Removed the 'Animated Background Elements' block 
      --- */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-hunter-100/50 backdrop-blur-md rounded-full mb-8">
              <img src="/vision.png" alt="Vision Icon" className="w-10 h-10 object-contain" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-calPoly-700 mb-6">
              Vision
            </h2>
            <p className="font-body text-xl md:text-2xl text-calPoly-600 leading-relaxed">
              To inspire a healthier, kinder world through the wisdom of <span className="font-semibold text-hunter-600">Satvic and plant-based living</span>, along with the healing power of nature.
            </p>
          </div>

          <div className={`text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-hunter-100/50 backdrop-blur-md rounded-full mb-8">
              <img src="/mission.png" alt="Mission Icon" className="w-10 h-10 object-contain" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-calPoly-700 mb-6">
              Mission
            </h2>
            <p className="font-body text-xl md:text-2xl text-calPoly-600 leading-relaxed">
              To make plant-based Satvic meals <span className="font-semibold text-hunter-600">accessible</span>, <span className="font-semibold text-hunter-600">delightful</span>, and <span className="font-semibold text-hunter-600">transformative</span> that suit modern lifestyles, nurturing body, mind, and soul.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}