import React from 'react';
// --- FIX 1: Imported Lucide icons ---
import { Truck, Heart, BadgeCheck, ChevronLeft, ChevronRight } from 'lucide-react';

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
    '/menu images/menu IMG/menu images/kaju katli silver.png'
  ];

  // Auto-change image logic
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500); // Change image every 2.5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleImageClick = () => {
    nextImage();
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
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer bg-white" onClick={handleImageClick}>
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Satvify wholesome meal ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${idx === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
              />
            ))}

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-calPoly-700" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-calPoly-700" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-white w-8' : 'bg-white/50 w-2'
                    }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
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