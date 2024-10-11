import React from 'react';
import img1 from './img/socialinternship.jpg'; // Update with actual image for the internship program

const AboutInternship = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <h1 className="mb-6 text-4xl font-medium tracking-[0.5rem] uppercase text-center">About the Program</h1>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col mb-12 bg-white rounded-lg shadow-lg md:flex-row drop-shadow-2xl">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={img1}
              alt="Social Internship Program"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          {/* Text Container */}
          <div className="flex flex-col justify-center w-full p-8 md:w-1/2">
            <h2 className="text-2xl font-medium uppercase tracking-widest text-[#a3e635] mb-2"><span className="text-[#0ea5e9]">Empowering Change</span> Through Action</h2>
            <p className="text-lg text-gray-600" style={{ textAlign: 'justify' }}>
              Seyal Foundation’s Social Internship Program is a unique opportunity for young individuals to engage in impactful social initiatives that foster personal growth and community development. Interns work alongside passionate mentors and professionals, gaining hands-on experience in areas such as humanitarian efforts, social entrepreneurship, and community welfare. Through real-world projects, they develop critical skills in leadership, project management, and social impact strategy. This program is designed to empower the next generation of changemakers to make a meaningful difference in society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInternship;
