import { MealApi } from "../../api/MealApi";

export const ACTION_SET_MEAL_LIST = "ACTION_SET_MEAL_LIST";
export const ACTION_MEAL_REMOVE = "ACTION_MEAL_REMOVE";
export const ACTION_MEAL_CREATE = "ACTION_MEAL_CREATE";
export const ACTION_MEAL_CLEAR_EDIT = "ACTION_MEAL_CLEAR_EDIT";
export const ACTION_MEAL_EDIT = "ACTION_MEAL_EDIT";
export const ACTION_MEAL_UPDATE_LIST = "ACTION_MEAL_UPDATE_LIST";

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

export const save = (meal) => {
  return (dispatch) => {
    if (meal.id) {
      MealApi.update(meal.id, meal).then(() => {
        dispatch(updateList(meal));
      });
    } else {
      MealApi.create(meal).then((mealWithId) => {
        dispatch(createUi(mealWithId));
      });
    }
  };
};

export const updateList = (meal) => {
  return { type: ACTION_MEAL_UPDATE_LIST, payload: meal };
};

export const createUi = (meal) => {
  return { type: ACTION_MEAL_CREATE, payload: meal };
};

export const fetchOneMeal = (id) => {
  return (dispatch) => {
    MealApi.getOneEl(id).then((meal) => {
      dispatch(setMealEdit(meal));
    });
  };
};

export const setMealEdit = (meal) => {
  return { type: ACTION_MEAL_EDIT, payload: meal };
};

export const clearTableEdit = () => {
  return { type: ACTION_MEAL_CLEAR_EDIT };
};
