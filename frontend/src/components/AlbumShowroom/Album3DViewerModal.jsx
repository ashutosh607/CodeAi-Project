import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { X, ChevronLeft, ChevronRight, Sparkles, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AlbumInteriorPage from './AlbumInteriorPage';

/**
 * Album3DViewerModal Component
 * 
 * Interactive 3D showroom viewer that opens when an album is clicked.
 * Features:
 * - Genuine 3D physical cover flip from spine (rotateY: 0 -> -180deg)
 * - Multi-spread interactive page turns (Next / Prev)
 * - Distinct interior layouts tailored for Slip-in, Flush Mount, Photo Book, and Leather
 * - Full specification panel with direct "Enquire About This Album" integration
 * - Keyboard & touch swipe support
 */
export default function Album3DViewerModal({
  album,
  onClose,
  onSelectProduct
}) {
  const navigate = useNavigate();
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpenSpreadReady, setIsOpenSpreadReady] = useState(false);

  // Element Refs
  const backdropRef = useRef(null);
  const modalBoxRef = useRef(null);
  const spreadRef = useRef(null);
  const turnLeafRef = useRef(null);
  const turnFrontShadowRef = useRef(null);
  const turnBackShadowRef = useRef(null);
  const touchStartXRef = useRef(null);

  const totalSpreads = album.spreads?.length || 1;
  const activeSpread = album.spreads[currentSpreadIndex] || album.spreads[0];
  const nextSpreadIndex = Math.min(currentSpreadIndex + 1, totalSpreads - 1);

  // 1. Entrance and 3D Cover Opening Sequence
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Fade in backdrop
    if (backdropRef.current) {
      backdropRef.current.classList.add('active');
    }

    if (modalBoxRef.current) {
      gsap.fromTo(
        modalBoxRef.current,
        { scale: 0.94, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }
      );
    }

    if (prefersReduced) {
      setIsOpenSpreadReady(true);
      return;
    }

    // 3D Spread opening reveal
    const timer = setTimeout(() => {
      setIsOpenSpreadReady(true);
      if (spreadRef.current) {
        gsap.fromTo(
          spreadRef.current,
          { rotateY: 12, rotateX: 6, scale: 0.94 },
          { rotateY: 0, rotateX: 3, scale: 1, duration: 0.75, ease: 'power2.out' }
        );
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // 2. Page Turn NEXT (0.76s Luxury Timeline)
  const handleNextSpread = useCallback(() => {
    if (isAnimating || currentSpreadIndex >= totalSpreads - 1) return;
    setIsAnimating(true);

    const leaf = turnLeafRef.current;
    const frontShadow = turnFrontShadowRef.current;
    const backShadow = turnBackShadowRef.current;

    if (!leaf) {
      setCurrentSpreadIndex((prev) => prev + 1);
      setIsAnimating(false);
      return;
    }

    gsap.set(leaf, {
      display: 'block',
      left: '50%',
      rotateY: 0,
      transformOrigin: 'left center',
      zIndex: 40
    });

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSpreadIndex((prev) => prev + 1);
        gsap.set(leaf, { display: 'none', rotateY: 0, skewY: 0 });
        setIsAnimating(false);
      }
    });

    // Continuous 3D rotation
    tl.to(leaf, {
      rotateY: -180,
      duration: 0.74,
      ease: 'power3.inOut'
    });

    // Organic mid-turn page curl
    tl.to(leaf, { skewY: -2.4, duration: 0.36, ease: 'power2.in' }, 0);
    tl.to(leaf, { skewY: 0, duration: 0.38, ease: 'power2.out' }, 0.36);

    // Specular shadows
    if (frontShadow) {
      tl.fromTo(frontShadow, { opacity: 0 }, { opacity: 0.4, duration: 0.35 }, 0);
      tl.to(frontShadow, { opacity: 0, duration: 0.15 }, 0.35);
    }
    if (backShadow) {
      tl.fromTo(backShadow, { opacity: 0.45 }, { opacity: 0, duration: 0.39 }, 0.35);
    }
  }, [isAnimating, currentSpreadIndex, totalSpreads]);

  // 3. Page Turn PREV (0.76s Luxury Timeline)
  const handlePrevSpread = useCallback(() => {
    if (isAnimating || currentSpreadIndex <= 0) return;
    setIsAnimating(true);

    const leaf = turnLeafRef.current;
    const frontShadow = turnFrontShadowRef.current;
    const backShadow = turnBackShadowRef.current;

    if (!leaf) {
      setCurrentSpreadIndex((prev) => prev - 1);
      setIsAnimating(false);
      return;
    }

    gsap.set(leaf, {
      display: 'block',
      left: '50%',
      rotateY: -180,
      transformOrigin: 'left center',
      zIndex: 40
    });

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSpreadIndex((prev) => prev - 1);
        gsap.set(leaf, { display: 'none', rotateY: 0, skewY: 0 });
        setIsAnimating(false);
      }
    });

    tl.to(leaf, {
      rotateY: 0,
      duration: 0.74,
      ease: 'power3.inOut'
    });

    tl.to(leaf, { skewY: 2.4, duration: 0.36, ease: 'power2.in' }, 0);
    tl.to(leaf, { skewY: 0, duration: 0.38, ease: 'power2.out' }, 0.36);

    if (backShadow) {
      tl.fromTo(backShadow, { opacity: 0 }, { opacity: 0.4, duration: 0.35 }, 0);
      tl.to(backShadow, { opacity: 0, duration: 0.15 }, 0.35);
    }
    if (frontShadow) {
      tl.fromTo(frontShadow, { opacity: 0.45 }, { opacity: 0, duration: 0.39 }, 0.35);
    }
  }, [isAnimating, currentSpreadIndex]);

  // 4. Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNextSpread();
      else if (e.key === 'ArrowLeft') handlePrevSpread();
      else if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextSpread, handlePrevSpread]);

  // 5. Touch Gestures
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;
    if (diff < -40) handleNextSpread();
    else if (diff > 40) handlePrevSpread();
    touchStartXRef.current = null;
  };

  // 6. Smooth Closing Animation
  const handleClose = () => {
    if (backdropRef.current) {
      backdropRef.current.classList.remove('active');
    }
    if (modalBoxRef.current) {
      gsap.to(modalBoxRef.current, {
        scale: 0.94,
        opacity: 0,
        y: 16,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: onClose
      });
    } else {
      onClose();
    }
  };

  // 7. Enquire Workflow Dispatcher
  const handleEnquireAction = () => {
    if (onSelectProduct) {
      onSelectProduct(album);
    }
    onClose();
    navigate(`/enquire?product=${encodeURIComponent(album.name)}`);
  };

  return (
    <div
      ref={backdropRef}
      className="album-viewer-backdrop"
      onClick={(e) => {
        if (e.target === backdropRef.current) handleClose();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div ref={modalBoxRef} className="album-viewer-container">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="album-viewer-close-btn"
          aria-label="Close 3D Album Showroom"
          title="Close (Esc)"
        >
          <X size={18} />
        </button>

        {/* ===================================================================
            LEFT HALF: INTERACTIVE 3D ALBUM SPREAD STAGE
            =================================================================== */}
        <div className="album-viewer-stage-col">
          {/* Subtle Ambient Shadow Under Open Album */}
          <div className="album-open-ambient-shadow" />

          {/* 3D Viewport */}
          <div className="album-open-viewport">
            {isOpenSpreadReady && (
              <div
                ref={spreadRef}
                className="album-open-spread"
                style={{
                  transform: 'rotateX(3.5deg) rotateY(0deg)'
                }}
              >
                {/* 1. Hardcover Base Board in Album Cover Material */}
                <div
                  className="album-open-base-board"
                  style={{ backgroundColor: album.coverColor }}
                />

                {/* 2. Left Page (Click to flip Prev) */}
                <div
                  className="album-leaf-left cursor-pointer"
                  onClick={handlePrevSpread}
                  title="Click Left Page for Previous Spread"
                >
                  <AlbumInteriorPage
                    pageData={activeSpread.left}
                    side="left"
                    albumType={album.id}
                    pageNumber={currentSpreadIndex * 2 + 1}
                  />
                </div>

                {/* 3. Right Page (Click to flip Next) */}
                <div
                  className="album-leaf-right cursor-pointer"
                  onClick={handleNextSpread}
                  title="Click Right Page for Next Spread"
                >
                  <AlbumInteriorPage
                    pageData={activeSpread.right}
                    side="right"
                    albumType={album.id}
                    pageNumber={currentSpreadIndex * 2 + 2}
                  />
                </div>

                {/* 4. Center Spine Gutter Crease Shadow */}
                <div className="album-spine-gutter-shadow" />

                {/* 5. Dynamic 3D Turning Leaf (Hinged at Center Spine x = 50%) */}
                <div ref={turnLeafRef} className="album-turning-leaf">
                  {/* Front Face: Current Right Page turning away */}
                  <div className="turning-leaf-face-front">
                    <AlbumInteriorPage
                      pageData={activeSpread.right}
                      side="right"
                      albumType={album.id}
                      pageNumber={currentSpreadIndex * 2 + 2}
                    />
                    <div
                      ref={turnFrontShadowRef}
                      className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent pointer-events-none opacity-0"
                    />
                  </div>

                  {/* Back Face: Next Left Page settling down */}
                  <div className="turning-leaf-face-back">
                    <AlbumInteriorPage
                      pageData={album.spreads[nextSpreadIndex]?.left || activeSpread.left}
                      side="left"
                      albumType={album.id}
                      pageNumber={(currentSpreadIndex + 1) * 2 + 1}
                    />
                    <div
                      ref={turnBackShadowRef}
                      className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/10 to-transparent pointer-events-none opacity-0"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Page Navigation Dock */}
          <div className="album-viewer-nav-dock">
            <button
              type="button"
              onClick={handlePrevSpread}
              disabled={isAnimating || currentSpreadIndex === 0}
              className="album-viewer-nav-btn"
              title="Previous Page (←)"
            >
              <ChevronLeft size={14} />
              <span>Prev</span>
            </button>

            <span className="album-viewer-spread-indicator">
              SPREAD {String(currentSpreadIndex + 1).padStart(2, '0')} / {String(totalSpreads).padStart(2, '0')}
            </span>

            <button
              type="button"
              onClick={handleNextSpread}
              disabled={isAnimating || currentSpreadIndex === totalSpreads - 1}
              className="album-viewer-nav-btn"
              title="Next Page (→)"
            >
              <span>Next</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* ===================================================================
            RIGHT HALF: SPECIFICATIONS INFORMATION PANEL
            =================================================================== */}
        <div className="album-viewer-info-col">
          <div>
            {/* Category Eyebrow */}
            <div className="album-info-eyebrow">
              <Sparkles size={10} className="text-[#B99A69]" />
              <span>{album.category}</span>
            </div>

            {/* Title & Tagline */}
            <h2 className="album-info-title">{album.name}</h2>
            <p className="album-info-tagline">{album.tagline}</p>

            {/* Description */}
            <p className="album-info-desc">{album.desc}</p>

            {/* Technical Specifications Grid */}
            <div className="album-specs-grid">
              {/* Sizes */}
              <div className="album-spec-item">
                <span className="album-spec-label">Available Dimensions</span>
                <div className="album-sizes-list">
                  {album.sizes.map((s, idx) => (
                    <span key={idx} className="album-size-chip" title={s.desc}>
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cover Materials */}
              <div className="album-spec-item">
                <span className="album-spec-label">Cover Specimen</span>
                <span className="album-spec-value">{album.coverMaterial}</span>
              </div>

              {/* Paper & Substrate */}
              <div className="album-spec-item">
                <span className="album-spec-label">Paper Substrate</span>
                <span className="album-spec-value">{album.paperType}</span>
              </div>

              {/* Binding Structure */}
              <div className="album-spec-item">
                <span className="album-spec-label">Archival Binding</span>
                <span className="album-spec-value">{album.binding}</span>
              </div>
            </div>
          </div>

          {/* Primary Enquire Action */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleEnquireAction}
              className="album-enquire-cta-btn"
            >
              <span>Enquire About {album.name}</span>
              <Send size={13} className="text-[#B99A69]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

