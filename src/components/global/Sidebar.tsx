import CloseIcon from "@mui/icons-material/Close";
import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router";
import { navLinks } from "../../constants/data";

const Sidebar = ({
  isDrawerOpen,
  setIsDrawerOpen,
}: {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleDrawerToggle = (value: boolean) => {
    setIsDrawerOpen(value);
  };

  return (
    <Drawer
      anchor="right"
      // variant="persistent"
      open={isDrawerOpen}
      onClose={() => handleDrawerToggle(false)}
    >
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "primary.main",
            position: "relative",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: "2rem",
              right: "1.5rem",
              color: "secondary.main",
            }}
            onClick={() => handleDrawerToggle(false)}
          >
            <CloseIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
          <Stack
            direction={"column"}
            gap={"2rem"}
            alignItems={"center"}
            position={"absolute"}
          >
            {navLinks.map((item) => (
              <Typography
                key={item.route}
                variant="h5"
                component={Link}
                to={`${item.route}`}
                sx={{ textDecoration: "none", color: "text.primary" }}
                onClick={() => handleDrawerToggle(false)}
              >
                {item.title}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
