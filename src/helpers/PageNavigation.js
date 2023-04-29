import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = (props) => {
  return (
    <div className='text-4xl mx-10 text-customWhite pt-[50px]'>
    
    <NavLink className="text-customViloet " to={"/"} >Home</NavLink>/{props.title}

    </div>
  )
}

export default PageNavigation