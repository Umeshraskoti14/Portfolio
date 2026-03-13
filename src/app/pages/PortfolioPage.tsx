import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Camera, MapPin, Users, Award, BookOpen, Heart, Briefcase, GraduationCap, Trophy, Star, Target, Lightbulb } from 'lucide-react';
import profileImg from 'figma:asset/350375490d348981572bcc1ade79fdd9730425a2.png';
import kmcImg from 'figma:asset/63b35ce0ab7380ad171c37c929c5ca1a23a179cf.png';
import manoImg from 'figma:asset/a10c0aa055913800b480435f11f1cb49df00ce42.png';
import ginImg from 'figma:asset/2c4f084427bf94aa4895b8089f02f525068246fe.png';
import environmentCampaignImg from 'figma:asset/09eeab516a958f508c8c2e24a93d0b4f4601a754.png';
import communityCampaignImg from 'figma:asset/9ec45cbbbc95fb0d1d25d569ed17865ca696fc58.png';

const portfolioData = {
  'Community Impact': {
    'Social Work Camp': [
      {
        title: 'Neighborhood Social Work Camp',
        description: 'The camp was held in four municipalities of Bhaktapur District (Bhaktapur, Madhyapur Thimi, Suryabinayak, and Chagunarayan) where I served as Group Leader from January 2–6, 2022. Activities included Social Survey, Dialogue with Social Representatives, visiting Model Organizations, Community Engagement, and Closing Ceremony.',
        image: '/assets/community/Social work camp/Neighborhood social work camp.jpg',
        tags: ['Group Leader', 'January 2-6, 2022', 'Bhaktapur District'],
        icon: Users,
      },
      {
        title: 'Rural Social Work Camp - Ghalegaun, Lamjung',
        description: 'Served as Camp Coordinator leading rural community development, November 1-5, 2022. Program included Social Mapping, Social Survey on Gender Equality, Dialogue with Local Stakeholders, Community Engagement, Report Presentation, and Closing Ceremony.',
        image: '/assets/community/Social work camp/Lamjung.jpg',
        tags: ['Camp Coordinator', 'November 1-5, 2022', 'Gender Equality'],
        icon: MapPin,
      },
      {
        title: 'Urban Social Work Camp - Sauraha, Chitwan',
        description: 'Head of Idea and Event Management, January 14-18, 2023. Activities included Social Interaction & PRA, Social Survey, School Session and Agency Visit, Panel Discussion, Presentation Competition, and Closing Ceremony.',
        image: '/assets/community/Social work camp/Urban Social Work Camp.jpg',
        tags: ['Event Management', 'January 14-18, 2023', 'Urban Development'],
        icon: Users,
      },
      {
        title: 'Ethnographic Research Camp - Kanyam, Ilam',
        description: 'Head of Grievances Management, December 16-20, 2024. Conducted Ethnographic Field Research, Workshop & Mini Project, Local Area Exploration, and Closing Ceremony.',
        image: '/assets/community/Social work camp/Ethnographic.jpg',
        tags: ['Ethnographic Research', 'December 16-20, 2024', 'Field Work'],
        icon: BookOpen,
      },
    ],
    'Internship': [
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
        image: '/assets/community/Internship/Metro Police Circle Thimi.jpg',
        tags: ['Community Policing', 'Public Safety', 'Administrative Support'],
        icon: Users,
      },
    ],
    'CSE Advocacy': [
      {
        title: 'Eight‑Day CSE Training – Life Project',
        description: 'Facilitated an eight-day training session on Comprehensive Sexuality Education (CSE) and its key components for four youth participants of the Life Project. The session aimed to strengthen their knowledge and capacity on CSE, enabling them to better understand and promote its components.',
        image: 'https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjbGFzc3Jvb20lMjBlZHVjYXRpb24lMjBzdHVkZW50c3xlbnwxfHx8fDE3NzE1Nzc3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['CSE Training', 'Life Project', 'Youth Capacity'],
        icon: BookOpen,
      },
      {
        title: 'Comprehensive Sexuality Education (CSE) Program',
        description: 'The session on Comprehensive Sexuality Education (CSE) and its key components was facilitated for students of Grades 11 and 12, along with their teachers, with a total of 32 participants in attendance.',
        image: 'https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjbGFzc3Jvb20lMjBlZHVjYXRpb24lMjBzdHVkZW50c3xlbnwxfHx8fDE3NzE1Nzc3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['CSE Training', 'Grades 11-12', '32 Participants'],
        icon: BookOpen,
      },
      {
        title: 'Sexual and Reproductive Health and Rights (SRHR) Awareness',
        description: 'A total of 47 students from Grades 8, 9, and 10 participated in comprehensive Sexual and Reproductive Health and Rights (SRHR) awareness sessions designed to enhance their knowledge, promote informed decision-making, and encourage responsible behavior.',
        image: 'https://images.unsplash.com/photo-1740645580346-1cf378fea3a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh1YWxpdHklMjBlZHVjYXRpb24lMjBhd2FyZW5lc3MlMjBzZXNzaW9ufGVufDF8fHx8MTc3MTE1MTk5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['SRHR Education', 'Grades 8-10', '47 Students'],
        icon: Users,
      },
      {
        title: 'Sexuality Education & Reproductive Health Awareness Session',
        description: '28 grade 10 students engaged in sexuality education and reproductive health awareness sessions.',
        image: 'https://images.unsplash.com/photo-1740645580346-1cf378fea3a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh1YWxpdHklMjBlZHVjYXRpb24lMjBhd2FyZW5lc3MlMjBzZXNzaW9ufGVufDF8fHx8MTc3MTE1MTk5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['Sexuality Education', 'Grade 10', '28 Students'],
        icon: BookOpen,
      },
      {
        title: 'SRHR Youth Champion 2023',
        description: 'As an SRHR Youth Champion since 2023, I have facilitated multiple awareness sessions reaching diverse groups of students and youth, promoting CSE, gender sensitivity, and rights-based approaches. My work focuses on breaking stigma, encouraging open dialogue, and strengthening young people\'s access to accurate and inclusive SRHR information.',
        image: 'https://images.unsplash.com/photo-1766722906733-609eebf3b63a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGF3YXJkJTIwYWNoaWV2ZW1lbnR8ZW58MXx8fHwxNzcxNDc5NjE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['Youth Champion', 'CSE Advocacy', 'Since 2023'],
        icon: Award,
      },
    ],
    'Capacity Building and Awareness': [
      {
        title: 'Training on Installation and Updating Information – Kiwi Farmers',
        description: 'The session was facilitated for local farmers engaged in kiwi cultivation. It focused on the installation and use of QR codes, including updating product information through QR code scanning. Additionally, the session introduced the process of fruit branding to support better product identification and market value.',
        image: 'https://images.unsplash.com/photo-1560264418-c4445382edbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB0cmFpbmluZyUyMG5lcGFsfGVufDF8fHx8MTc0MTY3NDAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['Capacity Building', 'Kiwi Farmers', 'QR Codes'],
        icon: Target,
      },
      {
        title: 'Sailung Rural Municipality Community Program',
        description: 'Community development program facilitated in Sailung Rural Municipality, focusing on empowering local communities through skill development and awareness initiatives.',
        image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGRpc3RyaWJ1dGlvbiUyMGNvbW11bml0eSUyMHNlcnZpY2V8ZW58MXx8fHwxNzcxNTg3Mjg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['Sailung', 'Community Development', 'Rural Program'],
        icon: Users,
      },
      {
        title: 'Local Liquor Branding - Awareness Session',
        description: 'A one-day awareness session on the local liquor branding process was conducted in Ramechhap Municipality in collaboration with Ward No. 2 and Ward No. 3. The session aimed to empower marginalized communities and promote systematic income generation through the branding and marketing of local products.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbW90aW9uYWwlMjBpbnRlbGxpZ2VuY2UlMjB0cmFpbmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MTU4NzI4OXww&ixlib=rb-4.1.0&q=80&w=1080',
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
  },
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
        { src: '/assets/storytelling/himalayas/himalayas-1.jpg', name: 'Himalayas 1' },
        { src: '/assets/storytelling/himalayas/himalayas-2.jpg', name: 'Himalayas 2' },
        { src: '/assets/storytelling/himalayas/himalayas-3.jpg', name: 'Himalayas 3' },
        { src: '/assets/storytelling/himalayas/himalayas-4.jpg', name: 'Himalayas 4' },
        { src: '/assets/storytelling/himalayas/himalayas-5.jpg', name: 'Himalayas 5' },
        { src: '/assets/storytelling/himalayas/himalayas-6.jpg', name: 'Himalayas 6' },
        { src: '/assets/storytelling/himalayas/himalayas-7.jpg', name: 'Himalayas 7' },
        { src: '/assets/storytelling/himalayas/himalayas-8.JPG', name: 'Himalayas 8' },
        { src: '/assets/storytelling/himalayas/himalayas-9.JPG', name: 'Himalayas 9' },
        { src: '/assets/storytelling/himalayas/himalayas-10.jpg', name: 'Himalayas 10' },
        { src: '/assets/storytelling/himalayas/himalayas-11.jpg', name: 'Himalayas 11' },
      ],
      tags: ['Landscape', 'Mountains', 'Himalayas'],
      icon: Camera,
    },
    // Rural Nepal Village Life
    {
      title: 'Rural Nepal Village Life',
      description: 'Documentary photography showcasing the authentic life in Nepal\'s countryside. Capturing the essence of rural communities and their daily lives.',
      images: [
        { src: '/assets/storytelling/rural/rural1.jpg', name: 'Rural 1' },
        { src: '/assets/storytelling/rural/rural2.jpg', name: 'Rural 2' },
        { src: '/assets/storytelling/rural/rural3.jpg', name: 'Rural 3' },
        { src: '/assets/storytelling/rural/rural4.jpg', name: 'Rural 4' },
        { src: '/assets/storytelling/rural/rural5.jpg', name: 'Rural 5' },
        { src: '/assets/storytelling/rural/rural6.JPG', name: 'Rural 6' },
        { src: '/assets/storytelling/rural/rural7.JPG', name: 'Rural 7' },
        { src: '/assets/storytelling/rural/rural8.JPG', name: 'Rural 8' },
        { src: '/assets/storytelling/rural/rural9.jpg', name: 'Rural 9' },
        { src: '/assets/storytelling/rural/rural10.jpg', name: 'Rural 10' },
        { src: '/assets/storytelling/rural/rural11.JPG', name: 'Rural 11' },
        { src: '/assets/storytelling/rural/rural12.jpg', name: 'Rural 12' },
        { src: '/assets/storytelling/rural/rural13.jpg', name: 'Rural 13' },
        { src: '/assets/storytelling/rural/rural14.JPG', name: 'Rural 14' },
        { src: '/assets/storytelling/rural/rural15.jpg', name: 'Rural 15' },
        { src: '/assets/storytelling/rural/rural16.jpeg', name: 'Rural 16' },
        { src: '/assets/storytelling/rural/rural17.jpg', name: 'Rural 17' },
        { src: '/assets/storytelling/rural/rural18.jpg', name: 'Rural 18' },
        { src: '/assets/storytelling/rural/rural19.jpg', name: 'Rural 19' },
        { src: '/assets/storytelling/rural/rural20.jpg', name: 'Rural 20' },
        { src: '/assets/storytelling/rural/rural21.jpg', name: 'Rural 21' },
        { src: '/assets/storytelling/rural/rural22.jpg', name: 'Rural 22' },
        { src: '/assets/storytelling/rural/rural23.jpg', name: 'Rural 23' },
        { src: '/assets/storytelling/rural/rural24.JPG', name: 'Rural 24' },
        { src: '/assets/storytelling/rural/rural25.JPG', name: 'Rural 25' },
        { src: '/assets/storytelling/rural/rural26.jpg', name: 'Rural 26' },
      ],
      tags: ['Documentary', 'Village Life', 'Rural Nepal'],
      icon: Camera,
    },
    // Sunrise Mountain Peaks
    {
      title: 'Sunrise Mountain Peaks',
      description: 'Golden hour photography of Nepal\'s iconic mountain landscapes. Capturing the magical moments when sunlight kisses the peaks.',
      images: [
        { src: '/assets/storytelling/sunrise/sunrise1.JPG', name: 'Sunrise 1' },
        { src: '/assets/storytelling/sunrise/sunrise2.jpg', name: 'Sunrise 2' },
        { src: '/assets/storytelling/sunrise/sunrise3.jpg', name: 'Sunrise 3' },
        { src: '/assets/storytelling/sunrise/sunrise4.jpg', name: 'Sunrise 4' },
        { src: '/assets/storytelling/sunrise/sunrise5.jpg', name: 'Sunrise 5' },
        { src: '/assets/storytelling/sunrise/sunrise6.jpg', name: 'Sunrise 6' },
        { src: '/assets/storytelling/sunrise/sunrise7.jpg', name: 'Sunrise 7' },
        { src: '/assets/storytelling/sunrise/sunrise8.jpg', name: 'Sunrise 8' },
        { src: '/assets/storytelling/sunrise/sunrise9.JPG', name: 'Sunrise 9' },
        { src: '/assets/storytelling/sunrise/sunrise10.jpg', name: 'Sunrise 10' },
        { src: '/assets/storytelling/sunrise/sunrise11.jpg', name: 'Sunrise 11' },
        { src: '/assets/storytelling/sunrise/sunrise12.jpg', name: 'Sunrise 12' },
        { src: '/assets/storytelling/sunrise/sunrise13.jpg', name: 'Sunrise 13' },
        { src: '/assets/storytelling/sunrise/sunrise14.jpg', name: 'Sunrise 14' },
        { src: '/assets/storytelling/sunrise/sunrise15.jpg', name: 'Sunrise 15' },
        { src: '/assets/storytelling/sunrise/sunrise16.jpg', name: 'Sunrise 16' },
      ],
      tags: ['Sunrise', 'Mountains', 'Golden Hour'],
      icon: Camera,
    },
    // Forest & Nature
    {
      title: 'Forest & Nature',
      description: 'Exploring the lush forests and natural beauty of Nepal\'s diverse ecosystems. Environmental photography celebrating biodiversity.',
      images: [
        { src: '/assets/storytelling/nature/nature1.jpg', name: 'Nature 1' },
        { src: '/assets/storytelling/nature/nature3.JPG', name: 'Nature 3' },
        { src: '/assets/storytelling/nature/nature5.jpg', name: 'Nature 5' },
        { src: '/assets/storytelling/nature/nature6.jpg', name: 'Nature 6' },
        { src: '/assets/storytelling/nature/nature7.jpg', name: 'Nature 7' },
        { src: '/assets/storytelling/nature/nature8.JPG', name: 'Nature 8' },
        { src: '/assets/storytelling/nature/nature9.jpg', name: 'Nature 9' },
        { src: '/assets/storytelling/nature/nature14.jpg', name: 'Nature 14' },
      ],
      tags: ['Nature', 'Forest', 'Environment'],
      icon: Camera,
    },
    // Professional Photography
    {
      title: 'Professional Photography',
      description: 'Professional event and portrait photography using Canon, Nikon, Sony, and Pentax systems. Capturing moments that matter.',
      images: [
        { src: '/assets/storytelling/professional/professional1.jpg', name: 'Professional 1' },
        { src: '/assets/storytelling/professional/professional2.jpg', name: 'Professional 2' },
        { src: '/assets/storytelling/professional/professional3.jpg', name: 'Professional 3' },
        { src: '/assets/storytelling/professional/professional4.JPG', name: 'Professional 4' },
        { src: '/assets/storytelling/professional/professional5.JPG', name: 'Professional 5' },
        { src: '/assets/storytelling/professional/professional6.JPG', name: 'Professional 6' },
        { src: '/assets/storytelling/professional/professional7.JPG', name: 'Professional 7' },
        { src: '/assets/storytelling/professional/professional8.JPG', name: 'Professional 8' },
        { src: '/assets/storytelling/professional/professional9.JPG', name: 'Professional 9' },
      ],
      tags: ['Professional', 'Events', 'Portraits'],
      icon: Camera,
    },
    // Cultural Heritage
    {
      title: 'Cultural Heritage',
      description: 'Architectural photography of Nepal\'s temples and cultural landmarks. Preserving heritage through imagery.',
      images: [
        { src: '/assets/storytelling/heritage/heritage-1.jpg', name: 'Heritage 1' },
        { src: '/assets/storytelling/heritage/heritage-2.jpg', name: 'Heritage 2' },
        { src: '/assets/storytelling/heritage/heritage-3.JPG', name: 'Heritage 3' },
        { src: '/assets/storytelling/heritage/heritage-4.jpg', name: 'Heritage 4' },
        { src: '/assets/storytelling/heritage/heritage-5.JPG', name: 'Heritage 5' },
        { src: '/assets/storytelling/heritage/heritage-6.JPG', name: 'Heritage 6' },
        { src: '/assets/storytelling/heritage/heritage-7.jpg', name: 'Heritage 7' },
        { src: '/assets/storytelling/heritage/heritage-8.jpg', name: 'Heritage 8' },
        { src: '/assets/storytelling/heritage/heritage-9.jpg', name: 'Heritage 9' },
      ],
      tags: ['Heritage', 'Architecture', 'Culture'],
      icon: Camera,
    },
  ],
};

