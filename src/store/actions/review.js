import { ReviewApi } from "../../api/ReviewApi";
export const ACTION_SET_REVIEW_LIST = "ACTION_SET_REVIEW_LIST";
export const ACTION_REVIEW_CREATE = "ACTION_REVIEW_CREATE";

export const fetchReviews = () => {
  return (dispatch) => {
    ReviewApi.getList().then((newList) => {
      dispatch(setReviewList(newList));
    });
  };
};

export const setReviewList = (list) => {
  return { type: ACTION_SET_REVIEW_LIST, payload: list };
};

export const save = (review) => {
  return (dispatch) => {
    ReviewApi.create(review).then((reviewWithId) => {
      dispatch(createUi(reviewWithId));
    });
  };
};

export const createUi = (review) => {
  return { type: ACTION_REVIEW_CREATE, payload: review };
};
