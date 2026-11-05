import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  BadgeCheck, 
  Sparkles, 
  Calendar, 
  UploadCloud, 
  Send, 
  CheckCircle2, 
  Lock, 
  Clock, 
  ChevronRight, 
  Layers, 
  BookOpen, 
  Award, 
  Package, 
  Check, 
  FileText
} from 'lucide-react';

export default function ProductEnquiryPage() {
  const [searchParams] = useSearchParams();
  const initialProductParam = searchParams.get('product') || '';

  // Form State
  const [clientName, setClientName] = useState('');
  const [studioName, setStudioName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientLocation, setClientLocation] = useState('UK');
  
  // Product Family selection
  const determineInitialFamily = (param) => {
    const p = param.toLowerCase();
    if (p.includes('flush')) return 'flush_mount';
    if (p.includes('luxury') || p.includes('heirloom')) return 'luxury_heirloom';
    if (p.includes('layflat') || p.includes('book')) return 'layflat_book';
    if (p.includes('box') || p.includes('slip')) return 'boxes_slipcases';
    if (p.includes('service') || p.includes('editing') || p.includes('design')) return 'full_suite';
    return 'flush_mount';
  };

  const [productType, setProductType] = useState(() => determineInitialFamily(initialProductParam));
  const [sizeSpec, setSizeSpec] = useState('12x18');
  const [spreadCount, setSpreadCount] = useState('30');
  const [coverMaterial, setCoverMaterial] = useState('italian_leather');
  const [upgrades, setUpgrades] = useState(['gold_foil', 'wooden_chest']);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [specialNotes, setSpecialNotes] = useState(
    initialProductParam ? `Inquiring about ${initialProductParam}. Please include bespoke finishes and sample swatch options.` : ''
  );
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleUpgradeToggle = (val) => {
    setUpgrades((prev) => 
      prev.includes(val) ? prev.filter((item) => item !== val) : [...prev, val]
    );
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 1200);
  };

  return (
    <div className="product-enquiry-page-view" style={{ backgroundColor: 'var(--color-surface, #FAF9F5)', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Breadcrumb Navigation */}
      <div style={{ borderBottom: '1px solid var(--color-hairline, #EAE6DF)', padding: '0.85rem 0', background: '#F4F4F0' }}>
        <div className="section-container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-secondary, #635E52)' }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={12} />
          <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Collections</Link>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--color-primary, #141310)', fontWeight: 600 }}>Commission & Product Enquiry</span>
        </div>
      </div>

      {/* Top Editorial Masthead Section */}
      <section style={{ background: '#F4F4F0', borderBottom: '1px solid #EAE6DF', padding: '3.5rem 0' }}>
        <div className="section-container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem', alignItems: 'baseline' }}>
            {/* Left 2 Cols: Origin Seal */}
            <div style={{ gridColumn: 'span 2', display: 'none', '@media(min-width: 992px)': { display: 'block' } }} className="hidden-mobile">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#635E52' }}></span>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52' }}>
                  Est. 2008 • Bombay
                </span>
              </div>
              <div style={{ marginTop: '1.5rem', fontSize: '0.68rem', letterSpacing: '0.18em', color: '#99948B', textTransform: 'uppercase' }}>
                Specimen Ref. — 0824/PR
              </div>
            </div>

            {/* Middle 8 Cols: Main Heading & Lead */}
            <div style={{ gridColumn: 'span 12', '@media(min-width: 992px)': { gridColumn: 'span 8' } }} className="enquiry-masthead-center">
              <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.75rem' }}>
                Commission An Heirloom
              </span>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 400, color: '#141310', lineHeight: 1.15, letterSpacing: '-0.01em', marginBottom: '1rem' }}>
                Bespoke Album & Print Enquiry
              </h1>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.05rem', color: '#635E52', lineHeight: 1.65, maxWidth: '680px' }}>
                Provide your album specifications, cover material preferences, and studio requirements. Our master album consultant will respond within 24 hours with exact pricing, physical swatch kits, and bespoke binding schedules.
              </p>
            </div>

            {/* Right 2 Cols: Direct Studio Line */}
            <div style={{ gridColumn: 'span 12', '@media(min-width: 992px)': { gridColumn: 'span 2' } }} className="enquiry-masthead-right">
              <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '1.25rem' }}>
                <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>
                  Direct Studio Line
                </span>
                <a href="tel:+919322254315" style={{ display: 'block', fontFamily: 'DM Sans, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#141310', textDecoration: 'none', marginTop: '0.35rem' }}>
                  +91 93222 54315
                </a>
                <span style={{ display: 'block', fontSize: '0.7rem', color: '#635E52', marginTop: '0.25rem' }}>
                  Concierge Desk (10am – 7pm IST)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Asymmetric 2-Column Dossier & Form Workspace */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="section-container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 1.5rem' }}>
          {isSubmitted ? (
            /* Post-Submission Success Dossier */
            <div style={{ maxWidth: '780px', margin: '0 auto', background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '3.5rem 2.5rem', textAlign: 'center' }}>
              <CheckCircle2 size={56} color="#141310" style={{ margin: '0 auto 1.5rem auto' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#635E52', display: 'block', marginBottom: '0.5rem' }}>
                Dossier Lodged with Senior Binder
              </span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.25rem', color: '#141310', marginBottom: '1rem' }}>
                Enquiry Successfully Registered
              </h2>
              <p style={{ color: '#635E52', fontSize: '1rem', lineHeight: 1.65, maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                Thank you, <strong style={{ color: '#141310' }}>{clientName}</strong>. Your dossier for the <strong style={{ color: '#141310' }}>{productType.replace('_', ' ').toUpperCase()}</strong> specification has been forwarded to our Santacruz West studio director. A custom quotation PDF and binding timeline will be dispatched to <em>{clientEmail}</em> within 24 hours.
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href={`https://wa.me/919322254315?text=Hello%20Ultraa%20Albums%2C%20I%20have%20submitted%20an%20enquiry%20for%20${encodeURIComponent(clientName)}%20(${encodeURIComponent(productType)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: '#141310', color: '#FFFFFF', padding: '0.9rem 1.75rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none' }}
                >
                  Message Concierge On WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  style={{ background: '#F4F4F0', color: '#141310', border: '1px solid #EAE6DF', padding: '0.9rem 1.75rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer' }}
                >
                  Submit Another Project
                </button>
              </div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem', alignItems: 'start' }}>
              {/* LEFT COLUMN: The Commission Journey & Material Preview (5 Cols) */}
              <aside style={{ gridColumn: 'span 12', '@media(min-width: 992px)': { gridColumn: 'span 5' } }} className="enquiry-col-left">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {/* Card 1: Atelier Archival Overview Card */}
                  <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#635E52' }}>
                        Atelier Craft Standards
                      </span>
                      <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#99948B' }}>
                        Section 01
                      </span>
                    </div>

                    <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden', marginBottom: '1.5rem', background: '#EFEEEA' }}>
                      <img
                        src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                        alt="Hand-bound heirloom wedding photo album with deep forest green Tuscan leather cover"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', background: 'rgba(20, 19, 16, 0.85)', backdropFilter: 'blur(4px)', padding: '0.35rem 0.75rem' }}>
                        <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FFFFFF' }}>
                          100% Layflat • Fuji Crystal DPII
                        </span>
                      </div>
                    </div>

                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#141310', marginBottom: '0.75rem', fontWeight: 500 }}>
                      Master-grade Cotton Rag & Seamless Spreads
                    </h3>

                    <p style={{ fontSize: '0.9rem', color: '#635E52', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      Every volume is individually creased and cold-pressed by master craftsmen in our Santacruz atelier. Our 1.2mm substrate core prevents warping under varying oceanic and alpine climates.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', background: '#EFEEEA', padding: '1rem', borderTop: '1px solid #EAE6DF' }}>
                      <div>
                        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 600, color: '#141310' }}>15,000+</div>
                        <div style={{ fontSize: '0.65rem', color: '#635E52', marginTop: '0.2rem', lineHeight: 1.3 }}>Albums Bound Globally</div>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 600, color: '#141310' }}>100-Yr</div>
                        <div style={{ fontSize: '0.65rem', color: '#635E52', marginTop: '0.2rem', lineHeight: 1.3 }}>Archival Pigment Index</div>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 600, color: '#141310' }}>1-to-1</div>
                        <div style={{ fontSize: '0.65rem', color: '#635E52', marginTop: '0.2rem', lineHeight: 1.3 }}>Dedicated Studio Liaison</div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Cover Swatch Archive */}
                  <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#141310', margin: 0, fontWeight: 500 }}>
                        Cover Swatch Archive
                      </h4>
                      <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>
                        Specimens
                      </span>
                    </div>

                    <p style={{ fontSize: '0.85rem', color: '#635E52', marginBottom: '1.25rem' }}>
                      Our signature binders source skins and textiles exclusively from heritage European tanneries and Kyoto weaver guilds.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                      {/* Swatch 1 */}
                      <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '0.75rem' }}>
                        <div style={{ width: '100%', height: '80px', background: '#C8A882', marginBottom: '0.5rem', overflow: 'hidden' }}>
                          <img 
                            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=300&q=80" 
                            alt="Tuscan Full-Grain" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                          />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#141310' }}>Tuscan Full-Grain</span>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#8A5A36' }}></span>
                        </div>
                        <span style={{ fontSize: '0.7rem', color: '#635E52', display: 'block', marginTop: '0.15rem' }}>Vegetable-tanned calfskin</span>
                      </div>

                      {/* Swatch 2 */}
                      <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '0.75rem' }}>
                        <div style={{ width: '100%', height: '80px', background: '#2B3A4A', marginBottom: '0.5rem', overflow: 'hidden' }}>
                          <img 
                            src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=300&q=80" 
                            alt="Royal Velvet" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                          />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#141310' }}>Royal Velvet</span>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2B3A4A' }}></span>
                        </div>
                        <span style={{ fontSize: '0.7rem', color: '#635E52', display: 'block', marginTop: '0.15rem' }}>High-pile Lyon velvet</span>
                      </div>

                      {/* Swatch 3 */}
                      <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '0.75rem' }}>
                        <div style={{ width: '100%', height: '80px', background: '#E5DEC9', marginBottom: '0.5rem', overflow: 'hidden' }}>
                          <img 
                            src="https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=300&q=80" 
                            alt="Raw Ivory Linen" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                          />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#141310' }}>Raw Ivory Linen</span>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E5DEC9' }}></span>
                        </div>
                        <span style={{ fontSize: '0.7rem', color: '#635E52', display: 'block', marginTop: '0.15rem' }}>Belgian unbleached fiber</span>
                      </div>

                      {/* Swatch 4 */}
                      <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '0.75rem' }}>
                        <div style={{ width: '100%', height: '80px', background: '#D8D2C4', marginBottom: '0.5rem', overflow: 'hidden' }}>
                          <img 
                            src="https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=300&q=80" 
                            alt="Japanese Silk" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                          />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#141310' }}>Japanese Silk</span>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D8D2C4' }}></span>
                        </div>
                        <span style={{ fontSize: '0.7rem', color: '#635E52', display: 'block', marginTop: '0.15rem' }}>Kyoto spun bookcloth</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Presentation Enclosures Dossier */}
                  <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#141310', margin: 0, fontWeight: 500 }}>
                        Presentation Enclosures
                      </h4>
                      <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>
                        Packaging
                      </span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      <div style={{ display: 'flex', gap: '0.85rem', background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '0.75rem', alignItems: 'center' }}>
                        <div style={{ width: '65px', height: '52px', background: '#EFEEEA', flexShrink: 0, overflow: 'hidden' }}>
                          <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=200&q=80" alt="Wooden Keepsake Chest" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#141310' }}>Wooden Keepsake Chest</div>
                          <div style={{ fontSize: '0.72rem', color: '#635E52', lineHeight: 1.4 }}>Solid seasoned Teak or American Walnut with mortise joints & brass latch.</div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '0.85rem', background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '0.75rem', alignItems: 'center' }}>
                        <div style={{ width: '65px', height: '52px', background: '#EFEEEA', flexShrink: 0, overflow: 'hidden' }}>
                          <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=200&q=80" alt="Solander Clamshell Box" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#141310' }}>Solander Clamshell Box</div>
                          <div style={{ fontSize: '0.72rem', color: '#635E52', lineHeight: 1.4 }}>Museum preservation casing lined with acid-free Japanese Kozo paper.</div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '0.85rem', background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '0.75rem', alignItems: 'center' }}>
                        <div style={{ width: '65px', height: '52px', background: '#EFEEEA', flexShrink: 0, overflow: 'hidden' }}>
                          <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=200&q=80" alt="Architectural Slipcase" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#141310' }}>Architectural Slipcase</div>
                          <div style={{ fontSize: '0.72rem', color: '#635E52', lineHeight: 1.4 }}>Fitted rigid jacket with ribbon lift tab, wrapped in matching bookcloth.</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Private Studio Privilege (Dark Section) */}
                  <div style={{ background: '#292724', color: '#F4F4F0', padding: '2rem', border: '1px solid #141310' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#CDC6B7', display: 'block', marginBottom: '0.5rem' }}>
                      Private Studio Privilege
                    </span>
                    <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.75rem', fontWeight: 400 }}>
                      White-Glove Courier Logistics
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: '#CBC6C1', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      We dispatch via express priority insured transit directly to major photography studios and wedding planners in Mayfair, Manhattan, Dubai Marina, and across India. Customs and local clearance handled atelier-direct.
                    </p>
                    <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FAF9F5' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <BadgeCheck size={14} color="#CDC6B7" /> Insured Cargo
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Clock size={14} color="#CDC6B7" /> 14-Day Delivery
                      </span>
                    </div>
                  </div>
                </div>
              </aside>

              {/* RIGHT COLUMN: Comprehensive Product Enquiry Form (7 Cols) */}
              <main style={{ gridColumn: 'span 12', '@media(min-width: 992px)': { gridColumn: 'span 7' } }} className="enquiry-col-right">
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {/* STEP 01: Client Details */}
                  <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F4F4F0', padding: '1rem', border: '1px solid #EAE6DF', marginBottom: '1.5rem' }}>
                      <div>
                        <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>
                          Step 01 of 04
                        </span>
                        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#141310', margin: '0.2rem 0 0 0', fontWeight: 500 }}>
                          Studio & Contact Credentials
                        </h2>
                      </div>
                      <BadgeCheck size={26} color="#635E52" />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.35rem' }}>
                          Principal Contact / Full Name *
                        </label>
                        <input
                          type="text"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="e.g. Alistair Vance"
                          required
                          style={{ width: '100%', padding: '0.75rem 0.85rem', background: '#FAF9F5', border: '1px solid #EAE6DF', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.35rem' }}>
                          Studio / Brand Atelier Name <span style={{ color: '#99948B' }}>(Optional)</span>
                        </label>
                        <input
                          type="text"
                          value={studioName}
                          onChange={(e) => setStudioName(e.target.value)}
                          placeholder="e.g. Vance Weddings London"
                          style={{ width: '100%', padding: '0.75rem 0.85rem', background: '#FAF9F5', border: '1px solid #EAE6DF', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.35rem' }}>
                          Studio Work Email *
                        </label>
                        <input
                          type="email"
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          placeholder="contact@studio.com"
                          required
                          style={{ width: '100%', padding: '0.75rem 0.85rem', background: '#FAF9F5', border: '1px solid #EAE6DF', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.35rem' }}>
                          WhatsApp Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="+44 7911 123456 or +91 98..."
                          required
                          style={{ width: '100%', padding: '0.75rem 0.85rem', background: '#FAF9F5', border: '1px solid #EAE6DF', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div style={{ gridColumn: '1 / -1' }}>
                        <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.35rem' }}>
                          Delivery Destination / Country *
                        </label>
                        <select
                          value={clientLocation}
                          onChange={(e) => setClientLocation(e.target.value)}
                          required
                          style={{ width: '100%', padding: '0.75rem 0.85rem', background: '#FAF9F5', border: '1px solid #EAE6DF', fontSize: '0.9rem', outline: 'none', cursor: 'pointer', boxSizing: 'border-box' }}
                        >
                          <option value="UK">United Kingdom (Priority Air to London/Regional)</option>
                          <option value="IN">India (Domestic Mumbai Atelier Direct)</option>
                          <option value="US">United States (Direct Courier)</option>
                          <option value="UAE">United Arab Emirates (Dubai / Abu Dhabi)</option>
                          <option value="EU">European Union</option>
                          <option value="AU">Australia & New Zealand</option>
                          <option value="OTHER">Other Global Territory</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* STEP 02: Product Family of Interest */}
                  <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F4F4F0', padding: '1rem', border: '1px solid #EAE6DF', marginBottom: '1.25rem' }}>
                      <div>
                        <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>
                          Step 02 of 04
                        </span>
                        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#141310', margin: '0.2rem 0 0 0', fontWeight: 500 }}>
                          Product Family of Interest
                        </h2>
                      </div>
                      <BookOpen size={26} color="#635E52" />
                    </div>

                    <p style={{ fontSize: '0.85rem', color: '#635E52', marginBottom: '1.25rem' }}>
                      Choose primary collection. You can combine multiple volumes or add parent editions in the specifications below.
                    </p>

                    {/* Radio Grid Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.85rem', marginBottom: '0.85rem' }}>
                      {/* Option 1: Flush Mount */}
                      <label style={{ cursor: 'pointer' }}>
                        <input
                          type="radio"
                          name="product_type"
                          value="flush_mount"
                          checked={productType === 'flush_mount'}
                          onChange={() => setProductType('flush_mount')}
                          style={{ display: 'none' }}
                        />
                        <div
                          style={{
                            padding: '1.25rem',
                            border: '1px solid',
                            borderColor: productType === 'flush_mount' ? '#141310' : '#EAE6DF',
                            background: productType === 'flush_mount' ? '#141310' : '#FAF9F5',
                            color: productType === 'flush_mount' ? '#FFFFFF' : '#141310',
                            transition: 'all 0.2s ease',
                            height: '100%',
                            boxSizing: 'border-box'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 500 }}>
                              Flush Mount Album
                            </span>
                            <BookOpen size={18} />
                          </div>
                          <p style={{ fontSize: '0.8rem', opacity: 0.85, lineHeight: 1.5, margin: 0 }}>
                            Thick core substrate, panoramic zero-split gutter, rigid photographic pages.
                          </p>
                          <span style={{ display: 'inline-block', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.75, marginTop: '1rem' }}>
                            Signature Standard
                          </span>
                        </div>
                      </label>

                      {/* Option 2: Luxury Heirloom */}
                      <label style={{ cursor: 'pointer' }}>
                        <input
                          type="radio"
                          name="product_type"
                          value="luxury_heirloom"
                          checked={productType === 'luxury_heirloom'}
                          onChange={() => setProductType('luxury_heirloom')}
                          style={{ display: 'none' }}
                        />
                        <div
                          style={{
                            padding: '1.25rem',
                            border: '1px solid',
                            borderColor: productType === 'luxury_heirloom' ? '#141310' : '#EAE6DF',
                            background: productType === 'luxury_heirloom' ? '#141310' : '#FAF9F5',
                            color: productType === 'luxury_heirloom' ? '#FFFFFF' : '#141310',
                            transition: 'all 0.2s ease',
                            height: '100%',
                            boxSizing: 'border-box'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 500 }}>
                              Luxury Heirloom
                            </span>
                            <Award size={18} />
                          </div>
                          <p style={{ fontSize: '0.8rem', opacity: 0.85, lineHeight: 1.5, margin: 0 }}>
                            Imported Tuscan leather, cotton rag deckled margins, gilded or debossed edge trims.
                          </p>
                          <span style={{ display: 'inline-block', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.75, marginTop: '1rem' }}>
                            Couture Edition
                          </span>
                        </div>
                      </label>

                      {/* Option 3: Layflat Photo Book */}
                      <label style={{ cursor: 'pointer' }}>
                        <input
                          type="radio"
                          name="product_type"
                          value="layflat_book"
                          checked={productType === 'layflat_book'}
                          onChange={() => setProductType('layflat_book')}
                          style={{ display: 'none' }}
                        />
                        <div
                          style={{
                            padding: '1.25rem',
                            border: '1px solid',
                            borderColor: productType === 'layflat_book' ? '#141310' : '#EAE6DF',
                            background: productType === 'layflat_book' ? '#141310' : '#FAF9F5',
                            color: productType === 'layflat_book' ? '#FFFFFF' : '#141310',
                            transition: 'all 0.2s ease',
                            height: '100%',
                            boxSizing: 'border-box'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 500 }}>
                              Layflat Photo Book
                            </span>
                            <Layers size={18} />
                          </div>
                          <p style={{ fontSize: '0.8rem', opacity: 0.85, lineHeight: 1.5, margin: 0 }}>
                            Lightweight archival paper, slim profile, ideal for modern editorial shoots.
                          </p>
                          <span style={{ display: 'inline-block', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.75, marginTop: '1rem' }}>
                            Contemporary Editorial
                          </span>
                        </div>
                      </label>

                      {/* Option 4: Boxes & Slipcases */}
                      <label style={{ cursor: 'pointer' }}>
                        <input
                          type="radio"
                          name="product_type"
                          value="boxes_slipcases"
                          checked={productType === 'boxes_slipcases'}
                          onChange={() => setProductType('boxes_slipcases')}
                          style={{ display: 'none' }}
                        />
                        <div
                          style={{
                            padding: '1.25rem',
                            border: '1px solid',
                            borderColor: productType === 'boxes_slipcases' ? '#141310' : '#EAE6DF',
                            background: productType === 'boxes_slipcases' ? '#141310' : '#FAF9F5',
                            color: productType === 'boxes_slipcases' ? '#FFFFFF' : '#141310',
                            transition: 'all 0.2s ease',
                            height: '100%',
                            boxSizing: 'border-box'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 500 }}>
                              Boxes & Slipcases
                            </span>
                            <Package size={18} />
                          </div>
                          <p style={{ fontSize: '0.8rem', opacity: 0.85, lineHeight: 1.5, margin: 0 }}>
                            Handcrafted wooden boxes, Solander cases, and custom foil debossed slip-ins.
                          </p>
                          <span style={{ display: 'inline-block', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.75, marginTop: '1rem' }}>
                            Presentation Only
                          </span>
                        </div>
                      </label>
                    </div>

                    {/* Option 5: Complete Design & Print Suite (Span 2) */}
                    <label style={{ cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="product_type"
                        value="full_suite"
                        checked={productType === 'full_suite'}
                        onChange={() => setProductType('full_suite')}
                        style={{ display: 'none' }}
                      />
                      <div
                        style={{
                          padding: '1.25rem',
                          border: '1px solid',
                          borderColor: productType === 'full_suite' ? '#141310' : '#EAE6DF',
                          background: productType === 'full_suite' ? '#141310' : '#FAF9F5',
                          color: productType === 'full_suite' ? '#FFFFFF' : '#141310',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '1rem'
                        }}
                      >
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 500 }}>
                              Complete Design & Print Suite
                            </span>
                            <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', background: productType === 'full_suite' ? '#FFFFFF' : '#141310', color: productType === 'full_suite' ? '#141310' : '#FFFFFF', padding: '0.15rem 0.4rem', textTransform: 'uppercase' }}>
                              Turnkey
                            </span>
                          </div>
                          <p style={{ fontSize: '0.8rem', opacity: 0.85, lineHeight: 1.5, margin: 0 }}>
                            Raw photo sequencing, fine-art skin retouching, custom grid layouts, through to printed heirloom.
                          </p>
                        </div>
                        <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                          Full Workflow →
                        </span>
                      </div>
                    </label>
                  </div>

                  {/* STEP 03: Specifications, Sizing & Finishes */}
                  <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F4F4F0', padding: '1rem', border: '1px solid #EAE6DF', marginBottom: '1.5rem' }}>
                      <div>
                        <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>
                          Step 03 of 04
                        </span>
                        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#141310', margin: '0.2rem 0 0 0', fontWeight: 500 }}>
                          Specifications, Sizing & Finishes
                        </h2>
                      </div>
                      <Sparkles size={26} color="#635E52" />
                    </div>

                    {/* Sizing Radio Grid */}
                    <div style={{ marginBottom: '1.75rem' }}>
                      <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.6rem' }}>
                        Preferred Dimension / Aspect Ratio
                      </label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(95px, 1fr))', gap: '0.5rem' }}>
                        {[
                          { val: '12x18', name: '12 × 18″', label: 'Grand Panorama' },
                          { val: '12x15', name: '12 × 15″', label: 'Master Classic' },
                          { val: '10x14', name: '10 × 14″', label: 'Editorial Landscape' },
                          { val: '8x12', name: '8 × 12″', label: 'Parent Edition' },
                          { val: 'custom', name: 'Custom', label: 'Bespoke Aspect' }
                        ].map((sz) => (
                          <label key={sz.val} style={{ cursor: 'pointer' }}>
                            <input
                              type="radio"
                              name="size_spec"
                              value={sz.val}
                              checked={sizeSpec === sz.val}
                              onChange={() => setSizeSpec(sz.val)}
                              style={{ display: 'none' }}
                            />
                            <div
                              style={{
                                padding: '0.75rem 0.5rem',
                                textAlign: 'center',
                                border: '1px solid',
                                borderColor: sizeSpec === sz.val ? '#141310' : '#EAE6DF',
                                background: sizeSpec === sz.val ? '#141310' : '#FAF9F5',
                                color: sizeSpec === sz.val ? '#FFFFFF' : '#141310',
                                transition: 'all 0.2s ease'
                              }}
                            >
                              <span style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600 }}>{sz.name}</span>
                              <span style={{ display: 'block', fontSize: '0.62rem', opacity: 0.75, marginTop: '0.15rem' }}>{sz.label}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Spreads & Cover Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.35rem' }}>
                          Estimated Spread Count
                        </label>
                        <select
                          value={spreadCount}
                          onChange={(e) => setSpreadCount(e.target.value)}
                          style={{ width: '100%', padding: '0.75rem 0.85rem', background: '#FAF9F5', border: '1px solid #EAE6DF', fontSize: '0.9rem', outline: 'none', cursor: 'pointer', boxSizing: 'border-box' }}
                        >
                          <option value="20">20 Spreads (40 Seamless Pages)</option>
                          <option value="30">30 Spreads (60 Seamless Pages)</option>
                          <option value="40">40 Spreads (80 Seamless Pages)</option>
                          <option value="50_plus">50+ Spreads (Multi-volume boxed set)</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.35rem' }}>
                          Cover Material Specimen
                        </label>
                        <select
                          value={coverMaterial}
                          onChange={(e) => setCoverMaterial(e.target.value)}
                          style={{ width: '100%', padding: '0.75rem 0.85rem', background: '#FAF9F5', border: '1px solid #EAE6DF', fontSize: '0.9rem', outline: 'none', cursor: 'pointer', boxSizing: 'border-box' }}
                        >
                          <option value="italian_leather">Italian Vegetable Tanned Leather</option>
                          <option value="luxury_velvet">Royal Lyon Velvet</option>
                          <option value="textured_linen">Raw Belgian Ivory Linen</option>
                          <option value="japanese_silk">Japanese Kimono Silk</option>
                          <option value="acrylic_window">Acrylic Glass Window Inset with Leather Spine</option>
                          <option value="dual_tone">Dual-Tone Fabric & Leather Combination</option>
                        </select>
                      </div>
                    </div>

                    {/* Upgrades Multi-checkboxes */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.6rem' }}>
                        Atelier Customization Upgrades (Select all that apply)
                      </label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                        {[
                          { id: 'gold_foil', name: 'Gold Foil Debossing', desc: 'Custom brass die stamping on spine & cover' },
                          { id: 'wooden_chest', name: 'Wooden Keepsake Box', desc: 'Handcrafted Teak wood with matching lining' },
                          { id: 'gilded_edges', name: 'Gilded Page Edges', desc: 'Mirror-finish champagne gold page leafing' },
                          { id: 'parent_books', name: 'Parent Duplicate Books', desc: '2x identical scaled 8×10″ companion volumes' }
                        ].map((up) => {
                          const isChecked = upgrades.includes(up.id);
                          return (
                            <label
                              key={up.id}
                              onClick={() => handleUpgradeToggle(up.id)}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.75rem',
                                padding: '0.85rem',
                                background: isChecked ? '#EFEEEA' : '#FAF9F5',
                                border: '1px solid',
                                borderColor: isChecked ? '#141310' : '#EAE6DF',
                                cursor: 'pointer',
                                transition: 'all 0.15s ease'
                              }}
                            >
                              <div
                                style={{
                                  width: '16px',
                                  height: '16px',
                                  border: '1px solid #141310',
                                  background: isChecked ? '#141310' : '#FFFFFF',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                  marginTop: '0.15rem'
                                }}
                              >
                                {isChecked && <Check size={12} color="#FFFFFF" />}
                              </div>
                              <div>
                                <span style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#141310' }}>
                                  {up.name}
                                </span>
                                <span style={{ display: 'block', fontSize: '0.7rem', color: '#635E52', lineHeight: 1.3, marginTop: '0.15rem' }}>
                                  {up.desc}
                                </span>
                              </div>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* STEP 04: Timeline, File Brief & Notes */}
                  <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F4F4F0', padding: '1rem', border: '1px solid #EAE6DF', marginBottom: '1.5rem' }}>
                      <div>
                        <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>
                          Step 04 of 04
                        </span>
                        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', color: '#141310', margin: '0.2rem 0 0 0', fontWeight: 500 }}>
                          Timeline, File Brief & Notes
                        </h2>
                      </div>
                      <Calendar size={26} color="#635E52" />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      {/* Target Delivery Date */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.35rem' }}>
                          Target Studio Delivery Date
                        </label>
                        <input
                          type="date"
                          value={deliveryDate}
                          onChange={(e) => setDeliveryDate(e.target.value)}
                          style={{ width: '100%', padding: '0.75rem 0.85rem', background: '#FAF9F5', border: '1px solid #EAE6DF', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
                        />
                        <span style={{ fontSize: '0.7rem', color: '#99948B', display: 'block', marginTop: '0.35rem' }}>
                          Standard production lead time: 10–14 working days from final layout proof approval.
                        </span>
                      </div>

                      {/* Dropzone for Reference Brief */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.35rem' }}>
                          Upload Brief / Reference Spreads / Monogram Vector
                        </label>
                        <div
                          onClick={() => document.getElementById('enquiry-file-input')?.click()}
                          style={{
                            background: '#FAF9F5',
                            border: '1px dashed #CBC6C1',
                            padding: '2rem',
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <input
                            id="enquiry-file-input"
                            type="file"
                            multiple
                            onChange={handleFileUpload}
                            style={{ display: 'none' }}
                          />
                          <UploadCloud size={32} color="#635E52" style={{ margin: '0 auto 0.5rem auto' }} />
                          <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#141310', margin: 0 }}>
                            Drop design brief, spread PDF or monogram die SVG
                          </p>
                          <p style={{ fontSize: '0.75rem', color: '#635E52', margin: '0.25rem 0 0 0' }}>
                            PDF, AI, PSD, ZIP, or high-res JPG up to 100MB
                          </p>

                          {uploadedFiles.length > 0 && (
                            <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', fontWeight: 600, color: '#141310', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
                              <FileText size={14} />
                              <span>Attached {uploadedFiles.length} file(s): {uploadedFiles.map(f => f.name).join(', ')}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Special Instructions Textarea */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.35rem' }}>
                          Special Atelier Instructions, Typography Names or Client Preferences
                        </label>
                        <textarea
                          rows={4}
                          value={specialNotes}
                          onChange={(e) => setSpecialNotes(e.target.value)}
                          placeholder="Enter bride & groom names for debossing, wedding date, specific foil hex requests, or special shipping packing requirements..."
                          style={{ width: '100%', padding: '0.85rem', background: '#FAF9F5', border: '1px solid #EAE6DF', fontSize: '0.9rem', outline: 'none', lineHeight: 1.6, boxSizing: 'border-box' }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* STEP 05: Submission Actions & SLAs */}
                  <div style={{ background: '#EFEEEA', border: '1px solid #EAE6DF', padding: '1.75rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          flex: 1,
                          minWidth: '220px',
                          background: '#141310',
                          color: '#FFFFFF',
                          border: 'none',
                          padding: '1.15rem 1.75rem',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          cursor: isSubmitting ? 'wait' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.75rem'
                        }}
                      >
                        <span>{isSubmitting ? 'Registering Dossier...' : 'Submit Bespoke Enquiry'}</span>
                        <Send size={15} />
                      </button>

                      <a
                        href="https://wa.me/919322254315?text=Hello%20Ultraa%20Albums%2C%20I%20would%20like%20to%20discuss%20a%20bespoke%20album%20commission."
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: '#FFFFFF',
                          color: '#141310',
                          border: '1px solid #EAE6DF',
                          padding: '1.15rem 1.5rem',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#16a34a' }}></span>
                        <span>WhatsApp Concierge</span>
                      </a>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.72rem', color: '#635E52' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Lock size={13} color="#141310" />
                        <span>Photographer studio rates remain strictly confidential and NDA-protected.</span>
                      </div>
                      <span style={{ fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#141310' }}>
                        SLA: Guaranteed 24-Hr Quotation Response
                      </span>
                    </div>
                  </div>
                </form>
              </main>
            </div>
          )}
        </div>
      </section>

      {/* Editorial FAQ / Technical Guidance Panel */}
      <section style={{ background: '#F4F4F0', borderTop: '1px solid #EAE6DF', padding: '4rem 0' }}>
        <div className="section-container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ maxWidth: '640px', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52', display: 'block', marginBottom: '0.5rem' }}>
              Technical Guidance
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#141310', margin: 0, fontWeight: 400 }}>
              Frequently Addressed Specifications
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
            {/* Spec 1 */}
            <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '2rem' }}>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52', display: 'block', marginBottom: '0.75rem' }}>
                01 / Color Profile & Proofing
              </span>
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#141310', margin: '0 0 0.75rem 0', fontWeight: 500 }}>
                sRGB or Adobe RGB (1998)?
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#635E52', lineHeight: 1.65, margin: 0 }}>
                We operate calibrated Noritsu and Durst Lambda continuous-tone laser engines profiled strictly to Adobe RGB 1998 and embedded ICC profiles. Soft-proofing 3D digital spreads are provided prior to leather debossing.
              </p>
            </div>

            {/* Spec 2 */}
            <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '2rem' }}>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52', display: 'block', marginBottom: '0.75rem' }}>
                02 / Custom Sizing & Duplicates
              </span>
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#141310', margin: '0 0 0.75rem 0', fontWeight: 500 }}>
                Parent Album Replication
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#635E52', lineHeight: 1.65, margin: 0 }}>
                Parent duplicate copies are printed synchronously with the primary volume to maintain absolute color identity. They feature scaled proportions (e.g. 8×12″ from 12×18″) with identical textile binding.
              </p>
            </div>

            {/* Spec 3 */}
            <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '2rem' }}>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52', display: 'block', marginBottom: '0.75rem' }}>
                03 / Worldwide Dispatch & Duties
              </span>
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#141310', margin: '0 0 0.75rem 0', fontWeight: 500 }}>
                Duty Paid Door-to-Door
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#635E52', lineHeight: 1.65, margin: 0 }}>
                For UK, UAE, and US clients, shipments are processed under DDP (Delivered Duty Paid) terms upon request, ensuring no surprise customs holdups prior to final handover to your clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
