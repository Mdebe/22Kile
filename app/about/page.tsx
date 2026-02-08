"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// -----------------------------
// Types
// -----------------------------
interface Service {
  title: string;
  desc: string;
  img: string;
}

interface WhyUsItem {
  title: string;
  desc: string;
}

// -----------------------------
// Data
// -----------------------------
const servicesData: Service[] = [
  { title: "Paving", desc: "Durable and aesthetic paving solutions for driveways, pathways, and patios.", img: "/images/paving.jpg" },
  { title: "Tiling", desc: "Professional tiling for floors, walls, kitchens, and bathrooms.", img: "/images/tiling.jpg" },
  { title: "Painting", desc: "Residential, commercial, and industrial painting with a flawless finish.", img: "/images/painting.jpg" },
  { title: "Fencing", desc: "Secure and stylish fencing solutions for homes and businesses.", img: "/images/fencing.jpg" },
  { title: "General Maintenance", desc: "Reliable maintenance services to keep your property in top condition.", img: "/images/maintenance.jpg" },
  { title: "Ceiling Board Installation", desc: "Expert ceiling board installation for aesthetic and functional spaces.", img: "/images/ceiling.jpg" },
  { title: "Roofing", desc: "High-quality roofing solutions that protect and enhance your property.", img: "/images/roofing.jpg" },
];

const whyUsData: WhyUsItem[] = [
  { title: "Experienced Leadership", desc: "Led by Lihle Mlondo, with hands-on construction and maintenance expertise." },
  { title: "High-Quality Workmanship", desc: "We deliver projects that meet industry standards and last long." },
  { title: "Compliance & Safety First", desc: "All work is done following legal and safety regulations." },
  { title: "Reliable & Timely Delivery", desc: "Projects completed on time, every time, with accountability." },
];

const aboutImages: string[] = [
  "/images/about-us-1.jpg",
  "/images/about-us-2.jpg",
  "/images/about-us-3.jpg",
];

// -----------------------------
// Service Card Component
// -----------------------------
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const brandColor = "#034380";

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 120, damping: 15, duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#034380] cursor-pointer"
    >
      <div className="relative h-56 w-full">
        <Image src={service.img} alt={service.title} fill className="object-cover" />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold mb-2">
          <span className="text-black">{service.title.split(" ")[0]}</span>{" "}
          <span style={{ color: brandColor }}>{service.title.split(" ")[1] || ""}</span>
        </h3>
        <p className="text-gray-700">{service.desc}</p>
      </div>
    </motion.div>
  );
}

// -----------------------------
// About Us Page
// -----------------------------
export default function AboutUsPage() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const brandColor = "#034380";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />

      <main className="bg-white text-black">

        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[40vh] w-full bg-[#034380] flex items-center justify-center text-center px-6">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              About <span className="text-white/90">22Kile Services</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Building. Improving. Maintaining. Professional construction and maintenance services across KwaZulu-Natal.
            </p>
          </div>
        </section>

        {/* About Slider Section */}
        <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Image Slider */}
            <motion.div
              className="relative h-80 w-full rounded-3xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {aboutImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? "opacity-100" : "opacity-0"}`}
                >
                  <Image src={img} alt={`About Image ${idx + 1}`} fill className="object-cover" />
                </motion.div>
              ))}
              <div className="absolute inset-0 bg-black/20 rounded-3xl" />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: brandColor }}>
                Our Mission
              </h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                22Kile Services aims to provide professional, reliable, and sustainable construction and maintenance solutions that promote growth, development, and long-term value.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We uphold high standards, compliance, and accountability in every project, ensuring client satisfaction and quality workmanship.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-50 py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: brandColor }}>Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {servicesData.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: brandColor }}>Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {whyUsData.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#034380] text-white py-16 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="mb-8 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Contact 22Kile Services today to discuss your construction or maintenance project!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#034380] font-semibold px-8 py-3 rounded-full shadow-lg hover:opacity-90 transition"
          >
            Request a Free Quote
          </a>
        </section>

      </main>

      <Footer />
    </>
  );
}
