import { useState, useEffect } from 'react';
import { Flower2 } from 'lucide-react';

export default function Sustainability() {
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

    const element = document.getElementById('sustainability');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="sustainability" className="py-24 bg-gradient-to-b from-papaya-50 to-white relative overflow-hidden">
      <div className="absolute top-20 right-10 opacity-5">
        <Flower2 className="w-64 h-64 text-hunter-500 animate-spin" style={{ animationDuration: '30s' }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* --- THIS IS THE UPDATED IMAGE SECTION --- */}
          <div className={`order-2 md:order-1 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <img
              src="https://tech4serve.com/wp-content/uploads/2024/04/healthy-vegan-lifestyle-770x470.jpg"
              alt="Healthy vegan lifestyle"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
          </div>
          {/* --- END OF UPDATED SECTION --- */}

          <div className={`order-1 md:order-2 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-calPoly-700 mb-6">
              Sustainability & Spirituality
            </h2>

            <div className="space-y-4 font-body text-lg text-calPoly-600 leading-relaxed">
              <p>
                Our commitment extends beyond the plate. We source ingredients from <span className="font-semibold text-hunter-600">local organic farms</span>, supporting communities while honoring the earth.
              </p>

              <p>
                Every meal is packaged in <span className="font-semibold text-hunter-600">eco-friendly, biodegradable materials</span> — including traditional banana leaf plates that return to nature.
              </p>

              <p>
                We believe food is sacred. Our kitchen is a space of <span className="font-semibold text-teal-600">mindful preparation</span>, where each ingredient is treated with reverence and gratitude.
              </p>

              <p className="text-xl font-medium text-hunter-700 pt-4">
                When you choose Satvify, you're choosing <span className="text-citron-700">harmony with nature</span> and <span className="text-xanthous-600">alignment with timeless wisdom</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}