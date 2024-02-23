import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeMeal, clearTableEdit } from "../../store/actions/meal";
import { ButtonItemEditDel, ButtonItemAddToOrder } from "../ui";
const MealItemBtn = ({ meal, isEmployee, isGuest }) => {
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
      {isEmployee && (
        <ButtonItemEditDel deleteBtn={deleteBtnMeal} editBtn={editBtnMeal} />
      )}
      {isGuest && <ButtonItemAddToOrder />}
    </>
  );
};

export default MealItemBtn;
