import * as React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import {
  box,
  description,
  aboutPaper,
  subtitle,
  raleway,
  headerBox,
} from "./styles";

const About = () => {
  return (
    <div id="about">
      <Typography
        component="h1"
        variant="h5"
        color="inherit"
        align="center"
        gutterBottom
        sx={description}
      >
        {/* For patients who don't want to wait in long lines to make doctor appointments and for 
        medical professionals who prefer to consult with their patients at their convenience, 
        there is MEDMEET. */}
        <br />
        {/* <i>
          <b> Let's together bring a change in the medical industry!</b>
        </i>   */}
      </Typography>
      <Paper sx={aboutPaper}>
        {/* Increase the priority of the hero background image */}
        {
          // <img
          //   style={{ display: "none" }}
          //   src={process.env.PUBLIC_URL + "images/aboutdoctors.jpg"}
          //   alt="Doctors"
          // />
        }
        <Box sx={box} />

        {/* Text above image */}
        {/* <Grid container>
          <Grid item md={6}>
            <Box sx={headerBox}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
                sx={subtitle}
              >
                "Trusted Professionals"
              </Typography>
              <Typography variant="h5" color="inherit" paragraph sx={raleway}>
                Consult Now!
              </Typography>
            </Box>
          </Grid>
        </Grid> */}
      </Paper>
    </div>
  );
};

export default About;
