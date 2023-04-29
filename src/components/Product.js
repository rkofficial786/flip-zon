import React from "react";
import { NavLink } from "react-router-dom";
import Formateprice from "../helpers/Formateprice";

const Product = (product) => {
  

  const { id, name, image, price, category } = product;
  return (
    <NavLink to={`/${category}/${id}`}>
      <div className="flex items-center flex-col justify-center gap-8 hover:shadow-2xl hover:-translate-y-2 bg-customelightdarker rounded-xl ease-in-out duration-500 p-8">
        <figure className="flex image-container overflow-hidden">
          <img   src={image} alt="" width={300} />
          <figcaption className="">{category}</figcaption>
        </figure>

        <div className="flex justify-between items-center w-full">
          <h4 className="text-lg">{name}</h4>
          <h4 className="text-customSky text-lg"><Formateprice price={price}/></h4>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
