import { Stack, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "white",
      }}
    >
      <Stack alignItems={"center"} gap={".5rem"}>
        <img src={`/loading.gif`} alt="Loading" width="100px" height="100px" />
        <Typography variant="body1">Chatly is Loading...</Typography>
      </Stack>
    </Stack>
  );
};

export default Loading;
