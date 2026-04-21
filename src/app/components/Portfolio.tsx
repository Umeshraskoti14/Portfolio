import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Camera } from 'lucide-react';
import kmcImg from 'figma:asset/63b35ce0ab7380ad171c37c929c5ca1a23a179cf.png';

const projects = [
  {
    title: 'Neighborhood Social Work Camp',
    description: "The Neighborhood Social Work Camp was a practical field activity organized by the Faculty of Humanities and Social Work at Khwopa College in 2021 as part of the academic requirements for the first-year Bachelor of Arts in Social Work (BASW) program. The six-day camp was conducted in Bhaktapur district, with students divided into four groups and assigned to four different municipalities: Bhaktapur Municipality, Suryabinayak Municipality, Changunarayan Municipality, and Madhyapur Thimi Municipality. Key activities included community social surveys, stakeholder engagement, dialogues with local representatives, group presentations, and a closing ceremony. A total of 45 students participated. I served as Group Leader and led overall camp implementation, facilitated teamwork, conducted regular meetings with team members and the field instructor, and ensured timely completion of tasks.",
    image: '/assets/community/Social work camp/Lamjung.jpg',
    tags: ['Social Work', 'Community Survey', 'Leadership', 'Community Engagement'],
    category: 'Community Impact',
  },
  {
    title: 'Rural Social Work Camp',
    description: "The Rural Social Work Camp was a practical field activity organized by the Faculty of Humanities and Social Work at Khwopa College in 2022 as part of the academic requirements for the second-year BASW program. The six-day camp was conducted in Lamjung district, specifically in Ghale Gaun and Bhujung. Students were divided into four groups, with each group assigned to develop and implement a unique thematic area. Activities included social mapping, social surveys, community engagement, awareness sessions, and group presentations. I served as Camp Coordinator, overseeing implementation, coordinating groups, facilitating meetings, and successfully hosting the program.",
    image: '/assets/community/Social work camp/Lamjung.jpg',
    tags: ['Rural Development', 'Camp Coordination', 'Awareness Sessions'],
    category: 'Community Impact',
  },
  {
    title: 'Urban Social Work Camp',
    description: "The Urban Social Work Camp was organized in Sauraha, Chitwan district in 2023 as part of the third-year BASW field requirements. The six-day program focused on seasonal calendar preparation, social surveys, community engagement, awareness sessions, group presentations, and a closing ceremony. A total of 45 students participated. I served as Idea and Event Manager, managing logistics, planning events, and supporting overall camp implementation in close coordination with the Camp Coordinator and field instructor.",
    image: '/assets/community/Social work camp/Lamjung.jpg',
    tags: ['Urban Community', 'Event Management', 'Logistics'],
    category: 'Community Impact',
  },
  {
    title: 'Ethnographic Research Camp',
    description: "The Ethnographic Camp (2024) was a field activity in Ilam district undertaken with students from Sociology and Journalism. Participants conducted ethnographic research and launched mini-projects across Kanyam and surrounding communities. Key activities included community engagement, research, launching mini-projects, and group presentations. I served as Grievances and Idea Management Head, managing logistics, handling conflicts, supporting students with challenges, and contributing to overall coordination.",
    image: '/assets/community/Social work camp/Lamjung.jpg',
    tags: ['Ethnographic Research', 'Grievance Management', 'Field Coordination'],
    category: 'Community Impact',
  },
  {
    title: 'Community Safety & Policing Internship (Metropolitan Police Circle Thimi)',
    description: "The Metropolitan Police Circle Thimi is the primary law enforcement agency for the Madhyapur Thimi area in Bhaktapur. While interning as a first-year academic fieldwork requirement, I completed a 300-hour internship under the supervision of a Sub-Inspector (SI). I gained practical exposure to community policing and public safety operations, supported administrative documentation, observed case handling from complaint registration to resolution, participated in stakeholder coordination, helped organize an awareness session for the 16 Days of Activism against Gender-Based Violence, and contributed to a social survey on safety issues within Madhyapur Thimi Municipality.",
    image: '/assets/community/Internship/Metro Police Circle Thimi.jpg',
    tags: ['Community Policing', 'Case Handling', 'Public Safety', 'Stakeholder Coordination'],
    category: 'Community Impact',
  },
  {
    title: 'Mental Health & Counseling Support (Manoshastra Research and Counseling Center)',
    description: "ManoShastra Counseling and Research Center was founded in 2019 to make quality mental health care accessible in Nepal. During my two-month internship under the supervision of Psychologist Sazzan Shrestha, I assisted with client history taking, relaxation therapy sessions, and psychosocial support. I developed skills in empathetic communication, active listening, case documentation, and client-centered care, gaining practical insight into holistic mental health practices.",
    image: '/assets/community/Capacity Building and Awareness/SRHR Youth Champion.jpg',
    tags: ['Mental Health', 'Counseling', 'Psychosocial Support', 'Case Documentation'],
    category: 'Community Impact',
  },
  {
    title: 'Kathmandu Metropolitan City - Smart City Project',
    description: "Under the OASC (Open & Agile Smart Cities and Communities) framework, I worked on a smart city project in collaboration with Kathmandu Metropolitan City across its 32 wards. The initiative focused on community-driven urban solutions by actively involving Tole Sudhar Samiti. For one year, I served as a key team member with Antarikchya Pratisthan Nepal under the supervision of Smart City Expert Bigyan Ghimire. My responsibilities included recruiting volunteers, facilitating orientation sessions, allocating data collection sites, monitoring field activities, and conducting regular coordination meetings with ward chairpersons and stakeholders to ensure effective project implementation.",
    image: kmcImg,
    tags: ['Smart City', 'Volunteer Coordination', 'Data Collection', 'Stakeholder Engagement'],
    category: 'Strategic Leadership',
  },
  {
    title: 'Good Neighbors International Nepal',
    description: "Good Neighbors International is a global humanitarian organization focused on child rights and well-being. During a six-month internship with Good Neighbors International Nepal in the Sponsorship and Child Protection Department, I screened, verified, and updated records for approximately 1,400 children in the Child Management System (CMS). I handled Gift Money Letters (GML), Annual Child Letters (ACL) Type A and Type B, and Home Visit Data; reviewed records for completeness and consistency; translated content from Nepali to English with cultural sensitivity; and participated in team meetings and benchmarking workshops to learn child protection frameworks and best practices.",
    image: '/assets/community/Capacity Building and Awareness/Kaligandaki Rural Municipality.JPG',
    tags: ['Child Protection', 'Data Management', 'Sponsorship', 'Case Documentation'],
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

// Row-based card component for Community Impact and Strategic Leadership
interface RowCardProps {
  project: typeof projects[0];
  index: number;
  isInView: boolean;
}

const RowCard = ({ project, index, isInView }: RowCardProps) => {
  const isEvenIndex = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.4 + (index % 8) * 0.1 }}
      className="border-b border-gray-200 hover:bg-gray-50 transition-colors py-8 md:py-10"
    >
      <div className={`flex flex-col ${isEvenIndex ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-8 items-stretch`}>
        {/* Image Container */}
        <div className="w-full md:w-5/12 flex-shrink-0 rounded-lg overflow-hidden shadow-md">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-72 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.backgroundColor = '#e5e7eb';
            }}
          />
        </div>

        {/* Content Container */}
        <div className="w-full md:w-7/12 flex flex-col justify-center">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + (index % 8) * 0.1 }}
          >
            {project.title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 text-base md:text-lg mb-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.55 + (index % 8) * 0.1 }}
          >
            {project.description}
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + (index % 8) * 0.1 }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Grid-based card component for Visual Storytelling
interface GridCardProps {
  project: typeof projects[0];
  index: number;
  isInView: boolean;
}

