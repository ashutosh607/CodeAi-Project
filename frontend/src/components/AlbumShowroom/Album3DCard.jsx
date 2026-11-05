import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { BookOpen, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * Album3DCard Component
 * 
 * Renders a handcrafted physical 3D album product resting on a studio podium.
 * Features:
 * - 3D album volume with visible cover boards, spine, and layered page block edges
 * - Realistic contact shadow that reacts to hover elevation
 * - Pure, clean aesthetic without clutter or hover popups
 * - Clicking the book or "OPEN ALBUM" normally opens the 3D in-place viewer
 * - "Collection →" link navigates directly to the dedicated collection page
 */
export default function Album3DCard({
  album,
  index = 0,
  onOpenViewer
}) {
  const navigate = useNavigate();
  const podiumRef = useRef(null);
  const bookVolumeRef = useRef(null);
  const shadowRef = useRef(null);

  const handleOpen3D = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (onOpenViewer) {
      onOpenViewer(album);
    } else {
      navigate(`/products/${album.slug}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenCollection = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    navigate(`/products/${album.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;

      const mm = gsap.matchMedia();

      // Subtle initial 3D pose on the studio shelf
      gsap.set(bookVolumeRef.current, {
        rotateX: 2.5,
        rotateY: -12,
        rotateZ: 0.5,
        transformPerspective: 1400
      });

      mm.add('(hover: hover)', () => {
        const bookEl = bookVolumeRef.current;
        const shadowEl = shadowRef.current;
        if (!bookEl || !shadowEl) return;

        // Smooth physical elevation only on hover (NO popups or overlays)
        const handleMouseEnter = () => {
          gsap.to(bookEl, {
            y: -12,
            rotateX: 4,
            rotateY: -7,
            duration: 0.45,
            ease: 'power2.out'
          });

          gsap.to(shadowEl, {
            scaleX: 1.12,
            scaleY: 0.85,
            opacity: 0.52,
            filter: 'blur(14px)',
            y: 5,
            duration: 0.45,
            ease: 'power2.out'
          });
        };

        const handleMouseLeave = () => {
          gsap.to(bookEl, {
            y: 0,
            rotateX: 2.5,
            rotateY: -12,
            duration: 0.75,
            ease: 'elastic.out(1, 0.45)'
          });

          gsap.to(shadowEl, {
            scaleX: 1,
            scaleY: 1,
            opacity: 0.38,
            filter: 'blur(10px)',
            y: 0,
            duration: 0.65,
            ease: 'power2.out'
          });
        };

        const podiumEl = podiumRef.current;
        if (podiumEl) {
          podiumEl.addEventListener('mouseenter', handleMouseEnter);
          podiumEl.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
          if (podiumEl) {
            podiumEl.removeEventListener('mouseenter', handleMouseEnter);
            podiumEl.removeEventListener('mouseleave', handleMouseLeave);
          }
        };
      });
    }, podiumRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={podiumRef}
      onClick={handleOpen3D}
      className="album-product-podium cursor-pointer"
    >
      {/* 3D Physical Album Stage */}
      <div
        className="album-3d-stage"
        onClick={handleOpen3D}
        role="button"
        tabIndex={0}
        aria-label={`Open 3D preview for ${album.name}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleOpen3D(e);
          }
        }}
      >
        {/* Contact Shadow Underneath */}
        <div ref={shadowRef} className="album-contact-shadow" />

        {/* 3D Physical Book Volume */}
        <div ref={bookVolumeRef} className="album-3d-volume">
          {/* 1. Back Cover Board */}
          <div
            className="album-back-board"
            style={{ backgroundColor: album.coverColor }}
          />

          {/* 2. Left Spine Thickness */}
          <div
            className="album-spine-edge"
            style={{ backgroundColor: album.coverColor }}
          >
            <div className="flex flex-col gap-1.5 opacity-60">
              <span className="w-1 h-0.5 bg-black/40 rounded-full" />
              <span className="w-1 h-0.5 bg-black/40 rounded-full" />
            </div>
            <span
              className="album-spine-text"
              style={{ color: album.accentColor }}
            >
              {album.spineTitle}
            </span>
            <div className="flex flex-col gap-1.5 opacity-60">
              <span className="w-1 h-0.5 bg-black/40 rounded-full" />
              <span className="w-1 h-0.5 bg-black/40 rounded-full" />
            </div>
          </div>

          {/* 3. Archival Page Block Edge (Right side) */}
          <div
            className={`album-page-block-right edge-${album.pageEdgeType}`}
          />

          {/* 4. Bottom Page Block Edge */}
          <div
            className={`album-page-block-bottom edge-${album.pageEdgeType}`}
          />

          {/* 5. Front Cover Face */}
          <div
            className={`album-front-cover ${
              album.coverTexture === 'pebbled-leather'
                ? 'texture-leather'
                : 'texture-linen'
            }`}
            style={{ backgroundColor: album.coverColor }}
          >
            {/* Debossed Gold Frame & Monogram Typography */}
            <div
              className="album-cover-deboss-frame"
              style={{ borderColor: album.accentColor }}
            >
              <div
                className="text-[13px] sm:text-[14px] mb-1 font-serif"
                style={{ color: album.accentColor }}
              >
                ✦
              </div>

              <h4
                className="font-serif text-[12px] sm:text-[13px] font-normal tracking-[0.2em] uppercase leading-tight m-0"
                style={{ color: album.accentColor }}
              >
                {album.frontTitle}
              </h4>

              <div
                className="w-7 h-[1px] my-2 opacity-80"
                style={{ backgroundColor: album.accentColor }}
              />

              <span
                className="font-sans text-[6.5px] sm:text-[7px] font-semibold tracking-[0.18em] uppercase opacity-85"
                style={{ color: album.accentColor }}
              >
                {album.frontSubtitle}
              </span>
            </div>

            {/* Specular lighting sheen across cover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Showroom Caption & Action */}
      <div className="album-card-caption">
        <span className="album-card-caption-category">
          {album.category}
        </span>
        <h3
          className="album-card-caption-title cursor-pointer"
          onClick={handleOpen3D}
        >
          {album.name}
        </h3>
        <p className="album-card-caption-desc">
          {album.tagline}
        </p>

        {/* Clean Action Controls: "OPEN ALBUM" to open 3D viewer & "Collection →" to navigate */}
        <div className="flex items-center justify-center gap-2.5 mt-3.5 w-full">
          <button
            type="button"
            onClick={handleOpen3D}
            className="album-card-cta-btn"
            aria-label={`Open ${album.name} in 3D viewer`}
          >
            <BookOpen size={12} />
            <span>OPEN ALBUM</span>
          </button>

          <button
            type="button"
            onClick={handleOpenCollection}
            className="inline-flex items-center gap-1 text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#777066] hover:text-[#B99A69] transition-colors py-1.5 px-2.5 cursor-pointer bg-transparent border-none"
            aria-label={`Explore ${album.name} collection`}
          >
            <span>Collection</span>
            <ArrowRight size={11} />
          </button>
        </div>
      </div>
    </div>
  );
}
