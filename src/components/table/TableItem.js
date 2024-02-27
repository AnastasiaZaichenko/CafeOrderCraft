import { TableItemBtn } from "./";
import style from "./TableItem.module.css";

const TableItem = ({ table, isEmployee, isGuest }) => {
  return (
    <li className={style.table_item}>
      <p> Table № {table.number}</p>
      <TableItemBtn table={table} isEmployee={isEmployee} isGuest={isGuest} />
    </li>
  );
};
export default TableItem;
