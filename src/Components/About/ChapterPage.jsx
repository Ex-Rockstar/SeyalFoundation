import React, { useState, useEffect, useRef } from 'react';
import chapterImage from './assets/localchapters.jpg'; // Replace with your image path

const ChapterPage = () => {
  const [volunteers, setVolunteers] = useState(0);
  const [states, setStates] = useState(0);
  const [families, setFamilies] = useState(0);
  const [hasStartedCounting, setHasStartedCounting] = useState(false); // State to track counting start
  const textRef = useRef(null); // Reference to the text container

  // Function to increment the number to the target value
  const incrementNumber = (setNumber, target, duration) => {
    let start = 0;
    const increment = target / (duration / 50);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setNumber(target);
        clearInterval(timer);
      } else {
        setNumber(Math.ceil(start));
      }
    }, 50);
  };

  // Intersection Observer to trigger the counter when the text is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStartedCounting) {
            setHasStartedCounting(true);
            incrementNumber(setVolunteers, 1675, 2000);
            incrementNumber(setStates, 11, 2000);
            incrementNumber(setFamilies, 13280, 2000);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the text container is in view
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [hasStartedCounting]);

  return (
    <div className="flex items-center justify-center pb-10 bg-gray-100">
      <div className="flex flex-col w-full max-w-6xl overflow-hidden bg-white rounded-lg shadow-lg drop-shadow-2xl lg:flex-row">
        {/* Left Text Section */}
        <div
          ref={textRef}
          className="flex flex-col justify-center p-10 lg:w-3/5"
        >
          <h1 className="mb-6 text-4xl font-semibold tracking-widest text-[#8b4513] uppercase">
            Our Local Chapter
          </h1>
          <div className="space-y-6 text-2xl tracking-[0.3rem] text-gray-700">
            <p className="text-3xl font-medium text-[#8b4513]">
              <span className="text-gray-900 tracking-[0.3rem]">VOLUNTEERS:</span> <br />
              {volunteers.toLocaleString()}
            </p>
            <p className="text-3xl font-medium text-[#8b4513]">
              <span className="tracking-[0.3rem] text-gray-900">ESTABLISHED STATES:</span> <br /> {states.toLocaleString()}
            </p>
            <p className="text-3xl font-medium text-[#8b4513]">
              <span className="text-gray-900 tracking-[0.3rem]">FAMILIES HELPED:</span> <br /> {families.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex items-center justify-center p-10 lg:w-2/5">
          <img
            src={chapterImage}
            alt="Local Chapter"
            className="object-cover rounded-lg w-72 h-72" // Adjusted size
          />
        </div>
      </div>
    </div>
  );
};

export default ChapterPage;
