import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import HighLightSection from './components/HighLightSection'
import PriceSection from './components/PriceSection'
import AmenitiesSection from './components/AmenitiesSection'
import FloorPlanSection from './components/FloorPlanSection'
import GallerySection from './components/GallerySection'
import LocationSection from './components/LocationSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FormModel from './components/FormModel'

function App() {
  function handleOpenModel(e) {
    e.preventDefault()
    document.getElementById('my_modal_3').showModal()
  }
  return (
    <>
      <HeroSection handleOpenModel={handleOpenModel} />
      <AboutUs />
      <HighLightSection />
      <PriceSection handleOpenModel={handleOpenModel} />
      <AmenitiesSection />
      <FloorPlanSection handleOpenModel={handleOpenModel} />
      <GallerySection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <FormModel />
      {/* <PriceSection /> */}
    </>
  )
}

export default App
