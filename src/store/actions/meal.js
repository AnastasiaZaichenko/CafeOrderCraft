import { MealApi } from "../../api/MealApi";

export const ACTION_SET_MEAL_LIST = "ACTION_SET_MEAL_LIST";
export const ACTION_MEAL_REMOVE = "ACTION_MEAL_REMOVE";

export const fetchMeals = () => {
  return (dispatch) => {
    MealApi.getList().then((newList) => {
      dispatch(setMealList(newList));
    });
  };
};

export const setMealList = (list) => {
  return { type: ACTION_SET_MEAL_LIST, payload: list };
};

export const removeMeal = (id) => {
  return (dispatch) => {
    MealApi.delete(id).then(() => {
      dispatch(remove(id));
    });
  };
};

export const remove = (id) => {
  return { type: ACTION_MEAL_REMOVE, payload: id };
};
