import React from 'react'
import Hero from '../Components/Home/Hero'
import Invest from '../Components/Home/Invest'
import Portfolio from '../Components/Home/Portfolio'
import Contactform from '../Components/Home/Contactform'

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <Invest/>
      <Portfolio/>
      <Contactform/>
    </div>
  )
}

export default Home