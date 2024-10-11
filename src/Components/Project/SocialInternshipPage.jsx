import React from 'react'
import Hero from './SocialInternship/Hero'
import AboutInternship from './SocialInternship/AboutInternship'
import InternFeedbackPage from './SocialInternship/InternFeedbackPage'
import RolesAndResponsibilities from './SocialInternship/RolesAndResponsibilities'
import ApplyNow from './SocialInternship/ApplyNow'
import InternshipGallery from './SocialInternship/InternshipGallery'
import Header from '../Home/Header'

function SocialInternshipPage() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutInternship />
      <RolesAndResponsibilities />
      <InternshipGallery />
      <InternFeedbackPage />
      <ApplyNow />
    </div>
  )
}

export default SocialInternshipPage
