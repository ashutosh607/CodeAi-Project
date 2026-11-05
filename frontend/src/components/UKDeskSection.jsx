import React from 'react';
import { Truck, ShieldCheck, Package, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from './motion/RevealOnScroll';

const UK_COLLECTIONS = [
  {
    slug: 'flush-mount-album-uk',
    title: 'Flush Mount Albums UK',
    desc: 'Seamless 180° lay-flat wedding albums printed on Fuji Crystal Archive paper with 1.1mm archival core boards for UK photographers and high-end studios.',
    tag: 'UK Standard'
  },
  {
    slug: 'luxury-albums-uk',
    title: 'Luxury Albums & Wooden Caskets UK',
    desc: 'Full-grain Italian leathers, polished acrylic cameo windows, and bespoke presentation caskets crafted for luxury British and European celebrations.',
    tag: 'Luxury Tier'
  },
  {
    slug: 'box-and-bags-uk',
    title: 'Box and Bags Collection UK',
    desc: 'Rigid 3mm clamshell boxes, magnetic closure presentation cases, and custom velvet travel bags tailored to standard UK dimensions.',
    tag: 'Keepsake Storage'
  },
  {
    slug: 'image-editing-uk',
    title: 'Image Editing for UK Studios',
    desc: 'Dedicated overnight proof turnaround during peak wedding season. Natural skin tone grading calibrated for British ambient lighting.',
    tag: '48h SLA'
  }
];

export default function UKDeskSection() {
  return (
    <section id="uk-desk" className="uk-desk-section">
      <div className="section-container">
        <RevealOnScroll direction="up" className="uk-desk-header-center">
          <div className="section-eyebrow-chip">
            <span>DEDICATED UK &amp; EUROPEAN DESK</span>
          </div>
          <h2 className="uk-desk-heading">United Kingdom Studio Collections</h2>
          <p className="uk-desk-lead-text">
            Ultraa Albums provides full direct-to-studio fulfillment across the United Kingdom and Europe. Enjoy transparent GBP billing, insured courier transit, and bespoke swatch rings for your London and regional studio consultations.
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={0.05} className="uk-guarantees-row">
          <div className="uk-guarantee-cell">
            <Truck size={20} className="uk-cell-icon" />
            <div>
              <strong>Tracked UK Courier Delivery</strong>
              <span>Fast 3–5 business day insured transit via DHL Express directly to your door.</span>
            </div>
          </div>
          <div className="uk-guarantee-cell">
            <ShieldCheck size={20} className="uk-cell-icon" />
            <div>
              <strong>Transparent Invoicing in GBP</strong>
              <span>Direct UK BACS transfer with zero hidden forex markups or customs friction.</span>
            </div>
          </div>
          <div className="uk-guarantee-cell">
            <Package size={20} className="uk-cell-icon" />
            <div>
              <strong>Sample Swatch Kits for UK Studios</strong>
              <span>Full swatch rings containing real linen, leather swatches, and foil debossing samples delivered across Britain.</span>
            </div>
          </div>
        </RevealOnScroll>

        <div className="uk-cards-grid">
          {UK_COLLECTIONS.map((col, idx) => (
            <RevealOnScroll
              key={idx}
              direction="up"
              delay={idx * 0.08}
              className="uk-collection-card"
            >
              <span className="uk-card-tag">{col.tag}</span>
              <h3 className="uk-card-title">{col.title}</h3>
              <p className="uk-card-desc">{col.desc}</p>
              <Link to={`/for-uk/${col.slug}`} className="uk-card-action">
                <span>View UK Specifications</span>
                <ArrowRight size={13} />
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
