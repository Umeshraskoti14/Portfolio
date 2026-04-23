import { AnimatePresence, motion, useInView } from 'motion/react';
import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Camera, MapPin, Users, Award, BookOpen, Heart, Briefcase, GraduationCap, Trophy, Star, Target, Lightbulb } from 'lucide-react';
const ginImg = '/assets/community/Capacity Building and Awareness/Kaligandaki Rural Municipality.JPG';
const manoImg = '/assets/community/Capacity Building and Awareness/SRHR Youth Champion.jpg';
const kmcImg = '/assets/leadership/Pre Induction.jpg';
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
        image: '/assets/community/Internship/Metro Police Circle Thimi.jpg',
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
      { title: 'Youth Capacity Building - Life Project', description: 'Facilitated an eight-day training session on Comprehensive Sexuality Education (CSE) and its key components for four youth participants of the Life Project. The session aimed to strengthen their knowledge and capacity on CSE, enabling them to better understand and promote its components.', image: '/assets/community/Capacity Building and Awareness/Training on CSE and Its Components.jpg', tags: ['CSE Training', 'Life Project', 'Youth Capacity'], icon: BookOpen },
      { title: 'School-Based SRHR Sessions', description: 'Facilitated comprehensive Sexual and Reproductive Health and Rights (SRHR) awareness sessions for students of Grades 8, 9, and 10, along with teachers from Grades 11 and 12. Sessions reached 47 students and focused on informed decision-making and responsible behavior.', image: '/assets/community/Capacity Building and Awareness/JCI Bhaktapur Junior.JPG', tags: ['SRHR Education', 'Grades 8-12', '47 Students'], icon: Users },
      { title: 'SRHR Youth Champion Portfolio', description: 'As an SRHR Youth Champion since 2023, I have facilitated multiple awareness sessions reaching diverse groups of students and youth, promoting CSE, gender sensitivity, and rights-based approaches. My work focuses on breaking stigma, encouraging open dialogue, and strengthening young people\'s access to accurate and inclusive SRHR information.', image: '/assets/community/Capacity Building and Awareness/SRHR Youth Champion.jpg', tags: ['Youth Champion', 'CSE Advocacy', 'Since 2023'], icon: Award },
    ],
    'Community Empowerment': [
      { title: 'Agricultural Tech Training - Kiwi Farmers', description: 'The session was facilitated for local farmers engaged in kiwi cultivation. It focused on the installation and use of QR codes, including updating product information through QR code scanning. Additionally, the session introduced the process of fruit branding to support better product identification and market value.', image: '/assets/community/Capacity Building and Awareness/Kaligandaki Rural Municipality.JPG', tags: ['Capacity Building', 'Kiwi Farmers', 'QR Codes'], icon: Target },
      { title: 'Economic Development - Local Liquor Branding', description: 'A one-day awareness session on the local liquor branding process was conducted in Ramechhap Municipality in collaboration with Ward No. 2 and Ward No. 3. The session aimed to empower marginalized communities and promote systematic income generation through the branding and marketing of local products.', image: '/assets/community/Capacity Building and Awareness/Ramechap Municipality.jpg', tags: ['Ramechhap', 'Branding', 'Income Generation'], icon: Lightbulb },
      { title: 'Digital Wellness Education', description: 'Facilitated an awareness program for parents at Manjushree Montessori Preschool, Nagarkot–6, focusing on the impacts of digital addiction in children and promoting responsible digital parenting.', image: '/assets/community/Capacity Building and Awareness/Digital Addicition.jpg', tags: ['Digital Addiction', 'Parenting', 'Nagarkot'], icon: BookOpen },
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

function useSlideshow(images: Array<string | { src: string }>, intervalMs = 2500) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) {
      setIndex(0);
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [images, intervalMs]);

  return index;
}

