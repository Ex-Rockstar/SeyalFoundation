import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import img6 from '../../assets/img6.jpeg';
import img7 from '../../assets/img7.jpeg';
import img8 from '../../assets/img8.jpeg';
import img9 from '../../assets/img5.jpg';

const About = () => {
    // Define animation variants
    const slideInFromLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    const slideInFromBottom = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2, // Trigger animation earlier
    });

    // NumberAnimation Component
    const NumberAnimation = ({ value, duration = 2, isVisible }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (isVisible) {
                let start = 0;
                const end = value;
                const stepTime = Math.abs(Math.floor(duration * 1000 / (end - start)));

                const timer = setInterval(() => {
                    start += Math.ceil((end - start) / 10); // Increment in steps
                    setCount(start);
                    if (start >= end) {
                        clearInterval(timer);
                        setCount(end);
                    }
                }, stepTime);

                return () => clearInterval(timer);
            }
        }, [value, duration, isVisible]);

        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1 }}
                className="text-2xl font-bold"
            >
                {count}
            </motion.div>
        );
    };

    return (
        <div className="p-4 bg-gray-100 md:p-8">
            {/* Text Section with Slide-In Animation */}
            <motion.div
                ref={sectionRef}
                initial="hidden"
                animate={sectionInView ? 'visible' : 'hidden'}
                variants={slideInFromLeft}
                className="flex flex-col justify-between mb-8 md:flex-row"
            >
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-medium tracking-widest text-teal-900 uppercase font-poppins">Seyal</h2>
                    <h1 className="max-w-full text-3xl font-medium md:max-w-2xl md:text-4xl font-poppins">Empowering Communities, Transforming Lives</h1>
                </div>
                <p className="max-w-full text-lg text-left md:max-w-md md:text-right">
                    Designing an architectural interior involves integrating functionality
                    and aesthetic appeal to create a space that goes beyond its primary
                    purpose. Interior design has a vital role in shaping an enriching and
                    personalized experience.
                </p>
            </motion.div>

            {/* Images Section with Slide-In Animation */}
            <motion.div
                initial="hidden"
                animate={sectionInView ? 'visible' : 'hidden'}
                variants={slideInFromBottom}
                className="flex flex-col justify-between w-full gap-2 mb-8 md:flex-row"
            >
                <motion.div className="w-full mb-4 text-center md:w-1/4 md:mb-0" whileHover={{ scale: 1.05 }}>
                    <img src={img6} alt="Classic" className="object-cover w-full h-48 mb-2 rounded-md md:h-96" />
                </motion.div>
                <motion.div className="w-full mb-4 text-center md:w-1/4 md:mb-0" whileHover={{ scale: 1.05 }}>
                    <img src={img7} alt="Modern" className="object-cover w-full h-48 mb-2 rounded-md md:h-96" />
                </motion.div>
                <motion.div className="w-full mb-4 text-center md:w-1/4 md:mb-0" whileHover={{ scale: 1.05 }}>
                    <img src={img8} alt="Minimalist" className="object-cover w-full h-48 mb-2 rounded-md md:h-96" />
                </motion.div>
                <motion.div className="w-full text-center md:w-1/4" whileHover={{ scale: 1.05 }}>
                    <img src={img9} alt="Contemporary" className="object-cover w-full h-48 mb-2 rounded-md md:h-96" />
                </motion.div>
            </motion.div>

            {/* Statistics Section with Number Animation */}
            <motion.div
                initial="hidden"
                animate={sectionInView ? 'visible' : 'hidden'}
                variants={slideInFromBottom}
                className="grid grid-cols-2 gap-4 text-center md:grid-cols-5 lg:ml-20"
            >
                <div className="font-medium text-[#8b4513]">
                    <NumberAnimation value={1500} duration={2} isVisible={sectionInView} />
                    <p className="font-medium text-gray-700">Volunteers</p>
                </div>
                <div className="font-medium text-[#8b4513]">
                    <NumberAnimation value={11} duration={2} isVisible={sectionInView} />
                    <p className="font-medium text-gray-700">Branches in 11 states</p>
                </div>
                <div className="font-medium text-[#8b4513]">
                    <NumberAnimation value={12500} duration={2} isVisible={sectionInView} />
                    <p className="font-medium text-gray-700">Families Helped</p>
                </div>
                <div className="font-medium text-[#8b4513]">
                    <NumberAnimation value={200} duration={2} isVisible={sectionInView} />
                    <p className="font-medium text-gray-700">Overseas Volunteers</p>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
