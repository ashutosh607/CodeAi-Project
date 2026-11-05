import FormatSpecs from '../components/AlbumShowroom/FormatSpecs';
import { SHOWROOM_ALBUMS } from '../components/AlbumShowroom/albumShowroomData';
import HeroBook from '../components/LivingAlbum/HeroBook';
import { collectionArchive } from '../data/collectionArchive';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import RevealOnScroll from '../components/motion/RevealOnScroll';
import TextReveal from '../components/motion/TextReveal';
import StaggerBoxes from '../components/motion/StaggerBoxes';
import { PRODUCTS_CATALOG } from '../data/catalogData';

// 6 Dedicated Stitch Product Pages
import FlushMountAlbumPage from './products/FlushMountAlbumPage';
import LayflatPhotoBookPage from './products/LayflatPhotoBookPage';
import PhotoBookPage from './products/PhotoBookPage';
import LuxuryHeirloomPage from './products/LuxuryHeirloomPage';
import SlipInAlbumsPage from './products/SlipInAlbumsPage';
import BoxesAndBagsPage from './products/BoxesAndBagsPage';

export default function ProductDetailPage() {
  const { slug } = useParams();


  // Normalize slug matching
  const normalizedSlug = slug ? slug.toLowerCase().trim() : '';

  if (['flush-mount-album','flush-mount-albums'].includes(normalizedSlug)) {
    return <FlushMountAlbumPage />;
  }

  if (
    normalizedSlug === 'layflat' || 
    normalizedSlug === 'layflat-photo-book' || 
    normalizedSlug === 'layflat-books'
  ) {
    return <LayflatPhotoBookPage />;
  }

  if (normalizedSlug === 'photo-book' || normalizedSlug === 'photo-books') {
    return <PhotoBookPage />;
  }

  if (
    normalizedSlug === 'luxury-albums' || 
    normalizedSlug === 'luxury-heirloom-albums' ||
    normalizedSlug === 'luxury-heirloom'
  ) {
    return <LuxuryHeirloomPage />;
  }

  if (normalizedSlug === 'slip-in-albums' || normalizedSlug === 'slip-in') {
    return <SlipInAlbumsPage />;
  }

  if (
    normalizedSlug === 'box-and-bags' || 
    normalizedSlug === 'boxes-and-bags' ||
    normalizedSlug === 'boxes-slipcases'
  ) {
    return <BoxesAndBagsPage />;
  }

  const companion = SHOWROOM_ALBUMS.find(album => album.slug === normalizedSlug);
  if (companion) {
    return <section className="collection-section"><div className="section-container">
      <Link className="text-action" to="/products">All collections</Link>
      <div className="format-preview-grid"><HeroBook album={companion}/>
        <div><h1 className="text-4xl">{companion.name}</h1><p>{companion.desc}</p>
          <FormatSpecs album={companion}/>
          <Link className="studio-link primary mt-4" to={'/enquire?product='+encodeURIComponent(companion.name)}>Enquire about this album</Link>
        </div>
      </div>
    </div></section>;
  }

  // Master Collection Archive View (when navigating to /products without slug or generic catalog)
  return (
    <div className="catalog-archive-page" style={{ backgroundColor: 'var(--color-surface, #FAF9F5)', minHeight: '100vh', padding: '3.5rem 0' }}>
      <div className="section-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#635E52', marginBottom: '2.5rem' }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={12} />
          <span style={{ color: '#141310', fontWeight: 600 }}>Atelier Master Collections</span>
        </div>

        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <RevealOnScroll direction="down" delay={0.05} distance={12} blur={false}>
            <span style={{ display: 'inline-block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52', background: '#EFEEEA', padding: '0.35rem 0.85rem', marginBottom: '1rem' }}>
              Atelier Master Collection
            </span>
          </RevealOnScroll>
          <TextReveal
            as="h1"
            delay={0.08}
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', color: '#141310', fontWeight: 400, margin: '0 0 1rem 0' }}
          >
            Handcrafted Heirlooms &amp; Presentation
          </TextReveal>
          <RevealOnScroll direction="up" delay={0.16} distance={18}>
            <p style={{ fontSize: '1.05rem', color: '#4A463F', lineHeight: 1.65, margin: 0 }}>
              Every volume is individually hand-bound in our Mumbai bindery using archival continuous-tone silver halide chemistry, museum-grade 1.2mm substrate cores, and full-grain Italian calfskin.
            </p>
          </RevealOnScroll>
        </div>

        {/* 6 Stitch Product Cards Grid */}
        <StaggerBoxes style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2.5rem' }} stagger={0.1}>
          {collectionArchive.map((prod) => (
            <div key={prod.slug} style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '16/10', background: '#EFEEEA', overflow: 'hidden' }}>
                <img
                  src={prod.img}
                  alt={prod.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                  onError={(e) => {
                    const fallback = PRODUCTS_CATALOG.find(p => p.slug === prod.slug)?.image || 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85';
                    if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
                  }}
                />
              </div>
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52', display: 'block', marginBottom: '0.35rem' }}>
                    {prod.category}
                  </span>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#141310', margin: '0 0 0.5rem 0', fontWeight: 500 }}>
                    {prod.name}
                  </h2>
                  <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#635E52', margin: '0 0 0.75rem 0', lineHeight: 1.4 }}>
                    {prod.subtitle}
                  </p>
                  <p style={{ fontSize: '0.88rem', color: '#4A463F', lineHeight: 1.6, margin: 0 }}>
                    {prod.desc}
                  </p>
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid #EAE6DF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link
                    to={`/products/${prod.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#141310',
                      textDecoration: 'none'
                    }}
                  >
                    <span>Explore Specifications</span>
                    <ArrowRight size={14} />
                  </Link>

                  <Link
                    to={`/enquire?product=${encodeURIComponent(prod.name)}`}
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#635E52',
                      textDecoration: 'none'
                    }}
                  >
                    Enquire →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </StaggerBoxes>
      </div>
    </div>
  );
}
