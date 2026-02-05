import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Users, ThumbsUp, Sprout, Utensils } from 'lucide-react';

// --- DATA CLEANED UP: Removed role, location, experience, and favorite ---
const testimonials = [
  {
    name: 'Manju Gupta',
    image: '/Testimonials/IMG_3872 - Manju Gupta.jpeg',
    text: 'Thali amount was appropriate and taste was so nice. It was good and sweetness was perfect. Overall food was good.',
    rating: 4.5,
  },
  {
    name: 'Pooja',
    image: '/Testimonials/pooja.jpg',
    text: 'The salad bowl was wonderful—fresh ingredients, great balance of flavors, and beautifully presented. The thandai was refreshing and perfectly balanced. Absolutely loved the smoothie bowl – fresh, vibrant, and delicious!',
    rating: 5,
  },
  {
    name: 'Ramesh Poonia',
    image: 'https://i.fbcd.co/products/resized/resized-750-500/1806-m10-i002-n009-e06p-91a842e4e10f8d9d10795231b8f778bee243808b34e3409ad18e05a7bc04cae6.jpg',
    text: 'I like your Garden Blossom Salad Bowl 🥗. It is in perfect quantity for one person. Packing also good.',
    rating: 5,
  },
  {
    name: 'Akshay Kumar Yadav',
    image: '/Testimonials/akshay.jpg',
    text: 'Healthy yummy meal. Very delicious healthy meal😋',
    rating: 5,
  },
  {
    name: 'Tania',
    // --- FIX: Updated image path to nodp.jpeg ---
    image: 'https://i.fbcd.co/products/resized/resized-750-500/1806-m10-i002-n009-e14p-8bbc2507800e9178d5464d9cee53017a51fe88a31e1251c02165ab75b4e8d5ef.jpg',
    text: 'The salad was so fresh and delectable with the healthiest possible ingredients. really really loved it 💕 thank you so much',
    rating: 5,
  },
  {
    name: 'Nandni Singla',
    image: '/Testimonials/nandni.jpg',
    text: 'The salad is quite good and upto mark. Taste is perfectly balanced between salty and sweet. It is fresh and crunchy. Overall taste and blend was good.',
    rating: 4.5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-calPoly-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 animate-float opacity-20">
        <div className="w-32 h-32 bg-gradient-to-br from-white/10 to-citron-300/10 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-20 left-10 animate-float-delayed opacity-20">
        <div className="w-40 h-40 bg-gradient-to-br from-white/10 to-xanthous-300/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            What Our Community Says
          </h2>
          <p className="font-body text-xl text-papaya-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Real stories from people transforming their health with <span className="font-semibold text-papaya-50">Satvify</span>.
          </p>

          {/* Trust Statement */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Quote className="w-8 h-8 text-white" />
              <h3 className="font-heading text-2xl font-bold text-white">Authentic Experiences</h3>
              <Quote className="w-8 h-8 text-white" />
            </div>
            <p className="font-body text-lg text-papaya-100 leading-relaxed">
              These are real stories from real people who have made <span className="font-semibold text-papaya-50">Satvify</span> a part of their wellness journey.
              Their words reflect the genuine impact of pure, Satvic nutrition on their lives.
            </p>
          </div>
        </div>

        {/* Testimonials Carousel (Card is bg-white, so no changes needed inside) */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Customer Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-hunter-100">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover scale-125"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-hunter-500 to-calPoly-600 rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Rating */}
                <div className="flex justify-center lg:justify-start gap-1 mb-6">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-xanthous-500 text-xanthous-500" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-body text-xl md:text-2xl text-calPoly-600 mb-8 italic leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="space-y-2">
                  <h4 className="font-heading text-2xl font-bold text-calPoly-700">
                    {testimonials[currentIndex].name}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons (bg-white, no changes needed) */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-4 shadow-xl hover:bg-hunter-50 transition-all duration-300 hover:scale-110 border border-hunter-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-calPoly-700" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-4 shadow-xl hover:bg-hunter-50 transition-all duration-300 hover:scale-110 border border-hunter-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-calPoly-700" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-3 mb-16">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-12' : 'bg-white/50 w-3'
                }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-5 gap-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
          <div className="bg-papaya p-6 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-calPoly-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">100+</div>
            <div className="font-body text-calPoly-600 font-medium">Happy Customers</div>
          </div>

          <div className="bg-papaya p-6 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-calPoly-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <ThumbsUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">95%</div>
            <div className="font-body text-calPoly-600 font-medium">Would Recommend</div>
          </div>

          <div className="bg-papaya p-6 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-calPoly-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">98%</div>
            <div className="font-body text-calPoly-600 font-medium">appreciated freshness</div>
          </div>

          <div className="bg-papaya p-6 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-calPoly-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Utensils className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">86%</div>
            <div className="font-body text-calPoly-600 font-medium">Irresistible Taste</div>
          </div>

          <div className="bg-papaya p-6 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-calPoly-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">4.5★</div>
            <div className="font-body text-calPoly-600 font-medium">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}