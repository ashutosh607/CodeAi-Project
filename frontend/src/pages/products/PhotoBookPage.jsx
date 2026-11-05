import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RevealOnScroll from '../../components/motion/RevealOnScroll';
import { ArrowRight } from 'lucide-react';

export default function PhotoBookPage() {
  const navigate = useNavigate();

  // Gallery images
  const galleryImages = [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC83iLWr2sRo5IsW9FeriQMBxL0zi3c7zcHRBlOqfM797L5oqqaGjPjlllUb82j5wAUAxb3M-1PUdFjOr1w7HWD6BMnG_xCePw3YmEvwXnJrIgHCEVVoI2TTdp2e3VAyiLg2DTYwwAAcIhiivK9izxwRBjh9HHiODGYG81NKunDoGDJDv3WXcexfdQLVj848gudHaNIOXbgT38tGEixI3gtU0ZL19P7HJtfnrY5Kc0h',
      plate: 'Plate 01: Editorial Magazine Specimen in 216gsm Mohawk Eggshell'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_LPsCcLVRkgukq3lq_xqp-TqH7OLTs2Ozu06jTSGvblwHkwcBT0kguJU18EuWBxd9qOCWRfWBZJSyKYtDNT6arCWkpTCv4ny3SWV5djV98tXSjcLUU-hs4jn7H3dMlpoiodHB-B62DXxNsEdp35GhLsyg2dYnApMCyqZk0ds41xFFn7W9_fswq7ftxwTeP9E8At_B6BeQQ5qgTJLohPwQnxbF3BgFVFmLjHKwxVCl',
      plate: 'Plate 02: Close-up detail of flexible PUR binding spine'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnq4O5vxeqnXjnfwAZamDilE8idgkZgxorjKKzgieUfNJH_Vfw7huo9ndOROq9aaUbJa6q0oKuKj6TQeFRSWW7yK6ZpbSfgOoNUI4XxTHmvmB3t_c7vspaxl3PDPclYgm8jRRnljgTe2TJ1O2xwsexWXHxGX7dc5Z-iQ1n-uMFTXPyn-9OctSKiGIvrM35zFFE0AMiGz4qAzkvNsWDDnvKM0YJ7kcy9L7zqsy8preX',
      plate: 'Plate 03: Tactile translucent vellum dust jacket with serif typography'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAngKjiCRCiFghdUTphLkTYZxwMTsyRWn4-UjFIoyqiLlFXLzJw5rqdpQMBJ3u0l2HCndMvvj2coT3JhYnJw4OUUY8BGfg8N-kDS5U1ggDou_nvv4GmblRMmGV1ovYYBvm18L3z5uLUDgroCzr5B5uI0KpTrRWYb1YBexDGp48UcxDwxEw_6vc4-aUFepzQK12ikm6AGnOg-ivZKkNKlenxth9S7iVy_IV3lgYaN6gq',
      plate: 'Plate 04: Stack of five slender softcover photo books with debossed spine'
    }
  ];

  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Configurator
  const [selectedFormat, setSelectedFormat] = useState('a4');
  const [selectedPaper, setSelectedPaper] = useState('mohawk');
  const [spreadCount, setSpreadCount] = useState(40);
  const [selectedJacket, setSelectedJacket] = useState('vellum');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateTotal = () => {
    let base = 8500;
    if (selectedFormat === 'a4') base += 1800;
    if (selectedFormat === 'square') base += 1500;
    if (selectedFormat === 'landscape') base += 2200;
    if (selectedFormat === 'pocket') base += 0;

    let paperRate = 95;
    if (selectedPaper === 'mohawk') paperRate = 125;
    if (selectedPaper === 'fedrigoni') paperRate = 110;
    if (selectedPaper === 'lustre') paperRate = 85;

    let jacketCost = 0;
    if (selectedJacket === 'vellum') jacketCost = 1400;
    if (selectedJacket === 'hardcover_slip') jacketCost = 2800;

    const extraSpreads = Math.max(0, spreadCount - 20);
    return base + jacketCost + (extraSpreads * paperRate);
  };

  const handleEnquire = () => {
    navigate(`/enquire?product=${encodeURIComponent('Artisan Photo Book')}`);
  };

  return (
    <div className="photo-book-product-page" style={{ backgroundColor: 'var(--color-surface, #FAF9F5)', color: '#141310' }}>
      {/* Top Editorial Breadcrumb Bar */}
      <section style={{ backgroundColor: '#F4F4F0', borderBottom: '1px solid #EAE6DF', padding: '0.85rem 0' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: '#635E52' }}>
            <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Albums</Link>
            <span style={{ color: '#CCC5BC' }}>/</span>
            <span>Fine Art Editorial Journal</span>
            <span style={{ color: '#CCC5BC' }}>/</span>
            <span style={{ color: '#141310', fontWeight: 600 }}>Artisan Photo Book</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#EFEEEA', padding: '0.3rem 0.85rem', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#635E52' }}></span>
            <span>Mohawk &amp; Fedrigoni Papers • PUR-Bound Spine • Up to 250 Spreads</span>
          </div>
        </div>
      </section>

      {/* UK Studio Reciprocal Banner */}
      <div style={{ backgroundColor: '#EFEEEA', borderBottom: '1px solid #EAE6DF', padding: '0.5rem 0' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: '#635E52' }}>
          <span>Looking for UK studio pricing, multi-volume companion bundles &amp; DDP London transit?</span>
          <Link to="/for-uk/photo-book-uk" style={{ color: '#141310', fontWeight: 600, textDecoration: 'underline' }}>
            Visit Dedicated UK Photo Book &amp; Monograph Page (£ GBP) →
          </Link>
        </div>
      </div>

      {/* Editorial Product Showcase Header */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem) 0', borderBottom: '1px solid #EAE6DF' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(1.5rem, 3vw, 3rem)', alignItems: 'start' }}>
            
            {/* Left 7 Cols: Image Gallery */}
            <RevealOnScroll direction="left" style={{ gridColumn: 'span 12' }} className="pay-col-left">
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', background: '#EFEEEA', overflow: 'hidden', border: '1px solid #EAE6DF', marginBottom: '1rem' }}>
                <img
                  src={galleryImages[activeImgIndex].src}
                  alt={galleryImages[activeImgIndex].plate}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.4s ease' }}
                />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'rgba(250, 249, 245, 0.94)', backdropFilter: 'blur(4px)', padding: '0.4rem 0.85rem', fontSize: '0.72rem', color: '#141310' }}>
                  <strong style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginRight: '0.4rem' }}>Specimen:</strong>
                  <span>{galleryImages[activeImgIndex].plate}</span>
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
                      aspectRatio: '4/3',
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
                    <img src={img.src} alt={img.plate} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            </RevealOnScroll>

            {/* Right 5 Cols: Product Narrative & Specs */}
            <RevealOnScroll direction="right" style={{ gridColumn: 'span 12' }} className="pay-col-right">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52' }}>
                    Studio Atelier Collection
                  </span>
                  <span style={{ width: '24px', height: '1px', background: '#CCC5BC' }}></span>
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#99948B' }}>
                    Edition 2026
                  </span>
                </div>

                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 3.8vw, 3.25rem)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.01em', margin: '0 0 0.5rem 0', color: '#141310' }}>
                  Artisan Photo Book
                </h1>

                <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.25rem', color: '#635E52', margin: '0 0 1.5rem 0' }}>
                  The Fine Art Editorial Journal
                </p>

                <p style={{ fontSize: '0.95rem', color: '#4A463F', lineHeight: 1.68, marginBottom: '1.5rem' }}>
                  A lightweight, supple volume inspired by European gallery monographs and high-fashion periodicals. Built with polyurethane reactive (PUR) spine engineering, this format bridges the gap between delicate coffee table catalogs and heirloom archival repositories.
                </p>

                <p style={{ fontSize: '0.88rem', color: '#635E52', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Engineered expressly for extensive multi-day Indian weddings, intimate bridal boudoir suites, pre-wedding destination itineraries, and high-quantity companion albums for immediate family.
                </p>

                {/* Specs Matrix */}
                <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EAE6DF', paddingBottom: '0.6rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52' }}>Substrate Range</span>
                    <strong style={{ fontSize: '0.88rem', color: '#141310' }}>170 – 220 gsm Fedrigoni & Mohawk</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EAE6DF', paddingBottom: '0.6rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52' }}>Spine Engineering</span>
                    <strong style={{ fontSize: '0.88rem', color: '#141310' }}>PUR Flexible Polyurethane Bead</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EAE6DF', paddingBottom: '0.6rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52' }}>Volume Scope</span>
                    <strong style={{ fontSize: '0.88rem', color: '#141310' }}>40 to 250 Pages (20 to 125 Spreads)</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52' }}>Atelier Turnaround</span>
                    <strong style={{ fontSize: '0.88rem', color: '#141310' }}>7 Business Days + Global Courier</strong>
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
                      padding: '1.1rem 1.75rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      cursor: 'pointer'
                    }}
                  >
                    Configure Photo Book
                  </button>
                  <a
                    href="#configurator"
                    style={{
                      padding: '1.1rem 1.5rem',
                      background: '#E9E8E4',
                      color: '#141310',
                      border: '1px solid #EAE6DF',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    Price Calculator ↓
                  </a>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* Craftsmanship & Production Features (4 Columns) */}
      <section style={{ backgroundColor: '#F4F4F0', padding: 'clamp(3rem, 6vw, 5.5rem) 0', borderBottom: '1px solid #EAE6DF' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <RevealOnScroll direction="up">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
              <div style={{ maxWidth: '680px' }}>
                <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.5rem' }}>
                  Mastery in Bookmaking
                </span>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', fontWeight: 400, color: '#141310', margin: 0 }}>
                  Why Discerning Studios Choose Our Journal Edition
                </h2>
              </div>
              <p style={{ maxWidth: '440px', fontSize: '0.92rem', color: '#4A463F', lineHeight: 1.6, margin: 0 }}>
                Unlike ordinary mass-market commercial softcovers, each Ultraa Photo Book is hand-trimmed, checked for grain direction, and cold-pressed in our Santacruz atelier.
              </p>
            </div>
          </RevealOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { num: '01', title: 'High-Volume Capacity', desc: 'Binds comfortably from 40 up to 250 individual pages. Document complete weekend sangeets, haldi ceremonies, and reception banquets in a single continuous literary sequence.', badge: '250 Page Limit' },
              { num: '02', title: 'Artisanal Paper Stocks', desc: 'Selection of Mohawk Superfine Eggshell for soft micro-textured tooth, Italian Fedrigoni Tintoretto Gesso for delicate felt mark, or Lustre Silk Archival for rich skin depth.', badge: 'Fine-Art Paper' },
              { num: '03', title: 'PUR Spine Engineering', desc: 'Polyurethane Reactive hot-melt adhesive creates an incredibly resilient, rubberized polymer spine that will never yellow, crack, or release leaves over generations of page turns.', badge: 'Polyurethane Bead' },
              { num: '04', title: 'Fine-Art Dust Jackets', desc: 'Optional translucent frosted vellum wrappers, French folded flaps, or custom debossed slipcases that convert softcover journals into formal gift volumes.', badge: 'French Flaps' }
            ].map((card, i) => (
              <div key={i} style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', color: '#635E52', display: 'block', marginBottom: '1.25rem' }}>{card.num}</span>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#141310', margin: '0 0 0.75rem 0', fontWeight: 500 }}>{card.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#4A463F', lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
                </div>
                <div style={{ marginTop: '1.75rem', paddingTop: '0.85rem', borderTop: '1px solid #EAE6DF', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52' }}>
                  {card.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Substrate Tactility & Paper Mechanics */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5.5rem) 0', borderBottom: '1px solid #EAE6DF' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
            <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.5rem' }}>
              Substrate Chemistry
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', fontWeight: 400, color: '#141310', margin: '0 0 0.85rem 0' }}>
              Three Revered Paper Archetypes
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#4A463F', lineHeight: 1.6, margin: 0 }}>
              Sourced from heritage mills in upstate New York and northern Italy, engineered specifically for calibrated fine-art inkjet reproduction.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '2rem' }}>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>Substrate 01</span>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#141310', margin: '0.5rem 0 0.75rem 0', fontWeight: 500 }}>
                Mohawk Superfine Eggshell
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#4A463F', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                216gsm uncoated stock with an unmistakable warm eggshell tooth. Beloved by fine-art documentary photographers for its velvety matte ink absorption and zero glare.
              </p>
              <div style={{ background: '#FFFFFF', padding: '0.85rem', border: '1px solid #EAE6DF', fontSize: '0.75rem', color: '#635E52' }}>
                Ideal for: Monochromatic portraits, vow books, and intimate editorial stories.
              </div>
            </div>

            <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '2rem' }}>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>Substrate 02</span>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#141310', margin: '0.5rem 0 0.75rem 0', fontWeight: 500 }}>
                Fedrigoni Tintoretto Gesso
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#4A463F', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                200gsm felt-marked Italian fine paper with a subtle linear watercolor texture. Provides organic warmth and distinctive artisanal weight in hand.
              </p>
              <div style={{ background: '#FFFFFF', padding: '0.85rem', border: '1px solid #EAE6DF', fontSize: '0.75rem', color: '#635E52' }}>
                Ideal for: Destination European weddings, organic florals, and tactile memoirs.
              </div>
            </div>

            <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '2rem' }}>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>Substrate 03</span>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#141310', margin: '0.5rem 0 0.75rem 0', fontWeight: 500 }}>
                Ultraa Silk Lustre
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#4A463F', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                190gsm micro-porous pearl finish offering expanded dynamic range, deep photographic blacks, and vibrant jewelry highlights without fingerprint sensitivity.
              </p>
              <div style={{ background: '#FFFFFF', padding: '0.85rem', border: '1px solid #EAE6DF', fontSize: '0.75rem', color: '#635E52' }}>
                Ideal for: Vibrant Indian festive sangeets, royal banquets, and high-contrast night shots.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Configurator & Price Calculator */}
      <section id="configurator" style={{ backgroundColor: '#F4F4F0', padding: 'clamp(3rem, 6vw, 5.5rem) 0', borderBottom: '1px solid #EAE6DF' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(1.5rem, 3vw, 3rem)' }}>
              
              {/* Left 5 Cols: Overview */}
              <div style={{ gridColumn: 'span 12', '@media(min-width: 992px)': { gridColumn: 'span 5' } }} className="pay-col-left">
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#635E52', display: 'block', marginBottom: '0.5rem' }}>
                  Live Studio Estimator
                </span>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.25rem', color: '#141310', margin: '0 0 1rem 0', fontWeight: 400 }}>
                  Configure Your Journal Spec
                </h2>
                <p style={{ fontSize: '0.92rem', color: '#4A463F', lineHeight: 1.65, marginBottom: '2rem' }}>
                  Select proportions, paper grade, and volume spread counts. Wholesale partner discounts apply automatically for registered studio accounts.
                </p>

                <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '1.25rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#635E52' }}>Spine Type:</span>
                    <strong style={{ color: '#141310' }}>Flexible PUR Adhesive Bead</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#635E52' }}>Page Range:</span>
                    <strong style={{ color: '#141310' }}>40 – 250 Curated Pages</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#635E52' }}>Production Lead:</span>
                    <strong style={{ color: '#141310' }}>7 Business Days</strong>
                  </div>
                </div>

                <div style={{ background: '#EFEEEA', border: '1px solid #EAE6DF', padding: '1.5rem' }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52', display: 'block' }}>
                    Estimated Studio Base
                  </span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', margin: '0.35rem 0' }}>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.25rem', fontWeight: 700, color: '#141310' }}>
                      ₹{calculateTotal().toLocaleString('en-IN')}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#635E52' }}>/ ex. shipping</span>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: '#635E52', display: 'block' }}>
                    Includes manual pre-flight check by senior lab master
                  </span>
                </div>
              </div>

              {/* Right 7 Cols: Controls */}
              <div style={{ gridColumn: 'span 12', '@media(min-width: 992px)': { gridColumn: 'span 7' } }} className="pay-col-right">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                  
                  {/* Step 1: Format */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#141310', marginBottom: '0.75rem' }}>
                      1. Select Journal Dimension
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '0.5rem' }}>
                      {[
                        { id: 'a4', name: '8.3" × 11.7"', sub: 'A4 Monograph' },
                        { id: 'square', name: '10" × 10"', sub: 'Grand Square' },
                        { id: 'landscape', name: '11" × 8.5"', sub: 'Landscape Catalog' },
                        { id: 'pocket', name: '6" × 8"', sub: 'Petite Companion' }
                      ].map((fmt) => (
                        <button
                          key={fmt.id}
                          type="button"
                          onClick={() => setSelectedFormat(fmt.id)}
                          style={{
                            padding: '0.85rem 0.5rem',
                            textAlign: 'center',
                            background: selectedFormat === fmt.id ? '#141310' : '#F4F4F0',
                            color: selectedFormat === fmt.id ? '#FFFFFF' : '#141310',
                            border: '1px solid',
                            borderColor: selectedFormat === fmt.id ? '#141310' : '#EAE6DF',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease'
                          }}
                        >
                          <span style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600 }}>{fmt.name}</span>
                          <span style={{ display: 'block', fontSize: '0.65rem', opacity: 0.8, marginTop: '0.15rem' }}>{fmt.sub}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Paper */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#141310', marginBottom: '0.75rem' }}>
                      2. Select Paper Substrate
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.5rem' }}>
                      {[
                        { id: 'mohawk', name: 'Mohawk Eggshell', sub: '216gsm Uncoated' },
                        { id: 'fedrigoni', name: 'Fedrigoni Tintoretto', sub: '200gsm Felt-Marked' },
                        { id: 'lustre', name: 'Ultraa Silk Lustre', sub: '190gsm Micro-Porous' }
                      ].map((pap) => (
                        <button
                          key={pap.id}
                          type="button"
                          onClick={() => setSelectedPaper(pap.id)}
                          style={{
                            padding: '0.85rem 0.75rem',
                            textAlign: 'left',
                            background: selectedPaper === pap.id ? '#141310' : '#F4F4F0',
                            color: selectedPaper === pap.id ? '#FFFFFF' : '#141310',
                            border: '1px solid',
                            borderColor: selectedPaper === pap.id ? '#141310' : '#EAE6DF',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease'
                          }}
                        >
                          <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600 }}>{pap.name}</span>
                          <span style={{ display: 'block', fontSize: '0.68rem', opacity: 0.8, marginTop: '0.15rem' }}>{pap.sub}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Spread Slider */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <label style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#141310' }}>
                        3. Page / Spread Capacity
                      </label>
                      <strong style={{ fontSize: '1rem', color: '#141310' }}>
                        {spreadCount} Spreads ({spreadCount * 2} Pages)
                      </strong>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="125"
                      step="5"
                      value={spreadCount}
                      onChange={(e) => setSpreadCount(parseInt(e.target.value, 10))}
                      style={{ width: '100%', cursor: 'pointer', accentColor: '#141310' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#635E52', marginTop: '0.35rem' }}>
                      <span>20 Spreads (40p)</span>
                      <span>70 Spreads (140p)</span>
                      <span>125 Spreads (250p Max)</span>
                    </div>
                  </div>

                  {/* Step 4: Dust Jacket Option */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#141310', marginBottom: '0.75rem' }}>
                      4. Outer Dust Jacket & Presentation
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.5rem' }}>
                      {[
                        { id: 'vellum', name: 'Frosted Vellum Wrap' },
                        { id: 'hardcover_slip', name: 'Belgian Linen Slipcase' },
                        { id: 'softcover_raw', name: 'Raw Minimalist Flap' }
                      ].map((jkt) => (
                        <button
                          key={jkt.id}
                          type="button"
                          onClick={() => setSelectedJacket(jkt.id)}
                          style={{
                            padding: '0.85rem 0.75rem',
                            textAlign: 'left',
                            background: selectedJacket === jkt.id ? '#141310' : '#F4F4F0',
                            color: selectedJacket === jkt.id ? '#FFFFFF' : '#141310',
                            border: '1px solid',
                            borderColor: selectedJacket === jkt.id ? '#141310' : '#EAE6DF',
                            cursor: 'pointer',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            transition: 'all 0.15s ease'
                          }}
                        >
                          {jkt.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', paddingTop: '1rem' }}>
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
                      <span>Submit Photo Book Enquiry</span>
                      <ArrowRight size={14} />
                    </button>

                    <a
                      href="https://wa.me/919322254315?text=Hello%20Ultraa%20Albums%2C%20I%20would%20like%20to%20discuss%20an%20Artisan%20Photo%20Book%20order."
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: '#F4F4F0',
                        color: '#141310',
                        border: '1px solid #EAE6DF',
                        padding: '1.15rem 1.5rem',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem'
                      }}
                    >
                      <span>WhatsApp Desk</span>
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5.5rem) 0' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
            <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.5rem' }}>
              Atelier Guidance
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', fontWeight: 400, color: '#141310', margin: 0 }}>
              Photo Book Inquiries
            </h2>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                q: 'What is the durability difference between PUR binding and standard EVA perfect binding?',
                a: 'Standard commercial books use EVA hot glue, which dries brittle and cracks within 3 to 5 years under temperature fluctuations. Polyurethane Reactive (PUR) forms an irreversible molecular cross-link with paper fibers, remaining supple across decades and withstanding up to 250 heavy pages without leaf pullout.'
              },
              {
                q: 'Can Photo Books include transparent vellum divider sheets?',
                a: 'Yes. We offer translucent architectural trace interleaves between major chapters or ceremonies, printed with couple monograms or venue coordinates in pure white pigment or gold foil.'
              },
              {
                q: 'How should layout files be formatted for the spine gutter?',
                a: 'Because PUR bound books open in a soft graceful arc rather than a flat plane, we recommend keeping essential typography and faces at least 15mm away from the central gutter.'
              }
            ].map((faq, idx) => (
              <div key={idx} style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '1.75rem' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#141310', margin: '0 0 0.5rem 0', fontWeight: 500 }}>
                  {faq.q}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#4A463F', lineHeight: 1.65, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
