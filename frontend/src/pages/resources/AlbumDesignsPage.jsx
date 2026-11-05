import { studioEmail } from '../../utils/studioEmail';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../../components/motion/RevealOnScroll';
import TextReveal from '../../components/motion/TextReveal';
import StaggerBoxes from '../../components/motion/StaggerBoxes';
import TiltCard from '../../components/motion/TiltCard';
import {
  ChevronRight,
  SlidersHorizontal,
  Maximize2,
  X,
  Download,
  FileCheck,
  Compass,
  ArrowRight,
  Eye,
  Layers
} from 'lucide-react';

const SPREAD_SPECIMENS = [
  {
    id: 'specimen-01',
    title: 'Monolithic Sovereign Spread',
    provenance: 'The Leela Palace, Udaipur',
    style: 'palatial',
    aspect: 'panoramic',
    chapter: 'ceremony',
    dimensions: '36" × 12" Open (18" × 12" Closed)',
    substrate: 'Fuji Crystal Archive DPII Silk (600gsm)',
    description: 'Continuous zero-split panoramic spread capturing the floating palace at golden hour. Balanced with a formal 12-column architectural grid and asymmetric negative margins.',
    imgSrc: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&q=85',
    alt: 'Panoramic wedding album spread of an Indian royal palace courtyard with bride and groom during sunset ceremony',
    colorGamut: 'Adobe RGB (1998) 300 DPI',
    safeMargin: '12mm Trim / 0.0mm Gutter'
  },
  {
    id: 'specimen-02',
    title: 'Editorial Quadriptych Balance',
    provenance: 'Hedsor House, Buckinghamshire',
    style: 'editorial',
    aspect: 'landscape',
    chapter: 'reception',
    dimensions: '24" × 12" Open (12" × 12" Closed)',
    substrate: 'Hahnemühle Photo Rag 308gsm Matte',
    description: 'Curated 4-image rhythm contrasting intimate black-and-white portraits against ambient candlelit ballroom architecture. Uses strict 18mm breathing gutters.',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcm5HpH2oGqsKPA0yrooNdcz46tWGlerc2CL43ZXFuj8odMegOiJ2GDP0aujwDpas29iWihq1i29Xyw_ZGGsuSZYK4FKVc1kUOuVg8MQRWgwKLSd7D0327JS_tJgloLOxKZCWuHfcWdliF61VerL0CAGS4Cgkw_DOAwX3t_MdEeiH2wfRrptyCdxwDTNFwUB7QZNt-gYgYI-Jlv7Md5JknWqENAVneyQ2iJqPdpMHW',
    alt: 'Fine art wedding album layout with black and white portraits on soft archival matte paper',
    colorGamut: 'sRGB IEC61966-2.1',
    safeMargin: '14mm Trim / 0.0mm Gutter'
  },
  {
    id: 'specimen-03',
    title: 'Negative Space Diptych',
    provenance: 'Cotswolds Manor Conservatory',
    style: 'minimalist',
    aspect: 'square',
    chapter: 'vows',
    dimensions: '20" × 10" Open (10" × 10" Closed)',
    substrate: 'Fedrigoni Tintoretto Gesso Felt (540gsm)',
    description: 'Radical editorial austerity with 38% whitespace allocation. Focuses complete emotional resonance on the handwritten vow booklet and micro-expression exchange.',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_lgwaiMI4LLuyKu4K0pDLtYWhxFVVE1b5iBbQEdYMVWrsMbrOIr6VcQ7Ym1zJlrLJddg-xKDx3Gjdlq6rTCJv6zYaB6BjAsxHX6yrVTDPaDB417ZT3VVnwx3sqUUIL_GHYSBm2pZSdbBpl7nJl3qKiZrEBZ93DG4BY8xuYTjwSY8FY3uiUyed6_cNeDv0UfyktQNlBr2ZspvhiWR_0fIwzcJMN3tZta1TW6hw8XoV',
    alt: 'Minimalist double page spread with generous negative space and emotional vow portrait',
    colorGamut: 'Adobe RGB (1998)',
    safeMargin: '16mm Trim / 0.0mm Gutter'
  },
  {
    id: 'specimen-04',
    title: 'Full-Bleed Bridal Horizon',
    provenance: 'Villa Balbiano, Lake Como',
    style: 'panoramic',
    aspect: 'panoramic',
    chapter: 'prewedding',
    dimensions: '30" × 10" Open (15" × 10" Closed)',
    substrate: 'Fuji Crystal Archive Lustre (800gsm Rigid)',
    description: 'An edge-to-edge cinematic vista crossing the center gutter flawlessly without hairline crack or toner cracking. Calibrated cold-crease fold preservation.',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfuNZsIIT-TqAnH_gFsyF8oqf0lVTCv5BuaFUEHXqV5oObKe451Tqzr0rDwQFd5UFULSIuN1pqfUuZkBirOKsdO4jYeJ3ebzBJMgbYglRd6lnRGF2kYqwTWbWyU3nolCAKE_DybkYO4HSeasEgXFzkzcq15_6ekE3ofODHCvz0qARjgpCAp5z7pfQih9e9v3n17HYAEkJTKg40wohDDAxZM1WI8eU4fHMx3--7ZIZm',
    alt: 'Sweeping panoramic landscape photo across a layflat album spread without a seam cut',
    colorGamut: 'Fuji DPII Calibrated Noritsu',
    safeMargin: '3mm Bleed / 0.0mm Gutter'
  },
  {
    id: 'specimen-05',
    title: 'Sacred Ritual Geometry',
    provenance: 'Varanasi Ghats Mandap',
    style: 'palatial',
    aspect: 'landscape',
    chapter: 'ceremony',
    dimensions: '28" × 14" Open (14" × 14" Closed)',
    substrate: 'Mohawk Superfine Eggshell (620gsm)',
    description: 'Tri-column golden ratio alignment capturing sacred fire offerings, intricate saffron silk textures, and multi-generational blessings in perfect chromatic cohesion.',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsO00L-yzOzR1TQAd-dCZ70Y1CMBECaDBFmlXBm5m--4ipX4BoXIIEEsQN9QMrOfyobiSkliSMchimRaKvU_2oEHYljZfXEZN3mCNkZ7VQXR_SFd0rUjUt6Q2J1_VCzXpdfYFY-5v0RYCMoJxk4wqcAyXocDSwzex_t0QHTL-uaTwYANziFDAdWz01i5d2zP7F4TUeQYx8IqArb2GmXOpV4iDNGbfNuSYkly7X24mU',
    alt: 'Indian traditional ceremony spread with gold foil details and rich colors',
    colorGamut: 'Wide Gamut RGB 16-bit',
    safeMargin: '12mm Trim / 0.0mm Gutter'
  },
  {
    id: 'specimen-06',
    title: 'High-Fashion Prep Sequence',
    provenance: 'Mayfair Townhouse Atelier',
    style: 'editorial',
    aspect: 'square',
    chapter: 'prewedding',
    dimensions: '24" × 12" Open (12" × 12" Closed)',
    substrate: 'Hahnemühle Museum Etching (350gsm)',
    description: 'Vogue-inspired pacing featuring couture gown texture closeups, heirloom diamond earrings, and natural morning daylight window portraiture.',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD43u2DQE4evF-uo__Qv3P2mnIKzpXbZdYa7hX_VH62U9OwAm0SuvyZJA77YtcX8MNykJ8WISO6lI7-KCDcncVxd07v7D53yJhNVJGkafGKYLtuiR4F2UvFsWBzMOrn8tIxiVk80Jd49PUvGaC6zlqcT2pAgOhDNbWAPhuKo7apfTGeGEKP7TLLh35VWsztXK2FFNV4fDxfE7Yn5X--YHSXwXfVRhKvUcZmDY9vCn5c',
    alt: 'Bridal prep editorial layout with couture shoes, veil and intimate portrait',
    colorGamut: 'Adobe RGB (1998)',
    safeMargin: '15mm Trim / 0.0mm Gutter'
  },
  {
    id: 'specimen-07',
    title: 'Twilight Mandap Luminescence',
    provenance: 'The Oberoi Amarvilas, Agra',
    style: 'palatial',
    aspect: 'panoramic',
    chapter: 'reception',
    dimensions: '36" × 12" Open (18" × 12" Closed)',
    substrate: 'Fuji Crystal Archive Silk (600gsm)',
    description: 'Rich deep charcoal twilight with warm fairy lights and candle reflection on limestone pools. Zero tonal posterization in deep shadow gradients.',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbxEPt11rxOf77mDSKQxn7pG4wLkxNeV6MPOe0HLJqaTWj7cEsWmHDSbn6p1VxpVhLAQwLvKZAEPvVzHHpEXlExPhbtZdPS8tLeO9IukskhLAskz5VPnaUwVm_vcCc0eD7FwC8icVeiGXULpVYJWF2CAjiQXwhBpl6m-kVUqnRejwAvJBDLw0Ky7Vmy5V2enjXbrUclLH4nrs1vuF7lmiVaON9mIj6JCbDpE4XzIEQ',
    alt: 'Nocturnal reception spread with candlelit mandap and reflection pool',
    colorGamut: 'True Continuous Silver Halide',
    safeMargin: '12mm Trim / 0.0mm Gutter'
  },
  {
    id: 'specimen-08',
    title: 'First Dance Dramatic Triptych',
    provenance: 'St. Pancras Renaissance, London',
    style: 'minimalist',
    aspect: 'landscape',
    chapter: 'reception',
    dimensions: '24" × 12" Open (12" × 12" Closed)',
    substrate: 'Fuji Crystal Archive Lustre (600gsm)',
    description: 'Three kinetic frames capturing the dramatic ballroom dip under Victorian Gothic arched vaults. Precise mathematical spacing with centered optical weight.',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE90d52KOeaK1Xl-pi0I-fco42cUjPYaY0mlNQXApS7aviueBybUcW9JIU0rX5-sKcAWuRHYXqf6UV9HG9f6yylfL1hfjpxwsb5GBBONeCBDx32MHT5PdvVBWt_gkouUsfA3oP13bQYjMAQyCdBhuH724ffw573f8UVzaqxpSc4Oh2PEiZwF1fBW2JKg5y8sUqWAlO8kzGJgbJJrkzJKKe_pofxvT9YrnuSd57BQcb',
    alt: 'Dramatic wedding reception first dance triptych on open album spread',
    colorGamut: 'Adobe RGB 300 DPI',
    safeMargin: '12mm Trim / 0.0mm Gutter'
  }
];

