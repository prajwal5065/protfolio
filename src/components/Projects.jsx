import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { GoRepo } from "react-icons/go";

const projects = [
  {
    image: "/internship-matcher.png",
    title: "Smart Internship Matcher",
    description:
      "A TypeScript-based smart matching system that connects students with relevant internship opportunities. It uses intelligent filtering and matching logic to recommend the best-fit internships and helps automate the student–employer selection process.",
    techStack: ["TypeScript", "React", "Node.js"],
    badge: "Full Stack App",
    category: "Full Stack",
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
    techStack: ["JavaScript", "NLP", "Machine Learning"],
    badge: "AI Model",
    category: "AI & ML",
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
    techStack: ["Python", "Hugging Face", "NLP"],
    badge: "AI Assistant",
    category: "AI & ML",
    links: {
      live: "https://lnkd.in/di6SxFuY",
      github: " https://lnkd.in/dDwbfziJ",
    },
  },
  {
    image: "/map_project.png",
    title: "MAP — Multi-Agent AI Automation Platform",
    description:
      "A production-grade multi-agent AI orchestration platform. Implements a Planner → Executor → Analyzer → Memory pipeline using LangGraph stateful graphs, with FAISS/Chroma-backed RAG memory per user. Includes a confidence-scored evaluation stage that automatically re-executes low-confidence runs, plus a circuit breaker over all LLM calls with a BentoML-served fallback model for resilience.",
    techStack: ["LangGraph", "FastAPI", "Redis", "PostgreSQL"],
    badge: "Backend Project",
    category: "AI & ML",
    links: {
      live: "https://lnkd.in/g8sCCVYn",
      github: "https://github.com/Yad4o/MAP",
    },
  },
  {
    image: "/srs_project.png",
    title: "SRS — Automated Customer Support Resolution",
    description:
      "A confidence-based decision engine that automatically resolves customer support tickets above a set confidence threshold or escalates them to a human agent. Uses TF-IDF similarity search to reuse solutions from resolved ticket history instead of solving from scratch. Built with full RBAC, JWT authentication, and a layered, test-covered backend architecture.",
    techStack: ["FastAPI", "SQLAlchemy", "TF-IDF"],
    badge: "Backend Project",
    category: "AI & ML",
    links: {
      live: "https://github.com/Yad4o/SRS",
      github: "https://github.com/Yad4o/SRS",
    },
  },
  {
    image: "/repomind_project.png",
    title: "RepoMind AI",
    description:
      "A RAG-based repository intelligence tool that chunks and embeds an entire codebase for semantic search and AI-powered Q&A. Went through a full security and architecture audit that surfaced and fixed issues like path traversal and CORS misconfiguration, along with iterative improvements to retrieval accuracy.",
    techStack: ["FastAPI", "Next.js", "FAISS"],
    badge: "Full Stack App",
    category: "Full Stack",
    links: {
      live: "https://github.com/prajwal5065/RepoMind-AI",
      github: "https://github.com/prajwal5065/RepoMind-AI",
    },
  },
  {
    image: "/persona_twin_project.png",
    title: "Persona Twin",
    description:
      "A RAG-based digital twin that retrieves from a personal knowledge base to answer questions and respond in an individual's own communication style. Combines vector search over stored content with generation so responses stay grounded in real material instead of sounding generic.",
    techStack: ["Python", "RAG", "Vector Search"],
    badge: "AI Model",
    category: "AI & ML",
    links: {
      live: "https://lnkd.in/gk7Bf6cb",
      github: "https://github.com/prajwal5065/Persona-Twin",
    },
  },
  {
    image: "/reimbursement_project.png",
    title: "Reimbursement System",
    description:
      "A reimbursement management platform with automated approval workflows, built to streamline how reimbursement requests are submitted, reviewed, and approved. Includes structured request tracking from submission through to payout.",
    techStack: ["React", "TypeScript", "Supabase"],
    badge: "Full Stack App",
    category: "Full Stack",
    links: {
      live: "https://github.com/Yad4o/reimbursement-system",
      github: "https://github.com/Yad4o/reimbursement-system",
    },
  },
  {
    image: "/movie_project.png",
    title: "Movie Recommendation System",
    description:
      "A movie recommendation engine that suggests titles based on genre, mood, and release decade preferences. Built as a lightweight full-stack app with a simple, fast recommendation flow.",
    techStack: ["React", "Vite", "Flask"],
    badge: "Full Stack App",
    category: "Full Stack",
    links: {
      live: "https://github.com/prajwal5065/Movie-recommendation",
      github: "https://github.com/prajwal5065/Movie-recommendation",
    },
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  return (
    <section className="pt-32 mb-20 lg:min-h-screen">
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

        {/* Filter Tabs */}
        <div className="mt-8 flex justify-center space-x-3 px-4">
          {["All", "AI & ML", "Full Stack"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                filter === cat
                  ? "bg-red-700 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-[#1a1d23] text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Container */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="transition-transform duration-200 md:hover:scale-105"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-100 dark:bg-[#1a1d23] p-6 rounded-lg shadow-lg shadow-red-300 dark:shadow-gray-400 h-full flex flex-col justify-between"
              >
                <div className="flex flex-col flex-grow">
                  {/* Image Container */}
                  <div className="relative w-full mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute top-2 right-2 bg-red-700 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg opacity-90">
                      {project.badge}
                    </div>

                    <a
                      href={project.links.live}
                      target="_blank"
                      className="hidden absolute inset-0 bg-black bg-opacity-50 md:flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 rounded-lg"
                    >
                      <FaArrowUpRightFromSquare className="text-red-400 text-3xl drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
                    </a>
                  </div>

                  {/* Project Info */}
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-[10px] uppercase font-bold px-2 py-1 rounded-sm shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm mt-4 text-gray-600 dark:text-slate-300 flex-grow">
                    {project.description}
                  </p>
                </div>

                {/* Links */}
                <div className="flex flex-col space-y-3 mt-6 md:space-y-0 md:space-x-4 md:flex-row">
                  <a
                    href={project.links.github}
                    target="_blank"
                    className="w-full md:w-auto text-xs flex justify-center items-center gap-2 px-4 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 font-semibold"
                  >
                    {project.links.live === project.links.github ? "View Repository" : "Visit Client Side"} <GoRepo />
                  </a>
                  {project.links.server && (
                    <a
                      href={project.links.server}
                      target="_blank"
                      className="w-full md:w-auto text-xs flex justify-center items-center gap-2 px-4 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 font-semibold"
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
