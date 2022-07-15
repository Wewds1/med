import * as React from "react";
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./navbar";
import Header from "./header";
import Register from "./register";
import About from "./about";
import Footer from "./footer";
import { red } from "@mui/material/colors";


const sections = [

];

const theme = createTheme();

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg"  sx={{ backgroundColor: "#f9d5e5" } }>
        {/* NAVBAR COMPONENT - links to various sections*/}
        <Navbar sections={sections} />

        <main>
          {/* HEADER COMPONENT - image with tagline*/}
          <Register />
          {/* REGISTER COMPONENT - signup/signin for doctor/patient */}
          <Header />
          <br />
          <br />
          {/* ABOUT COMPONENT - about doctors */}
          <About />
          {/* FOOTER COMPONENT - contacts */}
          <Footer />
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
