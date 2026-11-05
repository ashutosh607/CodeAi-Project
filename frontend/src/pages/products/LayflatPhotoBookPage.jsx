import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RevealOnScroll from '../../components/motion/RevealOnScroll';
import TextReveal from '../../components/motion/TextReveal';
import { 
  ChevronRight, 
  ShieldCheck, 
  ArrowRight, 
  Layers, 
  BookOpen, 
  Sparkles, 
  Phone, 
  Percent, 
  Palette, 
  Truck
} from 'lucide-react';

export default function LayflatPhotoBookPage() {
  const navigate = useNavigate();

  // Gallery state
  const galleryImages = [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_7NnZZkKspRBa13ccO5fJ8usBmOr3FYTcsWneA7j-6L0tMJENL7nJOGIH7kC9uZ2h8Tp1WGaBr6xiBSo4D-St1OJXkneGPPzhp11uDH1egJMi8uX1169jOjMV9pdB3SYp4mUi2X1s1kfCBcG-U7W3ntUnlj6EFtQ8gy7qpBuIvmMSaOu5IatHnBnW0ungho5GNcLgrGkFInqYem6UikkXoY0kwACrZzk3HG9D5mBk',
      label: 'Open Spread',
      desc: '180° seamless panoramic center fold with no gutter cuts on warm sandstone surface'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2ynLgq-GuYHgMseWwiAshhWT6FPkV-DAFTLlGWi_e9fLk5hFmmX_H6_GX3M8IuSCpSH6ujpcbPu0em-yvdtD5sOFCoI5LJGaCpwnuZ-rMfz3QiJvXCiIqnUuyWgmH4E9H-Yd0edYzSCZe6CHhzouiYmLk5356o8JH5veKeArTrd5VT9d3ZAOQBY7o8z2ch_MNJdqAgLi5hxoGu24QavyN4_2Ly-xmxcrhR2t-Ihdw',
      label: 'Flexible Sheet',
      desc: 'Detailed macro view showing flexible archival paper edge with 280gsm Hahnemühle photo rag'
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACeuVcQfjoPhDMq64r2AukTvrw-KRhFD5gU_OZTpmMvcdFMx937qEyVCyFaX4crXE3DZZkb_ARWRNzeC9L6z745QEcPqhtJrMfBwNZZ9edhK9_cJZFoRl-Uy7t8Pr4rRbP2bAB2W_yJ7FUGHdX-fc4z58Idz-5BUs1VJliEeRQJHXu04kQVeEbT7O1uh1-etnckEt_U6gFufUEYnNICEALDAsdXlcZw3pTU6Frskmy',
      label: 'Cover Treatments',
      desc: 'Belgian open-weave linens and Japanese softcover options stacked in Mumbai atelier'
    }
  ];

  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Configurator state
  const [selectedFormat, setSelectedFormat] = useState('10x14');
  const [selectedPaper, setSelectedPaper] = useState('hahnemuhle');
  const [spreadCount, setSpreadCount] = useState(30);
  const [selectedCover, setSelectedCover] = useState('hardcover');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Price Calculation logic
  const calculateTotal = () => {
    let base = 12000;
    if (selectedFormat === '10x14') base += 2500;
    if (selectedFormat === '11x11') base += 2000;
    if (selectedFormat === '8.5x11') base += 1200;
    if (selectedFormat === '8x8') base += 0;

    let paperCostPerSpread = 160;
    if (selectedPaper === 'hahnemuhle') paperCostPerSpread = 220;
    if (selectedPaper === 'matte') paperCostPerSpread = 180;
    if (selectedPaper === 'lustre') paperCostPerSpread = 140;

    let coverSurcharge = 0;
    if (selectedCover === 'acrylic') coverSurcharge = 3500;
    if (selectedCover === 'washi') coverSurcharge = 1200;

    const extraSpreads = Math.max(0, spreadCount - 20);
    return base + coverSurcharge + (extraSpreads * paperCostPerSpread);
  };

  const handleEnquire = () => {
    navigate(`/enquire?product=${encodeURIComponent('Layflat Photo Book')}`);
  };

  return (
    <div className="layflat-product-page" style={{ backgroundColor: 'var(--color-surface, #FAF9F5)', color: '#141310' }}>
      {/* Top Breadcrumb & Category Bar */}
      <section style={{ backgroundColor: '#F4F4F0', borderBottom: '1px solid #EAE6DF', padding: '0.85rem 0' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: '#635E52' }}>
            <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Albums</Link>
            <span style={{ color: '#CCC5BC' }}>/</span>
            <span>Contemporary Books</span>
            <span style={{ color: '#CCC5BC' }}>/</span>
            <span style={{ color: '#141310', fontWeight: 600 }}>Layflat Photo Book</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#EFEEEA', padding: '0.3rem 0.85rem', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#635E52' }}></span>
            <span>Flexible Archival Spreads • 180° Flat Opening • Hahnemühle & Fine Art Paper</span>
          </div>
        </div>
      </section>

      {/* Product Hero Showcase */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem) 0', borderBottom: '1px solid #EAE6DF' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(1.5rem, 3vw, 3rem)', alignItems: 'start' }}>
            
            {/* Left 7 Cols: Image Gallery */}
            <RevealOnScroll direction="left" style={{ gridColumn: 'span 12' }} className="pay-col-left">
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/11', background: '#EFEEEA', overflow: 'hidden', border: '1px solid #EAE6DF', marginBottom: '1rem' }}>
                <img
                  src={galleryImages[activeImgIndex].src}
                  alt={galleryImages[activeImgIndex].label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.4s ease' }}
                />
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(250, 249, 245, 0.92)', backdropFilter: 'blur(4px)', padding: '0.35rem 0.85rem', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#141310' }}>
                  Specimen No. LB-180
                </div>
                <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: '#141310', color: '#FFFFFF', padding: '0.4rem 0.9rem', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  180° Seamless French Hinge
                </div>
              </div>

              {/* Thumbnails */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
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
                      position: 'relative',
                      overflow: 'hidden',
                      opacity: activeImgIndex === idx ? 1 : 0.75,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <img src={img.src} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', bottom: '0.4rem', left: '0.4rem', background: 'rgba(250, 249, 245, 0.9)', padding: '0.15rem 0.45rem', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#141310' }}>
                      {img.label}
                    </span>
                  </button>
                ))}
              </div>
            </RevealOnScroll>

            {/* Right 5 Cols: Dossier & Specifications */}
            <RevealOnScroll direction="right" style={{ gridColumn: 'span 12' }} className="pay-col-right">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52' }}>
                    Contemporary Bookbinding Line
                  </span>
                  <span style={{ width: '24px', height: '1px', background: '#CCC5BC' }}></span>
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#99948B' }}>
                    Atelier Mumbai
                  </span>
                </div>

                <TextReveal
                  as="h1"
                  delay={0.08}
                  style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 3.8vw, 3.25rem)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.01em', margin: '0 0 0.5rem 0', color: '#141310' }}
                >
                  Layflat Photo Book
                </TextReveal>

                <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.25rem', color: '#635E52', margin: '0 0 1.5rem 0' }}>
                  Modern Editorial Elegance
                </p>

                <p style={{ fontSize: '0.95rem', color: '#4A463F', lineHeight: 1.68, marginBottom: '2rem' }}>
                  Engineered for contemporary editorial destination weddings, fine-art portraiture, and narrative love stories. Unlike heavy rigid mount boards, our Layflat Book pairs lighter, flexible archival cotton and lustre sheets with an ultra-thin polymer hinge—allowing up to 160 pages to open completely flat across panoramic spreads without cutting through intimate imagery.
                </p>

                {/* Specs Grid */}
                <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', borderBottom: '1px solid #EAE6DF', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>Paper Caliber</span>
                      <strong style={{ display: 'block', fontSize: '1.05rem', color: '#141310', margin: '0.25rem 0' }}>250 – 300 gsm</strong>
                      <span style={{ fontSize: '0.75rem', color: '#635E52' }}>Archival Cotton Matte / Lustre</span>
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>Volume Capacity</span>
                      <strong style={{ display: 'block', fontSize: '1.05rem', color: '#141310', margin: '0.25rem 0' }}>20 to 80 Spreads</strong>
                      <span style={{ fontSize: '0.75rem', color: '#635E52' }}>40 to 160 Curated Pages</span>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>Opening Mechanism</span>
                      <span style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#141310', marginTop: '0.2rem' }}>True 180° Flat Crease</span>
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>Ideal Purpose</span>
                      <span style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#141310', marginTop: '0.2rem' }}>Editorial, Boudoir, Parents</span>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
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
                      cursor: 'pointer',
                      transition: 'background 0.2s ease'
                    }}
                  >
                    Customise Book Spec
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
                    Price Estimator ↓
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#635E52' }}>
                  <ShieldCheck size={15} color="#141310" />
                  <span>Archival ISO 9706 Certified • Acid-free 200+ Year Longevity</span>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* Section 2: Distinctive Advantages vs Rigid Flush Mount */}
      <section style={{ backgroundColor: '#F4F4F0', padding: 'clamp(3rem, 6vw, 5.5rem) 0', borderBottom: '1px solid #EAE6DF' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <RevealOnScroll direction="up">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
              <div style={{ maxWidth: '680px' }}>
                <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.5rem' }}>
                  Architectural Balance
                </span>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', fontWeight: 400, color: '#141310', margin: 0 }}>
                  The Flexible Layflat vs. Rigid Flush Mount
                </h2>
              </div>
              <p style={{ maxWidth: '440px', fontSize: '0.92rem', color: '#4A463F', lineHeight: 1.6, margin: 0 }}>
                While traditional flush mounts feature thick substrate cores, Ultraa's Layflat format reimagines the coffee-table narrative for high page count storytelling.
              </p>
            </div>
          </RevealOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Card 1 */}
            <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
                  <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', color: '#635E52' }}>01</span>
                  <BookOpen size={24} color="#141310" />
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#141310', margin: '0 0 0.85rem 0', fontWeight: 500 }}>
                  Lightweight Versatility
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#4A463F', lineHeight: 1.65, margin: 0 }}>
                  Thinner 250–300gsm fine-art sheets allow up to 160 pages in a single bespoke volume. Document the whole day—from morning hair styling to late-night fireworks—without back-breaking book bulk or strained spines.
                </p>
              </div>
              <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #EAE6DF', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52' }}>
                Up to 80 Spreads (160 Pages)
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
                  <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', color: '#635E52' }}>02</span>
                  <Layers size={24} color="#141310" />
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#141310', margin: '0 0 0.85rem 0', fontWeight: 500 }}>
                  180° Unhindered Opening
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#4A463F', lineHeight: 1.65, margin: 0 }}>
                  Our specialized micro-hinge allows pages to fall open completely flat. Horizon lines, group ceremony shots, and wide architecture effortlessly span across left and right leaves with zero text or subject lost to gutter clipping.
                </p>
              </div>
              <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #EAE6DF', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52' }}>
                Zero-Loss Micro Crease
              </div>
            </div>

            {/* Card 3 */}
            <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
                  <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', color: '#635E52' }}>03</span>
                  <Sparkles size={24} color="#141310" />
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#141310', margin: '0 0 0.85rem 0', fontWeight: 500 }}>
                  Tactile Fine-Art Textures
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#4A463F', lineHeight: 1.65, margin: 0 }}>
                  Engineered exclusively for genuine cotton rag and pearl lustre media. Turn pages that feel like an editorial gallery print in hand—softly responsive, rich micro-texture, and zero glossy glare under harsh indoor chandeliers.
                </p>
              </div>
              <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #EAE6DF', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52' }}>
                Hahnemühle & Fine Cotton
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Cover Styles & Fabric Swatches */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5.5rem) 0', borderBottom: '1px solid #EAE6DF' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
            <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.5rem' }}>
              Tactile Encasement
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', fontWeight: 400, color: '#141310', margin: '0 0 0.85rem 0' }}>
              Contemporary Cover Treatments
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#4A463F', lineHeight: 1.6, margin: 0 }}>
              Select between structural hardcovers wrapped in European open-weave linens or minimalist flexible softcovers with Japanese origami flaps.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {/* Style 1 */}
            <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '1.75rem' }}>
              <div style={{ aspectRatio: '4/3', background: '#EFEEEA', overflow: 'hidden', marginBottom: '1.25rem' }}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8G9gVQNJZf8-p_rxsSTRxPymEtvcEHt0_uBoMy7nvgpGJk_apHu3F73TvOOz2HJBwZ3KE1-9XZ94LbDVPhHdpDQs4DMERq2y_DQedqbDXdXSK_2xYyAva50dcseFagYXjHpQothyOzrlgOm_cFxrRHNIGvKgNw39__2pUEdkqQKAGSnIyp8-RKb8yON_yLRNvKK8uT5Ap8p9zYMIburamDs0yGaQ97ArTJl9yceeA"
                  alt="Hardcover Linen Wrap"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>Option 01</span>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#141310', margin: '0.35rem 0 0.65rem 0', fontWeight: 500 }}>
                Hardcover Linen Wrap
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#4A463F', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Structural book board wrapped in 100% Belgian unbleached linen with optional hand-rubbed debossing or foil titling.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#635E52' }}>Tones:</span>
                <span style={{ width: '18px', height: '18px', background: '#E3D9C6', border: '1px solid #141310' }} title="Flax"></span>
                <span style={{ width: '18px', height: '18px', background: '#A85B48' }} title="Terracotta"></span>
                <span style={{ width: '18px', height: '18px', background: '#686953' }} title="Olive"></span>
                <span style={{ width: '18px', height: '18px', background: '#2A2927' }} title="Charcoal"></span>
              </div>
            </div>

            {/* Style 2 */}
            <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '1.75rem' }}>
              <div style={{ aspectRatio: '4/3', background: '#EFEEEA', overflow: 'hidden', marginBottom: '1.25rem' }}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3OkxYrr96FVztFEo8GkH_1hHNldY2lrU12YBKrgE21-0Raspgjp0HcHBSS7ME5wQMSmoh-otyZ7KQrDOBvOPawjWJJ65a4Lp6OTrKiR5rYjDe2VekvkwjWKV2RecGk310X2KregyHj0Rh1S16MrJyuZuVYANp2Yii_qkGybIJMtAG8iNPh-xBMr8OUTARWLlOQ4b9kyUly960MVZ8X2GSS30HuFBXVpN7q3FVaVpf"
                  alt="Softcover Washi French Flap"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>Option 02</span>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#141310', margin: '0.35rem 0 0.65rem 0', fontWeight: 500 }}>
                Softcover Washi French Flap
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#4A463F', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Flexible, contemporary paperback silhouette with Japanese mulberry washi stock and extended French folding dust-cover flaps.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#635E52' }}>Tones:</span>
                <span style={{ width: '18px', height: '18px', background: '#F4F1EA', border: '1px solid #141310' }} title="Bone Washi"></span>
                <span style={{ width: '18px', height: '18px', background: '#C9BEB1' }} title="Smoked Tea"></span>
                <span style={{ width: '18px', height: '18px', background: '#3D3A37' }} title="Sumi Ink"></span>
              </div>
            </div>

            {/* Style 3 */}
            <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '1.75rem' }}>
              <div style={{ aspectRatio: '4/3', background: '#EFEEEA', overflow: 'hidden', marginBottom: '1.25rem' }}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdxFw3xIGlqf7xalR0cTZs7QgwnKMmJZFipAzZxsm7KV_glEAfgtubIQMXbCeqw-dOARibDfa8SreyxurYWaLvRSun6TC2muZ6YB8TwqIK5EORZsFqCyjIdLeskmF5Evqre4MCt7HBwpZSiAWKNKlqA_sEcJLU_KJmIoch5krtPRokKseD8ZNOMh5q-8NNj3A7QnRDx6V5MgYv5WwvCxlI5qlomOfoYJ_pWO2nYubH"
                  alt="Acrylic Face & Leather Spine"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>Option 03</span>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#141310', margin: '0.35rem 0 0.65rem 0', fontWeight: 500 }}>
                Acrylic Face & Leather Spine
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#4A463F', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Beveled optical acrylic front cover holding your panoramic cover portrait, seamless with Italian full-grain leather quarter binding.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#635E52' }}>Tones:</span>
                <span style={{ width: '18px', height: '18px', background: '#824D28', border: '1px solid #141310' }} title="Cognac Leather"></span>
                <span style={{ width: '18px', height: '18px', background: '#1A1918' }} title="Noir Calfskin"></span>
                <span style={{ width: '18px', height: '18px', background: '#EAE7DC' }} title="Alabaster"></span>
              </div>
            </div>
          </div>

          {/* Finishing Artistry Row */}
          <div style={{ background: '#EFEEEA', border: '1px solid #EAE6DF', padding: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>Finishing Artistry</span>
                <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#141310', margin: '0.35rem 0 0.5rem 0', fontWeight: 500 }}>
                  Cover Typographic Imprints
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#4A463F', lineHeight: 1.6, margin: 0 }}>
                  Every monograph can be bespoke debossed in our Mumbai atelier with custom couple monograms, coordinates, or minimalist typography.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                <div style={{ background: '#FFFFFF', padding: '1rem', border: '1px solid #EAE6DF' }}>
                  <strong style={{ display: 'block', fontSize: '0.88rem', color: '#141310', marginBottom: '0.25rem' }}>Blind Letterpress</strong>
                  <span style={{ fontSize: '0.78rem', color: '#635E52', lineHeight: 1.4, display: 'block' }}>Deep sculptural deboss without ink for subtle shadows.</span>
                </div>
                <div style={{ background: '#FFFFFF', padding: '1rem', border: '1px solid #EAE6DF' }}>
                  <strong style={{ display: 'block', fontSize: '0.88rem', color: '#141310', marginBottom: '0.25rem' }}>Foil Titling</strong>
                  <span style={{ fontSize: '0.78rem', color: '#635E52', lineHeight: 1.4, display: 'block' }}>Matte Copper, Warm Gold, or Gunmetal heat-pressed foil.</span>
                </div>
                <div style={{ background: '#FFFFFF', padding: '1rem', border: '1px solid #EAE6DF' }}>
                  <strong style={{ display: 'block', fontSize: '0.88rem', color: '#141310', marginBottom: '0.25rem' }}>Raised UV Spot Gloss</strong>
                  <span style={{ fontSize: '0.78rem', color: '#635E52', lineHeight: 1.4, display: 'block' }}>Tactile glossy varnish on washi and linen softcovers.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Sizing & Format Guide */}
      <section style={{ backgroundColor: '#F4F4F0', padding: 'clamp(3rem, 6vw, 5.5rem) 0', borderBottom: '1px solid #EAE6DF' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
            <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.5rem' }}>
              Architectural Proportions
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', fontWeight: 400, color: '#141310', margin: '0 0 0.85rem 0' }}>
              Curated Dimensions & Formats
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#4A463F', lineHeight: 1.6, margin: 0 }}>
              Calibrated to celebrate wide landscape spreads, intimate bridal portraits, and convenient companion parent tomes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { dim: '10" × 14"', spread: 'Panoramic: 10" × 28"', type: 'Landscape', name: 'Horizontal Landscape', desc: 'The flagship choice for dramatic destination ceremonies, coastal scenes, and wide architectural venues.', start: 'Starts at 30 Spreads' },
              { dim: '11" × 11"', spread: 'Panoramic: 11" × 22"', type: 'Square', name: 'Fine-Art Square', desc: 'Balanced, timeless geometry suited for varied editorial grid arrangements combining portrait and horizontal shots.', start: 'Starts at 25 Spreads' },
              { dim: '8.5" × 11"', spread: 'Panoramic: 17" × 11"', type: 'Portrait', name: 'Vertical Portrait', desc: 'Fashion-forward magazine aesthetic. Ideal for high-end bridal couture, boudoir, and formal portrait series.', start: 'Starts at 20 Spreads' },
              { dim: '8" × 8"', spread: 'Panoramic: 8" × 16"', type: 'Companion', name: 'Guest / Parent Edition', desc: 'Lightweight keepsake duplicate scale for parents, bridal parties, or reception guest sign-in volumes.', start: 'Starts at 20 Spreads' }
            ].map((fmt, i) => (
              <div key={i} style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ aspectRatio: '16/10', background: '#F4F4F0', border: '1px dashed #CCC5BC', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', fontWeight: 600, color: '#141310' }}>{fmt.dim}</span>
                    <span style={{ fontSize: '0.65rem', color: '#635E52', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.25rem' }}>{fmt.spread}</span>
                  </div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>{fmt.type}</span>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#141310', margin: '0.25rem 0 0.5rem 0', fontWeight: 500 }}>{fmt.name}</h3>
                  <p style={{ fontSize: '0.82rem', color: '#4A463F', lineHeight: 1.55, margin: 0 }}>{fmt.desc}</p>
                </div>
                <div style={{ marginTop: '1.5rem', paddingTop: '0.85rem', borderTop: '1px solid #EAE6DF', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#141310' }}>
                  {fmt.start}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Configurator Anchor Section */}
      <section id="configurator" style={{ padding: 'clamp(3rem, 6vw, 5.5rem) 0', borderBottom: '1px solid #EAE6DF' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(1.5rem, 3vw, 3rem)' }}>
              
              {/* Left 5 Cols: Configurator Summary */}
              <div style={{ gridColumn: 'span 12', '@media(min-width: 992px)': { gridColumn: 'span 5' } }} className="pay-col-left">
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#635E52', display: 'block', marginBottom: '0.5rem' }}>
                  Atelier Estimator
                </span>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.25rem', color: '#141310', margin: '0 0 1rem 0', fontWeight: 400 }}>
                  Configure Your Layflat Spec
                </h2>
                <p style={{ fontSize: '0.92rem', color: '#4A463F', lineHeight: 1.65, marginBottom: '2rem' }}>
                  Estimate wholesale studio rates based on format, paper stock, and spread count. For custom sizing or volume tier pricing, our liaison team provides custom quotes within 12 hours.
                </p>

                <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '1.25rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#635E52' }}>Binding Type:</span>
                    <strong style={{ color: '#141310' }}>Ultraa Micro-Hinge Layflat</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#635E52' }}>Print Tech:</span>
                    <strong style={{ color: '#141310' }}>12-Color Archival Pigment</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#635E52' }}>Turnaround:</span>
                    <strong style={{ color: '#141310' }}>7–10 Business Days Production</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#635E52' }}>Global Logistics:</span>
                    <strong style={{ color: '#141310' }}>Express Courier via DHL / FedEx</strong>
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
                    <span style={{ fontSize: '0.8rem', color: '#635E52' }}>/ ₹175 per add'l spread</span>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: '#635E52', display: 'block' }}>
                    Exclusive of GST & International Air Freight
                  </span>
                </div>
              </div>

              {/* Right 7 Cols: Interactive Form */}
              <div style={{ gridColumn: 'span 12', '@media(min-width: 992px)': { gridColumn: 'span 7' } }} className="pay-col-right">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                  
                  {/* Step 1: Format */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#141310', marginBottom: '0.75rem' }}>
                      1. Select Format & Proportion
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '0.5rem' }}>
                      {[
                        { id: '10x14', name: '10" × 14"', sub: 'Landscape' },
                        { id: '11x11', name: '11" × 11"', sub: 'Square' },
                        { id: '8.5x11', name: '8.5" × 11"', sub: 'Portrait' },
                        { id: '8x8', name: '8" × 8"', sub: 'Companion' }
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
                      2. Archival Paper Substrate
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.5rem' }}>
                      {[
                        { id: 'hahnemuhle', name: 'Hahnemühle Rag', sub: '308gsm 100% Cotton' },
                        { id: 'matte', name: 'Fine Art Velvet', sub: '260gsm Smooth Matte' },
                        { id: 'lustre', name: 'Pearl Lustre', sub: '270gsm Micro-Porous' }
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
                        3. Spread Count (Pages)
                      </label>
                      <strong style={{ fontSize: '1rem', color: '#141310' }}>
                        {spreadCount} Spreads ({spreadCount * 2} Pages)
                      </strong>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="80"
                      step="5"
                      value={spreadCount}
                      onChange={(e) => setSpreadCount(parseInt(e.target.value, 10))}
                      style={{ width: '100%', cursor: 'pointer', accentColor: '#141310' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#635E52', marginTop: '0.35rem' }}>
                      <span>20 Spreads (40p)</span>
                      <span>50 Spreads (100p)</span>
                      <span>80 Spreads (160p Max)</span>
                    </div>
                  </div>

                  {/* Step 4: Cover */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#141310', marginBottom: '0.75rem' }}>
                      4. Cover Encasement
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.5rem' }}>
                      {[
                        { id: 'hardcover', name: 'Belgian Linen Hardcover' },
                        { id: 'washi', name: 'Softcover Washi Flap' },
                        { id: 'acrylic', name: 'Acrylic & Leather Spine' }
                      ].map((cov) => (
                        <button
                          key={cov.id}
                          type="button"
                          onClick={() => setSelectedCover(cov.id)}
                          style={{
                            padding: '0.85rem 0.75rem',
                            textAlign: 'left',
                            background: selectedCover === cov.id ? '#141310' : '#F4F4F0',
                            color: selectedCover === cov.id ? '#FFFFFF' : '#141310',
                            border: '1px solid',
                            borderColor: selectedCover === cov.id ? '#141310' : '#EAE6DF',
                            cursor: 'pointer',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            transition: 'all 0.15s ease'
                          }}
                        >
                          {cov.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action row */}
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
                      <span>Order Studio Proof / Specimen</span>
                      <ArrowRight size={14} />
                    </button>

                    <a
                      href="https://wa.me/919322254315?text=Hello%20Ultraa%20Albums%2C%20I%20would%20like%20to%20order%20a%20Layflat%20Photo%20Book%20sample."
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
                      <span>WhatsApp Atelier</span>
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Photographer Partnership Perks */}
      <section style={{ backgroundColor: '#292724', color: '#FAF9F5', padding: 'clamp(3rem, 6vw, 5.5rem) 0' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
            <span style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#CDC6B7', marginBottom: '0.5rem' }}>
              Professional Partnership
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', fontWeight: 400, color: '#FFFFFF', margin: '0 0 0.85rem 0' }}>
              Dedicated Support for Wedding Photographers
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#CBC6C1', lineHeight: 1.6, margin: 0 }}>
              Ultraa Albums serves as the silent production wing behind international editorial photographers. We make your client album deliveries seamless and prestigious.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '2rem' }}>
              <Percent size={32} color="#CDC6B7" style={{ marginBottom: '1.25rem' }} />
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#FFFFFF', margin: '0 0 0.75rem 0', fontWeight: 500 }}>
                50% Studio Sample Discount
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#CBC6C1', lineHeight: 1.6, margin: 0 }}>
                Order tangible client display specimens for your consultation studio at half our regular atelier rate, etched with bespoke studio branding.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '2rem' }}>
              <Palette size={32} color="#CDC6B7" style={{ marginBottom: '1.25rem' }} />
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#FFFFFF', margin: '0 0 0.75rem 0', fontWeight: 500 }}>
                Automated ICC Soft-Proofing
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#CBC6C1', lineHeight: 1.6, margin: 0 }}>
                Download our calibrated Photoshop / Lightroom ICC color profiles tailored to our 12-color pigment printers for 100% predictable skin tones.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '2rem' }}>
              <Truck size={32} color="#CDC6B7" style={{ marginBottom: '1.25rem' }} />
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#FFFFFF', margin: '0 0 0.75rem 0', fontWeight: 500 }}>
                White-Label Worldwide Delivery
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#CBC6C1', lineHeight: 1.6, margin: 0 }}>
                Unbranded cotton dustbags, bespoke black archival boxes, and custom photographer note cards delivered directly to your couple anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: FAQs */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5.5rem) 0', borderBottom: '1px solid #EAE6DF' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(1.5rem, 3vw, 3rem)' }}>
            <div style={{ gridColumn: 'span 12', '@media(min-width: 992px)': { gridColumn: 'span 4' } }} className="pay-col-left">
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#635E52', display: 'block', marginBottom: '0.5rem' }}>
                Technical Guidance
              </span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.25rem', color: '#141310', margin: '0 0 1rem 0', fontWeight: 400 }}>
                Frequently Asked Questions
              </h2>
              <p style={{ fontSize: '0.92rem', color: '#4A463F', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Detailed insight into our bookbinding chemistry, page limits, color spaces, and delivery timelines.
              </p>
              <Link to="/resources/faq" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#141310', textDecoration: 'none' }}>
                <span>Read All Technical Specs</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div style={{ gridColumn: 'span 12', '@media(min-width: 992px)': { gridColumn: 'span 8' } }} className="pay-col-right">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  {
                    q: 'What is the maximum page and spread limit for the Layflat Book?',
                    a: 'Our flexible layflat binding comfortably accommodates up to 80 spreads (160 pages). Unlike rigid flush-mount albums which cap out around 35-40 spreads due to spine thickness, the flexible 250-300gsm sheets retain a slender, sophisticated spine profile even at high page counts.'
                  },
                  {
                    q: 'What are the practical differences between Hahnemühle Rag and Pearl Lustre?',
                    a: 'Hahnemühle 100% Cotton Rag delivers zero reflection, velvety matte blacks, and an organic tactile surface favored by fine-art film photographers. Pearl Lustre features a micro-porous sheen that brings punchier saturation and high dynamic contrast to vibrant outdoor sunset imagery.'
                  },
                  {
                    q: 'How does the 50% Studio Sample discount work for photographers?',
                    a: 'Registered photographers can order up to 3 discounted display books per calendar year. Sample books are discreetly debossed on the final spread with "Studio Specimen" and provide an invaluable tactile tool for in-person couple consultations.'
                  },
                  {
                    q: 'Can we soft-proof before final print submission?',
                    a: 'Yes. Upon registering on our Client Portal, you receive downloadable ICC profiles for each paper stock. Furthermore, our Mumbai lab color masters execute complementary manual density checks to ensure shadow tones and skin highlights render cleanly.'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '1.5rem' }}
                  >
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#141310', margin: '0 0 0.5rem 0', fontWeight: 500 }}>
                      {item.q}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#4A463F', lineHeight: 1.65, margin: 0 }}>
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Final Bespoke CTA */}
      <section style={{ backgroundColor: '#E9E8E4', padding: 'clamp(3rem, 6vw, 5rem) 0', textAlign: 'center' }}>
        <div className="section-container" style={{ maxWidth: '820px', margin: '0 auto', padding: '0 2rem' }}>
          <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52', display: 'block', marginBottom: '0.5rem' }}>
            Begin Your Commission
          </span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#141310', margin: '0 0 1rem 0', fontWeight: 400 }}>
            Create Your Studio Layflat Sample Today
          </h2>
          <p style={{ fontSize: '1rem', color: '#4A463F', lineHeight: 1.65, marginBottom: '2rem' }}>
            Experience the tactile weight of genuine Hahnemühle fine-art sheets and Belgian linens in your own hands. Order our complete swatch box or consult directly with our Mumbai master bookbinders.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={handleEnquire}
              style={{
                background: '#141310',
                color: '#FFFFFF',
                border: 'none',
                padding: '1.15rem 2rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              Configure Book Now
            </button>
            <a
              href="tel:+919322254315"
              style={{
                background: '#FAF9F5',
                color: '#141310',
                border: '1px solid #EAE6DF',
                padding: '1.15rem 2rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Phone size={15} />
              <span>+91 93222 54315</span>
            </a>
          </div>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#635E52' }}>
            <span>• Mumbai Atelier Visits by Appointment</span>
            <span>• Priority Dispatch to UK & Europe</span>
            <span>• Dedicated WhatsApp Liaison</span>
          </div>
        </div>
      </section>
    </div>
  );
}
