// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "ADD_FOOD_TO_CART":
      return {
        ...state,
        orderedFood: [action.payload, ...state.orderedFood],
      };
    case "DELETE_FOOD_FROM_CART":
      return {
        ...state,
        orderedFood: state.orderedFood.filter(
          (food) => food.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
