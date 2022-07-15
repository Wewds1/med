import * as React from "react";
import {
  Button,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { boldRaleway, button, cardMedia, raleway } from "./styles";

const Register = () => {
  return (
    <Grid container spacing={4} id="register">
      {/* REGISTER AS DOCTOR */}
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: "flex" , borderRadius: "20px",}}>
            <CardContent sx={{ flex: 1, fontFamily: "Raleway" }}>
              <Typography component="h1" variant="h3" sx={boldRaleway}>
                Doctor?
              </Typography>
              <Typography variant="h5" paragraph sx={raleway}>
                Provide medical consultations for Patients!
              </Typography>
              <Button sx={button} href="/doctor_signup">
                Sign Up
              </Button>

              <Button sx={button} href="/doctor_signin">
                Sign In
              </Button>
            </CardContent>

            {/* Image */}
            <CardMedia
              component="img"
              sx={cardMedia}
              image="images/doctorK.png"
              alt="Doctor"
            />
          </Card>
        </CardActionArea>
      </Grid>

      {/* REGISTER AS PATIENT */}
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: "flex" , borderRadius: "20px",}}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h1" variant="h3" sx={boldRaleway}>
                Patient?
              </Typography>
              <Typography variant="h5" paragraph sx={raleway}>
                Book appointments and Consult with Doctors!
              </Typography>
              <Button sx={button} href="/patient_signup">
                Sign Up
              </Button>

              <Button sx={button} href="/patient_signin">
                Sign In
              </Button>
            </CardContent>

            {/* Image */}
            <CardMedia
              component="img"
              sx={cardMedia}
              image="images/patientregister.jpg"
              alt="Patient"
            />
          </Card>
        </CardActionArea>
      </Grid>
      
      {/* ADMIN LOGIN */}
        
    </Grid>
  );
};

export default Register;
