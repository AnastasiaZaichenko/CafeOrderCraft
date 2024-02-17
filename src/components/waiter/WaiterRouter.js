import { Route, Routes } from "react-router-dom";
import { GetWaiters } from "./";

const WaiterRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<GetWaiters />} />
    </Routes>
  );
};

export default WaiterRouter;
