import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeWaiter, clearWaiterEdit } from "../../store/actions/waiter";
import { ButtonItemEditDel, ButtonItemAddToOrder } from "../ui";

const WaiterItemBtn = ({ waiter, isEmployee, isGuest }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteBtnWaiter = () => {
    dispatch(removeWaiter(waiter.id));
  };

  const editBtnWaiter = () => {
    navigate(`/order-craft/waiter/${waiter.id}/edit`);
    dispatch(clearWaiterEdit());
  };

  return (
    <>
      {isEmployee && (
        <ButtonItemEditDel
          deleteBtn={deleteBtnWaiter}
          editBtn={editBtnWaiter}
        />
      )}
      {isGuest && <ButtonItemAddToOrder />}
    </>
  );
};
export default WaiterItemBtn;
