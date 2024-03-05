import style from "./ButtonItemAddToOrder.module.css";
import { useContext } from "react";
import { BasketContext } from "../../utils/BasketContextProvider";

const ButtonItemAddToOrder = ({ item }) => {
  const { addBasket } = useContext(BasketContext);

  return (
    <div className={style.btn_addNewItem_box}>
      <button className={style.btn_addNewItem} onClick={() => addBasket(item)}>
        Add to your order
      </button>
    </div>
  );
};
export default ButtonItemAddToOrder;
