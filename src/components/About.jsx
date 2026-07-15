import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {


  return (
    <section className="container mx-auto px-6 flex flex-col justify-center items-center lg:mt-40 lg:mb-20">
      {/* About */}
      <div className="max-w-3xl py-52 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-gray-800 dark:text-gray-200"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 md:text-justify lg:text-2xl text-gray-600 dark:text-gray-200 max-w-4xl mx-auto"
        >
          Hey, I'm <span className='text-red-700 font-semibold'>Prajwal </span>, AI & Data Science student skilled in machine learning, deep learning, and full-stack development, with hands-on experience building real-world AI applications.
          <br />
          <br />
          When I'm not busy coding, you'll find me <span className='text-red-700 font-semibold'>Playing sports</span> or <span className='text-red-700 font-semibold'>exploring new things in Life.</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center space-x-4 mb-16"
        >
          <Link
            to="/projects"
            className="px-6 py-3 font-semibold bg-red-700 text-white rounded-lg hover:bg-red-800 shadow-lg"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 font-semibold bg-transparent border-2 border-red-700 text-red-700 dark:border-white dark:text-white hover:bg-red-700 hover:text-white rounded-lg transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-left max-w-2xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">My Journey</h3>
          <div className="border-l-2 border-red-700 pl-6 space-y-8">
            <div className="relative">
              <div className="absolute -left-[31px] bg-red-700 w-4 h-4 rounded-full mt-1.5 shadow-[0_0_8px_rgba(185,28,28,0.8)]"></div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-white">B.Tech in AI & Data Science</h4>
              <span className="text-sm font-semibold text-red-700 block mt-1">2021 — 2025</span>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Currently in my final year, deeply focused on machine learning, deep learning, and full-stack integration.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] bg-red-700 w-4 h-4 rounded-full mt-1.5 shadow-[0_0_8px_rgba(185,28,28,0.8)]"></div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-white">Hackathons & Applied Dev</h4>
              <span className="text-sm font-semibold text-red-700 block mt-1">OxiAI & Competitions</span>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Built and deployed complex RAG pipelines, multi-agent orchestrators, and AI-driven automation platforms in competitive, fast-paced hackathon environments.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] bg-red-700 w-4 h-4 rounded-full mt-1.5 shadow-[0_0_8px_rgba(185,28,28,0.8)]"></div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-white">Building Real-World AI Apps</h4>
              <span className="text-sm font-semibold text-red-700 block mt-1">Present</span>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Continuously expanding my portfolio with production-grade AI systems, from automated support resolution engines to semantic code search tools.</p>
            </div>
          </div>
        </motion.div>
      </div >

    </section >
  );
};

export default About;