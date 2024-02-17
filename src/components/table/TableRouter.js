import { Route, Routes } from "react-router-dom";
import { GetTables } from "./";

const TableRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<GetTables />} />
    </Routes>
  );
};

export default TableRouter;
