import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeals } from "../../store/actions/meal";
import { selectMeals } from "../../store/selectors";
import { MealItem } from "./";
import style from "./GetMeals.module.css";

const GetMeals = () => {
  const list = useSelector(selectMeals);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  const mealList = list.map((meal) => <MealItem key={meal.id} meal={meal} />);

  return <ul className={style.meal_page}>{mealList}</ul>;
};

export default GetMeals;
