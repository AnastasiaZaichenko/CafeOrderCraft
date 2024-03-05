import { useContext } from "react";
import { BasketContext } from "../../utils/BasketContextProvider.js";
import style from "./ButtonTakeaway.module.css";

const ButtonTakeaway = () => {
  const { setIsTakeaway } = useContext(BasketContext);

  const btnTakeaway = () => {
    setIsTakeaway(true);
  };
  return (
    <div className={style.btn_takeAway_box}>
      <button className={style.btn_takeAway} onClick={btnTakeaway}>
        Takeaway Order{" "}
      </button>
    </div>
  );
};

export default ButtonTakeaway;
