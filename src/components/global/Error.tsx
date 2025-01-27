import { Button, Stack, Typography } from "@mui/material";

const ErrorComponent = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack alignItems={"center"} gap={"1rem"}>
        <img src={`/error.svg`} alt="Error" width="100px" height="100px" />
        <Typography variant="body1" color="red">
          Oops! Some Error Occured.
        </Typography>
        <Button
          variant="contained"
          color="info"
          onClick={() => {
            window.location.replace("/");
          }}
        >
          Go Back Home
        </Button>
      </Stack>
    </Stack>
  );
};

export default ErrorComponent;
