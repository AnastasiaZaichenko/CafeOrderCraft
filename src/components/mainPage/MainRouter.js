import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { MealRouter } from "../meal";
import { TableRouter } from "../table";
import { WaiterRouter } from "../waiter";
import style from "./MainRouter.module.css";

const MainRouter = () => {
  return (
    <>
      <nav className={style.nav_box}>
        <ul className={style.nav_list}>
          <li className={style.nav_item}>
            <Link to="/order-craft/meal">Choose meals</Link>
          </li>
          <li className={style.nav_item}>
            <Link to="/order-craft/table">Reserve a Table</Link>
          </li>
          <li className={style.nav_item}>
            <Link to="/order-craft/waiter">Service Assistance</Link>
          </li>
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
