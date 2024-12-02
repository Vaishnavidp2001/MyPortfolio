import React from 'react';

const AboutSection = () => (
  <section id="about" className="py-16 bg-gray-900 text-white px-8">
    <div className="max-w-4xl mx-auto text-center space-y-6">
      <h2 className="text-4xl font-bold text-highlight">Who am I?</h2>
      <p>
        I am a Web Developer and UX/UI Designer with a passion for creating engaging user experiences.
        Skilled in modern technologies and committed to delivering exceptional results.
      </p>
      <div className="flex justify-center space-x-8">
        <div>Name: Vaishnavi Patil</div>
        <div>Age: 23</div>
        <div>Location: Badlapur, Thane</div>
        <div>Email: vaishnavipatil60111</div>
      </div>
      <div className="text-center">
        <a
          href="/VAISHNAVI_PATIL_DEVELOPER.pdf"
          download
          className="bg-highlight px-8 py-3 text-black rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Download CV
        </a>
      </div>
    </div>
  </section>
);

export default AboutSection;
