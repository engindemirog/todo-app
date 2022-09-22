import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureTodoStore } from "./store/storeConfigurations/configureTodoStore";
import { Provider } from "react-redux";

const todoStore = configureTodoStore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={todoStore}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
