import React from 'react';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import ProductShowcase from '../components/ProductShowcase';
import ServicesSection from '../components/ServicesSection';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ProcessSection from '../components/ProcessSection';
import WhyChooseUs from '../components/WhyChooseUs';
import UKDeskSection from '../components/UKDeskSection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onSelectProduct, prefilledProduct }) {
  return (
    <>
      {/* 1. Hero with 3D Living Album Centerpiece */}
      <HeroSection />

      <ProductShowcase onSelectProduct={onSelectProduct} />
      <IntroSection />

      {/* 4. Services We Offer */}
      <ServicesSection />

      {/* 5. Photo Editing Sample: Before — After */}
      <BeforeAfterSlider />

      {/* 6. How We Work? */}
      <ProcessSection />

      {/* 7. Why Choose Us */}
      <WhyChooseUs />

      {/* Dedicated UK & European Studio Desk */}
      <UKDeskSection />

      {/* 8. Testimonial */}
      <Testimonials />


      {/* 10. Contact & Studio Inquiries Form */}
      <ContactSection prefilledProduct={prefilledProduct} />
    </>
  );
}

