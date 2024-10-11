import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import amosLogo from "./img/amos.jpeg"; // Replace with your actual image paths
import fleckorLogo from './img/fleckor.jpeg';
import tmcLogo from './img/tmc.png';

const partners = [
  {
    id: 1,
    logo: amosLogo,
    title: 'Amos',
    subtitle: 'Empowering Education and Higher Studies to unlock potential and provide pathways to success for students worldwide.',
  },
  {
    id: 2,
    logo: fleckorLogo,
    title: 'Fleckor',
    subtitle: 'Driving Digital Promotions and Partnership Support to enhance brand visibility and create impactful marketing strategies.',
  },
  {
    id: 3,
    logo: tmcLogo,
    title: 'TMC',
    subtitle: 'Providing Comprehensive Medical Assistance and Support, ensuring that individuals receive the care they need when they need it most.',
  },
];

const Partner = () => {
  return (
    <div id="partners" className="min-h-screen py-12 -mb-20 bg-gray-100">
      {/* Section Title */}
      <h2 className="mb-12 text-[#8b4513] text-4xl font-medium tracking-[0.4rem] text-center uppercase">
        Our Esteemed Partners
      </h2>

      {/* Partners Cards */}
      <div className="flex flex-col items-center justify-center gap-8 px-4 md:flex-row">
        {partners.map((partner) => (
          <motion.div
            key={partner.id}
            className="flex flex-col items-center w-full max-w-md p-8 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05 }} // Scale up on hover
            whileTap={{ scale: 0.95 }} // Scale down on tap
            initial={{ opacity: 0, y: 20 }} // Initial state for animation
            animate={{ opacity: 1, y: 0 }} // Animate to visible state
            transition={{ duration: 0.3 }} // Animation duration
          >
            <img
              src={partner.logo}
              alt={`${partner.title} Logo`}
              className="object-contain w-32 h-32 mb-4" // Increased logo size
            />
            <h3 className="mb-2 text-xl font-semibold tracking-widest uppercase text-[#8b4513]">{partner.title}</h3>
            <p className="text-center text-gray-600">{partner.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
