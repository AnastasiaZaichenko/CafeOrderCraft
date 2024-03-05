import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainRouter, MainPage } from "./components/mainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/order-craft/*" element={<MainRouter />} />
    </Routes>
  );
}

export default App;
