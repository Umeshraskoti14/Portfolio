import { motion, useInView } from 'motion/react';
import { ArrowRight, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { useRef } from 'react';
import { About } from '../components/About';
import { PortfolioPage } from './PortfolioPage';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';

export function HomePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });

  return (
    <div>
      <motion.section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 overflow-hidden pt-20"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Enhanced Animated Background with Glowing Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary Glowing Orbs */}
          <motion.div
            className="absolute top-10 left-5 w-80 h-80 bg-gradient-to-br from-purple-400 via-purple-300 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 shadow-2xl"
            animate={{
              x: [0, 150, -100, 80, 0],
              y: [0, 100, -80, 60, 0],
              scale: [1, 1.3, 1.1, 1.2, 1],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Secondary Glowing Orb with Lighting Effect */}
          <motion.div
            className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-br from-pink-400 via-rose-300 to-orange-300 rounded-full mix-blend-screen filter blur-3xl opacity-55 shadow-2xl"
            animate={{
              x: [0, -180, 120, -60, 0],
              y: [0, 80, -100, 70, 0],
              scale: [1, 1.25, 1.15, 1.1, 1],
            }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Tertiary Glowing Orb */}
          <motion.div
            className="absolute -bottom-10 -left-20 w-96 h-96 bg-gradient-to-br from-cyan-400 via-blue-300 to-purple-300 rounded-full mix-blend-screen filter blur-3xl opacity-50 shadow-2xl"
            animate={{
              x: [0, 100, -150, 50, 0],
              y: [0, -100, 80, -60, 0],
              scale: [1, 1.2, 1.1, 1.15, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Accent Travelling Light Orb */}
          <motion.div
            className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300 rounded-full mix-blend-add filter blur-2xl opacity-45 shadow-xl"
            animate={{
              x: [0, 200, -200, 100, 0],
              y: [0, -150, 150, -80, 0],
              scale: [1, 1.4, 1.2, 1.3, 1],
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Fast Moving Light Accent */}
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-violet-400 to-pink-300 rounded-full mix-blend-lighten filter blur-2xl opacity-40 shadow-lg"
            animate={{
              x: [0, 250, -250, 150, 0],
              y: [0, 120, -120, 80, 0],
              scale: [1, 1.5, 1, 1.2, 1],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Ultra Blur Background Depth Layer */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-100/20 to-transparent pointer-events-none"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-6 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm md:text-base shadow-lg">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                className="block mb-2"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Umesh
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto]"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                Raskoti
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl text-gray-700 mb-6 font-light"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Social Activist & Photographer
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Leading with purpose
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6 justify-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button
                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>

            <motion.div
              className="flex gap-6 justify-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:umeshraskoti14@gmail.com', label: 'Gmail' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href.startsWith('http') ? social.href : undefined}
                  {...(social.href.startsWith('http') && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                  {...(!social.href.startsWith('http') && {
                    onClick: (e) => {
                      e.preventDefault();
                      window.location.href = social.href;
                    },
                  })}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-gray-600 hover:text-gray-900 hover:bg-white transition-all shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.2, rotate: 5, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1, y: [0, 10, 0] } : { opacity: 0 }}
          transition={{ y: { duration: 2, repeat: Infinity }, opacity: { delay: 1.5 } }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-500 text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-2 bg-gray-600 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      <About />
      <PortfolioPage />
      <Skills />
      <Contact />
    </div>
  );
}