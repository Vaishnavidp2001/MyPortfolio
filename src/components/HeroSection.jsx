import React from 'react';
import { Link } from 'react-scroll';

const HeroSection = () => (
  <section
    id="hero"
    className="min-h-screen bg-black-900 text-white flex items-center px-8"
    style={{
      // backgroundImage: "url('/herobg.png')",
      backgroundColor: window.innerWidth <= 768 ? 'black' : 'transparent',
      backgroundImage: window.innerWidth > 768 ? "url('/herobg.png')" : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
      {/* Mobile Image */}
      <div className="flex-1 mb-8 md:hidden">
        <img
          src="/bgmb.png" // Replace with your actual image
          alt="Vaishnavi Patil"
          className="w-full max-h-96 object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Left Section */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Hi There! I am <span className="text-highlight">Vaishnavi Patil</span>. <br />
          Full Stack <span className="text-highlight">Web Developer</span>.
        </h1>
        <p className="text-gray-400 text-lg">
          Email: <span className="text-highlight"><a href="mailto:vaishnavipatil60111@gmail.com">vaishnavipatil60111@gmail.com</a></span> | Phone:{' '}
          <span className="text-highlight">7447586397</span>
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="bg-highlight px-8 py-3 text-black rounded-lg font-semibold hover:bg-green-600 transition">
            Contact Me
          </button>
        </Link>
      </div>

      {/* Desktop Image */}
      <div className="flex-1 hidden md:block">
        {/* <img
          src="/photo2.jpg" // Replace with your actual image
          alt="Vaishnavi Patil"
          className="w-full max-h-96 object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        /> */}
      </div>
    </div>
  </section>
);

export default HeroSection;
