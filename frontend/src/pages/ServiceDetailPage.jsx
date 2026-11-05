import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, Clock, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import RevealOnScroll from '../components/motion/RevealOnScroll';
import { SERVICES_CATALOG } from '../data/catalogData';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = SERVICES_CATALOG.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // If visited at /services or invalid slug, show all services
  if (!service) {
    return (
      <div className="services-archive-page">
        <div className="section-container">
          <div className="archive-header-center">
            <span className="section-eyebrow-chip">PROFESSIONAL STUDIO SOLUTIONS</span>
            <h1 className="archive-title">Post-Production, Album Design & Photography</h1>
            <p className="archive-lead">
              Elevating creative studios worldwide with meticulous raw color grading, editorial book design, and master photographic coverage.
            </p>
          </div>

          <div className="services-archive-grid">
            {SERVICES_CATALOG.map((item) => (
              <div key={item.id} className="service-archive-card">
                <div className="service-archive-img">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>
                <div className="service-archive-body">
                  <h3 className="service-archive-title">{item.name}</h3>
                  <p className="service-archive-desc">{item.shortDesc}</p>
                  <ul className="service-features-mini">
                    {item.features?.slice(0, 3).map((feat, i) => (
                      <li key={i}>
                        <CheckCircle2 size={13} className="icon-gold" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="service-archive-action">
                    <Link to={`/services/${item.slug}`} className="view-product-btn">
                      <span>Service Details & Workflow</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const handleEnquire = () => {
    navigate(`/enquire?product=${encodeURIComponent(service.name)}`);
  };

  return (
    <div className="service-detail-page-view">
      {/* 1. Breadcrumb */}
      <div className="product-breadcrumb-strip">
        <div className="section-container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <ChevronRight size={13} />
            <Link to="/services">Services</Link>
            <ChevronRight size={13} />
            <span className="active-crumb">{service.name}</span>
          </div>
        </div>
      </div>

      {/* UK Dedicated Reciprocal Banners */}
      {service.slug === 'image-editing' && (
        <div style={{ backgroundColor: '#EFEEEA', borderBottom: '1px solid #EAE6DF', padding: '0.5rem 0' }}>
          <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: '#635E52' }}>
            <span>Operating a UK photography studio? Need Lightroom Smart Preview workflows &amp; HMRC billing?</span>
            <Link to="/for-uk/image-editing-uk" style={{ color: '#141310', fontWeight: 600, textDecoration: 'underline' }}>
              View Dedicated UK Image Editing &amp; Retouching Desk (£ GBP) →
            </Link>
          </div>
        </div>
      )}

      {service.slug === 'wedding-photography' && (
        <div style={{ backgroundColor: '#EFEEEA', borderBottom: '1px solid #EAE6DF', padding: '0.5rem 0' }}>
          <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: '#635E52' }}>
            <span>Planning a UK estate wedding or looking for our London liaison desk?</span>
            <Link to="/for-uk/photography-uk" style={{ color: '#141310', fontWeight: 600, textDecoration: 'underline' }}>
              View Dedicated UK Stately Wedding Photography Services (£ GBP) →
            </Link>
          </div>
        </div>
      )}

      {/* 2. Hero Section */}
      <section className="service-hero-section">
        <div className="section-container">
          <div className="service-hero-grid">
            <RevealOnScroll direction="left" className="service-hero-content">
              <span className="section-eyebrow-chip">STUDIO POST-PRODUCTION & ATELIER</span>
              <h1 className="service-hero-heading">{service.name}</h1>
              <p className="service-hero-desc">{service.heroDesc || service.shortDesc}</p>

              <div className="service-highlights-row">
                <div className="highlight-pill">
                  <Clock size={15} />
                  <span>48–72h Proof Turnaround</span>
                </div>
                <div className="highlight-pill">
                  <ShieldCheck size={15} />
                  <span>Unlimited Soft-Copy Revisions</span>
                </div>
              </div>

              <div className="service-actions-row">
                <button
                  type="button"
                  className="pill-btn-dark"
                  onClick={handleEnquire}
                >
                  REQUEST STUDIO RATES FOR {service.name.toUpperCase()}
                </button>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" className="service-hero-image-frame">
              <img src={service.image} alt={service.name} />
              <div className="service-stat-overlay">
                <strong>1,200+</strong>
                <span>Weddings Delivered Annually</span>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 3. Detailed Features & Deliverables */}
      <section className="service-features-section bg-ivory-tint">
        <div className="section-container">
          <RevealOnScroll direction="up">
            <div className="section-header-compact">
              <span className="mini-subhead">ATELIER CAPABILITIES</span>
              <h2 className="editorial-subheading">Comprehensive Studio Scope</h2>
              <p className="team-lead-text">
                We eliminate post-production bottlenecks, allowing photographers to focus purely on shooting and client relationships.
              </p>
            </div>
          </RevealOnScroll>

          <div className="features-four-grid">
            {service.features?.map((feat, idx) => (
              <div key={idx} className="feature-block-tile">
                <div className="feature-icon-badge">
                  <CheckCircle2 size={18} className="icon-gold" />
                </div>
                <h4>{feat}</h4>
                <p>Engineered to match your signature studio profile and Fuji Crystal Archive printing gamut.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Before/After Showcase if Image Editing */}
      {(service.slug === 'image-editing' || service.slug === 'photo-editing-and-album-design') && (
        <section className="service-showcase-section">
          <BeforeAfterSlider />
        </section>
      )}

      {/* 5. Production Workflow Pipeline */}
      <section className="service-workflow-section bg-ivory-tint">
        <div className="section-container">
          <div className="section-header-compact">
            <span className="mini-subhead">FOUR-STEP INTEGRATION</span>
            <h2 className="editorial-subheading">How We Collaborate With Your Studio</h2>
          </div>

          <div className="workflow-steps-timeline">
            <div className="workflow-step-col">
              <span className="step-num">01</span>
              <h4>Upload RAWs or Selects</h4>
              <p>Share files via Dropbox, Google Drive, or WeTransfer. Send sample target grades or previous galleries.</p>
            </div>
            <div className="workflow-step-col">
              <span className="step-num">02</span>
              <h4>Test Batch & Calibration</h4>
              <p>We retouch 10–20 test images free of charge to calibrate color grading, skin tones, and grain structure.</p>
            </div>
            <div className="workflow-step-col">
              <span className="step-num">03</span>
              <h4>Interactive Cloud Proofing</h4>
              <p>Review high-res proofs in our cloud proofing gallery. Pin point-specific comments on any spread.</p>
            </div>
            <div className="workflow-step-col">
              <span className="step-num">04</span>
              <h4>Final Master Delivery</h4>
              <p>Download full-resolution print-ready TIFFs/JPEGs or advance directly to our master bindery for printing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="service-bottom-banner">
        <div className="section-container">
          <div className="commission-banner-box">
            <h2>Outsource Your Post-Production to Master Artisans</h2>
            <p>Request a custom wholesale rate sheet or submit a 15-image free test trial batch today.</p>
            <div className="banner-actions">
              <button
                type="button"
                className="pill-btn-dark"
                onClick={handleEnquire}
              >
                BOOK {service.name.toUpperCase()} CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

