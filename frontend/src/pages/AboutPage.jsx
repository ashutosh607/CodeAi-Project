import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/motion/RevealOnScroll';
import {
  ShieldCheck,
  Award,
  Scissors,
  CheckCircle2,
  Phone,
  ArrowRight,
  BookOpen,
  MapPin,
  Clock,
  Sparkles,
  Plane,
  Layers,
  Check
} from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-heritage-page-view font-sans text-[#1B1C1A] bg-[#FAF9F5]">
      {/* SECTION 1: EDITORIAL HERO & MANIFESTO */}
      <section className="relative w-full overflow-hidden bg-[#FAF9F5] py-12 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Text Dossier */}
            <RevealOnScroll direction="left" className="lg:col-span-6 flex flex-col justify-between pr-0 lg:pr-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-[1px] bg-[#635E52]"></span>
                  <span className="font-semibold uppercase text-[#635E52] text-[11px] tracking-[0.25em]">
                    The Atelier &amp; Philosophy
                  </span>
                </div>
                <h1 className="font-serif text-[38px] md:text-[52px] text-[#141310] tracking-tight leading-[1.12] mb-8 font-normal">
                  Preserving Sacred Moments Through Master Bookbinding &amp; Silver Halide Artistry
                </h1>
                <p className="text-[17px] text-[#4A463F] leading-relaxed mb-10 max-w-xl">
                  Ultraa Albums is Mumbai’s premier custom photo book manufacturer and artisanal binding atelier. Over the past 15 years, we have quietly powered the luxury deliverable suites of top-tier wedding cinematographers and photographers across India, the UK, Europe, and the Middle East.
                </p>
              </div>

              {/* Micro Typographic Spec Matrix */}
              <div className="grid grid-cols-3 gap-6 pt-8 mt-4 bg-[#F4F4F0] p-6 border border-[#EAE6DF]">
                <div>
                  <p className="font-semibold uppercase text-[#635E52] text-[10px] tracking-widest mb-1">Established</p>
                  <p className="font-serif text-[22px] text-[#141310] font-normal leading-tight">2009</p>
                  <p className="text-[12px] text-[#4A463F] mt-1">Santacruz, Mumbai</p>
                </div>
                <div>
                  <p className="font-semibold uppercase text-[#635E52] text-[10px] tracking-widest mb-1">Archival Life</p>
                  <p className="font-serif text-[22px] text-[#141310] font-normal leading-tight">100+ Yrs</p>
                  <p className="text-[12px] text-[#4A463F] mt-1">Fuji Crystal Halide</p>
                </div>
                <div>
                  <p className="font-semibold uppercase text-[#635E52] text-[10px] tracking-widest mb-1">Global Despatch</p>
                  <p className="font-serif text-[22px] text-[#141310] font-normal leading-tight">42 Nations</p>
                  <p className="text-[12px] text-[#4A463F] mt-1">Priority Insured</p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right: Asymmetric Mosaic Display */}
            <RevealOnScroll direction="right" className="lg:col-span-6 relative mt-8 lg:mt-0">
              <div className="relative w-full h-[520px] md:h-[580px] bg-[#EFEEEA]">
                {/* Main Hero Specimen */}
                <div className="absolute inset-0 overflow-hidden shadow-sm">
                  <img
                    className="w-full h-full object-cover"
                    alt="Master artisan delicately binding full grain leather wedding album with linen thread inside Mumbai atelier"
                    src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1200&q=85"
                  />
                </div>
                {/* Overlapping Debossed Specimen Plate */}
                <div className="absolute -bottom-8 -left-8 w-64 h-72 bg-[#FFFFFF] p-3 shadow-xl hidden md:block border border-[#EAE6DF]">
                  <div className="w-full h-full relative overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Gold foil blind debossing and typography on heavy ivory Japanese bookcloth cover of wedding album"
                      src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=85"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-[#292724]/90 px-3 py-1.5 backdrop-blur-sm">
                      <p className="font-semibold text-[#FAF9F5] uppercase tracking-widest text-[9px]">
                        Specimen Folio: 092/UK
                      </p>
                    </div>
                  </div>
                </div>
                {/* Accent Metadata Floating Badge */}
                <div className="absolute top-6 right-6 bg-[#FFFFFF]/95 backdrop-blur-sm px-4 py-3 shadow-md flex items-center gap-3 border border-[#EAE6DF]">
                  <span className="w-2 h-2 rounded-full bg-[#635E52] animate-pulse"></span>
                  <span className="font-semibold uppercase text-[#141310] tracking-widest text-[11px]">
                    Handcrafted in Mumbai
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 2: HERITAGE & THE EDITORIAL WINE METAPHOR */}
      <section id="our-story" className="w-full bg-[#F4F4F0] py-16 md:py-28 relative border-y border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <RevealOnScroll direction="left" className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative h-[480px] w-full overflow-hidden shadow-md border border-[#EAE6DF]">
                <img
                  className="w-full h-full object-cover"
                  alt="Editorial tabletop composition of finished heirloom albums stacked with silk ribbons and leather swatches"
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141310]/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-[#FFFFFF]">
                  <p className="font-semibold uppercase tracking-widest text-[#E9E8E4] text-[10px]">Heritage Registry</p>
                  <p className="font-serif text-[22px] font-normal">Santacruz Atelier, Est. 2009</p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" className="lg:col-span-7 order-1 lg:order-2 pl-0 lg:pl-10">
              <span className="font-semibold uppercase text-[#635E52] text-[11px] tracking-[0.25em] block mb-4">
                Our Heritage &amp; Ethos
              </span>
              <h2 className="font-serif text-[28px] md:text-[36px] text-[#141310] mb-8 leading-snug font-normal">
                Elevating wedding photo albums into generational heirlooms that outlast fleeting digital screens.
              </h2>
              <div className="p-8 md:p-10 bg-[#FFFFFF] relative shadow-sm my-6 border border-[#EAE6DF]">
                <blockquote className="font-serif text-[22px] text-[#141310] italic leading-relaxed mb-6 font-normal">
                  “Like vintage aged wine, these memories become richer with every passing anniversary, anchoring your family history in pure tactile perfection.”
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-none bg-[#EAE2D2] flex items-center justify-center font-bold text-[#141310] text-[12px] tracking-wider">
                    UA
                  </div>
                  <div>
                    <p className="font-semibold text-[#141310] text-[15px] leading-tight">Master Guild Statement</p>
                    <p className="text-[13px] text-[#4A463F]">Ultraa Bookbinding Fellowship – Mumbai</p>
                  </div>
                </div>
              </div>
              <p className="text-[15px] text-[#4A463F] leading-relaxed">
                In an era of disposable cloud links and pixel compression, we honor the permanence of tangible bookmaking. Every folio turned at our Santacruz workshop is individually pressed, weighed, cured, and verified under color-standardised D50 balanced luminaires.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 3: QUALITY CHECKS & MASTER CRAFTSMANSHIP (4 PILLARS) */}
      <section id="craftsmanship" className="w-full bg-[#FAF9F5] py-16 md:py-28">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <RevealOnScroll direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="font-semibold uppercase text-[#635E52] text-[11px] tracking-[0.25em] block mb-3">
                  Atelier Standards
                </span>
                <h2 className="font-serif text-[32px] md:text-[40px] text-[#141310] font-normal">
                  Master Craftsmanship &amp; Rigorous Lab Protocols
                </h2>
              </div>
              <p className="text-[15px] text-[#4A463F] max-w-md leading-relaxed">
                Four unbreakable tenets engineered into every commission, ensuring our volumes endure uninterrupted handling for generations.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#F4F4F0] p-8 flex flex-col justify-between border border-[#EAE6DF] hover:bg-[#EFEEEA] transition-colors duration-300">
              <div>
                <div className="w-full h-48 mb-6 overflow-hidden bg-[#EFEEEA]">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    alt="Darkroom laboratory continuous laser exposure printer head on Fuji Crystal Archive paper"
                    src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
                  />
                </div>
                <span className="font-semibold text-[#635E52] text-[10px] tracking-widest uppercase block mb-2">
                  Pillar 01 • Substrate
                </span>
                <h3 className="font-serif text-[20px] text-[#141310] mb-3 font-normal">
                  Archival Silver Halide Exposure
                </h3>
                <p className="text-[13px] text-[#4A463F] leading-relaxed mb-6">
                  True chemical exposure on Fuji Crystal Archive and German fine art rag substrates. Guarantees 100+ years of laboratory certified chromatic stability without pigment breakdown.
                </p>
              </div>
              <div className="pt-4 bg-[#FFFFFF] px-4 py-2 flex items-center justify-between border border-[#EAE6DF]">
                <span className="font-semibold uppercase text-[#4A463F] text-[10px]">Fade Metric</span>
                <span className="font-bold text-[#141310] text-[11px]">ISO 18924 Rated</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#F4F4F0] p-8 flex flex-col justify-between border border-[#EAE6DF] hover:bg-[#EFEEEA] transition-colors duration-300">
              <div>
                <div className="w-full h-48 mb-6 overflow-hidden bg-[#EFEEEA]">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    alt="Wide macro photography of open 180 degree layflat wedding photo book demonstrating completely seamless panoramic fold"
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
                  />
                </div>
                <span className="font-semibold text-[#635E52] text-[10px] tracking-widest uppercase block mb-2">
                  Pillar 02 • Binding
                </span>
                <h3 className="font-serif text-[20px] text-[#141310] mb-3 font-normal">
                  180° Seamless Layflat Panoramic
                </h3>
                <p className="text-[13px] text-[#4A463F] leading-relaxed mb-6">
                  Engineered with specialized German spine hinging and solid archival boards. Sweeping destination photography traverses the gutter with complete continuity and zero visual cut.
                </p>
              </div>
              <div className="pt-4 bg-[#FFFFFF] px-4 py-2 flex items-center justify-between border border-[#EAE6DF]">
                <span className="font-semibold uppercase text-[#4A463F] text-[10px]">Crease Integrity</span>
                <span className="font-bold text-[#141310] text-[11px]">Zero Image Loss</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#F4F4F0] p-8 flex flex-col justify-between border border-[#EAE6DF] hover:bg-[#EFEEEA] transition-colors duration-300">
              <div>
                <div className="w-full h-48 mb-6 overflow-hidden bg-[#EFEEEA]">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    alt="Full grain Italian vegetable tanned leather, French silk velvet, and organic Belgian linen rolls"
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
                  />
                </div>
                <span className="font-semibold text-[#635E52] text-[10px] tracking-widest uppercase block mb-2">
                  Pillar 03 • Materiality
                </span>
                <h3 className="font-serif text-[20px] text-[#141310] mb-3 font-normal">
                  Hand-Embossed Italian Leathers
                </h3>
                <p className="text-[13px] text-[#4A463F] leading-relaxed mb-6">
                  Sourced from ethical European tanneries in Tuscany and Milan. Finished with heated magnesium die debossing, blind monogram stamps, and hand-wrapped French silk velvets.
                </p>
              </div>
              <div className="pt-4 bg-[#FFFFFF] px-4 py-2 flex items-center justify-between border border-[#EAE6DF]">
                <span className="font-semibold uppercase text-[#4A463F] text-[10px]">Provenance</span>
                <span className="font-bold text-[#141310] text-[11px]">Tuscan Leather Guild</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-[#F4F4F0] p-8 flex flex-col justify-between border border-[#EAE6DF] hover:bg-[#EFEEEA] transition-colors duration-300">
              <div>
                <div className="w-full h-48 mb-6 overflow-hidden bg-[#EFEEEA]">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    alt="Book curator wearing pure white cotton gloves delicately examining corners and spine edge under task lamp"
                    src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80"
                  />
                </div>
                <span className="font-semibold text-[#635E52] text-[10px] tracking-widest uppercase block mb-2">
                  Pillar 04 • Assurance
                </span>
                <h3 className="font-serif text-[20px] text-[#141310] mb-3 font-normal">
                  5-Stage White Glove Inspection
                </h3>
                <p className="text-[13px] text-[#4A463F] leading-relaxed mb-6">
                  Every millimeter of the print block, spine elasticity, and corner debossing undergoes 5 rigorous pass checkpoints prior to being nested in archival bespoke velvet encasements.
                </p>
              </div>
              <div className="pt-4 bg-[#FFFFFF] px-4 py-2 flex items-center justify-between border border-[#EAE6DF]">
                <span className="font-semibold uppercase text-[#4A463F] text-[10px]">Tolerances</span>
                <span className="font-bold text-[#141310] text-[11px]">± 0.25 mm Strict</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE 3-STEP WORKING PROCESS (FULL-WIDTH DARK SECTION) */}
      <section id="how-we-work" className="w-full bg-[#292724] text-[#F4F4F0] py-16 md:py-28 relative">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="max-w-2xl mb-16">
            <span className="font-semibold uppercase tracking-[0.25em] text-[#EAE2D2] text-[11px] block mb-3">
              Execution Sequence
            </span>
            <h2 className="font-serif text-[32px] md:text-[44px] text-[#FFFFFF] font-normal leading-tight">
              From Digital Master to Bound Volume
            </h2>
            <p className="text-[15px] text-[#928E89] mt-4 leading-relaxed">
              A seamless three-tier collaboration connecting international studios directly with our Santacruz master binders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-[#332421]/60 p-8 md:p-10 flex flex-col justify-between relative shadow-sm border border-[#494643]">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-[36px] text-[#EAE2D2] opacity-40">01</span>
                  <BookOpen size={28} className="text-[#EAE2D2]" />
                </div>
                <span className="font-semibold uppercase tracking-widest text-[#EAE2D2] text-[10px] block mb-2">
                  Stage 01
                </span>
                <h3 className="font-serif text-[22px] text-[#FFFFFF] mb-4 font-normal">
                  Transfer &amp; Layout Curating
                </h3>
                <p className="text-[15px] text-[#928E89] leading-relaxed mb-6">
                  Studio raw imagery is curated into bespoke architectural spreads. We provide high-resolution interactive digital soft proofs, pacing each sequence to reflect the genuine emotional cadence of the celebration.
                </p>
              </div>
              <div className="space-y-2 pt-6 bg-[#292724]/80 p-4 border-t border-[#494643]">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#EAE2D2]" />
                  <span className="text-[13px] text-[#FFFFFF]">Multi-revision client proofing app</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#EAE2D2]" />
                  <span className="text-[13px] text-[#FFFFFF]">Architectural negative whitespace balance</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#332421]/60 p-8 md:p-10 flex flex-col justify-between relative shadow-sm border border-[#494643]">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-[36px] text-[#EAE2D2] opacity-40">02</span>
                  <Layers size={28} className="text-[#EAE2D2]" />
                </div>
                <span className="font-semibold uppercase tracking-widest text-[#EAE2D2] text-[10px] block mb-2">
                  Stage 02
                </span>
                <h3 className="font-serif text-[22px] text-[#FFFFFF] mb-4 font-normal">
                  Precision Printing &amp; Hand Binding
                </h3>
                <p className="text-[15px] text-[#928E89] leading-relaxed mb-6">
                  High-definition continuous tone exposure coupled with German binding presses. Core boards are reinforced with climate-controlled, humidity-resistant non-bending archival substrates before leather covers are trimmed by hand.
                </p>
              </div>
              <div className="space-y-2 pt-6 bg-[#292724]/80 p-4 border-t border-[#494643]">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#EAE2D2]" />
                  <span className="text-[13px] text-[#FFFFFF]">Anti-warp composite core formulation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#EAE2D2]" />
                  <span className="text-[13px] text-[#FFFFFF]">Individual hydraulic spine conditioning</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#332421]/60 p-8 md:p-10 flex flex-col justify-between relative shadow-sm border border-[#494643]">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-[36px] text-[#EAE2D2] opacity-40">03</span>
                  <Plane size={28} className="text-[#EAE2D2]" />
                </div>
                <span className="font-semibold uppercase tracking-widest text-[#EAE2D2] text-[10px] block mb-2">
                  Stage 03
                </span>
                <h3 className="font-serif text-[22px] text-[#FFFFFF] mb-4 font-normal">
                  Global White-Glove Dispatch
                </h3>
                <p className="text-[15px] text-[#928E89] leading-relaxed mb-6">
                  Tightly wrapped in custom anti-humidity velvet sleeves and double-walled impact-absorbing presentation cartons. Priority tracked air transit departs Mumbai daily, landing in London or New York within 72 hours.
                </p>
              </div>
              <div className="space-y-2 pt-6 bg-[#292724]/80 p-4 border-t border-[#494643]">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#EAE2D2]" />
                  <span className="text-[13px] text-[#FFFFFF]">Full customs clearance &amp; duty pre-paid</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#EAE2D2]" />
                  <span className="text-[13px] text-[#FFFFFF]">Doorstep white-glove unboxing presentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: GLOBAL PRESENCE & CARTOGRAPHY MAP */}
      <section id="global-presence" className="w-full bg-[#FAF9F5] py-16 md:py-28">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 pr-0 lg:pr-6">
              <span className="font-semibold uppercase text-[#635E52] text-[11px] tracking-[0.25em] block mb-3">
                International Network
              </span>
              <h2 className="font-serif text-[28px] md:text-[36px] text-[#141310] mb-6 font-normal leading-tight">
                Handcrafted in Mumbai. Delivered to Discerning Studios Worldwide.
              </h2>
              <p className="text-[15px] text-[#4A463F] leading-relaxed mb-8">
                While our master artisans operate exclusively from our private atelier in Santacruz West, we maintain localized fulfillment partnerships and dedicated account concierges across prime photographic capitals.
              </p>

              {/* Studio Hubs Listing */}
              <div className="space-y-4">
                <div className="bg-[#F4F4F0] p-5 flex items-center justify-between border border-[#EAE6DF]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#635E52]"></span>
                      <p className="font-medium text-[#141310] text-[16px]">Mumbai Atelier • Global Headquarters</p>
                    </div>
                    <p className="text-[12px] text-[#4A463F] mt-1">Santacruz West • Master Binders, Darkroom Lab, Client Salon</p>
                  </div>
                  <span className="font-semibold uppercase text-[10px] bg-[#FFFFFF] px-2.5 py-1 text-[#141310] border border-[#EAE6DF]">
                    Core HQ
                  </span>
                </div>

                <div className="bg-[#F4F4F0] p-5 flex items-center justify-between border border-[#EAE6DF]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#CDC6B7]"></span>
                      <p className="font-medium text-[#141310] text-[16px]">London Liaison • UK &amp; EU Logistics</p>
                    </div>
                    <p className="text-[12px] text-[#4A463F] mt-1">Mayfair • Sterling Invoicing, Priority Air Freight Dispatch</p>
                  </div>
                  <span className="font-semibold uppercase text-[10px] bg-[#FFFFFF] px-2.5 py-1 text-[#4A463F] border border-[#EAE6DF]">
                    Hub
                  </span>
                </div>

                <div className="bg-[#F4F4F0] p-5 flex items-center justify-between border border-[#EAE6DF]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#CDC6B7]"></span>
                      <p className="font-medium text-[#141310] text-[16px]">Dubai • GCC Concierge</p>
                    </div>
                    <p className="text-[12px] text-[#4A463F] mt-1">DIFC • Royal Wedding Commendations &amp; Fast-Track Delivery</p>
                  </div>
                  <span className="font-semibold uppercase text-[10px] bg-[#FFFFFF] px-2.5 py-1 text-[#4A463F] border border-[#EAE6DF]">
                    Hub
                  </span>
                </div>

                <div className="bg-[#F4F4F0] p-5 flex items-center justify-between border border-[#EAE6DF]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#CDC6B7]"></span>
                      <p className="font-medium text-[#141310] text-[16px]">New York &amp; Sydney Partners</p>
                    </div>
                    <p className="text-[12px] text-[#4A463F] mt-1">Express Courier Network • Curated Swatch Kits on Demand</p>
                  </div>
                  <span className="font-semibold uppercase text-[10px] bg-[#FFFFFF] px-2.5 py-1 text-[#4A463F] border border-[#EAE6DF]">
                    Network
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Flight Corridors Cartography Map */}
            <div className="lg:col-span-7 mt-8 lg:mt-0">
              <div className="w-full bg-[#F4F4F0] p-8 shadow-sm relative overflow-hidden border border-[#EAE6DF]">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-semibold uppercase text-[#635E52] tracking-widest text-[10px]">
                    Active Dispatch Map
                  </span>
                  <span className="text-[12px] text-[#4A463F]">Average Global Transit: 3.4 Days</span>
                </div>

                {/* Stylized Global SVG Grid Map */}
                <div className="relative w-full h-80 flex items-center justify-center bg-[#EFEEEA] border border-[#EAE6DF]">
                  <svg className="w-full h-full text-[#CCC5BC]" fill="none" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 225 H750 M200 50 V400 M400 50 V400 M600 50 V400" stroke="currentColor" strokeDasharray="4 6" strokeWidth="1"></path>
                    <path d="M120 120 C180 100, 240 140, 260 210 C270 250, 220 320, 210 380" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
                    <path d="M380 90 C420 80, 480 90, 500 130 C490 190, 430 220, 450 340" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
                    <path d="M520 140 C580 130, 660 160, 680 230 C700 290, 620 360, 610 380" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>

                    {/* Flight Corridors from Mumbai (490, 230) */}
                    <path d="M490 230 Q440 160 390 130" stroke="#635E52" strokeDasharray="3 3" strokeWidth="1.5"></path>
                    <path d="M490 230 Q470 210 445 200" stroke="#635E52" strokeWidth="1.5"></path>
                    <path d="M490 230 Q360 120 230 160" stroke="#635E52" strokeDasharray="3 3" strokeWidth="1.5"></path>
                    <path d="M490 230 Q580 300 670 340" stroke="#635E52" strokeDasharray="3 3" strokeWidth="1.5"></path>

                    {/* Mumbai Core Pin */}
                    <circle cx="490" cy="230" fill="#141310" r="7"></circle>
                    <circle cx="490" cy="230" opacity="0.6" r="14" stroke="#635E52" strokeWidth="1"></circle>
                    <text fill="#141310" fontFamily="DM Sans" fontSize="11" fontWeight="600" letterSpacing="0.1em" x="505" y="235">MUMBAI HQ</text>

                    {/* Other Pins */}
                    <circle cx="390" cy="130" fill="#635E52" r="4.5"></circle>
                    <text fill="#4A463F" fontFamily="DM Sans" fontSize="10" letterSpacing="0.05em" x="330" y="125">LONDON</text>

                    <circle cx="445" cy="200" fill="#635E52" r="4.5"></circle>
                    <text fill="#4A463F" fontFamily="DM Sans" fontSize="10" letterSpacing="0.05em" x="405" y="195">DUBAI</text>

                    <circle cx="230" cy="160" fill="#635E52" r="4"></circle>
                    <text fill="#4A463F" fontFamily="DM Sans" fontSize="10" letterSpacing="0.05em" x="165" y="160">NEW YORK</text>

                    <circle cx="670" cy="340" fill="#635E52" r="4"></circle>
                    <text fill="#4A463F" fontFamily="DM Sans" fontSize="10" letterSpacing="0.05em" x="680" y="345">SYDNEY</text>
                  </svg>

                  <div className="absolute bottom-4 right-4 bg-[#FFFFFF]/90 px-3 py-2 text-right border border-[#EAE6DF]">
                    <span className="font-semibold text-[#635E52] uppercase tracking-widest block text-[9px]">Carbon-Offset Transit</span>
                    <span className="text-[12px] text-[#141310] font-medium">DHL • FedEx International Priority</span>
                  </div>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                  <div className="bg-[#FFFFFF] p-3 border border-[#EAE6DF]">
                    <p className="font-serif text-[22px] text-[#141310] font-normal">15+</p>
                    <p className="font-semibold uppercase text-[#635E52] text-[10px]">Years Operating</p>
                  </div>
                  <div className="bg-[#FFFFFF] p-3 border border-[#EAE6DF]">
                    <p className="font-serif text-[22px] text-[#141310] font-normal">48,000+</p>
                    <p className="font-semibold uppercase text-[#635E52] text-[10px]">Books Bound</p>
                  </div>
                  <div className="bg-[#FFFFFF] p-3 border border-[#EAE6DF]">
                    <p className="font-serif text-[22px] text-[#141310] font-normal">99.8%</p>
                    <p className="font-semibold uppercase text-[#635E52] text-[10px]">Archival Pass Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: THE MASTER ARTISANS & LAB CURATORS */}
      <section id="our-team" className="w-full bg-[#F4F4F0] py-16 md:py-28 border-t border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-semibold uppercase text-[#635E52] text-[11px] tracking-[0.25em] block mb-3">
                The People
              </span>
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#141310] font-normal">
                Masters of the Guild
              </h2>
            </div>
            <p className="text-[15px] text-[#4A463F] max-w-md leading-relaxed">
              Each custom commission passes through dedicated specialists with decades of artisanal bookcraft and lab expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Artisan 1 */}
            <div className="bg-[#FFFFFF] p-6 shadow-sm flex flex-col justify-between border border-[#EAE6DF]">
              <div>
                <div className="w-full h-72 mb-6 overflow-hidden bg-[#EFEEEA]">
                  <img
                    className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                    alt="Portrait of senior craftsman Ramesh Varma standing inside workshop"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                  />
                </div>
                <span className="font-semibold text-[#635E52] uppercase tracking-widest block text-[10px] mb-1">
                  Guild Member • 18 Yrs
                </span>
                <h3 className="font-serif text-[20px] text-[#141310] font-normal">Ramesh Varma</h3>
                <p className="text-[13px] text-[#4A463F] font-medium mt-1 mb-3">Master Bookbinder &amp; Spine Engineer</p>
                <p className="text-[13px] text-[#4A463F] leading-relaxed">
                  Trained in classical Florentine and Japanese bookbinding techniques. Ramesh personally verifies the spine tension and hinge calibration of every grand-format volume.
                </p>
              </div>
              <div className="mt-6 pt-4 bg-[#F4F4F0] p-3 flex items-center justify-between text-[#4A463F] border border-[#EAE6DF]">
                <span className="font-semibold uppercase text-[10px]">Specialism</span>
                <span className="font-bold text-[#141310] text-[10px]">Layflat Hinges</span>
              </div>
            </div>

            {/* Artisan 2 */}
            <div className="bg-[#FFFFFF] p-6 shadow-sm flex flex-col justify-between border border-[#EAE6DF]">
              <div>
                <div className="w-full h-72 mb-6 overflow-hidden bg-[#EFEEEA]">
                  <img
                    className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                    alt="Portrait of woman color technician Kavita Iyer calibrating monitor"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                  />
                </div>
                <span className="font-semibold text-[#635E52] uppercase tracking-widest block text-[10px] mb-1">
                  Lab Director • 14 Yrs
                </span>
                <h3 className="font-serif text-[20px] text-[#141310] font-normal">Kavita Iyer</h3>
                <p className="text-[13px] text-[#4A463F] font-medium mt-1 mb-3">Head of Master Color Grading</p>
                <p className="text-[13px] text-[#4A463F] leading-relaxed">
                  Certified X-Rite color scientist. Kavita supervises continuous spectrometer profiling and ICC profiles matching Fuji Crystal Archive emulsions with diverse camera raw profiles.
                </p>
              </div>
              <div className="mt-6 pt-4 bg-[#F4F4F0] p-3 flex items-center justify-between text-[#4A463F] border border-[#EAE6DF]">
                <span className="font-semibold uppercase text-[10px]">Specialism</span>
                <span className="font-bold text-[#141310] text-[10px]">Skin Tone Gamut</span>
              </div>
            </div>

            {/* Artisan 3 */}
            <div className="bg-[#FFFFFF] p-6 shadow-sm flex flex-col justify-between border border-[#EAE6DF]">
              <div>
                <div className="w-full h-72 mb-6 overflow-hidden bg-[#EFEEEA]">
                  <img
                    className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                    alt="Editorial portrait of creative design specialist Arjun Mehta reviewing proofs"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
                  />
                </div>
                <span className="font-semibold text-[#635E52] uppercase tracking-widest block text-[10px] mb-1">
                  Curation Lead • 10 Yrs
                </span>
                <h3 className="font-serif text-[20px] text-[#141310] font-normal">Arjun Mehta</h3>
                <p className="text-[13px] text-[#4A463F] font-medium mt-1 mb-3">Senior Album Layout Curator</p>
                <p className="text-[13px] text-[#4A463F] leading-relaxed">
                  Educated in Swiss editorial typography. Arjun works directly with international photographers to design contemplative, cinematic pacing across wide panoramic double-page spreads.
                </p>
              </div>
              <div className="mt-6 pt-4 bg-[#F4F4F0] p-3 flex items-center justify-between text-[#4A463F] border border-[#EAE6DF]">
                <span className="font-semibold uppercase text-[10px]">Specialism</span>
                <span className="font-bold text-[#141310] text-[10px]">Editorial Pacing</span>
              </div>
            </div>

            {/* Artisan 4 */}
            <div className="bg-[#FFFFFF] p-6 shadow-sm flex flex-col justify-between border border-[#EAE6DF]">
              <div>
                <div className="w-full h-72 mb-6 overflow-hidden bg-[#EFEEEA]">
                  <img
                    className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                    alt="Portrait of luxury concierge representative Eleanor Vance consulting swatch ring"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                  />
                </div>
                <span className="font-semibold text-[#635E52] uppercase tracking-widest block text-[10px] mb-1">
                  Client Services • 8 Yrs
                </span>
                <h3 className="font-serif text-[20px] text-[#141310] font-normal">Eleanor Vance</h3>
                <p className="text-[13px] text-[#4A463F] font-medium mt-1 mb-3">Global Concierge Lead (UK &amp; GCC)</p>
                <p className="text-[13px] text-[#4A463F] leading-relaxed">
                  Based between Mumbai and London, Eleanor orchestrates studio accounts, swatch kit logistics, and rapid white-glove courier routing for high-profile commissions.
                </p>
              </div>
              <div className="mt-6 pt-4 bg-[#F4F4F0] p-3 flex items-center justify-between text-[#4A463F] border border-[#EAE6DF]">
                <span className="font-semibold uppercase text-[10px]">Specialism</span>
                <span className="font-bold text-[#141310] text-[10px]">International Liaison</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: VISIT OUR SANTACRUZ ATELIER & CONSULTATION CTA */}
      <section className="w-full bg-[#FAF9F5] py-16 md:py-28 relative">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="bg-[#E9E8E4] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-sm border border-[#EAE6DF]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-[1px] bg-[#635E52]"></span>
                  <span className="font-semibold uppercase text-[#635E52] text-[11px] tracking-[0.25em]">
                    Studio Invitation
                  </span>
                </div>
                <h2 className="font-serif text-[32px] md:text-[44px] text-[#141310] mb-6 font-normal leading-tight">
                  Experience the Tactile Weight of Fine Craftsmanship in Person.
                </h2>
                <p className="text-[17px] text-[#4A463F] leading-relaxed mb-8 max-w-xl">
                  We welcome photographers, cinematographers, and couples to our Santacruz West salon. Handle our Italian full-grain leathers, inspect Fuji silver halide layflats under daylight lamps, and collaborate directly with our master binders.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    to="/enquire"
                    className="px-8 py-4 bg-[#141310] text-[#FAF9F5] font-semibold text-[11px] uppercase tracking-widest hover:bg-[#292724] text-center transition-colors duration-200"
                  >
                    Book Private Consultation
                  </Link>
                  <a
                    href="tel:+919322254315"
                    className="px-8 py-4 bg-[#FAF9F5] text-[#141310] font-semibold text-[11px] uppercase tracking-widest hover:bg-[#EFEEEA] text-center transition-colors duration-200 flex items-center justify-center gap-2 border border-[#CCC5BC]"
                  >
                    <Phone size={14} />
                    <span>Direct Studio Line: +91 93222 54315</span>
                  </a>
                </div>

                {/* Practical Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 pt-8 bg-[#EFEEEA] p-6 border border-[#EAE6DF]">
                  <div>
                    <p className="font-semibold uppercase text-[#635E52] text-[10px] tracking-wider mb-1">Mumbai Salon</p>
                    <p className="font-medium text-[#141310] text-[15px]">Santacruz West, Mumbai, MH – 400054</p>
                    <p className="text-[13px] text-[#4A463F] mt-1">Mon – Sat: 10:00 AM – 7:30 PM IST</p>
                  </div>
                  <div>
                    <p className="font-semibold uppercase text-[#635E52] text-[10px] tracking-wider mb-1">Photographer Swatch Kits</p>
                    <p className="font-medium text-[#141310] text-[15px]">Curated Folio Box Delivery</p>
                    <p className="text-[13px] text-[#4A463F] mt-1">Dispatched to registered studios within 48h</p>
                  </div>
                </div>
              </div>

              {/* Right: Map Integration Card */}
              <div className="lg:col-span-5 relative mt-8 lg:mt-0">
                <div className="bg-[#FAF9F5] p-4 shadow-md border border-[#EAE6DF]">
                  <div className="w-full h-80 bg-cover bg-center mb-4 relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=85')" }}>
                    <div className="absolute inset-0 bg-[#141310]/20 backdrop-blur-[1px] flex items-center justify-center">
                      <div className="bg-[#FFFFFF]/95 p-4 text-center shadow-lg max-w-xs border border-[#EAE6DF]">
                        <MapPin size={24} className="text-[#635E52] mx-auto mb-1" />
                        <p className="font-serif text-[18px] text-[#141310] font-normal">Ultraa Atelier</p>
                        <p className="text-[13px] text-[#4A463F]">Santacruz West, Mumbai</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-2 pt-2">
                    <span className="font-semibold uppercase text-[#4A463F] text-[10px]">Valet Parking On Appointment</span>
                    <a
                      href="https://wa.me/919322254315"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold uppercase text-[#141310] hover:text-[#635E52] flex items-center gap-1 text-[11px]"
                    >
                      Directions via WhatsApp →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
