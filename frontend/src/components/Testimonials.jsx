import React from 'react';
import { Star } from 'lucide-react';
import RevealOnScroll from './motion/RevealOnScroll';
import TextReveal from './motion/TextReveal';

export default function Testimonials() {
  return (
    <section className="blush-testimonial-section">
      <div className="section-container">
        <div className="blush-testimonial-card-center">
          <TextReveal as="p" className="testimonial-quote-paragraph" delay={0.08}>
            “Ultraa Albums completely transformed how we present client packages. Our couples are blown away when they receive their leather books. The weight, the tactile smell of the cover, and the flat 180° colour rendition makes these albums an irreplaceable family relic.”
          </TextReveal>

          <RevealOnScroll direction="up" delay={0.25} distance={15}>
            <div className="testimonial-client-credentials">
              <span className="client-name-title">ANANYA VERMA · WEDDING STUDIO</span>
              <div className="client-star-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#C5A880" color="#C5A880" />
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
