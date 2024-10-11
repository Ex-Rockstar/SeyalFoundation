import React, { useState, useEffect } from 'react';
import ukImage from './assets/uk.jpg'; // Replace with your image path
import omanImage from './assets/oman.jpg'; // Replace with your image path
import egyptImage from './assets/egypt.jpg'; // Replace with your image path

const chapters = [
  { name: 'United Kingdom', image: ukImage, target: 30 },
  { name: 'Oman', image: omanImage, target: 25 },
  { name: 'Egypt', image: egyptImage, target: 20 }
];

const InternationalChaptersPage = () => {
  const [volunteers, setVolunteers] = useState({
    'United Kingdom': 0,
    Oman: 0,
    Egypt: 0
  });

  // Function to increment the number to the target value
  const incrementNumber = (name, target, duration) => {
    let start = 0;
    const increment = target / (duration / 50);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setVolunteers((prev) => ({ ...prev, [name]: target }));
        clearInterval(timer);
      } else {
        setVolunteers((prev) => ({ ...prev, [name]: Math.ceil(start) }));
      }
    }, 50);
  };

  // Start the count-up effect when the component mounts
  useEffect(() => {
    chapters.forEach((chapter) => {
      incrementNumber(chapter.name, chapter.target, 2000);
    });
  }, []);

  return (
    <div className="py-12 bg-gray-100 ">
      <div className="container px-4 mx-auto">
        <h1 className="mb-12 text-4xl font-medium uppercase tracking-[0.2rem] text-center text-[#8b4513]">
          International Chapters
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {chapters.map((chapter) => (
            <div
              key={chapter.name}
              className="flex flex-col items-center w-full max-w-xs p-6 transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
            >
              <h2 className="mb-2 text-2xl font-semibold text-gray-800">{chapter.name}</h2>
              <p className="text-xl text-[#8b4513] font-medium mb-1">VOLUNTEERS:</p>
              <p className="text-xl font-semibold text-gray-700">{volunteers[chapter.name]}+</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternationalChaptersPage;
