import React, { useEffect, useState } from 'react';
import { X, BookOpen, Download, HelpCircle, FileText, Layout, CheckSquare, ArrowRight } from 'lucide-react';
import { RESOURCES_CATALOG } from '../data/catalogData';

export default function ResourcesModal({ initialTopic, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState(initialTopic || 'faq');

  useEffect(() => {
    if (initialTopic) setActiveTab(initialTopic);
  }, [initialTopic]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="resources-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="resources-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-icon-btn"
          onClick={onClose}
          aria-label="Close Resources"
        >
          <X size={22} />
        </button>

        <div className="resources-modal-header">
          <span className="resources-badge">ATELIER KNOWLEDGE BASE</span>
          <h2 className="resources-modal-title">Studio Resources & Documentation</h2>
        </div>

        {/* Navigation Tabs */}
        <div className="resources-tabs-strip">
          {RESOURCES_CATALOG.map((res) => (
            <button
              key={res.id}
              type="button"
              className={`res-tab-btn ${activeTab === res.id ? 'active' : ''}`}
              onClick={() => setActiveTab(res.id)}
            >
              <span>{res.title}</span>
            </button>
          ))}
        </div>

        {/* Content Body Based on Active Tab */}
        <div className="resources-tab-content-area">
          {activeTab === 'faq' && (
            <div className="tab-pane-box">
              <h3 className="pane-title">Frequently Asked Questions</h3>
              <div className="faq-items-list">
                <div className="faq-item">
                  <strong>What photographic papers do you use for album printing?</strong>
                  <p>We print exclusively on genuine Fuji Crystal Archive silver halide paper (Lustre, Silk Honeycomb, and Deep Matte), rated for 100+ years of color permanence without fading.</p>
                </div>
                <div className="faq-item">
                  <strong>What is the standard turnaround time?</strong>
                  <p>Standard manufacturing takes 7 to 10 business days following soft-copy proof approval. Expedited rush production is available for 3 to 5 business day dispatch.</p>
                </div>
                <div className="faq-item">
                  <strong>Do you ship to the UK, Europe, and USA?</strong>
                  <p>Yes, we ship globally via insured DHL Express and FedEx with door-to-door tracking. UK shipments benefit from our dedicated London desk with transparent GBP billing.</p>
                </div>
                <div className="faq-item">
                  <strong>Can photographers order sample swatch kits?</strong>
                  <p>Yes, we provide physical swatch rings containing authentic Italian leathers, Japanese bookcloth linens, velvet swatches, and hot brass foil stamping samples.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'catalog' && (
            <div className="tab-pane-box">
              <h3 className="pane-title">Official Wholesale Studio Catalog</h3>
              <p>Download our complete technical guide with binding specifications, paper substrate grams, cover materials, and pricing schedules for professional wedding studios.</p>
              <div className="download-catalog-card">
                <Download size={28} className="dl-icon" />
                <div>
                  <strong>Ultraa Albums Wholesale Catalog (PDF)</strong>
                  <span>24 Pages • High Resolution Material Specs & Cover Guide (8.4 MB)</span>
                </div>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="download-action-btn"
                >
                  Request Download Link
                </a>
              </div>
            </div>
          )}

          {activeTab === 'album-designs' && (
            <div className="tab-pane-box">
              <h3 className="pane-title">Album Layout Themes</h3>
              <p>Our in-house design atelier curates albums according to four distinct narrative layout frameworks:</p>
              <div className="designs-grid-two">
                <div className="design-theme-tile">
                  <strong>Classic Minimalist</strong>
                  <p>Generous negative space, museum white framing, and one to two hero images per spread.</p>
                </div>
                <div className="design-theme-tile">
                  <strong>Contemporary Editorial</strong>
                  <p>Full-bleed panoramic landscape spreads paired with asymmetric detail triptychs.</p>
                </div>
                <div className="design-theme-tile">
                  <strong>Indian Fusion & Royal Heritage</strong>
                  <p>Paced for multi-day ceremonies (Mehendi, Sangeet, Haldi, Varmala, Reception) with gold section breaks.</p>
                </div>
                <div className="design-theme-tile">
                  <strong>Documentary Rhythm</strong>
                  <p>Chronological cinematic pacing capturing unscripted laughter, vows, and high-energy dance floors.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'wedding-photo-albums' && (
            <div className="tab-pane-box">
              <h3 className="pane-title">Wedding Photo Albums Showcase</h3>
              <p>Over 120,000 heirloom wedding albums handcrafted since 2012 for celebrations in Udaipur, Lake Como, the Cotswolds, London, and Mumbai.</p>
              <div className="wedding-showcase-summary">
                <p>Every album is custom measured, bound with archival neutral-pH adhesives, and inspected under 5000K daylight simulation prior to white-glove dispatch.</p>
                <a href="#products" onClick={onClose} className="link-arrow">
                  <span>Explore All Album Formats</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          )}

          {activeTab === 'how-to-order' && (
            <div className="tab-pane-box">
              <h3 className="pane-title">How to Order from Ultraa Albums</h3>
              <div className="order-steps-mini">
                <div className="order-step-row">
                  <span className="step-circle">1</span>
                  <div><strong>Upload Selects:</strong> Share high-resolution photos via Dropbox, Drive, or WeTransfer.</div>
                </div>
                <div className="order-step-row">
                  <span className="step-circle">2</span>
                  <div><strong>Digital Proofing:</strong> Review complete page-turn soft-copy proof within 3 business days.</div>
                </div>
                <div className="order-step-row">
                  <span className="step-circle">3</span>
                  <div><strong>Artisanal Binding:</strong> Exposed on Fuji Crystal Archive paper and hand-bound in Mumbai atelier.</div>
                </div>
                <div className="order-step-row">
                  <span className="step-circle">4</span>
                  <div><strong>Tracked Shipping:</strong> Nestled in presentation boxes with insured door-to-door courier delivery.</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'blogs' && (
            <div className="tab-pane-box">
              <h3 className="pane-title">Atelier Journal & Articles</h3>
              <div className="blog-posts-list">
                <article className="blog-mini-item">
                  <strong>Why Archival Silver Halide Beats Standard Digital Press Ink</strong>
                  <span>Learn how continuous tone photochemical paper guarantees 100+ years without color degradation.</span>
                </article>
                <article className="blog-mini-item">
                  <strong>Curating the Narrative: How to Pick 80 Photos from 3,000 Wedding Shots</strong>
                  <span>Editorial sequencing advice from our senior master bookbinder.</span>
                </article>
                <article className="blog-mini-item">
                  <strong>The Tactile Experience: Italian Leather vs Japanese Linen</strong>
                  <span>A guide to selecting the right cover substrate for your wedding aesthetic.</span>
                </article>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

