import { useState, useRef } from 'react';
import { Star, Quote, Heart, Users, Send, Sprout, ThumbsUp, Utensils } from 'lucide-react';

type Testimonial = {
  name: string;
  location: string;
  quote: string;
  favorite: string;
  image: string;
  rating: number;
  monthsWithUs: number;
};

// --- FIXES APPLIED TO THE DATA ---
const testimonials: Testimonial[] = [
  {
    name: 'Manju Gupta',
    location: 'Gurgaon',
    quote: 'Quantity was appropriate and taste was so nice. It was good and sweetness was perfect. Overall food was good.',
    favorite: 'Satvic Thali',
    image: '/Testimonials/IMG_3872 - Manju Gupta.jpeg',
    rating: 4.5,
    monthsWithUs: 2,
  },
  {
    name: 'Pooja',
    location: 'Gurgaon',
    quote: 'The salad bowl was wonderful—fresh ingredients, great balance of flavors, and beautifully presented. The thandai was refreshing and perfectly balanced. Absolutely loved the smoothie bowl – fresh, vibrant, and delicious!',
    favorite: 'Garden Blossom Salad',
    image: '/Testimonials/pooja.jpg',
    rating: 5,
    monthsWithUs: 3,
  },
  {
    name: 'Ramesh Poonia',
    location: 'Gurgaon',
    quote: 'I like your Garden Blossom Salad Bowl 🥗. It is in perfect quantity for one person. Packing also good.',
    favorite: 'Garden Blossom Salad',
    image: 'https://i.fbcd.co/products/resized/resized-750-500/1806-m10-i002-n009-e06p-91a842e4e10f8d9d10795231b8f778bee243808b34e3409ad18e05a7bc04cae6.jpg',
    rating: 5,
    monthsWithUs: 1,
  },
  {
    name: 'Akshay Kumar Yadav',
    location: 'Gurgaon',
    quote: 'Healthy yummy meal. Very delicious healthy meal😋.',
    favorite: 'Satvic Meals',
    image: '/Testimonials/akshay.jpg',
    rating: 5,
    monthsWithUs: 2,
  },
  {
    name: 'Tania',
    location: 'Gurgaon',
    quote: 'The salad was so fresh and delectable with the healthiest possible ingredients. really really loved it 💕 thank you so much.',
    favorite: 'Fresh Salad',
    image: 'https://i.fbcd.co/products/resized/resized-750-500/1806-m10-i002-n009-e14p-8bbc2507800e9178d5464d9cee53017a51fe88a31e1251c02165ab75b4e8d5ef.jpg',
    rating: 5,
    monthsWithUs: 1,
  },
  {
    name: 'Nandni Singla',
    location: 'Gurgaon',
    quote: 'The salad is quite good and upto mark. Taste is perfectly balanced between salty and sweet. It is fresh and crunchy. Overall taste and blend was good.',
    favorite: 'Garden Blossom Salad',
    image: '/Testimonials/nandni.jpg',
    rating: 4.5,
    monthsWithUs: 2,
  },
  {
    name: 'Apoorva',
    location: 'Gurgaon',
    quote: 'I tasted Satvify meals, Garden Blossom salad bowl. It was obviously very healthy. The ingredients were very very fresh. It had a lot of different ingredients. Dressing was very nice and it came in a sustainable packaging which retained the taste.',
    favorite: 'Garden Blossom Salad',
    image: '/Testimonials/apoorva.jpg',
    rating: 5,
    monthsWithUs: 3,
  },
  {
    name: 'Kalpana',
    location: 'Gurgaon',
    quote: 'Hi, I just tried the Choco Loco Smoothie from Satvify and it was absolutely delicious! It\'s super refreshing, wholesome, and guilt-free — the perfect mix of taste and health. Highly recommend Satvify to anyone who loves clean, satvic food!',
    favorite: 'Choco Loco Smoothie',
    image: '/Testimonials/kalpana.jpg',
    rating: 5,
    monthsWithUs: 2,
  },
  {
    name: 'Kanika Arora',
    location: 'Gurgaon',
    quote: 'Beautifully balanced and refreshing – every ingredient complemented the others perfectly. A really satisfying and wholesome salad. It felt light but still filling.',
    favorite: 'Garden Blossom Salad',
    image: '/Testimonials/kanika.jpg',
    rating: 5,
    monthsWithUs: 1,
  },
  {
    name: 'Kiran Arora',
    location: 'Gurgaon',
    quote: 'Taste was yummy, healthy and fresh. It\'s tasty and sugar is accurate portion. Yummy but it should be sealed pack. Its simple and healthy as we cooked in fasting.',
    favorite: 'Satvic Meals',
    image: '/Testimonials/kiran.jpg',
    rating: 4.5,
    monthsWithUs: 2,
  },
  {
    name: 'Manu Khurana',
    location: 'Gurgaon',
    quote: 'Smoothie was good and refreshing. Seeds on top of it was USP of the dish. Will share video afterwards when I try all options.',
    favorite: 'Smoothie Bowl',
    image: '/Testimonials/manu.jpg',
    rating: 4.5,
    monthsWithUs: 1,
  },
  {
    name: 'Shweta',
    location: 'Gurgaon',
    quote: 'I was very happy and satisfied with the meal. It was really delicious and filling i couldn\'t believe that a salad can also be so tasty!',
    favorite: 'Garden Blossom Salad',
    image: '/Testimonials/manju.jpg',
    rating: 5,
    monthsWithUs: 1,
  },
  {
    name: 'Akansha Gupta',
    location: 'Gurgaon',
    quote: 'It was quite chocolaty and yummy which is good for kids. Overall sweetness and calories count could be improved.',
    favorite: 'Choco Loco Smoothie',
    image: 'https://i.fbcd.co/products/resized/resized-750-500/1806-m10-i002-n009-e14p-8bbc2507800e9178d5464d9cee53017a51fe88a31e1251c02165ab75b4e8d5ef.jpg',
    rating: 4,
    monthsWithUs: 1,
  },
];

