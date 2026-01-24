import { useState, useEffect } from 'react';
import { Sprout, Droplets, ArrowRight, Wheat, Vegan, Recycle, Sparkles } from 'lucide-react';

const philosophies = [
  {
    icon: Sprout,
    title: 'Living',
    description: 'Fresh, natural foods free from processing, additives and preservatives.',
    detailedDescription: 'Our living foods are prepared with minimal processing.',
    // color: 'from-hunter-400 to-calPoly-500', // <-- REMOVED
    bgColor: 'bg-papaya',
    benefits: ['Made Fresh Everyday', 'No Preservatives', 'Maximum Prana']
  },
  {
    icon: Wheat,
    title: 'Wholesome',
    description: 'Minimally processed, nutrient-rich meals made without any refined ingredient (sugar, oil, or flour).',
    detailedDescription: 'We use only whole, unrefined ingredients that provide complete nutrition and support your body\'s natural healing processes.',
    // color: 'from-coyote-400 to-xanthous-500', // <-- REMOVED
    bgColor: 'bg-papaya',
    benefits: ['Whole Grains', 'Natural Sweeteners', 'Unrefining Ingredients']
  },
  {
    icon: Vegan,
    title: 'Plant-Based',
    description: 'Compassionate, plant-powered meals that respect every life form.',
    detailedDescription: 'Our plant-based approach promotes compassion, reduces environmental impact, and provides all essential nutrients through nature\'s bounty.',
    // color: 'from-citron-500 to-hunter-500', // <-- REMOVED
    bgColor: 'bg-papaya',
    benefits: ['100% Vegan', 'Compassionate', 'Sustainably Made']
  },
  {
    icon: Droplets,
    title: 'Water-Rich',
    description: 'Meals that hydrate, heal, and balance your body naturally.',
    detailedDescription: 'High water content foods naturally hydrate your body, support detoxification, and provide essential electrolytes and minerals.',
    // color: 'from-teal-400 to-hunter-400', // <-- REMOVED
    bgColor: 'bg-papaya',
    benefits: ['Natural Hydration', 'Rich in Essential Minerals', 'Detoxifying']
  },
  {
    icon: Recycle,
    title: 'Sustainable',
    description: 'Eco-friendly sourcing and packaging for a lighter environmental footprint.',
    detailedDescription: 'We use only paper bags, bagasse containers, and glass bottles — never plastic, aluminum, or non-stick containers.',
    // color: 'from-green-400 to-hunter-400', // <-- REMOVED
    bgColor: 'bg-papaya',
    benefits: ['Eco-Friendly', 'Sustainable Packaging', 'Zero Plastic']
  },
  {
    icon: Sparkles,
    title: 'Spiritual',
    description: 'Non-stimulating meals that support focus, calm, and balance.',
    detailedDescription: 'Free of stimulants like onion, garlic, mushrooms, tea, coffee, etc. Our meals support mindfulness and spiritual well-being.',
    // color: 'from-purple-400 to-hunter-400', // <-- REMOVED
    bgColor: 'bg-papaya',
    benefits: ['Mindfulness', 'Calm Energy', 'Spiritual Balance']
  },
];

export default function Philosophy() {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('philosophy');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="philosophy" className="py-24 bg-calPoly-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 animate-float opacity-20">
        <div className="w-40 h-40 bg-gradient-to-br from-citron-200/40 to-hunter-300/30 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-20 left-10 animate-float-delayed opacity-20">
        <div className="w-32 h-32 bg-gradient-to-br from-teal-200/40 to-calPoly-300/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Why Choose Satvify
          </h2>
          <p className="font-body text-xl text-papaya-100 max-w-3xl mx-auto leading-relaxed">
            Guided by six pillars of purity crafted to nourish your body, mind and soul
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {philosophies.map((philosophy, index) => {
            const Icon = philosophy.icon;
            const isFlipped = flippedCards.includes(index);

            return (
              <div
                key={index}
                className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div
                  className="relative h-96 cursor-pointer group perspective"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFlip(index);
                  }}
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                  >
                    {/* Front Card (Card is light, text is dark) */}
                    <div
                      className={`absolute inset-0 ${philosophy.bgColor} rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 backface-hidden border border-white/50`}
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      {/* --- FIX: Icon box is now dark, icon is light --- */}
                      <div className={`w-24 h-24 rounded-3xl bg-calPoly-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {philosophy.title === 'Plant-Based' ? (
                          <img src="/Img/vegan_icon.png" alt="Vegan" className="w-12 h-12 object-contain" />
                        ) : philosophy.title === 'Spiritual' ? (
                          <img src="/Img/spiritual_icon.png" alt="Spiritual" className="w-12 h-12 object-contain" />
                        ) : (
                          <Icon className="w-12 h-12 text-white" />
                        )}
                      </div>
                      <h3 className="font-heading text-3xl font-bold text-calPoly-700 mb-3">
                        {philosophy.title}
                      </h3>
                      <p className="font-body text-calPoly-600 mb-4 leading-relaxed">
                        {philosophy.description}
                      </p>
                      <div className="flex items-center gap-2 text-hunter-600 font-body font-semibold hover:text-hunter-700 transition-colors">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Back Card (Card is light, text is dark) */}
                    <div
                      className={`absolute inset-0 ${philosophy.bgColor} rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg border-2 border-hunter-200 rotate-y-180 backface-hidden`}
                    >
                      {/* --- FIX: Icon box is now dark, icon is light --- */}
                      <div className={`w-20 h-20 rounded-2xl bg-calPoly-700 flex items-center justify-center mb-6 shadow-lg`}>
                        {philosophy.title === 'Plant-Based' ? (
                          <img src="/Img/vegan_icon.png" alt="Vegan" className="w-10 h-10 object-contain" />
                        ) : philosophy.title === 'Spiritual' ? (
                          <img src="/Img/spiritual_icon.png" alt="Spiritual" className="w-10 h-10 object-contain" />
                        ) : (
                          <Icon className="w-10 h-10 text-white" />
                        )}
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-calPoly-700 mb-4">
                        {philosophy.title}
                      </h3>

                      <p className="font-body text-calPoly-600 leading-relaxed mb-6 text-sm">
                        {philosophy.detailedDescription}
                      </p>

                      {/* Benefits List */}
                      <div className="space-y-2 w-full">
                        {philosophy.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full">
                            <div className="w-2 h-2 bg-hunter-500 rounded-full" />
                            <span className="font-body text-sm font-semibold text-calPoly-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}