// utility hook for cycling through image indices
function useSlideshow(images: Array<string | { src: string; name?: string }>) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return index;
}

// modal component to show gallery when an item is clicked
function GalleryModal({ item, onClose }: { item: any; onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  if (!item) return null;

  const imgs: Array<{ src: string; name?: string }> = (item.images || [item.image]).map(
    (img: any) => (typeof img === 'string' ? { src: img } : img),
  );

  const prev = () => setIdx((i) => (i - 1 + imgs.length) % imgs.length);
  const next = () => setIdx((i) => (i + 1) % imgs.length);

  const current = imgs[idx];

  const fallbackImage = communityCampaignImg;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="relative max-w-3xl w-full">
        <img
          src={current.src}
          alt={current.name ?? item.title}
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            if (target.src !== fallbackImage) {
              target.src = fallbackImage;
            }
          }}
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute bottom-4 left-4 right-4 text-white text-sm text-center">
          {current.name ?? item.title}
        </div>
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl"
        >
          ›
        </button>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl"
        >
          ×
        </button>
      </div>
    </div>
  );
}

// modular card component that handles slideshow of cover images and click events
function PortfolioCard({ item, index, isInView, onClick }: {
  item: any;
  index: number;
  isInView: boolean;
  onClick: () => void;
}) {
  // determine which image to show; cycle if there are multiple
  const coverIdx = useSlideshow(item.images || [item.image]);
  const cover = (item.images || [item.image])[coverIdx];
  const coverSrc = typeof cover === 'string' ? cover : cover.src;
  const coverName = typeof cover === 'string' ? undefined : cover.name;
  const fallbackCover = communityCampaignImg;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={coverSrc}
          alt={item.title}
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            if (target.src !== fallbackCover) {
              target.src = fallbackCover;
            }
          }}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {item.images && (
          <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {item.images.length} Photos
          </div>
        )}
        {coverName && (
          <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs">
            {coverName}
          </div>
        )}
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
  );
}

type PortfolioData = typeof portfolioData;

const categories = Object.keys(portfolioData) as Array<keyof PortfolioData>;

export function PortfolioPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: false });
  const [activeCategory, setActiveCategory] = useState<keyof PortfolioData>(categories[0]);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // whenever category changes, reset subcategory if applicable
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

        {/* Subcategory navigation for nested categories */}
        {activeSubcategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col md:flex-row justify-center gap-4 mb-12"
          >
            {subcategories.map((sub) => (
              <motion.button
                key={sub}
                onClick={() => setActiveSubcategory(sub)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all shadow-md ${
                  activeSubcategory === sub
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {sub}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getCurrentItems().map((item: any, index: number) => (
            <PortfolioCard
              key={item.title}
              item={item}
              index={index}
              isInView={isInView}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>

        {/* gallery modal */}
        {selectedItem && (
          <GalleryModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </motion.div>
    </div>
  );
}
