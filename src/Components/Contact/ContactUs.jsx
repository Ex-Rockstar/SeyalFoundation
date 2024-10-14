import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Email, Phone, LinkedIn, Instagram } from '@mui/icons-material';
import img from '../../assets/img1.jpg';

// Contact form animation variants
const formVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// FAQ animation variants
const faqVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
};

const faqData = [
  {
    question: 'What is Seyal Foundation’s main focus?',
    answer:
      'Seyal Foundation focuses on empowering communities through education, healthcare, and sustainable development initiatives.',
  },
  {
    question: 'How can I contribute to the foundation?',
    answer: 'You can contribute by donating, volunteering, or partnering with us on community projects.',
  },
  {
    question: 'Where does Seyal Foundation operate?',
    answer: 'We operate in various regions across the globe, primarily focusing on underdeveloped areas.',
  },
  {
    question: 'How can I stay updated with your work?',
    answer: 'Follow us on social media or subscribe to our newsletter for updates.',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Redirect to WhatsApp chat with a custom message
  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, message } = formData;

    // Construct the WhatsApp message with user's data
    const whatsappMessage = `Hello, my name is ${fullName}. My email is ${email}. I have the following message: ${message}`;

    // Encode the message to make it URL-friendly
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Replace the phone number with the correct international format (e.g., for India, use '91' country code)
    const whatsappURL = `https://wa.me/917358430672?text=${encodedMessage}`;

    // Open WhatsApp chat with the message
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Hero Section */}
      
      <section className="py-16 bg-slate-50 mb-10 px-4 sm:px-8 max-w-4xl ml-auto mr-auto mt-[3.5cm] text-center ">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl font-medium uppercase tracking-[0.2rem] sm:tracking-[0.4rem] text-[#8B4513]">
          Let's Connect and Make a Difference!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl mt-6 text-lg font-medium text-gray-800 sm:text-md">
          Have a question, idea, or need assistance? We're here to listen, collaborate, and help you create an impact. Get in touch, and let’s work together towards a brighter future!
        </motion.p>
      </section>

      {/* Contact Form Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={formVariant}
        className="flex items-center justify-center px-4 py-12 sm:px-8"
      >
        <motion.div
          className="w-full max-w-lg p-6 bg-white rounded-lg shadow-xl drop-shadow-xl sm:p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[#8B4513] uppercase text-4xl sm:text-4xl font-medium tracking-widest text-center mb-6 sm:mb-8">Reach Out <br/> <span className="text-xl text-gray-800 tracking-[0.5rem]">Let's Connect</span> </h2>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <TextField
              fullWidth
              label="Full Name"
              variant="filled"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              InputProps={{
                style: { backgroundColor: 'white', borderRadius: '4px' },
              }}
            />
            <TextField
              fullWidth
              label="Email Address"
              variant="filled"
              name="email"
              value={formData.email}
              onChange={handleChange}
              InputProps={{
                style: { backgroundColor: 'white', borderRadius: '4px' },
              }}
            />
            <TextField
              fullWidth
              label="Your Message"
              multiline
              rows={4}
              variant="filled"
              name="message"
              value={formData.message}
              onChange={handleChange}
              InputProps={{
                style: { backgroundColor: 'white', borderRadius: '4px' },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#8B4513',
                color: 'white',
                '&:hover': { backgroundColor: '#6d3610' },
                fontSize: '16px',
                textTransform: 'none',
              }}
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </motion.section>

      {/* Contact Info Section */}
      <section className="px-4 py-12 text-center bg-white sm:px-8">
  <div className="max-w-xl mx-auto text-[#8B4513]">
    <h2 className="text-2xl font-medium uppercase tracking-[0.4rem] sm:text-3xl">For More Info</h2>
    <p className="mt-4 text-sm text-gray-800 sm:text-base">Reach out through the following methods:</p>
    <div className="flex justify-center mt-4 space-x-6">
      <a href="mailto:seyalfoundation22@gmail.com" className="flex items-center" title="Email Us">
        <Email />
      </a>
      <a href="tel:+917358430672" className="flex items-center" title="Call Us">
        <Phone />
      </a>
      <a 
        href="https://www.instagram.com/seyal_foundation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center" 
        title="Follow Us on Instagram">
        <Instagram />
      </a>
      <a 
        href="https://www.linkedin.com/in/seyal-foundation-1892b5270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center" 
        title="Connect with Us on LinkedIn">
        <LinkedIn />
      </a>
    </div>
  </div>
</section>

<motion.section
  initial="hidden"
  whileInView="visible"
  variants={faqVariant}
  className="flex flex-col items-center justify-center py-12 sm:py-16 sm:flex-row"
>
  {/* Left Side - Image */}
  <div className="w-full px-4 mb-8 sm:w-1/2 sm:px-8 sm:mb-0">
    <img
      src={img}
      alt="FAQ Image"
      className="w-full h-auto rounded-lg shadow-lg"
    />
  </div>

  {/* Right Side - FAQ Section */}
  <div className="w-full px-4 sm:w-1/2 sm:px-8">
    <h2 className="text-xl font-medium tracking-widest text-center uppercase sm:text-2xl text-[#8B4513]">Frequently Asked Questions</h2>
    <div className="mt-8">
      {faqData.map((faq, index) => (
        <Accordion
          key={index}
          className="bg-transparent border-b"
          sx={{
            boxShadow: 'none',
            backgroundColor: 'transparent',
            color: 'black',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <h3 className="text-base font-medium sm:text-lg">{faq.question}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className="mt-2 text-xs sm:text-sm">{faq.answer}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  </div>
</motion.section>

    </div>
  );
};

export default Contact;
