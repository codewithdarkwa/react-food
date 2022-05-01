import { useState, useContext } from "react";
import { Foodcontext } from "../context/Foodcontext";

export const Category = () => {
  const [active, setActive] = useState("All");

  const Buttons = [
    { text: "All" },
    { text: "Burger" },
    { text: "Pizza" },
    { text: "Pasta" },
    { text: "Asian" },
    { text: "Beef" },
    { text: "Chicken" },
    { text: "Fish" },
  ];
  return (
    <>
      <h2 className="mt-4 text-bold text-xl ml-8">
        Choose from popular categories
      </h2>
      {Buttons.map((button) => (
        <CategoryButton
          key={button.text}
          active={active}
          setActive={setActive}
          {...button}
        />
      ))}
      <FoodItem />
    </>
  );
};
const CategoryButton = ({ text, active, setActive }) => {
  return (
    <button
      className={`${
        active === text ? "bg-green-500" : "white"
      } px-4 rounded-lg  m-3 shadow-lg`}
      onClick={() => setActive(text)}
    >
      <p
        className={`${
          active === text ? "text-white" : "text-black"
        } font-semibold text-[1.2rem]`}
      >
        {text}
      </p>
    </button>
  );
};

const FoodItem = () => {
  const { foodData } = useContext(Foodcontext);
  return (
    <>
      <div className="flex flex-wrap m-2 justify-around gap-2">
        {foodData.map((food, index) => (
          <FoodcardDetails food={food} key={index} />
        ))}
      </div>
    </>
  );
};

const FoodcardDetails = ({ food }) => {
  const { addFoodToCart } = useContext(Foodcontext);
  return (
    <div>
      <button className="cursor-pointer" onClick={() => addFoodToCart(food)}>
        <img
          className="h-28 w-[10rem] object-cover rounded-lg hover:shadow-xl"
          src={food.image}
          alt="foodimage"
        />
        <div className="flex flex-row justify-between m-1 ">
          <span className="text-md font-semibold">{food.name}</span>
          <span className="text-gray-500">GHS {food.price}</span>
        </div>
      </button>
    </div>
  );
};
