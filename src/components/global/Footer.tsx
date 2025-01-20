import {
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { socials } from "../../constants/data";

const Footer = () => {
  return (
    <React.Fragment>
      <Divider sx={{ width: "100%", borderColor: "text.secondary" }} />
      <Container maxWidth={"lg"} sx={{ py: { xs: "2rem", sm: "4rem" } }}>
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
              fontSize: { xs: "1rem", sm: "1.5rem" },
              textTransform: "uppercase",
            }}
          >
            {"\u00A9"} {new Date().getFullYear()} Pritam Upadhya
          </Typography>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
