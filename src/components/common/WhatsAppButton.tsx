import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  // Replace with actual WhatsApp number
  const whatsappNumber = '919761584758';
  const message = encodeURIComponent('Hello, I would like to know more about ST. J.P. Convent Public School.');

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50 transition-transform hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} fill="white" />
    </a>
  );
};

export default WhatsAppButton;