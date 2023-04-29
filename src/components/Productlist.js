import React from 'react'
import { useFilterContext } from '../context/filtercontext'
import Grid from '../helpers/Grid'
import { List } from '../helpers/List'

const Productlist = () => {

    const {filterproduct,setLoading ,grid_view} = useFilterContext()
  return (
    <div className='shadow-2xl'>

    {
       grid_view === true ? ( <Grid products={filterproduct} setLoading={setLoading} /> ): (<List products={filterproduct} setLoading={setLoading}/>)
    }

    </div>
  )
}

export default Productlist