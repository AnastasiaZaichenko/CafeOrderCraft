import style from "./ButtonItemAddToOrder.module.css";
const ButtonItemAddToOrder = () => {
  return (
    <div className={style.btn_addNewItem_box}>
      <button className={style.btn_addNewItem}>Add to your order</button>
    </div>
  );
};
export default ButtonItemAddToOrder;
