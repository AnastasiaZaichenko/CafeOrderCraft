import { TableItemBtn } from "./";

const TableItem = ({ table, isEmployee, isGuest }) => {
  return (
    <li>
      <p> {table.number}</p>
      <TableItemBtn table={table} isEmployee={isEmployee} isGuest={isGuest} />
    </li>
  );
};
export default TableItem;
