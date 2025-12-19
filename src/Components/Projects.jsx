import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import { FiGithub, FiExternalLink, FiStar, FiZap, FiAward } from "react-icons/fi";

// Image imports
import Job from "../assets/job.png";
import kitchen from "../assets/ss.png"; 
import Burger from "../assets/burger.png";
import port from "../assets/port.png";
import CCAIMG from "../assets/CCAIMG.png"
const projects = [
  {
    id: 1,
    title: "JOB HUNT",
    type: "FULL-STACK PLATFORM",
    description: "MERN Job Portal with real-time applications & admin dashboard",
    tech: ["REACT", "NODE", "MONGODB", "EXPRESS", "JWT"],
    github: "https://github.com/iAsadDev/Job-Hunt",
    live: "https://jobhuntportal-z.netlify.app",
    image: Job,
    level: "PRO",
    difficulty: 85,
    impact: 90
  },
  {
    id: 2,
    title: "KITCHENPRO",
    type: "E-COMMERCE SOLUTION",
    description: "Complete online store with payments & inventory management",
    tech: ["REACT", "STRIPE", "NODE", "MONGODB", "TAILWIND"],
    github: "https://github.com/iAsadDev/Kitchen-Products-Project.git",
    live: "https://kitchen-product.netlify.app/",
    image: kitchen,
    level: "PRO",
    difficulty: 80,
    impact: 85
  },
    {
    id: 4,
    title: "Cadet College Website",
    type: "WORDPRESS PROJECT",
    description: "A WordPress-based project for Cadet College Academy showcasing courses, events, and information.",
    tech: ["WORDPRESS", "PHP", "HTML", "CSS", "JS"],
    github: "", // leave empty if no GitHub repo
    live: "https://cca.edu.pk/",
    image: CCAIMG, // make sure you have imported your WordPress project image
    level: "PRO",
    difficulty: 70,
    impact: 85
},
  {
    id: 3,
    title: "BURGERHUB",
    type: "FOOD DELIVERY APP",
    description: "Food ordering platform with real-time tracking",
    tech: ["REACT", "NODE", "MONGODB", "EXPRESS", "CSS3"],
    github: "https://github.com/iAsadDev/Ecom-Burger-Shop-.git",
    live: "https://burger-asad.netlify.app/",
    image: Burger,
    level: "ADVANCED",
    difficulty: 75,
    impact: 80
  },
  {
    id: 5,
    title: "PORTFOLIO",
    type: "DEVELOPER SHOWCASE",
    description: "Interactive portfolio with animations & dark mode",
    tech: ["REACT", "FRAMER", "TAILWIND", "VITE"],
    github: "https://github.com/iAsadDev/Personal-Portfolio.git",
    live: "https://asadqayyum.netlify.app/",
    image: port,
    level: "CREATIVE",
    difficulty: 70,
    impact: 95
  }
  ,


]

// Memoized Background Components
const BackgroundGrid = () => (
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="grid grid-cols-10 grid-rows-10 gap-0.5 w-full h-full">
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="bg-yellow-500 rounded-xs" />
      ))}
    </div>
  </div>
);

