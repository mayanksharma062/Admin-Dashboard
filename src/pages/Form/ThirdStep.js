import React from "react";
import {
  Box,
  // TextField,
  Typography,
  ThemeProvider,
  createTheme,
  //   InputLabel,
  //   Input,
  FormControl,
  // MenuItem,
  // Select,
  // InputLabel,
  // ListItemButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Controller } from "react-hook-form";

// import { Link } from "react-router-dom";
// import { blue } from "@mui/material/colors";

// function Lali() {
//   console.log("Arey Raja.............");
//   return <div>Lalu</div>;
// }
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const names = [
  "None",
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

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([
    "Mayank Sharma",
    "Vishal Jangid",
    "Yashi Jain",
  ]);

  const handleChange = (event) => {
    console.log();
    const {
      target: { value },
    } = event;
    // console.log(value);
    if (value.includes("None")) {
      setPersonName([]);
    } else {
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    }
  };

  return (
    <div>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        Third Step (Health and Fitness Regime)
      </Typography>
      <ThemeProvider theme={darkTheme}>
        <Box
          component="div"
          sx={{
            "& > :not(style)": { m: 1, width: "30ch" },
            color: "inherit",
            display: "flex",
            flexDirection: "column",
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
            {/* <Select
              {...props.register("chip", {
                required: "Kar Na Bhai",
              })}
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select> */}
            <Controller
              control={props.control}
              name="Chip"
              // defaultValue={props.chip.map((val) => (
              //   <Chip key={val} label={val} />
              // ))}
              render={({ field }) => (
                <Select
                  {...field}
                  {...props.register("chip", {
                    required: true,
                    validate: (value) => value.length >= 3,
                  })}
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={personName}
                  // displayEmpty={true}
                  // defaultValue={props.chip}
                  onChange={handleChange}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {/* {selected === [] ||
                      selected === null ||
                      selected === undefined ||
                      selected === ""
                        ? props.chip.map((value) => (
                            <Chip key={value} label={value} />
                          ))
                        : selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))} */}
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {names.map((name) =>
                    name === "None" ? (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ) : (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    )
                  )}
                </Select>
              )}
            />
          </FormControl>
          {props.errors.chip ? (
            <>
              <p>
                {props.errors.chip.type === "required"
                  ? "This is a Required Field"
                  : null}
              </p>
              <p>
                {props.errors.chip.type === "validate"
                  ? "Put Atleast Three Values"
                  : null}
              </p>
            </>
          ) : null}

          {/* <ListItemButton
            component={Link}
            to="/forms/secondStep"
            sx={{ fontSize: "13px", backgroundColor: blue[500] }}
            key="Next Step"
          >
            Next Step
          </ListItemButton> */}
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default ThirdStep;
