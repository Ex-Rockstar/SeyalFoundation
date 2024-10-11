// src/Components/Home.jsx
import React from 'react';
import Hero from './Hero';
import About from './About';
import Features from './Features';
import Timeline from '../Timeline';
import FeedbackSlider from './FeedbackSlider';
import Footer from './Footer';
import Header from './Header';
import Partner from './Partner';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Features />
      <Timeline />
      <FeedbackSlider />
      <Partner />
    
    </div>
  );
};

export default Home;
