"use client";

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const brandColor = "#034380";

  return (
    <footer className="bg-[#034380] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">22Kile Services</h3>
          <p>
            Building. Improving. Maintaining. <br />
            Professional construction and maintenance services across KwaZulu-Natal.
          </p>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt /> Mandlanzini, Richards Bay, 3900
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt /> +27 73 121 9547
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope /> lihlemlondo187@gmail.com
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-300 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo Column */}
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/logo.png" // replace with your 22Kile logo path
            alt="22Kile Services Logo"
            width={200}
            height={80}
            className="object-contain"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white/30 pt-6 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} 22Kile Services (Pty) Ltd. All rights reserved. | Developed by{" "}
        <a
          href="https://github.com/yourusername"
          className="underline hover:text-white"
        >
          Mdebe
        </a>
      </div>
    </footer>
  );
}
