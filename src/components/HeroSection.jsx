import React from 'react';
import { Link } from 'react-scroll';

const HeroSection = () => (
  <section id="hero" className="min-h-screen bg-black text-white flex items-center px-8">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Hi There! I am <span className="text-highlight">Vaishnavi Patil</span>. <br />
          I make the <span className="text-highlight">complex simple</span>.
        </h1>
        <p className="text-gray-400 text-lg">
          Email: <span className="text-highlight">vaishnavipatil60111@gmail.com</span> | Phone: <span className="text-highlight">7447586397</span>
        </p>
        <Link
          to="contact"
          smooth={true}
          duration={500}
        >
           <button className="bg-highlight px-8 py-3 text-black rounded-lg font-semibold hover:bg-green-600 transition">
          Contact Me
        </button>
        </Link>
      </div>
      <div className="flex-1 mt-8 md:mt-0 ">
        <img
          src="/photo.jpg"
          alt="Your Name"
          className="w-full max-h-96 object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;