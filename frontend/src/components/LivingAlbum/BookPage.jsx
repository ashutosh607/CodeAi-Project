import React, { useState, useEffect } from 'react';

/**
 * BookPage Component
 * 
 * Renders an individual fine-art archival paper leaf with:
 * - 100% solid opacity (no ghosting or transparency)
 * - Absolute inset photo fill (guarantees photo covers 100% of the page frame without half-empty gaps)
 * - Fine-art cotton paper texture & subtle edge shadows
 * - Inner-gutter spine shadow (darker along the binding edge)
 * - Clean bottom gradient caption overlay with readable typography
 * - Archival plate & page numbering
 */
export default function BookPage({
  pageData,
  pageNumber,
  side = 'left', // 'left' | 'right'
  isGutterShadow = true
}) {
  const [imageError, setImageError] = useState(false);

  // Reset image error state whenever pageData changes
  useEffect(() => {
    setImageError(false);
  }, [pageData?.image]);

  return (
    <div
      className={`relative w-full h-full bg-[#FAF7F2] overflow-hidden select-none flex flex-col ${
        side === 'left' ? 'rounded-l-xs border-r border-[#DED5C9]' : 'rounded-r-xs border-l border-[#DED5C9]'
      }`}
      style={{
        backgroundColor: '#FAF7F2',
        boxShadow: side === 'left'
          ? 'inset -1px 0 2px rgba(0,0,0,0.06), 0 8px 24px -4px rgba(32,30,27,0.12)'
          : 'inset 1px 0 2px rgba(0,0,0,0.06), 0 8px 24px -4px rgba(32,30,27,0.12)'
      }}
    >
      {/* 1. Fine-art paper grain micro-texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 z-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(32,30,27,0.14) 1px, transparent 0)',
          backgroundSize: '3px 3px'
        }}
      />

      {/* 2. Photo Mount Frame - Takes full height of page */}
      <div className="relative w-full h-full p-2 sm:p-2.5 box-border flex flex-col justify-between">
        <div className="relative w-full flex-1 overflow-hidden rounded-xs border border-black/10 bg-[#201E1B]/5 shadow-xs">
          
          {/* Main Photo - 100% Full Bleed Cover (No half-page empty beige gap) */}
          {!imageError && pageData?.image ? (
            <img
              src={pageData.image}
              alt={pageData?.caption || 'Wedding Album Spread Photograph'}
              className="absolute inset-0 w-full h-full object-cover block will-change-transform"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center center'
              }}
              loading="eager"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#F5EFE6] via-[#EEE7DC] to-[#E8DFD1] flex flex-col items-center justify-center p-4 text-center">
              <span className="text-[#B99A69] text-base mb-1">✦</span>
              <span className="font-serif text-[11px] font-medium tracking-wider uppercase text-[#201E1B]">
                {pageData?.venue || 'The Ultraa Atelier'}
              </span>
              <span className="font-sans text-[8.5px] text-[#777066] mt-1 max-w-[160px] line-clamp-2">
                {pageData?.caption || 'Fine Art Archival Print'}
              </span>
            </div>
          )}

          {/* Clean Editorial Bottom Caption Overlay */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-2.5 sm:p-3 pt-8 flex flex-col justify-end text-white z-10 pointer-events-none">
            <span className="font-serif text-[9.5px] sm:text-[10.5px] tracking-wide font-normal leading-tight text-white/95 truncate drop-shadow-xs">
              {pageData?.venue || pageData?.title || 'Heirloom Spread'}
            </span>
            {pageData?.caption && (
              <span className="font-sans text-[7.5px] sm:text-[8px] text-white/85 tracking-normal mt-0.5 leading-snug truncate drop-shadow-xs">
                {pageData.caption}
              </span>
            )}
          </div>
        </div>

        {/* Page Number Margin at Bottom */}
        <div
          className={`pt-1 text-[8px] sm:text-[9px] font-serif tracking-widest text-[#777066] shrink-0 ${
            side === 'left' ? 'text-left pl-1' : 'text-right pr-1'
          }`}
        >
          {String(pageNumber).padStart(2, '0')}
        </div>
      </div>

      {/* 3. Realistic Zero-Gutter Inner Spine Fold Shadow */}
      {isGutterShadow && (
        <div
          className={`absolute top-0 bottom-0 pointer-events-none w-5 sm:w-7 z-25 ${
            side === 'left'
              ? 'right-0 bg-gradient-to-l from-black/20 via-black/06 to-transparent'
              : 'left-0 bg-gradient-to-r from-black/20 via-black/06 to-transparent'
          }`}
        />
      )}
    </div>
  );
}
