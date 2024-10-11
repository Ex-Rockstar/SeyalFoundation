import React from 'react';
import { Pets, Favorite, Healing, VolunteerActivism, Nature } from '@mui/icons-material';

const features = [
  { icon: <Pets style={{ fontSize: 40 }} />, title: 'Animal Welfare', description: 'Caring for furry, feathery, and scaly friends with love and dignity.' },
  { icon: <Favorite style={{ fontSize: 40 }} />, title: 'Rescue & Rehabilitation', description: 'Rescuing animals in need and helping them heal physically and emotionally.' },
  { icon: <Healing style={{ fontSize: 40 }} />, title: 'Medical Care', description: 'Providing essential medical care and treatment for injured and sick animals.' },
  { icon: <VolunteerActivism style={{ fontSize: 40 }} />, title: 'Volunteer Support', description: 'Engaging compassionate individuals to help care for and rehabilitate animals.' },
  { icon: <Nature style={{ fontSize: 40 }} />, title: 'Natural Habitat Preservation', description: 'Working to preserve natural habitats and promote coexistence with wildlife.' },
];

const Features = () => {
  return (
    <div className="min-h-screen py-12 bg-white">
      {/* Title Section */}
      <h1 className="max-w-4xl mx-auto mb-8 text-4xl font-medium tracking-widest text-center uppercase text-[#254986]">
        Compassion in Action for Every Living Being
      </h1>

      {/* Features Section */}
      <div className="flex flex-wrap justify-center gap-12 px-4">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center max-w-xs text-center">
            <div className="mb-4 text-red-600">{feature.icon}</div>
            <h3 className="mb-2 text-lg font-medium tracking-widest uppercase text-[#254986]">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
