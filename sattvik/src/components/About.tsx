import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const images = [
  '/menu images/menu IMG/menu2/Garden Blossom Salad.jpg',
  '/menu images/menu IMG/menu2/Jau-Dropping Bowl.jpg',
  '/menu images/menu IMG/menu2/Green Glow Elixir.jpg',
  '/menu images/menu IMG/menu2/Bliss Balls.jpg'
];



export default function About() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const location = useLocation();
  const onAboutPage = location.pathname === '/about';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section
      id="about"
      className={`pt-0 pb-24 bg-gradient-to-b from-white via-white to-papaya-50 relative overflow-hidden ${onAboutPage ? 'pt-32' : '-mt-32'
        }`}
    >
      {/* Fade Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-white/80 to-white pointer-events-none z-5" />

      {/* Background Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <div className="w-32 h-32 bg-gradient-to-br from-hunter-200/40 to-calPoly-300/30 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float-delayed opacity-20">
        <div className="w-40 h-40 bg-gradient-to-br from-citron-200/40 to-xanthous-300/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Spacer to add 1 line space before About heading */}
        {/* This spacer is only needed if on the /about page */}
        {onAboutPage && <div className="h-8"></div>}

        {/* Header Section */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* --- 
            THIS IS THE FIXED LINE: 
            The <span> with the gradient classes has been removed from "Satvify".
          --- */}
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-calPoly-700 mb-6 leading-tight">
            About Satvify
          </h2>
          <p className="font-body text-xl text-calPoly-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to Satvify – where food is more than taste, it's a way of life.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-6 font-body text-calPoly-700 text-lg leading-relaxed">
              <div className="bg-papaya/50 backdrop-blur-sm p-6 rounded-2xl border border-papaya-200 shadow-lg">
                <p className="mb-4">
                  Derived from the Sanskrit word "Satv" meaning purity and "fy" meaning fulfillment, Satvify embodies our commitment to satisfying hunger & taste buds with Satvic food.
                </p>
                <p>
                  At Satvify, every meal is a promise of farm-to-table freshness. We believe food should heal, energize, and uplift, not just fill you up.
                </p>
              </div>

              <div className="bg-papaya/50 backdrop-blur-sm p-6 rounded-2xl border border-papaya-200 shadow-lg">
                <p className="italic">
                  "Every recipe we create is rooted in Satvic principles: fresh, plant-based, wholesome, and easy to digest. With a deep respect for nature and balance, Satvify is here to help you 'eat clean, live light, and feel alive.'"
                </p>
              </div>
            </div>


          </div>

          {/* Image Carousel */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Sattvik kitchen ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${idx === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-hunter-600/50 via-transparent to-transparent" />

              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-calPoly-700" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-calPoly-700" />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentImage ? 'bg-white w-8' : 'bg-white/50 w-2'
                      }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}