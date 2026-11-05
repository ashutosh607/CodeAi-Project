import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import RevealOnScroll from './motion/RevealOnScroll';
import TextReveal from './motion/TextReveal';
import StaggerBoxes from './motion/StaggerBoxes';

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
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section id="process" className="how-we-work-section bg-[#FAF7F2] py-20 lg:py-28 border-b border-[#EAE3D6]">
      <div className="section-container max-w-[1440px] mx-auto px-5 md:px-12">
        <div className="how-we-work-header-center text-center max-w-2xl mx-auto mb-16">
          <RevealOnScroll direction="down" delay={0.05} distance={12} blur={false}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B99A69]/40 bg-[#B99A69]/10 text-[10px] uppercase font-sans font-medium tracking-[0.22em] text-[#B99A69] mb-3">
              <Sparkles size={12} />
              <span>STREAMLINED STUDIO METHODOLOGY</span>
            </div>
          </RevealOnScroll>
          <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#201E1B] font-normal tracking-tight" delay={0.08}>
            How We Work?
          </TextReveal>
          <p className="font-sans text-sm md:text-base text-[#777066] mt-4 leading-relaxed">
            From initial RAW file ingestion to white-glove archival delivery, hover over any stage below to inspect the complete craftsmanship protocol.
          </p>
        </div>

        <div className="how-we-work-timeline-container relative">
          <StaggerBoxes className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch" stagger={0.1}>
            {STEPS.map((step, idx) => (
              <div
                key={step.num}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() => setActiveStep(activeStep === idx ? null : idx)}
                className="step-process-card group relative bg-white border border-[#EAE3D6] hover:border-[#B99A69] rounded-2xl overflow-hidden shadow-[0_10px_30px_-8px_rgba(32,30,27,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(185,154,105,0.22)] transition-all duration-500 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Photo Header with Zoom and Tag */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#EFEEEA]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 will-change-transform"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                    {/* Step Stage Tag */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#201E1B]/80 backdrop-blur-md border border-[#B99A69]/40">
                      <span className="font-sans text-[9px] font-semibold tracking-[0.16em] uppercase text-[#D4AF37]">
                        {step.tag}
                      </span>
                    </div>

                    {/* Circular Step Number Badge */}
                    <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#B99A69] flex items-center justify-center shadow-md">
                      <span className="font-serif text-sm font-bold text-[#201E1B]">{step.num}</span>
                    </div>

                    {/* SLIDING HOVER INCLUSIONS OVERLAY */}
                    <div className="absolute inset-0 bg-[#1A1815]/95 backdrop-blur-md p-5 flex flex-col justify-between opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-20">
                      <div>
                        <div className="flex items-center gap-1.5 text-[9.5px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37] mb-2.5">
                          <Sparkles size={11} />
                          <span>WHAT THIS STAGE INCLUDES</span>
                        </div>
                        <ul className="space-y-2 text-left">
                          {step.includes.map((inc, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-[11px] text-[#FAF7F2] leading-snug">
                              <Check size={12} className="text-[#D4AF37] shrink-0 mt-0.5" />
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-[#C8BEAE] uppercase tracking-wider">
                        <span>Tap to inspect</span>
                        <ArrowRight size={11} className="text-[#D4AF37]" />
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-5 sm:p-6 text-left">
                    <h3 className="font-serif text-[19px] sm:text-[21px] text-[#201E1B] font-normal leading-snug mb-2 group-hover:text-[#B99A69] transition-colors">
                      {step.title}
                    </h3>
                    <p className="font-sans text-[12.5px] text-[#777066] leading-relaxed m-0 font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Card Footer Hint */}
                <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-[#F2ECE3] flex items-center justify-between text-[10.5px] uppercase font-sans font-semibold tracking-wider text-[#B99A69]">
                  <span>Hover to View Inclusions</span>
                  <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </StaggerBoxes>
        </div>
      </div>
    </section>
  );
}
