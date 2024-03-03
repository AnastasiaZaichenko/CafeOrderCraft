import { Link } from "react-router-dom";
import style from "./NotFound.module.css";

const NotFound = () => {
  <div className={style.notFound_box}>
    <div className={style.notFound_item}>
      <p>404</p>
      <p>Page Not Found</p>
    </div>
    <div className={style.notFound_btn_box}>
      <button className={style.notFound_btn}>
        <Link to="/"> Return to Home Page</Link>
      </button>
    </div>
  </div>;
};
export default NotFound;
