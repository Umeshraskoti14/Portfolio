import { motion, useInView } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { 
  Camera, MapPin, Users, Award, BookOpen, Heart, Briefcase, 
  GraduationCap, Trophy, Star, Target, Lightbulb, ChevronRight 
} from 'lucide-react';

// Assets
import profileImg from 'figma:asset/350375490d348981572bcc1ade79fdd9730425a2.png';
import kmcImg from 'figma:asset/63b35ce0ab7380ad171c37c929c5ca1a23a179cf.png';
import manoImg from 'figma:asset/a10c0aa055913800b480435f11f1cb49df00ce42.png';
import ginImg from 'figma:asset/2c4f084427bf94aa4895b8089f02f525068246fe.png';
import environmentCampaignImg from 'figma:asset/09eeab516a958f508c8c2e24a93d0b4f4601a754.png';
import communityCampaignImg from 'figma:asset/9ec45cbbbc95fb0d1d25d569ed17865ca696fc58.png';

import {
  Dialog,
  DialogContent,
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

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  icon: IconType;
  link?: string;
  images?: string[]; // Optional for galleries
}

// --- Data Structure ---
const portfolioData: Record<string, PortfolioItem[]> = {
  'Community Impact': [
    {
      title: 'Neighborhood Social Work Camp',
      description: 'Served as Group Leader in Bhaktapur District (Jan 2022). Activities included Social Surveys and Community Engagement.',
      image: 'https://images.unsplash.com/photo-1762158008280-3dcb1d1cbd99?q=80&w=1080',
      tags: ['Group Leader', 'Bhaktapur'],
      icon: Users,
    },
    {
      title: 'Good Neighbors International Nepal',
      description: 'Internship in Sponsorship and Child Protection, focusing on data management and beneficiary records.',
      image: ginImg,
      tags: ['Child Protection', 'Data Management'],
      icon: Briefcase,
      link: 'https://www.goodneighbors.org/',
    },
    {
      title: 'SRHR Youth Champion',
      description: 'Facilitating awareness sessions on CSE, gender sensitivity, and rights-based approaches since 2023.',
      image: 'https://images.unsplash.com/photo-1766722906733-609eebf3b63a?q=80&w=1080',
      tags: ['Youth Champion', 'Advocacy'],
      icon: Award,
    }
  ],
  'Strategic Leadership': [
    {
      title: 'President Meet - Historic First',
      description: 'Participated in the first-ever Nepal Junior Jaycees Presidents Meet in Ilam for leadership training.',
      image: 'https://images.unsplash.com/photo-1625140064748-5b52e6180047?q=80&w=1080',
      tags: ['JCI', 'Leadership'],
      icon: Trophy,
    },
    {
      title: '50th JCI Nepal National Convention',
      description: 'Attended the landmark event in Butwal featuring strategic sessions and capacity-building workshops.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1080',
      tags: ['Convention', 'Butwal'],
      icon: Star,
    }
  ],
};

const categories = Object.keys(portfolioData);

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const visibleItems = useMemo(() => portfolioData[activeCategory] || [], [activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">My Portfolio</h1>
          <div className="flex justify-center gap-4 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  activeCategory === cat ? 'bg-purple-600 text-white' : 'bg-white text-gray-600 border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleItems.map((item, idx) => (
            <motion.div
              key={item.title + idx}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden border hover:shadow-md transition cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <item.icon size={18} className="text-purple-600" />
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-2xl">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedItem.title}</DialogTitle>
              </DialogHeader>
              <img src={selectedItem.image} className="rounded-lg w-full h-64 object-cover my-4" />
              <p className="text-gray-700">{selectedItem.description}</p>
              {selectedItem.link && (
                <a href={selectedItem.link} target="_blank" className="text-purple-600 font-bold mt-4 block">
                  Visit Official Website →
                </a>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
