import React, { useEffect } from 'react';
import { X, CreditCard, ShieldCheck, ArrowRight, Building, Phone, Mail } from 'lucide-react';

export default function PayOnlineModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="pay-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="pay-modal-title">
      <div className="pay-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-icon-btn"
          onClick={onClose}
          aria-label="Close Payment Modal"
        >
          <X size={22} />
        </button>

        <div className="pay-modal-header">
          <span className="pay-badge">SECURE STUDIO BILLING</span>
          <h2 id="pay-modal-title" className="pay-modal-heading">Pay Online & Studio Invoicing</h2>
          <p className="pay-modal-sub">
            Ultraa Albums provides multiple secure payment channels for verified photography studios, couples, and corporate clients in India, the UK, and internationally.
          </p>
        </div>

        <div className="pay-modal-methods-grid">
          {/* Method 1: Instant Digital Payment Link */}
          <div className="payment-method-tile">
            <div className="tile-icon-header">
              <CreditCard size={20} />
              <strong>Instant Digital Payment Link</strong>
            </div>
            <p>
              Pay securely via Razorpay or Stripe using any Credit/Debit Card, UPI, NetBanking, or Apple Pay.
            </p>
            <div className="tile-supported-badges">
              <span>UPI / QR</span>
              <span>Visa / Mastercard</span>
              <span>Amex</span>
              <span>Apple Pay</span>
            </div>
            <a
              href="https://rzp.io/l/ultraaalbums"
              target="_blank"
              rel="noreferrer"
              className="pay-channel-action-btn"
            >
              <span>Open Secure Payment Portal</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Method 2: Indian Bank Transfer (RTGS / NEFT) */}
          <div className="payment-method-tile">
            <div className="tile-icon-header">
              <Building size={20} />
              <strong>Direct Bank Transfer (India)</strong>
            </div>
            <p>For Indian studios and bulk orders requiring formal GST invoicing:</p>
            <div className="bank-account-box">
              <div className="bank-line"><strong>Beneficiary:</strong> Ultraa Albums Bindery LLP</div>
              <div className="bank-line"><strong>Bank:</strong> HDFC Bank Ltd.</div>
              <div className="bank-line"><strong>Account:</strong> Current A/c 50200088200882</div>
              <div className="bank-line"><strong>IFSC Code:</strong> HDFC0000123 (Lower Parel, Mumbai)</div>
            </div>
            <span className="bank-note">Please email payment screenshot to billing@ultraaalbums.com</span>
          </div>

          {/* Method 3: UK & International BACS Wire */}
          <div className="payment-method-tile">
            <div className="tile-icon-header">
              <Building size={20} />
              <strong>UK & International Wire (GBP / EUR)</strong>
            </div>
            <p>For UK studios and European commissions:</p>
            <div className="bank-account-box">
              <div className="bank-line"><strong>Currency:</strong> GBP (£) or EUR (€)</div>
              <div className="bank-line"><strong>Bank:</strong> Barclays Bank UK / HSBC Global</div>
              <div className="bank-line"><strong>Sort Code:</strong> 20-00-00 • Account: 88200882</div>
              <div className="bank-line"><strong>IBAN / SWIFT:</strong> Available on approved invoice</div>
            </div>
            <span className="bank-note">Zero import duty surcharges for UK direct shipments.</span>
          </div>
        </div>

        <div className="pay-modal-footer">
          <div className="security-guarantee-line">
            <ShieldCheck size={18} className="shield-icon" />
            <span>256-Bit SSL Encrypted Transactions • Official GST / VAT Invoices Issued with Every Order</span>
          </div>
          <div className="billing-help-line">
            <span>Billing Assistance:</span>
            <a href="tel:+919820088200"><Phone size={13} /> +91 98200 88200</a>
            <span>•</span>
            <a href="mailto:billing@ultraaalbums.com"><Mail size={13} /> billing@ultraaalbums.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