function PortfolioCard({ item, index, isInView, onClick }: { item: any; index: number; isInView: boolean; onClick: (startIndex: number) => void }) {
  const images = uniqueImages(item.images || (item.image ? [item.image] : []));
  const coverIdx = useSlideshow(images);
  const cover = images[coverIdx];
  const coverSrc = typeof cover === 'string' ? cover : cover.src;
  const coverName = typeof cover === 'string' ? undefined : cover.name;
  const previewImages = images.slice(0, 4);
  const extraPhotos = images.length > 4 ? images.length - 4 : 0;

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 * index, ease: 'easeOut' }} whileHover={{ y: -8 }} onClick={() => onClick(coverIdx)} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer">
      <div className="relative h-72 overflow-hidden">
        <img src={coverSrc} alt={item.title} loading="lazy" decoding="async" fetchPriority="high" onError={(e) => { const t = e.currentTarget as HTMLImageElement; if (t.src !== communityCampaignImg) t.src = communityCampaignImg; }} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        {item.images && <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">{item.images.length} Photos</div>}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {previewImages.length > 0 && (
        <div className="p-4 bg-gray-50">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {previewImages.map((img: any, idx: number) => {
              const src = typeof img === 'string' ? img : img.src;
              const name = typeof img === 'string' ? undefined : img.name;
              const isLast = idx === previewImages.length - 1 && extraPhotos > 0;
              return (
                <div key={src} className="relative overflow-hidden rounded-2xl h-24 bg-gray-200">
                  <img src={src} alt={name ?? `${item.title} preview ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  {isLast && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-sm font-semibold">+{extraPhotos}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0"><item.icon size={20} className="text-white" /></div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{item.title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{item.description}</p>
        {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-purple-600 hover:text-pink-600 font-semibold transition-colors">Learn More →</a>}
      </div>
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

  return (
    <div id="portfolio" className="cursor-none min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 pb-20">
      <CustomCursor />
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref} initial={{ opacity: 0 }} animate={{ opacity: isInView ? 1 : 0.3 }} transition={{ duration: 0.6 }}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <motion.h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} transition={{ duration: 0.8 }}>Portfolio</motion.h1>
          <motion.div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8" initial={{ width: 0 }} animate={isInView ? { width: 96 } : { width: 0 }} transition={{ duration: 0.8, delay: 0.2 }} />
          <motion.p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>Explore my journey in social activism, leadership, and visual storytelling</motion.p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button key={category} onClick={() => setActiveCategory(category)} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: 0.5 + index * 0.08, ease: 'easeOut' }} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }} className={`px-6 py-2.5 rounded-full font-semibold uppercase text-[0.72rem] tracking-[0.2em] transition-all border ${activeCategory === category ? 'bg-slate-900 text-white border-slate-900 shadow-md' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'}`}>
              {category}
            </motion.button>
          ))}
        </motion.div>

        {activeCategory === 'Visual Storytelling' ? (
          <div className="space-y-10">
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {visualGalleryItems.map((imgItem, imgIndex) => (
                <motion.div
                  key={`${imgItem.src}-${imgIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: imgIndex * 0.05 }}
                >
                  <button
                    onClick={() => setSelectedItem({ item: imgItem.item, startIndex: imgItem.index })}
                    className="group relative overflow-hidden rounded-[2rem] break-inside-avoid transition-shadow duration-300 hover:shadow-2xl w-full"
                  >
                    <img
                      src={imgItem.src}
                      alt={imgItem.name ?? imgItem.item.title}
                      className="w-full h-auto object-cover rounded-[2rem] transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => { const t = e.currentTarget as HTMLImageElement; if (t.src !== communityCampaignImg) t.src = communityCampaignImg; }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="pointer-events-none absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold">
                      {imgItem.name ?? imgItem.item.title}
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className={`${activeSubcategory ? 'lg:col-span-9 lg:order-1' : 'lg:col-span-12'} rounded-3xl border border-slate-200 bg-white px-6 py-6 shadow-sm md:px-8`}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {rowItems.map((item: any, index: number) => {
              const images = uniqueImages(item.images || (item.image ? [item.image] : []));
              const cover = images[0] || item.image;
              const coverSrc = typeof cover === 'string' ? cover : cover.src;
              const useFaceSafeFit = FACE_SAFE_TITLES.has(item.title);
              const shortDescription =
                item.description.length > 170 ? `${item.description.slice(0, 170)}...` : item.description;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.45, delay: 0.05 * index }}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 md:p-5"
                >
                  <div className="mb-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    <img
                      src={coverSrc}
                      alt={`${item.title} cover`}
                      className={useFaceSafeFit ? 'h-52 w-full object-contain bg-slate-100' : 'aspect-[16/7] w-full object-cover'}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => { const t = e.currentTarget as HTMLImageElement; if (t.src !== communityCampaignImg) t.src = communityCampaignImg; }}
                    />
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-slate-900 md:text-xl">{item.title}</h3>
                    <button
                      type="button"
                      className="text-sm font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900"
                      onClick={() => setSelectedContent(item)}
                    >
                      See more
                    </button>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
                    {shortDescription}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags?.slice(0, 4).map((tag: string) => (
                      <span key={tag} className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
            </div>
            </div>

            {activeSubcategory && (
              <motion.aside
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="lg:col-span-3 lg:order-2"
              >
                <div className="lg:sticky lg:top-24 lg:mr-[-2rem] rounded-l-2xl rounded-r-none border border-r-0 border-slate-200 bg-white/95 p-3 shadow-sm backdrop-blur-md">
                  <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
                    {subcategories.map((sub) => (
                      <motion.button
                        key={sub}
                        onClick={() => setActiveSubcategory(sub)}
                        whileHover={{ x: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className={`shrink-0 whitespace-nowrap rounded-xl px-3 py-2 text-left text-xs md:text-sm font-medium transition-all ${
                          activeSubcategory === sub
                            ? 'bg-purple-600 text-white shadow-sm'
                            : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {sub.replace(/\b\w/g, (char) => char.toUpperCase())}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.aside>
            )}
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
                className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
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
                        <div className="overflow-hidden rounded-t-3xl bg-slate-100 md:col-span-5 md:rounded-l-3xl md:rounded-tr-none">
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
                            <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">{selectedContent.title}</h3>
                            <button
                              type="button"
                              onClick={() => setSelectedContent(null)}
                              className="text-sm font-medium text-slate-600 underline underline-offset-4 hover:text-slate-900"
                            >
                              Close
                            </button>
                          </div>
                          <p className="text-slate-600 leading-relaxed">{selectedContent.description}</p>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {selectedContent.tags?.map((tag: string) => (
                              <span key={tag} className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">
                                {tag}
                              </span>
                            ))}
                          </div>
                          {selectedContent.link && (
                            <a
                              href={selectedContent.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-6 inline-block text-sm font-semibold text-purple-600 transition-colors hover:text-pink-600 md:text-base"
                            >
                              Learn More →
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <>
                      <div className="overflow-hidden rounded-t-3xl bg-slate-100">
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
                          <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">{selectedContent.title}</h3>
                          <button
                            type="button"
                            onClick={() => setSelectedContent(null)}
                            className="text-sm font-medium text-slate-600 underline underline-offset-4 hover:text-slate-900"
                          >
                            Close
                          </button>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{selectedContent.description}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {selectedContent.tags?.map((tag: string) => (
                            <span key={tag} className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">
                              {tag}
                            </span>
                          ))}
                        </div>
                        {selectedContent.link && (
                          <a
                            href={selectedContent.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-block text-sm font-semibold text-purple-600 transition-colors hover:text-pink-600 md:text-base"
                          >
                            Learn More →
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
