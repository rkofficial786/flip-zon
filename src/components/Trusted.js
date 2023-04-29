import React from "react";
import trustlogo from "../data";

const Trusted = () => {
  return (
    <div className="flex justify-center gap-[7rem] flex-col items-center  bg-customelightdarker h-auto w-auto py-[200px] trusted ">
      <div >
        <h2 className="text-3xl">Trusted by 1000+ companies</h2>
      </div>

      <div className="flex px-10 flex-wrap items-center justify-center  ">
        {trustlogo.map((img) => {
          return (
            <img
              className="flex w-[100px] h-[100px]  mx-16"
              src={img.img}
              key={img.id}
              alt="company logo"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Trusted;
