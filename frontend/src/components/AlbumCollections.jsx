import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const COLLECTIONS = [
  {
    id: 'flush-mount',
    category: 'flush-mount',
    name: 'The Heirloom Flush Mount Album',
    subtitle: 'Our Flagship Masterpiece for Professional Photographers & Discerning Couples',
    description: 'Bound with rigid archival substrates so pages lay perfectly flat across a continuous 180° panoramic spread. Printed exclusively on Fuji Crystal Archive photographic paper with true silver halide chemistry, ensuring deep tonal blacks and generational color permanence.',
    features: [
      'Seamless 180° true lay-flat panoramic opening with zero image loss',
      'Thick museum-grade archival board leaves (1.1mm substrate core)',
      'Fuji Crystal Archive Lustre, Silk, or Deep Matte photographic papers',
      'Handcrafted padded or non-padded hardcovers in linen, leather, or silk',
      'Available in square (10x10", 12x12"), landscape (11x14", 12x18"), and portrait'
    ],
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85',
    tag: 'Signature Flagship',
    specs: 'Up to 100 Spreads • 100+ Year Archival Rating'
  },
  {
    id: 'luxury-leather',
    category: 'luxury',
    name: 'The Bespoke Luxury Album & Casket',
    subtitle: 'Full-Grain Italian Leather, Acrylic Cameo Windows, and Handcrafted Wooden Vaults',
    description: 'Designed for high-ticket wedding and royal celebrations. Encased in imported full-grain Italian leather, plush velvet, or high-gloss acrylic cameo photo covers, presented within an artisanal handcrafted wooden casket box lined with velvet and finished with magnetic closures.',
    features: [
      'Genuine vegetable-tanned full-grain Italian leathers and crushed velvets',
      'Optional 4mm diamond-polished acrylic cameo photo cover window',
      'Includes handcrafted wooden presentation casket or magnetic clamshell box',
      'Hand-gilded page edges in antique gold, matte silver, or rose gold',
      'Custom brass die hot-foil debossing with bespoke couple monogram'
    ],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85',
    tag: 'Haute Couture Edition',
    specs: 'Custom Die Stamping • Handcrafted Wooden Casket'
  },
  {
    id: 'layflat-book',
    category: 'fine-art',
    name: 'Fine Art Layflat Photo Book',
    subtitle: 'Press-Printed Museum Cotton Rag with Minimalist Bookcloth Binding',
    description: 'A lighter, contemporary editorial volume for pre-wedding portraits, family milestones, and guest books. Utilizes fine art uncoated matte papers that allow typography and photography to breathe with quiet, museum-like elegance.',
    features: [
      'Uncoated archival cotton rag paper with subtle organic tooth',
      'Flexible layflat spine engineered for tactile ease and light transport',
      'Japanese bookcloth linen or raw canvas hardcover covers',
      'Blind debossed title typography with hand-pasted endpapers',
      'Matching minimal slipcase included with every volume'
    ],
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=85',
    tag: 'Editorial Contemporary',
    specs: 'Fine Art Matte • Japanese Bookcloth'
  },
  {
    id: 'parent-slipin',
    category: 'keepsake',
    name: 'Parent Editions & Pocket Slip-In Albums',
    subtitle: 'Companion Keepsakes in 4x6, 5x7, and 6x8 Handcrafted Formats',
    description: 'The definitive solution for family gift editions. Exact proportional duplicates of the main wedding album, or artisanal slip-in pocket albums crafted with archival paper frames for instantaneous gifting and heirloom shelf display.',
    features: [
      'Exact scaled duplicates of primary flush mount spreads for parents',
      'Slip-in archival window albums available in 4x6, 5x7, and 6x8 inch sizes',
      'Durable textured buckram and linen bindings designed for frequent handling',
      'Available in multi-album discounted packages for wedding studios',
      'Delivered in individual protective tissue wrapping and gift sleeves'
    ],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',
    tag: 'Family Keepsake',
    specs: 'Proportional Duplicates • 4x6 / 5x7 / 6x8 Sizes'
  },
  {
    id: 'presentation-boxes',
    category: 'accessories',
    name: 'Presentation Clamshell Boxes & Velvet Pouches',
    subtitle: 'Hand-Constructed Keepsake Storage Tailored to Every Album Size',
    description: 'Every heirloom album deserves a protective sanctuary. Our clamshell boxes feature rigid 3mm binders board wrapped in matching cover materials, recessed ribbon pulls for effortless removal, and hidden magnetic closure latches.',
    features: [
      'Rigid 3mm binders board structure resisting warp and atmospheric moisture',
      'Matching linen, leatherette, or velvet exterior with foil debossing',
      'Satin or grosgrain ribbon lift-out mechanism tailored to album depth',
      'Dedicated compartments for USB flash drives and archival certificate cards',
      'Customized dimensions available for all standard and bespoke album formats'
    ],
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85',
    tag: 'Protective Vault',
    specs: 'Custom Fitted • Magnetic Closure'
  }
];

