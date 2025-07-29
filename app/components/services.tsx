"use client";

import React from "react";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaMobileAlt,
  FaCogs,
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
];

const ServicesSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 border-b-2 border-purple-500 inline-block hover:text-purple-600 transition-colors duration-300">
          My Services
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gray-900 p-8 rounded-2xl border border-gray-700 shadow-lg group hover:bg-purple-700/90 transition duration-500 overflow-hidden"
            >
              {/* Icon and Title (visible by default) */}
              <div className="flex flex-col items-center group-hover:opacity-0 transition-opacity duration-300">
                {service.icon}
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>

              {/* Description on hover */}
              <div className="absolute inset-0 bg-black/90 p-6 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-gray-200 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default ServicesSection;
