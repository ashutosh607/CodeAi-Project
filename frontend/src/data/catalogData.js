// Ultraa Albums Catalog Data — Comprehensive Product, Service, UK & Resources Inventory

export const PRODUCTS_CATALOG = [
  // GROUP A: ALBUMS & BOOKS
  {
    id: 'flush-mount-album',
    slug: 'flush-mount-album',
    group: 'albums-books',
    groupLabel: 'ALBUMS & BOOKS',
    name: 'Flush Mount Album',
    subtitle: 'Signature 180° Lay-Flat Seamless Archival Heirloom',
    shortDesc: 'Mounted on 1.1mm museum-grade archival board with true continuous lay-flat panoramic opening and Fuji Crystal Archive silver halide paper.',
    heroDesc: 'The definitive gold standard for wedding photographers worldwide. Each panoramic spread is creased without cuts, allowing couples and photographers to display wide wedding scenes across a full 180-degree flat plane without losing a millimeter in the gutter.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85'
    ],
    sizes: [
      { name: '10 x 10 in (Square)', desc: 'Standard intimate heirloom' },
      { name: '12 x 12 in (Square)', desc: 'Our most popular flagship wedding size' },
      { name: '11 x 14 in (Landscape)', desc: 'Grand panoramic presentation' },
      { name: '12 x 18 in (Royal)', desc: 'Majestic multi-day luxury edition' }
    ],
    materials: [
      'Genuine Italian Full-Grain Leather (Cognac, Espresso, Bone Ivory, Onyx)',
      'Natural Japanese Open-Weave Linen (Flax Sand, Botanical Sage, Blush)',
      'Plush French Velvet & Royal Imperial Silk'
    ],
    finishes: [
      'Hot Brass Die Stamping: 22k Gold, Rose Gold, Sterling Silver, Blind Deboss',
      'Hand-Gilded Page Edges: Antique Gold, Matte Silver, or Raw White',
      'Padded or Modern Flat Hardcover Construction'
    ],
    customization: [
      'Custom Acrylic Cameo Photo Inset Window (4mm diamond polished)',
      'Bespoke Brass Typography Die with Couple Monogram & Wedding Date',
      'Tailored Clamshell Presentation Box with Magnetic Closure'
    ],
    spreads: [
      { title: 'Full Bleed Ceremony Panorama', desc: 'Seamless 24-inch continuous photograph with zero gutter creasing' },
      { title: 'Fine-Art Editorial Diptych', desc: 'Left bridal portrait paired with right ring and floral detail capture' }
    ],
    faqs: [
      { q: 'How many spreads can a Flush Mount Album hold?', a: 'Standard volumes accommodate between 15 to 60 spreads (30 to 120 pages).' },
      { q: 'Is the silver halide paper water and fingerprint resistant?', a: 'Yes, our Fuji Crystal Archive paper is treated with a protective lustre/silk coating resisting moisture and handling marks.' }
    ],
    relatedIds: ['luxury-albums', 'box-and-bags', 'layflat']
  },
  {
    id: 'layflat',
    slug: 'layflat',
    group: 'albums-books',
    groupLabel: 'ALBUMS & BOOKS',
    name: 'Layflat',
    subtitle: 'Ultra-Slim Panoramic Wedding Volume',
    shortDesc: 'Engineered for seamless double-page panoramic storytelling with zero gutter loss and ultra-slim archival leaves.',
    heroDesc: 'Engineered for studio workflows and modern couples who want the uninterrupted panoramic presentation of a flush mount album in a sleeker, lighter physical profile.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=85'
    ],
    sizes: [
      { name: '8 x 8 in', desc: 'Compact studio companion' },
      { name: '10 x 10 in', desc: 'Classic editorial square' },
      { name: '12 x 12 in', desc: 'Spacious couple showcase' },
      { name: '11 x 14 in', desc: 'Cinematic landscape' }
    ],
    materials: ['Japanese Bookcloth Linen', 'Buckram Textile', 'Vegan Leather'],
    finishes: ['Foil Stamped Titles', 'Blind Debossed Spine', 'Matte Endpapers'],
    customization: ['Embossed Spine Date', 'Custom Photo Cover Wrap', 'Matching Linen Slipcase'],
    spreads: [
      { title: 'Panoramic Sunset Landscape', desc: 'Uninterrupted visual line across the center spread' }
    ],
    faqs: [
      { q: 'What is the difference between Layflat and Flush Mount?', a: 'Layflat features lighter, flexible substrate leaves while Flush Mount uses thick 1.1mm rigid board cores.' }
    ],
    relatedIds: ['flush-mount-album', 'photo-book']
  },
  {
    id: 'photo-book',
    slug: 'photo-book',
    group: 'albums-books',
    groupLabel: 'ALBUMS & BOOKS',
    name: 'Photo Book',
    subtitle: 'Press-Printed Museum Cotton Rag with Minimalist Bookcloth Binding',
    shortDesc: 'Crafted on archival cotton rag with Japanese bookcloth covers for contemporary pre-wedding, guest, and family sessions.',
    heroDesc: 'A tactile, magazine-style fine-art volume crafted for pre-wedding portrait sessions, milestone celebrations, and family documentation. Uses uncoated cotton rag paper for a soft, museum-grade reading experience.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1519225433281-96db8b3260e5?auto=format&fit=crop&w=1200&q=85'
    ],
    sizes: [
      { name: '8.5 x 11 in (Portrait)', desc: 'Editorial monograph' },
      { name: '10 x 10 in (Square)', desc: 'Balanced square portfolio' },
      { name: '11 x 14 in (Landscape)', desc: 'Wide architectural spreads' }
    ],
    materials: ['Archival Uncoated Cotton Rag', 'Natural Raw Canvas', 'Japanese Bookcloth'],
    finishes: ['Blind Deboss Monogram', 'Archival Endpapers', 'Minimalist Typography'],
    customization: ['Hand-torn deckle edge options', 'Protective Book Jacket / Dust Cover'],
    spreads: [
      { title: 'Editorial Typographic Spread', desc: 'Couple vows framed by generous museum white borders' }
    ],
    faqs: [
      { q: 'Can photo books include text?', a: 'Yes, our design team can integrate poetry, speeches, vows, and dates in bespoke typography.' }
    ],
    relatedIds: ['layflat', 'slip-in-albums']
  },
  {
    id: 'luxury-albums',
    slug: 'luxury-albums',
    group: 'albums-books',
    groupLabel: 'ALBUMS & BOOKS',
    name: 'Luxury Albums',
    subtitle: 'Full-Grain Italian Leather, Cameo Glass & Handcrafted Wooden Caskets',
    shortDesc: 'Encased in imported Italian leather or velvet, presented within an artisanal wooden casket box lined with silk.',
    heroDesc: 'Our most lavish haute couture collection. Designed for royal celebrations and milestone weddings, each Luxury Album is encased in full-grain Tuscan hide, fitted with diamond-polished acrylic cameo photo covers, and housed inside an artisanal wooden casket lined with plush velvet.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85'
    ],
    sizes: [
      { name: '12 x 12 in (Square)', desc: 'Executive luxury edition' },
      { name: '12 x 15 in (Landscape)', desc: 'European destination size' },
      { name: '12 x 18 in (Royal Panorama)', desc: 'Grand Maharaja presentation' }
    ],
    materials: ['Imported Tuscan Vegetable-Tanned Leather', 'Crushed French Velvet', 'Handcrafted Walnut / Teak Casket'],
    finishes: ['Hand-Gilded 24k Gold Foil Leaf Edges', 'Brass Die Hot Debossing', 'Acrylic Photo Cameo Window'],
    customization: ['Handmade Wooden Presentation Casket with Velvet Lining', 'Custom USB Key Compartment in Matching Leather'],
    spreads: [
      { title: 'Royal Wedding Mandap & Banquet', desc: '18x24 inch double-page spread with hand-gilded perimeter' }
    ],
    faqs: [
      { q: 'Is the wooden casket included?', a: 'Yes, the handcrafted presentation casket is included with every Luxury Album commission.' }
    ],
    relatedIds: ['flush-mount-album', 'box-and-bags']
  },

  // GROUP B: PRESENTATION & STORAGE
  {
    id: 'box-and-bags',
    slug: 'box-and-bags',
    group: 'presentation-storage',
    groupLabel: 'PRESENTATION & STORAGE',
    name: 'Box and Bags',
    subtitle: 'Hand-Constructed Clamshell Presentation Vaults & Velvet Travel Bags',
    shortDesc: 'Rigid 3mm binders board wrapped in matching linen or leather with satin ribbon pulls and hidden magnetic closures.',
    heroDesc: 'Give your heirloom volume the protective sanctuary it deserves. Our presentation clamshell boxes are crafted from 3mm dense binders board that resists temperature shifts, wrapped in matching textiles, and lined with velvet to safeguard against dust and atmospheric moisture.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85'
    ],
    sizes: [
      { name: 'To fit 10x10 Album', desc: 'Precision tailored' },
      { name: 'To fit 12x12 Album', desc: 'Includes ribbon lift-out' },
      { name: 'To fit 11x14 & 12x18', desc: 'Reinforced magnetic hinges' }
    ],
    materials: ['Matching Linen Exterior', 'Italian Leatherette', 'Crushed Velvet Interior'],
    finishes: ['Foil Stamped Monogram on Lid', 'Concealed Rare-Earth Magnetic Closures'],
    customization: ['Integrated USB Flash Drive Slot', 'Archival Certificate Pocket'],
    spreads: [],
    faqs: [
      { q: 'Can boxes be purchased separately?', a: 'Yes, photographers can order custom-sized boxes for existing albums or client prints.' }
    ],
    relatedIds: ['luxury-albums', 'flush-mount-album']
  },
  {
    id: 'slip-in-albums',
    slug: 'slip-in-albums',
    group: 'presentation-storage',
    groupLabel: 'PRESENTATION & STORAGE',
    name: 'Slip in Albums',
    subtitle: 'Artisanal Pocket Albums for Parents & Milestone Keepsakes',
    shortDesc: 'Handcrafted window frames in 4x6, 5x7, and 6x8 formats for effortless photo insertion and rapid gifting.',
    heroDesc: 'The classic photographic keepsake reimagined with luxury materials. Features archival acid-free card sleeves with bevel-cut windows, allowing studio photographers and families to slide in 4x6, 5x7, or 6x8 photographic prints without glue or mounting tape.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85'
    ],
    sizes: [
      { name: '4 x 6 in (20–40 prints)', desc: 'Pocket parent edition' },
      { name: '5 x 7 in (20–60 prints)', desc: 'Classic portrait format' },
      { name: '6 x 8 in (20–60 prints)', desc: 'Studio presentation edition' }
    ],
    materials: ['Durable Textured Buckram', 'Japanese Bookcloth', 'Satin Ribbons'],
    finishes: ['Debossed Studio Logo on Back', 'Gold Foil Title on Cover'],
    customization: ['Multi-Album Parent Bundle Packs', 'Personalized Gift Sleeves'],
    spreads: [],
    faqs: [
      { q: 'Are prints included?', a: 'You can order empty handcrafted slip-in albums or order with Fuji Crystal Archive lab prints pre-inserted.' }
    ],
    relatedIds: ['photo-book', 'box-and-bags']
  }
];

