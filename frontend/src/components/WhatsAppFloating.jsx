import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloating() {
  return (
    <aside aria-label="WhatsApp Concierge" className="floating-whatsapp-anchor">
      <a
        href="https://wa.me/919820088200?text=Hello%20Ultraa%20Albums%2C%20I%20would%20like%20to%20inquire%20about%20your%20wedding%20albums."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ultraa Albums on WhatsApp"
        className="floating-whatsapp-puck"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={26} color="#FFFFFF" />
      </a>
    </aside>
  );
}