export default function AlbumCollections() {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all'
    ? COLLECTIONS
    : COLLECTIONS.filter((c) => c.category === activeTab);

  return (
    <section id="collections" className="editorial-section collections-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="editorial-section-intro">
          <div className="intro-badge">Handcrafted In Mumbai • Shipped Globally</div>
          <h2 className="editorial-h2">The Album Collections</h2>
          <p className="editorial-lead">
            Every Ultraa Album is an architectural object: measured to tenths of a millimeter, folded by hand, and assembled with chemistry designed to preserve light for over a century.
          </p>

          {/* Collection Filter Tabs */}
          <div className="category-filter-nav" role="tablist">
            <button
              type="button"
              className={`filter-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Collections
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeTab === 'flush-mount' ? 'active' : ''}`}
              onClick={() => setActiveTab('flush-mount')}
            >
              Flush Mount Albums
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeTab === 'luxury' ? 'active' : ''}`}
              onClick={() => setActiveTab('luxury')}
            >
              Bespoke Luxury & Caskets
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeTab === 'fine-art' ? 'active' : ''}`}
              onClick={() => setActiveTab('fine-art')}
            >
              Fine Art Books
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeTab === 'keepsake' ? 'active' : ''}`}
              onClick={() => setActiveTab('keepsake')}
            >
              Parent & Slip-In
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeTab === 'accessories' ? 'active' : ''}`}
              onClick={() => setActiveTab('accessories')}
            >
              Boxes & Presentation
            </button>
          </div>
        </div>

        {/* Editorial Spreads Showcase */}
        <div className="collections-editorial-list">
          {filtered.map((item, idx) => (
            <article
              key={item.id}
              className={`collection-editorial-article ${idx % 2 === 1 ? 'reverse-layout' : ''}`}
            >
              {/* Visual Showcase Frame */}
              <div className="article-visual-pane">
                <div className="visual-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="collection-feature-img"
                    loading="lazy"
                  />
                  <div className="collection-visual-badge">
                    <span>{item.tag}</span>
                  </div>
                </div>
                <div className="article-specs-ribbon">
                  <span>{item.specs}</span>
                </div>
              </div>

              {/* Editorial Text Content */}
              <div className="article-content-pane">
                <h3 className="collection-article-title">{item.name}</h3>
                <p className="collection-article-subtitle">{item.subtitle}</p>
                <p className="collection-article-desc">{item.description}</p>

                <div className="collection-features-list">
                  <span className="features-list-label">Craft & Technical Signatures</span>
                  <ul>
                    {item.features.map((feat, fidx) => (
                      <li key={fidx} className="feature-item-row">
                        <Check size={16} className="feature-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="collection-action-group">
                  <a href="#contact" className="collection-inquire-btn">
                    <span>Inquire for Studio Pricing</span>
                    <ArrowRight size={16} />
                  </a>
                  <a href="#materials" className="collection-materials-link">
                    Explore Swatches & Leather
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