export const SERVICES_CATALOG = [
  {
    id: 'image-editing',
    slug: 'image-editing',
    name: 'Image Editing',
    shortDesc: 'Professional color grading, RAW conversion, exposure balance, and natural skin tone calibration.',
    heroDesc: 'Comprehensive post-production for wedding photographers. We harmonize different cameras and lighting setups into one consistent, magazine-grade color profile with 48–72 hour proof turnarounds.',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=85',
    features: [
      'Exposure and white balance harmonization across dual-camera teams',
      'Highlight recovery on wedding gowns, veils, and jewelry details',
      'Signature film emulation and fine-art black & white conversion',
      'Lens profile correction, chromatic aberration, and noise reduction'
    ]
  },
  {
    id: 'album-designing',
    slug: 'album-designing',
    name: 'Album Designing',
    shortDesc: 'Bespoke layout curation by master book designers with unlimited soft-copy revisions.',
    heroDesc: 'Never spend 15 hours wrestling with generic DIY templates again. Our experienced book designers sequence your wedding images with emotional rhythm, negative space, and architectural balance.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=85',
    features: [
      'Dedicated book designer assigned to each wedding commission',
      'Four signature aesthetics: Classic Minimalist, Editorial, Indian Fusion, Documentary',
      'Interactive cloud soft-copy proofing system with pin-point client comments',
      'Unlimited revisions until the layout is 100% approved for print'
    ]
  },
  {
    id: 'photo-editing-and-album-design',
    slug: 'photo-editing-and-album-design',
    name: 'Photo Editing and Album Design',
    shortDesc: 'Complete end-to-end atelier workflow: full culling, master retouching, and bespoke album layout curation.',
    heroDesc: 'The complete studio bundle. From raw camera card upload to finished bound album on your doorstep, our digital artists handle culling, retouching, color grading, and spread layout in one unified workflow.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=85',
    features: [
      'Raw capture culling from 3,000+ images down to storytelling selects',
      'Master retouching & color harmonization on all selected spreads',
      'Custom layout design with cloud soft-copy proofing',
      'Priority print production queue in our Mumbai atelier'
    ]
  },
  {
    id: 'wedding-photography',
    slug: 'wedding-photography',
    name: 'Wedding Photography',
    shortDesc: 'Full-day candid documentary coverage, pre-wedding sessions, and 4K cinematic wedding films.',
    heroDesc: 'Capturing weddings as living, emotional heirlooms. Our photography collective pairs unscripted documentary intimacy with high-fashion editorial rigor, producing images crafted specifically for physical archival printing.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85',
    features: [
      'Multi-day royal wedding & European destination coverage',
      'Dual medium-format prime lenses for extraordinary print fidelity',
      'Pre-wedding editorial fashion portrait sessions',
      '4K cinematic wedding film highlights and full ritual documentation'
    ]
  }
];

