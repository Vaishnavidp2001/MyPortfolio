import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="max-w-6xl mx-auto text-center">
        
        <div className="flex justify-center gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vaishnavi-patil-81835728b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-highlight text-2xl transition"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Vaishnavidp2001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-highlight text-2xl transition"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
        </div>
        <p className="text-gray-400 mb-2">
          &copy; {new Date().getFullYear()} Vaishnavi Patil. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
