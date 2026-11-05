import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import RevealOnScroll from '../components/motion/RevealOnScroll';
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Normalize slug matching
  const normalizedSlug = slug ? slug.toLowerCase().trim() : '';

  if (normalizedSlug === 'flush-mount-album') {
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

        <RevealOnScroll direction="up">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
            <span style={{ display: 'inline-block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#635E52', background: '#EFEEEA', padding: '0.35rem 0.85rem', marginBottom: '1rem' }}>
              Atelier Master Collection
            </span>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', color: '#141310', fontWeight: 400, margin: '0 0 1rem 0' }}>
              Handcrafted Heirlooms & Presentation
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#4A463F', lineHeight: 1.65, margin: 0 }}>
              Every volume is individually hand-bound in our Mumbai bindery using archival continuous-tone silver halide chemistry, museum-grade 1.2mm substrate cores, and full-grain Italian calfskin.
            </p>
          </div>
        </RevealOnScroll>

        {/* 6 Stitch Product Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
          {[
            {
              slug: 'flush-mount-album',
              name: 'Flush Mount Album',
              category: 'Flagship Tome Series',
              subtitle: 'Signature 180° Lay-Flat Continuous Silver Halide Emulsion',
              desc: 'Permanently fused to a solid 1.2mm museum-grade core board. Delivers completely rigid, unbending double-page spreads across 36 inches with true 0-split layflat gutter.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx3XmJeOFEGbFEzG_s0dNwvn78vq7mbUGfQmqmVlCLzXcOmqJpjXc4qTtTFcSfXEVqJ7OrQ0lq3e6q7vixc6kuLYLQzxzNRgB3bZLu8FXu64teBVTs4zI-awVQ1wjfvd9yvAQ9y7h57Y-TlEGcmQlOsqzfiBjj9vIAn4QEStwVvn4pL44aQ36V0fWo9-wl0TiTv53rGlNG4cSSjbwE34ayhx6F4odFx0RVorz-f-PZ'
            },
            {
              slug: 'layflat',
              name: 'Layflat Photo Book',
              category: 'Contemporary Bookbinding Line',
              subtitle: 'Modern Editorial Elegance with Flexible Archival Spreads',
              desc: 'Pairs lighter 250–300gsm Hahnemühle and cotton rag sheets with an ultra-thin polymer hinge—allowing up to 160 pages to open completely flat.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_7NnZZkKspRBa13ccO5fJ8usBmOr3FYTcsWneA7j-6L0tMJENL7nJOGIH7kC9uZ2h8Tp1WGaBr6xiBSo4D-St1OJXkneGPPzhp11uDH1egJMi8uX1169jOjMV9pdB3SYp4mUi2X1s1kfCBcG-U7W3ntUnlj6EFtQ8gy7qpBuIvmMSaOu5IatHnBnW0ungho5GNcLgrGkFInqYem6UikkXoY0kwACrZzk3HG9D5mBk'
            },
            {
              slug: 'photo-book',
              name: 'Artisan Photo Book',
              category: 'Fine Art Editorial Journal',
              subtitle: 'Polyurethane Reactive (PUR) Spine with French Fold Flaps',
              desc: 'Inspired by European gallery monographs. High volume capacity holding from 40 up to 250 individual pages on Mohawk Superfine and Fedrigoni Tintoretto papers.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC83iLWr2sRo5IsW9FeriQMBxL0zi3c7zcHRBlOqfM797L5oqqaGjPjlllUb82j5wAUAxb3M-1PUdFjOr1w7HWD6BMnG_xCePw3YmEvwXnJrIgHCEVVoI2TTdp2e3VAyiLg2DTYwwAAcIhiivK9izxwRBjh9HHiODGYG81NKunDoGDJDv3WXcexfdQLVj848gudHaNIOXbgT38tGEixI3gtU0ZL19P7HJtfnrY5Kc0h'
            },
            {
              slug: 'luxury-albums',
              name: 'Luxury Heirloom Tome',
              category: 'The Sovereign Collection',
              subtitle: 'Full-Grain Tuscan Calfskin & 24K Hand-Gilded Leaf Edges',
              desc: 'Our most lavish haute couture collection. Raised French cord hubs, solid brass CNC debossing, and housed inside an artisanal solid Teak presentation chest.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPt66gMYymwLcjE7kJnmvPSTNiJJWmBMvf3kMoFw7-8G7f1YUGTbmfiNDceJJKWNbo1frLZn5F1SBmv3-gZyKpQqcxiEWzM6ZOE5EKffKbh2g9xjONnWADReQtB7idVASh2r0xiNmS4xBducriGB1uTnjc9OwM5jUrZ8k1JfkMTvx6JxwJnpmR2DN4xffxUUrI3CdjdoO5Lma8NJJA7aVceM_wrnSq6Esm3NC1VAQZ'
            },
            {
              slug: 'slip-in-albums',
              name: 'Slip-In Albums & Matted Folios',
              category: 'Instant Delivery Format',
              subtitle: '4-Ply Museum-Grade Bevel Mounts & Dry Top-Loading Pockets',
              desc: 'Eliminate sprays and wet glues entirely. Simply glide lab-processed photographic prints into precision die-cut matted apertures in under 60 seconds.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAH7GS784tgx6_H9l44X-U5OVAa_1nGw1X8OvKF22-QrETYrCGz3X_dI__SC96mSyeK-E2aDJ5dWXizdJmMUSFUN-dz_X34tzEmGTLBVK1Um9B6qZDhYYXZy88kpMCGBoJmgaFkrzpw6LUOCImdJQEHQFzl8i_vMY8NXHpD6sHIWmclIOqZ4wn2PKjWnoeiYEof4TJoq4UUP5Ji13le7KudKPURj-MJatIvrKUSg9Xk'
            },
            {
              slug: 'box-and-bags',
              name: 'Presentation Boxes & Keepsake Enclosures',
              category: 'Archival Architecture',
              subtitle: 'Hardwood Keepsake Chests, Solander Clamshells & Linen Bags',
              desc: 'Custom sanctuaries engineered with micron tolerance around your commissioned volume. Seasoned Burma Teak, American Walnut, and French cotton velvet linings.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT74WCrQg4tFECdHfWZUVFBeilPmiPA_OKoqY4EONN4JSF2xxOGbnslQgmDMEXGrz9a2cTUPNuImNKozbeIzNZ4AOZP1BwRxr5jcHp45e2Sg1YSwz2Xf0Kth6RADiSOPe8CmioOA0nsVkFeNeRTjsUjvFg8SeMBcBRVxK2VAXOJ1DybUcGIMrBVuZ6oM_fZEgjyyXlqxHq0vk58e6jD2xjBidwAshYxr5LToBbrheP'
            }
          ].map((prod) => (
            <div key={prod.slug} style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '16/10', background: '#EFEEEA', overflow: 'hidden' }}>
                <img src={prod.img} alt={prod.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
        </div>
      </div>
    </div>
  );
}
