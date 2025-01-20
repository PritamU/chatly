import { ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router";

import { Box, Container, CssBaseline } from "@mui/material";

import { Mode } from "../constants/types";
import "../index.css";
import { darkTheme, lightTheme } from "../utils/theme";
import Footer from "./global/Footer";
import Header from "./global/Header";
import Sidebar from "./global/Sidebar";
import Home from "./Home";

function Layout() {
  const [mode, setMode] = useState<Mode>("dark");
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Helmet>
        <title>Pritam Upadhya</title>
        <meta
          name="description"
          content="Hi I’m Pritam Upadhya, a Full Stack developer based in Guwahati, India."
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Pritam Upadhya" />
        <meta
          property="og:description"
          content="Hi I’m Pritam Upadhya, a Full Stack developer based in Guwahati, India."
        />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
        <meta property="og:url" content="https://example.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pritam Upadhya" />
        <meta
          name="twitter:description"
          content="Hi I’m Pritam Upadhya, a Full Stack developer based in Guwahati, India."
        />
        <meta
          name="twitter:image"
          content="https://example.com/twitter-image.jpg"
        />
      </Helmet>
      <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Header
            mode={mode}
            setMode={setMode}
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
          />
          <Sidebar
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
          />
          <Box sx={{ bgcolor: "background.default" }}>
            <Container
              maxWidth="lg"
              sx={{
                bgcolor: "primary.main",
                minHeight: "calc(100vh - 102px)",
                mt: "102px",
                pt: { xs: "3rem", sm: "8rem" },
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Container>
          </Box>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Layout;
