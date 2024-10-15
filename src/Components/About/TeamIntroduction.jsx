import React from 'react';
import { LinkedIn, Instagram } from '@mui/icons-material'; // Importing MUI icons
import director from './TeamMates/ruthi.jpg';
import cofounder1 from './TeamMates/vishnu.jpg';
import cofounder2 from './TeamMates/lohith.jpg';
import cofounder3 from './TeamMates/lukeshh.jpg';
import developer from './TeamMates/madhu.jpg';
import img6 from '../Project/Aayul/img/naveen.jpeg';
// Team members data
const teamMembers = [
  {
    name: 'Ruthi Shankari S',
    role: 'Director',
    image: director, 
    linkedin: 'https://www.linkedin.com/in/ruthishankari',
    instagram: 'https://www.instagram.com/ruthishankari'
  },
  {
    name: 'Nithya Vishnu',
    role: 'Co-Founder',
    image: cofounder1, 
    linkedin: 'https://www.linkedin.com/in/nithyavishnu',
    instagram: 'https://www.instagram.com/nithyavishnu'
  },
  {
    name: 'Lohith Kamal T M',
    role: 'Co-Founder',
    image: cofounder2, 
    linkedin: 'https://www.linkedin.com/in/lohithkamal',
    instagram: 'https://www.instagram.com/lohithkamal'
  },
  {
    name: 'Lukesh Barath S',
    role: 'Co-Founder',
    image: cofounder3, 
    linkedin: 'https://www.linkedin.com/in/lukeshbarath',
    instagram: 'https://www.instagram.com/lukeshbarath'
  },
  {
    name: 'Madhumitha Dasarathy',
    role: 'Developer',
    image: developer, 
    linkedin: 'http://linkedin.com/in/madhudasarat',
    instagram: 'https://www.instagram.com/madhumithadasarathy/profilecard/?igsh=MTF2bmR4cGhpbTJsaA=='
  },
  {
    name: 'Naveen D',
    role: 'Project Supervisor',
    image: img6, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/henrywilson',
    instagram: 'https://www.instagram.com/henrywilson'
  },
];

const TeamIntroduction = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl p-6 mx-auto bg-white rounded-lg shadow-lg drop-shadow-2xl">
        <h2 className="mb-8 text-3xl font-medium text-center text-[#8b4513] uppercase tracking-widest">Meet Our Team</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 transition-transform duration-300 transform bg-white rounded-lg shadow-lg drop-shadow-2xl hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center w-56 h-56 mb-4 overflow-hidden rounded-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-48 h-48 rounded-full border-[#8b4513] border-4"
                  style={{ objectPosition: 'top' }} // Ensures the top part of the image is focused
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="mb-4 text-center text-gray-700">{member.role}</p>
              <div className="flex space-x-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedIn className="text-[#8b4513] transition-colors duration-300 hover:text-opacity-70" fontSize="large" />
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="text-[#8b4513] transition-colors duration-300 hover:text-opacity-70" fontSize="large" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamIntroduction;
