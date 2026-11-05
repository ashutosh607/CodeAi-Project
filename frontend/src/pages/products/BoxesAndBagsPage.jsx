import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RevealOnScroll from '../../components/motion/RevealOnScroll';
import TextReveal from '../../components/motion/TextReveal';
import { 
  ChevronRight, 
  ShieldCheck, 
  ArrowRight, 
  Package, 
  Layers, 
  Sparkles, 
  Phone, 
  Check, 
  Lock, 
  Box
} from 'lucide-react';

export default function BoxesAndBagsPage() {
  const navigate = useNavigate();


  const handleEnquire = () => {
    navigate(`/enquire?product=${encodeURIComponent('Presentation Boxes & Keepsake Enclosures')}`);
  };

  return (
    <div className="boxes-bags-product-page" style={{ backgroundColor: 'var(--color-surface, #FAF9F5)', color: '#141310' }}>
      {/* Top Breadcrumb Bar */}
      <section style={{ backgroundColor: '#F4F4F0', borderBottom: '1px solid #EAE6DF', padding: '0.85rem 0' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: '#635E52' }}>
            <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Albums</Link>
            <span style={{ color: '#CCC5BC' }}>/</span>
            <span>Preservation Sanctuaries</span>
            <span style={{ color: '#CCC5BC' }}>/</span>
            <span style={{ color: '#141310', fontWeight: 600 }}>Presentation Boxes & Keepsake Enclosures</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#EFEEEA', padding: '0.3rem 0.85rem', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#635E52' }}></span>
            <span>Seasoned Hardwood Chests • 1800gsm Solander Clamshells • French Velvet Interiors</span>
          </div>
        </div>
      </section>

      {/* UK Studio Regional Switcher */}
      <div style={{ backgroundColor: '#EAE2D2', borderBottom: '1px solid #EAE6DF', padding: '0.45rem 2rem', textAlign: 'center', fontSize: '0.75rem', color: '#4A463F' }}>
        <span>Delivering bespoke packaging to UK studios? </span>
        <Link to="/for-uk/box-and-bags-uk" style={{ fontWeight: 600, color: '#141310', textDecoration: 'underline' }}>
          Explore UK Enclosure Archetypes &amp; Royal Mail Tracked Swatch Kit →
        </Link>
      </div>

      {/* Editorial Product Showcase Header */}
      <section style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem) 0', borderBottom: '1px solid #EAE6DF' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(1.5rem, 3vw, 3rem)', alignItems: 'start' }}>
            
            {/* Left 7 Cols: Images */}
            <RevealOnScroll direction="left" style={{ gridColumn: 'span 12' }} className="pay-col-left">
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', background: '#EFEEEA', overflow: 'hidden', border: '1px solid #EAE6DF', marginBottom: '1rem' }}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT74WCrQg4tFECdHfWZUVFBeilPmiPA_OKoqY4EONN4JSF2xxOGbnslQgmDMEXGrz9a2cTUPNuImNKozbeIzNZ4AOZP1BwRxr5jcHp45e2Sg1YSwz2Xf0Kth6RADiSOPe8CmioOA0nsVkFeNeRTjsUjvFg8SeMBcBRVxK2VAXOJ1DybUcGIMrBVuZ6oM_fZEgjyyXlqxHq0vk58e6jD2xjBidwAshYxr5LToBbrheP"
                  alt="American Walnut Keepsake Chest"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'rgba(20, 19, 16, 0.9)', color: '#FFFFFF', padding: '0.4rem 0.9rem', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Specimen No. 01 • American Walnut Keepsake Chest
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ position: 'relative', aspectRatio: '1', background: '#EFEEEA', overflow: 'hidden', border: '1px solid #EAE6DF' }}>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAFkpOw2YkAtFmyer2oK2Z90yJQRuU8A4vi8Da2ecQ2wW-s4nbJa7eSCUi1uHpd5cmAemk4hIngoP-x9kTXroofu-fHtvmF2Wso5rzMnD74DfvXZj0YmDlDFrQj4EKjHCUyl68ZuoEeTyVZCwIxYR4JtJ8n8gFsvKhYO-cUzSWuowOtQpDWrr0asM5mTzqI8bQ7O-iCQ-Ge8i78nnsgOM2RuYrqUMwz2VcB1Cz-0It"
                    alt="Clamshell Solander Tome"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', background: 'rgba(250, 249, 245, 0.92)', padding: '0.2rem 0.6rem', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#141310' }}>
                    Clamshell Solander Tome
                  </span>
                </div>

                <div style={{ position: 'relative', aspectRatio: '1', background: '#EFEEEA', overflow: 'hidden', border: '1px solid #EAE6DF' }}>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-xLVT2b-SeUmXWGuJ9ooIqw3yqGgyAybFv76us3fUvyVJ9FZKdUZ3R9W8CmZPnderkcQgLkhTvLSzD-plo-EKkmLLBrCk40ndFJvlQxGvp_uRgMBEMynfcs2SlKoUth_Pxrf-uC7isSyJOC01sCLuaupHEEwQ5XlgAmUzKIkfhgsFxeaM3ss-ojwTTfLUVaX2J87d_CMQvi2UHy9s6AIlK7KpprbZZQsTQSS_FKzp"
                    alt="Tailored Linen Folio Bag"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', background: 'rgba(250, 249, 245, 0.92)', padding: '0.2rem 0.6rem', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#141310' }}>
                    Tailored Linen Folio Bag
                  </span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right 5 Cols: Dossier */}
            <RevealOnScroll direction="right" style={{ gridColumn: 'span 12' }} className="pay-col-right">
              <div>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52', display: 'block', marginBottom: '0.5rem' }}>
                  Archival Architecture
                </span>

                <TextReveal
                  as="h1"
                  delay={0.08}
                  style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 3.8vw, 3.25rem)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.01em', margin: '0 0 0.5rem 0', color: '#141310' }}
                >
                  Presentation Boxes &amp; Keepsake Enclosures
                </TextReveal>

                <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.25rem', color: '#635E52', margin: '0 0 1.5rem 0' }}>
                  Protective Sanctuaries for Handcrafted Heirloom Tomes
                </p>

                <p style={{ fontSize: '0.95rem', color: '#4A463F', lineHeight: 1.68, marginBottom: '2rem' }}>
                  An heirloom volume crafted to endure centuries demands an architectural sanctuary. Ultraa’s custom enclosures shield fragile silver halide prints, Japanese cotton rag, and hand-bound spines from ambient light, humidity, and atmospheric particulate — turning the physical reveal into a deliberate ritual of luxury.
                </p>

                {/* Specs Matrix */}
                <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EAE6DF', paddingBottom: '0.5rem' }}>
                    <span style={{ color: '#635E52' }}>Timber Species:</span>
                    <strong style={{ color: '#141310' }}>Seasoned Indian Teak, American Walnut</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EAE6DF', paddingBottom: '0.5rem' }}>
                    <span style={{ color: '#635E52' }}>Rigid Shell Stock:</span>
                    <strong style={{ color: '#141310' }}>1800gsm Archival Greyboard / Bookcloth</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #EAE6DF', paddingBottom: '0.5rem' }}>
                    <span style={{ color: '#635E52' }}>Inner Sanctuary:</span>
                    <strong style={{ color: '#141310' }}>French Cotton Velvet & Acid-Free Suede</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#635E52' }}>Closure Mechanisms:</span>
                    <strong style={{ color: '#141310' }}>Hidden Neodymium Magnets / Solid Brass Clasp</strong>
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
                    <span>Configure Matching Box</span>
                    <ArrowRight size={14} />
                  </button>

                  <a
                    href="https://wa.me/919322254315?text=Hello%20Ultraa%20Albums%2C%20I%20would%20like%20to%20discuss%20custom%20wooden%20presentation%20boxes."
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
                    Discuss Bespoke Box
                  </a>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* Three Distinct Presentation Archetypes */}
      <section style={{ backgroundColor: '#F4F4F0', padding: 'clamp(3rem, 6vw, 5.5rem) 0' }}>
        <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <RevealOnScroll direction="up">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
              <div style={{ maxWidth: '680px' }}>
                <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.5rem' }}>
                  Curated Enclosures
                </span>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', fontWeight: 400, color: '#141310', margin: 0 }}>
                  Three Handcrafted Archetypes
                </h2>
              </div>
              <p style={{ maxWidth: '440px', fontSize: '0.92rem', color: '#4A463F', lineHeight: 1.6, margin: 0 }}>
                Each enclosure is calculated with micron tolerance around the exact page count, spine caliber, and cover leather of your commissioned tome.
              </p>
            </div>
          </RevealOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
            {/* Archetype 1 */}
            <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '4/3', background: '#EFEEEA', overflow: 'hidden' }}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWcxMrjG8pBi-XeTFr-H0G7giepT9t4UBoBrqVo1T1PLicgUzTZMqn_LlPWAVNEdKabhBt7_BjctPGxGoNS4NlOwPWXHz9fx1FKleRGUZebK33WFiM3aM4Tttch7lWx1IAc_o4ObGqEZks8hc78gq3W7qWVvgcXSp2C4TD4zh4NYsxa-4hKp_vAmkjJBahtGGu87YEzlLHXJnQFpEMlEAd5GjC0sjle3nhtv9mrTE0"
                  alt="Solid Wood Keepsake Chest"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>Archetype 01 • Solid Hardwood</span>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#141310', margin: '0.4rem 0 0.75rem 0', fontWeight: 500 }}>
                    The Solid Wood Keepsake Chest
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#4A463F', lineHeight: 1.6, margin: 0 }}>
                    Milled from seasoned Indian Teak or American Walnut. Hand-joined with precision mortise corners and finished with natural organic beeswax. Features soft-damped hidden hinges or vintage antique brass clasps.
                  </p>
                </div>
                <div style={{ marginTop: '1.75rem', paddingTop: '1rem', borderTop: '1px solid #EAE6DF', fontSize: '0.75rem', color: '#635E52' }}>
                  ✓ Mortise & tenon corner joinery • Laser-engraved brass plaque • Velvet cradle
                </div>
              </div>
            </div>

            {/* Archetype 2 */}
            <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '4/3', background: '#EFEEEA', overflow: 'hidden' }}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAFkpOw2YkAtFmyer2oK2Z90yJQRuU8A4vi8Da2ecQ2wW-s4nbJa7eSCUi1uHpd5cmAemk4hIngoP-x9kTXroofu-fHtvmF2Wso5rzMnD74DfvXZj0YmDlDFrQj4EKjHCUyl68ZuoEeTyVZCwIxYR4JtJ8n8gFsvKhYO-cUzSWuowOtQpDWrr0asM5mTzqI8bQ7O-iCQ-Ge8i78nnsgOM2RuYrqUMwz2VcB1Cz-0It"
                  alt="Solander Clamshell Box"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>Archetype 02 • Museum Conservation</span>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#141310', margin: '0.4rem 0 0.75rem 0', fontWeight: 500 }}>
                    The Clamshell Solander Box
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#4A463F', lineHeight: 1.6, margin: 0 }}>
                    Constructed with 1800gsm dense binder board wrapped in matching Japanese bookcloth or Belgian linen. Features hidden neodymium magnet closures and a pure champagne silk pull-ribbon for smooth volume extraction.
                  </p>
                </div>
                <div style={{ marginTop: '1.75rem', paddingTop: '1rem', borderTop: '1px solid #EAE6DF', fontSize: '0.75rem', color: '#635E52' }}>
                  ✓ Acid-free Japanese Kozo lining • Concealed magnet catches • Matching bookcloth
                </div>
              </div>
            </div>

            {/* Archetype 3 */}
            <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '4/3', background: '#EFEEEA', overflow: 'hidden' }}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-xLVT2b-SeUmXWGuJ9ooIqw3yqGgyAybFv76us3fUvyVJ9FZKdUZ3R9W8CmZPnderkcQgLkhTvLSzD-plo-EKkmLLBrCk40ndFJvlQxGvp_uRgMBEMynfcs2SlKoUth_Pxrf-uC7isSyJOC01sCLuaupHEEwQ5XlgAmUzKIkfhgsFxeaM3ss-ojwTTfLUVaX2J87d_CMQvi2UHy9s6AIlK7KpprbZZQsTQSS_FKzp"
                  alt="Tailored Linen Folio Bag"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>Archetype 03 • Tactile Transit</span>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#141310', margin: '0.4rem 0 0.75rem 0', fontWeight: 500 }}>
                    Tailored Linen Folio Bag & Sleeves
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#4A463F', lineHeight: 1.6, margin: 0 }}>
                    Heavyweight unbleached linen with double-drawstring braided cotton cords and a debossed Tuscan leather emblem. Accompanied by a plush velvet inner sleeve for everyday coffee table protection.
                  </p>
                </div>
                <div style={{ marginTop: '1.75rem', paddingTop: '1rem', borderTop: '1px solid #EAE6DF', fontSize: '0.75rem', color: '#635E52' }}>
                  ✓ Hand-stitched French seams • Genuine leather crest patch • Scratch-free inner lining
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

