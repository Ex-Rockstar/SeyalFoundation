import React from 'react';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-[#8b4513] mt-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <h2 className="mb-2 text-2xl font-bold tracking-widest text-white uppercase">Seyal Foundation</h2>
            <p className="max-w-sm font-medium text-white">
              Making a difference, one smile at a time. Join us in our mission to inspire and impact communities.
            </p>
          </div>
          <div className="mb-6 md:mb-0">
       
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="mb-2 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <LinkedIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-4 mt-6 text-center border-t border-white">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} Seyal Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
