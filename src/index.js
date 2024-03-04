import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import "./index.css";
import { BasketContextProvider } from "./utils/BasketContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BasketContextProvider>
          <App />
        </BasketContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
