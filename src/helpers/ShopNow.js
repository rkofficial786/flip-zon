import React from 'react'
import { NavLink } from 'react-router-dom'

const ShopNow = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='text-customWhite flex flex-col items-center justify-center'>
        <h1 className='text-3xl mb-3'>Nothing to see here </h1>
     <NavLink to={"/"}> <button>Shop Now</button></NavLink>
      </div>
    </div>
  )
}

export default ShopNow
