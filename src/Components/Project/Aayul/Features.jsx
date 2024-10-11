import React from 'react';
import { Favorite, LocalHospital, Group, Healing, VolunteerActivism } from '@mui/icons-material';

const features = [
  { icon: <Favorite style={{ fontSize: 40, color: '#254986' }} />, title: 'Compassionate Care', description: 'Providing emotional and medical support for those in need of blood transfusions.' },
  { icon: <LocalHospital style={{ fontSize: 40, color: '#254986' }} />, title: 'Reliable Access', description: 'Ensuring a stable blood supply to hospitals and patients.' },
  { icon: <Group style={{ fontSize: 40, color: '#254986' }} />, title: 'Community Support', description: 'Building a strong donor community to maintain an ongoing blood supply.' },
  { icon: <Healing style={{ fontSize: 40, color: '#254986' }} />, title: 'Life-Saving Donations', description: 'Encouraging regular donations to save lives and improve healthcare.' },
  { icon: <VolunteerActivism style={{ fontSize: 40, color: '#254986' }} />, title: 'Empathy in Action', description: 'Creating a network of compassionate volunteers who are committed to helping.' },
];

const Features = () => {
  return (
    <div id="features" className="min-h-screen py-12 bg-white"> {/* Added id="features" */}
      {/* Title Section */}
      <h1 className="max-w-4xl mx-auto mb-8 text-4xl font-medium tracking-widest text-center uppercase">
        Empowering Lives Through Compassion and Action
      </h1>

      {/* Features Section */}
      <div className="flex flex-wrap justify-center gap-12 px-4">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center max-w-xs text-center">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="mb-2 text-lg font-medium tracking-widest uppercase text-[#e00b88]">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
