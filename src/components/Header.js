import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = ({title}) => {
  return (
    <div className='text-customWhite flex h-[500px]  bg-customelightdarker items-center justify-evenly gap-9 px-[15rem] header'>

        <div className='w-[400px] flex flex-col gap-5 justify-center '>
            <p className='font-bold text-xl'>Welcome to</p>
            <h1 className='text-4xl font-bold '>Flip<span className='text-customViloet'>Zon</span>  {title}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit laborum consequuntur ipsam unde magnam perferendis dignissimos et voluptates, vero ipsa, totam consequatur veniam quisqdantium adipisci.</p>
            
            <NavLink to={"/products"}><button>Shop Now</button></NavLink>
        </div>

        <div>
            <img src="https://www.westend61.de/images/0001198819pw/happy-family-grocery-shopping-in-supermarket-MASF12753.jpg" alt="" className='w-[400px]' />
        </div>


    </div>
  )
}
