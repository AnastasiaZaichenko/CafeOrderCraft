import style from "./Arrow.module.css";

const Arrow = () => {
  return (
    <div className={style.arrowAnim}>
      <div className={style.arrowSliding}>
        <div className={style.arrow}></div>
      </div>
      <div className={`${style.arrowSliding} ${style.delay1}`}>
        <div className={style.arrow}></div>
      </div>
      <div className={`${style.arrowSliding} ${style.delay2}`}>
        <div className={style.arrow}></div>
      </div>
      <div className={`${style.arrowSliding} ${style.delay3}`}>
        <div className={style.arrow}></div>
      </div>
    </div>
  );
};

export default Arrow;
