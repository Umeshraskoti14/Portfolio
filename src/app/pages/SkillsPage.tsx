import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  Mic, MessageCircle, Mail, Video, Users, FileText,
  Camera, Palette, Code, BookOpen, Award, Target, Sparkles, Zap, Lightbulb
} from 'lucide-react';

const skillCategories = {
  'Professional Excellence': [
    { name: 'Master of Ceremony', icon: Mic, description: 'Expert event hosting & public speaking' },
    { name: 'Communication', icon: MessageCircle, description: 'Effective stakeholder engagement' },
    { name: 'Program Facilitation', icon: Users, description: 'Workshop & training leadership' },
    { name: 'Community Advocacy', icon: Target, description: 'Social impact & rights promotion' },
    { name: 'Project Coordination', icon: FileText, description: 'Strategic planning & execution' },
    { name: 'Training & Workshops', icon: BookOpen, description: 'Capacity building & mentorship' },
  ],
  'Digital Tools & Platforms': [
    { name: 'Email', icon: Mail, description: 'Professional correspondence' },
    { name: 'WhatsApp', icon: MessageCircle, description: 'Team collaboration' },
    { name: 'Viber', icon: MessageCircle, description: 'Communication platform' },
    { name: 'Google Meet', icon: Video, description: 'Virtual meetings' },
    { name: 'Zoom', icon: Video, description: 'Online facilitation' },
    { name: 'Microsoft Teams', icon: Users, description: 'Enterprise collaboration' },
  ],
  'Creative & Technical': [
    { name: 'Photography', icon: Camera, description: 'Professional visual storytelling' },
    { name: 'Adobe Lightroom', icon: Palette, description: 'Photo editing & enhancement' },
    { name: 'Canva Design', icon: Palette, description: 'Graphic design & branding' },
    { name: 'MS Office Suite', icon: Code, description: 'Document & data management' },
    { name: 'Kobo Collect', icon: FileText, description: 'Field data collection' },
    { name: 'Data Management', icon: FileText, description: 'Analysis & reporting' },
  ],
};

const certifications = [
  {
    title: 'Training of Trainers (TOT)',
    organization: 'We for Change',
    icon: Award,
    gradient: 'from-purple-500 via-purple-600 to-pink-600',
  },
  {
    title: 'Theatre-Based Training (TBT)',
    organization: 'National CSE Advocacy Coalition',
    icon: Sparkles,
    gradient: 'from-pink-500 via-pink-600 to-rose-600',
  },
  {
    title: 'National Cadet Corps Nepal (NCC Nepal)',
    organization: 'Nepal Army - 15th Batch',
    icon: Target,
    gradient: 'from-blue-500 via-blue-600 to-indigo-600',
  },
  {
    title: 'Best Leadership Award',
    organization: 'JCI Nepal 2023',
    icon: Zap,
    gradient: 'from-orange-500 via-orange-600 to-amber-600',
  },
];

const tools = [
  { name: 'MS Word', category: 'Document' },
  { name: 'MS Excel', category: 'Data' },
  { name: 'PowerPoint', category: 'Presentation' },
  { name: 'Kobo Collect', category: 'Field Work' },
  { name: 'Google Forms', category: 'Survey' },
  { name: 'Microsoft Teams', category: 'Communication' },
  { name: 'Zoom', category: 'Virtual' },
  { name: 'Google Meet', category: 'Meeting' },
  { name: 'Adobe Lightroom', category: 'Photo' },
  { name: 'Photoshop', category: 'Design' },
  { name: 'CapCut', category: 'Video' },
  { name: 'Canva', category: 'Graphics' },
  { name: 'Email', category: 'Communication' },
  { name: 'WhatsApp', category: 'Messaging' },
  { name: 'Viber', category: 'Messaging' },
];

export function SkillsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: false });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-28 pb-20">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Lightbulb size={18} className="text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Skills & Expertise</span>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Professional Capabilities
          </motion.h1>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            A comprehensive blend of social work expertise, technical proficiency, and creative capabilities 
            that drive meaningful community impact
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 * categoryIndex }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.3 * categoryIndex + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon size={28} className="text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {skill.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-100 to-transparent rounded-bl-full opacity-30" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Training & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Training & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 bg-gradient-to-br ${cert.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <cert.icon size={26} className="text-white" />
                </motion.div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-600">{cert.organization}</p>

                {/* Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Award size={16} className="text-purple-600" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Tools & Technologies</h2>
          <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-3xl p-10 shadow-xl">
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.05 }}
                  whileHover={{ scale: 1.15, y: -5 }}
                  className="group relative"
                >
                  <div className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-xl transition-all border-2 border-gray-100 hover:border-purple-300">
                    <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors">
                      {tool.name}
                    </span>
                    
                    {/* Category badge */}
                    <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      {tool.category}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
