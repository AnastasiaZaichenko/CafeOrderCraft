import { Route, Routes } from "react-router-dom";
import { GetTables, CreateTable } from "./";
import { NotFound } from "../ui";

const TableRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<GetTables />} />
      <Route path="/create" element={<CreateTable />} />
      <Route path="/:id/edit" element={<CreateTable />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default TableRouter;
