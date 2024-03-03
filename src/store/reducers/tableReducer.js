import {
  ACTION_SET_TABLE_LIST,
  ACTION_TABLE_REMOVE,
  ACTION_TABLE_CREATE,
  ACTION_TABLE_EDIT,
  ACTION_TABLE_EDIT_CLEAR,
  ACTION_TABLE_UPDATE_LIST,
} from "../actions/table";

export const DEFAULT_TABLE = {
  number: "",
};
const initialState = {
  list: [],
  tableEdit: DEFAULT_TABLE,
};

const tableReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_SET_TABLE_LIST:
      return {
        ...state,
        list: payload,
      };
    case ACTION_TABLE_REMOVE:
      const newList = state.list.filter((table) => table.id !== payload);
      return {
        ...state,
        list: newList,
      };
    case ACTION_TABLE_CREATE:
      return {
        ...state,
        list: [...state.list, { ...payload }],
      };
    case ACTION_TABLE_EDIT:
      return {
        ...state,
        tableEdit: payload,
      };
    case ACTION_TABLE_EDIT_CLEAR:
      return { ...state, tableEdit: DEFAULT_TABLE };

    case ACTION_TABLE_UPDATE_LIST:
      const updateList = state.list.map((el) =>
        el.id === payload.id ? payload : el
      );
      return { ...state, list: updateList, tableEdit: DEFAULT_TABLE };

    default:
      return state;
  }
};

export default tableReducer;
