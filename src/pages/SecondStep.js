import React from "react";
import {
  Box,
  TextField,
  Typography,
  ThemeProvider,
  createTheme,
  //   InputLabel,
  //   Input,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  // ListItemButton,
} from "@mui/material";
import PropTypes from "prop-types";

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

  const [city, setCity] = React.useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const [state, setState] = React.useState("");

  const handleStateChange = (event) => {
    console.log(event.target.value);
    setState(event.target.value);
  };
  const [country, setCountry] = React.useState("");

  const handleCountryChange = (event) => {
    console.log(event.target.value);
    setCountry(event.target.value);
  };
  // const [secondStep, setSecondStep] = useState(false);
  // const [firstStep, setfirstStep] = useState(true);
  return (
    <div>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        Second Step (Address)
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

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={country}
              label="Country"
              // refs={props.register}
              {...props.register("country")}
              onChange={handleCountryChange}
              name="country"
            >
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="USA">United States Of America</MenuItem>
              <MenuItem value="United Kingdom">United Kingdom</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state}
              label="State"
              {...props.register("state")}
              // refs={props.register}
              onChange={handleStateChange}
              name="state"
            >
              <MenuItem value="Rajasthan">Rajasthan</MenuItem>
              <MenuItem value="Gujarat">Gujarat</MenuItem>
              <MenuItem value="Maharashtra">Maharashtra</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={city}
              label="City"
              {...props.register("city")}
              // refs={props.register}
              onChange={handleCityChange}
              name="city"
            >
              <MenuItem value="Kota">Kota</MenuItem>
              <MenuItem value="Jaipur">Jaipur</MenuItem>
              <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
            </Select>
          </FormControl>
          {/* <ListItemButton
            component={Link}
            to="/forms/thirdStep"
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
SecondStep.propTypes = {
  register: PropTypes.object,
};

export default SecondStep;
