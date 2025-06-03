import { motion } from "framer-motion";
import {
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

const AboutMe = () => {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" />, category: "Language" },
    { name: "Python", icon: <SiPython className="text-yellow-500" />, category: "Language" },
    { name: "C++", icon: <SiCplusplus className="text-yellow-500" />, category: "Language" },
    { name: "HTML", icon: <SiHtml5 className="text-yellow-500" />, category: "Frontend" },
    { name: "CSS", icon: <SiCss3 className="text-yellow-500" />, category: "Frontend" },
    { name: "React", icon: <SiReact className="text-yellow-500" />, category: "Frontend" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-yellow-500" />, category: "Frontend" },
    { name: "Bootstrap", icon: <SiBootstrap className="text-yellow-500" />, category: "Frontend" },
    { name: "Node.js", icon: <SiNodedotjs className="text-yellow-500" />, category: "Backend" },
    { name: "Express.js", icon: <SiExpress className="text-yellow-500" />, category: "Backend" },
    { name: "MongoDB", icon: <SiMongodb className="text-yellow-500" />, category: "Database" },
    { name: "Git", icon: <SiGit className="text-yellow-500" />, category: "Tools" },
  ];

  const education = {
    degree: "BS Computer Science",
    institution: "GCUF Layyah Campus",
    period: "2022 – 2026",
    description: "Specializing in software engineering with advanced coursework in web technologies, algorithms, and system design."
  };

  const summary = `I'm a passionate full-stack developer with expertise in modern JavaScript frameworks. I specialize in building high-performance web applications with clean architecture and intuitive user interfaces. My work focuses on creating seamless digital experiences through innovative solutions.`;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="about"
      className="py-20 px-6 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          About <span className="text-yellow-500">Me</span>
        </motion.h2>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div>
            {/* Summary */}
            <Section title="👨‍💻 Professional Summary">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                {summary}
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Currently enhancing my skills through academic projects while building personal projects to showcase my abilities. Committed to writing clean, efficient code and staying updated with industry trends.
              </p>
            </Section>

            {/* Education */}
            <Section title="🎓 Education">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border border-yellow-500/30 hover:border-yellow-400/60 shadow-md mb-6 transition-all duration-300">
                <h4 className="text-xl font-semibold text-yellow-500">{education.degree}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 italic mb-2">
                  {education.institution} | {education.period}
                </p>
                <p className="text-gray-700 dark:text-gray-300">{education.description}</p>
              </div>
            </Section>
          </div>

          {/* Right Column - Skills */}
          <div>
            <Section title="🛠️ Technical Skills">
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
              >
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { type: "spring", stiffness: 100, damping: 12 },
                      },
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 8px 20px rgba(245, 158, 11, 0.15)",
                    }}
                    className="bg-gray-100 dark:bg-gray-800 border border-yellow-500/30 hover:border-yellow-400/60 rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-sm transition-all duration-300"
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">{skill.name}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{skill.category}</p>
                  </motion.div>
                ))}
              </motion.div>
            </Section>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// Reusable Section
const Section = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
      <span className="text-yellow-500">#</span> {title}
    </h3>
    <div>{children}</div>
  </div>
);
 
export default AboutMe;