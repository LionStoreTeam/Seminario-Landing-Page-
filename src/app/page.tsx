import React from 'react'
import DescriptionSection from './components/sections/Description'
import Partners from './components/sections/Partners'
import Reviews from './components/sections/Reviews'
import ContactForm from './components/sections/Form'
import ContentSection from './components/sections/Content'
import Welcome from './components/sections/Welcome'

export default function HomePage() {
  return (
    <div className="">
      <Welcome />
      <ContactForm />
      <DescriptionSection />
      <ContentSection />
      <Partners />
      <Reviews />
    </div>
  )
}
