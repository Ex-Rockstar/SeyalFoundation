import React from 'react';
import img1 from './img/hero.jpg'; 
import logo from './img/prakrithi.png'; // Import your logo image here

const Hero = () => {
    return (
        <div className="relative h-screen overflow-hidden">
            <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${img1})`, backgroundPosition: 'center', filter: 'brightness(20%)' }} 
            />
            <div className="relative flex flex-col items-center justify-center w-full h-full px-4 text-center">
                <div className="w-full max-w-4xl mx-auto mt-12">
                    <div className="flex flex-col items-center"> 
                        <img 
                            src={logo} 
                            alt="Prakrithi Logo" 
                            className="h-auto mb-4 w-28" // Removed circular frame, set auto height
                        />
                        <h1 className="mb-4 text-4xl font-bold tracking-[0.9rem] text-[#254986] uppercase md:text-5xl lg:text-6xl">
                            PRAKRITHI
                        </h1>
                    </div>
                    <p className="mb-8 text-sm text-white md:text-xl lg:text-2xl">
                        Committed to a sustainable future. <br />
                        Join us in conserving natural resources and promoting eco-conscious living for a greener tomorrow.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Hero;
