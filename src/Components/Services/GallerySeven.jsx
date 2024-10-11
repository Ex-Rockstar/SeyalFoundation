import React from 'react';
import Slider from 'react-slick';
import img1 from './img/goodlife1.jpg';
import img2 from './img/goodlife2.jpg';
import img3 from './img/goodlife3.jpg';
import img4 from './img/goodlife4.jpg';
import img5 from './img/goodlife5.jpg';
import img6 from './img/goodlife6.jpg';
import img7 from './img/goodlife7.jpg';
import img8 from './img/goodlife8.jpg';

const GallerySeven = () => {
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
          Good Life Visit
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

export default GallerySeven;
