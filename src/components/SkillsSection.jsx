import React from 'react';

const skills = [
  { category: 'Programming Languages', list: ['JavaScript', 'Python' , 'HTML', 'CSS'] },
  {category: 'Databases', list: ['SQL', 'OracleDB' , 'MySQL', 'PostgreSQL']},
  { category: 'Frameworks & Libraries', list: ['React.js', 'Django', 'Tailwind CSS'] },
  { category: 'Tools', list: ['Git','GitHub', 'VS Code', 'Postman' ] },
];

const SkillsSection = () => (
  <section id="skills" className="py-16 bg-gray-800 text-white px-8">
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-center text-highlight">My Skills</h2>
      <p className="text-center text-gray-400 text-lg">
        A showcase of my technical expertise and the tools I excel at.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillCategory, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold text-highlight mb-4">{skillCategory.category}</h3>
            <ul className="space-y-2">
              {skillCategory.list.map((skill, i) => (
                <li
                  key={i}
                  className="text-gray-300 bg-gray-700 py-2 px-4 rounded-md shadow-md hover:bg-highlight hover:text-black transition"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
