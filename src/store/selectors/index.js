// import { createSelector } from "reselect";

export const selectMeals = (state) => state.meal.list;
export const selectEditMeal = (state) => state.meal.mealEdit;

export const selectTables = (state) => state.table.list;
export const selectTableEdit = (state) => state.table.tableEdit;

export const selectWaiter = (state) => state.waiter.list;
export const selectWaiterEdit = (state) => state.waiter.waiterEdit;
