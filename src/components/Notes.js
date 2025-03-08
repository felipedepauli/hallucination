import React from "react";
import { Alert } from "@mui/material";

const Notes = ({ type = "tip", children }) => {
  let severity;

  switch (type) {
    case "warning":
      severity = "error";
      break;
    case "important":
      severity = "success";
      break;
    case "tip":
    default:
      severity = "info";
      break;
  }

  return <Alert severity={severity}>{children}</Alert>;
};

export default Notes;
