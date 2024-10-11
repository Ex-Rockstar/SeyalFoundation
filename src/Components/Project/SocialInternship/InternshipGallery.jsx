import React from 'react';
import img1 from './img/internship1.png'; // Replace with actual image paths
import img2 from './img/internship2.png'; // Replace with actual image paths
import img3 from './img/internship3.png'; // Replace with actual image paths
import img4 from './img/internship4.png'; // Replace with actual image paths
import img5 from './img/internship5.png'; // Replace with actual image paths
import img6 from './img/internship6.png'; // Replace with actual image paths
import img7 from './img/internship7.png'; // Replace with actual image paths
import img8 from './img/internship8.png'; // Replace with actual image paths
import img9 from './img/internship9.png'; // Replace with actual image paths

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const InternshipGallery = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <h1 className="text-4xl font-medium uppercase tracking-[0.4rem] text-orange-600 mb-8 text-center"><span className="text-fuchsia-600">Social Internship</span> Highlights</h1>
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-lg shadow-lg">
              <img src={image} alt={`Internship ${index + 1}`} className="object-cover w-full h-64" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipGallery;
