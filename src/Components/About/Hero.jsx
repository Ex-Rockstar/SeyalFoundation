import React, { useState, useEffect } from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';

const images = [img1, img2, img3, img4];

const Hero = ({ scrollToCeoMessage }) => { // Accept the ref as a prop
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const handleGetToKnowUsClick = () => {
        if (scrollToCeoMessage.current) {
            scrollToCeoMessage.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the CEO message section smoothly
        }
    };

    return (
        <div className="relative h-screen overflow-hidden">
            <div
                className="absolute inset-0 transition-all duration-1000 ease-in-out bg-center bg-cover"
                style={{ backgroundImage: `url(${images[currentImageIndex]})`, filter: 'brightness(40%)' }} // Dim background image
            />
            <div className="relative flex flex-col items-center justify-center w-full h-full px-4 text-center">
                <div className="w-full max-w-3xl mx-auto mt-12"> {/* Increased width and margin-top */}
                    <h1 className="mb-4 text-4xl font-bold tracking-widest text-white uppercase md:text-5xl lg:text-6xl">
                        Igniting Hope, Building Tomorrow
                    </h1>
                    <p className="mb-8 text-lg text-white md:text-xl lg:text-xl">
                        Seyal Foundation is dedicated to empowering marginalized communities through education, healthcare, and sustainable development.
                    </p>
                    <a href="#explore" className="px-8 py-4 mb-2 text-lg tracking-widest text-white uppercase transition-colors duration-300 rounded-full bg-primary hover:bg-primary-dark">
                        Join us in creating a brighter future.
                    </a>
                    <br></br>
                    <br></br>
                    <button 
                        className="font-medium text-white bg-[#8b4513] mt-5 p-2 pl-4 pr-4 rounded-3xl hover:bg-opacity-70 tracking-widest "
                        onClick={handleGetToKnowUsClick} // Call the scroll function
                    >
                        GET TO KNOW US
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
