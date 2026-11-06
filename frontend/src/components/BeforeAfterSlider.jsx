import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import RevealOnScroll from './motion/RevealOnScroll';
import TextReveal from './motion/TextReveal';
import './Showroom.css';

const COMPARISONS = [
  {
    id: 'outdoor-silhouette',
    title: 'Outdoor Silhouette & Contrast',
    mobileTitle: 'Silhouette',
    badge: 'Contour & Dynamic Range',
    desc: 'Deep dynamic range recovery, highlight roll-off, and cinematic evening golden-hour separation.',
    beforeImg: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=70',
    afterImg: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=95',
    isBW: true
  },
  {
    id: 'background-tone',
    title: 'Background & Tone',
    mobileTitle: 'Tone & Color',
    badge: 'Atmospheric Grading',
    desc: 'Fine-art sky gradient harmonization, lush botanical greenery correction, and balanced ambient lighting.',
    beforeImg: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=70',
    afterImg: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=95',
    isTone: true
  },
  {
    id: 'skin-retouch',
    title: 'High-End Skin Retouching',
    mobileTitle: 'Skin Retouch',
    badge: 'Micro-Frequency Separation',
    desc: 'Natural pore preservation, gentle micro-frequency skin separation, and even studio color grading.',
    beforeImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=70',
    afterImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=95',
    isSkin: true
  }
];

