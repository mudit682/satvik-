import { useState, useEffect } from 'react';
import { Leaf, Heart, Sparkles, Star, ShoppingCart, ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'Organic Jaggery',
    description: 'Pure, unrefined sweetness from sustainable farms. Rich in iron and minerals, perfect for natural sweetening.',
    image: 'https://images.pexels.com/photos/4022090/pexels-photo-4022090.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: '₹180',
    rating: 4.8,
    category: 'Sweeteners',
    benefits: ['Iron Rich', 'Natural', 'Unrefined'],
    availability: 'In Stock'
  },
  {
    name: 'Herbal Tea Blend',
    description: 'Handcrafted wellness teas with tulsi and ashwagandha. Calming blend for stress relief and immunity.',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: '₹320',
    rating: 4.9,
    category: 'Wellness',
    benefits: ['Stress Relief', 'Immunity', 'Antioxidants'],
    availability: 'In Stock'
  },
  {
    name: 'Cold-Pressed Oils',
    description: 'Coconut and sesame oils extracted with care. Preserves natural nutrients and authentic flavors.',
    image: 'https://images.pexels.com/photos/4021879/pexels-photo-4021879.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: '₹450',
    rating: 4.7,
    category: 'Cooking',
    benefits: ['Cold Pressed', 'Nutrient Rich', 'Pure'],
    availability: 'In Stock'
  },
  {
    name: 'Whole Grain Mix',
    description: 'Brown rice, quinoa, and ancient grains. Complete nutrition in every grain for balanced meals.',
    image: 'https://images.pexels.com/photos/4022038/pexels-photo-4022038.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: '₹280',
    rating: 4.6,
    category: 'Grains',
    benefits: ['Complete Protein', 'Fiber Rich', 'Ancient Grains'],
    availability: 'In Stock'
  },
];

export default function Products() {
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

    const element = document.getElementById('products');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-dutch-50 to-papaya-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 animate-float opacity-20">
        <div className="w-32 h-32 bg-gradient-to-br from-hunter-200/40 to-calPoly-300/30 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-20 left-10 animate-float-delayed opacity-20">
        <div className="w-40 h-40 bg-gradient-to-br from-citron-200/40 to-xanthous-300/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 opacity-100 ${isVisible ? 'md:animate-fade-up' : 'md:opacity-0'}`}>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-calPoly-700 mb-6 leading-tight">
            Satvify <span className="bg-gradient-to-r from-hunter-600 to-calPoly-600 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="font-body text-xl text-calPoly-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Bring <span className="font-semibold text-hunter-600">sattvik goodness</span> into your kitchen with our carefully curated selection of pure, organic ingredients
          </p>
          
          {/* Product Philosophy */}
          <div className="bg-gradient-to-r from-hunter-50 to-calPoly-50 p-8 rounded-3xl border border-hunter-200/50 max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Heart className="w-8 h-8 text-hunter-600" />
              <h3 className="font-heading text-2xl font-bold text-calPoly-700">Our Ingredient Promise</h3>
              <Heart className="w-8 h-8 text-hunter-600" />
            </div>
            <p className="font-body text-lg text-calPoly-600 leading-relaxed">
              Every product is sourced from <span className="font-semibold text-hunter-600">trusted organic farms</span>, 
              processed with <span className="font-semibold text-hunter-600">minimal intervention</span>, and delivered with 
              <span className="font-semibold text-hunter-600"> complete transparency</span> about its journey from farm to your table.
            </p>
          </div>
        </div>

        {/* Product Stats */}
        <div className={`grid md:grid-cols-4 gap-6 mb-16 opacity-100 ${isVisible ? 'md:animate-fade-up' : 'md:opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-hunter-500 to-calPoly-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <img src="/Chakra.png" alt="Chakra" className="w-6 h-6" />
            </div>
            <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">100%</div>
            <div className="font-body text-calPoly-600">Organic Certified</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-citron-500 to-hunter-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">Zero</div>
            <div className="font-body text-calPoly-600">Artificial Additives</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-xanthous-500 to-hunter-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">Farm</div>
            <div className="font-body text-calPoly-600">Direct Sourced</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-hunter-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">4.8★</div>
            <div className="font-body text-calPoly-600">Customer Rating</div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group opacity-100 ${isVisible ? 'md:animate-fade-up' : 'md:opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hunter-600/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="font-body text-sm font-semibold text-hunter-600">{product.category}</span>
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-xanthous-600 fill-current" />
                    <span className="font-body text-sm font-semibold text-calPoly-700">{product.rating}</span>
                  </div>
                  
                  {/* Availability */}
                  <div className="absolute bottom-4 left-4 bg-green-100 text-green-700 px-3 py-1.5 rounded-full">
                    <span className="font-body text-sm font-semibold">{product.availability}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading text-xl font-bold text-calPoly-700 mb-3">
                    {product.name}
                  </h3>
                  <p className="font-body text-calPoly-600 mb-4 leading-relaxed flex-grow text-sm">
                    {product.description}
                  </p>
                  
                  {/* Benefits */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="bg-hunter-100 text-hunter-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price and Order */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-heading text-2xl font-bold text-hunter-600">{product.price}</span>
                    <button aria-label="Add to cart" title="Add to cart" className="flex items-center gap-2 bg-gradient-to-r from-hunter-600 to-hunter-700 text-white px-4 py-2 rounded-full hover:from-hunter-700 hover:to-hunter-800 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg group">
                      <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center opacity-100 ${isVisible ? 'md:animate-fade-up' : 'md:opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-hunter-50 to-calPoly-50 p-8 rounded-3xl border border-hunter-200/50 max-w-4xl mx-auto">
            <h3 className="font-heading text-3xl font-bold text-calPoly-700 mb-4">
              Transform Your Kitchen with Pure Ingredients
            </h3>
            <p className="font-body text-lg text-calPoly-600 mb-6 leading-relaxed">
              Stock your pantry with the finest organic ingredients, sourced directly from sustainable farms and delivered to your doorstep.
            </p>
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-hunter-600 to-hunter-700 text-white font-body font-semibold text-lg px-8 py-4 rounded-full hover:from-hunter-700 hover:to-hunter-800 transition-all duration-300 hover:scale-105 shadow-lg">
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5" />
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}
