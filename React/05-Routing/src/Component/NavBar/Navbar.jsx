import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import React from "react";
import { useNavigate, Link } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="static" color="inherit">
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >

            <Typography
              onClick={() => navigate("/")}
              sx={{
                cursor: "pointer",
              }}
              variant="h6"
              color="inherit"
              component="div"
              fontWeight={"bold"}
            >
              Animesh Raj
            </Typography>

            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>

              <Typography
                sx={{
                  cursor: "pointer",
                  textDecoration: 'none'
                }}
                variant="h6"
                color="inherit"
                component={Link}
                fontWeight={"bold"}
                to={"/"}
              >
                Home
              </Typography>

              <Typography
                sx={{
                  cursor: "pointer",
                  textDecoration: 'none'
                }}
                variant="h6"
                color="inherit"
                component={Link}
                fontWeight={"bold"}
                to={"/project"}
              >
                  Project
              </Typography>

              <Typography
                sx={{
                  cursor: "pointer",
                  textDecoration: 'none'
                }}
                variant="h6"
                color="inherit"
                component={Link}
                fontWeight={"bold"}
                to={"/skills"}
              >
                  Skills
              </Typography>

              <Typography
                sx={{
                  cursor: "pointer",
                  textDecoration: 'none'
                }}
                variant="h6"
                color="inherit"
                component={Link}
                fontWeight={"bold"}
                to={"/contact"}
                
              >
                  Contact
              </Typography>
              

              <IconButton>
                <Avatar
                  src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE="
                  sx={{ width: 40, height: 40 }}
                />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}