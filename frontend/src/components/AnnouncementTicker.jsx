import React from 'react';
import { Link } from 'react-router-dom';

const TICKER_ITEMS = [
  { text: 'ARTISANAL BOOKBINDING & PHOTO LAB', link: '/about' },
  { text: 'HANDCRAFTED IN MUMBAI', link: '/about#craftsmanship' },
  { text: 'EXPRESS WORLDWIDE SHIPPING', link: '/about#global-presence' },
  { text: 'PREMIUM WEDDING ALBUMS', link: '/products' },
  { text: '180° SEAMLESS PANORAMIC SPREADS', link: '/products/flush-mount-album' },
  { text: 'DEDICATED UK & EUROPEAN DESK', link: '/for-uk' },
  { text: '100+ YEAR ARCHIVAL CERTIFIED', link: '/about#craftsmanship' },
  { text: 'PERSONALIZED HEIRLOOM EXPERIENCES', link: '/enquire' }
];

export default function AnnouncementTicker() {
  return (
    <aside
      className="luxury-announcement-ticker group relative w-full h-[34px] overflow-hidden bg-[#EEE7DC] border-b border-[#DED5C9] select-none flex items-center z-10"
      aria-label="Atelier Announcements"
    >
      <div
        className="ticker-track flex items-center whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused]"
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'luxuryTickerLoop 38s linear infinite'
        }}
      >
        {/* Sequence 1 */}
        <div className="ticker-content-segment flex items-center shrink-0">
          {TICKER_ITEMS.map((item, idx) => (
            <React.Fragment key={`seq1-${idx}`}>
              <Link
                to={item.link}
                className="ticker-item px-5 text-[10px] md:text-[10.5px] font-sans font-medium uppercase tracking-[0.22em] text-[#777066] hover:text-[#141310] transition-colors"
                style={{ textDecoration: 'none' }}
              >
                {item.text}
              </Link>
              <span className="ticker-sep text-[#B99A69] text-[9px] font-serif" aria-hidden="true">
                ✦
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate Sequence 2 for seamless infinite loop */}
        <div className="ticker-content-segment flex items-center shrink-0" aria-hidden="true">
          {TICKER_ITEMS.map((item, idx) => (
            <React.Fragment key={`seq2-${idx}`}>
              <Link
                to={item.link}
                tabIndex={-1}
                className="ticker-item px-5 text-[10px] md:text-[10.5px] font-sans font-medium uppercase tracking-[0.22em] text-[#777066] hover:text-[#141310] transition-colors"
                style={{ textDecoration: 'none' }}
              >
                {item.text}
              </Link>
              <span className="ticker-sep text-[#B99A69] text-[9px] font-serif">
                ✦
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </aside>
  );
}
