import { useState } from "react";
import { foodData } from "../data/FoodImage";

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
          text={button.text}
          active={active}
          setActive={setActive}
        />
      ))}
      <FoodItem />
    </>
  );
};
const CategoryButton = ({ text, active, setActive }) => {
  return (
    <button
      className={`bg-${
        active === text ? "green-500" : "white"
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
  return (
    <>
      <div className="flex flex-wrap m-2 justify-around gap-2">
        {foodData.map((food) => (
          <div key={food.id}>
            <img
              className="h-28 w-[10rem] object-cover rounded-lg hover:shadow-xl"
              src={food.image}
              alt="foodimage"
            />
            <div className="flex flex-col ">
              <span className="text-md font-semibold">{food.name}</span>
              <span className="text-gray-500">GHS {food.price}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
