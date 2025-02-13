import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Skull } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-shadow-black/95 backdrop-blur-sm border-b border-blood-red/20 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Skull className="w-8 h-8 text-blood-red" />
            <span className="creepy-text text-2xl text-blood-red">GothicTales</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/legends" className="nav-link">Urban Legends</Link>
            <Link to="/true-crime" className="nav-link">True Crime</Link>
            <Link to="/creepypasta" className="nav-link">Creepypasta</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-blood-red"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-blood-red/20">
            <div className="flex flex-col space-y-4">
              <Link to="/legends" className="nav-link" onClick={() => setIsOpen(false)}>
                Urban Legends
              </Link>
              <Link to="/true-crime" className="nav-link" onClick={() => setIsOpen(false)}>
                True Crime
              </Link>
              <Link to="/creepypasta" className="nav-link" onClick={() => setIsOpen(false)}>
                Creepypasta
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;