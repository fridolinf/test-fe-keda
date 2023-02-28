import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import imgBenefit from "assets/jpg/benefit.jpg";
import useMediaQuerys from "hooks/useBreakpoints";
import { listBenefitsProduct } from "utils/contents/benefits";

const About = () => {
  const { breakWidth } = useMediaQuerys();

  return (
    <Grid
      id="about"
      container
      height="100%"
      width="100vw"
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 6, sm: 6, md: 12 }}
      padding="0 5px"
      position="relative"
    >
      <Grid item width="100%">
        <Typography textAlign="center" fontStyle="italic" fontSize="24px">
          About
        </Typography>

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
            <Grid key={val.id} id="benefit-products">
              <Typography fontWeight="bold">{val.title}</Typography>
              <ul>
                {val.text.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </Grid>
          ))}
        </Box>
      </Grid>
      <Grid item width="100%">
        <Box>
          <Typography
            textAlign="center"
            fontWeight="bolder"
            fontSize="30px"
            margin="1rem 0"
          >
            MYTH TECH
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
      {breakWidth !== 300 && (
        <Box
          position="absolute"
          zIndex={-1}
          right={0}
          top={breakWidth === 900 ? 50 : 200}
        >
          <img
            style={{
              opacity: 0.78,
              width: "100%",
              maxWidth: breakWidth === 900 ? "500px" : "200px",
            }}
            src={imgBenefit}
            alt="benefit"
          />
        </Box>
      )}
    </Grid>
  );
};

export default About;
