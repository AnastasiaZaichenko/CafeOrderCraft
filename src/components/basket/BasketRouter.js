import { Routes, Route } from "react-router-dom";
import { Basket, BasketTotal } from "./";
import { NotFound } from "../ui";

const BasketRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Basket />} />
      <Route path="/bill" element={<BasketTotal />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default BasketRouter;
