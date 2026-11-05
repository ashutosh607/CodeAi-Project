import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from './motion/RevealOnScroll';
import TextReveal from './motion/TextReveal';
import TiltCard from './motion/TiltCard';

export default function IntroSection() {
  const [imgSrc, setImgSrc] = useState('https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85');

  const handleImgError = () => {
    // Fallback if local network / external host blocks direct hotlinking
    setImgSrc('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85');
  };

  return (
    <section id="about" className="intro-section">
      <div className="section-container">
        <div className="intro-two-column-layout">
          {/* Left Column: Text & Editorial Manifesto */}
          <div className="intro-text-column">
            <TextReveal as="h2" className="intro-main-title" delay={0.08}>
              Inside the bindery
            </TextReveal>

            <RevealOnScroll direction="up" delay={0.18} distance={20}>
              <div className="intro-body-paragraphs">
                <p>
                  <strong>Ultraa Albums</strong> is an artisanal bookbindery and bespoke photo lab catering to premier wedding photographers and discerning couples worldwide. Over the past 12 years, our master printmakers have bound over 120,000 heirloom volumes across India, the UK, Europe, and the Middle East.
                </p>
                <p>
                  Every photography collection receives meticulous care. From hand-torn deckle edges and genuine full-grain leather cases to custom brass die foil debossing and layflat panoramic double-page spreads, we combine historical bookbinding discipline with modern museum-grade archival chemistry.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.32} distance={18}>
              <div className="intro-action-row">
                <a href="#contact" className="intro-swatch-ring-cta">
                  <span>ORDER A SAMPLE SWATCH RING</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Physical Product Photography Frame with 3D Tilt */}
          <RevealOnScroll direction="right" className="intro-image-column">
            <TiltCard maxTilt={5} scale={1.02} glare={true} className="w-full">
              <div className="intro-photo-card group overflow-hidden rounded-2xl shadow-[0_16px_40px_-12px_rgba(20,19,16,0.12)] border border-[#EAE3D6]">
                <img
                  src={imgSrc}
                  alt="Ultraa Albums Bespoke Cover and Handcrafted Box Sets"
                  className="intro-feature-photo transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  onError={handleImgError}
                  loading="lazy"
                />
                <div className="intro-photo-caption-bar">
                  <span>Handcrafted Velvet &amp; Leather Box Sets with Bespoke Debossing</span>
                </div>
              </div>
            </TiltCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
