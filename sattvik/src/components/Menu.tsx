import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Menu items array with sweets (names and prices)
const menuItems = [
  {
    name: 'Garden Blossom Salad',
    description: 'Bright lettuce, cucumber, sweet corn, tomato, & bell peppers in an affair with a creamy cashew dressing topped with pomegranate, raisins, & roasted black sesame seeds.',
    calories: 220,
    price: '₹99',
    image: '/menu images/menu IMG/menu2/Garden Blossom Salad.jpg',
    category: 'Salads',
  },
  {
    name: 'Jau-Dropping Bowl',
    description: 'Hearty & fresh bowl of Barley with pumpkin, pomegranate, & beetroot richness, in fusion with a green mix of lettuce, spinach, dried thyme, & oregano, made guilt-free with a homemade dressing of tahini, mint leaves, green chilli, & lemon juice.',
    calories: 380,
    price: '₹89',
    image: '/menu images/menu IMG/menu2/Jau-Dropping Bowl.jpg',
    category: 'Smoothies',
  },
  {
    name: 'Green Glow Elixir',
    description: 'A refreshing medley of crisp cucumber & juicy apples, delicately balanced with fresh spinach & cooling mint leaves. Finished with a hint of ginger zest & a splash of lemon brightness for your green detox.',
    calories: 45,
    price: '₹49',
    image: '/menu images/menu IMG/menu2/Green Glow Elixir.jpg',
    category: 'Drinks',
  },
  {
    name: 'Kesar-e-Pista Bowl',
    description: 'When pistachios have a hint of rich saffron, blended with bananas, flavored with rose & cardamom powder, with a nutty experience inside, it creates a guilt-free royal aura.',
    calories: 240,
    price: '₹99',
    image: '/menu images/menu IMG/menu2/Kesar-e-Pista Bowl.jpg',
    category: 'Desserts',
  },
  {
    name: 'Bliss Balls',
    description: 'A ball made with almonds, seedless dates, dry coconut powder, cacao powder, cinnamon powder, jaggery powder, chia seeds, & a pinch of rock salt. Rolled in a decorative mix of almonds, pistachios, white sesame seeds, & poppy seeds for a wholesome, nutrient-rich treat.',
    calories: 120,
    price: '₹49',
    image: '/menu images/menu IMG/menu images/blissballs.png',
    category: 'Desserts',
  },
  {
    name: 'Royal Kaju Katli',
    description: 'Creamy cashews meet the earthy sweetness of jaggery powder, finished with a touch of luxury in silver vark — a classic indulgence with a royal flair.',
    calories: 140,
    price: '₹39',
    image: '/menu images/menu IMG/menu images/royalkajukatli.png',
    category: 'Desserts',
  },
  {
    name: 'Shahi Anjeer Roll',
    description: 'A rich blend of nature\'s sweets and nuts — figs, seedless dates, raisins, and crunchy almonds, pistachios, and cashews, lightly moistened with water and sprinkled with poppy seeds for a wholesome, energizing treat.',
    calories: 150,
    price: '₹39',
    image: '/menu images/menu IMG/menu images/shahianjeerrolls.png',
    category: 'Desserts',
  },
  {
    name: 'Sat-too Much Protein',
    description: 'A hearty, protein-packed sattu drink, spiced with black pepper, cumin, lemon, & black salt, chilled with mint & coriander. The OG of protein drinks.',
    calories: 180,
    price: '₹59',
    image: '/menu images/menu IMG/menu2/Sat-too Much Protein.jpg',
    category: 'Drinks',
  },
  {
    name: 'Nutty Choco Meltz',
    description: 'A luscious fusion of creamy cashews, earthy jaggery, and bold cacao, uplifted by vanilla, rock salt, and smooth coconut oil — pure indulgence, naturally crafted.',
    calories: 160,
    price: '₹69',
    image: '/menu images/menu IMG/menu images/nuttychocomeltz.png',
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