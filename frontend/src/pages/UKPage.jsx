import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Truck, ShieldCheck, CreditCard, ArrowRight, CheckCircle2, Phone, Mail } from 'lucide-react';
import RevealOnScroll from '../components/motion/RevealOnScroll';
import TextReveal from '../components/motion/TextReveal';
import StaggerBoxes from '../components/motion/StaggerBoxes';
import { UK_CATALOG } from '../data/catalogData';

// Dedicated UK Stitch Product Implementations
import UKFlushMountAlbumPage from './products/UKFlushMountAlbumPage';
import UKLuxuryHeirloomPage from './products/UKLuxuryHeirloomPage';
import UKBoxesAndBagsPage from './products/UKBoxesAndBagsPage';
import UKSlipInAlbumsPage from './products/UKSlipInAlbumsPage';
import UKPhotoBookPage from './products/UKPhotoBookPage';
import UKImageEditingPage from './services/UKImageEditingPage';
import UKWeddingPhotographyPage from './services/UKWeddingPhotographyPage';

export default function UKPage() {
  const { slug } = useParams();
  const navigate = useNavigate();


  // Route to dedicated UK Stitch designs
  if (slug === 'flush-mount-album-uk' || slug === 'flush-mount-for-uk' || slug === 'flush-mount-album') {
    return <UKFlushMountAlbumPage />;
  }

  if (slug === 'luxury-albums-uk' || slug === 'luxury-heirloom-albums-uk' || slug === 'luxury-albums-for-uk' || slug === 'luxury-albums') {
    return <UKLuxuryHeirloomPage />;
  }

  if (slug === 'box-and-bags-uk' || slug === 'box-and-bags-for-uk' || slug === 'boxes-and-bags-uk' || slug === 'box-and-bags') {
    return <UKBoxesAndBagsPage />;
  }

  if (slug === 'slip-in-albums-uk' || slug === 'slip-in-albums-for-uk' || slug === 'slip-in-albums' || slug === 'slip-in-for-uk') {
    return <UKSlipInAlbumsPage />;
  }

  if (slug === 'photo-book-uk' || slug === 'photo-book-for-uk' || slug === 'photo-books-uk' || slug === 'photo-book') {
    return <UKPhotoBookPage />;
  }

  if (slug === 'image-editing-uk' || slug === 'image-editing-for-uk' || slug === 'photo-editing-uk' || slug === 'image-editing') {
    return <UKImageEditingPage />;
  }

  if (slug === 'photography-uk' || slug === 'photography-for-uk' || slug === 'wedding-photography-uk' || slug === 'wedding-photography') {
    return <UKWeddingPhotographyPage />;
  }

  const ukAlbums = UK_CATALOG.filter((item) => item.group === 'albums');
  const ukServices = UK_CATALOG.filter((item) => item.group === 'services');

  // If another specific UK item slug is visited (e.g. /for-uk/slip-in-albums-uk)
  const activeItem = slug ? UK_CATALOG.find((item) => item.slug === slug) : null;

  const handleEnquire = (itemName) => {
    navigate(`/enquire?product=${encodeURIComponent(itemName || 'UK Studio Collection')}`);
  };

  return (
    <div className="uk-page-view bg-[#FAF9F5] text-[#1B1C1A]">
      {/* 1. Breadcrumb */}
      <div className="w-full bg-[#F4F4F0] px-4 md:px-16 py-3 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#635E52]">
          <Link to="/" className="hover:text-[#141310] transition-colors">Home</Link>
          <span className="text-[#CCC5BC]">/</span>
          <Link to="/for-uk" className="hover:text-[#141310] transition-colors">For UK</Link>
          {activeItem && (
            <>
              <span className="text-[#CCC5BC]">/</span>
              <span className="text-[#141310] font-bold">{activeItem.name}</span>
            </>
          )}
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="uk-hero-section py-16 px-4 md:px-16 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="uk-hero-grid grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <RevealOnScroll direction="left" className="lg:col-span-7 uk-hero-text">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#635E52] bg-[#EFEEEA] px-3.5 py-1.5 inline-block mb-4">
                BRITISH &amp; EUROPEAN PHOTOGRAPHERS DESK
              </span>
              <TextReveal
                as="h1"
                delay={0.08}
                className="font-serif text-3xl md:text-5xl text-[#141310] font-normal leading-tight mb-4"
              >
                {activeItem ? activeItem.name : 'Fine Art Bindery Dedicated to UK Studios'}
              </TextReveal>
              <p className="text-base text-[#4A463F] leading-relaxed mb-6 max-w-2xl">
                {activeItem
                  ? activeItem.shortDesc
                  : 'Direct atelier craftsmanship, local GBP (£) invoicing, and guaranteed 4–6 day DHL Express door-to-door air transit across the United Kingdom with zero customs friction.'}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F4F4F0] border border-[#EAE6DF] text-xs text-[#4A463F]">
                  <Truck size={14} className="text-[#635E52]" />
                  <span>DHL Express 4–6 Day Priority Transit</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F4F4F0] border border-[#EAE6DF] text-xs text-[#4A463F]">
                  <CreditCard size={14} className="text-[#635E52]" />
                  <span>Direct UK BACS Bank Wire in GBP (£)</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F4F4F0] border border-[#EAE6DF] text-xs text-[#4A463F]">
                  <ShieldCheck size={14} className="text-[#635E52]" />
                  <span>DDP Zero Import Customs Friction</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="px-8 py-3.5 bg-[#141310] text-[#FAF9F5] text-xs font-semibold uppercase tracking-widest hover:bg-[#292724] transition-colors"
                  onClick={() => handleEnquire(activeItem ? activeItem.name : 'UK Studio Wholesale')}
                >
                  REQUEST UK WHOLESALE PRICE LIST
                </button>
                <Link to="/resources/catalog" className="text-xs font-semibold uppercase tracking-wider text-[#141310] underline hover:text-[#635E52] transition-colors">
                  DOWNLOAD UK STUDIO CATALOG (PDF)
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" className="lg:col-span-5 uk-hero-photo-frame">
              <div className="bg-[#EFEEEA] p-4 border border-[#EAE6DF]">
                <img
                  src={activeItem?.image || 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85'}
                  alt="UK Studio Packaging and Presentation"
                  className="w-full h-80 object-cover"
                />
                <div className="mt-4 p-4 bg-[#FAF9F5] border border-[#EAE6DF]">
                  <strong className="block text-sm font-semibold text-[#141310]">Mayfair &amp; UK Studio Desk</strong>
                  <span className="text-xs text-[#4A463F]">Dedicated UK Studio Liaison on WhatsApp &amp; Phone (+91 93222 54315)</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 3. If Active UK Item is selected, show detail box */}
      {activeItem && (
        <section className="py-12 px-4 md:px-16 bg-[#F4F4F0] border-b border-[#EAE6DF]">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#FAF9F5] p-8 border border-[#EAE6DF]">
              <div className="overflow-hidden bg-[#EFEEEA] aspect-[4/3]">
                <img src={activeItem.image} alt={activeItem.name} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#635E52]">{activeItem.badge}</span>
                <h2 className="font-serif text-3xl text-[#141310] font-normal">{activeItem.name}</h2>
                <p className="text-sm text-[#4A463F] leading-relaxed">{activeItem.shortDesc}</p>
                <ul className="space-y-2 text-xs text-[#4A463F]">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#635E52]" /> Calibrated for UK destination lighting &amp; estate celebrations</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#635E52]" /> Choice of genuine Italian leathers, English buckrams &amp; silks</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#635E52]" /> 100% duty-cleared doorstep delivery across England, Scotland &amp; Wales</li>
                </ul>
                <div className="pt-2">
                  <button
                    type="button"
                    className="px-6 py-3 bg-[#141310] text-[#FAF9F5] text-xs font-semibold uppercase tracking-widest hover:bg-[#292724] transition-colors"
                    onClick={() => handleEnquire(activeItem.name)}
                  >
                    ENQUIRE ABOUT {activeItem.name.toUpperCase()}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. UK Albums Catalogue */}
      <section className="py-16 md:py-24 px-4 md:px-16 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-12">
            <RevealOnScroll direction="down" delay={0.02} distance={12} blur={false}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#635E52] block mb-2">
                HANDCRAFTED VOLUMES FOR UK
              </span>
            </RevealOnScroll>
            <TextReveal
              as="h2"
              delay={0.06}
              direction="up"
              className="font-serif text-3xl md:text-4xl text-[#141310] font-normal mt-1"
            >
              UK Wedding Albums &amp; Presentation
            </TextReveal>
            <RevealOnScroll direction="up" delay={0.14} distance={16}>
              <p className="text-sm text-[#4A463F] max-w-xl mt-2">
                Precision-mounted albums and clamshell boxes engineered to meet the highest British wedding photography standards.
              </p>
            </RevealOnScroll>
          </div>

          <StaggerBoxes className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12}>
            {ukAlbums.map((item) => (
              <div key={item.id} className="bg-[#FAF9F5] border border-[#EAE6DF] p-6 flex flex-col justify-between shadow-sm group hover:shadow-md transition-shadow">
                <div>
                  <div className="aspect-[4/3] bg-[#EFEEEA] overflow-hidden mb-5 relative">
                    <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 bg-[#FAF9F5]/90 px-2 py-1 text-[10px] font-semibold uppercase text-[#141310]">{item.badge}</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#141310] mb-2 font-normal group-hover:text-[#B99A69] transition-colors">{item.name}</h3>
                  <p className="text-xs text-[#4A463F] leading-relaxed mb-6">{item.shortDesc}</p>
                </div>
                <div className="pt-4 border-t border-[#EAE6DF]">
                  <Link to={`/for-uk/${item.slug}`} className="text-xs font-semibold uppercase tracking-wider text-[#141310] hover:text-[#B99A69] transition-colors inline-flex items-center gap-1.5 group/link">
                    <span>View Specifications</span>
                    <ArrowRight size={13} className="text-[#B99A69] group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </StaggerBoxes>
        </div>
      </section>

      {/* 5. UK Services */}
      <section className="py-16 md:py-24 px-4 md:px-16 bg-[#F4F4F0] border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-12">
            <RevealOnScroll direction="down" delay={0.02} distance={12} blur={false}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#635E52] block mb-2">
                POST-PRODUCTION &amp; CINEMA
              </span>
            </RevealOnScroll>
            <TextReveal
              as="h2"
              delay={0.06}
              direction="up"
              className="font-serif text-3xl md:text-4xl text-[#141310] font-normal mt-1"
            >
              UK Services &amp; Image Editing
            </TextReveal>
          </div>

          <StaggerBoxes className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.14}>
            {ukServices.map((item) => (
              <div key={item.id} className="bg-[#FAF9F5] border border-[#EAE6DF] p-6 flex flex-col sm:flex-row gap-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-full sm:w-1/2 aspect-square bg-[#EFEEEA] overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase text-[#635E52]">{item.badge}</span>
                    <h3 className="font-serif text-xl text-[#141310] mt-1 mb-2 font-normal">{item.name}</h3>
                    <p className="text-xs text-[#4A463F] leading-relaxed mb-4">{item.shortDesc}</p>
                  </div>
                  <button
                    type="button"
                    className="px-5 py-2.5 bg-[#141310] text-[#FAF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#B99A69] transition-colors self-start cursor-pointer"
                    onClick={() => handleEnquire(item.name)}
                  >
                    COMMISSION THIS SERVICE
                  </button>
                </div>
              </div>
            ))}
          </StaggerBoxes>
        </div>
      </section>

      {/* 6. UK Logistics & Direct Concierge */}
      <section className="py-16 md:py-24 px-4 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#FAF9F5] p-8 md:p-12 border border-[#EAE6DF]">
            <RevealOnScroll direction="left" className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#635E52] block">
                SEAMLESS GLOBAL TRANSIT
              </span>
              <TextReveal
                as="h2"
                direction="left"
                className="font-serif text-3xl text-[#141310] font-normal"
              >
                Frictionless UK Studio Integration
              </TextReveal>
              <p className="text-sm text-[#4A463F] leading-relaxed">
                Working with an overseas bindery should never mean customs headaches, slow transit, or unpredictable exchange fees. Ultraa Albums handles complete logistics with British studios.
              </p>
              <div className="space-y-4 pt-2">
                <div className="p-4 bg-[#F4F4F0] border border-[#EAE6DF]">
                  <strong className="block text-sm font-semibold text-[#141310]">Transparent GBP Billing</strong>
                  <p className="text-xs text-[#4A463F] mt-1">Invoiced directly in Pounds Sterling via UK Faster Payments (BACS) or card without foreign exchange surprises.</p>
                </div>
                <div className="p-4 bg-[#F4F4F0] border border-[#EAE6DF]">
                  <strong className="block text-sm font-semibold text-[#141310]">Door-to-Door Courier Tracking</strong>
                  <p className="text-xs text-[#4A463F] mt-1">Shipped directly to your studio or client doorstep in branded, unbranded, or white-label packaging via DHL Express Air.</p>
                </div>
                <div className="p-4 bg-[#F4F4F0] border border-[#EAE6DF]">
                  <strong className="block text-sm font-semibold text-[#141310]">Customs &amp; Clearance Handled</strong>
                  <p className="text-xs text-[#4A463F] mt-1">All import documentation, VAT classification, and carrier protocols are managed end-to-end under DDP terms.</p>
                </div>
              </div>
            </RevealOnScroll>

            <div className="lg:col-span-5 bg-[#EFEEEA] p-6 border border-[#EAE6DF] flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl text-[#141310] font-normal mb-2">Contact UK Studio Desk</h3>
                <p className="text-xs text-[#4A463F] mb-6">Speak directly with our client relations team for bespoke requests and swatch ring packages.</p>
                <div className="space-y-3 mb-8">
                  <a href="tel:+919322254315" className="flex items-center gap-2 text-xs font-semibold text-[#141310] hover:text-[#635E52] transition-colors">
                    <Phone size={14} />
                    <span>+91 93222 54315 (Studio Phone &amp; WhatsApp)</span>
                  </a>
                  <a href="mailto:atelier@ultraaalbums.com" className="flex items-center gap-2 text-xs font-semibold text-[#141310] hover:text-[#635E52] transition-colors">
                    <Mail size={14} />
                    <span>atelier@ultraaalbums.com</span>
                  </a>
                </div>
              </div>

              <div className="bg-[#FAF9F5] p-5 border border-[#EAE6DF]">
                <strong className="block text-sm font-semibold text-[#141310]">Order Studio Sample Swatch Ring</strong>
                <p className="text-xs text-[#4A463F] mt-1 mb-4">Receive authentic leather, linen, and foil samples delivered to your UK address within 5 business days.</p>
                <button
                  type="button"
                  className="w-full py-3 bg-[#141310] text-[#FAF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#292724] transition-colors"
                  onClick={() => handleEnquire('UK Studio Swatch Ring Kit')}
                >
                  ORDER SWATCH RING (£25 REFUNDABLE)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


