import { studioEmail } from '../utils/studioEmail';
import React, { useState, useEffect, useRef } from 'react';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  CreditCard,
  MessageCircle,
  ShieldCheck
} from 'lucide-react';
import RevealOnScroll from './motion/RevealOnScroll';
import TextReveal from './motion/TextReveal';

export default function ContactSection({ prefilledProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clientType: 'photographer',
    region: 'india',
    service: prefilledProduct || 'Flush Mount Album',
    message: prefilledProduct ? `Inquiring about specifications and pricing for ${prefilledProduct}.` : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({
        ...prev,
        service: prefilledProduct,
        message: prev.message || `Inquiring about specifications and pricing for ${prefilledProduct}.`
      }));
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [prefilledProduct]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      window.location.href = studioEmail('Studio quote enquiry · ' + formData.service, formData);
    } catch (_) {}
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-enquiry-section" ref={formRef}>
      <div className="section-container">
        <div className="contact-header-center">
          <RevealOnScroll direction="down" delay={0.05} distance={12} blur={false}>
            <div className="section-eyebrow-chip">
              <span>DIRECT STUDIO INQUIRIES &amp; COMMISSIONS</span>
            </div>
          </RevealOnScroll>
          <TextReveal as="h2" className="contact-heading" delay={0.08}>
            Request a Bespoke Studio Quote
          </TextReveal>
          <RevealOnScroll direction="up" delay={0.16} distance={18}>
            <p className="contact-lead-text">
              Submit your album specifications or request a physical swatch kit. Our master bindery team will prepare pricing, paper samples, and proofing timelines within 24 hours.
            </p>
          </RevealOnScroll>
        </div>

        <div className="contact-two-column-split">
          {/* Left Column: Direct Atelier Information & Payment Info */}
          <RevealOnScroll direction="left" className="contact-info-column">
            <h3 className="column-heading-serif">Atelier &amp; Studio Desks</h3>

            <div className="atelier-locations-cards">
              <div className="atelier-single-card">
                <div className="atelier-card-header">
                  <MapPin size={16} />
                  <strong>Mumbai Production Atelier</strong>
                </div>
                <p>Ultraa Albums Manufacturing &amp; Hand-Binding Facility</p>
                <p>Industrial Area, Lower Parel / Andheri West, Mumbai, Maharashtra 400053, India</p>
                <div className="atelier-quick-contacts">
                  <a href="tel:+919820088200">
                    <Phone size={13} /> +91 98200 88200
                  </a>
                  <a href="mailto:info@ultraaalbums.com">
                    <Mail size={13} /> info@ultraaalbums.com
                  </a>
                </div>
              </div>

              <div className="atelier-single-card">
                <div className="atelier-card-header">
                  <MapPin size={16} />
                  <strong>United Kingdom &amp; International Desk</strong>
                </div>
                <p>Direct Studio Account Liaison &amp; Sample Dispatch</p>
                <p>Mayfair, London W1J, United Kingdom (By Appointment)</p>
                <div className="atelier-quick-contacts">
                  <a href="mailto:uk@ultraaalbums.com">
                    <Mail size={13} /> uk@ultraaalbums.com
                  </a>
                  <a href="https://wa.me/919820088200?text=Hello%20Ultraa%20Albums%20UK%20Desk" target="_blank" rel="noreferrer">
                    <MessageCircle size={13} /> WhatsApp Concierge Desk
                  </a>
                </div>
              </div>
            </div>

            {/* Payment & Invoicing Assurance Box */}
            <div className="payment-options-box">
              <div className="payment-box-title">
                <CreditCard size={16} />
                <strong>Direct Payment Links &amp; Ordering</strong>
              </div>
              <p>
                We provide secure automated digital payment links and studio invoicing. Approved payment methods include:
              </p>
              <ul className="payment-methods-clean-list">
                <li>• Instant Secure Payment Links (Razorpay &amp; Stripe)</li>
                <li>• Direct RTGS / NEFT / IMPS Bank Transfer for Indian Studios</li>
                <li>• BACS &amp; International Wire Transfer in GBP, USD, and EUR</li>
                <li>• Official GST Tax Invoices &amp; Corporate Purchase Orders</li>
              </ul>
              <div className="security-notice">
                <ShieldCheck size={13} /> 256-Bit Encrypted Studio Transactions
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Column: Interactive Quote Request Form */}
          <RevealOnScroll direction="right" className="contact-form-column">
            {submitted ? (
              <div className="inquiry-success-panel">
                <CheckCircle size={44} className="success-icon-gold" />
                <h3 className="success-heading">Your quote request is ready</h3>
                <p className="success-message">Send your specifications to the atelier from your email app.</p>
                <div className="success-buttons-group">
                  <a
                    href={studioEmail('Quote request · ' + formData.service, formData)}
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp-action-pill"
                  >
                    <MessageCircle size={15} />
                    <span>Open email draft</span>
                  </a>
                  <button
                    type="button"
                    className="new-inquiry-button"
                    onClick={() => setSubmitted(false)}
                  >
                    Edit request
                  </button>
                </div>
              </div>
            ) : (
              <form className="stitch-inquiry-form" onSubmit={handleSubmit}>
                <h3 className="form-title-serif">Request a Custom Quote or Swatch Ring</h3>

                {prefilledProduct && (
                  <div className="prefilled-product-alert">
                    <span>Selected Product: <strong>{prefilledProduct}</strong></span>
                  </div>
                )}

                <div className="form-fields-dual-row">
                  <div className="single-input-field">
                    <label htmlFor="name">Your Name / Studio Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Julian Thorne Studios"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="single-input-field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="studio@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-fields-dual-row">
                  <div className="single-input-field">
                    <label htmlFor="phone">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+91 / +44 Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="single-input-field">
                    <label htmlFor="clientType">Account Type</label>
                    <select
                      id="clientType"
                      name="clientType"
                      value={formData.clientType}
                      onChange={handleChange}
                    >
                      <option value="photographer">Professional Wedding Photographer</option>
                      <option value="studio">Photography Studio / Agency</option>
                      <option value="couple">Wedding Couple / Private Client</option>
                      <option value="event-planner">Luxury Event Planner</option>
                    </select>
                  </div>
                </div>

                <div className="form-fields-dual-row">
                  <div className="single-input-field">
                    <label htmlFor="region">Delivery Destination</label>
                    <select
                      id="region"
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                    >
                      <option value="india">India (Pan-India Studio Delivery)</option>
                      <option value="uk">United Kingdom (UK Studio Direct)</option>
                      <option value="uae">UAE &amp; Middle East</option>
                      <option value="usa">USA &amp; Canada</option>
                      <option value="global">Other International</option>
                    </select>
                  </div>

                  <div className="single-input-field">
                    <label htmlFor="service">Product / Service Desired</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="Flush Mount Album">Flush Mount Album (Heirloom 180°)</option>
                      <option value="Layflat">Layflat Album</option>
                      <option value="Photo Book">Fine Art Photo Book</option>
                      <option value="Luxury Albums">Luxury Albums &amp; Wooden Caskets</option>
                      <option value="Box and Bags">Box and Bags (Presentation Storage)</option>
                      <option value="Slip in Albums">Slip in Albums (Parent Edition)</option>
                      <option value="Sample Swatch Ring">Order Material Swatch Ring (Linen &amp; Leather)</option>
                      <option value="Album Designing">Bespoke Album Designing</option>
                      <option value="Image Editing">Professional Image Retouching</option>
                      <option value="General Commission">General Custom Commission</option>
                    </select>
                  </div>
                </div>

                <div className="single-input-field">
                  <label htmlFor="message">Project Details, Album Size, or Timeline</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Specify dimensions (e.g. 12x12, 11x14), estimated number of spreads, preferred leather/linen colors, or event dates..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="form-submit-pill-btn">
                  <Send size={15} />
                  <span>Prepare email enquiry</span>
                </button>
              </form>
            )}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
