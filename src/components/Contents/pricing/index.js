import { Grid } from "@mui/material";
import Tier from "components/Tier";
import React from "react";

const Pricing = () => {
  return (
    <Grid
      id="pricing"
      container
      height="100vh"
      width="100vw"
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 6, sm: 6, md: 12 }}
      padding="0 5px"
      position="relative"
    >
      <Grid item width="100%">
        <Tier />
      </Grid>
    </Grid>
  );
};

export default Pricing;
