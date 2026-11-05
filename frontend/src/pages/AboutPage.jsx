import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/motion/RevealOnScroll';
import TextReveal from '../components/motion/TextReveal';
import StaggerBoxes from '../components/motion/StaggerBoxes';
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

// 15 Premier Global Studio Destinations (Matching Ultraa Albums Worldwide Footprint)
const MAP_LOCATIONS = [
  {
    id: 'mumbai',
    name: 'Mumbai Atelier • Global HQ',
    city: 'Mumbai',
    country: 'India',
    hubCategory: 'core',
    role: 'Master Bookbindery, Production Labs & Private Client Salon',
    address: 'Santacruz West, Mumbai 400054, India',
    sla: 'Headquarters • Same-Day Dispatch',
    x: 67.5,
    y: 43.5,
    isHQ: true
  },
  {
    id: 'delhi',
    name: 'New Delhi Studio Salon',
    city: 'New Delhi',
    country: 'India',
    hubCategory: 'core',
    role: 'North India Wedding Studio Salon & Proofing Desk',
    address: 'Aerocity & Connaught Place, New Delhi',
    sla: '24–48h Air Courier',
    x: 69.0,
    y: 36.5
  },
  {
    id: 'london',
    name: 'London Desk & UK Logistics',
    city: 'London',
    country: 'United Kingdom',
    hubCategory: 'hub',
    role: 'Mayfair Liaison Desk • Sterling Invoicing & Priority Freight',
    address: 'Mayfair & West End, London, UK',
    sla: '3–5 Days Insured DDP Express',
    x: 47.0,
    y: 20.0
  },
  {
    id: 'paris',
    name: 'Paris & Continental Europe',
    city: 'Paris',
    country: 'France',
    hubCategory: 'network',
    role: 'Haute Couture Editorial Commissions & Châteaux Nuptials',
    address: 'Place Vendôme / Rue Saint-Honoré, Paris',
    sla: '3–4 Days DDP Air Transit',
    x: 48.5,
    y: 22.9
  },
  {
    id: 'como',
    name: 'Lake Como & Florence Hub',
    city: 'Lake Como',
    country: 'Italy',
    hubCategory: 'network',
    role: 'Tuscan Full-Grain Leather Sourcing & Destination Desk',
    address: 'Bellagio, Lake Como & Florence, Italy',
    sla: '3–4 Days Priority Courier',
    x: 50.7,
    y: 24.7
  },
  {
    id: 'dubai',
    name: 'Dubai & GCC Concierge',
    city: 'Dubai',
    country: 'United Arab Emirates',
    hubCategory: 'hub',
    role: 'DIFC Studio Desk • Royal Wedding Commendations',
    address: 'DIFC Gate Village, Dubai, UAE',
    sla: '48h Direct Air Transit',
    x: 62.5,
    y: 38.3
  },
  {
    id: 'lagos',
    name: 'Lagos & West Africa Desk',
    city: 'Lagos',
    country: 'Nigeria',
    hubCategory: 'network',
    role: 'High-Society Grand Celebrations & Traditional Folios',
    address: 'Victoria Island, Lagos, Nigeria',
    sla: '4–5 Days Insured Express',
    x: 50.1,
    y: 47.9
  },
  {
    id: 'joburg',
    name: 'Johannesburg Studio Partner',
    city: 'Johannesburg',
    country: 'South Africa',
    hubCategory: 'network',
    role: 'Sub-Saharan Estate & Bushveld Luxury Weddings',
    address: 'Sandton, Johannesburg, South Africa',
    sla: '4–5 Days Express Freight',
    x: 55.2,
    y: 71.9
  },
  {
    id: 'capetown',
    name: 'Cape Town Winelands Desk',
    city: 'Cape Town',
    country: 'South Africa',
    hubCategory: 'network',
    role: 'Bespoke Folio & Wine Estate Celebrations',
    address: 'Franschhoek & V&A Waterfront, Cape Town',
    sla: '4–5 Days Door-to-Door',
    x: 53.6,
    y: 76.9
  },
  {
    id: 'singapore',
    name: 'Singapore & SE Asia Hub',
    city: 'Singapore',
    country: 'Singapore',
    hubCategory: 'hub',
    role: 'Pan-Asian Studio Logistics & Curated Sample Vault',
    address: 'Marina Bay Financial Centre, Singapore',
    sla: '2–3 Days Priority Air Transit',
    x: 78.4,
    y: 52.9
  },
  {
    id: 'sydney',
    name: 'Sydney & Melbourne Network',
    city: 'Sydney',
    country: 'Australia',
    hubCategory: 'network',
    role: 'Australasia Studio Partners & Curated Swatch Kits',
    address: 'Surry Hills, Sydney, NSW, Australia',
    sla: '4–5 Days Insured Courier',
    x: 90.1,
    y: 74.0
  },
  {
    id: 'auckland',
    name: 'Auckland & Queenstown',
    city: 'Auckland',
    country: 'New Zealand',
    hubCategory: 'network',
    role: 'South Pacific Island Destination Weddings',
    address: 'Viaduct Harbour, Auckland, NZ',
    sla: '5 Days Priority Air Freight',
    x: 96.2,
    y: 79.4
  },
  {
    id: 'vancouver',
    name: 'Vancouver & Pacific Northwest',
    city: 'Vancouver',
    country: 'Canada',
    hubCategory: 'network',
    role: 'Fine Art Studio Partner Network & Whistler Nuptials',
    address: 'Gastown, Vancouver, BC, Canada',
    sla: '3–4 Days Door-to-Door',
    x: 16.7,
    y: 24.0
  },
  {
    id: 'newyork',
    name: 'New York & East Coast Studio',
    city: 'New York',
    country: 'United States',
    hubCategory: 'network',
    role: 'Manhattan & Hamptons Studio Concierge',
    address: 'SoHo & Fifth Avenue, New York, NY',
    sla: '3–4 Days Priority Courier',
    x: 27.1,
    y: 28.6
  },
  {
    id: 'california',
    name: 'Los Angeles & California',
    city: 'Los Angeles',
    country: 'United States',
    hubCategory: 'network',
    role: 'West Coast Editorial & Film Photographers',
    address: 'Beverly Hills & Malibu, CA, USA',
    sla: '3–4 Days Door-to-Door',
    x: 17.4,
    y: 33.6
  }
];

