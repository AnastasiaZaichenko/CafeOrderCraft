// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeTable } from "../../store/actions/table";

const TableItemBtn = ({ table }) => {
  const dispatch = useDispatch();

  const deleteBtnTable = () => {
    dispatch(removeTable(table.id));
  };
  return (
    <div>
      {/* <button>
        <Link to="/order-craft/:id/edit"></Link>
      </button> */}
      <button onClick={deleteBtnTable}>Delete</button>
    </div>
  );
};

export default TableItemBtn;
