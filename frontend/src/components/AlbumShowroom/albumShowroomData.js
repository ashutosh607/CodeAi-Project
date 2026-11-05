// Album Showroom Detailed Data — Specific content for each of the 4 signature format families
// Uses authentic imagery and real catalog specifications from Ultraa Albums

export const SHOWROOM_ALBUMS = [
  {
    id: 'slip-in-albums',
    slug: 'slip-in-albums',
    name: 'Slip-in Albums',
    tagline: 'Artisanal Pocket Albums for Parents & Milestone Keepsakes',
    category: 'STUDIO FOLIO SUITE',
    coverMaterial: 'Japanese Woven Buckram Linen',
    coverColor: '#D8CEBE',
    accentColor: '#9D8357',
    coverTexture: 'linen',
    spineTitle: 'ULTRAA • SLIP-IN FOLIO • MMXXVI',
    frontTitle: 'STUDIO SLIP-IN FOLIO',
    frontSubtitle: 'BEVEL-CUT MAT POCKET COMPANION',
    desc: 'The classic photographic keepsake reimagined with luxury materials. Features archival acid-free card sleeves with precision bevel-cut windows, allowing studio photographers and clients to slide in 4x6, 5x7, or 6x8 lab prints without adhesive or tape.',
    pageEdgeType: 'standard', // clean cut ivory edges
    blockThickness: '12px',
    sizes: [
      { name: '4 x 6 in', desc: 'Pocket parent edition (20-40 prints)' },
      { name: '5 x 7 in', desc: 'Classic portrait folio (20-60 prints)' },
      { name: '6 x 8 in', desc: 'Studio presentation edition' }
    ],
    materials: ['Durable Textured Buckram', 'Japanese Bookcloth', 'Satin Pull Ribbons'],
    paperType: 'Acid-free Archival Matted Cardstock with Bevel-Cut Window Inserts',
    finishing: 'Hot Brass Die Stamped Cover Monogram, Debossed Studio Seal on Spine',
    binding: 'Section-Sewn Archival Sleeves with Protective Tissue Guards',
    spreads: [
      {
        id: 1,
        title: 'Bridal Portrait & Lace Details',
        left: {
          type: 'slip-matted',
          image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',
          caption: '5x7 Bevel-Cut Window • Chantilly Robe Session',
          note: 'Slide-in Archival Mat Pocket'
        },
        right: {
          type: 'slip-dual',
          imageTop: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85',
          captionTop: '4x6 Pocket • Solitaire Ring & Botanical Suite',
          imageBottom: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=85',
          captionBottom: '4x6 Pocket • Bridal Bouquet & Silk Ribbon',
          note: 'Rapid Studio Assembly'
        }
      },
      {
        id: 2,
        title: 'Intimate Ceremony Moments',
        left: {
          type: 'slip-matted',
          image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85',
          caption: '5x7 Bevel-Cut Window • The Vows Exchange',
          note: 'Acid-Free Archival Mat'
        },
        right: {
          type: 'slip-matted',
          image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=85',
          caption: '5x7 Bevel-Cut Window • First Steps as Husband & Wife',
          note: 'Protective Linen Inset'
        }
      }
    ]
  },

  {
    id: 'flush-mount-album',
    slug: 'flush-mount-album',
    name: 'Flush Mount Albums',
    tagline: 'Signature 180° Lay-Flat Seamless Archival Heirloom',
    category: 'FLAGSHIP HEIRLOOM',
    coverMaterial: 'Belgian Linen Sand & Brass Cameo',
    coverColor: '#EDE5DA',
    accentColor: '#B99A69',
    coverTexture: 'linen',
    spineTitle: 'ULTRAA ALBUMS • FLUSH MOUNT • MMXXVI',
    frontTitle: 'HEIRLOOM WEDDING VOL. XII',
    frontSubtitle: 'FINE ART FLUSH MOUNT BINDERY',
    desc: 'The definitive gold standard for wedding photographers worldwide. Each spread is mounted onto rigid 1.1mm museum board with continuous 180° lay-flat panoramic opening, allowing wide wedding scenes to flow across the center crease without losing a millimeter in the gutter.',
    pageEdgeType: 'thick-rigid', // thick 1.1mm core boards
    blockThickness: '22px',
    sizes: [
      { name: '10 x 10 in', desc: 'Standard intimate square heirloom' },
      { name: '12 x 12 in', desc: 'Flagship wedding size (most popular)' },
      { name: '11 x 14 in', desc: 'Grand cinematic landscape spread' },
      { name: '12 x 18 in', desc: 'Majestic Royal destination edition' }
    ],
    materials: ['Natural Japanese Open-Weave Linen', 'Italian Full-Grain Leather', 'Plush French Velvet'],
    paperType: 'Fuji Crystal Archive Silver Halide Photographic Paper (Lustre / Silk)',
    finishing: 'Hot Brass Die Stamping: 22k Gold, Rose Gold, Blind Deboss, Gilded Edges',
    binding: 'Solid 1.1mm Archival Rigid Core Board Leaves, True 180° Flat Gutter',
    spreads: [
      {
        id: 1,
        title: 'The Sacred Vows at Castello di Celsa',
        left: {
          type: 'panoramic-left',
          image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',
          caption: 'Plate 01 • Morning Robe & French Chantilly Lace'
        },
        right: {
          type: 'panoramic-right',
          image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85',
          caption: 'Plate 02 • Exchange of Vows beneath the Ancient Olive Canopy'
        }
      },
      {
        id: 2,
        title: 'Villa Balbianello Terraced Panorama',
        left: {
          type: 'panoramic-left',
          image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=85',
          caption: 'Plate 03 • Cypress Allée Sunset Promenade'
        },
        right: {
          type: 'panoramic-right',
          image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85',
          caption: 'Plate 04 • Bespoke Solitaire Rings & Wild Botanical Suite'
        }
      },
      {
        id: 3,
        title: 'The Grand Stately Banquet & Celebration',
        left: {
          type: 'panoramic-left',
          image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85',
          caption: 'Plate 05 • The Grand Dining Hall under Victorian Chandeliers'
        },
        right: {
          type: 'panoramic-right',
          image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=85',
          caption: 'Plate 06 • Waltzing beneath Starlight & Cascading Florals'
        }
      }
    ]
  },

  {
    id: 'photo-book',
    slug: 'photo-book',
    name: 'Photo Book',
    tagline: 'Press-Printed Museum Cotton Rag with Minimalist Bookcloth Binding',
    category: 'COTTON RAG BINDERY',
    coverMaterial: 'Muted Sage Botanical Bookcloth',
    coverColor: '#D4DDD3',
    accentColor: '#6B7E67',
    coverTexture: 'linen',
    spineTitle: 'ULTRAA • EDITORIAL MONOGRAPH • VOL. I',
    frontTitle: 'EDITORIAL PHOTO MONOGRAPH',
    frontSubtitle: 'PRESS-PRINTED ARCHIVAL COTTON RAG',
    desc: 'A tactile, magazine-style fine-art volume crafted for pre-wedding portrait sessions, milestone celebrations, and family documentation. Uses flexible uncoated cotton rag paper for a soft, museum-grade reading experience with contemporary multi-image layout grids.',
    pageEdgeType: 'flexible-art', // light flexible pages
    blockThickness: '14px',
    sizes: [
      { name: '8.5 x 11 in', desc: 'Editorial vertical monograph' },
      { name: '10 x 10 in', desc: 'Balanced square fine-art portfolio' },
      { name: '11 x 14 in', desc: 'Wide architectural layout format' }
    ],
    materials: ['Natural Raw Canvas', 'Japanese Bookcloth', 'Textured Linen'],
    paperType: '200gsm Archival Uncoated Cotton Rag (Smooth Matte / Textured)',
    finishing: 'Blind Deboss Spine Date, Hot Foil Titles, Minimalist Matte Endpapers',
    binding: 'Flexible Smyth-Sewn Section Binding with Lay-Flat Hinge',
    spreads: [
      {
        id: 1,
        title: 'Bridal Editorial & Still Life Suite',
        left: {
          type: 'editorial-single',
          image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',
          caption: 'Folio 01 • The Morning Robe Monograph'
        },
        right: {
          type: 'editorial-diptych',
          imageTop: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85',
          captionTop: 'Still Life • Diamond Solitaire & Wild Greenery',
          imageBottom: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=85',
          captionBottom: 'Candid • Vows under the Olive Bower'
        }
      },
      {
        id: 2,
        title: 'Destination Promenade & Architectural Diptych',
        left: {
          type: 'editorial-single',
          image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=85',
          caption: 'Folio 03 • Cypress Allée Destination Portraits'
        },
        right: {
          type: 'editorial-single',
          image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=85',
          caption: 'Folio 04 • Evening Toast & Floral Architecture'
        }
      }
    ]
  },

  {
    id: 'luxury-albums',
    slug: 'luxury-albums',
    name: 'Leather Albums',
    tagline: 'Handcrafted Italian Full-Grain Leather with Gilded 24k Edges',
    category: 'BESPOKE FULL-GRAIN',
    coverMaterial: 'Onyx Pebbled Italian Leather & Gold Die Stamping',
    coverColor: '#201E1B',
    accentColor: '#D4AF37',
    coverTexture: 'pebbled-leather',
    spineTitle: 'ULTRAA ALBUMS • ROYAL LEATHER • MMXXVI',
    frontTitle: 'IMPERIAL ROYAL WEDDING',
    frontSubtitle: 'BESPOKE FULL-GRAIN TUSCAN HIDE',
    desc: 'Our most lavish haute couture collection. Encased in genuine full-grain Tuscan hide, fitted with hot brass die 24k gold foil stamping, hand-gilded page perimeters, and housed inside a bespoke velvet-lined presentation casket. Built to endure generations of family heritage.',
    pageEdgeType: 'gilded-gold', // 24k gilded shimmering edges
    blockThickness: '24px',
    sizes: [
      { name: '12 x 12 in', desc: 'Executive luxury square edition' },
      { name: '12 x 15 in', desc: 'European grand destination size' },
      { name: '12 x 18 in', desc: 'Grand Maharaja panoramic presentation' }
    ],
    materials: ['Imported Tuscan Vegetable-Tanned Leather (Onyx, Cognac, Bone)', 'Crushed Velvet', 'Solid Walnut Casket'],
    paperType: 'Museum-Grade Silver Halide Metallic Pearl & Fine Art Cotton Rag',
    finishing: 'Hand-Gilded 24k Gold Foil Leaf Edges, Custom Brass Die Hot Debossing',
    binding: 'Hand-Crafted Master Binder Construction with Reinforced Spine Headbands',
    spreads: [
      {
        id: 1,
        title: 'Royal Mandap & Grand Ceremony Entrance',
        left: {
          type: 'gilded-spread',
          image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=85',
          caption: 'Imperial Plate 01 • Stately Grand Arrival & Tuscan Allée'
        },
        right: {
          type: 'gilded-spread',
          image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85',
          caption: 'Imperial Plate 02 • Exchange of Rings under 24k Floral Bower'
        }
      },
      {
        id: 2,
        title: 'Victorian Grand Hall & Midnight Starlight',
        left: {
          type: 'gilded-spread',
          image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85',
          caption: 'Imperial Plate 03 • Banquet of 500 Candles under Chandeliers'
        },
        right: {
          type: 'gilded-spread',
          image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=85',
          caption: 'Imperial Plate 04 • Waltzing under Cascading Golden Florals'
        }
      }
    ]
  },

  {
    id: 'layflat',
    slug: 'layflat',
    name: 'Layflat Books',
    tagline: 'Ultra-Slim Panoramic Wedding Volume with Zero Gutter Crease',
    category: 'ARCHIVAL SLIMLINE',
    coverMaterial: 'Muted Sage Botanical Linen & Rose Gold Deboss',
    coverColor: '#D4DDD3',
    accentColor: '#8F9E8B',
    coverTexture: 'linen',
    spineTitle: 'ULTRAA • LAYFLAT PANORAMA • MMXXVI',
    frontTitle: 'FINE ART LAYFLAT',
    frontSubtitle: 'CONTEMPORARY ULTRA-SLIM SPREADS',
    desc: 'Engineered for studio workflows and modern celebrations desiring seamless double-page panoramic storytelling with zero gutter loss in a sleeker, lightweight profile. Perfect for destination elopements and pre-wedding folios.',
    pageEdgeType: 'standard',
    blockThickness: '14px',
    sizes: [
      { name: '8 x 8 in', desc: 'Compact studio companion' },
      { name: '10 x 10 in', desc: 'Standard intimate square heirloom' },
      { name: '11 x 14 in', desc: 'Grand landscape editorial format' }
    ],
    materials: ['Botanical Linen', 'Textured Bookcloth', 'Hand-Glued Endpapers'],
    paperType: 'Archival Matte Cotton Rag with Protective Silk Lamination',
    finishing: 'Blind Deboss Typography with Rose Gold Accent Foil',
    binding: 'True 180° Layflat Ultra-Thin Archival Hinge Construction',
    spreads: [
      {
        id: 1,
        title: 'Sunset Coastline & Allée Vows',
        left: {
          image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85',
          caption: 'Plate 01 • Terraced Garden Stroll at Twilight'
        },
        right: {
          image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=85',
          caption: 'Plate 02 • Intimate Sunset Embrace by the Shore'
        }
      }
    ]
  },

  {
    id: 'box-and-bags',
    slug: 'box-and-bags',
    name: 'Box & Bags Collection',
    tagline: 'Hand-Constructed Clamshell Presentation Vaults & Velvet Pouches',
    category: 'PROTECTIVE STORAGE',
    coverMaterial: 'Rigid 3mm Binders Board Wrapped in Velvet & Italian Leather',
    coverColor: '#2C3E2D',
    accentColor: '#D4AF37',
    coverTexture: 'linen',
    spineTitle: 'ULTRAA • ARCHIVAL VAULT • MMXXVI',
    frontTitle: 'ARTISANAL VAULT & CASKET',
    frontSubtitle: 'PROTECTIVE HEIRLOOM HOUSING',
    desc: 'Every heirloom album deserves a protective sanctuary. Our clamshell boxes are crafted from 3mm dense binders board that resists temperature shifts, wrapped in matching textiles, and lined with velvet to safeguard against dust and atmospheric moisture.',
    pageEdgeType: 'thick-rigid',
    blockThickness: '28px',
    sizes: [
      { name: 'Fits 10x10 in', desc: 'Precision tailored with ribbon lift' },
      { name: 'Fits 12x12 in', desc: 'Executive wedding casket size' },
      { name: 'Fits 11x14 in', desc: 'Grand landscape edition' }
    ],
    materials: ['3mm Rigid Binders Board', 'Crushed Velvet Lining', 'Grosgrain Satin Pulls'],
    paperType: 'Acid-Free Heavyweight Foam & Velvet Bedding',
    finishing: 'Deep Foil Stamped Seal with Hidden Neodymium Magnetic Closure',
    binding: 'Precision Clamshell Hand-Assembled Structure',
    spreads: [
      {
        id: 1,
        title: 'The Presentation Casket Interior',
        left: {
          image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85',
          caption: 'Artisanal Velvet Casket Bed & Silk Pull Ribbon'
        },
        right: {
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=85',
          caption: 'Magnetic Closure Flap & Custom Brass Monogram Plate'
        }
      }
    ]
  },

  {
    id: 'parent-albums',
    slug: 'parent-albums',
    name: 'Parent Keepsakes',
    tagline: 'Proportional Duplicate Editions for Family Milestones & Gifting',
    category: 'COMPANION SUITE',
    coverMaterial: 'Soft Blush Silk Bookcloth & Brass Stamping',
    coverColor: '#E8DCD4',
    accentColor: '#B99A69',
    coverTexture: 'linen',
    spineTitle: 'ULTRAA • PARENT COMPANION • MMXXVI',
    frontTitle: 'PARENT HEIRLOOM EDITION',
    frontSubtitle: 'SCALED REPLICA FOR FAMILY SHARING',
    desc: 'The definitive solution for family gift editions. Exact proportional duplicates of the main wedding album, crafted with matching archival paper and luxury bookcloth covers for spontaneous gifting and shelf display across generations.',
    pageEdgeType: 'standard',
    blockThickness: '16px',
    sizes: [
      { name: '8 x 8 in', desc: 'Exact 12x12 duplicate scale' },
      { name: '6 x 6 in', desc: 'Handbag & bedside companion' },
      { name: '5 x 7 in', desc: 'Portrait presentation folio' }
    ],
    materials: ['Woven Rose Bookcloth', 'Japanese Endpapers', 'Acid-Free Core'],
    paperType: 'Fuji Crystal Archive Photographic Lustre Paper',
    finishing: 'Foil Stamped Monogram with Matching Slipcase Ribbon',
    binding: 'Lay-Flat Seamless Flush Mount Scale',
    spreads: [
      {
        id: 1,
        title: 'Family Embrace & Generations Gathering',
        left: {
          image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',
          caption: 'Plate 01 • Parents Emotional Toast at Twilight'
        },
        right: {
          image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85',
          caption: 'Plate 02 • Mother & Bride Sacred Blessing'
        }
      }
    ]
  },

  {
    id: 'mini-accordions',
    slug: 'mini-accordions',
    name: 'Pocket Accordions',
    tagline: 'Magnetic Folding Fine-Art Keepsakes for Handbags & Desktops',
    category: 'ARTISANAL MINIATURE',
    coverMaterial: 'Warm Camel Buckram with Concealed Magnetic Catch',
    coverColor: '#C9B6A1',
    accentColor: '#8C6D48',
    coverTexture: 'linen',
    spineTitle: 'ULTRAA • ACCORDION FOLIO • MMXXVI',
    frontTitle: 'POCKET ACCORDION FOLIO',
    frontSubtitle: 'MAGNETIC FINE-ART ACCORDION',
    desc: 'Delightful 3x3 inch folding accordions with up to 14 fine art photographic panels. Features concealed magnetic covers that snap closed or stand unsupported on office desks, bedside tables, or mantlepieces.',
    pageEdgeType: 'standard',
    blockThickness: '10px',
    sizes: [
      { name: '3 x 3 in', desc: 'Pocket square edition (10-14 panels)' },
      { name: '4 x 4 in', desc: 'Desktop standing display edition' }
    ],
    materials: ['Camel Textured Buckram', 'Japanese Linen', 'Neodymium Magnets'],
    paperType: 'Museum 310gsm Cotton Rag Smooth Paper',
    finishing: 'Debossed Geometric Frame with Gold Monogram Catch',
    binding: 'Continuous Zig-Zag Accordion Folding Leaf',
    spreads: [
      {
        id: 1,
        title: 'Milestone Portraits & Detail Vignettes',
        left: {
          image: 'https://images.unsplash.com/photo-1519225433281-96db8b3260e5?auto=format&fit=crop&w=1000&q=85',
          caption: 'Panel 01 • The Laughter & Champagne Toast'
        },
        right: {
          image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=85',
          caption: 'Panel 02 • Confetti Shower & Midnight Departure'
        }
      }
    ]
  }
];

