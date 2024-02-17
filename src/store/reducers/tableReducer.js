import { ACTION_SET_TABLE_LIST, ACTION_TABLE_REMOVE } from "../actions/table";

export const DEFAULT_TABLE = {
  number: "",
};
const initialState = {
  list: [],
  tableEdit: DEFAULT_TABLE,
};

export default function tableReducer(state = initialState, { type, payload }) {
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
    default:
      return state;
  }
}
