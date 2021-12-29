import React from "react";
import { Typography, Divider } from "@mui/material";

function PageHeader(props) {
  return (
    <>
      <Typography
        sx={{
          fontSize: "1.5rem",
        }}
      >
        <strong>{props.title}</strong>
      </Typography>
      <Divider sx={{ backgroundColor: "white", mt: 3 }} />
      <Typography sx={{ p: 2 }}>
        {props.title} <br /> A fast and extendable data table and data grid for
        React, made by Material-UI. Official docs
      </Typography>
    </>
  );
}

export default PageHeader;
