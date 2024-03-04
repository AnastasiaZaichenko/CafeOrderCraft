import { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../../utils/BasketContextProvider.js";

const Basket = () => {
  const { basket } = useContext(BasketContext);
  console.log(basket);

  const items = basket
    .filter(
      (item) => item.hasOwnProperty("name") && item.hasOwnProperty("price")
    )
    .map((item, index) => (
      <div key={index}>
        <span> Name: {item.name}</span>
        <span> Price: {item.price}</span>
      </div>
    ));

  const tables = basket
    .filter((item) => item.hasOwnProperty("number"))
    .map((item, index) => (
      <div key={index}>
        <span> Table №{item.number}</span>
      </div>
    ));

  const waiters = basket
    .filter((item) => item.hasOwnProperty("firstName"))
    .map((item, index) => (
      <div key={index}>
        <span> Asisstance{item.firstName}</span>
      </div>
    ));
  return (
    <>
      <div>{items.length > 0 ? items : <p>No items in the basket</p>}</div>
      <div>{tables.length > 0 ? tables : <p>Choose a Table</p>}</div>
      <div>{tables.length > 0 ? waiters : <p>Choose an Asisstance</p>}</div>
      <div>
        <button>
          <Link to={"/order-craft/basket/bill"}>Bill </Link>
        </button>
      </div>
    </>
  );
};

export default Basket;
