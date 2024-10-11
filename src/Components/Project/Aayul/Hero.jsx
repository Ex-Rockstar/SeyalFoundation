import React from 'react';
import img1 from './img/hero.jpg'; 
import logo from './img/aayul.png'; // Import your logo image here

const Hero = () => {
    return (
        <div className="relative h-screen overflow-hidden">
            <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${img1})`, backgroundPosition: 'center bottom', filter: 'brightness(20%)' }} // Move the image down
            />
            <div className="relative flex flex-col items-center justify-center w-full h-full px-4 text-center">
                <div className="w-full max-w-4xl mx-auto mt-12"> {/* Adjusted max width */}
                    <div className="flex flex-col items-center"> 
                        <img 
                            src={logo} 
                            alt="Aayul Logo" 
                            className="h-auto mb-4 w-28" // Removed circular frame, set auto height
                        />
                        <h1 className="mb-4 text-4xl font-bold tracking-[0.9rem] text-[#e00b88] uppercase md:text-5xl lg:text-6xl">
                            AAYUL
                        </h1>
                    </div>
                    <p className="mb-8 text-sm text-white md:text-xl lg:text-2xl">
                        Donate Blood, Save Lives. <br />
                        Be the Lifeline Someone Needs Today.
                    </p>
                    <a href="#features" className="font-medium text-white bg-[#254986] mt-5 px-6 py-3 rounded-full hover:bg-opacity-70 transition-colors duration-300">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
