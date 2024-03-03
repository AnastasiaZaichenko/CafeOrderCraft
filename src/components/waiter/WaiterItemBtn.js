import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeWaiter, clearWaiterEdit } from "../../store/actions/waiter";
import { ButtonItemEditDel, ButtonItemAddToOrder } from "../ui";

const WaiterItemBtn = ({ waiter, whoYouAre }) => {
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
      {whoYouAre === "employee" && (
        <ButtonItemEditDel
          deleteBtn={deleteBtnWaiter}
          editBtn={editBtnWaiter}
        />
      )}
      {whoYouAre === "guest" && <ButtonItemAddToOrder />}
    </>
  );
};
export default WaiterItemBtn;
