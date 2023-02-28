import { Grid, Typography } from "@mui/material";
import React from "react";
import { listTierContent } from "utils/contents/tier";
import ReactCarousel, { AFTER, CENTER, BEFORE } from "react-carousel-animated";

const Tier = () => {
  return (
    <Grid
      id="tier"
      container
      width="100%"
      margin="10px 0"
      display="flex"
      justifyContent="center"
    >
      <Grid item width="100%" margin="10px 0">
        <Typography textAlign="center" fontStyle="italic" fontSize="24px">
          Pricing
        </Typography>
        <Typography textAlign="center" fontSize="16px">
          We have pricing module base on tier list
        </Typography>
      </Grid>
      <ReactCarousel
        data-testid="react-carousel"
        carouselConfig={{
          transform: {
            rotateY: {
              [BEFORE]: () => "rotateY(25deg)",
              [CENTER]: () => "rotateY(0deg)",
              [AFTER]: () => "rotateY(-25deg)",
            },
          },
        }}
        itemBackgroundStyle={{
          // backgroundColor: "#00d4ff",
          background:
            "linear-gradient(191deg, rgba(230,65,154,0.5131302521008403) 6%, rgba(93,93,185,0.7120098039215687) 28%, rgba(0,212,255,0.6223739495798319) 84%, rgba(230,65,154,0.5215336134453781) 94%)",
          borderRadius: "20px",
          padding: "10px",
          boxShadow: "8px 12px 14px -6px black",
          zIndex: "-1",
        }}
        carouselHeight="470px"
      >
        {listTierContent.map((val) => (
          <Grid item key={val.id} id="list-tier">
            <Typography textAlign="center" fontWeight="bold">
              {val.title}
            </Typography>
            {val.content.map((val, i) => (
              <Grid item key={i}>
                {val}
              </Grid>
            ))}
          </Grid>
        ))}
      </ReactCarousel>
    </Grid>
  );
};

export default Tier;
