import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Camera } from 'lucide-react';

const projects = [
  {
    title: 'Rural Social Work Camp - Ghalegaun, Lamjung',
    description: 'Served as Camp Coordinator organizing community surveys and development programs in rural villages (November 2022).',
    image: '/assets/community/Social work camp/Lamjung.jpg',
    tags: ['Social Work', 'Rural Development', 'Community Survey', 'Camp Coordination'],
    category: 'Social Work',
  },
  {
    title: 'SRHR Youth Advocacy Campaign',
    description: 'Youth Champion facilitating Sexual and Reproductive Health Rights awareness sessions across educational institutions and ethnic communities.',
    image: '/assets/community/Capacity Building and Awareness/SRHR Youth Champion.jpg',
    tags: ['SRHR Advocacy', 'Youth Champion', 'Education', 'Community Awareness'],
    category: 'Advocacy',
  },
  {
    title: 'Professional Photography Portfolio',
    description: 'Fluent with Canon, Nikon, Sony, and Pentax systems. Specializing in event, portrait, and documentary photography.',
    image: '/assets/storytelling/professional/professional1.jpg',
    tags: ['Photography', 'Canon', 'Nikon', 'Sony', 'Event Coverage'],
    category: 'Photography',
  },
  {
    title: 'Ethnographic Field Research - Social Work Camp',
    description: 'Led Ethnographic Field Research as Conflict Management Head, documenting community dynamics and social patterns.',
    image: '/assets/community/Social work camp/Ethnographic.jpg',
    tags: ['Research', 'Ethnography', 'Field Work', 'Documentation'],
    category: 'Social Work',
  },
  {
    title: 'Sexuality Education Survey - Urban Camp',
    description: 'Led social survey on Sexuality Education as Urban Social Work Camp Event Head, collecting data and conducting community outreach.',
    image: '/assets/community/Capacity Building and Awareness/Sexuality Education & Reproductive Health Awareness Session.jpg',
    tags: ['Social Survey', 'Sexuality Education', 'Research', 'Best Award'],
    category: 'Social Work',
  },
  {
    title: 'Documentary Photography & Storytelling',
    description: 'Capturing compelling visual stories through documentary photography, combining social work insight with artistic vision.',
    image: '/assets/storytelling/rural/rural1.jpg',
    tags: ['Documentary', 'Storytelling', 'Photography', 'Adobe Lightroom'],
    category: 'Photography',
  },
  {
    title: 'Social Work Camp - Sauraha, Chitwan',
    description: 'Served as Head of Idea and Event Management for Social Work Camp 2023, coordinating field activities and team leadership.',
    image: '/assets/community/Social work camp/Urban Social Work Camp.jpg',
    tags: ['Event Management', 'Leadership', 'Field Work', 'Community Service'],
    category: 'Social Work',
  },
  {
    title: 'Beyond Beijing Committee - SRHR Programs',
    description: 'Developed project proposals and facilitated thematic discussions on Sexual and Reproductive Health Rights as Youth Implementer.',
    image: '/assets/community/Capacity Building and Awareness/Training on CSE and Its Components.jpg',
    tags: ['SRHR', 'Proposal Writing', 'Youth Implementation', 'Advocacy'],
    category: 'Advocacy',
  },
  {
    title: 'Event & Portrait Photography',
    description: 'Professional event coverage and portrait sessions using advanced camera systems and Adobe editing tools.',
    image: '/assets/leadership/Installation and Award distribution Ceremony.jpg',
    tags: ['Event Photography', 'Portraits', 'Weddings', 'Commercial'],
    category: 'Photography',
  },
  {
    title: 'Landscape & Nature Photography',
    description: 'Capturing the beauty of Nepal\'s landscapes and natural environments, showcasing environmental awareness.',
    image: '/assets/storytelling/nature/nature1.jpg',
    tags: ['Landscape', 'Nature', 'Travel', 'Environmental'],
    category: 'Photography',
  },
  {
    title: 'Social Work Camp - Kanyam, Ilam',
    description: 'Head of Grievances Management for Social Work Camp 2024, handling conflict resolution and team coordination.',
    image: '/assets/community/Social work camp/Neighborhood social work camp.jpg',
    tags: ['Conflict Management', 'Leadership', 'Team Building', 'Community Work'],
    category: 'Social Work',
  },
  {
    title: 'Psychosocial Counseling Internship',
    description: 'Completed intensive internship at Manoshastra Research and Counseling Center, providing mental health support.',
    image: '/assets/community/Internship/Metro Police Circle Thimi.jpg',
    tags: ['Counseling', 'Mental Health', 'Psychosocial Support', 'Internship'],
    category: 'Social Work',
  },
];

const categories = ['All', 'Social Work', 'Advocacy', 'Photography'];

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Work</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing my work across three key areas: Social Work & Community Development, 
            Youth Advocacy & SRHR Education, and Professional Photography. Each project represents 
            my commitment to creating positive social impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 + (index % 6) * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.backgroundColor = '#f3f4f6';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <motion.button
                    className="p-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {project.category === 'Photography' ? <Camera size={20} /> : <ExternalLink size={20} />}
                  </motion.button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}