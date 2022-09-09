import { useContext } from "react";
import { Foodcontext } from "../context/Foodcontext";
import { FoodcardDetails } from "./FoodcardDetails";

export const FoodItem = () => {
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