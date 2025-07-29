'use client';

import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-10 px-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
        {/* Title */}
        <h1 className="text-2xl font-semibold">Portfolio</h1>

        {/* Navigation - Single line on mobile */}
        <nav className="flex justify-center gap-4 sm:gap-6 text-sm sm:text-base overflow-x-auto whitespace-nowrap">
          {['Home', 'About', 'Skills', 'Projects', 'Service', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-500 transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4 text-xl">
          <a
            href="https://www.linkedin.com/in/muhammad-mufzan-aab92733a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/mmufzan09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/its_me.mufi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} All Rights Reserved | Muhammad Mufzan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
