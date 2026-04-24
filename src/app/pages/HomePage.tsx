import { animate, motion, useInView } from 'motion/react';
import { ArrowRight, Download, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { About } from '../components/About';
import { siteText } from '../content/siteText';
import { useUiPreferences } from '../context/UiPreferencesContext';
import { PortfolioPage } from './PortfolioPage';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';
const profilePic = '/assets/About me/Home Profile.jpeg';

function AnimatedCounter({ value, suffix = '', isInView }: { value: number; suffix?: string; isInView: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return undefined;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export function HomePage() {
  const { language } = useUiPreferences();
  const text = siteText[language];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div>
      <motion.section
        id="home"
        className="relative flex min-h-screen items-start overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.16),_transparent_22%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.12),_transparent_24%),linear-gradient(180deg,#f8fafc_0%,#ffffff_48%,#f1f5f9_100%)] pt-24 pb-12 dark:bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_22%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.14),_transparent_24%),linear-gradient(180deg,#020617_0%,#0f172a_48%,#111827_100%)] md:items-center md:pb-0"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute left-[-8rem] top-20 h-[24rem] w-[24rem] rounded-full bg-emerald-200/50 blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, 40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute right-[-6rem] top-36 h-[22rem] w-[22rem] rounded-full bg-sky-200/60 blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 70, 0],
              scale: [1, 1.18, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-[-8rem] left-1/3 h-[20rem] w-[20rem] rounded-full bg-amber-100/70 blur-3xl"
            animate={{
              x: [0, 36, 0],
              y: [0, -28, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:52px_52px] opacity-40" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="grid items-center gap-8 py-8 sm:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10"
          >
            <div className="max-w-3xl">
              <motion.div
                className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur sm:px-5"
                initial={{ opacity: 0, y: 26 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                {text.home.tagline}
              </motion.div>

              <motion.h1
                className="text-4xl font-semibold leading-[0.96] tracking-tight text-slate-950 sm:text-6xl md:text-7xl lg:text-[5.4rem]"
                initial={{ opacity: 0, y: 34 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
                transition={{ duration: 0.8, delay: 0.22 }}
              >
                Umesh Raskoti
              </motion.h1>

              <motion.div
                className="mt-8 grid gap-4 sm:grid-cols-3"
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.75, delay: 0.45 }}
              >
                <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
                  <div className="text-3xl font-semibold text-slate-950">
                    <AnimatedCounter value={3} suffix="+" isInView={isInView} />
                  </div>
                  <div className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-500">{text.home.stats.experience}</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
                  <div className="text-3xl font-semibold text-slate-950">
                    <AnimatedCounter value={4} isInView={isInView} />
                  </div>
                  <div className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-500">{text.home.stats.projects}</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
                  <div className="text-3xl font-semibold text-slate-950">
                    <AnimatedCounter value={1000} suffix="+" isInView={isInView} />
                  </div>
                  <div className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-500">{text.home.stats.reached}</div>
                </div>
              </motion.div>

              <motion.div
                className="mt-10 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{ duration: 0.8, delay: 0.55 }}
              >
                <motion.button
                  onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-white shadow-lg shadow-slate-950/15 transition sm:w-auto"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {text.home.explore}
                  <ArrowRight size={18} />
                </motion.button>
                <motion.a
                  href="/Umesh_Raskoti_Resume.pdf"
                  download
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/90 px-7 py-4 text-slate-900 shadow-sm backdrop-blur transition hover:border-slate-400 hover:bg-white sm:w-auto"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {text.home.downloadCv}
                  <Download size={18} />
                </motion.a>
              </motion.div>

              <motion.div
                className="mt-10 flex flex-wrap items-center gap-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {[
                  { icon: Facebook, href: 'https://www.facebook.com/twin.raskoti.3', label: text.home.socials.facebook },
                  { icon: Instagram, href: 'https://www.instagram.com/umesh_raskoti?igsh=MW9qOWJ3aDYzdG83MQ==', label: text.home.socials.instagram },
                  { icon: Linkedin, href: 'https://linkedin.com', label: text.home.socials.linkedIn },
                  { icon: Mail, href: 'mailto:umeshraskoti14@gmail.com', label: text.home.socials.email },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/85 text-slate-600 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-slate-300 hover:text-slate-950"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.35, delay: 0.82 + index * 0.08 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.9, delay: 0.36 }}
              className="relative mx-auto mt-2 w-full max-w-xl lg:mt-0"
            >
              <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white/90 p-4 shadow-[0_28px_80px_-42px_rgba(15,23,42,0.55)] backdrop-blur">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-emerald-100 via-sky-100 to-amber-100" />
                <div className="relative rounded-[1.8rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#e2e8f0_100%)] p-5">
                  <img
                    src={profilePic}
                    alt="Umesh Raskoti portrait"
                    className="mx-auto h-[18rem] w-full rounded-[1.5rem] object-contain sm:h-[22rem] lg:h-[25rem]"
                  />
                </div>
              </div>

              <motion.div
                className="absolute left-3 top-4 max-w-[11rem] rounded-2xl border border-slate-200 bg-white/90 px-3 py-2.5 shadow-lg backdrop-blur sm:-left-4 sm:top-8 sm:max-w-none sm:p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{text.home.currentFocusLabel}</div>
                <div className="mt-2 text-xs font-semibold text-slate-900 sm:text-sm">{text.home.currentFocusValue}</div>
              </motion.div>

              <motion.div
                className="absolute bottom-3 right-3 rounded-2xl bg-slate-950 px-4 py-3 text-white shadow-xl sm:-bottom-4 sm:right-0 sm:px-5 sm:py-4"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-xs uppercase tracking-[0.18em] text-slate-300">{text.home.basedInLabel}</div>
                <div className="mt-2 text-base font-semibold sm:text-lg">{text.home.basedInValue}</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1, y: [0, 10, 0] } : { opacity: 0 }}
          transition={{ y: { duration: 2, repeat: Infinity }, opacity: { delay: 1.5 } }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-slate-500">{text.home.scroll}</span>
            <div className="flex h-10 w-6 justify-center rounded-full border-2 border-slate-400">
              <motion.div
                className="mt-2 h-2 w-1 rounded-full bg-slate-600"
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
