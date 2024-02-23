import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMeals, clearTableEdit } from "../../store/actions/meal";
import { selectMeals } from "../../store/selectors";
import { ButtonsWhoYouAre } from "../ui";
import { MealItem } from "./";
import style from "./GetMeals.module.css";

const GetMeals = () => {
  const list = useSelector(selectMeals);
  const dispatch = useDispatch();

  const [isEmployee, setIsEmployee] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  const clear = () => {
    dispatch(clearTableEdit());
  };

  const onEmployeeBtn = () => {
    setIsEmployee(true);
    setIsGuest(false);
  };
  const onGuestBtn = () => {
    setIsGuest(true);
    setIsEmployee(false);
  };

  const mealList = list.map((meal) => (
    <MealItem
      key={meal.id}
      meal={meal}
      isEmployee={isEmployee}
      isGuest={isGuest}
    />
  ));

  return (
    <>
      <ButtonsWhoYouAre onEmployeeBtn={onEmployeeBtn} onGuestBtn={onGuestBtn} />
      <div>
        {isEmployee && (
          <button onClick={clear}>
            <Link to="/order-craft/meal/create">Create</Link>
          </button>
        )}
      </div>
      <ul className={style.meal_page}>{mealList}</ul>
    </>
  );
};

export default GetMeals;
