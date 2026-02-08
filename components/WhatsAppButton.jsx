"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "27731219547"; // iMvelenhle WhatsApp number (country code + number)
  const message = "Hello! I would like to inquire about 22kile services.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        bottom-6 
        right-6 
        bg-[#c70207] 
        p-4 
        rounded-full 
        shadow-xl 
        flex items-center justify-center
        hover:scale-110 
        transition-transform 
        z-50
      "
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6 text-[#147595]" />
    </a>
  );
}
