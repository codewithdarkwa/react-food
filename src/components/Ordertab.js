import { foodOrder } from "../data/FoodImage";
const Ordertab = () => {
  return (
    <>
      <h2 className="m-4 ml-10 text-xl font-bold"> My Order</h2>
      {foodOrder.map((food) => (
        <div className="flex justify-around items-center ">
          <img
            className="w-28 h-16 rounded-md object-cover m-4 shadow-lg"
            src={food.image}
            alt="foodimage"
          />
          <div className="flex flex-col">
            <span className="text-md font-semibold">{food.name}</span>
            <span>counter</span>
          </div>
          <div className="flex flex-col">
            <span className="text-md font-semibold">GHS {food.price}</span>
            <span className="ml-8 ">Del</span>
          </div>
        </div>
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
