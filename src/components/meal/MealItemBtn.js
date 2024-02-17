import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeMeal } from "../../store/actions/meal";

const MealItemBtn = ({ meal }) => {
  const dispatch = useDispatch();

  const deleteBtnMeal = () => {
    dispatch(removeMeal(meal.id));
  };

  return (
    <div>
      <button>
        <Link to="/order-craft/:id/edit"></Link>
      </button>
      <button onClick={deleteBtnMeal}>delete</button>
    </div>
  );
};

export default MealItemBtn;
