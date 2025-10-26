import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiCode } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👨‍💻' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-yellow-500/20 shadow-2xl' 
          : 'bg-black border-b border-yellow-500/10'
      }`}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-10 grid-rows-1 gap-1 w-full h-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="bg-yellow-500 rounded-xs" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Project Style */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <a 
              href="#home" 
              className="flex items-center gap-2 text-xl font-black text-white group"
              onClick={() => setActiveSection('home')}
            >
              <div className="bg-yellow-500 text-black p-1.5 rounded-lg border border-yellow-400">
                <FiCode className="text-sm" />
              </div>
              <span>ASAD</span>
              <span className="text-yellow-500 group-hover:scale-110 transition-transform">.</span>
            </a>
          </motion.div>

          {/* Desktop Navigation - Project Style */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-bold rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? 'bg-yellow-500 text-black border-yellow-500 shadow-lg shadow-yellow-500/30'
                        : 'text-yellow-400 border-yellow-500/30 hover:border-yellow-500 hover:bg-yellow-500/10'
                    }`}
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveSection(item.href.replace('#', ''))}
                  >
                    <span className="text-xs">{item.icon}</span>
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 rounded-lg border-2 border-yellow-400"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center justify-center p-2 rounded-lg border transition-all ${
                isOpen 
                  ? 'bg-yellow-500 text-black border-yellow-500' 
                  : 'text-yellow-400 border-yellow-500/30 hover:border-yellow-500'
              }`}
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Project Style */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-black/95 backdrop-blur-md border-t border-yellow-500/20"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-bold border transition-all ${
                    isActive
                      ? 'bg-yellow-500 text-black border-yellow-500 shadow-lg shadow-yellow-500/30'
                      : 'text-yellow-400 border-yellow-500/30 hover:border-yellow-500 hover:bg-yellow-500/10'
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection(item.href.replace('#', ''));
                  }}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm">{item.icon}</span>
                    {item.name}
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Floating Particles for Navbar */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;