import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

/**
 * Album3DCard Component
 * 
 * Renders a handcrafted physical 3D album product resting on a studio podium.
 * Features:
 * - 3D album volume with visible cover boards, spine, and layered page block edges
 * - Realistic contact shadow that reacts to hover elevation
 * - GSAP 3D hover physics (lift, tilt, shadow diffusion)
 * - Click to open the immersive 3D album showroom experience
 */
export default function Album3DCard({
  album,
  index = 0,
  onOpenAlbum
}) {
  const podiumRef = useRef(null);
  const bookVolumeRef = useRef(null);
  const shadowRef = useRef(null);

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

        // GSAP QuickTo or smooth tweens for physical elevation
        const handleMouseEnter = () => {
          gsap.to(bookEl, {
            y: -14,
            rotateX: 5,
            rotateY: -6,
            duration: 0.45,
            ease: 'power2.out'
          });

          gsap.to(shadowEl, {
            scaleX: 1.12,
            scaleY: 0.85,
            opacity: 0.55,
            filter: 'blur(14px)',
            y: 6,
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
    <div ref={podiumRef} className="album-product-podium">
      {/* 3D Physical Album Stage */}
      <div
        className="album-3d-stage"
        onClick={() => onOpenAlbum(album)}
        role="button"
        tabIndex={0}
        aria-label={`Open 3D Showroom for ${album.name}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenAlbum(album);
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

          {/* Hover Hint Pill */}
          <div className="album-open-hint">
            <BookOpen size={10} className="text-[#B99A69]" />
            <span>Open 3D Album</span>
            <Sparkles size={9} className="text-[#B99A69]" />
          </div>
        </div>
      </div>

      {/* Showroom Caption & Action */}
      <div className="album-card-caption">
        <span className="album-card-caption-category">
          {album.category}
        </span>
        <h3 className="album-card-caption-title">
          {album.name}
        </h3>
        <p className="album-card-caption-desc">
          {album.tagline}
        </p>
        <button
          type="button"
          onClick={() => onOpenAlbum(album)}
          className="album-card-cta-btn"
        >
          <span>Explore 3D Interior</span>
          <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}

