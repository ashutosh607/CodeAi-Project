import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Check, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Truck, 
  Download, 
  MessageSquare
} from 'lucide-react';
import TextReveal from '../../components/motion/TextReveal';
import RevealOnScroll from '../../components/motion/RevealOnScroll';
import StaggerBoxes from '../../components/motion/StaggerBoxes';

export default function UKPhotoBookPage() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Fine Art Photo Books & Monographs for UK Photographers | Ultraa Albums';
  }, []);

  const handleEnquire = (formatName) => {
    navigate(`/enquire?product=${encodeURIComponent(`Photo Book UK - ${formatName}`)}`);
  };

  const FAQS = [
    {
      q: 'How do Photo Books differ structurally from Flush Mount albums?',
      a: 'Our Flush Mount albums feature rigid, thick substrate cores (1.0mm to 1.5mm card mounts) where photographic prints are mounted back-to-back, creating rigid leaves. In contrast, our Photo Books utilize flexible fine-art book pages (176–200gsm) bound with heavy-duty cold-melt PUR spines. This allows high-capacity storytelling up to 250 pages without creating an unmanageable, heavy block, making them ideal for complete photojournalistic coverage.'
    },
    {
      q: 'Can we pay via BACS transfer or UK Corporate debit cards?',
      a: 'Yes. We provide native British Pound (£ GBP) settlement via direct BACS transfer to our UK clearing account, as well as instant checkout via Stripe supporting all UK business credit and debit cards. All orders automatically generate a standard VAT-compliant commercial invoice for your studio accounting.'
    },
    {
      q: 'What are the door-to-door transit times to Edinburgh, Manchester, and London?',
      a: 'Standard binding turnaround requires 8–12 business days in our atelier. Once complete, your order dispatches via DHL Express DDP (Delivered Duty Paid). Delivery takes 48 hours to London and Southeast hubs, and 48–72 hours to Manchester, Edinburgh, and rural UK studio addresses. There are zero surprise import duty fees or holding delays at Heathrow customs.'
    },
    {
      q: 'Are studio branding and white-label drop shipping available?',
      a: 'Absolutely. We offer complete white-label dispatch. We can deboss your studio logomark discreetly onto the inside back cover, and shipments sent directly to your bridal couples contain zero Ultraa Albums invoices or promotional inserts.'
    }
  ];

  const FORMATS = [
    {
      id: 'a4-portrait',
      name: 'A4 Vertical Portrait Monograph',
      dim: '210 × 297mm',
      tag: 'British Classic',
      baseRate: '£62 GBP',
      basePages: 'Base (60 pp)',
      desc: 'The gold standard for documentary wedding monographs, fashion lookbooks, and high-capacity bridal narratives up to 250 pages.',
      icon: 'portrait'
    },
    {
      id: 'a4-landscape',
      name: 'A4 Horizontal Landscape',
      dim: '297 × 210mm',
      tag: 'Cinematic Stance',
      baseRate: '£70 GBP',
      basePages: 'Base (60 pp)',
      desc: 'Unrivaled for expansive Scottish Highlands landscapes, marquee banquets, and wide cinematic group compositions.',
      icon: 'landscape'
    },
    {
      id: '10x10',
      name: '10 × 10" Fine Art Square',
      dim: '254 × 254mm',
      tag: 'Fine Art Universal',
      baseRate: '£66 GBP',
      basePages: 'Base (60 pp)',
      desc: 'The international fine art gallery staple. Harmonizes medium-format film frames and balanced square gallery spreads.',
      icon: 'square'
    },
    {
      id: '7x9',
      name: '7 × 9" Petite Parent Edition',
      dim: '178 × 228mm',
      tag: 'Parent Companion',
      baseRate: '£45 GBP',
      basePages: 'Base (60 pp)',
      desc: 'Scaled companion volume designed as duplicate gifts for parents and bridal party members, sharing the master layout.',
      icon: 'companion'
    }
  ];

  const TIERS = [
    {
      title: 'Tier 01 // Parent Set',
      badge: '15% Allowance',
      heading: '3 to 4 Duplicate Copies',
      desc: 'Optimal configuration for main heirloom book paired with maternal and paternal family duplicate volumes.',
      basePrice: '£62',
      unitPrice: '£52.70 / unit',
      features: [
        'Single artwork upload with zero re-layout costs',
        'Individual presentation shipping boxes',
        'Consolidated express DDP freight to UK studio'
      ]
    },
    {
      title: 'Tier 02 // Family Suite',
      badge: '20% Allowance',
      highlight: 'UK Studio Preferred',
      heading: '5 to 9 Companion Batch',
      desc: 'Geared for extended royal bridal celebrations, intimate luxury corporate retreats, and studio gallery runs.',
      basePrice: '£62',
      unitPrice: '£49.60 / unit',
      features: [
        'Includes custom spine deboss die creation',
        'Complimentary soft proof verification round',
        'Priority binding queue (10 business day dispatch)'
      ]
    },
    {
      title: 'Tier 03 // Exhibition Run',
      badge: '25% Allowance',
      heading: '10+ Studio Production Run',
      desc: 'Tailored for fine-art monographs, solo photographer self-publications, and commercial client archives.',
      basePrice: '£62',
      unitPrice: '£46.50 / unit',
      features: [
        'Dedicated master colour technician manual review',
        'Physical hard proof spread sent to UK studio via DHL',
        'Split address distribution across UK & Channel Islands'
      ]
    }
  ];

  return (
    <div className="bg-[#FAF9F5] text-[#1B1C1A] min-h-screen font-sans selection:bg-[#EAE2D2] selection:text-[#1F1B12]">
      {/* 1. Regional Locale & Breadcrumbs Bar */}
      <div className="w-full bg-[#F4F4F0] py-3 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-16 flex flex-wrap items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#635E52]">
            <Link to="/" className="hover:text-[#141310] transition-colors">Home</Link>
            <span className="text-[#CCC5BC]">/</span>
            <Link to="/for-uk" className="hover:text-[#141310] transition-colors">For UK</Link>
            <span className="text-[#CCC5BC]">/</span>
            <span className="text-[#141310] font-bold">Photo Book for UK</span>
          </nav>
          <div className="flex items-center gap-4 text-[#635E52] text-[10px] font-semibold uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#635E52]"></span>
              Delivered Duty Paid (DDP) to UK
            </span>
            <span className="hidden sm:inline text-[#CCC5BC]">|</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#635E52]"></span>
              Native GBP (£) Settlement
            </span>
            <span className="hidden md:inline text-[#CCC5BC]">|</span>
            <span className="hidden md:inline">HMRC VAT-Compliant Invoicing</span>
          </div>
        </div>
      </div>

      {/* Reciprocal International Switcher Banner */}
      <div className="w-full bg-[#EFEEEA] border-b border-[#EAE6DF] py-2 px-5 md:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between text-xs text-[#635E52]">
          <span>Viewing dedicated UK Monograph &amp; Photo Book Edition (Sterling £ GBP, DDP London Delivery).</span>
          <Link to="/products/photo-book" className="font-semibold underline hover:text-[#141310] transition-colors">
            Switch to International Catalog →
          </Link>
        </div>
      </div>

      {/* 2. Hero Section: Editorial Monograph */}
      <section className="w-full py-12 lg:py-20 px-5 md:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <RevealOnScroll direction="down" delay={0.02} distance={12}>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#635E52]">
                  Editorial Bindery // British Monograph Series
                </span>
                <span className="h-px w-8 bg-[#635E52]"></span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4A463F]">
                  Mohawk &amp; Fedrigoni Curated
                </span>
              </div>
            </RevealOnScroll>

            <TextReveal
              as="h1"
              direction="up"
              delay={0.06}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141310] font-normal leading-tight"
            >
              Bespoke Fine Art Photo Books &amp; Wedding Monographs for UK Studios
            </TextReveal>

            <RevealOnScroll direction="up" delay={0.14} distance={16}>
              <p className="text-base lg:text-lg text-[#4A463F] max-w-2xl leading-relaxed">
                Expansive editorial storytelling up to 250 pages. PUR flexible cold-melt bindings, tactile European book papers, and custom debossed European cloth hardcovers — delivered directly to studios across London, Edinburgh, and Manchester with zero customs friction.
              </p>
            </RevealOnScroll>

            {/* Badges Strip */}
            <StaggerBoxes className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2" stagger={0.08} direction="up">
              <div className="bg-[#F4F4F0] p-3.5 border border-[#EAE6DF]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">Starting At</span>
                <span className="font-serif text-xl text-[#141310] font-normal mt-1 block">From £62</span>
                <span className="text-[11px] text-[#4A463F] mt-0.5 block">GBP Native Invoicing</span>
              </div>
              <div className="bg-[#F4F4F0] p-3.5 border border-[#EAE6DF]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">High Capacity</span>
                <span className="font-serif text-xl text-[#141310] font-normal mt-1 block">Up to 250 pp</span>
                <span className="text-[11px] text-[#4A463F] mt-0.5 block">Flexible Page Leaves</span>
              </div>
              <div className="bg-[#F4F4F0] p-3.5 border border-[#EAE6DF]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">Spine Physics</span>
                <span className="font-serif text-xl text-[#141310] font-normal mt-1 block">PUR Flexible</span>
                <span className="text-[11px] text-[#4A463F] mt-0.5 block">Cold-Melt Adhesive</span>
              </div>
              <div className="bg-[#F4F4F0] p-3.5 border border-[#EAE6DF]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">UK Transit</span>
                <span className="font-serif text-xl text-[#141310] font-normal mt-1 block">Zero Customs</span>
                <span className="text-[11px] text-[#4A463F] mt-0.5 block">DDP London Courier</span>
              </div>
            </StaggerBoxes>

            {/* CTAs */}
            <RevealOnScroll direction="up" delay={0.2} distance={18}>
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleEnquire('50% Studio Sample Photo Book Voucher')}
                  className="px-8 py-4 bg-[#141310] text-[#FAF9F5] text-xs font-semibold uppercase tracking-widest text-center hover:bg-[#292724] transition-colors"
                >
                  Claim 50% Studio Sample Voucher
                </button>
                <a
                  href="#formats"
                  className="px-8 py-4 bg-[#E9E8E4] text-[#141310] text-xs font-semibold uppercase tracking-widest text-center hover:bg-[#DBDAD6] transition-colors"
                >
                  View Monograph Formats ↓
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <RevealOnScroll direction="right" delay={0.14} distance={26}>
              <div className="relative bg-[#EFEEEA] p-4 border border-[#EAE6DF]">
                <img
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85"
                  alt="Open fine art wedding photo book with soft page roll on Mohawk paper"
                  className="w-full h-[480px] sm:h-[520px] object-cover"
                />
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#FFFFFF] p-5 max-w-xs shadow-lg border border-[#EAE6DF]">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#635E52] block">
                    The English Monograph
                  </span>
                  <p className="font-serif text-[16px] text-[#141310] mt-1 font-normal leading-snug">
                    Mohawk Superfine Eggshell 176gsm
                  </p>
                  <p className="text-[12px] text-[#4A463F] mt-1.5 leading-relaxed">
                    Heavy cold-melt PUR square-back binding with custom headband and ribbon marker.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 3. The Modern Monograph: High-Volume Storytelling */}
      <section className="w-full bg-[#EFEEEA] py-20 px-5 md:px-16 border-y border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <RevealOnScroll direction="down" delay={0.02} distance={12}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">
                  Architectural Distinction
                </span>
              </RevealOnScroll>
              <TextReveal
                as="h2"
                direction="left"
                delay={0.06}
                className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal mt-2"
              >
                The Modern Wedding Monograph
              </TextReveal>
            </div>
            <RevealOnScroll direction="right" delay={0.12} distance={16}>
              <p className="text-sm md:text-base text-[#4A463F] max-w-md leading-relaxed">
                When a wedding narrative commands 150 to 250 images, rigid flush-mount boards become unwieldy. Our monographs preserve complete documentary stories inside a sleek, bookstore-grade fine art volume.
              </p>
            </RevealOnScroll>
          </div>

          <StaggerBoxes className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.12} direction="up">
            <div className="bg-[#FAF9F5] p-8 flex flex-col justify-between border border-[#EAE6DF] hover:border-[#635E52]/40 transition-all duration-300">
              <div>
                <span className="font-serif text-2xl text-[#635E52] block mb-4">01</span>
                <h3 className="font-serif text-xl text-[#141310] font-normal mb-3">High-Volume Storytelling</h3>
                <p className="text-sm text-[#4A463F] leading-relaxed">
                  Accommodates from 60 up to 250 pages. Every candid glance, tablescape vignette, dancefloor celebration, and architectural nuance has space to breathe across generous white margins.
                </p>
              </div>
              <div className="mt-8 pt-4 bg-[#F4F4F0] p-4 border-t border-[#EAE6DF]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">Capacity</span>
                <p className="text-[12px] text-[#4A463F] mt-1">Up to 250 pages with zero page sag.</p>
              </div>
            </div>

            <div className="bg-[#FAF9F5] p-8 flex flex-col justify-between border border-[#EAE6DF] hover:border-[#635E52]/40 transition-all duration-300">
              <div>
                <span className="font-serif text-2xl text-[#635E52] block mb-4">02</span>
                <h3 className="font-serif text-xl text-[#141310] font-normal mb-3">Tactile European Papers</h3>
                <p className="text-sm text-[#4A463F] leading-relaxed">
                  Printed on Mohawk Superfine Eggshell (176gsm), Fedrigoni Tintoretto Ceylon (200gsm), or Archival Satin Lustre. Soft to the touch with exceptional ink-holdout and archival longevity.
                </p>
              </div>
              <div className="mt-8 pt-4 bg-[#F4F4F0] p-4 border-t border-[#EAE6DF]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">Paper Heritage</span>
                <p className="text-[12px] text-[#4A463F] mt-1">FSC-certified, acid-free archival European pulps.</p>
              </div>
            </div>

            <div className="bg-[#FAF9F5] p-8 flex flex-col justify-between border border-[#EAE6DF] hover:border-[#635E52]/40 transition-all duration-300">
              <div>
                <span className="font-serif text-2xl text-[#635E52] block mb-4">03</span>
                <h3 className="font-serif text-xl text-[#141310] font-normal mb-3">Cold-Melt PUR Spine</h3>
                <p className="text-sm text-[#4A463F] leading-relaxed">
                  Reinforced polyurethane reactive adhesive cures flexibly over 48 hours. Leaves flex naturally and remain bonded forever, unaffected by British humidity or temperature swings.
                </p>
              </div>
              <div className="mt-8 pt-4 bg-[#F4F4F0] p-4 border-t border-[#EAE6DF]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">Spine Chemistry</span>
                <p className="text-[12px] text-[#4A463F] mt-1">Extreme flexibility with 70% stronger page-pull test.</p>
              </div>
            </div>
          </StaggerBoxes>
        </div>
      </section>

      {/* 4. Curated UK Dimensional Formats */}
      <section className="w-full bg-[#FAF9F5] py-20 px-5 md:px-16" id="formats">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <RevealOnScroll direction="down" delay={0.02} distance={12}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">
                  Architectural Proportions
                </span>
              </RevealOnScroll>
              <TextReveal
                as="h2"
                direction="left"
                delay={0.06}
                className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal mt-2"
              >
                Curated UK Dimensional Formats
              </TextReveal>
            </div>
            <RevealOnScroll direction="right" delay={0.12} distance={16}>
              <p className="text-sm md:text-base text-[#4A463F] max-w-lg leading-relaxed">
                Standard ISO A-series and metric square ratios engineered to streamline InDesign layout templates and parent duplicate workflows.
              </p>
            </RevealOnScroll>
          </div>

          <StaggerBoxes className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1} direction="up">
            {FORMATS.map((fmt) => (
              <div key={fmt.id} className="bg-[#F4F4F0] p-6 flex flex-col justify-between border border-[#EAE6DF] hover:border-[#141310] transition-all duration-300">
                <div>
                  <div className="h-44 bg-[#FAF9F5] border border-[#EAE6DF] flex flex-col items-center justify-center p-4 relative mb-6">
                    <span className="font-serif text-2xl text-[#141310] font-normal">{fmt.dim}</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#635E52] mt-1 font-semibold">{fmt.tag}</span>
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">
                    {fmt.tag}
                  </span>
                  <h3 className="font-serif text-lg text-[#141310] font-normal mt-1 mb-2">
                    {fmt.name}
                  </h3>
                  <p className="text-xs text-[#4A463F] leading-relaxed mb-4">
                    {fmt.desc}
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline justify-between pt-3 pb-3 px-3 bg-[#FAF9F5] border border-[#EAE6DF]">
                    <span className="text-xs text-[#635E52]">{fmt.basePages}</span>
                    <span className="font-serif text-lg text-[#141310] font-bold">{fmt.baseRate}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleEnquire(fmt.name)}
                    className="mt-3 w-full py-2.5 bg-[#141310] text-[#FAF9F5] text-center text-xs font-semibold uppercase tracking-wider hover:bg-[#292724] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Configure {fmt.name.split(' ')[0]}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </StaggerBoxes>
        </div>
      </section>

      {/* 5. Multi-Volume Studio Companion Tiering (Wholesale Matrix) */}
      <section className="w-full bg-[#EFEEEA] py-20 px-5 md:px-16 border-t border-[#EAE6DF]" id="matrix">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <RevealOnScroll direction="down" delay={0.02} distance={12}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">
                  Studio Scale Production
                </span>
              </RevealOnScroll>
              <TextReveal
                as="h2"
                direction="left"
                delay={0.06}
                className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal mt-2"
              >
                Multi-Volume Studio Companion Tiering
              </TextReveal>
              <RevealOnScroll direction="up" delay={0.12} distance={14}>
                <p className="text-sm md:text-base text-[#4A463F] mt-2 max-w-xl leading-relaxed">
                  Streamlined wholesale discounts for duplicate wedding parent sets and high-output British commercial ateliers. Billed directly in British Pounds (£ GBP) inclusive of UK VAT documentation.
                </p>
              </RevealOnScroll>
            </div>
            <RevealOnScroll direction="right" delay={0.14} distance={18}>
              <div className="bg-[#FAF9F5] p-4 flex items-center gap-3 border border-[#EAE6DF]">
                <Truck size={22} className="text-[#635E52]" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#141310] block">DDP Customs Guaranteed</span>
                  <span className="text-xs text-[#635E52]">Direct Air Dispatch to London, Manchester, Glasgow &amp; Belfast</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <StaggerBoxes className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" stagger={0.12} direction="up">
            {TIERS.map((tier, idx) => (
              <div
                key={idx}
                className={`p-8 flex flex-col justify-between border transition-all duration-300 ${
                  tier.highlight ? 'bg-[#FAF9F5] shadow-lg border-2 border-[#141310] relative' : 'bg-[#F4F4F0] border-[#EAE6DF] hover:border-[#635E52]/40'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3.5 right-8 bg-[#141310] text-[#FAF9F5] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest">
                    {tier.highlight}
                  </div>
                )}
                <div>
                  <div className="flex items-center justify-between pb-4">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#635E52]">{tier.title}</span>
                    <span className="px-2.5 py-1 bg-[#EAE2D2] text-[#1F1B12] text-[10px] font-bold uppercase tracking-wider">
                      {tier.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#141310] font-normal mt-2 mb-1">{tier.heading}</h3>
                  <p className="text-xs text-[#4A463F] mb-6 leading-relaxed">{tier.desc}</p>

                  <div className="bg-[#FAF9F5] p-4 border border-[#EAE6DF] space-y-1.5 mb-6">
                    <div className="flex items-baseline justify-between text-xs text-[#635E52]">
                      <span>Base Rate (A4 60pp)</span>
                      <span className="line-through">{tier.basePrice}</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-semibold text-[#141310]">Studio Unit Rate</span>
                      <span className="font-serif text-xl text-[#141310] font-bold">{tier.unitPrice}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-[#4A463F]">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check size={14} className="text-[#635E52]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleEnquire(`${tier.heading} (${tier.badge})`)}
                  className={`mt-8 w-full py-3.5 text-xs font-semibold uppercase tracking-widest transition-colors ${
                    tier.highlight ? 'bg-[#141310] text-[#FAF9F5] hover:bg-[#292724]' : 'bg-[#292724] text-[#FAF9F5] hover:bg-[#141310]'
                  }`}
                >
                  Configure Companion Batch
                </button>
              </div>
            ))}
          </StaggerBoxes>
        </div>
      </section>

      {/* 6. Technical ICC Lab Profiles & Precision Guidelines */}
      <section className="w-full bg-[#FAF9F5] py-20 px-5 md:px-16" id="specs">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <RevealOnScroll direction="left" delay={0.08} distance={20}>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">
                  Lab Precision Engineering
                </span>
                <TextReveal
                  as="h2"
                  direction="left"
                  delay={0.06}
                  className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal mt-2 mb-4"
                >
                  Technical ICC Lab Profiles &amp; Precision Guidelines
                </TextReveal>
                <p className="text-sm text-[#4A463F] leading-relaxed mb-6">
                  Ensure color fidelity between your calibrated Eizo/Apple monitor and our high-definition liquid electro-ink presses. We provide dedicated color spaces tuned to British studio post-production workflows.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-[#F4F4F0] border border-[#EAE6DF]">
                    <h4 className="font-serif text-base text-[#141310] font-normal">sRGB &amp; Adobe RGB 1998</h4>
                    <p className="text-xs text-[#4A463F] mt-1 leading-relaxed">
                      We accept both native colourspaces. Embedded profiles are automatically rendered via custom ICC curves for Mohawk &amp; Fedrigoni pulps.
                    </p>
                  </div>
                  <div className="p-4 bg-[#F4F4F0] border border-[#EAE6DF]">
                    <h4 className="font-serif text-base text-[#141310] font-normal">Bleed Safety &amp; Gutter Allowance</h4>
                    <p className="text-xs text-[#4A463F] mt-1 leading-relaxed">
                      3mm exterior bleed on all trim sides. Due to PUR spine flexibility, keep critical typography 10mm away from the inner gutter.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/resources/catalog"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#141310] hover:text-[#635E52] transition-colors"
                >
                  <span>Download UK Studio Technical Asset Pack (.ZIP 48MB)</span>
                  <Download size={14} />
                </Link>
              </div>
            </RevealOnScroll>
          </div>

          {/* Technical Spec Sheet UI */}
          <div className="lg:col-span-7 bg-[#F4F4F0] p-6 sm:p-10 border border-[#EAE6DF]">
            <RevealOnScroll direction="right" delay={0.12} distance={24}>
              <div className="flex items-center justify-between pb-6 border-b border-[#EAE6DF] mb-6">
                <span className="font-serif text-xl text-[#141310] font-normal">Atelier Press Specifications</span>
                <span className="text-[10px] font-semibold uppercase text-[#635E52]">Release v4.2 UK</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2.5 bg-[#FAF9F5] px-4 border border-[#EAE6DF]">
                  <span className="text-[#635E52]">Press Architecture</span>
                  <span className="text-[#141310] font-medium">HP Indigo 12000 HD ElectroInk (7-Color Extended Gamut)</span>
                </div>
                <div className="flex justify-between py-2.5 bg-[#FAF9F5] px-4 border border-[#EAE6DF]">
                  <span className="text-[#635E52]">Substrate Options</span>
                  <span className="text-[#141310] font-medium">Mohawk Superfine Eggshell 176gsm / Fedrigoni 200gsm</span>
                </div>
                <div className="flex justify-between py-2.5 bg-[#FAF9F5] px-4 border border-[#EAE6DF]">
                  <span className="text-[#635E52]">Spine Architecture</span>
                  <span className="text-[#141310] font-medium">Reinforced PUR Cold-Melt Adhesive, Square Back with Headbands</span>
                </div>
                <div className="flex justify-between py-2.5 bg-[#FAF9F5] px-4 border border-[#EAE6DF]">
                  <span className="text-[#635E52]">Cover Styles</span>
                  <span className="text-[#141310] font-medium">Linen Hardcover, Silk Rayon, Velvet Softcover, or Printed Dust Jacket</span>
                </div>
                <div className="flex justify-between py-2.5 bg-[#FAF9F5] px-4 border border-[#EAE6DF]">
                  <span className="text-[#635E52]">Proofing Protocol</span>
                  <span className="text-[#141310] font-medium">Remote PDF Soft-Proof Portal or Physical Loose Sheet Express Proof</span>
                </div>
                <div className="flex justify-between py-2.5 bg-[#FAF9F5] px-4 border border-[#EAE6DF]">
                  <span className="text-[#635E52]">Turnaround to Great Britain</span>
                  <span className="text-[#141310] font-medium">8–12 Business Days (Production) + 2 Days (DHL Express DDP)</span>
                </div>
              </div>

              {/* InDesign Template Callout */}
              <div className="mt-8 p-5 bg-[#FAF9F5] border border-[#EAE6DF] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#141310] flex items-center justify-center text-[#FAF9F5] text-xs font-bold">
                    ID
                  </div>
                  <div>
                    <p className="font-serif text-sm text-[#141310] font-medium">InDesign Master Templates</p>
                    <p className="text-[11px] text-[#635E52]">Includes guides for spine calculation based on page counts.</p>
                  </div>
                </div>
                <Link
                  to="/resources/catalog"
                  className="px-4 py-2 bg-[#141310] text-[#FAF9F5] text-[11px] font-semibold uppercase tracking-wider hover:bg-[#292724] transition-colors whitespace-nowrap"
                >
                  Download .IDML
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 7. British Editorial Photography Gallery Showcase */}
      <section className="w-full py-20 px-5 md:px-16 bg-[#EFEEEA] border-t border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <RevealOnScroll direction="down" delay={0.02} distance={12}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">
                  Curated Specimens
                </span>
              </RevealOnScroll>
              <TextReveal
                as="h2"
                direction="left"
                delay={0.06}
                className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal mt-2"
              >
                British Wedding &amp; Monograph Portfolio
              </TextReveal>
            </div>
            <RevealOnScroll direction="right" delay={0.12} distance={16}>
              <p className="text-sm md:text-base text-[#4A463F] max-w-sm leading-relaxed">
                Selected volumes crafted for esteemed studios documented across Surrey, the Cotswolds, and the Scottish Borders.
              </p>
            </RevealOnScroll>
          </div>

          <StaggerBoxes className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.12} direction="up">
            <div className="space-y-4 bg-[#FAF9F5] p-4 border border-[#EAE6DF] hover:border-[#635E52]/40 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=85"
                alt="Close-up macro detail of luxury hardbound photo book"
                className="w-full h-64 object-cover"
              />
              <div className="p-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">The Cotswolds Volume</span>
                <h4 className="font-serif text-lg text-[#141310] font-normal mt-1">A4 Editorial in Belgian Oatmeal</h4>
                <p className="text-xs text-[#4A463F] mt-1">180 pages on Mohawk Superfine with custom blind debossing.</p>
              </div>
            </div>

            <div className="space-y-4 bg-[#FAF9F5] p-4 border border-[#EAE6DF] hover:border-[#635E52]/40 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=85"
                alt="Overhead view of an open horizontal landscape photo book"
                className="w-full h-64 object-cover"
              />
              <div className="p-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">Highland Celebration</span>
                <h4 className="font-serif text-lg text-[#141310] font-normal mt-1">A4 Landscape Panoramic</h4>
                <p className="text-xs text-[#4A463F] mt-1">Fedrigoni Tintoretto Ceylon paper with seamless double-page spreads.</p>
              </div>
            </div>

            <div className="space-y-4 bg-[#FAF9F5] p-4 border border-[#EAE6DF] hover:border-[#635E52]/40 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=85"
                alt="Stack of three parent edition photo books"
                className="w-full h-64 object-cover"
              />
              <div className="p-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">Somerset Country Suite</span>
                <h4 className="font-serif text-lg text-[#141310] font-normal mt-1">7×9" Petite Companion Triplet</h4>
                <p className="text-xs text-[#4A463F] mt-1">Matching parent volumes with velvet touch softcovers.</p>
              </div>
            </div>
          </StaggerBoxes>
        </div>
      </section>

      {/* 8. UK Concierge FAQ */}
      <section className="w-full bg-[#FAF9F5] py-20 px-5 md:px-16 border-t border-[#EAE6DF]">
        <div className="max-w-[1000px] mx-auto">
          <div className="max-w-2xl mb-12">
            <RevealOnScroll direction="down" delay={0.02} distance={12}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">
                UK Concierge FAQ
              </span>
            </RevealOnScroll>
            <TextReveal
              as="h2"
              direction="left"
              delay={0.06}
              className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal mt-2"
            >
              Questions from British Wedding Ateliers
            </TextReveal>
          </div>

          <StaggerBoxes className="space-y-4" stagger={0.08} direction="up">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-[#F4F4F0] border border-[#EAE6DF]">
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-[#141310]"
                >
                  <span>{faq.q}</span>
                  {activeFaq === idx ? <ChevronUp size={18} className="text-[#635E52] shrink-0" /> : <ChevronDown size={18} className="text-[#635E52] shrink-0" />}
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#4A463F] leading-relaxed border-t border-[#EAE6DF]/60">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </StaggerBoxes>
        </div>
      </section>

      {/* 9. Final Atelier CTA Section */}
      <section className="w-full py-20 px-5 md:px-16 bg-[#292724] text-[#FAF9F5]">
        <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
          <RevealOnScroll direction="down" delay={0.02} distance={12}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#CDC6B7] mb-4">
              Exclusive Studio Specimen Programme
            </span>
          </RevealOnScroll>
          <TextReveal
            as="h2"
            direction="up"
            delay={0.06}
            className="font-serif text-2xl sm:text-4xl max-w-3xl mb-6 font-normal text-[#FAF9F5]"
          >
            Publish Your Next British Wedding Monograph — Receive 50% Off Your Studio Sample Volume
          </TextReveal>
          <RevealOnScroll direction="up" delay={0.12} distance={14}>
            <p className="text-sm md:text-base text-[#CDC6B7] max-w-2xl mb-10 leading-relaxed">
              Experience the weight of Mohawk Superfine, the flex of our PUR binding, and the richness of European bookcloth in your own client consultations. Sample volumes are stamped with 'Studio Specimen' and billed with priority DDP transit.
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.18} distance={18}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={() => handleEnquire('50% Off Studio Sample Monograph Voucher')}
                className="px-8 py-4 bg-[#FAF9F5] text-[#141310] text-xs font-semibold uppercase tracking-widest hover:bg-[#EAE2D2] transition-colors"
              >
                Claim 50% Studio Sample Voucher
              </button>
              <a
                href="https://wa.me/919322254315"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-transparent border border-[#FAF9F5]/30 text-[#FAF9F5] text-xs font-semibold uppercase tracking-widest hover:bg-[#FAF9F5]/10 transition-colors flex items-center gap-2"
              >
                <MessageSquare size={14} />
                <span>Schedule Virtual Consultation</span>
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.24} distance={20}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[#CDC6B7] text-xs font-semibold uppercase tracking-widest">
              <span className="flex items-center gap-1.5"><Check size={14} className="text-[#FAF9F5]" /> No Minimum Order</span>
              <span className="flex items-center gap-1.5"><Check size={14} className="text-[#FAF9F5]" /> DDP Customs Handled</span>
              <span className="flex items-center gap-1.5"><Check size={14} className="text-[#FAF9F5]" /> BACS &amp; GBP Invoicing</span>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
