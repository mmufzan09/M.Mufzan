"use client";

import React, { useState } from "react";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaMobileAlt,
  FaCogs,
  FaGlobe,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={40} className="mx-auto text-white" />,
    title: "Front-End Development",
    description:
      "Crafting visually stunning, user-friendly, and highly interactive front-end experiences using React, Tailwind CSS, and TypeScript.",
  },
  {
    icon: <FaShoppingCart size={40} className="mx-auto text-white" />,
    title: "E-commerce Development",
    description:
      "Building secure, SEO-optimized e-commerce solutions that work seamlessly across all devices.",
  },
  {
    icon: <FaMobileAlt size={40} className="mx-auto text-white" />,
    title: "Responsive Design",
    description:
      "Ensuring mobile-first, responsive UI/UX that adapts beautifully across all screen sizes.",
  },
  {
    icon: <FaCogs size={40} className="mx-auto text-white" />,
    title: "Website Optimization",
    description:
      "Boosting your website’s speed, SEO, and performance for better UX and search engine visibility.",
  },
  {
    icon: <FaGlobe size={40} className="mx-auto text-white" />,
    title: "Custom Web Apps",
    description:
      "Developing tailored web applications to match your exact business goals and user needs.",
  },
  {
    icon: <FaTools size={40} className="mx-auto text-white" />,
    title: "Maintenance & Support",
    description:
      "Providing ongoing website updates, bug fixes, and performance monitoring to keep your site running smoothly.",
  },
];

const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 border-b-2 border-purple-500 inline-block hover:text-purple-600 transition-colors duration-300">
          My Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isActive = activeCard === index;

            return (
              <div
                key={index}
                className={`relative rounded-2xl border border-gray-700 shadow-lg group overflow-hidden transition-all duration-300
                  p-8 cursor-pointer
                  ${isActive ? "bg-purple-800" : "bg-gray-900"}
                  md:hover:bg-purple-800
                `}
                onClick={() => handleCardClick(index)}
              >
                {/* Icon */}
                <div className="flex flex-col items-center mb-4">
                  {service.icon}
                </div>

                {/* Title (always visible on mobile, hidden on desktop hover) */}
                <h3
                  className={`
                    text-xl font-semibold text-white text-center mb-2
                    transition-opacity duration-300
                    md:group-hover:opacity-0
                  `}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <div
                  className={`
                    text-sm leading-relaxed text-center text-gray-300 transition-opacity duration-500
                    md:absolute md:inset-0 md:p-6 md:flex md:items-center md:justify-center md:bg-black/90
                    ${isActive ? "opacity-100 bg-black/90 rounded-xl p-4" : "opacity-0"}
                    md:group-hover:opacity-100
                  `}
                >
                  <p>{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
