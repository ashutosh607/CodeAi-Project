import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../../components/motion/RevealOnScroll';
import TextReveal from '../../components/motion/TextReveal';
import {
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const CASE_STUDIES = [
  {
    id: 'case-hedsor',
    title: 'The Hedsor House Grand Affair',
    location: 'Hedsor House, Buckinghamshire, UK',
    provenanceTag: 'british-stately',
    formatTag: 'sovereign',
    dimensions: '14" × 11" Landscape Open (28" × 11")',
    cover: 'Tuscan Full-Grain Vegetable-Tanned Leather in Cognac',
    foil: '24-Karat Genuine Gold Foil Monogram Hot-Stamped',
    paper: 'Fuji Crystal Archive DPII Silk (600gsm Core)',
    spreads: '64 Continuous Panoramic Spreads (128 Pages)',
    enclosure: 'Solid American Walnut Heirloom Presentation Chest',
    description: 'A stately English countryside wedding documented across 14 hours of torrential autumn weather. The couple requested an unapologetically weighty heirloom with gilded page edges and a leather cover that would acquire an amber patina over generations.',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsO00L-yzOzR1TQAd-dCZ70Y1CMBECaDBFmlXBm5m--4ipX4BoXIIEEsQN9QMrOfyobiSkliSMchimRaKvU_2oEHYljZfXEZN3mCNkZ7VQXR_SFd0rUjUt6Q2J1_VCzXpdfYFY-5v0RYCMoJxk4wqcAyXocDSwzex_t0QHTL-uaTwYANziFDAdWz01i5d2zP7F4TUeQYx8IqArb2GmXOpV4iDNGbfNuSYkly7X24mU',
    alt: 'Luxury leather bound wedding album on wooden table showing wedding photography',
    curingTime: '14 Days Bench + 48hr Pneumatic Press'
  },
  {
    id: 'case-udaipur',
    title: 'The Royal Lake Palace Nuptials',
    location: 'The Leela Palace, Udaipur, India',
    provenanceTag: 'indian-palatial',
    formatTag: 'flush-mount',
    dimensions: '18" × 12" Panoramic Open (36" × 12")',
    cover: 'Hand-Loomed Pure Raw Silk with Sculpted Brass Crest',
    foil: 'Sculpted CNC Copper Deboss Die & Burnished Gold Edges',
    paper: 'Hahnemühle Photo Rag 308gsm Archival Cotton',
    spreads: '82 Seamless Layflat Spreads (164 Pages)',
    enclosure: 'Archival Solander Clamshell in Royal Slate Buckram',
    description: 'A three-day palatial celebration comprising Baraat barge processions, sangeet fireworks over Lake Pichola, and an illuminated marble mandap. The massive 36-inch continuous spreads required 800gsm composite core boards to maintain rigid 180° horizontal poise.',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfuNZsIIT-TqAnH_gFsyF8oqf0lVTCv5BuaFUEHXqV5oObKe451Tqzr0rDwQFd5UFULSIuN1pqfUuZkBirOKsdO4jYeJ3ebzBJMgbYglRd6lnRGF2kYqwTWbWyU3nolCAKE_DybkYO4HSeasEgXFzkzcq15_6ekE3ofODHCvz0qARjgpCAp5z7pfQih9e9v3n17HYAEkJTKg40wohDDAxZM1WI8eU4fHMx3--7ZIZm',
    alt: 'Handmade luxury wedding photo album open displaying royal Indian wedding',
    curingTime: '18 Days Bench + Custom Die Milling'
  },
  {
    id: 'case-como',
    title: 'Villa Balbiano Intimate Vows',
    location: 'Villa Balbiano, Lake Como, Italy',
    provenanceTag: 'italian-lakes',
    formatTag: 'flush-mount',
    dimensions: '12" × 12" Square Open (24" × 12")',
    cover: 'Olive Green Tuscan Vegetal Calfskin with Blind Debossing',
    foil: 'Blind Deboss (Deep Tactile Shadow Without Pigment)',
    paper: 'Fuji Crystal Archive Lustre (Continuous Tone)',
    spreads: '48 Panoramic Spreads (96 Pages)',
    enclosure: 'Handcrafted Belgian Linen Slipcase with Satin Ribbon',
    description: 'An ethereal editorial destination celebration set against Lake Como cypress groves and 17th-century frescoes. The minimalist square format pairs restrained negative-space typography with panoramic boat arrivals.',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_lgwaiMI4LLuyKu4K0pDLtYWhxFVVE1b5iBbQEdYMVWrsMbrOIr6VcQ7Ym1zJlrLJddg-xKDx3Gjdlq6rTCJv6zYaB6BjAsxHX6yrVTDPaDB417ZT3VVnwx3sqUUIL_GHYSBm2pZSdbBpl7nJl3qKiZrEBZ93DG4BY8xuYTjwSY8FY3uiUyed6_cNeDv0UfyktQNlBr2ZspvhiWR_0fIwzcJMN3tZta1TW6hw8XoV',
    alt: 'Fine art destination wedding album open with clean layout and seamless center fold',
    curingTime: '12 Days Bench + Cold Crease Press'
  },
  {
    id: 'case-mayfair',
    title: 'The Mayfair Penthouse Contemporary Union',
    location: 'Connaught & Mayfair Loft, London, UK',
    provenanceTag: 'mayfair-editorial',
    formatTag: 'photo-book',
    dimensions: '10" × 10" Square Open (20" × 10")',
    cover: 'Oatmeal Belgian Raw Flax Linen with Acrylic Cameo Inset',
    foil: 'Matte Champagne Foil Stamping',
    paper: 'Mohawk Superfine Eggshell Archival Text (280gsm)',
    spreads: '40 Continuous Spreads (80 Pages)',
    enclosure: 'Archival Magnetic Presentation Box with Embossed Monogram',
    description: 'A chic black-tie evening celebration in Central London. High-grain 35mm film scans printed with exquisite organic tooth on felt-textured archival paper, bound in lightweight contemporary monograph architecture.',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE90d52KOeaK1Xl-pi0I-fco42cUjPYaY0mlNQXApS7aviueBybUcW9JIU0rX5-sKcAWuRHYXqf6UV9HG9f6yylfL1hfjpxwsb5GBBONeCBDx32MHT5PdvVBWt_gkouUsfA3oP13bQYjMAQyCdBhuH724ffw573f8UVzaqxpSc4Oh2PEiZwF1fBW2JKg5y8sUqWAlO8kzGJgbJJrkzJKKe_pofxvT9YrnuSd57BQcb',
    alt: 'Linen album box with open contemporary wedding book and couple consultation',
    curingTime: '10 Days Bench + Precision Laser Edge'
  }
];

export default function WeddingPhotoAlbumsPage() {
  const [provenanceFilter, setProvenanceFilter] = useState('all');
  const [formatFilter, setFormatFilter] = useState('all');

  // Configurator state for Bespoke Album Commission Builder
  const [builderArchetype, setBuilderArchetype] = useState('Flush Mount Sovereign');
  const [builderDimension, setBuilderDimension] = useState('14" × 11" Landscape');
  const [builderTextile, setBuilderTextile] = useState('Tuscan Full-Grain Leather (Cognac)');
  const [builderPersonalization, setBuilderPersonalization] = useState('24K Genuine Gold Foil Stamping');
  const [builderEnclosure, setBuilderEnclosure] = useState('Solid American Walnut Chest');
  const [builderSpreads, setBuilderSpreads] = useState('40 Spreads (80 Pages)');

  const filteredCases = CASE_STUDIES.filter((c) => {
    if (provenanceFilter !== 'all' && c.provenanceTag !== provenanceFilter) return false;
    if (formatFilter !== 'all' && c.formatTag !== formatFilter) return false;
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
            <span className="text-[#141310]">Wedding Photo Albums Heirloom Archive</span>
          </div>
          <div className="flex items-center gap-2 text-[#4A463F]">
            <span className="w-2 h-2 rounded-full bg-[#635E52]"></span>
            <span>Heirloom Volume Archive // Continuous Silver Halide Emulsion</span>
          </div>
        </div>
      </section>

      {/* 2. Editorial Masthead & Global Archival Metrics */}
      <section className="w-full py-16 md:py-20 px-5 md:px-16 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <RevealOnScroll direction="left" className="lg:col-span-8 space-y-4">
            <span className="font-semibold uppercase tracking-[0.25em] text-[#635E52] text-[11px] block">
              Hand-Bound Physical Heirlooms for Discerning Studios
            </span>
            <TextReveal
              as="h1"
              delay={0.08}
              className="font-serif text-[38px] md:text-[56px] text-[#141310] font-normal leading-[1.06] tracking-tight"
            >
              Wedding Photo Albums That Outlast Fleeting Digital Screens
            </TextReveal>
            <p className="text-[#4A463F] text-[16px] md:text-[18px] max-w-2xl leading-relaxed pt-2">
              A wedding photograph was never intended to live trapped behind glass pixels. We engineer archival tomes using authentic wet-process silver halide printing, hand-sewn spines, and vegetable-tanned Tuscan hides meant to be held by great-grandchildren.
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="right" className="lg:col-span-4 bg-[#F4F4F0] p-6 border border-[#EAE6DF] shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DF] text-[11px] uppercase tracking-[0.14em] font-semibold">
              <span className="text-[#635E52]">Proven Archival Lineage</span>
              <span className="text-[#141310]">Atelier Verification</span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-white border border-[#EAE6DF]">
                <p className="font-serif text-[24px] text-[#141310]">3,400+</p>
                <p className="text-[10px] uppercase font-semibold text-[#635E52] tracking-wider mt-1">Heirlooms Bound</p>
              </div>
              <div className="p-3 bg-white border border-[#EAE6DF]">
                <p className="font-serif text-[24px] text-[#141310]">38</p>
                <p className="text-[10px] uppercase font-semibold text-[#635E52] tracking-wider mt-1">Territories</p>
              </div>
              <div className="p-3 bg-white border border-[#EAE6DF]">
                <p className="font-serif text-[24px] text-[#141310]">100%</p>
                <p className="text-[10px] uppercase font-semibold text-[#635E52] tracking-wider mt-1">Layflat Purity</p>
              </div>
            </div>
            <p className="text-[11px] text-[#635E52] leading-normal pt-1">
              Manufactured under strict ISO 18924 longevity standards in our Mumbai atelier with direct air transit to the UK, EU, UAE, and US.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3. Exemplar Showcase: The Monolithic Sovereign Tome */}
      <section className="w-full py-16 px-5 md:px-16 bg-[#F4F4F0] border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-white border border-[#EAE6DF] shadow-lg grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
            <div className="lg:col-span-7 relative aspect-[16/11] lg:aspect-auto bg-[#141310] overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD43u2DQE4evF-uo__Qv3P2mnIKzpXbZdYa7hX_VH62U9OwAm0SuvyZJA77YtcX8MNykJ8WISO6lI7-KCDcncVxd07v7D53yJhNVJGkafGKYLtuiR4F2UvFsWBzMOrn8tIxiVk80Jd49PUvGaC6zlqcT2pAgOhDNbWAPhuKo7apfTGeGEKP7TLLh35VWsztXK2FFNV4fDxfE7Yn5X--YHSXwXfVRhKvUcZmDY9vCn5c"
                alt="Open 18x12 Sovereign Wedding Album lying flat on studio table"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#141310]/85 text-white px-3 py-1.5 text-[10px] uppercase font-semibold tracking-widest">
                Archetype Specimen 01
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#141310]/80 backdrop-blur-sm text-white px-4 py-2 flex items-center justify-between text-[11px] uppercase tracking-wider">
                <span>The Monolithic Sovereign Flush Mount</span>
                <span className="text-[#EDE5DA]">180° Flat Binding • Zero Split</span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between space-y-6 bg-[#FAF9F5]">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-semibold text-[#635E52]">
                  <Sparkles size={14} />
                  <span>The Benchmark in Wedding Bookbinding</span>
                </div>
                <h2 className="font-serif text-[30px] md:text-[36px] text-[#141310] leading-tight">
                  Hand-Bound with 1.2mm Rigid Core Museum Substrates
                </h2>
                <p className="text-[14px] text-[#4A463F] leading-relaxed">
                  Unlike lightweight press photo books where pages curl under humidity, our Sovereign flush-mount volumes fuse photographic sheets back-to-back over heavy 600gsm archival board cores. Pages remain permanently planar, turn with substantial tactile dignity, and never warp in damp coastal air.
                </p>

                <div className="space-y-2 pt-2 text-[13px] text-[#4A463F]">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-[#635E52]" />
                    <span>Real C-Type Silver Halide photographic exposure on Fuji Crystal Archive</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-[#635E52]" />
                    <span>Cold-microcreased continuous gutter with zero white split lines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-[#635E52]" />
                    <span>Hand-burnished 24K genuine gold, silver, or charcoal edge gilding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-[#635E52]" />
                    <span>Enclosed in bespoke velvet-lined hardwood presentation chests</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#EAE6DF] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-[#635E52] tracking-wider block">Standard Turnaround</span>
                  <span className="font-semibold text-[#141310] text-[14px]">14 Business Days bench time</span>
                </div>
                <Link
                  to="/products/flush-mount-albums"
                  className="px-6 py-3 bg-[#141310] text-white hover:bg-[#292824] transition-colors text-[11px] uppercase tracking-widest font-semibold"
                >
                  Explore Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Filter Bar & 4 Master Case Studies */}
      <section className="w-full py-16 px-5 md:px-16">
        <div className="max-w-[1440px] mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#EAE6DF] gap-4">
            <div>
              <span className="font-semibold uppercase tracking-[0.2em] text-[#635E52] text-[11px] block mb-1">
                Real Wedding Commissions
              </span>
              <h2 className="font-serif text-[28px] md:text-[38px] text-[#141310]">
                Four Master Case Studies &amp; Specification Dossiers
              </h2>
            </div>
            <p className="text-[14px] text-[#4A463F] max-w-md">
              Review real specifications delivered to international photography studios, detailing dimensions, page substrates, cover dyes, and custom hot-stamp dies.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#635E52] mr-2">Provenance:</span>
              {[
                { key: 'all', label: 'All Celebrations' },
                { key: 'british-stately', label: 'British Stately' },
                { key: 'indian-palatial', label: 'Indian Palatial' },
                { key: 'italian-lakes', label: 'Italian Lakes' },
                { key: 'mayfair-editorial', label: 'Mayfair Editorial' }
              ].map((p) => (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => setProvenanceFilter(p.key)}
                  className={`px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-semibold transition-colors ${
                    provenanceFilter === p.key
                      ? 'bg-[#141310] text-white'
                      : 'bg-[#EFEEEA] text-[#4A463F] hover:bg-[#E3E2DF]'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#635E52] mr-2">Format:</span>
              {[
                { key: 'all', label: 'All Formats' },
                { key: 'sovereign', label: 'Sovereign Tome' },
                { key: 'flush-mount', label: 'Flush Mount' },
                { key: 'photo-book', label: 'Editorial Book' }
              ].map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFormatFilter(f.key)}
                  className={`px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-semibold transition-colors ${
                    formatFilter === f.key
                      ? 'bg-[#141310] text-white'
                      : 'bg-[#EFEEEA] text-[#4A463F] hover:bg-[#E3E2DF]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {filteredCases.map((study) => (
              <div
                key={study.id}
                className="bg-white border border-[#EAE6DF] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-[#141310] overflow-hidden">
                    <img
                      src={study.imgSrc}
                      alt={study.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-[#141310]/85 text-white text-[10px] uppercase font-semibold px-2.5 py-1 tracking-wider">
                      {study.location}
                    </div>
                  </div>

                  <div className="p-6 md:p-8 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#635E52]">
                        Commission Specimen // {study.dimensions}
                      </span>
                      <h3 className="font-serif text-[24px] text-[#141310] leading-snug group-hover:text-[#635E52] transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-[13px] text-[#4A463F] leading-relaxed pt-1">
                        {study.description}
                      </p>
                    </div>

                    {/* Specification Dossier Matrix */}
                    <div className="bg-[#F4F4F0] p-4 border border-[#EAE6DF] space-y-2 text-[12px] text-[#4A463F]">
                      <div className="flex justify-between py-1 border-b border-[#EAE6DF]/60">
                        <span className="text-[#635E52]">Cover Textile:</span>
                        <span className="font-medium text-[#141310] text-right">{study.cover}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#EAE6DF]/60">
                        <span className="text-[#635E52]">Personalization:</span>
                        <span className="font-medium text-[#141310] text-right">{study.foil}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#EAE6DF]/60">
                        <span className="text-[#635E52]">Photographic Substrate:</span>
                        <span className="font-medium text-[#141310] text-right">{study.paper}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#EAE6DF]/60">
                        <span className="text-[#635E52]">Spreads &amp; Pages:</span>
                        <span className="font-medium text-[#141310] text-right">{study.spreads}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-[#635E52]">Enclosure Box:</span>
                        <span className="font-medium text-[#141310] text-right">{study.enclosure}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 pt-0 flex items-center justify-between border-t border-[#EAE6DF]">
                  <span className="text-[11px] text-[#635E52] font-mono">{study.curingTime}</span>
                  <Link
                    to={`/enquire?product=Flush Mount Album&case=${encodeURIComponent(study.title)}`}
                    className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-semibold text-[#141310] hover:text-[#635E52] transition-colors"
                  >
                    <span>Request Similar Commission</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Heirloom Construction Comparison Matrix */}
      <section className="w-full py-16 px-5 md:px-16 bg-[#EFEEEA] border-y border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="pb-8 space-y-2">
            <span className="font-semibold uppercase tracking-[0.2em] text-[#635E52] text-[11px] block">
              Architectural Lineup
            </span>
            <h2 className="font-serif text-[28px] md:text-[38px] text-[#141310]">
              Heirloom Construction Comparison
            </h2>
            <p className="text-[14px] text-[#4A463F] max-w-xl">
              Understanding the mechanical and archival distinctions between our flagship album binding methods.
            </p>
          </div>

          <div className="overflow-x-auto shadow-sm">
            <table className="w-full text-left border-collapse bg-white border border-[#EAE6DF] text-[13px]">
              <thead>
                <tr className="bg-[#141310] text-white text-[11px] uppercase tracking-wider">
                  <th className="p-4 font-semibold">Specification</th>
                  <th className="p-4 font-semibold">Flush Mount Master</th>
                  <th className="p-4 font-semibold">Sovereign Heirloom</th>
                  <th className="p-4 font-semibold">Editorial Photo Book</th>
                  <th className="p-4 font-semibold">Slip-In Matted Folio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE6DF] text-[#4A463F]">
                <tr>
                  <td className="p-4 font-semibold text-[#141310] bg-[#FAF9F5]">Spine Engineering</td>
                  <td className="p-4">180° Layflat, cold-microcreased</td>
                  <td className="p-4">Reinforced leather split spine</td>
                  <td className="p-4">Sewn section, flexible spine</td>
                  <td className="p-4">Individual slip-in mats</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#141310] bg-[#FAF9F5]">Core Substrate</td>
                  <td className="p-4">600gsm Acid-free board</td>
                  <td className="p-4">800gsm High-density composite</td>
                  <td className="p-4">280gsm Flexible art card</td>
                  <td className="p-4">1000gsm Bevelled matboard</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#141310] bg-[#FAF9F5]">Center Gutter Split</td>
                  <td className="p-4 font-medium text-[#141310]">0.0mm (Zero image loss)</td>
                  <td className="p-4 font-medium text-[#141310]">0.0mm (Continuous panoramic)</td>
                  <td className="p-4">1.5mm flexible valley</td>
                  <td className="p-4">Separate individual leaves</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#141310] bg-[#FAF9F5]">Max Page Capacity</td>
                  <td className="p-4">80 Pages (40 Spreads)</td>
                  <td className="p-4">120 Pages (60 Spreads)</td>
                  <td className="p-4">160 Pages (80 Spreads)</td>
                  <td className="p-4">30 Mats (60 Photos)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#141310] bg-[#FAF9F5]">Printing Technology</td>
                  <td className="p-4">True C-Type Silver Halide</td>
                  <td className="p-4">Silver Halide or Cotton Giclée</td>
                  <td className="p-4">Archival Indigo Press</td>
                  <td className="p-4">Fine Art Pigment Prints</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#141310] bg-[#FAF9F5]">Bench Time</td>
                  <td className="p-4">10–12 Business Days</td>
                  <td className="p-4">14–18 Business Days</td>
                  <td className="p-4">7–10 Business Days</td>
                  <td className="p-4">10–12 Business Days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Interactive Bespoke Album Commission Builder */}
      <section className="w-full py-16 px-5 md:px-16 bg-[#FAF9F5]">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-white border border-[#EAE6DF] p-8 md:p-14 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Configurator Controls */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="font-semibold uppercase tracking-[0.2em] text-[#635E52] text-[11px] block">
                    Interactive Specifier
                  </span>
                  <h2 className="font-serif text-[28px] md:text-[36px] text-[#141310] mt-1">
                    Bespoke Album Commission Builder
                  </h2>
                  <p className="text-[14px] text-[#4A463F] mt-2">
                    Configure your dream volume specifications below. Once satisfied, transfer this configuration directly into our studio liaison consultation desk.
                  </p>
                </div>

                {/* 1. Archetype */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#635E52] block">
                    1. Volume Archetype:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Flush Mount Sovereign', 'Layflat Monograph', 'Matted Intaglio Folio'].map((arch) => (
                      <button
                        key={arch}
                        type="button"
                        onClick={() => setBuilderArchetype(arch)}
                        className={`p-3 text-[12px] font-medium border text-left transition-colors ${
                          builderArchetype === arch
                            ? 'bg-[#141310] text-white border-[#141310]'
                            : 'bg-[#F4F4F0] text-[#141310] border-[#EAE6DF] hover:bg-[#E3E2DF]'
                        }`}
                      >
                        {arch}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Dimensions */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#635E52] block">
                    2. Dimensions (Closed Format):
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {['12" × 12" Square', '14" × 11" Landscape', '16" × 12" Grand', '18" × 12" Sovereign'].map((dim) => (
                      <button
                        key={dim}
                        type="button"
                        onClick={() => setBuilderDimension(dim)}
                        className={`p-3 text-[11px] font-medium border text-center transition-colors ${
                          builderDimension === dim
                            ? 'bg-[#141310] text-white border-[#141310]'
                            : 'bg-[#F4F4F0] text-[#141310] border-[#EAE6DF] hover:bg-[#E3E2DF]'
                        }`}
                      >
                        {dim}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Cover Textile */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#635E52] block">
                    3. Cover Material &amp; Provenance:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Tuscan Full-Grain Leather (Cognac)',
                      'Tuscan Vegetal Calfskin (Olive)',
                      'Belgian Oatmeal Raw Linen',
                      'Hand-Loomed Japanese Raw Silk'
                    ].map((mat) => (
                      <button
                        key={mat}
                        type="button"
                        onClick={() => setBuilderTextile(mat)}
                        className={`p-3 text-[12px] font-medium border text-left transition-colors ${
                          builderTextile === mat
                            ? 'bg-[#141310] text-white border-[#141310]'
                            : 'bg-[#F4F4F0] text-[#141310] border-[#EAE6DF] hover:bg-[#E3E2DF]'
                        }`}
                      >
                        {mat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Personalization */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#635E52] block">
                    4. Cover Personalization:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      'Blind Debossing (No Foil)',
                      '24K Genuine Gold Foil Stamping',
                      'Sculpted Brass Family Crest'
                    ].map((per) => (
                      <button
                        key={per}
                        type="button"
                        onClick={() => setBuilderPersonalization(per)}
                        className={`p-3 text-[11px] font-medium border text-left transition-colors ${
                          builderPersonalization === per
                            ? 'bg-[#141310] text-white border-[#141310]'
                            : 'bg-[#F4F4F0] text-[#141310] border-[#EAE6DF] hover:bg-[#E3E2DF]'
                        }`}
                      >
                        {per}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 5. Enclosure Box */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#635E52] block">
                    5. Heirloom Presentation Enclosure:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      'Solid American Walnut Chest',
                      'Archival Solander Clamshell',
                      'Belgian Linen Slipcase'
                    ].map((enc) => (
                      <button
                        key={enc}
                        type="button"
                        onClick={() => setBuilderEnclosure(enc)}
                        className={`p-3 text-[11px] font-medium border text-left transition-colors ${
                          builderEnclosure === enc
                            ? 'bg-[#141310] text-white border-[#141310]'
                            : 'bg-[#F4F4F0] text-[#141310] border-[#EAE6DF] hover:bg-[#E3E2DF]'
                        }`}
                      >
                        {enc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 6. Spreads Count */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#635E52] block">
                    6. Spreads Volume:
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {['20 Spreads (40 Pages)', '30 Spreads (60 Pages)', '40 Spreads (80 Pages)', '50+ Spreads (100+ Pages)'].map((spr) => (
                      <button
                        key={spr}
                        type="button"
                        onClick={() => setBuilderSpreads(spr)}
                        className={`p-3 text-[11px] font-medium border text-center transition-colors ${
                          builderSpreads === spr
                            ? 'bg-[#141310] text-white border-[#141310]'
                            : 'bg-[#F4F4F0] text-[#141310] border-[#EAE6DF] hover:bg-[#E3E2DF]'
                        }`}
                      >
                        {spr}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Summary Dossier Card */}
              <div className="lg:col-span-5 bg-[#F4F4F0] p-8 border border-[#EAE6DF] flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#CCC5BC] text-[11px] uppercase tracking-[0.14em] font-semibold">
                    <span className="text-[#635E52]">Live Atelier Dossier</span>
                    <span className="text-[#141310]">Ref: UA-2026-SPEC</span>
                  </div>

                  <h3 className="font-serif text-[24px] text-[#141310]">
                    Configured Specimen Dossier
                  </h3>

                  <div className="space-y-2.5 text-[13px] text-[#4A463F]">
                    <div className="flex justify-between py-1 border-b border-[#EAE6DF]">
                      <span className="text-[#635E52]">Archetype:</span>
                      <span className="font-semibold text-[#141310]">{builderArchetype}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#EAE6DF]">
                      <span className="text-[#635E52]">Dimensions:</span>
                      <span className="font-semibold text-[#141310]">{builderDimension}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#EAE6DF]">
                      <span className="text-[#635E52]">Cover:</span>
                      <span className="font-semibold text-[#141310] text-right">{builderTextile}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#EAE6DF]">
                      <span className="text-[#635E52]">Personalization:</span>
                      <span className="font-semibold text-[#141310] text-right">{builderPersonalization}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#EAE6DF]">
                      <span className="text-[#635E52]">Enclosure:</span>
                      <span className="font-semibold text-[#141310] text-right">{builderEnclosure}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#635E52]">Spreads:</span>
                      <span className="font-semibold text-[#141310]">{builderSpreads}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-[#EAE6DF] space-y-1 text-[12px] text-[#635E52]">
                    <p className="font-semibold text-[#141310] uppercase text-[10px] tracking-wider">Atelier Warranty Guarantee:</p>
                    <p>• 100% Acid-Free Museum Certification</p>
                    <p>• DDP Delivered Duty Paid Global Air Freight</p>
                    <p>• Guaranteed Lifetime Delamination Protection</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#CCC5BC] space-y-3">
                  <Link
                    to={`/enquire?product=Flush Mount Album&archetype=${encodeURIComponent(builderArchetype)}&dim=${encodeURIComponent(builderDimension)}&mat=${encodeURIComponent(builderTextile)}&finish=${encodeURIComponent(builderPersonalization)}&spreads=${encodeURIComponent(builderSpreads)}&box=${encodeURIComponent(builderEnclosure)}`}
                    className="w-full py-4 bg-[#141310] text-white hover:bg-[#292824] transition-colors text-[11px] uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
                  >
                    <span>Transfer Specification to Studio Dossier</span>
                    <ArrowRight size={14} />
                  </Link>
                  <p className="text-[11px] text-center text-[#635E52]">
                    Our Mumbai or London concierge contacts you within 2 business hours with quote confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom Concierge Help Desk Banner */}
      <section className="w-full py-16 px-5 md:px-16 bg-[#141310] text-white">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="font-semibold uppercase tracking-[0.2em] text-[#EDE5DA] text-[11px] block">
              Consult With Our Master Bookbinders
            </span>
            <h3 className="font-serif text-[28px] md:text-[36px] font-normal text-white">
              Planning an Oversized Royal Volume or Multi-Book Parent Suite?
            </h3>
            <p className="text-[14px] text-[#CDC6B7]">
              Speak directly with our technical team in Mumbai or our London liaison for custom brass stamping dies, bespoke leather tanning, and tiered parent book discounts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/enquire?product=Flush Mount Album"
              className="px-8 py-4 bg-white text-[#141310] hover:bg-[#EDE5DA] transition-colors text-[11px] uppercase tracking-widest font-semibold text-center"
            >
              Enquire Now
            </Link>
            <a
              href="https://wa.me/919322254315"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#292724] border border-[#CDC6B7]/30 text-white hover:bg-[#332421] transition-colors text-[11px] uppercase tracking-widest font-semibold text-center"
            >
              WhatsApp Concierge
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
