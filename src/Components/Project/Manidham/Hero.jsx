import React from 'react';
import img1 from './img/hero.png'; 
import logo from './img/manitham.png'; // Ensure correct logo path

const Hero = () => {
    return (
        <div className="relative h-screen overflow-hidden">
            <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${img1})`, backgroundPosition: 'center', filter: 'brightness(20%)' }}
            />
            <div className="relative flex flex-col items-center justify-center w-full h-full px-4 text-center">
                <div className="w-full max-w-4xl mx-auto mt-12"> {/* Adjusted max width */}
                    <div className="flex flex-col items-center">
                        <img 
                            src={logo} 
                            alt="Manidham Logo" 
                            className="w-40 h-auto mb-4" // Manidham logo
                        />
                        <h1 className="mb-4 text-4xl font-bold tracking-[0.9rem] text-red-600 uppercase md:text-5xl lg:text-6xl">
                            MANIDHAM
                        </h1>
                    </div>
                    <p className="max-w-xl mb-8 ml-auto mr-auto text-sm text-white md:text-xl lg:text-xl">
                        Empowering humanity, one act of kindness at a time. We provide hope and support through food drives, education, healthcare, and disaster relief.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
