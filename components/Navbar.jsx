"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-[100px]">

        {/* Logo */}
        <div className="flex items-center h-full">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="22Kile Services Logo"
              width={320}
              height={90}
              className="h-[90px] w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link text-primary font-semibold"
            >
              {item.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact"
            className="ml-4 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition"
          >
            Request a Quote
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-link font-semibold text-black"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 rounded-md bg-primary px-5 py-3 text-center font-semibold text-white hover:bg-primary-dark transition"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        :global(.text-primary) {
          color: #034380;
        }

        :global(.bg-primary) {
          background-color: #034380;
        }

        :global(.hover\\:bg-primary-dark:hover) {
          background-color: #022f5a;
        }

        .nav-link {
          font-size: 1.05rem;
          position: relative;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 3px;
          background: #034380;
          transition: width 0.25s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-link {
          font-size: 1rem;
          color: #034380;
        }

        .mobile-link:hover {
          color: #022f5a;
        }
      `}</style>
    </header>
  );
}
