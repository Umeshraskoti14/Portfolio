import { motion, useInView } from 'motion/react';
<<<<<<< HEAD
import { useEffect, useMemo, useRef, useState } from 'react';
import { Camera, MapPin, Users, Award, BookOpen, Heart, Briefcase, GraduationCap, Trophy, Star, Target, Lightbulb, ChevronRight } from 'lucide-react';
=======
import { useRef, useState } from 'react';
import { Camera, MapPin, Users, Award, BookOpen, Heart, Briefcase, GraduationCap, Trophy, Star, Target, Lightbulb } from 'lucide-react';
>>>>>>> 3b038b3839575a4bb7132aafaefd7f9e98b8fa1c
import profileImg from 'figma:asset/350375490d348981572bcc1ade79fdd9730425a2.png';
import kmcImg from 'figma:asset/63b35ce0ab7380ad171c37c929c5ca1a23a179cf.png';
import manoImg from 'figma:asset/a10c0aa055913800b480435f11f1cb49df00ce42.png';
import ginImg from 'figma:asset/2c4f084427bf94aa4895b8089f02f525068246fe.png';
import environmentCampaignImg from 'figma:asset/09eeab516a958f508c8c2e24a93d0b4f4601a754.png';
import communityCampaignImg from 'figma:asset/9ec45cbbbc95fb0d1d25d569ed17865ca696fc58.png';
<<<<<<< HEAD
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';

type IconType = React.ComponentType<{ size?: number; className?: string }>;

type BaseItem = {
  title: string;
  description: string;
  tags: string[];
  icon: IconType;
  link?: string;
};

type VisualCollectionItem = BaseItem & {
  images: string[];
};

type SingleImageItem = BaseItem & {
  image: string;
};

type PortfolioItem = VisualCollectionItem | SingleImageItem;

function isVisualCollection(item: PortfolioItem): item is VisualCollectionItem {
  return "images" in item;
}

