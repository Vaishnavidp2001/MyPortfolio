import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import SkillsSection from './components/SkillsSection';


const App = () => (
  <div className="App">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ServicesSection />
    <ContactSection />
  </div>
);

export default App;
