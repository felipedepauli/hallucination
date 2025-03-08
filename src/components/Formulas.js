import React from "react";
import { Box } from "@mui/material";
import katex from "katex";
import "katex/dist/katex.min.css"; // Importa os estilos do KaTeX

const Formulas = ({ formula }) => {
  const html = katex.renderToString(formula, { throwOnError: false });

  return (
    <Box bgcolor="grey.200" p={2} borderRadius={2} my={2} textAlign="center">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
  );
};

export default Formulas;
