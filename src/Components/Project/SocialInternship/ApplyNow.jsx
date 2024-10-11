import React from 'react';

const ApplyNow = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 -mb-20 bg-gray-100">
      <h1 className="text-4xl font-medium uppercase tracking-[0.4rem] text-cyan-600 mb-6 text-center">
        Join Our <span className="text-lime-600">Social Internship Program</span>
      </h1>
      <p className="max-w-2xl mb-8 text-lg text-center text-gray-700">
        Are you passionate about making a difference in the community? Our Social Internship Program offers a unique opportunity to gain hands-on experience in social work, develop valuable skills, and contribute to meaningful projects. If you're committed to social impact and eager to be part of our dedicated team, we encourage you to apply now!
      </p>
      <a 
        href="mailto:apply@seyalfoundation.org" 
        className="px-6 py-3 text-white transition-colors duration-300 rounded-full bg-fuchsia-600 hover:bg-opacity-80"
      >
        Apply Now
      </a>
    </div>
  );
};

export default ApplyNow;
