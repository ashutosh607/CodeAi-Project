import React from 'react';
import { Globe, DollarSign, Award, Users } from 'lucide-react';

const VALUES = [
  {
    icon: Globe,
    title: 'Worldwide Delivery',
    tag: 'GLOBAL REACH',
    desc: 'Pan-India studio delivery & international air courier across UK, US, and UAE.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
    includes: [
      'Duty-Paid Pre-Cleared Air Courier',
      'Door-to-Door Tracked Transit (DHL Express)',
      'Shockproof Presentation Cartons',
      '72h Delivery to London, NY & Dubai'
    ]
  },
  {
    icon: DollarSign,
    title: 'Cost Effective',
    tag: 'DIRECT ATELIER',
    desc: 'Direct atelier wholesale pricing with zero middleman or distributor markups.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
    includes: [
      'Direct Atelier Wholesale Pricing (0% Margin)',
      '50% Discount on Physical Studio Samples',
      '40% Off Parent Companion Duplicates',
      'Transparent Billing in INR (₹) or GBP (£)'
    ]
  },
  {
    icon: Award,
    title: 'Reliable Quality',
    tag: '100+ YR ARCHIVAL',
    desc: '100+ year archival rating on genuine Fuji Crystal Archive photographic paper.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    includes: [
      '100+ Year ISO 18924 Certified Longevity',
      'Zero-Gutter Image Loss with 180° Layflat',
      '1.1mm Non-Warp Museum Core Boards',
      '5-Stage Laboratory Calibration Checks'
    ]
  },
  {
    icon: Users,
    title: 'Customer Centric',
    tag: 'PRIVATE LIAISON',
    desc: 'Dedicated studio account liaison & direct WhatsApp support for every commission.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    includes: [
      'Dedicated Studio Account Manager via WhatsApp',
      'Direct Soft-Proof Iterations with Artisans',
      'Complimentary Leather & Linen Swatch Kits',
      'Complete Client Privacy & NDA Standards'
    ]
  }
];

export default function WhyChooseUs() {
  return <section id="studio-standards" className="editorial-section">
    <div className="section-container">
      <h2>Studio standards</h2>
      <div className="editorial-items cols-4">
        {VALUES.map(item => <article key={item.title}>
          <img src={item.image} alt={item.title} loading="lazy"/>
          <h3>{item.title}</h3><p>{item.desc}</p>
          <details><summary>Details</summary><ul>{item.includes.map(line=><li key={line}>{line}</li>)}</ul></details>

        </article>)}
      </div>
    </div>
  </section>;
}
