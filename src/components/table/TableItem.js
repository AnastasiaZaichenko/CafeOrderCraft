import { TableItemBtn } from "./";
import style from "./TableItem.module.css";

const TableItem = ({ table, whoYouAre }) => {
  return (
    <li className={style.table_item}>
      <p> Table № {table.number}</p>
      <TableItemBtn table={table} whoYouAre={whoYouAre} />
    </li>
  );
};
export default TableItem;
