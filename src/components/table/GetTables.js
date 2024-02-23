import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectTables } from "../../store/selectors/index";
import { fetchTables, clearTableEdit } from "../../store/actions/table";
import { ButtonsWhoYouAre } from "../ui";
import { TableItem } from "./";

const GetTables = () => {
  const list = useSelector(selectTables);
  const dispatch = useDispatch();

  const [isEmployee, setIsEmployee] = useState(false);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);

  const onEmployeeBtn = () => {
    setIsEmployee(true);
    setIsGuest(false);
  };
  const onGuestBtn = () => {
    setIsGuest(true);
    setIsEmployee(false);
  };

  const tableList = list.map((table) => (
    <TableItem
      key={table.id}
      table={table}
      isEmployee={isEmployee}
      isGuest={isGuest}
    />
  ));

  const clear = () => {
    dispatch(clearTableEdit());
  };

  return (
    <>
      <div>
        <ButtonsWhoYouAre
          onEmployeeBtn={onEmployeeBtn}
          onGuestBtn={onGuestBtn}
        />

        {isEmployee && (
          <button onClick={clear}>
            <Link to="/order-craft/table/create">Create </Link>
          </button>
        )}
      </div>

      <ul>{tableList}</ul>
    </>
  );
};

export default GetTables;
