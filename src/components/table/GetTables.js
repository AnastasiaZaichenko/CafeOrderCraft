import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTables } from "../../store/selectors/index";
import { fetchTables, clearTableEdit } from "../../store/actions/table";
import { ButtonsWhoYouAre, ButtonAddNewItem, ButtonTakeaway } from "../ui";
import { TableItem } from "./";
import style from "./GetTables.module.css";

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

  const path = "/order-craft/table/create";
  const word = "table";

  return (
    <>
      <div>
        <ButtonsWhoYouAre
          onEmployeeBtn={onEmployeeBtn}
          onGuestBtn={onGuestBtn}
          isEmployee={isEmployee}
          isGuest={isGuest}
        />
        {isGuest && <ButtonTakeaway />}

        {isEmployee && (
          <ButtonAddNewItem clear={clear} path={path} word={word} />
        )}
      </div>

      <ul className={style.table_list}>{tableList}</ul>
    </>
  );
};

export default GetTables;
