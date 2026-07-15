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
          className="mt-8 flex justify-center space-x-4"
        >
          <Link
            to="/projects"
            className="px-3 md:px-6 py-3 font-semibold bg-red-700 text-white rounded-lg hover:bg-red-800 "
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-gray-800 font-semibold text-white rounded-lg hover:bg-gray-900 dark:bg-white dark:opacity-50 dark:text-black hover:dark:opacity-70"
          >
            Contact Me
          </Link>
        </motion.div>
      </div >

    </section >
  );
};

export default About;