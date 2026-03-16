import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top } = e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    setCursorPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section className="container mx-auto px-6 lg:flex lg:justify-between gap-5 lg:items-center lg:mt-40 lg:mb-20">
      {/* About */}
      <div className="max-w-3xl py-52 text-center lg:text-left ">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-gray-800 dark:text-gray-200"
        >
          About Me
        </motion.h2>
        {/* Image container for mobile*/}
        <div className="mt-10 mx-auto w-3/5 md:hidden">
          <div className="relative">
            {/* image */}
            <motion.img
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              src="C:\Users\Admin\Desktop\Prajwal-profolio\my-portfolio\public\my-picture.png"
              alt="My picture"
              className="rounded-lg w-full"
            />
          </div>
        </div>
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
          className="mt-8 flex justify-center lg:justify-start space-x-4"
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
      {/* Image container for desktop */}
      <div
        className="hidden md:block w-2/5 "
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative">
          {/* image */}
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            src="my-picture.png"
            alt="coding"
            className="rounded-lg w-full"
          />

          {/* Invert Mask */}
          {isHovering && (
            <div
              className="absolute pointer-events-none"
              style={{
                left: `${cursorPosition.x - 75}px`,
                top: `${cursorPosition.y - 75}px`,
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'white',
                mixBlendMode: 'hue',
              }}
            />
          )}
        </div>
      </div>
    </section >
  );
};

export default About;