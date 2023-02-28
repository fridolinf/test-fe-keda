import { Avatar, Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import wave from "assets/svg/wave.svg";
import MovingText from "react-moving-text";

const Header = ({ setOpen, open }) => {
  return (
    <Grid id="header" container position="relative" zIndex={100000}>
      <Grid container position="absolute" top={0} zIndex="-1">
        <img
          style={{
            position: "relative",
            width: "100%",
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
          <Box>
            <Avatar
              sx={{
                fontSize: "10px",
                backgroundColor: "black",
                fontWeight: "bolder",
              }}
            >
              MYTH
            </Avatar>
          </Box>

          <Box fontSize="30px" fontWeight="bold">
            <MovingText
              type="typewriter"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="infinite"
              fillMode="none"
              dataText={["MYTH", "TECH", "PRESENT", "GG-ERP"]}
            ></MovingText>
          </Box>
          <Button
            onClick={() => setOpen(!open)}
            variant="contained"
            sx={{ backgroundColor: "#000" }}
          >
            LOGIN
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
