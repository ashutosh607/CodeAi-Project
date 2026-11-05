import React, { useState } from 'react';
import { Sparkles, Layers, Shield, Droplets } from 'lucide-react';

const COVER_MATERIALS = [
  {
    category: 'Italian Leather',
    items: [
      { id: 'l-cognac', name: 'Tuscan Cognac', hex: '#8B4513', desc: 'Vegetable-tanned full-grain leather with rich natural grain patina.' },
      { id: 'l-espresso', name: 'Dark Espresso', hex: '#2B1E16', desc: 'Supple matte oil pull-up leather that deepens in character with age.' },
      { id: 'l-ivory', name: 'Bone Ivory', hex: '#EAE6DF', desc: 'Smooth, buttery soft-grain Italian nappa leather in warm neutral tone.' },
      { id: 'l-charcoal', name: 'Onyx Charcoal', hex: '#242320', desc: 'Deep black matte leather with elegant subtle pebble texture.' }
    ]
  },
  {
    category: 'Japanese Bookcloth Linen',
    items: [
      { id: 'm-sand', name: 'Flax Sand', hex: '#EDE5DA', desc: 'Unbleached natural linen weave with tactile organic slub texture.' },
      { id: 'm-sage', name: 'Botanical Sage', hex: '#DCE5DA', desc: 'Earthy muted sage green woven from durable combed cotton fibers.' },
      { id: 'm-blush', name: 'Pastel Blush', hex: '#F3E4E1', desc: 'Delicate soft blush pink linen with micro-woven tight weave.' },
      { id: 'm-navy', name: 'Midnight Navy', hex: '#1C2833', desc: 'Deep classic navy bookcloth with high abrasion resistance.' }
    ]
  },
  {
    category: 'Plush French Velvet & Silk',
    items: [
      { id: 'v-champagne', name: 'Champagne Silk', hex: '#E6D7C3', desc: 'Opulent silk velvet reflecting soft directional studio ambient light.' },
      { id: 'v-rose', name: 'Dusty Rose Velvet', hex: '#D4A5A5', desc: 'Vintage crushed velvet offering high tactile softness and luxury weight.' },
      { id: 'v-emerald', name: 'Imperial Emerald', hex: '#1B4D3E', desc: 'Deep jewel-toned velvet evoking royal European heritage bindings.' }
    ]
  }
];

const FOIL_FINISHES = [
  { id: 'gold', name: 'Metallic Warm Gold', color: '#D4AF37', desc: 'Classic 22k mirror gold foil hot-stamped with heavy brass dies.' },
  { id: 'rose-gold', name: 'Soft Rose Gold', color: '#B76E79', desc: 'Subtle copper-blush luster complementing romantic pastel linen covers.' },
  { id: 'silver', name: 'Sterling Silver', color: '#C0C0C0', desc: 'Clean, architectural chrome silver foil for contemporary black tie weddings.' },
  { id: 'blind', name: 'Blind Deboss', color: '#4A4843', desc: 'Pure heated pressure stamping creating an inkless, deep tactile indentation.' }
];

const PAPERS = [
  {
    name: 'Fuji Crystal Archive Lustre',
    desc: 'Micro-fine stippled surface that minimizes fingerprint marks while delivering vivid contrast and deep shadow detail. The industry gold standard for wedding albums.',
    weight: '300 gsm photographic paper mounted to 1.1mm core',
    finish: 'Semi-matte with subtle lustre reflection'
  },
  {
    name: 'Fuji Fine Art Silk Texture',
    desc: 'An authentic honeycomb silk weave embossed into the emulsion layer, evoking mid-century vintage master portraits and timeless warmth.',
    weight: '320 gsm archival photo base',
    finish: 'Tactile honeycomb woven silk texture'
  },
  {
    name: 'Museum Deep Matte Velvet',
    desc: 'Zero-reflection velvety matte surface. Absorbs room light completely for an intimate, painterly editorial viewing experience.',
    weight: '310 gsm 100% cotton rag photo emulsion',
    finish: 'Ultra-matte velvety smooth surface'
  }
];

