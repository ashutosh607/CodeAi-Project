import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import TextReveal from './motion/TextReveal';
import RevealOnScroll from './motion/RevealOnScroll';
import StaggerBoxes from './motion/StaggerBoxes';
import TiltCard from './motion/TiltCard';

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
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      id="services"
      className="relative py-20 sm:py-28 overflow-hidden bg-[#FAF7F2] border-t border-[#EAE3D6]"
      style={{
        background: 'radial-gradient(ellipse 90% 70% at 50% 10%, #FFFFFF 0%, #FAF7F2 60%, #F4EFE6 100%)'
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Editorial Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-18">
          <RevealOnScroll direction="down" delay={0.05} distance={16}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B99A69]/40 bg-[#FFFFFF]/80 backdrop-blur-xs text-[10.5px] uppercase font-sans font-medium tracking-[0.2em] text-[#9E7D4B] mb-3.5 shadow-xs">
              <Sparkles size={11} className="text-[#B99A69]" />
              <span>Atelier Craft &amp; Post-Production</span>
            </div>
          </RevealOnScroll>

          <TextReveal
            as="h2"
            className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#141310] tracking-tight leading-[1.18] mb-4"
          >
            Studio Services &amp; Lab Solutions
          </TextReveal>

          <RevealOnScroll direction="up" delay={0.16} distance={18}>
            <p className="font-sans text-[14px] sm:text-[15.5px] text-[#5C564B] leading-relaxed max-w-xl mx-auto font-normal">
              From pixel-level skin retouching to architectural layout curation and full-day documentary coverage, each commission adheres to our uncompromising fine-art standards.
            </p>
          </RevealOnScroll>
        </div>

        {/* Alternating Staggered Cards Grid: Even cards slide from Left, Odd cards slide from Right */}
        <StaggerBoxes
          direction="alternate"
          distance={48}
          stagger={0.14}
          duration={0.9}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch"
        >
          {SERVICES.map((item, idx) => (
            <TiltCard
              key={item.id}
              maxTilt={6}
              scale={1.02}
              glare={true}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="h-full flex flex-col"
            >
              <article
                className="group relative h-full bg-white rounded-2xl border border-[#EAE3D6] hover:border-[#B99A69]/80 shadow-[0_10px_30px_-8px_rgba(20,19,16,0.06)] hover:shadow-[0_22px_48px_-10px_rgba(185,154,105,0.24)] transition-all duration-400 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Photo Frame with Subtle Zoom and Badge */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EDE6DC]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 will-change-transform"
                    />

                    {/* Gradient Overlay for Top Badge Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />

                    {/* Badge Pill */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#141310]/85 backdrop-blur-md border border-[#FFFFFF]/20 text-[#FAF7F2] text-[10px] font-sans font-medium uppercase tracking-[0.14em]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                      <span>{item.badge}</span>
                    </div>

                    {/* Floating Service Index Watermark */}
                    <div className="absolute bottom-2.5 right-3.5 text-[#FFFFFF]/80 font-serif text-[13px] tracking-widest uppercase">
                      0{idx + 1}
                    </div>
                  </div>

                  {/* Card Editorial Content */}
                  <div className="p-6 sm:p-7 pb-4">
                    <h3 className="font-serif text-[21px] sm:text-[23px] text-[#141310] font-normal leading-snug mb-2.5 group-hover:text-[#9E7D4B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[13px] sm:text-[13.5px] text-[#5C564B] leading-relaxed mb-5 font-normal">
                      {item.desc}
                    </p>

                    {/* Interactive "Words come / see what it does include" Drawer */}
                    <div className="mt-4 pt-4 border-t border-[#F2ECE3] transition-all duration-300">
                      <div className="flex items-center gap-1.5 text-[10.5px] uppercase font-sans font-semibold tracking-[0.16em] text-[#9E7D4B] mb-2.5">
                        <Layers size={12} className="text-[#B99A69]" />
                        <span>Included In This Service</span>
                      </div>

                      <ul className="space-y-2 m-0 p-0 list-none">
                        {item.includes.map((line, lIdx) => (
                          <li
                            key={line}
                            className="flex items-start gap-2.5 text-[12px] sm:text-[12.5px] text-[#3A3630] leading-snug font-normal transition-transform duration-300"
                            style={{
                              transform: hoveredCard === item.id ? 'translateX(3px)' : 'none',
                              transitionDelay: `${lIdx * 35}ms`
                            }}
                          >
                            <span className="w-3.5 h-3.5 rounded-full bg-[#B99A69]/15 flex items-center justify-center shrink-0 mt-0.5 text-[#9E7D4B] group-hover:bg-[#B99A69]/25 transition-colors">
                              <Check size={9} strokeWidth={2.6} />
                            </span>
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Action Link */}
                <div className="p-6 sm:p-7 pt-4 border-t border-[#F2ECE3] mt-auto bg-[#FCFBF8]/90">
                  <Link
                    to={`/services/${item.slug}`}
                    className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-[#FAF7F2] hover:bg-[#141310] text-[#141310] hover:text-[#FAF7F2] border border-[#E8E1D5] hover:border-[#141310] text-[11px] font-sans uppercase tracking-[0.16em] font-semibold transition-all duration-300 shadow-xs"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>{item.cta}</span>
                    <ArrowRight
                      size={14}
                      className="text-[#9E7D4B] group-hover:text-[#FAF7F2] transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            </TiltCard>
          ))}
        </StaggerBoxes>
      </div>
    </section>
  );
}
