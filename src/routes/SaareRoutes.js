import React from "react";
import { Toolbar } from "@mui/material";
import DataGridMaterialUI from "../components/DataGridMaterialUI";
import Home from "../components/Home";
import Profile from "../components/Profile";
import { Routes, Route } from "react-router-dom";

function SaareRoutes() {
  return (
    <div
      style={{
        width: "calc(100vw - 240px)",
        height: "100vh",
      }}
    >
      <Toolbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataGrid" element={<DataGridMaterialUI />} />
        <Route path="pages/profile" element={<Profile />} />
      </Routes>
      <Toolbar />
    </div>
  );
}

export default SaareRoutes;
