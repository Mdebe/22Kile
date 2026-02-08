"use client";

import { useEffect, useState } from "react";
import { FaBuilding, FaUsers, FaStar, FaClock } from "react-icons/fa";

const stats = [
  { label: "Clients Served", value: 1200, icon: FaUsers },
  { label: "Commercial Projects", value: 320, icon: FaBuilding },
  { label: "Years of Experience", value: 10, icon: FaClock },
  { label: "5-Star Reviews", value: 850, icon: FaStar },
];

export default function Achievements() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) =>
          count < stats[i].value ? count + Math.ceil(stats[i].value / 100) : stats[i].value
        )
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-red-600">Our Achievements</h2>
        <p className="text-gray-700 mt-3 text-lg">
          Trusted by thousands of clients with years of professional experience
        </p>

        <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white border border-red-600 rounded-2xl p-6 hover:bg-red-600 hover:text-black transition"
              >
                <Icon className="text-red-600 text-5xl mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-black">{counts[index]}</h3>
                <p className="mt-2 text-gray-700">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
