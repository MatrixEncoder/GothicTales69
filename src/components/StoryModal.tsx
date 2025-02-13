import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface StoryModalProps {
  story: {
    title: string;
    content: string;
    image?: string;
    [key: string]: any;
  } | null;
  onClose: () => void;
}

const StoryModal: React.FC<StoryModalProps> = ({ story, onClose }) => {
  if (!story) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="story-modal"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="story-modal-content"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-blood-red"
          >
            <X className="w-6 h-6" />
          </button>

          <h2 className="creepy-text text-3xl mb-6">{story.title}</h2>
          
          {story.image && (
            <div className="mb-6">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}

          <div className="prose prose-invert max-w-none">
            {story.content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-gray-300 mb-4">{paragraph}</p>
            ))}
          </div>

          {story.author && (
            <div className="mt-8 pt-4 border-t border-blood-red/20">
              <p className="text-gray-400">Author: {story.author}</p>
              {story.year && <p className="text-gray-400">Year: {story.year}</p>}
              {story.location && <p className="text-gray-400">Location: {story.location}</p>}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StoryModal;