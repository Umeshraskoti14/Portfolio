import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Palette, Rocket, Users } from 'lucide-react';
import { siteText } from '../content/siteText';
import { useUiPreferences } from '../context/UiPreferencesContext';
const profilePic = '/assets/About me/About Me.jpeg';
const featureIcons = [Code2, Palette, Rocket, Users];

export function About() {
  const { language } = useUiPreferences();
  const text = siteText[language];
  const features = text.about.features.map((feature, index) => ({
    ...feature,
    icon: featureIcons[index],
  }));
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <section id="about" className="bg-transparent py-20 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">{text.about.eyebrow}</div>
          <div className="mx-auto h-1 w-20 bg-slate-900" />
        </motion.div>

        <div className="mb-16 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_24px_80px_-42px_rgba(15,23,42,0.45)] sm:p-4"
          >
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-emerald-100 via-sky-100 to-amber-100" />
            <div className="relative flex aspect-[4/4.6] items-center justify-center overflow-hidden rounded-[1.6rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#e2e8f0_100%)]">
              <img
                src={profilePic}
                alt="Umesh Raskoti"
                className="h-full w-full object-contain p-4"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.backgroundColor = '#f3f4f6';
                }}
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/92 px-4 py-3 shadow-lg backdrop-blur sm:bottom-8 sm:left-8 sm:right-auto">
              <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{text.about.approachLabel}</div>
              <div className="mt-1 text-sm font-semibold text-slate-900">{text.about.approachValue}</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex h-full flex-col justify-center gap-6 rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur md:p-10"
          >
            {text.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-slate-600 leading-8">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="flex h-full flex-col rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <motion.div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon size={24} />
              </motion.div>
              <h4 className="mb-2 text-lg font-semibold text-slate-950">{feature.title}</h4>
              <p className="text-sm leading-7 text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
