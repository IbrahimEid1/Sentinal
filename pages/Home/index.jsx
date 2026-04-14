import Container from '@mui/material/Container'
import React from 'react'
import Navbar from '../../src/components/Layout/Navbar'
import HeroSection from '../../src/components/HeroSection'
import LatestArrivels from '../../src/components/LatestArrivals'
import EngineeringSection from '../../src/components/SectionEnergy'
import NewsletterBanner from '../../src/components/Banner'
import Footer from '../../src/components/Layout/Footer'
import HeaderArrivels from '../../src/components/UI/HeaderArrivels'

const Home = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>    
      <HeaderArrivels/>
      <LatestArrivels/>
      <EngineeringSection/>
      <NewsletterBanner/>
      <Footer/>
    </>
  )
}

export default Home