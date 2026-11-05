import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from './motion/RevealOnScroll';
import TextReveal from './motion/TextReveal';
import StaggerBoxes from './motion/StaggerBoxes';

const SERVICES = [
  {
    id: 'photo-editing',
    slug: 'image-editing',
    title: 'Photo Editing Services',
    badge: '48H RUSH SLA',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=85',
    desc: 'Professional skin retouching, color correction, skin smoothing, and lighting enhancement with guaranteed 48-72 hour proof turnarounds.',
    cta: 'EXPLORE EDITING SUITE',
    includes: [
      'Frequency Separation & Micro-Dodge Skin Retouching',
      'Consistent Ambient Color Grading & Exposure Sync',
      'Guaranteed 48–72h Turnaround with Unlimited Proofs',
      'Print-Ready 16-Bit TIFF & ICC Profile Exports'
    ]
  },
  {
    id: 'album-design',
    slug: 'album-designing',
    title: 'Album Layout Designing',
    badge: 'BESPOKE CURATION',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=85',
    desc: 'Bespoke storytelling layouts curated by seasoned book designers. Cloud soft-copy proofs with unlimited revisions until absolute satisfaction.',
    cta: 'REQUEST DESIGN SERVICE',
    includes: [
      'Narrative Storyline Sequencing & Curating',
      'Architectural Negative White Space Formatting',
      'Interactive Cloud Page-Turn Soft-Proof App',
      'Zero-Crease 180° Layflat Spread Calibration'
    ]
  },
  {
    id: 'photography',
    slug: 'wedding-photography',
    title: 'Wedding Photography Cover',
    badge: '100MP MEDIUM FORMAT',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85',
    desc: 'Full-day candid documentary coverage, pre-wedding couple sessions, and 4K cinematic films capturing authentic rituals and emotion.',
    cta: 'VIEW WORK & SPECS',
    includes: [
      'Multi-Day High-Society Documentary Coverage',
      'Medium Format (Hasselblad & Leica Optical Latitude)',
      'Licensed 4K Aerial Drone Cinematography',
      'Handcrafted 180° Layflat Heirloom Album Included'
    ]
  }
];

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section id="services" className="services-section bg-[#FAF9F5] py-20 lg:py-28 border-b border-[#EAE3D6]">
      <div className="section-container max-w-[1440px] mx-auto px-5 md:px-12">
        <div className="services-header-center text-center max-w-2xl mx-auto mb-16">
          <RevealOnScroll direction="down" delay={0.05} distance={12} blur={false}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B99A69]/40 bg-[#B99A69]/10 text-[10px] uppercase font-sans font-medium tracking-[0.22em] text-[#B99A69] mb-3">
              <Sparkles size={12} />
              <span>COMPLETE POST-PRODUCTION &amp; STORYTELLING</span>
            </div>
          </RevealOnScroll>
          <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#201E1B] font-normal tracking-tight" delay={0.08}>
            Services We Offer
          </TextReveal>
          <p className="font-sans text-sm md:text-base text-[#777066] mt-4 leading-relaxed">
            Hover over any service below to inspect complete studio inclusions, deliverables, and turnaround protocols.
          </p>
        </div>

        <StaggerBoxes className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" stagger={0.12}>
          {SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              onMouseEnter={() => setHoveredService(idx)}
              onMouseLeave={() => setHoveredService(null)}
              className="service-editorial-card group relative bg-white border border-[#EAE3D6] hover:border-[#B99A69] rounded-2xl overflow-hidden shadow-[0_10px_30px_-8px_rgba(32,30,27,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(185,154,105,0.22)] transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Photo Header with Zoom & Inclusions Hover Overlay */}
                <div className="service-card-photo-wrapper relative aspect-[16/11] overflow-hidden bg-[#EFEEEA]">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="service-card-img w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 will-change-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#201E1B]/80 backdrop-blur-md border border-[#B99A69]/40 z-10">
                    <span className="font-sans text-[9px] font-semibold tracking-[0.16em] uppercase text-[#D4AF37]">
                      {srv.badge}
                    </span>
                  </div>

                  {/* SLIDING HOVER INCLUSIONS OVERLAY */}
                  <div className="absolute inset-0 bg-[#1A1815]/95 backdrop-blur-md p-6 flex flex-col justify-between opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
                    <div>
                      <div className="flex items-center gap-1.5 text-[9.5px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37] mb-3">
                        <Sparkles size={11} />
                        <span>WHAT THIS SERVICE INCLUDES</span>
                      </div>
                      <ul className="space-y-2.5 text-left">
                        {srv.includes.map((inc, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2.5 text-[11.5px] text-[#FAF7F2] leading-snug">
                            <Check size={13} className="text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-[#C8BEAE] uppercase tracking-wider">
                      <span>Full studio specifications</span>
                      <ArrowRight size={12} className="text-[#D4AF37]" />
                    </div>
                  </div>
                </div>

                <div className="service-card-content p-6 text-left">
                  <h3 className="service-card-title font-serif text-[22px] sm:text-[24px] text-[#201E1B] font-normal leading-snug mb-2.5 group-hover:text-[#B99A69] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="service-card-desc font-sans text-[13px] text-[#777066] leading-relaxed mb-6 font-normal">
                    {srv.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#F2ECE3] flex items-center justify-between mt-auto">
                <Link to={`/services/${srv.slug}`} className="service-card-link inline-flex items-center gap-2 text-[11px] font-sans font-semibold tracking-[0.16em] uppercase text-[#201E1B] group-hover:text-[#B99A69] transition-colors">
                  <span>{srv.cta}</span>
                  <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <span className="text-[10px] text-[#9D8357] uppercase font-sans tracking-wider hidden sm:inline">
                  Hover to view inclusions
                </span>
              </div>
            </div>
          ))}
        </StaggerBoxes>
      </div>
    </section>
  );
}
