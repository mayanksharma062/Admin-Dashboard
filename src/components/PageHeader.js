import React from "react";

import { Typography, Divider, Box } from "@mui/material";

function PageHeader(props) {
  // var Parameter = useParams();
  return (
    <>
      <Box sx={{ m: 3 }}>
        <Typography
          sx={{
            fontSize: "1.5rem",
          }}
        >
          <strong>{props.title}</strong> <br />
          {/* <p style={{ fontSize: "17px" }}>{props.Parameter}</p> */}
        </Typography>
        <Divider sx={{ backgroundColor: "white", mx: 7, my: 3 }} />
      </Box>
      {/* <Typography sx={{ p: 2 }}>
        {props.title} <br /> A fast and extendable data table and data grid for
        React, made by Material-UI. Official docs
      </Typography> */}
    </>
  );
}

export default PageHeader;
