import type { LanguageMode } from '../context/UiPreferencesContext';

type TranslatedCategoryMap = Record<string, string>;

export const siteText: Record<
  LanguageMode,
  {
    fab: {
      main: string;
      open: string;
      close: string;
      switchToDark: string;
      switchToLight: string;
      switchToEnglish: string;
      switchToNepali: string;
    };
    navigation: {
      home: string;
      about: string;
      portfolio: string;
      skills: string;
      contact: string;
      connect: string;
    };
    meta: {
      title: string;
      description: string;
    };
    home: {
      tagline: string;
      explore: string;
      downloadCv: string;
      profileAlt: string;
      stats: {
        experience: string;
        projects: string;
        reached: string;
      };
      currentFocusLabel: string;
      currentFocusValue: string;
      basedInLabel: string;
      basedInValue: string;
      scroll: string;
      socials: {
        facebook: string;
        instagram: string;
        linkedIn: string;
        email: string;
      };
    };
    about: {
      eyebrow: string;
      imageAlt: string;
      approachLabel: string;
      approachValue: string;
      paragraphs: string[];
      features: Array<{
        title: string;
        description: string;
      }>;
    };
    skills: {
      title: string;
      description: string;
      categories: Array<{
        title: string;
        skills: Array<{
          name: string;
          level: number;
        }>;
      }>;
      toolsTitle: string;
      tools: string[];
    };
    contact: {
      eyebrow: string;
      title: string;
      description: string;
      infoTitle: string;
      infoLead: string;
      labels: {
        email: string;
        phone: string;
        location: string;
      };
      locationValue: string;
      subjectPrefix: string;
      follow: string;
      quickMessage: string;
      introTitle: string;
      responseFriendly: string;
      fields: {
        name: string;
        email: string;
        message: string;
      };
      placeholders: {
        name: string;
        email: string;
        message: string;
      };
      submitHint: string;
      send: string;
      directEmail: string;
      followLinks: {
        facebook: string;
        instagram: string;
        linkedIn: string;
        email: string;
      };
    };
    footer: {
      eyebrow: string;
      madeWith: string;
      by: string;
      description: string;
      home: string;
      about: string;
      portfolio: string;
      skills: string;
      contact: string;
      backToTop: string;
      rights: string;
    };
    errorBoundary: {
      eyebrow: string;
      title: string;
      description: string;
    };
    portfolio: {
      summaryMetrics: {
        practiceAreas: string;
        contentStories: string;
        visualAssets: string;
      };
      currentFocus: string;
      items: string;
      all: string;
      seeMore: string;
      visualTitle: string;
      visualDescription: string;
      filters: Record<string, string>;
      backToPortfolio: string;
      featureStory: string;
      visitReference: string;
      contact: string;
      detailedContentOverview: string;
      overview: string;
      quickPositioning: string;
      similarContentRecommendations: string;
      relatedPortfolioStories: string;
      exploreStory: string;
      categories: TranslatedCategoryMap;
      subcategories: TranslatedCategoryMap;
    };
  }
