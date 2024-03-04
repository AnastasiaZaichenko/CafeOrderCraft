import { useContext } from "react";
import { BasketContext } from "../../utils/BasketContextProvider.js";
import bill from "./images/bill.png";
const BasketTotal = (name) => {
  const { basket } = useContext(BasketContext);
  const totalBill = basket
    .reduce((total, item) => {
      if (item.hasOwnProperty("price")) {
        return total + parseFloat(item.price);
      }
      return total;
    }, 0)
    .toFixed(1);

  const item = basket.map((item, index) => (
    <div key={index}>
      <span>{item.number}</span>
      <span>{item.firstName}</span>
    </div>
  ));
  return (
    <>
      <div>
        <img src={bill} alt="Bill" />
      </div>
      <div>{item}</div>
      <div>{totalBill}</div>
      <div>
        <button>Click to pay</button>
      </div>
    </>
  );
};

export default BasketTotal;
