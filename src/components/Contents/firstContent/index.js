import { Close } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import erp from "assets/jpg/erp.jpg";
import imgNewErp from "assets/jpg/newerp.jpg";
import CustomModal from "components/CustomModal";
import Header from "components/Header";
import useMediaQuerys from "hooks/useBreakpoints";
import { useState } from "react";
import { arrMenu } from "utils/menus";

const FirstContent = () => {
  const { breakWidth } = useMediaQuerys();
  const [open, setOpen] = useState(false);
  const navigateTo = (name) => {
    const section = document.querySelector(`#${name.toLocaleLowerCase()}`);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <CustomModal openModal={open} closeModal={setOpen}>
        <Box height={1} display="flex" justifyContent="flex-end" width="100%">
          <Close sx={{ cursor: "pointer" }} onClick={() => setOpen(!open)} />
        </Box>
        <Grid item>
          <Typography textAlign="center" fontSize="30px">
            LOGIN <b>GG-ERP</b>
          </Typography>
          <Typography textAlign="center">
            get the latest news about <b>GG-ERP</b> as well as interesting
            discount information
          </Typography>
        </Grid>
        <Grid item width="100%" display="flex" justifyContent="space-between">
          <TextField
            sx={{ width: "100%", maxWidth: "250px", margin: 1 }}
            required
            id="outlined-required"
            label="Email"
            placeholder="example@yourmail.com"
            type="email"
          />
          <TextField
            sx={{ width: "100%", maxWidth: "250px", margin: 1 }}
            required
            id="outlined-required"
            label="Password"
            placeholder="your password"
            type="password"
          />
        </Grid>
        <Grid item justifyContent="flex-end" display="flex" width="99%">
          <Button variant="contained">Submit</Button>
        </Grid>
      </CustomModal>
      <Grid container height="100%" id="home">
        <Header open={open} setOpen={setOpen} />
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
                <Grid
                  id="menu-navigation"
                  key={data.id}
                  item
                  width="100%"
                  zIndex={1}
                >
                  <Box
                    onClick={() => navigateTo(data.name)}
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
                  style={{
                    width: "100%",
                    maxHeight: "290px",
                    borderRadius: 10,
                  }}
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
            <Grid item xs={4} zIndex={10000}>
              <Box marginTop={30} position="fixed" right={0}>
                {arrMenu.map((val) => (
                  <Grid padding="10px 0" item key={val.id} id="menu-navigation">
                    <Box
                      onClick={() => navigateTo(val.name)}
                      bgcolor="#000"
                      color="#fff"
                      padding={1}
                      sx={{
                        cursor: "pointer",
                        borderTopLeftRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        "&:hover": {
                          background:
                            "linear-gradient(191deg, rgba(230,65,154,0.5131302521008403) 6%, rgba(93,93,185,0.7120098039215687) 28%, rgba(0,212,255,0.6223739495798319) 84%, rgba(230,65,154,0.5215336134453781) 94%)",
                          fontStyle: "italic",
                        },
                      }}
                    >
                      <Typography>{val.name}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Box>
            </Grid>
          )}

          {breakWidth !== 300 && breakWidth !== 600 && (
            <Box
              position="absolute"
              zIndex={-1}
              left={10}
              top={breakWidth === 900 ? 300 : 200}
            >
              <img
                style={{
                  borderRadius: 30,
                  opacity: 0.78,
                  width: "100%",
                  maxWidth: breakWidth === 900 ? "500px" : "200px",
                }}
                src={imgNewErp}
                alt="erpImage"
              />
            </Box>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default FirstContent;
