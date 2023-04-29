import React, { useContext } from 'react'
import { Header } from '../components/Header'
import { AppContext } from '../context/productcontex'
import Footer from '../components/Footer'
import { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  

  return (
    <div className='mt-[100px] '>
        <div className='pb-[100px]'>
        <Header title={"E-commerce"}/>
        </div>

        <Footer/>
       
    </div>
  )
}

export default About