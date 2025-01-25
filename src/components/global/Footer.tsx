import {
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useLocation } from "react-router";
import { socials } from "../../constants/data";

const Footer = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <React.Fragment>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        sx={{ display: isHome ? "flex" : "none" }}
      >
        <Stack
          sx={{
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <Divider sx={{ width: "100%", borderColor: "text.secondary" }} />
          <Container sx={{ py: "2rem" }}>
            <Stack rowGap={"1rem"}>
              <Stack flexDirection={"row"} gap={"1rem"} alignItems={"center"}>
                {socials.map((social) => {
                  return (
                    <IconButton
                      sx={{ color: "text.primary" }}
                      component={"a"}
                      key={social.title}
                      href={social.link}
                      target="_blank"
                    >
                      <social.icon />
                    </IconButton>
                  );
                })}
              </Stack>
              <Typography
                variant="body1"
                fontWeight={500}
                sx={{
                  color: "text.primary",
                  fontSize: "1rem",
                  textTransform: "uppercase",
                }}
              >
                {"\u00A9"} {new Date().getFullYear()} Pritam Upadhya
              </Typography>
            </Stack>
          </Container>
        </Stack>
      </Stack>
    </React.Fragment>
  );
};

export default Footer;
