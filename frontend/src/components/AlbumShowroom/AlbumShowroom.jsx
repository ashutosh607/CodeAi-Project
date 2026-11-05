import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Compass } from 'lucide-react';
import { SHOWROOM_ALBUMS } from './albumShowroomData';
import Album3DCard from './Album3DCard';
import Album3DViewerModal from './Album3DViewerModal';
import './AlbumShowroom.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * AlbumShowroom Component
 * 
 * Exclusive 3D Album Showroom section:
 * - Transforms flat cards into physical, handcrafted 3D album products
 * - Realistic contact shadows, page block edges, and debossed cover typography
 * - GSAP hover elevations and 3D tilts
 * - Click any album to open an interactive 3D book experience with page turning
 * - Side-by-side technical specifications and direct enquiry integration
 */
export default function AlbumShowroom({ onSelectProduct }) {
  const [activeAlbum, setActiveAlbum] = useState(null);
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;

      // Staggered showroom entrance on scroll
      const podiums = gridRef.current?.querySelectorAll('.album-product-podium');
      if (podiums && podiums.length > 0) {
        gsap.fromTo(
          podiums,
          {
            y: 45,
            opacity: 0,
            rotateX: 10
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.95,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 82%',
              once: true
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="album-showroom-section py-20 sm:py-28"
    >
      {/* Studio Lighting Radial Highlight */}
      <div className="showroom-studio-lighting" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-[740px] mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEE7DC] border border-[#DED5C9] text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.22em] text-[#777066] mb-4 shadow-xs">
            <Compass size={11} className="text-[#B99A69]" />
            <span>EXCLUSIVE 3D ATELIER SHOWROOM</span>
          </div>

          <h2 className="font-serif text-[34px] sm:text-[44px] lg:text-[50px] font-normal text-[#201E1B] leading-[1.12] mb-4">
            Our Signature Format Families
          </h2>

          <p className="font-sans text-[14px] sm:text-[16px] text-[#777066] leading-[1.7] max-w-[620px] mx-auto">
            Experience our four signature formats as physical handcrafted specimens. Click any album to open its 3D volume, inspect binding leaves, and explore curated spreads.
          </p>
        </div>

        {/* 
          Showroom 3D Album Podium Grid:
          - 4 physical albums on desktop (lg:grid-cols-4)
          - 2 albums on tablet (sm:grid-cols-2)
          - 1 album on mobile (grid-cols-1)
        */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 lg:gap-8 items-end justify-center"
        >
          {SHOWROOM_ALBUMS.map((album, index) => (
            <Album3DCard
              key={album.id}
              album={album}
              index={index}
              onOpenAlbum={(selected) => setActiveAlbum(selected)}
            />
          ))}
        </div>
      </div>

      {/* =====================================================================
          IMMERSIVE 3D OPEN BOOK VIEWER MODAL
          ===================================================================== */}
      {activeAlbum && (
        <Album3DViewerModal
          album={activeAlbum}
          onClose={() => setActiveAlbum(null)}
          onSelectProduct={onSelectProduct}
        />
      )}
    </section>
  );
}

