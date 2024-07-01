import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import { blueGrey } from "@mui/material/colors";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  minWidth: 399,
  overflowY: 'scroll',
  transform: "translate(-50%, -50%)",
  bgcolor: "background.gray",
  outline: "none",
  filter: blueGrey,
  p: 4,
};

export default function AuthModal({children}) {
  const [open, setOpen] = React.useState(false);
  const location=useLocation();
  const navigate=useNavigate();


  function handleOpen() {
    setOpen(true);
    navigate("/login");
  };

  function handleClose(params) {
    setOpen(false)
    navigate("")
  } ;


  return (
    <div className="">
      <Button onClick={handleOpen}>{children}</Button>

      <Modal
        sx={{ backdropFilter: "blur(5px)"}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ my: 2 }}>
            {location.pathname==="/login" ? (
              <SigninForm  handleClose={handleClose}/>
            ) : (
              <SignupForm  handleClose={handleClose}/>
            )}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
