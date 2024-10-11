import React from 'react';
import { Favorite, LocalDining, HealthAndSafety, VolunteerActivism, Public } from '@mui/icons-material';

const features = [
  { icon: <Favorite style={{ fontSize: 40}} />, title: 'Compassionate Care', description: 'Extending empathy and kindness through direct humanitarian efforts.' },
  { icon: <LocalDining style={{ fontSize: 40}} />, title: 'Food Assistance', description: 'Organizing food drives to ensure that no one goes hungry.' },
  { icon: <HealthAndSafety style={{ fontSize: 40}} />, title: 'Healthcare Support', description: 'Providing essential healthcare services and medical aid to those in need.' },
  { icon: <VolunteerActivism style={{ fontSize: 40}} />, title: 'Volunteer Engagement', description: 'Mobilizing volunteers to take action and uplift the community.' },
  { icon: <Public style={{ fontSize: 40}} />, title: 'Disaster Relief', description: 'Responding to emergencies with immediate disaster relief and recovery support.' },
];

const Features = () => {
  return (
    <div className="min-h-screen py-12 bg-white">
      {/* Title Section */}
      <h1 className="max-w-4xl mx-auto mb-8 text-4xl font-medium tracking-widest text-center uppercase text-[#254986]">
        Empowering Lives Through Compassion and Action
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
