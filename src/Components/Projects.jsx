import { motion } from "framer-motion";
import Burger from "../assets/burger.png";
import port from "../assets/port.png";
import Job from "../assets/job.png";
import kitchen from "../assets/ss.png";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Job Hunt - MERN Stack Job Portal",
    description:
      "A modern job portal where seekers can apply and employers can post jobs. Features authentication, protected routes, and admin dashboard.",
    tags: ["React", "Tailwind", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/iAsadDev/Job-Hunt",
    live: "https://jobhuntportal-z.netlify.app",
    image: Job,
  },
  {
    title: "KitchenPro - E-commerce Store",
    description:
      "E-commerce platform for kitchen products with admin panel and integrated blog. Includes filtering, cart, and order management.",
    tags: ["React", "Tailwind", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/iAsadDev/Kitchen-Products-Project.git",
    live: "https://kitchen-product.netlify.app/",
    image: kitchen,
  },
  {
    title: "BurgerHub - Food Delivery App",
    description:
      "Fully responsive burger shop website with category filters, item modals, and blog section. Built for performance and UX.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/iAsadDev/Ecom-Burger-Shop-.git",
    live: "https://burger-asad.netlify.app/",
    image: Burger,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React and Tailwind CSS. Showcases projects and professional info with smooth animations.",
    tags: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/iAsadDev/Personal-Portfolio.git",
    live: "https://asadqayyum.netlify.app/",
    image: port,
  },
];

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 bg-white dark:bg-gray-900"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-yellow-500">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Here are some of my featured full-stack applications built with modern technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -5 }}
              className="group bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-yellow-500/50"
            >
              {/* Project Image */}
              <div className="h-48 sm:h-56 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    <FiGithub className="text-lg" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    <FiExternalLink className="text-lg" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Want to explore more of my work?
          </p>
          <a
            href="https://github.com/iAsadDev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-semibold shadow-md hover:shadow-yellow-500/30 transition-all"
          >
            Visit My GitHub
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;