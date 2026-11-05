import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RevealOnScroll from '../../components/motion/RevealOnScroll';
import TextReveal from '../../components/motion/TextReveal';
import StaggerBoxes from '../../components/motion/StaggerBoxes';
import { 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';

export default function FlushMountAlbumPage() {
  const navigate = useNavigate();

  const galleryImages = [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx3XmJeOFEGbFEzG_s0dNwvn78vq7mbUGfQmqmVlCLzXcOmqJpjXc4qTtTFcSfXEVqJ7OrQ0lq3e6q7vixc6kuLYLQzxzNRgB3bZLu8FXu64teBVTs4zI-awVQ1wjfvd9yvAQ9y7h57Y-TlEGcmQlOsqzfiBjj9vIAn4QEStwVvn4pL44aQ36V0fWo9-wl0TiTv53rGlNG4cSSjbwE34ayhx6F4odFx0RVorz-f-PZ',
      label: 'Zero-Split Gutter',
      desc: '12" × 18" open specimen with uninterrupted continuous silver halide spread'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoa_7rSaDt7xorxP1ovkGeSPm649gHTtC8uNpmR17Y0rnBKS9__3QdEMbsZNFxpqLvyBofvyBxcg2MiJug0jSGW1ZHVhHW0UcckN23I7xU7yY61RFdkTXX1Kp4RqyTWMtlRvDPH3soE-6ISKmFP8hUlgGhMMYPqKaeMGb5UIW5HIOTZ5igPvcDFN2zgfhTpWEcP7l7DaITg3pSVhS31KZTdyEf76RBqY8TL88mlm5L',
      label: 'Continuous Print',
      desc: 'Macro close-up showing pure Fuji Crystal Archive photographic paper with zero cut'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA2_EjIGnlsQkVPi7dyRuua-YZ5FWYjvZEAd-IvS2EA6rSSv0GhZObJ9ILbbtz1bpK3WbwW1YBne0d_lfMZ2MFC8BHkE8XH8RxSeXGy73bGAPiOVWUYglaVGEXhkjivDsUd-5blFRjt3xbbSHBQl_ueZGE1d5hrKXxbplsIgh_BfaKBome_on40HYS2NUB5vHcezr0oZNXybWSrSzR17d6fVgIBSI8YbzaP8pVOSw_',
      label: 'Spine Stitching',
      desc: 'French waxed thread reinforcement on Tuscan cognac leather spine'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwryRIbv6mXTCtu4P6zur0mppmvnc-8y4WwIJvKCOI5FhjIndUg26eIeI56LiSh01k5_MmaNX2PyY88iic6jfGV3g_e0JxgcD_129L_wVPYkWohpRBYyZi5f15ogZk--B55g0sSjjje5FUNf9_vlznga45HAufb2I1o5YUxTeDHrS6xHo3h10lgx_D4fqBRu_NczTwfxGFdZA3hi0xBgmWKf2Al3jB5OCYKwUAnQBq',
      label: 'Silk Endpapers',
      desc: 'Japanese raw silk lining and moire endpaper texture'
    }
  ];

  const [activeImgIndex, setActiveImgIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnquire = () => {
    navigate(`/enquire?product=${encodeURIComponent('Flush Mount Album')}`);
  };

  return (
    <div className="flush-mount-product-page" style={{ backgroundColor: 'var(--color-surface, #FAF9F5)', color: '#141310' }}>
      {/* Top Breadcrumb Bar */}
      <section style={{ backgroundColor: '#F4F4F0', borderBottom: '1px solid #EAE6DF', padding: '0.85rem 0' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: '#635E52' }}>
            <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Albums</Link>
            <span style={{ color: '#CCC5BC' }}>/</span>
            <span>Flagship Continuous-Tone</span>
            <span style={{ color: '#CCC5BC' }}>/</span>
            <span style={{ color: '#141310', fontWeight: 600 }}>Flush Mount Album</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#EFEEEA', padding: '0.3rem 0.85rem', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#635E52' }}></span>
            <span>Zero-Gutter Layflat • True Continuous Silver Halide • 1.2mm Rigid Core</span>
          </div>
        </div>
      </section>

      {/* UK Studio Regional Switcher */}
      <div style={{ backgroundColor: '#EAE2D2', borderBottom: '1px solid #EAE6DF', padding: '0.45rem 2rem', textAlign: 'center', fontSize: '0.75rem', color: '#4A463F' }}>
        <span>Photographing weddings in the United Kingdom? </span>
        <Link to="/for-uk/flush-mount-album-uk" style={{ fontWeight: 600, color: '#141310', textDecoration: 'underline' }}>
          Explore the British Heritage Edition with DDP &amp; Sterling Billing →
        </Link>
      </div>

      {/* Product Hero Dossier */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem) 0', borderBottom: '1px solid #EAE6DF' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(1.5rem, 3vw, 3rem)', alignItems: 'start' }}>
            
            {/* Left 7 Cols: Image Gallery */}
            <RevealOnScroll direction="left" style={{ gridColumn: 'span 12', '@media(min-width: 992px)': { gridColumn: 'span 7' } }} className="pay-col-left">
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', background: '#EFEEEA', overflow: 'hidden', border: '1px solid #EAE6DF', marginBottom: '1rem' }}>
                <img
                  src={galleryImages[activeImgIndex].src}
                  alt={galleryImages[activeImgIndex].label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.4s ease' }}
                />
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#141310', color: '#FFFFFF', padding: '0.35rem 0.85rem', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Zero-Split Panoramic Spread
                </div>
                <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'rgba(250, 249, 245, 0.92)', backdropFilter: 'blur(4px)', padding: '0.35rem 0.85rem', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#141310' }}>
                  12" × 18" (30 × 45 cm) Open Specimen
                </div>
              </div>

              {/* Thumbnails */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImgIndex(idx)}
                    style={{
                      aspectRatio: '1',
                      background: '#EFEEEA',
                      border: '1px solid',
                      borderColor: activeImgIndex === idx ? '#141310' : '#EAE6DF',
                      padding: 0,
                      cursor: 'pointer',
                      overflow: 'hidden',
                      opacity: activeImgIndex === idx ? 1 : 0.7,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <img src={img.src} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            </RevealOnScroll>

            {/* Right 5 Cols: Commercial Spec Dossier */}
            <RevealOnScroll direction="right" style={{ gridColumn: 'span 12', '@media(min-width: 992px)': { gridColumn: 'span 5' } }} className="pay-col-right">
              <div>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52', display: 'block', marginBottom: '0.5rem' }}>
                  Flagship Tome Series
                </span>

                <TextReveal
                  as="h1"
                  delay={0.08}
                  style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 3.8vw, 3.25rem)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.01em', margin: '0 0 0.5rem 0', color: '#141310' }}
                >
                  The Flush Mount Album
                </TextReveal>

                <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.25rem', color: '#635E52', margin: '0 0 1.5rem 0' }}>
                  Seamless Panoramic Splendour
                </p>

                <p style={{ fontSize: '0.95rem', color: '#4A463F', lineHeight: 1.68, marginBottom: '1.75rem' }}>
                  Ultraa’s quintessential signature volume. Masterfully exposed using authentic silver halide chemistry onto genuine Fuji Crystal Archive DPII emulsion. Each photographic leaf is permanently fused to a solid 1.2mm museum-grade core board, delivering completely rigid, unbending double-page spreads that flow smoothly across 36 inches without a center image split.
                </p>

                {/* Studio Tier Pill */}
                <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
                  <div>
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', display: 'block' }}>Verified Studio Tier</span>
                    <strong style={{ fontSize: '1.15rem', color: '#141310' }}>From ₹18,500 <span style={{ fontSize: '0.8rem', fontWeight: 400, color: '#635E52' }}>/ £195 ex. VAT</span></strong>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', display: 'block' }}>Lead Time</span>
                    <strong style={{ fontSize: '0.88rem', color: '#141310' }}>7–10 Working Days</strong>
                  </div>
                </div>

                {/* Quick Spec Matrix */}
                <StaggerBoxes style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '2rem' }} stagger={0.08}>
                  <div style={{ background: '#EFEEEA', padding: '1rem', border: '1px solid #EAE6DF' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', display: 'block' }}>Page Core</span>
                    <strong style={{ fontSize: '0.95rem', color: '#141310', display: 'block', margin: '0.2rem 0' }}>1.2mm Rigid Board</strong>
                    <span style={{ fontSize: '0.72rem', color: '#635E52' }}>Sag-free archival ply</span>
                  </div>

                  <div style={{ background: '#EFEEEA', padding: '1rem', border: '1px solid #EAE6DF' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', display: 'block' }}>Gutter Design</span>
                    <strong style={{ fontSize: '0.95rem', color: '#141310', display: 'block', margin: '0.2rem 0' }}>True 0-Split Layflat</strong>
                    <span style={{ fontSize: '0.72rem', color: '#635E52' }}>Continuous print leaf</span>
                  </div>

                  <div style={{ background: '#EFEEEA', padding: '1rem', border: '1px solid #EAE6DF' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', display: 'block' }}>Spread Volume</span>
                    <strong style={{ fontSize: '0.95rem', color: '#141310', display: 'block', margin: '0.2rem 0' }}>15 to 50 Spreads</strong>
                    <span style={{ fontSize: '0.72rem', color: '#635E52' }}>30 to 100 archival sides</span>
                  </div>

                  <div style={{ background: '#EFEEEA', padding: '1rem', border: '1px solid #EAE6DF' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', display: 'block' }}>Emulsion Stock</span>
                    <strong style={{ fontSize: '0.95rem', color: '#141310', display: 'block', margin: '0.2rem 0' }}>Fuji DPII / Silk Rag</strong>
                    <span style={{ fontSize: '0.72rem', color: '#635E52' }}>100+ year certified tint</span>
                  </div>
                </StaggerBoxes>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                  <button
                    type="button"
                    onClick={handleEnquire}
                    style={{
                      flex: 1,
                      minWidth: '220px',
                      background: '#141310',
                      color: '#FFFFFF',
                      border: 'none',
                      padding: '1.15rem 1.75rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <span>Customise &amp; Enquire</span>
                    <ArrowRight size={14} />
                  </button>

                  <Link
                    to="/resources/catalog"
                    style={{
                      background: '#EFEEEA',
                      color: '#141310',
                      border: '1px solid #EAE6DF',
                      padding: '1.15rem 1.5rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    Order Swatch Kit
                  </Link>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#635E52' }}>
                  <ShieldCheck size={15} color="#141310" />
                  <span>Lifetime warranty against delamination, humidity warping, and tone shifting.</span>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* Artisanal Anatomy & Engineering (4 Pillars) */}
      <section style={{ backgroundColor: '#F4F4F0', padding: 'clamp(3rem, 6vw, 5.5rem) 0', borderBottom: '1px solid #EAE6DF' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
            <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.5rem' }}>
              Precision Engineering
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', fontWeight: 400, color: '#141310', margin: 0 }}>
              The Anatomy of a Flagship Tome
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { num: '01', title: 'Continuous Silver Halide', desc: 'Printed using continuous-tone RGB laser lasers directly onto genuine photo paper—producing smooth tonal transitions that digital halftone dots cannot match.' },
              { num: '02', title: 'Zero-Split Crease', desc: 'Each double-page spread is gently micro-scored along the center line without cutting through the paper fibers, preserving full uninterrupted horizontal horizons.' },
              { num: '03', title: '1.2mm Archival Core', desc: 'Every spread is permanently mounted to high-density pH-neutral museum board that remains absolutely rigid and will never bend, cup, or buckle.' },
              { num: '04', title: 'Reinforcing Mull & Headbands', desc: 'Spines are hand-wrapped with heavy open-weave bookcloth mull and hand-fitted silk headbands to support heavy book blocks for over a century.' }
            ].map((pillar, i) => (
              <div key={i} style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '2rem' }}>
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', color: '#635E52', display: 'block', marginBottom: '1.25rem' }}>{pillar.num}</span>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#141310', margin: '0 0 0.75rem 0', fontWeight: 500 }}>{pillar.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#4A463F', lineHeight: 1.6, margin: 0 }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizing Blueprint */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5.5rem) 0' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
            <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.5rem' }}>
              Standard Dimensional Archetypes
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', fontWeight: 400, color: '#141310', margin: 0 }}>
              Curated Proportions for Every Wedding Narrative
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { dim: '12" × 18"', name: 'Grand Royal Panorama', desc: 'The majestic choice for high-profile multi-day weddings with grand banquets and dramatic architectural venues.' },
              { dim: '12" × 12"', name: 'Flagship Square', desc: 'Our most universally acclaimed format, creating a timeless balance for paired portrait and landscape layouts.' },
              { dim: '10" × 14"', name: 'Editorial Landscape', desc: 'Refined cinematic proportions favoring continuous landscape panoramas across wide double spreads.' },
              { dim: '8" × 12"', name: 'Parent Duplicate Edition', desc: 'Exact scaled replicas printed synchronously with the primary volume for immediate family gifting.' }
            ].map((fmt, i) => (
              <div key={i} style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '1.75rem' }}>
                <strong style={{ display: 'block', fontSize: '1.35rem', color: '#141310', fontFamily: 'Playfair Display, serif' }}>{fmt.dim}</strong>
                <h3 style={{ fontSize: '0.92rem', color: '#141310', margin: '0.35rem 0 0.5rem 0', fontWeight: 600 }}>{fmt.name}</h3>
                <p style={{ fontSize: '0.82rem', color: '#4A463F', lineHeight: 1.55, margin: 0 }}>{fmt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
