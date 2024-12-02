import React from 'react';

const services = [
  { icon: '🌐', title: 'Web Development', description: 'Creating dynamic and responsive websites.' },
  { icon: '🎨', title: 'Design Trends', description: 'Implementing modern and aesthetic designs.' },
  { icon: '🛠️', title: 'Customer Support', description: 'Providing excellent post-deployment support.' },
  { icon: '💼', title: 'Branding', description: 'Developing strong brand identities.' },
  { icon: '📈', title: 'Marketing', description: 'Strategies for effective marketing campaigns.' },
];

const ServicesSection = () => (
  <section id="services" className="py-16 bg-black text-white px-8">
    <div className="max-w-4xl mx-auto text-center space-y-6">
      <h2 className="text-4xl font-bold text-highlight">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded shadow-lg hover:scale-105 transition"
          >
            <div className="text-4xl">{service.icon}</div>
            <h3 className="text-xl font-bold mt-4">{service.title}</h3>
            <p className="text-gray-400 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
