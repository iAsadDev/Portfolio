import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiGit,
} from "react-icons/si";
import { FiCode, FiZap, FiAward } from "react-icons/fi";

const AboutMe = () => {
  const skills = [
    { name: "Next.js", icon: <SiNextdotjs />, category: "Frontend", level: 90 },
    { name: "React", icon: <SiReact />, category: "Frontend", level: 95 },
    { name: "Tailwind", icon: <SiTailwindcss />, category: "Frontend", level: 92 },
    { name: "Bootstrap", icon: <SiBootstrap />, category: "Frontend", level: 88 },
    { name: "HTML", icon: <SiHtml5 />, category: "Frontend", level: 98 },
    { name: "CSS", icon: <SiCss3 />, category: "Frontend", level: 96 },
    { name: "JavaScript", icon: <SiJavascript />, category: "Language", level: 94 },
    { name: "Python", icon: <SiPython />, category: "Language", level: 85 },
    { name: "C++", icon: <SiCplusplus />, category: "Language", level: 80 },
    { name: "Node.js", icon: <SiNodedotjs />, category: "Backend", level: 89 },
    { name: "Express.js", icon: <SiExpress />, category: "Backend", level: 87 },
    { name: "MongoDB", icon: <SiMongodb />, category: "Database", level: 83 },
    { name: "Git", icon: <SiGit />, category: "Tools", level: 91 },
  ];

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Athena Sols",
      period: "July 2025 – Present",
      description: "Building scalable full-stack web applications using Next.js, React.js, Node.js, and MongoDB.",
      highlights: [
        "Implemented SSR & API optimizations for faster load times",
        "Developed reusable UI systems using Tailwind CSS",
        "Collaborated with designers and backend engineers",
        "Integrated GitHub Actions for CI/CD automation",
      ],
    },
  ];

  const education = {
    degree: "BS Computer Science",
    institution: "GCUF Layyah Campus",
    period: "2022 – 2026",
  };

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-black relative overflow-hidden">
      
      {/* Project Section Style Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 grid-rows-20 gap-0.5 w-full h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-yellow-500 rounded-xs"
              animate={{ opacity: [0.05, 0.15, 0.05] }}
              transition={{ 
                duration: 3, 
                delay: Math.random() * 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-black rounded-full font-bold text-sm border border-black shadow-lg mb-6"
          >
            <FiCode className="text-base" />
            ABOUT ME
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-black text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            ABOUT <span className="text-yellow-500 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">ME</span>
          </motion.h2>

          <motion.p
            className="text-lg text-yellow-400/80 font-light tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            PASSIONATE DEVELOPER • CLEAN CODE • MODERN TECH
          </motion.p>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 bg-gray-900/90 backdrop-blur-md rounded-2xl border-2 border-yellow-500/50 p-8 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-xl p-3">
              <FiZap className="text-2xl text-yellow-400" />
            </div>
            <h3 className="text-2xl font-black text-yellow-400">
              EXPERIENCE
            </h3>
          </div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-black/40 rounded-xl p-6 border border-yellow-500/30"
            >
              <h4 className="text-xl font-black text-yellow-500 mb-1">
                {exp.role}
              </h4>
              <p className="text-yellow-400/90 text-sm font-medium mb-3">
                {exp.company} • <span className="text-yellow-300">{exp.period}</span>
              </p>
              <p className="text-gray-300 text-base mb-4">
                {exp.description}
              </p>
              <div className="space-y-2">
                {exp.highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 text-yellow-300/80 text-sm"
                  >
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education + Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gray-900/90 backdrop-blur-md rounded-2xl border-2 border-yellow-500/50 p-8 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-xl p-3">
                <FiAward className="text-2xl text-yellow-400" />
              </div>
              <h3 className="text-2xl font-black text-yellow-400">
                EDUCATION
              </h3>
            </div>

            <div className="bg-black/40 rounded-xl p-6 border border-yellow-500/30">
              <h4 className="text-xl font-black text-yellow-500 mb-1">
                {education.degree}
              </h4>
              <p className="text-yellow-400/90 text-sm font-medium mb-4">
                {education.institution} • <span className="text-yellow-300">{education.period}</span>
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-yellow-300/80 text-sm">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  Specialized in Software Engineering & Web Technologies
                </div>
                <div className="flex items-center gap-2 text-yellow-300/80 text-sm">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  Advanced Data Structures & Algorithms
                </div>
                <div className="flex items-center gap-2 text-yellow-300/80 text-sm">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  MERN Stack & Next.js Project Development
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gray-900/90 backdrop-blur-md rounded-2xl border-2 border-yellow-500/50 p-8 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-xl p-3">
                <div className="text-2xl text-yellow-400">⚡</div>
              </div>
              <h3 className="text-2xl font-black text-yellow-400">
                TECH ARSENAL
              </h3>
            </div>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-black/40 border border-yellow-500/30 rounded-xl p-4 flex flex-col items-center text-center hover:border-yellow-500/50 transition-all duration-300"
                >
                  <div className="text-2xl text-yellow-500 mb-2">
                    {skill.icon}
                  </div>
                  <h4 className="text-sm font-black text-yellow-400">
                    {skill.name}
                  </h4>
                  <p className="text-yellow-500/70 text-xs mt-1">
                    {skill.category}
                  </p>
                  <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: idx * 0.1 + 0.5, duration: 1 }}
                      className="h-1 rounded-full bg-yellow-500"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;