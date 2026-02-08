"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: ["Paving", "Services"],
    desc: "Driveways, walkways, and paving solutions with durable and professional finishes.",
    img: "/images/paving.jpg",
  },
  {
    title: ["Tiling", "Services"],
    desc: "Wall and floor tiling for residential, commercial, and industrial projects.",
    img: "/images/tiling.jpg",
  },
  {
    title: ["Painting", "Services"],
    desc: "Interior and exterior painting that enhances aesthetics and protects surfaces.",
    img: "/images/painting.jpg",
  },
  {
    title: ["Fencing", "Services"],
    desc: "Durable fencing solutions for security, privacy, and boundary demarcation.",
    img: "/images/fencing.jpg",
  },
  {
    title: ["Ceiling Board", "Installation"],
    desc: "Professional ceiling board installation for residential and commercial properties.",
    img: "/images/ceiling.jpg",
  },
  {
    title: ["Roofing", "Services"],
    desc: "Roof installation, repair, and maintenance to ensure long-lasting protection.",
    img: "/images/roofing.jpg",
  },
  
];

function ServiceCard({ service }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const brandColor = "#034380";

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, borderColor: brandColor }}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 120, damping: 15, duration: 0.6 }}
      className="bg-white rounded-3xl overflow-hidden shadow-2xl border cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-64 w-full">
        <Image
          src={service.img}
          alt={service.title.join(" ")}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-8 text-center">
        <h4 className="text-2xl font-bold mb-3">
          <span className="text-black">{service.title[0]}</span>{" "}
          <span style={{ color: brandColor }}>{service.title[1]}</span>
        </h4>

        <p className="text-gray-700 leading-relaxed">{service.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const brandColor = "#034380";

  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <h2 className="text-5xl md:text-6xl font-bold text-black">
          Our <span style={{ color: brandColor }}>Services</span>
        </h2>
        <p className="text-gray-700 text-lg mt-3">
          Professional construction and maintenance solutions for residential,
          commercial, and light industrial projects
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service) => (
          <ServiceCard key={service.title.join(" ")} service={service} />
        ))}
      </div>
    </section>
  );
}
