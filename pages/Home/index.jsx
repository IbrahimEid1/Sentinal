import Container from '@mui/material/Container'
import React from 'react'
import Navbar from '../../src/components/Layout/Navbar'
import HeroSection from '../../src/components/HeroSection'
import SearchBar from '../../src/components/UI/InputSearch'
import LatestArrivels from '../../src/components/LatestArrivals'

const Home = () => {
  return (
    < >
      <Navbar/>
      <HeroSection/>    
      <LatestArrivels/>

    </>
  )
}

export default Home