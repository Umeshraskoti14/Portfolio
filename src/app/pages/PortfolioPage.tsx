import { motion, useInView } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { 
  Camera, MapPin, Users, Award, BookOpen, Heart, Briefcase, 
  GraduationCap, Trophy, Star, Target, Lightbulb, ChevronRight 
} from 'lucide-react';

import profileImg from 'figma:asset/350375490d348981572bcc1ade79fdd9730425a2.png';
import kmcImg from 'figma:asset/63b35ce0ab7380ad171c37c929c5ca1a23a179cf.png';
import manoImg from 'figma:asset/a10c0aa055913800b480435f11f1cb49df00ce42.png';
import ginImg from 'figma:asset/2c4f084427bf94aa4895b8089f02f525068246fe.png';
import environmentCampaignImg from 'figma:asset/09eeab516a958f508c8c2e24a93d0b4f4601a754.png';
import communityCampaignImg from 'figma:asset/9ec45cbbbc95fb0d1d25d569ed17865ca696fc58.png';

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

// --- Types ---
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

// --- Components ---
function AnimatedCover({ title, images }: { title: string; images: string[] }) {
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
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
        {images.length} Photos
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}

// --- Data ---
const communityImpactSections = [
  {
    id: "social-work-camps",
    title: "Social Work Camp",
    subtitle: "Community immersion, research, and coordinated action on the ground.",
    icon: Users,
    items: [
      {
        title: "Neighborhood Social Work Camp",
        description: "Group Leader from January 2–6, 2022 in Bhaktapur District.",
        image: "https://images.unsplash.com/photo-1762158008280-3dcb1d1cbd99?q=80&w=1080",
        tags: ["Group Leader", "Bhaktapur"],
        icon: Users,
      },
      // ... (Other items omitted for brevity but should be included in your full data object)
    ],
  },
  // Add other sections (internships, cse-advocacy, etc) here as needed
];

const portfolioData: Record<string, PortfolioItem[]> = {
  "Community Impact": [
     {
      title: 'Neighborhood Social Work Camp',
      description: 'The camp was held in four municipalities of Bhaktapur District where I served as Group Leader.',
      image: 'https://images.unsplash.com/photo-1762158008280-3dcb1d1cbd99?q=80&w=1080',
      tags: ['Group Leader', 'Jan 2022'],
      icon: Users,
    },
    // Add all other items from your original data here
  ],
  "Strategic Leadership": [],
  "Visual Storytelling": [],
};

const categories = Object.keys(portfolioData);

// --- Main Page ---
export function PortfolioPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: false });
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeCollection, setActiveCollection] = useState<VisualCollectionItem | null>(null);

  const visibleItems = useMemo(() => {
    return portfolioData[activeCategory] || [];
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 pb-20">
      <motion.div className="max-w-7xl mx-auto px-4" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Portfolio</h1>
          <p className="text-lg text-gray-600">Explore my journey in activism and storytelling</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category ? 'bg-purple-600 text-white' : 'bg-white text-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleItems.map((item, index) => (
            <motion.div
              key={item.title}
              onClick={() => isVisualCollection(item) && setActiveCollection(item)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all"
            >
              {isVisualCollection(item) ? (
                <AnimatedCover title={item.title} images={item.images} />
              ) : (
                <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Detail Dialog */}
      <Dialog open={!!activeCollection} onOpenChange={() => setActiveCollection(null)}>
        <DialogContent className="max-w-4xl">
          {activeCollection && (
            <div className="p-4">
              <DialogHeader>
                <DialogTitle>{activeCollection.title}</DialogTitle>
              </DialogHeader>
              <Carousel className="mt-4">
                <CarouselContent>
                  {activeCollection.images.map((img, i) => (
                    <CarouselItem key={i}>
                      <img src={img} className="rounded-xl w-full object-cover aspect-video" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}