import React from "react";
import { Box, Typography } from "@mui/material";

const Figure = ({ src, alt, caption }) => (
  <Box textAlign="center" my={2}>
    <img src={src} alt={alt} style={{ maxWidth: "100%", borderRadius: "8px" }} />
    <Typography variant="caption" display="block" color="textSecondary">{caption}</Typography>
  </Box>
);

export default Figure;
