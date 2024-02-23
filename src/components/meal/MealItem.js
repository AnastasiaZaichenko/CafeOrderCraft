import { MealItemBtn } from "./";
import style from "./MealItem.module.css";
const MealItem = ({ meal, isEmployee, isGuest }) => {
  return (
    <li key={meal.id} className={style.meal_item}>
      <div className={style.meal_img_box}>
        <img className={style.meal_img} src={meal.image} alt={meal.name} />
      </div>
      <div className={style.meal_box}>
        <h3 className={style.meal_item}>{meal.name}</h3>
        <p>{meal.description}</p>
        <p>{meal.price}</p>
      </div>
      <MealItemBtn meal={meal} isEmployee={isEmployee} isGuest={isGuest} />
    </li>
  );
};

export default MealItem;
