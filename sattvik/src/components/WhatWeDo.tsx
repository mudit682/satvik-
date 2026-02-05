import React from 'react';
// --- FIX 1: Imported Lucide icons ---
import { Truck, Heart, BadgeCheck } from 'lucide-react';

// 1. Define the props types for TypeScript
interface FeatureCardProps {
  icon: React.ElementType; // <-- FIX 2: Changed from string to ElementType
  title: string;
  description: string;
  tags: string[];
}

// A local component just for this section
const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, tags }) => (
  // --- FIX 3: Changed card background to bg-papaya ---
  <div className="bg-papaya rounded-xl p-6 text-center shadow-lg">
    {/* --- FIX 4: Added dark green bg to icon box, and used Lucide icon --- */}
    <div className="w-16 h-16 bg-calPoly-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
      <Icon className="w-8 h-8 text-white" />
    </div>
    {/* --- FIX 5: Changed text to dark --- */}
    <h3 className="text-xl font-bold text-calPoly-700 mb-2">{title}</h3>
    <p className="text-calPoly-600 text-sm mb-4">{description}</p>
    <div className="flex flex-wrap justify-center gap-2">
      {tags.map((tag: string) => (
        <span key={tag} className="bg-hunter-100 text-hunter-700 text-xs px-3 py-1 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

// 3. Define the main component type
const WhatWeDo: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const images = [
    '/menu images/menu IMG/menu2/Exotic Cheesy Salad.jpg',
    '/menu images/menu IMG/menu2/Protein Punch Bowl.jpg',
    '/menu images/menu IMG/menu2/Khaas Coconut Chaas.jpg',
    '/menu images/menu IMG/menu images/Ai pic.png'
  ];

  // Auto-change image logic
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500); // Change image every 2.5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="bg-calPoly-700 text-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            What We Do
          </h2>
          <p className="font-body text-xl text-papaya-100 max-w-3xl mx-auto leading-relaxed">
            Satvify is a cloud kitchen serving plant-based, satvic, and wholesome meals that
            promote healing and holistic well-being, delivered straight to your doorstep.
          </p>
        </div>


        {/* PART 1: Image + Text Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">

          {/* Column 1: Image */}
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer" onClick={handleImageClick}>
            <img
              src={images[currentImageIndex]}
              alt={`Satvify wholesome meal ${currentImageIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            />
            {/* Gradient Overlay for better text visibility (optional but good for consistency) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md text-white text-sm font-medium px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-white/20">
              Tap to see more
            </div>
          </div>

          {/* Column 2: Text Content */}
          <div className="space-y-6 h-full flex flex-col justify-center">
            <p className="text-lg text-papaya-100 leading-relaxed">
              Every dish we create is a celebration of nature's
              bounty, carefully crafted to bring joy and vitality to your day.
            </p>

            {/* --- FIX 6: Replaced emoji grid with bullet points --- */}
            <ul className="space-y-3 py-4 list-disc list-outside pl-5 text-papaya-100">
              <li>
                Order through WhatsApp
              </li>
              <li>
                Perfect for health-conscious individuals, busy professionals, and wellness-focused families
              </li>
              <li>
                100% plant-based, satvic, and wholesome (free from refined sugar, oil, flour, or additives)
              </li>
              <li>
                Water-rich recipes that support healing, hydration, and digestion
              </li>
            </ul>
            {/* --- END OF FIX --- */}

            {/* Quote */}
            <blockquote className="border-l-4 border-citron-300 pl-4 italic pt-2 pb-2 my-2 text-xl text-citron-300">
              “In short: we make healthy eating easy, accessible, and irresistibly delicious.”
            </blockquote>

            <p className="text-lg text-papaya-100 leading-relaxed">
              Join us on this journey towards vibrant health and well-being, one delicious bite at a time.
            </p>
          </div>
        </div>

        {/* PART 2: The 3 Feature Cards */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* --- FIX 7: Updated to pass Lucide icons --- */}
            <FeatureCard
              icon={Truck}
              title="Delivered Fresh"
              description="Available via WhatsApp for your convenience."
              tags={['Quick Delivery', 'Always Fresh']}
            />
            <FeatureCard
              icon={Heart}
              title="Made with Love"
              description="Every dish is prepared with intention, care, and positive energy."
              tags={['Handcrafted', 'Nurturing']}
            />
            <FeatureCard
              icon={BadgeCheck}
              title="Quality Assured"
              description="Rigorous quality checks ensure every meal meets our high standards for purity."
              tags={['Quality Tested', 'Safe']}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;