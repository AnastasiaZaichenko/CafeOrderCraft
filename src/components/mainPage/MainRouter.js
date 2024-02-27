import { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { MealRouter } from "../meal";
import { TableRouter } from "../table";
import { WaiterRouter } from "../waiter";
import style from "./MainRouter.module.css";

const MainRouter = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const menuItems = [
    { label: "Choose meals", path: "/order-craft/meal" },
    { label: "Reserve a Table", path: "/order-craft/table" },
    { label: "Service Assistance", path: "/order-craft/waiter" },
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

      <Routes>
        {/* <Route path="/" element={<MainRouter />} /> */}
        <Route path="/meal/*" element={<MealRouter />} />
        <Route path="/table/*" element={<TableRouter />} />
        <Route path="/waiter/*" element={<WaiterRouter />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
        {/* <Route path="/order/*" element={<OrderRouter />} /> */}
      </Routes>
    </>
  );
};

export default MainRouter;
