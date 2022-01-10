import React from "react";
import FirstStep from "../pages/FirstStep";
import SecondStep from "../pages/SecondStep";
import ThirdStep from "../pages/ThirdStep";
import { Button, ListItemButton } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useForm, FormProvider } from "react-hook-form";
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
  const [defaultNames, setDefaultNames] = React.useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
  } = useForm({
    defaultValues: {
      item_ids: defaultNames,
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
          getValues={getValues}
          defaultNames={defaultNames}
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
        <ThirdStep register={register} errors={errors} control={control} />
      ),
    },
  ];

  return (
    <div>
      <div key={steps[next].step}>
        <FormProvider>
          <form
            onSubmit={handleSubmit((data) => {
              data.item_ids?.map((val) =>
                setDefaultNames((prev) => [...prev, val])
              );
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
                sx={{ fontSize: "13px", backgroundColor: blue[500], mb: 3 }}
                label="Next Step"
                onClick={() => setNext((prev) => prev - 1)}
              >
                Previous
              </ListItemButton>
            )}

            <ListItemButton
              component={Button}
              //   to="/forms/secondStep"
              sx={{ fontSize: "13px", backgroundColor: blue[500] }}
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
