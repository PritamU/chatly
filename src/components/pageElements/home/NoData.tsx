import { Stack, Typography } from "@mui/material";

const NoData = () => {
  return (
    <Stack
      sx={{ height: "100%", alignItems: "center", justifyContent: "center" }}
    >
      <Stack alignItems={"center"} gap={".5rem"}>
        <img src={"/notfound.png"} alt="Not Found" height={100} width={100} />
        <Typography variant="body1">Oops! No Users Online</Typography>
      </Stack>
    </Stack>
  );
};

export default NoData;
