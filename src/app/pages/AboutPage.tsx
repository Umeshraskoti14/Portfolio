import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { useRef, useEffect } from 'react';
import { Award, Target, Users, Heart } from 'lucide-react';
import profileImg from 'figma:asset/af2244bd5f0f1db7dcdb6118c246b6f9400ebecd.png';

function AnimatedCounter({ value, isInView }: { value: number; isInView: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, { duration: 2, ease: 'easeOut' });
      return animation.stop;
    }
  }, [isInView, value, count]);

  return <motion.span>{rounded}</motion.span>;
}

const achievements = [
  {
    icon: Award,
    title: 'Best Leadership Award',
    description: 'JCI Nepal 2023',
    year: '2023',
  },
  {
    icon: Target,
    title: 'Best Social Survey',
    description: 'Khwopa College',
    year: '2024',
  },
  {
    icon: Users,
    title: 'Youth Champion',
    description: 'SRHR Advocacy',
    year: '2024-2025',
  },
  {
    icon: Heart,
    title: 'Community Service',
    description: '5+ Social Work Camps',
    year: '2022-2024',
  },
];

export function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-28 pb-20">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={profileImg}
                alt="Umesh Raskoti - Social Activist & Photographer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-4xl font-bold text-purple-600">
                <AnimatedCounter value={5} isInView={isInView} />+
              </div>
              <div className="text-gray-600">Years Experience</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Social Impact Through Multiple Lenses
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I am a Social Work professional committed to youth empowerment, ethical leadership, 
              and community-driven development. Through SRHR advocacy, research, and local engagement, 
              I promote evidence-based practice and accountable governance.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              As a photographer, I capture the stories behind social change, documenting community 
              transformations and bringing visibility to important causes. My dual passion for social 
              activism and visual storytelling allows me to create meaningful impact while preserving 
              powerful narratives.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
                <div className="text-3xl font-bold text-purple-600">
                  <AnimatedCounter value={1000} isInView={isInView} />+
                </div>
                <div className="text-gray-700">People Reached</div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl">
                <div className="text-3xl font-bold text-pink-600">
                  <AnimatedCounter value={7} isInView={isInView} />
                </div>
                <div className="text-gray-700">Projects</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Achievements & Recognition</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <achievement.icon size={28} />
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 mb-2">{achievement.description}</p>
                <span className="text-sm text-purple-600 font-semibold">{achievement.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-gradient-to-br from-purple-600 to-pink-600 p-12 rounded-3xl text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">Let's Create Impact Together</h3>
          <p className="text-lg mb-8 opacity-90">
            Passionate about making a difference through social work, advocacy, and visual storytelling.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
            </motion.a>
            <motion.a
              href="/Umesh_Raskoti_Resume.pdf"
              download
              className="inline-block px-8 py-4 bg-white/20 text-white rounded-full font-semibold hover:bg-white/30 transition-colors shadow-xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}