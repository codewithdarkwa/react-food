import { useContext, useState } from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { IoAddOutline } from "react-icons/io5";
import { BiMinus } from "react-icons/bi";
import { Foodcontext } from "../context/Foodcontext";

const Ordertab = () => {
  const { orderedFood } = useContext(Foodcontext);

  return (
    <>
      <div className="flex justify-around items-center">
        <h2 className="m-4 ml-10 text-xl font-bold"> My Order</h2>
        {orderedFood.length !== 0 ? (
          <span className="font-semibold text-gray-500">
            You have {orderedFood.length} foods in cart
          </span>
        ) : (
          ""
        )}
      </div>
      {orderedFood.length === 0 ? (
        <OrderNow />
      ) : (
        <div className=" h-[30vh] overflow-y-scroll">
          {orderedFood.map((food, i) => (
            <OrderedFoodComponent {...food} key={i} />
          ))}
        </div>
      )}
      <Coupons />
      <Total />
    </>
  );
};

export default Ordertab;

function OrderNow() {
  return (
    <div className="text-center">
      <span className="font-bold text-gray-700 text-xl">
        You have no order <br />
        Start Making Your Orders
      </span>
    </div>
  );
}
function OrderedFoodComponent({ food }) {
  const { removeFoodFromCart, qty, increaseQty } = useContext(Foodcontext);
  return (
    <section className="flex justify-around items-center">
      <img
        className="w-28 h-16 rounded-md object-cover m-4 shadow-lg cursor-pointer"
        src={food.image}
        alt={food.image}
      />
      <div className="flex flex-col ">
        <span className="text-md font-semibold m-2">{food.name}</span>
        <div className="flex items-center justify-around border w-16">
          <BiMinus onClick={() => {}} className="cursor-pointer" />
          <span className="font-semibold">{qty}</span>
          <IoAddOutline
            onClick={() => increaseQty(food.id)}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-md font-semibold m-2">GHS {food.price}</span>
        <RiDeleteBin6Line
          className="ml-12 cursor-pointer"
          onClick={() => removeFoodFromCart(food.id)}
        />
      </div>
    </section>
  );
}

function Total() {
  const { total } = useContext(Foodcontext);

  return (
    <div className="flex flex-col m-4 mt-[5rem]">
      <div className="flex justify-between mx-10">
        <span className="font-semibold">Sub Total</span>
        <span className="font-semibold text-gray-500">GHS {total}</span>
      </div>
      <div className="flex justify-between mx-10 my-2">
        <span className="font-semibold">Delivery</span>
        <span className="font-semibold text-gray-500">GHS 0.00</span>
      </div>
      <div className="flex justify-between mx-10">
        <span className="font-semibold">Taxes</span>
        <span className="font-semibold text-gray-500">GHS 0.00</span>
      </div>
      <div className="flex justify-between mx-10 my-4">
        <span className="font-semibold text-xl ">Total</span>
        <span className="font-bold">GHS {total}</span>
      </div>
      <button className="text-white bg-[#449726] p-2 w-[100%] mx-1 rounded-full text-center">
        Order and checkout
      </button>
    </div>
  );
}

function Coupons() {
  return (
    <div className="flex justify-center items-center m-2 mt-8 bg-[#d8f3d0] rounded-md">
      <span className="m-2 font-semibold text-[#90bf7e]">
        You have 3 coupons{" "}
      </span>
      <button className="bg-[#449726] px-2 text-lg text-white font-bold rounded">
        Use now
      </button>
    </div>
  );
}
