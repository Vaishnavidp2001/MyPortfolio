import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


const handleSubmit = (e) => {
  e.preventDefault();
  if (!formData.name || !formData.email || !formData.message) {
    setStatus('Please fill in all required fields.');
    return;
  }
  const emailData = {
    from_name: formData.name, // Matches {{from_name}} in the EmailJS template
    from_email: formData.email, // Matches {{from_email}}
    subject: formData.subject || 'No Subject', // Optional field
    message: formData.message, // Matches {{message}}
  };
  emailjs
    .send(
      'service_2r1688l',    // Replace with your EmailJS service ID
      'template_ls9x2gp',   // Replace with your EmailJS template ID
      emailData,          // Send emailData instead of formData
      '516Q5IA8FSt72mL3i'        // Replace with your EmailJS user ID

    )
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
      (err) => {
        console.error('FAILED...', err);
        setStatus('Something went wrong. Please try again later.');
      }
    );
};


  return (
    <section id="contact" className="py-16 bg-gray-900 text-white px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-highlight">Contact Me</h2>
        <p className="text-gray-400 mt-4">I'd love to hear from you! Please fill out the form below.</p>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject (Optional)"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-highlight px-6 py-3 text-black rounded hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-highlight">{status}</p>}
      </div>
    </section>
  );
};

export default ContactSection;
