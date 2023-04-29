import React from 'react'
import {ImTruck} from "react-icons/im"
import {FaRegMoneyBillAlt} from "react-icons/fa"
import {FaShieldAlt} from "react-icons/fa"
import {RiSecurePaymentLine} from "react-icons/ri"

export const Service = () => {
  return (
    <div className='flex justify-center gap-4 bg-customTooDark px-[15rem] h-auto py-[100px] items-center text-xl service flex-wrap' >

      <div className='h-[350px] w-[350px] flex flex-col items-center justify-center gap-10 bg-customDark shadow-xl  rounded-md'>
        <div className='text-5xl text-customViloet hover:translate-x-[100px] transition-all ease-in-out duration-1000 hover:text-customSky'><ImTruck/></div>
        <p>Super fast and Free delivery</p>
      </div>

      <div >
        <div className='h-[165px] w-[350px] flex mb-[20px] items-center justify-center gap-6 bg-customDark shadow-xl rounded-md'>
            <div className='text-customViloet text-2xl hover:scale-150  transition-all ease-in-out duration-1000 hover:text-customSky'><FaShieldAlt/></div>
            <p>Non-contact Shipping</p>
        </div>

        <div  className='h-[165px] w-[350px] flex  mt-[20px] items-center justify-center gap-6 bg-customDark shadow-xl rounded-md'>
            <div className='text-customViloet text-2xl hover:translate-x-4 transition-all ease-in-out duration-1000 hover:text-customSky'><FaRegMoneyBillAlt/></div>
            <p>Money back gurantee</p>
        </div>

      
      </div>

      <div className='h-[350px] w-[350px] flex flex-col items-center justify-center gap-10 bg-customDark shadow-xl rounded-md'>
        <div className='text-5xl text-customViloet hover:scale-[2] transition-all ease-in-out duration-1000 hover:text-customSky'><RiSecurePaymentLine/></div>
        <p>Secure payment system </p>
      </div>

    </div>
  )
}
