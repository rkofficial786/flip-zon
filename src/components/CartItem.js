import React, { useState } from "react";
import {
  AiFillDelete,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import Formateprice from "../helpers/Formateprice";
import CartAmount from "./CartAmount";
import { useCartContext } from "../context/cartContext";

const CartItem = ({ id, image, stock, name, color, price, amount }) => {
  //   const [amount, setAmount] = useState(1);

  

  const { removeItem,setDecrease,setIncrement } = useCartContext();

 

  return (
    <div>
      <div className="flex items-center my-5 cart-bs">
        <div className="flex items-center justify-center gap-2 w-2/5">
          <img className="w-24 mr-5 h-15 cart-img" src={image} alt="" />
          <div className="flex items-center flex-col">
            <h2 className="text-lg font-semibold">{name}</h2>

            <p className="flex items-center justify-center gap-2">
              <span>Color: </span>
              <span
                className="rounded-full"
                style={{
                  display: "inline-block",
                  width: "15px",
                  height: "15px",

                  backgroundColor: color,
                }}
              ></span>
            </p>
          </div>
        </div>

        <div className="w-1/5">
          <h3 className="text-2xl text-customSky">
            <Formateprice price={price} />
          </h3>
        </div>

        <div className="w-1/5">
          <CartAmount
            amount={amount}
            setDecrease={()=>setDecrease(id)}
            setIncrease={()=>setIncrement(id)}
          />
        </div>

        <div className="w-1/5">
          <h3 className="text-2xl text-customSky">
            <Formateprice price={price * amount} />
          </h3>
        </div>

        <div
          onClick={() => {
            removeItem(id);
          }}
          className="text-red-500 w-1/5 cursor-pointer"
        >
          <AiFillDelete className="text-3xl " />
        </div>
      </div>

        
        {/* mobile ui */}
      

      <div className="cart-ss hidden  items-center justify-center h-auto gap-5 m-5 shadow-xl p-4 relative">
        <div>
          <img className="w-[300px] min-w-full" src={image} alt="" />
        </div>
        <div className="flex flex-col cart-ss-item text-left justify-between gap-2 h-auto">
          <h3 className="text-md md:text-2xl"> {name}</h3>
          <p className="flex   gap-2">
            <span>Color: </span>
            <span
              className="rounded-full mt-1"
              style={{
                display: "inline-block",
                width: "15px",
                height: "15px",

                backgroundColor: color,
              }}
            ></span>
          </p>
          <h3 className="text-lg md:text-2xl text-customSky"> 
            <Formateprice price={price*amount} />
          </h3>
          <div className="cart-ss-counter ">
            <CartAmount
              amount={amount}
              setDecrease={()=>setDecrease(id)}
              setIncrease={()=>setIncrement(id)}
            />
          </div>

          <div
            onClick={() => {
              removeItem(id);
            }}
            className="text-red-500  cursor-pointer "
          >
            <AiFillDelete className="text-3xl hover:scale-150 transition-all ease-in-out duration-500 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
