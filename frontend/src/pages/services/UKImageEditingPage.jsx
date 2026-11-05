import { studioEmail } from '../../utils/studioEmail';
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Cloud, 
  ShieldCheck, 
  CreditCard, 
  Lock, 
  Zap, 
  CheckCircle2,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import TextReveal from '../../components/motion/TextReveal';
import RevealOnScroll from '../../components/motion/RevealOnScroll';
import StaggerBoxes from '../../components/motion/StaggerBoxes';

export default function UKImageEditingPage() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [stageWidth, setStageWidth] = useState(600);
  const isDragging = useRef(false);
  const stageRef = useRef(null);

  const [formState, setFormState] = useState({
    studioName: '',
    email: '',
    phone: '',
    style: '',
    cloudLink: '',
    notes: '',
    gdprAgree: false,
    submitted: false
  });

  useEffect(() => {
    document.title = 'Master RAW Image Editing & Color Grading for UK Photographers | Ultraa Albums';

    const updateDimensions = () => {
      if (stageRef.current) {
        setStageWidth(stageRef.current.offsetWidth);
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleSliderMove = (clientX) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    offsetX = Math.max(0, Math.min(offsetX, rect.width));
    const percentage = (offsetX / rect.width) * 100;
    setSliderPos(percentage);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const handleEnquire = (tierName) => {
    navigate(`/enquire?product=${encodeURIComponent(`Image Editing UK - ${tierName}`)}`);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, submitted: true }));
  };

  const FAQS = [
    {
      q: "How do you calibrate for our studio's specific preset and color style?",
      a: "During our complimentary calibration phase, you send 5 varied RAW frames alongside your exported final edits of those same images. Our lead colorist analyzes your tone curves, HSL shifts, grain overlays, and white point balance. We build a proprietary profile keyed exclusively to your account, ensuring 100% stylistic consistency before we accept full batches."
    },
    {
      q: 'Is our client imagery and personal data protected under UK GDPR?',
      a: 'Yes, strictly. We maintain full compliance with the UK Data Protection Act 2018 and UK GDPR. All files are hosted on encrypted, dedicated cloud drives with auto-purge protocols after 14 days of job sign-off. We sign reciprocal confidentiality non-disclosure agreements (NDAs) covering high-profile wedding parties, VIP ceremonies, and celebrity guests.'
    },
    {
      q: 'Can we pay via UK Faster Payments / BACS in GBP?',
      a: 'Yes. Every order is invoiced directly in Pounds Sterling (£) with standard UK Sort Code and Account Number details. You can settle instantly via UK Faster Payments, BACS, or corporate debit/credit cards with zero international conversion friction.'
    },
    {
      q: 'What if a batch requires revision or white-balance tweaking?',
      a: 'We provide complimentary batch recalibrations on every commissioned order. If specific reception venues or indoor flash sequences need fine-tuning, submit a catalog flag and we adjust and return the catalog within 12 hours free of charge.'
    }
  ];

  return (
    <div className="bg-[#FAF9F5] text-[#1B1C1A] min-h-screen font-sans selection:bg-[#EAE2D2] selection:text-[#1F1B12]">
      {/* 1. Top Utility Context & Breadcrumbs Bar */}
      <section className="w-full bg-[#F4F4F0] border-b border-[#EAE6DF] py-3">
        <div className="max-w-[1440px] mx-auto px-5 md:px-16 flex flex-wrap items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#635E52]">
            <Link to="/" className="hover:text-[#141310] transition-colors">Home</Link>
            <span className="text-[#CCC5BC]">/</span>
            <Link to="/for-uk" className="hover:text-[#141310] transition-colors">For UK</Link>
            <span className="text-[#CCC5BC]">/</span>
            <span className="text-[#141310] font-bold">Image Editing for UK</span>
          </nav>
          <div className="flex items-center gap-6 text-[10px] font-semibold tracking-wider uppercase text-[#635E52]">
            <span className="inline-flex items-center gap-1.5 text-[#141310]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#141310]"></span>
              HMRC-Compliant Sterling Settlement
            </span>
            <span className="hidden md:inline text-[#CCC5BC]">•</span>
            <span className="inline-flex items-center gap-1.5 text-[#635E52]">
              <Clock size={12} />
              48-Hour Studio Batch Turnaround
            </span>
          </div>
        </div>
      </section>

      {/* Reciprocal Switcher Banner */}
      <div className="w-full bg-[#EFEEEA] border-b border-[#EAE6DF] py-2 px-5 md:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between text-xs text-[#635E52]">
          <span>Viewing dedicated UK Image Editing &amp; Retouching Desk (Sterling £ GBP, HMRC-Compliant).</span>
          <Link to="/services/image-editing" className="font-semibold underline hover:text-[#141310] transition-colors">
            Switch to International Service Page →
          </Link>
        </div>
      </div>

      {/* 2. Hero Section with Before/After Interactive Split */}
      <section className="w-full py-12 lg:py-20 px-5 md:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <RevealOnScroll direction="down" delay={0.02} distance={14}>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#EFEEEA] border border-[#EAE6DF]">
                <span className="w-1.5 h-1.5 bg-[#635E52] rounded-full"></span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#141310]">
                  Fine Art Color Science // UK Digital Lab
                </span>
              </div>
            </RevealOnScroll>

            <TextReveal as="h1" direction="up" delay={0.08} className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141310] font-normal tracking-tight leading-[1.1] mb-6">
              Master RAW Image Editing &amp; Color Grading for Discerning UK Photographers
            </TextReveal>

            <RevealOnScroll direction="up" delay={0.18} distance={18}>
              <p className="text-base lg:text-lg text-[#4A463F] max-w-xl mb-8 leading-relaxed">
                Handcrafted color profiles, natural skin-tone frequency separation, and precise filmic tonality tailored specifically for British weather, historic stone churches, and atmospheric country estates. Zero loss, 12-bit RAW workflows, and seamless Smart Preview hand-offs.
              </p>
            </RevealOnScroll>

            {/* Badges Strip */}
            <StaggerBoxes className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-8 pb-6 border-b border-[#EAE6DF]" stagger={0.08} direction="up">
              <div className="flex flex-col bg-[#F4F4F0] p-3 border border-[#EAE6DF]">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#635E52]">Starting At</span>
                <span className="font-serif text-lg text-[#141310] font-bold mt-0.5">£0.08 <span className="text-xs font-normal text-[#635E52]">/ frame</span></span>
              </div>
              <div className="flex flex-col bg-[#F4F4F0] p-3 border border-[#EAE6DF]">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#635E52]">UK Turnaround</span>
                <span className="font-serif text-lg text-[#141310] font-bold mt-0.5">48 Hours</span>
              </div>
              <div className="flex flex-col bg-[#F4F4F0] p-3 border border-[#EAE6DF]">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#635E52]">Hardware Standard</span>
                <span className="font-serif text-lg text-[#141310] font-bold mt-0.5">Eizo D50</span>
              </div>
              <div className="flex flex-col bg-[#F4F4F0] p-3 border border-[#EAE6DF]">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#635E52]">Introductory</span>
                <span className="font-serif text-lg text-[#141310] font-bold mt-0.5">5 Free RAWs</span>
              </div>
            </StaggerBoxes>

            {/* CTAs */}
            <RevealOnScroll direction="up" delay={0.28} distance={16}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href="#test-calibration"
                  style={{ color: '#FAF9F5' }}
                  className="px-8 py-4 bg-[#141310] !text-[#FAF9F5] text-xs font-semibold uppercase tracking-widest hover:bg-[#292724] hover:!text-[#FFFFFF] text-center transition-colors shadow-sm"
                >
                  Submit 5 Free RAW Test Images
                </a>
                <a
                  href="#british-aesthetic"
                  className="px-8 py-4 border border-[#7B766F] text-[#141310] text-xs font-semibold uppercase tracking-widest hover:bg-[#EFEEEA] text-center transition-colors"
                >
                  View UK Studio Grading Profiles
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Before / After Interactive Visual Presentation */}
          <div className="lg:col-span-6 mt-8 lg:mt-0">
            <RevealOnScroll direction="right" delay={0.2} distance={28}>
              <div
                ref={stageRef}
                className="relative w-full aspect-[4/5] bg-[#EFEEEA] overflow-hidden select-none shadow-xl border border-[#EAE6DF] cursor-ew-resize"
                onMouseDown={() => (isDragging.current = true)}
                onMouseUp={() => (isDragging.current = false)}
                onMouseLeave={() => (isDragging.current = false)}
                onMouseMove={(e) => {
                  if (!isDragging.current) return;
                  handleSliderMove(e.clientX);
                }}
                onTouchMove={handleTouchMove}
              >
                {/* "After" Graded Image (Background) */}
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85"
                  alt="Color-graded luxury UK wedding portrait with warm luminous skin tones"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute top-5 right-5 z-20 bg-[#141310]/85 backdrop-blur-sm text-[#FAF9F5] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest">
                  Ultraa Studio Atelier Color
                </div>

                {/* "Before" RAW Image (Clipped Overlay) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85"
                    alt="Flat unedited RAW wedding photograph"
                    className="absolute inset-0 h-full object-cover max-w-none pointer-events-none filter saturate-50 contrast-75 brightness-90"
                    style={{ width: `${stageWidth}px` }}
                  />
                  <div className="absolute top-5 left-5 z-20 bg-[#FAF9F5]/90 text-[#141310] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest border border-[#EAE6DF]">
                    Dull Camera RAW (Overcast UK)
                  </div>
                </div>

                {/* Split Divider Handle */}
                <div
                  className="absolute top-0 bottom-0 z-30 flex items-center justify-center -translate-x-1/2 pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="w-[2px] h-full bg-[#FAF9F5] shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
                  <div className="absolute w-8 h-8 rounded-full bg-[#FAF9F5] shadow-md flex items-center justify-center border border-[#7B766F]">
                    <span className="text-[#141310] text-xs font-bold">⇄</span>
                  </div>
                </div>

                {/* Bottom Floating Caption */}
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#FAF9F5]/90 backdrop-blur-md p-3 border border-[#EAE6DF] flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#635E52]">
                    Specimen: Cotswolds Manor • Overcast 5600K
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-[#141310]">
                    Drag slider to inspect grading →
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 3. Calibrated Specifically for the British Aesthetic & Venues */}
      <section className="w-full bg-[#EFEEEA] py-20 px-5 md:px-16 border-y border-[#EAE6DF]" id="british-aesthetic">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#635E52] block mb-2">
              Regional Mastery &amp; Climate Nuance
            </span>
            <TextReveal as="h2" direction="left" delay={0.06} className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal tracking-tight mb-4">
              Calibrated Specifically for the British Aesthetic &amp; Venues
            </TextReveal>
            <RevealOnScroll direction="up" delay={0.12}>
              <p className="text-sm md:text-base text-[#4A463F] leading-relaxed">
                United Kingdom light is singular: heavy diffused skies, sudden damp downpours, and ancient indoor masonry. Generic US or Mediterranean presets oversaturate English greens and turn historic limestone muddy. We construct tailored profiles designed for the UK climate.
              </p>
            </RevealOnScroll>
          </div>

          <StaggerBoxes className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.1} direction="up">
            {/* Feature 1 */}
            <div className="flex flex-col bg-[#FAF9F5] p-8 border border-[#EAE6DF]">
              <div className="w-12 h-12 bg-[#F4F4F0] flex items-center justify-center mb-6 border border-[#EAE6DF]">
                <Cloud size={24} className="text-[#141310]" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#635E52] mb-2">Atmospheric Fidelity</span>
              <h3 className="font-serif text-xl text-[#141310] font-normal mb-3">Diffused Overcast Softness</h3>
              <p className="text-sm text-[#4A463F] leading-relaxed mb-6">
                Instead of artificially blowing highlights to force sunlight, we harness the majestic, luminous wrap of British softbox skies, yielding dimensional, painterly cheekbone rolloff.
              </p>
              <div className="mt-auto pt-4 border-t border-[#EAE6DF] flex items-center justify-between text-[#635E52] text-[10px] font-semibold tracking-wider uppercase">
                <span>Color Profile: UK-CLOUDS-D65</span>
                <span>Micro-Rolloff 1.4</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col bg-[#FAF9F5] p-8 border border-[#EAE6DF]">
              <div className="w-12 h-12 bg-[#F4F4F0] flex items-center justify-center mb-6 border border-[#EAE6DF]">
                <Sparkles size={24} className="text-[#141310]" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#635E52] mb-2">Foliage Hue Alignment</span>
              <h3 className="font-serif text-xl text-[#141310] font-normal mb-3">Muted English Greens</h3>
              <p className="text-sm text-[#4A463F] leading-relaxed mb-6">
                We isolate the harsh yellow-green spikes inherent in wet UK turf, translating hyper-saturated lawns into understated, aristocratic British racing greens and subtle olive undertones.
              </p>
              <div className="mt-auto pt-4 border-t border-[#EAE6DF] flex items-center justify-between text-[#635E52] text-[10px] font-semibold tracking-wider uppercase">
                <span>HSL Shift: 52° → 68° Olive</span>
                <span>-22% Saturation</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col bg-[#FAF9F5] p-8 border border-[#EAE6DF]">
              <div className="w-12 h-12 bg-[#F4F4F0] flex items-center justify-center mb-6 border border-[#EAE6DF]">
                <ShieldCheck size={24} className="text-[#141310]" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#635E52] mb-2">Heritage Masonry</span>
              <h3 className="font-serif text-xl text-[#141310] font-normal mb-3">Historic Stone &amp; Oak Interiors</h3>
              <p className="text-sm text-[#4A463F] leading-relaxed mb-6">
                Expert balance for Cotswolds honey limestone, medieval church shadows, and dim Tudor candlelit reception halls without muddying tungsten cast or crushing dark wood grain.
              </p>
              <div className="mt-auto pt-4 border-t border-[#EAE6DF] flex items-center justify-between text-[#635E52] text-[10px] font-semibold tracking-wider uppercase">
                <span>Split Toning: Warm Midtones</span>
                <span>Clean Dynamic Range</span>
              </div>
            </div>
          </StaggerBoxes>
        </div>
      </section>

      {/* 4. Laboratory Capabilities & Retouching Disciplines */}
      <section className="w-full bg-[#FAF9F5] py-20 px-5 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#635E52] block mb-2">
                Transparent Production Tiers
              </span>
              <TextReveal as="h2" direction="left" delay={0.06} className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal tracking-tight">
                Laboratory Capabilities &amp; Retouching Disciplines
              </TextReveal>
            </div>
            <RevealOnScroll direction="right" delay={0.12}>
              <p className="text-sm md:text-base text-[#4A463F] max-w-md leading-relaxed">
                Modular, per-frame pricing tailored to full wedding ceremonies, editorial previews, or bespoke heirloom coffee-table albums.
              </p>
            </RevealOnScroll>
          </div>

          <StaggerBoxes className="grid grid-cols-1 lg:grid-cols-3 gap-8" stagger={0.1} direction="up">
            {/* Tier 01 */}
            <div className="bg-[#F4F4F0] p-8 flex flex-col justify-between border border-[#EAE6DF]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 bg-[#FAF9F5] text-[#635E52] border border-[#EAE6DF]">
                    Tier 01
                  </span>
                  <span className="font-serif text-2xl font-bold text-[#141310]">
                    £0.08 <span className="text-xs font-normal text-[#635E52]">/ frame</span>
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#141310] font-normal mb-3">Base Culling &amp; Exposure Calibration</h3>
                <p className="text-sm text-[#4A463F] mb-6 leading-relaxed">
                  Full-batch curation and technical baseline restoration. Elimination of blinks, test frames, and out-of-focus captures followed by strict Kelvin white balance harmonisation.
                </p>
                <ul className="space-y-3 text-xs text-[#141310] mb-8">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#635E52]" />
                    <span>Rigorous eye-level expressions &amp; composition triage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#635E52]" />
                    <span>Unified exposure &amp; highlight compensation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#635E52]" />
                    <span>Lens distortion &amp; chromatic aberration cleanup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#635E52]" />
                    <span>Straightening &amp; architectural vertical alignment</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => handleEnquire('Tier 01 Base Culling (£0.08/frame)')}
                className="w-full py-3.5 text-center border border-[#7B766F] text-xs font-semibold uppercase tracking-widest text-[#141310] hover:bg-[#FAF9F5] transition-colors"
              >
                Book Tier 01 Batch
              </button>
            </div>

            {/* Tier 02 (Featured) */}
            <div className="bg-[#141310] text-[#FAF9F5] p-8 flex flex-col justify-between relative shadow-xl border-2 border-[#141310]">
              <div className="absolute -top-3.5 right-8 bg-[#EAE2D2] text-[#1F1B12] text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                Most Commissioned by UK Studios
              </div>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 bg-[#FFFFFF]/10 text-[#CDC6B7]">
                    Tier 02
                  </span>
                  <span className="font-serif text-2xl font-bold text-[#FAF9F5]">
                    £0.15 <span className="text-xs font-normal text-[#CDC6B7]">/ frame</span>
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#FAF9F5] font-normal mb-3">Signature Color Grading &amp; Film Emulation</h3>
                <p className="text-sm text-[#CDC6B7] mb-6 leading-relaxed">
                  Bespoke aesthetic translation matching your studio's signature portfolio style. Emulation of Kodak Portra 400, Fuji 400H, or Ilford HP5 black &amp; white tones across varying light.
                </p>
                <ul className="space-y-3 text-xs text-[#FAF9F5] mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#EAE2D2]" />
                    <span>Custom curve calibration to your studio's preset DNA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#EAE2D2]" />
                    <span>Subtle analog grain integration &amp; tonal rolloff</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#EAE2D2]" />
                    <span>Uniform wedding sequence continuity across 800+ frames</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#EAE2D2]" />
                    <span>Selective HSL handling for UK bridal party skin tones</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => handleEnquire('Tier 02 Signature Color Grading (£0.15/frame)')}
                className="w-full py-3.5 text-center bg-[#FAF9F5] text-[#141310] text-xs font-bold uppercase tracking-widest hover:bg-[#EAE2D2] transition-colors"
              >
                Commission Signature Grading
              </button>
            </div>

            {/* Tier 03 */}
            <div className="bg-[#F4F4F0] p-8 flex flex-col justify-between border border-[#EAE6DF]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 bg-[#FAF9F5] text-[#635E52] border border-[#EAE6DF]">
                    Tier 03
                  </span>
                  <span className="font-serif text-2xl font-bold text-[#141310]">
                    £1.20 <span className="text-xs font-normal text-[#635E52]">/ frame</span>
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#141310] font-normal mb-3">Master Editorial Retouching &amp; Archival Polish</h3>
                <p className="text-sm text-[#4A463F] mb-6 leading-relaxed">
                  High-end portrait and album hero-spread finishing. Pixel-level frequency separation preserving skin pores, veil repair, dress de-creasing, and background distraction removal.
                </p>
                <ul className="space-y-3 text-xs text-[#141310] mb-8">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#635E52]" />
                    <span>16-bit frequency separation (texture preserved, blemishes softened)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#635E52]" />
                    <span>Veil transparency restoration &amp; exit signs cloning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#635E52]" />
                    <span>Flyaway hair remediation without synthetic blurring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#635E52]" />
                    <span>Dodge &amp; burn contouring for wedding gown silk/lace</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => handleEnquire('Tier 03 Master Retouching (£1.20/frame)')}
                className="w-full py-3.5 text-center border border-[#7B766F] text-xs font-semibold uppercase tracking-widest text-[#141310] hover:bg-[#FAF9F5] transition-colors"
              >
                Order Master Retouching
              </button>
            </div>
          </StaggerBoxes>
        </div>
      </section>

      {/* 5. Interactive Lightroom Smart Preview Protocol */}
      <section className="w-full bg-[#EFEEEA] py-20 px-5 md:px-16 border-t border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#635E52] block mb-2">
              Frictionless Studio Operations
            </span>
            <TextReveal as="h2" direction="left" delay={0.06} className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal tracking-tight mb-6">
              Lightroom Smart Preview Protocol
            </TextReveal>
            <p className="text-sm md:text-base text-[#4A463F] mb-8 leading-relaxed">
              Eliminate massive 60GB RAW cloud uploads over congested broadband. Our protocol operates exclusively through Adobe Lightroom Smart Previews: ultra-compact, high-fidelity DNG proxies that fit inside a sub-2GB file.
            </p>

            <StaggerBoxes className="space-y-4" stagger={0.08} direction="left">
              <div className="flex items-start gap-4 p-4 bg-[#FAF9F5] border border-[#EAE6DF]">
                <span className="font-serif text-xl text-[#635E52] font-bold">01</span>
                <div>
                  <h4 className="text-sm font-semibold text-[#141310]">Export Smart Previews</h4>
                  <p className="text-xs text-[#4A463F] mt-1 leading-relaxed">Select your job in Lightroom Classic. Export as Smart Previews only. An entire 1,000-shot wedding compresses to ~1.2 GB.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-[#FAF9F5] border border-[#EAE6DF]">
                <span className="font-serif text-xl text-[#635E52] font-bold">02</span>
                <div>
                  <h4 className="text-sm font-semibold text-[#141310]">Transmit via WeTransfer / Dropbox</h4>
                  <p className="text-xs text-[#4A463F] mt-1 leading-relaxed">Upload the .lrcat and Smart Previews folder to our secure UK ingestion cloud or send your direct sharing link.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-[#FAF9F5] border border-[#EAE6DF]">
                <span className="font-serif text-xl text-[#635E52] font-bold">03</span>
                <div>
                  <h4 className="text-sm font-semibold text-[#141310]">48-Hour Return &amp; Relink</h4>
                  <p className="text-xs text-[#4A463F] mt-1 leading-relaxed">We grade on Eizo monitors and email back a tiny 30MB catalog file. Open it, and all edits instantly connect to your original full RAWs.</p>
                </div>
              </div>
            </StaggerBoxes>
          </div>

          <div className="lg:col-span-7 mt-8 lg:mt-0">
            <RevealOnScroll direction="right" delay={0.16} distance={24}>
              <div className="bg-[#292724] text-[#FAF9F5] p-8 lg:p-12 shadow-2xl relative">
                <div className="flex items-center justify-between border-b border-[#FFFFFF]/15 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#BA1A1A]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EAE2D2]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DBDAD6]"></span>
                    <span className="text-[11px] text-[#CDC6B7] uppercase tracking-wider ml-2">Lightroom Classic Catalog Transfer</span>
                  </div>
                  <span className="text-[10px] text-[#CDC6B7] uppercase tracking-widest">Protocol v4.2 UK</span>
                </div>

                {/* Bandwidth Comparison Visualizer */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-[#CDC6B7]">Traditional RAW Upload (1,000 files)</span>
                      <span className="text-[#BA1A1A] font-mono">~58,400 MB (4+ hours)</span>
                    </div>
                    <div className="w-full h-2.5 bg-[#FFFFFF]/10 rounded-none overflow-hidden">
                      <div className="h-full bg-[#BA1A1A] w-[95%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-[#FAF9F5] font-bold">Ultraa Smart Preview Workflow</span>
                      <span className="text-[#EAE2D2] font-mono font-bold">~1,180 MB (3.5 mins)</span>
                    </div>
                    <div className="w-full h-2.5 bg-[#FFFFFF]/10 rounded-none overflow-hidden">
                      <div className="h-full bg-[#EAE2D2] w-[12%]"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#FFFFFF]/15 grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-[#141310]/50 border border-[#FFFFFF]/10">
                    <span className="font-serif text-3xl text-[#FAF9F5] block font-bold">98%</span>
                    <span className="text-[10px] text-[#CDC6B7] uppercase tracking-wider">Bandwidth Conserved</span>
                  </div>
                  <div className="p-4 bg-[#141310]/50 border border-[#FFFFFF]/10">
                    <span className="font-serif text-3xl text-[#FAF9F5] block font-bold">12-Bit</span>
                    <span className="text-[10px] text-[#CDC6B7] uppercase tracking-wider">Color Fidelity Preserved</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 text-[#CDC6B7] text-xs">
                  <ShieldCheck size={18} className="text-[#EAE2D2] shrink-0" />
                  <span>Zero compression loss when applied back to camera RAWs (Sony ARW, Canon CR3, Nikon NEF, Fuji RAF).</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 6. Transparent Sterling Rates & HMRC Billing */}
      <section className="w-full bg-[#FAF9F5] py-20 px-5 md:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#635E52] block mb-2">
              British Financial Compliance
            </span>
            <TextReveal as="h2" direction="left" delay={0.06} className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal tracking-tight mb-4">
              Transparent Sterling Rates &amp; HMRC Billing
            </TextReveal>
            <p className="text-sm text-[#4A463F] leading-relaxed mb-6">
              We operate an established UK billing entity. Every invoice is issued directly in GBP (£), fully itemised, and formatted for straightforward reconciliation with HMRC accounting software like Xero and FreeAgent.
            </p>
            <div className="p-4 bg-[#F4F4F0] border border-[#EAE6DF] space-y-2">
              <div className="flex items-center gap-2 text-[#141310] text-sm font-bold">
                <CreditCard size={18} className="text-[#635E52]" />
                <span>Direct UK BACS / Faster Payments</span>
              </div>
              <p className="text-xs text-[#4A463F] leading-relaxed">
                Settle orders via standard domestic online banking transfer without international wire charges or unexpected currency conversion penalties.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-[#F4F4F0] p-8 border border-[#EAE6DF]">
              <h3 className="font-serif text-xl text-[#141310] font-normal mb-6">UK Peak Season Retainer Packages (May – October)</h3>
              <StaggerBoxes className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" stagger={0.1} direction="up">
                {/* Plan A */}
                <div className="bg-[#FAF9F5] p-6 flex flex-col justify-between border border-[#EAE6DF]">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#635E52] font-semibold">Retainer Tier I</span>
                    <h4 className="font-serif text-lg text-[#141310] font-normal mt-1 mb-2">4 Weddings / Month</h4>
                    <p className="font-serif text-2xl font-bold text-[#141310] mb-4">£380 <span className="text-xs font-normal text-[#635E52]">/ month</span></p>
                    <ul className="space-y-2 text-xs text-[#4A463F]">
                      <li className="flex items-center gap-2"><Check size={14} className="text-[#635E52]" /> Up to 3,200 frames total culling &amp; color</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-[#635E52]" /> Dedicated master retoucher assigned</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-[#635E52]" /> Guaranteed 36-hour weekend express return</li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleEnquire('Retainer Tier I (4 Weddings/Mo £380)')}
                    className="mt-6 text-center py-2.5 bg-[#141310] text-[#FAF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#292724] transition-colors"
                  >
                    Reserve Tier I Slot
                  </button>
                </div>

                {/* Plan B */}
                <div className="bg-[#FAF9F5] p-6 flex flex-col justify-between border-2 border-[#141310]">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#635E52] font-semibold">Retainer Tier II</span>
                    <h4 className="font-serif text-lg text-[#141310] font-normal mt-1 mb-2">8 Weddings / Month</h4>
                    <p className="font-serif text-2xl font-bold text-[#141310] mb-4">£690 <span className="text-xs font-normal text-[#635E52]">/ month</span></p>
                    <ul className="space-y-2 text-xs text-[#4A463F]">
                      <li className="flex items-center gap-2"><Check size={14} className="text-[#141310]" /> Up to 7,000 frames total culling &amp; color</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-[#141310]" /> 40 complimentary Master Retouches included</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-[#141310]" /> VIP Priority 24-48 hr batch processing</li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleEnquire('Retainer Tier II (8 Weddings/Mo £690)')}
                    className="mt-6 text-center py-2.5 bg-[#141310] text-[#FAF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#292724] transition-colors"
                  >
                    Reserve Tier II Slot
                  </button>
                </div>
              </StaggerBoxes>

              <div className="flex flex-wrap items-center justify-between text-[#635E52] text-xs pt-4 border-t border-[#EAE6DF]">
                <span>All rates quoted net of VAT where applicable. Full VAT invoices generated.</span>
                <span className="text-[10px] uppercase tracking-widest text-[#141310] font-semibold">No Annual Lock-In</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Endorsements from British Master Photographers */}
      <section className="w-full bg-[#EFEEEA] py-20 px-5 md:px-16 border-t border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#635E52] block mb-2">
              Voices from the UK Industry
            </span>
            <TextReveal as="h2" direction="up" delay={0.06} className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal tracking-tight">
              Endorsements from British Master Photographers
            </TextReveal>
          </div>

          <StaggerBoxes className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.1} direction="up">
            <div className="bg-[#FAF9F5] p-8 border border-[#EAE6DF] flex flex-col justify-between">
              <div>
                <p className="font-serif text-sm text-[#141310] italic mb-6 leading-relaxed">
                  "Shooting a damp, drizzly ceremony in the Cotswolds used to mean 3 days of color hell trying to balance wet limestone and mixed tungsten lanterns. Ultraa nailed my 35mm film palette on the first calibration round."
                </p>
              </div>
              <div className="pt-4 border-t border-[#EAE6DF]">
                <p className="font-serif text-sm font-bold text-[#141310]">Eleanor Vance</p>
                <p className="text-[10px] tracking-wider uppercase text-[#635E52]">Documentary Wedding Studio, Bath</p>
              </div>
            </div>

            <div className="bg-[#FAF9F5] p-8 border border-[#EAE6DF] flex flex-col justify-between">
              <div>
                <p className="font-serif text-sm text-[#141310] italic mb-6 leading-relaxed">
                  "During peak August, I was drowning in 14 weddings. The Smart Preview system meant sending catalogs took 5 minutes over standard rural broadband. 48 hours later, I had client-ready files ready for album binding."
                </p>
              </div>
              <div className="pt-4 border-t border-[#EAE6DF]">
                <p className="font-serif text-sm font-bold text-[#141310]">Alistair Macintyre</p>
                <p className="text-[10px] tracking-wider uppercase text-[#635E52]">Highland Elopements &amp; Estates, Edinburgh</p>
              </div>
            </div>

            <div className="bg-[#FAF9F5] p-8 border border-[#EAE6DF] flex flex-col justify-between">
              <div>
                <p className="font-serif text-sm text-[#141310] italic mb-6 leading-relaxed">
                  "HMRC-compliant sterling invoicing with UK BACS makes internal bookkeeping effortless. Most importantly, their frequency separation on high-fashion London brides is subtle, skin-textured, and never plastic."
                </p>
              </div>
              <div className="pt-4 border-t border-[#EAE6DF]">
                <p className="font-serif text-sm font-bold text-[#141310]">Callum &amp; Sophie Ward</p>
                <p className="text-[10px] tracking-wider uppercase text-[#635E52]">The Mayfair Editorial Lab, London</p>
              </div>
            </div>
          </StaggerBoxes>
        </div>
      </section>

      {/* 8. UK FAQ */}
      <section className="w-full bg-[#FAF9F5] py-20 px-5 md:px-16 border-t border-[#EAE6DF]">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#635E52] block mb-2">
              Clarity &amp; Security
            </span>
            <TextReveal as="h2" direction="up" delay={0.06} className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal tracking-tight">
              Frequently Answered Inquiries
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

      {/* 9. Complimentary Calibration Form */}
      <section className="w-full bg-[#EFEEEA] py-20 px-5 md:px-16 border-t border-[#EAE6DF]" id="test-calibration">
        <div className="max-w-[1440px] mx-auto">
          <RevealOnScroll direction="up" delay={0.06} distance={24}>
            <div className="bg-[#FAF9F5] p-8 lg:p-14 border border-[#EAE6DF] shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#635E52] block mb-2">
                      Zero-Risk Trial
                    </span>
                    <TextReveal as="h2" direction="left" delay={0.08} className="font-serif text-2xl sm:text-4xl text-[#141310] font-normal tracking-tight mb-4">
                      Submit 5 Free RAW Test Images
                    </TextReveal>
                    <p className="text-sm text-[#4A463F] leading-relaxed mb-6">
                      Experience our British atmospheric grading firsthand. Send 5 RAW files along with your finished JPEGs of those shots. We will match your color DNA and return the calibrated Lightroom catalog within 24 hours.
                    </p>
                    <div className="space-y-3 pt-4 border-t border-[#EAE6DF]">
                      <div className="flex items-center gap-3 text-xs text-[#141310]">
                        <Lock size={16} className="text-[#635E52]" />
                        <span>100% Confidential under UK NDA standard</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-[#141310]">
                        <CreditCard size={16} className="text-[#635E52]" />
                        <span>No credit card required for test calibration</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-[#141310]">
                        <Zap size={16} className="text-[#635E52]" />
                        <span>Completed within 24 business hours</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#EAE6DF]">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#635E52] block mb-1">
                      UK Direct Concierge Line
                    </span>
                    <a
                      href="https://wa.me/919322254315"
                      target="_blank"
                      rel="noreferrer"
                      className="font-serif text-lg text-[#141310] font-bold hover:text-[#635E52] transition-colors flex items-center gap-2"
                    >
                      <MessageSquare size={16} />
                      <span>+91 93222 54315 <span className="text-xs font-normal text-[#635E52]">(WhatsApp UK Liaison)</span></span>
                    </a>
                  </div>
                </div>

                {/* Form Area */}
                <div className="lg:col-span-7">
                  {formState.submitted ? (
                <div className="studio-draft">
                  <h3>Your studio request is ready</h3>
                  <p>Review and send the details to the UK desk in your email app.</p>
                  <a className="studio-link primary" href={studioEmail(document.title, Object.fromEntries(Object.entries(formState).filter(([key]) => key !== 'submitted')), 'uk@ultraaalbums.com')}>Open email draft</a>
                  <button className="text-action" onClick={() => setFormState(prev => ({ ...prev, submitted:false }))}>Edit details</button>
                </div>
              ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] font-semibold uppercase tracking-wider text-[#635E52] block mb-1.5">
                            Studio / Business Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formState.studioName}
                            onChange={(e) => setFormState(prev => ({ ...prev, studioName: e.target.value }))}
                            placeholder="e.g. Mayfair Fine Art Portraits"
                            className="w-full p-3.5 bg-[#FAF9F5] border border-[#EAE6DF] text-xs text-[#141310] focus:outline-none focus:border-[#141310]"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold uppercase tracking-wider text-[#635E52] block mb-1.5">
                            UK Studio Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                            placeholder="hello@studio.co.uk"
                            className="w-full p-3.5 bg-[#FAF9F5] border border-[#EAE6DF] text-xs text-[#141310] focus:outline-none focus:border-[#141310]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] font-semibold uppercase tracking-wider text-[#635E52] block mb-1.5">
                            Contact Phone / WhatsApp
                          </label>
                          <input
                            type="tel"
                            value={formState.phone}
                            onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                            placeholder="+44 7..."
                            className="w-full p-3.5 bg-[#FAF9F5] border border-[#EAE6DF] text-xs text-[#141310] focus:outline-none focus:border-[#141310]"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold uppercase tracking-wider text-[#635E52] block mb-1.5">
                            Primary Color Aesthetic *
                          </label>
                          <select
                            required
                            value={formState.style}
                            onChange={(e) => setFormState(prev => ({ ...prev, style: e.target.value }))}
                            className="w-full p-3.5 bg-[#FAF9F5] border border-[#EAE6DF] text-xs text-[#141310] focus:outline-none focus:border-[#141310]"
                          >
                            <option value="">Select Primary Grading Aesthetic</option>
                            <option value="warm-editorial">Warm British Editorial (Portra 400 DNA)</option>
                            <option value="cool-fineart">Cool Luminous Fine-Art (Fuji 400H)</option>
                            <option value="moody-highland">Moody Contrast &amp; Highlands Earth</option>
                            <option value="monochrome-archive">Ilford HP5 Master Monochrome</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold uppercase tracking-wider text-[#635E52] block mb-1.5">
                          Cloud Link to 5 RAWs + 5 Reference JPEGs *
                        </label>
                        <input
                          type="url"
                          required
                          value={formState.cloudLink}
                          onChange={(e) => setFormState(prev => ({ ...prev, cloudLink: e.target.value }))}
                          placeholder="WeTransfer, Dropbox, Google Drive, or Pixieset link"
                          className="w-full p-3.5 bg-[#FAF9F5] border border-[#EAE6DF] text-xs text-[#141310] focus:outline-none focus:border-[#141310]"
                        />
                        <span className="text-[10px] text-[#635E52] mt-1 block">
                          Please ensure folder link is set to accessible/viewable without credentials.
                        </span>
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold uppercase tracking-wider text-[#635E52] block mb-1.5">
                          Color Notes &amp; Shadow/Skin Tone Preferences
                        </label>
                        <textarea
                          rows={3}
                          value={formState.notes}
                          onChange={(e) => setFormState(prev => ({ ...prev, notes: e.target.value }))}
                          placeholder="e.g. Please preserve warm peachy highlights on cheeks; keep foliage greens desaturated olive rather than neon."
                          className="w-full p-3.5 bg-[#FAF9F5] border border-[#EAE6DF] text-xs text-[#141310] focus:outline-none focus:border-[#141310]"
                        ></textarea>
                      </div>

                      <div className="flex items-start gap-2 pt-2">
                        <input
                          type="checkbox"
                          id="gdprAgree"
                          required
                          checked={formState.gdprAgree}
                          onChange={(e) => setFormState(prev => ({ ...prev, gdprAgree: e.target.checked }))}
                          className="mt-1"
                        />
                        <label htmlFor="gdprAgree" className="text-xs text-[#4A463F] leading-snug">
                          I agree to Ultraa Albums processing my calibration images under UK GDPR and confidentiality guidelines. Images are never archived or displayed publicly.
                        </label>
                      </div>

                      <button
                        type="submit"
                        style={{ color: '#FAF9F5' }}
                        className="w-full py-4 bg-[#141310] !text-[#FAF9F5] text-xs font-semibold uppercase tracking-widest hover:bg-[#292724] hover:!text-[#FFFFFF] transition-colors mt-2 shadow-sm"
                      >
                        Transmit 5 RAWs for Complimentary Calibration
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
