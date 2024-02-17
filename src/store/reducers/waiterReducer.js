import {
  ACTION_SET_WAITER_LIST,
  ACTION_WAITER_REMOVE,
} from "../actions/waiter";

export const DEFAULT_WAITER = {
  firstName: "",
  phone: "",
};

const initialState = {
  list: [],
  waiterEdit: DEFAULT_WAITER,
};

export default function waiterReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_SET_WAITER_LIST:
      return { ...state, list: payload };
    case ACTION_WAITER_REMOVE:
      const newList = state.list.filter((waiter) => waiter.id !== payload);
      return { ...state, list: newList };
    default:
      return state;
  }
}
