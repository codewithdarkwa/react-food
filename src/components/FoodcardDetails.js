import { useContext } from "react";
import { Foodcontext } from "../context/Foodcontext";

export const FoodcardDetails = ({ food }) => {
    const { addFoodToCart, orderedFood } = useContext(Foodcontext);
    const addToCart = (foods) => {
      orderedFood.find((item) => item.food === foods)
        ? alert("already added to cart")
        : addFoodToCart(foods);
    };
    return (
      <div>
        <button className="cursor-pointer" onClick={() => addToCart(food)}>
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
  