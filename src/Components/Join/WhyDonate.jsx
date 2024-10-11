import React from 'react';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const WhyDonate = () => {
  const points = [
    {
      icon: <LocalHospitalIcon fontSize="large" className="text-[#8b4513]" />,
      title: 'Provide life-saving relief',
      description: 'During natural disasters and emergencies.',
    },
    {
      icon: <SchoolIcon fontSize="large" className="text-[#8b4513]" />,
      title: 'educational support',
      description: 'To underprivileged children, fostering a brighter future.',
    },
    {
      icon: <MedicalServicesIcon fontSize="large" className="text-[#8b4513]" />,
      title: 'Deliver essential healthcare',
      description: 'To those who cannot afford it.',
    },
    {
      icon: <RestaurantIcon fontSize="large" className="text-[#8b4513]" />,
      title: 'Distribute food and relief kits',
      description: 'To families in distress.',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16 bg-gray-100">
      {/* Title Section */}
      <h2 className="mb-12 text-4xl text-[#8b4513] font-medium uppercase tracking-[0.4rem] text-center">
        Why Donate?
      </h2>

      {/* Grid Section */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((point, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 transition-shadow duration-300 transform bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-gray-50 hover:scale-105"
            style={{ width: '280px', height: '280px' }}  // Square size
          >
            <div className="mb-4">
              {point.icon}
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-xl font-medium tracking-widest uppercase">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyDonate;
