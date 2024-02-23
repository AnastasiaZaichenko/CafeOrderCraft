import { Routes, Route } from "react-router-dom";
import { GetMeals, CreateMeal } from "./";
import { NotFound } from "../ui";

const MealRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<GetMeals />} />
      <Route path="/create" element={<CreateMeal />} />
      <Route path="/:id/edit" element={<CreateMeal />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default MealRouter;
