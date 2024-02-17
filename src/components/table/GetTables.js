import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTables } from "../../store/selectors/index";
import { fetchTables } from "../../store/actions/table";
import { TableItem } from "./";

const GetTables = () => {
  const list = useSelector(selectTables);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);

  const tableList = list.map((table) => (
    <TableItem key={table.id} table={table} />
  ));

  return <ul>{tableList}</ul>;
};

export default GetTables;
