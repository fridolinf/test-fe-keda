import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Contact = () => {
  return (
    <Grid
      id="contact"
      container
      height="100%"
      width="100%"
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 6, sm: 6, md: 12 }}
      padding={{ md: "0 30px" }}
      justifyContent="space-between"
      margin="10px 0"
    >
      <Box textAlign="center" margin="0 auto" width="100%">
        <Typography textAlign="center" fontStyle="italic" fontSize="24px">
          Contact
        </Typography>
        <Typography textAlign="center" fontSize="14px">
          Please be free to ask anything about <b>GG-ERP</b>
        </Typography>
      </Box>
      <Grid
        xs={6}
        item
        width="100%"
        height="100%"
        margin="30px 0"
        borderRadius={3}
        sx={{
          background:
            "linear-gradient(191deg, rgba(230,65,154,0.5131302521008403) 6%, rgba(93,93,185,0.7120098039215687) 28%, rgba(0,212,255,0.6223739495798319) 84%, rgba(230,65,154,0.5215336134453781) 94%)",
        }}
      >
        <Typography textAlign="center" fontWeight="bold" fontSize="20px">
          Contact our team
        </Typography>
        <Grid
          item
          width="100%"
          display="flex"
          justifyContent="space-between"
          margin="12px 0"
          paddingRight={{ xs: "30px" }}
          paddingLeft={{ xs: "30px", sm: "30px", lg: "0" }}
        >
          <TextField
            sx={{ width: "100%", maxWidth: "300px", margin: "0 3px" }}
            required
            id="outlined-required"
            label="Name"
            placeholder="Your name"
          />
          <TextField
            sx={{ width: "100%", maxWidth: "300px", margin: "0 3px" }}
            required
            id="outlined-required"
            label="Email"
            placeholder="Example@mail.com"
          />
        </Grid>
        <Grid
          width="100%"
          height="100%"
          paddingRight={{ xs: "30px" }}
          paddingLeft={{ xs: "30px", sm: "30px", md: "0" }}
        >
          <TextField
            id="outlined-multiline-static"
            label="Question"
            required
            multiline
            rows={4}
            fullWidth
            placeholder="Your question"
          />
        </Grid>
        <Grid
          width="100%"
          item
          display="flex"
          margin="10px 0"
          justifyContent="flex-end"
          paddingRight={{ xs: "30px", sm: "30px", md: "30px" }}
        >
          <Button variant="contained" sx={{ backgroundColor: "#000" }}>
            Submit
          </Button>
        </Grid>
      </Grid>
      <Grid xs={6} item width="100%" margin="5px 0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d255281.2254473652!2d103.70416246659086!3d1.3139961238498645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x31da17c924b83da7%3A0x38c339c5bcfe7cb1!2s5%20Defu%20Lane%204%2C%20Singapura%20539409!3m2!1d1.3573537999999998!2d103.89618379999999!5e0!3m2!1sid!2sid!4v1677570048820!5m2!1sid!2sid"
          width="100%"
          height="92%"
          style={{ borderRadius: "10px" }}
          title="map"
          loading="lazy"
        ></iframe>
      </Grid>
      <Grid width="100%" textAlign="center">
        <Typography fontWeight="bold" fontStyle="italic" fontSize="12px">
          Copyrigth &copy; MYTH TECH 2022. All Rights Reserved
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Contact;
