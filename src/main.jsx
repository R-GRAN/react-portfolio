import React from "react";
import ReactDOM from "react-dom/client";
import Home from "@/pages/Home/index.jsx";
import "@/assets/styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
