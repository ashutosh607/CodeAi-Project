import React, { useState, useEffect, useRef } from 'react';
import { Play, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_SLIDES = [
  {
    id: 'atelier-heirloom',
    image: '/images/hero-slide-1.jpg',
    caption: 'Handcrafted Linen Monogram Heirloom',
    badge: 'Atelier Signature Edition'
  },
  {
    id: 'editorial-spread',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1920&q=85',
    caption: '180° Seamless Panoramic Lay-Flat Spread',
    badge: 'Museum Cotton Rag Paper'
  },
  {
    id: 'artisan-binding',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1920&q=85',
    caption: 'Artisanal Spine Stitching & Core Reinforcement',
    badge: 'Hand-Bound in Mumbai'
  },
  {
    id: 'wedding-keepsake',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=85',
    caption: 'Lifetime Archival Silver Halide Printing',
    badge: 'Generational Keepsake'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFilmModalOpen, setIsFilmModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    if (isFilmModalOpen || isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isFilmModalOpen, isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      id="hero"
      className="hero-section relative bg-[#F7F3EC] text-[#201E1B] min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =========================================================
          BACKGROUND PHOTO SLIDESHOW (SMOOTH CROSSFADE + KEN BURNS)
          ========================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1200 ease-in-out ${
                isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.caption}
                className={`w-full h-full object-cover object-center lg:object-right transition-transform duration-[7000ms] ease-out will-change-transform ${
                  isActive ? 'scale-100' : 'scale-106'
                }`}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}

        {/* Soft luxury editorial gradient scrim
            Ensures live text remains 100% crisp and readable across all viewport sizes
            without hiding the stunning right-side product photo */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#F7F3EC]/95 via-[#F7F3EC]/80 to-[#F7F3EC]/20 sm:via-[#F7F3EC]/70 sm:to-transparent lg:from-[#F7F3EC]/95 lg:via-[#F7F3EC]/55 lg:to-transparent"
          aria-hidden="true"
        />
        
        {/* Subtle bottom gradient to blend into the next page section */}
        <div
          className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#F7F3EC] via-[#F7F3EC]/60 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* =========================================================
          HERO CONTENT CONTAINER (CRISP EDITORIAL FOREGROUND)
          ========================================================= */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (Strictly matching luxury mockup) */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left">
            
            {/* 1. Category Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2]/90 border border-[#DED5C9] text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.22em] text-[#777066] mb-5 sm:mb-6 shadow-xs backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B99A69]" />
              <span>THE ART OF PRESERVING MEMORIES</span>
            </div>

            {/* 2. Headline in high-end editorial serif */}
            <h1 className="font-serif text-[34px] xs:text-[42px] sm:text-[54px] md:text-[62px] lg:text-[68px] font-normal tracking-[-0.015em] text-[#201E1B] leading-[1.08] mb-5 sm:mb-7">
              Wedding<br />
              Photo Albums<br />
              <span className="italic font-normal text-[#201E1B]">Engineered to Outlast Generations.</span>
            </h1>

            {/* 3. Supporting Editorial Paragraph */}
            <p className="font-sans text-[14px] sm:text-[16px] text-[#635C52] leading-[1.68] max-w-[510px] mb-8 sm:mb-10 font-normal">
              A wedding album is not a book; it is a sacred heirloom carrying the whispers of an unforgettable day. Crafted with genuine leather, hand-bound art paper, and museum-grade archival printing, our albums transform ephemeral moments into permanent treasures.
            </p>

            {/* 4. Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-6 mb-8 lg:mb-4">
              {/* Primary Explore Albums Button */}
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

              {/* Secondary Play Atelier Film Button */}
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
          </div>

          {/* Right Column Spacer (Leaves visual space for the luxury photo composition) */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 min-h-[460px] pointer-events-none" />
        </div>
      </div>

      {/* =========================================================
          SUBTLE SLIDER CONTROLS & PHOTO CAPTION (BOTTOM BAR)
          ========================================================= */}
      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 md:right-10 lg:right-12 z-20 flex items-center gap-3 bg-[#FAF7F2]/90 border border-[#DED5C9] px-3.5 py-2 rounded-full shadow-md backdrop-blur-md">
        {/* Current photo caption badge */}
        <div className="hidden sm:flex items-center gap-2 pr-3 border-r border-[#DED5C9] text-left">
          <span className="text-[#B99A69] text-xs">✦</span>
          <span className="text-[11px] font-serif italic text-[#201E1B] truncate max-w-[200px]">
            {HERO_SLIDES[currentSlide].caption}
          </span>
        </div>

        {/* Slide Counter */}
        <span className="text-[10px] font-mono tracking-widest text-[#777066]">
          0{currentSlide + 1} / 0{HERO_SLIDES.length}
        </span>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handlePrev}
            className="w-6 h-6 rounded-full flex items-center justify-center text-[#201E1B] hover:text-[#B99A69] hover:bg-[#EEE7DC] transition-colors cursor-pointer border-none bg-transparent"
            aria-label="Previous slide"
          >
            <ChevronLeft size={14} />
          </button>

          {/* Mini Progress Dots */}
          <div className="flex items-center gap-1.5 px-1">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer border-none ${
                  idx === currentSlide ? 'w-5 bg-[#B99A69]' : 'w-1.5 bg-[#DED5C9] hover:bg-[#777066]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="w-6 h-6 rounded-full flex items-center justify-center text-[#201E1B] hover:text-[#B99A69] hover:bg-[#EEE7DC] transition-colors cursor-pointer border-none bg-transparent"
            aria-label="Next slide"
          >
            <ChevronRight size={14} />
          </button>
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
