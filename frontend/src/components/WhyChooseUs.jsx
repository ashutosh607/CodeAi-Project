import React, { useState } from 'react';
import { Globe, DollarSign, Award, Users, Check, Sparkles, ShieldCheck, Layers } from 'lucide-react';
import TextReveal from './motion/TextReveal';
import RevealOnScroll from './motion/RevealOnScroll';
import StaggerBoxes from './motion/StaggerBoxes';
import TiltCard from './motion/TiltCard';

const VALUES = [
  {
    id: 'worldwide-delivery',
    icon: Globe,
    title: 'Worldwide Delivery',
    tag: 'GLOBAL REACH',
    desc: 'Pan-India studio delivery & international air courier across UK, US, and UAE with door-to-door tracked priority dispatch.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
    includes: [
      'Duty-Paid Pre-Cleared Air Courier',
      'Door-to-Door Tracked Transit (DHL Express)',
      'Shockproof Double-Walled Cartons',
      '72h Delivery to London, NY & Dubai'
    ]
  },
  {
    id: 'cost-effective',
    icon: DollarSign,
    title: 'Cost Effective',
    tag: 'DIRECT ATELIER',
    desc: 'Direct atelier wholesale pricing with zero middleman or distributor markups, transparent billing in INR or GBP.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
    includes: [
      'Direct Atelier Wholesale Pricing (0% Middleman)',
      '50% Discount on Physical Studio Samples',
      '40% Off Parent Companion Duplicates',
      'Transparent Multi-Currency Invoicing'
    ]
  },
  {
    id: 'reliable-quality',
    icon: Award,
    title: 'Reliable Quality',
    tag: '100+ YR ARCHIVAL',
    desc: '100+ year archival rating on genuine Fuji Crystal Archive photographic paper with museum-grade core boards.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    includes: [
      '100+ Year ISO 18924 Certified Longevity',
      'Zero-Gutter Image Loss with 180° Layflat',
      '1.1mm Non-Warp Museum Core Boards',
      '5-Stage Laboratory Calibration Checks'
    ]
  },
  {
    id: 'customer-centric',
    icon: Users,
    title: 'Customer Centric',
    tag: 'PRIVATE LIAISON',
    desc: 'Dedicated studio account liaison & direct WhatsApp support for every commission, from first draft to final unboxing.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    includes: [
      'Dedicated Studio Account Manager via WhatsApp',
      'Direct Soft-Proof Iterations with Master Binders',
      'Complimentary Leather & Linen Swatch Kits',
      'Strict NDA & Complete Client Privacy'
    ]
  }
];

export default function WhyChooseUs() {
  const [hoveredValue, setHoveredValue] = useState(null);

  return (
    <section
      id="studio-standards"
      className="relative py-20 sm:py-28 overflow-hidden bg-[#F6F2EB] border-t border-[#EAE3D6]"
      style={{
        background: 'radial-gradient(ellipse 90% 70% at 50% 15%, #FAF7F2 0%, #F6F2EB 65%, #EEE6D8 100%)'
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-18">
          <RevealOnScroll direction="down" delay={0.05} distance={16}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B99A69]/40 bg-[#FFFFFF]/80 backdrop-blur-xs text-[10.5px] uppercase font-sans font-medium tracking-[0.2em] text-[#9E7D4B] mb-3.5 shadow-xs">
              <ShieldCheck size={11} className="text-[#B99A69]" />
              <span>Uncompromising Benchmarks</span>
            </div>
          </RevealOnScroll>

          <TextReveal
            as="h2"
            className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#141310] tracking-tight leading-[1.18] mb-4"
          >
            Studio Standards &amp; Guarantees
          </TextReveal>

          <RevealOnScroll direction="up" delay={0.16} distance={18}>
            <p className="font-sans text-[14px] sm:text-[15.5px] text-[#5C564B] leading-relaxed max-w-xl mx-auto font-normal">
              Why world-renowned wedding studios, destination photographers, and high-society couples rely on our bespoke atelier year after year.
            </p>
          </RevealOnScroll>
        </div>

        {/* Alternating Staggered Cards: Even from Left, Odd from Right */}
        <StaggerBoxes
          direction="alternate"
          distance={46}
          stagger={0.12}
          duration={0.9}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {VALUES.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <TiltCard
                key={item.id}
                maxTilt={7}
                scale={1.02}
                glare={true}
                onMouseEnter={() => setHoveredValue(item.id)}
                onMouseLeave={() => setHoveredValue(null)}
                className="h-full flex flex-col"
              >
                <article
                  className="group relative h-full bg-white rounded-2xl border border-[#EAE3D6] hover:border-[#B99A69]/80 shadow-[0_10px_28px_-8px_rgba(20,19,16,0.06)] hover:shadow-[0_22px_45px_-8px_rgba(185,154,105,0.24)] transition-all duration-400 flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Photo Container with Icon and Tag Pill */}
                    <div className="relative aspect-[16/11] overflow-hidden bg-[#ECE4D8]">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 will-change-transform"
                      />

                      {/* Top Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/35 pointer-events-none" />

                      {/* Top Tag Pill */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#141310]/85 backdrop-blur-md border border-[#FFFFFF]/20 text-[#FAF7F2] text-[9.5px] font-sans font-medium uppercase tracking-[0.14em]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        <span>{item.tag}</span>
                      </div>

                      {/* Tactile Circular Icon Badge */}
                      <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-[#FAF7F2]/95 backdrop-blur-md border border-[#B99A69]/40 flex items-center justify-center text-[#141310] group-hover:text-[#B99A69] group-hover:scale-105 transition-all shadow-md">
                        <IconComponent size={18} strokeWidth={1.8} />
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
                          <span>Studio Specifications</span>
                        </div>

                        <ul className="space-y-1.5 m-0 p-0 list-none">
                          {item.includes.map((line, lIdx) => (
                            <li
                              key={line}
                              className="flex items-start gap-2 text-[11.5px] sm:text-[12px] text-[#3A3630] leading-snug font-normal transition-transform duration-300"
                              style={{
                                transform: hoveredValue === item.id ? 'translateX(2.5px)' : 'none',
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

                  {/* Card Standard Footer */}
                  <div className="px-5 sm:px-6 py-3 border-t border-[#F2ECE3] bg-[#FCFBF8]/90 flex items-center justify-between text-[11px] font-sans text-[#777066] uppercase tracking-[0.14em]">
                    <span>Atelier Guarantee</span>
                    <span className="text-[#9E7D4B] font-medium">100% Verified</span>
                  </div>
                </article>
              </TiltCard>
            );
          })}
        </StaggerBoxes>
      </div>
    </section>
  );
}
