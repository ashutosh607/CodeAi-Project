import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  MessageCircle,
  BookOpen
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import AnnouncementTicker from './AnnouncementTicker';

export default function Header({ onOpenPayOnline }) {
  const [activeMenu, setActiveMenu] = useState(null); // 'albums' | 'services' | 'uk' | 'about' | 'resources'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();

  // Scroll detection for sticky elevated styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuKey);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const handleMenuClick = (menuKey) => {
    setActiveMenu((prev) => (prev === menuKey ? null : menuKey));
  };

  // Close dropdowns on route changes, outside clicks or Escape key
  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col font-sans transition-shadow duration-300 ${
        isScrolled ? 'shadow-[0_8px_24px_-6px_rgba(32,30,27,0.08)]' : ''
      }`}
      ref={navRef}
    >
      {/* 1. Top Announcement Strip — Text Only Infinite Ticker */}
      <AnnouncementTicker />

      {/* 2. Main Luxury Navbar */}
      <header
        className={`w-full relative transition-all duration-300 border-b border-[#DED5C9] ${
          isScrolled
            ? 'bg-[#F7F3EC]/96 backdrop-blur-md h-[72px]'
            : 'bg-[#F7F3EC]/92 backdrop-blur-sm h-[76px] sm:h-[82px]'
        }`}
      >
        <div className="max-w-[1440px] h-full mx-auto px-4 sm:px-6 md:px-10 lg:px-12 flex items-center justify-between gap-4">
          {/* Brand Wordmark with Hairline Divider */}
          <div className="flex items-center gap-4 lg:gap-6 shrink-0">
            <Link to="/" className="flex flex-col group py-1" aria-label="Ultraa Albums Home">
              <span className="font-serif text-[18px] sm:text-[21px] md:text-[23px] uppercase tracking-[0.2em] text-[#201E1B] group-hover:text-[#B99A69] transition-colors leading-tight font-normal">
                Ultraa Albums
              </span>
              <span className="font-sans uppercase tracking-[0.24em] text-[#777066] text-[8px] sm:text-[9px] font-medium mt-0.5">
                Artisanal Bookbinders &amp; Photo Lab
              </span>
            </Link>
            <div className="hidden lg:block w-[1px] h-8 bg-[#DED5C9]" aria-hidden="true" />
          </div>

          {/* Desktop Primary Nav */}
          <nav className="hidden xl:flex items-center gap-7 lg:gap-8 h-full text-[11px] font-medium tracking-[0.16em] uppercase text-[#777066]">
            {/* HOME */}
            <Link
              to="/"
              className={`relative py-6 transition-colors hover:text-[#201E1B] ${
                isCurrent('/') ? 'text-[#201E1B] font-semibold' : ''
              }`}
            >
              <span>Home</span>
              {isCurrent('/') && (
                <span className="absolute bottom-5 left-0 right-0 h-[1.5px] bg-[#201E1B]" />
              )}
            </Link>

            {/* ALBUMS */}
            <div
              className="h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('albums')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`py-6 flex items-center gap-1.5 transition-colors hover:text-[#201E1B] bg-transparent border-none uppercase text-[11px] font-medium tracking-[0.16em] cursor-pointer ${
                  activeMenu === 'albums' || location.pathname.startsWith('/products')
                    ? 'text-[#201E1B] font-semibold'
                    : ''
                }`}
                onClick={() => handleMenuClick('albums')}
                aria-expanded={activeMenu === 'albums'}
              >
                <span>Albums</span>
                <ChevronDown
                  size={12}
                  className={`text-[#777066] transition-transform duration-200 ${
                    activeMenu === 'albums' ? 'rotate-180 text-[#201E1B]' : ''
                  }`}
                />
              </button>
            </div>

            {/* SERVICES */}
            <div
              className="h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`py-6 flex items-center gap-1.5 transition-colors hover:text-[#201E1B] bg-transparent border-none uppercase text-[11px] font-medium tracking-[0.16em] cursor-pointer ${
                  activeMenu === 'services' || location.pathname.startsWith('/services')
                    ? 'text-[#201E1B] font-semibold'
                    : ''
                }`}
                onClick={() => handleMenuClick('services')}
                aria-expanded={activeMenu === 'services'}
              >
                <span>Services</span>
                <ChevronDown
                  size={12}
                  className={`text-[#777066] transition-transform duration-200 ${
                    activeMenu === 'services' ? 'rotate-180 text-[#201E1B]' : ''
                  }`}
                />
              </button>
            </div>

            {/* FOR UK */}
            <div
              className="h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('uk')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`py-6 flex items-center gap-1.5 transition-colors hover:text-[#201E1B] bg-transparent border-none uppercase text-[11px] font-medium tracking-[0.16em] cursor-pointer ${
                  activeMenu === 'uk' || location.pathname.startsWith('/for-uk')
                    ? 'text-[#201E1B] font-semibold'
                    : ''
                }`}
                onClick={() => handleMenuClick('uk')}
                aria-expanded={activeMenu === 'uk'}
              >
                <span>For UK</span>
                <ChevronDown
                  size={12}
                  className={`text-[#777066] transition-transform duration-200 ${
                    activeMenu === 'uk' ? 'rotate-180 text-[#201E1B]' : ''
                  }`}
                />
              </button>
            </div>

            {/* ABOUT */}
            <div
              className="h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/about"
                className={`py-6 flex items-center gap-1.5 transition-colors hover:text-[#201E1B] ${
                  activeMenu === 'about' || isCurrent('/about')
                    ? 'text-[#201E1B] font-semibold'
                    : ''
                }`}
                onClick={() => setActiveMenu(null)}
              >
                <span>About</span>
                <ChevronDown
                  size={12}
                  className={`text-[#777066] transition-transform duration-200 ${
                    activeMenu === 'about' ? 'rotate-180 text-[#201E1B]' : ''
                  }`}
                />
              </Link>
            </div>

            {/* RESOURCES */}
            <div
              className="h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`py-6 flex items-center gap-1.5 transition-colors hover:text-[#201E1B] bg-transparent border-none uppercase text-[11px] font-medium tracking-[0.16em] cursor-pointer ${
                  activeMenu === 'resources' || location.pathname.startsWith('/resources')
                    ? 'text-[#201E1B] font-semibold'
                    : ''
                }`}
                onClick={() => handleMenuClick('resources')}
                aria-expanded={activeMenu === 'resources'}
              >
                <span>Resources</span>
                <ChevronDown
                  size={12}
                  className={`text-[#777066] transition-transform duration-200 ${
                    activeMenu === 'resources' ? 'rotate-180 text-[#201E1B]' : ''
                  }`}
                />
              </button>
            </div>

            {/* CONTACT */}
            <Link
              to="/contact"
              className={`py-6 transition-colors hover:text-[#201E1B] ${
                isCurrent('/contact') ? 'text-[#201E1B] font-semibold' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
            {/* Catalog & Swatches Trigger */}
            <Link
              to="/resources/catalog"
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-full border border-[#DED5C9] bg-transparent text-[#777066] hover:text-[#201E1B] hover:border-[#201E1B] transition-all text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.16em]"
              title="Atelier Catalog & Swatches"
              aria-label="Atelier Catalog & Swatches"
            >
              <BookOpen size={13} className="text-[#B99A69]" />
              <span className="hidden sm:inline">Catalog</span>
            </Link>

            {/* Primary Enquire Pill CTA (Champagne Gold Luxury Accent) */}
            <Link
              to="/enquire"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-[#B99A69] text-white font-sans font-medium text-[10px] sm:text-[11px] uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#201E1B] hover:shadow-md cursor-pointer group"
            >
              <span>Enquire</span>
              <ArrowRight size={13} className="text-white transition-transform group-hover:translate-x-0.5" />
            </Link>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="xl:hidden p-2 text-[#201E1B] bg-transparent border-none cursor-pointer flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Full-Width Luxury Mega Menu Dropdown Pane */}
        {activeMenu && (
          <div
            className="atelier-dropdown-full-pane"
            onMouseEnter={() => handleMouseEnter(activeMenu)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-8 lg:py-10">
              {/* 1. ALBUMS MEGA MENU */}
              {activeMenu === 'albums' && (
                <div className="grid grid-cols-12 gap-8 lg:gap-10 items-start">
                  {/* Collection 01: Layflat & Books */}
                  <div className="col-span-3">
                    <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#B99A69] font-semibold mb-4">
                      Collection 01 • Layflat &amp; Books
                    </p>
                    <div className="flex flex-col space-y-3.5 text-[13px] text-[#201E1B]">
                      <Link
                        to="/products/flush-mount-album"
                        onClick={() => setActiveMenu(null)}
                        className="group flex flex-col hover:text-[#B99A69] transition-colors"
                      >
                        <span className="font-medium group-hover:translate-x-1 transition-transform inline-block">Flush Mount Album</span>
                        <span className="text-[11px] text-[#777066] font-normal">Continuous panoramic spreads on 1.2mm museum core</span>
                      </Link>
                      <Link
                        to="/products/layflat"
                        onClick={() => setActiveMenu(null)}
                        className="group flex flex-col hover:text-[#B99A69] transition-colors"
                      >
                        <span className="font-medium group-hover:translate-x-1 transition-transform inline-block">Layflat Books</span>
                        <span className="text-[11px] text-[#777066] font-normal">Seamless gutter-free fine art storytelling</span>
                      </Link>
                      <Link
                        to="/products/photo-book"
                        onClick={() => setActiveMenu(null)}
                        className="group flex flex-col hover:text-[#B99A69] transition-colors"
                      >
                        <span className="font-medium group-hover:translate-x-1 transition-transform inline-block">Photo Book</span>
                        <span className="text-[11px] text-[#777066] font-normal">Editorial press-printed archival heirloom volumes</span>
                      </Link>
                      <Link
                        to="/products/luxury-albums"
                        onClick={() => setActiveMenu(null)}
                        className="group flex flex-col hover:text-[#B99A69] transition-colors"
                      >
                        <span className="font-medium group-hover:translate-x-1 transition-transform inline-block">Luxury Leather Albums</span>
                        <span className="text-[11px] text-[#777066] font-normal">Full-grain Italian calf leather with micro-debossing</span>
                      </Link>
                    </div>
                  </div>

                  {/* Collection 02: Bespoke Bindery */}
                  <div className="col-span-3">
                    <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#B99A69] font-semibold mb-4">
                      Collection 02 • Presentation &amp; Keepsakes
                    </p>
                    <div className="flex flex-col space-y-3.5 text-[13px] text-[#201E1B]">
                      <Link
                        to="/products/box-and-bags"
                        onClick={() => setActiveMenu(null)}
                        className="group flex flex-col hover:text-[#B99A69] transition-colors"
                      >
                        <span className="font-medium group-hover:translate-x-1 transition-transform inline-block">Presentation Box &amp; Bags</span>
                        <span className="text-[11px] text-[#777066] font-normal">Handmade linen clamshell boxes &amp; protective raw silk bags</span>
                      </Link>
                      <Link
                        to="/products/slip-in-albums"
                        onClick={() => setActiveMenu(null)}
                        className="group flex flex-col hover:text-[#B99A69] transition-colors"
                      >
                        <span className="font-medium group-hover:translate-x-1 transition-transform inline-block">Slip-in Folios &amp; Prints</span>
                        <span className="text-[11px] text-[#777066] font-normal">Beveled window mounts and museum archival slip-cases</span>
                      </Link>
                      <Link
                        to="/resources/catalog"
                        onClick={() => setActiveMenu(null)}
                        className="group flex flex-col hover:text-[#B99A69] transition-colors"
                      >
                        <span className="font-medium group-hover:translate-x-1 transition-transform inline-block">Atelier Swatches &amp; Linens</span>
                        <span className="text-[11px] text-[#777066] font-normal">Belgian linen, distress leathers &amp; Japanese silk</span>
                      </Link>
                    </div>
                  </div>

                  {/* Atelier Spotlight Card */}
                  <div className="col-span-6 bg-[#EEE7DC]/50 border border-[#DED5C9] p-7 flex items-center justify-between gap-6">
                    <div className="max-w-md">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B99A69]"></span>
                        <span className="font-sans text-[9px] uppercase tracking-[0.24em] text-[#B99A69] font-semibold">
                          Atelier Spotlight
                        </span>
                      </div>
                      <h4 className="font-serif text-[22px] text-[#201E1B] font-normal leading-snug mb-2">
                        Museum-Grade Archival Layflat
                      </h4>
                      <p className="text-[12.5px] text-[#777066] leading-relaxed mb-4">
                        Handcrafted with continuous panoramic spreads on 1.2mm acid-free core boards. Wrapped in archival Italian leather or heritage woven linens, guaranteed for over a century.
                      </p>
                      <div className="flex items-center gap-5">
                        <Link
                          to="/products/flush-mount-album"
                          onClick={() => setActiveMenu(null)}
                          className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] font-semibold text-[#201E1B] hover:text-[#B99A69] transition-colors"
                        >
                          <span>Explore Specimen</span>
                          <ArrowRight size={12} />
                        </Link>
                        <span className="text-[#DED5C9]">|</span>
                        <Link
                          to="/resources/catalog"
                          onClick={() => setActiveMenu(null)}
                          className="text-[11px] uppercase tracking-[0.16em] text-[#777066] hover:text-[#201E1B] transition-colors"
                        >
                          Download Catalog (PDF)
                        </Link>
                      </div>
                    </div>
                    <div className="w-28 h-28 rounded-sm bg-[#FAF7F2] border border-[#DED5C9] flex flex-col items-center justify-center p-3 text-center shrink-0 shadow-sm">
                      <BookOpen size={28} className="text-[#B99A69] mb-1.5" />
                      <span className="font-serif text-[11px] uppercase tracking-[0.1em] text-[#201E1B]">Heirloom Vol. XII</span>
                      <span className="text-[9px] text-[#777066]">Flush Mount</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. SERVICES MEGA MENU */}
              {activeMenu === 'services' && (
                <div className="grid grid-cols-4 gap-6">
                  <Link
                    to="/services/image-editing"
                    onClick={() => setActiveMenu(null)}
                    className="group p-5 bg-[#FAF7F2] hover:bg-[#EEE7DC]/40 border border-[#DED5C9] hover:border-[#B99A69]/50 transition-all"
                  >
                    <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B99A69] font-semibold mb-1.5">
                      Lab Retouching
                    </p>
                    <h5 className="font-serif text-[18px] text-[#201E1B] font-normal mb-2 group-hover:text-[#B99A69] transition-colors">
                      Image Editing &amp; Retouching
                    </h5>
                    <p className="text-[12px] text-[#777066] leading-relaxed">
                      Master skin tones, frequency separation, and color grading tuned specifically for fine art photo paper chemistry.
                    </p>
                    <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.14em] font-medium text-[#201E1B] mt-4 group-hover:text-[#B99A69]">
                      Learn More <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>

                  <Link
                    to="/services/photo-editing-and-album-design"
                    onClick={() => setActiveMenu(null)}
                    className="group p-5 bg-[#FAF7F2] hover:bg-[#EEE7DC]/40 border border-[#DED5C9] hover:border-[#B99A69]/50 transition-all"
                  >
                    <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B99A69] font-semibold mb-1.5">
                      Curated Spreads
                    </p>
                    <h5 className="font-serif text-[18px] text-[#201E1B] font-normal mb-2 group-hover:text-[#B99A69] transition-colors">
                      Photo Editing &amp; Album Design
                    </h5>
                    <p className="text-[12px] text-[#777066] leading-relaxed">
                      End-to-end narrative sequencing from raw capture culling to finished print-ready spreads with unlimited revisions.
                    </p>
                    <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.14em] font-medium text-[#201E1B] mt-4 group-hover:text-[#B99A69]">
                      Learn More <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>

                  <Link
                    to="/services/wedding-photography"
                    onClick={() => setActiveMenu(null)}
                    className="group p-5 bg-[#FAF7F2] hover:bg-[#EEE7DC]/40 border border-[#DED5C9] hover:border-[#B99A69]/50 transition-all"
                  >
                    <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B99A69] font-semibold mb-1.5">
                      Production Crew
                    </p>
                    <h5 className="font-serif text-[18px] text-[#201E1B] font-normal mb-2 group-hover:text-[#B99A69] transition-colors">
                      Wedding Photography
                    </h5>
                    <p className="text-[12px] text-[#777066] leading-relaxed">
                      Editorial documentation crew operating globally across destination ceremonies and multi-day celebrations.
                    </p>
                    <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.14em] font-medium text-[#201E1B] mt-4 group-hover:text-[#B99A69]">
                      Learn More <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>

                  <Link
                    to="/services/album-designing"
                    onClick={() => setActiveMenu(null)}
                    className="group p-5 bg-[#FAF7F2] hover:bg-[#EEE7DC]/40 border border-[#DED5C9] hover:border-[#B99A69]/50 transition-all"
                  >
                    <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B99A69] font-semibold mb-1.5">
                      Editorial Layout
                    </p>
                    <h5 className="font-serif text-[18px] text-[#201E1B] font-normal mb-2 group-hover:text-[#B99A69] transition-colors">
                      Album Designing &amp; Grids
                    </h5>
                    <p className="text-[12px] text-[#777066] leading-relaxed">
                      Bespoke architectural layout typesetting with generous white space and museum-grade visual rhythm.
                    </p>
                    <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.14em] font-medium text-[#201E1B] mt-4 group-hover:text-[#B99A69]">
                      Learn More <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              )}

              {/* 3. FOR UK MEGA MENU */}
              {activeMenu === 'uk' && (
                <div className="flex gap-10 items-stretch">
                  <div className="w-1/3 pr-8 border-r border-[#DED5C9] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B99A69]"></span>
                        <span className="font-sans text-[9px] uppercase tracking-[0.22em] text-[#B99A69] font-semibold">
                          United Kingdom Liaison Desk
                        </span>
                      </div>
                      <h4 className="font-serif text-[22px] text-[#201E1B] font-normal leading-snug mb-3">
                        Dedicated Logistics &amp; Sterling Billing
                      </h4>
                      <p className="text-[12.5px] text-[#777066] leading-relaxed mb-5">
                        Duty-paid priority air transit directly to studios across London, Edinburgh, Manchester, and the Cotswolds. Seamless ordering with zero customs delays and transparent GBP invoicing.
                      </p>
                    </div>
                    <Link
                      to="/for-uk"
                      onClick={() => setActiveMenu(null)}
                      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] font-semibold text-[#201E1B] hover:text-[#B99A69] transition-colors"
                    >
                      <span>Explore Full UK Desk Overview</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>

                  <div className="w-2/3 grid grid-cols-3 gap-y-4 gap-x-6 text-[13px] text-[#201E1B]">
                    <Link to="/for-uk/flush-mount-album-uk" onClick={() => setActiveMenu(null)} className="group p-3 hover:bg-[#EEE7DC]/40 rounded-sm transition-colors block">
                      <span className="font-medium group-hover:text-[#B99A69] transition-colors block">Flush Mount for UK</span>
                      <span className="text-[11px] text-[#777066] block mt-0.5">Continuous spreads for UK wedding studios</span>
                    </Link>
                    <Link to="/for-uk/luxury-albums-uk" onClick={() => setActiveMenu(null)} className="group p-3 hover:bg-[#EEE7DC]/40 rounded-sm transition-colors block">
                      <span className="font-medium group-hover:text-[#B99A69] transition-colors block">Luxury Albums for UK</span>
                      <span className="text-[11px] text-[#777066] block mt-0.5">Full-grain leather with British hallmarked foils</span>
                    </Link>
                    <Link to="/for-uk/box-and-bags-uk" onClick={() => setActiveMenu(null)} className="group p-3 hover:bg-[#EEE7DC]/40 rounded-sm transition-colors block">
                      <span className="font-medium group-hover:text-[#B99A69] transition-colors block">Box &amp; Bags for UK</span>
                      <span className="text-[11px] text-[#777066] block mt-0.5">Handmade linen caskets &amp; velvet totes</span>
                    </Link>
                    <Link to="/for-uk/slip-in-albums-uk" onClick={() => setActiveMenu(null)} className="group p-3 hover:bg-[#EEE7DC]/40 rounded-sm transition-colors block">
                      <span className="font-medium group-hover:text-[#B99A69] transition-colors block">Slip-in Albums for UK</span>
                      <span className="text-[11px] text-[#777066] block mt-0.5">Classic portrait folios and matted albums</span>
                    </Link>
                    <Link to="/for-uk/photo-book-uk" onClick={() => setActiveMenu(null)} className="group p-3 hover:bg-[#EEE7DC]/40 rounded-sm transition-colors block">
                      <span className="font-medium group-hover:text-[#B99A69] transition-colors block">Photo Book for UK</span>
                      <span className="text-[11px] text-[#777066] block mt-0.5">Lightweight fine art volumes &amp; parent copies</span>
                    </Link>
                    <Link to="/for-uk/image-editing-uk" onClick={() => setActiveMenu(null)} className="group p-3 hover:bg-[#EEE7DC]/40 rounded-sm transition-colors block">
                      <span className="font-medium group-hover:text-[#B99A69] transition-colors block">Image Editing for UK</span>
                      <span className="text-[11px] text-[#777066] block mt-0.5">Fast UK-timezone turnaround retouching</span>
                    </Link>
                    <Link to="/for-uk/photography-uk" onClick={() => setActiveMenu(null)} className="group p-3 hover:bg-[#EEE7DC]/40 rounded-sm transition-colors block">
                      <span className="font-medium group-hover:text-[#B99A69] transition-colors block">Photography for UK</span>
                      <span className="text-[11px] text-[#777066] block mt-0.5">Associate shooter support &amp; second shooters</span>
                    </Link>
                    <Link to="/for-uk#turnaround" onClick={() => setActiveMenu(null)} className="group p-3 hover:bg-[#EEE7DC]/40 rounded-sm transition-colors block">
                      <span className="font-medium group-hover:text-[#B99A69] transition-colors block">UK Turnaround Schedules</span>
                      <span className="text-[11px] text-[#777066] block mt-0.5">Express 10-14 day doorstep delivery</span>
                    </Link>
                    <Link to="/contact" onClick={() => setActiveMenu(null)} className="group p-3 bg-[#EEE7DC]/60 hover:bg-[#EEE7DC] rounded-sm transition-colors block border border-[#DED5C9]">
                      <span className="font-medium text-[#B99A69] block">Request UK Sample Kit</span>
                      <span className="text-[11px] text-[#777066] block mt-0.5">Includes swatches &amp; paper specimen book</span>
                    </Link>
                  </div>
                </div>
              )}

              {/* 4. ABOUT MEGA MENU */}
              {activeMenu === 'about' && (
                <div className="grid grid-cols-6 gap-6">
                  <Link
                    to="/about#our-story"
                    onClick={() => setActiveMenu(null)}
                    className="group p-4 bg-[#FAF7F2] hover:bg-[#EEE7DC]/40 border border-[#DED5C9] hover:border-[#B99A69]/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B99A69] font-semibold block mb-2">Heritage</span>
                      <h5 className="font-serif text-[17px] text-[#201E1B] font-normal mb-2 group-hover:text-[#B99A69] transition-colors">Our Story</h5>
                      <p className="text-[12px] text-[#777066] leading-relaxed">
                        Over 12 years of archival bookbinding tradition and bespoke photo finishing.
                      </p>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-[#201E1B] group-hover:text-[#B99A69] mt-4">Read Story →</span>
                  </Link>

                  <Link
                    to="/about#craftsmanship"
                    onClick={() => setActiveMenu(null)}
                    className="group p-4 bg-[#FAF7F2] hover:bg-[#EEE7DC]/40 border border-[#DED5C9] hover:border-[#B99A69]/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B99A69] font-semibold block mb-2">Integrity</span>
                      <h5 className="font-serif text-[17px] text-[#201E1B] font-normal mb-2 group-hover:text-[#B99A69] transition-colors">Craftsmanship</h5>
                      <p className="text-[12px] text-[#777066] leading-relaxed">
                        Acid-free mountings, Japanese binding thread, and genuine archival chemistry.
                      </p>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-[#201E1B] group-hover:text-[#B99A69] mt-4">Learn More →</span>
                  </Link>

                  <Link
                    to="/about#why-choose-us"
                    onClick={() => setActiveMenu(null)}
                    className="group p-4 bg-[#FAF7F2] hover:bg-[#EEE7DC]/40 border border-[#DED5C9] hover:border-[#B99A69]/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B99A69] font-semibold block mb-2">Distinction</span>
                      <h5 className="font-serif text-[17px] text-[#201E1B] font-normal mb-2 group-hover:text-[#B99A69] transition-colors">Why Choose Us</h5>
                      <p className="text-[12px] text-[#777066] leading-relaxed">
                        Trusted partner to 1,400+ international wedding photographers and ateliers.
                      </p>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-[#201E1B] group-hover:text-[#B99A69] mt-4">Discover →</span>
                  </Link>

                  <Link
                    to="/about#global-presence"
                    onClick={() => setActiveMenu(null)}
                    className="group p-4 bg-[#FAF7F2] hover:bg-[#EEE7DC]/40 border border-[#DED5C9] hover:border-[#B99A69]/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B99A69] font-semibold block mb-2">Reach</span>
                      <h5 className="font-serif text-[17px] text-[#201E1B] font-normal mb-2 group-hover:text-[#B99A69] transition-colors">Global Presence</h5>
                      <p className="text-[12px] text-[#777066] leading-relaxed">
                        Headquarters in Mumbai with dedicated liaison in London and global delivery in 38+ countries.
                      </p>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-[#201E1B] group-hover:text-[#B99A69] mt-4">View Map →</span>
                  </Link>

                  <Link
                    to="/about#our-team"
                    onClick={() => setActiveMenu(null)}
                    className="group p-4 bg-[#FAF7F2] hover:bg-[#EEE7DC]/40 border border-[#DED5C9] hover:border-[#B99A69]/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B99A69] font-semibold block mb-2">Artisans</span>
                      <h5 className="font-serif text-[17px] text-[#201E1B] font-normal mb-2 group-hover:text-[#B99A69] transition-colors">Our Team</h5>
                      <p className="text-[12px] text-[#777066] leading-relaxed">
                        Passionate bookbinders, master colorists, and attentive client concierges.
                      </p>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-[#201E1B] group-hover:text-[#B99A69] mt-4">Meet Us →</span>
                  </Link>

                  <Link
                    to="/about#how-we-work"
                    onClick={() => setActiveMenu(null)}
                    className="group p-4 bg-[#FAF7F2] hover:bg-[#EEE7DC]/40 border border-[#DED5C9] hover:border-[#B99A69]/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B99A69] font-semibold block mb-2">Process</span>
                      <h5 className="font-serif text-[17px] text-[#201E1B] font-normal mb-2 group-hover:text-[#B99A69] transition-colors">How We Work</h5>
                      <p className="text-[12px] text-[#777066] leading-relaxed">
                        Effortless workflow from online upload to quality inspection and doorstep arrival.
                      </p>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-[#201E1B] group-hover:text-[#B99A69] mt-4">Our Workflow →</span>
                  </Link>
                </div>
              )}

              {/* 5. RESOURCES MEGA MENU */}
              {activeMenu === 'resources' && (
                <div className="grid grid-cols-5 gap-6">
                  <Link
                    to="/resources/album-designs"
                    onClick={() => setActiveMenu(null)}
                    className="group p-5 bg-[#FAF7F2] hover:bg-[#EEE7DC]/40 border border-[#DED5C9] hover:border-[#B99A69]/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B99A69] font-semibold block mb-2">Inspirations</span>
                      <h5 className="font-serif text-[18px] text-[#201E1B] font-normal mb-2 group-hover:text-[#B99A69] transition-colors">Album Designs</h5>
                      <p className="text-[12px] text-[#777066] leading-relaxed">
                        Curated portfolio of award-winning real wedding album layouts and templates.
                      </p>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[#201E1B] group-hover:text-[#B99A69] mt-4">Browse Designs →</span>
                  </Link>

                  <Link
                    to="/resources/wedding-photo-albums"
                    onClick={() => setActiveMenu(null)}
                    className="group p-5 bg-[#FAF7F2] hover:bg-[#EEE7DC]/40 border border-[#DED5C9] hover:border-[#B99A69]/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B99A69] font-semibold block mb-2">Showcase</span>
                      <h5 className="font-serif text-[18px] text-[#201E1B] font-normal mb-2 group-hover:text-[#B99A69] transition-colors">Wedding Photo Albums</h5>
                      <p className="text-[12px] text-[#777066] leading-relaxed">
                        In-depth guide to choosing leather, linens, cover debossing, and archival paper types.
                      </p>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[#201E1B] group-hover:text-[#B99A69] mt-4">Explore Guide →</span>
                  </Link>

                  <Link
                    to="/resources/blogs"
                    onClick={() => setActiveMenu(null)}
                    className="group p-5 bg-[#FAF7F2] hover:bg-[#EEE7DC]/40 border border-[#DED5C9] hover:border-[#B99A69]/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B99A69] font-semibold block mb-2">Editorial</span>
                      <h5 className="font-serif text-[18px] text-[#201E1B] font-normal mb-2 group-hover:text-[#B99A69] transition-colors">Atelier Journal</h5>
                      <p className="text-[12px] text-[#777066] leading-relaxed">
                        Articles on print preparation, color calibration, packaging tips, and photographer spotlights.
                      </p>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[#201E1B] group-hover:text-[#B99A69] mt-4">Read Journal →</span>
                  </Link>

                  <Link
                    to="/resources/faq"
                    onClick={() => setActiveMenu(null)}
                    className="group p-5 bg-[#FAF7F2] hover:bg-[#EEE7DC]/40 border border-[#DED5C9] hover:border-[#B99A69]/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B99A69] font-semibold block mb-2">Assistance</span>
                      <h5 className="font-serif text-[18px] text-[#201E1B] font-normal mb-2 group-hover:text-[#B99A69] transition-colors">Studio FAQ</h5>
                      <p className="text-[12px] text-[#777066] leading-relaxed">
                        Answers to file preparation, ICC profiles, page thicknesses, shipping rates, and turnaround times.
                      </p>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-[#201E1B] group-hover:text-[#B99A69] mt-4">View FAQ →</span>
                  </Link>

                  <Link
                    to="/resources/catalog"
                    onClick={() => setActiveMenu(null)}
                    className="group p-5 bg-[#EEE7DC]/70 hover:bg-[#EEE7DC] border border-[#B99A69]/40 hover:border-[#B99A69] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B99A69] font-semibold block mb-2">PDF Specifier</span>
                      <h5 className="font-serif text-[18px] text-[#201E1B] font-normal mb-2 group-hover:text-[#B99A69] transition-colors">2026 Master Catalog</h5>
                      <p className="text-[12px] text-[#777066] leading-relaxed">
                        Download complete high-res specification sheet, swatch colors, foil options, and studio pricing.
                      </p>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#B99A69] mt-4">Download Catalog (PDF) ↓</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[110px] bg-black/35 z-40 xl:hidden backdrop-blur-xs transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-[#FAF7F2] h-full overflow-y-auto p-6 space-y-4 shadow-xl border-r border-[#DED5C9]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-1 border-b border-[#DED5C9] pb-4">
              <Link
                to="/"
                className="py-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase text-[#201E1B]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Albums Accordion */}
              <div>
                <button
                  type="button"
                  className="w-full flex items-center justify-between py-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase text-[#201E1B] bg-transparent border-none text-left cursor-pointer"
                  onClick={() => toggleMobileAccordion('albums')}
                >
                  <span>Albums</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      mobileAccordion === 'albums' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileAccordion === 'albums' && (
                  <div className="pl-4 py-2 space-y-2 text-[13px] text-[#777066] flex flex-col">
                    <Link to="/products/flush-mount-album" onClick={() => setMobileMenuOpen(false)}>Flush Mount Album</Link>
                    <Link to="/products/layflat" onClick={() => setMobileMenuOpen(false)}>Layflat Books</Link>
                    <Link to="/products/photo-book" onClick={() => setMobileMenuOpen(false)}>Photo Book</Link>
                    <Link to="/products/luxury-albums" onClick={() => setMobileMenuOpen(false)}>Luxury Leather Albums</Link>
                    <Link to="/products/box-and-bags" onClick={() => setMobileMenuOpen(false)}>Presentation Box &amp; Bags</Link>
                    <Link to="/products/slip-in-albums" onClick={() => setMobileMenuOpen(false)}>Slip-in Folios</Link>
                  </div>
                )}
              </div>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  type="button"
                  className="w-full flex items-center justify-between py-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase text-[#201E1B] bg-transparent border-none text-left cursor-pointer"
                  onClick={() => toggleMobileAccordion('services')}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      mobileAccordion === 'services' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileAccordion === 'services' && (
                  <div className="pl-4 py-2 space-y-2 text-[13px] text-[#777066] flex flex-col">
                    <Link to="/services/image-editing" onClick={() => setMobileMenuOpen(false)}>Image Editing &amp; Retouching</Link>
                    <Link to="/services/photo-editing-and-album-design" onClick={() => setMobileMenuOpen(false)}>Photo Editing &amp; Album Design</Link>
                    <Link to="/services/wedding-photography" onClick={() => setMobileMenuOpen(false)}>Wedding Photography</Link>
                    <Link to="/services/album-designing" onClick={() => setMobileMenuOpen(false)}>Editorial Layout Designing</Link>
                  </div>
                )}
              </div>

              {/* Mobile For UK */}
              <div>
                <button
                  type="button"
                  className="w-full flex items-center justify-between py-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase text-[#201E1B] bg-transparent border-none text-left cursor-pointer"
                  onClick={() => toggleMobileAccordion('uk')}
                >
                  <span>For UK</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      mobileAccordion === 'uk' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileAccordion === 'uk' && (
                  <div className="pl-4 py-2 space-y-2 text-[13px] text-[#777066] flex flex-col">
                    <Link to="/for-uk" onClick={() => setMobileMenuOpen(false)}>UK Desk Overview</Link>
                    <Link to="/for-uk/flush-mount-album-uk" onClick={() => setMobileMenuOpen(false)}>Flush Mount for UK</Link>
                    <Link to="/for-uk/luxury-albums-uk" onClick={() => setMobileMenuOpen(false)}>Luxury Leather Albums UK</Link>
                    <Link to="/for-uk/box-and-bags-uk" onClick={() => setMobileMenuOpen(false)}>Box &amp; Bags UK</Link>
                  </div>
                )}
              </div>

              {/* Mobile About */}
              <Link
                to="/about"
                className="py-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase text-[#201E1B]"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Our Atelier
              </Link>

              {/* Mobile Resources */}
              <Link
                to="/resources/catalog"
                className="py-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase text-[#201E1B]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources &amp; Catalog
              </Link>

              {/* Mobile Contact */}
              <Link
                to="/contact"
                className="py-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase text-[#201E1B]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Concierge
              </Link>
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <Link
                to="/enquire"
                className="w-full py-3 text-center bg-[#201E1B] text-[#F7F3EC] font-sans font-medium text-[11px] uppercase tracking-[0.2em] rounded-full hover:bg-[#B99A69] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request Studio Quote
              </Link>
              <Link
                to="/pay-online"
                className="w-full py-3 text-center bg-[#EEE7DC] text-[#201E1B] font-sans font-medium text-[11px] uppercase tracking-[0.2em] rounded-full border border-[#DED5C9]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pay Online Portal
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
