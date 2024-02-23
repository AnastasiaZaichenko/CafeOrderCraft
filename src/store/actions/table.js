import { TableApi } from "../../api/TableApi";

export const ACTION_SET_TABLE_LIST = "ACTION_SET_TABLE_LIST";
export const ACTION_TABLE_REMOVE = "ACTION_TABLE_REMOVE";
export const ACTION_TABLE_CREATE = "ACTION_TABLE_CREATE";
export const ACTION_TABLE_EDIT = "ACTION_TABLE_EDIT";
export const ACTION_TABLE_EDIT_CLEAR = "ACTION_TABLE_EDIT_CLEAR";
export const ACTION_TABLE_UPDATE_LIST = "ACTION_TABLE_UPDATE_LIST";

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

export const save = (table) => {
  return (dispatch) => {
    if (table.id) {
      TableApi.update(table.id, table).then(() => {
        dispatch(updateList(table));
      });
    } else {
      TableApi.create(table).then((tableWithId) => {
        dispatch(createUi(tableWithId));
      });
    }
  };
};

export const createUi = (table) => {
  return { type: ACTION_TABLE_CREATE, payload: table };
};

export const updateList = (table) => {
  return { type: ACTION_TABLE_UPDATE_LIST, payload: table };
};

export const fetchOneTable = (id) => {
  return (dispatch) => {
    TableApi.getOneEl(id).then((table) => {
      dispatch(setTableEdit(table));
    });
  };
};

export const setTableEdit = (table) => {
  return { type: ACTION_TABLE_EDIT, payload: table };
};

export const clearTableEdit = () => {
  return { type: ACTION_TABLE_EDIT_CLEAR };
};
