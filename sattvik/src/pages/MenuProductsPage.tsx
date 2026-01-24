import { useState } from 'react';
import { ShoppingCart, Flame, Clock, Star, Filter, Search, Leaf, Heart, Sparkles, ArrowRight } from 'lucide-react'; // Added ArrowRight

// Menu items array (sweets)
const menuItems = [
  // --- SALADS ---
  {
    name: 'Garden Blossom Salad',
    description: 'A vibrant garden medley with fresh greens, in-house peanut curd dressing and protein-rich sprouts.',
    calories: 220,
    price: '₹99',
    image: '/menu images/menu IMG/menu2/Garden Blossom Salad.jpg',
    prepTime: '12 min',
    rating: 5.0,
    category: 'Salads',
    ingredients: ['Fresh Greens', 'Edible Flowers', 'Citrus Honey', 'Cucumber'],
    benefits: ['Hydrating', 'Skin Glow', 'Vitamins'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Exotic Cheesy Salad',
    description: 'Crispy seasonal vegetables tossed with plant-based "cheese" and herb-infused oil.',
    calories: 280,
    price: '₹99',
    image: '/menu images/menu IMG/menu2/Exotic Cheesy Salad.jpg',
    prepTime: '15 min',
    rating: 4.8,
    category: 'Salads',
    ingredients: ['Bell Peppers', 'Vegan Cheese', 'Herb Oil', 'Cherry Tomatoes'],
    benefits: ['High Fiber', 'Antioxidants', 'Satisfying'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Thai Papaya Zest',
    description: 'A zesty Thai-inspired salad with raw papaya, peanuts, and a tangy tamarind dressing.',
    calories: 190,
    price: '₹89',
    image: '/menu images/menu IMG/menu2/Thai Papaya Zest.jpg',
    prepTime: '10 min',
    rating: 4.7,
    category: 'Salads',
    ingredients: ['Raw Papaya', 'Peanuts', 'Tamarind', 'Chili'],
    benefits: ['Digestion', 'Immunity', 'Low Calorie'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Sunshine Carrot Crunch',
    description: 'Grated carrots, raisins, and walnuts with a hint of lemon and black pepper.',
    calories: 150,
    price: '₹79',
    image: '/menu images/menu IMG/menu2/Sunshine Carrot Crunch.jpg',
    prepTime: '8 min',
    rating: 4.6,
    category: 'Salads',
    ingredients: ['Carrots', 'Walnuts', 'Raisins', 'Lemon'],
    benefits: ['Eye Health', 'Energy Boost', 'Raw Power'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Cauli-fornia Dreamin',
    description: 'Roasted cauliflower florets with tahini drizzle and pomegranate pearls.',
    calories: 210,
    price: '₹89',
    image: '/menu images/menu IMG/menu2/Cauli-fornia Dreamin.jpeg.jpg',
    prepTime: '18 min',
    rating: 4.9,
    category: 'Salads',
    ingredients: ['Cauliflower', 'Tahini', 'Pomegranate', 'Cumin'],
    benefits: ['Detox', 'Heart Health', 'Manganese'],
    isVegan: true,
    isGlutenFree: true
  },

  // --- SMOOTHIES & BOWLS ---
  {
    name: 'Jau-Dropping Bowl',
    description: 'Wholesome roasted barley (Jau) mixed with seasonal fruits and nut butter.',
    calories: 380,
    price: '₹89',
    image: '/menu images/menu IMG/menu2/Jau-Dropping Bowl.jpg',
    prepTime: '10 min',
    rating: 4.9,
    category: 'Smoothies',
    ingredients: ['Barley', 'Nut Butter', 'Seasonal Fruit', 'Honey'],
    benefits: ['Slow Energy', 'Fiber Rich', 'Weight Management'],
    isVegan: false,
    isGlutenFree: false
  },
  {
    name: 'Protein Punch Bowl',
    description: 'A power-packed bowl with sattu, sprouts, nuts, and a touch of organic jaggery.',
    calories: 450,
    price: '₹99',
    image: '/menu images/menu IMG/menu2/Protein Punch Bowl.jpg',
    prepTime: '12 min',
    rating: 5.0,
    category: 'Smoothies',
    ingredients: ['Sattu', 'Sprouts', 'Nuts', 'Jaggery'],
    benefits: ['Muscle Recovery', 'Sustained Energy', 'High Protein'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Banana Bliss Shake',
    description: 'Creamy banana blend with almond milk, dates, and a sprinkle of cinnamon.',
    calories: 310,
    price: '₹79',
    image: '/menu images/menu IMG/menu2/Banana Bliss Shake.jpg',
    prepTime: '5 min',
    rating: 4.8,
    category: 'Smoothies',
    ingredients: ['Banana', 'Almond Milk', 'Dates', 'Cinnamon'],
    benefits: ['Hydration', 'Potassium', 'Naturally Sweet'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Earthy Creamy Bowl',
    description: 'A comforting blend of oats, chia, and coconut cream topped with berries.',
    calories: 340,
    price: '₹89',
    image: '/menu images/menu IMG/menu2/Earthy Creamy Bowl.jpg',
    prepTime: '15 min',
    rating: 4.7,
    category: 'Smoothies',
    ingredients: ['Oats', 'Chia Seeds', 'Coconut Cream', 'Berries'],
    benefits: ['Brain Health', 'Omegas', 'Fiber'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Popeye_s Paradise',
    description: 'Green superbowl with spinach, green apple, and protein-rich tofu cubes.',
    calories: 260,
    price: '₹99',
    image: '/menu images/menu IMG/menu2/Popeye_s Paradise.jpg',
    prepTime: '10 min',
    rating: 4.8,
    category: 'Smoothies',
    ingredients: ['Spinach', 'Green Apple', 'Tofu', 'Lemon'],
    benefits: ['Iron Rich', 'Vitamin K', 'Light & Filling'],
    isVegan: true,
    isGlutenFree: true
  },

  // --- DRINKS ---
  {
    name: 'Green Glow Elixir',
    description: 'Refreshing cold-pressed juice with cucumber, mint, and a hint of ginger.',
    calories: 45,
    price: '₹49',
    image: '/menu images/menu IMG/menu2/Green Glow Elixir.jpg',
    prepTime: '5 min',
    rating: 4.9,
    category: 'Drinks',
    ingredients: ['Cucumber', 'Mint', 'Ginger', 'Lemon'],
    benefits: ['Detox', 'Electrolytes', 'Skin Health'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'App-solutely Beety Carroty',
    description: 'Vibrant blend of apple, beetroot, and carrot for the ultimate morning boost.',
    calories: 90,
    price: '₹59',
    image: '/menu images/menu IMG/menu2/App-solutely Beety Carroty.jpg',
    prepTime: '5 min',
    rating: 4.7,
    category: 'Drinks',
    ingredients: ['Apple', 'Beetroot', 'Carrot'],
    benefits: ['Blood Flow', 'Energy', 'Immunity'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Khaas Coconut Chaas',
    description: 'Traditional spiced buttermilk alternative made with fresh coconut milk.',
    calories: 120,
    price: '₹49',
    image: '/menu images/menu IMG/menu2/Khaas Coconut Chaas.jpg',
    prepTime: '5 min',
    rating: 4.8,
    category: 'Drinks',
    ingredients: ['Coconut Milk', 'Jeera', 'Curry Leaves', 'Pink Salt'],
    benefits: ['Cooling', 'Digestion', 'Weight Lite'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Crystal Ash Cooler',
    description: 'Unique cooling drink made from Ash Gourd (Petha) juice with a touch of mint.',
    calories: 30,
    price: '₹49',
    image: '/menu images/menu IMG/menu2/Crystal Ash Cooler.jpg',
    prepTime: '5 min',
    rating: 4.6,
    category: 'Drinks',
    ingredients: ['Ash Gourd', 'Mint', 'Pink Salt'],
    benefits: ['Weight Loss', 'Alkalizing', 'Cooling'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Tropical Bliss',
    description: 'Pure coconut water infused with the sweetness of fresh pineapple and a hint of mint.',
    calories: 120,
    price: '₹59',
    image: '/menu images/menu IMG/menu2/Crystal Ash Cooler.jpg', // Placeholder image
    prepTime: '5 min',
    rating: 4.8,
    category: 'Drinks',
    ingredients: ['Coconut Water', 'Pineapple', 'Mint'],
    benefits: ['Hydrating', 'Refreshing', 'Pure Energy'],
    isVegan: true,
    isGlutenFree: true
  },

  // --- DESSERTS & SWEETS ---
  {
    name: 'Bliss Balls',
    description: 'Power-packed energy bites with dates, almonds, and raw cacao.',
    calories: 120,
    price: '₹49',
    image: '/menu images/menu IMG/menu images/blissballs.png',
    prepTime: '5 min',
    rating: 4.9,
    category: 'Desserts',
    ingredients: ['Dates', 'Almonds', 'Cacao', 'Coconut'],
    benefits: ['Natural Energy', 'Healthy Fats', 'Sugar Free'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Coco Nutty Laddoo',
    description: 'Traditional sweet reimaged with coconut, nuts, and natural sweeteners.',
    calories: 140,
    price: '₹49',
    image: '/menu images/menu IMG/menu images/choconuttyladoo.png',
    prepTime: '5 min',
    rating: 4.8,
    category: 'Desserts',
    ingredients: ['Coconut', 'Cashews', 'Almonds', 'Jaggery'],
    benefits: ['Antioxidants', 'Healthy Fats', 'Fiber'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Trinut Til Bites',
    description: 'Crunchy snack bars with three types of nuts and nutrient-rich sesame seeds.',
    calories: 130,
    price: '₹39',
    image: '/menu images/menu IMG/menu images/trinuttilbites.png',
    prepTime: '5 min',
    rating: 4.7,
    category: 'Desserts',
    ingredients: ['Sesame Seeds', 'Cashews', 'Almonds', 'Walnuts'],
    benefits: ['Omega-3', 'Mineral Rich', 'Crunchy'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Choco Truffle Eclairs',
    description: 'Guilt-free chocolate eclairs made with dates and cocoa butter.',
    calories: 150,
    price: '₹69',
    image: '/menu images/menu IMG/menu images/chocotruffleeclairs.png',
    prepTime: '10 min',
    rating: 4.9,
    category: 'Desserts',
    ingredients: ['Dates', 'Cocoa Butter', 'Vanilla', 'Almonds'],
    benefits: ['Antioxidants', 'Heart Healthy', 'Sweet Tooth Fix'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Protein Peda',
    description: 'Handcrafted protein-rich sweet with nuts and sattu.',
    calories: 110,
    price: '₹29',
    image: '/menu images/menu IMG/menu images/proteinpeda.png',
    prepTime: '5 min',
    rating: 4.8,
    category: 'Desserts',
    ingredients: ['Nut Powder', 'Sattu', 'Cardamom', 'Jaggery'],
    benefits: ['B-Vitamins', 'Slow Carbs', 'Protein'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Royal Kaju Katli',
    description: 'Thin slices of handcrafted cashew goodness with zero refined sugar.',
    calories: 140,
    price: '₹39',
    image: '/menu images/menu IMG/menu images/royalkajukatli.png',
    prepTime: '10 min',
    rating: 4.9,
    category: 'Desserts',
    ingredients: ['Cashews', 'Dates', 'Saffron'],
    benefits: ['Healthy Fats', 'Traditional', 'Sugar Free'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Shahi Anjeer Roll',
    description: 'Luxurious rolls made with premium figs and various nuts.',
    calories: 150,
    price: '₹39',
    image: '/menu images/menu IMG/menu images/shahianjeerrolls.png',
    prepTime: '10 min',
    rating: 4.8,
    category: 'Desserts',
    ingredients: ['Figs (Anjeer)', 'Pista', 'Badam', 'Walnut'],
    benefits: ['Iron Rich', 'Traditional', 'Fiber'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Date Chocolate Barks',
    description: 'Dark, rich chocolate barks sweetened with dates and loaded with seeds.',
    calories: 130,
    price: '₹39',
    image: '/menu images/menu IMG/menu images/datechocolatebarks.png',
    prepTime: '5 min',
    rating: 4.9,
    category: 'Desserts',
    ingredients: ['Dark Cacao', 'Dates', 'Melon Seeds', 'Almonds'],
    benefits: ['Brain Boost', 'Zinc', 'Guilt-Free'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Chia-licious Pudding',
    description: 'Creamy coconut-chia pudding layered with seasonal fruit purees.',
    calories: 180,
    price: '₹79',
    image: '/menu images/menu IMG/menu2/Chia-licious Pudding.jpg',
    prepTime: '10 min',
    rating: 4.7,
    category: 'Desserts',
    ingredients: ['Chia Seeds', 'Coconut Milk', 'Berries', 'Honey'],
    benefits: ['Omegas', 'Skin Health', 'Fullness'],
    isVegan: false,
    isGlutenFree: true
  },
  {
    name: 'Choco Loco Carnival',
    description: 'A decadent chocolate dessert bowl with roasted nuts and date caramel.',
    calories: 290,
    price: '₹89',
    image: '/menu images/menu IMG/menu2/Choco Loco Carnival.jpg',
    prepTime: '12 min',
    rating: 4.9,
    category: 'Desserts',
    ingredients: ['Cacao', 'Dates', 'Nuts', 'Banana'],
    benefits: ['Mood Lifter', 'Antioxidants', 'Healthy Sweet'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Kesar-e-Pista Bowl',
    description: 'A royal saffron and pistachio infused thick creamy dessert.',
    calories: 240,
    price: '₹99',
    image: '/menu images/menu IMG/menu2/Kesar-e-Pista Bowl.jpg',
    prepTime: '15 min',
    rating: 5.0,
    category: 'Desserts',
    ingredients: ['Saffron (Kesar)', 'Pistachio', 'Coconut Cream', 'Dates'],
    benefits: ['Heart Health', 'Iron', 'Luxury Experience'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'The Sweet Beet Treat',
    description: 'Naturally sweet beetroot halwa made with cashews and organic jaggery.',
    calories: 210,
    price: '₹69',
    image: '/menu images/menu IMG/menu2/The Sweet Beet Treat.jpg',
    prepTime: '20 min',
    rating: 4.6,
    category: 'Desserts',
    ingredients: ['Beetroot', 'Cashews', 'Jaggery', 'Coconut Milk'],
    benefits: ['Iron Boost', 'Liver Detox', 'Rich Taste'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Caramello Nutty Punch',
    description: 'A nutty smoothie with a natural date-based caramel twist.',
    calories: 320,
    price: '₹89',
    image: '/menu images/menu IMG/menu2/Caramello Nutty Punch.jpg',
    prepTime: '8 min',
    rating: 4.8,
    category: 'Smoothies',
    ingredients: ['Almond Butter', 'Dates', 'Nuts', 'Sea Salt'],
    benefits: ['Energy Rush', 'Proteins', 'Satisfying'],
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
                placeholder='Search for "Choco Loco Carnival" or "Exotic Cheesy Salad"'
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
                  className={`px-6 py-3 rounded-full font-body font-semibold transition-all duration-300 ${selectedCategory === category
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
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center gap-3 bg-papaya text-calPoly-700 font-body font-semibold text-lg px-8 py-4 rounded-full hover:bg-papaya-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
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