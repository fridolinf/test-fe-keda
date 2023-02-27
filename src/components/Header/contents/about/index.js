import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { listBenefitsProduct } from "utils/contents/benefits";

const About = () => {
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
        <Box>
          <Typography
            textAlign="center"
            fontWeight="bolder"
            fontSize="30px"
            margin="1rem 0"
          >
            Benefits using GG-ERP
          </Typography>
        </Box>
        <Box margin="0 auto" maxWidth="68vw">
          {listBenefitsProduct.map((val) => (
            <Grid key={val.id}>
              <Typography fontWeight="bold">{val.title}</Typography>
              <ul>
                {val.text.map((d) => (
                  <li>{d}</li>
                ))}
              </ul>
            </Grid>
          ))}
        </Box>
      </Grid>
      <Grid item width="100%">
        <Typography textAlign="center" fontStyle="italic" fontSize="24px">
          About us
        </Typography>
        <Box>
          <Typography
            textAlign="center"
            fontWeight="bolder"
            fontSize="30px"
            margin="1rem 0"
          >
            M-ERP
          </Typography>
        </Box>
        <Box margin="0 auto" maxWidth="68vw">
          <Typography textAlign="justify" padding="0 10px">
            We are a startup based in <b>Singapore</b>, engaged in ERP and also
            Artificial Intelligence. Started with <b>5</b> developers in 2018
            and now have <b>3000</b> employees spread across various countries,
            and we also handle large clients such as <b>Microsoft</b>,{" "}
            <b>Google</b>, <b>Instagram</b> and others.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
