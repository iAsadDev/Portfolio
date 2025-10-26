import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi';
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const socialLinks = [
    { 
      icon: <FiGithub />, 
      url: 'https://github.com/iAsadDev',
      name: 'GitHub'
    },
    { 
      icon: <FiLinkedin />, 
      url: 'https://www.linkedin.com/in/asad-qayyum-2646ba251',
      name: 'LinkedIn'
    },
    { 
      icon: <FaInstagram />, 
      url: 'https://www.instagram.com/asad._qayyum',
      name: 'Instagram'
    }
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden border-t border-yellow-500/20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-10 grid-rows-2 gap-1 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-yellow-500 rounded-xs"
              animate={{ opacity: [0.05, 0.1, 0.05] }}
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

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-6">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <motion.h3 
                className="text-2xl font-black text-white mb-2"
                whileHover={{ scale: 1.05 }}
              >
                ASAD<span className="text-yellow-500">.</span>
              </motion.h3>
              <p className="text-yellow-400/80 text-sm font-medium">
                Full Stack Developer
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center lg:items-end gap-3"
            >
              <motion.a
                href="mailto:i.am.asad586@gmail.com"
                className="flex items-center gap-3 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-yellow-400 hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail className="w-4 h-4" />
                <span className="font-medium text-sm">malikasad0155@gmail.com</span>
                <FiExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 border border-yellow-500/20 rounded-lg text-yellow-400 hover:text-yellow-300 hover:border-yellow-500/40 hover:bg-gray-700 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -1 }}
                    whileTap={{ scale: 0.9 }}
                    title={link.name}
                  >
                    <div className="text-lg">{link.icon}</div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-6 border-t border-yellow-500/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
              
              {/* Copyright */}
              <motion.span 
                className="text-yellow-400/60 text-center md:text-left"
                whileHover={{ scale: 1.02 }}
              >
                © {new Date().getFullYear()} Asad Qayyum. All rights reserved.
              </motion.span>

              {/* Built With Love */}
              <motion.div
                className="flex items-center gap-2 text-yellow-400/60"
                whileHover={{ scale: 1.05 }}
              >
                <span>Built with</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-red-500"
                >
                  ❤️
                </motion.span>
                <span>using React & Tailwind</span>
              </motion.div>

              {/* Quick Links */}
              <motion.div 
                className="flex gap-4 text-yellow-400/60 text-xs"
                whileHover={{ scale: 1.02 }}
              >
                <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
                <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
                <a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a>
              </motion.div>
            </div>
          </motion.div>

          {/* Achievement Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-6"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-xs font-bold"
              whileHover={{ scale: 1.05 }}
            >
              <span>🚀</span>
              <span>BUILDING AWESOME STUFF SINCE 2022</span>
              <span>🔥</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}