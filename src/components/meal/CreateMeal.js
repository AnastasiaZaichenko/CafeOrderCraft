import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { save, fetchOneMeal } from "../../store/actions/meal";
import { selectEditMeal } from "../../store/selectors/index";
import {
  Loading,
  ModalSaccecfullyCompleted,
  ButtonOnSubmit,
  ButtonReturn,
} from "../ui";
import { schemaForValidationMeal } from "../ui/ValidationSchemes";
import style from "./CreateMeal.module.css";

const CreateMeal = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mealEdit = useSelector(selectEditMeal);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: mealEdit?.name,
      description: mealEdit?.description,
      price: mealEdit?.price,
    },
    resolver: yupResolver(schemaForValidationMeal),
  });

  useEffect(() => {
    if (id && !mealEdit?.id) {
      dispatch(fetchOneMeal(id));
    }
  }, [dispatch, id, mealEdit]);

  useEffect(() => {
    if (mealEdit?.name !== undefined) {
      setValue("name", mealEdit.name);
      setValue("description", mealEdit.description);
      setValue("price", mealEdit.price);
      setImage(mealEdit.image);
    }
  }, [mealEdit, setValue, mealEdit.image]);

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };
  const onSubmit = (data) => {
    const meal = {
      ...mealEdit,
      name: data.name,
      description: data.description,
      price: data.price,
      image,
    };
    dispatch(save(meal));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate(`/order-craft/meal`);
  };

  if (id && !mealEdit?.id) {
    return <Loading />;
  }

  return (
    <>
      <div
        className={`${style.form_meal_box} ${
          isModalOpen ? style.transparent : ""
        }`}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="mealName">Meal</label>
            <input type="text" id="mealName" {...register("name")} />
            <p> {errors.name?.message}</p>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              id="description"
              {...register("description")}
            />
            <p> {errors.description?.message}</p>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input id="price" {...register("price")} />
            <p> {errors.price?.message}</p>
          </div>
          <div>
            <label htmlFor="image">Add a photo:</label>
            <input type="file" id="image" onChange={onFileChange} />
          </div>
        </form>
        {mealEdit.image && (
          <div className={style.img_meal_box}>
            <img className={style.img_meal} src={mealEdit.image} alt="Meal" />
          </div>
        )}
        <div
          className={`${style.btn_create_return_meal_box} ${
            isModalOpen ? style.btn_hidden : ""
          }`}
        >
          <ButtonOnSubmit onSubmit={handleSubmit(onSubmit)} />
          {!isModalOpen && (
            <ButtonReturn closeModal={closeModal}>Return</ButtonReturn>
          )}
        </div>
      </div>
      {isModalOpen && <ModalSaccecfullyCompleted closeModal={closeModal} />}
    </>
  );
};

export default CreateMeal;
