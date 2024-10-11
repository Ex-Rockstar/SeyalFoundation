import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import img1 from './img/fake.jpg';
import img2 from './img/adithya.jpg';
import img3 from './img/shreeya.jpg';
import img4 from './img/yuvaraj.jpg';
import img5 from './img/sanjai.jpg';
import img6 from './img/aishvarya.jpg';
import img7 from './img/sujith.jpg';
import img8 from './img/mohammed.jpg';

// First card data for Project Lead
const projectLead = {
  name: 'Sujith T',
  role: 'Project Director',
  image: img7, // Replace with actual image path
  linkedin: 'https://www.linkedin.com/in/alicejohnson',
  instagram: 'https://www.instagram.com/alicejohnson'
};

// Other team members
const teamMembers = [
  {
    name: 'Aadhithya C S G',
    role: 'Program Coordinator',
    image: img2, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/bobsmith',
    instagram: 'https://www.instagram.com/bobsmith'
  },
  {
    name: 'Sanjay B',
    role: 'Volunteer Manager',
    image: img5, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/carolwhite',
    instagram: 'https://www.instagram.com/carolwhite'
  },
  {
    name: 'Shreeya Darshna R',
    role: 'Finance & Administration Officer',
    image: img3, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/davidbrown',
    instagram: 'https://www.instagram.com/davidbrown'
  },

  {
    name: 'Mohamed Imran M',
    role: 'Social Media & Public Relations',
    image: img8, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/frankharris',
    instagram: 'https://www.instagram.com/frankharris'
  },
  {
    name: 'Yuvaraj M',
    role: 'Community Outreach Officer',
    image: img4, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/gracelee',
    instagram: 'https://www.instagram.com/gracelee'
  },
  {
    name: 'Aishvarya R',
    role: 'Communications Officer',
    image: img6, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/henrywilson',
    instagram: 'https://www.instagram.com/henrywilson'
  },

];

const TeamMates = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <h1 className="mb-6 text-4xl font-medium tracking-[0.5rem] uppercase text-center text-[#254986]">Meet Our Team</h1>

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
            <a href={projectLead.instagram} target="_blank" rel="noopener noreferrer" className="text-red-600">
              <InstagramIcon style={{ fontSize: 24 }} />
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
              <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-red-600">
                <InstagramIcon style={{ fontSize: 24}} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMates;
