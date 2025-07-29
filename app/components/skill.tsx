"use client";
import Image from "next/image";

const skills = [
  {
    name: "HTML",
    icon: "/html.png",
    desc: "Semantic structure for modern websites with accessibility in mind.",
  },
  {
    name: "CSS",
    icon: "/css.png",
    desc: "Design and layout techniques using Flexbox, Grid, and animations.",
  },
  {
    name: "JavaScript",
    icon: "/js.png",
    desc: "Interactive and dynamic web applications with ES6+ features.",
  },
  {
    name: "Angular",
    icon: "/angular.png",
    desc: "Powerful SPA development using TypeScript and Angular CLI.",
  },
  {
    name: "Bootstrap",
    icon: "/bootstrap.png",
    desc: "Responsive design framework with prebuilt UI components.",
  },
  {
    name: "React",
    icon: "/react.png",
    desc: "Component-based frontend development using hooks and JSX.",
  },
];

export default function MySkills() {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 hover:text-purple-600 transition-colors duration-300">
        My Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative text-center p-6 bg-gray-900 rounded-xl border border-gray-700 shadow-md backdrop-blur-md 
                       transition-all duration-300 ease-in-out 
                       hover:scale-105 active:scale-105 hover:bg-purple-700/80 active:bg-purple-800/90 
                       hover:shadow-2xl hover:z-10"
          >
            <Image
              src={skill.icon}
              alt={`${skill.name} Icon`}
              width={64}
              height={64}
              className="mx-auto w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110 group-active:scale-110"
            />
            <h3 className="text-xl font-semibold mb-2 text-white transition-colors group-hover:text-white group-active:text-white">
              {skill.name}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white group-active:text-white">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
