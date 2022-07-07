// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "ADD_FOOD_TO_CART":
      return {
        ...state,
        orderedFood: [action.payload, ...state.orderedFood],
      };
    case "REMOVE_FOOD_FROM_CART":
      return {
        ...state,
        orderedFood: state.orderedFood.filter((food) => {
          const newItems = food.food.id !== action.payload.id;
          return newItems;
        }),
      };
    case "GET_TOTAL":
      return {
        ...state,
        total: state.orderedFood
          .map((x) => x.food.price)
          .reduce((acc, val) => acc + val, 0),
      };
    case "INCREASE_QTY":
      return {
        ...state,
        qty: state.orderedFood.find(
          (food) => food.food.id === action.payload.id
        )
          ? (state.orderedFood.qty += 1)
          : "",
      };
    default:
      return state;
  }
};
