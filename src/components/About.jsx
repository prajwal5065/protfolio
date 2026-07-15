import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCertificate, FaLaptopCode } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

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

        {/* Certifications & Learning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-left max-w-3xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">Certifications & Learning</h3>
          
          <div className="flex flex-col space-y-6">
            
            {/* Oracle Certification (Prominent) */}
            <div className="bg-white dark:bg-[#1a1d23] border border-red-700/30 p-6 rounded-xl shadow-lg shadow-red-700/10 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-700 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-bl-lg">
                Certified
              </div>
              <div className="shrink-0 w-40 h-auto hidden sm:block border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
                <img src="/oracle-cert.jpg" alt="Oracle Certificate" className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-full text-red-700 shrink-0 sm:hidden">
                    <FaCertificate size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white leading-tight">Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Oracle University <span className="mx-2">•</span> Sep 1, 2025</p>
                <img src="/oracle-cert.jpg" alt="Oracle Certificate" className="w-full h-auto mt-4 sm:hidden border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm" />
              </div>
              <a 
                href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=DB2AD68B82E0338B81D1F0BBDF8383291AD6B662302F28DB0775D85278A1C1D0" 
                target="_blank" 
                rel="noreferrer"
                className="mt-4 sm:mt-0 whitespace-nowrap px-4 py-2 bg-red-50 hover:bg-red-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-red-700 dark:text-red-400 text-sm font-semibold rounded-lg flex items-center gap-2 transition-colors border border-red-200 dark:border-gray-700"
              >
                Verify <FaArrowUpRightFromSquare size={12} />
              </a>
            </div>

            {/* Job Simulations (Lighter weight) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* TATA */}
              <div className="bg-gray-50 dark:bg-[#1f2229] p-5 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col h-full">
                <div className="w-full h-40 mb-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
                  <img src="/tata-cert.jpg" alt="TATA Certificate" className="w-full h-full object-cover object-top" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gray-200 dark:bg-gray-800 p-2 rounded text-gray-600 dark:text-gray-300">
                    <FaLaptopCode size={18} />
                  </div>
                  <h4 className="text-md font-bold text-gray-800 dark:text-white leading-tight">GenAI Powered Data Analytics</h4>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">TATA (Forage) <span className="mx-1">•</span> Sep 9, 2025</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                  Exploratory data analysis, risk profiling, AI delinquency prediction, and business reporting.
                </p>
                <div className="mt-4 text-[10px] text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-[#15171c] p-2 rounded font-mono">
                  Enrol: z9ktreLm2rGphMZon<br/>User: EohNcTw2TGDjT53Zt
                </div>
              </div>

              {/* Deloitte */}
              <div className="bg-gray-50 dark:bg-[#1f2229] p-5 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col h-full">
                <div className="w-full h-40 mb-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
                  <img src="/deloitte-cert.jpg" alt="Deloitte Certificate" className="w-full h-full object-cover object-top" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gray-200 dark:bg-gray-800 p-2 rounded text-gray-600 dark:text-gray-300">
                    <FaLaptopCode size={18} />
                  </div>
                  <h4 className="text-md font-bold text-gray-800 dark:text-white leading-tight">Data Analytics Job Simulation</h4>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Deloitte (Forage) <span className="mx-1">•</span> Oct 12, 2025</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                  Data analysis and forensic technology fundamentals.
                </p>
                <div className="mt-4 text-[10px] text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-[#15171c] p-2 rounded font-mono">
                  Enrol: xRma3pHoHf2pYm9NA<br/>User: EohNcTw2TGDjT53Zt
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div >

    </section >
  );
};

export default About;