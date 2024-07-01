import * as React from "react";
import {useLocation} from 'react-router-dom'
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = ["Placed", "Order Confirmed", "Shipped", "Out For Delivery", "Delivered"];

export default function OrderStatusStepsNav() {
  const [activeStep, setActiveStep] = React.useState(1);
  const location=useLocation()
  const searchParam=new URLSearchParams(location.search);
  const stepNo=searchParam.getAll("steps");

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // const handleReset = () => {
  //   setActiveStep(1);
  // };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps} >
                <StepLabel {...labelProps} >{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </div>
  );
}
