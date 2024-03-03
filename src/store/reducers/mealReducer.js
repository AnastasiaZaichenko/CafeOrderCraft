import {
  ACTION_SET_MEAL_LIST,
  ACTION_MEAL_REMOVE,
  ACTION_MEAL_CREATE,
  ACTION_MEAL_CLEAR_EDIT,
  ACTION_MEAL_EDIT,
  ACTION_MEAL_UPDATE_LIST,
} from "../actions/meal";

export const DEFAULT_MEAL = {
  name: "",
  description: "",
  price: "",
};

const initialState = {
  list: [],
  mealEdit: DEFAULT_MEAL,
};

const mealReducer = (state = initialState, { type, payload }) => {
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
    case ACTION_MEAL_CREATE:
      return { ...state, list: [...state.list, { payload }] };
    case ACTION_MEAL_CLEAR_EDIT:
      return { ...state, mealEdit: DEFAULT_MEAL };

    case ACTION_MEAL_EDIT:
      return { ...state, mealEdit: payload };
    case ACTION_MEAL_UPDATE_LIST:
      const updateList = state.list.map((el) =>
        el.id === payload.id ? payload : el
      );
      return { ...state, list: updateList, mealEdit: DEFAULT_MEAL };
    default:
      return state;
  }
};
export default mealReducer;
