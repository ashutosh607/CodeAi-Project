import React from 'react';
import { ShieldCheck, Flame, Scissors, Award } from 'lucide-react';

export default function Craftsmanship() {
  return (
    <section id="craftsmanship" className="editorial-section craftsmanship-section">
      <div className="section-container">
        {/* Intro */}
        <div className="craftsmanship-header">
          <div className="intro-badge">Artisanal Bindery Standards</div>
          <h2 className="editorial-h2">The Anatomy of an Heirloom</h2>
          <p className="editorial-lead">
            In an era of disposable digital feeds, we construct physical monoliths. Every album is engineered to endure ambient humidity, countless turns of the leaf, and the passage of multiple family generations.
          </p>
        </div>

        {/* Deep Dive Diptych 1: The Silver Halide & Substrate Core */}
        <div className="craft-editorial-split">
          <div className="split-imagery">
            <div className="imagery-frame">
              <img
                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1200&q=85"
                alt="Silver Halide Photographic Printing and Binding"
                loading="lazy"
              />
              <div className="image-caption-strip">
                <span>Figure A: 1.1mm archival board substrate layered between photographic emulsion prints.</span>
              </div>
            </div>
          </div>
          <div className="split-text-flow">
            <h3 className="split-title">Continuous 180° Layflat Architecture</h3>
            <p className="split-paragraph">
              Traditional bookbinding requires a sewn gutter that swallows portrait composition down the center crease. Ultraa Albums engineers a continuous flush-mount system where each double-page spread is printed on a continuous photographic sheet, creased with micro-precision, and mounted back-to-back onto 1.1mm dense museum core boards.
            </p>
            <p className="split-paragraph">
              The result is a completely flat panoramic plane. A bride’s veil or an expansive architectural courtyard can sweep across both pages without losing a single millimeter of image detail to the spine.
            </p>

            <div className="craft-metrics-row">
              <div className="metric-cell">
                <span className="metric-val">100%</span>
                <span className="metric-desc">Panoramic image visibility across the center gutter</span>
              </div>
              <div className="metric-cell">
                <span className="metric-val">1.1 mm</span>
                <span className="metric-desc">Archival board core thickness preventing leaf bowing</span>
              </div>
              <div className="metric-cell">
                <span className="metric-val">100+ Yrs</span>
                <span className="metric-desc">Certified silver halide photographic color permanence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Deep Dive Diptych 2: Cover Assembly & Foil Debossing */}
        <div className="craft-editorial-split reverse-split">
          <div className="split-imagery">
            <div className="imagery-frame">
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85"
                alt="Brass Die Foil Debossing and Cover Finishing"
                loading="lazy"
              />
              <div className="image-caption-strip">
                <span>Figure B: Hand-tucked Japanese linen corners and heated brass die debossing.</span>
              </div>
            </div>
          </div>
          <div className="split-text-flow">
            <h3 className="split-title">Artisanal Hand-Turned Covers & Brass Stamping</h3>
            <p className="split-paragraph">
              Automated case-makers pinch cloth at machine angles. At Ultraa Albums, our bookbinders tuck, wrap, and bone each corner by hand using archival neutral-pH adhesives that will never oxidize or yellow over time.
            </p>
            <p className="split-paragraph">
              Personalized names and titles are applied using heavy brass typographic dies heated to exact temperatures. We stamp real metallic gold foil, soft rose gold, or blind deboss directly into the weave of our linens and full-grain leathers, creating a permanent tactile impression you can feel with your fingertips.
            </p>

            <div className="artisan-signatures-grid">
              <div className="artisan-item">
                <Award size={18} className="artisan-icon" />
                <div>
                  <strong>Neutral-pH Adhesives</strong>
                  <span>Prevents paper warping and acid degradation over time.</span>
                </div>
              </div>
              <div className="artisan-item">
                <Flame size={18} className="artisan-icon" />
                <div>
                  <strong>Heated Brass Hot Stamping</strong>
                  <span>Permanent debossed typography with authentic metallic foil.</span>
                </div>
              </div>
              <div className="artisan-item">
                <Scissors size={18} className="artisan-icon" />
                <div>
                  <strong>Hand-Dressed Corners</strong>
                  <span>Hand-tucked 45-degree corner joints for heirloom durability.</span>
                </div>
              </div>
              <div className="artisan-item">
                <ShieldCheck size={18} className="artisan-icon" />
                <div>
                  <strong>Triple QC Protocol</strong>
                  <span>Every print spread inspected under 5000K daylight simulation.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

