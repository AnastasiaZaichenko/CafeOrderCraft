import style from "./ButtonItemEditDel.module.css";
const ButtonItemEditDel = ({ editBtn, deleteBtn }) => {
  return (
    <div className={style.btn_ed_del_box}>
      <button className={style.btn_edit} onClick={editBtn}>
        Edit
      </button>
      <button className={style.btn_delete} onClick={deleteBtn}>
        Delete
      </button>
    </div>
  );
};

export default ButtonItemEditDel;
