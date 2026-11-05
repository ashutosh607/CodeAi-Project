import React from 'react';
import { ShieldCheck, Truck, Package, ArrowRight } from 'lucide-react';

const UK_OFFERINGS = [
  {
    title: 'Flush Mount Albums UK',
    desc: 'Bespoke continuous 180° lay-flat wedding albums printed on Fuji Crystal Archive photographic paper with thick archival substrate boards for UK wedding photographers and high-end studios.',
    badge: 'UK Studio Standard'
  },
  {
    title: 'Luxury Albums & Wooden Caskets UK',
    desc: 'Hand-stitched genuine Italian leather, diamond-polished acrylic cameo windows, and bespoke wooden presentation caskets crafted for luxury British and destination nuptials.',
    badge: 'Luxury Tier'
  },
  {
    title: 'Box and Bags Collection UK',
    desc: 'Rigid 3mm clamshell boxes, magnetic closure presentation cases, and custom velvet travel bags tailored to standard UK print dimensions.',
    badge: 'Protective Storage'
  },
  {
    title: 'Slip-In Parent Albums UK',
    desc: 'Archival slip-in pocket albums in 4x6", 5x7", and 6x8" formats designed as thoughtful parent duplicates and studio sample copies.',
    badge: 'Companion Editions'
  },
  {
    title: 'Image Editing & Retouching for UK Studios',
    desc: 'Dedicated overnight turnaround for UK photography studios during peak wedding season. Natural skin tone grading calibrated for British ambient lighting.',
    badge: '48h SLA'
  }
];

export default function UkStudioSection() {
  return (
    <section id="uk-studio" className="editorial-section uk-studio-section">
      <div className="section-container">
        <div className="editorial-section-intro">
          <div className="intro-badge uk-flag-badge">Dedicated UK & International Service</div>
          <h2 className="editorial-h2">United Kingdom Studio Collections</h2>
          <p className="editorial-lead">
            Ultraa Albums provides full direct-to-studio fulfillment across the United Kingdom. Enjoy transparent GBP pricing, fast door-to-door courier delivery, and bespoke sample swatch rings for your London and regional studio consultations.
          </p>
        </div>

        {/* UK Service Guarantees */}
        <div className="uk-benefits-row">
          <div className="uk-benefit-item">
            <Truck size={22} className="uk-icon" />
            <div>
              <strong>Tracked UK Courier Delivery</strong>
              <span>Fast 4–6 business day insured transit via DHL Express / FedEx directly to your door.</span>
            </div>
          </div>
          <div className="uk-benefit-item">
            <ShieldCheck size={22} className="uk-icon" />
            <div>
              <strong>Transparent Invoicing in GBP</strong>
              <span>Simplified invoicing with no hidden customs fees or clearing paperwork.</span>
            </div>
          </div>
          <div className="uk-benefit-item">
            <Package size={22} className="uk-icon" />
            <div>
              <strong>Sample Swatch Kits for UK Studios</strong>
              <span>Full swatch rings containing real linen, leather swatches, and foil debossing samples delivered across the UK.</span>
            </div>
          </div>
        </div>

        {/* UK Dedicated Catalog Items */}
        <div className="uk-offerings-grid">
          {UK_OFFERINGS.map((item, idx) => (
            <div key={idx} className="uk-offering-card">
              <div className="card-top-tag">
                <span>{item.badge}</span>
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
              <div className="card-action">
                <a href="#contact" className="uk-card-link">
                  <span>Request UK Studio Pricing</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