function AnimatedCover({
  title,
  images,
}: {
  title: string;
  images: string[];
}) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = window.setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % images.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, [images]);

  return (
    <div className="relative h-64 overflow-hidden">
      <motion.img
        key={`${title}-${activeIdx}`}
        src={images[activeIdx]}
        alt={title}
        className="w-full h-full object-cover"
        initial={{ opacity: 0, x: 40, scale: 1.02 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
        {images.length} Photos
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}

const communityImpactSections: Array<{
  id: string;
  title: string;
  subtitle: string;
  icon: IconType;
  items: SingleImageItem[];
}> = [
  {
    id: "social-work-camps",
    title: "Social Work Camp",
    subtitle: "Community immersion, research, and coordinated action on the ground.",
    icon: Users,
    items: [
      {
        title: "Neighborhood Social Work Camp",
        description:
          "The camp was held in four municipalities of Bhaktapur District (Bhaktapur, Madhyapur Thimi, Suryabinayak, and Chagunarayan) where I served as Group Leader from January 2–6, 2022. Activities included Social Survey, Dialogue with Social Representatives, visiting Model Organizations, Community Engagement, and Closing Ceremony.",
        image:
          "https://images.unsplash.com/photo-1762158008280-3dcb1d1cbd99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMG1lZXRpbmclMjBwZW9wbGV8ZW58MXx8fHwxNzcxMTUxNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        tags: ["Group Leader", "January 2–6, 2022", "Bhaktapur District"],
        icon: Users,
      },
      {
        title: "Rural Social Work Camp - Ghalegaun, Lamjung",
        description:
          "Served as Camp Coordinator leading rural community development, November 1–5, 2022. Program included Social Mapping, Social Survey on Gender Equality, Dialogue with Local Stakeholders, Community Engagement, Report Presentation, and Closing Ceremony.",
        image:
          "https://images.unsplash.com/photo-1765994898026-4fa84ade4a61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwY29tbXVuaXR5JTIwZGV2ZWxvcG1lbnQlMjBuZXBhbHxlbnwxfHx8fDE3NzExNTE5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        tags: ["Camp Coordinator", "November 1–5, 2022", "Gender Equality"],
        icon: MapPin,
      },
      {
        title: "Urban Social Work Camp - Sauraha, Chitwan",
        description:
          "Head of Idea and Event Management, January 14–18, 2023. Activities included Social Interaction & PRA, Social Survey, School Session and Agency Visit, Panel Discussion, Presentation Competition, and Closing Ceremony.",
        image:
          "https://images.unsplash.com/photo-1758582171503-ce7b5c28bb4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBjb29yZGluYXRpb24lMjBoZWxwaW5nJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3MTE1MTc2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        tags: ["Event Management", "January 14–18, 2023", "Urban Development"],
        icon: Users,
      },
      {
        title: "Ethnographic Research Camp - Kanyam, Ilam",
        description:
          "Head of Grievances Management, December 16–20, 2024. Conducted ethnographic field research, workshop & mini project, local area exploration, and closing ceremony.",
        image:
          "https://images.unsplash.com/photo-1625140064748-5b52e6180047?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbGFtJTIwdGVhJTIwZ2FyZGVuJTIwbmVwYWx8ZW58MXx8fHwxNzcxNTc3Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        tags: ["Ethnographic Research", "December 16–20, 2024", "Field Work"],
        icon: BookOpen,
      },
    ],
  },
  {
    id: "internships",
    title: "Internship",
    subtitle: "Hands-on experience across social protection, mental health, and public service.",
    icon: Briefcase,
    items: [
      {
        title: "Good Neighbors International Nepal",
        description:
          "Completed my internship at the Sponsorship and Child Protection Department of Good Neighbors International Nepal, where I primarily worked in data management. My responsibilities included maintaining beneficiary records, ensuring data accuracy, supporting documentation processes, and contributing to effective child protection and sponsorship reporting systems.",
        image: ginImg,
        tags: ["Data Management", "Child Protection", "April–October 2025"],
        icon: Briefcase,
        link: "https://www.goodneighbors.org/",
      },
      {
        title: "Manoshastra Research and Counseling Center",
        description:
          "Interned at Manoshastra Research and Counseling Center, gaining hands-on experience in mental health support. Assisted with client history taking, relaxation therapy sessions, and psychosocial support, while developing skills in empathetic communication, case documentation, and client-centered care.",
        image: manoImg,
        tags: ["Mental Health", "Counseling", "May–July 2022"],
        icon: Heart,
      },
      {
        title: "Kathmandu Metropolitan City",
        description:
          "Worked under the Smart City Project at Kathmandu Metropolitan City, where I was primarily responsible for volunteer recruitment and mobilization. Coordinated and facilitated meetings with Ward Chairpersons and key stakeholders to support project implementation and community engagement.",
        image: kmcImg,
        tags: ["Smart City Project", "Volunteer Mobilization", "Government"],
        icon: Users,
        link: "https://kathmandu.gov.np/",
      },
      {
        title: "Metro Police Circle Thimi",
        description:
          "Completed an internship at Metro Police Circle Thimi, gaining practical exposure to community policing and public safety operations. Supported administrative documentation, observed case handling procedures, and engaged in coordination processes related to community security.",
        image:
          "https://images.unsplash.com/photo-1758511718377-e23d0652e531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZvY2FjeSUyMGNhbXBhaWduJTIwc29jaWFsJTIwanVzdGljZXxlbnwxfHx8fDE3NzExNTE5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        tags: ["Community Policing", "Public Safety", "Administrative Support"],
        icon: Users,
      },
    ],
  },
  {
    id: "cse-advocacy",
    title: "CSE Advocacy",
    subtitle: "Facilitation and rights-based education to strengthen youth knowledge and agency.",
    icon: BookOpen,
    items: [
      {
        title: "Training Session on CSE (Life Project)",
        description:
          "Facilitated an eight-day training session on Comprehensive Sexuality Education (CSE) and its key components for four youth participants of the Life Project. The session aimed to strengthen their knowledge and capacity on CSE, enabling them to better understand and promote its components.",
        image: communityCampaignImg,
        tags: ["8-day training", "4 youth participants", "Life Project"],
        icon: BookOpen,
      },
      {
        title: "Comprehensive Sexuality Education (CSE) Program",
        description:
          "Facilitated CSE sessions and its key components for students of Grades 11 and 12, along with their teachers, with a total of 32 participants in attendance.",
        image:
          "https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjbGFzc3Jvb20lMjBlZHVjYXRpb24lMjBzdHVkZW50c3xlbnwxfHx8fDE3NzE1Nzc3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        tags: ["CSE Training", "Grades 11–12", "32 Participants"],
        icon: BookOpen,
      },
      {
        title: "SRHR Awareness Sessions",
        description:
          "A total of 47 students from Grades 8, 9, and 10 participated in Sexual and Reproductive Health and Rights (SRHR) awareness sessions designed to enhance knowledge, promote informed decision-making, and encourage responsible behavior.",
        image: environmentCampaignImg,
        tags: ["SRHR Education", "Grades 8–10", "47 Students"],
        icon: Users,
      },
      {
        title: "Sexuality Education & Reproductive Health Awareness (Grade 10)",
        description: "28 Grade 10 students engaged in sexuality education and reproductive health awareness sessions.",
        image: profileImg,
        tags: ["Sexuality Education", "Grade 10", "28 Students"],
        icon: BookOpen,
      },
      {
        title: "SRHR Youth Champion (Since 2023)",
        description:
          "As an SRHR Youth Champion since 2023, I have facilitated multiple awareness sessions reaching diverse groups of students and youth, promoting CSE, gender sensitivity, and rights-based approaches.",
        image:
          "https://images.unsplash.com/photo-1766722906733-609eebf3b63a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGF3YXJkJTIwYWNoaWV2ZW1lbnR8ZW58MXx8fHwxNzcxNDc5NjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        tags: ["Youth Champion", "CSE Advocacy", "Since 2023"],
        icon: Award,
      },
    ],
  },
  {
    id: "capacity-building",
    title: "Capacity Building",
    subtitle: "Training programs to strengthen practical skills, tools, and community systems.",
    icon: Target,
    items: [
      {
        title: "Training on Installation and Updating Information (QR Codes)",
        description:
          "The session was facilitated for local farmers engaged in kiwi cultivation. It focused on the installation and use of QR codes, including updating product information through QR code scanning. Additionally, the session introduced the process of fruit branding to support better product identification and market value.",
        image:
          "https://images.unsplash.com/photo-1560264418-c4445382edbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB0cmFpbmluZyUyMG5lcGFsfGVufDF8fHx8MTc0MTY3NDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["Kiwi farmers", "QR codes", "Branding"],
        icon: Target,
      },
      {
        title: "Sailung Rural Municipality Community Program",
        description:
          "Community development program facilitated in Sailung Rural Municipality, focusing on empowering local communities through skill development and awareness initiatives.",
        image:
          "https://images.unsplash.com/photo-1593113598332-cd288d649433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGRpc3RyaWJ1dGlvbiUyMGNvbW11bml0eSUyMHNlcnZpY2V8ZW58MXx8fHwxNzcxNTg3Mjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        tags: ["Sailung", "Community Development", "Rural Program"],
        icon: Users,
      },
    ],
  },
  {
    id: "awareness",
    title: "Awareness",
    subtitle: "Targeted sessions that reduce harm, increase knowledge, and support healthy choices.",
    icon: Lightbulb,
    items: [
      {
        title: "Local Liquor Branding - Awareness Session",
        description:
          "A one-day awareness session on the local liquor branding process was conducted in Ramechhap Municipality in collaboration with Ward No. 2 and Ward No. 3. The session aimed to empower marginalized communities and promote systematic income generation through the branding and marketing of local products.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbW90aW9uYWwlMjBpbnRlbGxpZ2VuY2UlMjB0cmFpbmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MTU4NzI4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        tags: ["Ramechhap", "Branding", "Income Generation"],
        icon: Lightbulb,
      },
      {
        title: "Digital Addiction Awareness Session",
        description:
          "Facilitated an awareness program for parents at Manjushree Montessori Preschool, Nagarkot–6, focusing on the impacts of digital addiction in children and promoting responsible digital parenting.",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnRzJTIwbWVldGluZyUyMHNjaG9vbHxlbnwxfHx8fDE3NDE2NzQwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["Digital Addiction", "Parenting", "Nagarkot"],
        icon: BookOpen,
      },
    ],
  },
];

const portfolioData: Record<string, PortfolioItem[]> = {
  "Community Impact": communityImpactSections.flatMap((s) => s.items),
=======

const portfolioData = {
  'Community Impact': [
    // Social Work Camps
    {
      title: 'Neighborhood Social Work Camp',
      description: 'The camp was held in four municipalities of Bhaktapur District (Bhaktapur, Madhyapur Thimi, Suryabinayak, and Chagunarayan) where I served as Group Leader from January 2–6, 2022. Activities included Social Survey, Dialogue with Social Representatives, visiting Model Organizations, Community Engagement, and Closing Ceremony.',
      image: 'https://images.unsplash.com/photo-1762158008280-3dcb1d1cbd99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMG1lZXRpbmclMjBwZW9wbGV8ZW58MXx8fHwxNzcxMTUxNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Group Leader', 'January 2-6, 2022', 'Bhaktapur District'],
      icon: Users,
    },
    {
      title: 'Rural Social Work Camp - Ghalegaun, Lamjung',
      description: 'Served as Camp Coordinator leading rural community development, November 1-5, 2022. Program included Social Mapping, Social Survey on Gender Equality, Dialogue with Local Stakeholders, Community Engagement, Report Presentation, and Closing Ceremony.',
      image: 'https://images.unsplash.com/photo-1765994898026-4fa84ade4a61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwY29tbXVuaXR5JTIwZGV2ZWxvcG1lbnQlMjBuZXBhbHxlbnwxfHx8fDE3NzExNTE5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Camp Coordinator', 'November 1-5, 2022', 'Gender Equality'],
      icon: MapPin,
    },
    {
      title: 'Urban Social Work Camp - Sauraha, Chitwan',
      description: 'Head of Idea and Event Management, January 14-18, 2023. Activities included Social Interaction & PRA, Social Survey, School Session and Agency Visit, Panel Discussion, Presentation Competition, and Closing Ceremony.',
      image: 'https://images.unsplash.com/photo-1758582171503-ce7b5c28bb4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBjb29yZGluYXRpb24lMjBoZWxwaW5nJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3MTE1MTc2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Event Management', 'January 14-18, 2023', 'Urban Development'],
      icon: Users,
    },
    {
      title: 'Ethnographic Research Camp - Kanyam, Ilam',
      description: 'Head of Grievances Management, December 16-20, 2024. Conducted Ethnographic Field Research, Workshop & Mini Project, Local Area Exploration, and Closing Ceremony.',
      image: 'https://images.unsplash.com/photo-1625140064748-5b52e6180047?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbGFtJTIwdGVhJTIwZ2FyZGVuJTIwbmVwYWx8ZW58MXx8fHwxNzcxNTc3Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Ethnographic Research', 'December 16-20, 2024', 'Field Work'],
      icon: BookOpen,
    },
    // Internships
    {
      title: 'Good Neighbors International Nepal',
      description: 'Completed my internship at the Sponsorship and Child Protection Department of Good Neighbors International Nepal, where I primarily worked in data management. My responsibilities included maintaining beneficiary records, ensuring data accuracy, supporting documentation processes, and contributing to effective child protection and sponsorship reporting systems.',
      image: ginImg,
      tags: ['Data Management', 'Child Protection', 'April-October 2025'],
      icon: Briefcase,
      link: 'https://www.goodneighbors.org/',
    },
    {
      title: 'Manoshastra Research and Counseling Center',
      description: 'Interned at Manoshastra Research and Counseling Center, gaining hands-on experience in mental health support. Assisted with client history taking, relaxation therapy sessions, and psychosocial support, while developing skills in empathetic communication, case documentation, and client-centered care.',
      image: manoImg,
      tags: ['Mental Health', 'Counseling', 'May-July 2022'],
      icon: Heart,
    },
    {
      title: 'Kathmandu Metropolitan City',
      description: 'Worked under the Smart City Project at Kathmandu Metropolitan City, where I was primarily responsible for volunteer recruitment and mobilization. Coordinated and facilitated meetings with Ward Chairpersons and key stakeholders to support project implementation and community engagement.',
      image: kmcImg,
      tags: ['Smart City Project', 'Volunteer Mobilization', 'Government'],
      icon: Users,
      link: 'https://kathmandu.gov.np/',
    },
    {
      title: 'Metro Police Circle Thimi',
      description: 'Completed an internship at Metro Police Circle Thimi, gaining practical exposure to community policing and public safety operations. Supported administrative documentation, observed case handling procedures, and engaged in coordination processes related to community security.',
      image: 'https://images.unsplash.com/photo-1758511718377-e23d0652e531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZvY2FjeSUyMGNhbXBhaWduJTIwc29jaWFsJTIwanVzdGljZXxlbnwxfHx8fDE3NzExNTE5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Community Policing', 'Public Safety', 'Administrative Support'],
      icon: Users,
    },
    // CSE Facilitation Programs
    {
      title: 'Comprehensive Sexuality Education (CSE) Program',
      description: 'The session on Comprehensive Sexuality Education (CSE) and its key components was facilitated for students of Grades 11 and 12, along with their teachers, with a total of 32 participants in attendance.',
      image: 'https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjbGFzc3Jvb20lMjBlZHVjYXRpb24lMjBzdHVkZW50c3xlbnwxfHx8fDE3NzE1Nzc3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['CSE Training', 'Grades 11-12', '32 Participants'],
      icon: BookOpen,
    },
    {
      title: 'Sexual and Reproductive Health and Rights (SRHR) Awareness',
      description: 'A total of 47 students from Grades 8, 9, and 10 participated in comprehensive Sexual and Reproductive Health and Rights (SRHR) awareness sessions designed to enhance their knowledge, promote informed decision-making, and encourage responsible behavior.',
      image: 'https://images.unsplash.com/photo-1740645580346-1cf378fea3a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh1YWxpdHklMjBlZHVjYXRpb24lMjBhd2FyZW5lc3MlMjBzZXNzaW9ufGVufDF8fHx8MTc3MTE1MTk5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['SRHR Education', 'Grades 8-10', '47 Students'],
      icon: Users,
    },
    {
      title: 'Sexuality Education & Reproductive Health Awareness Session',
      description: '28 grade 10 students engaged in sexuality education and reproductive health awareness sessions.',
      image: 'https://images.unsplash.com/photo-1740645580346-1cf378fea3a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh1YWxpdHklMjBlZHVjYXRpb24lMjBhd2FyZW5lc3MlMjBzZXNzaW9ufGVufDF8fHx8MTc3MTE1MTk5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Sexuality Education', 'Grade 10', '28 Students'],
      icon: BookOpen,
    },
    {
      title: 'SRHR Youth Champion 2023',
      description: 'As an SRHR Youth Champion since 2023, I have facilitated multiple awareness sessions reaching diverse groups of students and youth, promoting CSE, gender sensitivity, and rights-based approaches. My work focuses on breaking stigma, encouraging open dialogue, and strengthening young people\'s access to accurate and inclusive SRHR information.',
      image: 'https://images.unsplash.com/photo-1766722906733-609eebf3b63a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGF3YXJkJTIwYWNoaWV2ZW1lbnR8ZW58MXx8fHwxNzcxNDc5NjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Youth Champion', 'CSE Advocacy', 'Since 2023'],
      icon: Award,
    },
    // New Community Programs
    {
      title: 'Capacity Building Training on Installation and Updating Procedure',
      description: 'A capacity-building training on installation and updating procedures was facilitated in Kaligandaki Rural Municipality at two locations, namely Bhayekot and Dhuwakhola. The training was conducted for local farmers to enhance their technical knowledge and practical skills.',
      image: 'https://images.unsplash.com/photo-1560264418-c4445382edbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB0cmFpbmluZyUyMG5lcGFsfGVufDF8fHx8MTc0MTY3NDAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Capacity Building', 'Kaligandaki', 'Farmer Training'],
      icon: Target,
    },
    {
      title: 'Sailung Rural Municipality Community Program',
      description: 'Community development program facilitated in Sailung Rural Municipality, focusing on empowering local communities through skill development and awareness initiatives.',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGRpc3RyaWJ1dGlvbiUyMGNvbW11bml0eSUyMHNlcnZpY2V8ZW58MXx8fHwxNzcxNTg3Mjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Sailung', 'Community Development', 'Rural Program'],
      icon: Users,
    },
    {
      title: 'Local Liquor Branding - Awareness Session',
      description: 'A one-day awareness session on the local liquor branding process was conducted in Ramechhap Municipality in collaboration with Ward No. 2 and Ward No. 3. The session aimed to empower marginalized communities and promote systematic income generation through the branding and marketing of local products.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbW90aW9uYWwlMjBpbnRlbGxpZ2VuY2UlMjB0cmFpbmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MTU4NzI4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Ramechhap', 'Branding', 'Income Generation'],
      icon: Lightbulb,
    },
    {
      title: 'Digital Addiction Awareness Session',
      description: 'Facilitated an awareness program for parents at Manjushree Montessori Preschool, Nagarkot–6, focusing on the impacts of digital addiction in children and promoting responsible digital parenting.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnRzJTIwbWVldGluZyUyMHNjaG9vbHxlbnwxfHx8fDE3NDE2NzQwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Digital Addiction', 'Parenting', 'Nagarkot'],
      icon: BookOpen,
    },
  ],
