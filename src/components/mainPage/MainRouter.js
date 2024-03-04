import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { About } from "../about";
import { Reviews } from "../reviews";
import { MealRouter } from "../meal";
import { TableRouter } from "../table";
import { WaiterRouter } from "../waiter";
import { BasketRouter } from "../basket";
import { useContext } from "react";
import { BasketContext } from "../../utils/BasketContextProvider";
import style from "./MainRouter.module.css";

const MainRouter = () => {
  const [activeItem, setActiveItem] = useState(null);

  const basket = useContext(BasketContext);
  const counter = basket.mealCount;

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const menuItems = [
    { label: "Choose meals", path: "/order-craft/meal" },
    { label: "Reserve a Table", path: "/order-craft/table" },
    { label: "Service Assistance", path: "/order-craft/waiter" },
    { label: `Basket ${counter}`, path: "/order-craft/basket" },
  ];

  return (
    <>
      <nav className={style.nav_box}>
        <ul className={style.nav_list}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`${style.nav_item} ${
                activeItem === index ? style.active : ""
              }`}
            >
              <Link to={item.path} onClick={() => handleItemClick(index)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {activeItem === null ? (
        <div>
          {/* <div>
            <div>
              <div>Dish of the day</div>
            </div>
            <div>
              <button>Buy fast</button>
            </div>
          </div>
          <div>Еhe best waiter of the month</div> */}
          <div>
            <About />
          </div>
          <div>
            <Reviews />
          </div>
        </div>
      ) : (
        ""
      )}

      <Routes>
        {/* <Route path="/" element={<MainRouter />} /> */}
        <Route path="/meal/*" element={<MealRouter />} />
        <Route path="/table/*" element={<TableRouter />} />
        <Route path="/waiter/*" element={<WaiterRouter />} />
        <Route path="/basket/*" element={<BasketRouter />} />
        {/* <Route path="/mealOfTheDay/*" element={<WaiterRouter />} />
        <Route path="/waiterOfTheMonth/*" element={<WaiterRouter />} /> */}
        {/* <Route path="/about/*" element={<About />} /> */}
        {/* <Route path="/reviews/*" element={<WaiterRouter />} /> */}
        {/* <Route path="/*" element={<NotFound />} /> */}
        {/* <Route path="/order/*" element={<OrderRouter />} /> */}
      </Routes>
    </>
  );
};

export default MainRouter;
