import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { PRODUCTS_CATALOG } from '../data/catalogData';
import RevealOnScroll from './motion/RevealOnScroll';

// Specific 4 showcase products matching Google Stitch approved design
const SHOWCASE_PRODUCTS = [
  {
    id: 'slip-in-albums',
    slug: 'slip-in-albums',
    name: 'Slip-in Albums',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=85',
    desc: 'Slip-in Albums are an excellent way to deliver prints to clients. They are ideal for portrait sessions, boudoir, newborn, or wedding prints.'
  },
  {
    id: 'flush-mount-album',
    slug: 'flush-mount-album',
    name: 'Flush Mount Albums',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=85',
    desc: 'Our flagship flush mount album, printed on genuine photographic paper with custom hard board leaves that lay completely flat 180 degrees.'
  },
  {
    id: 'photo-book',
    slug: 'photo-book',
    name: 'Photo Book',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=85',
    desc: 'Sleek and versatile, our photo books feature flexible high-density art paper spreads that give your images rich depth and natural tactile elegance.'
  },
  {
    id: 'luxury-albums',
    slug: 'luxury-albums',
    name: 'Leather Albums',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=85',
    desc: 'Sumptuous genuine Italian leather covers hand-crafted by master binders with precision foil stamping and lifetime archival bindings.'
  }
];

export default function ProductShowcase({ onSelectProduct }) {
  const navigate = useNavigate();

  const handleCardClick = (prod) => {
    const fullProd = PRODUCTS_CATALOG.find((p) => p.slug === prod.slug) || prod;
    if (onSelectProduct) {
      onSelectProduct(fullProd);
    } else {
      navigate(`/products/${prod.slug}`);
    }
  };

  return (
    <section id="products" className="products-showcase-section">
      <div className="section-container">
        <RevealOnScroll direction="up" className="showcase-header-center">
          <div className="section-eyebrow-chip">
            <span>ARTISANAL PORTFOLIO</span>
          </div>
          <h2 className="showcase-heading">Our Products</h2>
          <p className="showcase-lead-text">
            Four signature format families engineered for demanding studio workflows. Each piece is assembled by hand using museum-grade materials.
          </p>
        </RevealOnScroll>

        <div className="products-four-column-grid">
          {SHOWCASE_PRODUCTS.map((prod, index) => (
            <RevealOnScroll
              key={prod.id}
              direction="up"
              delay={index * 0.08}
              className="product-catalogue-card interactive-hover group"
              onClick={() => handleCardClick(prod)}
            >
              <div className="product-image-container overflow-hidden">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="product-card-photo transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>

              <div className="product-card-body">
                <h3 className="product-card-title">{prod.name}</h3>
                <p className="product-card-desc">{prod.desc}</p>
                <Link
                  to={`/products/${prod.slug}`}
                  className="product-card-action-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    const fullProd = PRODUCTS_CATALOG.find((p) => p.slug === prod.slug) || prod;
                    if (onSelectProduct) onSelectProduct(fullProd);
                  }}
                >
                  <span>VIEW SPECIFICATIONS</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
