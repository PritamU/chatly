import DeblurIcon from "@mui/icons-material/Deblur";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router";
import { navLinks } from "../../constants/data";
import { Mode } from "../../constants/types";

const Header = ({
  mode,
  setMode,
  isDrawerOpen,
  setIsDrawerOpen,
}: {
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleDarkModeToggle = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <React.Fragment>
      <AppBar
        sx={{
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            bgcolor: "primary.main",
            p: 0,
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              p: { xs: "0 1rem", sm: "4rem" },
              m: { xs: "1rem 0", sm: "0 auto" },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "70px",
              // maxWidth: "1280px",
            }}
          >
            <IconButton component={Link} to={"/"}>
              <Avatar sx={{ height: "3rem", width: "3rem" }} />
            </IconButton>
            <Stack
              direction={"row"}
              gap={"2rem"}
              alignItems={"center"}
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              {navLinks.map((item) => {
                const { route, title } = item;
                return (
                  <Typography
                    key={route}
                    variant="h6"
                    component={Link}
                    to={`${route}`}
                    sx={{ textDecoration: "none", color: "text.primary" }}
                  >
                    {title}
                  </Typography>
                );
              })}

              {/* <Link to={"/about"}>About</Link> */}
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton
                  size="large"
                  onClick={() => handleDarkModeToggle()}
                  sx={{ color: "text.primary" }}
                >
                  <DeblurIcon sx={{ fontSize: "2rem" }} />
                </IconButton>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              sx={{ display: { sm: "none" } }}
            >
              <IconButton
                size="large"
                onClick={() => handleDarkModeToggle()}
                sx={{ color: "text.primary" }}
              >
                <DeblurIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
              <IconButton
                size="large"
                sx={{
                  display: { xs: "flex", sm: "none" },
                  color: "text.primary",
                }}
                onClick={() => handleDrawerToggle()}
              >
                <MenuIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
