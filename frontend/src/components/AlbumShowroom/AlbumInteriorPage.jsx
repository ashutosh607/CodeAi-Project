import React, { useState } from 'react';

/**
 * AlbumInteriorPage Component
 * 
 * Renders the interior page leaf specifically tailored to each album category:
 * - Slip-in Albums: Realistic matted pocket sleeves with bevel-cut windows & pull tabs
 * - Flush Mount Albums: Continuous rigid 1.1mm board panoramic spreads
 * - Photo Book: Flexible uncoated cotton rag with editorial typography & diptych grids
 * - Leather Albums: Royal luxury spreads with hand-gilded 24k gold borders
 */
export default function AlbumInteriorPage({
  pageData,
  side = 'left',
  albumType = 'flush-mount-album',
  pageNumber = 1
}) {
  const [imgError, setImgError] = useState(false);

  if (!pageData) return null;

  // 1. SLIP-IN ALBUMS INTERIOR (Archival Bevel-Cut Mat Pockets)
  if (albumType === 'slip-in-albums') {
    if (pageData.type === 'slip-dual') {
      return (
        <div className={`relative w-full h-full bg-[#FAF7F2] p-2.5 sm:p-3 flex flex-col justify-between ${
          side === 'left' ? 'border-r border-[#DED5C9]' : 'border-l border-[#DED5C9]'
        }`}>
          {/* Top 4x6 Pocket */}
          <div className="relative w-full h-[47%] bg-[#EEE7DC] rounded-xs p-1.5 shadow-[inset_0_1px_3px_rgba(0,0,0,0.15)] border border-black/10 overflow-hidden flex flex-col justify-between">
            <div className="relative w-full h-[calc(100%-16px)] overflow-hidden rounded-xs bg-black/5">
              <img
                src={pageData.imageTop}
                alt={pageData.captionTop}
                className="w-full h-full object-cover block"
                loading="eager"
              />
              <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded-xs bg-[#FAF7F2]/90 text-[7px] font-sans font-semibold uppercase tracking-wider text-[#777066]">
                4x6 Pocket Sleeve
              </span>
            </div>
            <span className="text-[7.5px] font-sans text-[#777066] truncate mt-0.5">
              {pageData.captionTop}
            </span>
          </div>

          {/* Bottom 4x6 Pocket */}
          <div className="relative w-full h-[47%] bg-[#EEE7DC] rounded-xs p-1.5 shadow-[inset_0_1px_3px_rgba(0,0,0,0.15)] border border-black/10 overflow-hidden flex flex-col justify-between">
            <div className="relative w-full h-[calc(100%-16px)] overflow-hidden rounded-xs bg-black/5">
              <img
                src={pageData.imageBottom}
                alt={pageData.captionBottom}
                className="w-full h-full object-cover block"
                loading="eager"
              />
              <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded-xs bg-[#FAF7F2]/90 text-[7px] font-sans font-semibold uppercase tracking-wider text-[#777066]">
                4x6 Pocket Sleeve
              </span>
            </div>
            <span className="text-[7.5px] font-sans text-[#777066] truncate mt-0.5">
              {pageData.captionBottom}
            </span>
          </div>
        </div>
      );
    }

    // Default 5x7 Bevel-Cut Window Mat Sleeve
    return (
      <div className={`relative w-full h-full bg-[#FAF7F2] p-3 sm:p-4 flex flex-col justify-between ${
        side === 'left' ? 'border-r border-[#DED5C9]' : 'border-l border-[#DED5C9]'
      }`}>
        {/* Matted Window Frame with Realistic Inset Depth Shadow */}
        <div className="relative w-full h-[calc(100%-22px)] bg-[#EEE7DC] p-2 sm:p-2.5 rounded-xs shadow-[inset_0_2px_5px_rgba(0,0,0,0.18)] border border-black/12 flex flex-col justify-between">
          <div className="relative w-full h-full overflow-hidden rounded-xs shadow-xs">
            <img
              src={pageData.image}
              alt={pageData.caption}
              className="w-full h-full object-cover block"
              loading="eager"
            />
            {/* Subtle bevel shadow around inner window */}
            <div className="absolute inset-0 shadow-[inset_0_0_8px_rgba(0,0,0,0.25)] pointer-events-none" />
          </div>
        </div>

        {/* Plate Margin Caption */}
        <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-sans text-[#777066]">
          <span className="tracking-wider uppercase truncate max-w-[80%]">{pageData.caption}</span>
          <span className="font-mono text-[8px] opacity-70">p.{pageNumber}</span>
        </div>
      </div>
    );
  }

  // 2. PHOTO BOOK INTERIOR (Contemporary Editorial Cotton Rag Monograph)
  if (albumType === 'photo-book') {
    if (pageData.type === 'editorial-diptych') {
      return (
        <div className={`relative w-full h-full bg-[#FAF7F2] p-3 sm:p-4 flex flex-col justify-between ${
          side === 'left' ? 'border-r border-[#DED5C9]' : 'border-l border-[#DED5C9]'
        }`}>
          <div className="flex flex-col gap-2 h-[calc(100%-20px)]">
            <div className="w-full h-[55%] overflow-hidden rounded-xs border border-black/10">
              <img src={pageData.imageTop} alt={pageData.captionTop} className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-[40%] overflow-hidden rounded-xs border border-black/10">
              <img src={pageData.imageBottom} alt={pageData.captionBottom} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex justify-between items-baseline text-[8px] sm:text-[8.5px] font-serif text-[#777066]">
            <span className="italic truncate max-w-[80%]">{pageData.captionTop}</span>
            <span className="font-sans font-medium">{String(pageNumber).padStart(2, '0')}</span>
          </div>
        </div>
      );
    }

    // Editorial Single Monograph Layout
    return (
      <div className={`relative w-full h-full bg-[#FAF7F2] p-4 sm:p-5 flex flex-col justify-between ${
        side === 'left' ? 'border-r border-[#DED5C9]' : 'border-l border-[#DED5C9]'
      }`}>
        <div className="w-full h-[calc(100%-30px)] overflow-hidden rounded-xs border border-black/8 shadow-xs">
          <img src={pageData.image} alt={pageData.caption} className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-between items-baseline pt-2 text-[#777066]">
          <span className="font-serif italic text-[9px] sm:text-[10px] truncate max-w-[80%]">
            {pageData.caption}
          </span>
          <span className="font-sans text-[8.5px] font-medium tracking-widest">{String(pageNumber).padStart(2, '0')}</span>
        </div>
      </div>
    );
  }

  // 3. LEATHER ALBUMS INTERIOR (Royal 24k Gold Gilded Edge Heirloom)
  if (albumType === 'luxury-albums') {
    return (
      <div className={`relative w-full h-full bg-[#FAF7F2] p-2.5 sm:p-3 flex flex-col justify-between ${
        side === 'left' ? 'border-r border-[#DED5C9]' : 'border-l border-[#DED5C9]'
      }`}>
        {/* Fine Art Mount with 24k Gold Hairline Accent */}
        <div className="relative w-full h-[calc(100%-22px)] overflow-hidden rounded-xs border-[1.5px] border-[#D4AF37]/60 p-1 shadow-md bg-[#201E1B]/5">
          <div className="relative w-full h-full overflow-hidden rounded-xs">
            <img src={pageData.image} alt={pageData.caption} className="w-full h-full object-cover" />
            {/* Elegant vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-2 left-2 text-[8px] sm:text-[9px] font-serif text-white tracking-wide truncate max-w-[90%]">
              {pageData.caption}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between px-1 text-[8.5px] sm:text-[9.5px] font-serif text-[#B99A69]">
          <span className="tracking-[0.16em] uppercase text-[7.5px] text-[#777066]">Imperial Archive</span>
          <span className="font-medium tracking-widest">✦ {String(pageNumber).padStart(2, '0')}</span>
        </div>
      </div>
    );
  }

  // 4. FLUSH MOUNT ALBUMS INTERIOR (Continuous Layflat Panoramic Spread)
  return (
    <div className={`relative w-full h-full bg-[#FAF7F2] overflow-hidden flex flex-col justify-between ${
      side === 'left' ? 'border-r border-[#DED5C9]' : 'border-l border-[#DED5C9]'
    }`}>
      {/* Photo Mount Area */}
      <div className="relative w-full h-[calc(100%-22px)] p-2 sm:p-2.5 box-border">
        <div className="relative w-full h-full overflow-hidden rounded-xs border border-black/10 shadow-xs">
          <img
            src={pageData.image}
            alt={pageData.caption}
            className="w-full h-full object-cover block"
            loading="eager"
            onError={() => setImgError(true)}
          />
          {/* Subtle bottom caption gradient overlay */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-2 sm:p-2.5 pt-5 text-white pointer-events-none">
            <span className="font-serif text-[9px] sm:text-[10px] tracking-wide font-normal truncate block">
              {pageData.caption}
            </span>
          </div>
        </div>
      </div>

      {/* Margin */}
      <div className={`px-3 pb-1 text-[8px] sm:text-[9px] font-serif tracking-widest text-[#777066] ${
        side === 'left' ? 'text-left' : 'text-right'
      }`}>
        {String(pageNumber).padStart(2, '0')}
      </div>
    </div>
  );
}

