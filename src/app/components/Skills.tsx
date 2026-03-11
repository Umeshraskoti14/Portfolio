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
    <section id="skills" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise. 
            I'm always learning and expanding my knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
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
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies & Tools I Use</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'MS Word', 'MS Excel', 'PowerPoint', 'Kobo Collect', 'Google Forms',
              'Microsoft Teams', 'Zoom', 'Adobe Lightroom', 'Photoshop', 'CapCut',
              'Canva', 'English', 'Nepali', 'Hindi', 'Magar',
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-5 py-2 bg-white border border-gray-200 text-gray-700 rounded-full hover:border-gray-900 hover:shadow-md transition-all"
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