import React from 'react';
import { School, People, Star, Support, Celebration } from '@mui/icons-material';

const features = [
  { icon: <School style={{ fontSize: 40}} />, title: 'Quality Education', description: 'Providing access to high-quality education and resources to empower students.' },
  { icon: <People style={{ fontSize: 40}} />, title: 'Community Engagement', description: 'Building strong connections with the community to support educational initiatives.' },
  { icon: <Star style={{ fontSize: 40}} />, title: 'Student Success', description: 'Fostering student achievement through scholarships, mentoring, and support.' },
  { icon: <Support style={{ fontSize: 40}} />, title: 'Guidance and Mentoring', description: 'Offering guidance and mentoring to help students navigate their educational journey.' },
  { icon: <Celebration style={{ fontSize: 40}} />, title: 'Celebrating Achievements', description: 'Recognizing and celebrating the accomplishments of students and the impact of our programs.' },
];

const Features = () => {
  return (
    <div id="features" className="min-h-screen py-12 bg-white"> {/* Added ID here */}
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
