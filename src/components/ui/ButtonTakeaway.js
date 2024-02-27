import style from "./ButtonTakeaway.module.css";
const ButtonTakeaway = () => {
  return (
    <div className={style.btn_takeAway_box}>
      <button className={style.btn_takeAway}>Takeaway Order </button>
    </div>
  );
};

export default ButtonTakeaway;
