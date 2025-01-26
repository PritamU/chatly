import { Circle } from "@mui/icons-material";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const SocketConnectIcon = () => {
  const { isSocketConnected, currentUser } = useSelector(
    (state: RootState) => state.user
  );
  return (
    <Stack direction={"row"} alignItems={"center"}>
      <Tooltip
        title={
          isSocketConnected
            ? `Logged In as ${currentUser?.name || "User"}`
            : `Disconnected From Server`
        }
      >
        <IconButton
          size="large"
          sx={{ color: isSocketConnected ? "whitesmoke" : "gray" }}
        >
          <Circle />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default SocketConnectIcon;
