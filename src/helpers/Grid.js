import React from 'react'
import Spinner from './Spinner'
import Product from '../components/Product'

const Grid = ({products,setLoading}) => {
  return (
    <div>
       <div className='flex items-center justify-center  gap-10 flex-wrap text-customWhite'>

        {setLoading===true ? (<Spinner/>) : (
            products.map((current)=>{
                return <Product key={current.id} {...current} />
            })
        )}
        
       </div>
    </div>
  )
}

export default Grid