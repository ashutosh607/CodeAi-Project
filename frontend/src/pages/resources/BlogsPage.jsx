import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import RevealOnScroll from '../../components/motion/RevealOnScroll';
import TextReveal from '../../components/motion/TextReveal';
import {
  ChevronRight,
  ArrowRight,
  Download,
  Mail,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';

const JOURNAL_ARTICLES = [
  {
    slug: 'chemistry-of-permanence-silver-halide-vs-inkjet',
    title: 'The Chemistry of Permanence: Why Silver Halide Printing Defeats Inkjet Over a Century',
    category: 'color-science',
    categoryLabel: 'Color Science & Lab Protocols',
    readTime: '8 Min Read',
    date: '14 March 2026',
    author: 'Kavita Iyer',
    authorRole: 'Lab Director & Master Colorist, Mumbai',
    leadExcerpt: 'A rigorous empirical analysis from our Mumbai laboratory examining light exposure stability. We contrast true continuous-tone crystalline silver emulsions with pigmented micro-droplet dot matrices, demonstrating resilience against thermal fluctuations and ambient monsoon humidity.',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsO00L-yzOzR1TQAd-dCZ70Y1CMBECaDBFmlXBm5m--4ipX4BoXIIEEsQN9QMrOfyobiSkliSMchimRaKvU_2oEHYljZfXEZN3mCNkZ7VQXR_SFd0rUjUt6Q2J1_VCzXpdfYFY-5v0RYCMoJxk4wqcAyXocDSwzex_t0QHTL-uaTwYANziFDAdWz01i5d2zP7F4TUeQYx8IqArb2GmXOpV4iDNGbfNuSYkly7X24mU',
    isLead: true,
    fullContent: `
### The Illusion of Pigment Permanence
In modern digital lab marketing, "Giclée" has become a fashionable euphemism for high-resolution desktop inkjet printing. While pigment inks suspended in aqueous carriers produce vivid preliminary gamuts, their mechanical vulnerability under prolonged atmospheric exposure is frequently glossed over in commercial studio discussions.

Unlike inkjet printing—where microscopic droplets of colored pigments rest on top of a porous receiver layer—true continuous-tone photographic printing exposes light-sensitive silver halide crystals embedded inside gelatin layers coated on Fuji Crystal Archive emulsion. When processed through developer, bleach-fix, and wash baths (the standardized RA-4 chemical protocol), pure metallic silver crystal dyes form within the gelatin matrix itself.

### The Physics of Continuous Tone vs Raster Dots
Under 50x stereomicroscopic magnification:
- **Inkjet prints** reveal discrete spherical dot matrices. Skin transitions, subtle bridal veil highlights, and soft out-of-focus backgrounds rely on dithering algorithms that scatter dots across the paper fiber.
- **Silver Halide C-Type prints** exhibit zero dot matrix. The crystalline grain dissolves into genuine continuous gradients. Highlights transition into deep shadows with optical smoothness indistinguishable from human sight.

### Resistance to Ambient Thermal & Humidity Fluctuations
At our Mumbai laboratory, accelerated aging tests conforming to ISO 18924 protocols revealed a stark operational divide. Aqueous pigment inks demonstrated vulnerability to gaseous pollutants (atmospheric ozone and nitrogen dioxide), inducing highlight yellowing when stored in coastal environments with relative humidity exceeding 65%.

By contrast, the cross-linked gelatin protective overcoat of Fuji Crystal Archive DPII paper seals the chromatic couplers from oxidation. When mounted with acid-free EVA thermal laminates, the continuous-tone photograph achieves an estimated spectral longevity exceeding 140 years without observable chromatic shift.

### Studio Recommendation
For bridal heirlooms destined to be handed down across generations, we recommend specifying Fuji Crystal Archive Silk or Lustre continuous-tone emulsion for all high-contrast, saturated celebrations, complemented by Hahnemühle 100% cotton rag giclée only when distinct watercolor matte textures are specifically desired by fine art clients.
    `
  },
  {
    slug: 'humidity-proof-board-uk-weddings',
    title: 'Handling British Weather: Why We Formulated Humidity-Proof Board for UK Weddings',
    category: 'craft-paper',
    categoryLabel: 'Bookbinding Craft & Paper',
    readTime: '5 Min Read',
    date: '02 March 2026',
    author: 'Rajesh Solanki',
    authorRole: 'Master Bookbinder, Mumbai Atelier',
    leadExcerpt: 'How our R&D team solved the age-old dilemma of album warping in damp climates using multi-ply pH-neutral board pressed under 12 metric tonnes of hydrostatic force.',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJSq2Bok2g8H5to9lpaLHyRuCHFSAPQJ91RtBtlngayKUclM6yqepZqshyvutbGrGaelDErOWSzmibGXUnMjaw3M2FLddS7k-7wNERZ5ZkCbXz8o1GydX81tf_bgGPKc0sPQdV3KQ-C0SuNOQC2Stp9TEzDS5WA8nN9x7mhUFfh46WFdE0TSopvCv47xE3nIOUx8VqnUA2ZWEfagXnevfCb8VTdLYjM7gYi2EmIY95',
    fullContent: `
### The Atmospheric Challenge of the British Isles
Every experienced wedding photographer in the UK is familiar with the winter album nightmare: an expensive bespoke album delivered in November begins to dish or cup at the corners by January once central heating battles external damp Scottish or Cotswolds rain.

### Hydrostatic Force & Cross-Grain Balancing
Album board warp is fundamentally caused by asymmetric hygroscopic expansion. When paper fibers absorb moisture, they expand along their diameter far more than along their length. If two adjacent pages or boards are glued with conflicting grain directions, the sheet inevitably curls.

Our Mumbai atelier engineered a proprietary multi-ply core board specifically for British and Northern European deliveries:
1. **Perpendicular Grain Lamination:** Each 600gsm core board is composed of four cross-laminated plies, canceling out directional torque.
2. **Moisture-Vapor Barrier Film:** An invisible micro-thin acid-free polyethylene barrier prevents adhesive water content from migrating into the photographic print.
3. **12 Metric Tonnes Curing Press:** Bound blocks cure in heavy hydraulic pneumatic presses for 48 hours minimum, achieving structural planar permanence.
    `
  },
  {
    slug: 'center-gutter-zero-interruption',
    title: 'The Art of the Center Gutter: Designing Layouts with Zero Visual Interruption',
    category: 'craft-paper',
    categoryLabel: 'Bookbinding Craft & Paper',
    readTime: '6 Min Read',
    date: '21 February 2026',
    author: 'Claire Sterling',
    authorRole: 'Senior Editorial Layout Artist',
    leadExcerpt: 'A comprehensive spatial guide for wedding photographers. How seamless butterfly-creased layflat pages permit edge-to-edge panoramic compositions without losing faces in the fold.',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_lgwaiMI4LLuyKu4K0pDLtYWhxFVVE1b5iBbQEdYMVWrsMbrOIr6VcQ7Ym1zJlrLJddg-xKDx3Gjdlq6rTCJv6zYaB6BjAsxHX6yrVTDPaDB417ZT3VVnwx3sqUUIL_GHYSBm2pZSdbBpl7nJl3qKiZrEBZ93DG4BY8xuYTjwSY8FY3uiUyed6_cNeDv0UfyktQNlBr2ZspvhiWR_0fIwzcJMN3tZta1TW6hw8XoV',
    fullContent: `
### Breaking Free of the Book Valley
Traditional library bindings, sewn signatures, and magazine perfect-bound spines suffer from a mechanical flaw known as "gutter blindness." As pages curve inward toward the spine, anywhere from 8mm to 16mm of image content disappears into the shadow of the fold.

### Cold Micro-Scoring Protocol
Ultraa Albums utilizes a calibrated cold-microcreasing process. Rather than cutting two separate photographic sheets and mounting them side-by-side with a visible white paper gap, a single continuous panoramic print is scored with a circular rotary tungsten blade that compresses the paper fiber without rupturing the gelatin emulsion layer.

### Golden Rules for Panoramic Layouts
- **Subject Placement:** While grand architectural vistas can cross the fold uninterrupted, avoid placing the bride's or groom's iris directly on the 0mm center line to avoid perspective warping when viewing the volume at an angle.
- **Negative Space Breathing Room:** Use generous 20mm outer margins to let panoramic compositions expand with cinematic gravitas.
    `
  },
  {
    slug: 'sourcing-tuscan-vegetable-tanned-calfskin',
    title: 'From Santa Croce to Santacruz: Sourcing Tuscan Full-Grain Vegetable-Tanned Calfskin',
    category: 'wedding-provenance',
    categoryLabel: 'Wedding Stories & Provenance',
    readTime: '7 Min Read',
    date: '10 February 2026',
    author: 'Alistair Ward',
    authorRole: 'Materials Sourcing Director',
    leadExcerpt: 'Tracing the ethical, mineral-free tanning lineage of our signature Tuscan leather covers. Why mimosa and chestnut extracts produce a handfeel that deepens with generational ownership.',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-ZJn-udQyqZmOHMwO5FrEklJ0kyUJQ6XuJHCHFU3JtUUH7f4XjDFdg_Rccb5INRateJcVSPQWo3TtNhuhgC9i1nww-9wvlFwPIbxouTm94RQlP_HGTvv0Ib6aHEpfU7oKIRFQZlVG3qchNPdk9_JgVlg_9ZuXxuhChBSBE1eDUk7dqzz1PvGV6--XNEqSpfjYIJNeAf2u4NJQz12Q_LrN6dIalU_XFKv1LR1V9XwG',
    fullContent: `
### The Historic Tannery District of Tuscany
Nestled along the banks of the River Arno between Florence and Pisa, Santa Croce sull'Arno has practiced the organic art of vegetable leather tanning since the Renaissance. Unlike 90% of contemporary commercial leather—which relies on toxic chromium sulfate salts for fast 24-hour industrial tanning—traditional vegetal tanning takes over 60 days in large wooden vats.

### Natural Mimosa and Chestnut Tannins
Our hides are saturated with organic plant extracts derived from mimosa bark, chestnut wood, and quebracho trees. The resulting leather contains no synthetic chemical finishes or plastic polyurethane coatings.

### The Generational Patina Effect
When a couple takes home a vegetable-tanned leather album, the cover is just at the beginning of its life. Exposure to ambient daylight, skin oils from hands, and the natural humidity of a home gently deepens the leather from a pale honey tone into a rich, lustrous amber cognac patina over decades.
    `
  },
  {
    slug: 'in-person-sales-3x-album-orders-swatch-boxes',
    title: 'Elevating In-Person Sales: How British Studios 3x Album Orders with Tactile Swatch Boxes',
    category: 'studio-business',
    categoryLabel: 'Studio Business & IPS',
    readTime: '9 Min Read',
    date: '28 January 2026',
    author: 'Victoria Sterling-Cross',
    authorRole: 'Studio Business Consultant',
    leadExcerpt: 'Tactile psychology in high-ticket client consultations. Case studies from Mayfair and Cotswolds studios who converted digital gallery deliveries into lucrative £2,500+ heirloom volume commissions.',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE90d52KOeaK1Xl-pi0I-fco42cUjPYaY0mlNQXApS7aviueBybUcW9JIU0rX5-sKcAWuRHYXqf6UV9HG9f6yylfL1hfjpxwsb5GBBONeCBDx32MHT5PdvVBWt_gkouUsfA3oP13bQYjMAQyCdBhuH724ffw573f8UVzaqxpSc4Oh2PEiZwF1fBW2JKg5y8sUqWAlO8kzGJgbJJrkzJKKe_pofxvT9YrnuSd57BQcb',
    fullContent: `
### The Commodity Trap of Digital Galleries
Sending an online download gallery link of 900 high-resolution wedding files inevitably places wedding photographers into a digital commodity bracket. Clients admire the pictures on their smartphones for three weeks, post ten on social media, and leave the digital archive dormant on hard drives.

### The Psychology of Touch in In-Person Consultations
When studios invite couples into an in-person viewing session and place our solid American walnut swatch box on the table, the consultation dynamic fundamentally transforms:
1. **Weight Signifies Value:** Handing a couple a sample 14x11" album block weighing 4.2 kilograms instantly communicates permanence.
2. **Scent and Material Distinction:** The aroma of genuine Tuscan calfskin and the tactile roughness of Belgian linen trigger emotional associations that no PDF or mock-up can replicate.
3. **Closing Rates:** Mayfair and Edinburgh partner studios reported an average album upgrade conversion rate of 78% after introducing tactile physical sample boxes into their client onboarding.
    `
  },
  {
    slug: 'history-gilded-edges-24k-gold-burnishing',
    title: 'Gilded Edges & Monograms: A History of 24-Karat Gold Leaf Hand-Burnishing',
    category: 'craft-paper',
    categoryLabel: 'Bookbinding Craft & Paper',
    readTime: '4 Min Read',
    date: '15 January 2026',
    author: 'Farhan Merchant',
    authorRole: 'Senior Finisher & Die Engraver',
    leadExcerpt: 'Beyond decorative beauty: how gold gilding and blind debossing seal page margins from ambient airborne oxidation. A look into our atelier’s heated copper-die stamping department.',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbxEPt11rxOf77mDSKQxn7pG4wLkxNeV6MPOe0HLJqaTWj7cEsWmHDSbn6p1VxpVhLAQwLvKZAEPvVzHHpEXlExPhbtZdPS8tLeO9IukskhLAskz5VPnaUwVm_vcCc0eD7FwC8icVeiGXULpVYJWF2CAjiQXwhBpl6m-kVUqnRejwAvJBDLw0Ky7Vmy5V2enjXbrUclLH4nrs1vuF7lmiVaON9mIj6JCbDpE4XzIEQ',
    fullContent: `
### Functional Preservation Masquerading as Luxury
In 17th-century European bibliophile culture, book edge gilding was never merely ornamental. Books resting vertically on dusty library shelves accumulated soot, ambient moisture, and insect damage along the top exposed edge.

By applying an egg-white glair binder and burnishing real gold leaf onto the tightly clamped paper edges with an agate stone, the bookblock edge was sealed hermetically against humidity and atmospheric pollutants.

### Modern Atelier Execution
At Ultraa Albums, page edge gilding remains an artisanal, non-mechanized craft. We clamp the trimmed book block under hydraulic vices, sand the perimeter with progressive grits from 400 to 2000, apply thermal heat-activated foil film or real 24-karat gold leaf, and hand-burnish each edge to a mirror reflection.
    `
  },
  {
    slug: 'indesign-master-protocol-preflight-checklists',
    title: 'The InDesign Master Protocol: Pre-Flight Checklists for Flawless Album Submissions',
    category: 'color-science',
    categoryLabel: 'Color Science & Lab Protocols',
    readTime: '5 Min Read',
    date: '04 January 2026',
    author: 'Priyal Mehta',
    authorRole: 'Production Pre-Flight Specialist',
    leadExcerpt: 'Never experience a rejected file or cropped detail again. Our production lab’s golden rules for bleed margins, ICC profiles, 300DPI downsampling, and spine calculation formulas.',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcm5HpH2oGqsKPA0yrooNdcz46tWGlerc2CL43ZXFuj8odMegOiJ2GDP0aujwDpas29iWihq1i29Xyw_ZGGsuSZYK4FKVc1kUOuVg8MQRWgwKLSd7D0327JS_tJgloLOxKZCWuHfcWdliF61VerL0CAGS4Cgkw_DOAwX3t_MdEeiH2wfRrptyCdxwDTNFwUB7QZNt-gYgYI-Jlv7Md5JknWqENAVneyQ2iJqPdpMHW',
    fullContent: `
### Eliminating Production Delays
Over 40% of delays during peak wedding season result from incorrectly prepared pre-press files. Below is our definitive pre-flight protocol:

1. **Exact 3.0mm Outer Bleed:** Ensure all full-bleed image frames extend 3mm beyond the trim line.
2. **Strict 300 DPI Native Resolution:** Avoid exporting layouts at 72 or 150 DPI. Do not upscale heavily cropped low-res images beyond 120% without checking sharpness.
3. **Embedded Color Profiles:** Never export files in CMYK. Our Fuji continuous-tone photographic printers operate on native RGB lasers. Keep your files embedded with Adobe RGB (1998) or sRGB IEC61966-2.1.
4. **Numbering Conventions:** Name files chronologically: Spread_01.jpg, Spread_02.jpg up to Spread_40.jpg to prevent page sequencing mix-ups.
    `
  }
];

export default function BlogsPage() {
  const { articleSlug } = useParams();
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // If URL has articleSlug, set selectedArticle
  useEffect(() => {
    if (articleSlug) {
      const match = JOURNAL_ARTICLES.find((a) => a.slug === articleSlug);
      if (match) setSelectedArticle(match);
    } else {
      setSelectedArticle(null);
    }
  }, [articleSlug]);

  const filteredArticles = JOURNAL_ARTICLES.filter((item) => {
    if (activeCategory !== 'all' && item.category !== activeCategory) return false;
    return true;
  });

  const leadArticle = JOURNAL_ARTICLES.find((a) => a.isLead) || JOURNAL_ARTICLES[0];
  const gridArticles = filteredArticles.filter((a) => a.slug !== leadArticle.slug);

  const handleOpenArticle = (article) => {
    setSelectedArticle(article);
    navigate(`/resources/blogs/${article.slug}`, { replace: false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
    navigate('/resources/blogs', { replace: false });
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
            <span className="text-[#141310]">Journal &amp; Dispatches</span>
          </div>
          <div className="flex items-center gap-2 text-[#4A463F]">
            <span className="w-2 h-2 rounded-full bg-[#635E52]"></span>
            <span>The Atelier Ledger // Vol. VII • Notes on Craft, Paper &amp; Preservation</span>
          </div>
        </div>
      </section>

      {/* ARTICLE READER VIEW (If Article Selected) */}
      {selectedArticle ? (
        <article className="max-w-[1000px] mx-auto py-12 px-5 md:px-8 space-y-8 animate-fadeIn">
          {/* Back button */}
          <button
            type="button"
            onClick={handleCloseArticle}
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-semibold text-[#635E52] hover:text-[#141310] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Return to All Journal Dispatches</span>
          </button>

          {/* Article Header */}
          <div className="space-y-4 pt-4 border-b border-[#EAE6DF] pb-8">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.14em] font-semibold text-[#635E52]">
              <span className="bg-[#141310] text-white px-2.5 py-1">{selectedArticle.categoryLabel}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
            </div>

            <h1 className="font-serif text-[34px] md:text-[48px] text-[#141310] leading-tight font-normal">
              {selectedArticle.title}
            </h1>

            <p className="text-[17px] md:text-[20px] text-[#4A463F] leading-relaxed italic">
              {selectedArticle.leadExcerpt}
            </p>

            <div className="flex items-center gap-3 pt-4">
              <div className="w-11 h-11 rounded-full bg-[#141310] text-white font-serif text-[18px] flex items-center justify-center">
                {selectedArticle.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-[#141310] text-[14px]">{selectedArticle.author}</p>
                <p className="text-[12px] text-[#635E52]">{selectedArticle.authorRole}</p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full aspect-[16/9] bg-[#141310] overflow-hidden shadow-md">
            <img
              src={selectedArticle.imgSrc}
              alt={selectedArticle.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose max-w-none text-[#292824] text-[16px] leading-[1.8] space-y-6 pt-4 border-b border-[#EAE6DF] pb-12">
            {selectedArticle.fullContent.split('\n\n').map((para, idx) => {
              const trimmed = para.trim();
              if (trimmed.startsWith('### ')) {
                return (
                  <h3 key={idx} className="font-serif text-[24px] md:text-[28px] text-[#141310] pt-6 font-normal">
                    {trimmed.replace('### ', '')}
                  </h3>
                );
              }
              if (trimmed.startsWith('- ')) {
                return (
                  <ul key={idx} className="list-disc pl-6 space-y-2">
                    {trimmed.split('\n').map((item, i) => (
                      <li key={i}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              if (trimmed.startsWith('1. ')) {
                return (
                  <ol key={idx} className="list-decimal pl-6 space-y-2">
                    {trimmed.split('\n').map((item, i) => (
                      <li key={i}>{item.replace(/^\d+\.\s*/, '')}</li>
                    ))}
                  </ol>
                );
              }
              return <p key={idx}>{trimmed}</p>;
            })}
          </div>

          {/* Related Consultation CTA */}
          <div className="p-8 bg-[#EFEEEA] border border-[#EAE6DF] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="font-serif text-[20px] text-[#141310]">Questions on This Paper or Binding Method?</h4>
              <p className="text-[13px] text-[#4A463F]">Speak directly with our technical laboratory colorists and bookbinders.</p>
            </div>
            <Link
              to="/enquire?product=Album Designing"
              className="px-6 py-3 bg-[#141310] text-white hover:bg-[#292824] transition-colors text-[11px] uppercase tracking-widest font-semibold whitespace-nowrap"
            >
              Contact Studio Desk
            </Link>
          </div>
        </article>
      ) : (
        /* STANDARD JOURNAL DIRECTORY VIEW */
        <>
          {/* 2. Page Masthead */}
          <section className="w-full py-16 md:py-20 px-5 md:px-16 border-b border-[#EAE6DF]">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <RevealOnScroll direction="left" className="lg:col-span-8 space-y-4">
                <span className="font-semibold uppercase tracking-[0.25em] text-[#635E52] text-[11px] block">
                  Archival Monograph &amp; Editorial Dispatch
                </span>
                <TextReveal
                  as="h1"
                  delay={0.08}
                  className="font-serif text-[38px] md:text-[54px] text-[#141310] font-normal leading-[1.08] tracking-tight"
                >
                  The Ultraa Journal: Notes on Bookbinding Craft, Archival Science &amp; Visual Culture
                </TextReveal>
              </RevealOnScroll>

              <RevealOnScroll direction="right" className="lg:col-span-4 pb-2 space-y-4">
                <p className="text-[14px] text-[#4A463F] leading-relaxed">
                  Curated lab monographs, raw material provenance, and business architecture written for international wedding photographers, heirloom conservators, and bespoke master bookbinders.
                </p>
                <div className="flex items-center gap-4 text-[11px] text-[#635E52] uppercase tracking-wider font-semibold">
                  <span>Published Quarterly</span>
                  <span>•</span>
                  <span>Peer-Reviewed by Mumbai Lab</span>
                  <span>•</span>
                  <span>ISSN 2981-4402</span>
                </div>
              </RevealOnScroll>
            </div>

            {/* Filter Navigation Tabs */}
            <div className="max-w-[1440px] mx-auto mt-10 flex flex-wrap items-center gap-2 pt-6 border-t border-[#EAE6DF]">
              {[
                { key: 'all', label: 'All Dispatches (48)' },
                { key: 'craft-paper', label: 'Bookbinding Craft & Paper (18)' },
                { key: 'color-science', label: 'Color Science & Lab Protocols (12)' },
                { key: 'studio-business', label: 'Studio Business & IPS (11)' },
                { key: 'wedding-provenance', label: 'Wedding Stories & Provenance (7)' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveCategory(tab.key)}
                  className={`px-5 py-2.5 text-[11px] uppercase tracking-wider font-semibold transition-all ${
                    activeCategory === tab.key
                      ? 'bg-[#141310] text-white'
                      : 'bg-[#EFEEEA] text-[#4A463F] hover:bg-[#E3E2DF]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </section>

          {/* 3. Featured Lead Editorial (Monolithic Hero Dossier) */}
          <section className="w-full py-16 px-5 md:px-16 border-b border-[#EAE6DF]">
            <div className="max-w-[1440px] mx-auto">
              <article className="bg-[#F4F4F0] border border-[#EAE6DF] shadow-sm group overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[520px] bg-[#141310] overflow-hidden">
                    <img
                      src={leadArticle.imgSrc}
                      alt={leadArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#141310]">
                      Lead Monograph // Issue 28
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 hidden md:flex items-center justify-between text-white text-[11px] font-semibold uppercase tracking-widest bg-[#141310]/80 backdrop-blur-sm px-4 py-2">
                      <span>Specimen: C-Type Silver Halide Fuji DPII</span>
                      <span>Density Gamma 2.45 Calibration</span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-[#635E52] font-semibold">
                        <span>{leadArticle.categoryLabel}</span>
                        <span>•</span>
                        <span>{leadArticle.readTime}</span>
                        <span>•</span>
                        <span>{leadArticle.date}</span>
                      </div>

                      <h2 className="font-serif text-[28px] md:text-[34px] text-[#141310] leading-tight font-normal">
                        {leadArticle.title}
                      </h2>

                      <p className="text-[14px] text-[#4A463F] leading-relaxed">
                        {leadArticle.leadExcerpt}
                      </p>

                      {/* Inline Specimen Data Longevity Chart */}
                      <div className="p-4 bg-white border border-[#EAE6DF] space-y-3">
                        <div className="flex items-center justify-between text-[11px] uppercase tracking-wider">
                          <span className="font-semibold text-[#141310]">Estimated Spectral Longevity (ISO 18924)</span>
                          <span className="text-[#635E52]">Accelerated Aging Test</span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[12px] text-[#4A463F]">
                            <span>Continuous Tone C-Type (Silver Crystals)</span>
                            <span className="font-semibold text-[#141310]">140+ Years</span>
                          </div>
                          <div className="w-full h-1.5 bg-[#EFEEEA] overflow-hidden">
                            <div className="h-full bg-[#141310]" style={{ width: '95%' }}></div>
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[12px] text-[#4A463F]">
                            <span>Aqueous Pigment Giclée (Surface Dots)</span>
                            <span className="font-semibold text-[#635E52]">65 Years (Moisture Sensitive)</span>
                          </div>
                          <div className="w-full h-1.5 bg-[#EFEEEA] overflow-hidden">
                            <div className="h-full bg-[#635E52]" style={{ width: '52%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#EAE6DF] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#141310] text-white flex items-center justify-center font-serif text-[16px]">
                          {leadArticle.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-[#141310] text-[13px]">{leadArticle.author}</p>
                          <p className="text-[11px] text-[#635E52]">{leadArticle.authorRole}</p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleOpenArticle(leadArticle)}
                        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider font-semibold text-[#141310] hover:text-[#635E52] transition-colors"
                      >
                        <span>Read Full Treatise</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* 4. Curated Editorial Grid (6 In-Depth Dossiers) */}
          <section className="w-full py-16 px-5 md:px-16 bg-[#F4F4F0] border-b border-[#EAE6DF]">
            <div className="max-w-[1440px] mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <span className="font-semibold uppercase tracking-[0.2em] text-[#635E52] text-[11px] block mb-1">
                    Curated Dossiers
                  </span>
                  <h2 className="font-serif text-[28px] md:text-[38px] text-[#141310]">
                    Essential Dispatches from the Bindery
                  </h2>
                </div>
                <p className="text-[14px] text-[#4A463F] max-w-md">
                  Technical specifications, historical finishes, and operational manuals developed directly alongside our atelier craftsmen and partner studios.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gridArticles.map((art) => (
                  <article
                    key={art.slug}
                    className="bg-white p-6 border border-[#EAE6DF] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative aspect-[16/10] bg-[#141310] overflow-hidden mb-5">
                        <img
                          src={art.imgSrc}
                          alt={art.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <span className="absolute bottom-3 left-3 bg-[#141310] text-white px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold">
                          {art.categoryLabel.split(' ')[0]}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#635E52] font-semibold mb-2">
                        <span>{art.categoryLabel}</span>
                        <span>•</span>
                        <span>{art.readTime}</span>
                      </div>

                      <h3 className="font-serif text-[20px] text-[#141310] mb-2 leading-snug group-hover:text-[#635E52] transition-colors">
                        {art.title}
                      </h3>

                      <p className="text-[13px] text-[#4A463F] leading-relaxed line-clamp-3">
                        {art.leadExcerpt}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#EAE6DF] flex items-center justify-between text-[11px]">
                      <span className="text-[#635E52]">{art.author}</span>
                      <button
                        type="button"
                        onClick={() => handleOpenArticle(art)}
                        className="inline-flex items-center gap-1 font-semibold uppercase tracking-wider text-[#141310] hover:text-[#635E52] transition-colors"
                      >
                        <span>Read</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 5. Atelier Newsletter & Dispatch Subscription */}
          <section className="w-full bg-[#141310] text-white py-16 px-5 md:px-16 border-b border-[#292824]">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2 text-[#EDE5DA] text-[11px] uppercase tracking-[0.2em] font-semibold">
                  <Mail size={16} />
                  <span>Private Dispatch Ledger</span>
                </div>
                <h2 className="font-serif text-[32px] md:text-[42px] font-normal leading-tight">
                  The Quarterly Monograph
                </h2>
                <p className="text-[14px] text-[#CDC6B7] leading-relaxed max-w-xl">
                  Reserved exclusively for professional photographers, archival studios, and trade partners. Receive private advance access to limited cover material drops, paper profile ICC packages, and invitations to our Mumbai atelier roundtables.
                </p>
              </div>

              <div className="lg:col-span-6">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterSubscribed(true);
                  }}
                  className="bg-white p-8 border border-[#CCC5BC] shadow-sm space-y-4 text-[#141310]"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#635E52] mb-1.5">
                        Studio / Photographer Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Julian Hayes Studio"
                        className="w-full bg-[#FAF9F5] border border-[#CCC5BC] p-3 text-[13px] text-[#141310] focus:outline-none focus:border-[#141310]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#635E52] mb-1.5">
                        Direct Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="julian@hayesphotography.co.uk"
                        className="w-full bg-[#FAF9F5] border border-[#CCC5BC] p-3 text-[13px] text-[#141310] focus:outline-none focus:border-[#141310]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <label className="flex items-center gap-2 cursor-pointer text-[12px] text-[#4A463F]">
                      <input type="checkbox" defaultChecked className="accent-[#141310]" />
                      <span>Include sample kit swatch alerts &amp; ICC profile updates</span>
                    </label>

                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-[#141310] text-white hover:bg-[#292824] transition-colors text-[11px] uppercase tracking-widest font-semibold whitespace-nowrap"
                    >
                      Request Dispatch
                    </button>
                  </div>

                  {newsletterSubscribed && (
                    <div className="p-3 bg-[#DCE5DA] text-[#292824] border border-[#CCC5BC] text-[12px] flex items-center gap-2">
                      <CheckCircle size={16} />
                      <span>Thank you. Your dispatch reservation has been recorded at the Mumbai atelier.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </section>

          {/* 6. Technical Whitepapers & Lab Downloads */}
          <section className="w-full py-16 px-5 md:px-16 bg-[#FAF9F5]">
            <div className="max-w-[1440px] mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <span className="font-semibold uppercase tracking-[0.2em] text-[#635E52] text-[11px] block mb-1">
                    Archival Research &amp; Operations
                  </span>
                  <h2 className="font-serif text-[28px] md:text-[38px] text-[#141310]">
                    Technical Whitepapers &amp; Studio Guides
                  </h2>
                </div>
                <div className="text-[12px] text-[#635E52] uppercase tracking-wider font-semibold">
                  Verified Lab Documentation // 2026 Editions
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Whitepaper 1 */}
                <div className="bg-[#F4F4F0] p-8 border border-[#EAE6DF] flex flex-col md:flex-row items-start justify-between gap-6 shadow-sm">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider font-semibold text-[#635E52]">
                      <span className="bg-[#141310] text-white px-2 py-0.5">Monograph WP-01</span>
                      <span>•</span>
                      <span>42 Pages PDF (8.4 MB)</span>
                    </div>
                    <h3 className="font-serif text-[22px] text-[#141310] leading-tight">
                      The 2026 Fine Art Paper Compendium: Cotton Rag vs Alpha-Cellulose vs C-Type
                    </h3>
                    <p className="text-[13px] text-[#4A463F] leading-relaxed">
                      Complete spectral reflectance charts, d-Max dynamic range measurements, and archival test scores comparing Hahnemühle Photo Rag, Canson Infinity, and Fuji Crystal Archive substrates.
                    </p>
                    <div className="pt-2 text-[11px] text-[#635E52] font-semibold uppercase tracking-wider">
                      Includes 14 Color ICC Profiles • Updated Jan 2026
                    </div>
                  </div>

                  <a
                    href="#download-wp1"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Monograph WP-01 download initiated. Check your downloads folder.');
                    }}
                    className="shrink-0 w-12 h-12 bg-[#141310] text-white hover:bg-[#292824] flex items-center justify-center transition-colors shadow-sm"
                    title="Download PDF"
                  >
                    <Download size={20} />
                  </a>
                </div>

                {/* Whitepaper 2 */}
                <div className="bg-[#F4F4F0] p-8 border border-[#EAE6DF] flex flex-col md:flex-row items-start justify-between gap-6 shadow-sm">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider font-semibold text-[#635E52]">
                      <span className="bg-[#141310] text-white px-2 py-0.5">Operations WP-02</span>
                      <span>•</span>
                      <span>28 Pages PDF (4.1 MB)</span>
                    </div>
                    <h3 className="font-serif text-[22px] text-[#141310] leading-tight">
                      Studio Guide to UK &amp; EU Logistics: DDP Customs Clearance &amp; Sterling Billing
                    </h3>
                    <p className="text-[13px] text-[#4A463F] leading-relaxed">
                      A transparent blueprint for British and European studios. Explains our Delivered Duty Paid (DDP) system, zero VAT import surprises at doorstep, and direct Royal Mail tracked hand-offs.
                    </p>
                    <div className="pt-2 text-[11px] text-[#635E52] font-semibold uppercase tracking-wider">
                      HMRC Compliant Protocol • Guaranteed 5-Day Air Transit
                    </div>
                  </div>

                  <a
                    href="#download-wp2"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Operations WP-02 download initiated. Check your downloads folder.');
                    }}
                    className="shrink-0 w-12 h-12 bg-[#141310] text-white hover:bg-[#292824] flex items-center justify-center transition-colors shadow-sm"
                    title="Download PDF"
                  >
                    <Download size={20} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
