import React from 'react';

const EducationSection = () => {
  const educationList = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "ARMIET",
      year: "2024",
      score:"70%",
      details: "Equipped with a strong foundation in programming, problem-solving, and modern technologies.",
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Navjeevan Polytechnic",
      year: "2021",
      score: "74%",
      details: "Specialization in Computer Engineering, providing a solid base in technical skills and practical knowledge for web development.",
    },
  ];

  return (
    <section id="education" className="py-16 bg-black text-white px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold text-highlight text-center">Education</h2>
        <div className="space-y-8">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-highlight">{edu.degree}</h3>
              <p className="text-gray-400">{edu.institution} — {edu.year}</p>
              <p className="text-gray-400">Score — {edu.score}</p>
              <p className="text-gray-300 mt-2">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
