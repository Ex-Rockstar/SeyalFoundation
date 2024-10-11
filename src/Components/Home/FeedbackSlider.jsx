import React from 'react';
import Slider from 'react-slick';

// Sample feedback data
const feedbacks = [
  {
    name: 'John Doe',
    feedback: 'The Social Internship Programme by Seyal Foundation was an incredible experience. I learned so much and had the opportunity to contribute meaningfully.',
  },
  {
    name: 'Jane Smith',
    feedback: 'Seyal Foundation’s initiatives are truly inspiring. The workshops and activities were well-organized and impactful.',
  },
  {
    name: 'Alice Johnson',
    feedback: 'Participating in Seyal’s programs gave me a sense of purpose and achievement. The team was supportive, and the projects were well thought out.',
  },
  // Add more feedback objects here
];

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const FeedbackSlider = () => {
  return (
    <div className="max-w-full px-5 py-6 mt-20 text-black feedback-slider-container font-poppins">
      <h1 className="mb-8 text-2xl font-medium tracking-widest text-center uppercase">Feedback That Fuels <span className="text-[#8b4513]">Our Passion</span></h1>
      <Slider {...sliderSettings}>
        {feedbacks.map((feedback, index) => (
          <div key={index} className="flex flex-col items-center p-5 text-center feedback-item">
            <p className="mb-2 text-lg font-medium">{feedback.name}</p>
            <p className="max-w-3xl ml-auto mr-auto text-base text-center text-gray-700">{feedback.feedback}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FeedbackSlider;
