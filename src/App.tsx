import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Legends from './pages/Legends';
import TrueCrime from './pages/TrueCrime';
import Creepypasta from './pages/Creepypasta';
import SubmitStory from './pages/SubmitStory';
import Privacy from './pages/Privacy';
import YourStories from './pages/YourStories';
import { Skull } from 'lucide-react';
import bgMusic from './assets/bg-sound.mp3';

function App() {
  console.log('Audio element should be rendered');
  return (
    <Router>
      <audio id="bg-audio" src={bgMusic} autoPlay loop muted></audio>
      <div className="min-h-screen bg-shadow-black flex flex-col pb-[400px]">
        <div className="fixed top-4 left-4 z-50">
          <Skull className="text-blood-red w-8 h-8 animate-float" />
        </div>
        
        <Navbar />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/legends" element={<Legends />} />
            <Route path="/true-crime" element={<TrueCrime />} />
            <Route path="/creepypasta" element={<Creepypasta />} />
            <Route path="/submit" element={<SubmitStory />} />
            <Route path="/your-stories" element={<YourStories />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;