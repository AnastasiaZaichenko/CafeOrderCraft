import { Routes, Route } from "react-router-dom";
import { Basket } from "./";
import { NotFound } from "../ui";

const BasketRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Basket />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default BasketRouter;
