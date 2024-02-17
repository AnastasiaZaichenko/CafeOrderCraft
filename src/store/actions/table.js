import { TableApi } from "../../api/TableApi";

export const ACTION_SET_TABLE_LIST = "ACTION_SET_TABLE_LIST";
export const ACTION_TABLE_REMOVE = "ACTION_TABLE_REMOVE";

export const fetchTables = () => {
  return (dispatch) => {
    TableApi.getList().then((newList) => {
      dispatch(setTableList(newList));
    });
  };
};

export const setTableList = (list) => {
  return { type: ACTION_SET_TABLE_LIST, payload: list };
};

export const removeTable = (id) => {
  return (dispatch) => {
    TableApi.delete(id).then(() => {
      dispatch(remove(id));
    });
  };
};

export const remove = (id) => {
  return { type: ACTION_TABLE_REMOVE, payload: id };
};
