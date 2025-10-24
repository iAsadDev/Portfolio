import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaInstagram } from "react-icons/fa6";
import image from "../assets/men.jpeg";

const Hero = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/iAsadDev' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/asad-qayyum-2646ba251' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/asad._qayyum' }
  ];

  return (
    <section id="home" className="relative bg-white dark:bg-gray-900 overflow-hidden">
      <div className="min-h-screen flex items-center pt-16 pb-12 sm:pt-24 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left order-2 md:order-1"
            >
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hi, I'm <span className="text-yellow-500">Asad</span>
              </motion.h1>

              <motion.h2
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Full Stack Developer
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                I build exceptional digital experiences using modern technologies. 
                Passionate about creating impactful and user-friendly web applications.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <a
                  href="https://www.linkedin.com/in/asad-qayyum-2646ba251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:shadow-yellow-500/40 transition-all duration-300"
                >
                  Get In Touch
                </a>
                <a
                  href="/Asad_Qayyum.pdf"
                  download
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  <FiDownload /> Download CV
                </a>
              </motion.div>

              <motion.div
                className="flex gap-4 justify-center md:justify-start mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                  >
                    {link.icon}
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center order-1 md:order-2 relative group"
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Main Image Container */}
                <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-yellow-500 shadow-xl shadow-yellow-500/30 transform group-hover:shadow-yellow-500/50 group-hover:scale-[1.02] transition-all duration-500">
                  <img
                    src={image}
                    alt="Asad - Full Stack Developer"
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-yellow-500/10" />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -z-10 w-full h-full rounded-full bg-yellow-100/40 dark:bg-yellow-900/20 top-3 left-3 group-hover:top-2 group-hover:left-2 transition-all duration-300" />
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-yellow-500/20"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-yellow-500/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl -z-0" />
    </section>
  );
};

export default Hero;