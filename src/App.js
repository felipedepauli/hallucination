import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline, Box, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "./components/Sidebar";
import ArticlePage from "./pages/ArticlePage";

import "@fontsource/roboto-slab";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto Slab, serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Navigate to="/article/article-1" replace />} />
            <Route path="/article/:articleId" element={<ArticlePage />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
