import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import StoryModal from '../components/StoryModal';
import './TrueCrime.css';

const TrueCrime = () => {
  const [selectedStory, setSelectedStory] = useState<null | { title: string; content: string; image: string }>(null);

  const stories = [
    {
      title: "The Zodiac Mystery",
      excerpt: "The Zodiac Killer, known for his cryptic letters and taunting phone calls, remains one of the most infamous unidentified serial killers in American history. His first confirmed victim was high school students Betty Lou Jensen and David Faraday, who were shot on December 20, 1968. The Zodiac's letters to the San Francisco Chronicle included ciphers that have puzzled cryptographers for decades, with some still unsolved.",
      year: "1968-1969",
      location: "California",
      content: `
        The Zodiac Killer, active in the late 1960s and early 1970s, is one of the most infamous unidentified serial killers in American history. He is known for his cryptic letters sent to newspapers, taunting law enforcement and the public. The Zodiac claimed to have killed 37 people, but only five murders have been confirmed. His first known victims were high school students Betty Lou Jensen and David Faraday, who were shot on December 20, 1968.

        The Zodiac's letters included ciphers that have puzzled cryptographers for decades, with some still unsolved. The case remains open, and the identity of the Zodiac Killer is still a mystery. The investigation was complicated by the lack of forensic technology at the time, and the killer's ability to evade capture led to widespread media coverage and public fascination.

        The Zodiac Killer's crimes were characterized by their brutality and seemingly random nature. He targeted young couples and individuals, often shooting or stabbing them without apparent motive. The killer's letters and cryptograms were often filled with boasts and taunts, leading investigators to believe that he was highly intelligent and calculating.

        Despite numerous investigations and tips over the years, the Zodiac Killer was never caught. The case remains one of the most infamous unsolved serial killer cases in American history, and continues to fascinate true crime enthusiasts and investigators alike. For further study, visit [Zodiac Killer - Wikipedia](https://en.wikipedia.org/wiki/Zodiac_Killer).
      `,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsBAnS_2fm-YZQCrOMEnMFs6icLCWdnUcAQ&s"
    },
    {
      title: "H.H. Holmes Hotel",
      excerpt: "H.H. Holmes, often considered America's first serial killer, lured his victims to his 'Murder Castle' in Chicago during the 1893 World's Fair. The hotel was equipped with hidden rooms, trap doors, and gas chambers, designed to facilitate his gruesome acts. Holmes confessed to 27 murders, but the true number may be much higher. His story continues to captivate and horrify those who delve into the dark history of America's past.",
      year: "1893",
      location: "Chicago",
      content: `
        H.H. Holmes, often referred to as America's first serial killer, lured his victims to his 'Murder Castle' in Chicago during the 1893 World's Fair. The hotel was designed with hidden rooms, trap doors, and gas chambers, allowing Holmes to carry out his gruesome acts with ease.

        Holmes was a charismatic and intelligent individual who used his charm to lure victims to his hotel. He would often target young women, promising them jobs or romantic relationships. Once they were in his hotel, he would use his elaborate system of hidden rooms and secret passages to trap and kill them.

        The construction of the Murder Castle was shrouded in secrecy, and many of the workers were never paid, leading to speculation about the building's true purpose. The hotel was a labyrinth of horror, with rooms designed to disorient and trap unsuspecting guests.

        Holmes's story continues to captivate and horrify those who explore the dark corners of American history. His crimes were characterized by their brutality and cunning, and his ability to evade capture for so long raised questions about the effectiveness of law enforcement at the time. For further study, visit [H.H. Holmes - Wikipedia](https://en.wikipedia.org/wiki/H._H._Holmes).
      `,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdC_tmUqPDcDDcd_d2rC1O7qgZZZjY9EfQRA&s"
    },
    {
      title: "The Black Dahlia",
      excerpt: "The Black Dahlia is the nickname given to Elizabeth Short, an aspiring actress who was murdered in Los Angeles in 1947. Her body was found mutilated and severed in half, leading to one of the most famous unsolved murder cases in American history.",
      year: "1947",
      location: "Los Angeles",
      content: `
        Elizabeth Short, dubbed 'The Black Dahlia' by the media, was an aspiring actress whose gruesome murder in 1947 shocked the nation. Her body was discovered in a vacant lot, cut in half and drained of blood.

        The case remains one of the most infamous unsolved murders in history, captivating true crime enthusiasts and investigators alike. The media's sensational coverage of her murder and the subsequent investigation turned Elizabeth into a cultural icon, representing the dark side of Hollywood.

        Elizabeth's life was filled with struggles, as she sought fame and fortune in a city that often chewed up and spit out aspiring actresses. She worked as a waitress and a telephone operator, and was known to have had numerous relationships with men.

        The investigation into her murder was marred by false leads and media frenzy, with numerous suspects proposed but none ever convicted. The case remains a source of fascination and horror, and continues to be the subject of numerous books, films, and documentaries. For further study, visit [The Black Dahlia - Wikipedia](https://en.wikipedia.org/wiki/Black_Dahlia).
      `,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrqIXGbf9LahWeKTzzRnJSU1WEe2nr3zaU4Q&s"
    },
    {
      title: "The Green River Killer",
      excerpt: "Gary Ridgway, known as the Green River Killer, is one of the most prolific serial killers in American history, having confessed to killing 71 women in Washington state during the 1980s and 1990s.",
      year: "1980s-1990s",
      location: "Washington",
      content: `
        Gary Ridgway, infamously known as the Green River Killer, was convicted of murdering 49 women, although he confessed to killing 71. His victims were primarily vulnerable women, often involved in prostitution.

        Ridgway's case highlights the challenges law enforcement faced in tracking down a killer who evaded capture for decades. The investigation into Ridgway's crimes was one of the largest in U.S. history, leading to significant advancements in forensic science.

        Ridgway's ability to evade capture for so long raised questions about the effectiveness of the police and the societal attitudes towards sex workers at the time. His eventual capture in 2001 brought some closure to the families of his victims, but the scars left by his actions continue to affect the community.

        Ridgway's crimes were characterized by their brutality and lack of motive. He would often target women who were alone and vulnerable, and would kill them in a variety of ways, including strangulation and stabbing. The case remains one of the most infamous serial killer cases in American history, and continues to be the subject of numerous books and documentaries. For further study, visit [Green River Killer - Wikipedia](https://en.wikipedia.org/wiki/Gary_Ridgway).
      `,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsBAnS_2fm-YZQCrOMEnMFs6icLCWdnUcAQ&s"
    },
    {
      title: "The Nithari Killings",
      excerpt: "The Nithari killings refer to a series of murders that took place in the Nithari village near Noida, India, between 2006 and 2007. The case involved the disappearance of several children, leading to the discovery of human remains in the backyard of a house.",
      year: "2006-2007",
      location: "Noida, India",
      content: `
        The Nithari killings shocked the nation when it was revealed that several children had gone missing in the area. Investigations led to the discovery of human remains in the backyard of a house owned by Moninder Singh Pandher and his domestic help, Surender Koli.

        The case raised serious concerns about child safety and the effectiveness of law enforcement in India. The public outcry following the discovery of the murders led to significant changes in child protection laws in India.

        The case highlighted the need for better systems to protect vulnerable populations and sparked debates about child safety in urban areas. The investigation into the killings was criticized for its slow pace and lack of transparency, leading to widespread protests and demands for justice.

        The Nithari killings remain one of the most infamous serial killer cases in Indian history, and continue to be the subject of numerous books and documentaries. For further study, visit [Nithari killings - Wikipedia](https://en.wikipedia.org/wiki/Nithari_killings).
      `,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmeLnk2wqgS-50h4WCk7MkLXY222Gv762qSg&s"
    },
    {
      title: "The Jessica Lal Murder Case",
      excerpt: "Jessica Lal was a model and restaurant waitress who was shot dead in 1999 in New Delhi, India. The case garnered significant media attention and public outrage, leading to a landmark trial.",
      year: "1999",
      location: "New Delhi, India",
      content: `
        Jessica Lal was shot dead while working at a bar in New Delhi. The initial acquittal of the prime suspect, Manu Sharma, sparked widespread protests and demands for justice.

        The case was eventually reopened, and Sharma was convicted in 2006, highlighting issues of corruption and the influence of wealth in the Indian legal system. The trial became a symbol of the fight against corruption and the need for justice in India.

        The public's reaction to the case was a catalyst for change, leading to increased awareness of women's rights and the need for a more equitable legal system. The case remains one of the most infamous murder cases in Indian history, and continues to be the subject of numerous books and documentaries. For further study, visit [Jessica Lal murder case - Wikipedia](https://en.wikipedia.org/wiki/Jessica_Lal).
      `,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrqIXGbf9LahWeKTzzRnJSU1WEe2nr3zaU4Q&s"
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