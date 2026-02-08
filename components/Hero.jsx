"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaRoad,
  FaThLarge,
  FaPaintRoller,
  FaBorderAll,
  FaTools,
  FaLayerGroup,
  FaWarehouse,
} from "react-icons/fa";

const slides = [
  {
    image: "/images/hero-1.jpg",
    title: "22Kile Services",
    subtitle: "Building. Improving. Maintaining.",
  },
  {
    image: "/images/hero-2.jpg",
    title: "Residential & Commercial",
    subtitle: "Construction Solutions",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Reliable & Professional",
    subtitle: "Quality Workmanship",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const primary = "#034380";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
        ))}

        {/* Badge */}
        <div
          className="absolute top-24 left-6 z-30 px-5 py-2 rounded-full border bg-black"
          style={{ borderColor: primary }}
        >
          <span className="font-bold tracking-wide" style={{ color: primary }}>
            Youth-Owned • B-BBEE Compliant
          </span>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center justify-center px-6 text-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {slides[current].title}
              <br />
              <span style={{ color: primary }}>
                {slides[current].subtitle}
              </span>
            </h1>

            <p className="mt-5 text-lg text-gray-200">
              Professional construction and maintenance services for residential,
              commercial, and light industrial projects.
            </p>

            <a
              href="/contact"
              className="inline-block mt-8 px-8 py-3 rounded-md font-semibold border transition"
              style={{
                borderColor: primary,
                color: primary,
                backgroundColor: "#000",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = primary;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#000";
                e.currentTarget.style.color = primary;
              }}
            >
              Request a Quote →
            </a>
          </div>
        </div>

        {/* Accent */}
        <div
          className="absolute bottom-0 w-full h-10 z-20"
          style={{ backgroundColor: primary }}
        />
      </section>
 
    </>
  );
}

/* 3D SERVICE CARD */
function Service({ icon, title, desc }) {
  return (
    <div
      className="group relative rounded-xl border p-8 bg-white transition-all duration-300"
      style={{
        borderColor: "#034380",
        transformStyle: "preserve-3d",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      }}
    >
      {/* Glow layer */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition"
        style={{
          background:
            "linear-gradient(135deg, rgba(3,67,128,0.25), transparent)",
          zIndex: 0,
        }}
      />

      {/* Card Content */}
      <div
        className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2"
        style={{ transform: "translateZ(30px)" }}
      >
        <div
          className="text-4xl mx-auto mb-4"
          style={{ color: "#034380" }}
        >
          {icon}
        </div>

        <h3 className="text-lg font-bold text-black">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-700">
          {desc}
        </p>
      </div>
    </div>
  );
}
