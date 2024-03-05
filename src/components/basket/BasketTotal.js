import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BasketContext } from "../../utils/BasketContextProvider.js";
import bill from "./images/bill.png";
import style from "./BasketTotal.module.css";

const BasketTotal = () => {
  const { basket, isTakeaway } = useContext(BasketContext);
  const navigate = useNavigate();

  const totalBill = basket
    .reduce((total, item) => {
      if (item.hasOwnProperty("price")) {
        return total + parseFloat(item.price);
      }
      return total;
    }, 0)
    .toFixed(1);

  const waiter = basket.map((item, index) => (
    <span key={index}>{item.firstName}</span>
  ));
  const table = basket.map((item, index) => (
    <span key={index}>{item.number}</span>
  ));

  const returnHome = () => {
    navigate("/");
  };

  return (
    <div className={style.pay_box}>
      <div>
        <img src={bill} alt="Bill" />
      </div>
      {!isTakeaway ? (
        <div className={style.pay_item}>
          <div>Table: {table}</div>
          <div>Asisstance: {waiter}</div>
        </div>
      ) : (
        <div>Takeaway</div>
      )}
      <p>{totalBill} $</p>{" "}
      <div className={style.btnPay_box}>
        <button className={style.btnPay} onClick={returnHome}>
          Click to pay
        </button>
      </div>
    </div>
  );
};

export default BasketTotal;
