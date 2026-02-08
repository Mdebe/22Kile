"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const services = [
  "Paving",
  "Tiling",
  "Painting",
  "Fencing",
  "General Maintenance",
  "Ceiling Board Installation",
  "Roofing",
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(services[0]);
  const [message, setMessage] = useState("");

  const phoneNumber = "27731219547"; // 22Kile WhatsApp number

  const sendWhatsApp = () => {
    const text = `Hello! My name is ${name} (${email}). I would like to book the service: ${service}. Message: ${message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main className="bg-white text-[#010a33] min-h-screen">
      <Navbar />

      {/* CONTACT DETAILS + FORM */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left: Contact Details */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#034380]">Contact Details</h2>
            <p className="text-gray-700 text-lg">
              Reach out to 22Kile Services for any inquiries or to schedule a service. We're ready to assist you with your construction and maintenance needs!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-700">
                <FaPhoneAlt className="text-[#034380] w-6 h-6" />
                <span>+27 72 334 0746</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <FaWhatsapp className="text-[#034380] w-6 h-6" />
                <span>
                  <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Chat with us on WhatsApp
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <FaEnvelope className="text-[#034380] w-6 h-6" />
                <span>info@22kile.co.za</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <FaMapMarkerAlt className="text-[#034380] w-6 h-6" />
                <span>Mandlanzini, Richards Bay, 3900</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-[#034380]">Send a Message</h2>
            <div className="grid gap-6">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#034380]"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#034380]"
              />

              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#034380]"
              >
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>

              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#034380]"
              />

              <button
                onClick={sendWhatsApp}
                className="bg-[#034380] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition"
              >
                Send via WhatsApp
              </button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
