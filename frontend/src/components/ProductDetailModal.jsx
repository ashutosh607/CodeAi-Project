import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ShieldCheck, HelpCircle, Layers, Sparkles } from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/catalogData';

export default function ProductDetailModal({ product, onClose, onEnquire }) {
  const [activeImage, setActiveImage] = useState(product?.gallery?.[0] || product?.image || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[1] || product?.sizes?.[0] || '');

  useEffect(() => {
    if (product) {
      setActiveImage(product.gallery?.[0] || product.image);
      setSelectedSize(product.sizes?.[1] || product.sizes?.[0]);
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const relatedProducts = PRODUCTS_CATALOG.filter((p) =>
    product.relatedIds?.includes(p.id)
  );

  return (
    <div className="product-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-product-title">
      <div className="product-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-icon-btn"
          onClick={onClose}
          aria-label="Close Product Details"
        >
          <X size={22} />
        </button>

        {/* 1. Product Hero Header */}
        <div className="modal-hero-strip">
          <span className="modal-category-tag">{product.groupLabel}</span>
          <h2 id="modal-product-title" className="modal-product-heading">{product.name}</h2>
          <p className="modal-product-subtitle">{product.subtitle}</p>
        </div>

        <div className="modal-content-grid">
          {/* Left Column: Image Gallery */}
          <div className="modal-gallery-column">
            <div className="modal-main-image-frame">
              <img src={activeImage} alt={product.name} className="modal-main-img" />
            </div>

            {product.gallery?.length > 1 && (
              <div className="modal-thumbnails-strip">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`modal-thumb-btn ${activeImage === img ? 'active' : ''}`}
                    onClick={() => setActiveImage(img)}
                    aria-label={`View photo ${idx + 1}`}
                  >
                    <img src={img} alt="" />
                  </button>
                ))}
              </div>
            )}

            {/* Quality Seal */}
            <div className="modal-quality-seal-card">
              <ShieldCheck size={20} className="seal-icon" />
              <div>
                <strong>100+ Year Archival Guarantee</strong>
                <span>Printed on Fuji Crystal Archive silver halide paper with 1.1mm substrate boards.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Specifications & Configuration */}
          <div className="modal-specs-column">
            {/* 2. Introduction */}
            <div className="modal-section-block">
              <h3 className="block-title">Overview</h3>
              <p className="block-body-text">{product.heroDesc}</p>
            </div>

            {/* 4. Available Sizes */}
            {product.sizes?.length > 0 && (
              <div className="modal-section-block">
                <h3 className="block-title">Available Sizes & Formats</h3>
                <div className="sizes-selection-grid">
                  {product.sizes.map((sz, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`size-choice-btn ${selectedSize?.name === sz.name ? 'active' : ''}`}
                      onClick={() => setSelectedSize(sz)}
                    >
                      <span className="size-name">{sz.name}</span>
                      <span className="size-desc">{sz.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Materials & Finishes */}
            {product.materials?.length > 0 && (
              <div className="modal-section-block">
                <h3 className="block-title">Cover Materials & Textiles</h3>
                <ul className="modal-checklist">
                  {product.materials.map((m, idx) => (
                    <li key={idx}>
                      <Check size={14} className="check-gold" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 6. Customization Options */}
            {product.customization?.length > 0 && (
              <div className="modal-section-block">
                <h3 className="block-title">Bespoke Options</h3>
                <ul className="modal-checklist">
                  {product.customization.map((c, idx) => (
                    <li key={idx}>
                      <Sparkles size={14} className="check-gold" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 7. Spread Examples */}
            {product.spreads?.length > 0 && (
              <div className="modal-section-block">
                <h3 className="block-title">Double-Page Panoramic Spreads</h3>
                <div className="spreads-mini-list">
                  {product.spreads.map((sp, idx) => (
                    <div key={idx} className="spread-mini-card">
                      <strong>{sp.title}</strong>
                      <p>{sp.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 9. FAQs */}
            {product.faqs?.length > 0 && (
              <div className="modal-section-block">
                <h3 className="block-title">Frequently Asked Questions</h3>
                <div className="modal-faqs-accordion">
                  {product.faqs.map((faq, idx) => (
                    <div key={idx} className="modal-faq-row">
                      <span className="faq-question">Q: {faq.q}</span>
                      <p className="faq-answer">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 10. Enquire About This Product CTA */}
            <div className="modal-enquire-action-box">
              <button
                type="button"
                className="modal-primary-enquire-btn"
                onClick={() => {
                  onClose();
                  onEnquire(product.name);
                }}
              >
                <span>Enquire About {product.name}</span>
                <ArrowRight size={16} />
              </button>
              <span className="action-hint">Carries {product.name} directly into your inquiry form</span>
            </div>

            {/* 8. Related Products */}
            {relatedProducts.length > 0 && (
              <div className="modal-section-block modal-related-block">
                <h3 className="block-title">You May Also Consider</h3>
                <div className="related-products-row">
                  {relatedProducts.map((rel) => (
                    <div
                      key={rel.id}
                      className="related-prod-card"
                      onClick={() => {
                        setActiveImage(rel.gallery?.[0] || rel.image);
                        setSelectedSize(rel.sizes?.[0]);
                      }}
                    >
                      <img src={rel.image} alt={rel.name} />
                      <div className="related-info">
                        <strong>{rel.name}</strong>
                        <span>{rel.subtitle}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

