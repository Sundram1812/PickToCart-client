import { Alert, AlertTitle } from "@mui/material";
import React from "react";

function PaymentSuccessAlert() {
  return (
    <Alert variant="filled" severity="success" sx={{ width: "contained" }}>
      <AlertTitle>Payment Done successfully !</AlertTitle>
      Congratulation Your order get placed
    </Alert>
  );
}

export default PaymentSuccessAlert;
