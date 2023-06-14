import React from "react";

import { Paper, Button } from "@mui/material";
const OneSlider = (props) => {
  return (
    <Paper sx={{cursor:"grab"}}>
      <img src={props.item.img} alt={props.item.id} height={400} />
    </Paper>
  );
};

export default OneSlider;
