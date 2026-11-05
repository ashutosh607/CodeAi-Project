import React, { useState } from 'react';
import { Sliders } from 'lucide-react';
import RevealOnScroll from './motion/RevealOnScroll';

const COMPARISONS = [
  {
    id: 'outdoor-silhouette',
    title: 'Outdoor Silhouette & Contrast',
    beforeImg: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=50',
    afterImg: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=85',
    isBW: true
  },
  {
    id: 'background-tone',
    title: 'Background & Tone',
    beforeImg: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=700&q=50',
    afterImg: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=700&q=85',
    isTone: true
  },
  {
    id: 'skin-retouch',
    title: 'High-End Skin Retouching',
    beforeImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=50',
    afterImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=85',
    isSkin: true
  }
];

function SingleSliderCard({ item }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX, rect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const onMouseMove = (e) => {
    if (!isDragging && e.type !== 'touchmove') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    handleMove(clientX, rect);
  };

  return (
    <div className="single-comparison-card">
      <h3 className="comparison-card-title">{item.title}</h3>

      <div
        className="interactive-slider-stage select-none"
        onMouseMove={onMouseMove}
        onTouchMove={onMouseMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* AFTER Layer (Full Width underneath) */}
        <div className="slider-layer layer-after">
          <img
            src={item.afterImg}
            alt={`${item.title} After Master Retouch`}
            className="slider-photo-img"
          />
          <span className="puck-tag after-tag">AFTER</span>
        </div>

        {/* BEFORE Layer (Clipped Overlay) */}
        <div
          className="slider-layer layer-before"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={item.beforeImg}
            alt={`${item.title} Before RAW`}
            className={`slider-photo-img ${
              item.isBW
                ? 'filter-bw'
                : item.isTone
                ? 'filter-underexposed'
                : 'filter-raw-skin'
            }`}
          />
          <span className="puck-tag before-tag">BEFORE</span>
        </div>

        {/* Vertical Divider Line with Puck */}
        <div className="slider-divider-rail" style={{ left: `${sliderPos}%` }}>
          <div className="slider-handle-knob shadow-md">
            <Sliders size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterSlider() {
  return (
    <section id="before-after" className="before-after-section">
      <div className="section-container">
        <RevealOnScroll direction="up" className="before-after-header-center">
          <div className="section-eyebrow-chip">
            <span>SAMPLE SUITE SHOWCASE</span>
          </div>
          <h2 className="before-after-heading">
            Photo Editing Sample: Before — After
          </h2>
          <p className="before-after-lead-text">
            Drag the interactive divider to inspect our high-fidelity skin retouching, tonal balance, and environmental color grading.
          </p>
        </RevealOnScroll>

        <div className="comparisons-three-card-grid">
          {COMPARISONS.map((item, index) => (
            <RevealOnScroll
              key={item.id}
              direction="up"
              delay={index * 0.1}
            >
              <SingleSliderCard item={item} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
