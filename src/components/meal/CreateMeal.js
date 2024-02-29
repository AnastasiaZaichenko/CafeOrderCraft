import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { save, fetchOneMeal } from "../../store/actions/meal";
import { selectEditMeal } from "../../store/selectors/index";
import { Loading, ModalSaccecfullyCompleted, ButtonOnSubmit } from "../ui";
import { schemaForValidationMeal } from "../ui/ValidationSchemes";

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

  console.log(mealEdit);
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
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="mealName">Meal</label>
            <input type="text" id="mealName" {...register("name")} />
            <p> {errors.name?.message}</p>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" {...register("description")} />
            <p> {errors.description?.message}</p>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input type="text" id="price" {...register("price")} />
            <p> {errors.price?.message}</p>
          </div>
          <div>
            <label htmlFor="image">Add a photo:</label>
            <input type="file" id="image" onChange={onFileChange} />
          </div>
        </form>
      </div>
      {mealEdit.image && (
        <div>
          <img src={mealEdit.image} alt="Meal" />
        </div>
      )}
      <ButtonOnSubmit onSubmit={handleSubmit(onSubmit)} />

      {isModalOpen && <ModalSaccecfullyCompleted closeModal={closeModal} />}
      {!isModalOpen && (
        <div>
          <button onClick={closeModal}>Return</button>
        </div>
      )}
    </>
  );
};

export default CreateMeal;
