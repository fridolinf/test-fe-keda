import { Grid } from "@mui/material";
import React from "react";

const Pricing = () => {
  return (
    <Grid
      container
      height="100vh"
      width="100vw"
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 6, sm: 6, md: 12 }}
      padding="0 5px"
    >
      <Grid item width="100%">
        PRICING
      </Grid>
    </Grid>
  );
};

export default Pricing;
