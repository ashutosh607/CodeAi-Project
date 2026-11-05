import { useEffect, useRef, useState } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, X } from 'lucide-react';
import BookPage from './BookPage';
import AlbumInteriorPage from '../AlbumShowroom/AlbumInteriorPage';
import './PhysicalAlbum.css';

const LUXURY_SPREADS = [
  {
    id: 1,
    title: 'The Preparations & Sacred Vows',
    venue: 'Castello di Celsa, Tuscany',
    left: {
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',
      caption: 'Plate 01 • The Morning Robe & French Chantilly Lace'
    },
    right: {
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85',
      caption: 'Plate 02 • Exchange of Vows beneath the Ancient Olive Canopy'
    }
  },
  {
    id: 2,
    title: 'Golden Hour & Terraced Gardens',
    venue: 'Villa Balbianello, Lake Como',
    left: {
      image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=85',
      caption: 'Plate 03 • First Steps as Husband & Wife across Cypress Allée'
    },
    right: {
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85',
      caption: 'Plate 04 • Bespoke Solitaire Rings & Wild Botanical Suite'
    }
  },
  {
    id: 3,
    title: 'The Stately Banquet & Speeches',
    venue: 'Hedsor House, Buckinghamshire',
    left: {
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85',
      caption: 'Plate 05 • The Grand Dining Hall under Victorian Chandeliers'
    },
    right: {
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=85',
      caption: 'Plate 06 • Father of the Bride Toast & Emotional Embraces'
    }
  },
  {
    id: 4,
    title: 'The First Dance & Midnight Lanterns',
    venue: 'The Glasshouse Orangery, Cotswolds',
    left: {
      image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=85',
      caption: 'Plate 07 • Waltzing beneath Starlight & Cascading Florals'
    },
    right: {
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=85',
      caption: 'Plate 08 • Farewell Sparklers & Handcrafted Heirloom Volume'
    }
  }
];

export default function HeroBook({ album, material, initiallyOpen = false, onClose }) {
  const spreads = album?.spreads || LUXURY_SPREADS;
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [motion, setMotion] = useState(null);
  const timer = useRef(null);
  const gesture = useRef(null);
  const toggle = useRef(null);
  const duration = 1040;

  useEffect(() => () => clearTimeout(timer.current), []);

  function move(action) {
    if (timer.current !== null) return;
    const target = index + (action === 'next' ? 1 : action === 'prev' ? -1 : 0);
    if (target < 0 || target >= spreads.length) return;
    const finish = () => {
      if (action === 'open' || action === 'close') setOpen(action === 'open');
      setIndex(action === 'close' ? 0 : target);
      setMotion(null);
      timer.current = null;
    };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish();
    } else {
      setMotion(action);
      timer.current = setTimeout(finish, duration);
    }
  }

  useEffect(() => {
    if (!initiallyOpen) return;
    const t = setTimeout(() => {
      move('open');
    }, 60);
    return () => clearTimeout(t);
  }, [initiallyOpen]);

  function onKeyDown(event) {
    if (!open || event.altKey || event.ctrlKey || event.metaKey) return;
    const action = { ArrowRight: 'next', ArrowLeft: 'prev', Escape: 'close' }[event.key];
    if (action) {
      event.preventDefault();
      move(action);
    }
  }

  function page(spread, side) {
    const pageData = spreads[spread]?.[side];
    const props = { pageData, side, pageNumber: spread * 2 + (side === 'left' ? 1 : 2) };
    return album ? <AlbumInteriorPage {...props} albumType={album.slug} /> : <BookPage {...props} />;
  }

  const turning = motion === 'next' || motion === 'prev';
  const turningFrom = motion === 'prev' ? index - 1 : index;
  const visibleLeft = motion === 'prev' ? index - 1 : index;
  const visibleRight = motion === 'next' ? index + 1 : index;
  const expanded = motion === 'open' || (open && motion !== 'close');
  const showPages = open || motion === 'open';

  const clothColor = material?.hex || album?.coverColor || '#EDE5DA';
  const foilColor = material?.accent || album?.accentColor || '#B99A69';
  const textureClass = material?.type || album?.coverTexture || 'linen';

  return (
    <div
      className="physical-album"
      role="group"
      aria-label={album?.name || 'Heirloom wedding album'}
      onKeyDown={onKeyDown}
      style={{
        '--cloth': clothColor,
        '--foil': foilColor,
        '--turn-time': duration + 'ms'
      }}
    >
      <div
        className="album-stage"
        onTouchStart={e => {
          gesture.current = [e.touches[0].clientX, e.touches[0].clientY];
        }}
        onTouchEnd={e => {
          if (!open || !gesture.current) return;
          const dx = e.changedTouches[0].clientX - gesture.current[0];
          const dy = e.changedTouches[0].clientY - gesture.current[1];
          gesture.current = null;
          if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy) * 1.5) move(dx < 0 ? 'next' : 'prev');
        }}
      >
        <div className={'bound-volume' + (expanded ? ' is-open' : '')}>
          {open && motion !== 'close' && (
            <div className="bound-page bound-left" aria-hidden={!open}>
              {page(visibleLeft, 'left')}
            </div>
          )}
          <div className="bound-page bound-right">
            {showPages && page(visibleRight, 'right')}
          </div>
          {turning && (
            <div className={'bound-leaf turn-' + motion} aria-hidden="true">
              <div className="sheet-face">{page(turningFrom, 'right')}</div>
              <div className="sheet-face sheet-back">{page(turningFrom + 1, 'left')}</div>
            </div>
          )}
          <div className={'bound-cover' + (open && motion !== 'close' ? ' parked' : '')}>
            <div
              className={'sheet-face cloth-cover ' + textureClass}
              onClick={() => {
                if (!open) {
                  toggle.current?.focus({ preventScroll: true });
                  move('open');
                }
              }}
            >
              <div
                className="cover-stamp"
                style={{
                  borderColor: foilColor,
                  color: foilColor
                }}
              >
                <span aria-hidden="true" style={{ color: foilColor }}>✧</span>
                <b style={{ color: foilColor }}>{album?.frontTitle || 'Ultraa Albums'}</b>
                <i style={{ color: foilColor }}>{album?.frontSubtitle || 'Heirloom Wedding'}</i>
              </div>
            </div>
            <div className="sheet-face sheet-back">
              {showPages && page(index, 'left')}
            </div>
          </div>
        </div>
      </div>
      <div className="book-toolbar">
        {open && (
          <>
            <button
              aria-label="Previous page"
              aria-disabled={!!motion || index === 0}
              onClick={() => move('prev')}
              className="cursor-pointer"
            >
              <ChevronLeft size={17}/>
            </button>
            <span aria-live="polite" className="page-counter">
              {index + 1} / {spreads.length}
            </span>
            <button
              aria-label="Next page"
              aria-disabled={!!motion || index === spreads.length - 1}
              onClick={() => move('next')}
              className="cursor-pointer"
            >
              <ChevronRight size={17}/>
            </button>
          </>
        )}
        <button
          ref={toggle}
          className="book-toggle cursor-pointer"
          aria-expanded={open}
          aria-disabled={!!motion}
          onClick={() => {
            if (open && onClose) {
              onClose();
            } else {
              move(open ? 'close' : 'open');
            }
          }}
        >
          {open ? <X size={15}/> : <BookOpen size={16}/>} {open ? 'Close album' : 'Open album'}
        </button>
      </div>
    </div>
  );
}
