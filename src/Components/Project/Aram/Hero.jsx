import React from 'react';
import img1 from './img/hero.png'; 
import logo from './img/aram.png'; // Import your logo image here

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
                            className="w-40 h-auto mb-4" // Increased width
                        />
                        <h1 className="mb-4 text-4xl font-bold tracking-[0.9rem] text-red-600 uppercase md:text-5xl lg:text-6xl">
                            ARAM
                        </h1>
                    </div>
                    <p className="max-w-xl mb-8 ml-auto mr-auto text-sm text-white md:text-xl lg:text-2xl">
                        Empowering education for all. Unlocking potential and transforming lives through access to quality education and support.
                    </p>
                    <a 
                        href="#features" // Link to the Features section
                        className="font-medium text-white bg-[#254986] mt-5 px-6 py-3 rounded-full hover:bg-opacity-70 transition-colors duration-300"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
