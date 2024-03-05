import style from "./ButtonReturn.module.css";

const ButtonReturn = ({ closeModal }) => {
  return (
    <div className={style.btn_return_box}>
      <button className={style.btn_return} onClick={closeModal}>
        Return
      </button>
    </div>
  );
};

export default ButtonReturn;