export default function AlbumDesignsPage() {
  const [styleFilter, setStyleFilter] = useState('all');
  const [aspectFilter, setAspectFilter] = useState('all');
  const [chapterFilter, setChapterFilter] = useState('all');
  const [activeHotspot, setActiveHotspot] = useState('hotspot-gutter');
  const [activeSpecimenModal, setActiveSpecimenModal] = useState(null);
  const [blueprintMode, setBlueprintMode] = useState('layflat'); // 'layflat' or 'matted'

  // Filtered specimen list
  const filteredSpecimens = SPREAD_SPECIMENS.filter((item) => {
    if (styleFilter !== 'all' && item.style !== styleFilter) return false;
    if (aspectFilter !== 'all' && item.aspect !== aspectFilter) return false;
    if (chapterFilter !== 'all' && item.chapter !== chapterFilter) return false;
    return true;
  });



  return (
    <div className="w-full bg-[#FAF9F5] text-[#141310] font-sans">
      {/* 1. Context Breadcrumb Strip */}
      <section className="w-full bg-[#EFEEEA] border-b border-[#EAE6DF] py-4 px-5 md:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 text-[11px] uppercase tracking-[0.14em] font-semibold text-[#635E52]">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#141310] transition-colors">Home</Link>
            <ChevronRight size={12} className="text-[#CCC5BC]" />
            <Link to="/resources/catalog" className="hover:text-[#141310] transition-colors">Resources</Link>
            <ChevronRight size={12} className="text-[#CCC5BC]" />
            <span className="text-[#141310]">Album Designs &amp; Spread Architecture</span>
          </div>
          <div className="flex items-center gap-2 text-[#4A463F]">
            <span className="w-2 h-2 rounded-full bg-[#635E52]"></span>
            <span>Archival Spread Specifier // 0.0mm Center Crease Cleavage</span>
          </div>
        </div>
      </section>

      {/* 2. Page Masthead */}
      <section className="w-full py-16 md:py-20 px-5 md:px-16 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <RevealOnScroll direction="left" className="lg:col-span-8 space-y-4">
            <span className="font-semibold uppercase tracking-[0.25em] text-[#635E52] text-[11px] block">
              Curated Album Layout Architecture &amp; Spatial Grids
            </span>
            <TextReveal
              as="h1"
              delay={0.08}
              className="font-serif text-[38px] md:text-[54px] text-[#141310] font-normal leading-[1.08] tracking-tight"
            >
              Curated Album Designs &amp; Spread Architecture
            </TextReveal>
            <p className="text-[#4A463F] text-[16px] md:text-[18px] max-w-2xl leading-relaxed pt-2">
              Explore 140+ archived master spreads engineered with mathematical golden-ratio proportions, zero-interruption continuous gutters, and calibrated breathing room tailored for luxury wedding tomes.
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="right" className="lg:col-span-4 bg-[#F4F4F0] p-6 border border-[#EAE6DF] shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#EAE6DF] text-[11px] uppercase tracking-[0.14em] font-semibold">
              <span className="text-[#635E52]">Atelier Layout Metrics</span>
              <span className="text-[#141310]">2026 Archive</span>
            </div>
            <div className="space-y-1.5 text-[13px] text-[#4A463F]">
              <div className="flex justify-between">
                <span>Archived Layout Suites:</span>
                <span className="font-semibold text-[#141310]">142 Bespoke Archetypes</span>
              </div>
              <div className="flex justify-between">
                <span>Gutter Image Loss:</span>
                <span className="font-semibold text-[#141310]">0.0mm Continuous Crease</span>
              </div>
              <div className="flex justify-between">
                <span>Core Substrate Weight:</span>
                <span className="font-semibold text-[#141310]">600gsm Acid-Free Board</span>
              </div>
              <div className="flex justify-between">
                <span>Bleed Precision Tolerance:</span>
                <span className="font-semibold text-[#141310]">±0.25mm Laser Trim</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3. Interactive Spread Anatomy (The 36-Inch Continuous Panoramic Spread) */}
      <section className="w-full py-16 px-5 md:px-16 bg-[#F4F4F0] border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 gap-4">
            <div>
              <span className="font-semibold uppercase tracking-[0.2em] text-[#635E52] text-[11px] block mb-1">
                Spatial Engineering
              </span>
              <h2 className="font-serif text-[28px] md:text-[36px] text-[#141310]">
                Anatomy of a 36-Inch Continuous Panoramic Spread
              </h2>
            </div>
            <p className="text-[14px] text-[#4A463F] max-w-md">
              Hover over or select the architectural hotspots to examine how our master bookbinders resolve gutter cleavage, negative margin rhythm, and edge trimming.
            </p>
          </div>

          {/* Panoramic Spread Interactive Frame */}
          <div className="relative w-full aspect-[2.4/1] bg-[#141310] overflow-hidden shadow-2xl border border-[#CCC5BC]/40 group">
            {/* Background Spread Image */}
            <img
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&q=85"
              alt="Continuous panoramic wedding album spread laid flat with zero gutter cut"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            {/* Visual Guideline Overlays */}
            <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/40 pointer-events-none shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
            <div className="absolute inset-4 border border-dashed border-white/25 pointer-events-none"></div>

            {/* Hotspot 1: Negative Space Rhythm */}
            <button
              type="button"
              onClick={() => setActiveHotspot('hotspot-margins')}
              className={`absolute top-[22%] left-[16%] w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                activeHotspot === 'hotspot-margins'
                  ? 'bg-white text-[#141310] scale-125 shadow-lg ring-4 ring-white/40'
                  : 'bg-[#141310]/80 text-white hover:bg-white hover:text-[#141310]'
              }`}
              title="Negative Space Rhythm"
            >
              <span className="text-[12px] font-bold">1</span>
            </button>

            {/* Hotspot 2: Zero-Split Panoramic Flow */}
            <button
              type="button"
              onClick={() => setActiveHotspot('hotspot-gutter')}
              className={`absolute top-[48%] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                activeHotspot === 'hotspot-gutter'
                  ? 'bg-white text-[#141310] scale-125 shadow-lg ring-4 ring-white/40'
                  : 'bg-[#141310]/80 text-white hover:bg-white hover:text-[#141310]'
              }`}
              title="Zero-Split Panoramic Flow"
            >
              <span className="text-[12px] font-bold">2</span>
            </button>

            {/* Hotspot 3: 300 DPI Foil & Bleed Clearance */}
            <button
              type="button"
              onClick={() => setActiveHotspot('hotspot-trim')}
              className={`absolute bottom-[18%] right-[14%] w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                activeHotspot === 'hotspot-trim'
                  ? 'bg-white text-[#141310] scale-125 shadow-lg ring-4 ring-white/40'
                  : 'bg-[#141310]/80 text-white hover:bg-white hover:text-[#141310]'
              }`}
              title="Peripheral Bleed Safety"
            >
              <span className="text-[12px] font-bold">3</span>
            </button>

            {/* Bottom Floating Specimen Badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-[#141310]/80 backdrop-blur-md text-white px-5 py-2.5 text-[11px] uppercase tracking-[0.14em]">
              <span className="hidden sm:inline">Exemplar Specimen: 36" × 12" Open Sovereign Tome</span>
              <span className="text-[#EDE5DA]">Cold-Microcrease 180° Flat Spine</span>
              <span>Substrate: Fuji Crystal Silk</span>
            </div>
          </div>

          {/* Active Hotspot Deep Dive Card */}
          <div className="mt-6 bg-[#FAF9F5] p-6 md:p-8 border border-[#EAE6DF] shadow-sm">
            {activeHotspot === 'hotspot-margins' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-semibold text-[#635E52]">
                    <span className="w-5 h-5 rounded-full bg-[#141310] text-white flex items-center justify-center text-[10px]">1</span>
                    <span>Negative Space Rhythm &amp; Asymmetric Breathing Room</span>
                  </div>
                  <h4 className="font-serif text-[22px] text-[#141310]">24% Whitespace Allocation Prevents Visual Clutter</h4>
                  <p className="text-[14px] text-[#4A463F] leading-relaxed">
                    Rather than filling spreads corner-to-corner with repetitive shots, our layout formulas allocate deliberate negative borders (minimum 18mm to 35mm). This allows heroic portraits to command attention while echoing the spacious dignity of high-fashion monographs like Vogue and Harper’s Bazaar.
                  </p>
                </div>
                <div className="md:col-span-4 bg-[#EFEEEA] p-4 border border-[#EAE6DF] text-[12px] space-y-1.5 text-[#4A463F]">
                  <p className="font-semibold text-[#141310] uppercase text-[10px] tracking-wider">Golden Ratio Guideline:</p>
                  <p>• Outer margin: 24mm</p>
                  <p>• Inner gutter offset: 16mm</p>
                  <p>• Optical vertical center: +4% elevated</p>
                </div>
              </div>
            )}

            {activeHotspot === 'hotspot-gutter' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-semibold text-[#635E52]">
                    <span className="w-5 h-5 rounded-full bg-[#141310] text-white flex items-center justify-center text-[10px]">2</span>
                    <span>Zero-Split Panoramic Flow // Uninterrupted Horizon</span>
                  </div>
                  <h4 className="font-serif text-[22px] text-[#141310]">Single-Sheet Cold Microcreasing Eliminates Gutter Blindness</h4>
                  <p className="text-[14px] text-[#4A463F] leading-relaxed">
                    Standard glued book bindings cut photos in half or lose 10mm of subject matter inside the valley. Our continuous butterfly fold mounts back-to-back over rigid acid-free boards, allowing panoramic ceremony vows, grand cathedral vistas, and royal palace arches to run completely continuous with 0.0mm data loss.
                  </p>
                </div>
                <div className="md:col-span-4 bg-[#EFEEEA] p-4 border border-[#EAE6DF] text-[12px] space-y-1.5 text-[#4A463F]">
                  <p className="font-semibold text-[#141310] uppercase text-[10px] tracking-wider">Gutter Safety Rule:</p>
                  <p>• Faces safe across fold: Yes (0mm cut)</p>
                  <p>• Eye line recommendation: Keep 6mm clear of fold</p>
                  <p>• Spine structural lift: 180° true flat</p>
                </div>
              </div>
            )}

            {activeHotspot === 'hotspot-trim' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-semibold text-[#635E52]">
                    <span className="w-5 h-5 rounded-full bg-[#141310] text-white flex items-center justify-center text-[10px]">3</span>
                    <span>Guillotine Trim Line &amp; Safe Zone Architecture</span>
                  </div>
                  <h4 className="font-serif text-[22px] text-[#141310]">3mm Perimeter Bleed with 12mm Critical Content Inset</h4>
                  <p className="text-[14px] text-[#4A463F] leading-relaxed">
                    Our high-tonnage hydraulic guillotines cut through composite 600gsm book blocks with laser-guided optical sensors. To ensure names, wedding dates, or intimate hand gestures are never clipped during bevel trimming, all vital elements must respect the 12mm interior safe margin.
                  </p>
                </div>
                <div className="md:col-span-4 bg-[#EFEEEA] p-4 border border-[#EAE6DF] text-[12px] space-y-1.5 text-[#4A463F]">
                  <p className="font-semibold text-[#141310] uppercase text-[10px] tracking-wider">Pre-Press Standard:</p>
                  <p>• Document bleed: +3.0mm all 4 outer edges</p>
                  <p>• Text boundary: 12.0mm minimum inset</p>
                  <p>• Native Resolution: Strict 300 DPI</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Multi-Facet Filter Bar */}
      <section className="w-full py-8 px-5 md:px-16 bg-[#FAF9F5] border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto space-y-4">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-semibold text-[#635E52]">
            <SlidersHorizontal size={14} />
            <span>Filter Specimen Archive ({filteredSpecimens.length} Suites Shown)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            {/* Style Filter */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#635E52]">Design Style:</label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { key: 'all', label: 'All Styles' },
                  { key: 'minimalist', label: 'Minimalist' },
                  { key: 'palatial', label: 'Palatial' },
                  { key: 'editorial', label: 'Editorial' },
                  { key: 'panoramic', label: 'Panoramic' }
                ].map((s) => (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setStyleFilter(s.key)}
                    className={`px-3 py-1.5 text-[11px] uppercase tracking-wider font-semibold transition-colors ${
                      styleFilter === s.key
                        ? 'bg-[#141310] text-white'
                        : 'bg-[#EFEEEA] text-[#4A463F] hover:bg-[#E3E2DF]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Aspect Ratio Filter */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#635E52]">Aspect Ratio:</label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { key: 'all', label: 'All Formats' },
                  { key: 'panoramic', label: 'Panoramic (3:1)' },
                  { key: 'landscape', label: 'Landscape (2:1)' },
                  { key: 'square', label: 'Square (1:1)' }
                ].map((a) => (
                  <button
                    key={a.key}
                    type="button"
                    onClick={() => setAspectFilter(a.key)}
                    className={`px-3 py-1.5 text-[11px] uppercase tracking-wider font-semibold transition-colors ${
                      aspectFilter === a.key
                        ? 'bg-[#141310] text-white'
                        : 'bg-[#EFEEEA] text-[#4A463F] hover:bg-[#E3E2DF]'
                    }`}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Chapter Filter */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#635E52]">Wedding Chapter:</label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { key: 'all', label: 'All Chapters' },
                  { key: 'prewedding', label: 'Pre-Wedding' },
                  { key: 'ceremony', label: 'Ceremony' },
                  { key: 'vows', label: 'Vows' },
                  { key: 'reception', label: 'Reception' }
                ].map((c) => (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => setChapterFilter(c.key)}
                    className={`px-3 py-1.5 text-[11px] uppercase tracking-wider font-semibold transition-colors ${
                      chapterFilter === c.key
                        ? 'bg-[#141310] text-white'
                        : 'bg-[#EFEEEA] text-[#4A463F] hover:bg-[#E3E2DF]'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Master Spread Typology Archive (8 Cards) */}
      <section className="w-full py-16 px-5 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          {filteredSpecimens.length === 0 ? (
            <div className="bg-[#EFEEEA] p-12 text-center border border-[#EAE6DF] space-y-4">
              <p className="font-serif text-[22px] text-[#141310]">No specimens match this specific combination.</p>
              <button
                type="button"
                onClick={() => {
                  setStyleFilter('all');
                  setAspectFilter('all');
                  setChapterFilter('all');
                }}
                className="px-6 py-2.5 bg-[#141310] text-white uppercase text-[11px] tracking-widest font-semibold"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <StaggerBoxes
              direction="alternate"
              distance={48}
              stagger={0.12}
              duration={0.9}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
            >
              {filteredSpecimens.map((item) => (
                <TiltCard
                  key={item.id}
                  maxTilt={6}
                  scale={1.02}
                  glare={true}
                  className="h-full flex flex-col"
                >
                  <div
                    className="h-full bg-white border border-[#EAE6DF] hover:border-[#B99A69]/70 rounded-2xl p-6 shadow-sm hover:shadow-[0_16px_36px_-8px_rgba(185,154,105,0.2)] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                  >
                    <div className="space-y-4">
                      {/* Image Specimen Frame */}
                      <div className="relative aspect-[16/9] bg-[#141310] overflow-hidden rounded-xl">
                        <img
                          src={item.imgSrc}
                          alt={item.alt}
                          className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-3 left-3 flex gap-1.5">
                          <span className="bg-[#141310]/85 backdrop-blur-md text-white text-[10px] uppercase font-semibold px-2.5 py-1 tracking-wider rounded-sm">
                            {item.style}
                          </span>
                          <span className="bg-white/95 backdrop-blur-md text-[#141310] text-[10px] uppercase font-semibold px-2.5 py-1 tracking-wider rounded-sm">
                            {item.chapter}
                          </span>
                        </div>
                        <div className="absolute bottom-3 right-3">
                          <button
                            type="button"
                            onClick={() => setActiveSpecimenModal(item)}
                            className="w-8 h-8 rounded-full bg-white/95 hover:bg-white text-[#141310] flex items-center justify-center shadow-md transition-colors"
                            title="Inspect 1:1 Scale Proof"
                          >
                            <Maximize2 size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Metadata Header */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[11px] text-[#635E52] uppercase tracking-[0.14em]">
                          <span>{item.provenance}</span>
                          <span>{item.dimensions}</span>
                        </div>
                        <h3 className="font-serif text-[22px] text-[#141310] leading-snug group-hover:text-[#9E7D4B] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[13px] text-[#4A463F] leading-relaxed line-clamp-2 pt-1 font-normal">
                          {item.description}
                        </p>
                      </div>

                      {/* Technical Blueprint Specs */}
                      <div className="p-3.5 bg-[#F4F4F0] border border-[#EAE6DF] rounded-xl space-y-1.5 text-[11.5px] text-[#4A463F]">
                        <div className="flex justify-between">
                          <span className="text-[#635E52]">Substrate:</span>
                          <span className="font-medium text-[#141310]">{item.substrate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#635E52]">Gamut:</span>
                          <span className="font-medium text-[#141310]">{item.colorGamut}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#635E52]">Tolerance:</span>
                          <span className="font-medium text-[#141310]">{item.safeMargin}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="pt-5 mt-4 border-t border-[#EAE6DF] flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveSpecimenModal(item)}
                        className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] font-semibold text-[#141310] hover:text-[#9E7D4B] transition-colors"
                      >
                        <Eye size={14} />
                        <span>Inspect 1:1 Proof</span>
                      </button>

                      <Link
                        to={`/enquire?product=Album Designing&specimen=${encodeURIComponent(item.title)}`}
                        className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.14em] font-semibold text-[#9E7D4B] hover:text-[#141310] transition-colors"
                      >
                        <span>Commission Layout</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </StaggerBoxes>
          )}
        </div>
      </section>

      {/* 6. Technical Bleed & Safe Zone Architecture (Interactive Blueprint) */}
      <section className="w-full py-16 px-5 md:px-16 bg-[#EFEEEA] border-y border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-semibold uppercase tracking-[0.2em] text-[#635E52] text-[11px] block">
                Pre-Press Geometry
              </span>
              <h2 className="font-serif text-[28px] md:text-[38px] text-[#141310] leading-tight">
                Technical Bleed &amp; Safe Zone Architecture
              </h2>
              <p className="text-[14px] text-[#4A463F] leading-relaxed">
                Whether creating layouts in Adobe InDesign, Photoshop, or SmartAlbums, our binding protocol requires strict conformance to millimeter boundary definitions.
              </p>

              {/* Mode Switcher */}
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setBlueprintMode('layflat')}
                  className={`px-4 py-2 text-[11px] uppercase tracking-wider font-semibold transition-colors ${
                    blueprintMode === 'layflat'
                      ? 'bg-[#141310] text-white'
                      : 'bg-white text-[#4A463F] border border-[#CCC5BC]'
                  }`}
                >
                  Layflat Flush Mount Blueprint
                </button>
                <button
                  type="button"
                  onClick={() => setBlueprintMode('matted')}
                  className={`px-4 py-2 text-[11px] uppercase tracking-wider font-semibold transition-colors ${
                    blueprintMode === 'matted'
                      ? 'bg-[#141310] text-white'
                      : 'bg-white text-[#4A463F] border border-[#CCC5BC]'
                  }`}
                >
                  Matted Sovereign Blueprint
                </button>
              </div>

              {/* Blueprint Dimension Table */}
              <div className="bg-white p-5 border border-[#EAE6DF] space-y-2 text-[13px] text-[#4A463F] shadow-sm">
                <div className="flex justify-between py-1 border-b border-[#EAE6DF]">
                  <span className="font-medium text-[#141310]">Outer Bleed Perimeter:</span>
                  <span className="font-mono text-[#635E52]">+3.0mm (All 4 edges)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EAE6DF]">
                  <span className="font-medium text-[#141310]">Final Finished Trim Line:</span>
                  <span className="font-mono text-[#635E52]">0.0mm Actual Size</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EAE6DF]">
                  <span className="font-medium text-[#141310]">Critical Safe Margin:</span>
                  <span className="font-mono text-[#635E52]">12.0mm Inward Inset</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-medium text-[#141310]">Center Gutter Crease:</span>
                  <span className="font-mono text-[#635E52]">
                    {blueprintMode === 'layflat' ? '0.0mm (Continuous Fold)' : '8.0mm Hidden Binding Valley'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Blueprint Vector Schematic */}
            <div className="lg:col-span-7 bg-[#141310] p-8 text-white relative shadow-xl overflow-hidden border border-[#292824]">
              <div className="flex items-center justify-between pb-4 border-b border-white/15 text-[10px] font-mono tracking-widest text-[#EDE5DA]">
                <span>DIAGRAM: PRECISION CUTTING COORDINATES // SCALE 1:2.5</span>
                <span>TOLERANCE ±0.25MM</span>
              </div>

              {/* Vector SVG Blueprint */}
              <div className="py-6 flex justify-center">
                <svg viewBox="0 0 600 300" className="w-full max-w-[560px] h-auto text-white">
                  {/* Outer Bleed Box (Cyan dashed) */}
                  <rect
                    x="20"
                    y="20"
                    width="560"
                    height="260"
                    fill="none"
                    stroke="#DCE5DA"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <text x="30" y="36" fill="#DCE5DA" fontSize="9" fontFamily="monospace">
                    BLEED LINE (+3mm)
                  </text>

                  {/* Trim Cut Line (Solid White) */}
                  <rect
                    x="40"
                    y="40"
                    width="520"
                    height="220"
                    fill="none"
                    stroke="#FAF8F4"
                    strokeWidth="2"
                  />
                  <text x="50" y="56" fill="#FAF8F4" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    FINISHED TRIM LINE (0mm)
                  </text>

                  {/* Safe Zone (Blush/Gold dashed) */}
                  <rect
                    x="65"
                    y="65"
                    width="470"
                    height="170"
                    fill="#F3E4E1"
                    fillOpacity="0.06"
                    stroke="#F3E4E1"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  <text x="75" y="82" fill="#F3E4E1" fontSize="9" fontFamily="monospace">
                    CRITICAL SAFE ZONE (12mm INWARD)
                  </text>

                  {/* Center Gutter Line */}
                  <line
                    x1="300"
                    y1="20"
                    x2="300"
                    y2="280"
                    stroke="#EDE5DA"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                  />
                  <text x="306" y="150" fill="#EDE5DA" fontSize="9" fontFamily="monospace" transform="rotate(90 306 150)">
                    {blueprintMode === 'layflat' ? 'CENTER CREASE (0.0mm GAP)' : 'SEWN SPINE GUTTER'}
                  </text>

                  {/* Dimension Annotations */}
                  <line x1="20" y1="288" x2="40" y2="288" stroke="#DCE5DA" strokeWidth="1" />
                  <text x="24" y="296" fill="#DCE5DA" fontSize="8" fontFamily="monospace">3mm</text>
                  <line x1="40" y1="288" x2="65" y2="288" stroke="#F3E4E1" strokeWidth="1" />
                  <text x="47" y="296" fill="#F3E4E1" fontSize="8" fontFamily="monospace">12mm</text>
                </svg>
              </div>

              <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[11px] text-[#EDE5DA]/80">
                <span>Color Mode: Embedded Adobe RGB (1998) or sRGB</span>
                <span>ICC: Ultraa-DPII-Noritsu-2026.icc</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Master Templates & ICC Color Profiles Toolkit */}
      <section className="w-full py-16 px-5 md:px-16 bg-[#FAF9F5]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 gap-4">
            <div>
              <span className="font-semibold uppercase tracking-[0.2em] text-[#635E52] text-[11px] block mb-1">
                Studio Toolkit
              </span>
              <h2 className="font-serif text-[28px] md:text-[36px] text-[#141310]">
                Pre-Press Templates &amp; Soft-Proofing Profiles
              </h2>
            </div>
            <p className="text-[14px] text-[#4A463F] max-w-md">
              Download our verified grid presets for InDesign, Photoshop, and SmartAlbums alongside spectrophotometer-calibrated lab profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Toolkit Item 1 */}
            <div className="bg-[#F4F4F0] p-6 border border-[#EAE6DF] space-y-4 flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#141310] text-white flex items-center justify-center">
                  <Compass size={20} />
                </div>
                <h3 className="font-serif text-[20px] text-[#141310]">Adobe InDesign Master Grids</h3>
                <p className="text-[13px] text-[#4A463F] leading-relaxed">
                  Includes 18 standardized dimension templates (.INDT) from 8x8" to 18x12" with pre-configured 3mm bleed margins, master page folios, and golden-ratio guides.
                </p>
              </div>
              <button
                type="button"
                onClick={e => { window.location.href = studioEmail('Design toolkit request', {Request:e.currentTarget.textContent}); }}
                className="w-full py-3 bg-[#141310] text-white hover:bg-[#292824] transition-colors text-[11px] uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
              >
                <Download size={14} />
                <span>Request InDesign suite</span>
              </button>
            </div>

            {/* Toolkit Item 2 */}
            <div className="bg-[#F4F4F0] p-6 border border-[#EAE6DF] space-y-4 flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#141310] text-white flex items-center justify-center">
                  <Layers size={20} />
                </div>
                <h3 className="font-serif text-[20px] text-[#141310]">Calibrated ICC Color Profiles</h3>
                <p className="text-[13px] text-[#4A463F] leading-relaxed">
                  Spectrophotometer-generated profiles for Fuji DPII Silk, Hahnemühle Cotton Rag, and Mohawk Eggshell for Photoshop and Lightroom soft-proofing under D50 lighting.
                </p>
              </div>
              <button
                type="button"
                onClick={e => { window.location.href = studioEmail('Design toolkit request', {Request:e.currentTarget.textContent}); }}
                className="w-full py-3 bg-[#141310] text-white hover:bg-[#292824] transition-colors text-[11px] uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
              >
                <Download size={14} />
                <span>Request ICC package</span>
              </button>
            </div>

            {/* Toolkit Item 3 */}
            <div className="bg-[#F4F4F0] p-6 border border-[#EAE6DF] space-y-4 flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#141310] text-white flex items-center justify-center">
                  <FileCheck size={20} />
                </div>
                <h3 className="font-serif text-[20px] text-[#141310]">SmartAlbums Preset Presets</h3>
                <p className="text-[13px] text-[#4A463F] leading-relaxed">
                  One-click export preset for SmartAlbums and Fundy Designer matching our exact laser trim coordinates, split tolerances, and substrate wrap guidelines.
                </p>
              </div>
              <button
                type="button"
                onClick={e => { window.location.href = studioEmail('Design toolkit request', {Request:e.currentTarget.textContent}); }}
                className="w-full py-3 bg-[#141310] text-white hover:bg-[#292824] transition-colors text-[11px] uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
              >
                <Download size={14} />
                <span>Request software presets</span>
              </button>
            </div>
          </div>


        </div>
      </section>

      {/* 8. Bespoke Album Layout Service CTA Banner */}
      <section className="w-full py-16 px-5 md:px-16 bg-[#141310] text-white">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="font-semibold uppercase tracking-[0.2em] text-[#EDE5DA] text-[11px] block">
              Atelier Layout Design Studio
            </span>
            <h2 className="font-serif text-[32px] md:text-[42px] font-normal leading-tight text-white">
              Prefer Our Master Curators to Sequence Your Wedding Story?
            </h2>
            <p className="text-[15px] text-[#CDC6B7] leading-relaxed">
              Send your raw selects. Our in-house layout artists sequence 20 to 60 panoramic spreads with mathematical rhythm, submit private client proof links, and handle all pre-flight color proofs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/services/album-designing"
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#141310] hover:bg-[#EDE5DA] transition-colors text-[11px] uppercase tracking-widest font-semibold text-center"
            >
              Explore Design Service
            </Link>
            <Link
              to="/enquire?product=Album Designing"
              className="w-full sm:w-auto px-8 py-4 bg-[#292724] border border-[#CDC6B7]/30 text-white hover:bg-[#332421] transition-colors text-[11px] uppercase tracking-widest font-semibold text-center"
            >
              Request Layout Commission
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Interactive 1:1 Scale Proof Lightbox Modal */}
      {activeSpecimenModal && (
        <div className="fixed inset-0 z-50 bg-[#141310]/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn">
          <div className="bg-[#FAF9F5] w-full max-w-5xl max-h-[92vh] overflow-y-auto border border-[#CCC5BC] shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="p-6 border-b border-[#EAE6DF] flex items-center justify-between bg-[#F4F4F0]">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#635E52]">
                  1:1 Scale Spread Inspector // {activeSpecimenModal.style} • {activeSpecimenModal.chapter}
                </span>
                <h3 className="font-serif text-[24px] text-[#141310]">{activeSpecimenModal.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveSpecimenModal(null)}
                className="w-9 h-9 rounded-full bg-white hover:bg-[#EAE6DF] text-[#141310] flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Large Spread Frame */}
            <div className="p-6 md:p-8 bg-[#141310] flex items-center justify-center">
              <div className="relative w-full max-w-4xl aspect-[2.2/1] bg-black overflow-hidden shadow-2xl">
                <img
                  src={activeSpecimenModal.imgSrc}
                  alt={activeSpecimenModal.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/40 pointer-events-none"></div>
                <div className="absolute inset-3 border border-dashed border-white/25 pointer-events-none"></div>
                <div className="absolute bottom-3 left-3 bg-black/75 text-white px-3 py-1 text-[10px] uppercase font-mono tracking-wider">
                  Center Crease: 0.0mm Continuous
                </div>
              </div>
            </div>

            {/* Modal Specifications Matrix */}
            <div className="p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#F4F4F0] p-4 border border-[#EAE6DF] space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#635E52]">Provenance</span>
                  <p className="font-semibold text-[#141310] text-[14px]">{activeSpecimenModal.provenance}</p>
                  <p className="text-[12px] text-[#4A463F]">{activeSpecimenModal.dimensions}</p>
                </div>
                <div className="bg-[#F4F4F0] p-4 border border-[#EAE6DF] space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#635E52]">Substrate Standard</span>
                  <p className="font-semibold text-[#141310] text-[14px]">{activeSpecimenModal.substrate}</p>
                  <p className="text-[12px] text-[#4A463F]">100% Acid-Free Museum Core</p>
                </div>
                <div className="bg-[#F4F4F0] p-4 border border-[#EAE6DF] space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#635E52]">Color Specification</span>
                  <p className="font-semibold text-[#141310] text-[14px]">{activeSpecimenModal.colorGamut}</p>
                  <p className="text-[12px] text-[#4A463F]">{activeSpecimenModal.safeMargin}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-[18px] text-[#141310]">Curatorial Layout Treatise</h4>
                <p className="text-[14px] text-[#4A463F] leading-relaxed">
                  {activeSpecimenModal.description}
                </p>
              </div>

              {/* Modal Action Row */}
              <div className="pt-4 border-t border-[#EAE6DF] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[12px] text-[#635E52]">
                  Available as part of our Bespoke Album Layout Service or for self-service studio assembly.
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setActiveSpecimenModal(null)}
                    className="w-full sm:w-auto px-6 py-3 bg-[#EFEEEA] text-[#141310] hover:bg-[#E3E2DF] text-[11px] uppercase tracking-widest font-semibold transition-colors"
                  >
                    Close Inspector
                  </button>
                  <Link
                    to={`/enquire?product=Album Designing&specimen=${encodeURIComponent(activeSpecimenModal.title)}`}
                    onClick={() => setActiveSpecimenModal(null)}
                    className="w-full sm:w-auto px-6 py-3 bg-[#141310] text-white hover:bg-[#292824] text-[11px] uppercase tracking-widest font-semibold text-center transition-colors"
                  >
                    Commission This Spread Layout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
