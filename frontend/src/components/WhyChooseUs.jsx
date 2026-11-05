import React from 'react';
import { Globe, DollarSign, Award, Users, Check, Sparkles, ArrowRight } from 'lucide-react';
import StaggerBoxes from './motion/StaggerBoxes';

const VALUES = [
  {
    icon: Globe,
    title: 'Worldwide Delivery',
    tag: 'GLOBAL REACH',
    desc: 'Pan-India studio delivery & international air courier across UK, US, and UAE.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
    includes: [
      'Duty-Paid Pre-Cleared Air Courier',
      'Door-to-Door Tracked Transit (DHL Express)',
      'Shockproof Presentation Cartons',
      '72h Delivery to London, NY & Dubai'
    ]
  },
  {
    icon: DollarSign,
    title: 'Cost Effective',
    tag: 'DIRECT ATELIER',
    desc: 'Direct atelier wholesale pricing with zero middleman or distributor markups.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
    includes: [
      'Direct Atelier Wholesale Pricing (0% Margin)',
      '50% Discount on Physical Studio Samples',
      '40% Off Parent Companion Duplicates',
      'Transparent Billing in INR (₹) or GBP (£)'
    ]
  },
  {
    icon: Award,
    title: 'Reliable Quality',
    tag: '100+ YR ARCHIVAL',
    desc: '100+ year archival rating on genuine Fuji Crystal Archive photographic paper.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    includes: [
      '100+ Year ISO 18924 Certified Longevity',
      'Zero-Gutter Image Loss with 180° Layflat',
      '1.1mm Non-Warp Museum Core Boards',
      '5-Stage Laboratory Calibration Checks'
    ]
  },
  {
    icon: Users,
    title: 'Customer Centric',
    tag: 'PRIVATE LIAISON',
    desc: 'Dedicated studio account liaison & direct WhatsApp support for every commission.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    includes: [
      'Dedicated Studio Account Manager via WhatsApp',
      'Direct Soft-Proof Iterations with Artisans',
      'Complimentary Leather & Linen Swatch Kits',
      'Complete Client Privacy & NDA Standards'
    ]
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us-section bg-[#F7F3EC] py-14 sm:py-20 border-b border-[#EAE3D6]">
      <div className="section-container max-w-[1440px] mx-auto px-5 md:px-12">
        <StaggerBoxes className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch" stagger={0.09}>
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="why-value-card group relative bg-white border border-[#EAE3D6] hover:border-[#B99A69] rounded-2xl overflow-hidden shadow-[0_8px_24px_-6px_rgba(32,30,27,0.05)] hover:shadow-[0_16px_36px_-8px_rgba(185,154,105,0.22)] transition-all duration-400 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EFEEEA]">
                    <img
                      src={val.image}
                      alt={val.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 will-change-transform"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75" />

                    {/* Tag Badge */}
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-[#201E1B]/80 backdrop-blur-md border border-[#B99A69]/40">
                      <span className="font-sans text-[8.5px] font-semibold tracking-[0.16em] uppercase text-[#D4AF37]">
                        {val.tag}
                      </span>
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#B99A69] flex items-center justify-center text-[#201E1B] group-hover:text-[#B99A69] transition-colors shadow-sm">
                      <Icon size={18} />
                    </div>

                    {/* SLIDING HOVER INCLUSIONS OVERLAY */}
                    <div className="absolute inset-0 bg-[#1A1815]/95 backdrop-blur-md p-4 flex flex-col justify-between opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 pointer-events-none">
                      <div>
                        <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.18em] font-semibold text-[#D4AF37] mb-2">
                          <Sparkles size={11} />
                          <span>WHAT THIS INCLUDES</span>
                        </div>
                        <ul className="space-y-1.5 text-left">
                          {val.includes.map((inc, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-[11px] text-[#FAF7F2] leading-snug">
                              <Check size={11} className="text-[#D4AF37] shrink-0 mt-0.5" />
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[9.5px] text-[#C8BEAE] uppercase tracking-wider">
                        <span>Studio standards</span>
                        <ArrowRight size={10} className="text-[#D4AF37]" />
                      </div>
                    </div>
                  </div>

                  {/* Text Block */}
                  <div className="p-5 text-left">
                    <h3 className="font-serif text-[18px] sm:text-[19px] text-[#201E1B] font-normal leading-snug mb-1.5 group-hover:text-[#B99A69] transition-colors">
                      {val.title}
                    </h3>
                    <p className="font-sans text-[12px] text-[#777066] leading-relaxed m-0 font-normal">
                      {val.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-2 border-t border-[#F2ECE3] flex items-center justify-between text-[10px] uppercase font-sans font-semibold tracking-wider text-[#B99A69]">
                  <span>Hover to View Details</span>
                  <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </StaggerBoxes>
      </div>
    </section>
  );
}
