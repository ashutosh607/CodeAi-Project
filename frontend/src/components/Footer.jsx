import React from 'react';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS_CATALOG } from '../data/catalogData';

export default function Footer({ onOpenPayOnline }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="charcoal-site-footer">
      <div className="section-container">
        {/* Main Editorial Footer Grid */}
        <div className="footer-categorized-grid">
          {/* Brand Atelier Summary */}
          <div className="footer-col-summary">
            <h3 className="footer-brand-title">ULTRAA ALBUMS</h3>
            <p className="footer-brand-mission">
              Ultraa Albums is a premier handcrafted photo album manufacturing, design, and printing atelier catering to professional photographers and wedding clients worldwide.
            </p>
            <div className="footer-contact-details">
              <div className="contact-detail-line">
                <MapPin size={14} className="icon-gold" />
                <span>Marol Industrial Area, Andheri East, Mumbai, MH - 400059</span>
              </div>
              <div className="contact-detail-line">
                <Phone size={14} className="icon-gold" />
                <a href="tel:+919820088200" style={{ color: 'inherit' }}>+91 98200 88200</a>
              </div>
              <div className="contact-detail-line">
                <Mail size={14} className="icon-gold" />
                <a href="mailto:info@ultraaalbums.com" style={{ color: 'inherit' }}>info@ultraaalbums.com</a>
              </div>
            </div>
          </div>

          {/* 1. EXPLORE PRODUCTS */}
          <div className="footer-col-links">
            <h4 className="footer-column-heading">EXPLORE PRODUCTS</h4>
            <ul className="footer-links-list">
              {PRODUCTS_CATALOG.map((p) => (
                <li key={p.id}>
                  <Link to={`/products/${p.slug}`}>
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. SERVICES */}
          <div className="footer-col-links">
            <h4 className="footer-column-heading">SERVICES</h4>
            <ul className="footer-links-list">
              <li><Link to="/services/image-editing">Image Editing</Link></li>
              <li><Link to="/services/photo-editing-and-album-design">Photo Editing & Album Design</Link></li>
              <li><Link to="/services/wedding-photography">Wedding Photography</Link></li>
              <li><Link to="/services/album-designing">Album Designing</Link></li>
            </ul>
          </div>

          {/* 3. COMPANY */}
          <div className="footer-col-links">
            <h4 className="footer-column-heading">COMPANY</h4>
            <ul className="footer-links-list">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about#our-team">Our Team of Artisans</Link></li>
              <li><Link to="/about#craftsmanship">Quality & Craftsmanship</Link></li>
              <li><Link to="/about#how-we-work">How We Work</Link></li>
              <li><Link to="/contact">Contact Atelier</Link></li>
            </ul>
          </div>

          {/* 4. RESOURCES */}
          <div className="footer-col-links">
            <h4 className="footer-column-heading">RESOURCES</h4>
            <ul className="footer-links-list">
              <li><Link to="/resources/album-designs">Album Designs</Link></li>
              <li><Link to="/resources/wedding-photo-albums">Wedding Photo Albums</Link></li>
              <li><Link to="/resources/blogs">Blogs</Link></li>
              <li><Link to="/resources/faq">FAQ</Link></li>
              <li><Link to="/resources/catalog">Download Catalog</Link></li>
              <li><Link to="/resources/how-to-order">How to Order</Link></li>
            </ul>
          </div>

          {/* 5. INTERNATIONAL & SUPPORT */}
          <div className="footer-col-links">
            <h4 className="footer-column-heading">INTERNATIONAL</h4>
            <ul className="footer-links-list">
              <li><Link to="/for-uk">For UK Studio Desk</Link></li>
              <li><Link to="/for-uk/flush-mount-album-uk">Flush Mount Album for UK</Link></li>
              <li><Link to="/for-uk/luxury-albums-uk">Luxury Albums for UK</Link></li>
              <li><Link to="/for-uk/box-and-bags-uk">Box and Bags for UK</Link></li>
              <li><Link to="/for-uk/slip-in-albums-uk">Slip in Albums for UK</Link></li>
              <li><Link to="/for-uk/image-editing-uk">Image Editing for UK</Link></li>
            </ul>
          </div>

          <div className="footer-col-links">
            <h4 className="footer-column-heading">SUPPORT</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/pay-online" className="highlight-pay">
                  Pay Online
                </Link>
              </li>
              <li><Link to="/contact">Contact Desk</Link></li>
              <li><Link to="/resources/faq">Care & Preservation</Link></li>
              <li><Link to="/enquire">Request a Quote</Link></li>
            </ul>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="footer-charcoal-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom-copyright-strip">
          <p className="copyright-label">
            © {new Date().getFullYear()} Ultraa Albums. Handcrafted with museum-grade Fuji Crystal Archive chemistry. All rights reserved.
          </p>

          <div className="footer-utility-links">
            <Link to="/about">About Atelier</Link>
            <span className="dot">•</span>
            <Link to="/resources/faq">Terms & Quality Guarantee</Link>
            <span className="dot">•</span>
            <button
              type="button"
              className="scroll-top-anchor"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
