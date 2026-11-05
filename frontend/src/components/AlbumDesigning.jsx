import React, { useState } from 'react';
import { Check, RefreshCw, MessageSquare } from 'lucide-react';

const DESIGN_STYLES = [
  {
    id: 'minimalist',
    name: 'Classic Minimalist',
    desc: 'Generous negative space, pristine white margins, and one or two impactful hero images per page. Perfect for fine art European destination weddings.',
    spreadPreview: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
    characteristics: ['1-3 images per spread', 'Wide white archival margins', 'Subtle fine-line framing']
  },
  {
    id: 'editorial',
    name: 'Contemporary Editorial',
    desc: 'Inspired by architectural monographs and high-fashion publications. Features full-bleed panoramic hero spreads paired with asymmetric detail triptychs.',
    spreadPreview: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=80',
    characteristics: ['Full-bleed panoramic landscape spreads', 'Magazine-style asymmetry', 'Typography date & venue insets']
  },
  {
    id: 'indian-fusion',
    name: 'Indian Fusion & Royal Heritage',
    desc: 'Tailored for grand multi-day celebrations (Mehendi, Sangeet, Haldi, Varmala, Reception). Balances high image counts with dignified compositional elegance.',
    spreadPreview: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
    characteristics: ['Paced across multi-day celebration rituals', 'Rich jewelry and attire detail vignettes', 'Gold debossed chapter section breaks']
  },
  {
    id: 'documentary',
    name: 'Documentary Rhythm',
    desc: 'Paced like a cinematic short film. Alternates quiet, emotional portraits with dynamic, multi-image sequences of laughter, dancing, and heartfelt speeches.',
    spreadPreview: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    characteristics: ['Chronological storytelling progression', 'High energy dance sequences', 'Raw unposed emotional sequencing']
  }
];

export default function AlbumDesigning() {
  const [activeStyle, setActiveStyle] = useState(DESIGN_STYLES[1]);

  return (
    <section id="album-design" className="editorial-section album-design-section">
      <div className="section-container">
        <div className="editorial-section-intro">
          <div className="intro-badge">In-House Atelier Design Team</div>
          <h2 className="editorial-h2">Bespoke Album Designing</h2>
          <p className="editorial-lead">
            Automated DIY software places photos according to rigid algorithms. At Ultraa Albums, an experienced book designer hand-curates every spread, honoring emotional pacing, color harmony, and visual rhythm.
          </p>
        </div>

        {/* Design Philosophy Split */}
        <div className="design-philosophy-split">
          <div className="philosophy-text-card">
            <h3 className="card-headline">Why Photographers Delegate Album Design to Us</h3>
            <p>
              Designing a 70-page flush-mount album takes 12–18 hours of arranging grids, balancing color temperatures, and handling tedious revision rounds.
            </p>
            <p>
              Send us your raw selects or client favorites. Within 3 business days, our team delivers a digital soft-copy proof. You or your couple can review each spread with interactive pin-point commenting, and we perform <strong>unlimited revisions</strong> until the layout is flawless.
            </p>

            <div className="guarantee-pills-row">
              <div className="guarantee-pill">
                <Check size={16} className="pill-check" />
                <span>Unlimited Free Revisions</span>
              </div>
              <div className="guarantee-pill">
                <RefreshCw size={16} className="pill-check" />
                <span>3-Day Turnaround for Initial Proof</span>
              </div>
              <div className="guarantee-pill">
                <MessageSquare size={16} className="pill-check" />
                <span>Cloud Proofing & Sticky Notes</span>
              </div>
            </div>
          </div>

          {/* Interactive Style Explorer */}
          <div className="layout-styles-explorer">
            <h4 className="styles-menu-title">Select a Curated Layout Aesthetic</h4>
            <div className="style-tab-buttons">
              {DESIGN_STYLES.map((style) => (
                <button
                  key={style.id}
                  type="button"
                  className={`style-tab-btn ${activeStyle.id === style.id ? 'active' : ''}`}
                  onClick={() => setActiveStyle(style)}
                >
                  <span className="style-name">{style.name}</span>
                </button>
              ))}
            </div>

            <div className="active-style-preview-frame">
              <img
                src={activeStyle.spreadPreview}
                alt={activeStyle.name}
                className="style-preview-img"
              />
              <div className="style-details-overlay">
                <h5>{activeStyle.name} Layout</h5>
                <p>{activeStyle.desc}</p>
                <div className="style-signatures">
                  {activeStyle.characteristics.map((c, i) => (
                    <span key={i} className="sig-chip">• {c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

