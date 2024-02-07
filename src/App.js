import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainRouter, MainPage } from "./components/mainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/menu/*" element={<MainRouter />} />
      {/* <Route path="/review/*" element={< />} />
      <Route path="/about/*" element={< />} /> */}
    </Routes>
  );
}

export default App;
