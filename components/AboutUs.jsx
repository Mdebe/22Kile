"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const aboutImages = [
  "/images/about-us-1.jpg",
  "/images/about-us-2.jpg",
  "/images/about-us-3.jpg",
];

export default function AboutUsSlider() {
  const [current, setCurrent] = useState(0);
  const accentColor = "#034380"; // 22Kile brand color

  // Slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % aboutImages.length);
    }, 5000); // 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">

        {/* Left Image Slider */}
        <motion.div
          className="md:w-1/2 relative h-[380px] w-full rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {aboutImages.map((img, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`22Kile Image ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </motion.div>
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/25 rounded-3xl" />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold text-black">
            About <span style={{ color: accentColor }}>22Kile Services</span>
          </h3>

          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            22Kile Services is a professional, youth-owned construction and maintenance company
            delivering reliable, high-quality solutions across residential, commercial, and
            light industrial projects.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            Our name “22Kile” is derived from the isiZulu word “Thuthukile,” meaning development,
            growth, and progress — principles that define our approach to every project.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            We focus on practical, sustainable solutions that improve infrastructure,
            enhance functionality, and provide long-term value to our clients.
          </p>
        </motion.div>
      </div>

      {/* Slider Dots */}
      <div className="flex justify-center mt-8 gap-3">
        {aboutImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{
              backgroundColor: i === current ? accentColor : "#D1D5DB",
              transform: i === current ? "scale(1.2)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
