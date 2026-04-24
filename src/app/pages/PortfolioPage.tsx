import { AnimatePresence, motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Briefcase, Camera, Heart, Lightbulb, MapPin, Star, Target, Trophy, Users, Award, X } from 'lucide-react';
const communityCampaignImg = '/assets/Visual Storytelling/heritage/heritage-1.jpg';

const portfolioData = {
  'Community Impact': {
      'Social Work Camps': [
      {
        title: 'Neighborhood Social Work Camp',
        description: 'The Neighborhood Social Work Camp was a practical field activity organized by the Faculty of Humanities and Social Work at Khwopa College in 2021 as part of the academic requirements for the first-year Bachelor of Arts in Social Work (BASW) program. The six-day camp was conducted in Bhaktapur district, with students divided into four groups and assigned to four different municipalities: Bhaktapur Municipality, Suryabinayak Municipality, Changunarayan Municipality, and Madhyapur Thimi Municipality. Key activities included community social surveys, stakeholder engagement, dialogues with local representatives, group presentations, and a closing ceremony. A total of 45 students participated. In this program, I served as Group Leader. My responsibilities included leading overall camp implementation, facilitating effective teamwork, conducting regular meetings with team members and the field instructor, and ensuring the timely completion of all assigned tasks. This role strengthened my leadership, communication, and organizational skills while providing valuable hands-on experience in community engagement and social work practice.',
        image: '/assets/Community Impact/Social Work Camps/Neighborhood Social Work Camp.jpg',
        tags: ['Group Leader', 'Bhaktapur District', 'Community Engagement'],
        icon: Users
      },
      {
        title: 'Rural Social Work Camp - Ghalegaun, Lamjung',
        description: 'The Rural Social Work Camp was a practical field activity organized by the Faculty of Humanities and Social Work at Khwopa College in 2022 as part of the academic requirements for the second-year Bachelor of Arts in Social Work (BASW) program. The six-day camp was conducted in Lamjung district, specifically in Ghale Gaun and Bhujung. Students were divided into four groups, with each group assigned to develop and implement a unique thematic area. Key activities included social mapping, social surveys, community engagement, dialogues with local representatives, awareness sessions, group presentations, and a closing ceremony. A total of 45 students participated. In this program, I served as Camp Coordinator. My responsibilities included overseeing the overall implementation of the camp, coordinating among all four groups, facilitating regular meetings with team members and the field instructor, and successfully hosting the entire program. This leadership role enhanced my organizational, coordination, and problem-solving skills while providing deeper practical exposure to community-based social work.',
        image: '/assets/Community Impact/Social Work Camps/Rural Social Work Camp - Ghalegaun, Lamjung.jpg',
        tags: ['Camp Coordinator', 'Lamjung', 'Social Mapping'],
        icon: MapPin
      },
      {
        title: 'Urban Social Work Camp - Sauraha, Chitwan',
        description: 'The Urban Social Work Camp was a practical field activity organized by the Faculty of Humanities and Social Work at Khwopa College in 2023 as part of the academic requirements for the third-year Bachelor of Arts in Social Work (BASW) program. The six-day camp was conducted in Sauraha, Chitwan district. Students were divided into four groups, with each group assigned to develop and implement a unique thematic area. Key activities included seasonal calendar preparation, social surveys, community engagement, dialogues with local representatives, awareness sessions, group presentations, and a closing ceremony. A total of 45 students participated. In this program, I served as Idea and Event Manager. My responsibilities included managing logistics, planning and organizing events, and supporting the overall camp implementation in close coordination with the Camp Coordinator and the field instructor. This role strengthened my event management, logistical planning, and teamwork skills while providing valuable practical experience in urban community settings.',
        image: '/assets/Community Impact/Social Work Camps/Urban Social Work Camp - Sauraha, Chitwan.jpg',
        tags: ['Idea & Event Manager', 'Sauraha', 'Event Management'],
        icon: Users
      },
      {
        title: 'Ethnographic Research Camp - Kanyam, Ilam',
        description: 'The Ethnographic Camp was a practical field activity organized by the Faculty of Humanities and Social Work at Khwopa College in 2024 as part of the academic requirements for the fourth-year Bachelor of Arts in Social Work (BASW) program. The six-day camp was conducted in Ilam district in collaboration with students from Sociology and Journalism. Students were assigned to carry out fieldwork independently. The major purpose of the camp was to conduct ethnographic research in the community of Kanyam and to launch mini-projects in different parts of Ilam. Key activities included ethnographic research, launching mini-projects, community engagement, dialogues with local representatives, awareness sessions, group presentations, and a closing ceremony. A total of 85 students participated in the camp. In this program, I served as Grievances and Idea Management Head. My responsibilities included managing logistics, handling grievances and conflicts, supporting students facing physical and mental challenges, and contributing to the overall coordination of the camp in collaboration with the Camp Coordinator and the field instructor. This role significantly enhanced my conflict resolution, crisis management, leadership, and problem-solving skills in a real community setting.',
        image: '/assets/Community Impact/Social Work Camps/Ethnographic Research Camp - Kanyam, Ilam.jpg',
        tags: ['Grievance Management', 'Ilam', 'Ethnographic Research'],
        icon: BookOpen
      }
    ],
    'Professional Internships': [
      {
        title: 'Good Neighbors International Nepal',
        description: 'Good Neighbors International is a global humanitarian and development organization committed to improving the lives of neglected, vulnerable, and marginalized communities, with a particular emphasis on child rights and well-being. During my six-month internship with Good Neighbors International Nepal in the Sponsorship and Child Protection Department, I screened, verified, and updated records for approximately 1,400 children in the organization\'s Child Management System (CMS). I handled Gift Money Letters (GML), Annual Child Letters (ACL) Type A and Type B, and Home Visit Data; reviewed records for completeness and consistency; translated content from Nepali to English with high accuracy and cultural sensitivity; and participated in team meetings and benchmarking workshops to learn child protection frameworks and best practices.',
        image: '/assets/Community Impact/Professional Internships/Good Neighbors International Nepal.png',
        tags: ['Child Protection', 'Data Management', 'Sponsorship'],
        icon: Briefcase,
        link: 'https://www.goodneighbors.org/'
      },
      {
        title: 'Mental Health & Counseling Support (Manoshastra Research and Counseling Center)',
        description: 'ManoShastra Counseling and Research Center was founded in 2019 with a mission to make quality mental health care accessible across Nepal. During my two-month internship under the supervision of Psychologist Sazzan Shrestha, I assisted with client history taking, relaxation therapy sessions, and provided psychosocial support. I developed skills in empathetic communication, active listening, case documentation, and client-centered care, gaining practical insight into holistic mental health practices and psychosocial interventions.',
        image: '/assets/Community Impact/Professional Internships/Mental Health & Counseling Support (Manoshastra Research and Counseling Center).png',
        tags: ['Mental Health', 'Counseling', 'Psychosocial Support'],
        icon: Heart
      },
      {
        title: 'Metropolitan Police circle Thimi',
        description: 'The Metropolitan Police Circle Thimi is the primary law enforcement agency for the Madhyapur Thimi area in Bhaktapur. I completed a 300-hour internship under the supervision of a Sub-Inspector (SI) as part of my first-year fieldwork requirement. I gained practical exposure to community policing and public safety operations: supported administrative documentation, observed case handling from complaint registration to resolution, participated in stakeholder coordination, assisted organizing an awareness session during the 16 Days of Activism against Gender-Based Violence, and contributed to a social survey on safety issues within Madhyapur Thimi Municipality. These experiences strengthened my understanding of collaborative policing, community engagement, and proactive public-safety measures.',
        image: '/assets/Community Impact/Professional Internships/Metropolitan Police circle Thimi.jpg',
        tags: ['Community Policing', 'Case Handling', 'Public Safety', 'Stakeholder Coordination'],
        icon: Users
      },
      {
        title: 'Kathmandu Metropolitan City - Smart City Project',
        description: 'Under the OASC (Open & Agile Smart Cities and Communities) framework, I worked on a smart city project in collaboration with Kathmandu Metropolitan City across its 32 wards. The initiative focused on community-driven urban solutions by actively involving Tole Sudhar Samiti. For one year, I served as a key team member with Antarikchya Pratisthan Nepal under the supervision of Smart City Expert Bigyan Ghimire. My responsibilities included recruiting volunteers, facilitating orientation sessions, allocating data collection sites, monitoring field activities, and conducting regular coordination meetings with ward chairpersons and stakeholders to ensure effective project implementation.',
        image: '/assets/Community Impact/Professional Internships/Kathmandu Metropolitan City - Smart City Project.png',
        tags: ['Smart City', 'Volunteer Coordination', 'Data Collection'],
        icon: Users,
        link: 'https://kathmandu.gov.np/'
      }
    ],
    'Educational Advocacy (CSE & SRHR)': [
      { title: 'Youth Capacity Building - Life Project', description: 'Facilitated an eight-day training session on Comprehensive Sexuality Education (CSE) and its key components for four youth participants of the Life Project. The session was designed to strengthen their knowledge and capacity on CSE, enabling them to better understand, practice, and promote its core components with greater confidence.', image: '/assets/Community Impact/Educational Advocacy (CSE & SRHR)/Youth Capacity Building - Life Project.jpg', tags: ['CSE Training', 'Life Project', 'Youth Capacity'], icon: BookOpen },
      { title: 'School-Based SRHR Sessions', description: 'Facilitated comprehensive Sexual and Reproductive Health and Rights (SRHR) awareness sessions for students of Grades 8, 9, and 10, along with teachers from Grades 11 and 12. Sessions reached 47 students and focused on informed decision-making and responsible behavior.', image: '/assets/Community Impact/Educational Advocacy (CSE & SRHR)/School-Based SRHR Sessions.jpg', tags: ['SRHR Education', 'Grades 8-12', '47 Students'], icon: Users },
      { title: 'Comprehensive Sexuality Education (CSE) Program', description: 'The session on Comprehensive Sexuality Education (CSE) and its key components was facilitated for students of Grades 11 and 12, along with their teachers, with a total of 32 participants in attendance.', image: '/assets/Community Impact/Educational Advocacy (CSE & SRHR)/Comprehensive Sexuality Education (CSE) Program.jpeg', tags: ['Grades 11-12', '32 Participants', 'CSE Program'], icon: BookOpen },
      { title: 'Sexual and Reproductive Health and Rights (SRHR) Awareness', description: 'A total of 47 students from Grades 8, 9, and 10 participated in comprehensive Sexual and Reproductive Health and Rights (SRHR) awareness sessions designed to enhance their knowledge, promote informed decision-making, and encourage responsible behavior.', image: '/assets/Community Impact/Educational Advocacy (CSE & SRHR)/Sexual and Reproductive Health and Rights (SRHR) Awareness.jpg', tags: ['Grades 8-10', '47 Students', 'SRHR Awareness'], icon: Users },
      { title: 'Sexuality Education & Reproductive Health Awareness Session', description: '28 grade 10 students engaged in sexuality education and reproductive health awareness sessions.', image: '/assets/Community Impact/Educational Advocacy (CSE & SRHR)/Sexuality Education & Reproductive Health Awareness Session.jpg', tags: ['Grade 10', '28 Students', 'Reproductive Health'], icon: BookOpen },
      { title: 'SRHR Youth Champion Portfolio', description: 'Youth Champions are a group of 22 youth activists from diverse backgrounds and identities who advocate at the local level for improved sexual and reproductive health policies that support reproductive health, family planning services, comprehensive sexuality education, and meaningful youth participation within Kathmandu Valley. The project was initiated by Beyond Beijing Committee Nepal (BBC Nepal) and funded by Right Here Right Now Nepal, beginning in 2016 and concluding in 2024, and I was part of the 2023 batch. During my tenure as a Youth Champion, I engaged in professional activities including youth capacity-building trainings, proposal development, strengthening young people\'s engagement in regional and international advocacy platforms, facilitating training on CSE and its components, and developing reports. This journey gave me valuable exposure, connected me with like-minded people, and strengthened my capacity to advocate for SRHR issues through both formal and informal youth groups while contributing to regional, national, and international events and panel discussions.', image: '/assets/Community Impact/Educational Advocacy (CSE & SRHR)/SRHR Youth Champion.jpg', tags: ['Youth Champion', 'SRHR Advocacy', 'Batch 2023'], icon: Award },
      { title: 'Initiating CSE Dive Session', description: 'As a Youth Implementer with Beyond Beijing Committee Nepal, I spearheaded a strategic advocacy initiative in 2024 aimed at institutionalizing Comprehensive Sexuality Education (CSE) among students and young leaders. Facilitating sessions at Mahendra Ratna Campus and JCI Bhaktapur Junior, I engaged 60 participants through a data-driven pedagogical approach that combined interactive multimedia presentations, moderated group discussions, and rigorous pre- and post-test evaluations. This experience helped dismantle social taboos, empowered youth with essential health and rights information, and significantly strengthened my facilitation skills and professional network within the social work and activism sectors.', image: '/assets/Community Impact/Educational Advocacy (CSE & SRHR)/Initiating CSE Dive Session.jpg', tags: ['CSE Dive Session', 'Youth Implementer', '60 Participants'], icon: BookOpen },
    ],
    'Community Empowerment': [
      { title: 'Agricultural Tech Training - Kiwi Farmers', description: 'The Kiwi Fruits branding project was initiated by Top International Nepal Pvt. Ltd. with the aim of creating a safe and healthy marketing space at the national and international levels. The project was implemented in Sailung Rural Municipality in collaboration with the rural municipality. I facilitated a session for kiwi farmers on the step-by-step process of uploading data into the developed apps while also supporting the installation of QR codes on kiwi trees. The session was designed to cover the farmers involved in kiwi cultivation and strengthen their access to improved branding and traceability practices.', image: '/assets/Community Impact/Community Empowerment/Agricultural Tech Training - Kiwi Farmers.jpg', tags: ['Capacity Building', 'Kiwi Farmers', 'QR Codes'], icon: Target },
      { title: 'Local Liquor Branding - Orientation Session', description: 'A one-day awareness session on the local liquor branding process was conducted in Ramechhap Municipality in collaboration with Ward No. 2 and Ward No. 3. The session aimed to empower marginalized communities and promote systematic income generation through the branding and marketing of local products.', image: '/assets/Community Impact/Community Empowerment/Local Liquor Branding - Orientation Session.jpg', tags: ['Ramechhap', 'Branding', 'Income Generation'], icon: Lightbulb },
      { title: 'Capacity Building Training on Installation and Updating Procedure', description: 'A capacity-building training on installation and updating procedures was facilitated in Kaligandaki Rural Municipality at two locations, namely Bhayekot and Dhuwakhola. The training was conducted for local farmers to enhance their technical knowledge and practical skills.', image: '/assets/Community Impact/Community Empowerment/Capacity Building Training on Installation and Updating Procedure..JPG', tags: ['Kaligandaki', 'Farmer Training', 'Technical Skills'], icon: Target },
      { title: 'Digital Wellness Education', description: 'In the 21st century, the digital world has made everyday life easier and created new platforms and exposure, but many parents also face challenges in managing children\'s digital habits. To address this, I was hired as a facilitator by students of Bageshwori College to lead an awareness session on digital addiction in children at Manjushree Pre School and Montessoris in Nagarkot, Bhaktapur. The target audience was the parents of the school, and the five-hour session used multiple methodologies including pre-tests, post-tests, group division, solution-oriented presentations, slide-based learning, and an energizer game. The expected outcome was to help parents understand the symptoms of digital addiction and its impact on child development while encouraging healthier family practices.', image: '/assets/Community Impact/Community Empowerment/Digital Addicition.jpg', tags: ['Digital Addiction', 'Parenting', 'Nagarkot'], icon: BookOpen },
    ],
  },
  'Strategic Leadership': [
    { title: 'Pre-Induction and LOM Officer Training', description: 'The training was conducted annually, specifically for Presidents and Secretaries General, to provide comprehensive insights into the roles and responsibilities of the presidential tenure. The session was facilitated by Rashmi Shilpakar, National Vice President 2019, at CBR, in collaboration with JCI Bhaktapur and JCI Bhaktapur Lady.', image: '/assets/Strategic Leadership/Pre-Induction and LOM Officer Training.jpg', tags: ['Presidents', 'Secretaries General', 'LOM Training'], icon: Award },
    { title: 'President Meet - Historic First', description: 'The President\'s Meet marked a historic first in the history of Nepal Junior Jaycees. The event was hosted by JCI Dhulabari Junior at Kanyam, Ilam. All chapter presidents were invited and actively participated in the two-day program, which provided an opportunity for comprehensive training, peer-to-peer learning, and the sharing of leadership experiences.', image: '/assets/Strategic Leadership/President Meet - Historic First.jpg', tags: ['Historic First', 'Kanyam', 'Chapter Presidents'], icon: Trophy },
    { title: 'International Vice President Visit', description: 'Each year, JCI assigns a Vice President to conduct official chapter visits to monitor progress, provide guidance, and strengthen organizational alignment. During my leadership tenure, our chapter had the distinct opportunity to welcome the International Vice President, marking a significant milestone for the organization. The visit provided valuable insights, strategic feedback, and motivation to enhance chapter performance and leadership effectiveness.', image: '/assets/Strategic Leadership/International Vice President Visit.jpg', tags: ['International Level', 'Official Visit', 'Strategic Feedback'], icon: Trophy },
    { title: 'Water Distribution - Gaijatra Festival', description: 'The program was organized by JCI Bhaktapur Junior with the support of JCI Bhaktapur and JCI Bhaktapur Lady during the cultural festival of Gaijatra in Bhaktapur. The primary objective was to provide safe drinking water to visitors, particularly those who were new to Bhaktapur and participating in the festival. The initiative aimed to promote public health, ensure visitor comfort, and demonstrate youth-led community service.', image: '/assets/Strategic Leadership/Water Distribution - Gaijatra Festival.jpg', tags: ['Community Service', 'Gaijatra Festival', 'Bhaktapur'], icon: Heart },
    { title: 'Developing Emotional Intelligence', description: 'The program was organized in collaboration with multiple chapters within Area C and was primarily led by JCI Bhaktapur Junior. The session was facilitated by psychologist Prava Prajapati. The main objective was to enhance participants\' understanding of emotions and develop emotional intelligence. The session focused on self-awareness, emotional regulation, empathy, and effective interpersonal communication.', image: '/assets/Strategic Leadership/Developing Emotional Intelligence.jpg', tags: ['Area C', 'Psychology', 'Emotional Intelligence'], icon: BookOpen },
    { title: '41st Installation and Award Distribution Ceremony', description: 'The 41st Installation and Award Distribution Ceremony was organized as a formal leadership transition and recognition event. The Chief Guest was Santosh Pariyar, Member of Parliament. The Special Guests included Bikash Manandhar, National President of JCI Nepal, and Rajaram Gautam, National Vice President. The ceremony was held at Sweet Home and marked the formal installation of new leadership along with the recognition and award distribution.', image: '/assets/Strategic Leadership/41st Installation and Award Distribution Ceremony.jpg', tags: ['Leadership Transition', 'Award Distribution', 'Formal Ceremony'], icon: Award },
    { title: 'Area C Conference Leadership', description: 'The 2023 JCI Nepal Area "C" Conference was held on April 28–29, 2023 at Hotel View Bhrikuti in Godawari, Lalitpur District. The conference brought together members and leaders from multiple chapters within Area C. The primary objective was to strengthen leadership capabilities, foster collaboration, and enhance strategic vision.', image: '/assets/Strategic Leadership/Area C conference.jpg', tags: ['Conference', 'April 28-29, 2023', 'Area C'], icon: Users },
    { title: '50th JCI Nepal National Convention', description: 'Participated in the 50th JCI Nepal National Convention held from December 15-18, 2023. The convention brought together JCI leaders and members from across Nepal for national-level deliberations, leadership forums, strategic sessions, capacity-building workshops, and networking opportunities.', image: '/assets/Strategic Leadership/50th JCI Nepal National Convention.jpg', tags: ['50th Convention', 'December 15-18, 2023', 'National Event'], icon: Star },
    { title: '12th National Junior Jaycees Leaders\' Academy 2023', description: 'The 12th National Junior Jaycees Leaders\' Academy 2023 was hosted by Dharan Junior Jaycees under the patronage of Dharan Jaycees from November 8-10, 2023. The three-day academy focused on strengthening leadership capacity, teamwork, and communication skills among Junior Jaycees across Nepal. The program featured motivational sessions, leadership trainings, team-building activities, inter-area engagement, and a national oratory competition.', image: '/assets/Strategic Leadership/12th National Junior Jaycees Leaders\' Academy 2023.jpg', tags: ['Leaders Academy', 'November 8-10, 2023', 'Junior Jaycees'], icon: Star },
    { title: 'Area C Multi-Chapter Training', description: 'The training was hosted by JCI Banepa Junior in collaboration with Area C chapters, including JCI Bhaktapur Junior. Centered on the theme "Leadership Within You," the program emphasized self-awareness, personal accountability, and values-based leadership as foundations for effective organizational impact. The training was facilitated by the National Past President of JCI Nepal. The Mayor of Banepa Municipality attended as the Chief Guest.', image: '/assets/Strategic Leadership/Area C Multi-Chapter Training.jpg', tags: ['Multi-Chapter', 'Area C', 'Leadership Within You'], icon: Users },
  ],
  'Visual Storytelling': {
    'Cultural Heritage': [
      { title: 'Architectural Photography - Temples & Landmarks', description: 'Documenting Nepal\'s rich architectural heritage through professional photography of ancient temples, cultural landmarks, and historical sites. Preserving the visual legacy of traditional Nepali architecture and cultural monuments.', images: [{ src: '/assets/Visual Storytelling/heritage/heritage-1.jpg', name: 'Heritage 1' }, { src: '/assets/Visual Storytelling/heritage/heritage-2.jpg', name: 'Heritage 2' }, { src: '/assets/Visual Storytelling/heritage/heritage-3.JPG', name: 'Heritage 3' }, { src: '/assets/Visual Storytelling/heritage/heritage-4.jpg', name: 'Heritage 4' }, { src: '/assets/Visual Storytelling/heritage/heritage-5.JPG', name: 'Heritage 5' }, { src: '/assets/Visual Storytelling/heritage/heritage-6.JPG', name: 'Heritage 6' }, { src: '/assets/Visual Storytelling/heritage/heritage-7.jpg', name: 'Heritage 7' }, { src: '/assets/Visual Storytelling/heritage/heritage-8.jpg', name: 'Heritage 8' }, { src: '/assets/Visual Storytelling/heritage/heritage-9.jpg', name: 'Heritage 9' }], tags: ['Heritage', 'Architecture', 'Culture'], icon: Camera },
    ],
    'Landscape & Nature': [
      { title: 'Himalayan Landscapes', description: 'Capturing the majestic beauty of Nepal\'s mountain ranges and natural wonders. Professional landscape photography showcasing the Himalayas in their full glory.', images: [{ src: '/assets/Visual Storytelling/himalayas/himalayas-1.jpg', name: 'Himalayas 1' }, { src: '/assets/Visual Storytelling/himalayas/himalayas-2.jpg', name: 'Himalayas 2' }, { src: '/assets/Visual Storytelling/himalayas/himalayas-3.jpg', name: 'Himalayas 3' }, { src: '/assets/Visual Storytelling/himalayas/himalayas-4.jpg', name: 'Himalayas 4' }, { src: '/assets/Visual Storytelling/himalayas/himalayas-5.jpg', name: 'Himalayas 5' }, { src: '/assets/Visual Storytelling/himalayas/himalayas-6.jpg', name: 'Himalayas 6' }, { src: '/assets/Visual Storytelling/himalayas/himalayas-7.jpg', name: 'Himalayas 7' }, { src: '/assets/Visual Storytelling/himalayas/himalayas-8.JPG', name: 'Himalayas 8' }, { src: '/assets/Visual Storytelling/himalayas/himalayas-9.JPG', name: 'Himalayas 9' }, { src: '/assets/Visual Storytelling/himalayas/himalayas-10.jpg', name: 'Himalayas 10' }, { src: '/assets/Visual Storytelling/himalayas/himalayas-11.jpg', name: 'Himalayas 11' }], tags: ['Landscape', 'Mountains', 'Himalayas'], icon: Camera },
      { title: 'Golden Hour - Sunrise Mountain Peaks', description: 'Golden hour photography of Nepal\'s iconic mountain landscapes. Capturing the magical moments when sunlight kisses the peaks.', images: [{ src: '/assets/Visual Storytelling/sunrise/sunrise1.JPG', name: 'Sunrise 1' }, { src: '/assets/Visual Storytelling/sunrise/sunrise2.jpg', name: 'Sunrise 2' }, { src: '/assets/Visual Storytelling/sunrise/sunrise3.jpg', name: 'Sunrise 3' }, { src: '/assets/Visual Storytelling/sunrise/sunrise4.jpg', name: 'Sunrise 4' }, { src: '/assets/Visual Storytelling/sunrise/sunrise5.jpg', name: 'Sunrise 5' }, { src: '/assets/Visual Storytelling/sunrise/sunrise6.jpg', name: 'Sunrise 6' }, { src: '/assets/Visual Storytelling/sunrise/sunrise7.jpg', name: 'Sunrise 7' }, { src: '/assets/Visual Storytelling/sunrise/sunrise8.jpg', name: 'Sunrise 8' }, { src: '/assets/Visual Storytelling/sunrise/sunrise9.JPG', name: 'Sunrise 9' }, { src: '/assets/Visual Storytelling/sunrise/sunrise10.jpg', name: 'Sunrise 10' }, { src: '/assets/Visual Storytelling/sunrise/sunrise11.jpg', name: 'Sunrise 11' }, { src: '/assets/Visual Storytelling/sunrise/sunrise12.jpg', name: 'Sunrise 12' }, { src: '/assets/Visual Storytelling/sunrise/sunrise13.jpg', name: 'Sunrise 13' }, { src: '/assets/Visual Storytelling/sunrise/sunrise14.jpg', name: 'Sunrise 14' }, { src: '/assets/Visual Storytelling/sunrise/sunrise15.jpg', name: 'Sunrise 15' }, { src: '/assets/Visual Storytelling/sunrise/sunrise16.jpg', name: 'Sunrise 16' }], tags: ['Sunrise', 'Mountains', 'Golden Hour'], icon: Camera },
      { title: 'Forest & Nature Biodiversity', description: 'Exploring the lush forests and natural beauty of Nepal\'s diverse ecosystems. Environmental photography celebrating biodiversity.', images: [{ src: '/assets/Visual Storytelling/nature/nature1.jpg', name: 'Dense Forest Canopy' }, { src: '/assets/Visual Storytelling/nature/nature3.JPG', name: 'Moss-Covered Trees' }, { src: '/assets/Visual Storytelling/nature/nature5.jpg', name: 'Alpine Meadow Flora' }, { src: '/assets/Visual Storytelling/nature/nature6.jpg', name: 'Forest Stream Habitat' }, { src: '/assets/Visual Storytelling/nature/nature7.jpg', name: 'Rocky Forest Gorge' }, { src: '/assets/Visual Storytelling/nature/nature8.JPG', name: 'Green Valley Forest' }, { src: '/assets/Visual Storytelling/nature/nature9.jpg', name: 'Forest Detail Close-up' }, { src: '/assets/Visual Storytelling/nature/nature11.jpg', name: 'Morning Mist Forest' }, { src: '/assets/Visual Storytelling/nature/nature14.jpg', name: 'Biodiversity Rich Scene' }], tags: ['Nature', 'Forest', 'Environment'], icon: Camera },
    ],
    'Documentary Photography': [
      { title: 'Rural Nepal Village Life', description: 'Documentary photography showcasing the authentic life in Nepal\'s countryside. Capturing the essence of rural communities and their daily lives.', images: [{ src: '/assets/Visual Storytelling/rural/rural1.jpg', name: 'Rural 1' }, { src: '/assets/Visual Storytelling/rural/rural2.jpg', name: 'Rural 2' }, { src: '/assets/Visual Storytelling/rural/rural3.jpg', name: 'Rural 3' }, { src: '/assets/Visual Storytelling/rural/rural4.jpg', name: 'Rural 4' }, { src: '/assets/Visual Storytelling/rural/rural5.jpg', name: 'Rural 5' }, { src: '/assets/Visual Storytelling/rural/rural6.JPG', name: 'Rural 6' }, { src: '/assets/Visual Storytelling/rural/rural7.JPG', name: 'Rural 7' }, { src: '/assets/Visual Storytelling/rural/rural8.JPG', name: 'Rural 8' }, { src: '/assets/Visual Storytelling/rural/rural9.jpg', name: 'Rural 9' }, { src: '/assets/Visual Storytelling/rural/rural10.jpg', name: 'Rural 10' }, { src: '/assets/Visual Storytelling/rural/rural11.JPG', name: 'Rural 11' }, { src: '/assets/Visual Storytelling/rural/rural12.jpg', name: 'Rural 12' }, { src: '/assets/Visual Storytelling/rural/rural13.jpg', name: 'Rural 13' }, { src: '/assets/Visual Storytelling/rural/rural14.JPG', name: 'Rural 14' }, { src: '/assets/Visual Storytelling/rural/rural15.jpg', name: 'Rural 15' }, { src: '/assets/Visual Storytelling/rural/rural16.jpeg', name: 'Rural 16' }, { src: '/assets/Visual Storytelling/rural/rural17.jpg', name: 'Rural 17' }, { src: '/assets/Visual Storytelling/rural/rural18.jpg', name: 'Rural 18' }, { src: '/assets/Visual Storytelling/rural/rural19.jpg', name: 'Rural 19' }, { src: '/assets/Visual Storytelling/rural/rural20.jpg', name: 'Rural 20' }, { src: '/assets/Visual Storytelling/rural/rural21.jpg', name: 'Rural 21' }, { src: '/assets/Visual Storytelling/rural/rural22.jpg', name: 'Rural 22' }, { src: '/assets/Visual Storytelling/rural/rural23.jpg', name: 'Rural 23' }, { src: '/assets/Visual Storytelling/rural/rural24.JPG', name: 'Rural 24' }, { src: '/assets/Visual Storytelling/rural/rural25.JPG', name: 'Rural 25' }, { src: '/assets/Visual Storytelling/rural/rural26.jpg', name: 'Rural 26' }], tags: ['Documentary', 'Village Life', 'Rural Nepal'], icon: Camera },
      { title: 'Professional Portraiture & Events', description: 'Professional event and portrait photography using Canon, Nikon, Sony, and Pentax systems. Capturing moments that matter in leadership, community events, and character-driven storytelling.', images: [{ src: '/assets/Visual Storytelling/professional/professional1.jpg', name: 'Professional 1' }, { src: '/assets/Visual Storytelling/professional/professional2.jpg', name: 'Professional 2' }, { src: '/assets/Visual Storytelling/professional/professional3.jpg', name: 'Professional 3' }, { src: '/assets/Visual Storytelling/professional/professional4.JPG', name: 'Professional 4' }, { src: '/assets/Visual Storytelling/professional/professional5.JPG', name: 'Professional 5' }, { src: '/assets/Visual Storytelling/professional/professional6.JPG', name: 'Professional 6' }, { src: '/assets/Visual Storytelling/professional/professional7.JPG', name: 'Professional 7' }, { src: '/assets/Visual Storytelling/professional/professional8.JPG', name: 'Professional 8' }, { src: '/assets/Visual Storytelling/professional/professional9.JPG', name: 'Professional 9' }], tags: ['Professional', 'Training Sessions', 'Portraits'], icon: Camera },
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

type PortfolioData = typeof portfolioData;
type PortfolioCategory = keyof PortfolioData;
type PortfolioItem = {
  title: string;
  description: string;
  image?: string;
  images?: Array<string | { src: string; name?: string }>;
  tags?: string[];
  icon?: any;
  link?: string;
};
type PortfolioEntry = {
  item: PortfolioItem;
  category: PortfolioCategory;
  subcategory: string | null;
};
type GalleryAsset = {
  src: string;
  name?: string;
};
type VisualGalleryFilter = 'All' | 'Field Work' | 'Community Engagement' | 'Training Sessions' | 'Documentation';
type VisualGalleryImage = {
  id: string;
  src: string;
  alt: string;
  filters: VisualGalleryFilter[];
  sourceTitle: string;
};

const categories = Object.keys(portfolioData) as PortfolioCategory[];
const visualGalleryFilters: VisualGalleryFilter[] = ['All', 'Field Work', 'Community Engagement', 'Training Sessions', 'Documentation'];
const visualGalleryAssignments: Record<string, Exclude<VisualGalleryFilter, 'All'>[]> = {
  'Architectural Photography - Temples & Landmarks': ['Documentation'],
  'Himalayan Landscapes': ['Field Work'],
  'Golden Hour - Sunrise Mountain Peaks': ['Field Work'],
  'Forest & Nature Biodiversity': ['Field Work', 'Documentation'],
  'Rural Nepal Village Life': ['Field Work', 'Community Engagement', 'Documentation'],
  'Professional Portraiture & Events': ['Training Sessions', 'Community Engagement'],
};

function normalizeImages(item: PortfolioItem): GalleryAsset[] {
  return uniqueImages(item.images || (item.image ? [item.image] : [])).map((img) =>
    typeof img === 'string' ? { src: img } : { src: img.src, name: img.name }
  );
}

function getCategoryEntriesWithContext(category: PortfolioCategory): PortfolioEntry[] {
  const data = portfolioData[category];
  if (Array.isArray(data)) {
    return data.map((item) => ({ item, category, subcategory: null }));
  }

  return Object.entries(data).flatMap(([subcategory, items]) =>
    items.map((item) => ({
      item,
      category,
      subcategory,
    }))
  );
}

function getEntriesForSelection(category: PortfolioCategory, subcategory: string | null) {
  const data = portfolioData[category];
  if (Array.isArray(data)) {
    return data.map((item) => ({ item, category, subcategory: null }));
  }

  const groupedItems = data as Record<string, PortfolioItem[]>;
  if (subcategory && groupedItems[subcategory]) {
    return groupedItems[subcategory].map((item) => ({ item, category, subcategory }));
  }

  return Object.entries(groupedItems).flatMap(([group, items]) =>
    items.map((item) => ({
      item,
      category,
      subcategory: group,
    }))
  );
}

function getItemImageCount(item: PortfolioItem) {
  return Math.max(normalizeImages(item).length, item.image ? 1 : 0);
}

function getDescriptionSentences(description: string) {
  return description
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function getOverviewParagraphs(description: string) {
  const sentences = getDescriptionSentences(description);
  if (sentences.length <= 2) return [description];

  const splitPoint = Math.ceil(sentences.length / 2);
  return [sentences.slice(0, splitPoint).join(' '), sentences.slice(splitPoint).join(' ')];
}

function getRelatedEntries(entry: PortfolioEntry, limit = 3) {
  const allEntries = getCategoryEntriesWithContext(entry.category).filter((candidate) => candidate.item.title !== entry.item.title);
  const sameSubcategory = entry.subcategory
    ? allEntries.filter((candidate) => candidate.subcategory === entry.subcategory)
    : [];
  const remaining = allEntries.filter(
    (candidate) => !sameSubcategory.some((match) => match.item.title === candidate.item.title)
  );

  return [...sameSubcategory, ...remaining].slice(0, limit);
}

function scrollToSelector(selector: string) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
}

function getVisualStorytellingGalleryImages() {
  return getCategoryEntriesWithContext('Visual Storytelling').flatMap((entry) => {
    const filters = visualGalleryAssignments[entry.item.title] ?? ['Documentation'];

    return normalizeImages(entry.item).map((image, index) => ({
      id: `${entry.item.title}-${index}-${image.src}`,
      src: image.src,
      alt: image.name ?? `${entry.item.title} image ${index + 1}`,
      filters,
      sourceTitle: entry.item.title,
    }));
  });
}

const portfolioSummary = categories.map((category) => {
  const entries = getCategoryEntriesWithContext(category);
  return {
    category,
    entries: entries.length,
    images: entries.reduce((total, entry) => total + Math.max(getItemImageCount(entry.item), 1), 0),
  };
});
const visualStorytellingGalleryImages = getVisualStorytellingGalleryImages();

function LandingCard({
  entry,
  index,
  onOpen,
}: {
  entry: PortfolioEntry;
  index: number;
  onOpen: (entry: PortfolioEntry) => void;
}) {
  const coverImage = normalizeImages(entry.item)[0]?.src ?? communityCampaignImg;
  const shortDescription =
    entry.item.description.length > 150 ? `${entry.item.description.slice(0, 150)}...` : entry.item.description;
  const Icon = entry.item.icon || Star;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="group flex h-full min-h-[31rem] flex-col rounded-[2rem] border border-white/70 bg-white/65 p-3 shadow-[0_28px_90px_-52px_rgba(15,23,42,0.55)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_90px_-40px_rgba(15,23,42,0.45)]"
    >
      <div className="flex h-full flex-col rounded-[1.6rem] border border-slate-200/70 bg-white/88 p-5">
        <div className="flex h-56 items-center justify-center rounded-[1.5rem] border border-slate-200/80 bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.22),_transparent_35%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4 shadow-inner shadow-slate-200/50">
          <img
            src={coverImage}
            alt={`${entry.item.title} cover`}
            className="h-full w-full object-contain transition duration-300 group-hover:brightness-105"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              if (target.src !== communityCampaignImg) target.src = communityCampaignImg;
            }}
          />
        </div>

        <div className="mt-5 flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-100 bg-cyan-50 text-cyan-900 shadow-sm">
            <Icon size={20} />
          </div>
          <div className="min-w-0">
            <h3 className="text-[1.45rem] font-semibold leading-tight tracking-tight text-slate-950 [font-family:'Iowan_Old_Style','Palatino_Linotype','Book_Antiqua',serif]">
              {entry.item.title}
            </h3>
          </div>
        </div>

        <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{shortDescription}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {entry.item.tags?.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
              {tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onOpen(entry)}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-950 hover:text-white"
        >
          See More
          <ArrowRight size={16} />
        </button>
      </div>
    </motion.article>
  );
}

function VisualStorytellingLightbox({
  images,
  initialIndex,
  onClose,
}: {
  images: VisualGalleryImage[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setActiveIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current - 1 + images.length) % images.length);
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current + 1) % images.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [images.length, onClose]);

  const activeImage = images[activeIndex];
  if (!activeImage) return null;

  const goToPrevious = () => setActiveIndex((current) => (current - 1 + images.length) % images.length);
  const goToNext = () => setActiveIndex((current) => (current + 1) % images.length);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/88 p-4 backdrop-blur-md md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
    >
      <motion.div
        className="relative flex h-full w-full max-w-7xl items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.12),_transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.82)_0%,rgba(2,6,23,0.94)_100%)] p-4 shadow-[0_40px_140px_-60px_rgba(15,23,42,0.85)] md:p-8"
        initial={{ opacity: 0, scale: 0.98, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.985, y: 16 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        onClick={(event) => event.stopPropagation()}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null) return;
          const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
          const deltaX = touchEndX - touchStartX.current;

          if (deltaX > 48) goToPrevious();
          if (deltaX < -48) goToNext();
          touchStartX.current = null;
        }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/16"
        >
          <X size={18} />
        </button>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/16 md:left-5"
            >
              <ArrowRight size={18} className="rotate-180" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-3 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/16 md:right-5"
            >
              <ArrowRight size={18} />
            </button>
          </>
        )}

        <motion.img
          key={activeImage.id}
          src={activeImage.src}
          alt={activeImage.alt}
          className="max-h-full max-w-full object-contain"
          loading="eager"
          decoding="async"
          initial={{ opacity: 0.2, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.22 }}
          onError={(event) => {
            const target = event.currentTarget as HTMLImageElement;
            if (target.src !== communityCampaignImg) target.src = communityCampaignImg;
          }}
        />
      </motion.div>
    </motion.div>
  );
}

