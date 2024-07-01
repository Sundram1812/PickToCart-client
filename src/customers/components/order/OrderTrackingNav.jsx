import * as React from "react";
import {useLocation} from 'react-router-dom'
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";


const steps = ["Placed", "Order confirmed", "Shipped", "Out For Delivery", "Delivered"];

export default function OrderTrackingNav({activeStep}) {
  const location=useLocation()
  const searchParam=new URLSearchParams(location.search);
  const stepNo=searchParam.getAll("steps");

  return(
    <div>
        <Stepper activeStep={activeStep}>
            {
                steps.map((step)=><Step>
                    <StepLabel>{step}</StepLabel>
                </Step>)
            }
        </Stepper>
    </div>
  )

//   return (
//     <div>
//       <Box sx={{ width: "100%" }}>
//         <Stepper activeStep={stepNo}>
//           {steps.map((label, index) => {
//             const stepProps = {};
//             const labelProps = {};
//             return (
//               <Step key={label} {...stepProps}>
//                 <StepLabel {...labelProps}>{label}</StepLabel>
//               </Step>
//             );
//           })}
//         </Stepper>

//         {stepNo === steps.length ? (
//           <React.Fragment>
//             <Typography sx={{ mt: 2, mb: 1 }}>
//               All steps completed - you&apos;re finished
//             </Typography>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 sx={{ mr: 1 }}
//               >
//                 Back
//               </Button>
//               <Box sx={{ flex: "1 1 auto" }} />
//               {isStepOptional(activeStep) && (
//                 <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
//                   Skip
//                 </Button>
//               )}

//               <Button onClick={handleNext}>
//                 {activeStep === steps.length - 1 ? "Finish" : "Next"}
//               </Button>
//             </Box> */}
//           </React.Fragment>
//         )}
//       </Box>
//     </div>
//   );
}
