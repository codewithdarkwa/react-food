import { createContext, useReducer } from "react";
import reducer from "./reducer";
import { foodData } from "./data/FoodImage";
let initialState = {
  foodData,
  foodOrder: [],
};
export const Foodcontext = createContext(initialState);

export const FoodProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Foodcontext.Provider
      value={{ foodData: state.foodData, foodOrder: state.foodOrder }}
    >
      {children}
    </Foodcontext.Provider>
  );
};
