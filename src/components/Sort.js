import React, { useEffect, useState } from "react";
import { FaThList } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { useFilterContext } from "../context/filtercontext";
import { MdVerified } from "react-icons/md";
import { List } from "../helpers/List";
import Product from "./Product";

const Sort = () => {
  const { filterproduct, setLoading, grid_view, setgridview, setlistview } =
    useFilterContext();

  return (
    <div className="flex justify-between items-center mx-10 text-customWhite h-[150px]">
      <div className="flex item-center justify-center gap-4 cursor-pointer sort-view">
        <div
          className={`text-2xl ${grid_view === true ? "active-grid" : ""}`}
          onClick={setlistview}
        >
          <BsFillGridFill />
        </div>
        <div
          className={`text-2xl ${grid_view === true ? "" : "active-grid"}`}
          onClick={setgridview}
        >
          <FaThList />
        </div>
      </div>

      <h3 className="text-xl sort-count"> Total {filterproduct.length} items found </h3>

      <div className="flex items-center justify-center gap-2">
        {" "}
        <div className="flex items-center justify-center gap-2">
          {" "}
          <p className="font-bold text-2xl">
            Flip<span className="text-customViloet">Zon</span>{" "}
          </p>{" "}
          <span className="text-xl text-verified"> verified </span>
        </div>
        <MdVerified />{" "}
      </div>
    </div>
  );
};

export default Sort;
