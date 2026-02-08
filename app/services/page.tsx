"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// -----------------------------
// Type
// -----------------------------
interface Service {
  title: string;
  desc: string;
  img: string;
}

// -----------------------------
// 22Kile Services Data
// -----------------------------
const services: Service[] = [
  { title: "Paving", desc: "Durable and aesthetic paving solutions for driveways, pathways, and patios.", img: "/images/paving.jpg" },
  { title: "Tiling", desc: "Professional tiling for floors, walls, kitchens, and bathrooms.", img: "/images/tiling.jpg" },
  { title: "Painting", desc: "Residential, commercial, and industrial painting with a flawless finish.", img: "/images/painting.jpg" },
  { title: "Fencing", desc: "Secure and stylish fencing solutions for homes and businesses.", img: "/images/fencing.jpg" },
  { title: "General Maintenance", desc: "Reliable maintenance services to keep your property in top condition.", img: "/images/maintenance.jpg" },
  { title: "Ceiling Board Installation", desc: "Expert ceiling board installation for aesthetic and functional spaces.", img: "/images/ceiling.jpg" },
  { title: "Roofing", desc: "High-quality roofing solutions that protect and enhance your property.", img: "/images/roofing.jpg" },
];

// -----------------------------
// Service Card Component
// -----------------------------
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  const brandColor = "#034380";

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, borderColor: brandColor }} // Only one style attribute
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 120, damping: 15, delay: index * 0.1 }}
      className="bg-white rounded-3xl overflow-hidden shadow-2xl border cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-56 w-full">
        <Image src={service.img} alt={service.title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-black">{service.title}</h3>
        <p className="text-gray-700">{service.desc}</p>
      </div>
    </motion.div>
  );
}

// -----------------------------
// Services Page
// -----------------------------
export default function ServicesPage() {
  const brandColor = "#034380";

  return (
    <>
      <Navbar />

      <main className="bg-white text-black">

        {/* Hero Section */}
        <section
          className="relative h-[50vh] md:h-[30vh] w-full flex items-center justify-center text-center px-6"
          style={{ backgroundColor: brandColor }}
        >
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our <span className="text-white/90">Services</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Explore professional construction and maintenance solutions offered by 22Kile Services.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </section>

        {/* Extra Info Section */}
        <section
          className="py-16 px-6 max-w-7xl mx-auto text-center rounded-3xl shadow-lg"
          style={{ backgroundColor: "#f0f4f8" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: brandColor }}>
            Why Choose 22Kile Services?
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-4">
            22Kile Services delivers professional construction and maintenance solutions across KwaZulu-Natal. Our team is skilled, reliable, and fully committed to quality workmanship.
          </p>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            We prioritize compliance, safety, and client satisfaction on every project.
          </p>
        </section>

        {/* Call to Action */}
        <section
          className="bg-[#034380] text-white py-16 px-6 text-center"
        >
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
