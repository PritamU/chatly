import { ArrowBack } from "@mui/icons-material";
import DeblurIcon from "@mui/icons-material/Deblur";
import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router";
import { navLinks } from "../../constants/data";
import { Mode } from "../../constants/types";
import { RootState } from "../../redux/store";

const Header = ({
  mode,
  setMode,
}: {
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
}) => {
  const handleDarkModeToggle = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
  const location = useLocation();
  const navigate = useNavigate();
  const { chatUser } = useSelector((state: RootState) => state.user);
  return (
    <React.Fragment>
      {location.pathname === "/" ? (
        <AppBar
          sx={{
            boxShadow: "none",
            flexDirection: "row",
            justifyContent: "center",
            bgcolor: "transparent",
          }}
        >
          <Toolbar
            sx={{
              bgcolor: "primary.main",
              p: 0,
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <Container
              sx={{
                p: "0 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "70px",
                // maxWidth: "1280px",
              }}
            >
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                gap=".5rem"
              >
                <Typography
                  sx={{ textDecoration: "none", color: "primary.light" }}
                  variant="body1"
                  component={Link}
                  to={"/"}
                >
                  Chatly
                </Typography>
              </Stack>
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
                  sx={{ color: "primary.light" }}
                >
                  <DeblurIcon sx={{ fontSize: "2rem" }} />
                </IconButton>
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar
          sx={{
            boxShadow: "none",
            flexDirection: "row",
            justifyContent: "center",
            bgcolor: "transparent",
          }}
        >
          <Toolbar
            sx={{
              bgcolor: "primary.main",
              p: "0px !important",
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                height: "70px",
                // maxWidth: "1280px",
              }}
            >
              <Stack flexDirection={"row"} gap={".5rem"} alignItems={"center"}>
                <IconButton
                  onClick={() => navigate("/")}
                  sx={{ color: "whitesmoke" }}
                >
                  <ArrowBack />
                </IconButton>
                <Typography
                  variant="h6"
                  color="whitesmoke"
                  textTransform={"capitalize"}
                >
                  {chatUser?.name || "Start a Conversation"}
                </Typography>
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
      )}
    </React.Fragment>
  );
};

export default Header;
