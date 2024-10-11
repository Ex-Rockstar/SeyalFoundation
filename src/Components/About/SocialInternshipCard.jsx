import React, { useState, useEffect } from 'react';
import img1 from './assets/internship1.png';
import img2 from './assets/internship2.png';
import img3 from './assets/internship3.png';
import img4 from './assets/internship4.png';
import img5 from './assets/internship5.png';

const images = [img1, img2, img3, img4, img5]; // Array of five images

const SocialInternshipCard = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen -mb-20 bg-gray-100">
      <div className="flex flex-col w-full overflow-hidden bg-white rounded-lg shadow-lg max-w-7xl lg:flex-row">
        {/* Left Text Section */}
        <div className="flex flex-col justify-center p-10 mt-5 lg:w-1/2">
          <h1 className="mb-2 text-4xl font-medium text-gray-800">Wanna Make a Difference?</h1>
          <p className="text-xl tracking-widest uppercase text-[#8b4513] mb-2">Join our Social Internship Program at Seyal Foundation</p>
          <p className="mb-6 text-lg text-gray-700">
            Be a changemaker! Embark on a journey that lets you give back, grow, and create lasting impact. We're looking for passionate volunteers ready to take on meaningful challenges. Ready to step up?
            <br></br>
            <br></br>
            <a
            href="#apply-now"
            className="w-auto mt-10 px-4 py-2  text-white bg-[#8b4513] font-medium rounded-full hover:bg-opacity-70 transition-all tracking-widest"
          >
            Join Now
          </a>
          </p>
     
        </div>

        {/* Right Image Slider Section */}
        <div className="relative lg:w-1/2 h-96 lg:h-auto">
          <img
            src={images[currentImageIndex]}
            alt="Social Internship"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialInternshipCard;
