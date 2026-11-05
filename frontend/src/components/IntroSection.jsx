import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from './motion/RevealOnScroll';

export default function IntroSection() {
  const [imgSrc, setImgSrc] = useState('https://ultraaalbums.com/wp-content/uploads/2022/07/Cover.jpg');

  const handleImgError = () => {
    // Fallback if local network / external host blocks direct hotlinking
    setImgSrc('https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85');
  };

  return (
    <section id="about" className="intro-section">
      <div className="section-container">
        <div className="intro-two-column-layout">
          {/* Left Column: Text & Editorial Manifesto */}
          <RevealOnScroll direction="left" className="intro-text-column">
            <div className="section-eyebrow-chip">
              <span>BESPOKE BINDERY &amp; FINE PRINTING</span>
            </div>

            <h2 className="intro-main-title">
              Build Your Wedding Photo Book With Us
              <span className="intro-subtitle-display">Give wings to your imagination.</span>
            </h2>

            <div className="intro-body-paragraphs">
              <p>
                <strong>Ultraa Albums</strong> (or Ultra Album) is a premier handcrafted photo album manufacturer and design company that caters heavily to professional photographers and discerning wedding clients. Over the past 12 years, our artisanal printmakers have bound over 120,000 heirloom volumes across India, the UK, Europe, and the Middle East.
              </p>
              <p>
                Every photography collection receives meticulous care. From hand-torn deckle edges and true-leather cases to custom brass die foil debossing and layflat panoramic double-page spreads, we combine historical bookbinding techniques with modern museum-grade archival pigments.
              </p>
            </div>

            {/* Stylized Quote Callout matching screenshot */}
            <div className="intro-quote-card">
              <p className="quote-text-body">
                “Life brings celebrations. Photo books transform moments into memories, making them an essential part of preserving your special family milestones.”
              </p>
            </div>

            <div className="intro-action-row">
              <a href="#contact" className="intro-swatch-ring-cta">
                <span>ORDER A SAMPLE SWATCH RING</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </RevealOnScroll>

          {/* Right Column: Physical Product Photography Frame */}
          <RevealOnScroll direction="right" className="intro-image-column">
            <div className="intro-photo-card group overflow-hidden">
              <img
                src={imgSrc}
                alt="Ultraa Albums Bespoke Cover and Handcrafted Box Sets"
                className="intro-feature-photo transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                onError={handleImgError}
                loading="lazy"
              />
              <div className="intro-photo-caption-bar">
                <span>Handcrafted Velvet &amp; Leather Box Sets with Bespoke Debossing</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
