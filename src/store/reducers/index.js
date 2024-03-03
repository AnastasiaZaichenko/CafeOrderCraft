import { combineReducers } from "redux";
import mealReducer from "./mealReducer";
import tableReducer from "./tableReducer";
import waiterReducer from "./waiterReducer";
import reviewReducer from "./reviewReducer";

export const rootReducer = combineReducers({
  meal: mealReducer,
  table: tableReducer,
  waiter: waiterReducer,
  review: reviewReducer,
});
