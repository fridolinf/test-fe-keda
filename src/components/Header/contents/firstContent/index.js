import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import useMediaQuerys from "hooks/useBreakpoints";
import { arrMenu } from "utils/menus";
import useLotties from "hooks/useLotties";
import erp from "assets/jpg/erp.jpg";
import Header from "components/Header";

const FirstContent = () => {
  const { breakWidth } = useMediaQuerys();

  const { DisplayLotties, setImageLoties } = useLotties();

  useEffect(() => {
    setImageLoties(
      "https://assets1.lottiefiles.com/packages/lf20_wsbol5ny.json"
    );
  }, []);

  return (
    <Grid container height="100vh">
      <Header />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 3, sm: 4, md: 12 }}
        height="100vh"
      >
        <Grid
          item
          xs={4}
          display={breakWidth !== 900 && "flex"}
          justifyContent={breakWidth !== 900 && "center"}
          alignItems={breakWidth !== 900 && "center"}
        >
          {breakWidth !== 900 &&
            arrMenu.map((data) => (
              <>
                <Grid key={data.id} item width="100%">
                  <Box
                    display="flex"
                    marginTop={3}
                    justifyContent="space-evenly"
                  >
                    <Typography
                      letterSpacing={3}
                      textTransform="uppercase"
                      fontWeight="bold"
                    >
                      {data.name}
                    </Typography>
                  </Box>
                </Grid>
              </>
            ))}
        </Grid>

        <Grid
          item
          textAlign="center"
          marginTop={`${breakWidth === 900 ? "12%" : "5%"}`}
          xs={4}
        >
          {breakWidth !== 900 && (
            <Grid container position="relative" width="95%" margin="0 auto">
              <img
                src={erp}
                alt="erpImage"
                style={{ width: "100%", maxHeight: "290px", borderRadius: 10 }}
              />
            </Grid>
          )}
          <Typography
            textAlign="center"
            fontSize="32px"
            margin={`${breakWidth === 900 ? "30px 0" : "10px 0"}`}
            fontWeight="bold"
          >
            Enterprise Resource Planning
          </Typography>
          <Typography textAlign="center" fontSize="20px">
            Make your company more than <br />
            <b>Efficient</b>, <b>Structured</b> and{" "}
            <b>Reduce your operational cost</b>
          </Typography>
        </Grid>
        {breakWidth === 900 && (
          <Grid item xs={4}>
            <Box marginTop={30} position="fixed" right={0}>
              <Grid item>
                <div>adsa</div>
                <div>adsa</div>
              </Grid>
            </Box>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default FirstContent;
