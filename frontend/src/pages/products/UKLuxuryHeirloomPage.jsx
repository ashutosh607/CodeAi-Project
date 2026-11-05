import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Check, 
  MessageSquare 
} from 'lucide-react';
import TextReveal from '../../components/motion/TextReveal';
import RevealOnScroll from '../../components/motion/RevealOnScroll';
import StaggerBoxes from '../../components/motion/StaggerBoxes';

export default function UKLuxuryHeirloomPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Sovereign Heirloom Tomes for UK Celebrations | Ultraa Albums';
  }, []);

  const handleCommission = (tierName) => {
    navigate(`/enquire?product=${encodeURIComponent(`Luxury Heirloom Albums UK - ${tierName}`)}`);
  };

  return (
    <div className="bg-[#FAF9F5] text-[#1B1C1A] min-h-screen font-sans selection:bg-[#EAE2D2] selection:text-[#1F1B12]">
      {/* 1. Top Breadcrumb & Sovereign Ribbon */}
      <section className="w-full bg-[#F4F4F0] px-4 md:px-16 py-3 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 text-[11px] font-semibold tracking-[0.14em] uppercase">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[#635E52]">
            <Link to="/" className="hover:text-[#141310] transition-colors">Home</Link>
            <span className="text-[#CCC5BC]">/</span>
            <Link to="/for-uk" className="hover:text-[#141310] transition-colors">For UK</Link>
            <span className="text-[#CCC5BC]">/</span>
            <span className="text-[#141310] font-bold">Luxury Heirloom Albums UK</span>
          </nav>
          
          <div className="flex items-center gap-2 text-[#4A463F]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#635E52]"></span>
            <span>Sovereign Collection • UK Concierge • Hand-Bound Heirlooms</span>
          </div>
        </div>
      </section>

      {/* Regional Cross-Link Notice */}
      <div className="bg-[#EAE2D2]/50 border-b border-[#EAE6DF] px-4 md:px-16 py-2 text-center text-xs text-[#4A463F]">
        <span>Looking for our international Sovereign edition? </span>
        <Link to="/products/luxury-albums" className="font-semibold text-[#141310] underline hover:text-[#635E52] transition-colors inline-flex items-center gap-1">
          Explore Standard Luxury Heirloom Albums <ArrowRight size={11} />
        </Link>
      </div>

      {/* 2. Editorial Hero Section */}
      <section className="w-full px-4 md:px-16 py-12 md:py-20 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-6">
            <RevealOnScroll direction="down" delay={0.02} distance={12}>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#635E52]"></span>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">
                  London • The Cotswolds • Scottish Highlands • Lake Como
                </p>
              </div>
            </RevealOnScroll>

            <TextReveal
              as="h1"
              direction="up"
              delay={0.06}
              className="font-serif text-3xl md:text-5xl lg:text-[54px] text-[#141310] leading-[1.12] tracking-tight font-normal"
            >
              Sovereign Heirloom Tomes for Grand British &amp; Destination Celebrations
            </TextReveal>

            <RevealOnScroll direction="up" delay={0.14} distance={16}>
              <p className="text-base md:text-lg text-[#4A463F] leading-relaxed max-w-2xl">
                Renaissance bookbinding meeting contemporary English elegance. 24K gold gilded edges, 5-rib raised spine hubs, full-grain Tuscan hides, and solid teakwood presentation chests delivered across Great Britain with archival permanence.
              </p>
            </RevealOnScroll>

            {/* Monthly Quota Meter */}
            <RevealOnScroll direction="up" delay={0.2} distance={18}>
              <div className="bg-[#EFEEEA] p-6 border border-[#EAE6DF] shadow-sm max-w-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Calendar Availability</span>
                    <p className="font-serif text-xl text-[#141310] mt-0.5 font-normal">Monthly Hand-Binding Schedule</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Bespoke Atelier Fee</span>
                    <p className="font-serif text-xl text-[#141310] font-bold mt-0.5">
                      From £850 <span className="font-sans text-xs font-normal text-[#635E52]">/ Volume</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-[#4A463F]">
                    <span>Strictly Limited: 12 UK Commissions Per Month</span>
                    <span className="font-bold text-[#141310]">9 of 12 Reserved</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#E3E2DF] overflow-hidden">
                    <div className="h-full bg-[#141310]" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => handleCommission('Sovereign Master')}
                    className="px-7 py-3 bg-[#141310] text-[#FAF9F5] text-xs font-semibold uppercase tracking-widest hover:bg-[#292724] transition-colors inline-flex items-center gap-2"
                  >
                    <span>Commission A Tome</span>
                    <ArrowRight size={14} />
                  </button>
                  <a
                    href="#specifications"
                    className="text-xs font-semibold uppercase tracking-widest text-[#141310] hover:text-[#635E52] transition-colors inline-flex items-center gap-1"
                  >
                    <span>View Dimensional Folios</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Hero Artwork Frame */}
          <div className="lg:col-span-5 relative">
            <RevealOnScroll direction="right" delay={0.16} distance={26}>
              <div className="relative bg-[#E9E8E4] p-4 border border-[#EAE6DF] shadow-xl aspect-[4/5] w-full">
                <img
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85"
                  alt="Grand hand-bound leather wedding album in Scottish castle library"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 p-5 bg-[#141310]/90 backdrop-blur-sm text-[#FAF9F5] border border-[#4A463F]">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#CCC5BC]">Specimen No. 104-UK</p>
                  <p className="font-serif text-lg font-normal mt-1">The Inveraray Castle Tome in Saddle Tan Tuscan Hide</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 3. Architectural Metric Ticker */}
      <section className="w-full bg-[#141310] text-[#FAF9F5] py-8 px-4 md:px-16 border-b border-[#292724]">
        <StaggerBoxes className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center" stagger={0.1} direction="up">
          <div className="space-y-1">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#CCC5BC]">Finishing Standard</span>
            <p className="font-serif text-2xl md:text-3xl font-normal text-[#FAF9F5]">24K Gold</p>
            <p className="text-xs text-[#CCC5BC]">Triple-burnished leaf gilded edges</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#CCC5BC]">Paper Substrate</span>
            <p className="font-serif text-2xl md:text-3xl font-normal text-[#FAF9F5]">308 gsm</p>
            <p className="text-xs text-[#CCC5BC]">Hahnemühle cotton Photo Rag</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#CCC5BC]">Spine Architecture</span>
            <p className="font-serif text-2xl md:text-3xl font-normal text-[#FAF9F5]">5-Rib Hubs</p>
            <p className="text-xs text-[#CCC5BC]">Hand-molded French spine cords</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#CCC5BC]">Transit Protocol</span>
            <p className="font-serif text-2xl md:text-3xl font-normal text-[#FAF9F5]">Priority Air</p>
            <p className="text-xs text-[#CCC5BC]">Direct tracked air courier to door</p>
          </div>
        </StaggerBoxes>
      </section>

      {/* 4. Section: A Heritage of Permanence */}
      <section className="w-full px-4 md:px-16 py-16 md:py-24 bg-[#FAF9F5] border-b border-[#EAE6DF]" id="heritage">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <RevealOnScroll direction="left" delay={0.12} distance={24}>
              <div className="relative bg-[#EFEEEA] aspect-[3/4] overflow-hidden border border-[#EAE6DF] shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85"
                  alt="Artisan hand-stitching silk headbands onto page block"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#F4F4F0] p-4 flex items-center justify-between border border-[#EAE6DF] mt-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#635E52]" />
                  <span className="text-xs text-[#4A463F] font-medium">Archival ISO 9706 Certified Paper Core</span>
                </div>
                <span className="text-[10px] font-semibold text-[#635E52] uppercase tracking-wider">pH Neutral</span>
              </div>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 lg:pl-6">
            <RevealOnScroll direction="down" delay={0.02} distance={12}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">Section 01 // Craft Manifesto</span>
            </RevealOnScroll>
            <TextReveal
              as="h2"
              direction="right"
              delay={0.06}
              className="font-serif text-3xl md:text-4xl text-[#141310] font-normal tracking-tight"
            >
              A Heritage of Permanence: Crafted to Outlast Centuries in Family Libraries
            </TextReveal>
            <RevealOnScroll direction="up" delay={0.12} distance={16}>
              <p className="text-base text-[#4A463F] leading-relaxed">
                Commissioned for ancestral estates, grand London residencies, and country estates across the Home Counties, our Sovereign volumes reject contemporary mass production in favour of historical binderies. Each book block is constructed by master artisans over fourteen days of deliberate curing.
              </p>
            </RevealOnScroll>

            <StaggerBoxes className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2" stagger={0.1} direction="up">
              <div className="p-5 bg-[#F4F4F0] border border-[#EAE6DF] space-y-2 hover:border-[#635E52]/40 transition-all duration-300">
                <div className="w-7 h-7 bg-[#141310] text-[#FAF9F5] flex items-center justify-center text-xs font-bold">1</div>
                <h3 className="font-serif text-lg text-[#141310] font-normal">Hand-Stitched French Headbands</h3>
                <p className="text-xs text-[#4A463F] leading-relaxed">
                  Spun silk two-tone headbands woven directly onto the spine head and tail, anchoring the page block against structural shear.
                </p>
              </div>

              <div className="p-5 bg-[#F4F4F0] border border-[#EAE6DF] space-y-2 hover:border-[#635E52]/40 transition-all duration-300">
                <div className="w-7 h-7 bg-[#141310] text-[#FAF9F5] flex items-center justify-center text-xs font-bold">2</div>
                <h3 className="font-serif text-lg text-[#141310] font-normal">Hahnemühle 308gsm Rag</h3>
                <p className="text-xs text-[#4A463F] leading-relaxed">
                  Acid-free pure cotton paper providing velvety tactile depth, deep dMax blacks, and archival pigments that retain tonality for generations.
                </p>
              </div>

              <div className="p-5 bg-[#F4F4F0] border border-[#EAE6DF] space-y-2 hover:border-[#635E52]/40 transition-all duration-300">
                <div className="w-7 h-7 bg-[#141310] text-[#FAF9F5] flex items-center justify-center text-xs font-bold">3</div>
                <h3 className="font-serif text-lg text-[#141310] font-normal">Seamless 180° Layflat Mount</h3>
                <p className="text-xs text-[#4A463F] leading-relaxed">
                  Flush mount core boards allow full-bleed landscape panoramic spreads across majestic ceremony vistas without gutter loss.
                </p>
              </div>

              <div className="p-5 bg-[#F4F4F0] border border-[#EAE6DF] space-y-2 hover:border-[#635E52]/40 transition-all duration-300">
                <div className="w-7 h-7 bg-[#141310] text-[#FAF9F5] flex items-center justify-center text-xs font-bold">4</div>
                <h3 className="font-serif text-lg text-[#141310] font-normal">Triple-Burnished Leaf Edge</h3>
                <p className="text-xs text-[#4A463F] leading-relaxed">
                  Pure 24-carat gold foil applied to the closed block edge with heated agates, sealing the interior paper fibres against ambient humidity.
                </p>
              </div>
            </StaggerBoxes>
          </div>
        </div>
      </section>

      {/* 5. Section: The Sovereign Presentation Suite */}
      <section className="w-full bg-[#F4F4F0] px-4 md:px-16 py-16 md:py-24 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <RevealOnScroll direction="down" delay={0.02} distance={12}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">Section 02 // The Reliquary</span>
              </RevealOnScroll>
              <TextReveal
                as="h2"
                direction="left"
                delay={0.06}
                className="font-serif text-3xl md:text-4xl text-[#141310] font-normal"
              >
                The Sovereign Presentation Suite
              </TextReveal>
              <RevealOnScroll direction="up" delay={0.12} distance={14}>
                <p className="text-sm md:text-base text-[#4A463F]">
                  Every heirloom tome is enveloped in bespoke archival architecture, transforming the unboxing ritual into an evocative familial event.
                </p>
              </RevealOnScroll>
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#635E52] bg-[#FAF9F5] px-4 py-2 border border-[#EAE6DF] self-start md:self-auto">
              Included in All UK Sovereign Commissions
            </span>
          </div>

          <StaggerBoxes className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12} direction="up">
            {/* Item 1 */}
            <div className="bg-[#FAF9F5] p-6 border border-[#EAE6DF] shadow-sm flex flex-col justify-between space-y-6 hover:border-[#635E52]/40 transition-all duration-300">
              <div className="space-y-4">
                <div className="h-48 overflow-hidden bg-[#EFEEEA]">
                  <img
                    src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=85"
                    alt="Solid hardwood album presentation chest"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#635E52]">Architectural Joinery</span>
                <h3 className="font-serif text-xl text-[#141310] font-normal">Solid Burma Teak Chest</h3>
                <p className="text-xs text-[#4A463F] leading-relaxed">
                  Dovetail jointed seasoned hardwood seasoned for stability. Hand-polished with natural beeswax and fitted with mortised brass hinges and drop handles.
                </p>
              </div>
              <ul className="space-y-2 pt-4 border-t border-[#EAE6DF] text-xs text-[#4A463F]">
                <li className="flex items-center gap-2"><Check size={12} className="text-[#635E52]" /> Midnight velvet interior lining</li>
                <li className="flex items-center gap-2"><Check size={12} className="text-[#635E52]" /> Custom brass interior provenance plate</li>
              </ul>
            </div>

            {/* Item 2 */}
            <div className="bg-[#FAF9F5] p-6 border border-[#EAE6DF] shadow-sm flex flex-col justify-between space-y-6 hover:border-[#635E52]/40 transition-all duration-300">
              <div className="space-y-4">
                <div className="h-48 overflow-hidden bg-[#EFEEEA]">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=85"
                    alt="Curator handling cotton gloves"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#635E52]">Conservator Handling</span>
                <h3 className="font-serif text-xl text-[#141310] font-normal">Curator Gloves &amp; Cloth</h3>
                <p className="text-xs text-[#4A463F] leading-relaxed">
                  Twin pairs of unbleached Egyptian cotton handling gloves prevent natural skin oils from contacting the fine art emulsions during viewing.
                </p>
              </div>
              <ul className="space-y-2 pt-4 border-t border-[#EAE6DF] text-xs text-[#4A463F]">
                <li className="flex items-center gap-2"><Check size={12} className="text-[#635E52]" /> Embroidered atelier insignia</li>
                <li className="flex items-center gap-2"><Check size={12} className="text-[#635E52]" /> Japanese microfiber polishing veil</li>
              </ul>
            </div>

            {/* Item 3 */}
            <div className="bg-[#FAF9F5] p-6 border border-[#EAE6DF] shadow-sm flex flex-col justify-between space-y-6 hover:border-[#635E52]/40 transition-all duration-300">
              <div className="space-y-4">
                <div className="h-48 overflow-hidden bg-[#EFEEEA]">
                  <img
                    src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=85"
                    alt="Archival Certificate of Provenance with wax seal"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#635E52]">Registry &amp; Lineage</span>
                <h3 className="font-serif text-xl text-[#141310] font-normal">Certificate of Provenance</h3>
                <p className="text-xs text-[#4A463F] leading-relaxed">
                  Deckle-edged rag parchment identifying the master binder, paper mill harvest lot, date of completion, and bespoke estate archive entry number.
                </p>
              </div>
              <ul className="space-y-2 pt-4 border-t border-[#EAE6DF] text-xs text-[#4A463F]">
                <li className="flex items-center gap-2"><Check size={12} className="text-[#635E52]" /> Atelier seal impression</li>
                <li className="flex items-center gap-2"><Check size={12} className="text-[#635E52]" /> Registered in atelier archive record</li>
              </ul>
            </div>
          </StaggerBoxes>
        </div>
      </section>

      {/* 6. Section: Curated UK Scales of Exhibition */}
      <section className="w-full px-4 md:px-16 py-16 md:py-24 bg-[#FAF9F5] border-b border-[#EAE6DF]" id="specifications">
        <div className="max-w-[1440px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <RevealOnScroll direction="down" delay={0.02} distance={12}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">Section 03 // Dimensional Architecture</span>
            </RevealOnScroll>
            <TextReveal
              as="h2"
              direction="up"
              delay={0.06}
              className="font-serif text-3xl md:text-4xl text-[#141310] font-normal"
            >
              Curated UK Scales of Exhibition
            </TextReveal>
            <RevealOnScroll direction="up" delay={0.12} distance={14}>
              <p className="text-sm md:text-base text-[#4A463F]">
                Engineered for salon coffee tables, stately library reading easels, and high-impact visual storytelling.
              </p>
            </RevealOnScroll>
          </div>

          <StaggerBoxes className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch" stagger={0.14} direction="up">
            {/* Scale 1 */}
            <div className="bg-[#EFEEEA] p-8 border border-[#EAE6DF] shadow-sm flex flex-col justify-between space-y-8 relative hover:border-[#635E52]/40 transition-all duration-300">
              <div className="absolute top-0 right-0 bg-[#141310] text-[#FAF9F5] px-4 py-1 text-[10px] font-semibold uppercase tracking-widest">
                Premier Choice
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#635E52]">The Cathedral Folio</span>
                  <h3 className="font-serif text-2xl text-[#141310] mt-1 font-normal">14 × 18″ Imperial Royal Tome</h3>
                  <p className="text-xs text-[#4A463F] mt-2 leading-relaxed">
                    Magnificent horizontal architecture created specifically for grand cathedral ceremonies, sweeping Scottish estates, and royal marquee weddings.
                  </p>
                </div>

                {/* Proportion Diagram */}
                <div className="w-full bg-[#E9E8E4] h-36 flex flex-col items-center justify-center p-4 border border-[#EAE6DF]">
                  <div className="w-40 h-24 border border-[#635E52] bg-[#FAF9F5] flex items-center justify-center shadow-inner relative">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">36″ OPEN PANORAMA</span>
                    <span className="absolute -top-3 text-[9px] font-mono text-[#635E52]">18 INCHES</span>
                    <span className="absolute -left-6 text-[9px] font-mono text-[#635E52] -rotate-90">14 IN</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#4A463F]">
                  <div className="flex justify-between py-1 bg-[#FAF9F5] px-3 border border-[#EAE6DF]/60">
                    <span className="text-[#635E52]">Capacity</span>
                    <span className="font-semibold text-[#141310]">60 to 120 Pages (30-60 Spreads)</span>
                  </div>
                  <div className="flex justify-between py-1 bg-[#FAF9F5] px-3 border border-[#EAE6DF]/60">
                    <span className="text-[#635E52]">Spine Depth</span>
                    <span className="font-semibold text-[#141310]">6.5 cm reinforced hub assembly</span>
                  </div>
                  <div className="flex justify-between py-1 bg-[#FAF9F5] px-3 border border-[#EAE6DF]/60">
                    <span className="text-[#635E52]">Weight</span>
                    <span className="font-semibold text-[#141310]">Approx. 6.2 kg completed</span>
                  </div>
                  <div className="flex justify-between py-1 bg-[#FAF9F5] px-3 border border-[#EAE6DF]/60">
                    <span className="text-[#635E52]">Gilding</span>
                    <span className="font-semibold text-[#141310]">3-Edge 24K Deep Leaf Gold</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE6DF]">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Commission From</span>
                  <span className="font-serif text-2xl font-bold text-[#141310]">£1,450</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCommission('14x18 Cathedral Folio')}
                  className="w-full py-3 bg-[#141310] text-[#FAF9F5] text-xs font-semibold uppercase tracking-widest text-center hover:bg-[#292724] transition-colors"
                >
                  Specify Royal Tome
                </button>
              </div>
            </div>

            {/* Scale 2 */}
            <div className="bg-[#F4F4F0] p-8 border border-[#EAE6DF] shadow-sm flex flex-col justify-between space-y-8 hover:border-[#635E52]/40 transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#635E52]">The Editorial Classic</span>
                  <h3 className="font-serif text-2xl text-[#141310] mt-1 font-normal">12 × 16″ Grand Collector</h3>
                  <p className="text-xs text-[#4A463F] mt-2 leading-relaxed">
                    Ideal balance of authoritative weight and intimate lap viewing. Highly favoured by top documentary photographers for narrative pacing.
                  </p>
                </div>

                {/* Proportion Diagram */}
                <div className="w-full bg-[#E9E8E4] h-36 flex flex-col items-center justify-center p-4 border border-[#EAE6DF]">
                  <div className="w-36 h-22 border border-[#635E52] bg-[#FAF9F5] flex items-center justify-center shadow-inner relative">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">32″ OPEN PANORAMA</span>
                    <span className="absolute -top-3 text-[9px] font-mono text-[#635E52]">16 INCHES</span>
                    <span className="absolute -left-6 text-[9px] font-mono text-[#635E52] -rotate-90">12 IN</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#4A463F]">
                  <div className="flex justify-between py-1 bg-[#FAF9F5] px-3 border border-[#EAE6DF]/60">
                    <span className="text-[#635E52]">Capacity</span>
                    <span className="font-semibold text-[#141310]">40 to 100 Pages (20-50 Spreads)</span>
                  </div>
                  <div className="flex justify-between py-1 bg-[#FAF9F5] px-3 border border-[#EAE6DF]/60">
                    <span className="text-[#635E52]">Spine Depth</span>
                    <span className="font-semibold text-[#141310]">5.0 cm raised hub profile</span>
                  </div>
                  <div className="flex justify-between py-1 bg-[#FAF9F5] px-3 border border-[#EAE6DF]/60">
                    <span className="text-[#635E52]">Weight</span>
                    <span className="font-semibold text-[#141310]">Approx. 4.8 kg completed</span>
                  </div>
                  <div className="flex justify-between py-1 bg-[#FAF9F5] px-3 border border-[#EAE6DF]/60">
                    <span className="text-[#635E52]">Gilding</span>
                    <span className="font-semibold text-[#141310]">Gold, Antique Bronze or Chiffon</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE6DF]">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Commission From</span>
                  <span className="font-serif text-2xl font-bold text-[#141310]">£1,150</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCommission('12x16 Grand Collector')}
                  className="w-full py-3 bg-[#FAF9F5] text-[#141310] border border-[#141310] text-xs font-semibold uppercase tracking-widest text-center hover:bg-[#EAE2D2] transition-colors"
                >
                  Specify Grand Collector
                </button>
              </div>
            </div>

            {/* Scale 3 */}
            <div className="bg-[#F4F4F0] p-8 border border-[#EAE6DF] shadow-sm flex flex-col justify-between space-y-8 hover:border-[#635E52]/40 transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#635E52]">The Timeless Symmetry</span>
                  <h3 className="font-serif text-2xl text-[#141310] mt-1 font-normal">12 × 12″ Classic Estate Square</h3>
                  <p className="text-xs text-[#4A463F] mt-2 leading-relaxed">
                    The revered square medium preferred for balanced portraiture and architecture. Harmonizes perfectly with Mayfair townhome display cases.
                  </p>
                </div>

                {/* Proportion Diagram */}
                <div className="w-full bg-[#E9E8E4] h-36 flex flex-col items-center justify-center p-4 border border-[#EAE6DF]">
                  <div className="w-28 h-28 border border-[#635E52] bg-[#FAF9F5] flex items-center justify-center shadow-inner relative">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">24″ SPREAD</span>
                    <span className="absolute -top-3 text-[9px] font-mono text-[#635E52]">12 INCHES</span>
                    <span className="absolute -left-6 text-[9px] font-mono text-[#635E52] -rotate-90">12 IN</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#4A463F]">
                  <div className="flex justify-between py-1 bg-[#FAF9F5] px-3 border border-[#EAE6DF]/60">
                    <span className="text-[#635E52]">Capacity</span>
                    <span className="font-semibold text-[#141310]">30 to 80 Pages (15-40 Spreads)</span>
                  </div>
                  <div className="flex justify-between py-1 bg-[#FAF9F5] px-3 border border-[#EAE6DF]/60">
                    <span className="text-[#635E52]">Spine Depth</span>
                    <span className="font-semibold text-[#141310]">4.2 cm raised hub profile</span>
                  </div>
                  <div className="flex justify-between py-1 bg-[#FAF9F5] px-3 border border-[#EAE6DF]/60">
                    <span className="text-[#635E52]">Weight</span>
                    <span className="font-semibold text-[#141310]">Approx. 3.7 kg completed</span>
                  </div>
                  <div className="flex justify-between py-1 bg-[#FAF9F5] px-3 border border-[#EAE6DF]/60">
                    <span className="text-[#635E52]">Gilding</span>
                    <span className="font-semibold text-[#141310]">Gold or Natural Archival Raw Deckle</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE6DF]">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Commission From</span>
                  <span className="font-serif text-2xl font-bold text-[#141310]">£850</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCommission('12x12 Estate Square')}
                  className="w-full py-3 bg-[#FAF9F5] text-[#141310] border border-[#141310] text-xs font-semibold uppercase tracking-widest text-center hover:bg-[#EAE2D2] transition-colors"
                >
                  Specify Estate Square
                </button>
              </div>
            </div>
          </StaggerBoxes>
        </div>
      </section>

      {/* 7. Section: Bespoke Heraldic & Crest Engraving */}
      <section className="w-full bg-[#141310] text-[#FAF9F5] px-4 md:px-16 py-16 md:py-24 border-b border-[#292724]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6">
            <RevealOnScroll direction="down" delay={0.02} distance={12}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#CCC5BC]">Section 04 // Metallurgical Precision</span>
            </RevealOnScroll>
            <TextReveal
              as="h2"
              direction="left"
              delay={0.06}
              className="font-serif text-3xl md:text-4xl text-[#FAF9F5] font-normal tracking-tight"
            >
              Bespoke Heraldic &amp; Crest Engraving
            </TextReveal>
            <RevealOnScroll direction="up" delay={0.12} distance={14}>
              <p className="text-base text-[#CCC5BC] leading-relaxed">
                We transform your armorial bearings, private country estate insignias, or custom couple monograms into bespoke solid brass magnesium dies cut to micron-level tolerances.
              </p>
            </RevealOnScroll>

            <StaggerBoxes className="space-y-4 pt-2" stagger={0.1} direction="left">
              <div className="p-4 bg-[#292724] border-l-2 border-[#CCC5BC]">
                <h4 className="font-serif text-lg text-[#FAF9F5] font-normal">Deep-Relief CNC Milling</h4>
                <p className="text-xs text-[#CCC5BC] mt-1 leading-relaxed">
                  We produce single-piece milled brass matrix plates capable of applying heat and tonnage without leather fibre burn.
                </p>
              </div>

              <div className="p-4 bg-[#292724] border-l-2 border-[#CCC5BC]">
                <h4 className="font-serif text-lg text-[#FAF9F5] font-normal">22-Karat Matte Gold &amp; Blind Deboss</h4>
                <p className="text-xs text-[#CCC5BC] mt-1 leading-relaxed">
                  Option between understated textural blind indentation into rich vegetable-tanned hides or lustrous genuine gold leaf foil transfer.
                </p>
              </div>

              <div className="p-4 bg-[#292724] border-l-2 border-[#CCC5BC]">
                <h4 className="font-serif text-lg text-[#FAF9F5] font-normal">Classical English Typography</h4>
                <p className="text-xs text-[#CCC5BC] mt-1 leading-relaxed">
                  Hand-typeset inscriptions utilizing historical British font matrices including Caslon Old Style, Perpetua, and Baskerville.
                </p>
              </div>
            </StaggerBoxes>
          </div>

          <div className="lg:col-span-6">
            <RevealOnScroll direction="right" delay={0.16} distance={26}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#292724] p-3 border border-[#4A463F]">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=85"
                    alt="Milled solid brass die specimen"
                    className="w-full h-56 object-cover"
                  />
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#CCC5BC] mt-2">Milled Brass Die Specimen</p>
                </div>
                <div className="bg-[#292724] p-3 border border-[#4A463F] mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=85"
                    alt="Blind stamp in Tuscan leather"
                    className="w-full h-56 object-cover"
                  />
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#CCC5BC] mt-2">Blind Stamp In Tuscan Calf</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 8. Section: White-Glove Courier to UK Estates */}
      <section className="w-full px-4 md:px-16 py-16 md:py-24 bg-[#FAF9F5] border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <RevealOnScroll direction="down" delay={0.02} distance={12}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">Section 05 // Logistics Liaison</span>
              </RevealOnScroll>
              <TextReveal
                as="h2"
                direction="left"
                delay={0.06}
                className="font-serif text-3xl md:text-4xl text-[#141310] font-normal tracking-tight"
              >
                White-Glove Courier to Mayfair, Kensington &amp; Country Estates
              </TextReveal>
              <RevealOnScroll direction="up" delay={0.12} distance={14}>
                <p className="text-base text-[#4A463F] leading-relaxed">
                  Every finished Sovereign volume departs our atelier via priority climate-shielded transit. Sealed with tamper-evident archival ribbon, each package travels directly to British residences or studio ateliers under full commercial fine art transit coverage.
                </p>
              </RevealOnScroll>

              <StaggerBoxes className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2" stagger={0.1} direction="up">
                <div className="p-4 bg-[#F4F4F0] border border-[#EAE6DF]">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">London Priority</span>
                  <p className="font-serif text-lg text-[#141310] font-bold mt-1">Air Express</p>
                  <p className="text-xs text-[#4A463F] mt-0.5">Direct to London &amp; Home Counties studios.</p>
                </div>
                <div className="p-4 bg-[#F4F4F0] border border-[#EAE6DF]">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Customs &amp; Duties</span>
                  <p className="font-serif text-lg text-[#141310] font-bold mt-1">DDP Pre-Cleared</p>
                  <p className="text-xs text-[#4A463F] mt-0.5">Zero VAT or import friction at doorstep.</p>
                </div>
                <div className="p-4 bg-[#F4F4F0] border border-[#EAE6DF]">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Insured Transit</span>
                  <p className="font-serif text-lg text-[#141310] font-bold mt-1">100% Tracked</p>
                  <p className="text-xs text-[#4A463F] mt-0.5">Full transit guarantee for accidental damage.</p>
                </div>
              </StaggerBoxes>
            </div>

            <div className="lg:col-span-5 bg-[#EFEEEA] p-6 border border-[#EAE6DF] space-y-4 shadow-sm">
              <RevealOnScroll direction="right" delay={0.14} distance={20}>
                <div className="flex items-center justify-between pb-3 border-b border-[#CCC5BC]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#141310]">Priority UK Destinations</span>
                  <span className="text-[10px] font-semibold uppercase text-[#635E52]">Active Routes</span>
                </div>
                <div className="space-y-3 text-xs mt-3">
                  <div className="flex justify-between pb-2 border-b border-[#CCC5BC]/40">
                    <span className="text-[#141310] font-medium">Mayfair, Belgravia &amp; Kensington, London</span>
                    <span className="text-[#635E52]">Priority Air</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-[#CCC5BC]/40">
                    <span className="text-[#141310] font-medium">The Cotswolds &amp; Oxfordshire Estates</span>
                    <span className="text-[#635E52]">Secured Carrier</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-[#CCC5BC]/40">
                    <span className="text-[#141310] font-medium">Edinburgh &amp; Scottish Highlands</span>
                    <span className="text-[#635E52]">Express Air</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-[#CCC5BC]/40">
                    <span className="text-[#141310] font-medium">Cheshire, Surrey &amp; Yorkshire Manors</span>
                    <span className="text-[#635E52]">Secured Carrier</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#141310] font-medium">European Destination Unions (Lake Como / Amalfi)</span>
                    <span className="text-[#635E52]">Direct Villa Courier</span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Section: British Master Photographers & Editorial Standards */}
      <section className="w-full bg-[#F4F4F0] px-4 md:px-16 py-16 md:py-24 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <RevealOnScroll direction="down" delay={0.02} distance={12}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">Section 06 // Editorial Quality</span>
              </RevealOnScroll>
              <TextReveal
                as="h2"
                direction="left"
                delay={0.06}
                className="font-serif text-3xl md:text-4xl text-[#141310] font-normal"
              >
                Fine Art Standards for Stately Commissions
              </TextReveal>
            </div>
            <RevealOnScroll direction="right" delay={0.12} distance={16}>
              <p className="text-xs md:text-sm text-[#4A463F] max-w-md">
                Constructed to meet the exacting criteria of editorial destination photographers and discerning private collectors across Great Britain.
              </p>
            </RevealOnScroll>
          </div>

          <StaggerBoxes className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12} direction="up">
            <div className="bg-[#FAF9F5] p-8 border border-[#EAE6DF] shadow-sm flex flex-col justify-between space-y-6 hover:border-[#635E52]/40 transition-all duration-300">
              <p className="text-sm text-[#4A463F] italic leading-relaxed">
                “Client commissions at stately estates demand physical volumes that match the sheer magnitude of the occasion. The 14×18 Sovereign Tome delivers that architectural gravitas with 24K leaf gilding that catches natural ambient light.”
              </p>
              <div className="pt-4 border-t border-[#EAE6DF]">
                <p className="font-serif text-base text-[#141310] font-medium">Atelier Editorial Benchmark</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Imperial Stately Commissions</p>
              </div>
            </div>

            <div className="bg-[#FAF9F5] p-8 border border-[#EAE6DF] shadow-sm flex flex-col justify-between space-y-6 hover:border-[#635E52]/40 transition-all duration-300">
              <p className="text-sm text-[#4A463F] italic leading-relaxed">
                “The tonal fidelity on pure cotton Hahnemühle rag retains subtle misty shadows and Scottish landscape depth with extreme precision. The dovetail solid teak presentation chests provide an unforgettable heirloom reveal.”
              </p>
              <div className="pt-4 border-t border-[#EAE6DF]">
                <p className="font-serif text-base text-[#141310] font-medium">Atelier Editorial Benchmark</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Landscape &amp; Documentarian Standards</p>
              </div>
            </div>

            <div className="bg-[#FAF9F5] p-8 border border-[#EAE6DF] shadow-sm flex flex-col justify-between space-y-6 hover:border-[#635E52]/40 transition-all duration-300">
              <p className="text-sm text-[#4A463F] italic leading-relaxed">
                “From bespoke heraldic CNC brass die debossing to the tactile feel of aged Tuscan leather, every detail honors traditional European bindery methods while guaranteeing DDP clearance with zero UK customs delays.”
              </p>
              <div className="pt-4 border-t border-[#EAE6DF]">
                <p className="font-serif text-base text-[#141310] font-medium">Atelier Editorial Benchmark</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Museum Heritage Archive</p>
              </div>
            </div>
          </StaggerBoxes>
        </div>
      </section>

      {/* 10. Private Consultation CTA Strip */}
      <section className="w-full bg-[#141310] text-[#FAF9F5] py-16 px-4 md:px-16 text-center" id="consultation">
        <div className="max-w-3xl mx-auto space-y-6">
          <RevealOnScroll direction="down" delay={0.02} distance={12}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#CCC5BC]">Private Commission</span>
          </RevealOnScroll>
          <TextReveal
            as="h2"
            direction="up"
            delay={0.06}
            className="font-serif text-3xl md:text-4xl font-normal text-[#FAF9F5]"
          >
            Begin Your UK Sovereign Tome Commission
          </TextReveal>
          <RevealOnScroll direction="up" delay={0.12} distance={14}>
            <p className="text-sm text-[#CCC5BC] max-w-xl mx-auto leading-relaxed">
              Due to the multi-week curing and hand-gilding process, UK commissions are restricted to 12 bespoke volumes per month. Discuss your estate specifications with our atelier liaison.
            </p>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.18} distance={18}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => handleCommission('Private Consultation')}
                className="px-8 py-3.5 bg-[#FAF9F5] text-[#141310] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#EAE2D2] transition-colors"
              >
                Request Private Commission
              </button>
              <a
                href="https://wa.me/919322254315"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 bg-transparent border border-[#CCC5BC] text-[#FAF9F5] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#FAF9F5]/10 transition-colors inline-flex items-center gap-2"
              >
                <MessageSquare size={14} />
                <span>WhatsApp UK Liaison</span>
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
