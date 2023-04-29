import React from "react";
import { useProductContext } from "../context/productcontex";
import Product from "./Product";
import Spinner from "../helpers/Spinner";



const Features = () => {
  const { isloading, featureProducts } = useProductContext();

  

  return (
    <div className="  text-customWhite  text-left feature  flex h-auto  px-[10%]  bg-customemediumdark flex-col justify-center   gap-6  ">
      <div className="mx-[20rem] mt-10 w-auto">
        <p className="text-2xl ">check now</p>
        <h1 className="text-6xl text-customViloet">Our Featured services</h1>
      </div>

      <div className="flex items-center justify-center gap-14  flex-wrap h-auto  my-[50px] ">


      

        {isloading===true ? (<Spinner/>): (featureProducts.map((product, index) => {
          return <Product key={product.id} {...product} />;
        }))}
      </div>
    </div>
  );
};

export default Features;
