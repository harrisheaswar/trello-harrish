import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import TrelloLogo from "../assets/Trello-logo.png";

const Header = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          width: "100%",
          height: "4rem",
          fontSize: "1.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Toolbar>
          <Box sx={{ width: "5rem", height: "100%" }}>
            <img
              src={TrelloLogo}
              style={{ width: "120%", height: "auto", color: "white" }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
