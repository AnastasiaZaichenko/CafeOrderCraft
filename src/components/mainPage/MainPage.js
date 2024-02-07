import { Link } from "react-router-dom";
import style from "./MainPage.module.css";
import Arrow from "./Arrow";

const MainPage = () => {
  return (
    <div className={style.main_box}>
      <h1 className={style.title}>Order Craft</h1>
      <nav className={style.main_item}>
        <ul>
          <li>
            <Link to="/menu">Let's create your order</Link>
          </li>
        </ul>
        <Arrow />
      </nav>
    </div>
  );
};

export default MainPage;

// {/* <li>
//   <Link to="/review">Коментарии</Link>
// </li>
// <li>
//   <Link to="/about">Про компанию</Link>
// </li> */}
