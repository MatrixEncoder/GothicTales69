import React from 'react';
import { GithubIcon, Skull, InstagramIcon, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ padding: '10px', textAlign: 'center', backgroundColor: '#000000', maxHeight: '20vh', overflowY: 'auto' }} className="border-t border-blood-red/20 fixed bottom-0 left-0 right-0 md:h-[15vh] h-[20vh]">
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
            <div className="flex space-x-4 ml-24">
              <li><Link to="/about" className="nav-link">About Us</Link></li>
              <li><Link to="/submit" className="nav-link">Submit</Link></li>
              <li><Link to="/privacy" className="nav-link">Privacy Policy</Link></li>
            </div>
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
              <a href="tel:+919125916986" target="_blank" rel="noopener noreferrer">
                <Phone className="w-6 h-6 text-blood-red" />
              </a>
              <a href="mailto:suryanshsri69.gdscmmmut@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="w-6 h-6 text-blood-red" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-[-5px] text-gray-400 text-center">
          <p style={{ fontSize: '12px', margin: '0' }}>&copy; {new Date().getFullYear()} GothicTales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;