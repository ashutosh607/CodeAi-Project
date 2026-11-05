import React from 'react';

const TICKER_MESSAGES = [
  'ARTISANAL BOOKBINDING & PHOTO LAB',
  'HANDCRAFTED IN MUMBAI',
  'EXPRESS WORLDWIDE SHIPPING',
  'PREMIUM WEDDING ALBUMS',
  'CRAFTED TO LAST GENERATIONS',
  'PERSONALIZED ALBUM EXPERIENCES'
];

export default function AnnouncementTicker() {
  return (
    <div
      className="luxury-announcement-ticker group relative w-full h-[34px] overflow-hidden bg-[#EEE7DC] border-b border-[#DED5C9] select-none flex items-center"
      aria-label="Atelier Announcements"
    >
      <div className="ticker-track flex items-center whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused]">
        {/* Sequence 1 */}
        <div className="ticker-content-segment flex items-center shrink-0">
          {TICKER_MESSAGES.map((msg, idx) => (
            <React.Fragment key={`seq1-${idx}`}>
              <span className="ticker-item px-5 text-[10px] md:text-[11px] font-sans font-medium uppercase tracking-[0.22em] text-[#777066] transition-colors hover:text-[#201E1B]">
                {msg}
              </span>
              <span className="ticker-sep text-[#B99A69] text-[9px] font-serif" aria-hidden="true">
                ✦
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate Sequence 2 for seamless infinite loop */}
        <div className="ticker-content-segment flex items-center shrink-0" aria-hidden="true">
          {TICKER_MESSAGES.map((msg, idx) => (
            <React.Fragment key={`seq2-${idx}`}>
              <span className="ticker-item px-5 text-[10px] md:text-[11px] font-sans font-medium uppercase tracking-[0.22em] text-[#777066] transition-colors hover:text-[#201E1B]">
                {msg}
              </span>
              <span className="ticker-sep text-[#B99A69] text-[9px] font-serif">
                ✦
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

