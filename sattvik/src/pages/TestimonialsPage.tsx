import { Star, Quote, Heart, Users, Trophy, MessageSquare, Leaf } from 'lucide-react';

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
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
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
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    monthsWithUs: 1,
  },
  {
    name: 'Akshay Kumar Yadav',
    location: 'Gurgaon',
    quote: 'Healthy yummy meal. Very delicious healthy meal😋',
    favorite: 'Satvic Meals',
    image: '/Testimonials/akshay.jpg',
    rating: 5,
    monthsWithUs: 2,
  },
  {
    name: 'Tania',
    location: 'Gurgaon',
    quote: 'The salad was so fresh and delectable with the healthiest possible ingredients. really really loved it 💕 thank you so much',
    favorite: 'Fresh Salad',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
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
    image: '/Testimonials/shweta.jpg',
    rating: 5,
    monthsWithUs: 1,
  },
  {
    name: 'Akansha Goel',
    location: 'Gurgaon',
    quote: 'It was quite chocolaty and yummy which is good for kids. Overall sweetness and calories count could be improved',
    favorite: 'Choco Loco Smoothie',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 4,
    monthsWithUs: 1,
  },
];

export default function TestimonialsPage() {
  const avgRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
            <div className="bg-papaya p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-calPoly-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">{avgRating}★</div>
              <div className="font-body text-calPoly-600">Average Rating</div>
            </div>
            <div className="bg-papaya p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-calPoly-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">100+</div>
              <div className="font-body text-calPoly-600">Happy Customers</div>
            </div>
            <div className="bg-papaya p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-calPoly-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">95%</div>
              <div className="font-body text-calPoly-600">Would Recommend</div>
            </div>
            <div className="bg-papaya p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-calPoly-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-heading font-bold text-calPoly-700 mb-1">13</div>
              <div className="font-body text-calPoly-600">Verified Reviews</div>
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
                      <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
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
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-hunter-200/50 max-w-4xl mx-auto text-center shadow-lg">
            <h3 className="font-heading text-3xl font-bold text-calPoly-700 mb-4">
              Share Your Satvify Story
            </h3>
            <p className="font-body text-lg text-calPoly-600 mb-6 leading-relaxed">
              Your journey inspires others to choose purity and presence. Tell us how clean eating changed your day.
            </p>
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-hunter-600 to-hunter-700 text-white font-body font-semibold text-lg px-8 py-4 rounded-full hover:from-hunter-700 hover:to-hunter-800 transition-all duration-300 hover:scale-105 shadow-lg">
              <span>Write a Review</span>
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}