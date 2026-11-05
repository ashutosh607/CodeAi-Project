import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Check, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  MessageSquare
} from 'lucide-react';
import TextReveal from '../../components/motion/TextReveal';
import RevealOnScroll from '../../components/motion/RevealOnScroll';
import StaggerBoxes from '../../components/motion/StaggerBoxes';

export default function UKSlipInAlbumsPage() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    document.title = 'Bespoke Slip-In Albums & Matted Folios for UK Portrait Studios | Ultraa Albums';
  }, []);

  const handleEnquire = (formatName) => {
    navigate(`/enquire?product=${encodeURIComponent(`Slip-In Albums UK - ${formatName}`)}`);
  };

  const FAQS = [
    {
      q: 'How fast are folios dispatched to UK studios?',
      a: 'Standard slip-in albums and matted folios in core linens ship within 4 working days from order confirmation. Express transit via Royal Mail Special Delivery or DHL Priority Air takes an additional 2 working days directly to London, Birmingham, Glasgow, and UK regional postcodes.'
    },
    {
      q: 'Can we order bespoke openings for non-standard prints and odd aspect ratios?',
      a: 'Yes. Our digital precision cutting plotter accommodates exact millimetre specifications for oval mats, panoramic triptychs, and multi-photo baby milestone openings. Minimum custom opening order is only 5 units with zero setup surcharge.'
    },
    {
      q: 'Are UK orders Delivered Duty Paid (DDP) with zero unexpected import VAT?',
      a: 'Every transaction is invoiced in Sterling (£ GBP) on a Delivered Duty Paid (DDP) basis. Ultraa Albums absorbs all customs clearance processing, paperwork, and cross-border duties. The price displayed in your quote is your complete landed price with no surprise courier bills.'
    },
    {
      q: 'How does the zero-adhesive friction channel protect our client prints?',
      a: 'Our folios feature engineered perimeter friction channels. Prints slide smoothly through hidden edge slots without any spray, glue, or thermal tape. If families want to update prints in the future or inspect the archival paper backing, the original print remains in pristine, reversible condition.'
    }
  ];

  const APERTURE_FORMATS = [
    {
      id: '4r',
      name: 'Intimate Client Gift Tome',
      format: '4R Format // 6×4 Inches',
      rate: '£48',
      rateDesc: '/ 20-openings',
      desc: 'Compact 10 or 20-opening slip-in album. The definitive client booking incentive or grandparents gift volume for newborn and intimate portrait sessions.',
      img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=85'
    },
    {
      id: '5r',
      name: 'Studio Classic Portrait Folio',
      format: '5R Format // 7×5 Inches',
      rate: '£65',
      rateDesc: '/ 20-openings',
      desc: 'The benchmark for British maternity and children portraits. Accommodates standard 7×5" lab proofs with generous 1.5" archival mat border reveals.',
      img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=85'
    },
    {
      id: '8x10',
      name: 'Fine Art Gallery Folio',
      format: '8×10 Format // Exhibition',
      rate: '£85',
      rateDesc: '/ 10-openings',
      desc: 'Substantial 10-opening luxury volume designed for signature fine art portrait sales. Weighted covers with panoramic lay-flat shelf presence.',
      img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=85'
    },
    {
      id: 'trifold',
      name: 'Tri-Fold Story Folios',
      format: 'Multi-Aperture // Narrative',
      rate: '£95',
      rateDesc: '/ Tri-Fold',
      desc: 'Dual, Quad, and Triptych self-standing desk folios. Engineered specifically for newborn milestone series and generational portrait triptychs on mantlepieces.',
      img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=85'
    }
  ];

  return (
    <div className="bg-[#FAF9F5] text-[#1B1C1A] min-h-screen font-sans selection:bg-[#EAE2D2] selection:text-[#1F1B12]">
      {/* 1. Regional Locale & Breadcrumbs Strip */}
      <div className="w-full bg-[#F4F4F0] py-3 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-16 flex flex-wrap items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#635E52]">
            <Link to="/" className="hover:text-[#141310] transition-colors">Home</Link>
            <span className="text-[#CCC5BC]">/</span>
            <Link to="/for-uk" className="hover:text-[#141310] transition-colors">For UK</Link>
            <span className="text-[#CCC5BC]">/</span>
            <span className="text-[#141310] font-bold">Slip in Albums for UK</span>
          </nav>
          <div className="flex items-center gap-4 text-[#635E52] text-[10px] font-semibold uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#635E52]"></span>
              Direct Sterling (£ GBP) Settlement
            </span>
            <span className="hidden sm:inline text-[#CCC5BC]">|</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#635E52]"></span>
              DDP London Hub Tracked Air Transit
            </span>
            <span className="hidden md:inline text-[#CCC5BC]">|</span>
            <span className="hidden md:inline">Zero Post-Brexit Customs Clearance Friction</span>
          </div>
        </div>
      </div>

      {/* Reciprocal Indian/International Catalog Switcher Banner */}
      <div className="w-full bg-[#EFEEEA] border-b border-[#EAE6DF] py-2 px-5 md:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between text-xs text-[#635E52]">
          <span>Viewing dedicated UK Studio Edition (Sterling £ GBP, DDP London Delivery).</span>
          <Link to="/products/slip-in-albums" className="font-semibold underline hover:text-[#141310] transition-colors">
            Switch to International Catalog →
          </Link>
        </div>
      </div>

      {/* 2. Hero Section: Editorial Architecture */}
      <section className="w-full py-12 lg:py-20 px-5 md:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Manifesto */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <RevealOnScroll direction="down" delay={0.02} distance={14}>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#635E52]">
                  Atelier Archives // British Portrait Folios
                </span>
                <span className="h-px w-8 bg-[#635E52]"></span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4A463F]">
                  Fine Art Guild Standards
                </span>
              </div>
            </RevealOnScroll>

            <TextReveal as="h1" direction="up" delay={0.08} className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141310] font-normal leading-tight">
              Bespoke Slip-In Albums &amp; Matted Folios for UK Portrait Studios
            </TextReveal>

            <RevealOnScroll direction="up" delay={0.18} distance={18}>
              <p className="text-base lg:text-lg text-[#4A463F] max-w-2xl leading-relaxed">
                Handcrafted bevel-cut matted folios and archival slip-in tomes tailored for newborn, fine-art portrait, and generational family studios across Great Britain. Zero adhesive contact, pure cotton core boards, and expedited Royal Mail / DDP parcel delivery.
              </p>
            </RevealOnScroll>

            {/* Spec Badges Bar */}
            <StaggerBoxes className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2" stagger={0.08} direction="up">
              <div className="bg-[#F4F4F0] p-3.5 border border-[#EAE6DF]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">Entry Point</span>
                <span className="font-serif text-xl text-[#141310] font-normal mt-1 block">From £48</span>
                <span className="text-[11px] text-[#4A463F] mt-0.5 block">Fixed GBP Billing</span>
              </div>
              <div className="bg-[#F4F4F0] p-3.5 border border-[#EAE6DF]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">Lead Times</span>
                <span className="font-serif text-xl text-[#141310] font-normal mt-1 block">4-Day Speed</span>
                <span className="text-[11px] text-[#4A463F] mt-0.5 block">UK Priority Dispatch</span>
              </div>
              <div className="bg-[#F4F4F0] p-3.5 border border-[#EAE6DF]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">Aperture Mats</span>
                <span className="font-serif text-xl text-[#141310] font-normal mt-1 block">4-Ply Core</span>
                <span className="text-[11px] text-[#4A463F] mt-0.5 block">100% Acid-Free Cotton</span>
              </div>
              <div className="bg-[#F4F4F0] p-3.5 border border-[#EAE6DF]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">UK Courier</span>
                <span className="font-serif text-xl text-[#141310] font-normal mt-1 block">Royal Mail</span>
                <span className="text-[11px] text-[#4A463F] mt-0.5 block">Special Delivery Tracked</span>
              </div>
            </StaggerBoxes>

            {/* CTA Cluster */}
            <RevealOnScroll direction="up" delay={0.28} distance={16}>
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#sample-pack"
                  style={{ color: '#FAF9F5' }}
                  className="px-8 py-4 bg-[#141310] !text-[#FAF9F5] text-xs font-semibold uppercase tracking-widest text-center hover:bg-[#292724] hover:!text-[#FFFFFF] transition-colors shadow-sm"
                >
                  Order UK Studio Sample Folio (£35)
                </a>
                <a
                  href="#apertures"
                  className="px-8 py-4 bg-[#E9E8E4] text-[#141310] text-xs font-semibold uppercase tracking-widest text-center hover:bg-[#DBDAD6] transition-colors"
                >
                  Explore Aperture Formats ↓
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Visual Composition with Annotation Card */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <RevealOnScroll direction="right" delay={0.2} distance={28}>
              <div className="relative bg-[#EFEEEA] p-4 border border-[#EAE6DF]">
                <img
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85"
                  alt="Open luxury British slip-in matted photo album wrapped in oatmeal woven heritage linen showing precision diamond bevel-cut portrait mat."
                  className="w-full h-[480px] sm:h-[520px] object-cover"
                />
                {/* Tactile Annotation Card */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#FFFFFF] p-5 max-w-xs shadow-lg border border-[#EAE6DF]">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#635E52] block">
                    Specimen 08 / Mayfair Edition
                  </span>
                  <p className="font-serif text-[16px] text-[#141310] mt-1 font-normal leading-snug">
                    Oatmeal Linen with 45° Ivory Bevel Core
                  </p>
                  <p className="text-[12px] text-[#4A463F] mt-1.5 leading-relaxed">
                    Includes hidden slide-in perimeter slot, preventing print abrasion or glue distortion.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 3. 3 Pillars: The British Portrait Advantage */}
      <section className="w-full bg-[#EFEEEA] py-20 px-5 md:px-16 border-y border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">
                Craft Engineering
              </span>
              <TextReveal as="h2" direction="left" delay={0.06} className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal mt-2">
                The British Portrait Studio Advantage
              </TextReveal>
            </div>
            <RevealOnScroll direction="right" delay={0.12}>
              <p className="text-sm md:text-base text-[#4A463F] max-w-md leading-relaxed">
                Engineered for high-end In-Person Sales (IPS) sessions where tactile permanence, instantaneous client print insertion, and heirloom display define your studio tier.
              </p>
            </RevealOnScroll>
          </div>

          <StaggerBoxes className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.1} direction="up">
            {/* Pillar 01 */}
            <div className="bg-[#FAF9F5] p-8 flex flex-col justify-between border border-[#EAE6DF]">
              <div>
                <span className="font-serif text-2xl text-[#635E52] block mb-4">01</span>
                <h3 className="font-serif text-xl text-[#141310] font-normal mb-3">Zero Adhesive Assembly</h3>
                <p className="text-sm text-[#4A463F] leading-relaxed">
                  Designed with engineered friction channels. Photographs slide securely through precision concealed edge slits without sprays, glues, or thermal mounting. Families can rotate prints over generations while keeping archival paper stock in mint condition.
                </p>
              </div>
              <div className="mt-8 pt-4 bg-[#F4F4F0] p-4 border-t border-[#EAE6DF]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">Preservation Grade</span>
                <p className="text-[12px] text-[#4A463F] mt-1">Reversible dry-mount physics guaranteeing zero substrate warp.</p>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="bg-[#FAF9F5] p-8 flex flex-col justify-between border border-[#EAE6DF]">
              <div>
                <span className="font-serif text-2xl text-[#635E52] block mb-4">02</span>
                <h3 className="font-serif text-xl text-[#141310] font-normal mb-3">45° Diamond Bevel-Cut Mats</h3>
                <p className="text-sm text-[#4A463F] leading-relaxed">
                  Every opening is individually CNC-routed with knife-sharp 45° diamond bevels into museum-grade 4-ply alpha-cellulose. Choose from Natural Warm Ivory or Crisp Snow White cores that will never yellow, gas-off, or fade under British ambient light.
                </p>
              </div>
              <div className="mt-8 pt-4 bg-[#F4F4F0] p-4 border-t border-[#EAE6DF]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">Material Integrity</span>
                <p className="text-[12px] text-[#4A463F] mt-1">100% Acid-free, buffered with calcium carbonate at pH 8.5.</p>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="bg-[#FAF9F5] p-8 flex flex-col justify-between border border-[#EAE6DF]">
              <div>
                <span className="font-serif text-2xl text-[#635E52] block mb-4">03</span>
                <h3 className="font-serif text-xl text-[#141310] font-normal mb-3">Self-Standing Bi-Fold &amp; Tri-Fold</h3>
                <p className="text-sm text-[#4A463F] leading-relaxed">
                  Beyond multi-page albums, our matted presentation folios are weighted with balanced internal spine hinges. Designed specifically to stand proud on Cotswolds mantlepieces, Mayfair dressing consoles, and country manor library shelving without easels.
                </p>
              </div>
              <div className="mt-8 pt-4 bg-[#F4F4F0] p-4 border-t border-[#EAE6DF]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">Display Engineering</span>
                <p className="text-[12px] text-[#4A463F] mt-1">Rigid 1200gsm binder board cores with layflat stability.</p>
              </div>
            </div>
          </StaggerBoxes>
        </div>
      </section>

      {/* 4. Aperture Standards & Studio Formats */}
      <section className="w-full bg-[#FAF9F5] py-20 px-5 md:px-16" id="apertures">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">
                Studio Catalog
              </span>
              <TextReveal as="h2" direction="left" delay={0.06} className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal mt-2">
                Curated UK Aperture Standards
              </TextReveal>
            </div>
            <RevealOnScroll direction="right" delay={0.12}>
              <p className="text-sm md:text-base text-[#4A463F] max-w-lg leading-relaxed">
                Precision standard dimensions calibrated directly to British lab fine-art cut sizes. Supplied fully assembled with protective interleaved tissue.
              </p>
            </RevealOnScroll>
          </div>

          <StaggerBoxes className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08} direction="up">
            {APERTURE_FORMATS.map((fmt) => (
              <div key={fmt.id} className="bg-[#F4F4F0] p-6 flex flex-col justify-between border border-[#EAE6DF] hover:border-[#141310] transition-colors">
                <div>
                  <div className="overflow-hidden bg-[#E3E2DF] mb-6">
                    <img
                      src={fmt.img}
                      alt={fmt.name}
                      className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">
                    {fmt.format}
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
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Studio Rate</span>
                    <span className="font-serif text-lg text-[#141310] font-bold">
                      {fmt.rate} <span className="text-xs font-normal text-[#635E52]">{fmt.rateDesc}</span>
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleEnquire(fmt.name)}
                    style={{ color: '#FAF9F5' }}
                    className="mt-3 w-full py-2.5 bg-[#141310] !text-[#FAF9F5] text-center text-xs font-semibold uppercase tracking-wider hover:bg-[#292724] hover:!text-[#FFFFFF] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span style={{ color: '#FAF9F5' }}>Configure {fmt.name.split(' ')[0]}</span>
                    <ArrowRight size={13} style={{ color: '#FAF9F5' }} />
                  </button>
                </div>
              </div>
            ))}
          </StaggerBoxes>
        </div>
      </section>

      {/* 5. Sensory Materials & Bespoke Heraldry */}
      <section className="w-full bg-[#F4F4F0] py-20 px-5 md:px-16 border-t border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">
                  Sensory Materials
                </span>
                <TextReveal as="h2" direction="left" delay={0.06} className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal mt-2 mb-4">
                  British Heritage Cloth &amp; Bespoke Imprints
                </TextReveal>
                <p className="text-sm text-[#4A463F] leading-relaxed">
                  Every slip-in tome is wrapped by hand in our workshop using heavy-gauge bookmaking textiles selected for longevity in temperate UK climates. Finished with hot-stamped magnesium studio dies.
                </p>
              </div>

              <div className="bg-[#FAF9F5] p-6 border border-[#EAE6DF] space-y-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">
                  Complimentary Brass Die Setup
                </span>
                <p className="text-xs text-[#4A463F] leading-relaxed">
                  UK studios ordering 10+ folios receive custom brass studio die engraving (worth £65) archived free for all future commissions.
                </p>
                <div className="flex items-center gap-2 pt-1 text-xs text-[#141310] font-semibold">
                  <ShieldCheck size={16} className="text-[#635E52]" />
                  <span>Lifetime Studio Die Storage</span>
                </div>
              </div>
            </div>

            {/* Right Column: Swatches Bento */}
            <StaggerBoxes className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6" stagger={0.12} direction="up">
              {/* English Bookcloth */}
              <div className="bg-[#FAF9F5] p-6 border border-[#EAE6DF]">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-serif text-lg text-[#141310] font-normal">Heritage English Bookcloth</h4>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Tactile Weave</span>
                </div>
                <p className="text-xs text-[#4A463F] mb-6 leading-relaxed">
                  Tight 100% cotton buckram weave with water-repellent finish. High friction resistance for daily family handling.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2.5 bg-[#F4F4F0] border border-[#EAE6DF]">
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 bg-[#1a2c3a] inline-block shadow-sm"></span>
                      <span className="text-xs text-[#141310] font-medium">Midnight Navy</span>
                    </div>
                    <span className="text-[10px] uppercase text-[#635E52]">Royal Blue Undertones</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-[#F4F4F0] border border-[#EAE6DF]">
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 bg-[#1b3022] inline-block shadow-sm"></span>
                      <span className="text-xs text-[#141310] font-medium">British Racing Green</span>
                    </div>
                    <span className="text-[10px] uppercase text-[#635E52]">Classic Country Manor</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-[#F4F4F0] border border-[#EAE6DF]">
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 bg-[#d9d2c5] inline-block shadow-sm"></span>
                      <span className="text-xs text-[#141310] font-medium">Oatmeal Fine Weave</span>
                    </div>
                    <span className="text-[10px] uppercase text-[#635E52]">Nordic Neutral Studio</span>
                  </div>
                </div>
              </div>

              {/* Italian Leatherettes */}
              <div className="bg-[#FAF9F5] p-6 border border-[#EAE6DF]">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-serif text-lg text-[#141310] font-normal">Supple Italian Leatherettes</h4>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Vegan Certified</span>
                </div>
                <p className="text-xs text-[#4A463F] mb-6 leading-relaxed">
                  Full-grain synthetic calfskins with organic wax touch. Scratch-proof, wipe-clean surfaces ideal for busy family homes.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2.5 bg-[#F4F4F0] border border-[#EAE6DF]">
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 bg-[#7c4d32] inline-block shadow-sm"></span>
                      <span className="text-xs text-[#141310] font-medium">Bespoke Saddle Tan</span>
                    </div>
                    <span className="text-[10px] uppercase text-[#635E52]">Warm Amber Patina</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-[#F4F4F0] border border-[#EAE6DF]">
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 bg-[#191919] inline-block shadow-sm"></span>
                      <span className="text-xs text-[#141310] font-medium">Matte Noir</span>
                    </div>
                    <span className="text-[10px] uppercase text-[#635E52]">Deep Architectural Black</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-[#F4F4F0] border border-[#EAE6DF]">
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 bg-[#4a1521] inline-block shadow-sm"></span>
                      <span className="text-xs text-[#141310] font-medium">Claret Wine</span>
                    </div>
                    <span className="text-[10px] uppercase text-[#635E52]">Subtle Rich Crimson</span>
                  </div>
                </div>
              </div>

              {/* Finishing Details Strip */}
              <div className="sm:col-span-2 bg-[#292724] text-[#FAF9F5] p-6 sm:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#CDC6B7] block mb-1">
                      Finishing Techniques
                    </span>
                    <h3 className="font-serif text-xl text-[#FAF9F5] font-normal">
                      Blind Debossing, 24K Matte Gold &amp; Micro-Foil
                    </h3>
                    <p className="text-xs text-[#CDC6B7] mt-2 max-w-xl leading-relaxed">
                      Imprint studio crests, newborn baptism dates, or family heraldry onto front centres or bottom rear spines. Crisp serif letters pressed with 400kg hydraulic precision.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#FFFFFF]/10 px-4 py-3 text-center border border-[#FFFFFF]/15">
                      <span className="font-serif text-lg text-[#FAF9F5] block font-normal">24K</span>
                      <span className="text-[9px] uppercase tracking-wider text-[#CDC6B7]">Matte Gold</span>
                    </div>
                    <div className="bg-[#FFFFFF]/10 px-4 py-3 text-center border border-[#FFFFFF]/15">
                      <span className="font-serif text-lg text-[#FAF9F5] block font-normal">Pure</span>
                      <span className="text-[9px] uppercase tracking-wider text-[#CDC6B7]">Blind Deboss</span>
                    </div>
                    <div className="bg-[#FFFFFF]/10 px-4 py-3 text-center border border-[#FFFFFF]/15">
                      <span className="font-serif text-lg text-[#FAF9F5] block font-normal">Silver</span>
                      <span className="text-[9px] uppercase tracking-wider text-[#CDC6B7]">Frost Foil</span>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerBoxes>
          </div>
        </div>
      </section>

      {/* 6. UK Wholesale Studio Bundles */}
      <section className="w-full bg-[#FAF9F5] py-20 px-5 md:px-16" id="sample-pack">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">
              Studio Trade Program
            </span>
            <TextReveal as="h2" direction="up" delay={0.06} className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal mt-2 mb-4">
              UK Wholesale Studio Bundles
            </TextReveal>
            <RevealOnScroll direction="up" delay={0.12}>
              <p className="text-sm md:text-base text-[#4A463F] leading-relaxed">
                Tiered wholesale pricing calibrated to keep your In-Person Sales margins above 75%. All orders clear through UK logistics with zero customs paperwork.
              </p>
            </RevealOnScroll>
          </div>

          <StaggerBoxes className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" stagger={0.1} direction="up">
            {/* Bundle 1 */}
            <div className="bg-[#F4F4F0] p-8 flex flex-col justify-between border border-[#EAE6DF]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#635E52]">Studio Starter</span>
                  <span className="bg-[#FAF9F5] px-2.5 py-1 text-[10px] font-bold uppercase text-[#141310] border border-[#EAE6DF]">
                    Evaluation
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#141310] font-normal">UK Studio Trial Pack</h3>
                <p className="text-xs text-[#4A463F] mt-2 mb-6 leading-relaxed">
                  Three curated sample folios across 4R, 5R, and 8×10 formats. Designed for client viewing suites and packaging demonstration.
                </p>
                <div className="mb-6 p-4 bg-[#FAF9F5] border border-[#EAE6DF]">
                  <span className="text-[10px] font-semibold uppercase text-[#635E52] block">One-Off Studio Price</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-serif text-3xl text-[#141310] font-bold">£135</span>
                    <span className="text-xs text-[#7B766F] line-through">£198 RRP</span>
                  </div>
                  <span className="text-[11px] text-[#635E52] mt-1 block">Includes Full Linen Swatch Deck</span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#4A463F]">
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#635E52]" /> 1× 4R Slip-In Folio (Oatmeal Weave)</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#635E52]" /> 1× 5R Classic Album (Racing Green)</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#635E52]" /> 1× 8×10 Fine Art Folio (Saddle Tan)</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#635E52]" /> UK DDP Courier Included</li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => handleEnquire('UK Studio Trial Pack (£135)')}
                style={{ color: '#FAF9F5' }}
                className="mt-8 w-full py-3.5 bg-[#292724] !text-[#FAF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#141310] hover:!text-[#FFFFFF] transition-colors"
              >
                Order Trial Pack (£135)
              </button>
            </div>

            {/* Bundle 2 (Featured) */}
            <div className="bg-[#EFEEEA] p-8 flex flex-col justify-between relative shadow-md border-2 border-[#141310]">
              <div
                style={{ color: '#FAF9F5' }}
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#141310] !text-[#FAF9F5] px-4 py-1 text-[10px] font-semibold uppercase tracking-widest shadow-sm"
              >
                Most Popular For UK Studios
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#635E52]">Seasonal Stock</span>
                  <span className="bg-[#EAE2D2] text-[#1F1B12] px-2.5 py-1 text-[10px] font-bold uppercase">
                    Save 20%
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#141310] font-normal">Seasonal Portrait Studio Bundle</h3>
                <p className="text-xs text-[#4A463F] mt-2 mb-6 leading-relaxed">
                  10 units configured to your studio's preferred single format or mixed sizes. Includes complimentary custom brass die debossing.
                </p>
                <div className="mb-6 p-4 bg-[#FAF9F5] border border-[#EAE6DF]">
                  <span className="text-[10px] font-semibold uppercase text-[#635E52] block">Batch Wholesale Total</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-serif text-3xl text-[#141310] font-bold">£380</span>
                    <span className="text-xs text-[#4A463F]">£38 / unit average</span>
                  </div>
                  <span className="text-[11px] text-[#635E52] mt-1 block">Includes Free Studio Brass Die Stamp</span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#4A463F]">
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#141310]" /> 10 Units in Any Single Standard Format</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#141310]" /> Choice of Any Cloth or Vegan Leather</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#141310]" /> Free Custom Studio Logo Brass Die (£65 Val)</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#141310]" /> Priority 4-Day Batch Assembly</li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => handleEnquire('Seasonal Portrait Bundle 10-Pack (£380)')}
                style={{ color: '#FAF9F5' }}
                className="mt-8 w-full py-3.5 bg-[#141310] !text-[#FAF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#292724] hover:!text-[#FFFFFF] transition-colors shadow-sm"
              >
                Claim 10-Unit Studio Pack (£380)
              </button>
            </div>

            {/* Bundle 3 */}
            <div className="bg-[#F4F4F0] p-8 flex flex-col justify-between border border-[#EAE6DF]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#635E52]">High Volume</span>
                  <span className="bg-[#FAF9F5] px-2.5 py-1 text-[10px] font-bold uppercase text-[#141310] border border-[#EAE6DF]">
                    Save 35%
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#141310] font-normal">Commercial Portrait Enterprise</h3>
                <p className="text-xs text-[#4A463F] mt-2 mb-6 leading-relaxed">
                  25 units designed for high-turnover maternity, baby, and school fine art portrait studios across London and regional UK.
                </p>
                <div className="mb-6 p-4 bg-[#FAF9F5] border border-[#EAE6DF]">
                  <span className="text-[10px] font-semibold uppercase text-[#635E52] block">Enterprise Wholesale</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-serif text-3xl text-[#141310] font-bold">£850</span>
                    <span className="text-xs text-[#4A463F]">£34 / unit average</span>
                  </div>
                  <span className="text-[11px] text-[#635E52] mt-1 block">Dedicated Account Executive + Priority Queue</span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#4A463F]">
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#635E52]" /> 25 Hand-bound Matted Folios or Albums</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#635E52]" /> Fully Mixed Apertures &amp; Custom Window Cuts</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#635E52]" /> Free Foil Stamping on Entire Order</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-[#635E52]" /> Free Air Courier with Saturday Delivery Option</li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => handleEnquire('Commercial Portrait Enterprise 25-Pack (£850)')}
                style={{ color: '#FAF9F5' }}
                className="mt-8 w-full py-3.5 bg-[#292724] !text-[#FAF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#141310] hover:!text-[#FFFFFF] transition-colors"
              >
                Order Commercial Tier (£850)
              </button>
            </div>
          </StaggerBoxes>
        </div>
      </section>

      {/* 7. UK Studio Logistics FAQ */}
      <section className="w-full bg-[#FAF9F5] py-20 px-5 md:px-16 border-t border-[#EAE6DF]">
        <div className="max-w-[1000px] mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">
              Clarity &amp; Compliance
            </span>
            <TextReveal as="h2" direction="left" delay={0.06} className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal mt-2">
              British Studio Logistics FAQ
            </TextReveal>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-[#F4F4F0] border border-[#EAE6DF]">
                <button
                  type="button"
                  aria-expanded={activeFaq === idx}
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
          </div>
        </div>
      </section>

      {/* 8. Final Atelier CTA */}
      <section className="w-full bg-[#292724] text-[#FAF9F5] py-20 px-5 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <RevealOnScroll direction="up" delay={0.06} distance={24}>
            <div className="bg-[#FFFFFF]/5 p-8 md:p-14 border border-[#FFFFFF]/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#CDC6B7]">
                  Next Step For Your Studio
                </span>
                <TextReveal as="h2" direction="left" delay={0.08} className="font-serif text-2xl sm:text-4xl text-[#FAF9F5] font-normal">
                  Elevate Your British Portrait Presentation
                </TextReveal>
                <p className="text-base text-[#CDC6B7] leading-relaxed">
                  Order your bespoke studio sample folio and tactile cloth swatch book today. Delivered directly to your UK studio with complimentary debossing proofing.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <button
                  type="button"
                  onClick={() => handleEnquire('Studio Sample Folio (£35)')}
                  className="px-8 py-4 bg-[#FAF9F5] text-[#141310] text-xs font-semibold uppercase tracking-widest text-center hover:bg-[#EAE2D2] transition-colors"
                >
                  Order Sample Folio (£35)
                </button>
                <a
                  href="https://wa.me/919322254315"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#FAF9F5' }}
                  className="px-8 py-4 bg-transparent border border-[#FAF9F5]/30 !text-[#FAF9F5] text-xs font-semibold uppercase tracking-widest text-center hover:bg-[#FAF9F5]/10 hover:!text-[#FFFFFF] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare size={14} style={{ color: '#FAF9F5' }} />
                  <span style={{ color: '#FAF9F5' }}>Speak to UK Concierge</span>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
