import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import StoryModal from '../components/StoryModal';

const TrueCrime = () => {
  const [selectedStory, setSelectedStory] = useState<null | { title: string; content: string; image: string }>(null);

  const stories = [
    {
      title: "The Zodiac Mystery",
      excerpt: "The Zodiac Killer, known for his cryptic letters and taunting phone calls, remains one of the most infamous unidentified serial killers in American history. His first confirmed victim was high school students Betty Lou Jensen and David Faraday, who were shot on December 20, 1968. The Zodiac's letters to the San Francisco Chronicle included ciphers that have puzzled cryptographers for decades, with some still unsolved.",
      year: "1968-1969",
      location: "California",
      content: "The Zodiac Killer, active in the late 1960s and early 1970s, is one of the most infamous unidentified serial killers in American history. He is known for his cryptic letters sent to newspapers, taunting law enforcement and the public. The Zodiac claimed to have killed 37 people, but only five murders have been confirmed. His first known victims were high school students Betty Lou Jensen and David Faraday, who were shot on December 20, 1968. The Zodiac's letters included ciphers that have puzzled cryptographers for decades, with some still unsolved. The case remains open, and the identity of the Zodiac Killer is still a mystery.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsBAnS_2fm-YZQCrOMEnMFs6icLCWdnUcAQ&s"
    },
    {
      title: "H.H. Holmes Hotel",
      excerpt: "H.H. Holmes, often considered America's first serial killer, lured his victims to his 'Murder Castle' in Chicago during the 1893 World's Fair. The hotel was equipped with hidden rooms, trap doors, and gas chambers, designed to facilitate his gruesome acts. Holmes confessed to 27 murders, but the true number may be much higher. His story continues to captivate and horrify those who delve into the dark history of America's past.",
      year: "1893",
      location: "Chicago",
      content: "H.H. Holmes, often referred to as America's first serial killer, lured his victims to his 'Murder Castle' in Chicago during the 1893 World's Fair. The hotel was designed with hidden rooms, trap doors, and gas chambers, allowing Holmes to carry out his gruesome acts with ease. He was known to have killed many young women, often luring them with promises of jobs. Holmes confessed to 27 murders, but the true number is believed to be much higher. His story continues to captivate and horrify those who explore the dark corners of American history.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdC_tmUqPDcDDcd_d2rC1O7qgZZZjY9EfQRA&s"
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
        <h1 style={{ color: '#333333' }} className="horror-title mb-4">True Crime Stories</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Real cases that prove truth can be more terrifying than fiction.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((case_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="horror-card"
            onClick={() => setSelectedStory(case_)}
          >
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="w-6 h-6 text-blood-red" />
                <h3 className="font-horror text-xl text-blood-red">{case_.title}</h3>
              </div>
              <img src={case_.image} alt={case_.title} className="w-full h-48 object-cover mb-4" />
              <p className="text-gray-300 mb-4">{case_.excerpt}</p>
              <div className="text-sm text-gray-400">
                <p>Year: {case_.year}</p>
                <p>Location: {case_.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
        <StoryModal story={selectedStory} onClose={() => setSelectedStory(null)} />
      </div>
    </div>
  );
};

export default TrueCrime;