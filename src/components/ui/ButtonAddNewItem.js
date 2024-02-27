import style from "./ButtonAddNewItem.module.css";
import { Link } from "react-router-dom";

const ButtonAddNewItem = ({ clear, path, word }) => {
  return (
    <div className={style.btn_addNewItem_box}>
      <button onClick={clear} className={style.btn_addNewItem}>
        <Link to={path}>Add a new {word} </Link>
      </button>
    </div>
  );
};
export default ButtonAddNewItem;