const GridCard = ({ project, index, isInView }: GridCardProps) => {
  return (
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
  );
};

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Check if we should use row-based layout
  const isRowBasedCategory = activeCategory === 'Community Impact' || activeCategory === 'Strategic Leadership';
  const isAllWithRowBased = activeCategory === 'All' && filteredProjects.some(
    p => p.category === 'Community Impact' || p.category === 'Strategic Leadership'
  );

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white" ref={ref}>
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
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Row-Based Layout for Community Impact and Strategic Leadership */}
        {isRowBasedCategory || isAllWithRowBased ? (
          <div className="space-y-0 border-t border-gray-200">
            {isRowBasedCategory 
              ? filteredProjects.map((project, index) => (
                  <RowCard key={project.title} project={project} index={index} isInView={isInView} />
                ))
              : (
                <>
                  {/* Community Impact Section */}
                  {filteredProjects.some(p => p.category === 'Community Impact') && (
                    <div>
                      <motion.h3 
                        className="text-2xl font-bold text-gray-900 py-6 px-4 md:px-0 bg-gray-50"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        Community Impact
                      </motion.h3>
                      {filteredProjects
                        .filter(p => p.category === 'Community Impact')
                        .map((project, index) => (
                          <RowCard key={project.title} project={project} index={index} isInView={isInView} />
                        ))}
                    </div>
                  )}

                  {/* Strategic Leadership Section */}
                  {filteredProjects.some(p => p.category === 'Strategic Leadership') && (
                    <div>
                      <motion.h3 
                        className="text-2xl font-bold text-gray-900 py-6 px-4 md:px-0 bg-gray-50 mt-8"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        Strategic Leadership
                      </motion.h3>
                      {filteredProjects
                        .filter(p => p.category === 'Strategic Leadership')
                        .map((project, index) => (
                          <RowCard key={project.title} project={project} index={index} isInView={isInView} />
                        ))}
                    </div>
                  )}

                  {/* Visual Storytelling Section (Grid Layout) */}
                  {filteredProjects.some(p => p.category === 'Visual Storytelling') && (
                    <div className="mt-12">
                      <motion.h3 
                        className="text-2xl font-bold text-gray-900 mb-8"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        Visual Storytelling
                      </motion.h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects
                          .filter(p => p.category === 'Visual Storytelling')
                          .map((project, index) => (
                            <GridCard key={project.title} project={project} index={index} isInView={isInView} />
                          ))}
                      </div>
                    </div>
                  )}
                </>
              )
            }
          </div>
        ) : (
          /* Grid Layout for Visual Storytelling */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <GridCard key={project.title} project={project} index={index} isInView={isInView} />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
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