import { TableItemBtn } from "./";

const TableItem = ({ table }) => {
  return (
    <li>
      <p> {table.number}</p>
      <TableItemBtn table={table} />
    </li>
  );
};
export default TableItem;
