import React, { useState } from 'react';
import HeroBook from './LivingAlbum/HeroBook';
import { Play, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const MATERIALS = [
  { id: 'sand', name: 'Linen Sand', color: '#EDE5DA', hex: '#EDE5DA', accent: '#B99A69', type: 'linen', label: 'Belgian Linen' },
  { id: 'onyx', name: 'Onyx Leather', color: '#201E1B', hex: '#201E1B', accent: '#D4AF37', type: 'pebbled-leather', label: 'Italian Leather' },
  { id: 'blush', name: 'Soft Blush', color: '#E8DCD4', hex: '#E8DCD4', accent: '#B99A69', type: 'linen', label: 'Woven Rose' },
  { id: 'sage', name: 'Muted Sage', color: '#D4DDD3', hex: '#D4DDD3', accent: '#8F9E8B', type: 'linen', label: 'Botanical Linen' }
];

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIALS[0]);
  const [isFilmModalOpen, setIsFilmModalOpen] = useState(false);

  return (
    <section id="hero" className="hero-section relative bg-[#F7F3EC] text-[#201E1B] pt-2 sm:pt-3 lg:pt-3 pb-16 sm:pb-24 lg:pb-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* =========================================================
              LEFT COLUMN: LUXURY EDITORIAL COPY
              ========================================================= */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10 pt-1">
            {/* 1. Category chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEE7DC] border border-[#DED5C9] text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.22em] text-[#777066] mb-5 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B99A69]" />
              <span>THE ART OF PRESERVING MEMORIES</span>
            </div>

            {/* 2. Headline in high-end editorial serif typography */}
            <h1 className="font-serif text-[42px] sm:text-[54px] md:text-[62px] lg:text-[68px] font-normal tracking-[-0.01em] text-[#201E1B] leading-[1.08] mb-6 sm:mb-8">
              Wedding<br />
              Photo Albums<br />
              <span className="italic font-normal text-[#201E1B]">Engineered to Outlast Generations.</span>
            </h1>

            {/* 3. Supporting paragraph */}
            <p className="font-sans text-[15px] sm:text-[16px] text-[#777066] leading-[1.7] max-w-[520px] mb-8 sm:mb-10 font-normal">
              A wedding album is not a book; it is a sacred heirloom carrying the whispers of an unforgettable day. Crafted with genuine leather, hand-bound art paper, and museum-grade archival printing, our albums transform ephemeral moments into permanent treasures.
            </p>

            {/* 4. Action Buttons (Explore Albums -> & ▷ Watch Film) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8">
              {/* Primary Pill Button with Guaranteed Visible Cream/Ivory Text in ALL states */}
              <Link
                to="/products/wedding-albums"
                className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#201E1B] !text-[#FAF7F2] font-sans font-medium text-[11px] sm:text-[12px] uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#B99A69] hover:shadow-lg cursor-pointer group shadow-sm"
                style={{ color: '#FAF7F2', textDecoration: 'none' }}
              >
                <span className="!text-[#FAF7F2] font-medium" style={{ color: '#FAF7F2' }}>
                  Explore Albums
                </span>
                <ArrowRight size={14} className="text-[#B99A69] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary Play Film Button */}
              <button
                type="button"
                onClick={() => setIsFilmModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-4 py-3 bg-transparent text-[#201E1B] font-sans font-medium text-[11px] sm:text-[12px] uppercase tracking-[0.16em] hover:text-[#B99A69] transition-colors cursor-pointer border-none"
              >
                <div className="w-8 h-8 rounded-full border border-[#DED5C9] bg-white flex items-center justify-center shadow-xs transition-transform hover:scale-105">
                  <Play size={11} className="fill-[#201E1B] text-[#201E1B] ml-0.5" />
                </div>
                <span>Watch Film</span>
              </button>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: 3D HEIRLOOM ALBUM + ATELIER SWATCHES ABOVE
              - Contains HeroBook strictly within its 460px bounding box
              - Overflows vertically on mobile beneath text
              ========================================================= */}
          <div className="lg:col-span-6 flex flex-col items-center justify-start relative w-full overflow-visible pt-1">
            
            {/* Atelier Material Swatch Bar: Luxury Single-Line Specifier */}
            <div className="w-full max-w-[440px] mb-4 sm:mb-5 px-4 py-2.5 rounded-full bg-[#FAF7F2]/95 border border-[#DED5C9] shadow-[0_6px_20px_-4px_rgba(32,30,27,0.06)] backdrop-blur-md flex items-center justify-between z-20 transition-all">
              {/* Left: Dynamic Material Name in Editorial Typography */}
              <div className="flex items-center gap-2 text-left min-w-0 pr-2">
                <span className="text-[#B99A69] text-[11px] font-serif shrink-0">✦</span>
                <div className="flex items-baseline gap-1.5 truncate">
                  <span className="font-serif italic text-[14px] sm:text-[15px] text-[#201E1B] font-normal tracking-tight">
                    {selectedMaterial.name}
                  </span>
                  <span className="text-[10px] uppercase font-sans tracking-[0.16em] text-[#777066] hidden sm:inline shrink-0">
                    • {selectedMaterial.label}
                  </span>
                </div>
              </div>

              {/* Right: Tactile Circular Material Swatches with Active Gold Halo */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {MATERIALS.map((mat) => {
                  const isSelected = selectedMaterial.id === mat.id;
                  return (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setSelectedMaterial(mat)}
                      className="group relative flex items-center justify-center p-0.5 focus:outline-none cursor-pointer bg-transparent border-none"
                      title={`${mat.name} • ${mat.label}`}
                      aria-label={`Select ${mat.name}`}
                    >
                      {/* Active gold ring halo */}
                      <span
                        className={`w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isSelected
                            ? 'ring-2 ring-[#B99A69] ring-offset-2 ring-offset-[#FAF7F2] scale-110 shadow-xs'
                            : 'hover:scale-105 ring-1 ring-transparent hover:ring-[#DED5C9]'
                        }`}
                      >
                        {/* Tactile swatch disk */}
                        <span
                          className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full border border-black/15 transition-transform"
                          style={{
                            backgroundColor: mat.hex,
                            boxShadow: isSelected
                              ? 'inset 0 1px 2px rgba(0,0,0,0.25), 0 2px 4px rgba(32,30,27,0.12)'
                              : 'inset 0 1px 2px rgba(0,0,0,0.12)'
                          }}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* The 3D Living Heirloom Album */}
            <HeroBook
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              material={selectedMaterial}
            />
          </div>

        </div>
      </div>

      {/* =========================================================
          WATCH FILM MODAL
          ========================================================= */}
      {isFilmModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-[#201E1B] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 text-white">
              <div className="flex items-center gap-2">
                <span className="text-[#B99A69]">✦</span>
                <span className="font-serif text-sm tracking-[0.16em] uppercase">The Ultraa Atelier Film</span>
              </div>
              <button
                type="button"
                onClick={() => setIsFilmModalOpen(false)}
                className="w-8 h-8 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Film Modal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                title="Ultraa Albums Atelier Craftsmanship"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-[#201E1B] flex flex-col sm:flex-row items-center justify-between gap-3 text-white/70 text-xs">
              <span>Handcrafted binding, 1.1mm core archival paper, and zero-gutter layflat precision.</span>
              <Link
                to="/about"
                onClick={() => setIsFilmModalOpen(false)}
                className="text-[#B99A69] hover:underline uppercase tracking-wider font-medium text-[11px]"
              >
                Learn More About Our Bindery →
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
