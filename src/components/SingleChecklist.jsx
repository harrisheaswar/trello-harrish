import { Typography, Box } from "@mui/material";
import React from "react";

const SingleChecklist = ({ checklist }) => {
  return (
    <Box sx={{ width: "100%", height: "auto" }}>
      <Typography variant="h6">
        <i
          class="fas fa-check-square"
          style={{ color: "gray", marginRight: "1rem" }}
        ></i>
        {checklist.name}
      </Typography>
    </Box>
  );
};

export default SingleChecklist;
