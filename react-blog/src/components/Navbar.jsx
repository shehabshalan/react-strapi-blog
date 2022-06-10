import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Link to="/" style={{ color: "inherit" }}>
            <Typography variant="h6" noWrap component="div">
              Not a blog
            </Typography>
          </Link>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
