import { AnimatePresence, motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Camera, MapPin, Users, Award, BookOpen, Heart, Briefcase, GraduationCap, Trophy, Star, Target, Lightbulb } from 'lucide-react';
import ginImg from 'figma:asset/2c4f084427bf94aa4895b8089f02f525068246fe.png';
import manoImg from 'figma:asset/a10c0aa055913800b480435f11f1cb49df00ce42.png';
import kmcImg from 'figma:asset/63b35ce0ab7380ad171c37c929c5ca1a23a179cf.png';
import communityCampaignImg from 'figma:asset/9ec45cbbbc95fb0d1d25d569ed17865ca696fc58.png';

const portfolioData = {
  'Community Impact': {
    'Social Work Camps': [
      { title: 'Neighborhood Social Work Camp', description: 'The camp was held in four municipalities of Bhaktapur District (Bhaktapur, Madhyapur Thimi, Suryabinayak, and Chagunarayan) where I served as Group Leader from January 2–6, 2022. Activities included Social Survey, Dialogue with Social Representatives, visiting Model Organizations, Community Engagement, and Closing Ceremony.', image: '/assets/community/Social work camp/Neighborhood social work camp.jpg', tags: ['Group Leader', 'January 2-6, 2022', 'Bhaktapur District'], icon: Users },
      { title: 'Rural Social Work Camp - Ghalegaun, Lamjung', description: 'Served as Camp Coordinator leading rural community development, November 1-5, 2022. Program included Social Mapping, Social Survey on Gender Equality, Dialogue with Local Stakeholders, Community Engagement, Report Presentation, and Closing Ceremony.', image: '/assets/community/Social work camp/Lamjung.jpg', tags: ['Camp Coordinator', 'November 1-5, 2022', 'Gender Equality'], icon: MapPin },
      { title: 'Urban Social Work Camp - Sauraha, Chitwan', description: 'Head of Idea and Event Management, January 14-18, 2023. Activities included Social Interaction & PRA, Social Survey, School Session and Agency Visit, Panel Discussion, Presentation Competition, and Closing Ceremony.', image: '/assets/community/Social work camp/Urban Social Work Camp.jpg', tags: ['Event Management', 'January 14-18, 2023', 'Urban Development'], icon: Users },
      { title: 'Ethnographic Research Camp - Kanyam, Ilam', description: 'Head of Grievances Management, December 16-20, 2024. Conducted Ethnographic Field Research, Workshop & Mini Project, Local Area Exploration, and Closing Ceremony.', image: '/assets/community/Social work camp/Ethnographic.jpg', tags: ['Ethnographic Research', 'December 16-20, 2024', 'Field Work'], icon: BookOpen },
    ],
    'Professional Internships': [
      { title: 'Child Protection & Data Management', description: 'Completed my internship at the Sponsorship and Child Protection Department of Good Neighbors International Nepal, where I primarily worked in data management. My responsibilities included maintaining beneficiary records, ensuring data accuracy, supporting documentation processes, and contributing to effective child protection and sponsorship reporting systems.', image: ginImg, tags: ['Data Management', 'Child Protection', 'April-October 2025'], icon: Briefcase, link: 'https://www.goodneighbors.org/' },
      { title: 'Mental Health & Counseling Support', description: 'Interned at Manoshastra Research and Counseling Center, gaining hands-on experience in mental health support. Assisted with client history taking, relaxation therapy sessions, and psychosocial support, while developing skills in empathetic communication, case documentation, and client-centered care.', image: manoImg, tags: ['Mental Health', 'Counseling', 'May-July 2022'], icon: Heart },
      { title: 'Community Safety & Policing Internship', description: 'Completed an internship at Metro Police Circle Thimi, gaining practical exposure to community policing and public safety operations. Supported administrative documentation, observed case handling procedures, and engaged in coordination processes related to community security.', image: '/assets/community/Internship/Metro Police Circle Thimi.jpg', tags: ['Community Policing', 'Public Safety', 'Administrative Support'], icon: Users },
      { title: 'Smart City Project & Governance', description: 'Worked under the Smart City Project at Kathmandu Metropolitan City, where I was primarily responsible for volunteer recruitment and mobilization. Coordinated and facilitated meetings with Ward Chairpersons and key stakeholders to support project implementation and community engagement.', image: kmcImg, tags: ['Smart City Project', 'Volunteer Mobilization', 'Government'], icon: Users, link: 'https://kathmandu.gov.np/' },
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
    'Governance & Urban Projects': [
      { title: 'Smart City Project Coordination', description: 'Worked under the Smart City Project at Kathmandu Metropolitan City, where I was primarily responsible for volunteer recruitment and mobilization. Coordinated and facilitated meetings with Ward Chairpersons and key stakeholders to support project implementation and community engagement.', image: kmcImg, tags: ['Smart City Project', 'Volunteer Mobilization', 'Government'], icon: Users, link: 'https://kathmandu.gov.np/' },
      { title: 'Urban Development & Public Health', description: 'The program was organized by JCI Bhaktapur Junior with the support of JCI Bhaktapur and JCI Bhaktapur Lady during the cultural festival of Gaijatra in Bhaktapur. The primary objective was to provide safe drinking water to visitors, particularly those who were new to Bhaktapur and participating in the festival.', image: '/assets/leadership/Water Distribution.jpg', tags: ['Community Service', 'Gaijatra Festival', 'Bhaktapur'], icon: Heart },
    ],
    'Strategic Training & Conventions': [
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
      { title: 'Forest & Nature Biodiversity', description: 'Exploring the lush forests and natural beauty of Nepal\'s diverse ecosystems. Environmental photography celebrating biodiversity.', images: [{ src: '/assets/storytelling/nature/nature1.jpg', name: 'Nature 1' }, { src: '/assets/storytelling/nature/nature2.jpg', name: 'Nature 2' }, { src: '/assets/storytelling/nature/nature3.JPG', name: 'Nature 3' }, { src: '/assets/storytelling/nature/nature4.jpg', name: 'Nature 4' }, { src: '/assets/storytelling/nature/nature5.jpg', name: 'Nature 5' }, { src: '/assets/storytelling/nature/nature6.jpg', name: 'Nature 6' }, { src: '/assets/storytelling/nature/nature7.jpg', name: 'Nature 7' }, { src: '/assets/storytelling/nature/nature8.JPG', name: 'Nature 8' }, { src: '/assets/storytelling/nature/nature9.jpg', name: 'Nature 9' }, { src: '/assets/storytelling/nature/nature10.jpg', name: 'Nature 10' }, { src: '/assets/storytelling/nature/nature11.jpg', name: 'Nature 11' }, { src: '/assets/storytelling/nature/nature12.jpg', name: 'Nature 12' }, { src: '/assets/storytelling/nature/nature13.jpg', name: 'Nature 13' }, { src: '/assets/storytelling/nature/nature14.jpg', name: 'Nature 14' }], tags: ['Nature', 'Forest', 'Environment'], icon: Camera },
    ],
    'Documentary Photography': [
      { title: 'Rural Nepal Village Life', description: 'Documentary photography showcasing the authentic life in Nepal\'s countryside. Capturing the essence of rural communities and their daily lives.', images: [{ src: '/assets/storytelling/rural/rural1.jpg', name: 'Rural 1' }, { src: '/assets/storytelling/rural/rural2.jpg', name: 'Rural 2' }, { src: '/assets/storytelling/rural/rural3.jpg', name: 'Rural 3' }, { src: '/assets/storytelling/rural/rural4.jpg', name: 'Rural 4' }, { src: '/assets/storytelling/rural/rural5.jpg', name: 'Rural 5' }, { src: '/assets/storytelling/rural/rural6.JPG', name: 'Rural 6' }, { src: '/assets/storytelling/rural/rural7.JPG', name: 'Rural 7' }, { src: '/assets/storytelling/rural/rural8.JPG', name: 'Rural 8' }, { src: '/assets/storytelling/rural/rural9.jpg', name: 'Rural 9' }, { src: '/assets/storytelling/rural/rural10.jpg', name: 'Rural 10' }, { src: '/assets/storytelling/rural/rural11.JPG', name: 'Rural 11' }, { src: '/assets/storytelling/rural/rural12.jpg', name: 'Rural 12' }, { src: '/assets/storytelling/rural/rural13.jpg', name: 'Rural 13' }, { src: '/assets/storytelling/rural/rural14.JPG', name: 'Rural 14' }, { src: '/assets/storytelling/rural/rural15.jpg', name: 'Rural 15' }, { src: '/assets/storytelling/rural/rural16.jpeg', name: 'Rural 16' }, { src: '/assets/storytelling/rural/rural17.jpg', name: 'Rural 17' }, { src: '/assets/storytelling/rural/rural18.jpg', name: 'Rural 18' }, { src: '/assets/storytelling/rural/rural19.jpg', name: 'Rural 19' }, { src: '/assets/storytelling/rural/rural20.jpg', name: 'Rural 20' }, { src: '/assets/storytelling/rural/rural21.jpg', name: 'Rural 21' }, { src: '/assets/storytelling/rural/rural22.jpg', name: 'Rural 22' }, { src: '/assets/storytelling/rural/rural23.jpg', name: 'Rural 23' }, { src: '/assets/storytelling/rural/rural24.JPG', name: 'Rural 24' }, { src: '/assets/storytelling/rural/rural25.JPG', name: 'Rural 25' }, { src: '/assets/storytelling/rural/rural26.jpg', name: 'Rural 26' }], tags: ['Documentary', 'Village Life', 'Rural Nepal'], icon: Camera },
      { title: 'Professional Portraiture & Events', description: 'Professional event and portrait photography using Canon, Nikon, Sony, and Pentax systems. Capturing moments that matter in leadership, community events, and character-driven storytelling.', images: [{ src: '/assets/storytelling/professional/professional1.jpg', name: 'Professional 1' }, { src: '/assets/storytelling/professional/professional2.jpg', name: 'Professional 2' }, { src: '/assets/storytelling/professional/professional3.jpg', name: 'Professional 3' }, { src: '/assets/storytelling/professional/professional4.JPG', name: 'Professional 4' }, { src: '/assets/storytelling/professional/professional5.JPG', name: 'Professional 5' }, { src: '/assets/storytelling/professional/professional6.JPG', name: 'Professional 6' }, { src: '/assets/storytelling/professional/professional7.JPG', name: 'Professional 7' }, { src: '/assets/storytelling/professional/professional8.JPG', name: 'Professional 8' }, { src: '/assets/storytelling/professional/professional9.JPG', name: 'Professional 9' }], tags: ['Professional', 'Events', 'Portraits'], icon: Camera },
    ],
  },
};

function useSlideshow(images: Array<string | { src: string; name?: string }>) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % images.length), 3000);
    return () => clearInterval(timer);
  }, [images.length]);
  return index;
}

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
  const imgs: Array<{ src: string; name?: string }> = uniqueImages((item.images || [item.image]).map((img: any) => (typeof img === 'string' ? { src: img } : img)));
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

