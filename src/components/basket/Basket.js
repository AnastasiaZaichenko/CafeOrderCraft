import { useContext, useState } from "react";
import { BasketContext } from "../../utils/BasketContextProvider.js";
import BasketTotal from "./BasketTotal.js";
import style from "./Basket.module.css";

const Basket = () => {
  const { basket, isTakeaway, removeFromBasket } = useContext(BasketContext);
  const [isModalBillOpen, setIsModalBillOpen] = useState(false);
  const totalBill = basket
    .reduce((total, item) => {
      if (item.hasOwnProperty("price")) {
        return total + parseFloat(item.price);
      }
      return total;
    }, 0)
    .toFixed(1);

  const deleteItem = (index) => {
    removeFromBasket(index);
  };

  const items = basket
    .filter(
      (item) => item.hasOwnProperty("name") && item.hasOwnProperty("price")
    )
    .map((item, index) => (
      <div key={index}>
        <button
          onClick={() => deleteItem(index)}
          className={style.basketMeal_btn_del}
        >
          Del
        </button>
        <span> {item.name}</span>
        <span> {item.price}</span>
      </div>
    ));

  const tables = basket
    .filter((item) => item.hasOwnProperty("number"))
    .map((item, index) => <p key={index}>Table: {item.number}</p>);

  const waiters = basket
    .filter((item) => item.hasOwnProperty("firstName"))
    .map((item, index) => <p key={index}>Asisstance: {item.firstName}</p>);

  const btnBillPayment = () => {
    setIsModalBillOpen(true);
  };
  return (
    <div className={style.basket_box}>
      <div className={style.basket_serve_box}>
        {!isTakeaway ? (
          <div className={style.basket_takeaway_box}>
            {tables.length > 0 ? tables : <p>Choose a Table</p>}
            {waiters.length > 0 ? waiters : <p>Choose an Asisstance</p>}
          </div>
        ) : (
          <div>Takeaway</div>
        )}
      </div>
      <div className={style.basket_total_box}>
        {items.length > 0 ? items : <p>No items in the basket</p>}
        <div className={style.basket_total}>Total {totalBill} $</div>
        <div className={style.basket_total_btn_box}>
          <button className={style.basket_total_btn} onClick={btnBillPayment}>
            Get your bill
          </button>
        </div>
        {isModalBillOpen ? <BasketTotal /> : ""}
      </div>
    </div>
  );
};

export default Basket;
