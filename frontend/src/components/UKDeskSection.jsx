import React, { useRef, useEffect, useState } from 'react';
import { Truck, ShieldCheck, Package, ArrowRight, Check, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from './motion/TextReveal';
import RevealOnScroll from './motion/RevealOnScroll';
import TiltCard from './motion/TiltCard';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const UK_GUARANTEES = [
  {
    id: 'courier',
    icon: Truck,
    title: 'Tracked UK Courier Delivery',
    desc: 'Fast 3–5 business day insured transit via DHL Express directly to your door.'
  },
  {
    id: 'invoicing',
    icon: ShieldCheck,
    title: 'Transparent Invoicing in GBP',
    desc: 'Direct UK BACS transfer with zero hidden forex markups or customs friction.'
  },
  {
    id: 'swatches',
    icon: Package,
    title: 'Sample Swatch Kits for UK Studios',
    desc: 'Full swatch rings containing real linen, leather swatches, and foil debossing samples delivered across Britain.'
  }
];

const UK_COLLECTIONS = [
  {
    slug: 'flush-mount-album-uk',
    title: 'Flush Mount Albums UK',
    tag: 'UK STANDARD',
    image: '/images/uk-card-1.jpg',
    desc: 'Seamless 180° lay-flat wedding albums printed on Fuji Crystal Archive paper with 1.1mm archival core boards for UK photographers and high-end studios.',
    includes: [
      'Continuous 180° Panoramic Spread Opening',
      '1.1mm Rigid Archival Substrate Core Leaves',
      'Fuji Crystal DPII Silver Halide Chemistry',
      'Pre-Paid UK DDP Tracked Courier Dispatch'
    ]
  },
  {
    slug: 'luxury-albums-uk',
    title: 'Luxury Albums & Wooden Caskets UK',
    tag: 'LUXURY TIER',
    image: '/images/uk-card-2.jpg',
    desc: 'Full-grain Italian leathers, polished acrylic cameo windows, and bespoke presentation caskets crafted for luxury British and European celebrations.',
    includes: [
      'Full-Grain Tuscan Vegetal-Tanned Leathers',
      'Solid American Walnut Presentation Casket',
      '4mm Diamond-Polished Acrylic Cameo Cover',
      '24k Gold Gilded Edges & Custom Foil Die'
    ]
  },
  {
    slug: 'box-and-bags-uk',
    title: 'Box and Bags Collection UK',
    tag: 'KEEPSAKE STORAGE',
    image: '/images/uk-card-3.jpg',
    desc: 'Rigid 3mm clamshell boxes, magnetic closure presentation cases, and custom velvet travel bags tailored to standard UK dimensions.',
    includes: [
      '3mm Heavyweight Anti-Warp Binders Board',
      'Recessed Satin Ribbon Lift-Out Mechanism',
      'Plush Crushed Velvet Protective Lining',
      'Matching Material & Debossed Couple Crest'
    ]
  },
  {
    slug: 'image-editing-uk',
    title: 'Image Editing for UK Studios',
    tag: '48H SLA',
    image: '/images/uk-card-4.jpg',
    desc: 'Dedicated overnight proof turnaround during peak wedding season. Natural skin tone grading calibrated for British ambient lighting.',
    includes: [
      'Guaranteed 48h SLA During Peak UK Season',
      'Natural British Sky & Skin Tone Grading',
      '16-Bit TIFF & Print-Calibrated ICC Exports',
      'Unlimited Proof Revisions via Dedicated Desk'
    ]
  }
];

export default function UKDeskSection() {
  const sectionRef = useRef(null);
  const guaranteesRef = useRef(null);
  const cardsGridRef = useRef(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;

      // 1. Alternating entrance animation for the top 3 guarantee cards
      const guaranteeCards = guaranteesRef.current?.querySelectorAll('.uk-guarantee-card');
      if (guaranteeCards && guaranteeCards.length > 0) {
        guaranteeCards.forEach((card, idx) => {
          const fromX = idx % 2 === 0 ? -40 : 40;
          gsap.fromTo(
            card,
            {
              x: fromX,
              opacity: 0,
              filter: 'blur(6px)'
            },
            {
              x: 0,
              opacity: 1,
              filter: 'blur(0px)',
              duration: 0.88,
              delay: idx * 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: guaranteesRef.current,
                start: 'top 85%',
                once: true
              },
              onComplete: () => {
                gsap.set(card, { clearProps: 'transform,opacity,filter' });
              }
            }
          );
        });
      }

      // 2. Alternating entrance animation for the 4 product cards (even from Left, odd from Right)
      const productCards = cardsGridRef.current?.querySelectorAll('.uk-product-card');
      if (productCards && productCards.length > 0) {
        productCards.forEach((card, idx) => {
          const fromX = idx % 2 === 0 ? -48 : 48;
          gsap.fromTo(
            card,
            {
              x: fromX,
              y: 16,
              opacity: 0,
              filter: 'blur(6px)'
            },
            {
              x: 0,
              y: 0,
              opacity: 1,
              filter: 'blur(0px)',
              duration: 0.95,
              delay: idx * 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: cardsGridRef.current,
                start: 'top 82%',
                once: true
              },
              onComplete: () => {
                gsap.set(card, { clearProps: 'transform,opacity,filter' });
              }
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="uk-desk"
      ref={sectionRef}
      className="uk-desk-section relative py-16 sm:py-24 lg:py-28 overflow-hidden bg-[#F7F3EC]"
      style={{
        background: 'radial-gradient(ellipse 90% 80% at 50% 20%, #FAF7F2 0%, #F5EFE6 55%, #ECE4D6 100%)'
      }}
    >
      {/* =========================================================
          ATMOSPHERIC SCULPTURAL SILK CURVES (BACKGROUND)
          ========================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Soft elegant wavy ribbons */}
        <svg
          className="absolute w-full h-full opacity-60 mix-blend-soft-light"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 200 C 300 120, 600 350, 1540 100 L 1540 850 L -100 850 Z"
            fill="url(#waveGrad1)"
          />
          <path
            d="M-50 450 C 400 320, 800 580, 1540 380 L 1540 850 L -50 850 Z"
            fill="url(#waveGrad2)"
          />
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#E6DDCF" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#DDD3C3" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Ambient Top Light Sheen */}
        <div className="absolute -top-32 left-1/4 w-1/2 h-80 bg-white/40 blur-3xl rounded-full" />
      </div>

      {/* =========================================================
          BOTTOM-LEFT DELICATE FLORALS (MATCHING REFERENCE MOCKUP)
          ========================================================= */}
      <div
        className="absolute bottom-0 left-0 w-36 sm:w-48 lg:w-56 pointer-events-none select-none z-10 opacity-85 transition-opacity"
        aria-hidden="true"
      >
        <img
          src="/images/uk-flowers.jpg"
          alt=""
          className="w-full h-auto object-contain filter contrast-95"
          loading="lazy"
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
          ========================================================= */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">
        
        {/* =========================================================
            EDITORIAL HEADER WITH WORD BLUR-TO-CLEAR REVEAL
            ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <RevealOnScroll direction="down" delay={0.02} distance={12} blur={false}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#DED5C9] text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.22em] text-[#777066] mb-3.5 shadow-xs backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B99A69]" />
              <span>DEDICATED BRITISH &amp; EUROPEAN STUDIO DESK</span>
            </div>
          </RevealOnScroll>

          <TextReveal
            as="h2"
            delay={0.08}
            direction="up"
            className="font-serif text-[30px] sm:text-[40px] lg:text-[46px] font-normal text-[#201E1B] leading-[1.14] tracking-tight mb-4"
          >
            Direct Atelier Logistics &amp; Sterling Billing
          </TextReveal>

          <RevealOnScroll direction="up" delay={0.18} distance={16}>
            <p className="font-sans text-[14px] sm:text-[15.5px] text-[#777066] leading-[1.7] max-w-2xl mx-auto">
              Serving premier wedding photographers across London, the Cotswolds, Edinburgh, and mainland Europe with insured 3–5 day express air transit, zero customs friction, and transparent GBP accounts.
            </p>
          </RevealOnScroll>
        </div>

        {/* =========================================================
            TOP ROW: 3 LOGISTICS & INVOICING CARDS
            ========================================================= */}
        <div
          ref={guaranteesRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10 lg:mb-12"
        >
          {UK_GUARANTEES.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="uk-guarantee-card group bg-white/90 hover:bg-white border border-[#EAE3D6] hover:border-[#D6C7B2] rounded-2xl p-5 sm:p-6 shadow-[0_8px_24px_-6px_rgba(32,30,27,0.05)] hover:shadow-[0_12px_28px_-6px_rgba(185,154,105,0.18)] transition-all duration-300 flex items-start gap-4 backdrop-blur-xs"
              >
                {/* Tactile Circular Icon Badge */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#DED5C9] bg-[#FAF7F2] flex items-center justify-center shrink-0 text-[#201E1B] group-hover:text-[#B99A69] group-hover:scale-105 transition-all shadow-xs">
                  <IconComponent size={19} strokeWidth={1.75} />
                </div>

                {/* Typography */}
                <div className="flex flex-col text-left">
                  <h4 className="font-serif text-[15px] sm:text-[16px] text-[#201E1B] font-medium leading-snug mb-1">
                    {item.title}
                  </h4>
                  <p className="font-sans text-[12px] sm:text-[12.5px] text-[#777066] leading-relaxed m-0 font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM ROW: 4 SIGNATURE PRODUCT CARDS (MOCKUP ACCURATE)
            ========================================================= */}
        <div
          ref={cardsGridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-6 items-stretch"
        >
          {UK_COLLECTIONS.map((col, idx) => (
            <TiltCard
              key={idx}
              maxTilt={7}
              scale={1.02}
              glare={true}
              onMouseEnter={() => setHoveredProduct(col.slug)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="uk-product-card h-full flex flex-col"
            >
              <div
                className="group relative h-full bg-white/95 hover:bg-white border border-[#EAE3D6] hover:border-[#B99A69]/80 rounded-2xl p-4 sm:p-5 pb-6 shadow-[0_12px_32px_-8px_rgba(32,30,27,0.07)] hover:shadow-[0_20px_45px_-8px_rgba(185,154,105,0.25)] transition-all duration-400 flex flex-col justify-between backdrop-blur-xs overflow-hidden"
              >
                <div>
                  {/* Product Photograph Container */}
                  <div className="relative aspect-[16/11] rounded-xl overflow-hidden mb-4 sm:mb-5 bg-[#F0EAE1]">
                    <img
                      src={col.image}
                      alt={col.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 will-change-transform"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25 pointer-events-none" />

                    {/* Top Tag */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#141310]/85 backdrop-blur-md border border-[#FFFFFF]/20 text-[#FAF7F2] text-[9.5px] font-sans font-medium uppercase tracking-[0.14em]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{col.tag}</span>
                    </div>
                  </div>

                  {/* Editorial Title */}
                  <h3 className="font-serif text-[18px] sm:text-[20px] text-[#201E1B] font-normal leading-[1.25] mb-2.5 text-left group-hover:text-[#B99A69] transition-colors">
                    {col.title}
                  </h3>

                  {/* Supporting Spec Copy */}
                  <p className="font-sans text-[12px] sm:text-[12.5px] text-[#777066] leading-[1.65] mb-4 text-left font-normal">
                    {col.desc}
                  </p>

                  {/* Interactive "Words come / see what it does include" Specifications Drawer */}
                  <div className="pt-3.5 border-t border-[#F2ECE3] transition-all duration-300">
                    <div className="flex items-center gap-1.5 text-[10px] uppercase font-sans font-semibold tracking-[0.16em] text-[#9E7D4B] mb-2 text-left">
                      <Layers size={11} className="text-[#B99A69]" />
                      <span>UK Specifications</span>
                    </div>

                    <ul className="space-y-1.5 m-0 p-0 list-none text-left">
                      {col.includes.map((line, lIdx) => (
                        <li
                          key={line}
                          className="flex items-start gap-2 text-[11.5px] sm:text-[12px] text-[#3A3630] leading-snug font-normal transition-transform duration-300"
                          style={{
                            transform: hoveredProduct === col.slug ? 'translateX(2.5px)' : 'none',
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

                {/* Action Link: "View UK Specifications →" */}
                <div className="pt-4 border-t border-[#F2ECE3] flex items-center justify-between mt-auto">
                  <Link
                    to={`/for-uk/${col.slug}`}
                    className="inline-flex items-center gap-1.5 text-[11px] font-sans uppercase tracking-[0.16em] font-semibold text-[#201E1B] group-hover:text-[#B99A69] transition-colors text-left"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>View UK Specifications</span>
                    <ArrowRight
                      size={13}
                      className="text-[#B99A69] transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </Link>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
