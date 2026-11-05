import React, { useState } from 'react';
import RealAlbum3D from './LivingAlbum/RealAlbum3D';
import RevealOnScroll from './motion/RevealOnScroll';
import { Palette } from 'lucide-react';

const MATERIALS = [
  { id: 'sand', name: 'Linen Sand', hex: '#EDE5DA', accent: '#C5A880' },
  { id: 'charcoal', name: 'Onyx Leather', hex: '#242320', accent: '#D4AF37' },
  { id: 'blush', name: 'Soft Blush', hex: '#F6DCD7', accent: '#B8860B' },
  { id: 'sage', name: 'Muted Sage', hex: '#D7E5D8', accent: '#8F9E8B' }
];

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIALS[0]);

  const handleScrollToProducts = (e) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    const elem = document.getElementById('products');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = (e) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    const elem = document.getElementById('about');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="section-container">
        <div className="hero-two-column-grid">
          {/* Left Column: Hero Editorial Copy */}
          <RevealOnScroll direction="left" className="hero-copy-column">
            <div className="hero-label-chip">
              <span className="bullet-point">•</span>
              <span>THE ART OF PRESERVING MEMORIES</span>
            </div>

            <h1 className="hero-main-heading">
              Wedding<br />
              Photo Albums<br />
              <span className="heading-italic-line">Engineered to Outlast Generations.</span>
            </h1>

            <p className="hero-supporting-paragraph">
              A wedding album is not a book; it is a sacred heirloom carrying the whispers of an unforgettable day. Crafted with genuine leather, hand-bound art paper, and museum-grade archival printing, our albums transform ephemeral moments into permanent treasures.
            </p>

            <div className="hero-cta-button-row">
              <button
                type="button"
                onClick={handleScrollToProducts}
                className="hero-primary-pill-btn cursor-pointer"
              >
                EXPLORE COLLECTION
              </button>
              <button
                type="button"
                onClick={handleScrollToAbout}
                className="hero-secondary-underline-btn cursor-pointer bg-transparent border-none text-left"
              >
                DISCOVER OUR CRAFT
              </button>
            </div>

            {/* Trust Badges matching screenshot */}
            <div className="hero-trust-metrics-strip">
              <span>100% FLAT-SPREAD</span>
              <span className="dot-sep">•</span>
              <span>FUJI CRYSTAL ARCHIVE</span>
              <span className="dot-sep">•</span>
              <span>100+ YR INK</span>
            </div>
          </RevealOnScroll>

          {/* Right Column: Interactive 3D Living Album Centerpiece */}
          <RevealOnScroll direction="right" className="hero-album-viewport-column w-full">
            <div className="album-3d-stage-card w-full max-w-[620px] mx-auto overflow-hidden sm:overflow-visible !bg-[#FAF8F4]/90 !border-[#EAE6DF] !shadow-[0_16px_40px_-12px_rgba(20,19,16,0.08)]">
              {/* Material Customizer Swatches */}
              <div className="flex items-center justify-between px-3.5 py-2.5 sm:px-6 sm:py-3 border-b border-[#EAE6DF] bg-[#F5F2EC]/80 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-[#635E52] shrink-0">
                  <Palette size={13} className="text-[#141310]" />
                  <span className="hidden sm:inline">Cover Binding:</span>
                  <span className="sm:hidden">Cover:</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  {MATERIALS.map((mat) => (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setSelectedMaterial(mat)}
                      className={`group relative flex items-center gap-1 sm:gap-1.5 px-2 py-1 text-[10px] sm:text-[11px] font-medium tracking-wide transition-all border ${
                        selectedMaterial.id === mat.id
                          ? 'border-[#141310] bg-white text-[#141310] shadow-xs'
                          : 'border-transparent text-[#635E52] hover:border-[#CCC5BC]'
                      }`}
                      title={mat.name}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-black/15 shrink-0"
                        style={{ backgroundColor: mat.hex }}
                      />
                      <span className="hidden md:inline">{mat.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Realistic Physical 3D Album */}
              <RealAlbum3D
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                material={selectedMaterial}
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
