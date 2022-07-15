import * as React from "react";
import { Link, Toolbar, Typography } from "@mui/material";
import { link, navbarToolbar, title, titleToolbar, picsss } from "./styles";
import { borderRadius } from "@mui/material/node_modules/@mui/system";

const Navbar = (props) => {
  const { sections } = props;

  return (
    <React.Fragment id="">
      {/* TITLE */}
      <Toolbar sx={titleToolbar}>
        <picsss
              
                marginTop="5px"
                marginLeft="10px"
                max-height="100%"
        >
          <img
         height = "150px"
         width  = "500px"
          src={process.env.PUBLIC_URL + "images/title.png"}
        />
        </picsss>
      </Toolbar>
      {/* <Toolbar sx={titleToolbar}>
        <Typography
          variant="h3"
          color="inherit"
          align="center"
          noWrap
          font ="Courier"
          sx={title}
          
        />
        >
          MEDMEET
        </Typography>
      </Toolbar> */}

    {/* LINKS TO VARIOUS SECTIONS */}
        <Toolbar component="nav" variant="dense" sx={navbarToolbar}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="h6"
            href={section.url}
            sx={link}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
};

export default Navbar;
