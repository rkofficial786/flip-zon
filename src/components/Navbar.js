import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFillHandbagFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useCartContext } from "../context/cartContext";

const Navbar = () => {
  const navref = useRef();

  const [visibleNav, setVisibleNav] = useState(false);

  function toggleNavbar() {
    navref.current.classList.toggle("responsiveNav");
    setVisibleNav(!visibleNav);
  }

  const { total_item, cart } = useCartContext();

  return (
    <div className=" navbar h-[100px] flex items-center justify-between border-b-2 border-customTooDark  p-5 shadow-lg fixed w-screen top-0 z-50">
      <NavLink to={"/"}>
        {" "}
        <p className="text-6xl header-text text-customWhite font-extrabold ">
          Flip<span className="text-violet-700">Zon</span>{" "}
        </p>
      </NavLink>

      <div className="flex items-center justify-center">
        <ul
          ref={navref}
          className="flex justify-center items-center text-xl text-customWhite"
        >
          <NavLink to={"/"}>
            {" "}
            <li onClick={toggleNavbar}>Home</li>{" "}
          </NavLink>
          <NavLink to={"/products"}>
            {" "}
            <li onClick={toggleNavbar}>Products</li>{" "}
          </NavLink>
          <NavLink to={"/contact"}>
            {" "}
            <li onClick={toggleNavbar}>Contact</li>{" "}
          </NavLink>
          <NavLink to={"/about"}>
            {" "}
            <li onClick={toggleNavbar}>About</li>{" "}
          </NavLink>
        </ul>

        <div className="mx-8 relative">
          <NavLink to={"/cart"}>
            {" "}
            <BsFillHandbagFill className="text-customViloet text-2xl" />{" "}
            {cart.length > 0 ? (
              <p className="absolute text-customSky bg-customDark -top-2 -right-3 rounded-full text-center h-6 w-6">
                {total_item}
              </p>
            ) : (
              ""
            )}
          </NavLink>
        </div>
      </div>

      <div onClick={toggleNavbar} className="mx-4 nav-btn hidden">
        {visibleNav === false ? (
          <NavLink>
            {" "}
            <GiHamburgerMenu className="text-customViloet  " />{" "}
          </NavLink>
        ) : (
          <NavLink>
            {" "}
            <ImCross className="text-customViloet  " />{" "}
          </NavLink>
        )}
      </div>

      {/* <div  onClick={toggleNavbar}  className="mx-4 nav-btn nav-close hidden">
         
        </div> */}
    </div>
  );
};

export default Navbar;
