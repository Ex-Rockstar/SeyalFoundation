import React from 'react';
import img2 from "./img/event2.png";
import img1 from"./img/event1.jpg";
import img3 from "./img/event3.png";
import img4 from "./img/event4.png";

const Events = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <h1 className="mb-6 text-4xl font-medium tracking-[0.5rem] uppercase text-center">Our Events</h1>
      <div className="container px-4 mx-auto">
        
        {/* Event 1 */}
        <div className="flex flex-col mb-12 bg-white rounded-lg shadow-lg md:flex-row">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={img1}
              alt="Feeding Hope and Nourishing Smiles"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          {/* Text Container */}
          <div className="flex flex-col justify-center w-full p-8 md:w-1/2">
            <h2 className="text-2xl font-medium uppercase tracking-widest text-[#254986] mb-4">
              Feeding <span className="text-red-600">Hope</span> and Nourishing <span className="text-red-600">Smiles</span>
            </h2>
            <p className="text-lg text-gray-600" style={{ textAlign: 'justify' }}>
              In a selfless act of giving, the Manidham team organized a food donation drive in Tambaram. 
              Volunteers gathered to distribute meals to those in need, spreading kindness and hope through 
              this impactful initiative.
            </p>
          </div>
        </div>

        {/* Event 2 */}
        <div className="flex flex-col mb-12 bg-white rounded-lg shadow-lg md:flex-row-reverse">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={img2}
              alt="Sharing Love, One Meal at a Time"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          {/* Text Container */}
          <div className="flex flex-col justify-center w-full p-8 md:w-1/2">
            <h2 className="text-2xl font-medium uppercase tracking-widest text-[#254986] mb-4">
              Sharing <span className="text-red-600">Love</span>, One Meal at a Time
            </h2>
            <p className="text-lg text-gray-600" style={{ textAlign: 'justify' }}>
              Manidham visited an old age home, offering not just meals but moments of care and connection. 
              The team spent the day with the elderly, serving food and sharing stories that brought warmth 
              and comfort to their hearts.
            </p>
          </div>
        </div>

        {/* Event 3 */}
        <div className="flex flex-col mb-12 bg-white rounded-lg shadow-lg md:flex-row">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={img3}
              alt="Spreading Joy and Love with Little Heroes"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          {/* Text Container */}
          <div className="flex flex-col justify-center w-full p-8 md:w-1/2">
            <h2 className="text-2xl font-medium uppercase tracking-widest text-[#254986] mb-4">
              Spreading <span className="text-red-600">Joy</span> and Love with Little Heroes
            </h2>
            <p className="text-lg text-gray-600" style={{ textAlign: 'justify' }}>
              Manidham spent a heartwarming day at the Institute of Child Health, Guindy, spreading joy 
              and love with the amazing children there. A special thanks to Pephands Foundation for giving 
              us the opportunity to make a difference in their lives.
            </p>
          </div>
        </div>

        {/* Event 4 */}
        <div className="flex flex-col mb-12 bg-white rounded-lg shadow-lg md:flex-row-reverse">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={img4}
              alt="Lighting Up Lives, One Smile at a Time"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          {/* Text Container */}
          <div className="flex flex-col justify-center w-full p-8 md:w-1/2">
            <h2 className="text-2xl font-medium uppercase tracking-widest text-[#254986] mb-4">
              Lighting Up Lives, One <span className="text-red-600">Smile</span> at a Time
            </h2>
            <p className="text-lg text-gray-600" style={{ textAlign: 'justify' }}>
            Manidham visited Bavishya Deepam, serving meals and sharing smiles with the children. Through laughter, games, and connection, the day became a celebration of love and community.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Events;
