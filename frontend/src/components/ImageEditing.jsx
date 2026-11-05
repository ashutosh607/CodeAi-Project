import React, { useState } from 'react';
import { Sliders, Sparkles, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ImageEditing() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e) => {
    if (!isDragging && e.type !== 'touchmove') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  return (
    <section id="image-editing" className="editorial-section image-editing-section">
      <div className="section-container">
        <div className="editorial-section-intro">
          <div className="intro-badge">Retouching Atelier for Photographers</div>
          <h2 className="editorial-h2">Professional Image Editing Services</h2>
          <p className="editorial-lead">
            Free your studio from hundreds of hours in post-production. Our digital darkroom specialists handle color correction, high-end skin frequency separation, and fine-art grading tailored to your signature aesthetic.
          </p>
        </div>

        {/* Interactive Before & After Comparison */}
        <div className="comparison-editorial-wrapper">
          <div
            className="comparison-stage"
            onMouseMove={handleMouseMove}
            onTouchMove={handleMouseMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* After Image (Full width background) */}
            <div className="image-layer after-layer">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85"
                alt="After Professional Editorial Retouching"
                className="comparison-img"
              />
              <span className="layer-tag after-tag">Ultraa Master Retouch</span>
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="image-layer before-layer"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=50"
                alt="Before RAW Image"
                className="comparison-img desaturated-raw"
              />
              <span className="layer-tag before-tag">Original RAW Capture</span>
            </div>

            {/* Drag Handle Divider */}
            <div className="slider-divider-line" style={{ left: `${sliderPos}%` }}>
              <div className="divider-handle-puck">
                <Sliders size={16} />
              </div>
            </div>
          </div>

          <div className="comparison-caption-bar">
            <span>Drag handle horizontally to compare RAW capture vs Master Retouched spread</span>
          </div>
        </div>

        {/* Retouching Capabilities */}
        <div className="editing-services-editorial-grid">
          <div className="service-pillar-item">
            <h3 className="pillar-title">Skin & Beauty Retouching</h3>
            <p className="pillar-desc">
              We employ non-destructive frequency separation and micro dodge-and-burn to refine skin tones while preserving authentic photographic pore texture. Never plastic, never synthetic.
            </p>
            <ul className="pillar-checklist">
              <li>Even skin tones and gentle blemish softening</li>
              <li>Stray hair removal from veils and collars</li>
              <li>Teeth whitening and delicate eye clarity enhancements</li>
            </ul>
          </div>

          <div className="service-pillar-item">
            <h3 className="pillar-title">Editorial Color Grading</h3>
            <p className="pillar-desc">
              Harsh fluorescent chapel lighting, midday direct sun, and incandescent candlelit receptions unified into one harmonious color palette that flows seamlessly across double-page album spreads.
            </p>
            <ul className="pillar-checklist">
              <li>White balance and exposure harmonization</li>
              <li>Signature film emulation and fine art black & white</li>
              <li>Highlight recovery on intricate lace and silk wedding gowns</li>
            </ul>
          </div>

          <div className="service-pillar-item">
            <h3 className="pillar-title">Environment & Distraction Removal</h3>
            <p className="pillar-desc">
              Clean up architectural backgrounds to ensure the couple remains the sole emotional focal point of every composition.
            </p>
            <ul className="pillar-checklist">
              <li>Exit signs, light stands, and speaker cables painted out</li>
              <li>Unwanted photobombers and background pedestrians removed</li>
              <li>Sky enhancement and subtle atmospheric haze correction</li>
            </ul>
          </div>
        </div>

        {/* Turnaround & Workflow Banner */}
        <div className="turnaround-banner">
          <div className="banner-icon-box">
            <Clock size={28} />
          </div>
          <div className="banner-text-content">
            <h4>Studio SLA: 48–72 Hour Proof Turnaround</h4>
            <p>Dedicated retouchers assigned to your studio. Unlimited revisions on album spreads prior to final print approval.</p>
          </div>
          <a href="#contact" className="banner-action-btn">
            Submit Test RAW Images
          </a>
        </div>
      </div>
    </section>
  );
}

