import React from 'react';
import Slider from 'react-slick';
import img1 from './img/awards1.jpg';
import img2 from './img/awards2.jpg';
import img3 from './img/awards3.jpg';
import img4 from './img/awards4.png';
import img5 from './img/awards5.png';
import img6 from './img/awards6.jpg';
import img7 from './img/awards7.jpg';
import img8 from './img/awards8.jpg';

const GalleryFive = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-center text-3xl font-medium uppercase tracking-[0.4rem] text-[#8b4513] mb-8">
          Recognition
        </h2>

        {/* Image Slider */}
        <Slider {...settings} className="px-4">
          {/* Each image is placed inside a div with padding and fixed dimensions */}
          {[img1, img2, img3, img4, img5, img6, img7, img8].map((img, index) => (
            <div key={index} className="p-4">
              <img
                src={img}
                alt={`Gallery Image ${index + 1}`}
                className="object-cover w-full h-[300px] rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default GalleryFive;
