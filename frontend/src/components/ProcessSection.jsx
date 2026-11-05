
const STEPS = [
  {
    num: '01',
    tag: 'STAGE 01 • INGESTION',
    title: 'Transfer Photos Online',
    desc: 'Upload high-resolution camera files or client selects via Dropbox, WeTransfer, Google Drive, or our studio portal.',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=85',
    includes: [
      'RAW / DNG / TIFF Direct Cloud Upload',
      'Dropbox, Drive & Studio Portal Sync',
      'Resolution & Color Gamut Pre-Flight Audit',
      'Dedicated Studio Project Manager'
    ]
  },
  {
    num: '02',
    tag: 'STAGE 02 • PROOFING',
    title: 'Get Design Proof',
    desc: 'Receive a complete digital page-turn soft-copy proof within 3 business days. Request unlimited revisions until approved.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=85',
    includes: [
      'Interactive 3D Digital Page-Turn Proof',
      'Unlimited 1-on-1 Layout Revisions',
      '180° Panoramic Spread Alignment Check',
      'Virtual Foil Deboss & Typography Mockup'
    ]
  },
  {
    num: '03',
    tag: 'STAGE 03 • LAB CRAFT',
    title: 'Archival Printing',
    desc: 'Exposed on Fuji Crystal Archive photographic paper, mounted on rigid boards, and bound in handcrafted covers.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=85',
    includes: [
      'Fuji Crystal Archive DPII Chemistry',
      '1.1mm Non-Warp Archival Core Boards',
      'Italian Full-Grain Leather & Linen Wrap',
      'Heated Magnesium Brass Die Stamping'
    ]
  },
  {
    num: '04',
    tag: 'STAGE 04 • DISPATCH',
    title: 'Express Shipping',
    desc: 'Every album is nestled in custom presentation boxes and shipped with door-to-door tracked delivery across India & worldwide.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=85',
    includes: [
      'Double-Walled Presentation Impact Cartons',
      'Anti-Humidity Velvet Protective Pouch',
      'Insured Air Express Delivery (DHL/FedEx)',
      'Real-Time WhatsApp & SMS Tracking'
    ]
  }
];

export default function ProcessSection() {
  return <section id="process" className="editorial-section">
    <div className="section-container">
      <h2>How we make your album</h2>
      <div className="editorial-items cols-4">
        {STEPS.map(item => <article key={item.title}>
          <img src={item.image} alt={item.title} loading="lazy"/>
          <h3>{item.title}</h3><p>{item.desc}</p>
          <details><summary>Stage details</summary><ul>{item.includes.map(line=><li key={line}>{line}</li>)}</ul></details>

        </article>)}
      </div>
    </div>
  </section>;
}
