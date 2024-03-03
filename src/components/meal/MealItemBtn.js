import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeMeal, clearTableEdit } from "../../store/actions/meal";
import { ButtonItemEditDel, ButtonItemAddToOrder } from "../ui";
const MealItemBtn = ({ meal, whoYouAre }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteBtnMeal = () => {
    dispatch(removeMeal(meal.id));
  };

  const editBtnMeal = () => {
    navigate(`/order-craft/meal/${meal.id}/edit`);
    dispatch(clearTableEdit());
  };
  return (
    <>
      {whoYouAre === "employee" && (
        <ButtonItemEditDel deleteBtn={deleteBtnMeal} editBtn={editBtnMeal} />
      )}
      {whoYouAre === "guest" && <ButtonItemAddToOrder />}
    </>
  );
};

export default MealItemBtn;
