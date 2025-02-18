import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router";

import { Box, Container, CssBaseline, Toolbar } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import SocketManager from "../config/socketConfig";
import "../index.css";
import {
  setCurrentUser,
  setIsRevalidateCurrentUserUtil,
  setIsSocketConnected,
  setIsUserAuthLoading,
} from "../redux/slices/userSlice";
import { RootState } from "../redux/store";
import { UserInterface } from "../types";
import { lightTheme } from "../utils/theme";
import ErrorComponent from "./global/Error";
import Footer from "./global/Footer";
import Header from "./global/Header";
import Loading from "./global/Loading";
import Home from "./pageElements/home/Home";
import Messages from "./pageElements/messages/Messages";

function Layout() {
  const {
    isSocketConnected,
    isUserAuthLoading,
    currentUser,
    revalidateCurrentUserUtil,
  } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/user/auth`, {
        credentials: "include",
      });
      const data: { status: boolean; data: UserInterface; message: string } =
        await res.json();
      if (!data.status) {
        throw new Error(data.message);
      }
      dispatch(setCurrentUser({ data: data.data }));
    };
    try {
      dispatch(setIsUserAuthLoading(true));
      fetchCurrentUser();
    } catch (e) {
      let message = "Some Error Occured";
      if (e instanceof Error) {
        message = e.message;
      }
      console.log(message);
      dispatch(setCurrentUser({ data: null }));
    } finally {
      dispatch(setIsUserAuthLoading(false));
    }
  }, [isSocketConnected, dispatch, revalidateCurrentUserUtil]);

  // socket connector
  useEffect(() => {
    const socket = SocketManager.getInstance();
    try {
      socket.on("connect", () => {
        console.log("socket connected");
        dispatch(setIsSocketConnected(true));
      });
      socket.on("messageAlert", () => {
        dispatch(setIsRevalidateCurrentUserUtil());
      });
    } catch (e) {
      let message = "Some Error Occured";
      if (e instanceof Error) {
        message = e.message;
      }
      alert(message);
    }

    return () => {
      console.log("socket disconnect");
      SocketManager.disconnectInstance();
    };
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>Chatly</title>
        <meta name="description" content="Chat With Anonymous Users." />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Chatly" />
        <meta property="og:description" content="Chat With Anonymous Users." />
        <meta
          property="og:image"
          content="https://chatly.pritamupadhya.site/images/chatly-logo.png"
        />
        <meta property="og:url" content="https://chatly.pritamupadhya.site" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chatly" />
        <meta name="twitter:description" content="Chat With Anonymous Users." />
        <meta
          name="twitter:image"
          content="https://chatly.pritamupadhya.site/images/chatly-logo.png"
        />
      </Helmet>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <BrowserRouter>
          {isUserAuthLoading ? (
            <Loading />
          ) : (
            <>
              {!currentUser ? (
                <ErrorComponent />
              ) : (
                <>
                  <Header />
                  <Toolbar sx={{ margin: ".5rem" }} />
                  <Box sx={{ bgcolor: "whitesmoke" }}>
                    <Container
                      maxWidth="sm"
                      sx={{
                        bgcolor: "whitesmoke",
                        height: "calc(100vh - 102px)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "stretch",
                        padding: "0 !important",
                      }}
                    >
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/:userId" element={<Messages />} />
                      </Routes>
                    </Container>
                  </Box>
                  <Footer />
                </>
              )}
            </>
          )}
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Layout;
