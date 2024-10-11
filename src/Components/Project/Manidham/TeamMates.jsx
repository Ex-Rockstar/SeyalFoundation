import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import img1 from './img/tharanni.jpg';
import img2 from './img/madhu.jpeg';
// First card data for Project Lead
const projectLead = {
  name: 'Tharanni S V',
  role: 'Project Director',
  image: img1, // Replace with actual image path
  linkedin: 'https://www.linkedin.com/in/alicejohnson',
  instagram: 'https://www.instagram.com/alicejohnson'
};

// Other team members
const teamMembers = [
  {
    name: 'Madhu Vadhani M',
    role: 'Project Coordinator',
    image: img2, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/bobsmith',
    instagram: 'https://www.instagram.com/bobsmith'
  },
  {
    name: 'Jayanth',
    role: 'Fundraising Coordinator',
    image: img1, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/carolwhite',
    instagram: 'https://www.instagram.com/carolwhite'
  },
  {
    name: 'Nivethitha',
    role: 'Community Outreach Officer',
    image: img1, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/davidbrown',
    instagram: 'https://www.instagram.com/davidbrown'
  },
  {
    name: 'Gnanesh',
    role: 'Volunteer Manager',
    image: img1, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/evagreen',
    instagram: 'https://www.instagram.com/evagreen'
  },
  {
    name: 'Nikitha',
    role: 'Finance & Administration',
    image: img1, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/frankharris',
    instagram: 'https://www.instagram.com/frankharris'
  },
  {
    name: 'Gokul Prasath R',
    role: 'Social Media and Public Relations',
    image: img1, // Replace with actual image path
    linkedin: 'https://www.linkedin.com/in/gracelee',
    instagram: 'https://www.instagram.com/gracelee'
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
          <p className="ml-auto mr-auto text-center text-gray-600">{projectLead.role}</p>
          <div className="flex mt-4 space-x-4">
            <a href={projectLead.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon style={{ fontSize: 24, color: '#254986' }} />
            </a>
            <a href={projectLead.instagram} target="_blank" rel="noopener noreferrer">
              <InstagramIcon style={{ fontSize: 24, color: '#FF0000' }} />
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
                <InstagramIcon style={{ fontSize: 24, color: '#FF0000' }} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMates;
