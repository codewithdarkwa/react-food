import { createContext, useReducer } from "react";
import reducer from "./reducer";
import { foodData } from "./data/FoodImage";
const initialState = {
  foodData,
};
export const Foodcontext = createContext(initialState);

export const FoodProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Foodcontext.Provider value={{ foodData: state.foodData }}>
      {children}
    </Foodcontext.Provider>
  );
};
