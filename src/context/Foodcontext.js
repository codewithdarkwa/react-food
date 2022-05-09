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

  const getTotal = () => {
    dispatch({
      type: "GET_TOTAL",
    });
  };
  const increaseQty = (food) => {
    dispatch({
      type: "INCREASE_QTY",
      payload: food,
    });
  };
  const addFoodToCart = (food) => {
    dispatch({
      type: "ADD_FOOD_TO_CART",
      payload: { food },
    });
    getTotal();
  };
  const removeFoodFromCart = (id) => {
    dispatch({
      type: "REMOVE_FOOD_FROM_CART",
      payload: { id },
    });
    getTotal();
  };

  return (
    <Foodcontext.Provider
      value={{
        foodData: state.foodData,
        orderedFood: state.orderedFood,
        total: state.total,
        qty: state.qty,
        increaseQty,
        addFoodToCart,
        removeFoodFromCart,
      }}
    >
      {children}
    </Foodcontext.Provider>
  );
};
