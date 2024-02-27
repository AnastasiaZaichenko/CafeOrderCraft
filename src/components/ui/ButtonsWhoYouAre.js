import style from "./ButtonsWhoYouAre.module.css";

const ButtonsWhoYouAre = ({
  onEmployeeBtn,
  onGuestBtn,
  isEmployee,
  isGuest,
}) => {
  return (
    <div className={style.btn_whoYouAre_box}>
      <button
        onClick={onEmployeeBtn}
        className={`${isEmployee ? style.isButtonActive : ""} ${
          style.btn_whoYouAre
        }`}
      >
        I am an employee
      </button>
      <button
        onClick={onGuestBtn}
        className={`${isGuest ? style.isButtonActive : ""} ${
          style.btn_whoYouAre
        }`}
      >
        I am a guest
      </button>
    </div>
  );
};

export default ButtonsWhoYouAre;
