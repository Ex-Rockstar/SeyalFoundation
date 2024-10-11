import React, { useEffect, useState } from 'react';
import { LocalHospital, Group } from '@mui/icons-material';
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
        <p className="mb-12 text-lg text-center text-gray-600">
          Celebrating our impactful contributions and community support.
        </p>

        <div className="flex flex-wrap justify-center gap-12">
          {/* Blood Donation Section */}
          <div className="flex flex-col items-center w-full p-8 bg-white rounded-lg md:w-1/2 lg:w-1/3">
            <LocalHospital style={{ fontSize: 48, color: '#e00b88' }} />
            <div className="text-4xl font-medium tracking-widest text-[#254986] mt-4">
              {isVisible && <CountUp end={2000} duration={2} />}+
            </div>
            <h2 className="text-xl text-center font-medium text-[#254986] mt-4 uppercase tracking-widest">Units of Blood Donated</h2>
            <p className="mt-2 text-lg text-justify text-gray-600">
              Through our dedicated efforts and community support, we successfully collected 200 units of blood, 
              making a significant impact on those in need.
            </p>
          </div>

          {/* People Benefited Section */}
          <div className="flex flex-col items-center w-full p-8 bg-white rounded-lg md:w-1/2 lg:w-1/3">
            <Group style={{ fontSize: 48, color: '#e00b88' }} />
            <div className="text-4xl font-medium text-[#254986] mt-4 tracking-widest">
              {isVisible && <CountUp end={2000} duration={2} />}+
            </div>
            <h2 className="text-xl uppercase tracking-widest font-medium text-[#254986] mt-4">People Benefited</h2>
            <p className="mt-2 text-lg text-justify text-gray-600">
              Over 2000 individuals have benefited from our programs and initiatives, showcasing our commitment 
              to community well-being and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
