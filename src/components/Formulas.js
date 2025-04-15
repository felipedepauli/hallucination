import React from "react";
import { Box, Typography } from "@mui/material";
import katex from "katex";
import "katex/dist/katex.min.css"; // Importa os estilos do KaTeX

const Formulas = ({ formula, subtitle }) => {
  // Se formula for undefined ou null, define como string vazia
  const safeFormula = typeof formula === "string" ? formula.trim() : "";

  // Se não houver fórmula válida, mostra um aviso no console
  if (!safeFormula) {
    console.warn("⚠️ KaTeX recebeu uma fórmula vazia ou inválida!");
    return null; // Não renderiza nada
  }

  const html = katex.renderToString(safeFormula, { throwOnError: false });

  return (
    <Box bgcolor="grey.200" p={2} borderRadius={2} my={2} textAlign="center">
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {subtitle && (
        <Typography variant="subtitle2" color="textSecondary" mt={1}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default Formulas;
