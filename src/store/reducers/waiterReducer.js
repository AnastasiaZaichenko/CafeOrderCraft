import {
  ACTION_SET_WAITER_LIST,
  ACTION_WAITER_REMOVE,
  ACTION_WAITER_CREATE,
  ACTION_WAITER_EDIT,
  ACTION_WAITER_CLEAR_EDIT,
  ACTION_WAITER_UPDATE_LIST,
} from "../actions/waiter";

export const DEFAULT_WAITER = {
  firstName: "",
  phone: "",
};

const initialState = {
  list: [],
  waiterEdit: DEFAULT_WAITER,
};

const waiterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_SET_WAITER_LIST:
      return { ...state, list: payload };
    case ACTION_WAITER_REMOVE:
      const newList = state.list.filter((waiter) => waiter.id !== payload);
      return { ...state, list: newList };
    case ACTION_WAITER_CREATE:
      return {
        ...state,
        list: [...state.list, { payload }],
      };
    case ACTION_WAITER_EDIT:
      return { ...state, waiterEdit: payload };
    case ACTION_WAITER_CLEAR_EDIT: {
      return { ...state, waiterEdit: DEFAULT_WAITER };
    }
    case ACTION_WAITER_UPDATE_LIST:
      const updateList = state.list.map((el) =>
        el.id === payload.id ? payload : el
      );
      return { ...state, list: updateList, waiterEdit: DEFAULT_WAITER };

    default:
      return state;
  }
};

export default waiterReducer;
