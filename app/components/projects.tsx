"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const projects = [
    {
      name: "Legalit.ro",
      description: "A legal service platform built for modern digital law solutions.",
      link: "https://legalit-ro-n-cur-nd-8fu7.vercel.app",
    },
    {
      name: "Avengers UI",
      description: "A superhero themed website using advanced CSS animations.",
      link: "https://avergers.vercel.app",
    },
    {
      name: "Calculator App",
      description: "A modern React + TS calculator.",
      link: "https://calculator-vert-six-79.vercel.app",
    },
    {
      name: "Myntra Clone",
      description: "A clone of Myntra with shopping cart & responsive design.",
      link: "https://myntra-shop-six.vercel.app",
    },
  ];

  const handleCardClick = (index: number) => {
    // Toggle on mobile, no effect on desktop
    if (window.innerWidth < 768) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-16 hover:text-purple-500 transition duration-300">
        _My Projects_
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`relative rounded-2xl border border-gray-700 shadow-xl p-8 overflow-hidden group transition-all duration-500 ${
                isActive || undefined ? "bg-purple-800/80" : "bg-gray-900"
              } md:hover:bg-purple-800/80 cursor-pointer`}
            >
              {/* Project Name */}
              <h2
                className={`text-2xl font-bold text-center mb-4 transition-opacity duration-300 ${
                  isActive ? "opacity-0" : "opacity-100"
                } md:group-hover:opacity-0`}
              >
                {project.name}
              </h2>

              {/* Hover or Tap Details */}
              <div
                className={`${
                  isActive
                    ? "opacity-100 static"
                    : "opacity-0 hidden"
                } md:group-hover:opacity-100 md:group-hover:flex md:flex md:absolute md:inset-0 md:bg-black/85 md:p-6 md:flex-col md:justify-center md:items-center md:text-center md:transition-opacity md:duration-500`}
              >
                <p className="text-md mb-4 text-gray-200">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  className="mt-2 bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition"
                >
                  Click to Open
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Text */}
      <div className="mt-16 text-center text-base sm:text-lg text-gray-400 px-4 max-w-2xl mx-auto">
        <p className="mb-2">
          Each project represents a blend of modern UI, responsive design, and clean code.
        </p>
        <p>
          I aim to build digital experiences that are intuitive, accessible, and impactful.
        </p>
      </div>
    </section>
  );
}
