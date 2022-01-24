import React from "react";
import {
  Box,
  TextField,
  Typography,
  ThemeProvider,
  createTheme,
  //   InputLabel,
  //   Input,
  Autocomplete,
  // FormControl,
  // MenuItem,
  // Select,
  // InputLabel,
  // FormControlLabel,
  // ListItemButton,
} from "@mui/material";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { teal } from "@mui/material/colors";

// import { Link } from "react-router-dom";
// import { blue } from "@mui/material/colors";
// function Lali() {
//   console.log("Arey Raja.............");
//   return <div>Lalu</div>;
// }

function SecondStep(props) {
  const darkTheme = createTheme({
    palette: {
      //   primary: blue,
      mode: "dark",
    },
    components: {
      // Name of the component
      MuiTextField: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            // backgroundColor: grey[900],
            color: "inherit",
          },
        },
      },
    },
  });

  const countries = ["India", "USA", "UK"];
  const cities = ["Kota", "Jaipur", "Jodhpur"];
  const states = ["Rajasthan", "Ahmedabad", "Karnataka"];
  return (
    <>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        Second Step (Address)
      </Typography>
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ThemeProvider theme={darkTheme}>
          <Box
            component="div"
            sx={{
              "& > :not(style)": { m: 1, width: "80ch" },
              // justifyContent: "center",
              color: "inherit",
              display: "flex",
              flexDirection: "column",
              backgroundColor: teal[900],
              p: 3,
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="input-with-icon-textfield"
              label="Address Line 1"
              variant="standard"
              name="addressLine2"
              {...props.register("addressLine1")}
              // refs={props.registear}
            />
            <TextField
              id="input-with-icon-textfield"
              label="Address Line 2"
              {...props.register("addressLine2")}
              // refs={props.register}
              name="addressLine2"
              // sx={{ ml: 3 }}
              variant="standard"
            />

            <Controller
              label="countryName"
              name="countryName"
              control={props.control}
              rules={{
                required: "This is required",
                // validate: (value) => value !== null || "This Field is required",
              }}
              render={({ field }) => (
                <Autocomplete
                  id="country-select-demo"
                  sx={{ width: 300 }}
                  options={countries}
                  defaultValue={props.country}
                  // isOptionEqualToValue={true}
                  autoHighlight
                  onChange={(e, data) => field.onChange(data)}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choose a country"
                      inputProps={{
                        ...params.inputProps,
                      }}
                      error={props.errors.countryName ? true : false}
                      helperText={props.errors.countryName?.message}
                    />
                  )}
                />
              )}
            />
            {/* <p style={{ color: "red", margin: 0, padding: 0 }}>
              {props.errors.countryName?.message}
            </p> */}

            <Controller
              label="state"
              name="state"
              control={props.control}
              render={({ field }) => (
                <Autocomplete
                  id="country-select-demo"
                  sx={{ width: 300 }}
                  options={states}
                  autoHighlight
                  defaultValue={props.state}
                  // onChange={(e, data) => field.onChange(data)}
                  onChange={(e, data) => field.onChange(data)}
                  // value={state}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choose a State"
                      inputProps={{
                        ...params.inputProps,
                      }}
                      placeholder="States"
                    />
                  )}
                />
              )}
            />

            <Controller
              label="city"
              name="city"
              control={props.control}
              render={({ field }) => (
                <Autocomplete
                  id="country-select-demo"
                  sx={{ width: 300 }}
                  options={cities}
                  defaultValue={props.city}
                  autoHighlight
                  // onChange={(e, data) => field.onChange(data)}
                  onChange={(e, data) => field.onChange(data)}
                  // value={state}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choose a City"
                      inputProps={{
                        ...params.inputProps,
                      }}
                      placeholder="Cities"
                    />
                  )}
                />
              )}
            />
          </Box>
        </ThemeProvider>
      </div>
    </>
  );
}
SecondStep.propTypes = {
  register: PropTypes.object,
};

export default SecondStep;
