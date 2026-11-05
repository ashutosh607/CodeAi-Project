import { studioEmail } from '../../utils/studioEmail';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Check, 
  ArrowRight, 
  Download, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  Layers, 
  Maximize2, 
  Palette
} from 'lucide-react';
import TextReveal from '../../components/motion/TextReveal';
import RevealOnScroll from '../../components/motion/RevealOnScroll';
import StaggerBoxes from '../../components/motion/StaggerBoxes';

export default function UKFlushMountAlbumPage() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);
  const [swatchFormState, setSwatchFormState] = useState({
    fullName: '',
    studioName: '',
    postcode: '',
    phone: '',
    submitted: false
  });

  useEffect(() => {
    document.title = 'Bespoke Flush Mount Albums for UK Wedding Photographers | Ultraa Albums';
  }, []);

  const handleEnquire = (formatName) => {
    navigate(`/enquire?product=${encodeURIComponent(`Flush Mount Album UK - ${formatName}`)}`);
  };

  const handleSwatchSubmit = (e) => {
    e.preventDefault();
    setSwatchFormState(prev => ({ ...prev, submitted: true }));
  };

  const FAQS = [
    {
      q: 'How does DDP (Delivered Duty Paid) work for UK VAT and import duties?',
      a: 'All shipments sent to UK studios are declared under DDP terms via DHL Express. Ultraa Albums acts as the exporter and clears all British import duties, import handling surcharges, and customs documentation fees upfront. When the courier delivers to your studio in Surrey, London, or Edinburgh, there are zero customs clearance holds or unexpected doorstep invoices. You receive an itemised commercial invoice formatted for your UK accountant.'
    },
    {
      q: 'What are the total production and door-to-door transit times to the UK?',
      a: 'Our atelier hand-binding process takes approximately 10 to 14 business days from layout sign-off and color-proofing approval. Once inspected by our master bookbinder, parcels are transferred to DHL Priority Air, which delivers to central London within 4 business days, and the rest of the UK (including Scotland, Wales, and Northern Ireland) within 5–6 business days with door-to-door tracking.'
    },
    {
      q: 'Can I pay directly in British Pounds (£ GBP) without foreign transaction charges?',
      a: 'Yes. We provide native sterling billing. You can pay via direct BACS bank transfer directly to our clearing account or settle with any UK corporate debit/credit card through our secure payment gateway with 0% currency conversion markups.'
    },
    {
      q: 'Which color space and printer profiles should we calibrate to?',
      a: 'We operate Noritsu Fine-Art Laser Silver Halide engines calibrated weekly to sRGB IEC61966-2.1 and Adobe RGB (1998). Upon registering your studio with our UK liaison desk, you receive downloadable ICC profiles for Photoshop and Lightroom to soft-proof your shadow densities and English wedding dress highlights.'
    },
    {
      q: 'Can we order customized Studio Sample albums for our client consultations?',
      a: 'Yes. Verified UK professional photographers receive a 40% studio sample discount on up to three albums per calendar year. Studio sample albums carry an elegant, unobtrusive "STUDIO SAMPLE NOT FOR RESALE" blind deboss on the rear inner endpaper.'
    }
  ];

  const MATERIALS = [
    {
      name: 'British Racing Green',
      type: 'Buckram',
      desc: '100% natural archival cotton buckram with water-repellent finish. The undisputed standard for countryside manor commissions.',
      foils: '24K Gold, Matte Bronze, Blind Deboss',
      img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=85'
    },
    {
      name: 'Midnight Navy English Cloth',
      type: 'Bookcloth',
      desc: 'Deep sapphire-black weave milled in the UK. Subtle lustre under candlelight and exceptional resistance to shelf friction.',
      foils: 'Silver Foil, Champagne Gold, UV Gloss',
      img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=85'
    },
    {
      name: 'Tuscan Saddle Leather',
      type: 'Veg-Tan Leather',
      desc: 'Full-grain vegetable tanned leather imported from Florence. Develops a warm golden patina as the couple ages through their decades.',
      foils: 'Deep Heat Blind Deboss, Antique Gold',
      img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=85'
    },
    {
      name: 'Oyster French Velvet',
      type: 'Velvet',
      desc: 'Ultra-soft high-pile textile designed for editorial bridal presentation suites and matching Solander clamshell linings.',
      foils: 'Precision Deboss, Mirror Gold',
      img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=85'
    }
  ];

  return (
    <div className="bg-[#FAF9F5] text-[#1B1C1A] min-h-screen font-sans selection:bg-[#EAE2D2] selection:text-[#1F1B12]">
      {/* 1. Breadcrumb & Regional Badge Strip */}
      <section className="w-full bg-[#F4F4F0] px-4 md:px-16 py-3 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 text-[11px] font-semibold tracking-[0.14em] uppercase">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[#635E52]">
            <Link to="/" className="hover:text-[#141310] transition-colors">Home</Link>
            <span className="text-[#CCC5BC]">/</span>
            <Link to="/for-uk" className="hover:text-[#141310] transition-colors">For UK</Link>
            <span className="text-[#CCC5BC]">/</span>
            <span className="text-[#141310] font-bold">Flush Mount Album UK</span>
          </nav>
          
          <div className="flex items-center gap-2 text-[#4A463F]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#635E52]"></span>
            <span>UK Studio Services • Dedicated Liaison Desk • DDP Tax-Inclusive Dispatch</span>
          </div>
        </div>
      </section>

      {/* Regional Cross-Link Notice */}
      <div className="bg-[#EAE2D2]/50 border-b border-[#EAE6DF] px-4 md:px-16 py-2 text-center text-xs text-[#4A463F]">
        <span>Looking for our standard international portfolio? </span>
        <Link to="/products/flush-mount-album" className="font-semibold text-[#141310] underline hover:text-[#635E52] transition-colors inline-flex items-center gap-1">
          Explore Standard Flush Mount Album <ArrowRight size={11} />
        </Link>
      </div>

      {/* 2. Editorial Hero Section */}
      <section className="relative w-full px-4 md:px-16 py-12 md:py-20 overflow-hidden border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 flex flex-col z-10">
            <RevealOnScroll direction="down" delay={0.02} distance={14}>
              <div className="inline-flex items-center gap-2 mb-6 bg-[#EFEEEA] px-4 py-1.5 self-start text-[#141310] text-[11px] font-semibold uppercase tracking-[0.18em]">
                <ShieldCheck size={14} className="text-[#635E52]" />
                <span>Dedicated UK Studio Liaison • Direct Sterling (GBP) Settlement</span>
              </div>
            </RevealOnScroll>

            <TextReveal
              as="h1"
              direction="up"
              delay={0.06}
              className="font-serif text-3xl md:text-5xl lg:text-[54px] text-[#141310] leading-[1.12] tracking-tight mb-6 font-normal"
            >
              Bespoke Flush Mount Albums for UK Wedding Photographers &amp; Stately Commissions
            </TextReveal>

            <RevealOnScroll direction="up" delay={0.16} distance={18}>
              <p className="text-[#4A463F] text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                Archival continuous silver halide chemistry, seamless zero-split panoramic spreads, and priority DDP courier delivery to London, Surrey, the Cotswolds, and Edinburgh within 4–6 business days with zero import friction.
              </p>
            </RevealOnScroll>

            {/* Sterling Price Badge & CTAs */}
            <RevealOnScroll direction="up" delay={0.24} distance={20}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2">
                <div className="flex flex-col bg-[#E9E8E4] px-6 py-4">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#635E52]">Studio Wholesale Baseline</span>
                  <span className="font-serif text-2xl text-[#141310] font-bold mt-1">
                    From £195 <span className="font-sans text-xs font-normal text-[#4A463F]">per volume (ex VAT)</span>
                  </span>
                  <span className="text-xs text-[#4A463F] mt-0.5">Direct HMRC-compliant sterling billing</span>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href="#swatch-box"
                    style={{ color: '#FAF9F5' }}
                    className="px-8 py-3.5 bg-[#141310] !text-[#FAF9F5] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#292724] hover:!text-[#FFFFFF] transition-colors text-center shadow-sm"
                  >
                    Request UK Swatch Tome (£35 Rebated)
                  </a>
                  <a
                    href="#spec-sheet"
                    className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#141310] hover:text-[#635E52] transition-colors py-2"
                  >
                    <span>Explore UK Formats &amp; Specifications</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </RevealOnScroll>

            {/* Quick Regional Telemetry */}
            <StaggerBoxes
              className="grid grid-cols-3 gap-6 pt-8 mt-8 bg-[#F4F4F0] p-6 border border-[#EAE6DF]"
              stagger={0.12}
              direction="up"
            >
              <div>
                <p className="font-serif text-2xl text-[#141310] font-normal">0%</p>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#635E52] mt-1">Customs Delay</p>
                <p className="text-xs text-[#4A463F] mt-0.5">DDP prepaid duties</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[#141310] font-normal">4–6d</p>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#635E52] mt-1">Transit Time</p>
                <p className="text-xs text-[#4A463F] mt-0.5">DHL Air priority to door</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[#141310] font-normal">sRGB</p>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#635E52] mt-1">ICC Calibrated</p>
                <p className="text-xs text-[#4A463F] mt-0.5">Noritsu fine-art profiles</p>
              </div>
            </StaggerBoxes>
          </div>

          {/* Editorial Artwork Hero Frame */}
          <div className="lg:col-span-5 relative">
            <RevealOnScroll direction="right" delay={0.12} distance={30}>
              <div className="bg-[#EFEEEA] p-4 border border-[#EAE6DF]">
                <div className="overflow-hidden aspect-[4/5] bg-[#E9E8E4] relative shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85"
                    alt="A grand hand-bound flush mount wedding album for UK stately commissions"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-[#FAF9F5]/95 backdrop-blur-md p-4 border border-[#EAE6DF]">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">UK Studio Archetype</span>
                    <h4 className="font-serif text-lg text-[#141310] mt-1 font-normal">12 × 16″ Master Panoramic Folio</h4>
                    <p className="text-xs text-[#4A463F] mt-1">British Racing Green English Buckram • 24K Custom Micro-Debossing</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 3. Section: The British Heritage Standard */}
      <section className="w-full bg-[#F4F4F0] px-4 md:px-16 py-16 md:py-24 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <RevealOnScroll direction="down" delay={0.02} distance={12}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#635E52]">Curated For Stately Venues</span>
              </RevealOnScroll>
              <TextReveal
                as="h2"
                direction="left"
                delay={0.06}
                className="font-serif text-3xl md:text-4xl text-[#141310] mt-2 font-normal"
              >
                The British Heritage Standard
              </TextReveal>
            </div>
            <RevealOnScroll direction="right" delay={0.12} distance={16}>
              <p className="text-sm md:text-base text-[#4A463F] max-w-md leading-relaxed">
                Tailored explicitly to withstand the weight, drama, and archival legacy demanded by commissions across grand city ballrooms, country estates, rustic stone barns, and Scottish lochs.
              </p>
            </RevealOnScroll>
          </div>

          <StaggerBoxes className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1} direction="up">
            {/* Card 1 */}
            <div className="bg-[#FAF9F5] p-6 flex flex-col justify-between border border-[#EAE6DF] shadow-sm hover:border-[#635E52]/40 transition-all duration-300">
              <div>
                <div className="aspect-[4/3] bg-[#EFEEEA] overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85"
                    alt="Mayfair grand ballrooms wedding celebration"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Venue Archetype 01</span>
                <h3 className="font-serif text-xl text-[#141310] mt-1 mb-2 font-normal">Mayfair Grand Ballrooms</h3>
                <p className="text-xs text-[#4A463F] leading-relaxed">
                  Claridge’s, The Dorchester, and Savoy banquet spreads require zero gutter splitting across sweeping architectural frames.
                </p>
              </div>
              <div className="pt-4 mt-6 bg-[#F4F4F0] p-3 text-xs font-semibold text-[#141310]">
                Recommended: 12×16″ Landscape Tome
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAF9F5] p-6 flex flex-col justify-between border border-[#EAE6DF] shadow-sm hover:border-[#635E52]/40 transition-all duration-300">
              <div>
                <div className="aspect-[4/3] bg-[#EFEEEA] overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=85"
                    alt="Palatial English country estates wedding"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Venue Archetype 02</span>
                <h3 className="font-serif text-xl text-[#141310] mt-1 mb-2 font-normal">Palatial Country Estates</h3>
                <p className="text-xs text-[#4A463F] leading-relaxed">
                  Blenheim Palace, Hedsor House, and Cliveden. Expansive lawns and majestic facades rendered with continuous tone silver halide.
                </p>
              </div>
              <div className="pt-4 mt-6 bg-[#F4F4F0] p-3 text-xs font-semibold text-[#141310]">
                Recommended: 14×14″ Square Monarch
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FAF9F5] p-6 flex flex-col justify-between border border-[#EAE6DF] shadow-sm hover:border-[#635E52]/40 transition-all duration-300">
              <div>
                <div className="aspect-[4/3] bg-[#EFEEEA] overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85"
                    alt="Cotswolds stone barn and Surrey wedding"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Venue Archetype 03</span>
                <h3 className="font-serif text-xl text-[#141310] mt-1 mb-2 font-normal">Cotswolds &amp; Surrey Barns</h3>
                <p className="text-xs text-[#4A463F] leading-relaxed">
                  Intimate, moody autumnal light, limestone barns, and rustic elegance complemented by raw unbleached linen and veg-tan covers.
                </p>
              </div>
              <div className="pt-4 mt-6 bg-[#F4F4F0] p-3 text-xs font-semibold text-[#141310]">
                Recommended: 10×10″ Raw English Buckram
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FAF9F5] p-6 flex flex-col justify-between border border-[#EAE6DF] shadow-sm hover:border-[#635E52]/40 transition-all duration-300">
              <div>
                <div className="aspect-[4/3] bg-[#EFEEEA] overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=85"
                    alt="Scottish castles and highlands elopements"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Venue Archetype 04</span>
                <h3 className="font-serif text-xl text-[#141310] mt-1 mb-2 font-normal">Scottish Castles &amp; Lochs</h3>
                <p className="text-xs text-[#4A463F] leading-relaxed">
                  Edinburgh Old Town, and Highlands elopements bound inside protective archival Solander clamshells against ambient moisture.
                </p>
              </div>
              <div className="pt-4 mt-6 bg-[#F4F4F0] p-3 text-xs font-semibold text-[#141310]">
                Recommended: Solander Clamshell Suite
              </div>
            </div>
          </StaggerBoxes>
        </div>
      </section>

      {/* 4. Section: Precision Bookbinding & Paper Chemistry */}
      <section className="w-full bg-[#FAF9F5] px-4 md:px-16 py-16 md:py-24 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <RevealOnScroll direction="down" delay={0.02} distance={12}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#635E52]">Laboratory Specifications</span>
            </RevealOnScroll>
            <TextReveal
              as="h2"
              direction="left"
              delay={0.06}
              className="font-serif text-3xl md:text-4xl text-[#141310] font-normal"
            >
              Precision Bookbinding &amp; Paper Chemistry
            </TextReveal>
            <RevealOnScroll direction="up" delay={0.12} distance={14}>
              <p className="text-base text-[#4A463F] leading-relaxed">
                Unlike cheap offset press digital books that buckle in British winter humidity, every Ultraa Flush Mount Album utilizes cold-mounted continuous silver halide sheets bonded to 1.2mm acid-free museum-grade unyielding cores.
              </p>
            </RevealOnScroll>

            <StaggerBoxes className="space-y-4 pt-2" stagger={0.1} direction="left">
              <div className="bg-[#EFEEEA] p-5 border-l-2 border-[#141310]">
                <div className="flex items-center gap-2">
                  <Maximize2 size={16} className="text-[#141310]" />
                  <h4 className="font-serif text-lg text-[#141310] font-normal">True 180° Layflat Zero-Cut Gutter</h4>
                </div>
                <p className="text-xs text-[#4A463F] mt-2 leading-relaxed">
                  Panoramic spreads stretch unbroken from edge to edge without center split lines, staples, or sewing threads disrupting family portraits.
                </p>
              </div>

              <div className="bg-[#EFEEEA] p-5 border-l-2 border-[#141310]">
                <div className="flex items-center gap-2">
                  <Layers size={16} className="text-[#141310]" />
                  <h4 className="font-serif text-lg text-[#141310] font-normal">1.2mm Solid pH-Neutral Core Substrate</h4>
                </div>
                <p className="text-xs text-[#4A463F] mt-2 leading-relaxed">
                  Heavyweight board cores ensure individual leaves do not curl, bend, or warp over generations of client handling.
                </p>
              </div>

              <div className="bg-[#EFEEEA] p-5 border-l-2 border-[#141310]">
                <div className="flex items-center gap-2">
                  <Palette size={16} className="text-[#141310]" />
                  <h4 className="font-serif text-lg text-[#141310] font-normal">Fuji Crystal Archive DPII Fine Art Stock</h4>
                </div>
                <p className="text-xs text-[#4A463F] mt-2 leading-relaxed">
                  Continuous tone silver halide laser exposure calibrated to British studio sRGB/Adobe RGB masters with archival permanence rating exceeding 150+ years.
                </p>
              </div>
            </StaggerBoxes>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <RevealOnScroll direction="right" delay={0.14} distance={26}>
              <div className="relative bg-[#E9E8E4] p-6 border border-[#EAE6DF]">
                <div className="aspect-[16/10] bg-[#EFEEEA] overflow-hidden shadow-xl relative">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85"
                    alt="Continuous seamless 180 degree panoramic spread flush mount binding"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#141310] text-[#FAF9F5] px-4 py-2 text-[10px] font-semibold uppercase tracking-wider">
                    100% Seamless Continuous Spread
                  </div>
                </div>

                {/* Micro specs overlay strip */}
                <div className="grid grid-cols-3 gap-4 mt-6 bg-[#FAF9F5] p-4 text-center border border-[#EAE6DF]">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Emulsion</p>
                    <p className="text-sm font-bold text-[#141310] mt-1">Silver Halide DPII</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Core Density</p>
                    <p className="text-sm font-bold text-[#141310] mt-1">1,150 gsm Rigid</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Gutter Gap</p>
                    <p className="text-sm font-bold text-[#141310] mt-1">0.0 mm Absolute</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 5. Section: UK Studio Logistics & Zero Customs Hassle */}
      <section className="w-full bg-[#EFEEEA] py-16 md:py-24 px-4 md:px-16 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <RevealOnScroll direction="down" delay={0.02} distance={12}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#635E52]">International Atelier Without Border Friction</span>
            </RevealOnScroll>
            <TextReveal
              as="h2"
              direction="up"
              delay={0.06}
              className="font-serif text-3xl md:text-4xl text-[#141310] mt-2 font-normal"
            >
              UK Studio Logistics &amp; Zero Customs Hassle
            </TextReveal>
            <RevealOnScroll direction="up" delay={0.14} distance={16}>
              <p className="text-base text-[#4A463F] mt-4 leading-relaxed">
                We understand that UK studio workflows cannot tolerate impounded courier parcels, unexpected import duty invoices, or ambiguous arrival windows. Ultraa delivers directly under guaranteed DDP protocol.
              </p>
            </RevealOnScroll>
          </div>

          <StaggerBoxes className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12} direction="up">
            {/* Feature 1 */}
            <div className="bg-[#FAF9F5] p-8 border border-[#EAE6DF] shadow-sm flex flex-col justify-between hover:border-[#635E52]/40 transition-all duration-300">
              <div>
                <div className="w-12 h-12 bg-[#EFEEEA] flex items-center justify-center mb-6">
                  <ShieldCheck size={24} className="text-[#141310]" />
                </div>
                <h3 className="font-serif text-xl text-[#141310] mb-3 font-normal">DDP Delivered Duty Paid</h3>
                <p className="text-xs text-[#4A463F] leading-relaxed">
                  All UK customs clearance, import documentation, and charges are fully settled in advance by our logistics liaison desk. Your studio never receives unexpected billing from customs agents.
                </p>
              </div>
              <div className="pt-6 mt-6 bg-[#F4F4F0] p-4 text-xs">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">Guarantee</span>
                <span className="font-medium text-[#141310]">Zero surcharge at your studio doorstep</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#FAF9F5] p-8 border border-[#EAE6DF] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#EFEEEA] flex items-center justify-center mb-6">
                  <Truck size={24} className="text-[#141310]" />
                </div>
                <h3 className="font-serif text-xl text-[#141310] mb-3 font-normal">4–6 Business Day Air Transit</h3>
                <p className="text-xs text-[#4A463F] leading-relaxed">
                  Dispatched via DHL Express Air directly from our Mumbai lab to addresses across London, Bristol, Manchester, and Edinburgh with real-time GPS tracking.
                </p>
              </div>
              <div className="pt-6 mt-6 bg-[#F4F4F0] p-4 text-xs">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">Express Air Carrier</span>
                <span className="font-medium text-[#141310]">DHL Worldwide High-Value Priority</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#FAF9F5] p-8 border border-[#EAE6DF] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#EFEEEA] flex items-center justify-center mb-6">
                  <CreditCard size={24} className="text-[#141310]" />
                </div>
                <h3 className="font-serif text-xl text-[#141310] mb-3 font-normal">HMRC-Compliant Sterling Billing</h3>
                <p className="text-xs text-[#4A463F] leading-relaxed">
                  Settle invoices effortlessly via UK Faster Payments (BACS) in British Pounds (£ GBP) or major business cards without international forex surcharges or conversion friction.
                </p>
              </div>
              <div className="pt-6 mt-6 bg-[#F4F4F0] p-4 text-xs">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">Settlement Currency</span>
                <span className="font-medium text-[#141310]">Pounds Sterling (£ GBP) via UK Account</span>
              </div>
            </div>
          </StaggerBoxes>
        </div>
      </section>

      {/* 6. Section: Curated Cover Materials & Finishes */}
      <section className="w-full bg-[#FAF9F5] px-4 md:px-16 py-16 md:py-24 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <RevealOnScroll direction="down" delay={0.02} distance={12}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#635E52]">Tactile Cover Archive</span>
              </RevealOnScroll>
              <TextReveal
                as="h2"
                direction="left"
                delay={0.06}
                className="font-serif text-3xl md:text-4xl text-[#141310] mt-2 font-normal"
              >
                Curated Cover Materials &amp; Finishes
              </TextReveal>
            </div>
            <RevealOnScroll direction="right" delay={0.12} distance={16}>
              <p className="text-sm md:text-base text-[#4A463F] max-w-md leading-relaxed">
                Crafted from heritage cloths and European full-grain leathers specifically selected to pair with traditional British country estate aesthetics.
              </p>
            </RevealOnScroll>
          </div>

          <StaggerBoxes className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1} direction="up">
            {MATERIALS.map((mat, idx) => (
              <div key={idx} className="group bg-[#F4F4F0] p-6 flex flex-col justify-between border border-[#EAE6DF] hover:border-[#635E52]/40 transition-all duration-300">
                <div>
                  <div className="aspect-square bg-[#EFEEEA] overflow-hidden mb-6 relative">
                    <img
                      src={mat.img}
                      alt={mat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#FAF9F5]/90 px-2 py-1 text-[10px] font-semibold uppercase text-[#141310]">
                      {mat.type}
                    </div>
                  </div>
                  <h3 className="font-serif text-lg text-[#141310] font-normal">{mat.name}</h3>
                  <p className="text-xs text-[#4A463F] mt-2 leading-relaxed">{mat.desc}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#EAE6DF]">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Foil Compatibility:</span>
                  <p className="text-xs font-medium text-[#141310] mt-1">{mat.foils}</p>
                </div>
              </div>
            ))}
          </StaggerBoxes>
        </div>
      </section>

      {/* 7. Section: UK Studio Liaison & Sample Swatch Box */}
      <section className="w-full bg-[#F4F4F0] px-4 md:px-16 py-16 md:py-24 border-b border-[#EAE6DF]" id="swatch-box">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <RevealOnScroll direction="down" delay={0.02} distance={12}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#635E52]">UK Studio Liaison</span>
            </RevealOnScroll>
            <TextReveal
              as="h2"
              direction="left"
              delay={0.06}
              className="font-serif text-3xl md:text-4xl text-[#141310] mt-2 mb-6 font-normal"
            >
              UK Studio Swatch Box &amp; Direct Consultation
            </TextReveal>
            <RevealOnScroll direction="left" delay={0.12} distance={16}>
              <p className="text-base text-[#4A463F] leading-relaxed mb-6">
                We maintain a dedicated studio liaison for established wedding and portrait photographers across Great Britain. Test our papers, evaluate the 1.2mm board weight in your hands, and share physical swatches directly with your couples.
              </p>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.16} distance={18}>
              <div className="bg-[#FAF9F5] p-6 border border-[#EAE6DF] shadow-sm mb-8 space-y-3">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#EFEEEA] text-[#141310]">
                    <Layers size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-[#141310] font-normal">The UK Photographer Swatch Tome (£35 Rebated)</h4>
                    <p className="text-xs text-[#4A463F] mt-1 leading-relaxed">
                      Delivered via Royal Mail Special Delivery within 48 hours. Includes 28 leather, buckram, and velvet swatches, genuine Fuji Crystal Archive DPII paper finish samples (Lustre, Silk, Gloss, Metallic), and foil deboss specimens.
                    </p>
                    <p className="text-xs font-bold text-[#141310] mt-2">
                      *The £35 fee is fully credited against your first client album order.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Quick Request Form */}
            {swatchFormState.submitted ? (
                <div className="studio-draft">
                  <h3>Your studio request is ready</h3>
                  <p>Review and send the details to the UK desk in your email app.</p>
                  <a className="studio-link primary" href={studioEmail(document.title, Object.fromEntries(Object.entries(swatchFormState).filter(([key]) => key !== 'submitted')), 'uk@ultraaalbums.com')}>Open email draft</a>
                  <button className="text-action" onClick={() => setSwatchFormState(prev => ({ ...prev, submitted:false }))}>Edit details</button>
                </div>
              ) : (
              <RevealOnScroll direction="up" delay={0.2} distance={20}>
                <form onSubmit={handleSwatchSubmit} className="space-y-4 max-w-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#635E52] mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alistair Campbell"
                        value={swatchFormState.fullName}
                        onChange={(e) => setSwatchFormState({ ...swatchFormState, fullName: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF9F5] text-[#141310] text-xs border border-[#EAE6DF] outline-none focus:border-[#141310]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#635E52] mb-1">Studio / Brand Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Campbell Fine Art"
                        value={swatchFormState.studioName}
                        onChange={(e) => setSwatchFormState({ ...swatchFormState, studioName: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF9F5] text-[#141310] text-xs border border-[#EAE6DF] outline-none focus:border-[#141310]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#635E52] mb-1">UK Studio Postcode</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. W1K 7AA"
                        value={swatchFormState.postcode}
                        onChange={(e) => setSwatchFormState({ ...swatchFormState, postcode: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF9F5] text-[#141310] text-xs border border-[#EAE6DF] outline-none focus:border-[#141310]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#635E52] mb-1">Telephone / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="+44 7..."
                        value={swatchFormState.phone}
                        onChange={(e) => setSwatchFormState({ ...swatchFormState, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF9F5] text-[#141310] text-xs border border-[#EAE6DF] outline-none focus:border-[#141310]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    style={{ color: '#FAF9F5' }}
                    className="w-full py-4 bg-[#141310] !text-[#FAF9F5] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#292724] hover:!text-[#FFFFFF] transition-colors text-center shadow-sm"
                  >
                    Order UK Swatch Box to Studio (£35 Rebated)
                  </button>
                </form>
              </RevealOnScroll>
            )}
          </div>

          <div className="lg:col-span-6">
            <RevealOnScroll direction="right" delay={0.16} distance={26}>
              <div className="relative bg-[#FAF9F5] p-6 border border-[#EAE6DF] shadow-md">
                <div className="aspect-[4/3] bg-[#EFEEEA] overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85"
                    alt="Linen sample swatch binder with textured swatches"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Direct Atelier Connection</p>
                    <h4 className="font-serif text-lg text-[#141310] font-normal">Remote Video &amp; Digital Proofing</h4>
                    <p className="text-xs text-[#4A463F] mt-0.5">Live screen-share consultations for format selection and ICC profiles.</p>
                  </div>
                  <a
                    href="https://wa.me/919322254315"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 bg-[#EFEEEA] text-[#141310] text-xs font-semibold uppercase tracking-wider hover:bg-[#EAE6DF] transition-colors text-center shrink-0"
                  >
                    WhatsApp Liaison
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 8. Section: Wholesale Flush Mount Album Formats */}
      <section className="w-full bg-[#FAF9F5] px-4 md:px-16 py-16 md:py-24 border-b border-[#EAE6DF]" id="spec-sheet">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <RevealOnScroll direction="down" delay={0.02} distance={12}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#635E52]">Transparent UK Studio Pricing</span>
            </RevealOnScroll>
            <TextReveal
              as="h2"
              direction="up"
              delay={0.06}
              className="font-serif text-3xl md:text-4xl text-[#141310] mt-2 font-normal"
            >
              Wholesale Flush Mount Album Formats
            </TextReveal>
            <RevealOnScroll direction="up" delay={0.14} distance={16}>
              <p className="text-sm md:text-base text-[#4A463F] mt-3">
                All baseline rates include 20 spreads (40 seamless panoramic pages), custom cover debossing, Fuji DPII Lustre emulsion, and archival white presentation box.
              </p>
            </RevealOnScroll>
          </div>

          <StaggerBoxes className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.14} direction="up">
            {/* Tier 1 */}
            <div className="bg-[#F4F4F0] p-8 border border-[#EAE6DF] shadow-sm flex flex-col justify-between hover:border-[#635E52]/40 transition-all duration-300">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Classic Parent &amp; Companion</span>
                <h3 className="font-serif text-2xl text-[#141310] mt-1 font-normal">10 × 10″ Square</h3>
                <p className="text-xs text-[#4A463F] mt-2 leading-relaxed">
                  The premier companion format for British country manor commissions and parent heirloom duplicates.
                </p>
                <div className="my-6 py-4 bg-[#FAF9F5] p-4 border border-[#EAE6DF]">
                  <p className="font-serif text-2xl text-[#141310] font-bold">
                    £195 <span className="font-sans text-xs font-normal text-[#4A463F]">ex VAT</span>
                  </p>
                  <p className="text-[11px] text-[#635E52] mt-1">Includes 20 spreads (40 pages)</p>
                </div>
                <ul className="space-y-2.5 text-xs text-[#4A463F] mb-6">
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#635E52]" /> English Buckram or Linen Cover</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#635E52]" /> 1.2mm Rigid Board Core</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#635E52]" /> Fuji Crystal Archive DPII</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#635E52]" /> DDP UK Express Air Shipping included</li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => handleEnquire('10x10 Volume')}
                className="w-full py-3 bg-[#E9E8E4] text-[#141310] text-xs font-semibold uppercase tracking-wider hover:bg-[#141310] hover:text-[#FAF9F5] transition-colors"
              >
                Configure 10×10″ Volume
              </button>
            </div>

            {/* Tier 2 (Highlighted) */}
            <div className="bg-[#292724] text-[#FAF9F5] p-8 shadow-xl flex flex-col justify-between relative hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#635E52] text-[#FAF9F5] px-4 py-1 text-[10px] font-semibold uppercase tracking-widest">
                UK Most Popular Format
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#CCC5BC]">Master Grand Wedding</span>
                <h3 className="font-serif text-2xl text-[#FAF9F5] mt-1 font-normal">12 × 12″ Sovereign</h3>
                <p className="text-xs text-[#CCC5BC] mt-2 leading-relaxed">
                  The flagship standard for fine-art British photographers. Balanced proportion accommodating cinematic landscapes and portraits.
                </p>
                <div className="my-6 py-4 bg-[#141310] p-4 border border-[#4A463F]">
                  <p className="font-serif text-2xl text-[#FAF9F5] font-bold">
                    £245 <span className="font-sans text-xs font-normal text-[#CCC5BC]">ex VAT</span>
                  </p>
                  <p className="text-[11px] text-[#CCC5BC] mt-1">Includes 20 spreads (40 pages)</p>
                </div>
                <ul className="space-y-2.5 text-xs text-[#EAE6DF] mb-6">
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#CCC5BC]" /> Full-Grain Tuscan Leather or Velvet</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#CCC5BC]" /> 24K Custom Gold Foil Monogram</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#CCC5BC]" /> True 180° Seamless Panoramic Spreads</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#CCC5BC]" /> Complimentary Lab ICC Soft-Proofing</li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => handleEnquire('12x12 Sovereign')}
                className="w-full py-3 bg-[#FAF9F5] text-[#141310] text-xs font-semibold uppercase tracking-wider hover:bg-[#EAE2D2] transition-colors"
              >
                Configure 12×12″ Volume
              </button>
            </div>

            {/* Tier 3 */}
            <div className="bg-[#F4F4F0] p-8 border border-[#EAE6DF] shadow-sm flex flex-col justify-between hover:border-[#635E52]/40 transition-all duration-300">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Stately Estate Panoramic</span>
                <h3 className="font-serif text-2xl text-[#141310] mt-1 font-normal">12 × 16″ Master Landscape</h3>
                <p className="text-xs text-[#4A463F] mt-2 leading-relaxed">
                  Bespoke panoramic folio designed explicitly for cathedral aisles, stately palace architecture, and double-page cinematic wedding imagery.
                </p>
                <div className="my-6 py-4 bg-[#FAF9F5] p-4 border border-[#EAE6DF]">
                  <p className="font-serif text-2xl text-[#141310] font-bold">
                    £315 <span className="font-sans text-xs font-normal text-[#4A463F]">ex VAT</span>
                  </p>
                  <p className="text-[11px] text-[#635E52] mt-1">Includes 20 spreads (40 pages)</p>
                </div>
                <ul className="space-y-2.5 text-xs text-[#4A463F] mb-6">
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#635E52]" /> Handcrafted Solander Box Compatibility</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#635E52]" /> Silk Paper / Fuji Matte Deep Pearl</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#635E52]" /> Dual Ribbon Silk Puller</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#635E52]" /> Concierge WhatsApp Support Desk</li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => handleEnquire('12x16 Master Landscape')}
                className="w-full py-3 bg-[#E9E8E4] text-[#141310] text-xs font-semibold uppercase tracking-wider hover:bg-[#141310] hover:text-[#FAF9F5] transition-colors"
              >
                Configure 12×16″ Folio
              </button>
            </div>
          </StaggerBoxes>

          {/* Download Strip */}
          <RevealOnScroll direction="up" delay={0.18} distance={18}>
            <div className="mt-14 bg-[#EFEEEA] p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#EAE6DF]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#141310] text-[#FAF9F5] flex items-center justify-center shrink-0">
                  <Download size={22} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#141310] font-normal">Ultraa Albums UK 2026 Studio Catalogue &amp; ICC Profile Pack</h4>
                  <p className="text-xs text-[#4A463F] mt-0.5">Includes full spread PSD layout templates, cover die-line guides, and Fuji DPII Noritsu profiles.</p>
                </div>
              </div>
              <Link
                to="/resources/catalog"
                style={{ color: '#FAF9F5' }}
                className="px-6 py-3 bg-[#141310] !text-[#FAF9F5] text-xs font-semibold uppercase tracking-widest shrink-0 hover:bg-[#292724] hover:!text-[#FFFFFF] transition-colors shadow-sm"
              >
                Request Spec Dossier
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 9. Section: UK Studio FAQs & Operations */}
      <section className="w-full bg-[#F4F4F0] px-4 md:px-16 py-16 md:py-24 border-b border-[#EAE6DF]">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-14">
            <RevealOnScroll direction="down" delay={0.02} distance={12}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#635E52]">Frequently Addressed Inquiries</span>
            </RevealOnScroll>
            <TextReveal
              as="h2"
              direction="up"
              delay={0.06}
              className="font-serif text-3xl md:text-4xl text-[#141310] mt-2 font-normal"
            >
              UK Studio FAQs &amp; Operations
            </TextReveal>
          </div>

          <StaggerBoxes className="space-y-4" stagger={0.08} direction="up">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-[#FAF9F5] border border-[#EAE6DF] shadow-sm">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <h3 className="font-serif text-lg text-[#141310] font-normal pr-4">{faq.q}</h3>
                    {isOpen ? <ChevronUp size={18} className="text-[#635E52] shrink-0" /> : <ChevronDown size={18} className="text-[#635E52] shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#4A463F] leading-relaxed border-t border-[#EAE6DF]/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </StaggerBoxes>

          {/* Quick Concierge CTA */}
          <RevealOnScroll direction="up" delay={0.16} distance={20}>
            <div className="mt-12 text-center bg-[#FAF9F5] p-8 border border-[#EAE6DF] shadow-sm">
              <h4 className="font-serif text-xl text-[#141310] font-normal">Need an immediate bespoke size or customized estate commission quote?</h4>
              <p className="text-sm text-[#4A463F] mt-2 mb-6">Our dedicated UK liaison is available via direct WhatsApp or telephone on GMT / BST working hours.</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/919322254315"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#FAF9F5' }}
                  className="px-6 py-3 bg-[#141310] !text-[#FAF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#292724] hover:!text-[#FFFFFF] transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <MessageSquare size={16} style={{ color: '#FAF9F5' }} />
                  <span style={{ color: '#FAF9F5' }}>WhatsApp UK Liaison</span>
                </a>
                <a
                  href="tel:+919322254315"
                  className="px-6 py-3 bg-[#EFEEEA] text-[#141310] text-xs font-semibold uppercase tracking-wider hover:bg-[#EAE6DF] transition-colors inline-flex items-center gap-2"
                >
                  <Phone size={16} />
                  <span>+91 93222 54315 (Desk)</span>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Final Studio Enquiry Link Banner */}
      <section className="w-full bg-[#141310] text-[#FAF9F5] py-14 px-4 md:px-16 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <RevealOnScroll direction="down" delay={0.02} distance={12}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#CCC5BC]">Studio Partnership</span>
          </RevealOnScroll>
          <TextReveal
            as="h3"
            direction="up"
            delay={0.06}
            className="font-serif text-2xl md:text-3xl font-normal text-[#FAF9F5]"
          >
            Register Your UK Photography Studio
          </TextReveal>
          <RevealOnScroll direction="up" delay={0.14} distance={16}>
            <p className="text-xs md:text-sm text-[#CCC5BC] leading-relaxed">
              Gain immediate wholesale account pricing, dedicated sample volume discounts, and priority DDP courier queue.
            </p>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.2} distance={18}>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleEnquire('UK Studio Registration')}
                className="px-8 py-3.5 bg-[#FAF9F5] text-[#141310] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#EAE2D2] transition-colors"
              >
                Complete Studio Enquiry
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
