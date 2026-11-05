import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from './motion/RevealOnScroll';

const SERVICES = [
  {
    id: 'photo-editing',
    slug: 'image-editing',
    title: 'Photo Editing Services',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=85',
    desc: 'Professional skin retouching, color correction, skin smoothing, and lighting enhancement with guaranteed 48-72 hour proof turnarounds.',
    cta: 'EXPLORE EDITING SUITE'
  },
  {
    id: 'album-design',
    slug: 'album-designing',
    title: 'Album Layout Designing',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=85',
    desc: 'Bespoke storytelling layouts curated by seasoned book designers. Cloud soft-copy proofs with unlimited revisions until absolute satisfaction.',
    cta: 'REQUEST DESIGN SERVICE'
  },
  {
    id: 'photography',
    slug: 'wedding-photography',
    title: 'Wedding Photography Cover',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85',
    desc: 'Full-day candid documentary coverage, pre-wedding couple sessions, and 4K cinematic films capturing authentic rituals and emotion.',
    cta: 'VIEW WORK & SPECS'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="section-container">
        <RevealOnScroll direction="up" className="services-header-center">
          <div className="section-eyebrow-chip">
            <span>COMPLETE POST-PRODUCTION &amp; STORYTELLING</span>
          </div>
          <h2 className="services-heading">Services We Offer</h2>
        </RevealOnScroll>

        <div className="services-three-column-grid">
          {SERVICES.map((srv, index) => (
            <RevealOnScroll
              key={srv.id}
              direction="up"
              delay={index * 0.1}
              className="service-editorial-card group"
            >
              <div className="service-card-photo-wrapper overflow-hidden">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="service-card-img transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>

              <div className="service-card-content">
                <h3 className="service-card-title">{srv.title}</h3>
                <p className="service-card-desc">{srv.desc}</p>
                <Link to={`/services/${srv.slug}`} className="service-card-link">
                  <span>{srv.cta}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
