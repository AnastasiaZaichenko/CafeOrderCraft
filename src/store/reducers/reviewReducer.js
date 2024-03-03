import {
  ACTION_SET_REVIEW_LIST,
  ACTION_REVIEW_CREATE,
} from "../actions/review";

export const DEFAULT_REVIEW = {
  name: "",
  review: "",
};

const initialState = {
  list: [],
  reviewEdit: DEFAULT_REVIEW,
};

const reviewReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_SET_REVIEW_LIST:
      return {
        ...state,
        list: payload,
      };
    case ACTION_REVIEW_CREATE:
      return {
        ...state,
        list: [...state.list, { ...payload }],
      };

    default:
      return state;
  }
};

export default reviewReducer;
