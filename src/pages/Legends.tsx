import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Skull } from 'lucide-react';
import StoryModal from '../components/StoryModal';

const LEGENDS = [
  {
    id: 1,
    title: "The Hook Man",
    excerpt: "This urban legend became popular in the 1950s and continues to be told around campfires to this day. It serves as a warning about the dangers of isolated places and the vulnerability of young couples.",
    content: `This urban legend became popular in the 1950s and continues to be told around campfires to this day. It serves as a warning about the dangers of isolated places and the vulnerability of young couples.`,
    location: "United States",
    era: "1950s",
    image: "https://img.freepik.com/free-photo/spooky-male-pirate-with-long-beard-holding-mace-black-background-halloween-outfit_482257-11644.jpg?ga=GA1.1.1078444035.1720879008&semt=ais_hybrid"
  },
  {
    id: 2,
    title: "Bloody Mary",
    excerpt: "The mirror-dwelling spirit who appears when called...",
    content: `Stand in a darkened room with a mirror. Light a candle. Say "Bloody Mary" three times while spinning around. According to legend, a ghostly woman will appear in the mirror, sometimes helpful, sometimes harmful.

The origins of Bloody Mary are often traced back to Queen Mary I of England, nicknamed "Bloody Mary" for her persecution of Protestants. However, the mirror ritual seems to have emerged in the Victorian era, when young women would perform divination rituals using mirrors to see their future husbands.

Today, the legend has evolved into a supernatural challenge that continues to terrify those brave enough to try it. Some say she appears as a beautiful young woman, others as a horrifying corpse with blood streaming from her eyes.`,
    location: "Global",
    era: "Victorian Era",
    image: "https://img.freepik.com/premium-photo/halloween-ghost-girl-makeup_44353-811.jpg?ga=GA1.1.1078444035.1720879008&semt=ais_hybrid"
  },
  {
    id: 3,
    title: "The Vanishing Hitchhiker",
    excerpt: "A mysterious woman who disappears from moving vehicles...",
    content: `A driver picks up a young woman in white standing alone on a dark road. She gives an address but remains eerily quiet during the journey. When they arrive, she has vanished from the car without a trace.

Upon investigating, the driver learns that a young woman matching her description died in a car accident on that very road years ago. Some versions say she was heading to her wedding, others to her prom.

This legend appears in various forms across different cultures and continues to be reported as a real experience by drivers worldwide. The story often resurfaces around the anniversary of the supposed death, adding to its supernatural mystique.`,
    location: "Various",
    era: "20th Century",
    image: "https://img.freepik.com/premium-photo/arafed-man-costume-walking-down-road-with-large-head-generative-ai_958192-1522.jpg?ga=GA1.1.1078444035.1720879008&semt=ais_hybrid"
  }
];

const Legends = () => {
  const [selectedStory, setSelectedStory] = useState<typeof LEGENDS[0] | null>(null);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 style={{ color: '#333333' }} className="horror-title mb-4">Urban Legends</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Discover chilling tales passed down through generations, each with its own dark truth and mysterious origins.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LEGENDS.map((legend, index) => (
          <motion.div
            key={legend.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="horror-card group"
            onClick={() => setSelectedStory(legend)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={legend.image}
                alt={legend.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Skull className="w-6 h-6 text-blood-red" />
                <h3 className="font-horror text-xl text-blood-red">{legend.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{legend.excerpt}</p>
              <div className="text-sm text-gray-400">
                <p>Location: {legend.location}</p>
                <p>Era: {legend.era}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedStory && (
        <StoryModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </div>
  );
};

export default Legends;