function VisualStorytellingDashboard() {
  const [activeFilter, setActiveFilter] = useState<VisualGalleryFilter>('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const filteredImages =
    activeFilter === 'All'
      ? visualStorytellingGalleryImages
      : visualStorytellingGalleryImages.filter((image) => image.filters.includes(activeFilter));

  return (
    <div className="space-y-8">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-[2rem] border border-white/80 bg-white/74 px-5 py-6 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:px-7"
      >
        <div className="h-px w-16 bg-gradient-to-r from-teal-600 via-cyan-500 to-transparent" />
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 [font-family:'Iowan_Old_Style','Palatino_Linotype','Book_Antiqua',serif]">
          Visual Storytelling
        </h2>
        <p className="mt-2 text-sm text-slate-500">Collection of field visuals / project documentation</p>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex min-w-max gap-3">
          {visualGalleryFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => {
                setActiveFilter(filter);
                setSelectedIndex(null);
              }}
              className={`rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                activeFilter === filter
                  ? 'border-teal-700 bg-teal-700 text-white shadow-[0_12px_30px_-16px_rgba(15,118,110,0.7)]'
                  : 'border-white/90 bg-white/82 text-slate-700 hover:border-slate-300 hover:bg-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28 }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-5 xl:grid-cols-4"
        >
          {filteredImages.map((image, index) => (
            <motion.button
              key={image.id}
              type="button"
              onClick={() => setSelectedIndex(index)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.99 }}
              className="group relative overflow-hidden rounded-[1.35rem] border border-white/85 bg-white/78 p-3 text-left shadow-[0_22px_50px_-34px_rgba(15,23,42,0.38)] backdrop-blur-xl transition duration-300 hover:shadow-[0_28px_70px_-32px_rgba(13,148,136,0.3)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.12),_transparent_34%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-contain p-2 transition duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                  onError={(event) => {
                    const target = event.currentTarget as HTMLImageElement;
                    if (target.src !== communityCampaignImg) target.src = communityCampaignImg;
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(15,23,42,0.08)_100%)] opacity-0 transition duration-300 group-hover:opacity-100" />
              </div>
            </motion.button>
          ))}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selectedIndex !== null && filteredImages.length > 0 && (
          <VisualStorytellingLightbox
            images={filteredImages}
            initialIndex={selectedIndex}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function PortfolioDetailView({
  entry,
  onBack,
  onSelectRelated,
}: {
  entry: PortfolioEntry;
  onBack: () => void;
  onSelectRelated: (entry: PortfolioEntry) => void;
}) {
  const coverImage = normalizeImages(entry.item)[0]?.src ?? communityCampaignImg;
  const overviewParagraphs = getOverviewParagraphs(entry.item.description);
  const relatedEntries = getRelatedEntries(entry, 3);
  const Icon = entry.item.icon || Star;

  return (
    <div className="space-y-8 md:space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/70 bg-white/70 px-5 py-4 shadow-sm backdrop-blur-xl">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-950 hover:text-white"
        >
          <ArrowRight size={16} className="rotate-180" />
          Back to Portfolio
        </button>
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span>{entry.category}</span>
          {entry.subcategory && (
            <>
              <span className="text-slate-300">/</span>
              <span>{entry.subcategory}</span>
            </>
          )}
        </div>
      </div>

      <section className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/60 shadow-[0_30px_100px_-50px_rgba(15,23,42,0.5)] backdrop-blur-xl">
        <div className="aspect-[21/10] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.18),_transparent_28%),linear-gradient(180deg,#ffffff_0%,#eff6ff_100%)] p-6 md:aspect-[21/8] md:p-10">
          <img
            src={coverImage}
            alt={entry.item.title}
            className="h-full w-full object-contain"
            loading="eager"
            decoding="async"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              if (target.src !== communityCampaignImg) target.src = communityCampaignImg;
            }}
          />
        </div>

        <div className="relative -mt-12 px-4 pb-6 md:-mt-16 md:px-10 md:pb-10">
          <div className="rounded-[2rem] border border-white/80 bg-white/78 p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur-xl md:p-8">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cyan-900">
                Feature Story
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-slate-600">
                {entry.subcategory ?? entry.category}
              </span>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-4xl">
                <div className="mb-3 flex items-center gap-3 text-slate-500">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-100 bg-cyan-50 text-cyan-900">
                    <Icon size={20} />
                  </div>
                  <span className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                    {entry.category}
                  </span>
                </div>

                <h1 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl [font-family:'Iowan_Old_Style','Palatino_Linotype','Book_Antiqua',serif]">
                  {entry.item.title}
                </h1>
              </div>

              <div className="flex flex-wrap gap-3">
                {entry.item.link && (
                  <a
                    href={entry.item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Visit Reference
                    <ArrowRight size={16} />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => scrollToSelector('#contact')}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Contact
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="rounded-[2rem] border border-white/70 bg-white/72 p-6 shadow-[0_22px_70px_-45px_rgba(15,23,42,0.45)] backdrop-blur-xl md:p-8">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">Detailed Content Overview</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl [font-family:'Iowan_Old_Style','Palatino_Linotype','Book_Antiqua',serif]">
            Overview
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
            {overviewParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="w-full sm:w-fit sm:max-w-sm">
          <div className="rounded-[2rem] border border-white/70 bg-white/72 p-6 shadow-[0_22px_70px_-45px_rgba(15,23,42,0.45)] backdrop-blur-xl">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">Quick Positioning</div>
            <div className="mt-4 flex flex-col items-start gap-2">
              {entry.item.tags?.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {relatedEntries.length > 0 && (
        <section className="rounded-[2rem] border border-white/70 bg-white/72 p-6 shadow-[0_22px_70px_-45px_rgba(15,23,42,0.45)] backdrop-blur-xl md:p-8">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">Similar Content Recommendations</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl [font-family:'Iowan_Old_Style','Palatino_Linotype','Book_Antiqua',serif]">
            Related portfolio stories
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {relatedEntries.map((related) => {
              const relatedCover = normalizeImages(related.item)[0]?.src ?? communityCampaignImg;

              return (
                <button
                  key={related.item.title}
                  type="button"
                  onClick={() => onSelectRelated(related)}
                  className="group rounded-[1.6rem] border border-slate-200 bg-white/85 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex aspect-[16/10] items-center justify-center rounded-[1.25rem] bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4">
                    <img
                      src={relatedCover}
                      alt={related.item.title}
                      className="h-full w-full object-contain transition duration-300 group-hover:brightness-105"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        if (target.src !== communityCampaignImg) target.src = communityCampaignImg;
                      }}
                    />
                  </div>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {related.subcategory ?? related.category}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-slate-950">{related.item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {related.item.description.length > 100 ? `${related.item.description.slice(0, 100)}...` : related.item.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                    Explore Story
                    <ArrowRight size={16} />
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}

    </div>
  );
}

export function PortfolioPage() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>(categories[0]);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [selectedContent, setSelectedContent] = useState<PortfolioEntry | null>(null);

  useEffect(() => {
    setActiveSubcategory(null);
  }, [activeCategory]);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [selectedContent, activeCategory, activeSubcategory]);

  const activeCategoryData = portfolioData[activeCategory];
  const isVisualStorytelling = activeCategory === 'Visual Storytelling';
  const subcategories = Array.isArray(activeCategoryData) ? [] : Object.keys(activeCategoryData);
  const rowItems = getEntriesForSelection(activeCategory, activeSubcategory);
  const totalEntries = portfolioSummary.reduce((sum, item) => sum + item.entries, 0);
  const totalImages = portfolioSummary.reduce((sum, item) => sum + item.images, 0);
  const summaryMetrics = [
    { label: 'Practice Areas', value: categories.length },
    { label: 'Content Stories', value: `${totalEntries}+` },
    { label: 'Visual Assets', value: `${totalImages}+` },
  ];

  const openEntry = (entry: PortfolioEntry) => {
    setSelectedContent(entry);
  };

  return (
    <div id="portfolio" className="cursor-none min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.12),_transparent_24%),linear-gradient(180deg,#f8fafc_0%,#ffffff_46%,#f8fafc_100%)] pt-24 pb-20 text-slate-900">
      <CustomCursor />
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref} initial={{ opacity: 0 }} animate={{ opacity: isInView ? 1 : 0.3 }} transition={{ duration: 0.6 }}>
        <AnimatePresence mode="wait" initial={false}>
          {selectedContent ? (
            <motion.div
              key={`detail-${selectedContent.item.title}`}
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.985 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <PortfolioDetailView
                entry={selectedContent}
                onBack={() => setSelectedContent(null)}
                onSelectRelated={(entry) => {
                  setSelectedContent(entry);
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              key={`browse-${activeCategory}-${activeSubcategory ?? 'all'}`}
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.985 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {!isVisualStorytelling && (
                <motion.section
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.8 }}
                  className="relative mb-12 overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/60 shadow-[0_28px_100px_-48px_rgba(15,23,42,0.5)] backdrop-blur-xl"
                >
                  <div className="absolute left-12 top-10 h-36 w-36 rounded-full bg-cyan-200/40 blur-3xl" />
                  <div className="absolute bottom-8 right-8 h-40 w-40 rounded-full bg-amber-200/40 blur-3xl" />

                  <div className="relative px-5 py-6 md:px-8 md:py-8">
                    <div className="grid gap-3 md:grid-cols-3">
                      {summaryMetrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="flex min-h-[6.75rem] flex-col justify-between rounded-[1.5rem] border border-white/80 bg-white/78 p-4 shadow-sm backdrop-blur"
                        >
                          <div className="text-[0.72rem] uppercase tracking-[0.18em] text-slate-500">{metric.label}</div>
                          <div className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-[2rem]">{metric.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-[1.8rem] border border-white/60 bg-[linear-gradient(160deg,rgba(15,23,42,0.96)_0%,rgba(15,118,110,0.92)_100%)] p-5 text-white shadow-[0_24px_80px_-40px_rgba(15,23,42,0.55)] md:p-6">
                      <div className="text-[0.72rem] uppercase tracking-[0.22em] text-cyan-200">Current Focus</div>
                      <h2 className="mt-2 text-xl font-semibold leading-tight md:text-2xl">{activeCategory}</h2>
                      <div className="mt-5 grid gap-3 lg:grid-cols-2 xl:grid-cols-3">
                        {portfolioSummary.map((summary) => (
                          <button
                            key={summary.category}
                            type="button"
                            onClick={() => setActiveCategory(summary.category)}
                            className={`group flex min-h-[6.75rem] w-full flex-col justify-between rounded-[1.3rem] border px-4 py-3.5 text-left transition ${
                              activeCategory === summary.category
                                ? 'border-white/35 bg-white/14 shadow-[0_18px_48px_-36px_rgba(255,255,255,0.55)]'
                                : 'border-white/10 bg-white/6 hover:bg-white/10'
                            }`}
                          >
                            <div className="min-w-0">
                              <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-cyan-100">
                                {summary.entries} items
                              </div>
                              <div className="mt-3 text-base font-semibold leading-snug text-white md:text-[1.05rem]">{summary.category}</div>
                            </div>
                            <div className="mt-3 flex justify-end">
                              <ArrowRight size={16} className="text-cyan-200 transition group-hover:translate-x-1" />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.section>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="mb-6 flex flex-wrap gap-3"
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
                        : 'border-white/80 bg-white/75 text-slate-700 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>

              {isVisualStorytelling ? (
                <VisualStorytellingDashboard />
              ) : (
                <>
                  {subcategories.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: 0.24 }}
                      className="mb-8 flex flex-wrap gap-3"
                    >
                      <button
                        type="button"
                        onClick={() => setActiveSubcategory(null)}
                        className={`rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                          activeSubcategory === null
                            ? 'border-cyan-900 bg-cyan-900 text-white'
                            : 'border-white/80 bg-white/75 text-slate-700 hover:border-slate-300 hover:bg-white'
                        }`}
                      >
                        All
                      </button>
                      {subcategories.map((sub) => (
                        <button
                          key={sub}
                          type="button"
                          onClick={() => setActiveSubcategory(sub)}
                          className={`rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                            activeSubcategory === sub
                              ? 'border-cyan-900 bg-cyan-900 text-white'
                              : 'border-white/80 bg-white/75 text-slate-700 hover:border-slate-300 hover:bg-white'
                          }`}
                        >
                          {sub}
                        </button>
                      ))}
                    </motion.div>
                  )}

                  <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {rowItems.map((entry, index) => (
                      <LandingCard key={`${entry.category}-${entry.subcategory ?? 'all'}-${entry.item.title}`} entry={entry} index={index} onOpen={openEntry} />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
