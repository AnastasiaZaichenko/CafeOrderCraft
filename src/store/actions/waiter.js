import { WaiterApi } from "../../api/WaiterApi";

export const ACTION_SET_WAITER_LIST = "ACTION_SET_WAITER_LIST";
export const ACTION_WAITER_REMOVE = "ACTION_WAITER_REMOVE";

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
