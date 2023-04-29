import React from "react";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import Productlist from "../components/Productlist";
import { useFilterContext } from "../context/filtercontext";
import { useEffect } from "react";

const Products = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const {filterproduct} = useFilterContext()

 
  return (
    <div className="w-full bg-customemediumdark ">
    <div className="mt-[100px] flex flex-col w-[80%] justify-center flex-1 mx-auto bg-customemediumdark">
      
      
        <div>
          <Sort />
        </div>

        <div className="">
          <Productlist />
        </div>
      
    </div>
    </div>
  );
};

export default Products;
