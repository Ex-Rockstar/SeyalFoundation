import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import img15 from './img/aayul.jpg';
import img16 from './img/aram.jpg';
import img17 from './img/manitham.jpg';
import img18 from './img/praani.jpg';
import img19 from './img/Prakrithi.jpg';
import img20 from './img/socialinternship.jpg';
import img21 from './img/rescueandrelief.jpg';
import Header from '../Home/Header';

// Project data
const projects = [
  { title: 'AAYUL', image: img15, description: 'Committed to supporting those in need, Aayul is a ray of hope for individuals requiring blood transfusions. We understand the critical role that blood donation plays in healthcare, and we are dedicated to ensuring that hospitals and patients have access to a stable and sufficient blood supply. At Aayul, we believe that donating blood is an act of compassion and solidarity. With each donation, you have the power to give the gift of life and bring hope to those facing medical challenges. Whether you are a first-time donor or a regular contributor, your generosity is invaluable in supporting our healthcare system and saving lives.', link: '/aayul' },
  { title: 'ARAM', image: img16, description: 'Committed to bridging the gap and unlocking the potential of every individual, Aram is dedicated to providing access to quality education and empowering students to pursue their dreams. Aram believes that education is not just a privilege but a fundamental right that should be accessible to everyone, regardless of their background or circumstances. At Aram, we are passionate about equipping students with the knowledge, skills, and resources they need to succeed in school and beyond. Through sponsorship programs, scholarships, mentoring, and educational workshops, we support learners of all ages in their academic journey, empowering them to reach their full potential and become agents of change in their communities.', link: '/aram' },
  { title: 'MANITHAM', image: img17, description: ' Empowering Humanity, One Act of Kindness at a Time! Welcome to Manidham - where compassion meets action, and humanity flourishes! Manidham is committed to uplifting the lives of those in need. Manidham is built on the principles of empathy, solidarity, and social justice, as we strive to address the diverse needs of individuals facing hardship and adversity. Through a wide range of humanitarian activities, including food drives, education initiatives, healthcare support, and disaster relief efforts, we work tirelessly to provide practical assistance and emotional support to the needy.', link: '/manidham' },
  { title: 'PRAANI', image: img18, description: 'Welcome to Praani - a sanctuary of compassion and care for our furry, feathery, and scaly friends! At Praani, we believe that every creature deserves to live a life filled with love, respect, and dignity. Our dedicated team of animal lovers works tirelessly to provide shelter, medical care, and rehabilitation for animals in need. Whether they are rescued from neglect, abuse, or natural disasters, we are here to give them a second chance at happiness.', link: '/praani' },
  { title: 'PRAKRITHI', image: img19, description: 'Committed to safeguarding the environment for generations to come, Prakrithi is a dynamic organization dedicated to promoting sustainability, conservation, and eco-conscious living. At Prakrithi, we believe that every action, no matter how small, has the power to make a positive impact on our environment. Through advocacy, education, and community engagement, we empower individuals and communities to embrace green practices and reduce their ecological footprint. Together, we can make a difference by conserving natural resources, preserving wildlife habitats, and promoting harmony between humans and nature.', link: '/prakrithi' },
  { title: 'SOCIAL INTERNSHIP PROGRAMME', image: img20, description: 'The Social Internship Program has successfully concluded, with interns dedicating their time to address pressing social issues and create positive change. The interns collaborated on projects aimed at empowering communities, such as providing quality education and life skills training to children at a local orphanage. Their efforts have had a significant impact, enriching the lives of these children and equipping them with essential knowledge and skills. The foundation expresses its gratitude to the interns for their dedication, passion, and hard work, recognizing their contributions as invaluable to the organizations mission.', link: '/social-internship' },
  { title: 'RESCUE AND RELIEF PROGRAMME', image: img21, description: 'The Rescue and Relief Programme is dedicated to providing swift and effective assistance during crises. Our specialized team collaborates with governmental bodies to deliver immediate aid, medical support, and recovery resources to affected communities. By working together with local authorities, we ensure a coordinated response to disasters and emergencies, helping to restore hope and support those in need.', link: '/rescue-relief' }
];

const ProjectCard = ({ project, index }) => {
  const isImageLeft = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row ${isImageLeft ? '' : 'md:flex-row-reverse'} items-center justify-between bg-white p-6 mb-8 shadow-lg rounded-lg`}>
      <img
        src={project.image}
        alt={project.title}
        className="object-contain w-full rounded-lg h-52 md:w-1/2 md:h-64" // Adjusted dimensions
      />
      <div className="p-6 text-center md:w-1/2 md:text-left">
        <h2 className="mb-4 text-3xl font-semibold tracking-[0.3rem] uppercase text-[#8b4513]">{project.title}</h2> {/* Title styling */}
        <p className="mb-4 text-justify text-gray-600">{project.description}</p> {/* Justified text */}
        <Link to={project.link} className="bg-[#8b4513] text-white py-2 px-4 rounded-lg hover:bg-[#a0522d] transition-colors duration-300">
          Explore
        </Link>
      </div>
    </div>
  );
};

const ProjectPage = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <Header />
      <div className="mt-20 mb-12 text-center">
        <h1 className="inline-block text-4xl font-medium tracking-[0.3rem] uppercase text-center text-gray-800 border-4 p-2 border-[#8b4513]">Our Projects</h1>
      </div>
      <div className="container px-4 mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
