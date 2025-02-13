import React from 'react';
import { GithubIcon, Skull, InstagramIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerStyle = {
    height: 'auto', 
    padding: '5px 5px', 
    backgroundColor: '#000000',
  };

  return (
    <footer style={footerStyle} className="border-t border-blood-red/20 w-full fixed bottom-0">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Skull className="w-4 h-4 text-blood-red" />
              <h3 className="creepy-text text-lg text-blood-red">GothicTales</h3>
            </div>
            <p className="text-gray-400 text-sm">Exploring the darkest corners of human imagination through tales of horror and mystery.</p>
          </div>
          <div>
            <h4 className="creepy-text text-lg text-blood-red mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link to="/about" className="nav-link">About Us</Link></li>
              <li><Link to="/submit" className="nav-link">Submit Story</Link></li>
              <li><Link to="/privacy" className="nav-link">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="creepy-text text-lg text-blood-red mb-2">Connect</h4>
            <div className="flex items-center justify-center space-x-4">
              <a href="https://github.com/MatrixEncoder" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="w-6 h-6 text-blood-red" />
              </a>
              <a href="https://www.instagram.com/illusionist__666" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="w-6 h-6 text-blood-red" />
              </a>
            </div>
            
          </div>
        </div>
        
        <div className="mt-4 pt-2 border-t border-blood-red/20 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GothicTales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;