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
    },
    {
      title: "Ben Drowned",
      excerpt: "Ben Drowned is a haunted video game story that revolves around a cursed copy of the game 'The Legend of Zelda: Majora's Mask.' The tale follows a player who discovers that the game is haunted by the spirit of a boy named Ben, who died tragically.",
      year: "2010",
      location: "Internet",
      content: "Ben Drowned is a popular creepypasta story that details the experiences of a gamer who acquires a mysterious copy of 'The Legend of Zelda: Majora's Mask.' Upon playing the game, he notices strange occurrences, including eerie music, distorted graphics, and the appearance of a ghostly figure resembling a boy named Ben. As the player delves deeper into the game, he uncovers the tragic backstory of Ben, who drowned in a swimming pool. The haunting escalates, leading to terrifying encounters both in-game and in the player's real life, blurring the lines between reality and the supernatural. This story has become a staple of internet horror culture, inspiring numerous adaptations and fan theories.",
      image: "https://img.freepik.com/free-photo/close-up-portrait-boy-drowning-water_144627-1463.jpg?ga=GA1.1.1078444035.1720879008&semt=ais_hybrid"
    },
    {
      title: "Smile Dog",
      excerpt: "Smile Dog is a creepypasta that tells the story of a cursed image that drives viewers insane. The image features a dog with a sinister grin, and those who see it are said to experience nightmares and madness.",
      year: "2008",
      location: "Internet",
      content: "Smile Dog is a haunting tale about an image that depicts a dog with a grotesque smile. The story follows a young woman who receives an email containing the cursed image, which is said to drive anyone who looks at it into madness. The protagonist becomes obsessed with the image, leading to disturbing visions and a descent into insanity. The tale explores themes of obsession, fear, and the unknown, making it one of the most chilling creepypasta stories. The cursed image, often referred to as 'smile.jpg,' has become iconic in internet horror lore, sparking countless discussions and adaptations across various media.",
      image: "https://img.freepik.com/free-photo/close-up-portrait-dog-smiling_144627-1464.jpg?ga=GA1.1.1078444035.1720879008&semt=ais_hybrid"
    },
    {
      title: "The Rake",
      excerpt: "The Rake is a terrifying creature that is said to stalk and torment its victims during the night. Descriptions of the Rake depict it as a pale, emaciated humanoid figure with sharp claws and unsettling features.",
      year: "2005",
      location: "Internet",
      content: "The Rake is a creepypasta that tells the story of a creature that preys on unsuspecting victims during the night. Described as a pale, emaciated figure with long claws and unsettling features, the Rake is said to invade the dreams of its victims, leaving them in a state of terror. The story often includes accounts from individuals who claim to have encountered the creature, detailing its eerie presence and the overwhelming sense of dread it instills. The Rake has become a prominent figure in internet horror, inspiring fan art, videos, and adaptations in various forms of media. The chilling nature of the Rake's legend continues to captivate and terrify audiences worldwide.",
      image: "https://img.freepik.com/free-photo/scary-creature-dark-background_144627-1465.jpg?ga=GA1.1.1078444035.1720879008&semt=ais_hybrid"
    },
    {
      title: "Candle Cove",
      excerpt: "Candle Cove is a creepypasta that revolves around a fictional children's TV show that supposedly aired on a local station. However, the show's content is shrouded in mystery, and its existence is disputed.",
      year: "2009",
      location: "Internet",
      content: "Candle Cove is a creepypasta that tells the story of a fictional children's TV show that supposedly aired on a local station. The show's content is shrouded in mystery, and its existence is disputed. According to the story, the show featured a cast of characters, including a villainous figure known as the 'Skin-Taker.' The story explores themes of nostalgia, childhood trauma, and the blurring of reality and fiction. Candle Cove has become a cult classic among creepypasta enthusiasts, inspiring fan art, videos, and adaptations across various media.",
      image: "https://img.freepik.com/free-photo/old-tv-set-with-static-screen_144627-1466.jpg?ga=GA1.1.1078444035.1720879008&semt=ais_hybrid"
    },
    {
      title: "NoEnd House",
      excerpt: "NoEnd House is a creepypasta that tells the story of a mysterious mansion with an infinite number of rooms. Each room contains a different horror, and those who enter the house are said to never return.",
      year: "2011",
      location: "Internet",
      content: "NoEnd House is a creepypasta that tells the story of a mysterious mansion with an infinite number of rooms. Each room contains a different horror, and those who enter the house are said to never return. The story follows a group of friends who dare each other to explore the house, only to find themselves trapped in a never-ending cycle of terror. NoEnd House has become a staple of internet horror, inspiring fan art, videos, and adaptations across various media.",
      image: "https://img.freepik.com/free-photo/abandoned-mansion-with-overgrown-garden_144627-1467.jpg?ga=GA1.1.1078444035.1720879008&semt=ais_hybrid"
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