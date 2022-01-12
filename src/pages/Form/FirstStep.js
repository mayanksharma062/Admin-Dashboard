/* eslint-disable no-unused-vars */
import React from "react";
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
// import { blue } from "@mui/material/colors";

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
  const [value, setValue] = React.useState(new Date());
  const year = value.getFullYear();
  const month = value.getMonth();
  const day = value.getDate();

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  // Date Picker Add +- 1 year
  // Time +-1

  // const lala = props.getValues()
  return (
    <div style={{ margin: "10px" }}>
      {console.log(props.errors)}
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        First Step (Personal Details)
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
                renderInput={(params) => <TextField {...params} />}
                maxDate={new Date(year + 3, month, day)}
                minDate={new Date(year - 1, month, day)}
                showTodayButton="true"
              />
              <TimePicker
                label="Time"
                value={value}
                onChange={handleChange}
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
            })}
            // refs={props.register}
            id="input-with-icon-textfield"
            label="Email"
            name="email"
            // type="email"
            onChange={(e) => {
              if (
                e.target.value.includes(" ") ||
                e.target.value.includes("@") === false
              ) {
                props.setError("email", {
                  type: "validate",
                  message: "Please Enter A Valid Email",
                });
              } else {
                props.clearErrors("email");
              }
            }}
            variant="standard"
            sx={{ pb: 2 }}
            error={props.errors.email ? true : false}
            helperText={props.errors.email?.message}
          />
          {/* <p>{props.errors.email?.message}</p> */}
          <Controller
            control={props.control}
            name="gender"
            rules={{ required: "This is required field" }}
            render={({ field }) => (
              <FormControl component="fieldset" {...field}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  defaultValue="Male"
                  // {...props.register("gender", {
                  //   required: "This is required again",
                  // })}
                  // refs={props.register}
                  name="gender"
                  label="gender"

                  // sx={{
                  //   display: "flex",
                  //   flexDirection: "row",
                  //   width: "calc(100vw-240px)",
                  // }}
                >
                  {/* <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  /> */}
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
          />
          <p>{props.errors.age?.message}</p>

          {/* <FormControl
            component="fieldset"
            variant="standard"
            {...props.register("modeOfTransportation")}
          >
            <FormLabel component="legend">Mode Of Transportation</FormLabel>

            <FormGroup
              // {...props.register("modeOfTransportation", {
              //   required: "Kuch Daaal",
              //   min: { value: 2, message: "Arey Waah" },
              // })}
              refs={props.register}
              name="modeOfTransportation"
            >
              <FormControlLabel
                control={<Checkbox />}
                label="Car"
                name="car"
                {...props.register("car")}
              />

              <FormControlLabel
                control={<Checkbox />}
                label="Motorbike"
                name="Motorbike"
                {...props.register("motorbike")}
              />

              <FormControlLabel
                control={<Checkbox />}
                label="Bicycle"
                name="Bicycle"
                {...props.register("bicycle")}
              />

              <FormControlLabel
                control={<Checkbox />}
                {...props.register("boat")}
                label="Boat"
                name="Boat"
              />
            </FormGroup>
            <p>{props.errors.modeOfTransportation?.message}</p>
          </FormControl> */}
          {/* <FormControl component="fieldset" variant="standard">
            <Controller
              name="checkbox"
              control={props.control}
              rules={{ required: true }}
              render={({ field }) => <Checkbox {...field} />}
            />
          </FormControl> */}

          {/* <Controller
            control={props.control}
            name="transportation"
            // rules={{ required: "true" }}
            render={({ field }) => (
              // <div>wewewewe</div>
              <FormGroup
                // name="modeOfTransportation"
                {...field}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={car}
                      onChange={props.handleChange}
                      name="car"
                    />
                  }
                  label="Car"
                  // {...props.register("car")}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={motorbike}
                      onChange={props.handleChange}
                      name="motorbike"
                    />
                  }
                  label="Motorbike"

                  // {...props.register("motorbike")}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={bicycle}
                      onChange={props.handleChange}
                      name="bicycle"
                    />
                  }
                  label="Bicycle"

                  // {...props.register("bicycle")}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={boat}
                      onChange={props.handleChange}
                      name="boat"
                    />
                  }
                  // {...props.register("boat")}
                  label="Boat"
                />
              </FormGroup>
            )}
          /> */}

          {/* <FormControl
          // {...props.register("transport", { required: "this is required" })}
          >
          {checkBoxItems.map((item) => (
            <Controller
            control={props.control}
            name={item.name}
            key={item.id}
            // rules={{ required: "true" }}
            render={({ field: { onChange, value } }) => (
              <FormControlLabel
              control={
                <Checkbox
                checked={value}
                onChange={(event, item) => {
                  onChange(item);
                  // console.log(event);
                }}
                name={item.name}
                />
              }
              label={item.name}
              />
              )}
              />
              ))}
            </FormControl> */}

          <FormLabel component="legend">Mode Of Transportation</FormLabel>
          <Controller
            name="item_ids"
            control={props.control}
            rules={{
              required: "Kam Se Kam Try Kar",
              validate: (value) => value.length >= 2,
            }}
            render={({ field }) =>
              checkBoxItems.map((item, index) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked={
                        props.defaultNames.includes(item.name) ? true : false
                      }
                      onChange={() => {
                        console.log(props.defaultNames);
                        return field.onChange(handleCheck(item.name));
                      }}
                    />
                  }
                  key={item.id}
                  label={item.name}
                />
              ))
            }
            // label="car"
          />
          {/* <p>{props.errors.item_ids?.message}</p> */}
          {props.errors.item_ids ? (
            <>
              <p>
                {props.errors.item_ids.type === "required"
                  ? "This is a Required Field"
                  : null}
                {props.errors.item_ids.type === "validate"
                  ? "Put More Than Two Values"
                  : null}
              </p>
            </>
          ) : null}
        </Box>
      </ThemeProvider>
    </div>
  );
}

// FirstStep.propTypes = {
//   register: PropTypes.object,
//   errors: PropTypes.object,
// };

export default FirstStep;
