import React from 'react';
import img9 from '../../assets/img10.png';

const Features = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="flex w-full max-w-full overflow-hidden bg-white rounded-lg shadow-lg">
        {/* Left Side: Image */}
        <div className="flex-shrink-0 w-1/2">
          <img src={img9} alt="Design" className="object-cover w-full h-full p-2" />
        </div>
        
        {/* Right Side: Text Content */}
        <div className="w-1/2 p-8">
          <h2 className="mt-10 mb-4 text-lg font-medium text-[#8b4513] tracking-widest">OUR VISION</h2>
          <p className="mb-6 text-gray-700">
          To create a compassionate and inclusive society where every individual, especially the vulnerable and marginalized, lives with dignity, security, and purpose.
          </p>
          <h2 className="mt-10 mb-4 text-lg font-medium text-[#8b4513] tracking-widest">OUR MISSION</h2>
          <p className="mb-6 text-gray-700">
          To empower communities and transform lives by providing holistic support and sustainable solutions in areas such as elder care, education, healthcare, and social welfare. Through strategic partnerships, innovative initiatives, and a dedicated network of volunteers, we strive to make a lasting impact on society and foster a culture of empathy and solidarity.          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
