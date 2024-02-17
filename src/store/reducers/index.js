import { combineReducers } from "redux";
import mealReducer from "./mealReducer";
import tableReducer from "./tableReducer";
import waiterReducer from "./waiterReducer";

export const rootReducer = combineReducers({
  meal: mealReducer,
  table: tableReducer,
  waiter: waiterReducer,
});
