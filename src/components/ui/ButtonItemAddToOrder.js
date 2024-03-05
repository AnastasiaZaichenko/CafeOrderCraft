import style from "./ButtonItemAddToOrder.module.css";
import { useContext } from "react";
import { BasketContext } from "../../utils/BasketContextProvider";

const ButtonItemAddToOrder = ({ item, btnAddName }) => {
  const { addBasket } = useContext(BasketContext);

  return (
    <div className={style.btn_addNewItem_box}>
      <button className={style.btn_addNewItem} onClick={() => addBasket(item)}>
        {btnAddName}
      </button>
    </div>
  );
};
export default ButtonItemAddToOrder;
