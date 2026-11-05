import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../../components/motion/RevealOnScroll';
import TextReveal from '../../components/motion/TextReveal';
import {
  ChevronRight,
  Search,
  Phone,
  MessageCircle,
  Mail,
  ChevronDown,
  Layers,
  FileCheck,
  Clock,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

const FAQ_DATA = [
  // SECTION 1: PRINTING, CHEMISTRY & PAPERS
  {
    id: 'faq-1-1',
    category: 'printing',
    categoryLabel: '1. Printing, Chemistry & Papers',
    question: 'What is the distinction between Silver Halide continuous tone prints and digital press prints?',
    answer: 'Unlike electrophotographic digital press printing (such as HP Indigo or toner presses) which uses halftone dot patterns to emulate skin transitions, our true Silver Halide emulsion uses laser exposure directly onto light-sensitive Fuji Crystal Archive paper followed by a chemical wet bath (RA-4 process). This yields a genuine continuous-tone photograph with zero raster dots, sublime shadow delineation, velvety depth of field, and natural skin translucency critical for high-end wedding portraiture.',
    keywords: 'printing chemistry silver halide fuji crystal archive digital press hp indigo continuous tone dots grain'
  },
  {
    id: 'faq-1-2',
    category: 'printing',
    categoryLabel: '1. Printing, Chemistry & Papers',
    question: 'When should I specify Hahnemühle 100% Cotton Rag versus Fuji Crystal Archive Silk?',
    answer: 'Fuji Crystal Archive Silk is our recommended standard for high-drama, saturated reportage with intricate metallic embroidery and jewelry highlights due to its subtle micro-textured honeycomb sheen and fingerprint resistance. Hahnemühle Photo Rag 308gsm (or Torchon) is an archival 100% cotton giclée substrate featuring a warm matte texture, immense tactile dignity, and a muted, artistic tonal curve ideal for intimate film scans, destination editorial, and monochrome fine art series.',
    keywords: 'hahnemuhle fuji crystal archive cotton rag matte luster pearl fine art paper giclee'
  },
  {
    id: 'faq-1-3',
    category: 'printing',
    categoryLabel: '1. Printing, Chemistry & Papers',
    question: 'How do you achieve a zero-split layflat gutter without damaging portrait compositions?',
    answer: 'Our flush-mount books utilize a single continuous sheet of photographic paper creased with calibrated cold-microscoring and mounted back-to-back over an archival acid-free museum substrate. Because there is no cut at the gutter, full panoramic landscapes and grand venue ceremonies run entirely uninterrupted. However, we advise against placing key facial features (eyes and lips) directly over the center 3mm crease to avoid perspective warping when the volume rests on a table.',
    keywords: 'gutter zero split layflat spread seam fold gutter safety panoramic'
  },
  {
    id: 'faq-1-4',
    category: 'printing',
    categoryLabel: '1. Printing, Chemistry & Papers',
    question: 'Where can I download your custom ICC profiles for soft-proofing in Photoshop or Lightroom?',
    answer: 'Registered studio partners can access bespoke ICC profiles generated specifically for our calibrated Noritsu and Durst Lambda systems via our Resources Toolkit. To soft-proof: set your workspace to Relative Colorimetric with Black Point Compensation turned ON. Do not convert the profile before submitting; keep your files in embedded sRGB IEC61966-2.1 or Adobe RGB (1998), and our RIP station will perform the final color-space translation.',
    keywords: 'icc profiles soft proofing photoshop lightroom color gamut calibration d50'
  },

  // SECTION 2: MATERIALS & CUSTOMIZATION
  {
    id: 'faq-2-1',
    category: 'materials',
    categoryLabel: '2. Materials & Customization',
    question: 'How should vegetable-tanned Tuscan leather covers be maintained and conditioned?',
    answer: "Our vegetable-tanned leather originates in Santa Croce sull'Arno, Italy. It retains natural grain characteristics and will develop a rich amber patina over years of gentle handling. Keep the album away from prolonged direct midday sunlight and humid environments above 65% RH. For maintenance, every two years gently buff the surface with a lint-free muslin cloth and a pea-sized amount of organic beeswax balm provided in our Heirloom Care Kit.",
    keywords: 'leather care tuscan vegetable tanned beeswax patina aging conditioning humidity'
  },
  {
    id: 'faq-2-2',
    category: 'materials',
    categoryLabel: '2. Materials & Customization',
    question: 'What is the distinction between Blind Debossing and 24K Gold Foil Stamping?',
    answer: 'Blind debossing applies immense heat and tons of pneumatic pressure using a solid CNC-machined brass die to press your typography or studio crest directly into the cover without pigment or foil, creating a timeless, tactile shadow impression. Hot foil stamping uses the same heated brass die to fuse an ultra-thin metallized pigment film (available in Genuine 24K Warm Gold, Matte Champagne, Rose Gold, or Silver) permanently onto the bookcloth or leather.',
    keywords: 'blind debossing gold foil stamping 24k brass hot foil cover personalization monogram'
  },
  {
    id: 'faq-2-3',
    category: 'materials',
    categoryLabel: '2. Materials & Customization',
    question: 'What are the technical artwork requirements for custom brass stamping dies?',
    answer: 'Custom dies require vector artwork supplied as Adobe Illustrator (.AI), vector PDF, or .EPS with all type converted to outlines. Hairlines must have a minimum stroke width of 0.5pt (0.18mm) to ensure clean metal milling. Avoid complex photographic gradients or micro-dot textures under 1mm, as hot brass will fill in tight negative spaces. We provide a digital debossing proof showing exact coordinate placement before engraving commences.',
    keywords: 'custom brass die artwork vector ai eps typography crest logo monograms'
  },
  {
    id: 'faq-2-4',
    category: 'materials',
    categoryLabel: '2. Materials & Customization',
    question: 'Are velvet and Japanese raw silk options durable enough for wedding albums?',
    answer: 'Yes. All of our fine velvets and hand-spun Japanese Shantung silks are professionally laminated onto an archival, moisture-impermeable Japanese paper backing prior to case-making. This prevents bookbinding adhesives from bleeding through the weave and protects the fibers from fraying at the book joints. For heavy-use studio samples, we also offer water-resistant Dutch archival buckram bindings.',
    keywords: 'velvet linen japanese silk fabrics swatches buckram durability wear tear'
  },

  // SECTION 3: TURNAROUND & WORLDWIDE DELIVERY
  {
    id: 'faq-3-1',
    category: 'logistics',
    categoryLabel: '3. Turnaround & Worldwide Delivery',
    question: 'What is the standard production timeline for hand-bound albums?',
    answer: 'Our standard atelier bench time is 10 to 14 business days from the moment your spreads receive digital pre-press approval and payment confirmation. Hand-bound books undergo a mandatory 48-hour pneumatic weighted curing period to prevent moisture warp and ensure absolute block flatness before entering edge-gilding and boxing stages.',
    keywords: 'turnaround timeline production business days standard bench time curing lead time'
  },
  {
    id: 'faq-3-2',
    category: 'logistics',
    categoryLabel: '3. Turnaround & Worldwide Delivery',
    question: 'Can I request a 5-Day Priority Atelier Rush during peak wedding season?',
    answer: 'Yes. We reserve four expedited rush slots per week for urgent client delivery. The Priority Rush surcharge is 25% of the album total, compressing bench production to exactly 5 business days without compromising the mandatory curing cycle. Please contact the studio concierge via WhatsApp prior to file upload to ensure rush capacity is available.',
    keywords: 'rush orders priority atelier fast track 5 days wedding season surge expedite'
  },
  {
    id: 'faq-3-3',
    category: 'logistics',
    categoryLabel: '3. Turnaround & Worldwide Delivery',
    question: 'Which courier services do you use and what are transit times to UK & US?',
    answer: 'All international consignments travel via DHL Express Worldwide or FedEx International Priority with full temperature-controlled tracking and signature verification. Typical transit times from our Mumbai atelier are: London & UK Mainland: 3–4 business days; New York / US East Coast: 4 business days; US West Coast: 4–5 business days; Dubai & GCC: 2 business days; Western Europe: 3–4 business days.',
    keywords: 'dhl express shipping transit times london uk usa europe dubai gcc air transit delivery'
  },
  {
    id: 'faq-3-4',
    category: 'logistics',
    categoryLabel: '3. Turnaround & Worldwide Delivery',
    question: 'How are luxury tomes packaged to survive international courier transit?',
    answer: 'Every volume is encased in an unbleached organic cotton dust bag, nested inside a rigid museum-grade presentation box, wrapped with water-resistant vapor barrier film, and surrounded by 30mm high-density custom die-cut EVA foam corners within a double-walled fluted corrugated master carton. In over 12,000 global dispatches, our transit damage rate remains below 0.04%.',
    keywords: 'packaging protective wooden crate foam presentation box damage in transit safety drop test'
  },

  // SECTION 4: INVOICING, UK DDP & SAMPLES
  {
    id: 'faq-4-1',
    category: 'finance',
    categoryLabel: '4. Invoicing, UK DDP & Samples',
    question: 'How does Delivery Duty Paid (DDP) work for UK wedding photographers?',
    answer: 'For our UK professional clients, all shipments are booked on Incoterms DDP (Delivered Duty Paid). Ultraa Albums settles all UK import duties, clearance processing fees, and standard VAT directly with HMRC via our dedicated UK freight liaison. The invoice price you see on your portal is 100% final—your studio or bridal couple will never receive an unexpected carrier charge at the door.',
    keywords: 'uk ddp delivery duty paid vat hmrc import charges customs fees london freight tax'
  },
  {
    id: 'faq-4-2',
    category: 'finance',
    categoryLabel: '4. Invoicing, UK DDP & Samples',
    question: 'Do you offer Studio Sample discounts for photographers updating display portfolios?',
    answer: 'Yes. Verified professional photographers receive a permanent 50% discount on up to three Studio Sample display albums per calendar year. Studio sample books are manufactured to the identical archival standard as client albums but feature a subtle, elegant blind-debossed inscription on the inside back end-sheet reading: "Studio Display Copy - Ultraa Albums Atelier".',
    keywords: 'studio samples sample discount 50 percent off display album demo portfolio wholesale'
  },
  {
    id: 'faq-4-3',
    category: 'finance',
    categoryLabel: '4. Invoicing, UK DDP & Samples',
    question: 'What currencies and payment gateways are accepted?',
    answer: 'We accept Indian Rupee (INR) via UPI, NEFT, and RTGS for domestic studios. For international photographers, we bill directly in British Pounds Sterling (GBP), US Dollars (USD), and Euros (EUR). We accept domestic UK BACS bank transfers into our UK liaison account, international SWIFT wires, and major corporate credit cards via our encrypted 3D-Secure payment portal.',
    keywords: 'currencies gbp inr usd payment methods bacs bank transfer upi stripe credit card'
  },
  {
    id: 'faq-4-4',
    category: 'finance',
    categoryLabel: '4. Invoicing, UK DDP & Samples',
    question: 'What discounts apply to companion Parent Albums and duplicate copies?',
    answer: 'When ordered concurrently with a primary 12x12" or 14x11" luxury album, exact miniature duplicate parent albums (typically 8x8" or 10x8") receive a 40% reduction in price. Because layout proofing and pre-press calibration are already finalized, we pass substantial setup efficiencies directly back to your studio margin.',
    keywords: 'parent albums replica duplicate discount companion books sizes mini albums'
  }
];

export default function FAQKnowledgeBasePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openAccordionIds, setOpenAccordionIds] = useState(new Set(['faq-1-1'])); // first item opened by default

  const toggleAccordion = (id) => {
    setOpenAccordionIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Filtered FAQs based on category & search term
  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search term filter
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const inQuestion = item.question.toLowerCase().includes(query);
        const inAnswer = item.answer.toLowerCase().includes(query);
        const inKeywords = item.keywords.toLowerCase().includes(query);
        if (!inQuestion && !inAnswer && !inKeywords) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="w-full bg-[#FAF9F5] text-[#141310] font-sans">
      {/* 1. Context Breadcrumbs Strip */}
      <section className="w-full bg-[#EFEEEA] border-b border-[#EAE6DF] py-4 px-5 md:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 text-[11px] uppercase tracking-[0.14em] font-semibold text-[#635E52]">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#141310] transition-colors">Home</Link>
            <ChevronRight size={12} className="text-[#CCC5BC]" />
            <Link to="/resources/catalog" className="hover:text-[#141310] transition-colors">Resources</Link>
            <ChevronRight size={12} className="text-[#CCC5BC]" />
            <span className="text-[#141310]">Frequently Addressed Inquiries</span>
          </div>
          <div className="flex items-center gap-2 text-[#4A463F]">
            <span className="w-2 h-2 rounded-full bg-[#635E52]"></span>
            <span>Studio Knowledge Base // Protocols, Formats &amp; Logistics</span>
          </div>
        </div>
      </section>

      {/* 2. Editorial Hero & Search Desk */}
      <section className="w-full py-16 md:py-24 px-5 md:px-16 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <RevealOnScroll direction="left" className="lg:col-span-8 flex flex-col space-y-4">
            <span className="font-semibold uppercase tracking-[0.25em] text-[#635E52] text-[11px] block">
              Technical Dossier &amp; Operations Manual
            </span>
            <TextReveal
              as="h1"
              delay={0.08}
              className="font-serif text-[38px] md:text-[54px] text-[#141310] leading-tight font-normal tracking-tight"
            >
              Frequently Addressed Inquiries &amp; Studio Protocols
            </TextReveal>
            <p className="text-[16px] md:text-[18px] text-[#4A463F] max-w-2xl leading-relaxed pt-2">
              Definitive technical specifications on silver halide continuous tone chemistry, archival Hahnemühle substrates, customs-cleared global courier transit, and bespoke bookbinding die preparation.
            </p>

            {/* Interactive Search Bar */}
            <div className="mt-6 w-full max-w-2xl space-y-3">
              <div className="relative flex items-center bg-white border border-[#CCC5BC] p-2 shadow-sm focus-within:border-[#141310] transition-colors">
                <Search size={18} className="text-[#635E52] ml-3 mr-2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search protocols, turnaround times, paper specs, or shipping rules..."
                  className="w-full bg-transparent py-2 text-[14px] text-[#141310] placeholder:text-[#7B766F] focus:outline-none"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="px-3 text-[#635E52] hover:text-[#141310] text-[11px] uppercase tracking-wider font-semibold"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Quick Tag Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                <span className="font-semibold uppercase tracking-wider text-[#635E52] mr-1">Popular:</span>
                {[
                  { tag: 'Turnaround Times', key: 'turnaround' },
                  { tag: 'ICC Profiles', key: 'icc' },
                  { tag: 'UK Customs & VAT', key: 'vat' },
                  { tag: 'Leather Care', key: 'leather' },
                  { tag: 'Sample Discounts', key: 'samples' }
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setSearchTerm(item.key)}
                    className="bg-[#EFEEEA] hover:bg-[#E3E2DF] text-[#4A463F] px-3 py-1 uppercase tracking-wider font-semibold transition-colors"
                  >
                    {item.tag}
                  </button>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Hero Visual Specimen Card */}
          <RevealOnScroll direction="right" className="lg:col-span-4 flex flex-col justify-end">
            <div className="bg-[#F4F4F0] p-6 border border-[#EAE6DF] shadow-sm space-y-3">
              <div className="w-full h-52 bg-[#141310] overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfuNZsIIT-TqAnH_gFsyF8oqf0lVTCv5BuaFUEHXqV5oObKe451Tqzr0rDwQFd5UFULSIuN1pqfUuZkBirOKsdO4jYeJ3ebzBJMgbYglRd6lnRGF2kYqwTWbWyU3nolCAKE_DybkYO4HSeasEgXFzkzcq15_6ekE3ofODHCvz0qARjgpCAp5z7pfQih9e9v3n17HYAEkJTKg40wohDDAxZM1WI8eU4fHMx3--7ZIZm"
                  alt="Archival layflat print specimen with zero center crease"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between text-[#635E52] text-[11px] uppercase tracking-wider font-semibold">
                <span>Monograph No. 04</span>
                <span>Edition 2026</span>
              </div>
              <h4 className="font-serif text-[20px] text-[#141310]">Zero-Gutter Precision</h4>
              <p className="text-[13px] text-[#4A463F] leading-relaxed">
                Every panoramic spread is inspected under 5000K calibrated D50 daylight illumination before binding.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3. Technical Spec Matrix (Bento Bar) */}
      <section className="w-full bg-[#141310] text-white py-14 px-5 md:px-16 border-b border-[#292824]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-white/15 gap-4">
            <div>
              <span className="font-semibold uppercase tracking-[0.2em] text-[#EDE5DA] text-[11px] block">
                Master File Blueprint
              </span>
              <h2 className="font-serif text-[28px] md:text-[34px] font-normal text-white mt-1">
                Studio Ingestion Guidelines
              </h2>
            </div>
            <p className="text-[13px] text-[#CDC6B7] max-w-md">
              Strict conformance parameters to guarantee 100% chromatic fidelity from digital sensor to silver halide emulsion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Param 01 */}
            <div className="bg-[#292724] p-6 border border-white/10 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between text-[#EDE5DA] text-[11px] uppercase tracking-wider mb-2 font-semibold">
                  <FileCheck size={18} />
                  <span>Param 01</span>
                </div>
                <h3 className="font-serif text-[18px] text-white">File Format &amp; Color</h3>
                <p className="text-[12px] text-[#CDC6B7] leading-relaxed mt-2">
                  Uncompressed TIFF or JPEG Level 12. Flat sRGB or Adobe RGB (1998) embedded profile at strict 300 DPI native resolution.
                </p>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#EDE5DA]">Zero Interpolation</span>
            </div>

            {/* Param 02 */}
            <div className="bg-[#292724] p-6 border border-white/10 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between text-[#EDE5DA] text-[11px] uppercase tracking-wider mb-2 font-semibold">
                  <Layers size={18} />
                  <span>Param 02</span>
                </div>
                <h3 className="font-serif text-[18px] text-white">Trim &amp; Bleed Safe</h3>
                <p className="text-[12px] text-[#CDC6B7] leading-relaxed mt-2">
                  Exactly 3mm (0.12") peripheral bleed margin on outer trim perimeter. Keep critical typography 12mm away from guillotine edges.
                </p>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#EDE5DA]">3mm Outer Perimeter</span>
            </div>

            {/* Param 03 */}
            <div className="bg-[#292724] p-6 border border-white/10 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between text-[#EDE5DA] text-[11px] uppercase tracking-wider mb-2 font-semibold">
                  <Clock size={18} />
                  <span>Param 03</span>
                </div>
                <h3 className="font-serif text-[18px] text-white">Gutter Integrity</h3>
                <p className="text-[12px] text-[#CDC6B7] leading-relaxed mt-2">
                  0mm center split. Continuous panoramic sheet fold allows full-spread imagery without content loss or white seam intrusion.
                </p>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#EDE5DA]">180° Layflat Zero-Cut</span>
            </div>

            {/* Param 04 */}
            <div className="bg-[#292724] p-6 border border-white/10 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between text-[#EDE5DA] text-[11px] uppercase tracking-wider mb-2 font-semibold">
                  <ShieldCheck size={18} />
                  <span>Param 04</span>
                </div>
                <h3 className="font-serif text-[18px] text-white">Archival Longevity</h3>
                <p className="text-[12px] text-[#CDC6B7] leading-relaxed mt-2">
                  Tested to ISO 18924 &amp; Wilhelm standards. Thermal-fused acid-free core substrates resistant to delamination for 100+ years.
                </p>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#EDE5DA]">Certified Heirloom</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Comprehensive Filterable Categories & Master Accordion */}
      <section className="w-full py-20 px-5 md:px-16 bg-[#FAF9F5]">
        <div className="max-w-[1440px] mx-auto">
          {/* Category Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-start gap-2 pb-8 border-b border-[#EAE6DF]">
            {[
              { key: 'all', label: 'All Protocols (16)' },
              { key: 'printing', label: '1. Printing, Chemistry & Papers (4)' },
              { key: 'materials', label: '2. Materials & Customization (4)' },
              { key: 'logistics', label: '3. Turnaround & Worldwide Delivery (4)' },
              { key: 'finance', label: '4. Invoicing, UK DDP & Samples (4)' }
            ].map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-5 py-3 text-[11px] uppercase tracking-wider font-semibold transition-all ${
                  selectedCategory === cat.key
                    ? 'bg-[#141310] text-white'
                    : 'bg-[#EFEEEA] text-[#4A463F] hover:bg-[#E3E2DF]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Main Layout: Left Sidebar + Right Accordion */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
            {/* Left Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {/* Personal Liaison Desk Card */}
              <div className="bg-[#F4F4F0] p-8 border border-[#EAE6DF] shadow-sm space-y-6">
                <div>
                  <span className="font-semibold uppercase tracking-widest text-[#635E52] text-[11px] block">
                    Studio Help Desk
                  </span>
                  <h3 className="font-serif text-[22px] text-[#141310] mt-1">
                    Personal Atelier Liaison
                  </h3>
                  <p className="text-[13px] text-[#4A463F] mt-2 leading-relaxed">
                    Have complex bespoke binding specifications, custom brass typography dies, or high-volume multi-volume wedding commissions? Our senior binder is on standby.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href="tel:+919322254315"
                    className="flex items-center gap-3 p-3 bg-white border border-[#EAE6DF] hover:border-[#141310] transition-colors"
                  >
                    <Phone size={18} className="text-[#635E52]" />
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-[#635E52] block">Direct Mumbai Desk</span>
                      <span className="text-[13px] font-semibold text-[#141310]">+91 93222 54315</span>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919322254315"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white border border-[#EAE6DF] hover:border-[#141310] transition-colors"
                  >
                    <MessageCircle size={18} className="text-[#635E52]" />
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-[#635E52] block">WhatsApp Atelier Liaison</span>
                      <span className="text-[13px] font-semibold text-[#141310]">Priority Photographer Chat</span>
                    </div>
                  </a>

                  <a
                    href="mailto:atelier@ultraaalbums.com"
                    className="flex items-center gap-3 p-3 bg-white border border-[#EAE6DF] hover:border-[#141310] transition-colors"
                  >
                    <Mail size={18} className="text-[#635E52]" />
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-[#635E52] block">Technical Inquiries</span>
                      <span className="text-[13px] font-semibold text-[#141310]">atelier@ultraaalbums.com</span>
                    </div>
                  </a>
                </div>

                <div className="p-4 bg-[#E9E8E4] border border-[#CCC5BC] space-y-1 text-[12px] text-[#4A463F]">
                  <p className="font-semibold text-[#141310] uppercase text-[10px] tracking-wider">Studio Operating Hours:</p>
                  <p>Monday through Saturday: 10:00 AM – 7:30 PM IST</p>
                  <p>Dedicated London Support: 9:00 AM – 3:00 PM GMT</p>
                </div>
              </div>

              {/* Physical Swatch Box CTA */}
              <div className="bg-[#EFEEEA] p-6 border border-[#EAE6DF] shadow-sm space-y-3">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#635E52]">Physical Consultation</span>
                <h4 className="font-serif text-[20px] text-[#141310]">Master Swatch Folio</h4>
                <p className="text-[13px] text-[#4A463F] leading-relaxed">
                  Contains 42 actual specimens of Italian full-grain leathers, Japanese Shantung silks, archival buckrams, and certified fine-art paper strips.
                </p>
                <Link
                  to="/resources/catalog#order-swatch-box"
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#141310] hover:text-[#635E52] transition-colors pt-2"
                >
                  <span>Order Swatch Folio (£45 / ₹3,500)</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Right Accordion List */}
            <div className="lg:col-span-8 space-y-4">
              {filteredFAQs.length === 0 ? (
                <div className="bg-[#F4F4F0] p-12 text-center border border-[#EAE6DF] space-y-3">
                  <p className="font-serif text-[22px] text-[#141310]">No inquiries found matching "{searchTerm}".</p>
                  <p className="text-[13px] text-[#4A463F]">Try searching for terms like "turnaround", "silver halide", "custom die", or "VAT".</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="px-6 py-2.5 bg-[#141310] text-white uppercase text-[11px] tracking-widest font-semibold"
                  >
                    Reset Search
                  </button>
                </div>
              ) : (
                filteredFAQs.map((faq) => {
                  const isOpen = openAccordionIds.has(faq.id);
                  return (
                    <div
                      key={faq.id}
                      className="bg-white border border-[#EAE6DF] shadow-sm transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full p-6 text-left flex items-start justify-between gap-4 focus:outline-none"
                      >
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase tracking-wider font-semibold text-[#635E52] block">
                            {faq.categoryLabel}
                          </span>
                          <h4 className="font-serif text-[18px] md:text-[20px] text-[#141310] font-normal leading-snug">
                            {faq.question}
                          </h4>
                        </div>
                        <span className={`p-1 text-[#635E52] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                          <ChevronDown size={18} />
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-1 text-[14px] text-[#4A463F] leading-relaxed border-t border-[#EAE6DF]/60 animate-fadeIn">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Interactive Concierge Help CTA */}
      <section className="w-full bg-[#EFEEEA] py-16 px-5 md:px-16 border-t border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto bg-white p-8 md:p-12 border border-[#CCC5BC] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-2">
            <span className="font-semibold uppercase tracking-widest text-[#635E52] text-[11px] block">
              Still Seeking Clarification?
            </span>
            <h3 className="font-serif text-[28px] md:text-[34px] text-[#141310]">
              Speak Directly With Our Master Bookbinder
            </h3>
            <p className="text-[14px] text-[#4A463F] leading-relaxed">
              From custom French vellum interleaving to bespoke oversized 18x12" royal flush mounts, we engineer bespoke commissions that fall outside standard catalog templates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <Link
              to="/enquire?product=Flush Mount Album"
              className="w-full sm:w-auto text-center px-8 py-4 bg-[#141310] text-white font-semibold text-[11px] uppercase tracking-widest hover:bg-[#292824] transition-colors"
            >
              Submit Bespoke Enquiry
            </Link>
            <a
              href="tel:+919322254315"
              className="w-full sm:w-auto text-center px-8 py-4 bg-[#EFEEEA] text-[#141310] font-semibold text-[11px] uppercase tracking-widest hover:bg-[#E3E2DF] transition-colors"
            >
              Call Studio Direct
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
