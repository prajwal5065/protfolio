import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticlesBackground from './ParticlesBackground';

const Home = ({ theme }) => {

    const banner_img = theme === "dark" ? "/banner_pic_red.png" : "/banner_pic.png";
    return (
        <section id="home" className="container mx-auto mt-20 md:mt-0 min-h-screen px-10 flex flex-col md:flex-row items-center justify-center md:justify-between relative">
            {/* Background Particles */}
            <ParticlesBackground theme={theme} />
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center md:text-left"
            >
                <h1 className='text-2xl lg:text-4xl text-white font-medium'>Hi, I'm</h1>
                <h1 className="text-8xl lg:text-[10rem] font-bold text-white tracking-tight mt-2">
                    <span className='text-black dark:text-red-700'>Pra</span>jwal
                </h1>
                <p className="mt-8 lg:text-xl px-8 md:p-0 text-gray-800 dark:text-white max-w-2xl">
                    An AI & Data Science engineer building smart, impactful, and scalable machine learning solutions.
                </p>
                
                <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
                    <Link
                        to="/projects"
                        className="inline-block px-8 py-3 font-semibold bg-red-700 text-white hover:bg-red-800 rounded-lg shadow-lg"
                    >
                        View My Work
                    </Link>
                    <a
                        href="/prajwal.pdf"
                        target="_blank"
                        className="inline-block px-8 py-3 font-semibold bg-transparent border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white rounded-lg transition-colors"
                    >
                        Download Resume
                    </a>
                </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.1 }}
                className="p-5 md:w-[28rem]"
            >
                <img src={banner_img} alt="Banner" className="w-64 md:w-full  p-3" />
            </motion.div>
        </section>
    );
};

export default Home;