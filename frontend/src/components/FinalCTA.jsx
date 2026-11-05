import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from './motion/RevealOnScroll';

export default function FinalCTA() {
  return (
    <section id="contact-cta" className="final-cta-section">
      <div className="section-container">
        <RevealOnScroll direction="up" className="final-cta-content-wrapper">
          <div className="section-eyebrow-chip">
            <span>COMMISSION YOUR MASTERPIECE TODAY</span>
          </div>

          <h2 className="final-cta-heading">Begin Crafting Your Heirloom</h2>

          <p className="final-cta-supporting-text">
            Whether you are a studio delivering 50 albums a year or a couple seeking a singular masterpiece, our master binders and color scientists are at your service.
          </p>

          <div className="final-cta-action-buttons">
            <Link to="/enquire" className="final-cta-primary-pill">
              SCHEDULE CONSULTATION / ORDER A SAMPLE PACK
            </Link>
            <Link to="/products" className="final-cta-secondary-link">
              <span>VIEW BESPOKE PRICING</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
