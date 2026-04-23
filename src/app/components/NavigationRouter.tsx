import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export function NavigationRouter() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (!visible) return;
        const match = navItems.find((item) => item.href === `#${visible.target.id}`);
        if (match) setActiveSection(match.name);
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-slate-200/80 bg-white/85 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.35)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            <motion.button
              onClick={() => scrollToSection('#home')}
              className="text-xl font-semibold tracking-tight text-slate-950 md:text-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Umesh Raskoti
            </motion.button>

            <div className="hidden items-center gap-3 rounded-full border border-slate-200 bg-white/85 px-3 py-2 shadow-sm backdrop-blur md:flex">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.name
                      ? 'bg-slate-950 text-white'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                  </motion.div>
                </button>
              ))}
            </div>

            <div className="hidden md:flex">
              <button
                type="button"
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Connect
                <ArrowRight size={16} />
              </button>
            </div>

            <motion.button
              className="rounded-full border border-slate-200 bg-white/85 p-2 text-slate-900 shadow-sm backdrop-blur md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 z-40 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center space-y-6">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-2xl transition-colors ${
                    activeSection === item.name ? 'text-slate-950' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.div>
                </button>
              ))}
              <button
                type="button"
                onClick={() => scrollToSection('#contact')}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-white"
              >
                Connect
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
