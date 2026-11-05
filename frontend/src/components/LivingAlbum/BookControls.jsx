import React from 'react';
import { ChevronLeft, ChevronRight, BookOpen, X, Sparkles } from 'lucide-react';

/**
 * BookControls Component
 * 
 * Sits strictly OUTSIDE the 3D book boundary:
 * - Side navigation arrows float to the left and right of the book with generous clearance
 * - Bottom indicator dock centers below the book
 * - High contrast, luxury styling with champagne gold accents
 * - Fully disabled during page turns (isAnimating) to prevent double clicks
 */
export default function BookControls({
  isOpen,
  currentSpreadIndex,
  totalSpreads,
  isAnimating,
  onOpen,
  onClose,
  onNext,
  onPrev
}) {
  const isFirstSpread = currentSpreadIndex === 0;
  const isLastSpread = currentSpreadIndex === totalSpreads - 1;

  return (
    <>
      {/* =========================================================================
          1. SIDE FLOATING NAVIGATION ARROWS (Positioned outside the book margins)
          ========================================================================= */}
      <button
        type="button"
        onClick={isOpen ? onPrev : onOpen}
        disabled={isAnimating || (isOpen && isFirstSpread)}
        className="absolute -left-3 sm:-left-6 lg:-left-7 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#DED5C9] bg-[#FAF7F2]/95 backdrop-blur-md text-[#201E1B] flex items-center justify-center transition-all duration-200 hover:border-[#201E1B] hover:scale-105 disabled:opacity-20 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-sm cursor-pointer"
        aria-label="Previous Page Spread"
        title="Previous Page"
      >
        <ChevronLeft size={17} />
      </button>

      <button
        type="button"
        onClick={isOpen ? onNext : onOpen}
        disabled={isAnimating || (isOpen && isLastSpread)}
        className="absolute -right-3 sm:-right-6 lg:-right-7 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#DED5C9] bg-[#FAF7F2]/95 backdrop-blur-md text-[#201E1B] flex items-center justify-center transition-all duration-200 hover:border-[#201E1B] hover:scale-105 disabled:opacity-20 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-sm cursor-pointer"
        aria-label="Next Page Spread"
        title={isOpen ? "Next Page" : "Open Album"}
      >
        <ChevronRight size={17} />
      </button>

      {/* =========================================================================
          2. BOTTOM CONTROL DOCK (Positioned centered cleanly below the book)
          ========================================================================= */}
      <div className="album-controls-dock mt-5 sm:mt-6 flex flex-col items-center justify-center w-full z-30">
        {!isOpen ? (
          <div className="flex flex-col items-center gap-2.5">
            {/* Reference Indicator: —— 01 / 04 —— */}
            <button
              type="button"
              onClick={onOpen}
              disabled={isAnimating}
              className="group flex items-center gap-3 bg-transparent border-none cursor-pointer py-1 px-3 transition-transform hover:scale-105 disabled:cursor-wait"
              title="Click to Open Heirloom Album"
            >
              <span className="w-8 sm:w-12 h-[1px] bg-[#A99B8A]/60 group-hover:bg-[#201E1B] transition-colors" />
              <span className="font-sans text-[12px] sm:text-[13px] font-semibold tracking-[0.2em] text-[#201E1B]">
                {String(currentSpreadIndex + 1).padStart(2, '0')} / {String(totalSpreads).padStart(2, '0')}
              </span>
              <span className="w-8 sm:w-12 h-[1px] bg-[#A99B8A]/60 group-hover:bg-[#201E1B] transition-colors" />
            </button>

            {/* Pill Button to Open */}
            <button
              type="button"
              onClick={onOpen}
              disabled={isAnimating}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#201E1B] !text-[#FAF7F2] text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.16em] hover:bg-[#B99A69] transition-all duration-300 cursor-pointer shadow-sm disabled:opacity-50"
              style={{ color: '#FAF7F2' }}
            >
              <BookOpen size={12} className="text-[#B99A69]" />
              <span style={{ color: '#FAF7F2' }}>Open Heirloom Album</span>
              <Sparkles size={11} className="text-[#B99A69]" />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3 sm:gap-5 bg-[#FAF7F2]/95 backdrop-blur-md border border-[#DED5C9] px-4 sm:px-6 py-2 rounded-full shadow-sm">
            {/* Prev Spread */}
            <button
              type="button"
              onClick={onPrev}
              disabled={isAnimating || isFirstSpread}
              className="flex items-center gap-1 text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.14em] text-[#201E1B] hover:text-[#B99A69] disabled:opacity-25 disabled:cursor-not-allowed bg-transparent border-none cursor-pointer transition-colors"
            >
              <ChevronLeft size={13} />
              <span>Prev</span>
            </button>

            {/* Live Counter: —— 03 / 04 —— */}
            <div className="flex items-center gap-2 text-[#777066]">
              <span className="w-3 sm:w-5 h-[1px] bg-[#DED5C9]" />
              <span className="font-sans text-[11px] sm:text-[12px] font-bold tracking-[0.18em] text-[#201E1B]">
                {String(currentSpreadIndex + 1).padStart(2, '0')} / {String(totalSpreads).padStart(2, '0')}
              </span>
              <span className="w-3 sm:w-5 h-[1px] bg-[#DED5C9]" />
            </div>

            {/* Next Spread */}
            <button
              type="button"
              onClick={onNext}
              disabled={isAnimating || isLastSpread}
              className="flex items-center gap-1 text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.14em] text-[#201E1B] hover:text-[#B99A69] disabled:opacity-25 disabled:cursor-not-allowed bg-transparent border-none cursor-pointer transition-colors"
            >
              <span>Next</span>
              <ChevronRight size={13} />
            </button>

            <span className="w-[1px] h-3.5 bg-[#DED5C9]" />

            {/* Close Cover */}
            <button
              type="button"
              onClick={onClose}
              disabled={isAnimating}
              className="flex items-center gap-1 text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#777066] hover:text-[#201E1B] bg-transparent border-none cursor-pointer transition-colors"
              title="Close Album Cover"
            >
              <X size={12} />
              <span>Close</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

