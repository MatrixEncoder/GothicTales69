import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, Ghost, Skull, FileText } from 'lucide-react';
import { format } from 'date-fns';

interface StoryCardProps {
  story: {
    id: number;
    title: string;
    category: string;
    content: string;
    views: number;
    likes: number;
    [key: string]: any;
  };
  onClick: () => void;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, onClick }) => {
  const getIcon = () => {
    switch (story.category) {
      case 'legend':
        return <Skull className="w-6 h-6 text-blood-red" />;
      case 'true-crime':
        return <FileText className="w-6 h-6 text-blood-red" />;
      case 'creepypasta':
        return <Ghost className="w-6 h-6 text-blood-red" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="horror-card cursor-pointer group"
      onClick={onClick}
    >
      <div className="p-6 relative">
        <div className="blood-drip absolute top-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100" />
        
        <div className="flex items-center space-x-2 mb-4">
          {getIcon()}
          <h3 className="font-horror text-xl text-blood-red">{story.title}</h3>
        </div>

        <p className="text-gray-300 mb-4 line-clamp-3">{story.content}</p>

        <div className="flex justify-between items-center text-sm text-gray-400">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {story.views}
            </span>
            <span className="flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              {story.likes}
            </span>
          </div>
          <span>{format(new Date(story.createdAt || Date.now()), 'MMM d, yyyy')}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default StoryCard;