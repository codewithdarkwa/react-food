import { createContext, useReducer } from "react";
import reducer from "./reducer";
import { foodData } from "../FoodData";
let initialState = {
  foodData,
  orderedFood: [],
  total: 0,
  qty: 0,
};
export const Foodcontext = createContext(initialState);

export const FoodProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addFoodToCart = (food) => {
    dispatch({
      type: "ADD_FOOD_TO_CART",
      payload: { food },
    });
  };
  const removeFoodFromCart = (id) => {
    dispatch({
      type: "REMOVE_FOOD_FROM_CART",
      payload: { id },
    });
  };
  return (
    <Foodcontext.Provider
      value={{
        foodData: state.foodData,
        orderedFood: state.orderedFood,
        total: state.total,
        qty: state.qty,
        addFoodToCart,
        removeFoodFromCart,
      }}
    >
      {children}
    </Foodcontext.Provider>
  );
};
