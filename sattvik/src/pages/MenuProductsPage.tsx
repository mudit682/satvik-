import { useState } from 'react';
import { ShoppingCart, Flame, Clock, Star, Filter, Search, Leaf, Heart, Sparkles, ArrowRight } from 'lucide-react'; // Added ArrowRight

// Menu items array (sweets)
const menuItems = [
  {
    name: 'Bliss Balls',
    description: 'A colorful medley of quinoa, roasted vegetables, avocado, and tahini dressing. Pure nourishment in every spoonful.',
    calories: 420,
    price: '₹49',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    prepTime: '15 min',
    rating: 4.9,
    category: 'Desserts',
    ingredients: ['Quinoa', 'Avocado', 'Tahini', 'Fresh Vegetables'],
    benefits: ['High Protein', 'Rich in Fiber', 'Antioxidants'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Coco - Nutty Laddoo',
    description: 'Traditional comfort food reimagined with mung dal, brown rice, turmeric, and healing spices.',
    calories: 350,
    price: '₹49',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
    prepTime: '20 min',
    rating: 4.8,
    category: 'Desserts',
    ingredients: ['Mung Dal', 'Brown Rice', 'Turmeric', 'Healing Spices'],
    benefits: ['Digestive Health', 'Complete Protein', 'Anti-inflammatory'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Trinut Til Bites',
    description: 'Fresh cucumber, celery, spinach, green apple, ginger, and lemon. Alkalize and energize.',
    calories: 120,
    price: '₹39',
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600',
    prepTime: '5 min',
    rating: 4.7,
    category: 'Desserts',
    ingredients: ['Cucumber', 'Celery', 'Spinach', 'Green Apple', 'Ginger'],
    benefits: ['Hydrating', 'Detoxifying', 'Alkalizing'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Choco Truffle Eclairs',
    description: 'Sweet potato, chickpeas, kale, beets, and hummus. A symphony of flavors and nutrients.',
    calories: 480,
    price: '₹69',
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600',
    prepTime: '18 min',
    rating: 4.9,
    category: 'Desserts',
    ingredients: ['Sweet Potato', 'Chickpeas', 'Kale', 'Beets', 'Hummus'],
    benefits: ['Complete Nutrition', 'Plant Protein', 'Vitamins & Minerals'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Protein Peda',
    description: 'Seasonal fruits arranged with coconut yogurt, chia seeds, and raw honey. Nature\'s candy.',
    calories: 280,
    price: '₹29',
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600',
    prepTime: '10 min',
    rating: 4.8,
    category: 'Desserts',
    ingredients: ['Seasonal Fruits', 'Coconut Yogurt', 'Chia Seeds', 'Raw Honey'],
    benefits: ['Natural Sugars', 'Probiotics', 'Omega-3'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Royal Kaju Katli',
    description: 'Handcrafted blend of tulsi, ashwagandha, ginger, and turmeric. Warmth and healing in a cup.',
    calories: 15,
    price: '₹39',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
    prepTime: '8 min',
    rating: 4.6,
    category: 'Desserts',
    ingredients: ['Tulsi', 'Ashwagandha', 'Ginger', 'Turmeric'],
    benefits: ['Stress Relief', 'Immune Support', 'Anti-inflammatory'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Shahi Anjeer Roll',
    description: 'Fresh sprouted moong beans with cucumber, tomatoes, and lemon dressing. Light and energizing.',
    calories: 180,
    price: '₹39',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    prepTime: '12 min',
    rating: 4.5,
    category: 'Desserts',
    ingredients: ['Sprouted Moong', 'Cucumber', 'Tomatoes', 'Lemon'],
    benefits: ['Live Enzymes', 'Protein Rich', 'Digestive'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Date Chocolate Barks',
    description: 'Creamy coconut curry with seasonal vegetables and brown rice. Comforting and nourishing.',
    calories: 420,
    price: '₹39',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
    prepTime: '25 min',
    rating: 4.7,
    category: 'Desserts',
    ingredients: ['Coconut Milk', 'Seasonal Vegetables', 'Brown Rice', 'Curry Spices'],
    benefits: ['Healthy Fats', 'Antioxidants', 'Satisfying'],
    isVegan: true,
    isGlutenFree: true
  }
];

const categories = ['All', 'Signature', 'Salads', 'Smoothies', 'Drinks', 'Desserts'];

export default function MenuProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredItems = menuItems
    .filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseInt(a.price.replace('₹', '')) - parseInt(b.price.replace('₹', ''));
        case 'price-high':
          return parseInt(b.price.replace('₹', '')) - parseInt(a.price.replace('₹', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'calories':
          return a.calories - b.calories;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-papaya-50">
      {/* Hero Section */}
      {/* --- 
        FIX 1: Background changed to bg-white 
        FIX 2: Bottom padding changed from pb-24 to pb-16
      --- */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 animate-float opacity-20">
          <div className="w-40 h-40 bg-gradient-to-br from-hunter-200/40 to-calPoly-300/30 rounded-full blur-3xl" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed opacity-20">
          <div className="w-32 h-32 bg-gradient-to-br from-citron-200/4NT_40 to-xanthous-300/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* --- FIX 3: Bottom margin changed from mb-16 to mb-12 --- */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-calPoly-700 mb-6 leading-tight">
              Menu
            </h1>
            
            <p className="font-body text-xl text-calPoly-600 max-w-4xl mx-auto leading-relaxed">
              Every dish is crafted with <span className="font-semibold text-hunter-600">intention</span> and <span className="font-semibold text-hunter-600">love</span>, 
              using only the purest ingredients to create meals that heal, energize, and bring joy to your daily nourishment journey.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-white/80 backdrop-blur-sm border-b border-hunter-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-calPoly-400" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-calPoly-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-hunter-300 bg-white/80 backdrop-blur-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-body font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-hunter-600 text-white shadow-lg'
                      : 'bg-white/80 text-calPoly-600 hover:bg-hunter-50 hover:text-hunter-700 border border-hunter-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-calPoly-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-calPoly-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-hunter-300 bg-white/80 backdrop-blur-sm"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="calories">Lowest Calories</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
              >
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
                  <h3 className="font-heading text-xl font-bold text-calPoly-700 mb-3">
                    {item.name}
                  </h3>
                  <p className="font-body text-calPoly-600 mb-4 leading-relaxed flex-grow text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-hunter-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-hunter-600" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-calPoly-700 mb-4">
                No dishes found
              </h3>
              <p className="font-body text-calPoly-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-hunter-600 to-hunter-700 text-white font-body font-semibold text-lg px-8 py-4 rounded-full hover:from-hunter-700 hover:to-hunter-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>Clear Filters</span>
                <Filter className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      {/* --- FIX 4: Changed section BG to bg-white --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="bg-calPoly-700 p-8 rounded-3xl max-w-4xl mx-auto">
              <h3 className="font-heading text-3xl font-bold text-white mb-4">
                Ready to Order Your Pure Meal?
              </h3>
              <p className="font-body text-lg text-papaya-100 mb-6 leading-relaxed">
                Experience the transformative power of pure, plant-based nutrition crafted with love and intention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-3 bg-papaya text-calPoly-700 font-body font-semibold text-lg px-8 py-4 rounded-full hover:bg-papaya-100 transition-all duration-300 hover:scale-105 shadow-lg">
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}