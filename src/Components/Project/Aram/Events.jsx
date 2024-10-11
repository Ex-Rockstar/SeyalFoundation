import React from 'react';
import socialInternshipImg from './img/events.png'; // Replace with the actual image path

const event = {
  title: 'Social Internship Programme',
  subtitle: 'The Seyal Foundation is thrilled to announce our Social Internship Programme, designed to empower young minds and foster community engagement. This program offers a unique opportunity for interns to work on impactful social projects, gain hands-on experience, and contribute to meaningful change in their communities. Through dedicated mentorship and diverse project involvement, participants will develop valuable skills and make a tangible difference. Join us in our mission to create positive social impact and build a better future together.',
  image: socialInternshipImg, // Replace with actual image path
};

const Events = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="bg-white rounded-lg shadow-lg drop-shadow-2xl">
          {/* Title */}
          <div className="p-8 text-center">
            <h2 className="text-3xl font-medium uppercase tracking-[0.6rem] text-[#254986] ">{event.title}</h2>
          </div>

          {/* Image */}
          <div className="relative w-full h-96 md:h-[40rem]">
            <img
              src={event.image}
              alt={event.title}
              className="absolute inset-0 object-cover w-full h-full "
            />
          </div>

          {/* Text Container */}
          <div className="p-8">
            <p className="text-lg text-gray-600" style={{ textAlign: 'justify' }}>
              {event.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
