import { AnimatePresence, motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Briefcase, Camera, Heart, Lightbulb, MapPin, Star, Target, Trophy, Users, Award } from 'lucide-react';
import ginImg from '@/assets/Good Neighbors International Nepal.png';
import kmcImg from '@/assets/Kathmandu Metropolitan City - Smart City Project.png';
import manoImg from '@/assets/Mental Health & Counseling Support (Manoshastra Research and Counseling Center).png';
import thimiImg from '@/assets/Metropolitan Police circle Thimi.png';
const communityCampaignImg = '/assets/storytelling/heritage/heritage-1.jpg';

const portfolioData = {
  'Community Impact': {
      'Social Work Camps': [
      {
        title: 'Neighborhood Social Work Camp',
        description: 'The Neighborhood Social Work Camp was a practical field activity organized by the Faculty of Humanities and Social Work at Khwopa College in 2021 as part of the academic requirements for the first-year Bachelor of Arts in Social Work (BASW) program. The six-day camp was conducted in Bhaktapur district, with students divided into four groups and assigned to four different municipalities: Bhaktapur Municipality, Suryabinayak Municipality, Changunarayan Municipality, and Madhyapur Thimi Municipality. Key activities included community social surveys, stakeholder engagement, dialogues with local representatives, group presentations, and a closing ceremony. A total of 45 students participated. In this program, I served as Group Leader. My responsibilities included leading overall camp implementation, facilitating effective teamwork, conducting regular meetings with team members and the field instructor, and ensuring the timely completion of all assigned tasks. This role strengthened my leadership, communication, and organizational skills while providing valuable hands-on experience in community engagement and social work practice.',
        image: '/assets/community/Social work camp/Neighborhood social work camp.jpg',
        tags: ['Group Leader', 'Bhaktapur District', 'Community Engagement'],
        icon: Users
      },
      {
        title: 'Rural Social Work Camp - Ghalegaun, Lamjung',
        description: 'The Rural Social Work Camp was a practical field activity organized by the Faculty of Humanities and Social Work at Khwopa College in 2022 as part of the academic requirements for the second-year Bachelor of Arts in Social Work (BASW) program. The six-day camp was conducted in Lamjung district, specifically in Ghale Gaun and Bhujung. Students were divided into four groups, with each group assigned to develop and implement a unique thematic area. Key activities included social mapping, social surveys, community engagement, dialogues with local representatives, awareness sessions, group presentations, and a closing ceremony. A total of 45 students participated. In this program, I served as Camp Coordinator. My responsibilities included overseeing the overall implementation of the camp, coordinating among all four groups, facilitating regular meetings with team members and the field instructor, and successfully hosting the entire program. This leadership role enhanced my organizational, coordination, and problem-solving skills while providing deeper practical exposure to community-based social work.',
        image: '/assets/community/Social work camp/Lamjung.jpg',
        tags: ['Camp Coordinator', 'Lamjung', 'Social Mapping'],
        icon: MapPin
      },
      {
        title: 'Urban Social Work Camp - Sauraha, Chitwan',
        description: 'The Urban Social Work Camp was a practical field activity organized by the Faculty of Humanities and Social Work at Khwopa College in 2023 as part of the academic requirements for the third-year Bachelor of Arts in Social Work (BASW) program. The six-day camp was conducted in Sauraha, Chitwan district. Students were divided into four groups, with each group assigned to develop and implement a unique thematic area. Key activities included seasonal calendar preparation, social surveys, community engagement, dialogues with local representatives, awareness sessions, group presentations, and a closing ceremony. A total of 45 students participated. In this program, I served as Idea and Event Manager. My responsibilities included managing logistics, planning and organizing events, and supporting the overall camp implementation in close coordination with the Camp Coordinator and the field instructor. This role strengthened my event management, logistical planning, and teamwork skills while providing valuable practical experience in urban community settings.',
        image: '/assets/community/Social work camp/Urban Social Work Camp.jpg',
        tags: ['Idea & Event Manager', 'Sauraha', 'Event Management'],
        icon: Users
      },
      {
        title: 'Ethnographic Research Camp - Kanyam, Ilam',
        description: 'The Ethnographic Camp was a practical field activity organized by the Faculty of Humanities and Social Work at Khwopa College in 2024 as part of the academic requirements for the fourth-year Bachelor of Arts in Social Work (BASW) program. The six-day camp was conducted in Ilam district in collaboration with students from Sociology and Journalism. Students were assigned to carry out fieldwork independently. The major purpose of the camp was to conduct ethnographic research in the community of Kanyam and to launch mini-projects in different parts of Ilam. Key activities included ethnographic research, launching mini-projects, community engagement, dialogues with local representatives, awareness sessions, group presentations, and a closing ceremony. A total of 85 students participated in the camp. In this program, I served as Grievances and Idea Management Head. My responsibilities included managing logistics, handling grievances and conflicts, supporting students facing physical and mental challenges, and contributing to the overall coordination of the camp in collaboration with the Camp Coordinator and the field instructor. This role significantly enhanced my conflict resolution, crisis management, leadership, and problem-solving skills in a real community setting.',
        image: '/assets/community/Social work camp/Ethnographic.jpg',
        tags: ['Grievance Management', 'Ilam', 'Ethnographic Research'],
        icon: BookOpen
      }
    ],
    'Professional Internships': [
      {
        title: 'Good Neighbors International Nepal',
        description: 'Good Neighbors International is a global humanitarian and development organization committed to improving the lives of neglected, vulnerable, and marginalized communities, with a particular emphasis on child rights and well-being. During my six-month internship with Good Neighbors International Nepal in the Sponsorship and Child Protection Department, I screened, verified, and updated records for approximately 1,400 children in the organization\'s Child Management System (CMS). I handled Gift Money Letters (GML), Annual Child Letters (ACL) Type A and Type B, and Home Visit Data; reviewed records for completeness and consistency; translated content from Nepali to English with high accuracy and cultural sensitivity; and participated in team meetings and benchmarking workshops to learn child protection frameworks and best practices.',
        image: ginImg,
        tags: ['Child Protection', 'Data Management', 'Sponsorship'],
        icon: Briefcase,
        link: 'https://www.goodneighbors.org/'
      },
      {
        title: 'Mental Health & Counseling Support (Manoshastra Research and Counseling Center)',
        description: 'ManoShastra Counseling and Research Center was founded in 2019 with a mission to make quality mental health care accessible across Nepal. During my two-month internship under the supervision of Psychologist Sazzan Shrestha, I assisted with client history taking, relaxation therapy sessions, and provided psychosocial support. I developed skills in empathetic communication, active listening, case documentation, and client-centered care, gaining practical insight into holistic mental health practices and psychosocial interventions.',
        image: manoImg,
        tags: ['Mental Health', 'Counseling', 'Psychosocial Support'],
        icon: Heart
      },
      {
        title: 'Metropolitan Police circle Thimi',
        description: 'The Metropolitan Police Circle Thimi is the primary law enforcement agency for the Madhyapur Thimi area in Bhaktapur. I completed a 300-hour internship under the supervision of a Sub-Inspector (SI) as part of my first-year fieldwork requirement. I gained practical exposure to community policing and public safety operations: supported administrative documentation, observed case handling from complaint registration to resolution, participated in stakeholder coordination, assisted organizing an awareness session during the 16 Days of Activism against Gender-Based Violence, and contributed to a social survey on safety issues within Madhyapur Thimi Municipality. These experiences strengthened my understanding of collaborative policing, community engagement, and proactive public-safety measures.',
        image: thimiImg,
        tags: ['Community Policing', 'Case Handling', 'Public Safety', 'Stakeholder Coordination'],
        icon: Users
      },
      {
        title: 'Kathmandu Metropolitan City - Smart City Project',
        description: 'Under the OASC (Open & Agile Smart Cities and Communities) framework, I worked on a smart city project in collaboration with Kathmandu Metropolitan City across its 32 wards. The initiative focused on community-driven urban solutions by actively involving Tole Sudhar Samiti. For one year, I served as a key team member with Antarikchya Pratisthan Nepal under the supervision of Smart City Expert Bigyan Ghimire. My responsibilities included recruiting volunteers, facilitating orientation sessions, allocating data collection sites, monitoring field activities, and conducting regular coordination meetings with ward chairpersons and stakeholders to ensure effective project implementation.',
        image: kmcImg,
        tags: ['Smart City', 'Volunteer Coordination', 'Data Collection'],
        icon: Users,
        link: 'https://kathmandu.gov.np/'
      }
    ],
    'Educational Advocacy (CSE & SRHR)': [
      { title: 'Youth Capacity Building - Life Project', description: 'Facilitated an eight-day training session on Comprehensive Sexuality Education (CSE) and its key components for four youth participants of the Life Project. The session was designed to strengthen their knowledge and capacity on CSE, enabling them to better understand, practice, and promote its core components with greater confidence.', image: '/assets/community/Capacity Building and Awareness/Training on CSE and Its Components.jpg', tags: ['CSE Training', 'Life Project', 'Youth Capacity'], icon: BookOpen },
      { title: 'School-Based SRHR Sessions', description: 'Facilitated comprehensive Sexual and Reproductive Health and Rights (SRHR) awareness sessions for students of Grades 8, 9, and 10, along with teachers from Grades 11 and 12. Sessions reached 47 students and focused on informed decision-making and responsible behavior.', image: '/assets/community/Capacity Building and Awareness/School-Based SRHR Sessions.jpg', tags: ['SRHR Education', 'Grades 8-12', '47 Students'], icon: Users },
      { title: 'SRHR Youth Champion Portfolio', description: 'Youth Champions are a group of 22 youth activists from diverse backgrounds and identities who advocate at the local level for improved sexual and reproductive health policies that support reproductive health, family planning services, comprehensive sexuality education, and meaningful youth participation within Kathmandu Valley. The project was initiated by Beyond Beijing Committee Nepal (BBC Nepal) and funded by Right Here Right Now Nepal, beginning in 2016 and concluding in 2024, and I was part of the 2023 batch. During my tenure as a Youth Champion, I engaged in professional activities including youth capacity-building trainings, proposal development, strengthening young people\'s engagement in regional and international advocacy platforms, facilitating training on CSE and its components, and developing reports. This journey gave me valuable exposure, connected me with like-minded people, and strengthened my capacity to advocate for SRHR issues through both formal and informal youth groups while contributing to regional, national, and international events and panel discussions.', image: '/assets/community/Capacity Building and Awareness/SRHR Youth Champion.jpg', tags: ['Youth Champion', 'SRHR Advocacy', 'Batch 2023'], icon: Award },
      { title: 'Initiating CSE Dive Session', description: 'As a Youth Implementer with Beyond Beijing Committee Nepal, I spearheaded a strategic advocacy initiative in 2024 aimed at institutionalizing Comprehensive Sexuality Education (CSE) among students and young leaders. Facilitating sessions at Mahendra Ratna Campus and JCI Bhaktapur Junior, I engaged 60 participants through a data-driven pedagogical approach that combined interactive multimedia presentations, moderated group discussions, and rigorous pre- and post-test evaluations. This experience helped dismantle social taboos, empowered youth with essential health and rights information, and significantly strengthened my facilitation skills and professional network within the social work and activism sectors.', image: '/assets/community/Capacity Building and Awareness/Mahendra Ratna Campus.jpg', tags: ['CSE Dive Session', 'Youth Implementer', '60 Participants'], icon: BookOpen },
    ],
    'Community Empowerment': [
      { title: 'Agricultural Tech Training - Kiwi Farmers', description: 'The Kiwi Fruits branding project was initiated by Top International Nepal Pvt. Ltd. with the aim of creating a safe and healthy marketing space at the national and international levels. The project was implemented in Sailung Rural Municipality in collaboration with the rural municipality. I facilitated a session for kiwi farmers on the step-by-step process of uploading data into the developed apps while also supporting the installation of QR codes on kiwi trees. The session was designed to cover the farmers involved in kiwi cultivation and strengthen their access to improved branding and traceability practices.', image: '/assets/community/Capacity Building and Awareness/Agricultural Tech Training - Kiwi Farmers.jpg', tags: ['Capacity Building', 'Kiwi Farmers', 'QR Codes'], icon: Target },
      { title: 'Economic Development - Local Liquor Branding', description: 'A one-day awareness session on the local liquor branding process was conducted in Ramechhap Municipality in collaboration with Ward No. 2 and Ward No. 3. The session aimed to empower marginalized communities and promote systematic income generation through the branding and marketing of local products.', image: '/assets/community/Capacity Building and Awareness/Economic Development - Local Liquor Branding.JPG', tags: ['Ramechhap', 'Branding', 'Income Generation'], icon: Lightbulb },
      { title: 'Digital Wellness Education', description: 'In the 21st century, the digital world has made everyday life easier and created new platforms and exposure, but many parents also face challenges in managing children\'s digital habits. To address this, I was hired as a facilitator by students of Bageshwori College to lead an awareness session on digital addiction in children at Manjushree Pre School and Montessoris in Nagarkot, Bhaktapur. The target audience was the parents of the school, and the five-hour session used multiple methodologies including pre-tests, post-tests, group division, solution-oriented presentations, slide-based learning, and an energizer game. The expected outcome was to help parents understand the symptoms of digital addiction and its impact on child development while encouraging healthier family practices.', image: '/assets/community/Capacity Building and Awareness/Digital Addicition.jpg', tags: ['Digital Addiction', 'Parenting', 'Nagarkot'], icon: BookOpen },
    ],
  },
  'Strategic Leadership': {
    'JCI Leadership': [
      { title: 'Executive Vice President - JCI Bhaktapur', description: 'Served as Executive Vice President of JCI Bhaktapur, leading strategic initiatives and organizational development. Focused on member engagement, program implementation, and chapter growth within the JCI network.', image: '/assets/leadership/Pre Induction.jpg', tags: ['Executive Leadership', 'JCI Bhaktapur', 'Strategic Initiatives'], icon: Award },
      { title: 'Presidential Tenure - JCI Bhaktapur Junior', description: 'Led JCI Bhaktapur Junior as President, overseeing all chapter operations, member development, and community impact programs. Coordinated with national leadership and implemented strategic goals for organizational excellence.', image: '/assets/leadership/President Meet.jpg', tags: ['Presidential Leadership', 'Chapter Operations', 'Member Development'], icon: Trophy },
      { title: 'International Relations - IVP Official Visit', description: 'Coordinated and hosted the official visit of the JCI International Vice President to Nepal. This historic milestone provided valuable strategic insights, feedback, and motivation to enhance chapter performance and leadership effectiveness at the international level.', image: '/assets/leadership/Welcome International Assign Vice President.jpg', tags: ['International Level', 'JCI Vice President', 'Chapter Visit'], icon: Trophy },
      { title: 'Festival Documentation - Gaijatra & Cultural Events', description: 'Capturing the vibrant essence of Nepali cultural festivals and traditional ceremonies. Documenting community celebrations, traditional rituals, and the living cultural heritage of Nepal through authentic festival photography.', images: [{ src: '/assets/leadership/Water Distribution.jpg', name: 'Gaijatra Festival 1' }, { src: '/assets/leadership/Installation and Award distribution Ceremony.jpg', name: 'Cultural Event 1' }, { src: '/assets/leadership/Developing Emotional Intelligence.jpg', name: 'Cultural Event 2' }], tags: ['Festival', 'Culture', 'Community Events'], icon: Camera },
    ],
    'Conventions': [
      { title: 'Smart City Project Coordination', description: 'Worked under the Smart City Project at Kathmandu Metropolitan City, where I was primarily responsible for volunteer recruitment and mobilization. Coordinated and facilitated meetings with Ward Chairpersons and key stakeholders to support project implementation and community engagement.', image: kmcImg, tags: ['Smart City Project', 'Volunteer Mobilization', 'Government'], icon: Users, link: 'https://kathmandu.gov.np/' },
      { title: 'Urban Development & Public Health', description: 'The program was organized by JCI Bhaktapur Junior with the support of JCI Bhaktapur and JCI Bhaktapur Lady during the cultural festival of Gaijatra in Bhaktapur. The primary objective was to provide safe drinking water to visitors, particularly those who were new to Bhaktapur and participating in the festival.', image: '/assets/leadership/Water Distribution.jpg', tags: ['Community Service', 'Gaijatra Festival', 'Bhaktapur'], icon: Heart },
      { title: 'Area C Conference Leadership', description: 'The 2023 JCI Nepal Area "C" Conference was held on April 28–29, 2023 at Hotel View Bhrikuti in Godawari, Lalitpur District. The conference brought together members and leaders from multiple chapters within Area C. The primary objective was to strengthen leadership capabilities, foster collaboration, and enhance strategic vision.', image: '/assets/leadership/Area C conference.jpg', tags: ['Conference', 'April 28-29, 2023', 'Area C'], icon: Users },
      { title: 'National Conventions & Leadership Forums', description: 'Participated in the 50th JCI Nepal National Convention (December 15–18, 2023) and 12th National Junior Jaycees Leaders\' Academy (November 8–10, 2023). These landmark events featured comprehensive leadership forums, strategic sessions, capacity-building workshops, and networking opportunities.', image: '/assets/leadership/50th Convention.jpg', tags: ['50th Convention', 'December 15-18, 2023', 'National Event'], icon: Star },
      { title: 'Multi-Chapter Leadership Training', description: 'Hosted Area C Multi-Chapter Training centered on "Leadership Within You," emphasizing self-awareness, personal accountability, and values-based leadership. The training was facilitated by the National Past President of JCI Nepal with participation from multiple chapters.', image: '/assets/leadership/Multichapter.jpg', tags: ['Multi-Chapter', 'Area C', 'Leadership Within You'], icon: Users },
    ],
  },
  'Visual Storytelling': {
    'Cultural Heritage': [
      { title: 'Architectural Photography - Temples & Landmarks', description: 'Documenting Nepal\'s rich architectural heritage through professional photography of ancient temples, cultural landmarks, and historical sites. Preserving the visual legacy of traditional Nepali architecture and cultural monuments.', images: [{ src: '/assets/storytelling/heritage/heritage-1.jpg', name: 'Heritage 1' }, { src: '/assets/storytelling/heritage/heritage-2.jpg', name: 'Heritage 2' }, { src: '/assets/storytelling/heritage/heritage-3.JPG', name: 'Heritage 3' }, { src: '/assets/storytelling/heritage/heritage-4.jpg', name: 'Heritage 4' }, { src: '/assets/storytelling/heritage/heritage-5.JPG', name: 'Heritage 5' }, { src: '/assets/storytelling/heritage/heritage-6.JPG', name: 'Heritage 6' }, { src: '/assets/storytelling/heritage/heritage-7.jpg', name: 'Heritage 7' }, { src: '/assets/storytelling/heritage/heritage-8.jpg', name: 'Heritage 8' }, { src: '/assets/storytelling/heritage/heritage-9.jpg', name: 'Heritage 9' }], tags: ['Heritage', 'Architecture', 'Culture'], icon: Camera },
    ],
    'Landscape & Nature': [
      { title: 'Himalayan Landscapes', description: 'Capturing the majestic beauty of Nepal\'s mountain ranges and natural wonders. Professional landscape photography showcasing the Himalayas in their full glory.', images: [{ src: '/assets/storytelling/himalayas/himalayas-1.jpg', name: 'Himalayas 1' }, { src: '/assets/storytelling/himalayas/himalayas-2.jpg', name: 'Himalayas 2' }, { src: '/assets/storytelling/himalayas/himalayas-3.jpg', name: 'Himalayas 3' }, { src: '/assets/storytelling/himalayas/himalayas-4.jpg', name: 'Himalayas 4' }, { src: '/assets/storytelling/himalayas/himalayas-5.jpg', name: 'Himalayas 5' }, { src: '/assets/storytelling/himalayas/himalayas-6.jpg', name: 'Himalayas 6' }, { src: '/assets/storytelling/himalayas/himalayas-7.jpg', name: 'Himalayas 7' }, { src: '/assets/storytelling/himalayas/himalayas-8.JPG', name: 'Himalayas 8' }, { src: '/assets/storytelling/himalayas/himalayas-9.JPG', name: 'Himalayas 9' }, { src: '/assets/storytelling/himalayas/himalayas-10.jpg', name: 'Himalayas 10' }, { src: '/assets/storytelling/himalayas/himalayas-11.jpg', name: 'Himalayas 11' }], tags: ['Landscape', 'Mountains', 'Himalayas'], icon: Camera },
      { title: 'Golden Hour - Sunrise Mountain Peaks', description: 'Golden hour photography of Nepal\'s iconic mountain landscapes. Capturing the magical moments when sunlight kisses the peaks.', images: [{ src: '/assets/storytelling/sunrise/sunrise1.JPG', name: 'Sunrise 1' }, { src: '/assets/storytelling/sunrise/sunrise2.jpg', name: 'Sunrise 2' }, { src: '/assets/storytelling/sunrise/sunrise3.jpg', name: 'Sunrise 3' }, { src: '/assets/storytelling/sunrise/sunrise4.jpg', name: 'Sunrise 4' }, { src: '/assets/storytelling/sunrise/sunrise5.jpg', name: 'Sunrise 5' }, { src: '/assets/storytelling/sunrise/sunrise6.jpg', name: 'Sunrise 6' }, { src: '/assets/storytelling/sunrise/sunrise7.jpg', name: 'Sunrise 7' }, { src: '/assets/storytelling/sunrise/sunrise8.jpg', name: 'Sunrise 8' }, { src: '/assets/storytelling/sunrise/sunrise9.JPG', name: 'Sunrise 9' }, { src: '/assets/storytelling/sunrise/sunrise10.jpg', name: 'Sunrise 10' }, { src: '/assets/storytelling/sunrise/sunrise11.jpg', name: 'Sunrise 11' }, { src: '/assets/storytelling/sunrise/sunrise12.jpg', name: 'Sunrise 12' }, { src: '/assets/storytelling/sunrise/sunrise13.jpg', name: 'Sunrise 13' }, { src: '/assets/storytelling/sunrise/sunrise14.jpg', name: 'Sunrise 14' }, { src: '/assets/storytelling/sunrise/sunrise15.jpg', name: 'Sunrise 15' }, { src: '/assets/storytelling/sunrise/sunrise16.jpg', name: 'Sunrise 16' }], tags: ['Sunrise', 'Mountains', 'Golden Hour'], icon: Camera },
      { title: 'Forest & Nature Biodiversity', description: 'Exploring the lush forests and natural beauty of Nepal\'s diverse ecosystems. Environmental photography celebrating biodiversity.', images: [{ src: '/assets/storytelling/nature/nature1.jpg', name: 'Dense Forest Canopy' }, { src: '/assets/storytelling/nature/nature3.JPG', name: 'Moss-Covered Trees' }, { src: '/assets/storytelling/nature/nature5.jpg', name: 'Alpine Meadow Flora' }, { src: '/assets/storytelling/nature/nature6.jpg', name: 'Forest Stream Habitat' }, { src: '/assets/storytelling/nature/nature7.jpg', name: 'Rocky Forest Gorge' }, { src: '/assets/storytelling/nature/nature8.JPG', name: 'Green Valley Forest' }, { src: '/assets/storytelling/nature/nature9.jpg', name: 'Forest Detail Close-up' }, { src: '/assets/storytelling/nature/nature11.jpg', name: 'Morning Mist Forest' }, { src: '/assets/storytelling/nature/nature14.jpg', name: 'Biodiversity Rich Scene' }], tags: ['Nature', 'Forest', 'Environment'], icon: Camera },
    ],
    'Documentary Photography': [
      { title: 'Rural Nepal Village Life', description: 'Documentary photography showcasing the authentic life in Nepal\'s countryside. Capturing the essence of rural communities and their daily lives.', images: [{ src: '/assets/storytelling/rural/rural1.jpg', name: 'Rural 1' }, { src: '/assets/storytelling/rural/rural2.jpg', name: 'Rural 2' }, { src: '/assets/storytelling/rural/rural3.jpg', name: 'Rural 3' }, { src: '/assets/storytelling/rural/rural4.jpg', name: 'Rural 4' }, { src: '/assets/storytelling/rural/rural5.jpg', name: 'Rural 5' }, { src: '/assets/storytelling/rural/rural6.JPG', name: 'Rural 6' }, { src: '/assets/storytelling/rural/rural7.JPG', name: 'Rural 7' }, { src: '/assets/storytelling/rural/rural8.JPG', name: 'Rural 8' }, { src: '/assets/storytelling/rural/rural9.jpg', name: 'Rural 9' }, { src: '/assets/storytelling/rural/rural10.jpg', name: 'Rural 10' }, { src: '/assets/storytelling/rural/rural11.JPG', name: 'Rural 11' }, { src: '/assets/storytelling/rural/rural12.jpg', name: 'Rural 12' }, { src: '/assets/storytelling/rural/rural13.jpg', name: 'Rural 13' }, { src: '/assets/storytelling/rural/rural14.JPG', name: 'Rural 14' }, { src: '/assets/storytelling/rural/rural15.jpg', name: 'Rural 15' }, { src: '/assets/storytelling/rural/rural16.jpeg', name: 'Rural 16' }, { src: '/assets/storytelling/rural/rural17.jpg', name: 'Rural 17' }, { src: '/assets/storytelling/rural/rural18.jpg', name: 'Rural 18' }, { src: '/assets/storytelling/rural/rural19.jpg', name: 'Rural 19' }, { src: '/assets/storytelling/rural/rural20.jpg', name: 'Rural 20' }, { src: '/assets/storytelling/rural/rural21.jpg', name: 'Rural 21' }, { src: '/assets/storytelling/rural/rural22.jpg', name: 'Rural 22' }, { src: '/assets/storytelling/rural/rural23.jpg', name: 'Rural 23' }, { src: '/assets/storytelling/rural/rural24.JPG', name: 'Rural 24' }, { src: '/assets/storytelling/rural/rural25.JPG', name: 'Rural 25' }, { src: '/assets/storytelling/rural/rural26.jpg', name: 'Rural 26' }], tags: ['Documentary', 'Village Life', 'Rural Nepal'], icon: Camera },
      { title: 'Professional Portraiture & Events', description: 'Professional event and portrait photography using Canon, Nikon, Sony, and Pentax systems. Capturing moments that matter in leadership, community events, and character-driven storytelling.', images: [{ src: '/assets/storytelling/professional/professional1.jpg', name: 'Professional 1' }, { src: '/assets/storytelling/professional/professional2.jpg', name: 'Professional 2' }, { src: '/assets/storytelling/professional/professional3.jpg', name: 'Professional 3' }, { src: '/assets/storytelling/professional/professional4.JPG', name: 'Professional 4' }, { src: '/assets/storytelling/professional/professional5.JPG', name: 'Professional 5' }, { src: '/assets/storytelling/professional/professional6.JPG', name: 'Professional 6' }, { src: '/assets/storytelling/professional/professional7.JPG', name: 'Professional 7' }, { src: '/assets/storytelling/professional/professional8.JPG', name: 'Professional 8' }, { src: '/assets/storytelling/professional/professional9.JPG', name: 'Professional 9' }], tags: ['Professional', 'Events', 'Portraits'], icon: Camera },
    ],
  },
};

