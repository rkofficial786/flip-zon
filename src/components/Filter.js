import React from "react";
import { useFilterContext } from "../context/filtercontext";

const Filter = () => {


   const {filter:{text},updateFilterValue} = useFilterContext()
  return (
    <div className="flex justify-center text-customSky">
     <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="text"
        placeholder="Search"
        value={text}
        onChange={(e) => updateFilterValue(e)}
      />
    </form> 
  </div>
  );
};

export default Filter;
