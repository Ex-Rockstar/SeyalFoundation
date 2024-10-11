import React, { forwardRef } from 'react'; // Import forwardRef
import ceo from './Team Mates/vignesh.jpg';

const CeoMessage = forwardRef((props, ref) => { // Forward ref to the component
  
  return (
    <section ref={ref} className="py-12 bg-gray-100"> {/* Attach ref here */}
      <div className="flex flex-col max-w-6xl p-6 mx-auto bg-white rounded-lg shadow-lg drop-shadow-2xl md:flex-row">
        {/* Image Section */}
        <div className="flex items-center justify-center rounded-l-lg md:w-1/3 md:rounded-l-lg md:rounded-r-none">
          <div className="w-72 h-72 bg-[#8b4513] flex items-center justify-center rounded-full overflow-hidden">
            <img
              src={ceo}
              alt="CEO"
              className="object-cover w-64 h-64 rounded-full"
              style={{ objectPosition: 'top' }} // Ensures the top part of the image is focused
            />
          </div>
        </div>
        {/* Text Content */}
        <div className="flex flex-col justify-center p-6 md:w-2/3">
          <h2 className="mb-4 text-2xl font-semibold tracking-widest text-[#8b4513] uppercase">Founder's Message</h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            Every day at Seyal, I am inspired by the unwavering commitment and passion of our incredible team. Our journey is not just about creating exceptional solutions; it’s about making a difference in the lives of those we touch. Together, we embark on a mission driven by a shared vision to transform challenges into opportunities and dreams into reality.
          </p>
          <p className="leading-relaxed text-gray-700">
            As we forge ahead, our core values of integrity, dedication, and innovation remain our guiding lights. I am deeply grateful for the trust and support from our clients and partners, and I am profoundly proud to lead a team that embodies these values every day. The future is bright, and I am thrilled for what lies ahead, knowing that we will continue to make a positive impact on our communities and the world.
          </p>
          <p className="mt-4 tracking-widest uppercase"> - VIGNESH VELAPPAN </p>
        </div>
      </div>
    </section>
  );
});

export default CeoMessage;
