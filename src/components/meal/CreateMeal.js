import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { save, fetchOneMeal } from "../../store/actions/meal";
import { selectEditMeal } from "../../store/selectors/index";
import { Loading, ModalSaccecfullyCompleted, ButtonOnSubmit } from "../ui";

const CreateMeal = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mealEdit = useSelector(selectEditMeal);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setMealName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (id && !mealEdit?.id) {
      dispatch(fetchOneMeal(id));
    }
  }, [dispatch, id, mealEdit]);

  useEffect(() => {
    if (mealEdit.id && !name && !description && !price) {
      setMealName(mealEdit.name);
      setDescription(mealEdit.description);
      setPrice(mealEdit.price);
      setImage(mealEdit.image);
    }
  }, [
    mealEdit.id,
    description,
    name,
    price,
    mealEdit.description,
    mealEdit.price,
    mealEdit.name,
    mealEdit.image,
  ]);

  const onNameChange = (e) => {
    setMealName(e.target.value);
  };
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const onPriceChange = (e) => {
    setPrice(e.target.value);
  };
  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const meal = {
      ...mealEdit,
      name,
      description,
      price,
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
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="mealName">Meal</label>
            <input
              type="text"
              id="mealName"
              value={name}
              onChange={onNameChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              onChange={onDescriptionChange}
              value={description}
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              onChange={onPriceChange}
              value={price}
            />
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
      <ButtonOnSubmit onSubmit={onSubmit} />

      {isModalOpen && <ModalSaccecfullyCompleted closeModal={closeModal} />}
    </>
  );
};

export default CreateMeal;
