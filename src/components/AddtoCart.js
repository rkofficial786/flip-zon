import React from "react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import CartAmount from "./CartAmount";

const AddtoCart = ({ product }) => {
  const { stock, colors, id } = product;

  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  const [color, setColor] = useState(colors[0]);

  const { addToCart } = useCartContext();

  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex  gap-4 items-center ">
        <h3 className="text-xl">Colors</h3>
        {colors.map((curColor, index) => {
          return (
            <div
              key={index}
              style={{ backgroundColor: curColor }}
              className={
                color === curColor ? "btnStyle active-color" : "btnStyle"
              }
              onClick={() => setColor(curColor)}
            >
              {color === curColor ? (
                <FaCheck className="flex items-center justify-center w-full h-full text-sm" />
              ) : null}
            </div>
          );
        })}
      </div>

      <CartAmount
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <div>
        <NavLink to={"/cart"}>
          <button onClick={() => addToCart(id, color, amount, product)}>
            Add to cart
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default AddtoCart;
