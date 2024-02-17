import { ACTION_SET_MEAL_LIST, ACTION_MEAL_REMOVE } from "../actions/meal";

export const DEFAULT_MEAL = {
  name: "",
  description: "",
  price: "",
};

const initialState = {
  list: [],
  mealEdit: DEFAULT_MEAL,
};

export default function mealReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_SET_MEAL_LIST:
      return {
        ...state,
        list: payload,
      };
    case ACTION_MEAL_REMOVE:
      const newList = state.list.filter((meal) => meal.id !== payload);
      return {
        ...state,
        list: newList,
      };
    default:
      return state;
  }
}