const FloatingParticles = () => (
  <div className="absolute inset-0 pointer-events-none">
    {Array.from({ length: 8 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-0.5 h-0.5 bg-yellow-400 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -80, 0],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const arenaRef = useRef(null);

  const navigateProject = useCallback((direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveProject((prev) => (prev + direction + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating]);

  const nextProject = useCallback(() => navigateProject(1), [navigateProject]);
  const prevProject = useCallback(() => navigateProject(-1), [navigateProject]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextProject, prevProject]);

  const currentProject = projects[activeProject];

  return (
    <section id="projects" className="min-h-screen bg-black relative overflow-hidden">
      <BackgroundGrid />
      <FloatingParticles />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-6 sm:mb-8 lg:mb-12"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-3 sm:mb-4"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(245, 158, 11, 0.5)",
                "0 0 25px rgba(245, 158, 11, 0.7)", 
                "0 0 20px rgba(245, 158, 11, 0.5)"
              ] 
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            PROJECT ARENA
          </motion.h1>
          <motion.p 
            className="text-yellow-400/80 text-xs sm:text-sm lg:text-base font-light tracking-wide px-2 sm:px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            SELECT YOUR MISSION • USE ARROW KEYS TO NAVIGATE
          </motion.p>
        </motion.div>

        {/* Main Arena */}
        <div ref={arenaRef} className="relative min-h-[600px] sm:min-h-[500px] lg:min-h-[60vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 h-full items-center">
                
                {/* Project Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="relative bg-gray-900/90 backdrop-blur-md rounded-lg sm:rounded-xl lg:rounded-2xl border-2 border-yellow-500/50 p-3 sm:p-4 lg:p-6 shadow-2xl"
                >
                  {/* Level Badge */}
                  <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 bg-yellow-500 text-black px-2 sm:px-3 lg:px-4 py-1 rounded-full font-bold text-xs border border-black">
                    LEVEL: {currentProject.level}
                  </div>

                  {/* Project Image */}
                  <div className="relative mb-3 sm:mb-4 rounded-lg lg:rounded-xl overflow-hidden border border-yellow-400/30">
                    <motion.img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-32 sm:h-40 lg:h-48 object-cover"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-yellow-400 mb-1">
                        {currentProject.title}
                      </h3>
                      <p className="text-yellow-200/90 text-xs sm:text-sm font-medium">
                        {currentProject.type}
                      </p>
                    </div>
                  </div>

                  {/* Stats Bars */}
                  <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                    <div>
                      <div className="flex justify-between text-yellow-300 text-xs sm:text-sm mb-1">
                        <span>DIFFICULTY</span>
                        <span>{currentProject.difficulty}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${currentProject.difficulty}%` }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                          className="bg-red-500 h-1.5 sm:h-2 rounded-full border border-red-300/50"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-yellow-300 text-xs sm:text-sm mb-1">
                        <span>IMPACT</span>
                        <span>{currentProject.impact}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${currentProject.impact}%` }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                          className="bg-green-500 h-1.5 sm:h-2 rounded-full border border-green-300/50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                    {currentProject.tech.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.08, duration: 0.2 }}
                        className="px-1.5 sm:px-2 lg:px-2.5 py-0.5 sm:py-1 bg-yellow-500/20 border border-yellow-500/40 rounded text-yellow-300 text-xs font-semibold"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-3">
                    <motion.a
                      href={currentProject.github}
                      target="_blank"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 lg:py-2.5 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white rounded-lg font-semibold flex-1 justify-center transition-all text-xs sm:text-sm"
                    >
                      <FiGithub className="text-xs sm:text-sm lg:text-base" />
                      SOURCE
                    </motion.a>
                    <motion.a
                      href={currentProject.live}
                      target="_blank"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 lg:py-2.5 bg-yellow-500 hover:bg-yellow-600 border border-yellow-400 text-black rounded-lg font-semibold flex-1 justify-center transition-all text-xs sm:text-sm"
                    >
                      <FiExternalLink className="text-xs sm:text-sm lg:text-base" />
                      LAUNCH
                    </motion.a>
                  </div>
                </motion.div>

                {/* Project Description Side */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-white space-y-3 sm:space-y-4 px-2 sm:px-0"
                >
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-block"
                  >
                    <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-lg sm:rounded-xl p-2 sm:p-3 backdrop-blur-sm">
                      <FiZap className="text-lg sm:text-xl lg:text-2xl text-yellow-400" />
                    </div>
                  </motion.div>

                  <div>
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold text-yellow-400 mb-2 sm:mb-3">
                      MISSION BRIEFING
                    </h4>
                    
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <motion.div 
                      className="bg-black/40 border border-yellow-500/30 rounded-lg p-2 sm:p-3 text-center"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiStar className="text-base sm:text-lg lg:text-xl text-yellow-400 mx-auto mb-1" />
                      <div className="text-yellow-400 font-semibold text-xs sm:text-sm">PRODUCTION READY</div>
                    </motion.div>
                    <motion.div 
                      className="bg-black/40 border border-yellow-500/30 rounded-lg p-2 sm:p-3 text-center"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiAward className="text-base sm:text-lg lg:text-xl text-yellow-400 mx-auto mb-1" />
                      <div className="text-yellow-400 font-semibold text-xs sm:text-sm">FULL STACK</div>
                    </motion.div>
                  </div>

                  {/* Current Project Indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-yellow-400/60 text-xs font-light tracking-wide pt-2 border-t border-yellow-500/20"
                  >
                    PROJECT {activeProject + 1} OF {projects.length}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevProject}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 border border-yellow-400 text-black p-1.5 sm:p-2 lg:p-3 rounded-full font-bold shadow-lg z-20 text-xs sm:text-sm lg:text-base"
          >
            ‹
          </motion.button>

          <motion.button
            onClick={nextProject}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 border border-yellow-400 text-black p-1.5 sm:p-2 lg:p-3 rounded-full font-bold shadow-lg z-20 text-xs sm:text-sm lg:text-base"
          >
            ›
          </motion.button>
        </div>

        {/* Project Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-4 sm:mt-6 lg:mt-8"
        >
          <div className="flex justify-center gap-1.5 mb-2 sm:mb-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setActiveProject(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeProject 
                    ? 'bg-yellow-500 scale-125 shadow shadow-yellow-500/50' 
                    : 'bg-yellow-500/30 hover:bg-yellow-500/50'
                }`}
              />
            ))}
          </div>
          
          <motion.p
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-yellow-400/70 font-light text-xs sm:text-sm"
          >
            {activeProject + 1} / {projects.length} • READY FOR DEPLOYMENT
          </motion.p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-6 sm:mt-8 lg:mt-12"
        >
          <motion.a
            href="https://github.com/iAsadDev"
            target="_blank"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 border border-yellow-400 text-black font-bold rounded-lg transition-all duration-300 text-xs sm:text-sm lg:text-base"
          >
            <FiGithub className="text-sm sm:text-base lg:text-lg" />
            <span>EXPLORE ALL PROJECTS</span>
            <FiExternalLink className="text-sm sm:text-base lg:text-lg" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;