import { useState } from 'react';
import { Filter, Search, ArrowRight } from 'lucide-react';
import USPIcons from '../components/USPIcons';

// Menu items array (sweets)
const menuItems = [
  // --- SALADS ---
  {
    name: 'Garden Blossom Salad',
    description: 'Bright lettuce, cucumber, sweet corn, tomato, & bell peppers in an affair with a creamy cashew dressing topped with pomegranate, raisins, & roasted black sesame seeds.',
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
    description: 'A garden-fresh mix of broccoli, baby corn, & bell peppers with oregano, enveloped in rich cashew–coconut creaminess.',
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
    description: 'A tropical crunch that demands the presence of raw papaya, carrots, roasted peanuts, lemon, green chilli, & jaggery, smothered with peanut dressing & coriander on top.',
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
    description: 'Freshly grated carrots & homegrown sprouts (alfalfa, fenugreek, radish, clover) tossed with mint leaves, soaked cashews, & raisins — all drizzled with a zesty tahini dressing of sesame seeds, dates, jaggery, lemon, green chilli, & rock salt.',
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
    description: 'Colorful medley of cauliflower, cumin, tomatoes, & seasonal veggies, finished with a mustard dressing of cashews, mustard seeds, jaggery, lemon juice, & a pinch of rock salt.',
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
    description: 'Hearty & fresh bowl of Barley with pumpkin, pomegranate, & beetroot richness, in fusion with a green mix of lettuce, spinach, dried thyme, & oregano, made guilt-free with a homemade dressing of tahini, mint leaves, green chilli, & lemon juice.',
    calories: 380,
    price: '₹89',
    image: '/menu images/menu IMG/menu2/Jau-Dropping Bowl.jpg',
    prepTime: '10 min',
    rating: 4.9,
    category: 'Salads',
    ingredients: ['Barley', 'Nut Butter', 'Seasonal Fruit', 'Honey'],
    benefits: ['Slow Energy', 'Fiber Rich', 'Weight Management'],
    isVegan: false,
    isGlutenFree: false
  },
  {
    name: 'Protein Pulse Bowl',
    description: 'A protein full bowl of [Choose b/w - Lentil Sprouts/ Soyabean Tofu /Chickpea (kabuli chana) /Kidney Beans (rajma) / Black Eyed Beans (lobhia/chowli)] mixed with tomatoes, capsicum, peanuts, coriander, & creamy peanut curd, all given a toss of pomegranate & grated coconut finish, added green chilli & cumin powder.',
    calories: 450,
    price: '₹99',
    image: '/menu images/menu IMG/menu2/Protein Punch Bowl.jpg',
    prepTime: '12 min',
    rating: 5.0,
    category: 'Salads',
    ingredients: ['Sattu', 'Sprouts', 'Nuts', 'Jaggery'],
    benefits: ['Muscle Recovery', 'Sustained Energy', 'High Protein'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Banana Bliss Shake',
    description: 'A velvety blend of bananas & dates, enriched with coconut milk, lightly spiced with cinnamon for a naturally sweet, creamy delight.',
    calories: 310,
    price: '₹79',
    image: '/menu images/menu IMG/menu2/Banana Bliss Shake.jpg',
    prepTime: '5 min',
    rating: 4.8,
    category: 'Drinks',
    ingredients: ['Banana', 'Almond Milk', 'Dates', 'Cinnamon'],
    benefits: ['Hydration', 'Potassium', 'Naturally Sweet'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Earthy Creamy Bowl',
    description: 'This bowl is rich, nutty, chocolatey, & floral, consisting of almonds, jaggery powder, banana, dates, cacao powder, cinnamon powder, peanut butter, & dry rose petals.',
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
    name: 'Popeye\'s Paradise',
    description: 'Spinach, coconut, & dates mingle with banana, lemon, & cinnamon, with fruits & nuts dancing on top.',
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
    description: 'A refreshing medley of crisp cucumber & juicy apples, delicately balanced with fresh spinach & cooling mint leaves. Finished with a hint of ginger zest & a splash of lemon brightness for your green detox.',
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
    description: 'A vibrant fusion of apple, beetroot, & carrot, brightened with a touch of ginger for an energizing sip.',
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
    description: 'A refreshing blend of coconut milk & mint leaves, uplifted with lemon juice, roasted cumin, black pepper, & a hint of rock salt.',
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
    description: 'The gentle freshness of ash gourd juice, naturally sweet & cooling, a symbol of pure energy. Light, detoxifying, & deeply satvic.',
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
    name: 'Sat-too Much Protein',
    description: 'A hearty, protein-packed sattu drink, spiced with black pepper, cumin, lemon, & black salt, chilled with mint & coriander. The OG of protein drinks.',
    calories: 180,
    price: '₹59',
    image: '/menu images/menu IMG/menu2/Sat-too Much Protein.jpg',
    prepTime: '5 min',
    rating: 4.9,
    category: 'Drinks',
    ingredients: ['Sattu (Roasted Gram)', 'Cumin', 'Pink Salt', 'Lemon'],
    benefits: ['High Protein', 'Sustained Energy', 'Easy to Digest'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Royal Thandai',
    description: 'A cooling festive blend of almonds, fennel, & poppy seeds, featuring a delicate flavor balanced with dates, jaggery, cardamom powder, pepper, & rock salt. Blended with coconut milk, garnished with pistachio, saffron, & rose petals.',
    calories: 220,
    price: '₹89',
    image: '/menu images/menu IMG/menu images/Royal Thandai.jpg',
    prepTime: '10 min',
    rating: 5.0,
    category: 'Drinks',
    ingredients: ['Almonds', 'Coconut Milk', 'Saffron', 'Pistachios'],
    benefits: ['Cooling', 'Festive', 'Rich Nutrients'],
    isVegan: true,
    isGlutenFree: true
  },


  // --- DESSERTS & SWEETS ---
  {
    name: 'Bliss Balls',
    description: 'A ball made with almonds, seedless dates, dry coconut powder, cacao powder, cinnamon powder, jaggery powder, chia seeds, & a pinch of rock salt. Rolled in a decorative mix of almonds, pistachios, white sesame seeds, & poppy seeds for a wholesome, nutrient-rich treat.',
    calories: 120,
    price: '₹49',
    image: '/menu images/menu IMG/menu2/Bliss Balls.jpg',
    prepTime: '5 min',
    rating: 4.9,
    category: 'Desserts',
    ingredients: ['Dates', 'Almonds', 'Cacao', 'Coconut'],
    benefits: ['Natural Energy', 'Healthy Fats', 'Sugar Free'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Nutty Choco Meltz',
    description: 'A luscious fusion of creamy cashews, earthy jaggery, and bold cacao, uplifted by vanilla, rock salt, and smooth coconut oil — pure indulgence, naturally crafted.',
    calories: 160,
    price: '₹69',
    image: '/menu images/Nutty Choco Meltz.png',
    prepTime: '10 min',
    rating: 5.0,
    category: 'Desserts',
    ingredients: ['Dark Cacao', 'Almonds', 'Walnuts', 'Dates'],
    benefits: ['Antioxidants', 'Healthy Fats', 'Mood Booster'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Coco Nutty Laddoo',
    description: 'A simple, wholesome treat made with cashews, raisins, & dry coconut powder. Naturally sweet & rich, these sweet & slightly sour coconut balls are perfect for a quick energy boost.',
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
    description: 'A crunchy celebration of peanuts, almonds, cashews & white sesame seeds powder, bound together with jaggery & a swirl of almond butter, then kissed with fennel & cardamom for a spiced, nostalgic crunch. Just a splash of water, & it\'s magic.',
    calories: 130,
    price: '₹39',
    image: '/menu images/menu IMG/menu images/Trinut Til Bites.png',
    prepTime: '5 min',
    rating: 4.7,
    category: 'Desserts',
    ingredients: ['Sesame Seeds', 'Cashews', 'Almonds', 'Walnuts'],
    benefits: ['Omega-3', 'Mineral Rich', 'Crunchy'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Chocolate Truffle Eclairs',
    description: 'Almond chunks infused with soft dates, cloaked in a luscious chocolate-cashew sauce spun from coconut oil, jaggery, cacao, vanilla, & a dash of rock salt. Drizzled with creamy peanut butter. It\'s not just a treat — it\'s a bite-sized cosmic event.',
    calories: 150,
    price: '₹69',
    image: '/menu images/menu IMG/menu images/Ai pic.png',
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
    description: 'Earthy sattu, sweet dates, & vibrant beetroot juice come together in this soft, spiced treat. Flavored with cardamom, crowned with pistachios, & finished with delicate rose petals — it\'s tradition, reimagined in pink.',
    calories: 110,
    price: '₹29',
    image: '/menu images/menu IMG/menu images/Protein Peda.png',
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
    description: 'Creamy cashews meet the earthy sweetness of jaggery powder, finished with a touch of luxury in silver vark — a classic indulgence with a royal flair.',
    calories: 140,
    price: '₹39',
    image: '/menu images/menu IMG/menu images/kaju katli silver.png',
    prepTime: '10 min',
    rating: 4.9,
    category: 'Desserts',
    ingredients: ['Cashews', 'Dates', 'Saffron'],
    benefits: ['Healthy Fats', 'Traditional', 'Sugar Free'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Anjeer Rolls',
    description: 'A rich blend of nature\'s sweets and nuts — figs, seedless dates, raisins, and crunchy almonds, pistachios, and cashews, lightly moistened with water and sprinkled with poppy seeds for a wholesome, energizing treat.',
    calories: 150,
    price: '₹39',
    image: '/menu images/menu IMG/menu images/Shahi Anjeer Rolls (1).png',
    prepTime: '10 min',
    rating: 4.8,
    category: 'Desserts',
    ingredients: ['Figs (Anjeer)', 'Pista', 'Badam', 'Walnut'],
    benefits: ['Iron Rich', 'Traditional', 'Fiber'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Date Chocolate Bites',
    description: 'Fudgy dates, jaggery, & cacao swirled with coconut oil, finished with a cheeky pinch of rock salt. Sweet, salty, & sinfully good — no non-sense, no guilt.',
    calories: 130,
    price: '₹39',
    image: '/menu images/menu IMG/menu2/Date Chocolate Bites.png',
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
    description: 'A mystical mix of coconut milk & chia seeds, spiced with cinnamon & rock salt, finished with the punch of colorful fruits, raisins, & dates.',
    calories: 180,
    price: '₹79',
    image: '/menu images/menu IMG/menu2/Chia-licious Pudding.jpg',
    prepTime: '10 min',
    rating: 4.7,
    category: 'Smoothies',
    ingredients: ['Chia Seeds', 'Coconut Milk', 'Berries', 'Honey'],
    benefits: ['Omegas', 'Skin Health', 'Fullness'],
    isVegan: false,
    isGlutenFree: true
  },
  {
    name: 'Choco Loco Carnival',
    description: 'Freshly grinded bananas whipped with rich cacao & dates, swirled with creamy coconut milk & peanut butter, lifted by a hint of cinnamon & a cheeky pinch of salt.',
    calories: 290,
    price: '₹89',
    image: '/menu images/menu IMG/menu2/Choco Loco Carnival.jpg',
    prepTime: '12 min',
    rating: 4.9,
    category: 'Smoothies',
    ingredients: ['Cacao', 'Dates', 'Nuts', 'Banana'],
    benefits: ['Mood Lifter', 'Antioxidants', 'Healthy Sweet'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Kesar-e-Pista Bowl',
    description: 'When pistachios have a hint of rich saffron, blended with bananas, flavored with rose & cardamom powder, with a nutty experience inside, it creates a guilt-free royal aura.',
    calories: 240,
    price: '₹99',
    image: '/menu images/menu IMG/menu2/Kesar-e-Pista Bowl.jpg',
    prepTime: '15 min',
    rating: 5.0,
    category: 'Smoothies',
    ingredients: ['Saffron (Kesar)', 'Pistachio', 'Coconut Cream', 'Dates'],
    benefits: ['Heart Health', 'Iron', 'Luxury Experience'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'The Sweet Beet Treat',
    description: 'Banana, apple & pear meet beetroot for a sweet surprise, dressed up with fresh fruits, & roasted nuts.',
    calories: 210,
    price: '₹69',
    image: '/menu images/menu IMG/menu2/The Sweet Beet Treat.jpg',
    prepTime: '20 min',
    rating: 4.6,
    category: 'Smoothies',
    ingredients: ['Beetroot', 'Cashews', 'Jaggery', 'Coconut Milk'],
    benefits: ['Iron Boost', 'Liver Detox', 'Rich Taste'],
    isVegan: true,
    isGlutenFree: true
  },
  {
    name: 'Caramello Nutty Punch',
    description: 'True to its name, this caramel-y bowl is based on creamy walnuts, cashews, almonds & banana, naturally sweetened with dates, & topped with crunchy satvic granola.',
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
      <section className="pt-32 pb-4 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 animate-float opacity-20">
          <div className="w-40 h-40 bg-gradient-to-br from-hunter-200/40 to-calPoly-300/30 rounded-full blur-3xl" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed opacity-20">
          <div className="w-32 h-32 bg-gradient-to-br from-citron-200/4NT_40 to-xanthous-300/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* --- FIX 3: Bottom margin changed from mb-16 to mb-12 --- */}
          <div className="text-center mb-0">
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

      {/* USPs Section */}
      <section className="pb-8 pt-0 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <USPIcons />
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-white/80 backdrop-blur-sm border-b border-hunter-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
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

            {/* Category Filter with Filter Icon */}
            <div className="flex flex-wrap gap-3 items-center">
              <Filter className="w-5 h-5 text-calPoly-600" />
              {[
                { id: 'All', label: 'All' },
                { id: 'Salads', label: 'Salads' },
                { id: 'Smoothies', label: 'Smoothies' },
                { id: 'Drinks', label: 'Drinks' },
                { id: 'Desserts', label: 'Desserts' }
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-body font-semibold transition-all duration-300 ${selectedCategory === category.id
                    ? 'bg-hunter-600 text-white shadow-lg'
                    : 'bg-white/80 text-calPoly-600 hover:bg-hunter-50 hover:text-hunter-700 border border-hunter-200'
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
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
                <a
                  href="https://wa.me/919667899233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-papaya text-calPoly-700 font-body font-semibold text-lg px-8 py-4 rounded-full hover:bg-papaya-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/Detailed Menu.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-transparent text-papaya border-2 border-papaya font-body font-semibold text-lg px-8 py-4 rounded-full hover:bg-papaya hover:text-calPoly-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span>Detailed Menu</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}