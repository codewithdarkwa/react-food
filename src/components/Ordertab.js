import { useState, useContext } from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { Foodcontext } from "../context/Foodcontext";

const Ordertab = () => {
  const { foodOrder } = useContext(Foodcontext);
  const [orderedFood, setOrderedfood] = useState(foodOrder);
  const deleteOrder = (id) => {
    const filtered = orderedFood.filter((item) => item.id !== id);
    setOrderedfood(filtered);
  };
  return (
    <>
      <h2 className="m-4 ml-10 text-xl font-bold"> My Order</h2>
      {orderedFood.map((food) => (
        <OrderedFoodComponent food={food} deleteOrder={deleteOrder} />
      ))}
      <div className="flex justify-center items-center m-2 mt-8 bg-[#d8f3d0] rounded-md">
        <span className="m-2 font-semibold text-[#90bf7e]">
          You have 3 coupons{" "}
        </span>
        <button className="bg-[#449726] px-2 text-lg text-white font-bold rounded">
          Use now
        </button>
      </div>
      <div className="flex flex-col m-4 mt-[5rem]">
        <div className="flex justify-between mx-10">
          <span className="font-semibold">Sub Total</span>
          <span className="font-semibold text-gray-500">GHS 259.30</span>
        </div>
        <div className="flex justify-between mx-10 my-2">
          <span className="font-semibold">Delivery</span>
          <span className="font-semibold text-gray-500">GHS 9</span>
        </div>
        <div className="flex justify-between mx-10">
          <span className="font-semibold">Taxes</span>
          <span className="font-semibold text-gray-500">GHS 40</span>
        </div>
        <div className="flex justify-between mx-10 my-4">
          <span className="font-semibold text-xl ">Total</span>
          <span className="font-bold">GHS 395.40</span>
        </div>
        <button className="text-white bg-[#449726] p-2 m-2 w-[20rem] mx-12 rounded-full text-center">
          Order and checkout
        </button>
      </div>
    </>
  );
};

export default Ordertab;

function OrderedFoodComponent({ food, deleteOrder }) {
  const [counter, setCounter] = useState(0);

  return (
    <div key={food.id} className="flex justify-around items-center ">
      <img
        className="w-28 h-16 rounded-md object-cover m-4 shadow-lg"
        src={food.image}
        alt="foodimage"
      />
      <div className="flex flex-col">
        <span className="text-md font-semibold">{food.name}</span>
        <div className="flex items-center justify-around border w-16">
          <button onClick={() => setCounter(counter + 1)} className="font-bold">
            +
          </button>
          <span className="font-semibold">{counter}</span>
          <button onClick={() => setCounter(counter - 1)} className="font-bold">
            -
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-md font-semibold m-2">GHS {food.price}</span>
        <RiDeleteBin6Line
          className="ml-12 cursor-pointer"
          onClick={() => deleteOrder(food.id)}
        />
      </div>
    </div>
  );
}
