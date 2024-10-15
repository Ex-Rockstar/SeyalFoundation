import React, { useState, useEffect } from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';

const images = [img1, img2, img3, img4]; // Array of four images

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center   bg-white mt-[4cm]">
      <div className="flex flex-col w-full overflow-hidden  lg:flex-row">
        {/* Left Text Section */}
        <div className="flex flex-col justify-center p-10 mt-5 lg:w-1/2">
          <h1 className="mb-2 text-4xl font-medium text-gray-800">Empowering Change Through Teamwork</h1>
          <p className="text-xl tracking-widest uppercase text-[#8b4513] mb-2">Together, We Achieve the Extraordinary</p>
          <p className="mb-6 text-lg text-gray-700">
          At Seyal Foundation, we harness the power of collaboration. Our strength comes from passionate individuals united to uplift communities through education, healthcare, and sustainable development. With teamwork at our core, we strive to create a future where every voice is heard, and every action counts. Join us, and together, we can make a difference.            <br />
            <br />

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

export default Hero;
