import React from "react";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className=" text-customWhite flex footer flex-col justify-center gap-4 bg-customDark  h-auto py-[100px] items-center text-xl  flex-wrap relative">
      <div className="flex items-center  footerUp justify-between px-10 w-[60%] mb-10 absolute -top-12 rounded-lg bg-customlightDark py-8 mx-5">
        <p>
          ready to get started <br /> Talk to us today
        </p>
       <NavLink to={"/contact"} > <button>Get Started</button></NavLink>
      </div>

      <div className="mt-10 mx-6">
        <div className="flex justify-center  gap-20 flex-wrap footerDown">
          <div className="w-auto ">
            {" "}
            <p className="text-6xl text-customWhite font-extrabold">
              Flip<span className="text-violet-700">Zon</span>{" "}
            </p>
            <p className="mt-7">
              Lorem ipsum, dolor sit amet  <br /> consectetur adipisicing elit.  <br /> Ipsam
              atque quia distinctio ut.
            </p>
          </div>

          <div>
            <h2>Subscribe to get updates</h2>
            <form action="">
              {" "}
              <input
                type="email"
                placeholder="Enter Email"
                className="my-6 px-3 w-[300px] py-3 text-black"

              />{" "}
              <br />
             <NavLink to={"/contact"}> <button>Subscribe</button></NavLink>
            </form>
          </div>

          <div>
            <p> Follow Us</p>
            <div className="flex  gap-5 items-center mt-5 cursor-pointer">
              <a href="#"><AiOutlineInstagram className="hover:text-customSky" /></a>
              <a href="#"> <RiTelegramLine className="hover:text-customSky" /></a>
              <a href="#"><AiOutlineGithub className="hover:text-customSky" /></a>
              
             
              
            </div>
          </div>

          <div className="flex flex-col  gap-5">
            <p>call us</p>
            <a className="text-customSky" href="tel:+918345220545">+918345220545</a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;