export default function MaterialsFinishes() {
  const [selectedMaterial, setSelectedMaterial] = useState(COVER_MATERIALS[1].items[0]);
  const [selectedFoil, setSelectedFoil] = useState(FOIL_FINISHES[0]);

  return (
    <section id="materials" className="editorial-section materials-section">
      <div className="section-container">
        <div className="editorial-section-intro">
          <div className="intro-badge">Tactile Materials & Palette</div>
          <h2 className="editorial-h2">Materials, Leathers & Foil Finishes</h2>
          <p className="editorial-lead">
            Every sensory touchpoint has been curated to reward touch. Choose from imported full-grain Tuscan hides, Japanese open-weave linens, and heated brass debossing dies.
          </p>
        </div>

        {/* Interactive Material Studio Grid */}
        <div className="materials-interactive-stage">
          {/* Left: Swatch Library Selection */}
          <div className="swatch-library-column">
            <h3 className="column-title">1. Cover Substrates & Textiles</h3>
            <div className="material-categories-accordion">
              {COVER_MATERIALS.map((cat, cIdx) => (
                <div key={cIdx} className="category-group">
                  <span className="category-group-name">{cat.category}</span>
                  <div className="swatches-row">
                    {cat.items.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className={`interactive-swatch-chip ${selectedMaterial.id === item.id ? 'active' : ''}`}
                        onClick={() => setSelectedMaterial(item)}
                        aria-label={`Select ${item.name}`}
                      >
                        <span
                          className="chip-color-square"
                          style={{ backgroundColor: item.hex }}
                        />
                        <span className="chip-name">{item.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="foil-finishes-box">
              <h3 className="column-title">2. Hot Stamping & Lettering Foils</h3>
              <div className="foil-options-grid">
                {FOIL_FINISHES.map((foil) => (
                  <button
                    key={foil.id}
                    type="button"
                    className={`foil-chip-btn ${selectedFoil.id === foil.id ? 'active' : ''}`}
                    onClick={() => setSelectedFoil(foil)}
                  >
                    <span
                      className="foil-gem"
                      style={{ backgroundColor: foil.color }}
                    />
                    <div className="foil-chip-info">
                      <strong>{foil.name}</strong>
                      <span>{foil.desc}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Live Realistic Material Specimen Preview */}
          <div className="specimen-preview-column">
            <div
              className="specimen-card-display"
              style={{
                backgroundColor: selectedMaterial.hex,
                borderColor: 'rgba(41, 40, 36, 0.15)'
              }}
            >
              {/* Embossed Specimen Stamp */}
              <div
                className="specimen-emboss-frame"
                style={{
                  borderColor: selectedFoil.color,
                  boxShadow: `0 0 10px ${selectedFoil.color}22`
                }}
              >
                <span
                  className="specimen-title"
                  style={{ color: selectedFoil.color }}
                >
                  THE BESPOKE COLLECTION
                </span>
                <span
                  className="specimen-names"
                  style={{ color: selectedFoil.color }}
                >
                  CHARLOTTE & WILLIAM
                </span>
                <span
                  className="specimen-date"
                  style={{ color: selectedFoil.color }}
                >
                  ULTRAA ALBUMS • FINE ART HEIRLOOM
                </span>
              </div>

              <div className="specimen-badge-footer">
                <span>Material: {selectedMaterial.name}</span>
                <span>Foil: {selectedFoil.name}</span>
              </div>
            </div>

            <div className="specimen-descriptor-panel">
              <h4 className="specimen-selection-title">{selectedMaterial.name}</h4>
              <p className="specimen-selection-desc">{selectedMaterial.desc}</p>
              <div className="sample-kit-prompt">
                <span>Photographer swatch rings available for studio consultations.</span>
                <a href="#contact" className="sample-link">Order Material Swatch Ring →</a>
              </div>
            </div>
          </div>
        </div>

        {/* Paper Substrates Row */}
        <div className="papers-editorial-panel">
          <h3 className="papers-heading">Certified Photographic Papers</h3>
          <div className="papers-grid">
            {PAPERS.map((paper, pIdx) => (
              <div key={pIdx} className="paper-editorial-item">
                <h4 className="paper-name">{paper.name}</h4>
                <p className="paper-desc">{paper.desc}</p>
                <div className="paper-spec-line">
                  <strong>Weight:</strong> {paper.weight}
                </div>
                <div className="paper-spec-line">
                  <strong>Finish:</strong> {paper.finish}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

