import { useState } from "react";
import { FoodItem } from "./FoodItem";


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