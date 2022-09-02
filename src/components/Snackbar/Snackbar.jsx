import React from "react";
import { Snackbar } from "@mui/material";
import {Alert} from "@mui/material";
import './Snackbar.css';


const CustomizedSnackbar = ({open, setOpen}) => {
  const handleClose = (event, reason) => {
    if(reason === "clickaway") return;

    setOpen(false);
  }

  return (
    <div className = "root">
        <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} serverity={"success"} elevation={6} variant="filled">
            Transaction Successfully Created
            </Alert>
        </Snackbar>
    </div>
  )
}

export default CustomizedSnackbar;

