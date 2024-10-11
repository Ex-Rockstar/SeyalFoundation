import React, { useEffect, useState } from 'react';
import { School, Group } from '@mui/icons-material'; // Updated icons to match educational focus
import CountUp from 'react-countup';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + window.innerHeight;
      const sectionPosition = document.getElementById('achievements').offsetTop;

      if (position > sectionPosition) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen py-12" id="achievements">
      <div className="max-w-6xl px-4 mx-auto">
        <h1 className="text-4xl font-medium uppercase tracking-[0.4rem] text-center text-[#254986] mb-4">Our Achievements</h1>

        <div className="flex flex-wrap justify-center gap-12">
          {/* Students Benefitted Section */}
          <div className="flex flex-col items-center w-full p-8 bg-white rounded-lg md:w-1/2 lg:w-1/3">
            <School style={{ fontSize: 48, color: '#FF0000' }} />
            <div className="text-4xl font-medium text-[#254986] mt-4 tracking-widest">
              {isVisible && <CountUp end={250} duration={2} />}+
            </div>
            <h2 className="text-xl text-center font-medium text-[#254986] mt-4 uppercase tracking-widest">Students Benefitted</h2>
            <p className="mt-2 text-lg text-justify text-gray-600">
              Through our inclusive approach and innovative methods, we have empowered 250+ students, providing them with equal learning opportunities and fostering their growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
