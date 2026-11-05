import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../../components/motion/RevealOnScroll';
import TextReveal from '../../components/motion/TextReveal';
import {
  ChevronRight,
  Download,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Lock,
  Phone,
  MessageCircle,
  Quote
} from 'lucide-react';

const CATALOG_SPREADS = [
  {
    page: 'Spread 02 / 42',
    title: 'Chapter 01: Flush Mount Master Archetype',
    desc: 'Seamless 1.2mm Archival Substrate Core',
    imgSrc: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&q=85',
    alt: 'Editorial spread of bespoke luxury album displaying panoramic landscape wedding photograph over seamless binding with zero gutter obstruction'
  },
  {
    page: 'Spread 04 / 42',
    title: 'Chapter 02: Hahnemühle Photo Rag 308gsm',
    desc: 'Micro-textured Archival Cotton Rag Emulsion',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD43u2DQE4evF-uo__Qv3P2mnIKzpXbZdYa7hX_VH62U9OwAm0SuvyZJA77YtcX8MNykJ8WISO6lI7-KCDcncVxd07v7D53yJhNVJGkafGKYLtuiR4F2UvFsWBzMOrn8tIxiVk80Jd49PUvGaC6zlqcT2pAgOhDNbWAPhuKo7apfTGeGEKP7TLLh35VWsztXK2FFNV4fDxfE7Yn5X--YHSXwXfVRhKvUcZmDY9vCn5c',
    alt: 'Open double-page panoramic photographic spread of an ultra-luxury wedding album lying flat with zero center crease'
  },
  {
    page: 'Spread 12 / 42',
    title: 'Chapter 03: Italian Tuscan Vegetal Tanned Leather',
    desc: 'Hand-burnished Patina Range & Saddle Stitches',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-ZJn-udQyqZmOHMwO5FrEklJ0kyUJQ6XuJHCHFU3JtUUH7f4XjDFdg_Rccb5INRateJcVSPQWo3TtNhuhgC9i1nww-9wvlFwPIbxouTm94RQlP_HGTvv0Ib6aHEpfU7oKIRFQZlVG3qchNPdk9_JgVlg_9ZuXxuhChBSBE1eDUk7dqzz1PvGV6--XNEqSpfjYIJNeAf2u4NJQz12Q_LrN6dIalU_XFKv1LR1V9XwG',
    alt: 'Close up view of luxury bookbinding showing full grain Italian leather book cover with gold foil debossing'
  },
  {
    page: 'Spread 28 / 42',
    title: 'Chapter 04: American Walnut Presentation Chest',
    desc: 'Precision Dovetail Joinery & Velvet Lining',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFKWCZE3M6BCnC5hFskUu2hGZRFDqrGSAhpE4j3NKsdvlYe1Sp4GIzHANniiV474mnl1rONlcUWeEu5O8Qk8y4S5SrwYYtEbEnJjMitbQXv7iP_kjF8C_RcF7K2nOZIBxYjGPxrGFweG42nfNLiPUJbk2s088qGyxPPSrhCs-rU0_dxBtrdWEOVw_Mee1yfVCBOxzwQBUT24boO0fos3lE3hbgNTIDzQT425H1XGYZ',
    alt: 'Solid American walnut album box with custom brass sliding lid containing wedding heirloom book'
  }
];

