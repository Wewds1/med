import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {
  footerBox,
  footerTitle,
  iconButton,
  raleway,
  sendButton,
} from "./styles";

const Copyright = () => {
  return (
    <Typography variant="body2" color="#ffffff" align="center" sx={raleway}>
      {"Copyright © "} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box component="footer" sx={footerBox} id="contact">
      {/* COPYRIGHT */}
      <Container maxWidth="lg">
        <Copyright />
      
        
       

        <Grid container>
         {/* CONNECT WITH US */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6"  gutterBottom sx={footerTitle}>
            Developed by TechTalk  

              </Typography>
            
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={footerTitle}>
            MEDMEET
            </Typography>
            <IconButton href="https://www.facebook.com/kuya.mo.steven" sx={iconButton}>
              <FacebookIcon/>
            </IconButton>
            
        
          </Grid>

          {/* CONTACTS */}
          <Grid xs={12} md={4}>
            
            <Typography variant="h6" gutterBottom sx={footerTitle}>
              Contact us
            </Typography>
            <IconButton href="/admin_signin" sx={iconButton}>
              <EmailIcon />
              <Typography variant="body2">
                daveallenborja@gmail.com{" "}
              </Typography>
            </IconButton>
            <IconButton href="" sx={iconButton}>
              <PhoneIcon />
              <Typography variant="body2"> +63 945 492 2465 </Typography>
            </IconButton>
            
          </Grid>

          {/* NEWSLETTER SUBSCRIPTION */}
         
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
