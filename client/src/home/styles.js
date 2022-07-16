// NAVBAR SECTION
//* {
  //font-family: 'Gantari', sans-serif;
//}

import { areIntervalsOverlapping } from "date-fns";
import { transparentPaper } from "../patient/styles";

export const titleToolbar = {
  display: 'flex',
  marginLeft:"10px",
  position: "center",
};

export const picsss = {
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginTop: '20px',
  height: '100%',
  cursor: 'pointer',
};

export const title = {
  flex: 1,
  fontWeight: "bold",
  fontFamily: "Verdana",
};

export const navbarToolbar = {
  justifyContent: "space-between",
  overflowX: "auto",
  backgroundColor: "ebaac8",
};

export const link = {
  p: 1,
  flexShrink: 0,
  textDecoration: "none",
  color: "#1e90ff",
  fontWeight: "bold",
  textTransform: "uppercase",
  fontFamily: "Raleway",
  "&:hover": {
    backgroundColor: "#ff55a3",
    color: "#ffffff",
  },
  borderRadius: "20px",
};


// HEADER SECTION

export const headerPaper = {
  position: "relative",
  backgroundColor: "#e06377",
  color: "#fff",
  mb: '4',
  marginTop: "35px",
  marginBottom: "-65px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundImage: `url('images/home.jpg')`,
};

export const headerBox = {
  position: "relative",
  p: { xs: 5, md: 15 },
  pr: { md: 0 },
};

export const raleway = {
  fontFamily: "Raleway",
};

// REGISTER SECTION

export const button = {
  backgroundColor: "#ff7c52",
  color: "#ffffff",
  margin: "1%",
  fontFamily: "Raleway",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "red",
    color: "#ffffff",
  },
  
};

export const cardMedia = {
  width: 200,
  height: 220,
  display: { xs: "none", sm: "block" },

};

export const boldRaleway = {
  fontFamily: "Raleway",
  fontWeight: "bold",
  borderRadius: "20px",
};

// ABOUT SECTION

export const description = {
  fontFamily: "Raleway",
  marginBottom: "3vh",
};

export const aboutPaper = {
  position: "relative",
  backgroundColor: "grey.800",
  color: "#000000",
  mb: 4,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundImage: `url('images/aboutdoctors.jpg')`,
  
};

export const box = {
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,.1)",
};

export const subtitle = {
  fontFamily: "Raleway",
  fontWeight: "bold",
  fontStyle: "italic",
};

// TESTIMONIALS SECTION

export const message = {
  fontFamily: "Raleway",
  fontStyle: "italic",
};

export const testimonialsTitle = {
  fontFamily: "Raleway",
  paddingBottom: "2%",
  fontStyle: "italic",
  fontWeight: "bold",
};

export const card = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

// FOOTER SECTION

export const footerBox = {
  py: 0.2,
  backgroundColor: "#d099bc",
  color: "#ffffff",
};

export const iconButton = {
  color: "#ffffff",
  "&:hover": { fontWeight: "bold" },
};

export const footerTitle = {
  mt: 1,
  fontFamily: "Raleway",
  fontWeight: "bold",
};

export const sendButton = {
  color: "#3284be",
  backgroundColor: "#ffffff",
  fontFamily: "Raleway",
  fontWeight: "bold",
};
