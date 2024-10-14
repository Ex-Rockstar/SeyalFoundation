import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutUs from './Components/About/AboutUs';
import ContactUs from './Components/Contact/ContactUs';
import ProjectPage from './Components/Project/ProjectPage';
import Services from './Components/Services/Gallery';
import Join from './Components/Join/Join';
import Footer from './Components/Home/Footer';

// Import individual project pages
import AayulPage from './Components/Project/AayulPage';
import AramPage from './Components/Project/AramPage';
import ManidhamPage from './Components/Project/ManidhamPage';
import PraaniPage from './Components/Project/PraaniPage';
import PrakrithiPage from './Components/Project/PrakrithiPage';
import SocialInternshipPage from './Components/Project/SocialInternshipPage';
import RescueReliefPage from './Components/Project/RescueReliefPage';
import Layout from './Layout';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/project-page" element={<ProjectPage />} />
          <Route path="/gallery" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/signin" element={<Join />} />
          {/* Define routes for individual project pages */}
          <Route path="/aayul" element={<AayulPage />} />
          <Route path="/aram" element={<AramPage />} />
          <Route path="/manidham" element={<ManidhamPage />} />
          <Route path="/praani" element={<PraaniPage />} />
          <Route path="/prakrithi" element={<PrakrithiPage />} />
          <Route path="/social-internship" element={<SocialInternshipPage />} />
          <Route path="/rescue-relief" element={<RescueReliefPage />} />
        </Route>
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
