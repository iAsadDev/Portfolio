import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiDownload, FiGithub, FiLinkedin, FiArrowRight, FiCode } from 'react-icons/fi';
import { FaInstagram } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";

import image from "../assets/men.jpeg";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { damping: 20, stiffness: 100 });
  const mouseYSpring = useSpring(y, { damping: 20, stiffness: 100 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

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
    <section id="home" className="relative min-h-screen bg-black overflow-hidden">
      
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

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            
            {/* LEFT CONTENT - Project Section Style */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left space-y-6"
            >
              {/* Welcome Badge - Project Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-black rounded-full font-bold text-sm border border-black shadow-lg"
              >
                <FiCode className="text-base" />
                FULL STACK DEVELOPER
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <motion.h1
                  className="text-5xl md:text-6xl font-black text-white leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  <span className="block">HI, I'M</span>
                  <span className="text-yellow-500 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    ASAD
                  </span>
                </motion.h1>

                <motion.h2
                  className="text-xl text-yellow-400/80 font-light tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  BUILDING THE FUTURE WITH <span className="text-yellow-500 font-semibold">CODE</span>
                </motion.h2>
              </div>

              {/* Description */}
              <motion.p
                className="text-lg text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
              >
                I create <span className="text-yellow-500 font-semibold">digital experiences</span> that 
                blend innovative design with cutting-edge technology. Currently crafting amazing 
                products at <span className="text-yellow-500 font-semibold">Athena Sols</span>.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-xl shadow-2xl shadow-yellow-500/30 transition-all duration-300 flex items-center gap-3"
                >
                  <span>Let's Build Together</span>
                  <FiArrowRight className="text-lg" />
                </motion.a>

                <motion.a
                  href="/Asad_Qayyum.pdf"
                  download
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-bold rounded-xl flex items-center gap-3 justify-center transition-all duration-300"
                >
                  <FiDownload className="text-lg" />
                  <span>Download CV</span>
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex items-center gap-6 pt-8 justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.7 }}
              >
                <div className="text-yellow-400/70 font-semibold text-sm">
                  CONNECT WITH ME →
                </div>
                <div className="flex gap-3">
                  {socialLinks.map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-gray-800 border border-yellow-500/30 rounded-xl text-yellow-400 hover:text-yellow-300 hover:border-yellow-500 transition-all duration-300 shadow-lg"
                      title={link.name}
                    >
                      <div className="text-xl">{link.icon}</div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE - Project Section Style */}
            <motion.div
              ref={ref}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="flex justify-center relative group cursor-pointer"
            >
              <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                {/* Main Image Container */}
                <div 
                  className="relative w-full h-full overflow-hidden rounded-3xl border-2 border-yellow-500/50 shadow-2xl shadow-yellow-500/20 transform transition-all duration-500 group-hover:shadow-yellow-500/40 group-hover:border-yellow-500"
                  style={{
                    transform: isHovered ? 'translateZ(30px)' : 'translateZ(0px)',
                  }}
                >
                  <motion.img
                    src={image}
                    alt="Asad Qayyum - Full Stack Developer"
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                    animate={{
                      scale: isHovered ? 1.05 : 1,
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-yellow-500/10" />
                </div>
                
                {/* Floating Tech Badges - Project Style */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-yellow-500 text-black px-4 py-2 rounded-xl font-black text-xs border-2 border-white shadow-2xl"
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    transform: 'translateZ(20px)',
                  }}
                >
                  <SiNextdotjs className="inline mr-1" />
                  NEXT.JS
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-gray-900 text-yellow-500 px-4 py-2 rounded-xl font-black text-xs border-2 border-yellow-500 shadow-2xl"
                  animate={{
                    y: [0, 8, 0],
                    rotate: [0, -3, 3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  style={{
                    transform: 'translateZ(15px)',
                  }}
                >
                  FULL STACK
                </motion.div>

                {/* Background Glow */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-yellow-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.7 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-yellow-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;