export const UK_CATALOG = [
  // ALBUMS FOR UK
  {
    id: 'flush-mount-album-uk',
    slug: 'flush-mount-album-uk',
    group: 'albums',
    name: 'Flush Mount Album for UK',
    shortDesc: 'True 180° layflat albums printed on Fuji Crystal Archive paper with 1.1mm archival core boards for UK studios.',
    badge: 'UK Studio Standard',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'luxury-albums-uk',
    slug: 'luxury-albums-uk',
    group: 'albums',
    name: 'Luxury Albums for UK',
    shortDesc: 'Full-grain Italian leathers, polished acrylic cameo windows, and bespoke wooden presentation caskets.',
    badge: 'Luxury Tier',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'box-and-bags-uk',
    slug: 'box-and-bags-uk',
    group: 'albums',
    name: 'Box and Bags for UK',
    shortDesc: 'Rigid 3mm clamshell boxes, magnetic closure presentation cases, and custom velvet travel bags for UK formats.',
    badge: 'Protective Storage',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'slip-in-albums-uk',
    slug: 'slip-in-albums-uk',
    group: 'albums',
    name: 'Slip in Albums for UK',
    shortDesc: 'Handcrafted 4x6, 5x7, and 6x8 window slip-in pocket albums tailored for UK parent gifts and studio copies.',
    badge: 'Parent Edition',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'photo-book-uk',
    slug: 'photo-book-uk',
    group: 'albums',
    name: 'Photo Book for UK',
    shortDesc: 'Press-printed fine-art cotton rag books with bookcloth covers for contemporary pre-wedding and family sessions.',
    badge: 'Fine Art Book',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=85'
  },
  // SERVICES FOR UK
  {
    id: 'image-editing-uk',
    slug: 'image-editing-uk',
    group: 'services',
    name: 'Image Editing for UK',
    shortDesc: 'Dedicated overnight proof turnaround for UK wedding studios during peak season. Natural British skin tones.',
    badge: '48h SLA',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'photography-uk',
    slug: 'photography-uk',
    group: 'services',
    name: 'Photography for UK',
    shortDesc: 'Documentary and editorial wedding photography across London, the Cotswolds, Scotland, and destination Europe.',
    badge: 'UK Team',
    image: 'https://images.unsplash.com/photo-1519225433281-96db8b3260e5?auto=format&fit=crop&w=800&q=85'
  }
];

