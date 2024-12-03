import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center h-16">
        {/* Logo/Brand Name */}
        <div className="text-2xl font-bold text-highlight">Vaishnavi Patil</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-highlight transition"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-highlight transition"
          >
            About
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-highlight transition"
          >
            Education
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-highlight transition"
          >
            Projects
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-highlight transition"
          >
            Skills
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-highlight transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 space-y-4 px-8 py-4">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="block cursor-pointer hover:text-highlight transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="block cursor-pointer hover:text-highlight transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="block cursor-pointer hover:text-highlight transition"
            onClick={() => setIsOpen(false)}
          >
            Education
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="block cursor-pointer hover:text-highlight transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="block cursor-pointer hover:text-highlight transition"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="block cursor-pointer hover:text-highlight transition"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block cursor-pointer hover:text-highlight transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
