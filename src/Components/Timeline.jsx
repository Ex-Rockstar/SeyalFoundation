import React, { useState, useEffect, useRef } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import eventImage1 from '../assets/event1.jpg'; // Replace with actual image paths
import eventImage2 from '../assets/event2.jpg';
import eventImage3 from '../assets/event3.jpg';

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(eventImage1);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef(null);

  const events = [
    {
      title: 'Eminence 1.0 Collaboration',
      date: 'Eminence 1.0',
      description: 'Seyal Foundation joined as the official NGO collaborator for Eminence 1.0, focusing on inspiring innovation and creating a lasting societal impact.',
      image: eventImage1,
    },
    {
      title: 'World Bone and Joint Health Day',
      date: 'October 2023',
      description: 'In collaboration with The Aayul Foundation and Tambaram Medical Centre, a rally and health camp were organized to raise awareness about bone and joint health.',
      image: eventImage2,
    },
    {
        title: 'Social Internship Programme',
        date: 'Ongoing',
        description: 'Happy to share the aesthetic captures of our Social Internship Programme offered by Seyal Foundation. Making crafts, investing quality time, and creating smiles are core to our mission. We hope for more to come!',
        image: eventImage3,
      },
  ];

  useEffect(() => {
    startProgress();

    return () => clearInterval(progressInterval.current); // Cleanup the interval on component unmount
  }, [activeIndex]);

  const startProgress = () => {
    setProgress(0);
    progressInterval.current = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 100) {
          clearInterval(progressInterval.current);
          setActiveIndex((prevIndex) => (prevIndex + 1) % events.length);
        }
        return newProgress;
      });
    }, 30); // Adjust the speed of the progress
  };

  useEffect(() => {
    setCurrentImage(events[activeIndex].image);
  }, [activeIndex]);

  return (
    <div className="max-w-full px-5 py-6 mt-20 text-black font-poppins">
      <h1 className="max-w-4xl mx-auto mt-2 mb-8 text-3xl font-medium tracking-widest text-center uppercase md:text-title text-titleColor">
        Our Impactful Events
      </h1>
      <div className="flex flex-col items-center max-w-full mx-auto md:flex-row">
        <div className="w-full p-5 md:w-3/5">
          <div className="space-y-5">
            {events.map((event, index) => (
              <div key={index} className={`space-y-2 ${index === 0 ? 'first-item' : ''}`}>
                <div 
                  className={`flex justify-between items-center py-3 cursor-pointer text-largesubtitle relative text-gray-700 ${activeIndex === index ? 'text-[#8b4513]' : ''}`} 
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gray-300">
                    <div className="w-full transition-all duration-300 bg-[#8b4513]" style={{ height: activeIndex === index ? `${progress}%` : '0%' }}></div>
                  </div>
                  <span className="pl-5 font-medium">{event.title}</span>
                  <span className={`transition-transform transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                    <ExpandMoreIcon />
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="pt-3 pl-5 font-medium text-smallsubtitle text-subtitleColor">
                    <p className="font-bold">{event.date}</p>
                    <p>{event.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mt-8 md:w-2/5 md:mt-0 md:pl-5">
          <img src={currentImage} alt="Event" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Timeline;
