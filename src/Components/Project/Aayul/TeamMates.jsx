import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import img1 from './img/srikanth.jpeg';
import img2 from './img/mithun.jpeg';
import img3 from './img/linghesh.jpeg';
import img4 from './img/kanish.jpeg';
import img5 from './img/sriram.jpg';
import img6 from './img/naveen.jpeg';
import img7 from './img/dheena.jpeg';
import img8 from './img/gowtham.jpeg';
import img9 from './img/Balaji.png';
import img10 from './img/ashwin.jpg';

// First card data for Project Lead
const projectLead = {
  name: 'Bala Srinivas',
  role: 'Project Lead & Coordinator',
  image: img9, // Replace with actual image path
  linkedin: 'https://www.linkedin.com/in/alicejohnson',
  instagram: 'https://www.instagram.com/alicejohnson'
};

// Other team members
const teamMembers = [
  {
    name: 'Ashwin Surya S',
    role: 'Brand and Community Manager',
    image: img10, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/bobsmith',
    instagram: 'https://www.instagram.com/bobsmith'
  },
  {
    name: 'MITHUN RAAJ . S',
    role: 'Communication Manager',
    image: img2, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/carolwhite',
    instagram: 'https://www.instagram.com/carolwhite'
  },
  {
    name: 'Srikanth V T',
    role: 'Financial Manager',
    image: img1, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/davidbrown',
    instagram: 'https://www.instagram.com/davidbrown'
  },
  {
    name: 'LINGESH N',
    role: 'Community Outreach Manager',
    image: img3, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/evagreen',
    instagram: 'https://www.instagram.com/evagreen'
  },
  {
    name: 'Kanish R B',
    role: 'Volunteer Manager',
    image: img4, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/frankharris',
    instagram: 'https://www.instagram.com/frankharris'
  },
  {
    name: 'Sri Raman M',
    role: 'Fundraising Manager',
    image: img5, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/gracelee',
    instagram: 'https://www.instagram.com/gracelee'
  },
  {
    name: 'Naveen D',
    role: 'Project Supervisor',
    image: img6, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/henrywilson',
    instagram: 'https://www.instagram.com/henrywilson'
  },
  {
    name: 'Dheena Dhayalan R',
    role: 'Project Director',
    image: img7, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/ivymartinez',
    instagram: 'https://www.instagram.com/ivymartinez'
  },
  {
    name: 'Gowtham P N',
    role: 'Project Director',
    image: img8, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/jacktaylor',
    instagram: 'https://www.instagram.com/jacktaylor'
  },
];

const TeamMates = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <h1 className="mb-6 text-4xl font-medium tracking-[0.5rem] uppercase text-center">Meet Our Team</h1>

      {/* Project Lead */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-col items-center p-6 transition-all duration-300 ease-in-out transform bg-white rounded-lg shadow-lg w-80 h-80 hover:scale-105 hover:shadow-xl">
          <img
            src={projectLead.image}
            alt={projectLead.name}
            className="mb-4 transition-transform duration-300 rounded-full w-28 h-28 hover:scale-110"
          />
          <h2 className="text-xl font-semibold tracking-widest uppercase text-[#254986] text-center ml-auto mr-auto">{projectLead.name}</h2>
          <p className="text-gray-600">{projectLead.role}</p>
          <div className="flex mt-4 space-x-4">
            <a href={projectLead.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon style={{ fontSize: 24, color: '#254986' }} />
            </a>
            <a href={projectLead.instagram} target="_blank" rel="noopener noreferrer">
              <InstagramIcon style={{ fontSize: 24, color: '#e00b88' }} />
            </a>
          </div>
        </div>
      </div>

      {/* Other Team Members */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center p-6 transition-all duration-300 ease-in-out transform bg-white rounded-lg shadow-lg w-80 h-80 hover:scale-105 hover:shadow-xl">
            <img
              src={member.image}
              alt={member.name}
              className="mb-4 transition-transform duration-300 rounded-full w-28 h-28 hover:scale-110"
            />
            <h2 className="text-xl font-semibold tracking-widest uppercase text-[#254986]">{member.name}</h2>
            <p className="text-gray-600">{member.role}</p>
            <div className="flex mt-4 space-x-4">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={{ fontSize: 24, color: '#254986' }} />
              </a>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <InstagramIcon style={{ fontSize: 24, color: '#e00b88' }} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMates;