export const RESOURCES_CATALOG = [
  {
    id: 'album-designs',
    slug: 'album-designs',
    title: 'Album Designs',
    desc: 'Browse curated layout themes: Classic Minimalist, Contemporary Editorial, Indian Fusion, and Documentary Rhythm.',
    icon: 'Layout'
  },
  {
    id: 'wedding-photo-albums',
    slug: 'wedding-photo-albums',
    title: 'Wedding Photo Albums',
    desc: 'Explore real wedding stories bound across 100+ spreads in genuine leather, linen, and museum substrates.',
    icon: 'BookOpen'
  },
  {
    id: 'blogs',
    slug: 'blogs',
    title: 'Blogs',
    desc: 'Articles on wedding album curation, paper chemistry, foil stamping preservation, and studio workflow tips.',
    icon: 'FileText'
  },
  {
    id: 'faq',
    slug: 'faq',
    title: 'FAQ',
    desc: 'Frequently asked questions regarding paper stocks, spread capacity, turnaround times, and international shipping.',
    icon: 'HelpCircle'
  },
  {
    id: 'catalog',
    slug: 'catalog',
    title: 'Catalog',
    desc: 'Download the comprehensive Ultraa Albums wholesale studio catalog with specifications and cover swatch guides.',
    icon: 'Download'
  },
  {
    id: 'how-to-order',
    slug: 'how-to-order',
    title: 'How to Order',
    desc: 'Step-by-step ordering protocol: uploading files, soft-copy proof review, approvals, and express courier tracking.',
    icon: 'CheckSquare'
  }
];

