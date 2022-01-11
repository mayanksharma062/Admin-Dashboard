import React from "react";
import { Toolbar } from "@mui/material";
import DataGridMaterialUI from "../components/DataGridMaterialUI";
import Home from "../components/Home";
import Profile from "../components/Profile";
import Form from "../pages/Form/Form";
import { Routes, Route } from "react-router-dom";
import SecondStep from "../pages/Form/SecondStep";
import ThirdStep from "../pages/Form/ThirdStep";
import FirstStep from "../pages/Form/FirstStep";

function SaareRoutes() {
  return (
    <div
      style={{
        width: "calc(100vw - 260px)",
        height: "100vh",
      }}
    >
      <Toolbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataGrid" element={<DataGridMaterialUI />} />
        <Route path="pages/profile" element={<Profile />} />
        <Route path="/forms/form" element={<Form />} />
        {/* <Route path="/loda" element={<Form />} /> */}
        <Route path="/form/firstStep" element={<FirstStep />} />
        <Route path="/form/secondStep" element={<SecondStep />} />
        <Route path="/form/thirdStep" element={<ThirdStep />} />
        {/* <Route path="/form/firstStep" element={<FirstStep />} />
        <Route path="/form/secondStep" element={<thirdStep />} />
        <Route path="/form/thirdStep" element={<thirdStep />} /> */}
      </Routes>
      <Toolbar />
    </div>
  );
}

export default SaareRoutes;

{
  /* {console.log(item.name.car)} */
}
{
  /* <FormControlLabel
                        key={item.id}
                        label={item.name}
                        refs={props.register}
                        control={
                          <Checkbox
                            {...field}
                            checked={field.value}
                            onChange={(event, item) => {
                              field.onChange(item);
                              // console.log(event);
                            }}
                            name={item.name}
                          />
                        }
                      ></FormControlLabel> */
}