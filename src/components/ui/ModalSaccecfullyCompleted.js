import style from "./ModalSaccecfullyCompleted.module.css";

const ModalSaccecfullyCompleted = ({ closeModal }) => {
  return (
    <div className={style.moduleWindow_box}>
      <div className={style.moduleWindow_btn_box}>
        Operation completed successfully!
      </div>
      <button className={style.moduleWindow_btn} onClick={closeModal}>
        Return to Previous Page
      </button>
    </div>
  );
};
export default ModalSaccecfullyCompleted;
