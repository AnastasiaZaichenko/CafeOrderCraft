import { WaiterApi } from "../../api/WaiterApi";

export const ACTION_SET_WAITER_LIST = "ACTION_SET_WAITER_LIST";
export const ACTION_WAITER_REMOVE = "ACTION_WAITER_REMOVE";
export const ACTION_WAITER_CREATE = "ACTION_WAITER_CREATE";
export const ACTION_WAITER_EDIT = "ACTION_WAITER_EDIT";
export const ACTION_WAITER_CLEAR_EDIT = "ACTION_WAITER_CLEAR_EDIT";
export const ACTION_WAITER_UPDATE_LIST = "ACTION_WAITER_UPDATE_LIST";

export const fetchWaiters = () => {
  return (dispatch) => {
    WaiterApi.getList().then((newList) => {
      dispatch(setWaiterList(newList));
    });
  };
};

export const setWaiterList = (list) => {
  return { type: ACTION_SET_WAITER_LIST, payload: list };
};

export const removeWaiter = (id) => {
  return (dispatch) => {
    WaiterApi.delete(id).then(() => {
      dispatch(remove(id));
    });
  };
};

export const remove = (id) => {
  return { type: ACTION_WAITER_REMOVE, payload: id };
};

export const save = (waiter) => {
  return (dispatch) => {
    if (waiter.id) {
      WaiterApi.update(waiter.id, waiter).then(() => {
        dispatch(updateList(waiter));
      });
    } else {
      WaiterApi.create(waiter).then((waiterWithId) => {
        dispatch(createUi(waiterWithId));
      });
    }
  };
};

export const updateList = (waiter) => {
  return { type: ACTION_WAITER_UPDATE_LIST, payload: waiter };
};

export const createUi = (waiter) => {
  return { type: ACTION_WAITER_CREATE, payload: waiter };
};

export const fetchOneWaiter = (id) => {
  return (dispatch) => {
    WaiterApi.getOneEl(id).then((waiter) => {
      dispatch(setWaiterEdit(waiter));
    });
  };
};

export const setWaiterEdit = (waiter) => {
  return { type: ACTION_WAITER_EDIT, payload: waiter };
};

export const clearWaiterEdit = () => {
  return { type: ACTION_WAITER_CLEAR_EDIT };
};
