import React from 'react';

const InstagramSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 -mb-20 bg-gray-100">
      <div className="max-w-3xl px-6 text-center">
        <h1 className="mb-6 text-4xl font-medium tracking-[0.5rem] uppercase">Stay Connected with <span className="text-[#e00b88]">Aayul!</span></h1>
        <p className="mb-6 text-lg leading-relaxed text-gray-600">
          Follow us on Instagram for inspiring stories, health tips, and updates on our latest events and initiatives. 
          Be part of a community that is dedicated to making a positive impact! Stay up to date on how we are improving lives, one initiative at a time. Together, we can achieve even more!
        </p>
        <a
          href="https://www.instagram.com/aayul_community?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" // Replace with actual Instagram URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 text-white font-bold uppercase bg-[#254986] rounded-lg hover:bg-opacity-70 transition-colors"
        >
          Follow Aayul on Instagram
        </a>
      </div>
    </div>
  );
};

export default InstagramSection;
