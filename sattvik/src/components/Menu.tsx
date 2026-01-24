import { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Flame, Leaf, Heart, Sparkles, Clock, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Menu items array with sweets (names and prices)
const menuItems = [
  {
    name: 'Garden Blossom Salad',
    description: 'A vibrant garden medley with fresh greens, in-house peanut curd dressing and protein-rich sprouts.',
    calories: 220,
    price: '₹99',
    image: '/menu images/menu IMG/menu2/Garden Blossom Salad.jpg',
    category: 'Salads',
  },
  {
    name: 'Jau-Dropping Bowl',
    description: 'Wholesome roasted barley (Jau) mixed with seasonal fruits and nut butter.',
    calories: 380,
    price: '₹89',
    image: '/menu images/menu IMG/menu2/Jau-Dropping Bowl.jpg',
    category: 'Smoothies',
  },
  {
    name: 'Green Glow Elixir',
    description: 'Refreshing cold-pressed juice with cucumber, mint, and a hint of ginger.',
    calories: 45,
    price: '₹49',
    image: '/menu images/menu IMG/menu2/Green Glow Elixir.jpg',
    category: 'Drinks',
  },
  {
    name: 'Kesar-e-Pista Bowl',
    description: 'A royal saffron and pistachio infused thick creamy dessert.',
    calories: 240,
    price: '₹99',
    image: '/menu images/menu IMG/menu2/Kesar-e-Pista Bowl.jpg',
    category: 'Desserts',
  },
  {
    name: 'Bliss Balls',
    description: 'Power-packed energy bites with dates, almonds, and raw cacao.',
    calories: 120,
    price: '₹49',
    image: '/menu images/menu IMG/menu images/blissballs.png',
    category: 'Desserts',
  },
  {
    name: 'Tropical Bliss',
    description: 'Pure coconut water infused with the sweetness of fresh pineapple and a hint of mint.',
    calories: 120,
    price: '₹59',
    image: '/menu images/menu IMG/menu2/Crystal Ash Cooler.jpg', // Placeholder image
    category: 'Drinks',
  },
  {
    name: 'Royal Kaju Katli',
    description: 'Thin slices of handcrafted cashew goodness with zero refined sugar.',
    calories: 140,
    price: '₹39',
    image: '/menu images/menu IMG/menu images/royalkajukatli.png',
    category: 'Desserts',
  },
  {
    name: 'Shahi Anjeer Roll',
    description: 'Luxurious rolls made with premium figs and various nuts.',
    calories: 150,
    price: '₹39',
    image: '/menu images/menu IMG/menu images/shahianjeerrolls.png',
    category: 'Desserts',
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
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-calPoly-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-calPoly-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 px-4 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex-none w-[85vw] sm:w-96 snap-center group ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
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
            <Link
              to="/menu"
              className="inline-flex items-center gap-3 bg-papaya text-calPoly-700 font-body font-semibold text-lg px-8 py-4 rounded-full hover:bg-papaya-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}