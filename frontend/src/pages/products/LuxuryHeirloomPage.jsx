import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RevealOnScroll from '../../components/motion/RevealOnScroll';
import TextReveal from '../../components/motion/TextReveal';
import { 
  ArrowRight, 
  Phone, 
  Crown
} from 'lucide-react';

export default function LuxuryHeirloomPage() {
  const navigate = useNavigate();

  const galleryImages = [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPt66gMYymwLcjE7kJnmvPSTNiJJWmBMvf3kMoFw7-8G7f1YUGTbmfiNDceJJKWNbo1frLZn5F1SBmv3-gZyKpQqcxiEWzM6ZOE5EKffKbh2g9xjONnWADReQtB7idVASh2r0xiNmS4xBducriGB1uTnjc9OwM5jUrZ8k1JfkMTvx6JxwJnpmR2DN4xffxUUrI3CdjdoO5Lma8NJJA7aVceM_wrnSq6Esm3NC1VAQZ',
      plate: 'Plate 01 : Specimen N° 849 — Florence Tuscan Hide'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPHFvy6JB5EIGVS9WqudfxWpV4GX6u8OUZJ2jlgHEqDLg4_AMH7Oq_otp8QWZ7vWRPRVsfgg67hb6FtDOF2Ibi3XZSjbJ-N-7vcqDQHm-kzHHTLMhiNEob_ftSaLW7QXXW11Cs_wyI2cFjHF0It3k_WJ6tV-MshWz8LkKOPx4ugdTLXi-2YSTw4XNDKjC4zRIvVbApo6vOaFkAva6eMSG6CToZZBpRv7G7br9e4R6B',
      plate: '24K Hand-Burnished Gold Leaf Page Edges'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAmW1EsApa1h-7-5i1w7uAIS6VJ8wcJXR-TLRQ2jJNkrA6PaEPVJI2D5U4NsHpSvunpj5qwQ81_HsXpoC26euBEUJ8hoZsA5nLasYOUpHrFdZ9p98QsHrbQnIFbT-2na0GN8Bik6UBQl-dpdsl_moDskWQ_lVwi6W4MDSdn2g-OBeFZRdVJnnnovkmpGN5LFBze0q6gdPE0kqC0ymLeDtJ9PASTWuK7wwEMPPczAkR',
      plate: 'Five Hand-Formed Raised Spine Cord Hubs'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbtdvXUmzCDqZ98l_uAn97bBbexRrejKskvrZ6GFsOPxR5VIQ0DnbrD08K0-wggzlbTajMEuJBMvHsQPAwW9awEupMSD2EaEcBonNPQWxuYQCNeW6nBc0GslSUXk0gQMp9Mix8Pe8Yly9Wt6nWodz4FmWX0Gv9jI6IMm_QT7AwMjOlD6FNi5xOau53jQ6crRQQPOj2IG6GKZgbe74RdQlrLxahtKxWW1j9reWfghe9',
      plate: 'Solid Brass CNC Sculpted Die Debossing'
    }
  ];

  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('14x18');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnquire = () => {
    navigate(`/enquire?product=${encodeURIComponent('Luxury Heirloom Album')}`);
  };

  return (
    <div className="luxury-heirloom-product-page" style={{ backgroundColor: 'var(--color-surface, #FAF9F5)', color: '#141310' }}>
      {/* Top Breadcrumb Bar */}
      <section style={{ backgroundColor: '#F4F4F0', borderBottom: '1px solid #EAE6DF', padding: '0.85rem 0' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: '#635E52' }}>
            <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Albums</Link>
            <span style={{ color: '#CCC5BC' }}>/</span>
            <span>The Sovereign Collection</span>
            <span style={{ color: '#CCC5BC' }}>/</span>
            <span style={{ color: '#141310', fontWeight: 600 }}>Luxury Heirloom Tome</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#EFEEEA', padding: '0.3rem 0.85rem', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#635E52' }}></span>
            <span>24K Hand-Gilded Edges • Tuscan Tannery Full-Grain • Teakwood Chest Included</span>
          </div>
        </div>
      </section>

      {/* UK Studio Regional Switcher */}
      <div style={{ backgroundColor: '#EAE2D2', borderBottom: '1px solid #EAE6DF', padding: '0.45rem 2rem', textAlign: 'center', fontSize: '0.75rem', color: '#4A463F' }}>
        <span>Commissioning for British country estates or destination weddings? </span>
        <Link to="/for-uk/luxury-albums-uk" style={{ fontWeight: 600, color: '#141310', textDecoration: 'underline' }}>
          Explore the Sovereign UK Collection with 24K Gilding &amp; Teak Chests →
        </Link>
      </div>

      {/* Majestic Product Hero Showcase */}
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
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'rgba(20, 19, 16, 0.9)', color: '#FFFFFF', padding: '0.4rem 0.9rem', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  {galleryImages[activeImgIndex].plate}
                </div>
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(250, 249, 245, 0.92)', backdropFilter: 'blur(4px)', padding: '0.35rem 0.85rem', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#141310' }}>
                  Generational Masterwork
                </div>
              </div>

              {/* Thumbnails */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
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
                      opacity: activeImgIndex === idx ? 1 : 0.65,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <img src={img.src} alt={img.plate} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>

              {/* Master Guild Seal Banner */}
              <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', background: '#141310', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Crown size={20} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', color: '#141310' }}>Ultraa Atelier Master Guild Seal</strong>
                    <span style={{ fontSize: '0.75rem', color: '#635E52' }}>Individually bound by Senior Master Binder Rajendra M. (28 years at the Mumbai bench).</span>
                  </div>
                </div>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>
                  ISO 9706 Archival
                </span>
              </div>
            </RevealOnScroll>

            {/* Right 5 Cols: Spec & Ordering Dossier */}
            <RevealOnScroll direction="right" style={{ gridColumn: 'span 12' }} className="pay-col-right">
              <div>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#635E52', display: 'block', marginBottom: '0.5rem' }}>
                  The Sovereign Collection • Commission N° 04
                </span>

                <TextReveal
                  as="h1"
                  delay={0.08}
                  style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 3.8vw, 3.25rem)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.01em', margin: '0 0 0.5rem 0', color: '#141310' }}
                >
                  Luxury Heirloom Tome
                </TextReveal>

                <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.25rem', color: '#635E52', margin: '0 0 1.5rem 0' }}>
                  The absolute pinnacle of archival bookbinding craft, engineered to outlast centuries.
                </p>

                {/* Commission Tier Card */}
                <div style={{ background: '#E9E8E4', border: '1px solid #EAE6DF', padding: '1.25rem', marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>Atelier Commission Tier</span>
                    <strong style={{ fontSize: '1.15rem', color: '#141310' }}>From ₹88,000 / £850</strong>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#4A463F', lineHeight: 1.55, margin: 0 }}>
                    Strictly limited to 18 volumes per calendar month. Includes bespoke brass tooling die fabrication, full heirloom teakwood archival case, and archival cotton handling gloves.
                  </p>
                </div>

                {/* Key Craft Attributes Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '2rem' }}>
                  <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '1rem' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', display: 'block' }}>Leather Origin</span>
                    <strong style={{ fontSize: '0.88rem', color: '#141310', display: 'block', margin: '0.2rem 0' }}>Santa Croce sull’Arno, Italy</strong>
                    <span style={{ fontSize: '0.72rem', color: '#635E52' }}>Full-grain vegetable-tanned</span>
                  </div>

                  <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '1rem' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', display: 'block' }}>Paper Substrate</span>
                    <strong style={{ fontSize: '0.88rem', color: '#141310', display: 'block', margin: '0.2rem 0' }}>Hahnemühle Photo Rag</strong>
                    <span style={{ fontSize: '0.72rem', color: '#635E52' }}>100% cotton 308 gsm</span>
                  </div>

                  <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '1rem' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', display: 'block' }}>Edge Treatment</span>
                    <strong style={{ fontSize: '0.88rem', color: '#141310', display: 'block', margin: '0.2rem 0' }}>24K Gold Leaf</strong>
                    <span style={{ fontSize: '0.72rem', color: '#635E52' }}>Hand-burnished or deckled</span>
                  </div>

                  <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '1rem' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', display: 'block' }}>Spine Construction</span>
                    <strong style={{ fontSize: '0.88rem', color: '#141310', display: 'block', margin: '0.2rem 0' }}>5 French Raised Hubs</strong>
                    <span style={{ fontSize: '0.72rem', color: '#635E52' }}>Hand-formed cord ribbing</span>
                  </div>
                </div>

                {/* Sizing Selector */}
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#141310', marginBottom: '0.65rem' }}>
                    Curated Dimensions (Standard Heirloom Scales)
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                    {[
                      { id: '14x18', name: '14" × 18" Imperial' },
                      { id: '12x16', name: '12" × 16" Royal' },
                      { id: '12x12', name: '12" × 12" Square' }
                    ].map((sz) => (
                      <button
                        key={sz.id}
                        type="button"
                        onClick={() => setSelectedSize(sz.id)}
                        style={{
                          padding: '0.85rem 0.5rem',
                          background: selectedSize === sz.id ? '#141310' : '#F4F4F0',
                          color: selectedSize === sz.id ? '#FFFFFF' : '#141310',
                          border: '1px solid',
                          borderColor: selectedSize === sz.id ? '#141310' : '#EAE6DF',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        {sz.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
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
                    <span>Commission An Heirloom</span>
                    <ArrowRight size={14} />
                  </button>

                  <a
                    href="tel:+919322254315"
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
                    <Phone size={14} />
                    <span>Private Atelier Call</span>
                  </a>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* Materiality & Origin Stories (3 Columns) */}
      <section style={{ backgroundColor: '#F4F4F0', padding: 'clamp(3rem, 6vw, 5.5rem) 0', borderBottom: '1px solid #EAE6DF' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <RevealOnScroll direction="up">
            <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
              <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.5rem' }}>
                Provenance & Materiality
              </span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', fontWeight: 400, color: '#141310', margin: 0 }}>
                The Anatomy of an Heirloom
              </h2>
            </div>
          </RevealOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '2rem' }}>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>Element 01</span>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#141310', margin: '0.5rem 0 0.75rem 0', fontWeight: 500 }}>
                Full-Grain Tuscan Calfskin
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#4A463F', lineHeight: 1.6, margin: 0 }}>
                Sourced from the historic tanneries of Santa Croce sull'Arno. Naturally pit-tanned using organic chestnut and mimosa barks for 60 days, yielding a soft buttery patina that richens with touch across generations.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '2rem' }}>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>Element 02</span>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#141310', margin: '0.5rem 0 0.75rem 0', fontWeight: 500 }}>
                24K Hand-Burnished Gold Leaf
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#4A463F', lineHeight: 1.6, margin: 0 }}>
                Individual sheets of genuine champagne gold leaf are meticulously applied to the deckled edges of the cotton book block and hand-burnished with agate stones to create an impenetrable atmospheric barrier.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '2rem' }}>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>Element 03</span>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#141310', margin: '0.5rem 0 0.75rem 0', fontWeight: 500 }}>
                Seasoned Teak Archival Chest
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#4A463F', lineHeight: 1.6, margin: 0 }}>
                Each volume is cradled inside a solid Burma Teak or American Walnut presentation chest with mortise-and-tenon finger joinery, soft-close brass hinges, and a plush emerald velvet lining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke Call to Action */}
      <section style={{ backgroundColor: '#292724', color: '#FAF9F5', padding: 'clamp(3rem, 6vw, 5.5rem) 0', textAlign: 'center' }}>
        <div className="section-container" style={{ maxWidth: '820px', margin: '0 auto', padding: '0 2rem' }}>
          <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#CDC6B7', display: 'block', marginBottom: '0.5rem' }}>
            Private Commission
          </span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF', margin: '0 0 1rem 0', fontWeight: 400 }}>
            Reserve Your Heirloom Tome Commission
          </h2>
          <p style={{ fontSize: '1rem', color: '#CBC6C1', lineHeight: 1.65, marginBottom: '2rem' }}>
            Due to the rigorous hand-tooling and 60-day leather seasoning process, our Mumbai atelier accepts a maximum of 18 Luxury Heirloom commissions each calendar month.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={handleEnquire}
              style={{
                background: '#FAF9F5',
                color: '#141310',
                border: 'none',
                padding: '1.15rem 2.25rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              Begin Commission Enquiry
            </button>
            <a
              href="https://wa.me/919322254315?text=Hello%20Ultraa%20Albums%2C%20I%20would%20like%20to%20inquire%20about%20a%20Luxury%20Heirloom%20Album%20commission."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'transparent',
                color: '#FAF9F5',
                border: '1px solid #CDC6B7',
                padding: '1.15rem 2rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                textDecoration: 'none'
              }}
            >
              Speak with Master Binder
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
