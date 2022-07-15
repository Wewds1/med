import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { box, headerBox, headerPaper, raleway, subtitle } from "./styles";

const Header = () => {
  return (
    <Paper sx={headerPaper}>
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none", borderTop: "100px", borderBottom: "-105px"}}
          src={process.env.PUBLIC_URL + "images/home.jpg"}
          alt="MedMeet"
        />
        
      }
      <Box sx={box} />

      {/* Text above image */}
      <Grid container>
        <Grid item md={8}>
          <Box sx={headerBox}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
              sx={subtitle}
            >
              "Where Medical and Technology Meets!"
            </Typography>
            <Typography variant="h5" color="inherit" paragraph sx={raleway}>
               Consult with medical professionals from the comfort of your own home or via our 
               device because we care about your health.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
