import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="prose prose-invert max-w-4xl mx-auto"
      >
        <h1 className="horror-title text-center mb-12">About GothicTales</h1>
        
        <div className="space-y-12">
          <div className="relative">
            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to Gothic Tales, my digital sanctuary for those drawn to the darker corners of storytelling. 
              In the spirit of transparency, I want to share that this project is a unique fusion of human creativity 
              and artificial intelligence. As the creator, I've collaborated with various open-source Large Language 
              Models (LLMs) and carefully crafted prompts to bring these dark tales to life.
            </p>
          </div>

          <section className="relative">
            <motion.h2 
              className="creepy-text text-2xl mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              I. My Approach
            </motion.h2>
            <p className="text-gray-300 mb-4">
              Each element of Gothic Tales - from the haunting narratives to the technical implementation - 
              represents my vision brought to life through a combination of human creativity and AI capabilities. 
              This includes:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Content generation and curation assisted by open-source LLMs</li>
              <li>Website design and development enhanced through AI-powered coding tools</li>
              <li>Image selection and processing guided by AI understanding of gothic aesthetics</li>
              <li>User experience crafted through my design sensibilities and AI assistance</li>
            </ul>
          </section>

          <section className="relative">
            <motion.h2 
              className="creepy-text text-2xl mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              II. My Mission
            </motion.h2>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-red-900" />
            <div className="blood-drip absolute left-8 top-full w-[2px] h-0 bg-gradient-to-b from-red-900 to-red-600" />
            <p className="text-gray-300">
              My goal is to preserve and celebrate the rich tradition of gothic horror while embracing modern 
              technological innovations. I believe that by being open about my use of AI tools, I can demonstrate 
              how technology can enhance rather than diminish the art of storytelling.
            </p>
          </section>

          <section className="relative">
            <motion.h2 
              className="creepy-text text-2xl mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              III. Connect With Me
            </motion.h2>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-red-900" />
            <div className="blood-drip absolute left-8 top-full w-[2px] h-0 bg-gradient-to-b from-red-900 to-red-600" />
            <p className="text-gray-300">
              Whether you're a longtime fan of gothic horror or new to the genre, I invite you to explore my 
              collection of tales, legends, and historical accounts. You can follow my work and connect with me on{' '}
              <a href="https://github.com/MatrixEncoder" className="text-blood-red hover:text-red-400 transition-colors">
                GitHub
              </a>{' '}
              and{' '}
              <a href="https://instagram.com/illusionist__666" className="text-blood-red hover:text-red-400 transition-colors">
                Instagram
              </a>.
            </p>
          </section>

          <blockquote className="border-l-4 border-blood-red pl-4 my-8">
            <p className="text-xl text-gray-300 italic">
              "Gothic Tales represents my commitment to blending traditional storytelling with modern AI technology, 
              creating a unique experience for horror enthusiasts."
            </p>
            <p className="text-gray-400 mt-2">— Suryansh Srivastava</p>
          </blockquote>
        </div>
      </motion.section>
    </div>
  );
};

export default About;