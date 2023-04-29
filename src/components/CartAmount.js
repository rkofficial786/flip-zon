import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div >
      <div className="flex items-center cart-amount gap-5">
        <div onClick={() => setDecrease()}>
          <FaMinus className="text-3xl fa-plus cursor-pointer" />
        </div>
        <div className="text-3xl ">{amount}</div>
        <div onClick={() => setIncrease()}>
          <FaPlus className="text-3xl fa-minus cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default CartAmountToggle;
