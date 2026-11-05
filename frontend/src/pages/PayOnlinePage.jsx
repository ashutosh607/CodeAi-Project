import { studioEmail } from '../utils/studioEmail';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextReveal from '../components/motion/TextReveal';
import RevealOnScroll from '../components/motion/RevealOnScroll';
import { 
  ShieldCheck, 
  QrCode, 
  CreditCard, 
  Building2, 
  Globe2, 
  Check, 
  Copy, 
  Lock, 
  ArrowRight, 
  Headphones, 
  CheckSquare, 
  Sparkles,
  ChevronRight,
  User,
  Mail,
  Tag
} from 'lucide-react';

export default function PayOnlinePage() {
  const [currency, setCurrency] = useState('INR');
  const [invNumber, setInvNumber] = useState('');
  const [invAmount, setInvAmount] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [activeTab, setActiveTab] = useState('upi'); // upi | cards | netbanking | wire
  const [copiedKey, setCopiedKey] = useState('');


  const handleCurrencyChange = (curr) => {
    setCurrency(curr);
    setInvAmount('');
  };

  const handleCopy = (text, key) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(''), 2500);
  };

  const formattedAmount = () => {
    const val = parseFloat(invAmount) || 0;
    return val.toLocaleString();
  };

  const currSymbol = currency === 'INR' ? '₹' : '£';


  return (
    <div className="pay-online-page-wrapper" style={{ backgroundColor: 'var(--color-surface, #FAF9F5)', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Breadcrumb Strip */}
      <div style={{ borderBottom: '1px solid var(--color-hairline, #EAE6DF)', padding: '0.85rem 0', background: '#F4F4F0' }}>
        <div className="section-container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-secondary, #635E52)' }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--color-primary, #141310)', fontWeight: 600 }}>Secure Payment Portal</span>
        </div>
      </div>

      <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '3.5rem 1.5rem' }}>
        {/* Editorial Masthead */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#E9E8E4', padding: '0.35rem 0.85rem', marginBottom: '1.25rem' }}>
            <ShieldCheck size={14} color="#141310" />
            <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#141310' }}>
              Client Concierge & Lab Portal
            </span>
          </div>

          <TextReveal
            as="h1"
            delay={0.08}
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 400, color: 'var(--color-primary, #141310)', lineHeight: 1.18, letterSpacing: '-0.01em', marginBottom: '1rem' }}
          >
            Secure Online Payment Portal
          </TextReveal>

          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: 'var(--color-secondary, #635E52)', lineHeight: 1.65 }}>
            Use your studio invoice to review payment options or request a secure payment link.
          </p>
        </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem', alignItems: 'start' }}>
            {/* Left 7 Columns: Form Workspace */}
            <div style={{ gridColumn: 'span 12' }} className="pay-col-left">
              <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: '2rem' }}>
                {/* Step 01 Header with Currency Toggle */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #EAE6DF', paddingBottom: '1.25rem', marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', background: '#EFEEEA', padding: '0.2rem 0.5rem', color: '#635E52' }}>
                      01
                    </span>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', margin: 0, color: '#141310', fontWeight: 500 }}>
                      Invoice Specifications
                    </h2>
                  </div>

                  {/* Currency Toggle */}
                  <div style={{ display: 'flex', background: '#EFEEEA', padding: '0.2rem', gap: '0.2rem' }}>
                    <button
                      type="button"
                      onClick={() => handleCurrencyChange('INR')}
                      style={{
                        padding: '0.35rem 0.75rem',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        border: 'none',
                        cursor: 'pointer',
                        background: currency === 'INR' ? '#141310' : 'transparent',
                        color: currency === 'INR' ? '#FFFFFF' : '#635E52',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      INR (₹)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCurrencyChange('GBP')}
                      style={{
                        padding: '0.35rem 0.75rem',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        border: 'none',
                        cursor: 'pointer',
                        background: currency === 'GBP' ? '#141310' : 'transparent',
                        color: currency === 'GBP' ? '#FFFFFF' : '#635E52',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      GBP (£)
                    </button>
                  </div>
                </div>

                {/* 4 Invoice Fields */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
                  {/* Field 1: Invoice Number */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.4rem' }}>
                      Invoice / Job No. *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Tag size={15} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#99948B' }} />
                      <input
                        type="text"
                        value={invNumber}
                        onChange={(e) => setInvNumber(e.target.value)}
                        placeholder="e.g. UA-2026-8812"
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem 0.85rem 0.75rem 2.5rem',
                          background: '#F4F4F0',
                          border: '1px solid #EAE6DF',
                          fontSize: '0.9rem',
                          color: '#141310',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>

                  {/* Field 2: Payable Amount */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.4rem' }}>
                      Payable Amount ({currSymbol}) *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1rem', fontWeight: 600, color: '#141310' }}>
                        {currSymbol}
                      </span>
                      <input
                        type="number"
                        value={invAmount}
                        onChange={(e) => setInvAmount(e.target.value)}
                        placeholder="48500"
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem 0.85rem 0.75rem 2.25rem',
                          background: '#F4F4F0',
                          border: '1px solid #EAE6DF',
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: '#141310',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>

                  {/* Field 3: Studio / Principal Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.4rem' }}>
                      Studio / Principal Name *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <User size={15} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#99948B' }} />
                      <input
                        type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Samarth & Co. Studios"
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem 0.85rem 0.75rem 2.5rem',
                          background: '#F4F4F0',
                          border: '1px solid #EAE6DF',
                          fontSize: '0.9rem',
                          color: '#141310',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>

                  {/* Field 4: Receipt Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.4rem' }}>
                      Receipt Email Address *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Mail size={15} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#99948B' }} />
                      <input
                        type="email"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="accounts@studio.com"
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem 0.85rem 0.75rem 2.5rem',
                          background: '#F4F4F0',
                          border: '1px solid #EAE6DF',
                          fontSize: '0.9rem',
                          color: '#141310',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Step 02: Gateway Selector */}
                <div style={{ borderTop: '1px solid #EAE6DF', paddingTop: '1.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', background: '#EFEEEA', padding: '0.2rem 0.5rem', color: '#635E52' }}>
                        02
                      </span>
                      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.35rem', margin: 0, color: '#141310', fontWeight: 500 }}>
                        Preferred Payment Gateway
                      </h2>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.7rem', color: '#635E52', letterSpacing: '0.05em' }}>
                      <Lock size={12} color="#141310" />
                      <span>256-Bit SSL Encrypted</span>
                    </div>
                  </div>

                  {/* 4 Method Tabs */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    <button
                      type="button"
                      onClick={() => setActiveTab('upi')}
                      style={{
                        padding: '0.85rem 0.5rem',
                        background: activeTab === 'upi' ? '#141310' : '#F4F4F0',
                        color: activeTab === 'upi' ? '#FFFFFF' : '#635E52',
                        border: '1px solid',
                        borderColor: activeTab === 'upi' ? '#141310' : '#EAE6DF',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.35rem',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <QrCode size={18} />
                      <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>UPI</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('cards')}
                      style={{
                        padding: '0.85rem 0.5rem',
                        background: activeTab === 'cards' ? '#141310' : '#F4F4F0',
                        color: activeTab === 'cards' ? '#FFFFFF' : '#635E52',
                        border: '1px solid',
                        borderColor: activeTab === 'cards' ? '#141310' : '#EAE6DF',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.35rem',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <CreditCard size={18} />
                      <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Cards</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('netbanking')}
                      style={{
                        padding: '0.85rem 0.5rem',
                        background: activeTab === 'netbanking' ? '#141310' : '#F4F4F0',
                        color: activeTab === 'netbanking' ? '#FFFFFF' : '#635E52',
                        border: '1px solid',
                        borderColor: activeTab === 'netbanking' ? '#141310' : '#EAE6DF',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.35rem',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Building2 size={18} />
                      <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>NetBanking</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('wire')}
                      style={{
                        padding: '0.85rem 0.5rem',
                        background: activeTab === 'wire' ? '#141310' : '#F4F4F0',
                        color: activeTab === 'wire' ? '#FFFFFF' : '#635E52',
                        border: '1px solid',
                        borderColor: activeTab === 'wire' ? '#141310' : '#EAE6DF',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.35rem',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Globe2 size={18} />
                      <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Wire / SWIFT</span>
                    </button>
                  </div>

                  {/* TAB 1: UPI */}
                  {activeTab === 'upi' && (
                    <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '1.5rem' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
                        {/* Handles and Copy Buttons */}
                        <div style={{ flex: 1, minWidth: '220px', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                          <div>
                            <span style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.3rem' }}>
                              Primary Atelier UPI Handle
                            </span>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '0.6rem 0.85rem' }}>
                              <code style={{ fontSize: '0.9rem', fontWeight: 600, color: '#141310' }}>ultraaalbums@icici</code>
                              <button
                                type="button"
                                onClick={() => handleCopy('ultraaalbums@icici', 'upi1')}
                                style={{ background: 'transparent', border: 'none', color: '#141310', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                              >
                                {copiedKey === 'upi1' ? <Check size={12} color="#16a34a" /> : <Copy size={12} />}
                                <span>{copiedKey === 'upi1' ? 'Copied' : 'Copy'}</span>
                              </button>
                            </div>
                          </div>

                          <div>
                            <span style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', marginBottom: '0.3rem' }}>
                              Secondary Mobile VPA
                            </span>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '0.6rem 0.85rem' }}>
                              <code style={{ fontSize: '0.9rem', fontWeight: 600, color: '#141310' }}>9322254315@upi</code>
                              <button
                                type="button"
                                onClick={() => handleCopy('9322254315@upi', 'upi2')}
                                style={{ background: 'transparent', border: 'none', color: '#141310', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                              >
                                {copiedKey === 'upi2' ? <Check size={12} color="#16a34a" /> : <Copy size={12} />}
                                <span>{copiedKey === 'upi2' ? 'Copied' : 'Copy'}</span>
                              </button>
                            </div>
                          </div>

                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '0.25rem' }}>
                            <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52' }}>Supported:</span>
                            <div style={{ display: 'flex', gap: '0.35rem', fontSize: '0.65rem', fontWeight: 600, color: '#141310' }}>
                              <span style={{ background: '#E9E8E4', padding: '0.15rem 0.4rem' }}>BHIM</span>
                              <span style={{ background: '#E9E8E4', padding: '0.15rem 0.4rem' }}>PhonePe</span>
                              <span style={{ background: '#E9E8E4', padding: '0.15rem 0.4rem' }}>GPay</span>
                              <span style={{ background: '#E9E8E4', padding: '0.15rem 0.4rem' }}>Paytm</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: CARDS */}
                  {activeTab === 'cards' && <p className="studio-draft">Request a secure card payment link from the studio for your invoice.</p>}
                  {/* TAB 3: NETBANKING */}
                  {activeTab === 'netbanking' && <p className="studio-draft">Request online banking instructions for the currency and reference on your invoice.</p>}
                  {/* TAB 4: WIRE / SWIFT */}
                  {activeTab === 'wire' && (
                    <div style={{ background: '#F4F4F0', border: '1px solid #EAE6DF', padding: '1.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52' }}>
                          International SWIFT & Wire Remittance
                        </span>
                        <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', background: '#E9E8E4', padding: '0.2rem 0.5rem', color: '#141310' }}>
                          UK, USA & Middle East
                        </span>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '0.85rem' }}>
                          <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52' }}>
                            Beneficiary Account Name
                          </span>
                          <span style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: '#141310', marginTop: '0.2rem' }}>
                            ULTRAA ALBUMS PRIVATE LIMITED
                          </span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '0.75rem' }}>
                          <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '0.85rem' }}>
                            <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52' }}>
                              Bank Name & Branch
                            </span>
                            <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#141310', marginTop: '0.2rem' }}>
                              ICICI Bank Ltd., Santacruz (W), Mumbai
                            </span>
                          </div>

                          <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '0.85rem' }}>
                            <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52' }}>
                              SWIFT / BIC Code
                            </span>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2rem' }}>
                              <code style={{ fontSize: '0.9rem', fontWeight: 700, color: '#141310' }}>ICICINBBCTS</code>
                              <button
                                type="button"
                                onClick={() => handleCopy('ICICINBBCTS', 'swift')}
                                style={{ background: 'transparent', border: 'none', color: '#141310', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', cursor: 'pointer', textTransform: 'uppercase' }}
                              >
                                {copiedKey === 'swift' ? 'Copied' : 'Copy'}
                              </button>
                            </div>
                          </div>

                          <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '0.85rem' }}>
                            <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52' }}>
                              Current Account No. (INR)
                            </span>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2rem' }}>
                              <code style={{ fontSize: '0.9rem', fontWeight: 700, color: '#141310' }}>003805018942</code>
                              <button
                                type="button"
                                onClick={() => handleCopy('003805018942', 'acct')}
                                style={{ background: 'transparent', border: 'none', color: '#141310', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', cursor: 'pointer', textTransform: 'uppercase' }}
                              >
                                {copiedKey === 'acct' ? 'Copied' : 'Copy'}
                              </button>
                            </div>
                          </div>

                          <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '0.85rem' }}>
                            <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52' }}>
                              IFSC Code (RTGS / NEFT)
                            </span>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2rem' }}>
                              <code style={{ fontSize: '0.9rem', fontWeight: 700, color: '#141310' }}>ICIC0000038</code>
                              <button
                                type="button"
                                onClick={() => handleCopy('ICIC0000038', 'ifsc')}
                                style={{ background: 'transparent', border: 'none', color: '#141310', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', cursor: 'pointer', textTransform: 'uppercase' }}
                              >
                                {copiedKey === 'ifsc' ? 'Copied' : 'Copy'}
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Dedicated UK BACS Box */}
                        <div style={{ background: '#EFEEEA', padding: '0.85rem', borderLeft: '3px solid #141310', marginTop: '0.35rem' }}>
                          <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#141310', marginBottom: '0.2rem' }}>
                            UK Clients (Sterling Direct BACS)
                          </span>
                          <span style={{ fontSize: '0.8rem', color: '#635E52' }}>
                            Sort Code: <strong style={{ color: '#141310' }}>20-04-15</strong> | Account No: <strong style={{ color: '#141310' }}>83920194</strong> | Barclays Bank UK Mayfair Desk
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <a className="studio-link primary" href={studioEmail('Request invoice payment instructions', {
                  Invoice:invNumber, Amount:invAmount, Currency:currency, Name:clientName, Email:clientEmail, Method:activeTab
                }, 'accounts@ultraaalbums.com')}>Request payment instructions <ArrowRight size={16}/></a>
              </div>
            </div>

            {/* Right 5 Columns: Summary Dossier & Verification */}
            <div style={{ gridColumn: 'span 12' }} className="pay-col-right">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Summary Dossier Card */}
                <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #EAE6DF', paddingBottom: '0.85rem', marginBottom: '1.25rem' }}>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#141310', margin: 0, fontWeight: 500 }}>
                      Summary Dossier
                    </h3>
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', background: '#E9E8E4', padding: '0.2rem 0.5rem', textTransform: 'uppercase', color: '#141310' }}>
                      Pre-Production
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem', borderBottom: '1px solid #EAE6DF', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#635E52' }}>Commission Reference</span>
                      <span style={{ fontWeight: 600, color: '#141310' }}>{invNumber || 'UA-SPEC-PENDING'}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#635E52' }}>Commission Type</span>
                      <span style={{ fontWeight: 600, color: '#141310' }}>Bespoke Flush Mount (12×18″)</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#635E52' }}>Substrate / Paper</span>
                      <span style={{ fontWeight: 600, color: '#141310' }}>Fuji Crystal Silk Archival</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#635E52' }}>Cover Material</span>
                      <span style={{ fontWeight: 600, color: '#141310' }}>Tuscan Saddle Leather</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#635E52' }}>Dispatch Destination</span>
                      <span style={{ fontWeight: 600, color: '#141310' }}>Express Courier Delivery</span>
                    </div>
                  </div>

                  {/* Total Payable Row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#635E52' }}>
                      Total Payable
                    </span>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.85rem', fontWeight: 600, color: '#141310' }}>
                      {currSymbol} {formattedAmount()}
                    </span>
                  </div>

                  {/* Certification Badges */}
                  <div style={{ background: '#F4F4F0', padding: '1rem', border: '1px solid #EAE6DF' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#141310', marginBottom: '0.75rem' }}>
                      <ShieldCheck size={14} />
                      <span>Merchant Certification & Security</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
                      <div style={{ background: '#FFFFFF', padding: '0.5rem 0.25rem', border: '1px solid #EAE6DF' }}>
                        <Lock size={14} color="#635E52" style={{ margin: '0 auto 0.2rem auto' }} />
                        <span style={{ display: 'block', fontSize: '0.62rem', fontWeight: 600, color: '#635E52' }}>256-Bit SSL</span>
                      </div>
                      <div style={{ background: '#FFFFFF', padding: '0.5rem 0.25rem', border: '1px solid #EAE6DF' }}>
                        <CheckSquare size={14} color="#635E52" style={{ margin: '0 auto 0.2rem auto' }} />
                        <span style={{ display: 'block', fontSize: '0.62rem', fontWeight: 600, color: '#635E52' }}>PCI-DSS V4.0</span>
                      </div>
                      <div style={{ background: '#FFFFFF', padding: '0.5rem 0.25rem', border: '1px solid #EAE6DF' }}>
                        <Building2 size={14} color="#635E52" style={{ margin: '0 auto 0.2rem auto' }} />
                        <span style={{ display: 'block', fontSize: '0.62rem', fontWeight: 600, color: '#635E52' }}>ICICI Direct</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Post-Payment Verification Protocol */}
                <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '1.75rem' }}>
                  <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', color: '#141310', margin: '0 0 1.25rem 0', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Sparkles size={16} />
                    <span>Post-Payment Verification</span>
                  </h4>

                  <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.82rem' }}>
                    <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ background: '#EFEEEA', color: '#141310', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, flexShrink: 0 }}>
                        1
                      </span>
                      <div>
                        <strong style={{ display: 'block', color: '#141310', marginBottom: '0.15rem' }}>Authorize Payment</strong>
                        <span style={{ color: '#635E52', lineHeight: 1.5 }}>Follow the payment instructions issued for your invoice.</span>
                      </div>
                    </li>

                    <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ background: '#EFEEEA', color: '#141310', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, flexShrink: 0 }}>
                        2
                      </span>
                      <div>
                        <strong style={{ display: 'block', color: '#141310', marginBottom: '0.15rem' }}>Send Transaction Receipt</strong>
                        <span style={{ color: '#635E52', lineHeight: 1.5 }}>
                          Send reference screenshot to WhatsApp (<a href="https://wa.me/919322254315" target="_blank" rel="noopener noreferrer" style={{ color: '#141310', fontWeight: 600 }}>+91 93222 54315</a>) or email <a href="mailto:accounts@ultraaalbums.com" style={{ color: '#141310', fontWeight: 600 }}>accounts@ultraaalbums.com</a>.
                        </span>
                      </div>
                    </li>

                    <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ background: '#EFEEEA', color: '#141310', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, flexShrink: 0 }}>
                        3
                      </span>
                      <div>
                        <strong style={{ display: 'block', color: '#141310', marginBottom: '0.15rem' }}>Production & Tracking Allocation</strong>
                        <span style={{ color: '#635E52', lineHeight: 1.5 }}>Our Santacruz atelier issues immediate lab job tracking and queues print calibration.</span>
                      </div>
                    </li>
                  </ol>
                </div>

                {/* Santacruz Atelier Dispatch Strip */}
                <div style={{ background: '#E9E8E4', border: '1px solid #EAE6DF', padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '60px', height: '60px', background: '#DCDAD4', flexShrink: 0, overflow: 'hidden' }}>
                    <img
                      src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=200&q=80"
                      alt="Santacruz Atelier"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#635E52', display: 'block' }}>
                      Santacruz Atelier Dispatch
                    </span>
                    <strong style={{ fontSize: '0.85rem', color: '#141310', display: 'block', marginTop: '0.15rem' }}>
                      Fine Art Spreads & Custom Bindings
                    </strong>
                    <span style={{ fontSize: '0.72rem', color: '#635E52', display: 'block', marginTop: '0.15rem' }}>
                      Direct international handling to UK, US & GCC studios.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>


        {/* Bottom Support Banner */}
        <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', padding: '1.75rem 2rem', marginTop: '3rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#141310', marginBottom: '0.5rem' }}>
            <Headphones size={18} />
            <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', margin: 0, fontWeight: 500 }}>
              Need immediate assistance with remittance or invoice split?
            </h4>
          </div>
          <p style={{ margin: 0, fontSize: '0.88rem', color: '#635E52' }}>
            Contact our direct finance desk at <a href="tel:+919322254315" style={{ color: '#141310', fontWeight: 600, textDecoration: 'none' }}>+91 93222 54315</a> or email <a href="mailto:finance@ultraaalbums.com" style={{ color: '#141310', fontWeight: 600, textDecoration: 'none' }}>finance@ultraaalbums.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
