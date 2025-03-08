import React from "react";
import { Typography } from "@mui/material";

const Title = ({ level, children }) => {
  const variant = level === 1 ? "h2" : level === 2 ? "h3" : level === 3 ? "h4" : "h5";

  return <Typography variant={variant} gutterBottom>{children}</Typography>;
};

export default Title;
