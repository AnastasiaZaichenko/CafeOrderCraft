import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeTable, clearTableEdit } from "../../store/actions/table";
import { ButtonItemEditDel, ButtonItemAddToOrder } from "../ui";

const TableItemBtn = ({ table, isEmployee, isGuest }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteBtnTable = () => {
    dispatch(removeTable(table.id));
  };

  const editBtnTable = () => {
    navigate(`/order-craft/table/${table.id}/edit`);
    dispatch(clearTableEdit());
  };

  return (
    <>
      {isEmployee && (
        <ButtonItemEditDel deleteBtn={deleteBtnTable} editBtn={editBtnTable} />
      )}
      {isGuest && <ButtonItemAddToOrder />}
    </>
  );
};

export default TableItemBtn;
