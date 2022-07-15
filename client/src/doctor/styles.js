import { createTheme } from "@mui/material/styles";

const theme = createTheme();

export const container = {
  mt: "12vh",
  ml: "5vw",
  minHeight: "120vh",
  minWidth: "85vw",
  background: "linear-gradient(135deg, #dff6fe 30%, #f8b9c9  90%)",
  backgroundImage: `url('../images/102.jpg')`,
  backgroundPosition: "center",
  backgroundRepeat: "repeat-x",
  backgroundSize: "100%",
  [theme.breakpoints.down("md")]: {
    mt: "10vh",
    ml: "10vw",
    maxWidth: "95vw",
  },
  [theme.breakpoints.down("sm")]: {
    ml: "12vw",
    maxWidth: "80vw",
  },
};
export const button = {
  backgroundColor: "#ff55a3",
  color: "#ffffff",
  margin: "1%", 
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#f8b9c9",
    color: "#3284be",
  },
  
};

export const paper = {
  p: 2,
  display: "flex",
  flexDirection: "column",
};

export const transparentPaper = {
  p: 2,
  display: "flex",
  flexDirection: "column",
  background: "transparent",
};

export const upload = {
  height: "100%",
  p: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const avatar = {
  width: 200,
  height: 200,
};

export const listItem = {
  border: "2px solid #0d7da5",
  borderRadius: "25px",
  margin: "2px",
  boxShadow: 2,
  backgroundColor: "#e6f7fd",
  "&:hover": {
    backgroundColor: "#d0f0fb",
    boxShadow: 3,
    border: "3px solid #0d7da5",
  },
};

export const typography = { fontWeight: "bold", color: "#063547" };

export const confirmButton = {
  backgroundColor: "#009900",
  "&:hover": {
    backgroundColor: "#006600",
  },
};

export const cancelButton = {
  backgroundColor: "#e60000",
  "&:hover": {
    backgroundColor: "#b30000",
  },
};

export const signinGrid = {
  backgroundImage: `url('images/signP.png')`,
  backgroundRepeat: "no-repeat",
  backgroundColor: (t) =>
    t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const signupGrid = {
  backgroundImage: `url("images/Consultation.png")`,
  backgroundRepeat: "no-repeat",
  backgroundColor: (t) =>
    t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const box = {
  my: 8,
  mx: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const controls = {
  top: "auto",
  bottom: 0,
  backgroundColor: "#021117",
  alignItems: "center",
};

export const controlsToolbar = {
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "0",
    marginLeft: "0",
  },
};
