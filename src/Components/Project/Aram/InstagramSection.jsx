import React from 'react';

const InstagramSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 -mb-20 bg-gray-100">
      <div className="max-w-3xl px-6 text-center">
        <h1 className="mb-6 text-4xl font-medium tracking-[0.5rem] uppercase">Stay Connected with <span className="text-red-600">Aram!</span></h1>
        <p className="mb-6 text-lg leading-relaxed text-gray-600">
          Follow us on Instagram for updates on our educational programs, success stories, and tips for creating a brighter future. 
          Join a community dedicated to fostering growth and lifelong learning. Stay informed about how we are breaking educational barriers and empowering individuals to achieve their full potential.
        </p>
        <a
          href="https://www.instagram.com/aram_community?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" // Replace with actual Instagram URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 text-white font-bold uppercase bg-[#254986] rounded-lg hover:bg-opacity-70 transition-colors"
        >
          Follow Aram on Instagram
        </a>
      </div>
    </div>
  );
};

export default InstagramSection;