export default function TestimonialsPage() {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [reviewForm, setReviewForm] = useState({ name: '', rating: 5, quote: '', favorite: '' });
  const formRef = useRef<HTMLDivElement>(null);



  const handleWriteReview = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleRatingClick = (rating: number) => {
    setReviewForm(prev => ({ ...prev, rating }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReviewForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Submitted Review:', reviewForm);
    setFormSubmitted(true);
    setReviewForm({ name: '', rating: 5, quote: '', favorite: '' });
    setTimeout(() => {
      setFormSubmitted(false);
      setShowForm(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-papaya-50">
      {/* Hero */}
      {/* --- FIX 1: Changed background to bg-white --- */}
      <section className="pt-32 pb-24 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 animate-float opacity-20">
          <div className="w-40 h-40 bg-gradient-to-br from-hunter-200/40 to-calPoly-300/30 rounded-full blur-3xl" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed opacity-20">
          <div className="w-32 h-32 bg-gradient-to-br from-citron-200/40 to-xanthous-300/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-calPoly-700 mb-6 leading-tight">
            What Our Customers Say
          </h1>
          <p className="font-body text-xl text-calPoly-600 max-w-3xl mx-auto leading-relaxed">
            Stories of real transformation through pure, plant-based food—crafted with love and intention.
          </p>

          {/* Trust Stats */}
          {/* --- FIX 2 & 3: Card bg changed to 'bg-papaya', icon bg to 'bg-calPoly-700' --- */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12 max-w-7xl mx-auto">
            <div className="bg-papaya p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-calPoly-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">100+</div>
              <div className="font-body text-calPoly-600">Happy Customers</div>
            </div>
            <div className="bg-papaya p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-calPoly-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">95%</div>
              <div className="font-body text-calPoly-600">Would Recommend</div>
            </div>
            <div className="bg-papaya p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-calPoly-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">98%</div>
              <div className="font-body text-calPoly-600">Appreciated Freshness</div>
            </div>
            <div className="bg-papaya p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-calPoly-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">99%</div>
              <div className="font-body text-calPoly-600">Loved Taste</div>
            </div>
            <div className="bg-papaya p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-calPoly-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">4.5★</div>
              <div className="font-body text-calPoly-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-8 pt-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/50 group h-full"
              >
                <div className="p-6 flex flex-col h-full">
                  <Quote className="w-6 h-6 text-hunter-600 mb-4 opacity-80" />
                  <p className="font-body text-calPoly-700 leading-relaxed mb-6 flex-grow">{t.quote}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover scale-125" />
                      </div>
                      <div>
                        <div className="font-heading font-bold text-calPoly-700">{t.name}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.round(t.rating) ? 'text-xanthous-500' : 'text-calPoly-300'} fill-current`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-calPoly-700 p-8 rounded-3xl max-w-4xl mx-auto text-center shadow-lg">
            <h3 className="font-heading text-3xl font-bold text-white mb-4">
              Share Your Satvify Story
            </h3>
            <p className="font-body text-lg text-papaya-100 mb-6 leading-relaxed">
              Your journey inspires others to choose purity and presence. Tell us how clean eating changed your day.
            </p>
            <button
              onClick={handleWriteReview}
              className="inline-flex items-center gap-3 bg-papaya text-calPoly-700 font-body font-semibold text-lg px-8 py-4 rounded-full hover:bg-papaya-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>Write a Review</span>
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Review Form Section */}
      {showForm && (
        <section ref={formRef} className="py-16 bg-white animate-fade-up">
          <div className="container mx-auto px-6 max-w-2xl">
            <div className="bg-papaya p-6 md:p-12 rounded-3xl shadow-2xl border border-hunter-100">
              <div className="text-center mb-10">
                <h3 className="font-heading text-3xl font-bold text-calPoly-700 mb-2">Write Your Review</h3>
                <p className="font-body text-calPoly-600">How was your Satvify experience?</p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-10 animate-scale-in">
                  <div className="w-20 h-20 bg-hunter-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-hunter-600 animate-pulse" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-calPoly-700 mb-4">Thank You!</h4>
                  <p className="font-body text-calPoly-600">Your review has been submitted for verification.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Rating Selector */}
                  <div className="flex flex-col items-center gap-2 mb-6">
                    <label className="font-body text-sm font-semibold text-calPoly-700">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingClick(star)}
                          className="focus:outline-none transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-8 h-8 ${star <= reviewForm.rating ? 'fill-xanthous-500 text-xanthous-500' : 'text-hunter-200'}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label htmlFor="rev-name" className="font-body text-sm text-calPoly-600 mb-2">Name</label>
                      <input
                        id="rev-name"
                        name="name"
                        value={reviewForm.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your name"
                        className="w-full border border-hunter-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hunter-300 bg-white"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="rev-fav" className="font-body text-sm text-calPoly-600 mb-2">Favorite Dish</label>
                      <input
                        id="rev-fav"
                        name="favorite"
                        value={reviewForm.favorite}
                        onChange={handleInputChange}
                        placeholder="e.g. Satvic Thali"
                        className="w-full border border-hunter-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hunter-300 bg-white"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="rev-quote" className="font-body text-sm text-calPoly-600 mb-2">Your Review</label>
                    <textarea
                      id="rev-quote"
                      name="quote"
                      value={reviewForm.quote}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Share your experience..."
                      className="border border-hunter-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hunter-300 bg-white"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-hunter-600 to-hunter-700 text-white font-body font-semibold text-lg px-8 py-4 rounded-full hover:from-hunter-700 hover:to-hunter-800 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <span>Submit Review</span>
                      <Send className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-8 py-4 rounded-full border border-hunter-200 text-hunter-600 hover:bg-hunter-50 transition-all text-center"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}