import { motion, useInView } from 'motion/react';
import { Heart } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router';

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <p className="flex items-center gap-2 text-gray-400">
              Made with <Heart size={16} className="text-red-500" fill="currentColor" /> by{' '}
              <span className="text-white font-semibold">Umesh Raskoti</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-6"
          >
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Portfolio', path: '/portfolio' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <Link key={item.name} to={item.path}>
                <motion.div
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Back to Top
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm"
        >
          <p>© {new Date().getFullYear()} Umesh Raskoti. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}