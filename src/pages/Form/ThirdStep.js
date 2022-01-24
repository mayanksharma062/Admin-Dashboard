import React from "react";
import {
  Box,
  TextField,
  Autocomplete,
  Typography,
  ThemeProvider,
  createTheme,
  FormControl,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import { Controller } from "react-hook-form";

const names = [
  "Mayank Sharma",
  "Vishal Jangid",
  "Yashi Jain",
  "Sudhanshu Taldar",
  "Aakash Joshi",
  "Arpita Bahedia",
  "Chetna Khatri",
  "Silvi",
  "Sandip Ghanadiya",
  "Aliraza",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
function ThirdStep(props) {
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
  const personName = ["Mayank Sharma"];

  return (
    <>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        Third Step (Health and Fitness Regime)
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
            <FormControl sx={{ m: 1, width: 300 }}>
              <Controller
                control={props.control}
                name="Chip"
                rules={{
                  required: "This is required",
                  validate: (value) =>
                    value.length >= 3 || "Put Atleast Three Values",
                }}
                label="Chip"
                render={({ field }) => (
                  <Autocomplete
                    multiple
                    id="tags-standard"
                    options={names}
                    onChange={(e, data) => field.onChange(data)}
                    getOptionLabel={(option) => option}
                    defaultValue={personName}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        label="Chip"
                        error={props.errors.Chip ? true : false}
                        helperText={props.errors.Chip?.message}
                      />
                    )}
                  />
                )}
              />
            </FormControl>
          </Box>
        </ThemeProvider>
      </div>
    </>
  );
}

export default ThirdStep;
