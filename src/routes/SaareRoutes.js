import React from "react";
import DataGridMaterialUI from "../pages/DataGridMaterialUI";
import Home from "../components/Home";
import { Routes, Route } from "react-router-dom";

function SaareRoutes() {
  return (
    <div
      style={{
        width: "calc(100vw - 240px)",
        height: "100vh",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataGrid" element={<DataGridMaterialUI />} />
      </Routes>
    </div>
  );
}

export default SaareRoutes;
