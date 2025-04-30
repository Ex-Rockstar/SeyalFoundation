import React, { forwardRef } from 'react'; // Import forwardRef
import qr from '/newqr.jpg';

const Donation = forwardRef((props, ref) => { // Forward ref to the component
  
  return (
    <section ref={ref} className="py-12 bg-gray-100"> {/* Attach ref here */}
      <div className="flex flex-col max-w-6xl p-6 mx-auto bg-white rounded-lg shadow-lg drop-shadow-2xl md:flex-row">
        {/* Image Section */}
        <div className="flex items-center justify-center rounded-l-lg md:w-1/3 md:rounded-l-lg md:rounded-r-none">
          <div className="w-72 h-82  flex items-center justify-center  overflow-hidden">
            <img
              src={qr}
              alt="QR code"
              style={{ objectPosition: 'top' }} // Ensures the top part of the image is focused
            />
          </div>
        </div>
        {/* Text Content */}
        <div className="flex flex-col justify-center p-6 md:w-2/3">
          <h2 className="mb-4 text-2xl text-center font-semibold tracking-widest text-[#8b4513] uppercase">Empower a life. Be the reason someone smiles today — support Seyal Foundation.</h2>
          <p className="mb-4 text-center leading-relaxed text-gray-700">
          Every donation plants a seed of hope.
Together, we can build brighter futures.
Your generosity fuels education, health, and opportunity.
Join us in creating lasting change — one life at a time.
          </p>
        </div>
      </div>
    </section>
  );
});

export default Donation;
