import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from './motion/RevealOnScroll';
import TextReveal from './motion/TextReveal';

export default function FinalCTA() {
  return (
    <section id="contact-cta" className="final-cta-section">
      <div className="section-container">
        <div className="final-cta-content-wrapper">
          <RevealOnScroll direction="down" delay={0.05} distance={12} blur={false}>
            <div className="section-eyebrow-chip">
              <span>COMMISSION YOUR MASTERPIECE TODAY</span>
            </div>
          </RevealOnScroll>

          <TextReveal as="h2" className="final-cta-heading" delay={0.08}>
            Begin Crafting Your Heirloom
          </TextReveal>

          <RevealOnScroll direction="up" delay={0.18} distance={18}>
            <p className="final-cta-supporting-text">
              Whether you are a studio delivering 50 albums a year or a couple seeking a singular masterpiece, our master binders and color scientists are at your service.
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.26} distance={20}>
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
      </div>
    </section>
  );
}
