import { ArrowBack } from "@mui/icons-material";
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
import { useLocation, useNavigate } from "react-router";
import { RootState } from "../../redux/store";
import SocketConnectIcon from "./SocketConnectIcon";

const Header = () => {
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
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <Container
              sx={{
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
                <img
                  src="/chatly-logo.png"
                  alt="Chatly"
                  height={30}
                  width={150}
                />
              </Stack>
              <SocketConnectIcon />
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
              <Stack
                flexDirection={"row"}
                gap={".5rem"}
                alignItems={"center"}
                justifyContent={"space-between"}
                width={"100%"}
              >
                <Stack flexDirection={"row"} alignItems={"center"}>
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
                <SocketConnectIcon />
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
      )}
    </React.Fragment>
  );
};

export default Header;
