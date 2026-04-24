import { motion, useInView } from 'motion/react';
import { ArrowUpRight, Heart } from 'lucide-react';
import { useRef } from 'react';
import { siteText } from '../content/siteText';
import { useUiPreferences } from '../context/UiPreferencesContext';

export function Footer() {
  const { language } = useUiPreferences();
  const text = siteText[language];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[linear-gradient(180deg,#0f172a_0%,#020617_100%)] py-14 text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8 md:grid-cols-[1fr_auto_auto] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{text.footer.eyebrow}</div>
            <p className="mt-3 flex items-center gap-2 text-slate-300">
              {text.footer.madeWith} <Heart size={16} className="text-red-500" fill="currentColor" /> {text.footer.by}{' '}
              <span className="text-white font-semibold">Umesh Raskoti</span>
            </p>
            <p className="mt-2 max-w-md text-sm leading-7 text-slate-400">
              {text.footer.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 md:justify-start"
          >
            {[
              { name: text.footer.home, href: '#home' },
              { name: text.footer.about, href: '#about' },
              { name: text.footer.portfolio, href: '#portfolio' },
              { name: text.footer.skills, href: '#skills' },
              { name: text.footer.contact, href: '#contact' }
            ].map((item) => (
              <a key={item.name} href={item.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                <motion.div
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.div>
              </a>
            ))}
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-slate-900 transition-colors hover:bg-slate-100 sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {text.footer.backToTop}
            <ArrowUpRight size={16} />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-slate-400"
        >
          <p>© {new Date().getFullYear()} Umesh Raskoti. {text.footer.rights}</p>
        </motion.div>
      </div>
    </footer>
  );
}
