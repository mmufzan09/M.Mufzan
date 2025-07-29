"use client";
import React from "react";

const AboutSection = () => {
  return (
    <section className="relative w-full bg-black text-white min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 overflow-hidden">
      
      {/* 📝 Full-Width Text Section with Solid Black Background */}
      <div className="w-full max-w-6xl px-4 sm:px-8 py-12 bg-black rounded-xl shadow-xl animate-fadeIn transition-all duration-500 group border border-white/10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center transition-colors duration-300 group-hover:text-purple-500 group-active:text-purple-500">
          About Me
        </h2>

       
{/* ✅ Short version for mobile (visible on small screens only) */}
<p className="block md:hidden text-gray-300 mb-10 leading-relaxed text-base text-center transition-transform duration-300">
  Hi, I’m <span className="font-semibold text-white">Muhammad Mufzan</span>, a web developer focused on building responsive, user-friendly websites. I specialize in front-end development using React and Tailwind CSS. I also teach web development, helping students build real projects. Let’s connect and bring your ideas to life!
</p>


{/* ✅ Full version for desktop screens */}
<p className="hidden md:block text-gray-300 mb-10 leading-relaxed text-base sm:text-lg text-center md:text-left transition-transform duration-300 group-hover:scale-[1.01] group-active:scale-[1.01]">
  Hello, I’m <span className="font-semibold text-white">Muhammad Mufzan</span>, a dedicated and creative web developer with over 6 months of real-world experience in building modern, responsive websites and interfaces. I specialize in front-end development and UI/UX design, combining design thinking with technical execution to create digital products that are both functional and visually engaging. My daily tools include HTML, CSS, JavaScript, TypeScript, React, and Tailwind CSS — and I enjoy turning static ideas into dynamic, user-centered experiences.

  <br /><br />
  Alongside client work, I actively teach web development at a local institute where I help aspiring developers build strong foundations in HTML, CSS, and JavaScript, and guide them through real-world projects using modern frameworks. This teaching experience has helped me not only reinforce my own technical skills but also grow in communication, leadership, and mentorship. I believe that learning never stops, and I’m constantly improving by staying up-to-date with the latest web technologies and design trends.

  <br /><br />
  I’m passionate about turning ideas into polished, high-performance websites. Whether you're building a personal portfolio, an e-commerce platform, or a custom web application — I’m always excited to bring creative visions to life with clean code and thoughtful design. I enjoy collaborating with clients, solving real problems, and delivering experiences that leave a lasting impression. Let’s work together and create something amazing!
</p>



        {/* 📞 Contact Button */}
        <div className="text-center">
          <a
            href="https://wa.me/message/FC3IXIRZ427HH1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-purple-600 text-purple-500 hover:bg-purple-600 hover:text-white focus:bg-purple-600 focus:text-white active:bg-purple-700 transition-all duration-300 rounded shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