const FLIGHT_PATHS = [
  { to: 'London', d: 'M 675 218 Q 570 120 470 100' },
  { to: 'Paris', d: 'M 675 218 Q 575 130 485 115' },
  { to: 'Como', d: 'M 675 218 Q 585 140 507 124' },
  { to: 'Dubai', d: 'M 675 218 Q 650 190 625 192' },
  { to: 'New York', d: 'M 675 218 Q 440 90 271 143' },
  { to: 'Vancouver', d: 'M 675 218 Q 400 80 167 120' },
  { to: 'California', d: 'M 675 218 Q 390 120 174 168' },
  { to: 'Singapore', d: 'M 675 218 Q 730 240 784 265' },
  { to: 'Sydney', d: 'M 675 218 Q 800 320 901 370' },
  { to: 'Auckland', d: 'M 675 218 Q 830 350 962 397' },
  { to: 'Cape Town', d: 'M 675 218 Q 580 340 536 385' },
  { to: 'Lagos', d: 'M 675 218 Q 570 230 501 240' }
];

export default function AboutPage() {
  const [selectedPin, setSelectedPin] = useState('mumbai');
  const [hoveredPin, setHoveredPin] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeLocation = MAP_LOCATIONS.find(loc => loc.id === (hoveredPin || selectedPin)) || MAP_LOCATIONS[0];

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
                <TextReveal as="h1" delay={0.08} className="font-serif text-[38px] md:text-[52px] text-[#141310] tracking-tight leading-[1.12] mb-8 font-normal">
                  Preserving Sacred Moments Through Master Bookbinding &amp; Silver Halide Artistry
                </TextReveal>
                <p className="text-[17px] text-[#4A463F] leading-relaxed mb-10 max-w-xl">
                  Ultraa Albums is Mumbai’s premier custom photo book manufacturer and artisanal binding atelier. Over the past 15 years, we have quietly powered the luxury deliverable suites of top-tier wedding cinematographers and photographers across India, the UK, Europe, and the Middle East.
                </p>
              </div>

              {/* Micro Typographic Spec Matrix */}
              <StaggerBoxes className="grid grid-cols-3 gap-6 pt-8 mt-4 bg-[#F4F4F0] p-6 border border-[#EAE6DF]" stagger={0.08}>
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
              </StaggerBoxes>
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
      <section id="our-story" className="scroll-mt-24 w-full bg-[#F4F4F0] py-16 md:py-28 relative border-y border-[#EAE6DF]">
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
      <section id="craftsmanship" className="scroll-mt-24 w-full bg-[#FAF9F5] py-16 md:py-28">
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
      <section id="how-we-work" className="scroll-mt-24 w-full bg-[#1A1815] text-[#FAF7F2] py-16 md:py-28 relative overflow-hidden">
        {/* Subtle Atmospheric Gold Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#B99A69]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-[#B99A69]/5 blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 md:px-12 relative z-10">
          <div className="max-w-2xl mb-14 sm:mb-16 text-left">
            {/* Live Gold Status Pill */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B99A69]/40 text-[10px] uppercase font-sans font-medium tracking-[0.22em] mb-3"
              style={{ backgroundColor: 'rgba(185, 154, 105, 0.12)', color: '#D4AF37' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span style={{ color: '#D4AF37' }}>EXECUTION SEQUENCE</span>
            </div>

            {/* High-Contrast White Heading */}
            <TextReveal
              as="h2"
              delay={0.08}
              className="font-serif text-[32px] md:text-[44px] lg:text-[48px] font-normal leading-[1.14] tracking-tight mt-1 mb-3"
              style={{ color: '#FAF7F2' }}
            >
              From Digital Master to Bound Volume
            </TextReveal>

            {/* High-Contrast Warm Linen Subtitle */}
            <p
              className="font-sans text-[15px] md:text-[16px] leading-[1.7] font-normal"
              style={{ color: '#C8BEAE' }}
            >
              A seamless three-tier collaboration connecting international studios directly with our Santacruz master binders.
            </p>
          </div>

          <StaggerBoxes className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 relative" stagger={0.12}>
            {/* Step 1 */}
            <div
              className="rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between relative shadow-[0_16px_40px_-12px_rgba(0,0,0,0.35)] border border-[#3E3A33] transition-all duration-300 hover:border-[#B99A69]/60 hover:-translate-y-1 group"
              style={{ backgroundColor: '#24211D' }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-[38px] md:text-[42px] leading-none" style={{ color: '#B99A69', opacity: 0.55 }}>
                    01
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[#B99A69]/30 flex items-center justify-center bg-[#1A1815]">
                    <BookOpen size={20} className="text-[#B99A69]" />
                  </div>
                </div>

                <span
                  className="inline-block px-2.5 py-0.5 rounded-full border border-[#B99A69]/30 text-[9.5px] font-sans font-semibold uppercase tracking-[0.2em] mb-2.5"
                  style={{ color: '#D4AF37', backgroundColor: 'rgba(185, 154, 105, 0.1)' }}
                >
                  Stage 01
                </span>

                <h3
                  className="font-serif text-[22px] sm:text-[24px] font-normal leading-snug mb-3.5 group-hover:text-[#B99A69] transition-colors !text-[#FAF7F2]"
                  style={{ color: '#FAF7F2' }}
                >
                  Transfer &amp; Layout Curating
                </h3>

                <p
                  className="font-sans text-[14px] sm:text-[14.5px] leading-[1.7] mb-6 font-normal !text-[#D5CDBF]"
                  style={{ color: '#D5CDBF' }}
                >
                  Studio raw imagery is curated into bespoke architectural spreads. We provide high-resolution interactive digital soft proofs, pacing each sequence to reflect the genuine emotional cadence of the celebration.
                </p>
              </div>

              <div
                className="space-y-2.5 pt-5 p-4 rounded-xl border border-[#3E3A33]"
                style={{ backgroundColor: '#1A1815' }}
              >
                <div className="flex items-center gap-2.5">
                  <Check size={14} className="text-[#B99A69] shrink-0" />
                  <span className="text-[12.5px] font-sans font-medium !text-[#FAF7F2]" style={{ color: '#FAF7F2' }}>Multi-revision client proofing app</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check size={14} className="text-[#B99A69] shrink-0" />
                  <span className="text-[12.5px] font-sans font-medium !text-[#FAF7F2]" style={{ color: '#FAF7F2' }}>Architectural negative whitespace balance</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div
              className="rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between relative shadow-[0_16px_40px_-12px_rgba(0,0,0,0.35)] border border-[#3E3A33] transition-all duration-300 hover:border-[#B99A69]/60 hover:-translate-y-1 group"
              style={{ backgroundColor: '#24211D' }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-[38px] md:text-[42px] leading-none" style={{ color: '#B99A69', opacity: 0.55 }}>
                    02
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[#B99A69]/30 flex items-center justify-center bg-[#1A1815]">
                    <Layers size={20} className="text-[#B99A69]" />
                  </div>
                </div>

                <span
                  className="inline-block px-2.5 py-0.5 rounded-full border border-[#B99A69]/30 text-[9.5px] font-sans font-semibold uppercase tracking-[0.2em] mb-2.5"
                  style={{ color: '#D4AF37', backgroundColor: 'rgba(185, 154, 105, 0.1)' }}
                >
                  Stage 02
                </span>

                <h3
                  className="font-serif text-[22px] sm:text-[24px] font-normal leading-snug mb-3.5 group-hover:text-[#B99A69] transition-colors !text-[#FAF7F2]"
                  style={{ color: '#FAF7F2' }}
                >
                  Precision Printing &amp; Hand Binding
                </h3>

                <p
                  className="font-sans text-[14px] sm:text-[14.5px] leading-[1.7] mb-6 font-normal !text-[#D5CDBF]"
                  style={{ color: '#D5CDBF' }}
                >
                  High-definition continuous tone exposure coupled with German binding presses. Core boards are reinforced with climate-controlled, humidity-resistant non-bending archival substrates before leather covers are trimmed by hand.
                </p>
              </div>

              <div
                className="space-y-2.5 pt-5 p-4 rounded-xl border border-[#3E3A33]"
                style={{ backgroundColor: '#1A1815' }}
              >
                <div className="flex items-center gap-2.5">
                  <Check size={14} className="text-[#B99A69] shrink-0" />
                  <span className="text-[12.5px] font-sans font-medium !text-[#FAF7F2]" style={{ color: '#FAF7F2' }}>Anti-warp composite core formulation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check size={14} className="text-[#B99A69] shrink-0" />
                  <span className="text-[12.5px] font-sans font-medium !text-[#FAF7F2]" style={{ color: '#FAF7F2' }}>Individual hydraulic spine conditioning</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div
              className="rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between relative shadow-[0_16px_40px_-12px_rgba(0,0,0,0.35)] border border-[#3E3A33] transition-all duration-300 hover:border-[#B99A69]/60 hover:-translate-y-1 group"
              style={{ backgroundColor: '#24211D' }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-[38px] md:text-[42px] leading-none" style={{ color: '#B99A69', opacity: 0.55 }}>
                    03
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[#B99A69]/30 flex items-center justify-center bg-[#1A1815]">
                    <Plane size={20} className="text-[#B99A69]" />
                  </div>
                </div>

                <span
                  className="inline-block px-2.5 py-0.5 rounded-full border border-[#B99A69]/30 text-[9.5px] font-sans font-semibold uppercase tracking-[0.2em] mb-2.5"
                  style={{ color: '#D4AF37', backgroundColor: 'rgba(185, 154, 105, 0.1)' }}
                >
                  Stage 03
                </span>

                <h3
                  className="font-serif text-[22px] sm:text-[24px] font-normal leading-snug mb-3.5 group-hover:text-[#B99A69] transition-colors !text-[#FAF7F2]"
                  style={{ color: '#FAF7F2' }}
                >
                  Global White-Glove Dispatch
                </h3>

                <p
                  className="font-sans text-[14px] sm:text-[14.5px] leading-[1.7] mb-6 font-normal !text-[#D5CDBF]"
                  style={{ color: '#D5CDBF' }}
                >
                  Tightly wrapped in custom anti-humidity velvet sleeves and double-walled impact-absorbing presentation cartons. Priority tracked air transit departs Mumbai daily, landing in London or New York within 72 hours.
                </p>
              </div>

              <div
                className="space-y-2.5 pt-5 p-4 rounded-xl border border-[#3E3A33]"
                style={{ backgroundColor: '#1A1815' }}
              >
                <div className="flex items-center gap-2.5">
                  <Check size={14} className="text-[#B99A69] shrink-0" />
                  <span className="text-[12.5px] font-sans font-medium !text-[#FAF7F2]" style={{ color: '#FAF7F2' }}>Full customs clearance &amp; duty pre-paid</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check size={14} className="text-[#B99A69] shrink-0" />
                  <span className="text-[12.5px] font-sans font-medium !text-[#FAF7F2]" style={{ color: '#FAF7F2' }}>Doorstep white-glove unboxing presentation</span>
                </div>
              </div>
            </div>
          </StaggerBoxes>
        </div>
      </section>

      {/* SECTION 5: GLOBAL PRESENCE & CARTOGRAPHY MAP */}
      <section id="global-presence" className="scroll-mt-24 w-full bg-[#FAF9F5] py-16 md:py-24 border-t border-[#EAE3D6] relative">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          {/* Decorative Star Divider (Matching Heritage Ultraa Style) */}
          <div className="flex items-center justify-center gap-3 mb-10 opacity-70">
            <span className="h-px w-24 sm:w-36 bg-[#B99A69]/40 border-dashed" />
            <span className="text-[#B99A69] text-sm">✦</span>
            <span className="h-px w-24 sm:w-36 bg-[#B99A69]/40 border-dashed" />
          </div>

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl text-left">
              <RevealOnScroll direction="down" delay={0.05} distance={12} blur={false}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B99A69]/40 bg-[#B99A69]/10 text-[10px] uppercase font-sans font-medium tracking-[0.22em] text-[#B99A69] mb-3">
                  <Plane size={12} />
                  <span>INTERNATIONAL ATELIER NETWORK</span>
                </div>
              </RevealOnScroll>
              <TextReveal as="h2" className="font-serif text-[30px] sm:text-[38px] lg:text-[44px] text-[#201E1B] font-normal leading-tight" delay={0.08}>
                Handcrafted in Mumbai. Delivered to Discerning Studios Worldwide.
              </TextReveal>
            </div>
            <p className="text-[14px] md:text-[15px] text-[#777066] max-w-md leading-relaxed text-left">
              From our Santacruz West atelier to prestigious addresses across 28 countries. Hover over any destination pin on the world map or select a studio hub to inspect priority transit corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive Studio Hubs Listing (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Studio Hubs Listing */}
              <div className="space-y-3">
                {/* Mumbai Core HQ */}
                <div
                  onMouseEnter={() => setHoveredPin('mumbai')}
                  onMouseLeave={() => setHoveredPin(null)}
                  onClick={() => setSelectedPin('mumbai')}
                  className={`p-4.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between text-left ${
                    selectedPin === 'mumbai'
                      ? 'bg-white border-[#B99A69] shadow-[0_8px_24px_-4px_rgba(185,154,105,0.22)]'
                      : 'bg-[#F4F4F0] border-[#EAE6DF] hover:bg-white hover:border-[#D6C7B2]'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#B99A69] animate-pulse"></span>
                      <p className="font-serif text-[17px] text-[#201E1B] font-normal">Mumbai Atelier • Global Headquarters</p>
                    </div>
                    <p className="text-[12px] text-[#777066] mt-1 font-sans">Santacruz West • Master Binders, Darkroom Lab, Client Salon</p>
                  </div>
                  <span className="font-semibold uppercase text-[10px] bg-[#B99A69] text-[#FAF7F2] px-2.5 py-1 rounded-sm shadow-xs shrink-0">
                    Core HQ
                  </span>
                </div>

                {/* London UK Liaison */}
                <div
                  onMouseEnter={() => setHoveredPin('london')}
                  onMouseLeave={() => setHoveredPin(null)}
                  onClick={() => setSelectedPin('london')}
                  className={`p-4.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between text-left ${
                    selectedPin === 'london'
                      ? 'bg-white border-[#B99A69] shadow-[0_8px_24px_-4px_rgba(185,154,105,0.22)]'
                      : 'bg-[#F4F4F0] border-[#EAE6DF] hover:bg-white hover:border-[#D6C7B2]'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D9383A]"></span>
                      <p className="font-serif text-[17px] text-[#201E1B] font-normal">London Liaison • UK &amp; EU Logistics</p>
                    </div>
                    <p className="text-[12px] text-[#777066] mt-1 font-sans">Mayfair • Sterling Invoicing, Priority Air Freight Dispatch</p>
                  </div>
                  <span className="font-semibold uppercase text-[10px] bg-white px-2.5 py-1 text-[#201E1B] border border-[#EAE6DF] shrink-0">
                    Hub
                  </span>
                </div>

                {/* Dubai GCC Concierge */}
                <div
                  onMouseEnter={() => setHoveredPin('dubai')}
                  onMouseLeave={() => setHoveredPin(null)}
                  onClick={() => setSelectedPin('dubai')}
                  className={`p-4.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between text-left ${
                    selectedPin === 'dubai'
                      ? 'bg-white border-[#B99A69] shadow-[0_8px_24px_-4px_rgba(185,154,105,0.22)]'
                      : 'bg-[#F4F4F0] border-[#EAE6DF] hover:bg-white hover:border-[#D6C7B2]'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D9383A]"></span>
                      <p className="font-serif text-[17px] text-[#201E1B] font-normal">Dubai • GCC Concierge</p>
                    </div>
                    <p className="text-[12px] text-[#777066] mt-1 font-sans">DIFC Gate Village • Royal Commendations &amp; Fast-Track Delivery</p>
                  </div>
                  <span className="font-semibold uppercase text-[10px] bg-white px-2.5 py-1 text-[#201E1B] border border-[#EAE6DF] shrink-0">
                    Hub
                  </span>
                </div>

                {/* New York & Sydney Partners */}
                <div
                  onMouseEnter={() => setHoveredPin('newyork')}
                  onMouseLeave={() => setHoveredPin(null)}
                  onClick={() => setSelectedPin(selectedPin === 'newyork' ? 'sydney' : 'newyork')}
                  className={`p-4.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between text-left ${
                    selectedPin === 'newyork' || selectedPin === 'sydney'
                      ? 'bg-white border-[#B99A69] shadow-[0_8px_24px_-4px_rgba(185,154,105,0.22)]'
                      : 'bg-[#F4F4F0] border-[#EAE6DF] hover:bg-white hover:border-[#D6C7B2]'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D9383A]"></span>
                      <p className="font-serif text-[17px] text-[#201E1B] font-normal">New York &amp; Sydney Partners</p>
                    </div>
                    <p className="text-[12px] text-[#777066] mt-1 font-sans">Express Courier Network • Curated Swatch Kits on Demand</p>
                  </div>
                  <span className="font-semibold uppercase text-[10px] bg-white px-2.5 py-1 text-[#201E1B] border border-[#EAE6DF] shrink-0">
                    Network
                  </span>
                </div>
              </div>

              {/* Active Selected Studio Spotlight Box */}
              <div className="p-5 rounded-xl bg-[#201E1B] text-[#FAF7F2] border border-[#3E3A33] shadow-md text-left">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-sans text-[10px] uppercase font-semibold tracking-[0.2em] text-[#D4AF37]">
                    ACTIVE STUDIO SPOTLIGHT
                  </span>
                  <span className="font-sans text-[10px] text-[#A69E92] bg-white/10 px-2 py-0.5 rounded">
                    {activeLocation.country}
                  </span>
                </div>
                <h4 className="font-serif text-[20px] text-[#FAF7F2] font-normal mb-1">
                  {activeLocation.name}
                </h4>
                <p className="text-[12.5px] text-[#C8BEAE] leading-relaxed mb-3">
                  {activeLocation.role}
                </p>
                <div className="pt-2.5 border-t border-white/15 flex items-center justify-between text-[11px] text-[#D4AF37]">
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    <span>{activeLocation.sla}</span>
                  </span>
                  <Link to="/contact" className="hover:text-white underline text-[10.5px] tracking-wider uppercase font-semibold">
                    Contact Liaison →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: World Map with Real Map Graphic & Red Location Pins (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="w-full bg-white rounded-2xl p-4 sm:p-6 shadow-[0_12px_40px_-10px_rgba(32,30,27,0.08)] border border-[#EAE3D6] overflow-hidden">
                {/* Map Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-3 border-b border-[#F2ECE3]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D9383A] animate-ping" />
                    <span className="font-semibold uppercase text-[#201E1B] tracking-wider text-[11px]">
                      Active Global Dispatch Map • 15 Premier Destinations
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-[#777066]">Average Global Air Transit: 3.4 Days</span>
                </div>

                {/* Real World Map SVG Canvas with Red Drop Pins */}
                <div className="relative aspect-[2754/1398] w-full rounded-xl overflow-hidden bg-[#F7F3EC] border border-[#EAE3D6] select-none">
                  {/* Detailed Vector World Map Background */}
                  <img
                    src="/images/world-map.svg"
                    alt="Ultraa Albums Global Worldwide Delivery Map"
                    className="w-full h-full object-contain pointer-events-none select-none opacity-95"
                    loading="lazy"
                  />

                  {/* Overlaid Curved Flight Paths from Mumbai HQ */}
                  <svg
                    viewBox="0 0 1000 500"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.15))' }}
                  >
                    {FLIGHT_PATHS.map((path, pIdx) => (
                      <path
                        key={pIdx}
                        d={path.d}
                        fill="none"
                        stroke="#B99A69"
                        strokeWidth="1.2"
                        strokeDasharray="4 4"
                        strokeOpacity="0.65"
                      />
                    ))}
                  </svg>

                  {/* 15 Real Location Pins (Matching Reference from Ultraa Albums) */}
                  {MAP_LOCATIONS.map((loc) => {
                    const isSelected = selectedPin === loc.id;
                    const isHovered = hoveredPin === loc.id;
                    const isActive = isSelected || isHovered;

                    return (
                      <div
                        key={loc.id}
                        style={{
                          left: `${loc.x}%`,
                          top: `${loc.y}%`,
                          transform: 'translate(-50%, -100%)'
                        }}
                        onMouseEnter={() => setHoveredPin(loc.id)}
                        onMouseLeave={() => setHoveredPin(null)}
                        onClick={() => setSelectedPin(loc.id)}
                        className={`absolute group cursor-pointer transition-transform duration-300 z-30 ${
                          isActive ? 'scale-125 z-40' : 'hover:scale-120'
                        }`}
                      >
                        {/* Radar Ripple for Mumbai HQ or Selected Studio */}
                        {(loc.isHQ || isActive) && (
                          <span
                            className={`absolute top-[8px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none animate-ping ${
                              loc.isHQ ? 'w-6 h-6 bg-[#B99A69]/40' : 'w-5 h-5 bg-[#D9383A]/40'
                            }`}
                          />
                        )}

                        {/* Drop Pin Icon */}
                        <div className="relative flex flex-col items-center">
                          <svg
                            width={loc.isHQ ? '22' : '18'}
                            height={loc.isHQ ? '28' : '23'}
                            viewBox="0 0 24 30"
                            fill="none"
                            className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-transform duration-200"
                          >
                            <path
                              d="M12 0C5.37 0 0 5.37 0 12C0 19.5 12 30 12 30C12 30 24 19.5 24 12C24 5.37 18.63 0 12 0Z"
                              fill={loc.isHQ ? '#B99A69' : '#D9383A'}
                            />
                            {loc.isHQ ? (
                              <text x="12" y="15" fill="#FAF7F2" fontSize="9" textAnchor="middle" fontWeight="bold">
                                ✦
                              </text>
                            ) : (
                              <circle cx="12" cy="11" r="4.2" fill="#FAF7F2" />
                            )}
                          </svg>

                          {/* Pin Ground Shadow */}
                          <span className="w-2.5 h-0.5 bg-black/30 rounded-full blur-[0.6px] -mt-0.5" />
                        </div>

                        {/* Interactive Floating Hover Tooltip Card */}
                        <div
                          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 sm:w-52 p-3 bg-[#1A1815] text-[#FAF7F2] rounded-xl shadow-2xl border border-[#B99A69]/40 transition-all duration-200 pointer-events-none text-left z-50 ${
                            isActive
                              ? 'opacity-100 translate-y-0 visible'
                              : 'opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <span className="text-[9px] uppercase font-semibold tracking-wider text-[#D4AF37]">
                              {loc.country}
                            </span>
                            {loc.isHQ && (
                              <span className="text-[8px] uppercase font-bold tracking-widest bg-[#B99A69] text-[#1A1815] px-1.5 py-0.2 rounded">
                                HQ
                              </span>
                            )}
                          </div>
                          <p className="font-serif text-[13px] font-normal leading-tight text-[#FAF7F2] mb-1">
                            {loc.name}
                          </p>
                          <p className="text-[10px] text-[#C8BEAE] leading-snug mb-1.5">
                            {loc.role}
                          </p>
                          <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[9px] text-[#D4AF37]">
                            <span>{loc.sla}</span>
                            <span>⚡ Priority</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Carbon-Offset Transit Badge */}
                  <div className="absolute bottom-3 right-3 bg-[#FAF7F2]/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#E0D5C3] shadow-sm text-right z-30">
                    <span className="font-semibold text-[#8C734B] uppercase tracking-wider block text-[8.5px]">
                      Carbon-Offset Air Transit
                    </span>
                    <span className="text-[10.5px] text-[#201E1B] font-medium">
                      DHL Express • FedEx International Priority
                    </span>
                  </div>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-5 text-center">
                  <div className="bg-[#FAF9F5] p-3 sm:p-4 rounded-xl border border-[#EAE6DF]">
                    <p className="font-serif text-[22px] sm:text-[26px] text-[#201E1B] font-normal">15+</p>
                    <p className="font-semibold uppercase text-[#777066] text-[9.5px] tracking-wider">Years Operating</p>
                  </div>
                  <div className="bg-[#FAF9F5] p-3 sm:p-4 rounded-xl border border-[#EAE6DF]">
                    <p className="font-serif text-[22px] sm:text-[26px] text-[#201E1B] font-normal">48,000+</p>
                    <p className="font-semibold uppercase text-[#777066] text-[9.5px] tracking-wider">Books Bound</p>
                  </div>
                  <div className="bg-[#FAF9F5] p-3 sm:p-4 rounded-xl border border-[#EAE6DF]">
                    <p className="font-serif text-[22px] sm:text-[26px] text-[#201E1B] font-normal">99.8%</p>
                    <p className="font-semibold uppercase text-[#777066] text-[9.5px] tracking-wider">Archival Pass Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Star Divider */}
          <div className="flex items-center justify-center gap-3 mt-12 opacity-70">
            <span className="h-px w-24 sm:w-36 bg-[#B99A69]/40 border-dashed" />
            <span className="text-[#B99A69] text-sm">✦</span>
            <span className="h-px w-24 sm:w-36 bg-[#B99A69]/40 border-dashed" />
          </div>
        </div>
      </section>

      {/* SECTION 6: THE MASTER ARTISANS & LAB CURATORS */}
      <section id="our-team" className="scroll-mt-24 w-full bg-[#F4F4F0] py-16 md:py-28 border-t border-[#EAE6DF]">
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
