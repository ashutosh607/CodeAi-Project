import React, { useState, useEffect } from 'react';
import RevealOnScroll from '../components/motion/RevealOnScroll';
import TextReveal from '../components/motion/TextReveal';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Globe2,
  Lock,
  ArrowRight,
  Truck,
  Palette,
  CheckCircle2,
  Building2
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    userType: 'photographer',
    subject: 'partnership',
    message: '',
    catalogConsent: false
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-concierge-page-view font-sans text-[#1B1C1A] bg-[#FAF9F5]">
      {/* 1. EDITORIAL HEADER */}
      <section className="w-full bg-[#F4F4F0] pt-12 md:pt-16 pb-14 px-4 md:px-12 border-b border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#635E52]"></span>
                <span className="font-semibold uppercase tracking-[0.25em] text-[#635E52] text-[11px]">
                  Concierge &amp; Atelier Visits
                </span>
              </div>
              <TextReveal
                as="h1"
                delay={0.08}
                className="font-serif text-[34px] md:text-[48px] text-[#141310] tracking-tight font-normal leading-tight"
              >
                Connect With Our Master Bookbinders &amp; Color Grading Lab
              </TextReveal>
              <p className="text-[17px] text-[#4A463F] max-w-2xl pt-2 leading-relaxed">
                Whether you are an auteur wedding photographer establishing a white-label album partnership or a couple commissioning an heirloom wedding book, our Mumbai atelier concierge is at your service.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between self-stretch pt-6 lg:pt-0">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#EFEEEA] border border-[#EAE6DF]">
                <span className="w-2 h-2 rounded-full bg-[#635E52] animate-pulse"></span>
                <span className="font-semibold uppercase text-[#4A463F] text-[11px] tracking-wider">
                  Atelier Open • IST 10:00 – 19:30
                </span>
              </div>
              <div className="text-[13px] text-[#635E52] flex items-center gap-2 mt-4 lg:mt-0 font-medium">
                <CheckCircle2 size={16} className="text-[#635E52]" />
                <span>Santacruz West, Mumbai • London Liaison Desk</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN 2-COLUMN DOSSIER & FORM WORKSPACE */}
      <section className="w-full py-16 md:py-24 px-4 md:px-12 bg-[#FAF9F5]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* LEFT COLUMN: Atelier Contact Details & Logistics */}
            <RevealOnScroll direction="left" className="lg:col-span-5 flex flex-col space-y-8">
              {/* Flagship Atelier Card */}
              <div className="bg-[#F4F4F0] p-8 flex flex-col space-y-6 border border-[#EAE6DF]">
                <div>
                  <span className="font-semibold uppercase tracking-[0.2em] text-[#635E52] text-[10px] block mb-2">
                    Direct Contact
                  </span>
                  <h2 className="font-serif text-[24px] text-[#141310] mb-6 font-normal">
                    Mumbai Flagship Atelier
                  </h2>

                  <div className="space-y-6">
                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <MapPin size={20} className="text-[#635E52] shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span className="font-semibold uppercase text-[#635E52] text-[10px] tracking-wider">
                          Physical Atelier
                        </span>
                        <p className="text-[15px] text-[#1B1C1A] mt-1 leading-relaxed">
                          Studio 402, Exclusive Crafts Zone, Santacruz West, Mumbai, MH – 400054, India.
                        </p>
                        <span className="text-[13px] text-[#4A463F] mt-0.5">
                          450m from Santacruz Railway Station (West Exit)
                        </span>
                      </div>
                    </div>

                    {/* Phone Lines */}
                    <div className="flex items-start gap-4">
                      <Phone size={20} className="text-[#635E52] shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span className="font-semibold uppercase text-[#635E52] text-[10px] tracking-wider">
                          Direct Atelier Line
                        </span>
                        <div className="flex flex-col sm:flex-row sm:gap-4 mt-1 font-medium text-[15px]">
                          <a href="tel:+919322254315" className="text-[#1B1C1A] hover:text-[#635E52] transition-colors">
                            +91 93222 54315
                          </a>
                          <span className="hidden sm:inline text-[#CCC5BC]">/</span>
                          <a href="tel:+919920012345" className="text-[#1B1C1A] hover:text-[#635E52] transition-colors">
                            +91 99200 12345
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <Mail size={20} className="text-[#635E52] shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span className="font-semibold uppercase text-[#635E52] text-[10px] tracking-wider">
                          Email Communications
                        </span>
                        <a href="mailto:atelier@ultraaalbums.com" className="text-[15px] text-[#1B1C1A] hover:text-[#635E52] transition-colors mt-1 font-medium">
                          atelier@ultraaalbums.com
                        </a>
                        <a href="mailto:support@ultraaalbums.com" className="text-[13px] text-[#4A463F] hover:text-[#1B1C1A] transition-colors mt-0.5">
                          support@ultraaalbums.com
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <Clock size={20} className="text-[#635E52] shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span className="font-semibold uppercase text-[#635E52] text-[10px] tracking-wider">
                          Atelier Working Hours
                        </span>
                        <p className="text-[15px] text-[#1B1C1A] mt-1 font-medium">
                          Monday – Saturday: 10:00 AM – 7:30 PM IST
                        </p>
                        <p className="text-[13px] text-[#4A463F] mt-0.5">
                          Private consultations &amp; tactile swatch reviews by prior appointment only.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instant Concierge WhatsApp */}
                <div className="bg-[#EFEEEA] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#EAE6DF]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#292724] text-[#FAF9F5] flex items-center justify-center shrink-0">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold uppercase tracking-wider text-[#141310] text-[11px]">
                          Instant Concierge
                        </span>
                        <span className="px-1.5 py-0.5 bg-[#EAE2D2] text-[#1B1C1A] font-semibold text-[9px] uppercase tracking-wider">
                          Fastest
                        </span>
                      </div>
                      <p className="text-[13px] text-[#4A463F]">WhatsApp: +91 93222 54315</p>
                    </div>
                  </div>
                  <a
                    className="px-5 py-2.5 bg-[#141310] text-[#FAF9F5] font-semibold text-[11px] uppercase tracking-wider hover:bg-[#635E52] transition-colors text-center whitespace-nowrap"
                    href="https://wa.me/919322254315"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Start Chat
                  </a>
                </div>

                {/* Regional UK Desk */}
                <div className="bg-[#FAF9F5] p-5 flex flex-col space-y-2 border border-[#EAE6DF]">
                  <div className="flex items-center gap-2">
                    <Globe2 size={18} className="text-[#635E52]" />
                    <span className="font-semibold uppercase tracking-widest text-[#141310] text-[11px]">
                      Regional UK Desk
                    </span>
                  </div>
                  <p className="text-[13px] text-[#4A463F] leading-relaxed">
                    Direct duty-paid air shipping and sterling account billing for fine-art studios in London, Edinburgh, and regional UK.
                  </p>
                  <a
                    className="text-[13px] text-[#141310] hover:text-[#635E52] transition-colors font-medium"
                    href="mailto:uk@ultraaalbums.com"
                  >
                    uk@ultraaalbums.com →
                  </a>
                </div>
              </div>

              {/* Atelier Location Map */}
              <div className="flex flex-col space-y-3">
                <span className="font-semibold uppercase tracking-[0.2em] text-[#635E52] text-[10px]">
                  Atelier Location Map
                </span>
                <div
                  className="w-full h-64 bg-cover bg-center relative border border-[#EAE6DF]"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=85')"
                  }}
                >
                  <div className="absolute inset-0 bg-[#141310]/20 backdrop-blur-[1px] flex flex-col justify-end p-5">
                    <div className="bg-[#FAF9F5]/95 backdrop-blur-md p-4 max-w-xs shadow-md border border-[#EAE6DF]">
                      <p className="font-semibold uppercase text-[#635E52] text-[10px]">Ultraa Bookbinding Studio</p>
                      <p className="text-[14px] text-[#141310] font-medium mt-0.5">Santacruz West • Mumbai</p>
                      <p className="text-[11px] text-[#4A463F] mt-1">Valet parking available for scheduled appointments.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Matrix */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#EFEEEA] flex flex-col space-y-1 border border-[#EAE6DF]">
                  <Truck size={22} className="text-[#635E52]" />
                  <span className="font-semibold uppercase text-[#141310] text-[11px] pt-2">Global Transit</span>
                  <span className="text-[13px] text-[#4A463F] leading-relaxed">
                    DHL Priority Express door-to-door worldwide with insured crating.
                  </span>
                </div>
                <div className="p-4 bg-[#EFEEEA] flex flex-col space-y-1 border border-[#EAE6DF]">
                  <Palette size={22} className="text-[#635E52]" />
                  <span className="font-semibold uppercase text-[#141310] text-[11px] pt-2">Lab Calibration</span>
                  <span className="text-[13px] text-[#4A463F] leading-relaxed">
                    Free monitor profile calibration &amp; fine art paper swatch kits.
                  </span>
                </div>
              </div>
            </RevealOnScroll>

            {/* RIGHT COLUMN: Studio Booking & Enquiry Form */}
            <RevealOnScroll direction="right" className="lg:col-span-7 flex flex-col">
              <div className="bg-[#F4F4F0] p-8 md:p-12 flex flex-col h-full justify-between border border-[#EAE6DF]">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold uppercase tracking-[0.2em] text-[#635E52] text-[10px]">
                      Direct Dispatch
                    </span>
                    <span className="text-[13px] text-[#4A463F]">Typical response within 2 hours</span>
                  </div>
                  <h2 className="font-serif text-[30px] md:text-[36px] text-[#141310] mb-3 font-normal">
                    Consultation &amp; Project Booking
                  </h2>
                  <p className="text-[15px] text-[#4A463F] mb-8 leading-relaxed">
                    Share your creative requirements or schedule a private studio walkthrough with our senior master binder in Santacruz.
                  </p>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label className="font-semibold uppercase text-[#4A463F] text-[11px] tracking-wider" htmlFor="contact-name">
                          Full Name *
                        </label>
                        <input
                          className="w-full bg-[#FFFFFF] px-4 py-3 text-[#1B1C1A] text-[15px] focus:outline-none focus:bg-[#FAF9F5] border border-[#EAE6DF] rounded-none placeholder:text-[#CCC5BC]"
                          id="contact-name"
                          name="name"
                          placeholder="e.g. Julian Montgomery"
                          required
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="font-semibold uppercase text-[#4A463F] text-[11px] tracking-wider" htmlFor="contact-email">
                          Email Address *
                        </label>
                        <input
                          className="w-full bg-[#FFFFFF] px-4 py-3 text-[#1B1C1A] text-[15px] focus:outline-none focus:bg-[#FAF9F5] border border-[#EAE6DF] rounded-none placeholder:text-[#CCC5BC]"
                          id="contact-email"
                          name="email"
                          placeholder="julian@montgomerystudios.com"
                          required
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label className="font-semibold uppercase text-[#4A463F] text-[11px] tracking-wider" htmlFor="contact-phone">
                          Phone / WhatsApp *
                        </label>
                        <div className="flex border border-[#EAE6DF]">
                          <select
                            className="bg-[#EFEEEA] px-3 py-3 text-[13px] text-[#1B1C1A] focus:outline-none border-none rounded-none"
                            id="countryCode"
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                          >
                            <option value="+91">+91 (IN)</option>
                            <option value="+44">+44 (UK)</option>
                            <option value="+1">+1 (US/CA)</option>
                            <option value="+971">+971 (UAE)</option>
                            <option value="+61">+61 (AU)</option>
                            <option value="+65">+65 (SG)</option>
                            <option value="+33">+33 (FR)</option>
                          </select>
                          <input
                            className="w-full bg-[#FFFFFF] px-4 py-3 text-[#1B1C1A] text-[15px] focus:outline-none border-none rounded-none placeholder:text-[#CCC5BC]"
                            id="contact-phone"
                            name="phone"
                            placeholder="98200 00000"
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label className="font-semibold uppercase text-[#4A463F] text-[11px] tracking-wider" htmlFor="userType">
                          I Am Representing *
                        </label>
                        <select
                          className="w-full bg-[#FFFFFF] px-4 py-3.5 text-[#1B1C1A] text-[14px] focus:outline-none border border-[#EAE6DF] rounded-none"
                          id="userType"
                          name="userType"
                          value={formData.userType}
                          onChange={handleChange}
                        >
                          <option value="photographer">Professional Wedding Photographer</option>
                          <option value="studio-owner">Studio Owner / Agency Principal</option>
                          <option value="couple">Bride &amp; Groom / Heirloom Commission</option>
                          <option value="planner">Wedding Planner / Event Designer</option>
                          <option value="other">Other Creative Patron</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label className="font-semibold uppercase text-[#4A463F] text-[11px] tracking-wider" htmlFor="contact-subject">
                        Primary Reason for Inquiry *
                      </label>
                      <select
                        className="w-full bg-[#FFFFFF] px-4 py-3.5 text-[#1B1C1A] text-[14px] focus:outline-none border border-[#EAE6DF] rounded-none"
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="partnership">Professional Studio Partnership &amp; Tiered Pricing</option>
                        <option value="swatches">Custom Sample Swatch Box &amp; Paper Specimen Request</option>
                        <option value="visit">Schedule Private Atelier Visit (Santacruz West)</option>
                        <option value="single-order">Single Bespoke Wedding Volume Commission</option>
                        <option value="general">General Production Inquiry</option>
                      </select>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="font-semibold uppercase text-[#4A463F] text-[11px] tracking-wider" htmlFor="contact-message">
                          Project Scope &amp; Special Requests
                        </label>
                        <span className="text-[11px] text-[#635E52]">Specify dimensions, papers, or timeline</span>
                      </div>
                      <textarea
                        className="w-full bg-[#FFFFFF] p-4 text-[#1B1C1A] text-[15px] focus:outline-none focus:bg-[#FAF9F5] border border-[#EAE6DF] rounded-none placeholder:text-[#CCC5BC] leading-relaxed"
                        id="contact-message"
                        name="message"
                        placeholder="Share your estimated annual volume, preferred substrates (e.g. Fuji Pearl, Hahnemühle Cotton Rag), debossing requirements, or preferred consultation dates..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="p-4 bg-[#FAF9F5] flex items-start gap-3 border border-[#EAE6DF]">
                      <input
                        className="mt-1 w-4 h-4 rounded-none accent-[#141310] cursor-pointer"
                        id="catalogConsent"
                        name="catalogConsent"
                        type="checkbox"
                        checked={formData.catalogConsent}
                        onChange={handleChange}
                      />
                      <label className="text-[13px] text-[#4A463F] cursor-pointer" htmlFor="catalogConsent">
                        I would like to receive the printed 2026 Atelier Catalog &amp; Velvet/Leather Texture Guide delivered via priority post.
                      </label>
                    </div>

                    <div className="pt-2">
                      <button
                        className="w-full py-4 bg-[#141310] text-[#FFFFFF] font-semibold text-[11px] uppercase tracking-[0.2em] hover:bg-[#635E52] transition-all duration-200 flex items-center justify-center gap-3 rounded-none border-none cursor-pointer"
                        type="submit"
                      >
                        <span>Send Message to Concierge</span>
                        <ArrowRight size={18} />
                      </button>
                      <p className="text-[12px] text-[#4A463F] text-center mt-3 leading-relaxed">
                        Encrypted submission. Your studio identity and client images remain strictly protected under our strict non-disclosure charter.
                      </p>
                    </div>
                  </form>

                  {submitted && (
                    <div className="mt-6 p-6 bg-[#EAE2D2] text-[#1B1C1A] flex items-start gap-4 border border-[#CDC6B7]">
                      <CheckCircle2 size={24} className="text-[#141310] shrink-0 mt-1" />
                      <div>
                        <h4 className="font-serif text-[20px] text-[#141310] font-normal">
                          Inquiry Transmitted to Mumbai Atelier
                        </h4>
                        <p className="text-[13px] text-[#4A463F] mt-1 leading-relaxed">
                          A senior binding specialist has received your docket. We will reach out via WhatsApp and email within 2 business hours.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[#4A463F] border-t border-[#EAE6DF]">
                  <div className="flex items-center gap-2">
                    <Lock size={15} className="text-[#635E52]" />
                    <span className="text-[12px]">256-Bit SSL Encrypted Dispatch</span>
                  </div>
                  <div className="flex items-center gap-4 text-[12px]">
                    <span>GST: 27AABCU1234F1ZX</span>
                    <span>•</span>
                    <span>IEC Registered Exporter</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 3. PRACTICAL LOGISTICS FAQ */}
      <section className="w-full py-16 px-4 md:px-12 bg-[#EFEEEA] border-t border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto">
          <RevealOnScroll direction="up">
            <div className="mb-10 text-left">
              <span className="font-semibold uppercase tracking-[0.25em] text-[#635E52] text-[10px] block mb-1">
                Practical Logistics
              </span>
              <h3 className="font-serif text-[28px] md:text-[34px] text-[#141310] font-normal">
                Frequently Addressed Inquiries
              </h3>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FFFFFF] p-6 flex flex-col justify-between space-y-4 border border-[#EAE6DF]">
              <div>
                <span className="font-semibold uppercase tracking-wider text-[#635E52] text-[10px] block mb-2">Turnaround</span>
                <h4 className="font-serif text-[20px] text-[#141310] mb-2 font-normal">10–14 Working Days</h4>
                <p className="text-[13px] text-[#4A463F] leading-relaxed">
                  Standard production from proof sign-off to finished hand-binding. Custom dies and bespoke Japanese silks may require 2 additional days.
                </p>
              </div>
              <span className="font-semibold uppercase text-[#635E52] text-[10px] pt-3 border-t border-[#EAE6DF]">Strict QC Guarantee</span>
            </div>

            <div className="bg-[#FFFFFF] p-6 flex flex-col justify-between space-y-4 border border-[#EAE6DF]">
              <div>
                <span className="font-semibold uppercase tracking-wider text-[#635E52] text-[10px] block mb-2">Rush Service</span>
                <h4 className="font-serif text-[20px] text-[#141310] mb-2 font-normal">Priority Atelier Slot</h4>
                <p className="text-[13px] text-[#4A463F] leading-relaxed">
                  Expedited 5-day crafting available for tight anniversary deadlines and peak wedding season showcases upon liaison approval.
                </p>
              </div>
              <span className="font-semibold uppercase text-[#635E52] text-[10px] pt-3 border-t border-[#EAE6DF]">Subject to studio capacity</span>
            </div>

            <div className="bg-[#FFFFFF] p-6 flex flex-col justify-between space-y-4 border border-[#EAE6DF]">
              <div>
                <span className="font-semibold uppercase tracking-wider text-[#635E52] text-[10px] block mb-2">Transit</span>
                <h4 className="font-serif text-[20px] text-[#141310] mb-2 font-normal">Global Express</h4>
                <p className="text-[13px] text-[#4A463F] leading-relaxed">
                  DHL Express door-to-door transit: 2–3 business days to the UK, EU, UAE, and North America. Custom-molded archival boxes ensure zero edge scuffs.
                </p>
              </div>
              <span className="font-semibold uppercase text-[#635E52] text-[10px] pt-3 border-t border-[#EAE6DF]">Fully insured freight</span>
            </div>

            <div className="bg-[#FFFFFF] p-6 flex flex-col justify-between space-y-4 border border-[#EAE6DF]">
              <div>
                <span className="font-semibold uppercase tracking-wider text-[#635E52] text-[10px] block mb-2">Specimens</span>
                <h4 className="font-serif text-[20px] text-[#141310] mb-2 font-normal">Sample Kit Orders</h4>
                <p className="text-[13px] text-[#4A463F] leading-relaxed">
                  Complete swatch boxes containing 32 leather types, 16 bookcloths, and 6 fine art paper grades are subsidised for accredited professional studios.
                </p>
              </div>
              <Link to="/resources/catalog" className="font-semibold uppercase text-[#141310] hover:text-[#635E52] inline-flex items-center gap-1 text-[10px] pt-3 border-t border-[#EAE6DF]">
                <span>Order Swatch Box</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STUDIO WALKTHROUGH CALLOUT */}
      <section className="w-full bg-[#FAF9F5] py-12 px-4 md:px-12 border-t border-[#EAE6DF]">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#F4F4F0] p-6 md:p-8 border border-[#EAE6DF]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#141310] flex items-center justify-center text-[#FFFFFF] shrink-0">
              <Building2 size={24} />
            </div>
            <div>
              <h5 className="font-serif text-[20px] text-[#141310] font-normal">Planning an In-Person Studio Walkthrough?</h5>
              <p className="text-[13px] text-[#4A463F] mt-0.5">Please notify us 24 hours prior to confirm bookbinder availability and prepare custom swatch selections.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              className="px-6 py-3 bg-[#141310] text-[#FFFFFF] font-semibold text-[11px] uppercase tracking-wider hover:bg-[#635E52] transition-colors whitespace-nowrap"
              href="tel:+919322254315"
            >
              Call Studio Concierge
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
