/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
// import SecondStep from "../pages/SecondStep";
import { useFormContext, Controller } from "react-hook-form";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Stack from "@mui/material/Stack";
import TimePicker from "@mui/lab/TimePicker";
// import PropTypes from "prop-types";

import {
  // ListItemButton,
  Box,
  TextField,
  Typography,
  ThemeProvider,
  createTheme,
  //   InputLabel,
  //   Input,
  FormControl,
  FormControlLabel,
  Radio,
  FormLabel,
  RadioGroup,
  FormGroup,
  Checkbox,
  // Button,
} from "@mui/material";
// import { Link } from "react-router-dom";
import { teal } from "@mui/material/colors";

// function Lali() {
//   console.log("Arey Raja.............");
//   return <div>Lalu</div>;
// }

function FirstStep(props) {
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
  // const [secondStep, setSecondStep] = useState(false);
  // const { control } = useFormContext();
  // const [firstStep, setfirstStep] = useState(true);
  // console.log(props.errors);
  // const [state, setState] = React.useState({
  //   car: true,
  //   motorbike: false,
  //   bicycle: false,
  //   boat: false,
  // });

  // const handleChange = (event) => {
  //   props.setState({
  //     ...props.state,
  //     [event.target.name]: event.target.checked,
  //   });
  // };

  // const { car, motorbike, bicycle, boat } = props.state;

  // const [checkboxValues, setCheckboxValues] = React.useState([]);

  const checkBoxItems = [
    {
      id: 0,
      name: "car",
    },
    {
      id: 1,
      name: "motorbike",
    },
    {
      id: 2,
      name: "bicycle",
    },
    {
      id: 3,
      name: "boat",
    },
  ];

  const gender = ["Female", "Male", "Other"];

  const handleCheck = (checkedId) => {
    const { item_ids: ids } = props.getValues();
    const newIds = ids?.includes(checkedId)
      ? ids?.filter((id) => id !== checkedId)
      : [...(ids ?? []), checkedId];
    return newIds;
  };
  const newDate = new Date();
  const [value, setValue] = React.useState(new Date());
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate();
  const hour = newDate.getHours();
  const seconds = newDate.getSeconds();
  const minutes = newDate.getMinutes();

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  // Date Picker Add +- 1 year
  // Time +-1

  // const lala = props.getValues()
  return (
    <>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        First Step (Personal Details)
      </Typography>
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* {console.log(props.errors)} */}
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
            {/* <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
              // return <Link to="/forms/secondStep">SSSSSSSSSSSSS</Link>;
            })}
          > */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Date desktop"
                  inputFormat="MM/dd/yyyy"
                  value={value}
                  onChange={handleChange}
                  sx={{ m: 2 }}
                  renderInput={(params) => <TextField {...params} />}
                  maxDate={new Date(year + 1, month, day)}
                  minDate={new Date(year - 1, month, day)}
                  showTodayButton="true"
                />
                <TimePicker
                  label="Time"
                  value={value}
                  sx={{ m: 2 }}
                  onChange={handleChange}
                  openTo="hours"
                  views={["hours", "minutes", "seconds"]}
                  inputFormat="HH:mm:ss"
                  mask="__:__:__"
                  minTime={new Date(year, month, day, hour - 2)}
                  maxTime={new Date(year, month, day, hour + 2)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <TextField
              id="input-with-icon-textfield"
              {...props.register("firstName", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum Length is 4" },
                maxLength: { value: 20, message: "Minimum Length is 20" },
              })}
              // refs={props.register}
              label="First Name"
              name="firstName"
              variant="standard"
              onChange={(e) => {
                if (e.target.value.length < 4) {
                  props.setError("firstName", {
                    type: "validate",
                    message: "Enter More Than 4 Letters",
                  });
                } else {
                  props.clearErrors("firstName");
                }
              }}
              sx={{ m: 2 }}
              error={props.errors.firstName ? true : false}
              helperText={props.errors.firstName?.message}
            />
            {/* <p>{props.errors.firstName?.message}</p> */}
            <TextField
              id="input-with-icon-textfield"
              {...props.register("lastName", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum Length is 4" },
                maxLength: { value: 20, message: "Minimum Length is 20" },
              })}
              sx={{ m: 2 }}
              // refs={props.register}
              onChange={(e) => {
                if (e.target.value.length < 4) {
                  props.setError("lastName", {
                    type: "validate",
                    message: "Enter More Than 4 Letters",
                  });
                } else {
                  props.clearErrors("lastName");
                }
              }}
              label="Last Name"
              // sx={{ ml: 3 }}
              variant="standard"
              name="lastName"
              error={props.errors.lastName ? true : false}
              helperText={props.errors.lastName?.message}
            />
            {/* <p>{props.errors.lastName?.message}</p> */}
            <TextField
              {...props.register("email", {
                required: "This is required field.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              // sx={{ m: 2 }}
              // refs={props.register}
              id="input-with-icon-textfield"
              label="Email"
              name="email"
              variant="standard"
              sx={{ pb: 2, m: 2 }}
              error={props.errors.email ? true : false}
              helperText={props.errors.email?.message}
            />
            {/* <p>{props.errors.email?.message}</p> */}
            <Controller
              control={props.control}
              name="gender"
              rules={{ required: "This is required field" }}
              render={({ field }) => (
                <FormControl
                  sx={{ m: 2, mt: 0 }}
                  component="fieldset"
                  {...field}
                >
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    defaultValue="Male"
                    name="gender"
                    label="gender"
                  >
                    {gender.map((value) => (
                      <FormControlLabel
                        key={value}
                        value={value}
                        control={<Radio />}
                        label={value}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
            />
            <p style={{ color: "red", margin: 0, padding: 0 }}>
              {props.errors.gender?.message}
            </p>
            <TextField
              {...props.register("age")}
              id="input-with-icon-textfield"
              label="Age"
              variant="standard"
              name="age"
              // refs={props.register}
              sx={{ m: 2 }}
            />
            <p>{props.errors.age?.message}</p>
            
            <FormLabel sx={{ ml: 2 }} component="legend">
              Mode Of Transportation
            </FormLabel>
            {props.errors.item_ids ? (
              <>
                <p style={{ color: "red", margin: 0, padding: 0 }}>
                  {props.errors.item_ids.type === "required"
                    ? "This is a Required Field"
                    : null}
                  {props.errors.item_ids.type === "validate"
                    ? "Put More Than Two Values"
                    : null}
                </p>
              </>
            ) : null}
            <Controller
              name="item_ids"
              control={props.control}
              rules={{
                required: "Kam Se Kam Try Kar",
                validate: (value) => value.length >= 2,
              }}
              value={props.defaultNames ? props.defaultNames : ""}
              render={({ field }) =>
                checkBoxItems.map((item, index) => (
                  <FormControlLabel
                    sx={{ ml: 2 }}
                    control={
                      <Checkbox
                        onChange={() => {
                          // console.log(props.defaultNames);
                          console.log(item.name);
                          return field.onChange(handleCheck(item.name));
                        }}
                        defaultChecked={
                          props.defaultNames.includes(item.name) ? true : false
                        }
                      />
                    }
                    key={item.id}
                    label={item.name}
                  />
                ))
              }
            />
          </Box>
        </ThemeProvider>
      </div>
    </>
  );
}


export default FirstStep;
