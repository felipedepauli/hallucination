import React from "react";
import { Typography } from "@mui/material";

const Text = ({ children }) => (
  <Typography variant="body1" paragraph align="justify">{children}</Typography>
);

export default Text;
