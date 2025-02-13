import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ghost } from 'lucide-react';
import StoryModal from '../components/StoryModal';

const Creepypasta = () => {
  const [selectedStory, setSelectedStory] = useState<null | { title: string; content: string; image: string }>(null);

  const stories = [
    {
      title: "Slender Man",
      excerpt: "Slender Man is a fictional supernatural character that originated as an internet meme created on the Something Awful forums in 2009. He is depicted as a tall, thin figure wearing a black suit and a blank face, often associated with the abduction of children.",
      year: "2009",
      location: "Internet",
      content: "Slender Man is a fictional supernatural character that originated as an internet meme created on the Something Awful forums in 2009. He is depicted as a tall, thin figure wearing a black suit and a blank face, often associated with the abduction of children. The character gained significant popularity, leading to various adaptations in video games, films, and literature. Slender Man's lore has inspired countless creepypasta stories, making him a staple of internet horror culture.",
      image: "https://img.freepik.com/premium-photo/dark-creature-black-suit-standing-dark-spooky-forest_1143758-453.jpg?ga=GA1.1.1078444035.1720879008&semt=ais_hybrid"
    },
    {
      title: "Jeff the Killer",
      excerpt: "Jeff the Killer is a fictional character and urban legend that originated from a creepypasta story. The character is depicted as a disfigured teenager with pale skin, dark hair, and a haunting smile.",
      year: "2011",
      location: "Internet",
      content: "Jeff the Killer is a fictional character and urban legend that originated from a creepypasta story. The character is depicted as a disfigured teenager with pale skin, dark hair, and a haunting smile. According to the story, Jeff was bullied and suffered severe burns, leading him to become a killer. The tale of Jeff the Killer has become one of the most well-known creepypasta stories, inspiring fan art, videos, and adaptations across various media.",
      image: "https://img.freepik.com/free-photo/close-up-portrait-witch-from-indigenous-african-tribe-wearing-traditional-costume-make-up-concept-isolated-dark-background_613910-18468.jpg?ga=GA1.1.1078444035.1720879008&semt=ais_hybrid"
    },
    {
      title: "The Russian Sleep Experiment",
      excerpt: "A horrifying experiment that kept subjects awake for 30 days...",
      year: "2010",
      location: "Unknown",
      content: "The Russian Sleep Experiment is a creepypasta story that tells the tale of five Soviet scientists who were sealed in a laboratory for 30 days to test the effects of prolonged sleep deprivation. The experiment went horribly wrong, resulting in the deaths of all five subjects. The story has become a classic of internet horror, with many adaptations and interpretations across various media.",
      image: "https://img.freepik.com/free-photo/vertical-grayscale-shot-inside-poor-room-with-single-chair-mattress_181624-59580.jpg?ga=GA1.1.1078444035.1720879008&semt=ais_hybrid"
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 style={{ color: '#333333' }} className="horror-title mb-4">Creepypasta Archives</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Modern horror stories born in the digital age, spreading fear across the internet.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((pasta, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="horror-card"
            onClick={() => setSelectedStory(pasta)}
          >
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Ghost className="w-6 h-6 text-blood-red" />
                <h3 className="font-horror text-xl text-blood-red">{pasta.title}</h3>
              </div>
              <img src={pasta.image} alt={pasta.title} className="w-full h-48 object-cover mb-4" />
              <p className="text-gray-300 mb-4">{pasta.excerpt}</p>
              <div className="text-sm text-gray-400">
                <p>Year: {pasta.year}</p>
                <p>Location: {pasta.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
        <StoryModal story={selectedStory} onClose={() => setSelectedStory(null)} />
      </div>
    </div>
  );
};

export default Creepypasta;