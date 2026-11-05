import React from 'react';
import { Sparkles, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const COLLECTIONS = [
  {
    id: 'weddings',
    title: 'Weddings',
    subtitle: 'Timeless Stories',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=80',
    link: '/products/wedding-albums',
    rotation: '-3deg'
  },
  {
    id: 'portraits',
    title: 'Portraits',
    subtitle: 'Pure Emotions',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    link: '/products/matted-albums',
    rotation: '2deg'
  },
  {
    id: 'destination',
    title: 'Destination',
    subtitle: 'Across the World',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=300&q=80',
    link: '/for-uk/wedding-albums',
    rotation: '-2deg'
  }
];

export default function CollectionsOrbitalBar() {
  const handleScrollToExplore = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#EEE7DC]/80 border-b border-[#DED5C9]/80 py-2 sm:py-2.5 px-4 sm:px-8 relative overflow-hidden transition-colors">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4 text-[#777066]">
        {/* Left: Explore Collections Label */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[#B99A69] text-xs">✦</span>
          <span className="font-serif text-[11px] sm:text-[12px] tracking-[0.14em] uppercase text-[#201E1B] font-medium">
            Explore Our Collections
          </span>
        </div>

        {/* Center: Curated Orbital Collection Cards (Connected with hair-thin arc) */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12 relative">
          {/* Subtle connecting curved thread */}
          <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#B99A69]/30 to-transparent pointer-events-none" />

          {COLLECTIONS.map((col) => (
            <Link
              key={col.id}
              to={col.link}
              className="group flex items-center gap-2.5 py-0.5 px-2 rounded-lg transition-all hover:bg-[#FAF7F2]/60 z-10"
              style={{ transform: `rotate(${col.rotation})` }}
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md overflow-hidden border border-[#DED5C9] shadow-xs shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-[11px] font-semibold text-[#201E1B] group-hover:text-[#B99A69] transition-colors leading-tight">
                  {col.title}
                </span>
                <span className="font-sans text-[9px] tracking-wider text-[#777066] leading-tight mt-0.5">
                  {col.subtitle}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Right: Scroll to Explore */}
        <button
          type="button"
          onClick={handleScrollToExplore}
          className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.16em] text-[#777066] hover:text-[#201E1B] transition-colors cursor-pointer bg-transparent border-none shrink-0"
        >
          <span>Scroll to Explore</span>
          <div className="w-4 h-4 rounded-full border border-[#777066]/40 flex items-center justify-center">
            <Play size={8} className="fill-[#777066] text-[#777066] ml-0.5" />
          </div>
        </button>
      </div>
    </div>
  );
}

