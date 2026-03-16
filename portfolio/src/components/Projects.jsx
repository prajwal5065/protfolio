import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaArrowRight } from "react-icons/fa6";
import { GoRepo } from "react-icons/go";

const projects = [
  {
    image: "/internship-matcher.png",
    title: "Smart Internship Matcher",
    description:
      "A TypeScript-based smart matching system that connects students with relevant internship opportunities. It uses intelligent filtering and matching logic to recommend the best-fit internships and helps automate the student–employer selection process.",
    links: {
      live: "https://smart-internship-matcher.vercel.app/",
      github: "https://github.com/prajwal5065/smart-internship-matcher",
      server: "https://github.com/prajwal5065/smart-internship-matcher",
    },
  },
  {
    image: "/spam detector.jpg",
    title: "Spam Detector AI",
    description:
      "A machine-learning powered text classifier built using JavaScript, NLP techniques, and custom preprocessing to distinguish spam messages from legitimate ones in real time. It provides fast predictions with a simple, user-friendly interface.",
    links: {
      live: "https://www.linkedin.com/feed/update/urn:li:activity:7389705475203796992/",
      github: "https://github.com/prajwal5065/Spam-Detector",
    },
  },
  {
    image: "/my-medical-assistance.png",
    title: "Medical AI Assistant",
    description:
      "An AI-powered medical query assistant built using Python and Hugging Face NLP models. It provides helpful preliminary medical guidance by understanding user questions and generating accurate, context-aware responses. The system is deployed as an interactive app on Hugging Face Spaces.",
    links: {
      live: "https://lnkd.in/di6SxFuY",
      github: " https://lnkd.in/dDwbfziJ",
    },
  },
  
];

const Projects = () => {
  return (
    <section className="pt-32 mb-20 lg:h-screen">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-center text-gray-800 dark:text-white"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600 dark:text-slate-300 text-center max-w-2xl mx-auto px-10"
        >
          Here are some projects I've developed{" "}
          <span className="font-semibold text-red-700">
            during my learning journey.
          </span>
        </motion.p>
        {/* Projects Container */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="transition-transform duration-200 md:hover:scale-105"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-100 dark:bg-[#1a1d23] p-6 rounded-lg shadow-lg shadow-red-300 dark:shadow-gray-400 md:h-full flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative w-full mb-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />

                  <a
                    href={project.links.live}
                    target="_blank"
                    className="hidden absolute inset-0 bg-black bg-opacity-50 md:flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 rounded-lg"
                  >
                    <FaArrowUpRightFromSquare className="text-red-400 text-3xl drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
                  </a>
                </div>

                {/* Project Info */}
                <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm mt-2 text-gray-600 dark:text-slate-300">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex flex-col space-y-3 mt-4 md:space-y-0 md:space-x-4 md:flex-row">
                  <a
                    href={project.links.github}
                    target="_blank"
                    className="w-full md:w-auto text-xs flex justify-center items-center gap-2 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 font-semibold"
                  >
                    Visit Client Side <GoRepo />
                  </a>
                  {project.links.server && (
                    <a
                      href={project.links.server}
                      target="_blank"
                      className="w-full md:w-auto text-xs flex justify-center items-center gap-2 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 font-semibold"
                    >
                      Visit Server Side <GoRepo />
                    </a>
                  )}
                </div>

                {/* Mobile Live Link */}
                <a
                  href={project.links.live}
                  target="_blank"
                  className="md:hidden flex justify-center items-center gap-2 mt-4 w-full border border-red-700 text-red-500 text-lg rounded-lg py-2"
                >
                  View Live <FaArrowUpRightFromSquare />
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
