import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBrain,
  FaChartBar
} from "react-icons/fa";
import expressjs_icon from "../assets/expressjs_icon.png";
import Tailwind_icon from "../assets/Tailwind_CSS_Logo.png";

const ExpressIcon = () => (
  <img src={expressjs_icon} alt="Express.js" className="w-10 h-10" />
);

const TailwindIcon = () => (
  <img src={Tailwind_icon} alt="Tailwind CSS" className="w-10 h-10" />
);

// ------------------------------------
// LANGUAGES
// ------------------------------------
const languages = [
  { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-10 h-10" alt="Python" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
  { name: "TypeScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-10 h-10" alt="TypeScript" /> },
  { name: "C++", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className="w-10 h-10" alt="C++" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
];

// ------------------------------------
// FRAMEWORKS & LIBRARIES
// ------------------------------------
const frameworks = [
  { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
  { name: "Express.js", icon: <ExpressIcon /> },
  { name: "FastAPI", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" className="w-10 h-10" alt="FastAPI" /> },
  { name: "Tailwind CSS", icon: <TailwindIcon /> },
];

// ------------------------------------
// AI & MACHINE LEARNING
// ------------------------------------
const aiAndMl = [
  { name: "Machine Learning", icon: <FaBrain className="text-pink-500 text-4xl" /> },
  { name: "LangGraph", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-10 h-10" alt="LangGraph" /> },
  { name: "Pandas", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" className="w-10 h-10" alt="Pandas" /> },
  { name: "NumPy", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" className="w-10 h-10" alt="NumPy" /> },
  { name: "TensorFlow", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" className="w-10 h-10" alt="TensorFlow" /> },
  { name: "OpenCV", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" className="w-10 h-10" alt="OpenCV" /> },
];

// ------------------------------------
// DATABASES & TOOLS
// ------------------------------------
const databasesAndTools = [
  { name: "PostgreSQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="w-10 h-10" alt="PostgreSQL" /> },
  { name: "Redis", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" className="w-10 h-10" alt="Redis" /> },
  { name: "Docker", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-10 h-10" alt="Docker" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
  { name: "Tableau", icon: <FaChartBar className="text-blue-500 text-4xl" /> },
];

const renderSkillCard = (skill, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-gray-100 dark:bg-[#1a1d23] p-4 rounded-lg shadow-lg shadow-red-300 dark:shadow-gray-400 text-center flex flex-col items-center justify-center h-32"
  >
    <motion.div
      animate={{ y: [0, 5, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="flex items-center justify-center mb-2"
    >
      {skill.icon}
    </motion.div>

    <h3 className="mt-2 text-sm font-bold text-gray-800 dark:text-white text-center">
      {skill.name}
    </h3>
  </motion.div>
);

const Skill = () => {
  return (
    <section className="px-10 lg:px-0 flex justify-center items-center mt-40 mb-52 lg:mt-0 lg:mb-0 lg:min-h-screen">
      <div className="mx-auto lg:w-[1100px] py-20">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-center lg:text-left text-gray-800 dark:text-white"
        >
          Skills
        </motion.h2>

        <p className="mt-4 text-lg text-center lg:text-left text-gray-600 dark:text-slate-300">
          My comprehensive technical <span className="font-semibold text-red-700">Toolbox</span> spanning languages, frameworks, AI, and infrastructure.
        </p>

        {/* LANGUAGES */}
        <h3 className="text-2xl font-bold mt-12 text-gray-800 dark:text-white">Languages</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
          {languages.map(renderSkillCard)}
        </div>

        {/* FRAMEWORKS & LIBRARIES */}
        <h3 className="text-2xl font-bold mt-14 text-gray-800 dark:text-white">Frameworks & Libraries</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
          {frameworks.map(renderSkillCard)}
        </div>
        
        {/* AI & MACHINE LEARNING */}
        <h3 className="text-2xl font-bold mt-14 text-gray-800 dark:text-white">AI & Machine Learning</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
          {aiAndMl.map(renderSkillCard)}
        </div>

        {/* DATABASES & TOOLS */}
        <h3 className="text-2xl font-bold mt-14 text-gray-800 dark:text-white">Databases & Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
          {databasesAndTools.map(renderSkillCard)}
        </div>

      </div>
    </section>
  );
};

export default Skill;
