import React, { useState } from 'react';
import HeroBook from './LivingAlbum/HeroBook';
import { Play, ArrowRight, X, Sparkles, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import TextReveal from './motion/TextReveal';
import RevealOnScroll from './motion/RevealOnScroll';

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
    <section
      id="hero"
      className="hero-section relative bg-[#F7F3EC] text-[#201E1B] pt-0 pb-12 sm:pb-20 lg:pb-20 overflow-hidden"
    >
      {/* =========================================================
          ATMOSPHERIC SUNLIT ATELIER BACKGROUND
          ========================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <img
          src="/images/hero-slide-1.jpg"
          alt=""
          className="w-full h-full object-cover object-center lg:object-right filter contrast-[0.98] brightness-[1.02]"
          loading="eager"
        />
        {/* Soft luxury gradient scrim ensuring text and 3D album contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F3EC]/96 via-[#F7F3EC]/80 to-[#F7F3EC]/25 sm:via-[#F7F3EC]/65 sm:to-transparent lg:from-[#F7F3EC]/95 lg:via-[#F7F3EC]/50 lg:to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#F7F3EC] via-[#F7F3EC]/70 to-transparent" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* =========================================================
              LEFT COLUMN: LUXURY EDITORIAL COPY
              ========================================================= */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10 pt-0">
            
            {/* 1. Category chip */}
            <RevealOnScroll direction="down" delay={0.02} distance={12} blur={false}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2]/90 border border-[#DED5C9] text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.22em] text-[#777066] mt-0.5 mb-4 sm:mb-5 shadow-xs backdrop-blur-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B99A69]" />
                <span>THE ART OF PRESERVING MEMORIES</span>
              </div>
            </RevealOnScroll>

            {/* 2. Headline in high-end editorial serif typography */}
            <TextReveal
              as="h1"
              delay={0.08}
              className="font-serif text-[30px] xs:text-[38px] sm:text-[50px] md:text-[60px] lg:text-[68px] font-normal tracking-[-0.015em] text-[#201E1B] leading-[1.08] mb-5 sm:mb-7"
            >
              Wedding<br />
              Photo Albums<br />
              <span className="italic font-normal text-[#201E1B]">Engineered to Outlast Generations.</span>
            </TextReveal>

            {/* 3. Supporting paragraph */}
            <RevealOnScroll direction="up" delay={0.22} distance={18}>
              <p className="font-sans text-[14px] sm:text-[16px] text-[#5A544A] leading-[1.68] max-w-[510px] mb-8 sm:mb-10 font-normal">
                A wedding album is not a book; it is a sacred heirloom carrying the whispers of an unforgettable day. Crafted with genuine leather, hand-bound art paper, and museum-grade archival printing, our albums transform ephemeral moments into permanent treasures.
              </p>
            </RevealOnScroll>

            {/* 4. Action Buttons */}
            <RevealOnScroll direction="up" delay={0.32} distance={18}>
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-6 mb-6 sm:mb-8">
                {/* Primary Button */}
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
                  className="inline-flex items-center gap-2.5 px-3 py-3 bg-transparent text-[#201E1B] font-sans font-medium text-[11px] sm:text-[12px] uppercase tracking-[0.16em] hover:text-[#B99A69] transition-colors cursor-pointer border-none"
                >
                  <div className="w-8 h-8 rounded-full border border-[#DED5C9] bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-xs transition-transform hover:scale-105">
                    <Play size={11} className="fill-[#201E1B] text-[#201E1B] ml-0.5" />
                  </div>
                  <span>Watch Film</span>
                </button>
              </div>
            </RevealOnScroll>
          </div>

          {/* =========================================================
              RIGHT COLUMN: 3D HEIRLOOM ALBUM + ATELIER SWATCHES ABOVE
              - Contains HeroBook with genuine 3D cover opening & page turning
              ========================================================= */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative w-full overflow-visible pt-0">
            
            {/* Atelier Material Swatch Bar */}
            <RevealOnScroll direction="down" delay={0.15} distance={15} className="w-full max-w-[440px]">
              <div className="w-full mt-0.5 mb-4 sm:mb-5 px-4 py-2.5 rounded-full bg-[#FAF7F2]/95 border border-[#DED5C9] shadow-[0_6px_20px_-4px_rgba(32,30,27,0.06)] backdrop-blur-md flex items-center justify-between z-20 transition-all">
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
                        <span
                          className={`w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isSelected
                              ? 'ring-2 ring-[#B99A69] ring-offset-2 ring-offset-[#FAF7F2] scale-110 shadow-xs'
                              : 'hover:scale-105 ring-1 ring-transparent hover:ring-[#DED5C9]'
                          }`}
                        >
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
            </RevealOnScroll>

            {/* The 3D Living Heirloom Album (Opens in Real 3D) */}
            <RevealOnScroll direction="up" delay={0.25} distance={20} className="w-full flex justify-center">
              <HeroBook
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                material={selectedMaterial}
              />
            </RevealOnScroll>
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
