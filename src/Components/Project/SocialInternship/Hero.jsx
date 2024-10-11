import React from 'react';
import img1 from './img/events.png'; 
import logo from './img/pagelogo.png'; // Replace with Seyal Foundation logo

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
                            alt="Seyal Foundation Logo" 
                            className="h-auto mb-4 w-28"
                        />
                        <h1 className="mb-4 text-4xl font-bold tracking-[0.9rem] text-fuchsia-500 uppercase md:text-5xl lg:text-6xl">
                            <span className="text-lime-400">Social</span> <span className='text-cyan-600'>Internship</span> Programme
                        </h1>
                    </div>
                    <p className="mb-8 text-sm text-white md:text-xl lg:text-2xl">
                        Empower communities, inspire change, and be the force for good. <br />
                        Join Seyal Foundation's Social Internship Programme to make a lasting impact.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Hero;
