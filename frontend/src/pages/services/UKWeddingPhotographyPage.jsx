import { studioEmail } from '../../utils/studioEmail';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Check, 
  Camera, 
  ShieldCheck, 
  MapPin, 
  BookOpen, 
  Sparkles, 
  MessageSquare, 
  Play, 
  CheckCircle2
} from 'lucide-react';
import TextReveal from '../../components/motion/TextReveal';
import RevealOnScroll from '../../components/motion/RevealOnScroll';
import StaggerBoxes from '../../components/motion/StaggerBoxes';

export default function UKWeddingPhotographyPage() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    clientNames: '',
    emailPhone: '',
    weddingDate: '',
    venue: '',
    guestCount: '',
    tier: 'The Stately English Weekend (£6,500 GBP)',
    consultationFormat: 'Private Video Salon Meeting',
    visionNotes: '',
    privacyAgree: false,
    submitted: false
  });

  useEffect(() => {
    document.title = 'Auteur Wedding Photography for Stately British Celebrations | Ultraa Albums';
  }, []);

  const handleEnquire = (collectionName) => {
    navigate(`/enquire?product=${encodeURIComponent(`Wedding Photography UK - ${collectionName}`)}`);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, submitted: true }));
  };

  const PORTFOLIO_ITEMS = [
    {
      title: 'Claridge’s Mayfair & Old Royal Naval College',
      category: 'London Society Landmark',
      desc: 'Three-day nuptial celebration featuring a candlelit painted hall banquet and ballroom waltz.',
      span: 'md:col-span-8',
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85'
    },
    {
      title: 'Hedsor House & Blenheim Palace',
      category: 'Country Manor',
      desc: 'Quintessential English pastoral elegance under heritage cedar trees.',
      span: 'md:col-span-4',
      img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85'
    },
    {
      title: 'Eilean Donan Castle & Skye',
      category: 'Scottish Highlands',
      desc: 'Misty lochside vows documented with 65mm panoramic optical ratio.',
      span: 'md:col-span-4',
      img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=85'
    },
    {
      title: 'Villa Balbiano, Lake Como & Cap d’Antibes',
      category: 'European Odyssey for British Patrons',
      desc: 'Transcontinental cinematic production coordinating private air logistics and archival post-production.',
      span: 'md:col-span-8',
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85'
    }
  ];

  const COLLECTIONS = [
    {
      id: 'london-intimate',
      name: 'The London Intimate',
      tier: 'Collection I',
      tag: 'Single Day',
      price: '£3,800',
      priceDesc: 'GBP Incl. VAT',
      desc: 'Curated for discerning townhouse ceremonies, Chelsea Register Office elopements, and historic private club banquets.',
      features: [
        'Up to 8 Hours Unobtrusive Coverage',
        '2 Master Artists (Senior Director + Associate)',
        'Medium-Format & 35mm Analog Film Capture',
        '10×10" Hand-Bound Flush Mount Album (40 Pages)',
        'Private High-Resolution Client Portal'
      ]
    },
    {
      id: 'stately-weekend',
      name: 'The Stately English Weekend',
      tier: 'Collection II',
      tag: '2-Day Estate',
      price: '£6,500',
      priceDesc: 'GBP Incl. VAT',
      highlight: 'Most Commissioned UK Tier',
      desc: 'Engineered for multi-day countryside manor weddings: rehearsal supper, stately day-of vows, and post-wedding brunch.',
      features: [
        'Full Two-Day Narrative Documentation',
        '3 Master Artists (Lead Photographer, 2nd Director, 4K Cinematographer)',
        '12-Minute Anamorphic Highlight Film + Full Ceremony',
        '12×16" Master Sovereign Album + 2 Parent Volumes',
        'British Archival Velvet Box & Custom Leather Debossing'
      ]
    },
    {
      id: 'destination-odyssey',
      name: 'The Global Destination Odyssey',
      tier: 'Collection III',
      tag: 'Multi-Day Destination',
      price: '£11,000',
      priceDesc: 'GBP Incl. Travel',
      desc: 'Unrestricted transcontinental coverage across France, Italy, Greece, or private chartered island celebrations.',
      features: [
        'Up to 4 Days Full International Presence',
        '4-Person Specialized Film & Photo Crew',
        'Licensed Aerial Drone Cinematography',
        'Grand 14×18" Imperial Tome in Teak Presentation Chest',
        'Same-Week 48-Hour Preview Master Spreads'
      ]
    }
  ];

  return (
    <div className="bg-[#FAF9F5] text-[#1B1C1A] min-h-screen font-sans selection:bg-[#EAE2D2] selection:text-[#1F1B12]">
      {/* 1. Breadcrumbs & Concierge Locator Bar */}
      <section className="w-full bg-[#F4F4F0] py-3 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-16 flex flex-wrap items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#635E52]">
            <Link to="/" className="hover:text-[#141310] transition-colors">Home</Link>
            <span className="text-[#CCC5BC]">/</span>
            <Link to="/for-uk" className="hover:text-[#141310] transition-colors">For UK</Link>
            <span className="text-[#CCC5BC]">/</span>
            <span className="text-[#141310] font-bold">Wedding Photography for UK</span>
          </nav>
          <div className="flex items-center gap-6 text-[10px] font-semibold tracking-wider uppercase text-[#635E52]">
            <span className="inline-flex items-center gap-1.5 text-[#141310]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#635E52]"></span>
              Private UK Concierge Liaison Desk
            </span>
            <span className="hidden md:inline text-[#CCC5BC]">|</span>
            <span className="hidden md:inline">High-Society &amp; Stately British Commissions</span>
          </div>
        </div>
      </section>

      {/* Reciprocal Switcher Banner */}
      <div className="w-full bg-[#EFEEEA] border-b border-[#EAE6DF] py-2 px-5 md:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between text-xs text-[#635E52]">
          <span>Viewing dedicated UK Wedding Photography Commissions (Sterling £ GBP, Discreet Auteur Crew).</span>
          <Link to="/services/wedding-photography" className="font-semibold underline hover:text-[#141310] transition-colors">
            Switch to International Production Page →
          </Link>
        </div>
      </div>

      {/* 2. Hero Section: Auteur Cinematography & Photography */}
      <section className="w-full py-12 lg:py-20 px-5 md:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <RevealOnScroll direction="left" delay={0.04}>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#635E52]"></span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">
                  Haute Photographic Atelier // UK &amp; Destination Commissions
                </span>
              </div>
            </RevealOnScroll>

            <TextReveal as="h1" direction="up" delay={0.08} className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141310] font-normal tracking-tight leading-[1.12]">
              Discreet, Auteur Wedding Photography &amp; Visual Documentation for Stately British Celebrations
            </TextReveal>

            <RevealOnScroll direction="up" delay={0.16}>
              <p className="text-base lg:text-lg text-[#4A463F] leading-relaxed">
                An elite collective of award-winning fine-art documentary photographers and cinematographers documenting multi-day high-society unions across London, The Cotswolds, Scottish Castles, and Mediterranean destinations. Rooted in medium-format optical depth and printed heirloom permanence.
              </p>
            </RevealOnScroll>

            {/* Atelier Badges Matrix */}
            <StaggerBoxes className="grid grid-cols-2 gap-3 pt-2" stagger={0.08} direction="up">
              <div className="p-3.5 bg-[#F4F4F0] border border-[#EAE6DF] flex items-start gap-2.5">
                <ShieldCheck size={18} className="text-[#141310] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#141310]">Strictly Limited</span>
                  <span className="text-xs text-[#4A463F]">12 UK Commissions / Year</span>
                </div>
              </div>

              <div className="p-3.5 bg-[#F4F4F0] border border-[#EAE6DF] flex items-start gap-2.5">
                <Camera size={18} className="text-[#141310] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#141310]">Medium Format</span>
                  <span className="text-xs text-[#4A463F]">Hasselblad &amp; Leica Optical Latitude</span>
                </div>
              </div>

              <div className="p-3.5 bg-[#F4F4F0] border border-[#EAE6DF] flex items-start gap-2.5">
                <MapPin size={18} className="text-[#141310] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#141310]">Dedicated Liaison</span>
                  <span className="text-xs text-[#4A463F]">Private Desk &amp; Consultation</span>
                </div>
              </div>

              <div className="p-3.5 bg-[#F4F4F0] border border-[#EAE6DF] flex items-start gap-2.5">
                <BookOpen size={18} className="text-[#141310] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#141310]">Bound Legacy</span>
                  <span className="text-xs text-[#4A463F]">Bespoke Hand-Crafted Tome Included</span>
                </div>
              </div>
            </StaggerBoxes>

            {/* CTAs */}
            <RevealOnScroll direction="up" delay={0.24}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href="#inquire-commission"
                  className="px-8 py-4 bg-[#141310] text-[#FAF9F5] text-xs font-semibold uppercase tracking-widest text-center hover:bg-[#292724] transition-colors"
                >
                  Check 2026/2027 UK Date Availability
                </a>
                <a
                  href="#portfolio-reel"
                  className="px-8 py-4 border border-[#7B766F] text-[#141310] text-xs font-semibold uppercase tracking-widest text-center hover:bg-[#EFEEEA] transition-colors flex items-center justify-center gap-2"
                >
                  <Play size={14} />
                  <span>View British Portfolio Reel</span>
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Hero Visual Column */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            <RevealOnScroll direction="right" delay={0.2} distance={28}>
              <div className="relative bg-[#EFEEEA] border border-[#EAE6DF] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85"
                  alt="Editorial candid photography of a black-tie couple inside an ornate British country manor conservatory."
                  className="w-full h-[540px] sm:h-[600px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#141310]/95 via-[#141310]/60 to-transparent text-[#FAF9F5] flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#EAE2D2]">Private Estate Commission</p>
                    <h3 className="font-serif text-lg text-[#FAF9F5] mt-1">Stately Manor Celebration</h3>
                    <p className="text-xs text-[#CDC6B7] opacity-90">The Orangery at Cliveden House, Berkshire</p>
                  </div>
                  <div className="text-right hidden sm:block">
                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#FAF9F5]/20 px-3 py-1 text-[#FAF9F5] backdrop-blur-sm">
                      Hasselblad H6D
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 3. The Curatorial Philosophy: The Art of Unhurried Observation */}
      <section className="w-full py-20 px-5 md:px-16 bg-[#EFEEEA] border-y border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-2xl mb-16">
            <RevealOnScroll direction="left" delay={0.04}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#635E52]">
                The Curatorial Philosophy
              </span>
            </RevealOnScroll>
            <TextReveal as="h2" direction="left" delay={0.08} className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal mt-2">
              The Art of Unhurried Observation
            </TextReveal>
            <RevealOnScroll direction="up" delay={0.15}>
              <p className="text-sm md:text-base text-[#4A463F] mt-4 leading-relaxed">
                British estate celebrations are masterworks of nuance, architectural tradition, and generational family bonds. Our directors do not construct scenes; we witness their authentic unfoldment with surgical discretion.
              </p>
            </RevealOnScroll>
          </div>

          <StaggerBoxes className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.12} direction="up">
            {/* Pillar 01 */}
            <div className="p-8 bg-[#FAF9F5] flex flex-col justify-between border border-[#EAE6DF]">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">Philosophy 01</span>
                <h3 className="font-serif text-xl text-[#141310] font-normal mt-3 mb-4">Unobtrusive Haute Journalism</h3>
                <p className="text-sm text-[#4A463F] leading-relaxed">
                  Zero intrusive ring-lights, staged choreography, or disruptive cues. We integrate silently into royal protocols and stately historic UK houses, documenting raw emotion, unguarded glances, and the understated dignity of your guests.
                </p>
              </div>
              <div className="pt-6 mt-8 border-t border-[#EAE6DF] bg-[#F4F4F0] p-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">Equipment Protocol</span>
                <p className="text-xs text-[#141310] mt-1">Silent leaf-shutter systems, zero artificial flash disruption in vaulted chapels.</p>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="p-8 bg-[#FAF9F5] flex flex-col justify-between border border-[#EAE6DF]">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">Philosophy 02</span>
                <h3 className="font-serif text-xl text-[#141310] font-normal mt-3 mb-4">Medium-Format &amp; Anamorphic Depth</h3>
                <p className="text-sm text-[#4A463F] leading-relaxed">
                  We exclusively employ medium-format sensors and cinema anamorphic glass. The result is unprecedented dynamic range, lifelike skin tone fidelity under British skies, and dimensional micro-contrast that standard DSLRs cannot achieve.
                </p>
              </div>
              <div className="pt-6 mt-8 border-t border-[#EAE6DF] bg-[#F4F4F0] p-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">Sensory Caliber</span>
                <p className="text-xs text-[#141310] mt-1">100-megapixel digital plate capture &amp; 35mm archival analog film grain.</p>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="p-8 bg-[#FAF9F5] flex flex-col justify-between border border-[#EAE6DF]">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">Philosophy 03</span>
                <h3 className="font-serif text-xl text-[#141310] font-normal mt-3 mb-4">The Bookbinder’s Gaze</h3>
                <p className="text-sm text-[#4A463F] leading-relaxed">
                  As bookbinders first, every composition is conceived with the panoramic 36-inch layflat spread in mind. We consider the fold, the negative space, and the narrative cadence that will command your family archives across generations.
                </p>
              </div>
              <div className="pt-6 mt-8 border-t border-[#EAE6DF] bg-[#F4F4F0] p-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52] block">The Heirloom Arc</span>
                <p className="text-xs text-[#141310] mt-1">Direct hand-off to our master bookbinders at our atelier workshops.</p>
              </div>
            </div>
          </StaggerBoxes>
        </div>
      </section>

      {/* 4. Iconic British Venues & Destination Portfolio */}
      <section className="w-full py-20 px-5 md:px-16 bg-[#FAF9F5]" id="portfolio-reel">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <RevealOnScroll direction="left" delay={0.04}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#635E52]">Curated Archives</span>
              </RevealOnScroll>
              <TextReveal as="h2" direction="left" delay={0.08} className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal mt-2">
                Historic Landmarks &amp; Destination Commissions
              </TextReveal>
            </div>
            <RevealOnScroll direction="up" delay={0.16}>
              <p className="text-sm md:text-base text-[#4A463F] max-w-md leading-relaxed">
                A showcase of multi-day commissions executed with quiet precision across Britain's grandest addresses and sun-drenched European enclaves.
              </p>
            </RevealOnScroll>
          </div>

          {/* Bento Grid Portfolio */}
          <StaggerBoxes className="grid grid-cols-1 md:grid-cols-12 gap-6" stagger={0.1} direction="up">
            {PORTFOLIO_ITEMS.map((item, idx) => (
              <div key={idx} className={`${item.span} bg-[#EFEEEA] relative group overflow-hidden border border-[#EAE6DF]`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141310]/85 via-transparent to-transparent opacity-90 p-8 flex flex-col justify-end text-[#FAF9F5]">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#EAE2D2]">{item.category}</span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FAF9F5] mt-1">{item.title}</h3>
                  <p className="text-xs text-[#CDC6B7] mt-1 max-w-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </StaggerBoxes>
        </div>
      </section>

      {/* 5. Curated Commission Collections (In Sterling £) */}
      <section className="w-full py-20 px-5 md:px-16 bg-[#EFEEEA] border-t border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <RevealOnScroll direction="up" delay={0.04}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">
                The Atelier Tiers
              </span>
            </RevealOnScroll>
            <TextReveal as="h2" direction="up" delay={0.08} className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal mt-2">
              Curated Commission Collections
            </TextReveal>
            <RevealOnScroll direction="up" delay={0.16}>
              <p className="text-sm md:text-base text-[#4A463F] mt-4 leading-relaxed">
                All investments billed directly in Sterling (£ GBP) through our UK concierge liaison. Each commission includes hand-bound artisanal tomes produced in our atelier.
              </p>
            </RevealOnScroll>
          </div>

          <StaggerBoxes className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" stagger={0.12} direction="up">
            {COLLECTIONS.map((col) => (
              <div
                key={col.id}
                className={`p-8 md:p-10 flex flex-col justify-between border ${
                  col.highlight
                    ? 'bg-[#141310] text-[#FAF9F5] border-2 border-[#141310] relative shadow-2xl'
                    : 'bg-[#FAF9F5] text-[#1B1C1A] border-[#EAE6DF]'
                }`}
              >
                {col.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#EAE2D2] text-[#1F1B12] px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
                    {col.highlight}
                  </div>
                )}
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-[#EAE6DF]/30">
                    <span className={`text-[11px] font-semibold uppercase tracking-wider ${col.highlight ? 'text-[#CDC6B7]' : 'text-[#635E52]'}`}>
                      {col.tier}
                    </span>
                    <span className={`text-[10px] font-bold uppercase px-3 py-1 ${col.highlight ? 'bg-[#FFFFFF]/10 text-[#FAF9F5]' : 'bg-[#EFEEEA] text-[#141310]'}`}>
                      {col.tag}
                    </span>
                  </div>

                  <h3 className={`font-serif text-2xl font-normal mt-4 mb-2 ${col.highlight ? 'text-[#FAF9F5]' : 'text-[#141310]'}`}>
                    {col.name}
                  </h3>
                  <p className={`text-xs mb-6 leading-relaxed ${col.highlight ? 'text-[#CDC6B7]' : 'text-[#4A463F]'}`}>
                    {col.desc}
                  </p>

                  <div className={`py-4 px-6 mb-8 border ${col.highlight ? 'bg-[#292724] border-[#FFFFFF]/10' : 'bg-[#F4F4F0] border-[#EAE6DF]'}`}>
                    <span className={`font-serif text-3xl font-normal ${col.highlight ? 'text-[#FAF9F5]' : 'text-[#141310]'}`}>
                      {col.price}
                    </span>
                    <span className={`text-xs ml-2 uppercase ${col.highlight ? 'text-[#CDC6B7]' : 'text-[#635E52]'}`}>
                      {col.priceDesc}
                    </span>
                  </div>

                  <ul className="space-y-3.5 text-xs">
                    {col.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3">
                        <Check size={14} className={col.highlight ? 'text-[#EAE2D2]' : 'text-[#635E52]'} />
                        <span className={col.highlight ? 'text-[#FAF9F5]' : 'text-[#141310]'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-8 border-t border-[#EAE6DF]/30">
                  <button
                    type="button"
                    onClick={() => handleEnquire(col.name)}
                    className={`block w-full py-4 text-center text-xs font-semibold uppercase tracking-widest transition-colors ${
                      col.highlight
                        ? 'bg-[#FAF9F5] text-[#141310] hover:bg-[#EAE2D2]'
                        : 'bg-[#141310] text-[#FAF9F5] hover:bg-[#292724]'
                    }`}
                  >
                    Request Collection Dossier
                  </button>
                </div>
              </div>
            ))}
          </StaggerBoxes>
        </div>
      </section>

      {/* 6. White-Glove Experience & Logistics */}
      <section className="w-full py-20 px-5 md:px-16 bg-[#FAF9F5]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <RevealOnScroll direction="left" delay={0.04}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#635E52]">
                Flawless Operation
              </span>
            </RevealOnScroll>
            <TextReveal as="h2" direction="left" delay={0.08} className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal">
              White-Glove Concierge &amp; Heritage Logistics
            </TextReveal>
            <RevealOnScroll direction="up" delay={0.15}>
              <p className="text-sm md:text-base text-[#4A463F] leading-relaxed">
                Historic British properties, Anglican cathedrals, and private estates require strict protocol adherence. We handle every bureaucratic detail silently so your weekend flows unimpeded.
              </p>
            </RevealOnScroll>

            <StaggerBoxes className="space-y-4 pt-2" stagger={0.08} direction="up">
              <div className="flex items-start gap-4 p-4 bg-[#F4F4F0] border border-[#EAE6DF]">
                <ShieldCheck size={22} className="text-[#141310] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#141310]">£5M Public Liability Insurance</h4>
                  <p className="text-xs text-[#4A463F] mt-1 leading-relaxed">Full compliance documentation pre-filed with National Trust, English Heritage, and Historic Royal Palaces.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#F4F4F0] border border-[#EAE6DF]">
                <Sparkles size={22} className="text-[#141310] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#141310]">Dual Redundancy Optical Archives</h4>
                  <p className="text-xs text-[#4A463F] mt-1 leading-relaxed">On-site triple-redundant NVMe RAID encryption backup before our directors depart your venue on wedding night.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#F4F4F0] border border-[#EAE6DF]">
                <BookOpen size={22} className="text-[#141310] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#141310]">Private Salon Consultation</h4>
                  <p className="text-xs text-[#4A463F] mt-1 leading-relaxed">Review leather swatches, archival paper specimens, and finished client heirloom albums with dedicated liaison.</p>
                </div>
              </div>
            </StaggerBoxes>
          </div>

          <div className="lg:col-span-7 bg-[#EFEEEA] p-8 md:p-12 border border-[#EAE6DF]">
            <RevealOnScroll direction="right" delay={0.15}>
              <div className="border-b border-[#EAE6DF] pb-4 mb-6 flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">Interactive Planning Guide</span>
                  <h3 className="font-serif text-xl text-[#141310] font-normal">The 4-Stage Commission Roadmap</h3>
                </div>
                <span className="text-[10px] font-semibold uppercase px-3 py-1 bg-[#FAF9F5] text-[#141310] border border-[#EAE6DF]">
                  British Calendar
                </span>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="font-serif text-2xl text-[#635E52]">01</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#141310]">The Atelier Dialogue</h4>
                    <p className="text-xs text-[#4A463F] mt-1 leading-relaxed">Initial private consultation via dedicated UK liaison desk or video salon. We examine your itinerary, lighting conditions, and architectural nuances.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="font-serif text-2xl text-[#635E52]">02</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#141310]">Estate Pre-Scouting &amp; Light Analysis</h4>
                    <p className="text-xs text-[#4A463F] mt-1 leading-relaxed">Four weeks prior, our directors chart solar arcs, indoor architectural sightlines, and archival backdrop opportunities.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="font-serif text-2xl text-[#635E52]">03</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#141310]">Discreet Weekend Capture</h4>
                    <p className="text-xs text-[#4A463F] mt-1 leading-relaxed">Impeccable execution in morning dress or black-tie attire. Zero interruption of your familial flow.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="font-serif text-2xl text-[#635E52]">04</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#141310]">Bespoke Album Binding &amp; Hand Delivery</h4>
                    <p className="text-xs text-[#4A463F] mt-1 leading-relaxed">Master color retouching followed by hand-binding at our atelier. Delivered to your UK residence or international home in custom packaging.</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 7. Commission Inquiry Form */}
      <section className="w-full py-20 px-5 md:px-16 bg-[#EFEEEA] border-t border-[#EAE6DF]" id="inquire-commission">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <RevealOnScroll direction="up" delay={0.04}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#635E52]">
                Private Ledger
              </span>
            </RevealOnScroll>
            <TextReveal as="h2" direction="up" delay={0.08} className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal mt-2">
              Commission Ultraa Albums for Your Celebration
            </TextReveal>
            <RevealOnScroll direction="up" delay={0.16}>
              <p className="text-sm text-[#4A463F] mt-3 leading-relaxed">
                Due to our devotion to bespoke bookbinding and auteur attention, our collective accepts strictly twelve celebrations per British summer season.
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll direction="up" delay={0.15}>
            <div className="bg-[#FAF9F5] p-8 md:p-12 border border-[#EAE6DF] shadow-md">
              {formState.submitted ? (
                <div className="studio-draft">
                  <h3>Your studio request is ready</h3>
                  <p>Review and send the details to the UK desk in your email app.</p>
                  <a className="studio-link primary" href={studioEmail(document.title, Object.fromEntries(Object.entries(formState).filter(([key]) => key !== 'submitted')), 'uk@ultraaalbums.com')}>Open email draft</a>
                  <button className="text-action" onClick={() => setFormState(prev => ({ ...prev, submitted:false }))}>Edit details</button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#635E52] mb-2">
                        Client Names *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.clientNames}
                        onChange={(e) => setFormState({ ...formState, clientNames: e.target.value })}
                        placeholder="e.g. Lady Clara &amp; James Montgomery"
                        className="w-full bg-[#F4F4F0] px-4 py-3 text-sm text-[#141310] border border-[#EAE6DF] focus:border-[#141310] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#635E52] mb-2">
                        Contact Email &amp; Telephone *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.emailPhone}
                        onChange={(e) => setFormState({ ...formState, emailPhone: e.target.value })}
                        placeholder="clara@domain.co.uk | +44 20 7946 0912"
                        className="w-full bg-[#F4F4F0] px-4 py-3 text-sm text-[#141310] border border-[#EAE6DF] focus:border-[#141310] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#635E52] mb-2">
                        Wedding Celebration Date *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.weddingDate}
                        onChange={(e) => setFormState({ ...formState, weddingDate: e.target.value })}
                        placeholder="DD / MM / YYYY"
                        className="w-full bg-[#F4F4F0] px-4 py-3 text-sm text-[#141310] border border-[#EAE6DF] focus:border-[#141310] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#635E52] mb-2">
                        UK Venue or Destination *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.venue}
                        onChange={(e) => setFormState({ ...formState, venue: e.target.value })}
                        placeholder="e.g. Blenheim Palace / Lake Como"
                        className="w-full bg-[#F4F4F0] px-4 py-3 text-sm text-[#141310] border border-[#EAE6DF] focus:border-[#141310] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#635E52] mb-2">
                        Estimated Guest Count
                      </label>
                      <input
                        type="text"
                        value={formState.guestCount}
                        onChange={(e) => setFormState({ ...formState, guestCount: e.target.value })}
                        placeholder="e.g. 180 Guests (Multi-Day)"
                        className="w-full bg-[#F4F4F0] px-4 py-3 text-sm text-[#141310] border border-[#EAE6DF] focus:border-[#141310] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#635E52] mb-2">
                        Preferred Collection Tier
                      </label>
                      <select
                        value={formState.tier}
                        onChange={(e) => setFormState({ ...formState, tier: e.target.value })}
                        className="w-full bg-[#F4F4F0] px-4 py-3 text-sm text-[#141310] border border-[#EAE6DF] focus:border-[#141310] focus:outline-none transition-colors"
                      >
                        <option>The Stately English Weekend (£6,500 GBP)</option>
                        <option>The London Intimate Collection (£3,800 GBP)</option>
                        <option>The Global Destination Odyssey (£11,000 GBP)</option>
                        <option>Custom Multi-Day Bespoke Commission</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#635E52] mb-2">
                        Preferred Consultation Format
                      </label>
                      <select
                        value={formState.consultationFormat}
                        onChange={(e) => setFormState({ ...formState, consultationFormat: e.target.value })}
                        className="w-full bg-[#F4F4F0] px-4 py-3 text-sm text-[#141310] border border-[#EAE6DF] focus:border-[#141310] focus:outline-none transition-colors"
                      >
                        <option>Private Video Salon Meeting</option>
                        <option>Direct Representative / Wedding Planner Liaison</option>
                        <option>Dedicated UK Desk Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#635E52] mb-2">
                      Aesthetic Vision, Heritage Notes &amp; Specific Wishes
                    </label>
                    <textarea
                      rows="4"
                      value={formState.visionNotes}
                      onChange={(e) => setFormState({ ...formState, visionNotes: e.target.value })}
                      placeholder="Tell us about the narrative cadence of your weekend, dressmakers, family traditions, and what you cherish most in archival photography..."
                      className="w-full bg-[#F4F4F0] p-4 text-sm text-[#141310] border border-[#EAE6DF] focus:border-[#141310] focus:outline-none transition-colors"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="privacy-consent"
                        required
                        checked={formState.privacyAgree}
                        onChange={(e) => setFormState({ ...formState, privacyAgree: e.target.checked })}
                        className="w-4 h-4 accent-[#141310]"
                      />
                      <label htmlFor="privacy-consent" className="text-xs text-[#4A463F]">
                        I understand Ultraa Albums operates under complete client privacy and non-disclosure standards.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-10 py-4 bg-[#141310] text-[#FAF9F5] text-xs font-semibold uppercase tracking-widest hover:bg-[#292724] transition-colors"
                    >
                      Submit Commission Dossier
                    </button>
                  </div>
                </form>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 8. Final Atelier Banner */}
      <section className="w-full py-16 bg-[#141310] text-[#FAF9F5]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <RevealOnScroll direction="up" delay={0.04}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#EAE2D2]">
                Reserve Your Celebration Date
              </span>
            </RevealOnScroll>
            <TextReveal as="h2" direction="up" delay={0.08} className="font-serif text-2xl sm:text-4xl text-[#FAF9F5]">
              Limited Commissions for the 2026/2027 British Season
            </TextReveal>
            <RevealOnScroll direction="up" delay={0.16}>
              <p className="text-sm md:text-base text-[#CDC6B7] max-w-xl mx-auto leading-relaxed">
                We invite wedding planners, noble families, and discerning couples to establish early contact to secure priority calendar dates.
              </p>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={0.24}>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-6">
                <a
                  href="#inquire-commission"
                  className="px-8 py-3.5 bg-[#FAF9F5] text-[#141310] text-xs font-semibold uppercase tracking-widest hover:bg-[#EAE2D2] transition-colors"
                >
                  Inquire via UK Concierge
                </a>
                <a
                  href="https://wa.me/919322254315"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-3.5 bg-transparent border border-[#FAF9F5]/30 text-[#FAF9F5] text-xs font-semibold uppercase tracking-widest hover:bg-[#FAF9F5]/10 transition-colors flex items-center gap-2"
                >
                  <MessageSquare size={14} />
                  <span>Direct WhatsApp Liaison</span>
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
