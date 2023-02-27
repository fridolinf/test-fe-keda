import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import wave from "assets/svg/wave.svg";
import useMediaQuerys from "hooks/useBreakpoints";
import React from "react";

const Header = () => {
  const { breakWidth } = useMediaQuerys();

  return (
    <Grid container position="sticky">
      <Grid container position="absolute" top={0} zIndex="-1">
        <img
          style={{
            height: breakWidth !== 900 && 300,
            position: "relative",
          }}
          src={wave}
          alt="wave-component"
        />
      </Grid>
      <Grid zIndex={1} container position="relative" top={10}>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="space-between"
          margin="0 5px"
        >
          <Box>Logo</Box>
          <Button>LOGIN</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
