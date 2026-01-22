import { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Flame, Leaf, Heart, Sparkles, Clock, Star, ArrowRight } from 'lucide-react';

// Menu items array with sweets (names and prices)
const menuItems = [
  {
    name: 'Bliss Balls',
    description: 'A colorful medley of quinoa, roasted vegetables, avocado, and tahini dressing. Pure nourishment in every spoonful.',
    calories: 420,
    price: '₹49',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    prepTime: '15 min',
    rating: 4.9,
    category: 'Signature',
    benefits: ['High Protein', 'Rich in Fiber', 'Antioxidants']
  },
  {
    name: 'Coco - Nutty Laddoo',
    description: 'Traditional comfort food reimagined with mung dal, brown rice, turmeric, and healing spices.',
    calories: 350,
    price: '₹49',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
    prepTime: '20 min',
    rating: 4.8,
    category: 'Comfort',
    benefits: ['Digestive Health', 'Complete Protein', 'Anti-inflammatory']
  },
  {
    name: 'Trinut Til Bites',
    description: 'Fresh cucumber, celery, spinach, green apple, ginger, and lemon. Alkalize and energize.',
    calories: 120,
    price: '₹39',
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600',
    prepTime: '5 min',
    rating: 4.7,
    category: 'Detox',
    benefits: ['Hydrating', 'Detoxifying', 'Alkalizing']
  },
  {
    name: 'Choco Truffle Eclairs',
    description: 'Sweet potato, chickpeas, kale, beets, and hummus. A symphony of flavors and nutrients.',
    calories: 480,
    price: '₹69',
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600',
    prepTime: '18 min',
    rating: 4.9,
    category: 'Power',
    benefits: ['Complete Nutrition', 'Plant Protein', 'Vitamins & Minerals']
  },
  {
    name: 'Protein Peda',
    description: 'Seasonal fruits arranged with coconut yogurt, chia seeds, and raw honey. Nature\'s candy.',
    calories: 280,
    price: '₹29',
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600',
    prepTime: '10 min',
    rating: 4.8,
    category: 'Fresh',
    benefits: ['Natural Sugars', 'Probiotics', 'Omega-3']
  },
  {
    name: 'Royal Kaju Katli',
    description: 'Handcrafted blend of tulsi, ashwagandha, ginger, and turmeric. Warmth and healing in a cup.',
    calories: 15,
    price: '₹39',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
    prepTime: '8 min',
    rating: 4.6,
    category: 'Wellness',
    benefits: ['Stress Relief', 'Immune Support', 'Anti-inflammatory']
  },
  {
    name: 'Shahi Anjeer Roll',
    description: 'A rich, nutty roll made with premium figs and nuts. Pure, royal indulgence.',
    calories: 150,
    price: '₹39',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    prepTime: '10 min',
    rating: 4.8,
    category: 'Signature',
    benefits: ['Rich in Iron', 'Energy Boost', 'Refined Sugar Free']
  },
  {
    name: 'Date Chocolate Barks',
    description: 'Crisp, dark chocolate barks sweetened naturally with dates and topped with seeds.',
    calories: 130,
    price: '₹39',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
    prepTime: '5 min',
    rating: 4.9,
    category: 'Comfort',
    benefits: ['Antioxidants', 'Healthy Fats', 'Guilt-free']
  },
];

export default function Menu() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('menu');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="menu" className="py-24 bg-papaya relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <div className="w-40 h-40 bg-gradient-to-br from-hunter-200/40 to-calPoly-300/30 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float-delayed opacity-20">
        <div className="w-32 h-32 bg-gradient-to-br from-citron-200/40 to-xanthous-300/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-calPoly-700 mb-6 leading-tight">
            Menu
          </h2>
          <p className="font-body text-xl text-calPoly-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Every dish is crafted with <span className="font-semibold text-hunter-600">intention</span> and <span className="font-semibold text-hunter-600">love</span>, 
            using only the purest ingredients to create meals that heal, energize, and bring joy to your daily nourishment journey.
          </p>
          
        </div>

        {/* Menu Items */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 hidden md:block"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-calPoly-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 hidden md:block"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-calPoly-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex-none w-96 snap-center group ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hunter-600/60 via-transparent to-transparent" />
                    
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-heading text-2xl font-bold text-calPoly-700 mb-3">
                      {item.name}
                    </h3>
                    <p className="font-body text-calPoly-600 mb-4 leading-relaxed flex-grow">
                      {item.description}
                    </p>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- 
          FIX: Call to Action section colors inverted
        --- */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
          {/* 1. Background changed to dark green */}
          <div className="bg-calPoly-700 p-8 rounded-3xl max-w-4xl mx-auto">
            {/* 2. Heading text changed to light */}
            <h3 className="font-heading text-3xl font-bold text-white mb-4">
              Ready to experience the satvify way?
            </h3>
            {/* 3. Paragraph text changed to light */}
            <p className="font-body text-lg text-papaya-100 mb-6 leading-relaxed">
              Experience the transformative power of pure, whole plant-based nutrition crafted with love and intention.
            </p>
            {/* 4. Button background changed to papaya, text to dark */}
            <button className="inline-flex items-center gap-3 bg-papaya text-calPoly-700 font-body font-semibold text-lg px-8 py-4 rounded-full hover:bg-papaya-100 transition-all duration-300 hover:scale-105 shadow-lg">
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}