export default function BeforeAfterSlider() {
  const [activeTab, setActiveTab] = useState('outdoor-silhouette');
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);

  const updatePosFromPointer = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newPos = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(Math.round(newPos * 10) / 10);
  }, []);

  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    updatePosFromPointer(e.clientX);
    try {
      e.currentTarget.setPointerCapture?.(e.pointerId);
    } catch (_) {}
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    updatePosFromPointer(e.clientX);
  };

  const handlePointerUp = (e) => {
    isDraggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    } catch (_) {}
  };

  const activeItem = COMPARISONS.find((c) => c.id === activeTab) || COMPARISONS[0];

  return (
    <section id="before-after" className="before-after-section py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#DED5C9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <RevealOnScroll direction="down" delay={0.05} distance={12} blur={false}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEE7DC] border border-[#DED5C9] text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.22em] text-[#777066] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B99A69]" />
              <span>SAMPLE SUITE SHOWCASE</span>
            </div>
          </RevealOnScroll>
          <TextReveal
            as="h2"
            delay={0.08}
            className="font-serif text-[28px] sm:text-[38px] md:text-[44px] font-normal tracking-tight text-[#201E1B] leading-tight mb-3"
          >
            Photo Editing Sample: Before — After
          </TextReveal>
          <RevealOnScroll direction="up" delay={0.16} distance={18}>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#777066] leading-relaxed">
              Drag the interactive divider to inspect our high-fidelity skin retouching, tonal balance, and environmental color grading.
            </p>
          </RevealOnScroll>
        </div>

        {/* 1. LUXURY CATEGORY SELECTOR DOCK - PERFECT MOBILE & DESKTOP FIT */}
        <RevealOnScroll direction="up" delay={0.22} distance={20} className="flex justify-center mb-6 sm:mb-8">
          <div className="w-full max-w-[680px] p-1 sm:p-1.5 rounded-2xl sm:rounded-full bg-[#EEE7DC]/95 border border-[#DED5C9] shadow-xs backdrop-blur-md grid grid-cols-3 gap-1 sm:gap-2">
            {COMPARISONS.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => { setActiveTab(cat.id); setSliderPos(50); }}
                  className={`relative px-2 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-full font-sans transition-all duration-300 cursor-pointer flex items-center justify-center text-center ${
                    isActive
                      ? 'bg-[#141310] !text-[#FAF7F2] shadow-[0_2px_8px_rgba(20,19,16,0.22)] font-semibold border border-[#141310]'
                      : 'text-[#6B6357] hover:text-[#141310] hover:bg-white/60 bg-transparent border border-transparent'
                  }`}
                  style={isActive ? { color: '#FAF7F2' } : {}}
                >
                  {/* Full title for desktop / tablet (sm and above) */}
                  <span className="hidden sm:inline text-[11px] md:text-[12px] uppercase tracking-[0.12em] whitespace-nowrap">
                    {cat.title}
                  </span>
                  {/* Short luxury title for mobile phones */}
                  <span className="inline sm:hidden text-[10px] xs:text-[11px] uppercase tracking-[0.05em] font-medium leading-tight truncate">
                    {cat.mobileTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* 2. PROPERLY SIZED, FULLY VISIBLE INTERACTIVE SLIDER VIEWER */}
        <RevealOnScroll direction="up" delay={0.28} distance={24} className="max-w-[820px] mx-auto">
          <div className="bg-[#FAF7F2] p-1.5 sm:p-3 rounded-2xl border border-[#DED5C9] shadow-md">
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className="relative w-full aspect-[4/3] xs:aspect-[16/11] sm:aspect-[16/10] rounded-xl overflow-hidden select-none cursor-ew-resize bg-[#141310] touch-none shadow-inner"
            >
              {/* AFTER Layer (Full Width Background) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={activeItem.afterImg}
                  alt={`${activeItem.title} Master Retouch`}
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
                <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 px-2.5 py-1 rounded-full bg-[#141310]/85 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-sans font-semibold uppercase tracking-[0.14em] border border-white/20 pointer-events-none flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>AFTER MASTER</span>
                </div>
              </div>

              {/* BEFORE Layer (Clipped Overlay) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img
                  src={activeItem.beforeImg}
                  alt={`${activeItem.title} RAW Unedited`}
                  className={`w-full h-full object-cover block ${
                    activeItem.isBW
                      ? 'filter-bw'
                      : activeItem.isTone
                      ? 'filter-underexposed'
                      : 'filter-raw-skin'
                  }`}
                  loading="lazy"
                />
                <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-sans font-semibold uppercase tracking-[0.14em] border border-white/20 pointer-events-none flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5A967]" />
                  <span>BEFORE RAW</span>
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                aria-label="Before and after divider"
                className="comparison-range"
                onChange={e => setSliderPos(Number(e.target.value))}
              />

              {/* Interactive Divider Line with Luxury Knob */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none z-20"
                style={{
                  left: `${sliderPos}%`,
                  boxShadow: '0 0 10px rgba(0,0,0,0.6)'
                }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#141310] border-2 border-white shadow-[0_4px_16px_rgba(0,0,0,0.45)] flex items-center justify-center transition-transform active:scale-95">
                  <div className="flex items-center gap-0.5 text-white">
                    <ChevronLeft size={13} className="text-[#B99A69]" />
                    <span className="w-0.5 h-3 bg-white/40 rounded-full" />
                    <ChevronRight size={13} className="text-[#B99A69]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick View Presets for Mobile & Desktop convenience */}
            <div className="flex items-center justify-center gap-2 mt-2.5 sm:mt-3">
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.14em] text-[#8E867A] hidden xs:inline">
                Quick View:
              </span>
              <div className="inline-flex items-center p-1 rounded-full bg-[#EEE7DC]/90 border border-[#DED5C9] text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.06em]">
                <button
                  type="button"
                  onClick={() => setSliderPos(100)}
                  className={`px-2.5 sm:px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                    sliderPos === 100
                      ? 'bg-[#141310] !text-[#FAF7F2] font-semibold shadow-xs'
                      : 'text-[#6B6357] hover:text-[#141310]'
                  }`}
                  style={sliderPos === 100 ? { color: '#FAF7F2' } : {}}
                >
                  100% Before
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPos(50)}
                  className={`px-2.5 sm:px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                    sliderPos === 50
                      ? 'bg-[#141310] !text-[#FAF7F2] font-semibold shadow-xs'
                      : 'text-[#6B6357] hover:text-[#141310]'
                  }`}
                  style={sliderPos === 50 ? { color: '#FAF7F2' } : {}}
                >
                  50/50 Split
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPos(0)}
                  className={`px-2.5 sm:px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                    sliderPos === 0
                      ? 'bg-[#141310] !text-[#FAF7F2] font-semibold shadow-xs'
                      : 'text-[#6B6357] hover:text-[#141310]'
                  }`}
                  style={sliderPos === 0 ? { color: '#FAF7F2' } : {}}
                >
                  100% After
                </button>
              </div>
            </div>
          </div>

          {/* Active Category Description & Hint */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left px-2">
            <div>
              <p className="font-serif text-[15px] sm:text-[16px] text-[#201E1B] font-medium m-0">
                {activeItem.title}
              </p>
              <p className="font-sans text-[12px] sm:text-[13px] text-[#777066] mt-0.5 m-0 max-w-md">
                {activeItem.desc}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-[0.16em] text-[#B99A69] font-medium shrink-0">
              <Sparkles size={11} />
              <span>Drag handle or tap presets to inspect</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
