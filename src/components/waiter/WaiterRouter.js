import { Route, Routes } from "react-router-dom";
import { GetWaiters, CreateWaiter } from "./";
import { NotFound } from "../ui";

const WaiterRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<GetWaiters />} />
      <Route path="/create" element={<CreateWaiter />} />
      <Route path="/:id/edit" element={<CreateWaiter />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default WaiterRouter;
