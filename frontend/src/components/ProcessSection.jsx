import React, { useState } from 'react';
import { Check, Sparkles, Clock, ArrowRight, Layers } from 'lucide-react';
import TextReveal from './motion/TextReveal';
import RevealOnScroll from './motion/RevealOnScroll';
import StaggerBoxes from './motion/StaggerBoxes';
import TiltCard from './motion/TiltCard';

const STEPS = [
  {
    num: '01',
    tag: 'STAGE 01 • INGESTION',
    title: 'Transfer Photos Online',
    desc: 'Upload high-resolution camera files or client selects via Dropbox, WeTransfer, Google Drive, or our studio portal.',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=85',
    includes: [
      'RAW / DNG / TIFF Direct Cloud Upload',
      'Dropbox, Drive & Studio Portal Sync',
      'Resolution & Color Gamut Pre-Flight Audit',
      'Dedicated Studio Project Manager'
    ]
  },
  {
    num: '02',
    tag: 'STAGE 02 • PROOFING',
    title: 'Get Design Proof',
    desc: 'Receive a complete digital page-turn soft-copy proof within 3 business days. Request unlimited revisions until approved.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=85',
    includes: [
      'Interactive 3D Digital Page-Turn Proof',
      'Unlimited 1-on-1 Layout Revisions',
      '180° Panoramic Spread Alignment Check',
      'Virtual Foil Deboss & Typography Mockup'
    ]
  },
  {
    num: '03',
    tag: 'STAGE 03 • LAB CRAFT',
    title: 'Archival Printing',
    desc: 'Exposed on Fuji Crystal Archive photographic paper, mounted on rigid boards, and bound in handcrafted covers.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=85',
    includes: [
      'Fuji Crystal Archive DPII Chemistry',
      '1.1mm Non-Warp Archival Core Boards',
      'Italian Full-Grain Leather & Linen Wrap',
      'Heated Magnesium Brass Die Stamping'
    ]
  },
  {
    num: '04',
    tag: 'STAGE 04 • DISPATCH',
    title: 'Express Shipping',
    desc: 'Every album is nestled in custom presentation boxes and shipped with door-to-door tracked delivery across India & worldwide.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=85',
    includes: [
      'Double-Walled Presentation Impact Cartons',
      'Anti-Humidity Velvet Protective Pouch',
      'Insured Air Express Delivery (DHL/FedEx)',
      'Real-Time WhatsApp & SMS Tracking'
    ]
  }
];

export default function ProcessSection() {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <section
      id="process"
      className="relative py-20 sm:py-28 overflow-hidden bg-[#FAF9F5] border-t border-[#EAE3D6]"
      style={{
        background: 'radial-gradient(ellipse 90% 70% at 50% 15%, #FFFFFF 0%, #FAF9F5 65%, #F3EDE3 100%)'
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-18">
          <RevealOnScroll direction="down" delay={0.05} distance={16}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B99A69]/40 bg-[#FFFFFF]/80 backdrop-blur-xs text-[10.5px] uppercase font-sans font-medium tracking-[0.2em] text-[#9E7D4B] mb-3.5 shadow-xs">
              <Clock size={11} className="text-[#B99A69]" />
              <span>4-Stage Concierge Workflow</span>
            </div>
          </RevealOnScroll>

          <TextReveal
            as="h2"
            className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#141310] tracking-tight leading-[1.18] mb-4"
          >
            How We Make Your Album
          </TextReveal>

          <RevealOnScroll direction="up" delay={0.16} distance={18}>
            <p className="font-sans text-[14px] sm:text-[15.5px] text-[#5C564B] leading-relaxed max-w-xl mx-auto font-normal">
              A transparent, white-glove production journey designed for photographers and couples who value precision, prompt proofing, and master bookbinding craft.
            </p>
          </RevealOnScroll>
        </div>

        {/* Alternating Staggered Process Cards: Even from Left, Odd from Right */}
        <StaggerBoxes
          direction="alternate"
          distance={46}
          stagger={0.12}
          duration={0.9}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {STEPS.map((item, idx) => (
            <TiltCard
              key={item.num}
              maxTilt={7}
              scale={1.02}
              glare={true}
              onMouseEnter={() => setHoveredStep(item.num)}
              onMouseLeave={() => setHoveredStep(null)}
              className="h-full flex flex-col"
            >
              <article
                className="group relative h-full bg-white rounded-2xl border border-[#EAE3D6] hover:border-[#B99A69]/80 shadow-[0_10px_28px_-8px_rgba(20,19,16,0.06)] hover:shadow-[0_22px_45px_-8px_rgba(185,154,105,0.24)] transition-all duration-400 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Photo Frame with Number Badge */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#EAE2D5]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 will-change-transform"
                    />

                    {/* Gradient Overlay for Number Badge Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/35 pointer-events-none" />

                    {/* Top Tag Pill */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#141310]/85 backdrop-blur-md border border-[#FFFFFF]/20 text-[#FAF7F2] text-[9.5px] font-sans font-medium uppercase tracking-[0.14em]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{item.tag}</span>
                    </div>

                    {/* Prominent Gold Number Stamp */}
                    <div className="absolute bottom-2 right-3 font-serif text-3xl sm:text-4xl font-normal text-[#FFFFFF] drop-shadow-md tracking-wider">
                      {item.num}
                    </div>
                  </div>

                  {/* Editorial Content */}
                  <div className="p-5 sm:p-6 pb-4">
                    <h3 className="font-serif text-[19px] sm:text-[20px] text-[#141310] font-normal leading-snug mb-2 group-hover:text-[#9E7D4B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[12.5px] sm:text-[13px] text-[#5C564B] leading-relaxed mb-4 font-normal">
                      {item.desc}
                    </p>

                    {/* Interactive "Words come / see what it does include" Drawer */}
                    <div className="pt-3.5 border-t border-[#F2ECE3] transition-all duration-300">
                      <div className="flex items-center gap-1.5 text-[10px] uppercase font-sans font-semibold tracking-[0.16em] text-[#9E7D4B] mb-2">
                        <Layers size={11} className="text-[#B99A69]" />
                        <span>Stage Specifications</span>
                      </div>

                      <ul className="space-y-1.5 m-0 p-0 list-none">
                        {item.includes.map((line, lIdx) => (
                          <li
                            key={line}
                            className="flex items-start gap-2 text-[11.5px] sm:text-[12px] text-[#3A3630] leading-snug font-normal transition-transform duration-300"
                            style={{
                              transform: hoveredStep === item.num ? 'translateX(2.5px)' : 'none',
                              transitionDelay: `${lIdx * 30}ms`
                            }}
                          >
                            <span className="w-3.5 h-3.5 rounded-full bg-[#B99A69]/15 flex items-center justify-center shrink-0 mt-0.5 text-[#9E7D4B] group-hover:bg-[#B99A69]/25 transition-colors">
                              <Check size={8.5} strokeWidth={2.8} />
                            </span>
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Step Footer */}
                <div className="px-5 sm:px-6 py-3 border-t border-[#F2ECE3] bg-[#FCFBF8]/90 flex items-center justify-between text-[11px] font-sans text-[#777066] uppercase tracking-[0.14em]">
                  <span>Step 0{idx + 1} of 04</span>
                  <span className="text-[#9E7D4B] font-medium">Archival SLA</span>
                </div>
              </article>
            </TiltCard>
          ))}
        </StaggerBoxes>
      </div>
    </section>
  );
}
