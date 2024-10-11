import React from 'react';
import img1 from './img/event1.png';
import img2 from './img/event3.png';

const events = [
  {
    title: 'Life-Saving Blood Donation Camp',
    subtitle: 'On June 16th, at the Tambaram Medical Centre, a collaborative effort between the Aayul Community and Seyal Foundation saw dedicated individuals come together for a life-saving blood donation camp. This event exemplified the spirit of heroism, as volunteers donated blood to make a tangible difference in the lives of those in need.',
    image: img1, // Replace with actual image path
  },
  {
    title: 'Walkathon Rally for Bone and Joint Health Awareness',
    subtitle: 'On August 4th, at Tambaram Medical Centre, the Aayul and Seyal Foundation collaborated to organize a remarkable Walkathon Rally in celebration of World Bone and Joint Health Day. This inspiring event brought together enthusiastic participants who walked to raise awareness for bone and joint health. The rally was followed by a health camp, offering valuable check-ups and consultations. The event was a resounding success, thanks to the dedication of the organizing committee and the relentless efforts of the team. Together, we took meaningful steps toward promoting healthier lifestyles and spreading vital information on bone and joint care.',
    image: img2, // Replace with actual image path
  },
];

const Events = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <h1 className="mb-6 text-4xl font-medium tracking-[0.5rem] uppercase text-center">Our Events</h1>
      <div className="container px-4 mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            } mb-12 bg-white rounded-lg shadow-lg`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={event.image}
                alt={event.title}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            {/* Text Container */}
            <div className="flex flex-col justify-center w-full p-8 md:w-1/2">
              <h2 className="text-2xl font-semibold text-[#254986] mb-4">{event.title}</h2>
              <p className="text-lg text-gray-600" style={{ textAlign: 'justify' }}>
                {event.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