> = {
  en: {
    fab: {
      main: 'Quick Controls',
      open: 'Open quick controls',
      close: 'Close quick controls',
      switchToDark: 'Dark Mode',
      switchToLight: 'Light Mode',
      switchToEnglish: 'English',
      switchToNepali: 'नेपाली',
    },
    navigation: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      skills: 'Skills',
      contact: 'Contact',
      connect: 'Connect',
    },
    meta: {
      title: 'Umesh Raskoti - Portfolio',
      description: 'Portfolio of Umesh Raskoti, showcasing skills, projects, and experiences in social work, leadership, and storytelling.',
    },
    home: {
      tagline: 'Leading with Purpose. Documenting with Heart.',
      explore: 'Explore Portfolio',
      downloadCv: 'Download CV',
      profileAlt: 'Umesh Raskoti portrait',
      stats: {
        experience: 'Years Experience',
        projects: 'Key Projects',
        reached: 'People Reached',
      },
      currentFocusLabel: 'Current Focus',
      currentFocusValue: 'Youth advocacy and community-centered coordination',
      basedInLabel: 'Based In',
      basedInValue: 'Bhaktapur, Nepal',
      scroll: 'Scroll to explore',
      socials: {
        facebook: 'Facebook',
        instagram: 'Instagram',
        linkedIn: 'LinkedIn',
        email: 'Email',
      },
    },
    about: {
      eyebrow: 'About Me',
      imageAlt: 'Umesh Raskoti portrait',
      approachLabel: 'Approach',
      approachValue: 'People-first, evidence-based, visually aware',
      paragraphs: [
        'I have always believed that real change does not happen from the sidelines. It happens through action, empathy, and being present in the community. My journey in social work and psychology has been guided by a simple goal: to understand people better so I can serve them more effectively. Whether I am contributing to urban development projects at Kathmandu Metropolitan City or leading initiatives as President of JCI Bhaktapur Junior, I find the greatest meaning in work that helps others discover and strengthen their own voice.',
        'I see myself as a social worker at heart, but I carry a camera to stay grounded. Photography allows me to notice and preserve the quiet stories of resilience that often go unseen. For me, social work is not only a career path but a long-term commitment to helping transform society for the better. I am always looking for ways to blend leadership, advocacy, and creativity to leave a lasting and positive impact on communities.',
      ],
      features: [
        {
          title: 'Program Coordination',
          description: 'Expert in organizing and managing social development programs and community initiatives.',
        },
        {
          title: 'Advocacy & Training',
          description: 'Certified in TOT and TBT, facilitating awareness sessions and community engagement.',
        },
        {
          title: 'Leadership',
          description: 'Best Leadership Award 2023 by JCI Nepal, with proven track record in team management.',
        },
        {
          title: 'Community Impact',
          description: 'Passionate about creating sustainable social change through collaborative efforts.',
        },
      ],
    },
    skills: {
      title: 'Skills & Expertise',
      description: 'A practical toolkit built from program implementation, community engagement, facilitation, documentation, and visual storytelling.',
      categories: [
        {
          title: 'Professional Skills',
          skills: [
            { name: 'Program Management', level: 90 },
            { name: 'Data Management', level: 85 },
            { name: 'Community Advocacy', level: 95 },
            { name: 'Project Coordination', level: 90 },
          ],
        },
        {
          title: 'Technical Skills',
          skills: [
            { name: 'MS Office Suite', level: 90 },
            { name: 'Kobo Collect', level: 80 },
            { name: 'Adobe Lightroom', level: 85 },
            { name: 'Canva Design', level: 90 },
          ],
        },
        {
          title: 'Specialized Training',
          skills: [
            { name: 'TOT Certification', level: 95 },
            { name: 'TBT Training', level: 90 },
            { name: 'Counseling', level: 85 },
            { name: 'Photography', level: 88 },
          ],
        },
      ],
      toolsTitle: 'Tools, Platforms, and Working Languages',
      tools: [
        'MS Word',
        'MS Excel',
        'PowerPoint',
        'Kobo Collect',
        'Google Forms',
        'Microsoft Teams',
        'Zoom',
        'Adobe Lightroom',
        'Photoshop',
        'CapCut',
        'Canva',
        'English',
        'Nepali',
        'Hindi',
        'Magar',
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s connect around meaningful projects and creative collaborations.',
      description: 'If you are working on community outreach, advocacy, documentation, training, or a story-led campaign, I’d be glad to hear from you.',
      infoTitle: 'Contact Information',
      infoLead: 'Reach out through any of the options below. The form on the right opens your email app with your message pre-filled, so sending a message works immediately.',
      labels: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
      },
      locationValue: 'Suryabinayak, Bhaktapur 44800',
      subjectPrefix: 'Portfolio inquiry from',
      follow: 'Follow Me',
      quickMessage: 'Quick Message',
      introTitle: 'Send an introduction',
      responseFriendly: 'Response-friendly',
      fields: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
      },
      placeholders: {
        name: 'Your name',
        email: 'your.email@example.com',
        message: 'Tell me about your project...',
      },
      submitHint: 'Submitting this form opens your email client with a prepared message so you can send it directly.',
      send: 'Send Message',
      directEmail: 'Or email directly',
      followLinks: {
        facebook: 'Facebook',
        instagram: 'Instagram',
        linkedIn: 'LinkedIn',
        email: 'Email',
      },
    },
    footer: {
      eyebrow: 'Portfolio',
      madeWith: 'Made with',
      by: 'by',
      description: 'Social work, advocacy, leadership, and documentary storytelling brought together in one practice-led portfolio.',
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      skills: 'Skills',
      contact: 'Contact',
      backToTop: 'Back to Top',
      rights: 'All rights reserved.',
    },
    errorBoundary: {
      eyebrow: 'Render Error',
      title: 'The portfolio hit a runtime error.',
      description:
        'The app loaded, but one section failed while rendering. Refresh once. If it still happens, the message below will help identify the broken component.',
    },
    portfolio: {
      summaryMetrics: {
        practiceAreas: 'Practice Areas',
        contentStories: 'Content Stories',
        visualAssets: 'Visual Assets',
      },
      currentFocus: 'Current Focus',
      items: 'items',
      all: 'All',
      seeMore: 'See More',
      visualTitle: 'Visual Storytelling',
      visualDescription: 'Collection of field visuals / project documentation',
      filters: {
        All: 'All',
        'Field Work': 'Field Work',
        'Community Engagement': 'Community Engagement',
        'Training Sessions': 'Training Sessions',
        Documentation: 'Documentation',
      },
      backToPortfolio: 'Back to Portfolio',
      featureStory: 'Feature Story',
      visitReference: 'Visit Reference',
      contact: 'Contact',
      detailedContentOverview: 'Detailed Content Overview',
      overview: 'Overview',
      quickPositioning: 'Quick Positioning',
      similarContentRecommendations: 'Similar Content Recommendations',
      relatedPortfolioStories: 'Related portfolio stories',
      exploreStory: 'Explore Story',
      categories: {
        'Community Impact': 'Community Impact',
        'Strategic Leadership': 'Strategic Leadership',
        'Visual Storytelling': 'Visual Storytelling',
      },
      subcategories: {
        'Social Work Camps': 'Social Work Camps',
        'Professional Internships': 'Professional Internships',
        'Educational Advocacy (CSE & SRHR)': 'Educational Advocacy (CSE & SRHR)',
        'Community Empowerment': 'Community Empowerment',
        'Cultural Heritage': 'Cultural Heritage',
        'Landscape & Nature': 'Landscape & Nature',
        'Documentary Photography': 'Documentary Photography',
      },
    },
  },
  ne: {
    fab: {
      main: 'छिटो नियन्त्रण',
      open: 'छिटो नियन्त्रण खोल्नुहोस्',
      close: 'छिटो नियन्त्रण बन्द गर्नुहोस्',
      switchToDark: 'डार्क मोड',
      switchToLight: 'लाइट मोड',
      switchToEnglish: 'English',
      switchToNepali: 'नेपाली',
    },
    navigation: {
      home: 'होम',
      about: 'मेरो बारेमा',
      portfolio: 'पोर्टफोलियो',
      skills: 'सीप',
      contact: 'सम्पर्क',
      connect: 'कनेक्ट',
    },
    meta: {
      title: 'उमेश रास्कोटी - पोर्टफोलियो',
      description: 'उमेश रास्कोटीको पोर्टफोलियो, जसमा सामाजिक कार्य, नेतृत्व र कथनसम्बन्धी सीप, परियोजना र अनुभवहरू समेटिएका छन्।',
    },
    home: {
      tagline: 'उद्देश्यका साथ नेतृत्व। मनको भावनासहित दस्तावेजीकरण।',
      explore: 'पोर्टफोलियो हेर्नुहोस्',
      downloadCv: 'सीभी डाउनलोड गर्नुहोस्',
      profileAlt: 'उमेश रास्कोटीको पोर्ट्रेट',
      stats: {
        experience: 'वर्षको अनुभव',
        projects: 'मुख्य परियोजना',
        reached: 'सम्पर्कमा आएका व्यक्ति',
      },
      currentFocusLabel: 'हालको प्राथमिकता',
      currentFocusValue: 'युवा पक्षधरता र समुदाय-केंद्रित समन्वय',
      basedInLabel: 'आधार क्षेत्र',
      basedInValue: 'भक्तपुर, नेपाल',
      scroll: 'अन्वेषण गर्न तल स्क्रोल गर्नुहोस्',
      socials: {
        facebook: 'फेसबुक',
        instagram: 'इन्स्टाग्राम',
        linkedIn: 'लिंक्डइन',
        email: 'इमेल',
      },
    },
    about: {
      eyebrow: 'मेरो बारेमा',
      imageAlt: 'उमेश रास्कोटीको पोर्ट्रेट',
      approachLabel: 'दृष्टिकोण',
      approachValue: 'मानिस-प्रथम, प्रमाणमा आधारित, दृश्य-जागरूक',
      paragraphs: [
        'म सधैं विश्वास गर्छु कि वास्तविक परिवर्तन किनाराबाट हुँदैन। त्यो कार्य, सहानुभूति, र समुदायसँग प्रत्यक्ष उपस्थितिबाट हुन्छ। सामाजिक कार्य र मनोविज्ञानमा मेरो यात्रा एउटा सरल लक्ष्यद्वारा निर्देशित छ: मानिसलाई अझ राम्रोसँग बुझ्ने, ताकि म उनीहरूलाई अझ प्रभावकारी रूपमा सेवा गर्न सकूँ। काठमाडौं महानगरपालिकाका शहरी विकास परियोजनामा योगदान दिँदा होस् वा जेसीआई भक्तपुर जुनियरको अध्यक्षका रूपमा पहलहरू नेतृत्व गर्दा होस्, अरूलाई आफ्नै आवाज पहिचान गर्न र बलियो बनाउन मद्दत गर्ने काममै मैले सबैभन्दा ठूलो अर्थ पाएको छु।',
        'म आफूलाई मनदेखि सामाजिक कार्यकर्ता मान्छु, तर जमिनमा जोडिएर बस्न म क्यामेरा पनि बोक्छु। फोटोग्राफीले प्रायः नदेखिने सहनशीलताका शान्त कथाहरू देख्न र सुरक्षित राख्न मद्दत गर्छ। मेरो लागि सामाजिक कार्य केवल करियर होइन, समाजलाई राम्रो दिशामा रूपान्तरण गर्न दीर्घकालीन प्रतिबद्धता हो। नेतृत्व, पक्षधरता, र सिर्जनशीलतालाई जोडेर समुदायमा दिगो र सकारात्मक प्रभाव छोड्ने उपायहरू म सधैं खोजिरहन्छु।',
      ],
      features: [
        {
          title: 'कार्यक्रम समन्वय',
          description: 'सामाजिक विकास कार्यक्रम र समुदायिक पहलहरूको योजना तथा व्यवस्थापनमा दक्ष।',
        },
        {
          title: 'पक्षधरता र तालिम',
          description: 'TOT र TBT प्रमाणित, सचेतना सत्र र समुदायिक सहभागिता सहजीकरणमा अनुभवी।',
        },
        {
          title: 'नेतृत्व',
          description: 'JCI Nepal बाट 2023 को उत्कृष्ट नेतृत्व पुरस्कार, टोली व्यवस्थापनमा प्रमाणित अनुभव।',
        },
        {
          title: 'समुदाय प्रभाव',
          description: 'सहकार्यात्मक प्रयासमार्फत दिगो सामाजिक परिवर्तन सिर्जना गर्न प्रतिबद्ध।',
        },
      ],
    },
    skills: {
      title: 'सीप र विशेषज्ञता',
      description: 'कार्यक्रम कार्यान्वयन, समुदाय सहभागिता, सहजीकरण, दस्तावेजीकरण, र दृश्य कथनबाट बनेको व्यवहारिक उपकरणसमूह।',
      categories: [
        {
          title: 'व्यावसायिक सीप',
          skills: [
            { name: 'कार्यक्रम व्यवस्थापन', level: 90 },
            { name: 'डाटा व्यवस्थापन', level: 85 },
            { name: 'समुदाय पक्षधरता', level: 95 },
            { name: 'परियोजना समन्वय', level: 90 },
          ],
        },
        {
          title: 'प्राविधिक सीप',
          skills: [
            { name: 'एमएस अफिस सुट', level: 90 },
            { name: 'कोबो कलेक्ट', level: 80 },
            { name: 'एडोबी लाइटरुम', level: 85 },
            { name: 'क्यान्भा डिजाइन', level: 90 },
          ],
        },
        {
          title: 'विशेष तालिम',
          skills: [
            { name: 'TOT प्रमाणपत्र', level: 95 },
            { name: 'TBT तालिम', level: 90 },
            { name: 'परामर्श', level: 85 },
            { name: 'फोटोग्राफी', level: 88 },
          ],
        },
      ],
      toolsTitle: 'उपकरण, प्लेटफर्म, र कार्यभाषाहरू',
      tools: [
        'MS Word',
        'MS Excel',
        'PowerPoint',
        'Kobo Collect',
        'Google Forms',
        'Microsoft Teams',
        'Zoom',
        'Adobe Lightroom',
        'Photoshop',
        'CapCut',
        'Canva',
        'अंग्रेजी',
        'नेपाली',
        'हिन्दी',
        'मगर',
      ],
    },
    contact: {
      eyebrow: 'सम्पर्क',
      title: 'अर्थपूर्ण परियोजना र सिर्जनात्मक सहकार्यका लागि जोडिनुहोस्।',
      description: 'यदि तपाईं समुदाय पहुँच, पक्षधरता, दस्तावेजीकरण, तालिम, वा कथामुखी अभियानमा काम गर्दै हुनुहुन्छ भने, मसँग सम्पर्क गर्न पाउँदा खुसी लाग्नेछ।',
      infoTitle: 'सम्पर्क जानकारी',
      infoLead: 'तलका कुनै पनि माध्यमबाट सम्पर्क गर्न सक्नुहुन्छ। दायाँपट्टिको फारमले तपाईंको इमेल एप तयार सन्देशसहित खोल्छ, त्यसैले सिधै सन्देश पठाउन सजिलो हुन्छ।',
      labels: {
        email: 'इमेल',
        phone: 'फोन',
        location: 'स्थान',
      },
      locationValue: 'सूर्यविनायक, भक्तपुर ४४८००',
      subjectPrefix: 'बाट पोर्टफोलियो सम्बन्धी सोधपुछ',
      follow: 'मलाई फलो गर्नुहोस्',
      quickMessage: 'छिटो सन्देश',
      introTitle: 'परिचय पठाउनुहोस्',
      responseFriendly: 'प्रतिक्रियाका लागि तयार',
      fields: {
        name: 'नाम',
        email: 'इमेल',
        message: 'सन्देश',
      },
      placeholders: {
        name: 'तपाईंको नाम',
        email: 'your.email@example.com',
        message: 'तपाईंको परियोजनाबारे बताउनुहोस्...',
      },
      submitHint: 'यो फारम पठाउँदा तयार सन्देशसहित तपाईंको इमेल क्लाइन्ट खुल्छ, जसबाट तपाईं सिधै पठाउन सक्नुहुन्छ।',
      send: 'सन्देश पठाउनुहोस्',
      directEmail: 'वा सिधै इमेल गर्नुहोस्',
      followLinks: {
        facebook: 'फेसबुक',
        instagram: 'इन्स्टाग्राम',
        linkedIn: 'लिंक्डइन',
        email: 'इमेल',
      },
    },
    footer: {
      eyebrow: 'पोर्टफोलियो',
      madeWith: 'मायाले बनाइएको',
      by: 'द्वारा',
      description: 'सामाजिक कार्य, पक्षधरता, नेतृत्व, र दस्तावेजी कथनलाई एउटै व्यवहारिक पोर्टफोलियोमा संयोजन गरिएको छ।',
      home: 'होम',
      about: 'मेरो बारेमा',
      portfolio: 'पोर्टफोलियो',
      skills: 'सीप',
      contact: 'सम्पर्क',
      backToTop: 'माथि फर्कनुहोस्',
      rights: 'सर्वाधिकार सुरक्षित।',
    },
    errorBoundary: {
      eyebrow: 'रेन्डर त्रुटि',
      title: 'पोर्टफोलियोमा रनटाइम त्रुटि देखियो।',
      description:
        'एप खुलेको छ, तर रेन्डर गर्ने क्रममा एउटा भागमा समस्या आएको छ। एकपटक रिफ्रेस गर्नुहोस्। समस्या दोहोरिएमा तलको सन्देशले कुन कम्पोनेन्टमा समस्या छ भनेर देखाउन मद्दत गर्छ।',
    },
    portfolio: {
      summaryMetrics: {
        practiceAreas: 'कार्य क्षेत्र',
        contentStories: 'सामग्री कथा',
        visualAssets: 'दृश्य सामग्री',
      },
      currentFocus: 'हालको फोकस',
      items: 'आइटम',
      all: 'सबै',
      seeMore: 'थप हेर्नुहोस्',
      visualTitle: 'दृश्य कथन',
      visualDescription: 'मैदानी दृश्य र परियोजना दस्तावेजको सङ्ग्रह',
      filters: {
        All: 'सबै',
        'Field Work': 'मैदानी कार्य',
        'Community Engagement': 'समुदाय सहभागिता',
        'Training Sessions': 'तालिम सत्र',
        Documentation: 'दस्तावेजीकरण',
      },
      backToPortfolio: 'पोर्टफोलियोमा फर्कनुहोस्',
      featureStory: 'विशेष कथा',
      visitReference: 'सन्दर्भ हेर्नुहोस्',
      contact: 'सम्पर्क',
      detailedContentOverview: 'विस्तृत सामग्री अवलोकन',
      overview: 'अवलोकन',
      quickPositioning: 'छिटो परिचय',
      similarContentRecommendations: 'मिल्दोजुल्दो सामग्री सिफारिस',
      relatedPortfolioStories: 'सम्बन्धित पोर्टफोलियो कथाहरू',
      exploreStory: 'कथा हेर्नुहोस्',
      categories: {
        'Community Impact': 'समुदाय प्रभाव',
        'Strategic Leadership': 'रणनीतिक नेतृत्व',
        'Visual Storytelling': 'दृश्य कथन',
      },
      subcategories: {
        'Social Work Camps': 'सामाजिक कार्य क्याम्प',
        'Professional Internships': 'व्यावसायिक इन्टर्नशिप',
        'Educational Advocacy (CSE & SRHR)': 'शैक्षिक पक्षधरता (CSE र SRHR)',
        'Community Empowerment': 'समुदाय सशक्तीकरण',
        'Cultural Heritage': 'सांस्कृतिक सम्पदा',
        'Landscape & Nature': 'भूदृश्य र प्रकृति',
        'Documentary Photography': 'दस्तावेजी फोटोग्राफी',
      },
    },
  },
};

export function translatePortfolioCategory(language: LanguageMode, label: string) {
  return siteText[language].portfolio.categories[label] ?? label;
}

export function translatePortfolioSubcategory(language: LanguageMode, label: string | null) {
  if (!label) return label;
  return siteText[language].portfolio.subcategories[label] ?? label;
}

export function translatePortfolioFilter(language: LanguageMode, label: string) {
  return siteText[language].portfolio.filters[label] ?? label;
}
