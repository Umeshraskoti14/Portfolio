import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { useRef, useEffect } from 'react';
import { Code2, Palette, Rocket, Users } from 'lucide-react';
import profilePic from '../../assets/Umesh.png';

function AnimatedCounter({ value, isInView }: { value: number; isInView: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, { duration: 2, ease: 'easeOut' });
      return animation.stop;
    }
    return undefined;
  }, [isInView, value, count]);

  return <motion.span>{rounded}</motion.span>;
}

const features = [
  {
    icon: Code2,
    title: 'Program Coordination',
    description: 'Expert in organizing and managing social development programs and community initiatives.',
  },
  {
    icon: Palette,
    title: 'Advocacy & Training',
    description: 'Certified in TOT and TBT, facilitating awareness sessions and community engagement.',
  },
  {
    icon: Rocket,
    title: 'Leadership',
    description: 'Best Leadership Award 2023 by JCI Nepal, with proven track record in team management.',
  },
  {
    icon: Users,
    title: 'Community Impact',
    description: 'Passionate about creating sustainable social change through collaborative efforts.',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <section id="about" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square bg-gray-100 flex items-center justify-center"
          >
            <img
              src={profilePic}
              alt="Umesh Raskoti"
              className="w-full h-full object-contain p-4"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.style.backgroundColor = '#f3f4f6';
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Social Impact Through Multiple Lenses
            </h3>
            <p className="text-gray-600 mb-4">
              As a dedicated Social Work professional, SRHR Youth Champion, and passionate photographer, 
              I bring a unique perspective to community development. Recognized with the Best Leadership 
              Award (2023) by JCI Nepal and Best Social Survey Award, I combine field expertise with 
              creative storytelling through photography.
            </p>

            <p className="text-gray-600 mb-6">
              From coordinating rural social work camps in Ghalegaun and Kanyam to facilitating SRHR 
              awareness sessions, and capturing compelling visual stories through my lens (fluent with 
              Canon, Nikon, Sony, and Pentax systems), I strive to create meaningful impact in communities 
              while documenting their stories.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
                <div className="text-3xl font-bold text-purple-600">
                  <AnimatedCounter value={3} isInView={isInView} />+
                </div>
                <div className="text-gray-700 font-medium">Years Experience</div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl"
              >
                <div className="text-3xl font-bold text-pink-600">
                  <AnimatedCounter value={1000} isInView={isInView} />+
                </div>
                <div className="text-gray-700 font-medium">People Reached</div>
              </motion.div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl col-span-2">
                <div className="text-3xl font-bold text-blue-600">
                  <AnimatedCounter value={4} isInView={isInView} />
                </div>
                <div className="text-gray-700 font-medium">Project</div>
              </div>
            </div>

            <a
              href="/Umesh_Raskoti_Resume.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3 mb-6 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition"
            >
              Download CV
            </a>
            <div className="flex flex-wrap gap-3">
              {['Social Work', 'SRHR Advocacy', 'Program Management', 'Data Analysis', 'Community Development'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <motion.div
                className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon size={24} />
              </motion.div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
