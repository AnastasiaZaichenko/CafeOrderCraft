import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeals, clearTableEdit } from "../../store/actions/meal";
import { selectMeals } from "../../store/selectors";
import { ButtonsWhoYouAre, ButtonAddNewItem } from "../ui";
import { MealItem } from "./";
import style from "./GetMeals.module.css";

const GetMeals = () => {
  const list = useSelector(selectMeals);
  const dispatch = useDispatch();

  const [whoYouAre, setwhoYouAre] = useState("guest");

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  const clear = () => {
    dispatch(clearTableEdit());
  };

  const onEmployeeBtn = () => {
    setwhoYouAre("employee");
  };
  const onGuestBtn = () => {
    setwhoYouAre("guest");
  };

  const mealList = list.map((meal) => (
    <MealItem key={meal.id} meal={meal} whoYouAre={whoYouAre} />
  ));

  const path = "/order-craft/meal/create";
  const word = "meal";

  return (
    <>
      <ButtonsWhoYouAre
        onEmployeeBtn={onEmployeeBtn}
        onGuestBtn={onGuestBtn}
        whoYouAre={whoYouAre}
      />

      {whoYouAre === "employee" && (
        <ButtonAddNewItem clear={clear} path={path} word={word} />
      )}

      <ul className={style.meal_list}>{mealList}</ul>
    </>
  );
};

export default GetMeals;
