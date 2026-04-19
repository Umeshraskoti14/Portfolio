import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Camera } from 'lucide-react';
import kmcImg from 'figma:asset/63b35ce0ab7380ad171c37c929c5ca1a23a179cf.png';

const projects = [
  {
    title: 'Social Work Camps Leadership',
    description: 'Led multiple social work camps across Nepal as Group Leader, Camp Coordinator, and Event Management Head, conducting community surveys and development programs.',
    image: '/assets/community/Social work camp/Lamjung.jpg',
    tags: ['Social Work', 'Rural Development', 'Community Survey', 'Camp Coordination'],
    category: 'Community Impact',
  },
  {
    title: 'Professional Internships',
    description: 'Completed internships in child protection, mental health counseling, and smart city governance, gaining hands-on experience in diverse professional fields.',
    image: '/assets/community/Internship/Metro Police Circle Thimi.jpg',
    tags: ['Internships', 'Child Protection', 'Mental Health', 'Governance'],
    category: 'Community Impact',
  },
  {
    title: 'Educational Advocacy (CSE & SRHR)',
    description: 'Youth Champion facilitating Sexual and Reproductive Health Rights awareness sessions and Comprehensive Sexuality Education programs across schools and communities.',
    image: '/assets/community/Capacity Building and Awareness/SRHR Youth Champion.jpg',
    tags: ['SRHR Advocacy', 'Youth Champion', 'CSE Education', 'Community Awareness'],
    category: 'Community Impact',
  },
  {
    title: 'Community Empowerment Programs',
    description: 'Facilitated capacity building programs including agricultural technology training for kiwi farmers, economic development through local branding, and digital wellness education.',
    image: '/assets/community/Capacity Building and Awareness/Kaligandaki Rural Municipality.JPG',
    tags: ['Capacity Building', 'Economic Development', 'Digital Wellness', 'Community Programs'],
    category: 'Community Impact',
  },
  {
    title: 'JCI Leadership Roles',
    description: 'Served as Executive Vice President of JCI Bhaktapur and President of JCI Bhaktapur Junior, leading strategic initiatives and organizational development.',
    image: '/assets/leadership/Pre Induction.jpg',
    tags: ['Executive Leadership', 'JCI Bhaktapur', 'Strategic Initiatives', 'Member Development'],
    category: 'Strategic Leadership',
  },
  {
    title: 'Governance & Urban Projects',
    description: 'Worked on smart city projects at Kathmandu Metropolitan City and community safety initiatives, contributing to urban development and public service delivery.',
    image: kmcImg,
    tags: ['Smart City Project', 'Volunteer Mobilization', 'Government', 'Community Safety'],
    category: 'Strategic Leadership',
  },
  {
    title: 'Strategic Training & Conventions',
    description: 'Participated in national conventions, leadership academies, and multi-chapter training programs, strengthening organizational capacity and leadership skills.',
    image: '/assets/leadership/50th Convention.jpg',
    tags: ['Leadership Training', 'National Conventions', 'Capacity Building', 'Organizational Development'],
    category: 'Strategic Leadership',
  },
  {
    title: 'Cultural Heritage Photography',
    description: 'Documenting Nepal\'s rich architectural heritage and cultural traditions through professional photography of temples, landmarks, and festival celebrations.',
    image: '/assets/storytelling/heritage/heritage-1.jpg',
    tags: ['Cultural Heritage', 'Architecture', 'Temples', 'Festivals'],
    category: 'Visual Storytelling',
  },
  {
    title: 'Landscape & Nature Photography',
    description: 'Capturing the majestic beauty of Nepal\'s mountain ranges, golden hour landscapes, and diverse ecosystems through professional environmental photography.',
    image: '/assets/storytelling/himalayas/himalayas-1.jpg',
    tags: ['Landscape', 'Mountains', 'Nature', 'Environmental Photography'],
    category: 'Visual Storytelling',
  },
  {
    title: 'Documentary Photography',
    description: 'Creating compelling visual stories through rural village life documentation and professional portraiture, combining social insight with artistic vision.',
    image: '/assets/storytelling/rural/rural1.jpg',
    tags: ['Documentary', 'Rural Life', 'Portraiture', 'Storytelling'],
    category: 'Visual Storytelling',
  },
];

const categories = ['All', 'Community Impact', 'Strategic Leadership', 'Visual Storytelling'];

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