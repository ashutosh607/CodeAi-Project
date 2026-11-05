import React from 'react';
import { Globe, DollarSign, Award, Users } from 'lucide-react';
import StaggerBoxes from './motion/StaggerBoxes';

const VALUES = [
  {
    icon: Globe,
    title: 'Worldwide Delivery',
    desc: 'Pan-India studio delivery & international air courier across UK, US, and UAE.'
  },
  {
    icon: DollarSign,
    title: 'Cost Effective',
    desc: 'Direct atelier wholesale pricing with zero middleman or distributor markups.'
  },
  {
    icon: Award,
    title: 'Reliable Quality',
    desc: '100+ year archival rating on genuine Fuji Crystal Archive photographic paper.'
  },
  {
    icon: Users,
    title: 'Customer Centric',
    desc: 'Dedicated studio account liaison & direct WhatsApp support for every commission.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us-section">
      <div className="section-container">
        <StaggerBoxes className="why-choose-us-four-strip" stagger={0.09}>
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="why-value-item"
              >
                <div className="value-icon-wrapper">
                  <Icon size={20} />
                </div>
                <div className="value-text-block">
                  <h3 className="value-title">{val.title}</h3>
                  <p className="value-desc">{val.desc}</p>
                </div>
              </div>
            );
          })}
        </StaggerBoxes>
      </div>
    </section>
  );
}