function uniqueImages(images: Array<string | { src: string; name?: string }>) {
  const seen = new Set<string>();
  return images.filter((img) => {
    const src = typeof img === 'string' ? img : img.src;
    if (seen.has(src)) return false;
    seen.add(src);
    return true;
  });
}

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const outlineRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const scrollStart = useRef(0);
  const scrollVelocity = useRef(0);
  const hoverRef = useRef(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return;

    mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    cursorPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    scrollStart.current = window.scrollY;

    const isInteractive = (target: EventTarget | null) => {
      return (
        target instanceof HTMLElement &&
        !!target.closest('a, button, input, textarea, select, label, [role="button"], [role="link"], [data-cursor-interactive]')
      );
    };

    const setCursorVisibility = (visible: boolean) => {
      if (dotRef.current) dotRef.current.style.opacity = visible ? '1' : '0';
      if (outlineRef.current) outlineRef.current.style.opacity = visible ? '1' : '0';
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
      const hover = isInteractive(e.target);
      if (hover !== hoverRef.current) {
        hoverRef.current = hover;
        outlineRef.current?.classList.toggle('custom-cursor-active', hover);
      }
    };

    const handleScroll = () => {
      const nextScroll = window.scrollY;
      scrollVelocity.current = nextScroll - scrollStart.current;
      scrollStart.current = nextScroll;
    };

    const handleMouseEnter = () => setCursorVisibility(true);
    const handleMouseLeave = () => setCursorVisibility(false);

    const animate = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.18;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.18;

      if (outlineRef.current) {
        outlineRef.current.style.left = `${cursorPos.current.x}px`;
        outlineRef.current.style.top = `${cursorPos.current.y}px`;
        outlineRef.current.style.transform = `translate(-50%, -50%) scale(${hoverRef.current ? 1.35 : 1}) rotate(${scrollVelocity.current * 2}deg)`;
      }

      scrollVelocity.current *= 0.92;
      animationRef.current = requestAnimationFrame(animate);
    };

    setCursorVisibility(true);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <div ref={outlineRef} className="custom-cursor-outline" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </div>
  );
}

