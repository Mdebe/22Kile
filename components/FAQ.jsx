"use client";

import { motion } from "framer-motion";
import { FaHardHat, FaCheckCircle, FaShieldAlt, FaClock } from "react-icons/fa";
import Link from "next/link";

const keyValues = [
  {
    icon: FaHardHat,
    title: "Experienced Leadership",
    desc: "Led by professionals with hands-on knowledge in construction, maintenance, and property improvement.",
  },
  {
    icon: FaCheckCircle,
    title: "High-Quality Workmanship",
    desc: "We deliver durable, precise, and visually appealing construction and maintenance solutions.",
  },
  {
    icon: FaShieldAlt,
    title: "Compliance & Safety",
    desc: "All projects are executed with full adherence to industry standards and safety regulations.",
  },
  {
    icon: FaClock,
    title: "Reliable & Timely",
    desc: "We complete projects on schedule without compromising quality or attention to detail.",
  },
];

export default function WhyChooseCTA() {
  const brandColor = "#034380";

  return (
    <>
      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-bold text-black">
            Why <span style={{ color: brandColor }}>Choose Us</span>
          </h2>
          <p className="text-gray-700 text-lg mt-3">
            22Kile Services provides reliable construction and maintenance solutions with a focus on quality, safety, and client satisfaction.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {keyValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-2xl border cursor-pointer hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 120, damping: 15, duration: 0.6, delay: index * 0.1 }}
                style={{ borderColor: brandColor }}
              >
                <div className="flex flex-col items-center text-center">
                  <Icon className="text-5xl mb-4" style={{ color: brandColor }} />
                  <h3 className="text-2xl font-bold mb-2 text-black">{value.title}</h3>
                  <p className="text-gray-700">{value.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-[url('/images/hero-cta.jpg')] bg-cover bg-center py-24 relative">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-lg mb-8">
            Request a free quote today and let 22Kile Services bring your vision to life!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-md font-semibold bg-white text-black hover:bg-black hover:text-white transition"
            >
              Get a Free Quote
            </Link>
            <Link
              href="https://wa.me/27731219547"
              target="_blank"
              className="px-8 py-4 rounded-md font-semibold bg-green-600 text-white hover:bg-green-700 transition"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
