import React from 'react';

const AboutSection = () => (
  <section id="about" className="py-16 bg-gray-900 text-white px-8">
    <div className="max-w-4xl mx-auto text-center space-y-6">
      <h2 className="text-4xl font-bold text-highlight">Who am I?</h2>
      <p>

I am a Web Developer and UX/UI Designer with a background in Computer Engineering (BE). I specialize in crafting seamless, user-centered digital experiences by combining technical expertise with creative design. Let’s create something amazing together! 🚀
      </p>
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-4 md:space-y-0">
        <div>Name: Vaishnavi Patil</div>
        <div>Location: Badlapur, Thane</div>
        <div> Email: <a href="mailto:vaishnavipatil60111@gmail.com">vaishnavipatil60111@gmail.com</a> </div>
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
