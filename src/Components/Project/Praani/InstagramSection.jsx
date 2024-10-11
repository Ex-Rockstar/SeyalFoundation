import React from 'react';

const InstagramSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 -mb-20 bg-gray-100">
      <div className="max-w-3xl px-6 text-center">
        <h1 className="mb-6 text-4xl font-medium tracking-[0.5rem] uppercase">Stay Connected with <span className="text-red-600">Praani!</span></h1>
        <p className="mb-6 text-lg leading-relaxed text-gray-600">
          Follow us on Instagram to stay updated on our rescue stories, rehabilitation efforts, and how we're giving animals a second chance at life. 
          Join a compassionate community of animal lovers dedicated to providing care, shelter, and support for our furry, feathery, and scaly friends. 
          Be a part of our journey towards a kinder, more compassionate world for all creatures.
        </p>
        <a
          href="https://www.instagram.com/praani_community?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" // Replace with actual Instagram URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 text-white font-bold uppercase bg-[#254986] rounded-lg hover:bg-opacity-70 transition-colors"
        >
          Follow Praani on Instagram
        </a>
      </div>
    </div>
  );
};

export default InstagramSection;
