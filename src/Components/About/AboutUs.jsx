import React, { useRef } from 'react'
import Header from '../Home/Header'
import Hero from './Hero'
import CeoMessage from './CeoMessage'
import TeamIntroduction from './TeamIntroduction'
import SocialInternshipCard from './SocialInternshipCard'
import ChapterPage from './ChapterPage'
import InternationalChaptersPage from './InternationChaptersPage'

function AboutUs() {

  const ceoMessageRef = useRef(null);

  return (
    <div>
      <Header />
      <Hero scrollToCeoMessage={ceoMessageRef} /> {/* Pass the ref to Hero */}
      <CeoMessage ref={ceoMessageRef} /> {/* Attach the ref to CeoMessage */}
      <ChapterPage />
      <InternationalChaptersPage />
      <TeamIntroduction />
      <SocialInternshipCard />
    </div>
  )
}

export default AboutUs
