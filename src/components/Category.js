import { useState, useContext } from "react";
import { Foodcontext } from "../context/Foodcontext";

export const Category = () => {
  const { foodData } = useContext(Foodcontext);
  const [active, setActive] = useState("All");
  const [order, setOrder] = useState(foodData);
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
      <FoodItem order={order} setOrder={setOrder} />
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

const FoodItem = ({ order, setOrder }) => {
  const [orderedFood, setOrderedFood] = useState([]);
  const Ordered = (food) => {
    return setOrderedFood([...orderedFood, food]);
  };
  return (
    <>
      <div className="flex flex-wrap m-2 justify-around gap-2">
        {order.map((food) => (
          <div key={food.id}>
            <button className="cursor-pointer" onClick={() => Ordered(food)}>
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
        ))}
      </div>
    </>
  );
};
