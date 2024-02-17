import { useDispatch } from "react-redux";
import { removeWaiter } from "../../store/actions/waiter";

const WaiterItemBtn = ({ waiter }) => {
  const dispatch = useDispatch();
  const deleteBtnWaiter = () => {
    dispatch(removeWaiter(waiter.id));
  };
  return (
    <div>
      {/* <button>
        <Link to="/order-craft/:id/edit"></Link>
      </button> */}
      <button onClick={deleteBtnWaiter}>Delete</button>
    </div>
  );
};
export default WaiterItemBtn;
