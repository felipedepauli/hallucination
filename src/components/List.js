import React from "react";
import { Box } from "@mui/material";

const NestedList = ({ items, level = 0 }) => {
  const listStyles = ["disc", "circle", "square"];

  return (
    <Box
      component="ul"
      sx={{
        pl: level === 0 ? 6 : 4,
        mb: 2,
        listStyleType: listStyles[level] || "square",
        listStylePosition: "outside",
      }}
    >
      {items.map((item, index) =>
        Array.isArray(item) ? (
          <NestedList key={index} items={item} level={level + 1} />
        ) : (
          <Box
            component="li"
            key={index}
            sx={{
              typography: "body1",
              textAlign: "justify",
              mb: 1,
            }}
          >
            {item}
          </Box>
        )
      )}
    </Box>
  );
};

export default NestedList;
