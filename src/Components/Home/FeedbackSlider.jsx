import React from 'react';
import Slider from 'react-slick';

// Sample feedback data
const feedbacks = [
  {
    name: 'Rakesh S A',
    feedback: 'The Social Internship Programme by Seyal Foundation was an incredible experience. I learned so much and had the opportunity to contribute meaningfully.',
  },
  {
    name: 'Kayalvizhi .M',
    feedback: 'Seyal Foundation’s initiatives are truly inspiring. The workshops and activities were well-organized and impactful.',
  },
  {
    name: 'R. Ramesh',
    feedback: 'Participating in Seyal’s programs gave me a sense of purpose and achievement. The team was supportive, and the projects were well thought out.',
  },
  {
    name: 'Divya Ravi',
    feedback: 'The Seyal Foundation stands out as one of the most dedicated and compassionate organizations I’ve come across. . Being a part of this mission has been an incredibly rewarding experience. Hats off to the entire team for the amazing work they do, and I’m eager to see what more they’ll achieve in the future.',
  },
  {
    name: 'Shreeja S',
    feedback: 'The Seyal Foundation is an amazing NGO run by passionate young leaders who are all about spreading happiness and creating a positive impact within the community. Their benevolent efforts—ranging from distributing food and essential supplies to supporting elderly homes, aiding during disasters, conducting medical camps, and rescuing animals—showcase their dedication to helping those in need.',
  },
  {
    name: 'Hinthu Vinayagam',
    feedback: 'SEYAL FOUNDATION is an inspiring organization driven by dedicated volunteers who tirelessly support those in need. Their impactful initiatives and community-focused efforts make a significant difference in society.',
  },
  {
    name: 'Nithya Dharshini',
    feedback: 'Great job Seyal Foundation! Love this NGO. Have never seen such a set of selfless and enthusiastic volunteers who do such great work.',
  },
  {
    name: 'Sindhiya Kannan',
    feedback: 'As I walked through the entrance, I was greeted by the warm smiles of staff members who seemed genuinely happy to have visitors. I felt so happy been there.',
  },
  {
    name: 'Yuvaraj P',
    feedback: 'Genuinely happy with what these people are doing. They made one of my long time wishes come true.',
  },
  {
    name: 'Siddesh Subramanian',
    feedback: 'Seyal to me is strong forces of people coming together make positive impact in the society that only are discussed and not done, in the most efficient way. Good luck to more positive stuff!',
  },
  {
    name: 'Nerai oli S',
    feedback: 'One of the best  NGO and they are actually passionate about their mission.',
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
    <div className="max-w-full px-5 py-6 mt-20 text-black feedback-slider-container font-poppins pb-20">
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
