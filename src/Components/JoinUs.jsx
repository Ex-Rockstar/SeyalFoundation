import React from 'react';

const JoinUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 mt-10 bg-gray-100 sm:px-6 lg:px-8">
      <div className="max-w-3xl p-8 mx-auto text-center bg-white rounded-lg shadow-lg drop-shadow-2xl">
        <h1 className="mb-4 text-3xl font-semibold tracking-widest text-[#8b4513] uppercase">Join Our Mission to Make a Difference</h1>
        <p className="mb-6 text-lg text-gray-700">
          At Seyal Foundation, we are driven by a shared vision of creating a better world through impactful social initiatives. Our team is dedicated to making a difference, one smile at a time. We believe in the power of collaboration and innovation to drive meaningful change in our communities.
        </p>
        <p className="mb-6 text-lg text-gray-700">
          If you are passionate about social causes and ready to contribute your skills and energy to make a real impact, we want to hear from you! Join us in our journey to inspire and uplift others. Together, we can achieve more and reach new heights of success.
        </p>
        <a href="/contact" className="inline-block px-6 py-3 font-semibold text-white transition duration-300 rounded-lg shadow-md bg-primary hover:bg-opacity-70 bg-[#8b4513] ">
          Get Involved
        </a>
      </div>
    </div>
  );
}

export default JoinUs;
