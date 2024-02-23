const ButtonItemEditDel = ({ editBtn, deleteBtn }) => {
  return (
    <div>
      <button onClick={editBtn}>Edit</button>
      <button onClick={deleteBtn}>Delete</button>
    </div>
  );
};

export default ButtonItemEditDel;
