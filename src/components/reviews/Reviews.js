import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ReviewsForm } from "./";
import { selectReviews } from "../../store/selectors/index";
import { fetchReviews } from "../../store/actions/review";
import style from "./Reviews.module.css";
const Reviews = () => {
  const list = useSelector(selectReviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const reviewList = list.map((review) => (
    <li key={review.id}>
      <div className={style.item_img_box}>
        <img className={style.item_img} src={review.avatar} alt={review.name} />
      </div>
      <div className={style.item_text_box}>
        <p className={style.item_text_name}>{review.name}</p>
        <p>{review.review}</p>
      </div>
    </li>
  ));

  return (
    <div className={style.reviews_box}>
      <p>
        {" "}
        Would be grateful for your thoughts on the app below. Thank you for your
        valuable opinions!
      </p>
      <ReviewsForm />
      <ul className={style.review_list_box}>{reviewList}</ul>
    </div>
  );
};
export default Reviews;
