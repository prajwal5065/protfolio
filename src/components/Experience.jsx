import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    company: "OxiQ AI",
    companyDescription: "[Optional: A brief description of OxiQ AI]",
    role: "Gen AI Intern",
    duration: "June 1, 2024 – August 31, 2024",
    type: "[Remote / On-site]",
    summary: "Worked as a developer on a production-grade multi-agent AI system — a B2B lead-generation pipeline coordinating multiple agents through data collection, enrichment, validation, and scoring stages.",
    responsibilities: [
      "Built and debugged agents within a multi-agent pipeline (FastAPI backend, React/TypeScript frontend), diagnosing wiring bugs like incorrect dictionary keys, serialization failures, and missing callback pass-throughs",
      "Fixed provider-selection logic and resolved issues from deprecated model names and API rate-limit exhaustion",
      "Worked on adaptive concurrency and provider health-scoring for pipeline reliability",
      "Authored an architecture document for new pipeline components, presented for senior technical sign-off"
    ],
    techStack: ["FastAPI", "SQLite", "Supabase", "React", "TypeScript"]
  }
];

const Experience = () => {
  return (
    <section className="pt-32 mb-20 lg:min-h-screen px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-center text-gray-800 dark:text-white mb-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-red-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-red-700 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <FaBriefcase size={16} />
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-[#1a1d23] p-6 rounded-xl shadow-lg shadow-red-700/10 border border-red-700/20 hover:border-red-700/50 transition-colors text-left">
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
                    <h4 className="text-lg font-semibold text-red-700 mt-1">{exp.company}</h4>
                    {exp.companyDescription && exp.companyDescription !== "[Optional: A brief description of OxiQ AI]" && (
                       <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{exp.companyDescription}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">
                  <div className="flex items-center gap-2"><FaCalendarAlt className="text-red-700"/> {exp.duration}</div>
                  <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-red-700"/> {exp.type}</div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {exp.summary}
                </p>

                <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-gray-600 dark:text-gray-400 marker:text-red-700 mb-6">
                  {exp.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {exp.techStack.map((tech, i) => (
                    <span key={i} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-[10px] uppercase font-bold px-2 py-1 rounded-sm shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
