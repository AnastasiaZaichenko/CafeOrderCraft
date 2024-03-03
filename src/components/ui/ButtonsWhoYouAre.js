import style from "./ButtonsWhoYouAre.module.css";

const ButtonsWhoYouAre = ({ onEmployeeBtn, onGuestBtn, whoYouAre }) => {
  return (
    <div className={style.btn_whoYouAre_box}>
      <button
        onClick={onEmployeeBtn}
        className={`${whoYouAre === "employee" ? style.isButtonActive : ""} ${
          style.btn_whoYouAre
        }`}
      >
        I am an employee
      </button>
      <button
        onClick={onGuestBtn}
        className={`${whoYouAre === "guest" ? style.isButtonActive : ""} ${
          style.btn_whoYouAre
        }`}
      >
        I am a guest
      </button>
    </div>
  );
};

export default ButtonsWhoYouAre;