function GalleryModal({ item, startIndex = 0, onClose }: { item: any; startIndex?: number; onClose: () => void }) {
  const [idx, setIdx] = useState(startIndex);
  useEffect(() => { setIdx(startIndex); }, [item, startIndex]);
  if (!item) return null;
  const imgs = uniqueImages((item.images || [item.image]).map((img: any) => (typeof img === 'string' ? { src: img } : img))) as Array<{ src: string; name?: string }>;
  const prev = () => setIdx((i) => (i - 1 + imgs.length) % imgs.length);
  const next = () => setIdx((i) => (i + 1) % imgs.length);
  const current = imgs[idx];
  useEffect(() => { const preloads: HTMLImageElement[] = []; imgs.forEach((img) => { const p = new Image(); p.src = img.src; preloads.push(p); }); return () => { preloads.forEach((p) => { p.src = ''; }); }; }, [imgs]);
  return (
    <motion.div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} onClick={onClose}>
      <motion.div className="relative max-w-[95vw] max-h-[90vh] w-full overflow-hidden" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.2 }} onClick={(e) => e.stopPropagation()}>
        <motion.img key={current.src} src={current.src} alt={current.name ?? item.title} loading="eager" decoding="async" onClick={onClose} onError={(e) => { const t = e.currentTarget as HTMLImageElement; if (t.src !== communityCampaignImg) t.src = communityCampaignImg; }} className="w-full max-h-[85vh] object-contain rounded-lg" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }} />
        <div className="absolute bottom-4 left-4 right-4 text-white text-sm text-center">{current.name ?? item.title}</div>
        <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl">‹</button>
        <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl">›</button>
        <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="absolute top-2 right-2 text-white text-2xl">×</button>
      </motion.div>
    </motion.div>
  );
}

