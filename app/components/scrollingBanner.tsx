"use client";
import React from "react";
import "../globals.css";

const projects = [
  "Legalit.ro",
  "Avengers UI",
  "Calculator App",
  "Myntra Clone",
  
];

const ScrollingBanner = () => {
  return (
    <div className="w-full bg-gray-900 py-6 overflow-hidden border-y border-purple-500">
      <div className="animate-marquee-reverse whitespace-nowrap flex gap-16">
        {projects.concat(projects).map((project, index) => (
          <span
            key={index}
            className="text-white text-xl font-semibold tracking-wide"
          >
            🚀 {project}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
