import React from 'react'
import Hero from "../HomeSection/Hero"
import '../../App.css'
import HomeAbout from '../HomeSection/HomeAbout'
import DestinationHome from "../HomeSection/Destina/DestinationHome"
import MostPopular from '../HomeSection/popular/MostPopular'
import Works from '../HomeSection/Work/Works'


const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <MostPopular />
      <DestinationHome />
      <Works />

    </>
  )
}

export default Home
