import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "PhoneBook Management System",
      description: "Developed a robust application to manage and organize contact details efficiently. The system allows users to add, update, delete, and search for contact information using an intuitive interface. Implemented secure data handling mechanisms to ensure the integrity and confidentiality of stored information.",
      technologies: ["Python", "PostgreSQL",],
      link: "https://github.com/Vaishnavidp2001/Phonebook-Management",
      image: "./project/project1.jpg", // Replace with your project image URL
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed a responsive portfolio website to showcase skills, projects, and achievements. Built with modern web technologies like JavaScript, ReactJS, and Tailwind CSS the website emphasizes user-friendly navigation and engaging visuals. Integrated interactive elements to highlight expertise in web development and UX/UI design",
      technologies: ["React.js", "Tailwind CSS", "EmailJS"],
      link: "#",
       image: "./project/project2.png", // Replace with your project image URL
    },
    {
      title: "Responsive 3-Page Website",
      description: "This project is a responsive 3-page website featuring a Home Page with a hero image and call-to-action, an About Page with an overview and structured layout, and a Contact Page with a functional form, Google Maps placeholder, and contact details. It includes a responsive navigation bar, a stylish footer with quick links and social icons, and hover animations, ensuring seamless usability across all devices.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://vaishnavidp2001.github.io/perspectiwitty-task/",
      image: "./project/project3.jpg", // Replace with your project image URL
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-900 text-white px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-highlight text-center">Projects</h2>
        <div className="grid gap-8 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xxl transition hover:scale-105 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold text-highlight">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <p className="text-gray-400 mt-4">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 bg-highlight text-black px-4 py-2 text-center rounded hover:bg-green-600 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
