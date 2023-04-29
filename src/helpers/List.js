import React from "react";
import Spinner from "./Spinner";
import { NavLink } from "react-router-dom";
import Formateprice from "./Formateprice";

export const List = ({ products, setLoading }) => {
  console.log("fdkjadanjmda");
  console.log(products);
  return (
    <div>
      <div className="flex items-center justify-between flex-col gap-7">
        {setLoading === true ? (
          <Spinner />
        ) : (
          products.map((current) => {
            const { id, name, image, price, category, description } = current;

            return (
              <div className="flex items-center list-view justify-center  gap-4  text-customWhite  shadow-2xl p-6">
                <div>
                <figure className="flex image-container overflow-hidden">
                  <img src={image} className="h-[230px] min-w-[250px]" alt="" width={300}  />
                  <figcaption className="">{category}</figcaption>
                </figure></div>

                <div className="flex flex-col justify-between gap-3 max-w-[600px] min-w-[300px]">
                  <h1 className="text-3xl">{name}</h1>
                  <h4 className="text-customSky text-lg">
                    <Formateprice price={price} />
                  </h4>
                  <p>{description.slice(0,180)}...</p>
                  <NavLink to={`/${category}/${id}`}>
                    <button>Buy Now</button>
                  </NavLink>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
