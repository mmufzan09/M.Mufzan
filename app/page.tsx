"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../app/globals.css";
import ProjectsPage from "./components/projects";
import AboutSection from "./components/about";
import MySkills from "./components/skill";
import ServicesSection from "./components/services";
import ContactForm from "./components/contact";
import Footer from "./components/footer";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import MouseTrail from "./MouseTrail";
import ScrollingBanner from "./components/scrollingBanner";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen px-4 sm:px-6 py-12 bg-black text-white transition-all duration-300 overflow-x-hidden">
      
      {/* 🌟 Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[40px] left-[30px] w-40 h-40 bg-purple-600 opacity-10 clip-triangle rotate-[20deg] blur-xl" />
        <div className="absolute top-[120px] right-[60px] w-52 h-52 bg-purple-500 opacity-10 clip-diamond rotate-[15deg] blur-2xl" />
        <div className="absolute bottom-[60px] left-[40px] w-60 h-60 bg-purple-700 opacity-10 clip-hexagon rotate-[10deg] blur-xl" />
        <div className="absolute top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-800 opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-[100px] left-[45%] w-32 h-32 bg-purple-900 opacity-10 rotate-[45deg] blur-xl" />
        <div className="absolute bottom-[100px] right-[80px] w-28 h-28 bg-purple-500 opacity-10 clip-triangle rotate-[40deg] blur-xl" />
      </div>

      {/* 🔝 Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-700 shadow-lg py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold">Portfolio</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4">
          {[
            { href: "/", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#projects", label: "Projects" },
            { href: "#services", label: "Services" },
            { href: "#contact", label: "Contact" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="px-3 py-2 rounded-md text-sm transition hover:bg-purple-600 hover:text-white text-gray-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 right-4 w-[85%] max-w-xs bg-black border border-purple-600 shadow-xl rounded-xl z-50 p-4 flex flex-col gap-4 md:hidden">
            {[
              { href: "/", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#services", label: "Services" },
              { href: "#contact", label: "Contact" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="text-gray-300 hover:text-white border-b border-gray-700 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* 👤 Hero Section */}
      <section className="pt-28 sm:pt-36 flex flex-col lg:flex-row-reverse items-center justify-between px-4 sm:px-6 lg:px-24 py-10 sm:py-16 gap-10 animate-slideUp">
        
        {/* 👉 Image + Social Icons beside image */}
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-center gap-6">
          <Image
            src="/mypic2.jpeg"
            alt="Muhammad Mufzan Portfolio Photo"
            width={420}
            height={420}
            className="rounded-full shadow-xl object-cover border-4 border-purple-500 transition-transform hover:scale-105 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px]"
          />

          {/* Social Icons beside image */}
          <div className="flex lg:flex-col gap-6 text-3xl text-white justify-center mt-4 lg:mt-0">
            <a
              href="https://www.linkedin.com/in/muhammad-mufzan-aab92733a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-transform hover:scale-125"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/mmufzan09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-transform hover:scale-125"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/its_me.mufi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-transform hover:scale-125"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* 👉 Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-purple-500 font-[Playwrite]">Muhammad Mufzan.</span>
          </h2>

          <p className="text-gray-300 mb-6 text-base sm:text-lg max-w-xl">
            I am Muhammad Mufzan, a dedicated Web Developer. I have created many websites for clients, actively working on Fiverr, and teaching web development for the past year. I specialize in advanced front-end development and have basic knowledge of backend.
          </p>

          <a
            href="/MY CV.PDF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-purple-600 text-purple-500 hover:bg-purple-600 hover:text-white transition rounded"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* 🔁 Scrolling Banner + Mouse Trail */}
      <ScrollingBanner />
      <MouseTrail />

      {/* 🔽 Sections */}
      <section id="about" className="mt-16 px-4 sm:px-6 animate-fadeIn"><AboutSection /></section>
      <section id="skills" className="mt-16 px-4 sm:px-6 animate-fadeIn"><MySkills /></section>
      <section id="projects" className="mt-16 px-4 sm:px-6 animate-fadeIn"><ProjectsPage /></section>
      <section id="services" className="mt-16 px-4 sm:px-6 animate-fadeIn"><ServicesSection /></section>
      <section id="contact" className="mt-16 px-4 sm:px-6 animate-fadeIn">
        <div className="max-w-4xl mx-auto"><ContactForm /></div>
      </section>
      <section id="footer" className="mt-16 px-4 sm:px-6 animate-fadeIn"><Footer /></section>
    </main>
  );
}
