import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaForValidationReview } from "../ui/ValidationSchemes";
import { save } from "../../store/actions/review";
import warning from "./images/warning.png";
import style from "./ReviewsForm.module.css";
const ReviewsForm = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [review, setReview] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schemaForValidationReview),
  });

  const btnReviewSave = (data) => {
    setIsModalOpen(true);
    setReview({
      name: "Anonymous",
      review: data.review,
    });
  };

  const btn_confirm = () => {
    dispatch(save(review));
    setIsModalOpen(false);
    reset();
  };

  const btnCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={style.reiewForm_box}>
        <form onBlur={handleSubmit(btnReviewSave)}>
          <textarea
            {...register("review")}
            placeholder="Your feedback is important..."
          />
          <p> {errors.review?.message}</p>
        </form>
      </div>
      {isModalOpen && (
        <div className={style.modalWindowConfirm_box}>
          <div>
            <img src={warning} alt="Warning" />
          </div>
          <div className={style.modalWindowConfirm_text}>
            <p>Your review is ready to be submitted!</p>
            <p>Once submitted, your review will be sent to the server.</p>
            <p>
              You won't be able to make additional changes after submission.
            </p>
            <p>Are you sure you want to proceed?</p>
          </div>
          <div className={style.modalWindowConfirm_btn_box}>
            <button
              className={style.modalWindowConfirm_btn}
              onClick={btn_confirm}
            >
              OK
            </button>
            <button
              className={style.modalWindowConfirm_btn}
              onClick={btnCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default ReviewsForm;
