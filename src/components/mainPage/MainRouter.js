import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import OrderRouter from "../order/OrderRouter";

const MenuRouter = () => {
  return (
    <>
      <li>
        <Link to="/menu/order">Добавить заказ</Link>
      </li>
      <li>
        <Link to="/menu/table">Добавить стол</Link>
      </li>
      <li>
        <Link to="/menu/waiter">Добавить abwf</Link>
      </li>

      <Routes>
        {/* <Route path="/" element={<Menu />} /> */}
        <Route path="/order/*" element={<OrderRouter />} />
      </Routes>
    </>
  );
};

export default MenuRouter;
