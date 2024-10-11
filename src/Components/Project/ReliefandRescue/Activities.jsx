import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import YouTubeIcon from '@mui/icons-material/YouTube'; // Import MUI YouTube Icon
import img15 from './img/wayanad.png';
import img16 from './img/rescueandrelief.jpg';

// Project data with YouTube links
const projects = [
  {
    title: 'Wayanad Rescue & Relief',
    image: img15,
    description: 'In the serene landscapes of Wayanad, Seyal Foundation’s dynamic team of volunteers stepped forward when disaster struck, showing unparalleled commitment to aiding those in need. Our mission to uplift and support communities during times of crisis brought us to Wayanad, where we worked tirelessly to restore hope. With 600 families helped and 7000 food packets distributed, the foundation also provided essential supplies, including 1800 relief kits, 2600 napkins, and 310 sanitary kits. Additionally, our swift action resulted in the rescue of 90 families, embodying our dedication to creating a brighter tomorrow for those in distress.',
    youtubeLink: 'https://www.youtube.com/watch?v=exampleWayanad', // Replace with actual link
  },
  {
    title: 'Michaung Rescue & Relief',
    image: img16,
    description: 'Seyal Foundation is deeply committed to rescue and relief efforts, having provided aid during various crises. With a dynamic team ready to respond, we have helped 600 families, distributed 7,000 food packets, and handed out 1,800 relief kits. In addition, we have supplied 2,600 napkins and 310 sanitary kits to women in need, and successfully rescued 90 families from disaster-stricken areas. Seyal Foundation believes in quick action, compassion, and coordination to bring relief where it is needed most.',
    youtubeLink: 'https://www.youtube.com/watch?v=exampleMichaung', // Replace with actual link
  }
];

const ProjectCard = ({ project, index }) => {
  const isImageLeft = index % 2 === 0;

  return (
    <div className={`flex -mb-20 flex-col md:flex-row ${isImageLeft ? '' : 'md:flex-row-reverse'} items-center justify-between bg-white p-6 mb-8 shadow-lg rounded-lg`}>
      <img
        src={project.image}
        alt={project.title}
        className="object-contain w-full rounded-lg h-52 md:w-1/2 md:h-64" // Adjusted dimensions
      />
      <div className="p-6 text-center md:w-1/2 md:text-left">
        <h2 className="mb-4 text-3xl font-medium tracking-[0.3rem] uppercase text-[#8b4513]">{project.title}</h2> {/* Title styling */}
        <p className="mb-4 text-justify text-gray-600">{project.description}</p> {/* Justified text */}
        
        {/* YouTube Watch Button */}
        <a
          href={project.youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#8b4513] py-2 px-4 rounded-lg border border-[#8b4513]  transition-colors duration-300"
        >
          <YouTubeIcon className="text-red-600" />
          <span>Watch it on YouTube</span>
        </a>
      </div>
    </div>
  );
};

const Activities = () => {
  return (
    <div className="min-h-screen py-12 -mb-20 bg-gray-100">
      <div className="mt-20 mb-2 text-center">
        <h1 className="inline-block text-4xl font-medium tracking-[0.3rem] uppercase text-center text-gray-800 ">Rescue and Relief Activities</h1>
      </div>

      {/* Write-up Section */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <p className="text-lg text-gray-700">
          Seyal Foundation is driven by its passion for providing rescue and relief services during times of crisis. With a dynamic and dedicated team, they are always prepared to respond to emergencies, delivering vital aid and relief supplies to those in need. Whether it's through distributing food packets, providing sanitary supplies, or physically rescuing families from disaster areas, Seyal Foundation is committed to making a positive impact in the lives of the vulnerable.
        </p>
      </div>

      <div className="container px-4 mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Activities;
