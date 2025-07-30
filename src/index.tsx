import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // 없어도 무방

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);