>>>>>>> 3b038b3839575a4bb7132aafaefd7f9e98b8fa1c
  'Strategic Leadership': [
    {
      title: 'Pre-Induction and LOM Officer Training',
      description: 'The training is conducted annually, specifically for Presidents and Secretaries General, to provide comprehensive insights into the roles and responsibilities of the presidential tenure. The session was facilitated by Rashmi Shilpakar, National Vice President 2019, at CBR, in collaboration with JCI Bhaktapur and JCI Bhaktapur Lady.',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwdHJhaW5pbmclMjBzZXNzaW9ufGVufDF8fHx8MTc3MTU4NzI4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Leadership Training', 'Presidential Role', 'JCI'],
      icon: Award,
    },
    {
      title: 'President Meet - Historic First',
      description: 'The President\'s Meet marked a historic first in the history of Nepal Junior Jaycees. The event was hosted by JCI Dhulabari Junior at Kanyam, Ilam. All chapter presidents were invited and actively participated in the two-day program, which provided an opportunity for comprehensive training, peer-to-peer learning, and the sharing of leadership experiences.',
      image: 'https://images.unsplash.com/photo-1625140064748-5b52e6180047?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbGFtJTIwdGVhJTIwZ2FyZGVuJTIwbmVwYWx8ZW58MXx8fHwxNzcxNTc3Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Historic First', 'Presidents Meeting', 'Kanyam, Ilam'],
      icon: Trophy,
    },
    {
      title: 'JCI Nepal Area C Conference 2023',
      description: 'The 2023 JCI Nepal Area "C" Conference was held on April 28–29, 2023 at Hotel View Bhrikuti in Godawari, Lalitpur District. The conference brought together members and leaders from multiple chapters within Area C. The primary objective was to strengthen leadership capabilities, foster collaboration, and enhance strategic vision among JCI members, aligned with the national theme "As One: 1 Family, 1 Team, 1 Goal."',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwbWVldGluZyUyMGxlYWRlcnNoaXB8ZW58MXx8fHwxNzcxNTg3Mjg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Conference', 'April 28-29, 2023', 'Area C'],
      icon: Users,
    },
    {
      title: '50th JCI Nepal National Convention',
      description: 'The 50th National Convention of JCI Nepal was held from December 15–18, 2023 at the Butwal International Convention Center (BICC) in Butwal. This landmark event marked a significant milestone in the organization\'s history, bringing together members from across the country under the national theme "As One: 1 Family, 1 Team, 1 Goal." The four-day convention featured comprehensive leadership forums, strategic sessions, capacity-building workshops, panel discussions, and networking opportunities.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXRpb25hbCUyMGNvbnZlbnRpb24lMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzE1ODcyODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['50th Convention', 'December 15-18, 2023', 'National Event'],
      icon: Star,
    },
    {
      title: 'Water Distribution - Gaijatra Festival',
      description: 'The program was organized by JCI Bhaktapur Junior with the support of JCI Bhaktapur and JCI Bhaktapur Lady during the cultural festival of Gaijatra in Bhaktapur. The primary objective was to provide safe drinking water to visitors, particularly those who were new to Bhaktapur and participating in the festival. The initiative aimed to promote public health, ensure visitor comfort, and demonstrate youth-led community service.',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGRpc3RyaWJ1dGlvbiUyMGNvbW11bml0eSUyMHNlcnZpY2V8ZW58MXx8fHwxNzcxNTg3Mjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Community Service', 'Gaijatra Festival', 'Bhaktapur'],
      icon: Heart,
    },
    {
      title: 'Developing Emotional Intelligence',
      description: 'The program was organized in collaboration with multiple chapters within Area C and was primarily led by JCI Bhaktapur Junior. The session was facilitated by psychologist Prava Prajapati. The main objective was to enhance participants\' understanding of emotions and develop emotional intelligence. The session focused on self-awareness, emotional regulation, empathy, and effective interpersonal communication.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbW90aW9uYWwlMjBpbnRlbGxpZ2VuY2UlMjB0cmFpbmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MTU4NzI4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Emotional Intelligence', 'Area C Collaboration', 'Facilitated by Psychologist'],
      icon: Heart,
    },
    {
      title: 'International Vice President Visit',
      description: 'Each year, JCI assigns a Vice President to conduct official chapter visits to monitor progress, provide guidance, and strengthen organizational alignment. During my leadership tenure, our chapter had the distinct opportunity to welcome the International Vice President, marking a significant milestone for the organization. The visit provided valuable insights, strategic feedback, and motivation to enhance chapter performance and leadership effectiveness.',
      image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwbGVhZGVyc2hpcCUyMG1lZXRpbmd8ZW58MXx8fHwxNzcxNTg3MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['International Level', 'JCI Vice President', 'Chapter Visit'],
      icon: Trophy,
    },
    {
      title: '12th National Junior Jaycees Leaders\' Academy 2023',
      description: 'The 12th National Junior Jaycees Leaders\' Academy 2023 was hosted by Dharan Junior Jaycees under the patronage of Dharan Jaycees from November 8–10, 2023. The three-day academy focused on strengthening leadership capacity, teamwork, and communication skills among Junior Jaycees across Nepal. The program featured motivational sessions, leadership trainings, team-building activities, inter-area engagement, and a national oratory competition.',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwYWNhZGVteSUyMHRyYWluaW5nfGVufDF8fHx8MTc3MTU4NzI5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Leaders Academy', 'November 8-10, 2023', 'National Event'],
      icon: GraduationCap,
    },
    {
      title: '41st Installation and Award Distribution Ceremony',
      description: 'The 41st Installation and Award Distribution Ceremony was organized as a formal leadership transition and recognition event. The Chief Guest was Santosh Pariyar, Member of Parliament. The Special Guests included Bikash Manandhar, National President of JCI Nepal, and Rajaram Gautam, National Vice President. The ceremony was held at Sweet Home and marked the formal installation of new leadership along with the recognition and award distribution.',
      image: 'https://images.unsplash.com/photo-1767561070418-cbb62b952a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwYXdhcmQlMjBjZXJlbW9ueSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3MTE1MTc2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['41st Installation', 'Award Ceremony', 'Leadership Transition'],
      icon: Award,
    },
    {
      title: 'Area C Multi-Chapter Training',
      description: 'The training was hosted by JCI Banepa Junior in collaboration with Area C chapters, including JCI Bhaktapur Junior. Centered on the theme "Leadership Within You," the program emphasized self-awareness, personal accountability, and values-based leadership as foundations for effective organizational impact. The training was facilitated by the National Past President of JCI Nepal. The Mayor of Banepa Municipality attended as the Chief Guest.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwdHJhaW5pbmclMjBncm91cHxlbnwxfHx8fDE3NzE1ODcyOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Multi-Chapter', 'Area C', 'Leadership Within You'],
      icon: Users,
    },
  ],
  'Visual Storytelling': [
    // Himalayan Landscapes
    {
      title: 'Himalayan Landscapes Collection',
      description: 'Capturing the majestic beauty of Nepal\'s mountain ranges and natural wonders. Professional landscape photography showcasing the Himalayas in their full glory.',
      images: [
        'https://drive.google.com/uc?export=view&id=1tKutsJ7-Wn1vwkRvLIpq6MC4dUg5SULl',
        'https://drive.google.com/uc?export=view&id=1tPPp66hUkBi2UM80GiSpk6owQ7g4QgcU',
        'https://drive.google.com/uc?export=view&id=1VIgMOzXQ1aISH9FmRgrwGXzEveFT1qxz',
        'https://drive.google.com/uc?export=view&id=1599Z35KsIty2H2-T0fpDmgilgZOl0db3',
        'https://drive.google.com/uc?export=view&id=1N7uz6yEi2ah7ZwQBhjB6UwzvPX2p1dFp',
        'https://drive.google.com/uc?export=view&id=1Ak0TjBsAqxsaiFLDxXp8iQWqUJCDPXnb',
        'https://drive.google.com/uc?export=view&id=10UCmRCsWTJhFTNBJSpatqSnIFGalfIKZ',
        'https://drive.google.com/uc?export=view&id=1CprpQ6Y6lntCzpk3x0EdsRltXcJnYaGs',
        'https://drive.google.com/uc?export=view&id=1dueMRM8QHc5RBCOcZwbiRmTprVYNj2pW',
        'https://drive.google.com/uc?export=view&id=1-H_X7VbzLSOoI177K1A7epTS1DXJpSxq',
      ],
      tags: ['Landscape', 'Mountains', 'Himalayas'],
      icon: Camera,
    },
    // Rural Nepal Village Life
    {
      title: 'Rural Nepal Village Life',
      description: 'Documentary photography showcasing the authentic life in Nepal\'s countryside. Capturing the essence of rural communities and their daily lives.',
      images: [
        'https://drive.google.com/uc?export=view&id=1mXqntCTtYjfSlmtVvg5mFpVXfLnEoYwE',
        'https://drive.google.com/uc?export=view&id=1G0gvEYVfASuGIZI2CMs1e6OZtq1euLSm',
        'https://drive.google.com/uc?export=view&id=1kMGl1bKw5GBSy2Lc7F4tDPsCI4xo6xTd',
        'https://drive.google.com/uc?export=view&id=1ZRcJoEZkfta7l6tsxKvjRflll_pOMnlV',
        'https://drive.google.com/uc?export=view&id=1Gx_4NJA0C4CP_SBdeKTddcGQ9NQQATHA',
        'https://drive.google.com/uc?export=view&id=1bKmbG2n3TXqx__Y-FFTtD39d0c4ASCbv',
        'https://drive.google.com/uc?export=view&id=1pxGdgLKs5mVptkzo6o4BGhyBkAl38EcX',
        'https://drive.google.com/uc?export=view&id=1Dxw9Tgv474LEgfujNoyMY-ThQw4zHeut',
        'https://drive.google.com/uc?export=view&id=1V1Ih65w9L6L3gFnMaqwI0uXzm4Y5DJLq',
        'https://drive.google.com/uc?export=view&id=1dsA_i0tffnAPPsy3Qc5fflQcq782SFMf',
        'https://drive.google.com/uc?export=view&id=1RaGHqYKQ7o1wc3C2NYj53YM5aF37_O1d',
        'https://drive.google.com/uc?export=view&id=1U9EoDVljrnkroWB-GatguT5NQjVRN1jc',
      ],
      tags: ['Documentary', 'Village Life', 'Rural Nepal'],
      icon: Camera,
    },
    // Sunrise Mountain Peaks
    {
      title: 'Sunrise Mountain Peaks',
      description: 'Golden hour photography of Nepal\'s iconic mountain landscapes. Capturing the magical moments when sunlight kisses the peaks.',
      images: [
        'https://drive.google.com/uc?export=view&id=1zXICAbbxh-abDgObHcIo2sNYqdOAEsVe',
        'https://drive.google.com/uc?export=view&id=1gnjOdLUmZKwMhKbI0Vq-2TNiG1oB2iTl',
        'https://drive.google.com/uc?export=view&id=1eRlPKikXLg0i44KiWcTw5OcVJXz43BVJ',
        'https://drive.google.com/uc?export=view&id=1a5qZ57MZCu8Uf3lAjasBGLJRYTk_jW89',
        'https://drive.google.com/uc?export=view&id=1wLugykTp6fCLU864k2VSpFeTkorjs6aS',
        'https://drive.google.com/uc?export=view&id=1U4gp9O9AGOPqNOAaXvdkQMelJ2XTXGkd',
        'https://drive.google.com/uc?export=view&id=1JC4JND_Qe2IQISmG-WcbzDieS12DLRC3',
        'https://drive.google.com/uc?export=view&id=1eRlPKikXLg0i44KiWcTw5OcVJXz43BVJ',
      ],
      tags: ['Sunrise', 'Mountains', 'Golden Hour'],
      icon: Camera,
    },
    // Forest & Nature
    {
      title: 'Forest & Nature',
      description: 'Exploring the lush forests and natural beauty of Nepal\'s diverse ecosystems. Environmental photography celebrating biodiversity.',
      images: [
        'https://drive.google.com/uc?export=view&id=14aXIQ5w4AnRKLuvJQXWs6cNTDSFECkiX',
        'https://drive.google.com/uc?export=view&id=1l4UTdgzRmMFLOjWwQgXuE1PJP6a6Voxt',
        'https://drive.google.com/uc?export=view&id=1rQB94q8-haep6o8i10HRSOqFCa3A504j',
        'https://drive.google.com/uc?export=view&id=1N5EwD_o2Ut5kKGuIXebiLi08HPZrax8V',
        'https://drive.google.com/uc?export=view&id=1anunxPk3_DCy_5nN38YY-Dg_Pu22NEDb',
        'https://drive.google.com/uc?export=view&id=1Z-YTrNtjaT6m0n45_H1-XZ_KefNKn6U_',
        'https://drive.google.com/uc?export=view&id=1B3j7vkC89K7gNIJKMVGNL2l9ubY9lJII',
        'https://drive.google.com/uc?export=view&id=1H91xBcpsLo6me9IWKU-7E5oD0-nR6oSJ',
      ],
      tags: ['Nature', 'Forest', 'Environment'],
      icon: Camera,
    },
    // Professional Photography
    {
      title: 'Professional Photography',
      description: 'Professional event and portrait photography using Canon, Nikon, Sony, and Pentax systems. Capturing moments that matter.',
      images: [
        'https://drive.google.com/uc?export=view&id=16nhd3lycNuRn6T6eQyATxdkr3c18Rvbl',
        'https://drive.google.com/uc?export=view&id=13Y365zvOAyIHBnFuU_eHATRu_AXZ-lnk',
        'https://drive.google.com/uc?export=view&id=1ovMBIpa5-99p111o7Cy6OAir3ZrViVVO',
        'https://drive.google.com/uc?export=view&id=17qS_9lqY8FNX_mxXilF_F1DDCSXxKwpH',
        'https://drive.google.com/uc?export=view&id=15UoEHBkje9SqR3yjJ3CV5WCUUP6CWwfH',
        'https://drive.google.com/uc?export=view&id=1H7qc4-zrPkVP7uPPqzTuUVz_G8sVOGbK',
        'https://drive.google.com/uc?export=view&id=1MC5vY5rGfn8qfNpVU3Qt3BnHNCnmObzU',
        'https://drive.google.com/uc?export=view&id=1e-9lfO0EF74IQqdy-8AT4FPLlMZVhMPL',
        'https://drive.google.com/uc?export=view&id=1qA9Wg8v_BZ56N53Hq4idNSptqli_RRx7',
        'https://drive.google.com/uc?export=view&id=1KgTHmLtxVZqMu8nMvRXbxQ-NNN-FQKUW',
      ],
      tags: ['Professional', 'Events', 'Portraits'],
      icon: Camera,
    },
    // Cultural Heritage
    {
      title: 'Cultural Heritage',
      description: 'Architectural photography of Nepal\'s temples and cultural landmarks. Preserving heritage through imagery.',
      images: [
        'https://drive.google.com/uc?export=view&id=1s2EIPxQHSQxH6XWBbxgZkW_MIbIrHvZI',
        'https://drive.google.com/uc?export=view&id=1hRvyS-VGUaAYCTsHwUmpRCoKOtpdBW_i',
        'https://drive.google.com/uc?export=view&id=1fpRGRVl9fFkUMEt1GZ-UY3z01ybFNXBg',
        'https://drive.google.com/uc?export=view&id=1DaPR7kc_JVBrLqE53ROAeXe3mpxDatdn',
        'https://drive.google.com/uc?export=view&id=1JpU_DFZcZJwpTB6Ul4lCjVPM_60oTTA2',
        'https://drive.google.com/uc?export=view&id=1gFwLi4HUHP0I5djERmAf2F-JcG0FD5f9',
      ],
      tags: ['Heritage', 'Architecture', 'Culture'],
      icon: Camera,
    },
  ],
};

