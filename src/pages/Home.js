import React from 'react'
import { Header } from '../components/Header'
import { Service } from '../components/Service'
import Trusted from '../components/Trusted'
import { Footer } from '../components/Footer'
import Features from '../components/Features'
import { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

   
    

  return (
    <div className='mt-[100px] text-customWhite'>
    <Header title={"Store"} />

    <Service/>
    <Features/>
    <Trusted/>
    <Footer/>

    </div>
  )
}

export default Home