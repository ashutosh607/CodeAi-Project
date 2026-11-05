import { studioEmail } from '../../utils/studioEmail';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Check, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  Mail, 
  Truck, 
  Package, 
  Lock, 
  Sliders 
} from 'lucide-react';
import TextReveal from '../../components/motion/TextReveal';
import RevealOnScroll from '../../components/motion/RevealOnScroll';
import StaggerBoxes from '../../components/motion/StaggerBoxes';

export default function UKBoxesAndBagsPage() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);
  const [sampleForm, setSampleForm] = useState({
    studioName: '',
    website: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
    sizes: ['12x12', '14x10'],
    submitted: false
  });

  useEffect(() => {
    document.title = 'Keepsake Boxes & Velvet Folio Enclosures for UK Studios | Ultraa Albums';
  }, []);

  const handleEnquire = (specName) => {
    navigate(`/enquire?product=${encodeURIComponent(`Boxes and Bags UK - ${specName}`)}`);
  };

  const handleSampleSubmit = (e) => {
    e.preventDefault();
    setSampleForm(prev => ({ ...prev, submitted: true }));
  };

  const handleSizeToggle = (size) => {
    setSampleForm(prev => {
      const exists = prev.sizes.includes(size);
      return {
        ...prev,
        sizes: exists ? prev.sizes.filter(s => s !== size) : [...prev.sizes, size]
      };
    });
  };

  const SIZING_MATRIX = [
    {
      format: '8 x 8" Intimate / Parent',
      dimensions: '212 x 212 x 55 mm',
      albumSpec: 'Up to 25 Spreads (50 Pages) Layflat',
      mediaWell: 'Mini USB Card Well (Optional)',
      price: '£95'
    },
    {
      format: '10 x 10" Classic Square',
      dimensions: '265 x 265 x 65 mm',
      albumSpec: 'Up to 35 Spreads Flush Mount',
      mediaWell: 'Crystal 3.0 Cinema USB Cavity',
      price: '£145'
    },
    {
      format: '12 x 12" Grand Heirloom',
      dimensions: '315 x 315 x 75 mm',
      albumSpec: 'Up to 45 Spreads Japanese Silk',
      mediaWell: 'Full Cinema SSD + USB Double Well',
      price: '£185'
    },
    {
      format: '14 x 10" Cinema Landscape',
      dimensions: '368 x 265 x 65 mm',
      albumSpec: 'Up to 30 Spreads Panoramic Tome',
      mediaWell: 'Side-mounted 4K Film Drive & Print Card',
      price: '£220'
    },
    {
      format: '16 x 12" Imperial Masterpiece',
      dimensions: '418 x 315 x 85 mm',
      albumSpec: 'Bespoke Couture Volumes',
      mediaWell: 'Custom Milled Dual Media Suite',
      price: '£240'
    }
  ];

  const FAQS = [
    {
      q: 'How do customs duties and UK VAT work?',
      a: 'All UK orders are shipped DDP (Delivered Duty Paid). Ultraa Albums clears all customs liabilities and import tariffs directly through our international air logistics partners. Your studio will receive a clean UK-compliant VAT invoice with zero surprise surcharges or post-delivery carrier hold-ups.'
    },
    {
      q: 'Can we send our own custom USB drives to be fitted into the box wells?',
      a: 'Yes. You can provide us with the precise millimetre measurements (length, width, depth) of your studio’s custom wooden, crystal, or metal USB drives, and our CNC routing table will cut an exact cavity with a thumb release notch. Alternatively, select our pre-milled crystal flash drives pre-installed in your box.'
    },
    {
      q: 'How does seasoned timber react to the British winter climate?',
      a: 'Natural timber requires rigorous acclimation. We only use timber kiln-dried to an 8–10% relative moisture content—the optimal equilibrium for indoor UK heating environments. Coupled with our micro-wax seals, our boxes will not warp, bow, or seize even in older English country houses with fluctuating ambient humidity.'
    },
    {
      q: 'Can our studio logo be blind debossed or foil-stamped on the boxes?',
      a: 'Yes. We craft high-precision magnesium stamping dies from your vector artwork (.AI or .PDF). Once made, your custom brass/magnesium studio die is stored permanently at our atelier in Mumbai and can be applied across all future boxes, slipcases, and linen dust bags at no recurring die fee.'
    }
  ];

  return (
    <div className="bg-[#FAF9F5] text-[#1B1C1A] min-h-screen font-sans selection:bg-[#EAE2D2] selection:text-[#1F1B12]">
      {/* 1. Top Breadcrumb & Regional Bar */}
      <section className="w-full bg-[#F4F4F0] px-4 md:px-16 py-3 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 text-[11px] font-semibold tracking-[0.14em] uppercase">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[#635E52]">
            <Link to="/" className="hover:text-[#141310] transition-colors">Home</Link>
            <span className="text-[#CCC5BC]">/</span>
            <Link to="/for-uk" className="hover:text-[#141310] transition-colors">For UK</Link>
            <span className="text-[#CCC5BC]">/</span>
            <span className="text-[#141310] font-bold">Box and Bags UK</span>
          </nav>
          
          <div className="flex items-center gap-2 text-[#4A463F]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#635E52]"></span>
            <span>Duty-Paid Air Transit • Tracked Door-to-Door Delivery</span>
          </div>
        </div>
      </section>

      {/* Regional Cross-Link Notice */}
      <div className="bg-[#EAE2D2]/50 border-b border-[#EAE6DF] px-4 md:px-16 py-2 text-center text-xs text-[#4A463F]">
        <span>Looking for our standard international enclosure collection? </span>
        <Link to="/products/box-and-bags" className="font-semibold text-[#141310] underline hover:text-[#635E52] transition-colors inline-flex items-center gap-1">
          Explore Standard Boxes &amp; Bags <ArrowRight size={11} />
        </Link>
      </div>

      {/* 2. Editorial Hero Section */}
      <section className="w-full py-12 md:py-20 px-4 md:px-16 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <RevealOnScroll direction="down" delay={0.02} distance={12}>
              <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 bg-[#EFEEEA] text-[#141310] text-[11px] font-semibold uppercase tracking-[0.18em]">
                <Package size={14} className="text-[#635E52]" />
                <span>Archival Enclosures • UK Dispatch • Hand-Milled Timber &amp; Velvet</span>
              </div>
            </RevealOnScroll>

            <TextReveal
              as="h1"
              direction="up"
              delay={0.06}
              className="font-serif text-3xl md:text-5xl lg:text-[54px] text-[#141310] leading-[1.12] tracking-tight mb-6 font-normal"
            >
              Architectural Keepsake Boxes &amp; Velvet Folio Enclosures for UK Studios
            </TextReveal>

            <RevealOnScroll direction="up" delay={0.14} distance={16}>
              <p className="text-base md:text-lg text-[#4A463F] max-w-2xl mb-8 leading-relaxed">
                Handcrafted timber chests, Solander archival clamshell cases, and tailored organic linen slipcases milled to exact millimetre tolerances for British wedding photographers. Bespoke debossing, magnetic flush closures, and zero-duty sterling billing.
              </p>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.2} distance={18}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#order-swatch-kit"
                  style={{ color: '#FAF9F5' }}
                  className="px-8 py-3.5 bg-[#141310] !text-[#FAF9F5] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#292724] hover:!text-[#FFFFFF] transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <span style={{ color: '#FAF9F5' }}>Order UK Studio Sample Kit</span>
                  <ArrowRight size={14} style={{ color: '#FAF9F5' }} />
                </a>
                <a
                  href="#archetypes"
                  className="px-8 py-3.5 bg-[#EFEEEA] text-[#141310] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#EAE6DF] transition-colors"
                >
                  Explore 3 Archetypes
                </a>
              </div>
            </RevealOnScroll>

            {/* Quick Metrics */}
            <StaggerBoxes className="grid grid-cols-3 gap-6 mt-10 pt-6 w-full max-w-lg bg-[#F4F4F0] p-6 border border-[#EAE6DF]" stagger={0.1} direction="up">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Tier Entry</span>
                <p className="font-serif text-xl text-[#141310] mt-1 font-bold">From £65</p>
                <span className="text-xs text-[#4A463F]">Linen Slipcases</span>
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Master Clamshell</span>
                <p className="font-serif text-xl text-[#141310] mt-1 font-bold">£135</p>
                <span className="text-xs text-[#4A463F]">Solander Archival</span>
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Hardwood Tomes</span>
                <p className="font-serif text-xl text-[#141310] mt-1 font-bold">£240</p>
                <span className="text-xs text-[#4A463F]">American Walnut</span>
              </div>
            </StaggerBoxes>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5 relative">
            <RevealOnScroll direction="right" delay={0.14} distance={26}>
              <div className="relative bg-[#E9E8E4] p-4 border border-[#EAE6DF] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85"
                  alt="American walnut wedding album keepsake box with velvet interior"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute -bottom-4 -left-4 bg-[#141310] text-[#FAF9F5] p-5 max-w-xs shadow-xl hidden md:block border border-[#4A463F]">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#CCC5BC] block mb-1">British Atelier Standard</span>
                  <p className="text-xs leading-snug text-[#EAE6DF]">
                    Calibrated for 10x10, 12x12, and 14x10 UK heirloom volumes with optional recessed cinema USB wells.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 3. Section: Three Enclosure Archetypes */}
      <section className="w-full py-16 md:py-24 px-4 md:px-16 bg-[#F4F4F0] border-b border-[#EAE6DF]" id="archetypes">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <RevealOnScroll direction="down" delay={0.02} distance={12}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52] block mb-2">Portfolio Categorisation</span>
              </RevealOnScroll>
              <TextReveal
                as="h2"
                direction="left"
                delay={0.06}
                className="font-serif text-3xl md:text-4xl text-[#141310] font-normal"
              >
                Three Enclosure Archetypes for the British Market
              </TextReveal>
            </div>
            <RevealOnScroll direction="right" delay={0.12} distance={16}>
              <p className="text-sm md:text-base text-[#4A463F] max-w-md leading-relaxed">
                Conceived for Cotswolds country weddings, Scottish highland celebrations, and London hotel galas. Engineered to protect fine-art prints for over a century.
              </p>
            </RevealOnScroll>
          </div>

          <StaggerBoxes className="grid grid-cols-1 lg:grid-cols-3 gap-6" stagger={0.12} direction="up">
            {/* Archetype 1 */}
            <article className="bg-[#FAF9F5] flex flex-col border border-[#EAE6DF] shadow-sm group hover:border-[#635E52]/40 transition-all duration-300">
              <div className="relative overflow-hidden h-64 bg-[#EFEEEA]">
                <img
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=85"
                  alt="Solid Wood Keepsake Chest in seasoned Teak"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 right-4 bg-[#141310] text-[#FAF9F5] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">
                  From £210
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#635E52] block mb-2">Archetype 01 • Solid Timber</span>
                  <h3 className="font-serif text-2xl text-[#141310] mb-3 font-normal">The Solid Wood Keepsake Chest</h3>
                  <p className="text-xs text-[#4A463F] leading-relaxed mb-6">
                    Carved from aged Plantation Teak and North American Black Walnut. Features precision-mitred jointing, internal spring brass latches, micro-buffed hand wax finish, and deep laser or engraved solid brass nameplates.
                  </p>
                  <ul className="space-y-2 mb-6 text-xs text-[#4A463F]">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#635E52]" /> Concealed neodymium magnetic rim closure</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#635E52]" /> Recessed velvet bed in 8 British heritage hues</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#635E52]" /> Optional crystal glass top aperture</li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-[#EAE6DF] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase text-[#635E52] block">Lead Time to UK</span>
                    <p className="font-serif text-sm font-bold text-[#141310]">10-12 Working Days</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleEnquire('Solid Wood Keepsake Chest')}
                    className="text-xs font-semibold uppercase tracking-widest text-[#141310] hover:text-[#635E52] transition-colors"
                  >
                    Configure →
                  </button>
                </div>
              </div>
            </article>

            {/* Archetype 2 */}
            <article className="bg-[#FAF9F5] flex flex-col border border-[#EAE6DF] shadow-sm group hover:border-[#635E52]/40 transition-all duration-300">
              <div className="relative overflow-hidden h-64 bg-[#EFEEEA]">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=85"
                  alt="Solander museum clamshell archival presentation box"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 right-4 bg-[#141310] text-[#FAF9F5] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">
                  From £135
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#635E52] block mb-2">Archetype 02 • Museum Clamshell</span>
                  <h3 className="font-serif text-2xl text-[#141310] mb-3 font-normal">The Solander Clamshell Box</h3>
                  <p className="text-xs text-[#4A463F] leading-relaxed mb-6">
                    Constructed from 3.5mm warp-resistant archival greyboard wrapped in heritage English bookcloth or raw Italian slub linen. Finished with dual 25mm pure Japanese silk pull-ribbons for weighted, spine-safe album extraction.
                  </p>
                  <ul className="space-y-2 mb-6 text-xs text-[#4A463F]">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#635E52]" /> 100% Acid-free archival interior lining</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#635E52]" /> Micro-embossed studio crests in matte gold</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#635E52]" /> Lie-flat 180-degree presentation spine</li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-[#EAE6DF] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase text-[#635E52] block">Lead Time to UK</span>
                    <p className="font-serif text-sm font-bold text-[#141310]">7-9 Working Days</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleEnquire('Solander Clamshell Box')}
                    className="text-xs font-semibold uppercase tracking-widest text-[#141310] hover:text-[#635E52] transition-colors"
                  >
                    Configure →
                  </button>
                </div>
              </div>
            </article>

            {/* Archetype 3 */}
            <article className="bg-[#FAF9F5] flex flex-col border border-[#EAE6DF] shadow-sm group hover:border-[#635E52]/40 transition-all duration-300">
              <div className="relative overflow-hidden h-64 bg-[#EFEEEA]">
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=85"
                  alt="Organic linen dust bag and velvet travel sleeve"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 right-4 bg-[#141310] text-[#FAF9F5] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">
                  From £65
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#635E52] block mb-2">Archetype 03 • Soft Archival</span>
                  <h3 className="font-serif text-2xl text-[#141310] mb-3 font-normal">The Folio Bag &amp; Velvet Slipcase</h3>
                  <p className="text-xs text-[#4A463F] leading-relaxed mb-6">
                    Tailored from bespoke 450gsm organic unbleached linen with reinforced bridle leather trim and paired with dense padded micro-pile velvet travel sleeves. Designed for seamless client hand-offs and travel protection.
                  </p>
                  <ul className="space-y-2 mb-6 text-xs text-[#4A463F]">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#635E52]" /> Heavyweight double-stitched french seams</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#635E52]" /> Water-repellent velvet fleece inner barrier</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#635E52]" /> Screen-printed studio monogram with hand-dyed cord</li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-[#EAE6DF] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase text-[#635E52] block">Lead Time to UK</span>
                    <p className="font-serif text-sm font-bold text-[#141310]">5-7 Working Days</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleEnquire('Folio Bag and Velvet Slipcase')}
                    className="text-xs font-semibold uppercase tracking-widest text-[#141310] hover:text-[#635E52] transition-colors"
                  >
                    Configure →
                  </button>
                </div>
              </div>
            </article>
          </StaggerBoxes>
        </div>
      </section>

      {/* 4. Section: Dual-Format Hybrid Nesting */}
      <section className="w-full py-16 md:py-24 px-4 md:px-16 bg-[#FAF9F5] border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <RevealOnScroll direction="left" delay={0.12} distance={24}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=85"
                    alt="Precision laser cut finger wells with velvet lining"
                    className="w-full h-56 object-cover border border-[#EAE6DF]"
                  />
                  <div className="bg-[#EFEEEA] p-5 border border-[#EAE6DF]">
                    <span className="text-[10px] font-semibold uppercase text-[#635E52] tracking-widest">Tolerance</span>
                    <p className="font-serif text-2xl text-[#141310] my-1">±0.5mm</p>
                    <p className="text-xs text-[#4A463F]">CNC milling tailored specifically to the exact spine thickness of your volume.</p>
                  </div>
                </div>
                <div className="space-y-4 pt-6">
                  <div className="bg-[#141310] text-[#FAF9F5] p-5 border border-[#4A463F]">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#CCC5BC]">Cinema Deliverable</span>
                    <p className="font-serif text-2xl text-[#FAF9F5] my-1">4K Reel Wells</p>
                    <p className="text-xs text-[#CCC5BC]">Dual compartments allowing video and photography duos to present in one cohesive chest.</p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=85"
                    alt="Satin pull ribbon inside wooden presentation box"
                    className="w-full h-56 object-cover border border-[#EAE6DF]"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start lg:pl-6">
            <RevealOnScroll direction="down" delay={0.02} distance={12}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52] mb-2">Architectural Interior Engineering</span>
            </RevealOnScroll>
            <TextReveal
              as="h2"
              direction="right"
              delay={0.06}
              className="font-serif text-3xl md:text-4xl text-[#141310] mb-4 font-normal"
            >
              Dual-Format Hybrid Nesting
            </TextReveal>
            <RevealOnScroll direction="up" delay={0.12} distance={14}>
              <p className="text-base text-[#4A463F] mb-6 leading-relaxed">
                Contemporary British wedding packages rarely deliver print alone. Ultraa Albums engineers custom-milled dual-compartment box chassis featuring integrated finger-wells for easy album retrieval alongside recessed secondary wells for cinematic USB drives, 4K Master SSDs, and highlight print folios.
              </p>
            </RevealOnScroll>

            <StaggerBoxes className="space-y-3 w-full mb-6" stagger={0.1} direction="left">
              <div className="p-4 bg-[#F4F4F0] border border-[#EAE6DF] flex items-start gap-3">
                <Package size={20} className="text-[#635E52] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-[#141310] font-normal">Bespoke Cinema Media Chambers</h4>
                  <p className="text-xs text-[#4A463F] mt-0.5">Carved timber, brass, or crystal flash drives sit perfectly flush in a bespoke velvet-lined alcove beside the photo tome.</p>
                </div>
              </div>

              <div className="p-4 bg-[#F4F4F0] border border-[#EAE6DF] flex items-start gap-3">
                <Sliders size={20} className="text-[#635E52] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-[#141310] font-normal">Spine-Safe Finger Wells &amp; Silk Ribbons</h4>
                  <p className="text-xs text-[#4A463F] mt-0.5">Ergonomic bevelled cutouts prevent hand-strain and eliminate corner creasing when extracting weighty 40-spread albums.</p>
                </div>
              </div>

              <div className="p-4 bg-[#F4F4F0] border border-[#EAE6DF] flex items-start gap-3">
                <Lock size={20} className="text-[#635E52] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-[#141310] font-normal">Concealed Magnet Array</h4>
                  <p className="text-xs text-[#4A463F] mt-0.5">Sub-surface N52 grade magnets provide a satisfying, whisper-quiet tactile seal when the heavy lid closes.</p>
                </div>
              </div>
            </StaggerBoxes>
          </div>
        </div>
      </section>

      {/* 5. Section: Climate-Shielded Transit to Great Britain */}
      <section className="w-full py-16 md:py-24 px-4 md:px-16 bg-[#141310] text-[#FAF9F5] border-b border-[#292724]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6">
            <RevealOnScroll direction="down" delay={0.02} distance={12}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#CCC5BC]">Global Logistics Assurance</span>
            </RevealOnScroll>
            <TextReveal
              as="h2"
              direction="left"
              delay={0.06}
              className="font-serif text-3xl md:text-4xl text-[#FAF9F5] font-normal"
            >
              Climate-Shielded Transit to Great Britain
            </TextReveal>
            <RevealOnScroll direction="up" delay={0.12} distance={14}>
              <p className="text-base text-[#CCC5BC] leading-relaxed">
                Bookblocks and fine timber expand and contract with atmospheric moisture. Every UK order is sealed in an impermeable 5-layer protected transit packaging engineered specifically for high-altitude air cargo and variable British weather.
              </p>
            </RevealOnScroll>

            <StaggerBoxes className="grid grid-cols-2 gap-4 pt-2" stagger={0.1} direction="up">
              <div className="bg-[#292724] p-5 border border-[#4A463F]">
                <span className="font-serif text-2xl text-[#FAF9F5] block mb-1">0%</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#CCC5BC] block mb-1">Moisture Fluctuation</span>
                <p className="text-xs text-[#CCC5BC]">Hermetic desiccated wrapping shields timber grain from ambient humidity.</p>
              </div>
              <div className="bg-[#292724] p-5 border border-[#4A463F]">
                <span className="font-serif text-2xl text-[#FAF9F5] block mb-1">Heathrow</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#CCC5BC] block mb-1">Priority Air Cleared</span>
                <p className="text-xs text-[#CCC5BC]">Pre-paid DDP customs clearance eliminates VAT delays or unexpected tariffs.</p>
              </div>
            </StaggerBoxes>

            <RevealOnScroll direction="up" delay={0.18} distance={16}>
              <div className="pt-2 flex items-center gap-3 text-xs text-[#CCC5BC]">
                <Truck size={16} className="text-[#CCC5BC]" />
                <span>Insured door-to-door transit to London, Edinburgh, Manchester, Bristol &amp; Belfast</span>
              </div>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-6">
            <RevealOnScroll direction="right" delay={0.16} distance={26}>
              <div className="bg-[#292724] p-6 md:p-8 border border-[#4A463F] shadow-2xl">
                <h3 className="font-serif text-xl text-[#FAF9F5] mb-5 font-normal">The 5-Layer Armored Transit System</h3>
                <StaggerBoxes className="space-y-3" stagger={0.08} direction="up">
                  <div className="flex items-start gap-3 p-3 bg-[#141310]/50 border border-[#4A463F]">
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-[#FAF9F5] text-[#141310]">L1</span>
                    <div>
                      <p className="text-xs font-semibold text-[#FAF9F5]">Acid-Free Micro-Foam &amp; VCI Vapor Film</p>
                      <p className="text-[11px] text-[#CCC5BC] mt-0.5">Direct contact buffer preventing friction buffing and metal clasp tarnish.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-[#141310]/50 border border-[#4A463F]">
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-[#FAF9F5] text-[#141310]">L2</span>
                    <div>
                      <p className="text-xs font-semibold text-[#FAF9F5]">Organic Linen Dust Wrap</p>
                      <p className="text-[11px] text-[#CCC5BC] mt-0.5">Breathable secondary barrier with your studio's foil stamped presentation label.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-[#141310]/50 border border-[#4A463F]">
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-[#FAF9F5] text-[#141310]">L3</span>
                    <div>
                      <p className="text-xs font-semibold text-[#FAF9F5]">High-Density EVA Corner Armor</p>
                      <p className="text-[11px] text-[#CCC5BC] mt-0.5">4-corner reinforced impact dampers absorbing drops up to 1.8 metres.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-[#141310]/50 border border-[#4A463F]">
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-[#FAF9F5] text-[#141310]">L4</span>
                    <div>
                      <p className="text-xs font-semibold text-[#FAF9F5]">Double-Wall Flute Corrugated Hard Shell</p>
                      <p className="text-[11px] text-[#CCC5BC] mt-0.5">Rigid puncture-resistant flight-ready outer shipper carton.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-[#141310]/50 border border-[#4A463F]">
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-[#FAF9F5] text-[#141310]">L5</span>
                    <div>
                      <p className="text-xs font-semibold text-[#FAF9F5]">Therma-Shield Shrink Seal</p>
                      <p className="text-[11px] text-[#CCC5BC] mt-0.5">Waterproof shrink envelope tested for heavy rain deliveries.</p>
                    </div>
                  </div>
                </StaggerBoxes>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 6. Section: UK Studio Swatch & Sample Box Order Form */}
      <section className="w-full py-16 md:py-24 px-4 md:px-16 bg-[#F4F4F0] border-b border-[#EAE6DF]" id="order-swatch-kit">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <RevealOnScroll direction="down" delay={0.02} distance={12}>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52] block mb-2">Tactile Studio Kit</span>
                </RevealOnScroll>
                <TextReveal
                  as="h2"
                  direction="left"
                  delay={0.06}
                  className="font-serif text-3xl md:text-4xl text-[#141310] mb-4 font-normal"
                >
                  UK Studio Swatch &amp; Enclosure Sample Box
                </TextReveal>
                <RevealOnScroll direction="left" delay={0.12} distance={14}>
                  <p className="text-base text-[#4A463F] mb-6 leading-relaxed">
                    Experience the genuine heft of seasoned Teak, the dense pile of British heritage velvets, and precision foil finishes before commissioning client tomes. Delivered to any UK studio postcode within 4 working days.
                  </p>
                </RevealOnScroll>

                <StaggerBoxes className="space-y-3 mb-8 text-xs text-[#4A463F]" stagger={0.08} direction="left">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#635E52]" />
                    <span className="font-medium text-[#141310]">8 Hand-Stained Timber Blocks (Walnut, Teak, Ash, Oak)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#635E52]" />
                    <span className="font-medium text-[#141310]">16 Velvet &amp; Italian Linen Lining Swatches</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#635E52]" />
                    <span className="font-medium text-[#141310]">Full Scale Solander Miniature Clamshell with Silk Pulls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#635E52]" />
                    <span className="font-medium text-[#141310]">Laser Engraving &amp; Hot Foil Typography Palette Guide</span>
                  </div>
                </StaggerBoxes>
              </div>

              <RevealOnScroll direction="up" delay={0.16} distance={16}>
                <div className="bg-[#FAF9F5] p-6 border border-[#EAE6DF]">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Full Cost Reimbursed</span>
                  <p className="text-xs text-[#4A463F] mt-1">
                    Sample box cost (£45 inc. UK VAT &amp; Shipping) is credited 100% against your first album enclosure order over £200.
                  </p>
                </div>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-7 bg-[#FAF9F5] p-6 md:p-10 border border-[#EAE6DF] shadow-sm">
              {sampleForm.submitted ? (
                <div className="studio-draft">
                  <h3>Your studio request is ready</h3>
                  <p>Review and send the details to the UK desk in your email app.</p>
                  <a className="studio-link primary" href={studioEmail(document.title, Object.fromEntries(Object.entries(sampleForm).filter(([key]) => key !== 'submitted')), 'uk@ultraaalbums.com')}>Open email draft</a>
                  <button className="text-action" onClick={() => setSampleForm(prev => ({ ...prev, submitted:false }))}>Edit details</button>
                </div>
              ) : (
                <RevealOnScroll direction="right" delay={0.14} distance={20}>
                  <form onSubmit={handleSampleSubmit} className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DF]">
                      <span className="font-serif text-lg text-[#141310] font-normal">Dispatch Request • United Kingdom</span>
                      <span className="font-serif text-lg text-[#141310] font-bold">£45.00 GBP</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#635E52] mb-1">Photographer / Studio Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rowan &amp; Birch Fine Art"
                          value={sampleForm.studioName}
                          onChange={(e) => setSampleForm({ ...sampleForm, studioName: e.target.value })}
                          className="w-full px-4 py-2.5 bg-[#F4F4F0] text-xs text-[#141310] border border-[#EAE6DF] outline-none focus:border-[#141310]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#635E52] mb-1">Studio Website / Portfolio *</label>
                        <input
                          type="url"
                          required
                          placeholder="https://studio.co.uk"
                          value={sampleForm.website}
                          onChange={(e) => setSampleForm({ ...sampleForm, website: e.target.value })}
                          className="w-full px-4 py-2.5 bg-[#F4F4F0] text-xs text-[#141310] border border-[#EAE6DF] outline-none focus:border-[#141310]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#635E52] mb-1">Direct Email (UK Contact) *</label>
                        <input
                          type="email"
                          required
                          placeholder="atelier@studio.co.uk"
                          value={sampleForm.email}
                          onChange={(e) => setSampleForm({ ...sampleForm, email: e.target.value })}
                          className="w-full px-4 py-2.5 bg-[#F4F4F0] text-xs text-[#141310] border border-[#EAE6DF] outline-none focus:border-[#141310]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#635E52] mb-1">UK Mobile / Telephone *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+44 7..."
                          value={sampleForm.phone}
                          onChange={(e) => setSampleForm({ ...sampleForm, phone: e.target.value })}
                          className="w-full px-4 py-2.5 bg-[#F4F4F0] text-xs text-[#141310] border border-[#EAE6DF] outline-none focus:border-[#141310]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#635E52] mb-1">UK Delivery Street Address *</label>
                      <input
                        type="text"
                        required
                        placeholder="Unit 4, The Mews, Clerkenwell"
                        value={sampleForm.address}
                        onChange={(e) => setSampleForm({ ...sampleForm, address: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#F4F4F0] text-xs text-[#141310] border border-[#EAE6DF] outline-none focus:border-[#141310] mb-2"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          required
                          placeholder="City (e.g. London)"
                          value={sampleForm.city}
                          onChange={(e) => setSampleForm({ ...sampleForm, city: e.target.value })}
                          className="w-full px-4 py-2.5 bg-[#F4F4F0] text-xs text-[#141310] border border-[#EAE6DF] outline-none focus:border-[#141310]"
                        />
                        <input
                          type="text"
                          required
                          placeholder="Postcode (e.g. EC1R 0AT)"
                          value={sampleForm.postcode}
                          onChange={(e) => setSampleForm({ ...sampleForm, postcode: e.target.value })}
                          className="w-full px-4 py-2.5 bg-[#F4F4F0] text-xs text-[#141310] border border-[#EAE6DF] outline-none focus:border-[#141310]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-[#635E52] mb-2">Album Volume Sizes Typically Ordered</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        {['10x10', '12x12', '14x10', 'Custom'].map((sz) => (
                          <label
                            key={sz}
                            onClick={() => handleSizeToggle(sz)}
                            className={`p-2.5 border cursor-pointer text-center select-none ${sampleForm.sizes.includes(sz) ? 'bg-[#141310] text-[#FAF9F5] border-[#141310]' : 'bg-[#F4F4F0] text-[#4A463F] border-[#EAE6DF]'}`}
                          >
                            {sz === 'Custom' ? 'Bespoke mm' : `${sz}" Volume`}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3">
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-[#141310] text-[#FAF9F5] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#292724] transition-colors"
                      >
                        Proceed to Secure GBP Payment (£45)
                      </button>
                      <p className="text-[11px] text-[#635E52] text-center mt-2">
                        Includes duty-free express air postage &amp; sample swatches.
                      </p>
                    </div>
                  </form>
                </RevealOnScroll>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Section: UK Standard Album Sizing & Enclosure Matrix */}
      <section className="w-full py-16 md:py-24 px-4 md:px-16 bg-[#FAF9F5] border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-10">
            <RevealOnScroll direction="down" delay={0.02} distance={12}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52] block mb-2">Precision Millimetre Engineering</span>
            </RevealOnScroll>
            <TextReveal
              as="h2"
              direction="left"
              delay={0.06}
              className="font-serif text-3xl md:text-4xl text-[#141310] font-normal"
            >
              UK Standard Album Sizing &amp; Enclosure Matrix
            </TextReveal>
            <RevealOnScroll direction="up" delay={0.12} distance={14}>
              <p className="text-sm md:text-base text-[#4A463F] max-w-2xl mt-2">
                Every box is manufactured to internal clearances allowing exactly 4mm lateral expansion and effortless thumb ribbon extraction.
              </p>
            </RevealOnScroll>
          </div>

          {/* Sizing Table */}
          <RevealOnScroll direction="up" delay={0.14} distance={20}>
            <div className="overflow-x-auto bg-[#FAF9F5] border border-[#EAE6DF] shadow-sm mb-16">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#E9E8E4] text-[#141310] text-[11px] font-semibold uppercase tracking-wider border-b border-[#EAE6DF]">
                    <th className="p-4 md:p-5">Format Size</th>
                    <th className="p-4 md:p-5">Internal Dimensions (mm)</th>
                    <th className="p-4 md:p-5">Ideal Album Spec</th>
                    <th className="p-4 md:p-5">Secondary Cinema Well</th>
                    <th className="p-4 md:p-5 text-right">GBP Unit Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE6DF] text-xs text-[#4A463F]">
                  {SIZING_MATRIX.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F4F4F0] transition-colors">
                      <td className="p-4 md:p-5 font-serif text-sm text-[#141310] font-medium">{row.format}</td>
                      <td className="p-4 md:p-5 font-mono text-xs">{row.dimensions}</td>
                      <td className="p-4 md:p-5">{row.albumSpec}</td>
                      <td className="p-4 md:p-5">{row.mediaWell}</td>
                      <td className="p-4 md:p-5 text-right font-serif text-base text-[#141310] font-bold">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealOnScroll>

          {/* FAQ Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <RevealOnScroll direction="down" delay={0.02} distance={12}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52] block mb-2">Client Care &amp; Logistics</span>
              </RevealOnScroll>
              <TextReveal
                as="h3"
                direction="left"
                delay={0.06}
                className="font-serif text-2xl md:text-3xl text-[#141310] mb-3 font-normal"
              >
                Frequently Asked Questions
              </TextReveal>
              <RevealOnScroll direction="left" delay={0.12} distance={14}>
                <p className="text-xs text-[#4A463F] mb-6 leading-relaxed">
                  Everything UK photographers need to know about VAT invoicing, Heathrow logistics, wood moisture acclimatization, and custom studio debossing.
                </p>
                <div className="bg-[#EFEEEA] p-5 border border-[#EAE6DF]">
                  <span className="text-[10px] font-semibold uppercase text-[#635E52]">UK Atelier Liaison</span>
                  <p className="text-sm font-semibold text-[#141310] mt-1">+91 93222 54315</p>
                  <p className="text-xs text-[#4A463F] mt-1">Direct WhatsApp dedicated to photographers on GMT / BST working hours.</p>
                </div>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-8 space-y-3">
              <StaggerBoxes className="space-y-3" stagger={0.08} direction="up">
                {FAQS.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div key={idx} className="bg-[#F4F4F0] border border-[#EAE6DF]">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4"
                      >
                        <h4 className="font-serif text-base text-[#141310] font-normal">{faq.q}</h4>
                        {isOpen ? <ChevronUp size={16} className="text-[#635E52] shrink-0" /> : <ChevronDown size={16} className="text-[#635E52] shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-xs text-[#4A463F] leading-relaxed border-t border-[#EAE6DF]/60 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </StaggerBoxes>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Interactive Studio Concierge Strip */}
      <section className="w-full py-14 px-4 md:px-16 bg-[#EFEEEA] border-b border-[#EAE6DF]">
        <RevealOnScroll direction="up" delay={0.08} distance={16}>
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#635E52] block mb-1">Tailored Commissions</span>
              <h3 className="font-serif text-2xl text-[#141310] font-normal">Need a one-off bespoke dimension for an oversized UK wedding volume?</h3>
              <p className="text-xs text-[#4A463F] mt-1">Our craftspeople cut custom timber chassis and Solander cases to any specified dimension within 48 hours.</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+919322254315"
                className="px-5 py-3 bg-[#FAF9F5] text-[#141310] text-xs font-semibold uppercase tracking-wider border border-[#EAE6DF] hover:bg-[#FAF9F5]/80 transition-colors inline-flex items-center gap-2"
              >
                <Phone size={14} />
                <span>+91 93222 54315</span>
              </a>
              <button
                type="button"
                onClick={() => handleEnquire('Bespoke Enclosure')}
                className="px-6 py-3 bg-[#141310] text-[#FAF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#292724] transition-colors inline-flex items-center gap-2"
              >
                <Mail size={14} />
                <span>Request Quote</span>
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}
