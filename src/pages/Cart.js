import React from "react";
import { useCartContext } from "../context/cartContext";
import CartItem from "../components/CartItem";
import ShopNow from "../helpers/ShopNow";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Formateprice from "../helpers/Formateprice";
import { toast } from "react-hot-toast";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function ordernow(){
    toast('Ruko zara, Sabar kro',
    {
      icon: '🫠',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    }
  );
  }

  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
 
  return (
    <div>
      {cart.length > 0 ? (
        <div className="mt-[100px]  text-customWhite w-full">
          <div className="flex  justify-evenly items-center cart-bs mt-[200px] text-3xl">
            <p className="w-2/5 text-center">Item</p>
            <p className="w-1/5">Price</p>
            <p className="w-1/5">Quantity</p>
            <p className="w-1/5">Subtotal</p>
            <p className="w-1/5">Remove</p>
          </div>
          <div className="w-[80%] mx-auto mt-3 bg-customlightDark h-[1px]"></div>
          <div className="">
            {cart.map((current) => {
              return <CartItem key={current.id} {...current} />;
            })}
          </div>
          <div className="w-[80%] mx-auto mt-3 bg-customDark h-[1px]"></div>
          <div className="flex justify-between items-center mx-[10%] cart-buttons">
            <NavLink to={"/products"}>
              {" "}
              <button>Continue Shopping</button>
            </NavLink>
            <button onClick={clearCart} className="bg-red-600 hover:bg-red-800">
              Clear Cart
            </button>
          </div>

          <div className=" text-3xl  ">
            <div className="flex mx-auto flex-col items-center shadow-2xl rounded-3xl p-10 w-[500px] cart-total ">
              <div className=" flex items-center mb-3 justify-center gap-2">
                <p>Subtotal: </p>
                <p className=" text-customSky">
                  <Formateprice price={total_price} />
                </p>
              </div>

              <div className=" flex items-center mb-3 justify-center gap-2">
                <p className="text-[25px]" >Shipping fee: </p>
                <p className=" text-customSky">
                  {total_price < 500000 ? (
                    <Formateprice price={shipping_fee} />
                  ) : (
                    <Formateprice price={0} />
                  )}
                </p>
              </div>
              <div>
                <p className="text-sm">
                  Free delivery on orders above{" "}
                  <span className="text-customSky">
                    {" "}
                    <Formateprice price={500000} />
                  </span>
                </p>
              </div>
              <div className="w-[80%] mx-auto mt-3 bg-customlightDark h-[1px] hr-bro"></div>

              <div className=" flex flex-col items-center my-3 justify-center gap-2 sub-total ">
                <div className="flex  items-center my-3 justify-center gap-2">
                  <p>Grand total:</p>
                  <p className=" text-customSky">
                    {total_price > 500000 ? (
                      <Formateprice price={total_price} />
                    ) : (
                      <Formateprice price={shipping_fee + total_price} />
                    )}
                  </p>
                </div>
                <div>
                  <button onClick={ordernow}>Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ShopNow />
      )}
    </div>
  );
};

export default Cart;
