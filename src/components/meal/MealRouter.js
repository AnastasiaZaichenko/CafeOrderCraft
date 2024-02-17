import { Routes, Route } from "react-router-dom";
import { GetMeals, ChooseMeal } from "./";
const MealRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<GetMeals />} />
      <Route path="/create" element={<ChooseMeal />} />
      <Route path="/:id/edit" element={<ChooseMeal />} />
      {/* <Route path="/*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default MealRouter;