export function PortfolioPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });
  const [activeCategory, setActiveCategory] = useState<keyof PortfolioData>(categories[0]);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<{ item: any; startIndex: number } | null>(null);

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

  return (
    <div id="portfolio" className="cursor-none min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 pb-20">
      <CustomCursor />
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref} initial={{ opacity: 0 }} animate={{ opacity: isInView ? 1 : 0.3 }} transition={{ duration: 0.6 }}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <motion.h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} transition={{ duration: 0.8 }}>Portfolio</motion.h1>
          <motion.div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8" initial={{ width: 0 }} animate={isInView ? { width: 96 } : { width: 0 }} transition={{ duration: 0.8, delay: 0.2 }} />
          <motion.p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>Explore my journey in social activism, leadership, and visual storytelling</motion.p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button key={category} onClick={() => setActiveCategory(category)} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: 0.5 + index * 0.08, ease: 'easeOut' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`px-8 py-3 rounded-full font-semibold uppercase text-[0.78rem] tracking-[0.28em] transition-all shadow-lg ${activeCategory === category ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-purple-300' : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-xl'}`}>
              {category}
            </motion.button>
          ))}
        </motion.div>

        {activeSubcategory && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="sticky top-24 z-40 flex flex-col md:flex-row justify-center gap-4 mb-12 bg-white/95 backdrop-blur-xl border border-slate-200 pb-6 pt-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 shadow-xl">
            {subcategories.map((sub) => (
              <motion.button key={sub} onClick={() => setActiveSubcategory(sub)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`px-4 py-2 rounded-full transition-all text-[0.68rem] md:text-[0.75rem] lowercase italic tracking-[0.16em] font-medium shadow-sm backdrop-blur-sm ${activeSubcategory === sub ? 'bg-gradient-to-r from-emerald-600 to-cyan-500 text-white border border-transparent shadow-cyan-200/40' : 'bg-white/90 text-slate-700 border border-slate-200/80 hover:bg-slate-100'}`}>
                {sub}
              </motion.button>
            ))}
          </motion.div>
        )}

        {getCurrentItems().some((item: any) => item.images) ? (
          <div className="space-y-10">
            {getCurrentItems().map((item: any, index: number) => {
              const images = uniqueImages(item.images || (item.image ? [item.image] : []));
              const cover = images[0] || item.image;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap items-center gap-2 justify-center">
                      {item.tags.map((tag: string) => (
                        <span key={tag} className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                    {images.map((img: any, imgIndex: number) => {
                      const src = typeof img === 'string' ? img : img.src;
                      const name = typeof img === 'string' ? undefined : img.name;
                      const randomHeight = [280, 320, 360, 280, 340][imgIndex % 5];
                      return (
                        <motion.button
                          key={src}
                          onClick={() => setSelectedItem({ item, startIndex: imgIndex })}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: imgIndex * 0.05 }}
                          className="relative overflow-hidden rounded-2xl group focus:outline-none break-inside-avoid"
                          style={{ height: randomHeight }}
                        >
                          <img
                            src={src}
                            alt={name ?? item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                            decoding="async"
                            onError={(e) => { const t = e.currentTarget as HTMLImageElement; if (t.src !== communityCampaignImg) t.src = communityCampaignImg; }}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                              <Camera size={32} className="mx-auto" />
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-10">
            {getCurrentItems().map((item: any, index: number) => {
              const images = item.images || (item.image ? [item.image] : []);
              const cover = images[0] || item.image;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group overflow-hidden rounded-[2rem] bg-white shadow-2xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr]">
                    <div className="relative h-96 overflow-hidden cursor-pointer" onClick={() => setSelectedItem({ item, startIndex: 0 })}>
                      <img
                        src={typeof cover === 'string' ? cover : cover.src}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => { const t = e.currentTarget as HTMLImageElement; if (t.src !== communityCampaignImg) t.src = communityCampaignImg; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-3xl font-bold tracking-tight">{item.title}</h3>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 p-4 md:p-6">
                      {images.slice(0, 4).map((img: any, thumbIndex: number) => {
                        const src = typeof img === 'string' ? img : img.src;
                        const isLast = thumbIndex === 3 && images.length > 4;
                        return (
                          <button key={src} onClick={() => setSelectedItem({ item, startIndex: thumbIndex })} className="relative h-40 overflow-hidden rounded-3xl bg-gray-200 focus:outline-none">
                            <img
                              src={src}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                              decoding="async"
                              onError={(e) => { const t = e.currentTarget as HTMLImageElement; if (t.src !== communityCampaignImg) t.src = communityCampaignImg; }}
                            />
                            {isLast && (
                              <div className="absolute inset-0 bg-black/55 flex items-center justify-center text-white text-lg font-semibold">+{images.length - 4}</div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      {item.tags.map((tag: string) => (
                        <span key={tag} className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-purple-600 hover:text-pink-600 font-semibold transition-colors">
                        Learn More →
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        <AnimatePresence>
          {selectedItem && (
            <GalleryModal item={selectedItem.item} startIndex={selectedItem.startIndex} onClose={() => setSelectedItem(null)} />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
