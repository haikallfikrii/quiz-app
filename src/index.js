import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Pastikan untuk mengimpor file Tailwind CSS yang sudah dikonfigurasi
import App from "./App";
// src/index.js atau src/App.js
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