type PortfolioData = typeof portfolioData;
const categories = Object.keys(portfolioData) as Array<keyof PortfolioData>;
const FACE_SAFE_TITLES = new Set([
  'Ethnographic Research Camp - Kanyam, Ilam',
  'Mental Health & Counseling Support (Manoshastra Research and Counseling Center)',
  'SRHR Youth Champion Portfolio',
]);
const categoryMeta: Record<keyof PortfolioData, { eyebrow: string; title: string; description: string }> = {
  'Community Impact': {
    eyebrow: 'Social Development',
    title: 'Fieldwork rooted in service, advocacy, and measurable community engagement.',
    description: 'A portfolio of grassroots programs, internships, and educational initiatives focused on social protection, public awareness, and local empowerment.',
  },
  'Strategic Leadership': {
    eyebrow: 'Leadership Portfolio',
    title: 'Leadership roles shaped by coordination, governance, and public-facing execution.',
    description: 'This section highlights chapter leadership, event stewardship, and strategic partnerships across JCI and civic initiatives.',
  },
  'Visual Storytelling': {
    eyebrow: 'Photography Practice',
    title: 'A documentary eye for culture, landscape, and the people behind the story.',
    description: 'Selected image collections covering heritage, nature, rural life, and professional event coverage from across Nepal.',
  },
};

