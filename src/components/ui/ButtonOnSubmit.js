import style from "./ButtonOnSubmit.module.css";

const ButtonOnSubmit = ({ onSubmit }) => {
  return (
    <div className={style.btn_create_box}>
      <button className={style.btn_create} onClick={onSubmit} type="button">
        {" "}
        Create{" "}
      </button>
    </div>
  );
};
export default ButtonOnSubmit;
