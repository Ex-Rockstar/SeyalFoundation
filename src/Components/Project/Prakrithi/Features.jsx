import React from 'react';
import SpaIcon from '@mui/icons-material/Spa';
import PublicIcon from '@mui/icons-material/Public';
import ForestIcon from '@mui/icons-material/Forest';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import RecyclingIcon from '@mui/icons-material/Recycling';

const features = [
  { icon: <SpaIcon style={{ fontSize: 40 }} />, title: 'Sustainability', description: 'Promoting eco-conscious living and sustainable practices for a greener future.' },
  { icon: <PublicIcon style={{ fontSize: 40 }} />, title: 'Environmental Advocacy', description: 'Advocating for environmental conservation and policies that protect our planet.' },
  { icon: <ForestIcon style={{ fontSize: 40 }} />, title: 'Forest Conservation', description: 'Protecting and restoring natural habitats to preserve biodiversity and ecosystems.' },
  { icon: <VolunteerActivismIcon style={{ fontSize: 40 }} />, title: 'Community Engagement', description: 'Empowering individuals to take action and contribute to environmental initiatives.' },
  { icon: <RecyclingIcon style={{ fontSize: 40 }} />, title: 'Waste Management', description: 'Encouraging recycling and responsible waste management to reduce ecological footprints.' },
];

const Features = () => {
  return (
    <div className="min-h-screen py-12 bg-white">
      {/* Title Section */}
      <h1 className="max-w-4xl mx-auto mb-8 text-4xl font-medium tracking-widest text-center uppercase text-[#254986]">
        Safeguarding Our Planet for Future Generations
      </h1>

      {/* Features Section */}
      <div className="flex flex-wrap justify-center gap-12 px-4">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center max-w-xs text-center">
            <div className="mb-4 text-green-600">{feature.icon}</div>
            <h3 className="mb-2 text-lg font-medium tracking-widest uppercase text-[#254986]">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