const categories = Object.keys(portfolioData);

export function PortfolioPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: false });
  const [activeCategory, setActiveCategory] = useState(categories[0]);
<<<<<<< HEAD
  const [activeCollection, setActiveCollection] = useState<VisualCollectionItem | null>(null);
=======
>>>>>>> 3b038b3839575a4bb7132aafaefd7f9e98b8fa1c

  const getCurrentItems = () => {
    return portfolioData[activeCategory as keyof typeof portfolioData];
  };

<<<<<<< HEAD
  const visibleItems = useMemo(() => getCurrentItems(), [activeCategory]);

=======
>>>>>>> 3b038b3839575a4bb7132aafaefd7f9e98b8fa1c
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 pb-20">
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
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            Portfolio
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore my journey in social activism, leadership, and visual storytelling
          </motion.p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full font-semibold transition-all shadow-lg ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-purple-300'
                  : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-xl'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

<<<<<<< HEAD
        {activeCategory === "Community Impact" ? (
          <div className="relative">
            <div className="pointer-events-none absolute left-6 top-0 bottom-0 hidden md:block w-px bg-gradient-to-b from-purple-300 via-pink-300 to-transparent" />
            <div className="space-y-14">
              {communityImpactSections.map((section, sectionIdx) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: 0.05 * sectionIdx }}
                  className="relative"
                >
                  <div className="flex items-start gap-6">
                    <div className="hidden md:flex flex-col items-center">
                      <div className="size-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center shadow-lg">
                        <span className="font-bold">{sectionIdx + 1}</span>
                      </div>
                      <div className="mt-3 size-10 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-700 shadow-sm">
                        <section.icon size={18} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-6 mb-6">
                        <div>
                          <div className="flex items-center gap-3">
                            <div className="md:hidden size-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center shadow-lg">
                              <span className="font-bold">{sectionIdx + 1}</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                          </div>
                          <p className="text-gray-600 mt-2 max-w-3xl">{section.subtitle}</p>
                        </div>
                        <div className="hidden lg:flex items-center gap-2 text-sm text-gray-500">
                          <span className="font-semibold text-gray-700">{section.items.length}</span>
                          <span>items</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {section.items.map((item, index) => (
                          <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: 0.08 * index }}
                            whileHover={{ y: -8 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                          >
                            <div className="relative h-56 overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                              <div className="absolute bottom-4 left-4 right-4">
                                <div className="flex flex-wrap gap-2">
                                  {item.tags.slice(0, 3).map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-xs font-medium"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className="p-6">
                              <div className="flex items-start gap-3 mb-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <item.icon size={20} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                                  {item.title}
                                </h3>
                              </div>
                              <p className="text-gray-600 leading-relaxed">{item.description}</p>
                              {item.link && (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 mt-4 text-purple-600 hover:text-pink-600 font-semibold transition-colors"
                                >
                                  Learn More <ChevronRight size={16} />
                                </a>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleItems.map((item, index) => (
              <motion.button
                key={item.title}
                type="button"
                onClick={() => {
                  if (activeCategory === "Visual Storytelling" && isVisualCollection(item)) {
                    setActiveCollection(item);
                  } else if ("link" in item && item.link) {
                    window.open(item.link, "_blank", "noopener,noreferrer");
                  }
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.08 * index }}
                whileHover={{ y: -10 }}
                className="text-left group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              >
                {isVisualCollection(item) ? (
                  <AnimatedCover title={item.title} images={item.images} />
                ) : (
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                )}

                <div className="relative -mt-10 px-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-gray-200 text-xs font-semibold text-gray-700 shadow-sm">
                    <item.icon size={14} />
                    <span>{activeCategory}</span>
                  </div>
                </div>

                <div className="p-6 pt-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs font-medium border border-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="px-3 py-1 bg-gray-50 text-gray-500 rounded-full text-xs font-medium border border-gray-100">
                        +{item.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {activeCategory === "Visual Storytelling" && isVisualCollection(item) && (
                    <div className="mt-5 inline-flex items-center gap-1 text-purple-600 font-semibold">
                      Open collection <ChevronRight size={16} />
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </motion.div>

      <Dialog open={!!activeCollection} onOpenChange={(open) => !open && setActiveCollection(null)}>
        <DialogContent className="max-w-[min(980px,calc(100%-2rem))] p-0 overflow-hidden">
          {activeCollection && (
            <div className="bg-white">
              <DialogHeader className="p-6 pb-0">
                <DialogTitle className="text-2xl">{activeCollection.title}</DialogTitle>
                <DialogDescription className="text-gray-600">
                  {activeCollection.description}
                </DialogDescription>
              </DialogHeader>

              <div className="p-6 pt-4">
                <Carousel opts={{ loop: true }} className="relative">
                  <CarouselContent>
                    {activeCollection.images.map((src, idx) => (
                      <CarouselItem key={`${src}-${idx}`}>
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gray-100">
                          <img
                            src={src}
                            alt={`${activeCollection.title} — photo ${idx + 1}`}
                            className="w-full h-full object-cover"
                            loading={idx === 0 ? "eager" : "lazy"}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-3" />
                  <CarouselNext className="right-3" />
                </Carousel>

                <div className="mt-5 flex flex-wrap gap-2">
                  {activeCollection.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs font-medium border border-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {activeCollection.images.slice(0, 10).map((src, idx) => (
                    <button
                      key={`thumb-${src}-${idx}`}
                      type="button"
                      className="relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 hover:border-purple-400 transition-colors"
                      onClick={() => {
                        // Minimal thumb action: reopen at first slide; embla API isn't exposed here
                        // Keeping thumbnails primarily as a quick visual overview.
                      }}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>

                {activeCollection.images.length > 10 && (
                  <p className="mt-3 text-sm text-gray-500">
                    Showing 10 of {activeCollection.images.length} photos.
                  </p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
=======
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getCurrentItems().map((item: any, index: number) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              {/* For Visual Storytelling - show first image from collection */}
              {item.images ? (
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.images.length} Photos
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-purple-600 hover:text-pink-600 font-semibold transition-colors"
                  >
                    Learn More →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
>>>>>>> 3b038b3839575a4bb7132aafaefd7f9e98b8fa1c
    </div>
  );
}
