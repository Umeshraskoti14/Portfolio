import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Professional Skills',
    skills: [
      { name: 'Program Management', level: 90 },
      { name: 'Data Management', level: 85 },
      { name: 'Community Advocacy', level: 95 },
      { name: 'Project Coordination', level: 90 },
    ],
  },
  {
    title: 'Technical Skills',
    skills: [
      { name: 'MS Office Suite', level: 90 },
      { name: 'Kobo Collect', level: 80 },
      { name: 'Adobe Lightroom', level: 85 },
      { name: 'Canva Design', level: 90 },
    ],
  },
  {
    title: 'Specialized Training',
    skills: [
      { name: 'TOT Certification', level: 95 },
      { name: 'TBT Training', level: 90 },
      { name: 'Counseling', level: 85 },
      { name: 'Photography', level: 88 },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <section id="skills" className="relative overflow-hidden py-20 md:py-32" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.18),_transparent_25%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="relative text-center mb-16"
        >
          <div className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">Capabilities</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-950 mb-4">Skills shaped by field coordination, advocacy, and creative communication.</h2>
          <div className="w-20 h-1 bg-slate-900 mx-auto mb-8" />
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
            A practical toolkit built from program implementation, community engagement, facilitation, documentation, and visual storytelling.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-6 text-xl font-semibold text-slate-950">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <motion.div
                        className="h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-slate-900"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative mt-16 rounded-[2rem] border border-slate-200 bg-white/90 p-8 text-center shadow-sm backdrop-blur"
        >
          <h3 className="mb-6 text-2xl font-semibold text-slate-950">Tools, Platforms, and Working Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'MS Word', 'MS Excel', 'PowerPoint', 'Kobo Collect', 'Google Forms',
              'Microsoft Teams', 'Zoom', 'Adobe Lightroom', 'Photoshop', 'CapCut',
              'Canva', 'English', 'Nepali', 'Hindi', 'Magar',
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-slate-700 transition-all hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-md"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
