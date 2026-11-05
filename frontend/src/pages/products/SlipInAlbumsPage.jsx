import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RevealOnScroll from '../../components/motion/RevealOnScroll';
import { ArrowRight } from 'lucide-react';

export default function SlipInAlbumsPage() {
  const navigate = useNavigate();

  const galleryImages = [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAH7GS784tgx6_H9l44X-U5OVAa_1nGw1X8OvKF22-QrETYrCGz3X_dI__SC96mSyeK-E2aDJ5dWXizdJmMUSFUN-dz_X34tzEmGTLBVK1Um9B6qZDhYYXZy88kpMCGBoJmgaFkrzpw6LUOCImdJQEHQFzl8i_vMY8NXHpD6sHIWmclIOqZ4wn2PKjWnoeiYEof4TJoq4UUP5Ji13le7KudKPURj-MJatIvrKUSg9Xk',
      label: 'Bi-Fold Folio',
      desc: 'Bi-Fold 8x10 Fine Art Folio in Oatmeal Linen with 45-degree bevel-cut window apertures'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOp5ph2njFcCefx7TrHEZ1AJRHdghclR7mRrRa9E-kx1a4SShMYmnU4T6KrSb178GYkCG8TXX4HJc7aFu5RnOo9D9YPJKRab2s2ts-k0NRS3yUo47X__-FSryO5ze2gGUpzb4p5irBij6E9kqgrkd5k2I3WHEoGOMZXYhsRJv8AQi4EACAJp9CjTBYsEatoGt5Zfkvqszp5udEGNz_8oEFpJB4pq4yM3iFMg0ZWEfh',
      label: 'Bevel Detail',
      desc: '4-ply museum board bevel-cut window aperture with gold fillet framing'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2jurbsbXaKjqHCQvDwPXD9hNmQ9S9pM0RIDNlX1T0QKXf826o5Pp_Z9WYNn3aka9TRuiBhFVKHpv-XwEuH2bB1ANnWZ7xyiam2BMP5gnP_IDDFNWxVnSyfHZQlBNq2uzTFpkhyLMGPTaI5AzWiqEaXklFuPwpDpB_FomLY4Ubspjkb9x1hbxqFdx5E4dPCixlVYZQnSAb7b1-3nD6ktBsd0C5Jr1U37kz3GiUE2Cw',
      label: 'Dry Pocket Insertion',
      desc: 'Effortless top-loading pocket mechanism without sprays or thermal adhesives'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxsBygGwt75ZPqZXVw_kEwiQngS71qeKvBqE2O4HOUXn9r3PbykX90_QRzndBE5539JUpxiarGIoNNtJKeYibqCpxnwOcReMQ029kJKXa_qn-Fp267KZknXYRGfchGlGjGNtoVD6TgAsNGjCRz30I1oXjFG-9USxH7H2WnF6m0-T73u0ceu3fpdq0WIWASthwouU4f1X9UMDK4D4ipeprJASHNq_L8YI5T7KIIU5QP',
      label: 'Foil Debossed Covers',
      desc: 'Stack of hand-bound slip-in albums in navy buckram and Italian leatherette'
    }
  ];

  const [activeImgIndex, setActiveImgIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnquire = () => {
    navigate(`/enquire?product=${encodeURIComponent('Slip-In Albums & Matted Folios')}`);
  };

  return (
    <div className="slip-in-product-page" style={{ backgroundColor: 'var(--color-surface, #FAF9F5)', color: '#141310' }}>
      {/* Top Breadcrumb Bar */}
      <section style={{ backgroundColor: '#F4F4F0', borderBottom: '1px solid #EAE6DF', padding: '0.85rem 0' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: '#635E52' }}>
            <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Albums</Link>
            <span style={{ color: '#CCC5BC' }}>/</span>
            <span>Presentation Formats</span>
            <span style={{ color: '#CCC5BC' }}>/</span>
            <span style={{ color: '#141310', fontWeight: 600 }}>Slip-In Albums &amp; Matted Folios</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#EFEEEA', padding: '0.3rem 0.85rem', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#635E52' }}></span>
            <span>Dry-Mount Pockets • 4-Ply Museum Bevel • Under 60-Second Insertion</span>
          </div>
        </div>
      </section>

      {/* UK Studio Reciprocal Banner */}
      <div style={{ backgroundColor: '#EFEEEA', borderBottom: '1px solid #EAE6DF', padding: '0.5rem 0' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: '#635E52' }}>
          <span>Looking for UK studio pricing, aperture standards &amp; DDP London transit?</span>
          <Link to="/for-uk/slip-in-albums-uk" style={{ color: '#141310', fontWeight: 600, textDecoration: 'underline' }}>
            Visit Dedicated UK Slip-In &amp; Matted Folios Page (£ GBP) →
          </Link>
        </div>
      </div>

      {/* Product Hero Showcase */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem) 0', borderBottom: '1px solid #EAE6DF' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(1.5rem, 3vw, 3rem)', alignItems: 'start' }}>
            
            {/* Left 7 Cols: Image Gallery */}
            <RevealOnScroll direction="left" style={{ gridColumn: 'span 12' }} className="pay-col-left">
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', background: '#EFEEEA', overflow: 'hidden', border: '1px solid #EAE6DF', marginBottom: '1rem' }}>
                <img
                  src={galleryImages[activeImgIndex].src}
                  alt={galleryImages[activeImgIndex].label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.4s ease' }}
                />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'rgba(250, 249, 245, 0.94)', backdropFilter: 'blur(4px)', padding: '0.4rem 0.85rem', fontSize: '0.72rem', color: '#141310' }}>
                  <strong style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginRight: '0.4rem' }}>Specimen:</strong>
                  <span>{galleryImages[activeImgIndex].desc}</span>
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

            {/* Right 5 Cols: Spec Dossier */}
            <RevealOnScroll direction="right" style={{ gridColumn: 'span 12' }} className="pay-col-right">
              <div>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52', display: 'block', marginBottom: '0.5rem' }}>
                  Atelier Series 04 • Instant Delivery Format
                </span>

                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 3.8vw, 3.25rem)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.01em', margin: '0 0 0.5rem 0', color: '#141310' }}>
                  Slip-In Albums & Matted Folios
                </h1>

                <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.25rem', color: '#635E52', margin: '0 0 1.5rem 0' }}>
                  Timeless Portrait Presentation for Contemporary Fine Art Studios
                </p>

                <p style={{ fontSize: '0.95rem', color: '#4A463F', lineHeight: 1.68, marginBottom: '2rem' }}>
                  Engineered for high-volume portrait sessions, boutique newborn shoots, and rapid studio handovers. Ultraa's slip-in collections replace time-intensive wet mounting and thermal lamination with precision die-cut, top-loading mat apertures. Simply glide your archival lab prints directly into 4-ply museum-grade bevelled mounts in seconds—delivering heirloom-tier tactile permanence without workshop overhead.
                </p>

                {/* Architectural Spec Matrix */}
                <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EAE6DF', paddingBottom: '0.5rem' }}>
                    <span style={{ color: '#635E52' }}>Internal Core:</span>
                    <strong style={{ color: '#141310' }}>Acid-Free 4-Ply Alpha-Cellulose Mat</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EAE6DF', paddingBottom: '0.5rem' }}>
                    <span style={{ color: '#635E52' }}>Aperture Cut:</span>
                    <strong style={{ color: '#141310' }}>45° Precision Micro-Bevel (Classic / Gold Fillet)</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EAE6DF', paddingBottom: '0.5rem' }}>
                    <span style={{ color: '#635E52' }}>Loading Method:</span>
                    <strong style={{ color: '#141310' }}>Top-Loading Dry-Mount Slip Pockets</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EAE6DF', paddingBottom: '0.5rem' }}>
                    <span style={{ color: '#635E52' }}>Capacity Options:</span>
                    <strong style={{ color: '#141310' }}>2-Opening Folios up to 40-Opening Bound Tomes</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#635E52' }}>Standard Sizes:</span>
                    <strong style={{ color: '#141310' }}>4x6", 5x7", 6x8", 8x10" & Custom Squares</strong>
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={handleEnquire}
                    style={{
                      flex: 1,
                      minWidth: '200px',
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
                    <span>Order Studio Folios</span>
                    <ArrowRight size={14} />
                  </button>

                  <a
                    href="https://wa.me/919322254315?text=Hello%20Ultraa%20Albums%2C%20I%20would%20like%20to%20request%20slip-in%20mat%20samples."
                    target="_blank"
                    rel="noopener noreferrer"
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
                    Request Mat Samples
                  </a>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* The Matted Slip-In Advantage (4 Columns) */}
      <section style={{ backgroundColor: '#F4F4F0', padding: 'clamp(3rem, 6vw, 5.5rem) 0' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <RevealOnScroll direction="up">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
              <div style={{ maxWidth: '680px' }}>
                <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.5rem' }}>
                  Architectural Engineering
                </span>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', fontWeight: 400, color: '#141310', margin: 0 }}>
                  The Matted Slip-In Advantage
                </h2>
              </div>
              <p style={{ maxWidth: '440px', fontSize: '0.92rem', color: '#4A463F', lineHeight: 1.6, margin: 0 }}>
                Conceived specifically for wedding and studio photographers seeking zero-latency delivery without compromising museum standards.
              </p>
            </div>
          </RevealOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { num: '01', title: 'Zero Adhesive Mounting', desc: 'Eliminate sprays, tapes, heat presses, and wet glues entirely. Lab-processed prints slide firmly through hidden top entry channels, self-centering in seconds.', sub: 'Turnaround: Under 60 Seconds' },
              { num: '02', title: '4-Ply Museum Bevels', desc: 'Every aperture features a crisp 45-degree hand-calibrated bevel cut with white or metallic gold fillet core, elevating flat prints with architectural depth.', sub: 'Optical Depth & Shadow' },
              { num: '03', title: 'Instant Studio Handover', desc: 'Stock pre-bound empty folios in your studio closet. When client portrait orders arrive from the lab, slide them into place for immediate same-day collection.', sub: 'Zero Production Delay' },
              { num: '04', title: 'Interchangeable Prints', desc: 'Clients can swap or update family photographs across the years without damaging the heirloom matting or tearing delicate paper fibers.', sub: 'Non-Destructive Framing' }
            ].map((adv, i) => (
              <div key={i} style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', color: '#635E52', display: 'block', marginBottom: '1.25rem' }}>{adv.num}</span>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#141310', margin: '0 0 0.75rem 0', fontWeight: 500 }}>{adv.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#4A463F', lineHeight: 1.6, margin: 0 }}>{adv.desc}</p>
                </div>
                <div style={{ marginTop: '1.75rem', paddingTop: '0.85rem', borderTop: '1px solid #EAE6DF', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52' }}>
                  {adv.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

