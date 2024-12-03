import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';



const App = () => (
  <div className="App">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <EducationSection />
    <ProjectsSection />
    <SkillsSection />
    <ServicesSection />
    <ContactSection />
    <Footer />
  </div>
);

export default App;
