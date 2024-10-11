import React, { useState } from 'react';
import './InternFeedbackPage.css'; // Update the CSS file name accordingly

// Feedback data
const feedbacks = [
  { name: 'V.Bharathraj', feedback: 'The social internship program enhanced my skills and deepened my commitment to social work, inspiring me to pursue further opportunities for societal impact.' },
  { name: 'Ramya.R', feedback: 'A rewarding experience that helped me grow personally and professionally. Highly recommend!' },
  { name: 'Nithish kumar. V', feedback: 'It was a valuable new experience for me. The internship enhanced my public speaking skills and leadership' },
  { name: 'Sudharsan B', feedback: 'It was great I had some of the best times there , it was just wonderful. I was able to learn how and when to talk. People tend to get emotional but this helps us try to help them while we keep our emotions down ' },
  { name: 'Vishal', feedback: 'Friendly, Interesting and learnt so much about the society and meeting new peoples. Got good experience and recommendable.' },
  { name: 'S Rishi', feedback: 'The dedication to helping underprivileged communities was inspiring. The welcoming team made my experience rewarding, and I gained valuable insights. I look forward to supporting their future work.' },
  { name: 'Krithika Dhiraviyam', feedback: 'Seyal foundation offer hands-on experience in addressing social issues, provide opportunities for professional and personal growth.' },
  { name: 'Preethi R', feedback: ' It was fun and engaging to educate the children, and the program had a positive impact on their learning.' },
  { name: 'Madhumitha', feedback: 'This internship was both educational and inspiring. I’m proud of the work I accomplished and the people I worked with.' },
];

const FeedbackCard = ({ feedback }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="feedback-card" onClick={handleFlip} onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
      <div className={`card-inner ${flipped ? 'is-flipped' : ''}`}>
        {/* Front of the card */}
        <div className="card-front">
          <p className="card-feedback">{feedback.feedback}</p>
        </div>
        {/* Back of the card */}
        <div className="card-back">
          <h3 className="card-name">{feedback.name}</h3>
        </div>
      </div>
    </div>
  );
};

const InternFeedbackPage = () => {
  return (
    <div className="feedback-page">
      <h1 className="uppercase page-title tracking-[0.3rem] text-[#8b4513]">Intern Feedback</h1>
      <div className="feedback-grid">
        {feedbacks.map((feedback, index) => (
          <FeedbackCard key={index} feedback={feedback} />
        ))}
      </div>
    </div>
  );
};

export default InternFeedbackPage;