function getCategoryEntries(category: keyof PortfolioData) {
  const data = portfolioData[category];
  if (Array.isArray(data)) return data;
  return Object.values(data).flat();
}

function getItemImageCount(item: any) {
  return uniqueImages(item.images || (item.image ? [item.image] : [])).length;
}

const portfolioSummary = categories.map((category) => ({
  category,
  entries: getCategoryEntries(category).length,
  images: getCategoryEntries(category).reduce((total, item) => total + Math.max(getItemImageCount(item), 1), 0),
}));

export function PortfolioPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });
  const [activeCategory, setActiveCategory] = useState<keyof PortfolioData>(categories[0]);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<{ item: any; startIndex: number } | null>(null);
  const [selectedContent, setSelectedContent] = useState<any | null>(null);

  useEffect(() => {
    const data = portfolioData[activeCategory];
    if (data && !Array.isArray(data)) {
      const keys = Object.keys(data);
      setActiveSubcategory(keys[0] || null);
    } else {
      setActiveSubcategory(null);
    }
  }, [activeCategory]);

  const activeCategoryData = portfolioData[activeCategory];
  const subcategories = !Array.isArray(activeCategoryData) ? Object.keys(activeCategoryData) : [];

  const getCurrentItems = () => {
    const data = activeCategoryData;
    if (Array.isArray(data)) return data;
    if (activeSubcategory) return (data as any)[activeSubcategory] || [];
    return [];
  };

  const currentItems = getCurrentItems();
  const rowItems = currentItems;
  const visualGalleryItems = activeCategory === 'Visual Storytelling'
    ? currentItems.flatMap((item: any) =>
        uniqueImages(item.images || []).map((img: any, index: number) => ({
          src: typeof img === 'string' ? img : img.src,
          name: typeof img === 'string' ? undefined : img.name,
          item,
          index,
        }))
      )
    : [];
  const activeMeta = categoryMeta[activeCategory];
  const activeSummary = portfolioSummary.find((summary) => summary.category === activeCategory);
  const totalEntries = portfolioSummary.reduce((sum, item) => sum + item.entries, 0);
  const totalImages = portfolioSummary.reduce((sum, item) => sum + item.images, 0);

  return (
    <div id="portfolio" className="cursor-none min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.12),_transparent_32%),linear-gradient(180deg,#f8fafc_0%,#ffffff_46%,#f8fafc_100%)] pt-24 pb-20 text-slate-900">
      <CustomCursor />
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref} initial={{ opacity: 0 }} animate={{ opacity: isInView ? 1 : 0.3 }} transition={{ duration: 0.6 }}>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-12 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur"
        >
          <div className="grid gap-10 px-6 py-8 md:px-10 md:py-12 lg:grid-cols-[1.45fr_0.85fr]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-cyan-900">
                Portfolio Overview
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                Social impact, civic leadership, and visual storytelling presented with clearer professional depth.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                This portfolio brings together community fieldwork, organizational leadership, and photography projects across Nepal. Each section is organized to highlight responsibility, scope, and the outcomes behind the work.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-3xl font-semibold text-slate-950">{categories.length}</div>
                  <div className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-500">Practice Areas</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-3xl font-semibold text-slate-950">{totalEntries}+</div>
                  <div className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-500">Featured Projects</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-3xl font-semibold text-slate-950">{totalImages}+</div>
                  <div className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-500">Portfolio Images</div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(160deg,#0f172a_0%,#1e293b_52%,#164e63_100%)] p-6 text-white">
              <div className="text-sm uppercase tracking-[0.24em] text-cyan-200">Current Focus</div>
              <h2 className="mt-3 text-2xl font-semibold leading-tight">{activeMeta.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-200">{activeMeta.description}</p>
              <div className="mt-8 space-y-3">
                {portfolioSummary.map((summary) => (
                  <button
                    key={summary.category}
                    type="button"
                    onClick={() => setActiveCategory(summary.category)}
                    className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${
                      activeCategory === summary.category
                        ? 'border-white/30 bg-white/12'
                        : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-medium text-white">{summary.category}</div>
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-300">{summary.entries} projects</div>
                    </div>
                    <ArrowRight size={18} className="text-cyan-200" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mb-10 flex flex-wrap gap-3"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.28 + index * 0.06 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`rounded-full border px-5 py-3 text-sm font-semibold tracking-wide transition ${
                activeCategory === category
                  ? 'border-slate-900 bg-slate-900 text-white shadow-lg shadow-slate-900/10'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mb-10 rounded-[1.75rem] border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">{activeMeta.eyebrow}</div>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{activeMeta.title}</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{activeMeta.description}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm uppercase tracking-[0.18em] text-slate-500">Selected Works</div>
                <div className="mt-2 text-3xl font-semibold text-slate-950">{activeSummary?.entries ?? rowItems.length}</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm uppercase tracking-[0.18em] text-slate-500">{activeSubcategory ? 'Current Lens' : 'Visual Archive'}</div>
                <div className="mt-2 text-base font-semibold text-slate-950">{activeSubcategory ?? 'All Collections'}</div>
              </div>
            </div>
          </div>
        </motion.section>

        {activeCategory === 'Visual Storytelling' ? (
          <div className="space-y-10">
            {subcategories.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {subcategories.map((sub) => (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => setActiveSubcategory(sub)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      activeSubcategory === sub
                        ? 'border-cyan-900 bg-cyan-900 text-white'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}

            <div className="columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3 xl:columns-4">
              {visualGalleryItems.map((imgItem, imgIndex) => (
                <motion.div
                  key={`${imgItem.src}-${imgIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: imgIndex * 0.05 }}
                >
                  <button
                    onClick={() => setSelectedItem({ item: imgItem.item, startIndex: imgItem.index })}
                    className="group relative w-full overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white break-inside-avoid transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-35px_rgba(15,23,42,0.55)]"
                  >
                    <img
                      src={imgItem.src}
                      alt={imgItem.name ?? imgItem.item.title}
                      className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] group-hover:brightness-105"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => { const t = e.currentTarget as HTMLImageElement; if (t.src !== communityCampaignImg) t.src = communityCampaignImg; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="text-xs uppercase tracking-[0.18em] text-cyan-100">{imgItem.item.title}</div>
                      <div className="mt-1 text-sm font-semibold">{imgItem.name ?? 'Open gallery'}</div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-3">
              {activeSubcategory && (
                <motion.aside
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="lg:sticky lg:top-24"
                >
                  <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Categories</div>
                    <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
                      {subcategories.map((sub) => (
                        <motion.button
                          key={sub}
                          onClick={() => setActiveSubcategory(sub)}
                          whileHover={{ x: 2 }}
                          whileTap={{ scale: 0.98 }}
                          className={`shrink-0 rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                            activeSubcategory === sub
                              ? 'border-slate-900 bg-slate-900 text-white'
                              : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-white'
                          }`}
                        >
                          {sub}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.aside>
              )}
            </div>

            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {rowItems.map((item: any, index: number) => {
                  const images = uniqueImages(item.images || (item.image ? [item.image] : []));
                  const cover = images[0] || item.image;
                  const coverSrc = typeof cover === 'string' ? cover : cover.src;
                  const useFaceSafeFit = FACE_SAFE_TITLES.has(item.title);
                  const shortDescription =
                    item.description.length > 190 ? `${item.description.slice(0, 190)}...` : item.description;
                  const Icon = item.icon || Star;

                  return (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, y: 36 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
                      transition={{ duration: 0.45, delay: 0.04 * index }}
                      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_20px_60px_-45px_rgba(15,23,42,0.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-40px_rgba(15,23,42,0.55)]"
                    >
                      <div className="overflow-hidden border-b border-slate-200 bg-slate-100">
                        <img
                          src={coverSrc}
                          alt={`${item.title} cover`}
                          className={useFaceSafeFit ? 'h-64 w-full bg-slate-100 object-contain' : 'aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.03]'}
                          loading="lazy"
                          decoding="async"
                          onError={(e) => { const t = e.currentTarget as HTMLImageElement; if (t.src !== communityCampaignImg) t.src = communityCampaignImg; }}
                        />
                      </div>

                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-900 ring-1 ring-cyan-100">
                              <Icon size={20} />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold leading-tight text-slate-950">{item.title}</h3>
                              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                                {getItemImageCount(item)} asset{getItemImageCount(item) > 1 ? 's' : ''}
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                            onClick={() => setSelectedContent(item)}
                          >
                            View details
                          </button>
                        </div>

                        <p className="mt-5 flex-1 text-sm leading-7 text-slate-600 md:text-base">{shortDescription}</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {item.tags?.slice(0, 4).map((tag: string) => (
                            <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        <AnimatePresence>
          {selectedContent && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedContent(null)}
            >
              <motion.div
                className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/20 bg-white shadow-2xl"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const modalImages = uniqueImages(selectedContent.images || (selectedContent.image ? [selectedContent.image] : []));
                  const modalCover = modalImages[0] || communityCampaignImg;
                  const modalCoverSrc = typeof modalCover === 'string' ? modalCover : modalCover.src;
                  const modalFaceSafeFit = FACE_SAFE_TITLES.has(selectedContent.title);

                  if (modalFaceSafeFit) {
                    return (
                      <div className="grid grid-cols-1 md:grid-cols-12">
                        <div className="overflow-hidden rounded-t-[2rem] bg-slate-100 md:col-span-5 md:rounded-l-[2rem] md:rounded-tr-none">
                          <img
                            src={modalCoverSrc}
                            alt={selectedContent.title}
                            className="h-72 md:h-full w-full object-contain bg-slate-100"
                            onError={(e) => {
                              const t = e.currentTarget as HTMLImageElement;
                              if (t.src !== communityCampaignImg) t.src = communityCampaignImg;
                            }}
                          />
                        </div>
                        <div className="p-6 md:col-span-7 md:p-8">
                          <div className="mb-4 flex items-start justify-between gap-4">
                            <div>
                              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Project Details</div>
                              <h3 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">{selectedContent.title}</h3>
                            </div>
                            <button
                              type="button"
                              onClick={() => setSelectedContent(null)}
                              className="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                            >
                              Close
                            </button>
                          </div>
                          <p className="text-slate-600 leading-8">{selectedContent.description}</p>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {selectedContent.tags?.map((tag: string) => (
                              <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                                {tag}
                              </span>
                            ))}
                          </div>
                          {selectedContent.link && (
                            <a
                              href={selectedContent.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 md:text-base"
                            >
                              Visit reference
                              <ArrowRight size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <>
                      <div className="overflow-hidden rounded-t-[2rem] bg-slate-100">
                        <img
                          src={modalCoverSrc}
                          alt={selectedContent.title}
                          className="h-56 md:h-72 w-full object-cover"
                          onError={(e) => {
                            const t = e.currentTarget as HTMLImageElement;
                            if (t.src !== communityCampaignImg) t.src = communityCampaignImg;
                          }}
                        />
                      </div>
                      <div className="p-6 md:p-8">
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Project Details</div>
                            <h3 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">{selectedContent.title}</h3>
                          </div>
                          <button
                            type="button"
                            onClick={() => setSelectedContent(null)}
                            className="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                          >
                            Close
                          </button>
                        </div>
                        <p className="text-slate-600 leading-8">{selectedContent.description}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {selectedContent.tags?.map((tag: string) => (
                            <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                              {tag}
                            </span>
                          ))}
                        </div>
                        {selectedContent.link && (
                          <a
                            href={selectedContent.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 md:text-base"
                          >
                            Visit reference
                            <ArrowRight size={16} />
                          </a>
                        )}
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
          {selectedItem && (
            <GalleryModal item={selectedItem.item} startIndex={selectedItem.startIndex} onClose={() => setSelectedItem(null)} />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
