import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail, Globe, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      {/* Top Announcement Bar */}
      <div className="top-announcement-bar">
        <div className="announcement-content">
          <span className="announcement-pill">Master Bookbinders</span>
          <span className="announcement-text">
            Handcrafted Heirloom Wedding Albums • Pan-India Studio Fulfillment & Global Delivery (UK, US, UAE)
          </span>
          <a href="#uk-studio" className="announcement-link">
            <span>UK Studio Desk</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Main Editorial Header */}
      <div className="main-navbar-container">
        <div className="nav-brand-group">
          <a href="#" className="brand-logo-link">
            <span className="brand-logo-title">ULTRAA ALBUMS</span>
            <span className="brand-logo-sub">FINE ART HEIRLOOM BINDERY • EST. MUMBAI</span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-navigation" aria-label="Main Navigation">
          <ul className="nav-links-list">
            <li>
              <a href="#collections" className="nav-link-item">
                Collections
              </a>
            </li>
            <li>
              <a href="#craftsmanship" className="nav-link-item">
                Craftsmanship
              </a>
            </li>
            <li>
              <a href="#materials" className="nav-link-item">
                Materials & Foil
              </a>
            </li>
            <li>
              <a href="#album-design" className="nav-link-item">
                Album Design
              </a>
            </li>
            <li>
              <a href="#image-editing" className="nav-link-item">
                Image Editing
              </a>
            </li>
            <li>
              <a href="#photography" className="nav-link-item">
                Photography
              </a>
            </li>
            <li>
              <a href="#uk-studio" className="nav-link-item uk-badge-link">
                UK Studio
              </a>
            </li>
            <li>
              <a href="#process" className="nav-link-item">
                Process
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link-item">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Header Action CTAs */}
        <div className="nav-actions-group">
          <a href="#contact" className="nav-swatch-btn">
            Sample Swatch Kit
          </a>
          <a href="#contact" className="nav-quote-btn">
            Request Quote
          </a>
          <button
            type="button"
            className="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay">
          <div className="mobile-drawer-content">
            <div className="mobile-drawer-header">
              <span className="brand-logo-title">ULTRAA ALBUMS</span>
              <button
                type="button"
                className="close-drawer-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>
            </div>

            <ul className="mobile-nav-list">
              <li>
                <a href="#living-album" onClick={() => setMobileMenuOpen(false)}>
                  The Living Album 3D Experience
                </a>
              </li>
              <li>
                <a href="#collections" onClick={() => setMobileMenuOpen(false)}>
                  Album Collections (Flush Mount & Luxury)
                </a>
              </li>
              <li>
                <a href="#craftsmanship" onClick={() => setMobileMenuOpen(false)}>
                  Artisanal Craftsmanship & Substrates
                </a>
              </li>
              <li>
                <a href="#materials" onClick={() => setMobileMenuOpen(false)}>
                  Materials, Leather & Foil Finishes
                </a>
              </li>
              <li>
                <a href="#album-design" onClick={() => setMobileMenuOpen(false)}>
                  Bespoke Album Designing
                </a>
              </li>
              <li>
                <a href="#image-editing" onClick={() => setMobileMenuOpen(false)}>
                  Professional Image Retouching
                </a>
              </li>
              <li>
                <a href="#photography" onClick={() => setMobileMenuOpen(false)}>
                  Wedding & Event Photography
                </a>
              </li>
              <li>
                <a href="#uk-studio" onClick={() => setMobileMenuOpen(false)}>
                  UK Studio & Dedicated Collections
                </a>
              </li>
              <li>
                <a href="#process" onClick={() => setMobileMenuOpen(false)}>
                  How The Process Works
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Studio Enquiry & Swatch Kit
                </a>
              </li>
            </ul>

            <div className="mobile-drawer-footer">
              <div className="footer-contact-item">
                <Phone size={15} />
                <span>Mumbai Atelier & Global WhatsApp</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={15} />
                <span>bespoke@ultraaalbums.com</span>
              </div>
              <a
                href="#contact"
                className="mobile-cta-action"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request Custom Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

