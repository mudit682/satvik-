import { useState, useEffect } from 'react';
import { Truck, Recycle, Heart, Sparkles, Clock, Shield, ArrowRight } from 'lucide-react';



const reasons = [
  {
    icon: Recycle,
    title: '100% Plant-Based',
    description: 'Completely vegan and preservative-free meals crafted with compassion and respect for all life.',
    benefits: ['No Animal Products', 'Preservative-Free', 'Compassionate'],
    color: 'from-hunter-500 to-calPoly-600',
    bgColor: 'bg-hunter-50'
  },
  {
    icon: Truck,
    title: 'Delivered Fresh',
    description: 'Available via Swiggy, Zomato, and WhatsApp for your convenience. Fresh meals delivered to your doorstep.',
    benefits: ['Multiple Platforms', 'Quick Delivery', 'Always Fresh'],
    color: 'from-citron-500 to-hunter-500',
    bgColor: 'bg-citron-50'
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly',
    description: 'Sustainable practices and mindfully crafted with love for our planet and future generations.',
    benefits: ['Zero Waste', 'Sustainable', 'Planet-Conscious'],
    color: 'from-teal-500 to-hunter-500',
    bgColor: 'bg-teal-50'
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every dish is prepared with intention, care, and genuine love for nourishing your well-being.',
    benefits: ['Handcrafted', 'Intention-Based', 'Nurturing'],
    color: 'from-xanthous-500 to-hunter-500',
    bgColor: 'bg-xanthous-50'
  },
  {
    icon: Clock,
    title: 'Quick & Convenient',
    description: 'Ready in minutes, perfect for busy lifestyles without compromising on nutrition or taste.',
    benefits: ['Fast Prep', 'Busy-Friendly', 'Nutritious'],
    color: 'from-coyote-500 to-hunter-500',
    bgColor: 'bg-coyote-50'
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Rigorous quality checks ensure every meal meets our high standards for purity and nutrition.',
    benefits: ['Quality Tested', 'Certified Organic', 'Safe'],
    color: 'from-dutch-500 to-hunter-500',
    bgColor: 'bg-dutch-50'
  },
];

export default function WhyChoose() {
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

    const element = document.getElementById('why-choose');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="why-choose" className="py-24 bg-gradient-to-br from-hunter-500 via-calPoly-600 to-hunter-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <div className="w-40 h-40 bg-gradient-to-br from-hunter-200/40 to-calPoly-300/30 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float-delayed opacity-20">
        <div className="w-32 h-32 bg-gradient-to-br from-citron-200/40 to-xanthous-300/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 opacity-100 ${isVisible ? 'md:animate-fade-up' : 'md:opacity-0'}`}>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Why Choose <span className="bg-gradient-to-r from-citron-300 to-xanthous-300 bg-clip-text text-transparent">Satvify</span>?
          </h2>
          <p className="font-body text-xl text-papaya-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Experience the difference that <span className="font-semibold text-citron-300">purity</span>, <span className="font-semibold text-citron-300">dedication</span>, and <span className="font-semibold text-citron-300">love</span> make in every meal
          </p>

          {/* Value Proposition */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Heart className="w-8 h-8 text-citron-300" />
              <h3 className="font-heading text-2xl font-bold text-white">Our Commitment to You</h3>
              <Heart className="w-8 h-8 text-citron-300" />
            </div>
            <p className="font-body text-lg text-papaya-100 leading-relaxed">
              We don't just serve food; we create <span className="font-semibold text-citron-300">experiences</span> that nourish your body,
              uplift your spirit, and contribute to a <span className="font-semibold text-citron-300">healthier planet</span>.
              Every choice we make reflects our deep commitment to your well-being.
            </p>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className={`group opacity-100 ${isVisible ? 'md:animate-fade-up' : 'md:opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${reason.bgColor} backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/50 h-full flex flex-col relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-12 translate-x-12" />

                  <div className="relative z-10 flex flex-col items-center text-center h-full">
                    {/* Icon */}
                    <div className="relative inline-block mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${reason.color} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-heading text-2xl font-bold text-calPoly-700 mb-4">
                      {reason.title}
                    </h3>
                    <p className="font-body text-calPoly-600 leading-relaxed mb-6 flex-grow">
                      {reason.description}
                    </p>

                    {/* Benefits */}
                    <div className="w-full">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {reason.benefits.map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className="bg-white/60 backdrop-blur-sm text-hunter-700 px-3 py-1 rounded-full text-xs font-semibold">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className={`grid md:grid-cols-4 gap-6 mb-16 opacity-100 ${isVisible ? 'md:animate-fade-up' : 'md:opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-hunter-500 to-calPoly-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <img src="/Chakra.png" alt="Chakra" className="w-6 h-6" />
            </div>
            <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">500+</div>
            <div className="font-body text-calPoly-600">Happy Customers</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-citron-500 to-hunter-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">2 Years</div>
            <div className="font-body text-calPoly-600">Experience</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-xanthous-500 to-hunter-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">100%</div>
            <div className="font-body text-calPoly-600">Satisfaction</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-hunter-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">24/7</div>
            <div className="font-body text-calPoly-600">Support</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center opacity-100 ${isVisible ? 'md:animate-fade-up' : 'md:opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-hunter-50 to-calPoly-50 p-8 rounded-3xl border border-hunter-200/50 max-w-4xl mx-auto">
            <h3 className="font-heading text-3xl font-bold text-calPoly-700 mb-4">
              Ready to Experience the Satvify Difference?
            </h3>
            <p className="font-body text-lg text-calPoly-600 mb-6 leading-relaxed">
              Join hundreds of satisfied customers who have transformed their health and well-being with our pure, plant-based meals.
            </p>
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-hunter-600 to-hunter-700 text-white font-body font-semibold text-lg px-8 py-4 rounded-full hover:from-hunter-700 hover:to-hunter-800 transition-all duration-300 hover:scale-105 shadow-lg">
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
