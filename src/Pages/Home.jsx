import React, {useEffect, useState} from 'react'
import Hero from '../Components/Home/Hero'
import Invest from '../Components/Home/Invest'
import Portfolio from '../Components/Home/Portfolio'
import Contactform from '../Components/Home/Contactform'
import toast, { Toaster } from 'react-hot-toast';


const Home = () => {
  const [values, setValues] = useState({
    name:"",
    password:"",
});
  return (
    <div className=''>
      <Hero/>
      <Invest/>
      <Portfolio/>
      <Contactform/>
      <Toaster/>
    </div>
  )
}

export default Home