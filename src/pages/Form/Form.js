import React from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import { Button, ListItemButton } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useForm, FormProvider } from "react-hook-form";
// import { teal } from "@mui/material/colors";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup
//   .object()
//   .shape({
//     firstName: yup
//       .string()
//       .required("First Name Daalo")
//       .min(4, "Atleast 4 Letters Required"),
//     lastName: yup
//       .string()
//       .required("Last Name Daalo")
//       .min(4, "Atleast 4 Letters Required"),
//     age: yup
//       .number()
//       .required("Please Enter Age Na")
//       .typeError("Number Daal Bhai"),
//     item_ids: yup
//       .array()
//       .min(2, "At Least 2")
//       .max(2, "At Max 2")
//       .required("Required Field"),
//   })
//   .required();

//   {
//     resolver: yupResolver(schema);
//   }

function Form() {
  // const [transportState, setTransportState] = React.useState({
  //   car: true,
  //   motorbike: false,
  //   bicycle: false,
  //   boat: false,
  // });

  // const handleChange = (event) => {
  //   setTransportState({
  //     ...transportState,
  //     [event.target.name]: event.target.checked,
  //   });
  // };
  const [defaultNames, setDefaultNames] = React.useState(["car", "bicycle"]);
  // const [chips, setChips] = React.useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setError,
    clearErrors,
    getValues,
  } = useForm({
    mode: "all",
    defaultValues: {
      firstName: "Maya",
      lastName: "Shar",
      // countryName: "India",
      gender: "Male",
      item_ids: defaultNames,
      email: "abc@gmail.com",
    },
  });

  const [next, setNext] = React.useState(0);
  const steps = [
    {
      step: 1,
      title: "Personal Details",
      content: (
        <FirstStep
          register={register}
          errors={errors}
          control={control}
          defaultNames={defaultNames}
          setError={setError}
          clearErrors={clearErrors}
          getValues={getValues}

          // handleChange={handleChange}
        />
      ),
    },
    {
      step: 2,
      title: "Address",
      content: (
        <SecondStep register={register} errors={errors} control={control} />
      ),
    },
    {
      step: 3,
      title: "Health And Fitness Regime",
      content: (
        <ThirdStep
          register={register}
          errors={errors}
          control={control}
          setError={setError}
          clearErrors={clearErrors}
          getValues={getValues}
        />
      ),
    },
  ];

  return (
    <div>
      <div key={steps[next].step}>
        <FormProvider>
          <form
            onSubmit={handleSubmit((data) => {
              // console.log(data.item_ids);
              setDefaultNames([]);
              data.item_ids?data.item_ids.map((val) =>
                {
                  // console.log(defaultNames);
                  return setDefaultNames((prev) => [...prev, val]);
                }
              ):null;
              // data.chip?.map((val) => setChips((prev) => [...prev, val]));
              if (next <= 1) {
                console.log(data);
                const nextStep = next + 1;
                setNext(nextStep);
              } else {
                console.log(data);
              }
            })}
          >
            {steps[next].content}
            {next === 0 ? null : (
              <ListItemButton
                component={Button}
                //   to="/forms/secondStep"
                sx={{
                  fontSize: "13px",
                  backgroundColor: blue[500],
                  ml: 1,
                  mb: 1,
                  display: "inline",
                  justifyContent: "center",
                  left: "310px",
                }}
                label="Next Step"
                onClick={() => setNext((prev) => prev - 1)}
              >
                Previous
              </ListItemButton>
            )}

            <ListItemButton
              component={Button}
              //   to="/forms/secondStep"
              sx={{
                fontSize: "13px",
                backgroundColor: blue[500],
                ml: 1,
                mb: 1,
                display: "inline",
                justifyContent: "center",
                left: "310px",
                // backgroundColor: teal[900],
              }}
              label="Next Step"
              type="submit"
            >
              {next <= 1 ? "Next Step" : "Finish"}
            </ListItemButton>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default Form;