export default function CatalogSpecifierPage() {
  const [spreadIndex, setSpreadIndex] = useState(1);
  const [kitSelection, setKitSelection] = useState('complete');
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Form states
  const [studioName, setStudioName] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [region, setRegion] = useState('in');
  const [postalCode, setPostalCode] = useState('');
  const [payChannel, setPayChannel] = useState('upi');

  const currentSpread = CATALOG_SPREADS[spreadIndex];

  const handlePrevSpread = () => {
    setSpreadIndex((prev) => (prev - 1 + CATALOG_SPREADS.length) % CATALOG_SPREADS.length);
  };

  const handleNextSpread = () => {
    setSpreadIndex((prev) => (prev + 1) % CATALOG_SPREADS.length);
  };

  const handleDownloadDossier = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4500);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    setOrderSubmitted(true);
    setTimeout(() => {
      setOrderSubmitted(false);
      setStudioName('');
      setPortfolioUrl('');
      setEmail('');
      setPhone('');
      setAddress('');
      setPostalCode('');
    }, 6000);
  };

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
            <span className="text-[#141310]">2026 Atelier Catalog &amp; Swatch Specifier</span>
          </div>
          <div className="flex items-center gap-2 text-[#4A463F]">
            <span className="w-2 h-2 rounded-full bg-[#635E52]"></span>
            <span>Official Atelier Compendium // 2026 Edition</span>
          </div>
        </div>
      </section>

      {/* 2. Editorial Masthead & Curatorial Metadata Index Box */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-16 pt-12 pb-12 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#EAE6DF]">
          <RevealOnScroll direction="left" className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold uppercase tracking-[0.2em] px-2.5 py-1 bg-[#EAE2D2] text-[#1F1B12] text-[10px]">
                Official Atelier Compendium // 2026 Edition
              </span>
            </div>
            <TextReveal
              as="h1"
              delay={0.08}
              className="font-serif text-[38px] md:text-[56px] text-[#141310] font-normal tracking-tight leading-[1.06]"
            >
              The 2026 Atelier Catalog &amp; Physical Swatch Compendium
            </TextReveal>
            <p className="text-[16px] md:text-[18px] text-[#4A463F] max-w-2xl leading-relaxed pt-2">
              Explore our comprehensive volume of heirloom album specifications, fine art papers, Italian leathers, and presentation chests in high-fidelity digital format, or order the tactile hardwood specimen box curated for discerning studios.
            </p>
          </RevealOnScroll>

          {/* Curatorial Metadata Index Box */}
          <RevealOnScroll direction="right" className="bg-[#F4F4F0] p-6 border border-[#EAE6DF] flex flex-col justify-between gap-4 lg:w-80 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DF] text-[11px] uppercase tracking-wider font-semibold">
              <span className="text-[#635E52]">Document Release</span>
              <span className="text-[#141310]">Vol. XIV / 2026</span>
            </div>
            <div className="space-y-1.5 text-[12px] text-[#4A463F]">
              <div className="flex justify-between">
                <span>Circulation:</span>
                <span className="text-[#141310] font-medium">Restricted B2B Studios</span>
              </div>
              <div className="flex justify-between">
                <span>Turnaround Standard:</span>
                <span className="text-[#141310] font-medium">14 Business Days</span>
              </div>
              <div className="flex justify-between">
                <span>Dual Currency:</span>
                <span className="text-[#141310] font-medium">INR (₹) &amp; GBP (£)</span>
              </div>
            </div>
            <div className="pt-2 border-t border-[#EAE6DF] flex items-center gap-1.5 text-[#635E52] text-[10px] uppercase font-semibold tracking-wider">
              <CheckCircle size={14} />
              <span>Archival Cotton Certified</span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3. Dual-Format Showcase (Digital Master Spread vs Physical Specimen Box) */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-16 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Digital Catalog Spread Viewer (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col bg-white p-8 md:p-10 border border-[#EAE6DF] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#EAE6DF] gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#635E52]">
                  Interactive Specimen
                </span>
                <h2 className="font-serif text-[24px] text-[#141310] mt-1">Digital 84-Page Master Volume</h2>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevSpread}
                  className="w-9 h-9 flex items-center justify-center bg-[#EFEEEA] hover:bg-[#E3E2DF] text-[#141310] transition-colors"
                  aria-label="Previous Spread"
                >
                  <ArrowLeft size={16} />
                </button>
                <span className="text-[11px] font-mono tracking-wider text-[#635E52] px-2">
                  {currentSpread.page}
                </span>
                <button
                  type="button"
                  onClick={handleNextSpread}
                  className="w-9 h-9 flex items-center justify-center bg-[#EFEEEA] hover:bg-[#E3E2DF] text-[#141310] transition-colors"
                  aria-label="Next Spread"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Flipbook Spread Frame */}
            <div className="relative w-full aspect-[16/10] bg-[#141310] overflow-hidden my-6 shadow-inner flex items-center justify-center">
              <img
                src={currentSpread.imgSrc}
                alt={currentSpread.alt}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/30 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-[#141310]/80 backdrop-blur-sm text-white px-4 py-2 text-[11px] uppercase tracking-wider">
                <span>{currentSpread.title}</span>
                <span className="text-[#EDE5DA]">{currentSpread.desc}</span>
              </div>
            </div>

            {/* Digital Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-auto border-t border-[#EAE6DF]">
              <div className="space-y-0.5">
                <p className="font-semibold text-[#141310] text-[13px]">Download Studio Specification Dossier</p>
                <p className="text-[12px] text-[#635E52]">Includes high-res ICC profiles, spread templates, and paper gamuts (PDF, 18.4 MB).</p>
              </div>
              <button
                type="button"
                onClick={handleDownloadDossier}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#201E1B] !text-[#FAF7F2] hover:bg-[#B99A69] transition-all text-[11px] uppercase tracking-widest font-semibold whitespace-nowrap shadow-sm cursor-pointer"
                style={{ color: '#FAF7F2', backgroundColor: '#201E1B' }}
              >
                <Download size={15} />
                <span>Download Dossier (18.4 MB)</span>
              </button>
            </div>

            {downloadSuccess && (
              <div className="mt-4 p-3 bg-[#DCE5DA] text-[#292824] border border-[#CCC5BC] text-[12px] flex items-center gap-2">
                <CheckCircle size={16} />
                <span>Atelier Dossier download initiated. Check your downloads directory.</span>
              </div>
            )}
          </div>

          {/* Right: Physical Studio Specimen Box (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col bg-[#F4F4F0] p-8 md:p-10 border border-[#EAE6DF] shadow-sm">
            <div className="space-y-2 pb-6 border-b border-[#EAE6DF]">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-[#635E52]">
                Tactile Touchpoint
              </span>
              <h2 className="font-serif text-[24px] text-[#141310]">The Curated Hardwood Sample Box</h2>
              <p className="text-[13px] text-[#4A463F] leading-relaxed">
                Designed specifically for in-person bridal consultations. Tangible proof of weight, aroma, grain, and archival permanence that turns prospective clients into confirmed bespoke commissions.
              </p>
            </div>

            {/* Specimen Box Image Frame */}
            <div className="relative w-full aspect-square bg-[#141310] overflow-hidden my-6 shadow-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFKWCZE3M6BCnC5hFskUu2hGZRFDqrGSAhpE4j3NKsdvlYe1Sp4GIzHANniiV474mnl1rONlcUWeEu5O8Qk8y4S5SrwYYtEbEnJjMitbQXv7iP_kjF8C_RcF7K2nOZIBxYjGPxrGFweG42nfNLiPUJbk2s088qGyxPPSrhCs-rU0_dxBtrdWEOVw_Mee1yfVCBOxzwQBUT24boO0fos3lE3hbgNTIDzQT425H1XGYZ"
                alt="Curated handcrafted dark walnut presentation specimen box opened with leather and linen swatches"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-[#141310] text-white px-3 py-1 text-[11px] uppercase tracking-wider font-semibold">
                ₹3,500 / £45 GBP
              </div>
            </div>

            {/* Inclusions Mini Grid */}
            <div className="grid grid-cols-2 gap-3 pb-6">
              <div className="bg-white p-3 border border-[#EAE6DF] space-y-1">
                <p className="font-semibold text-[#141310] text-[12px]">32 Tuscan Leathers</p>
                <p className="text-[11px] text-[#635E52]">Full-grain, pull-up, suede</p>
              </div>
              <div className="bg-white p-3 border border-[#EAE6DF] space-y-1">
                <p className="font-semibold text-[#141310] text-[12px]">16 Archival Linens</p>
                <p className="text-[11px] text-[#635E52]">Belgian weave &amp; Japanese silk</p>
              </div>
              <div className="bg-white p-3 border border-[#EAE6DF] space-y-1">
                <p className="font-semibold text-[#141310] text-[12px]">6 Substrate Tests</p>
                <p className="text-[11px] text-[#635E52]">Direct printed test spreads</p>
              </div>
              <div className="bg-white p-3 border border-[#EAE6DF] space-y-1">
                <p className="font-semibold text-[#141310] text-[12px]">Solander Clamshell</p>
                <p className="text-[11px] text-[#635E52]">Miniature scale model box</p>
              </div>
            </div>

            {/* Refund Guarantee Note */}
            <div className="mt-auto space-y-3 pt-4 border-t border-[#EAE6DF]">
              <div className="p-3 bg-[#EAE2D2] text-[#1F1B12] text-[12px] leading-snug">
                <strong>100% Investment Rebate:</strong> The entire swatch box fee is refunded as a direct studio credit on your first client album commission.
              </div>
              <a
                href="#order-swatch-box"
                className="w-full py-3.5 rounded-full bg-[#201E1B] !text-[#FAF7F2] hover:bg-[#B99A69] transition-all text-[11px] uppercase tracking-widest font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                style={{ color: '#FAF7F2', backgroundColor: '#201E1B', textDecoration: 'none' }}
              >
                <span>Order Specimen Box For Studio</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Table of Contents: Five Chapters of Precision Craft */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-16 py-16 w-full border-t border-[#EAE6DF]">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#635E52] block mb-1">
              Comprehensive Compendium Index
            </span>
            <h2 className="font-serif text-[28px] md:text-[38px] text-[#141310]">
              Five Chapters of Precision Craft
            </h2>
          </div>
          <p className="text-[14px] text-[#4A463F] max-w-md">
            A definitive handbook detailing engineering thresholds, temperature tolerances, foil deboss dies, and international freight protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Chapter 01 */}
          <div className="bg-white p-8 border border-[#EAE6DF] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] text-[#635E52] uppercase font-semibold">
                <span className="text-[#141310] font-bold">Chapter 01</span>
                <span>pp. 06–24</span>
              </div>
              <h3 className="font-serif text-[22px] text-[#141310]">Core Album Archetypes</h3>
              <p className="text-[13px] text-[#4A463F] leading-relaxed">
                Engineering comparisons between seamless flush mounts, heirloom split-bound sovereigns, lightweight monograph layflats, and traditional slip-in folios.
              </p>
              <div className="space-y-1.5 text-[12px] pt-2">
                <div className="flex justify-between py-1 bg-[#F4F4F0] px-3">
                  <span className="font-medium text-[#141310]">Flush Mount Master</span>
                  <span className="text-[#635E52]">1.2mm Core</span>
                </div>
                <div className="flex justify-between py-1 bg-[#F4F4F0] px-3">
                  <span className="font-medium text-[#141310]">Sovereign Heirloom</span>
                  <span className="text-[#635E52]">Split Leather Spine</span>
                </div>
                <div className="flex justify-between py-1 bg-[#F4F4F0] px-3">
                  <span className="font-medium text-[#141310]">Layflat Monograph</span>
                  <span className="text-[#635E52]">Flexible Spine</span>
                </div>
              </div>
            </div>
            <Link
              to="/products/flush-mount-albums"
              className="text-[11px] uppercase tracking-wider font-semibold text-[#141310] hover:text-[#635E52] inline-flex items-center gap-1"
            >
              <span>Inspect Dimensional Blueprints</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Chapter 02 */}
          <div className="bg-white p-8 border border-[#EAE6DF] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] text-[#635E52] uppercase font-semibold">
                <span className="text-[#141310] font-bold">Chapter 02</span>
                <span>pp. 25–42</span>
              </div>
              <h3 className="font-serif text-[22px] text-[#141310]">Substrates &amp; Paper Chemistry</h3>
              <p className="text-[13px] text-[#4A463F] leading-relaxed">
                Optical density, dMax gamut responses, and tactile grain behaviors across certified European mills and continuous silver halide chemistry.
              </p>
              <div className="space-y-1.5 text-[12px] pt-2">
                <div className="flex justify-between py-1 bg-[#F4F4F0] px-3">
                  <span className="font-medium text-[#141310]">Fuji Crystal Archive DPII</span>
                  <span className="text-[#635E52]">Silver Halide</span>
                </div>
                <div className="flex justify-between py-1 bg-[#F4F4F0] px-3">
                  <span className="font-medium text-[#141310]">Hahnemühle Photo Rag 308</span>
                  <span className="text-[#635E52]">100% Cotton</span>
                </div>
                <div className="flex justify-between py-1 bg-[#F4F4F0] px-3">
                  <span className="font-medium text-[#141310]">Mohawk Superfine Eggshell</span>
                  <span className="text-[#635E52]">Acid-Free Velvet</span>
                </div>
              </div>
            </div>
            <Link
              to="/resources/blogs/chemistry-of-permanence-silver-halide-vs-inkjet"
              className="text-[11px] uppercase tracking-wider font-semibold text-[#141310] hover:text-[#635E52] inline-flex items-center gap-1"
            >
              <span>Review Spectrometry Gamuts</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Chapter 03 */}
          <div className="bg-white p-8 border border-[#EAE6DF] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] text-[#635E52] uppercase font-semibold">
                <span className="text-[#141310] font-bold">Chapter 03</span>
                <span>pp. 43–58</span>
              </div>
              <h3 className="font-serif text-[22px] text-[#141310]">Leather &amp; Textile Archive</h3>
              <p className="text-[13px] text-[#4A463F] leading-relaxed">
                Ethically sourced hides from Santa Croce sull’Arno alongside heritage flax weaves from Flanders and pure raw silk looming from Kyoto.
              </p>
              <div className="space-y-1.5 text-[12px] pt-2">
                <div className="flex justify-between py-1 bg-[#F4F4F0] px-3">
                  <span className="font-medium text-[#141310]">Tuscan Full-Grain Vegetal</span>
                  <span className="text-[#635E52]">Patina Rich</span>
                </div>
                <div className="flex justify-between py-1 bg-[#F4F4F0] px-3">
                  <span className="font-medium text-[#141310]">Palazzo Royal Velvets</span>
                  <span className="text-[#635E52]">High Crush Res.</span>
                </div>
                <div className="flex justify-between py-1 bg-[#F4F4F0] px-3">
                  <span className="font-medium text-[#141310]">Belgian Raw Linens</span>
                  <span className="text-[#635E52]">Natural Flax</span>
                </div>
              </div>
            </div>
            <a
              href="#order-swatch-box"
              className="text-[11px] uppercase tracking-wider font-semibold text-[#141310] hover:text-[#635E52] inline-flex items-center gap-1"
            >
              <span>Browse Color Swatch Range</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* Chapters 4 & 5 Bento Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Chapter 04 (6 cols) */}
          <div className="lg:col-span-6 bg-[#F4F4F0] p-8 border border-[#EAE6DF] space-y-4 shadow-sm">
            <div className="flex items-center justify-between text-[11px] text-[#635E52] uppercase font-semibold">
              <span className="text-[#141310] font-bold">Chapter 04</span>
              <span>pp. 59–72</span>
            </div>
            <h3 className="font-serif text-[24px] text-[#141310]">
              Architectural Enclosures &amp; Presentation Chests
            </h3>
            <p className="text-[13px] text-[#4A463F] leading-relaxed">
              Presentation is the first physical touchpoint of memory. We build furniture-grade heirloom enclosures engineered to protect photographic tomes against humidity, light oxidation, and structural compression.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white p-3 border border-[#EAE6DF] text-[12px]">
                <p className="font-semibold text-[#141310]">American Walnut</p>
                <p className="text-[11px] text-[#635E52] mt-1">Dovetail joinery, brass hinges</p>
              </div>
              <div className="bg-white p-3 border border-[#EAE6DF] text-[12px]">
                <p className="font-semibold text-[#141310]">Solander Clamshell</p>
                <p className="text-[11px] text-[#635E52] mt-1">Archival museum buckram</p>
              </div>
              <div className="bg-white p-3 border border-[#EAE6DF] text-[12px]">
                <p className="font-semibold text-[#141310]">Linen Slipcases</p>
                <p className="text-[11px] text-[#635E52] mt-1">Milled 3mm binder board</p>
              </div>
            </div>
          </div>

          {/* Chapter 05 (6 cols) */}
          <div className="lg:col-span-6 bg-[#EFEEEA] p-8 border border-[#EAE6DF] space-y-4 shadow-sm">
            <div className="flex items-center justify-between text-[11px] text-[#635E52] uppercase font-semibold">
              <span className="text-[#141310] font-bold">Chapter 05</span>
              <span>pp. 73–84</span>
            </div>
            <h3 className="font-serif text-[24px] text-[#141310]">
              Studio Economics &amp; Wholesale Pricing Tiers
            </h3>
            <p className="text-[13px] text-[#4A463F] leading-relaxed">
              Clear, transparent wholesale pricing for working photographers. Features tiered duplicate companion album discounts, volume rebates, and currency parity for studios across India and the United Kingdom.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white p-3 border border-[#EAE6DF] text-[12px]">
                <p className="font-semibold text-[#141310]">Studio Sample Tier</p>
                <p className="text-[11px] text-[#635E52] mt-1">50% OFF display specimens</p>
              </div>
              <div className="bg-white p-3 border border-[#EAE6DF] text-[12px]">
                <p className="font-semibold text-[#141310]">Parent Duplicates</p>
                <p className="text-[11px] text-[#635E52] mt-1">40% discount on downscales</p>
              </div>
              <div className="bg-white p-3 border border-[#EAE6DF] text-[12px]">
                <p className="font-semibold text-[#141310]">Duty-Paid UK Freight</p>
                <p className="text-[11px] text-[#635E52] mt-1">Pre-cleared DDP to London</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Physical Swatch Box Order Form */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-16 py-16 w-full" id="order-swatch-box">
        <div className="bg-white border border-[#EAE6DF] p-8 md:p-14 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Narrative */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 bg-[#EAE2D2] text-[#1F1B12] text-[10px] uppercase font-semibold tracking-wider">
                  Direct Studio Dispatch
                </span>
                <h2 className="font-serif text-[32px] md:text-[40px] text-[#141310] leading-tight">
                  Acquire The 2026 Studio Compendium
                </h2>
                <p className="text-[14px] text-[#4A463F] leading-relaxed">
                  The definitive tactical toolkit for high-touch wedding studio presentations. Complete with actual material weights, deboss foil specimens, acrylic edge samples, and full-color substrate comparison prints.
                </p>
              </div>

              {/* Pricing Badge */}
              <div className="bg-[#F4F4F0] p-6 border border-[#EAE6DF] space-y-3">
                <div className="flex items-baseline justify-between font-serif text-[26px]">
                  <span className="text-[#141310]">₹3,500 INR</span>
                  <span className="text-[#635E52]">/ £45 GBP</span>
                </div>
                <div className="text-[12px] text-[#4A463F] space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-[#635E52]" />
                    <span>Includes priority tracked courier delivery (Global or Pan-India)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-[#635E52]" />
                    <span>100% credited toward your first custom album invoice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-[#635E52]" />
                    <span>Supplied in engraved dark walnut studio chest</span>
                  </div>
                </div>
              </div>

              {/* Mini Swatches */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-semibold text-[#635E52] tracking-wider">
                  Physical Materials Included In Box:
                </span>
                <div className="grid grid-cols-4 gap-2 pt-1 text-[10px] uppercase font-semibold text-center">
                  <div className="bg-[#141310] text-white p-2">Tuscan Tan</div>
                  <div className="bg-[#635E52] text-white p-2">Olive Hide</div>
                  <div className="bg-[#EAE2D2] text-[#1F1B12] p-2">Oat Flax</div>
                  <div className="bg-[#E3E2DF] text-[#4A463F] p-2">Smoke Silk</div>
                </div>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7 bg-[#FAF9F5] p-6 md:p-10 border border-[#EAE6DF]">
              <form onSubmit={handleOrderSubmit} className="space-y-5">
                {/* Kit Selection */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#635E52] block">
                    Select Specimen Configuration:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className={`p-4 border cursor-pointer transition-colors ${
                      kitSelection === 'complete' ? 'bg-white border-[#141310] shadow-sm' : 'bg-[#F4F4F0] border-[#EAE6DF]'
                    }`}>
                      <input
                        type="radio"
                        name="kit"
                        value="complete"
                        checked={kitSelection === 'complete'}
                        onChange={() => setKitSelection('complete')}
                        className="accent-[#141310] mb-2"
                      />
                      <p className="font-semibold text-[#141310] text-[13px]">Complete Studio Box</p>
                      <p className="text-[11px] text-[#635E52] mt-1">32 Leathers, 16 Linens, 6 Papers + Mini Clamshell Box</p>
                      <p className="font-serif text-[15px] text-[#141310] mt-2 font-medium">₹3,500 / £45</p>
                    </label>

                    <label className={`p-4 border cursor-pointer transition-colors ${
                      kitSelection === 'textile' ? 'bg-white border-[#141310] shadow-sm' : 'bg-[#F4F4F0] border-[#EAE6DF]'
                    }`}>
                      <input
                        type="radio"
                        name="kit"
                        value="textile"
                        checked={kitSelection === 'textile'}
                        onChange={() => setKitSelection('textile')}
                        className="accent-[#141310] mb-2"
                      />
                      <p className="font-semibold text-[#141310] text-[13px]">Essential Swatch Deck</p>
                      <p className="text-[11px] text-[#635E52] mt-1">Fan-deck format of 32 leathers and 16 linen swatches only</p>
                      <p className="font-serif text-[15px] text-[#141310] mt-2 font-medium">₹2,000 / £25</p>
                    </label>
                  </div>
                </div>

                {/* Studio & Portfolio */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#635E52] block mb-1">
                      Studio / Photographer Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={studioName}
                      onChange={(e) => setStudioName(e.target.value)}
                      placeholder="e.g. Atelier V. Thorne Photography"
                      className="w-full bg-white border border-[#CCC5BC] p-3 text-[13px] text-[#141310] focus:outline-none focus:border-[#141310]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#635E52] block mb-1">
                      Portfolio URL / Instagram *
                    </label>
                    <input
                      type="text"
                      required
                      value={portfolioUrl}
                      onChange={(e) => setPortfolioUrl(e.target.value)}
                      placeholder="e.g. @thornefineart or studio-thorne.com"
                      className="w-full bg-white border border-[#CCC5BC] p-3 text-[13px] text-[#141310] focus:outline-none focus:border-[#141310]"
                    />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#635E52] block mb-1">
                      Direct Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="orders@yourstudio.com"
                      className="w-full bg-white border border-[#CCC5BC] p-3 text-[13px] text-[#141310] focus:outline-none focus:border-[#141310]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#635E52] block mb-1">
                      WhatsApp / Telephone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+44 7700 900077 or +91 98200 00000"
                      className="w-full bg-white border border-[#CCC5BC] p-3 text-[13px] text-[#141310] focus:outline-none focus:border-[#141310]"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#635E52] block mb-1">
                    Delivery Address &amp; Studio Suite *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Include street, landmark, studio suite number, city, and state"
                    className="w-full bg-white border border-[#CCC5BC] p-3 text-[13px] text-[#141310] focus:outline-none focus:border-[#141310] resize-none"
                  ></textarea>
                </div>

                {/* Region & Postal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#635E52] block mb-1">
                      Destination Region *
                    </label>
                    <select
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="w-full bg-white border border-[#CCC5BC] p-3 text-[13px] text-[#141310] focus:outline-none focus:border-[#141310]"
                    >
                      <option value="in">India (Pan-India Express Air)</option>
                      <option value="uk">United Kingdom (London Liaison Transit)</option>
                      <option value="eu">European Union (Priority Courier)</option>
                      <option value="us">United States &amp; Canada</option>
                      <option value="row">Rest of World</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#635E52] block mb-1">
                      Postal / Zip Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      placeholder="e.g. SW1A 1AA or 400054"
                      className="w-full bg-white border border-[#CCC5BC] p-3 text-[13px] text-[#141310] focus:outline-none focus:border-[#141310]"
                    />
                  </div>
                </div>

                {/* Payment Channel */}
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#635E52] block">
                    Preferred Settlement Channel:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: 'upi', label: 'UPI / NetBanking (INR)' },
                      { key: 'cardGbp', label: 'UK Debit/Card (£ GBP)' },
                      { key: 'wire', label: 'Wire / Invoice' }
                    ].map((ch) => (
                      <button
                        key={ch.key}
                        type="button"
                        onClick={() => setPayChannel(ch.key)}
                        className={`p-2.5 text-[11px] border font-medium text-center transition-colors ${
                          payChannel === ch.key
                            ? 'bg-[#141310] text-white border-[#141310]'
                            : 'bg-white text-[#4A463F] border-[#CCC5BC]'
                        }`}
                      >
                        {ch.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#201E1B] !text-[#FAF7F2] hover:bg-[#B99A69] transition-all text-[11px] uppercase tracking-widest font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    style={{ color: '#FAF7F2', backgroundColor: '#201E1B' }}
                  >
                    <Lock size={15} />
                    <span>Confirm Dispatch Request &amp; Generate Invoice</span>
                  </button>
                  <p className="text-[11px] text-center text-[#635E52] mt-2">
                    We will contact you within 2 business hours with dispatch tracking and your official 100% credit rebate voucher.
                  </p>
                </div>

                {orderSubmitted && (
                  <div className="p-4 bg-[#DCE5DA] text-[#292824] border border-[#CCC5BC] text-[13px] flex items-center gap-2.5">
                    <CheckCircle size={18} />
                    <span>
                      <strong>Dispatch Request Recorded:</strong> Thank you, {studioName || 'Studio'}. Your order has been registered at our Mumbai atelier. You will receive an invoice and courier booking confirmation shortly.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Studio Testimonial: The Consultation Game-Changer */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-16 py-12 w-full">
        <div className="bg-[#EFEEEA] p-8 md:p-14 border border-[#EAE6DF] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 relative aspect-[4/5] bg-[#141310] overflow-hidden shadow-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe4M7uEKjeZ5mYyB-TnTq7Gn3zJ-7x0yq8Ik0GzKQnCViaTQYJ56xVCJq_v5kgRjaLgQUjncUXVq7eloEU5yQCA8bhSHz7SG7JzgsnqZ8MYVeeBRX_jiWj2APc2Y5GHtFhnSi-OhZ1nVnzvQq0MW_oB6XFJfrz8ZEQHaPAb_oo382_kSO7Iv1OdgcwpI8jEbUJIa-SGzy0nyCOWGbOlPi5v5PrcMrUwAG2CIH_-mse"
                alt="Photographer holding swatch box during couple consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm p-3">
                <p className="font-semibold text-[#141310] text-[13px]">Elena Rostova &amp; Julian Scott</p>
                <p className="text-[10px] uppercase tracking-wider text-[#635E52]">Scott &amp; Rostova Editorial // London &amp; Lake Como</p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <Quote size={40} className="text-[#635E52]" />
              <blockquote className="font-serif text-[22px] md:text-[28px] text-[#141310] italic leading-relaxed">
                "The physical swatch box entirely revolutionized our in-person album sales. Prior to having Ultraa’s walnut specimen box on our client table, couples viewed heirloom albums as an optional line item. Once they touched the heavyweight Belgian linen, felt the cool touch of the acrylic cameo, and smelled the genuine Tuscan leather, 92% of our Lake Como couples upgraded directly to the 16x12” Sovereign Heirloom package. It paid for itself fifty times over on day one."
              </blockquote>
              <div className="pt-4 border-t border-[#CCC5BC] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[12px]">
                <div>
                  <p className="font-semibold text-[#141310] text-[14px]">Julian Scott, Lead Principal</p>
                  <p className="text-[#635E52]">Scott &amp; Rostova Editorial Studios (Vogue Wedding &amp; Tatler Featured)</p>
                </div>
                <div className="flex items-center gap-1.5 text-[#635E52] uppercase font-semibold text-[11px]">
                  <CheckCircle size={14} />
                  <span>Verified Studio Partner Since 2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom Atelier Concierge Banner */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-16 py-10 md:py-14 mb-12 w-full">
        <div
          className="relative rounded-2xl p-8 sm:p-10 md:p-12 border border-[#3A352E] shadow-[0_24px_64px_-16px_rgba(20,19,16,0.35)] overflow-hidden"
          style={{ backgroundColor: '#1A1815' }}
        >
          {/* Subtle Warm Luxury Atelier Glows */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#B99A69]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#B99A69]/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-left">
              {/* Gold Status Pill */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B99A69]/40 text-[10px] uppercase font-sans font-medium tracking-[0.22em]"
                style={{ backgroundColor: 'rgba(185, 154, 105, 0.12)', color: '#D4AF37' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                <span style={{ color: '#D4AF37' }}>Bespoke Studio Support Active</span>
              </div>

              {/* Crisp High-Contrast White Heading */}
              <h3
                className="font-serif text-[28px] sm:text-[32px] md:text-[38px] font-normal leading-[1.16] tracking-[-0.01em] m-0 !text-[#FAF7F2]"
                style={{ color: '#FAF7F2' }}
              >
                Need a Custom Cover Deboss Die or Bespoke Dimensions?
              </h3>

              {/* High-Readability Warm Linen Paragraph */}
              <p
                className="font-sans text-[13.5px] sm:text-[14.5px] leading-[1.7] font-normal m-0 pt-1 !text-[#C8BEAE]"
                style={{ color: '#C8BEAE' }}
              >
                Speak directly with our Master Bookbinders in Mumbai or our UK Studio Liaison in London for custom foil brass dies, exotic leather sourcing, or exhibition display tomes.
              </p>
            </div>

            {/* High-Contrast Interactive Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
              {/* Primary Mumbai Direct Studio Call */}
              <a
                href="tel:+919322254315"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full font-sans font-semibold text-[11px] sm:text-[12px] uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#B99A69] hover:!text-[#FAF7F2] shadow-sm hover:shadow-md cursor-pointer group whitespace-nowrap !text-[#201E1B]"
                style={{
                  backgroundColor: '#FAF7F2',
                  color: '#201E1B',
                  textDecoration: 'none'
                }}
              >
                <Phone size={14} className="text-[#B99A69] group-hover:text-[#FAF7F2] transition-colors" />
                <span className="!text-[#201E1B] font-semibold" style={{ color: '#201E1B' }}>Mumbai +91 93222 54315</span>
              </a>

              {/* Secondary London WhatsApp Desk */}
              <a
                href="https://wa.me/919322254315"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full border border-[#B99A69]/50 font-sans font-medium text-[11px] sm:text-[12px] uppercase tracking-[0.18em] transition-all duration-300 hover:border-[#B99A69] hover:bg-[#B99A69]/20 shadow-sm hover:shadow-md cursor-pointer group whitespace-nowrap"
                style={{
                  backgroundColor: '#24211D',
                  color: '#FAF7F2',
                  textDecoration: 'none'
                }}
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                <span style={{ color: '#FAF7F2' }}>London WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
