import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  BookOpen,
  User
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null); // 'albums', 'services', 'uk', 'about', 'resources'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const timeoutRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();

  const handleMouseEnter = (menuKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuKey);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const handleMenuClick = (menuKey) => {
    setActiveMenu((prev) => (prev === menuKey ? null : menuKey));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const toggleMobileAccordion = (key) => {
    setMobileAccordion((prev) => (prev === key ? null : key));
  };

  const isCurrent = (path) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col font-sans" ref={navRef}>
      {/* 1. Atelier Utility Top Bar (36px) */}
      <div className="atelier-utility-topbar">
        <div className="max-w-[1440px] h-full mx-auto px-3 sm:px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 overflow-hidden text-ellipsis whitespace-nowrap text-[11px] text-[#4A463F]">
            <span className="font-semibold uppercase tracking-[0.12em] text-[10px] hidden sm:inline">
              Atelier &amp; Global Delivery:
            </span>
            <a
              href="tel:+919322254315"
              className="font-medium text-[#141310] hover:text-[#635E52] transition-colors"
            >
              +91 93222 54315
            </a>
            <span className="text-[#CCC5BC] hidden md:inline">|</span>
            <span className="hidden md:inline">Mumbai Atelier</span>
            <span className="text-[#CCC5BC] hidden lg:inline">|</span>
            <span className="hidden lg:inline">Express Worldwide Shipping</span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-4 text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase shrink-0">
            <Link
              to="/pay-online"
              className="flex items-center gap-1.5 text-[#1B1C1A] hover:text-[#635E52] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#635E52]"></span>
              <span>Pay Online</span>
            </Link>
            <span className="text-[#CCC5BC] hidden sm:inline">|</span>
            <Link
              to="/resources/catalog"
              className="text-[#4A463F] hover:text-[#1B1C1A] transition-colors hidden sm:inline"
            >
              Catalog &amp; Swatches
            </Link>
            <span className="text-[#CCC5BC] hidden md:inline">|</span>
            <a
              href="https://wa.me/919322254315"
              target="_blank"
              rel="noreferrer"
              className="text-[#4A463F] hover:text-[#1B1C1A] transition-colors hidden md:inline"
            >
              Concierge WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* 2. Global Sticky Masthead */}
      <header className="atelier-main-header">
        <div className="max-w-[1440px] h-full mx-auto px-3 sm:px-6 md:px-12 flex items-center justify-between gap-3 sm:gap-6">
          {/* Brand Logo */}
          <Link to="/" className="flex flex-col group shrink-0">
            <span className="font-serif text-[18px] sm:text-[22px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#141310] group-hover:text-[#635E52] transition-colors leading-tight font-normal">
              Ultraa Albums
            </span>
            <span className="font-sans uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[#635E52] text-[8px] sm:text-[9px] font-semibold">
              Artisanal Bookbinders &amp; Photo Lab
            </span>
          </Link>

          {/* Desktop Primary Nav */}
          <nav className="hidden xl:flex items-center gap-7 h-full text-[11px] font-semibold tracking-[0.14em] uppercase text-[#4A463F]">
            {/* HOME */}
            <Link
              to="/"
              className={`py-6 transition-colors hover:text-[#141310] ${isCurrent('/') ? 'text-[#141310] font-bold' : ''}`}
            >
              Home
            </Link>

            {/* ALBUMS MEGA MENU */}
            <div
              className="group h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('albums')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`py-6 flex items-center gap-1 transition-colors hover:text-[#141310] bg-transparent border-none uppercase font-semibold text-[11px] tracking-[0.14em] ${activeMenu === 'albums' ? 'text-[#141310]' : ''}`}
                onClick={() => handleMenuClick('albums')}
                aria-expanded={activeMenu === 'albums'}
              >
                <span>Albums</span>
                <ChevronDown size={13} className="text-[#635E52]" />
              </button>

              {activeMenu === 'albums' && (
                <div
                  className="atelier-dropdown-full-pane"
                  onMouseEnter={() => handleMouseEnter('albums')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-8 py-8 px-4 md:px-12">
                    <div className="col-span-3">
                      <p className="font-semibold uppercase tracking-[0.2em] text-[#635E52] text-[10px] mb-4">
                        Collection 01 • Layflat &amp; Books
                      </p>
                      <div className="flex flex-col space-y-3 font-normal text-[14px] normal-case text-[#4A463F]">
                        <Link to="/products/flush-mount-album" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">
                          Flush Mount Album
                        </Link>
                        <Link to="/products/layflat" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">
                          Layflat Books
                        </Link>
                        <Link to="/products/photo-book" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">
                          Photo Book
                        </Link>
                        <Link to="/products/luxury-albums" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">
                          Luxury Albums
                        </Link>
                      </div>
                    </div>

                    <div className="col-span-3">
                      <p className="font-semibold uppercase tracking-[0.2em] text-[#635E52] text-[10px] mb-4">
                        Collection 02 • Presentation &amp; Storage
                      </p>
                      <div className="flex flex-col space-y-3 font-normal text-[14px] normal-case text-[#4A463F]">
                        <Link to="/products/box-and-bags" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">
                          Box and Bags
                        </Link>
                        <Link to="/products/slip-in-albums" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">
                          Slip in Albums
                        </Link>
                        <Link to="/resources/catalog" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">
                          Bespoke Swatches &amp; Finishes
                        </Link>
                      </div>
                    </div>

                    <div className="col-span-6 bg-[#EFEEEA] p-6 rounded-none flex items-center justify-between border border-[#EAE6DF]">
                      <div className="max-w-sm">
                        <span className="font-semibold uppercase tracking-[0.14em] text-[#635E52] text-[10px]">
                          Atelier Spotlight
                        </span>
                        <h4 className="font-serif text-[20px] text-[#141310] mt-1 mb-2 normal-case font-normal">
                          Hand-Bound Japanese Silk Spreads
                        </h4>
                        <p className="text-[13px] text-[#4A463F] mb-4 normal-case leading-relaxed">
                          Archival Fuji Crystal Halide paper, micro-debossed leather covers, and seamless panoramic presentation.
                        </p>
                        <Link
                          to="/products/luxury-albums"
                          onClick={() => setActiveMenu(null)}
                          className="font-semibold uppercase tracking-[0.14em] text-[11px] text-[#141310] hover:text-[#635E52] inline-flex items-center gap-1"
                        >
                          Explore Specimen →
                        </Link>
                      </div>
                      <div className="w-24 h-24 bg-[#E3E2DF] flex items-center justify-center">
                        <BookOpen size={32} className="text-[#635E52]" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <div
              className="group h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`py-6 flex items-center gap-1 transition-colors hover:text-[#141310] bg-transparent border-none uppercase font-semibold text-[11px] tracking-[0.14em] ${activeMenu === 'services' ? 'text-[#141310]' : ''}`}
                onClick={() => handleMenuClick('services')}
                aria-expanded={activeMenu === 'services'}
              >
                <span>Services</span>
                <ChevronDown size={13} className="text-[#635E52]" />
              </button>

              {activeMenu === 'services' && (
                <div
                  className="atelier-dropdown-full-pane"
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="max-w-[1440px] mx-auto grid grid-cols-4 gap-8 py-8 px-4 md:px-12">
                    <Link
                      to="/services/image-editing"
                      onClick={() => setActiveMenu(null)}
                      className="p-4 hover:bg-[#FAF9F5] transition-colors border border-transparent hover:border-[#EAE6DF]"
                    >
                      <p className="font-semibold uppercase text-[#635E52] text-[10px] mb-1">Lab Retouching</p>
                      <h5 className="font-serif text-[18px] text-[#141310] normal-case font-normal">Image Editing</h5>
                      <p className="text-[13px] text-[#4A463F] mt-2 normal-case leading-relaxed">Master skin tones, frequency separation, and color grading for fine art.</p>
                    </Link>
                    <Link
                      to="/services/photo-editing-and-album-design"
                      onClick={() => setActiveMenu(null)}
                      className="p-4 hover:bg-[#FAF9F5] transition-colors border border-transparent hover:border-[#EAE6DF]"
                    >
                      <p className="font-semibold uppercase text-[#635E52] text-[10px] mb-1">Curated Spreads</p>
                      <h5 className="font-serif text-[18px] text-[#141310] normal-case font-normal">Photo Editing &amp; Album Design</h5>
                      <p className="text-[13px] text-[#4A463F] mt-2 normal-case leading-relaxed">End-to-end narrative sequencing from raw capture to bound volume.</p>
                    </Link>
                    <Link
                      to="/services/wedding-photography"
                      onClick={() => setActiveMenu(null)}
                      className="p-4 hover:bg-[#FAF9F5] transition-colors border border-transparent hover:border-[#EAE6DF]"
                    >
                      <p className="font-semibold uppercase text-[#635E52] text-[10px] mb-1">Production</p>
                      <h5 className="font-serif text-[18px] text-[#141310] normal-case font-normal">Wedding Photography</h5>
                      <p className="text-[13px] text-[#4A463F] mt-2 normal-case leading-relaxed">Editorial documentation crew operating globally across high-profile commissions.</p>
                    </Link>
                    <Link
                      to="/services/album-designing"
                      onClick={() => setActiveMenu(null)}
                      className="p-4 hover:bg-[#FAF9F5] transition-colors border border-transparent hover:border-[#EAE6DF]"
                    >
                      <p className="font-semibold uppercase text-[#635E52] text-[10px] mb-1">Editorial Layout</p>
                      <h5 className="font-serif text-[18px] text-[#141310] normal-case font-normal">Album Designing</h5>
                      <p className="text-[13px] text-[#4A463F] mt-2 normal-case leading-relaxed">Minimalist architectural grids and typography tailored to your brand.</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* FOR UK */}
            <div
              className="group h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('uk')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`py-6 flex items-center gap-1 transition-colors hover:text-[#141310] bg-transparent border-none uppercase font-semibold text-[11px] tracking-[0.14em] ${activeMenu === 'uk' || location.pathname.startsWith('/for-uk') ? 'text-[#141310] font-bold' : ''}`}
                onClick={() => handleMenuClick('uk')}
                aria-expanded={activeMenu === 'uk'}
              >
                <span>For UK</span>
                <ChevronDown size={13} className="text-[#635E52]" />
              </button>

              {activeMenu === 'uk' && (
                <div
                  className="atelier-dropdown-full-pane"
                  onMouseEnter={() => handleMouseEnter('uk')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="max-w-[1440px] mx-auto flex gap-12 py-8 px-4 md:px-12">
                    <div className="w-1/4 pr-8 border-r border-[#EAE6DF]">
                      <span className="font-semibold uppercase tracking-[0.2em] text-[#635E52] text-[10px]">
                        United Kingdom Liaison
                      </span>
                      <h4 className="font-serif text-[20px] text-[#141310] mt-2 mb-2 normal-case font-normal">
                        Dedicated Logistics &amp; Sterling Billing
                      </h4>
                      <p className="text-[13px] text-[#4A463F] normal-case leading-relaxed">
                        Duty-paid priority air transit directly to studios across London, Edinburgh, and Manchester.
                      </p>
                    </div>
                    <div className="w-3/4 grid grid-cols-3 gap-6 font-normal text-[14px] normal-case text-[#4A463F]">
                      <Link to="/for-uk/flush-mount-album-uk" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">Flush Mount for UK</Link>
                      <Link to="/for-uk/luxury-albums-uk" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">Luxury Albums for UK</Link>
                      <Link to="/for-uk/box-and-bags-uk" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">Box and Bags for UK</Link>
                      <Link to="/for-uk/slip-in-albums-uk" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">Slip in Albums for UK</Link>
                      <Link to="/for-uk/photo-book-uk" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">Photo Book for UK</Link>
                      <Link to="/for-uk/image-editing-uk" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">Image Editing for UK</Link>
                      <Link to="/for-uk/photography-uk" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">Photography for UK</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ABOUT */}
            <div
              className="group h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/about"
                className={`py-6 flex items-center gap-1 transition-colors hover:text-[#141310] ${isCurrent('/about') ? 'text-[#141310] font-bold' : ''}`}
                onClick={() => setActiveMenu(null)}
              >
                <span>About</span>
                <ChevronDown size={13} className="text-[#635E52]" />
              </Link>

              {activeMenu === 'about' && (
                <div
                  className="atelier-dropdown-full-pane"
                  onMouseEnter={() => handleMouseEnter('about')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="max-w-[1440px] mx-auto grid grid-cols-6 gap-6 py-8 px-4 md:px-12 font-normal text-[14px] normal-case text-[#4A463F]">
                    <Link to="/about#our-story" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">Our Story</Link>
                    <Link to="/about#craftsmanship" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">Quality &amp; Craftsmanship</Link>
                    <Link to="/about#why-choose-us" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">Why Choose Ultraa</Link>
                    <Link to="/about#global-presence" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">Global Presence</Link>
                    <Link to="/about#our-team" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">Our Team</Link>
                    <Link to="/about#how-we-work" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">How We Work</Link>
                  </div>
                </div>
              )}
            </div>

            {/* RESOURCES */}
            <div
              className="group h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`py-6 flex items-center gap-1 transition-colors hover:text-[#141310] bg-transparent border-none uppercase font-semibold text-[11px] tracking-[0.14em] ${activeMenu === 'resources' ? 'text-[#141310]' : ''}`}
                onClick={() => handleMenuClick('resources')}
                aria-expanded={activeMenu === 'resources'}
              >
                <span>Resources</span>
                <ChevronDown size={13} className="text-[#635E52]" />
              </button>

              {activeMenu === 'resources' && (
                <div
                  className="atelier-dropdown-full-pane"
                  onMouseEnter={() => handleMouseEnter('resources')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="max-w-[1440px] mx-auto grid grid-cols-5 gap-6 py-8 px-4 md:px-12 font-normal text-[14px] normal-case text-[#4A463F]">
                    <Link to="/resources/album-designs" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">Album Designs</Link>
                    <Link to="/resources/wedding-photo-albums" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">Wedding Photo Albums</Link>
                    <Link to="/resources/blogs" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">Blogs</Link>
                    <Link to="/resources/faq" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">FAQ</Link>
                    <Link to="/resources/catalog" onClick={() => setActiveMenu(null)} className="hover:text-[#141310] transition-colors">Catalog Download</Link>
                  </div>
                </div>
              )}
            </div>

            {/* CONTACT */}
            <Link
              to="/contact"
              className={`py-6 transition-colors hover:text-[#141310] ${isCurrent('/contact') ? 'text-[#141310] font-bold' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <Link
              to="/enquire"
              className="px-3.5 py-1.5 sm:px-6 sm:py-2.5 rounded-none bg-[#292724] text-[#FAF9F5] font-semibold text-[10px] sm:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.2em] hover:bg-[#141310] transition-all duration-200"
            >
              Enquire
            </Link>

            <Link
              to="/contact"
              className="w-8 h-8 rounded-none bg-[#141310] flex items-center justify-center text-[#FFFFFF] hover:bg-[#635E52] transition-colors hidden sm:flex"
              aria-label="Studio Concierge"
            >
              <User size={15} />
            </Link>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="xl:hidden p-1.5 text-[#141310] bg-transparent border-none cursor-pointer flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[100px] sm:top-[116px] bg-black/40 z-40 xl:hidden backdrop-blur-xs transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-xs sm:max-w-sm bg-[#FAF9F5] h-full overflow-y-auto p-5 sm:p-6 space-y-4 shadow-xl border-r border-[#EAE6DF]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-2 border-b border-[#EAE6DF] pb-4">
              <Link
                to="/"
                className="py-2 text-[13px] font-semibold tracking-wider uppercase text-[#141310]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Albums Accordion */}
              <div>
                <button
                  type="button"
                  className="w-full flex items-center justify-between py-2 text-[13px] font-semibold tracking-wider uppercase text-[#141310] bg-transparent border-none text-left"
                  onClick={() => toggleMobileAccordion('albums')}
                >
                  <span>Albums</span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform ${mobileAccordion === 'albums' ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileAccordion === 'albums' && (
                  <div className="pl-4 py-2 space-y-2 text-[14px] text-[#4A463F] flex flex-col">
                    <Link to="/products/flush-mount-album" onClick={() => setMobileMenuOpen(false)}>Flush Mount Album</Link>
                    <Link to="/products/layflat" onClick={() => setMobileMenuOpen(false)}>Layflat Books</Link>
                    <Link to="/products/photo-book" onClick={() => setMobileMenuOpen(false)}>Photo Book</Link>
                    <Link to="/products/luxury-albums" onClick={() => setMobileMenuOpen(false)}>Luxury Albums</Link>
                    <Link to="/products/box-and-bags" onClick={() => setMobileMenuOpen(false)}>Box and Bags</Link>
                    <Link to="/products/slip-in-albums" onClick={() => setMobileMenuOpen(false)}>Slip in Albums</Link>
                  </div>
                )}
              </div>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  type="button"
                  className="w-full flex items-center justify-between py-2 text-[13px] font-semibold tracking-wider uppercase text-[#141310] bg-transparent border-none text-left"
                  onClick={() => toggleMobileAccordion('services')}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform ${mobileAccordion === 'services' ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileAccordion === 'services' && (
                  <div className="pl-4 py-2 space-y-2 text-[14px] text-[#4A463F] flex flex-col">
                    <Link to="/services/image-editing" onClick={() => setMobileMenuOpen(false)}>Image Editing</Link>
                    <Link to="/services/photo-editing-and-album-design" onClick={() => setMobileMenuOpen(false)}>Photo Editing &amp; Album Design</Link>
                    <Link to="/services/wedding-photography" onClick={() => setMobileMenuOpen(false)}>Wedding Photography</Link>
                    <Link to="/services/album-designing" onClick={() => setMobileMenuOpen(false)}>Album Designing</Link>
                  </div>
                )}
              </div>

              {/* Mobile For UK */}
              <div>
                <button
                  type="button"
                  className="w-full flex items-center justify-between py-2 text-[13px] font-semibold tracking-wider uppercase text-[#141310] bg-transparent border-none text-left"
                  onClick={() => toggleMobileAccordion('uk')}
                >
                  <span>For UK</span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform ${mobileAccordion === 'uk' ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileAccordion === 'uk' && (
                  <div className="pl-4 py-2 space-y-2 text-[14px] text-[#4A463F] flex flex-col">
                    <Link to="/for-uk" onClick={() => setMobileMenuOpen(false)}>UK Desk Overview</Link>
                    <Link to="/for-uk/flush-mount-album-uk" onClick={() => setMobileMenuOpen(false)}>Flush Mount for UK</Link>
                    <Link to="/for-uk/luxury-albums-uk" onClick={() => setMobileMenuOpen(false)}>Luxury Albums for UK</Link>
                    <Link to="/for-uk/box-and-bags-uk" onClick={() => setMobileMenuOpen(false)}>Box and Bags for UK</Link>
                    <Link to="/for-uk/slip-in-albums-uk" onClick={() => setMobileMenuOpen(false)}>Slip in Albums for UK</Link>
                  </div>
                )}
              </div>

              {/* Mobile About */}
              <Link
                to="/about"
                className="py-2 text-[13px] font-semibold tracking-wider uppercase text-[#141310]"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Our Atelier
              </Link>

              {/* Mobile Resources */}
              <Link
                to="/resources/catalog"
                className="py-2 text-[13px] font-semibold tracking-wider uppercase text-[#141310]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources &amp; Catalog
              </Link>

              {/* Mobile Contact */}
              <Link
                to="/contact"
                className="py-2 text-[13px] font-semibold tracking-wider uppercase text-[#141310]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Concierge
              </Link>
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <Link
                to="/pay-online"
                className="w-full py-3 text-center bg-[#EFEEEA] text-[#141310] font-semibold text-[11px] uppercase tracking-widest border border-[#CCC5BC]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pay Online Portal
              </Link>
              <Link
                to="/enquire"
                className="w-full py-3 text-center bg-[#292724] text-[#FAF9F5] font-semibold text-[11px] uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
