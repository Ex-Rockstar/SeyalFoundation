import React from 'react';
import Slider from 'react-slick';
import img1 from './img/manidham1.png';
import img2 from './img/manidham2.png';
import img3 from './img/manidham3.png';
import img4 from './img/manidham4.png';
import img5 from './img/manidham5.png';
import img6 from './img/manidham6.png';
import img7 from './img/manidham7.png';
import img8 from './img/manidham8.png';

const GalleryOne = () => {
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
    <section className="py-12 pt-20 bg-gray-100">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-center text-3xl mt-10 font-medium uppercase tracking-[0.4rem] text-[#8b4513] mb-8">
          Activities of Manidham
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

export default GalleryOne;
