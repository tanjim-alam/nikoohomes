import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import HighLightSection from '../components/HighLightSection'
import PriceSection from '../components/PriceSection'
import AmenitiesSection from '../components/AmenitiesSection'
import FloorPlanSection from '../components/FloorPlanSection'
import GallerySection from '../components/GallerySection'
import ContactSection from '../components/ContactSection'
import LocationSection from '../components/LocationSection'
import Footer from '../components/Footer'
import FormModel from '../components/FormModel'

function HomeP() {
    function handleOpenModel(e) {
        e.preventDefault()
        document.getElementById('my_modal_3').showModal()
    }
    return (
        <div>
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
        </div>
    )
}

export default HomeP