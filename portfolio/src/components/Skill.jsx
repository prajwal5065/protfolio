import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
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
// PRACTICAL SKILLS (you use confidently)
// ------------------------------------
const practicalSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: "Tailwind CSS", icon: <TailwindIcon /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
  { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-10 h-10" /> },
  { name: "C++", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className="w-10 h-10" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
  { name: "Express.js", icon: <ExpressIcon /> },
  { name: "Pandas", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" className="w-10 h-10" /> },
  { name: "NumPy", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" className="w-10 h-10" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
];

// ------------------------------------
// LEARNING SKILLS (You know basics of)
// ------------------------------------
const learningSkills = [
  { name: "Machine Learning", icon: <img src="https://cdn-icons-png.flaticon.com/512/10829/10829841.png" className="w-10 h-10" /> },
  { name: "Deep Learning", icon: <img src="https://cdn-icons-png.flaticon.com/512/1048/1048942.png" className="w-10 h-10" /> },
  { name: "NLP", icon: <img src="https://cdn-icons-png.flaticon.com/512/2721/2721295.png" className="w-10 h-10" /> },
  { name: "Computer Vision", icon: <img src="https://cdn-icons-png.flaticon.com/512/2907/2907253.png" className="w-10 h-10" /> },
  { name: "TensorFlow", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" className="w-10 h-10" /> },
  { name: "OpenCV", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" className="w-10 h-10" /> },
  { name: "Tableau", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg" className="w-10 h-10" /> },
  { name: "TypeScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-10 h-10" /> },
  { name: "Oracle Cloud (OCI)", icon: <img src="https://cdn-icons-png.flaticon.com/512/5969/5969050.png" className="w-10 h-10" /> },
];

const renderSkillCard = (skill, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    viewport={{ once: true }}
    className="bg-gray-100 dark:bg-[#1a1d23] p-4 rounded-lg shadow-lg shadow-red-300 dark:shadow-gray-400 text-center"
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1 }}
      className="flex items-center justify-center"
    >
      {skill.icon}
    </motion.div>

    <h3 className="mt-4 text-lg font-bold text-gray-800 dark:text-white">
      {skill.name}
    </h3>
  </motion.div>
);

const Skill = () => {
  return (
    <section className="px-10 lg:px-0 flex justify-center items-center mt-40 mb-52 lg:mt-0 lg:mb-0 lg:h-full">
      <div className="mx-auto lg:w-[1100px]">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-gray-800 dark:text-white"
        >
          Skills
        </motion.h2>

        <p className="mt-4 text-lg text-gray-600 dark:text-slate-300">
          Here are my <span className="font-semibold text-red-700">Practical Skills</span>  
          and the <span className="font-semibold text-red-700">Technologies I'm currently learning.</span>
        </p>

        {/* PRACTICAL SKILLS */}
        <h3 className="text-2xl font-bold mt-10 text-gray-800 dark:text-white">Practical Skills</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
          {practicalSkills.map(renderSkillCard)}
        </div>

        {/* LEARNING SKILLS */}
        <h3 className="text-2xl font-bold mt-14 text-gray-800 dark:text-white">Learning Skills</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
          {learningSkills.map(renderSkillCard)}
        </div>

      </div>
    </section>
  );
};

export default Skill;
